import { Eye, MessageSquare, Heart } from "lucide-react";

import blogImage1 from "@/assets/blog-1.webp";
import blogImage2 from "@/assets/blog-2.webp";
import blogImage3 from "@/assets/blog-3.webp";
import blogImage4 from "@/assets/blog-4.webp";

const blogPosts = [
  {
    id: 1,
    author: "Profª. Débora",
    date: "26 de dez. de 2025",
    readTime: "8 min de leitura",
    title: "Mitos e Verdades sobre o Ensino a Distância da FASUL: Como funciona e suas vantagens para sua carreira?",
    image: blogImage1,
    views: 0,
    comments: 0,
  },
  {
    id: 2,
    author: "Prof. Maurício",
    date: "26 de dez. de 2025",
    readTime: "11 min de leitura",
    title: "Guia Completo do Vestibular ao Diploma e Suas Oportunidades de Carreira",
    image: blogImage2,
    views: 0,
    comments: 0,
  },
  {
    id: 3,
    author: "Profª. Vera Lúcia",
    date: "26 de dez. de 2025",
    readTime: "5 min de leitura",
    title: "Não Estude no Escuro: Por Que Saber QUEM São Seus Professores Define o Valor do Seu Diploma FASUL",
    image: blogImage3,
    views: 0,
    comments: 0,
  },
  {
    id: 4,
    author: "Prof. Maurício",
    date: "26 de dez. de 2025",
    readTime: "6 min de leitura",
    title: "A Escolha Inteligente para o Seu Futuro com Nota Máxima no MEC e Preço Fixo no EaD",
    image: blogImage4,
    views: 0,
    comments: 0,
  },
];

const Blog = () => {
  return (
    <section className="pt-10 pb-20 bg-[#1E2842]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blog de Informações
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Dicas de carreira, tendências de mercado e tudo o que você precisa saber para tomar as melhores decisões para o seu futuro profissional
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group relative rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <div className="aspect-[4/5] relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  {/* Author Info */}
                  <div className="text-white">
                    <p className="font-semibold text-sm">{post.author}</p>
                    <p className="text-xs text-white/90">
                      {post.date} · {post.readTime}
                    </p>
                  </div>

                  {/* Title and Stats */}
                  <div>
                    <h3 className="text-white font-semibold text-sm leading-tight mb-4">
                      {post.title}
                    </h3>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-gray-300 text-xs">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {post.comments}
                        </span>
                      </div>
                      <Heart className="w-5 h-5 text-red-400 hover:text-red-500 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
