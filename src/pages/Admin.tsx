import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Settings, 
  LogOut,
  Plus,
  Trash2,
  Edit
} from 'lucide-react';
import { clsx } from 'clsx';
import { Inquiry, MenuItem } from '../types';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchInquiries();
      fetchMenus();
      fetchPosts();
    }
  }, [isLoggedIn]);

  const fetchInquiries = async () => {
    try {
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      setInquiries(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchMenus = async () => {
    try {
      const res = await fetch('/api/menu');
      const data = await res.json();
      setMenus(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog');
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    try {
      await fetch(`/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      fetchInquiries();
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">관리자 로그인</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">비밀번호</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 outline-none focus:border-brand-green"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <button type="submit" className="w-full btn-primary py-3">로그인</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-200 hidden md:flex flex-col">
        <div className="p-6 border-b border-stone-100">
          <h2 className="text-xl font-bold text-brand-green">우리밀 관리자</h2>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {[
            { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: '대시보드' },
            { id: 'menu', icon: <Calendar size={20} />, label: '식단 관리' },
            { id: 'inquiries', icon: <MessageSquare size={20} />, label: '문의 내역' },
            { id: 'blog', icon: <FileText size={20} />, label: '블로그 관리' },
            { id: 'settings', icon: <Settings size={20} />, label: '사이트 설정' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={clsx(
                'w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                activeTab === item.id ? 'bg-brand-green text-white' : 'text-stone-600 hover:bg-stone-100'
              )}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-stone-100">
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            로그아웃
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 md:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold">
            {activeTab === 'dashboard' && '대시보드'}
            {activeTab === 'menu' && '식단 관리'}
            {activeTab === 'inquiries' && '문의 내역'}
            {activeTab === 'blog' && '블로그 관리'}
            {activeTab === 'settings' && '사이트 설정'}
          </h1>
          {activeTab !== 'dashboard' && activeTab !== 'settings' && activeTab !== 'inquiries' && (
            <button className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
              <Plus size={18} /> 추가하기
            </button>
          )}
        </header>

        <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8">
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-stone-50 p-6 rounded-2xl">
                <div className="text-stone-500 text-sm mb-2">총 문의 건수</div>
                <div className="text-3xl font-bold">{inquiries.length}건</div>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl">
                <div className="text-stone-500 text-sm mb-2">등록된 식단</div>
                <div className="text-3xl font-bold">{menus.length}개</div>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl">
                <div className="text-stone-500 text-sm mb-2">대기 중인 문의</div>
                <div className="text-3xl font-bold">{inquiries.filter(i => i.status === 'pending').length}건</div>
              </div>
            </div>
          )}

          {activeTab === 'menu' && (
            <div className="space-y-4">
              <p className="text-stone-500">주간 식단표를 관리할 수 있습니다.</p>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-100">
                    <th className="py-4 font-bold">날짜</th>
                    <th className="py-4 font-bold">메인 메뉴</th>
                    <th className="py-4 font-bold">칼로리</th>
                    <th className="py-4 font-bold">관리</th>
                  </tr>
                </thead>
                <tbody>
                  {menus.map((menu) => (
                    <tr key={menu.id} className="border-b border-stone-50">
                      <td className="py-4">{menu.date} ({menu.day})</td>
                      <td className="py-4">{menu.main}</td>
                      <td className="py-4">{menu.calories}</td>
                      <td className="py-4">
                        <div className="flex gap-2">
                          <button className="p-2 text-stone-400 hover:text-brand-green"><Edit size={18} /></button>
                          <button className="p-2 text-stone-400 hover:text-red-500"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {menus.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-10 text-center text-stone-400">등록된 식단이 없습니다.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <p className="text-stone-500">고객님들의 문의 내역을 확인하고 관리합니다.</p>
              <div className="space-y-4">
                {inquiries.map((inquiry) => (
                  <div key={inquiry.id} className="p-6 border border-stone-100 rounded-2xl hover:border-brand-green transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="inline-block px-2 py-1 bg-stone-100 rounded text-xs font-bold text-stone-500 mb-2">{inquiry.type}</span>
                        <h4 className="font-bold">{inquiry.name} {inquiry.company ? `(${inquiry.company})` : ''}</h4>
                      </div>
                      <span className="text-xs text-stone-400">{new Date(inquiry.createdAt).toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-stone-600 mb-4">
                      {inquiry.message}
                    </p>
                    <div className="flex justify-between items-center">
                      <select 
                        value={inquiry.status} 
                        onChange={(e) => handleStatusUpdate(inquiry.id, e.target.value)}
                        className={clsx(
                          "text-xs font-bold px-2 py-1 rounded outline-none",
                          inquiry.status === 'pending' ? "text-orange-500 bg-orange-50" : 
                          inquiry.status === 'contacted' ? "text-blue-500 bg-blue-50" : "text-green-500 bg-green-50"
                        )}
                      >
                        <option value="pending">대기 중</option>
                        <option value="contacted">연락 완료</option>
                        <option value="completed">처리 완료</option>
                      </select>
                      <div className="flex gap-4 text-xs">
                        <span className="text-stone-400">{inquiry.phone}</span>
                        <span className="text-stone-400">{inquiry.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {inquiries.length === 0 && (
                  <div className="py-20 text-center text-stone-400">문의 내역이 없습니다.</div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'blog' && (
            <div className="space-y-4">
              <p className="text-stone-500">블로그 포스트를 관리할 수 있습니다.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <div key={post.id} className="p-6 border border-stone-100 rounded-2xl flex gap-4">
                    <img src={post.image} alt="" className="w-24 h-24 object-cover rounded-xl" />
                    <div className="flex-grow">
                      <div className="text-xs font-bold text-brand-green mb-1">{post.category}</div>
                      <h4 className="font-bold mb-2 line-clamp-1">{post.title}</h4>
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xs text-stone-400">{post.date}</span>
                        <div className="flex gap-2">
                          <button className="p-1 text-stone-400 hover:text-brand-green"><Edit size={16} /></button>
                          <button className="p-1 text-stone-400 hover:text-red-500"><Trash2 size={16} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {posts.length === 0 && (
                  <div className="col-span-2 py-20 text-center text-stone-400">등록된 포스트가 없습니다.</div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-xl space-y-8">
              <div>
                <h3 className="font-bold mb-4">기본 정보 설정</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">대표 번호</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-stone-200" defaultValue="1588-0000" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">대표 이메일</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-stone-200" defaultValue="contact@woorimil.com" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4">디자인 테마</h3>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-green border-4 border-white shadow-sm cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-emerald-600 cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-stone-800 cursor-pointer"></div>
                </div>
              </div>
              <button className="btn-primary w-full">설정 저장하기</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
