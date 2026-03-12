import { motion } from 'motion/react';
import { Truck, Briefcase, Calendar, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Users size={40} />,
      title: "단체 급식 (Group Meal)",
      desc: "기업, 관공서, 학교 등 대규모 인원을 위한 맞춤형 위탁 급식 서비스입니다. 영양사가 설계한 균형 잡힌 식단을 제공합니다.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Briefcase size={40} />,
      title: "오피스 도시락 (Office Lunch)",
      desc: "바쁜 직장인들을 위한 고품격 수제 도시락입니다. 매일 다른 메뉴로 질리지 않는 즐거운 점심 시간을 선사합니다.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Truck size={40} />,
      title: "정기 배송 (Subscription)",
      desc: "가정이나 소규모 사무실을 위한 정기 배송 서비스입니다. 원하는 요일과 시간에 맞춰 신선하게 배달해 드립니다.",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="heading-lg text-brand-green mb-6">서비스 안내</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            우리밀은 고객님의 다양한 요구에 맞춘 전문적인 케이터링 솔루션을 제공합니다.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
            >
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-3xl shadow-xl aspect-video object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2">
                <div className="text-brand-green mb-6">{service.icon}</div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-stone-600 text-lg leading-relaxed mb-8">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-10">
                  <li className="flex items-center gap-2 text-stone-700">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                    철저한 위생 관리 시스템
                  </li>
                  <li className="flex items-center gap-2 text-stone-700">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                    전문 영양사의 맞춤 식단 구성
                  </li>
                  <li className="flex items-center gap-2 text-stone-700">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                    친환경 용기 및 포장재 사용
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
