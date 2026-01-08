import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import valdireneLima from "@/assets/valdirene-lima.png";
import penelopeVitoria from "@/assets/penelope-vitoria.png";
import gideoniAlves from "@/assets/gideoni-alves.png";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Faculdade excelente. Atendimento da secretaria nota 1000! Suporte dos tutores e coordenação incrível, sempre prontos para prestar um atendimento diferenciado...essa eu indico 📚🎓",
    name: "Valdirene Lima",
    course: "Aluna Fasul",
    photo: valdireneLima,
    scale: 1,
    link: "https://share.google/IRVxJgsCFPx3ZOyRA",
  },
  {
    id: 2,
    quote:
      "O Curso de Gestão de Marketing tem sido muito bom, com professores preparados e conteúdos relevantes. Também inclui atividades práticas que nos ajudam a nos aprofundar no estudo. Indico a Fasul!! 🥳",
    name: "Penélope Vitória",
    course: "Gestão de Marketing",
    photo: penelopeVitoria,
    scale: 1,
    link: "https://share.google/SYoPpQ5g57AL5aNvr",
  },
  {
    id: 3,
    quote:
      "Depois de pesquisar muito, encontrei a Fasul Educacional que me atende em tudo que preciso para estudar online, suporte, conteúdo de qualidade máxima no MEC, é melhor faculdade hoje!!",
    name: "Gideoni Alves",
    course: "Aluno Fasul",
    photo: gideoniAlves,
    scale: 1,
    link: "https://share.google/geVcYbF7ptIgNtpX0",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="depoimentos" className="pt-9 pb-12 md:pt-[72px] md:pb-24 bg-[#1e2842] relative" style={{ marginTop: "15px" }}>
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            CARREIRAS QUE <span className="text-cyan-light">DECOLARAM</span>.
          </h2>
          <p className="text-sm sm:text-lg text-white/90 max-w-3xl mx-auto">
            Veja o que nossos alunos dizem sobre a experiência Fasul.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Seta esquerda */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 lg:-translate-x-12 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white/70 hover:text-white"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Seta direita */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 lg:translate-x-12 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white/70 hover:text-white"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <a 
            href={currentTestimonial.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-effect rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl animate-fade-in block cursor-pointer hover:scale-[1.02] transition-transform duration-300" 
            key={currentTestimonial.id}
          >
            <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-cyan-light mb-4 sm:mb-6" />
            <p className="text-base sm:text-xl lg:text-2xl text-white mb-5 sm:mb-8 leading-relaxed italic font-light">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex flex-col items-center gap-4 border-t border-white/20 pt-5 sm:pt-8">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-cyan-light overflow-hidden">
                <img
                  src={currentTestimonial.photo}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                  style={{ transform: `scale(${currentTestimonial.scale})` }}
                />
              </div>
              <p className="text-white font-bold text-base sm:text-xl">{currentTestimonial.name}</p>
            </div>
          </a>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-cyan-light" : "w-2 bg-white/40"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
