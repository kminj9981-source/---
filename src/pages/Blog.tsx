import { motion } from 'motion/react';

const posts = [
  {
    title: "우리밀이 사용하는 친환경 농산물 이야기",
    excerpt: "건강한 식탁의 시작은 건강한 땅에서 자란 식재료부터입니다. 우리밀이 고집하는 친환경 농산물 원칙을 소개합니다.",
    date: "2026.03.10",
    category: "브랜드 스토리",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "봄철 면역력을 높여주는 제철 음식 5가지",
    excerpt: "환절기 건강 관리를 위해 꼭 챙겨 먹어야 할 봄 제철 나물과 식재료 정보를 영양사가 직접 알려드립니다.",
    date: "2026.03.05",
    category: "영양 정보",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "우리밀, 2026 우수 급식 업체 선정 소식",
    excerpt: "고객 여러분의 성원에 힘입어 우리밀이 올해의 우수 급식 업체로 선정되었습니다. 감사의 마음을 담아 이벤트를 준비했습니다.",
    date: "2026.02.28",
    category: "공지사항",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-lg text-brand-green mb-6">우리밀 소식</h1>
          <p className="text-stone-500">우리밀의 새로운 소식과 유익한 건강 정보를 전해드립니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-green">
                  {post.category}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-brand-green transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-stone-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="text-xs text-stone-400 font-medium">{post.date}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
