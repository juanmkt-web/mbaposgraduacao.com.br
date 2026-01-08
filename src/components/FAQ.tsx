import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "A Pós-Graduação é reconhecida e o certificado é válido?",
    answer:
      "Sim! A FASUL é credenciada pelo MEC com nota máxima (5). Todos os nossos Cursos de Pós-Graduação são reconhecidos nacionalmente e o certificado tem validade em todo o território brasileiro, sendo aceito em concursos públicos, progressão de carreira e para fins acadêmicos.",
  },
  {
    question: "Quanto tempo leva para concluir a Pós-Graduação?",
    answer:
      "Você escolhe o ritmo de estudos e pode concluir de forma rápida, com flexibilidade para estudar quando e onde quiser. Assim você avança sem travar sua rotina de trabalho e família.",
  },
  {
    question: "Como funciona a matrícula e quando posso começar?",
    answer:
      "A matrícula é simples e rápida. Você envia seus dados, confirma a inscrição e, após a liberação, já pode iniciar os estudos e acessar a plataforma com suporte ao aluno.",
  },
  {
    question: "É necessário fazer TCC para concluir a Pós-Graduação?",
    answer:
      "Não é obrigatório. Na FASUL, oferecemos a opção de conclusão sem TCC, através de avaliações e atividades ao longo do curso. Isso permite que você finalize sua especialização de forma mais ágil e prática.",
  },
  {
    question: "Como funciona o pagamento e quais as formas disponíveis?",
    answer:
      "Oferecemos diversas formas de pagamento: cartão de crédito (parcelado, ou a vista), boleto bancário e PIX.",
  },
];

const FAQ = () => {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2842] mb-4">PERGUNTAS FREQUENTES/h2>
            <p className="text-gray-600 text-lg">Tire suas dúvidas sobre a Pós-Graduação EaD da FASUL</p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left text-[#1E2842] font-medium text-base md:text-lg hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-5">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
