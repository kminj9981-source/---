import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="heading-lg mb-8 text-brand-green">우리밀 이야기</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            우리밀은 '가장 한국적인 것이 가장 세계적인 것'이라는 믿음으로 시작되었습니다. 
            우리 땅에서 자란 건강한 식재료로 정직하게 만든 식사를 통해 
            고객님의 일상에 활력을 불어넣고자 합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">지역 농가와의 상생</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              우리는 전국 각지의 농가와 직접 계약을 맺어 신선하고 안전한 식재료를 공급받습니다. 
              유통 단계를 줄여 농가에는 정당한 가치를, 고객님께는 합리적인 가격과 
              최상의 신선도를 보장합니다.
            </p>
            <div className="bg-stone-50 p-8 rounded-2xl border-l-4 border-brand-green">
              <p className="italic text-stone-700">
                "단순한 끼니가 아닌, 마음을 나누는 식탁을 만듭니다."
              </p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop"
            alt="Organic Farm"
            className="rounded-3xl shadow-lg"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="bg-brand-green/5 rounded-3xl p-12 md:p-20 text-center">
          <h2 className="text-3xl font-bold mb-12">품질 및 위생 인증</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              "산청군 착한 가격 업소",
              "친환경 농산물 사용",
              "우수 급식 업체 선정"
            ].map((cert, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 border border-stone-100">
                  <span className="text-brand-green font-bold text-xs">CERTIFIED</span>
                </div>
                <span className="font-medium text-stone-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
