import { UtensilsCrossed, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-brand-green p-2 rounded-lg text-white">
              <UtensilsCrossed size={20} />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">우리밀</span>
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            정성을 담은 프리미엄 단체 급식 및 도시락 배달 전문 브랜드 우리밀입니다. 
            신선한 지역 식재료와 건강한 조리법으로 고객님의 식탁을 책임집니다.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-green transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-brand-green transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-brand-green transition-colors"><MessageCircle size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">서비스</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services" className="hover:text-white transition-colors">단체 급식 납품</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">오피스 도시락</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">정기 배송 서비스</Link></li>
            <li><Link to="/menu" className="hover:text-white transition-colors">주간 식단표</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">회사소개</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">브랜드 스토리</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">품질 인증</Link></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">공지사항</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">오시는 길</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">고객센터</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex flex-col">
              <span className="text-stone-500 text-xs uppercase tracking-wider">대표번호</span>
              <span className="text-lg text-white font-medium">010-5323-6878</span>
            </li>
            <li className="flex flex-col">
              <span className="text-stone-500 text-xs uppercase tracking-wider">상담시간</span>
              <span>평일 오후 3시 ~ 5시</span>
            </li>
            <li className="flex flex-col">
              <span className="text-stone-500 text-xs uppercase tracking-wider">이메일</span>
              <span>kminj9911@naver.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
        <p>© 2026 우리밀 (Woori-mil). All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">이용약관</a>
          <a href="#" className="hover:text-white">개인정보처리방침</a>
        </div>
      </div>
    </footer>
  );
}
