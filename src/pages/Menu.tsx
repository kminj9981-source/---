import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuItem } from '../types';

export default function Menu() {
  const [currentWeek, setCurrentWeek] = useState('3월 3주차');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch('/api/menu');
        const data = await res.json();
        setMenuItems(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="heading-lg text-brand-green mb-4">주간 식단표</h1>
            <p className="text-stone-500">전문 영양사가 설계한 균형 잡힌 이번 주의 식단입니다.</p>
          </div>
          
          <div className="flex items-center gap-4 bg-stone-100 p-2 rounded-full">
            <button className="p-2 hover:bg-white rounded-full transition-colors"><ChevronLeft size={20} /></button>
            <span className="font-bold px-4 flex items-center gap-2">
              <CalendarIcon size={18} className="text-brand-green" />
              {currentWeek}
            </span>
            <button className="p-2 hover:bg-white rounded-full transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-stone-400">식단을 불러오는 중입니다...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {menuItems.length > 0 ? menuItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-stone-200 rounded-3xl overflow-hidden hover:border-brand-green transition-colors group"
              >
                <div className="bg-stone-50 p-4 text-center border-bottom border-stone-100 group-hover:bg-brand-green group-hover:text-white transition-colors">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-60">{item.day}요일</span>
                  <div className="text-xl font-bold">{item.date}</div>
                </div>
                <div className="p-6">
                  <div className="text-brand-green font-bold text-lg mb-4">{item.main}</div>
                  <div className="space-y-2 mb-6">
                    {item.sides.map((side, j) => (
                      <div key={j} className="text-sm text-stone-600 flex items-center gap-2">
                        <div className="w-1 h-1 bg-stone-300 rounded-full" />
                        {side}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-stone-100 text-xs text-stone-400 font-medium">
                    {item.calories}
                  </div>
                </div>
              </motion.div>
            )) : (
              <div className="col-span-1 md:col-span-5 py-20 text-center text-stone-400 border border-dashed border-stone-200 rounded-3xl">
                등록된 식단이 없습니다. 관리자 페이지에서 식단을 등록해주세요.
              </div>
            )}
          </div>
        )}

        <div className="mt-16 bg-stone-900 text-white p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-4">식단표가 필요하신가요?</h3>
            <p className="text-stone-400">
              이메일 주소를 남겨주시면 매주 업데이트되는 최신 식단표를 보내드립니다.
            </p>
          </div>
          <button className="btn-primary whitespace-nowrap">식단표 요청하기</button>
        </div>
      </div>
    </div>
  );
}

