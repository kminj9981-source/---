import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: '단체 급식',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xreyqnbp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('문의가 접수되었습니다. 곧 연락드리겠습니다.');
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          type: '단체 급식',
          message: ''
        });
      } else {
        throw new Error('전송 실패');
      }
    } catch (error) {
      console.error(error);
      alert('문의 전송 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="heading-lg text-brand-green mb-8">상담 및 예약</h1>
            <p className="text-xl text-stone-600 mb-12 leading-relaxed">
              우리밀의 프리미엄 서비스를 경험해보세요. <br />
              궁금하신 점을 남겨주시면 담당자가 신속하게 답변해 드립니다.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-brand-green/10 p-4 rounded-2xl text-brand-green">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">전화 상담</h4>
                  <p className="text-stone-600 font-bold text-lg">010-5323-6878</p>
                  <p className="text-stone-400 text-sm">평일 15:00 - 17:00 (주말/공휴일 휴무)</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-brand-green/10 p-4 rounded-2xl text-brand-green">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">이메일 문의</h4>
                  <p className="text-stone-600">kminj9911@naver.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-brand-green/10 p-4 rounded-2xl text-brand-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">본사 위치</h4>
                  <p className="text-stone-600">경상남도 산청군 산청읍 꽃봉산로 162번길 14 1층</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-3xl shadow-xl border border-stone-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-stone-700">이름 *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none transition-colors"
                    placeholder="성함을 입력해주세요"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-stone-700">회사/단체명</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none transition-colors"
                    placeholder="회사명을 입력해주세요"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-stone-700">이메일 *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none transition-colors"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-stone-700">연락처 *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none transition-colors"
                    placeholder="010-0000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-stone-700">문의 유형 *</label>
                <select
                  name="type"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none transition-colors appearance-none bg-white"
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                >
                  <option>단체 급식</option>
                  <option>오피스 도시락</option>
                  <option>정기 배송</option>
                  <option>기타 문의</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-stone-700">문의 내용 *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-brand-green outline-none transition-colors resize-none"
                  placeholder="상세한 문의 내용을 입력해주세요"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg">
                문의 보내기 <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
