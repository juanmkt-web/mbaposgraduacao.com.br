import { Quote } from "lucide-react";
import jamileAlves from "@/assets/jamile-alves.png";
import arnaldoAraujo from "@/assets/arnaldo-araujo.png";
import cleideSilva from "@/assets/cleide-silva.png";
import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "Na faculdade a gente vê muita teoria, mas quando chega um paciente pós-operado sentindo dor, bate o medo de mexer. Eu me sentia insegura. A especialização em Trauma me deu a 'mão firme' e o raciocínio clínico que faltava. Hoje recupero pacientes complexos na metade do tempo e cobro o dobro pela consulta.",
    name: "Jamile Alves",
    course: "Fisioterapia em Ortopedia e Traumatologia",
    photo: jamileAlves,
    scale: 1,
  },
  {
    id: 2,
    quote:
      "Eu era um bom programador, mas meus códigos viravam uma bagunça difícil de manter depois de um tempo. Eu vivia corrigindo bugs antigos. O curso de Engenharia de Software mudou minha mentalidade. Aprendi arquitetura e padrões de projeto de verdade. Hoje não apenas escrevo código, eu desenho soluções escaláveis e fui promovido a Tech Lead.",
    name: "Arnaldo de Araújo",
    course: "Especialização em Engenharia de Software",
    photo: arnaldoAraujo,
    scale: 1,
  },
  {
    id: 3,
    quote:
      "Eu entregava o projeto da casa, mas perdia dinheiro porque o cliente contratava outra pessoa para fazer o jardim. Percebi que estava deixando dinheiro na mesa. Com a especialização, passei a vender o conceito completo: a arquitetura integrada à natureza. Meu ticket médio por projeto subiu 40% porque agora entrego a obra toda.",
    name: "Cleide Silva",
    course: "Arquitetura da Paisagem",
    photo: cleideSilva,
    scale: 1,
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
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="glass-effect rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl animate-fade-in" key={currentTestimonial.id}>
            <Quote className="h-8 w-8 sm:h-12 sm:w-12 text-cyan-light mb-4 sm:mb-6" />
            <p className="text-base sm:text-xl lg:text-2xl text-white mb-5 sm:mb-8 leading-relaxed italic font-light">
              "{currentTestimonial.quote}"
            </p>
            <div className="flex items-center gap-4 sm:gap-6 border-t border-white/20 pt-5 sm:pt-8">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-cyan-light overflow-hidden">
                <img
                  src={currentTestimonial.photo}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                  style={{ transform: `scale(${currentTestimonial.scale})` }}
                />
              </div>
              <div className="text-white">
                <p className="font-bold text-base sm:text-xl">{currentTestimonial.name}</p>
                <p className="text-xs sm:text-sm opacity-90">{currentTestimonial.course}</p>
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
