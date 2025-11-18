import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const faqs = [
    {
      question: "Как я могу быть уверен, что мои средства используются правильно?",
      answer:
        "Мы публикуем ежемесячные финансовые отчёты с полной детализацией расходов. Все документы проходят независимый аудит. Вы можете в любой момент запросить информацию о конкретном проекте или получателе помощи.",
    },
    {
      question: "Какую сумму нужно пожертвовать?",
      answer:
        "Любая сумма имеет значение. Даже небольшое пожертвование может помочь конкретному человеку. Вы можете выбрать любую комфортную для вас сумму — от 100 рублей.",
    },
    {
      question: "Можно ли сделать регулярное пожертвование?",
      answer:
        "Да, вы можете настроить автоматические ежемесячные платежи любой суммы. Регулярная поддержка помогает нам планировать долгосрочные проекты и оказывать системную помощь.",
    },
    {
      question: "Получу ли я подтверждение о пожертвовании?",
      answer:
        "Да, после каждого пожертвования вы получите чек на электронную почту. Также мы вышлем справку для получения налогового вычета, если пожертвование превышает определённую сумму.",
    },
    {
      question: "Как я могу помочь, кроме денег?",
      answer:
        "Вы можете стать волонтёром, помогать в организации мероприятий, распространять информацию о фонде в социальных сетях или предоставить профессиональные услуги (юридические, медицинские и др.).",
    },
    {
      question: "Кому конкретно помогает фонд?",
      answer:
        "Мы помогаем семьям с детьми в трудной жизненной ситуации, детям-сиротам, пожилым людям, нуждающимся в медицинской помощи, и другим уязвимым категориям граждан.",
    },
    {
      question: "Можно ли сделать целевое пожертвование?",
      answer:
        "Да, при оформлении пожертвования вы можете указать конкретное направление помощи или проект, на который хотите направить средства.",
    },
    {
      question: "Как часто публикуются отчёты?",
      answer:
        "Мы публикуем краткие отчёты ежемесячно и полные аудированные отчёты ежеквартально и ежегодно. Все отчёты доступны в разделе 'Отчёты' на нашем сайте.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold">
              Часто задаваемые вопросы
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Ответы на самые популярные вопросы о работе нашего фонда
            </p>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;
