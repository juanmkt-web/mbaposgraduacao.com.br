import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background-new.png";

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden pt-[104px] pb-8 md:pt-[112px] md:pb-16">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:80%_2%]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 from-0% via-[#0f2341]/60 via-40% to-transparent to-80%"></div>
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

      <div className="container mx-auto px-4 py-4 md:py-12 relative z-10">
        <div className="max-w-2xl">
          <div className="text-white animate-fade-in">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-6 leading-tight"
              style={{
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              ACELERE SUA CARREIRA E <span className="text-accent"> CONQUISTE O MERCADO</span> EM TEMPO RECORDE.
            </h1>

            <p className="text-base sm:text-xl text-white/90 leading-relaxed mb-4 sm:mb-8">
              Chega de perder tempo com teorias longas. Nossa metodologia foca no que realmente importa para você
              crescer e ser notado rapidamente pelas empresas.
            </p>

            <div className="mb-4 sm:mb-8">
              <a
                href="https://www.fasuleducacional.edu.br/posgraduacao/cursos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/85 font-bold text-sm sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 animate-pulse-cta"
                >
                  QUERO CRESCER RÁPIDO <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </a>
            </div>

            <div className="flex flex-row gap-4 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-medium">
                  <span className="sm:hidden">Diploma MEC</span>
                  <span className="hidden sm:inline">Diploma Reconhecido MEC</span>
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-medium">
                  <span className="sm:hidden">+ 10 Mil Alunos</span>
                  <span className="hidden sm:inline">+ 10 mil Alunos Formados</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
