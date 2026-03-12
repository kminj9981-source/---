import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-stone-100">
        <div className="relative z-10 section-padding w-full max-w-7xl mx-auto text-stone-900">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-brand-green/10 backdrop-blur-sm border border-brand-green/20 rounded-full text-sm font-medium mb-6 text-brand-green">
              Premium Catering Service
            </span>
            <h1 className="heading-lg mb-6 leading-tight">
              사장님, <br />
              소중한 직원들의 <br />
              <span className="text-brand-green">식사를 배송합니다</span>
            </h1>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              임직원의 건강이 곧 기업의 경쟁력입니다. <br />
              우리밀은 신선한 식재료와 정성으로 사장님의 마음을 전합니다.
            </p>
            <div className="bg-white p-4 rounded-2xl mb-10 inline-block shadow-sm border border-stone-200">
              <div className="text-sm font-medium text-stone-500 mb-1">상담 시간: 평일 오후 3시 ~ 5시</div>
              <div className="text-xl font-bold text-brand-green">전화번호: 010.5323.6878</div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary flex items-center gap-2">
                상담 신청하기 <ArrowRight size={18} />
              </Link>
              <Link to="/menu" className="btn-outline border-brand-green text-brand-green hover:bg-brand-green hover:text-white">
                오늘의 식단 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">우리밀이 약속하는 3가지 가치</h2>
            <p className="text-stone-500">건강한 식문화를 선도하는 우리밀의 철학입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="text-brand-green" size={32} />,
                title: "기업 맞춤형 식단",
                desc: "임직원의 연령대와 선호도를 분석하여 매일 새로운 활력을 불어넣는 최적의 식단을 구성합니다."
              },
              {
                icon: <Clock className="text-brand-green" size={32} />,
                title: "정시 배송 원칙",
                desc: "점심 시간의 가치를 알기에, 단 1분의 오차도 허용하지 않는 철저한 배송 시스템을 운영합니다."
              },
              {
                icon: <ShieldCheck className="text-brand-green" size={32} />,
                title: "투명한 위생 관리",
                desc: "조리되는 모든 과정을 투명하게 관리하여 안심하고 드실 수 있습니다."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">기업을 위한 전문 급식 서비스</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              "대규모 사업장 위탁 급식 운영",
              "임직원 전용 프리미엄 수제 도시락",
              "정기적인 사내 행사 케이터링",
              "영양 설계 기반의 건강식 솔루션"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle2 className="text-brand-green" size={24} />
                <span className="text-lg font-medium text-stone-700">{item}</span>
              </div>
            ))}
          </div>
          <Link to="/services" className="btn-primary mt-12 inline-block">
            서비스 자세히 보기
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-green text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">지금 바로 무료 상담을 받아보세요</h2>
          <p className="text-stone-300 mb-10 text-lg">
            고객님의 예산과 인원, 선호도에 맞춘 최적의 식단 솔루션을 제안해 드립니다.
          </p>
          <Link to="/contact" className="bg-white text-brand-green px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-colors">
            상담 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
