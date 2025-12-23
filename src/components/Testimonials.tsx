import { Quote } from "lucide-react";
import gabrielaFernandes from "@/assets/gabriela-fernandes.png";
import juliaDeJesus from "@/assets/julia-de-jesus.png";
import mauricioBraga from "@/assets/mauricio-braga.png";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Na Engenharia, a teoria da faculdade é uma coisa, o campo é outra. Eu tinha insegurança de assumir projetos maiores. A especialização me deu a firmeza técnica que faltava. Hoje assino meus projetos e laudos sabendo exatamente o que estou fazendo, sem aquele frio na barriga.",
    name: "Gabriela Fernandes",
    course: "Especialização Em Engenharia Elétrica e Suas Técnicas",
    photo: gabrielaFernandes,
    scale: 1,
  },
  {
    id: 2,
    quote:
      "O mercado de personal tá lotado, e pra cobrar um valor justo você tem que entregar resultado rápido. O curso me ensinou a montar treinos com ciência de verdade, não 'achismo'. Meus alunos evoluem muito mais e minha agenda, que vivia buracos, agora tá cheia.",
    name: "Mauricio Braga",
    course: "Personal Training: Metodologia do Treinamento Personalizado",
    photo: mauricioBraga,
    scale: 1,
  },
  {
    id: 3,
    quote:
      "Trabalhar em indústria farmacêutica é pressão pura, qualquer erro custa caro. Eu precisava entender melhor as normas e a gestão da fábrica pra subir de cargo. O curso abriu minha visão: hoje consigo resolver problemas na linha de produção que antes me deixavam sem dormir.",
    name: "Julia de Jesus",
    course: "Mba Em Gestão Industrial Farmacêutica",
    photo: juliaDeJesus,
    scale: 1.23,
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
    <section id="depoimentos" className="py-12 md:py-24 bg-[#1e2842] relative" style={{ marginTop: "15px" }}>
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            CARREIRAS QUE <span className="text-cyan-light">DECOLARAM</span>.
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Veja o que nossos alunos dizem sobre a experiência Fasul.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="glass-effect rounded-3xl p-8 lg:p-12 shadow-2xl animate-fade-in" key={currentTestimonial.id}>
            <Quote className="h-12 w-12 text-cyan-light mb-6" />
            <p className="text-xl lg:text-2xl text-white mb-8 leading-relaxed italic font-light">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex items-center gap-6 border-t border-white/20 pt-8">
              <div className="w-20 h-20 rounded-full border-4 border-cyan-light overflow-hidden">
                <img
                  src={currentTestimonial.photo}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                  style={{ transform: `scale(${currentTestimonial.scale})` }}
                />
              </div>
              <div className="text-white">
                <p className="font-bold text-xl">{currentTestimonial.name}</p>
                <p className="text-sm opacity-90">{currentTestimonial.course}</p>
              </div>
            </div>
          </div>

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
