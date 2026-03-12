import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database('woorimil.db');

// Initialize Database Tables
db.exec(`
  CREATE TABLE IF NOT EXISTS menu (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    day TEXT,
    date TEXT,
    main TEXT,
    sides TEXT,
    calories TEXT,
    week TEXT
  );

  CREATE TABLE IF NOT EXISTS inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    company TEXT,
    email TEXT,
    phone TEXT,
    type TEXT,
    message TEXT,
    status TEXT DEFAULT 'pending',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    excerpt TEXT,
    content TEXT,
    date TEXT,
    category TEXT,
    image TEXT,
    author TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  
  // Menu API
  app.get('/api/menu', (req, res) => {
    const rows = db.prepare('SELECT * FROM menu ORDER BY date ASC').all();
    res.json(rows.map(row => ({ ...row, sides: JSON.parse(row.sides as string) })));
  });

  app.post('/api/menu', (req, res) => {
    const { day, date, main, sides, calories, week } = req.body;
    const info = db.prepare('INSERT INTO menu (day, date, main, sides, calories, week) VALUES (?, ?, ?, ?, ?, ?)')
      .run(day, date, main, JSON.stringify(sides), calories, week);
    res.json({ id: info.lastInsertRowid });
  });

  // Inquiries API
  app.get('/api/inquiries', (req, res) => {
    const rows = db.prepare('SELECT * FROM inquiries ORDER BY createdAt DESC').all();
    res.json(rows);
  });

  app.post('/api/inquiries', (req, res) => {
    const { name, company, email, phone, type, message } = req.body;
    const info = db.prepare('INSERT INTO inquiries (name, company, email, phone, type, message) VALUES (?, ?, ?, ?, ?, ?)')
      .run(name, company, email, phone, type, message);
    res.json({ id: info.lastInsertRowid });
  });

  app.patch('/api/inquiries/:id', (req, res) => {
    const { status } = req.body;
    db.prepare('UPDATE inquiries SET status = ? WHERE id = ?').run(status, req.params.id);
    res.json({ success: true });
  });

  // Blog API
  app.get('/api/blog', (req, res) => {
    const rows = db.prepare('SELECT * FROM blog_posts ORDER BY createdAt DESC').all();
    res.json(rows);
  });

  app.post('/api/blog', (req, res) => {
    const { title, excerpt, content, date, category, image, author } = req.body;
    const info = db.prepare('INSERT INTO blog_posts (title, excerpt, content, date, category, image, author) VALUES (?, ?, ?, ?, ?, ?, ?)')
      .run(title, excerpt, content, date, category, image, author);
    res.json({ id: info.lastInsertRowid });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
