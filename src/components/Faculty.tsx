import { ExternalLink } from "lucide-react";
import deboraLuzia from "@/assets/debora-luzia.avif";
import ricardoSoares from "@/assets/ricardo-soares.avif";
import veraFarias from "@/assets/vera-farias.avif";
import sergioSilva from "@/assets/sergio-silva.avif";
import paolaRodrigues from "@/assets/paola-rodrigues.avif";

const professors = [
  {
    name: "Doutora Débora Maria Moreno Luzia",
    image: paolaRodrigues,
    lattes: "http://lattes.cnpq.br/",
  },
  {
    name: "Mestre Maurício Ricardo Soares",
    image: sergioSilva,
    lattes: "http://lattes.cnpq.br/",
  },
  {
    name: "Doutora Vera Lúcia da Silva Farias",
    image: veraFarias,
    lattes: "http://lattes.cnpq.br/",
  },
  {
    name: "Mestre Sérgio Ferreira da Silva",
    image: ricardoSoares,
    lattes: "http://lattes.cnpq.br/",
  },
  {
    name: "Mestra Paola Marie Vitaca Rodrigues",
    image: deboraLuzia,
    lattes: "http://lattes.cnpq.br/",
  },
];

const Faculty = () => {
  return (
    <section className="pt-12 md:pt-24 pb-16 md:pb-32 gradient-animated relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 right-0 h-10 md:h-16 lg:h-20 rotate-180">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Corpo Docente de Excelência
            </h2>
            <p className="text-white/80 text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
              Nosso corpo docente é formado por professores mestres e doutores, com experiência prática e atuação
              acadêmica, garantindo ensino de qualidade, orientação completa e aprendizado aplicado à sua carreira.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {professors.map((professor, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-3 md:mb-4 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={professor.image}
                    alt={professor.name}
                    className="w-full h-40 md:h-56 lg:h-64 object-cover object-top rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-white font-semibold text-sm md:text-base lg:text-lg mb-2 leading-tight">
                  {professor.name}
                </h3>
                <a
                  href={professor.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-accent hover:text-accent/80 text-xs md:text-sm font-medium transition-colors underline underline-offset-2"
                >
                  <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                  Currículo Lattes
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1E2842"
          />
        </svg>
      </div>
    </section>
  );
};

export default Faculty;
