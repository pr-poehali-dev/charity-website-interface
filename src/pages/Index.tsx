import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const stats = [
    { value: '5,000+', label: 'Человек получили помощь', icon: 'Users' },
    { value: '150+', label: 'Завершённых проектов', icon: 'CheckCircle' },
    { value: '300+', label: 'Активных волонтёров', icon: 'Heart' },
    { value: '50млн ₽', label: 'Собрано пожертвований', icon: 'TrendingUp' },
  ];

  const projects = [
    {
      title: 'Помощь детям',
      description: 'Поддержка детей из многодетных и малообеспеченных семей',
      icon: 'Baby',
      color: 'text-blue-500'
    },
    {
      title: 'Медицинская помощь',
      description: 'Оплата лечения и реабилитации нуждающихся',
      icon: 'HeartPulse',
      color: 'text-red-500'
    },
    {
      title: 'Помощь пожилым',
      description: 'Социальная поддержка пенсионеров и одиноких людей',
      icon: 'Handshake',
      color: 'text-green-500'
    },
  ];

  const faqs = [
    {
      question: 'Как я могу помочь фонду?',
      answer: 'Вы можете сделать разовое или регулярное пожертвование, стать волонтёром или распространить информацию о нашей деятельности в социальных сетях.'
    },
    {
      question: 'Куда идут мои пожертвования?',
      answer: 'Все средства направляются напрямую на помощь нуждающимся. Мы публикуем подробные отчёты о расходовании средств ежемесячно в разделе "Отчёты".'
    },
    {
      question: 'Можно ли получить налоговый вычет?',
      answer: 'Да, при пожертвовании через наш фонд вы можете получить социальный налоговый вычет. Мы предоставим все необходимые документы.'
    },
    {
      question: 'Как я могу получить помощь от фонда?',
      answer: 'Свяжитесь с нами через форму обратной связи или позвоните по телефону. Мы рассмотрим вашу ситуацию и постараемся помочь.'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Вместе мы меняем мир к лучшему
              </h1>
              <p className="text-xl text-muted-foreground">
                Благотворительный фонд "Доброе сердце" помогает тем, кто нуждается в поддержке. 
                Каждый вклад делает чью-то жизнь лучше.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg">
                  <Link to="/donate">
                    <Icon name="Heart" size={20} className="mr-2" />
                    Пожертвовать
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg">
                  <Link to="/about">Узнать больше</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <Icon name={stat.icon as any} size={32} className="mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши направления</h2>
              <p className="text-muted-foreground">
                Мы работаем по нескольким направлениям, чтобы помочь максимальному количеству людей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon name={project.icon as any} size={40} className={project.color} />
                    <CardTitle className="mt-4">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
              <p className="text-muted-foreground">
                Ответы на популярные вопросы о нашей деятельности
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="py-12 text-center space-y-6">
                <Icon name="Heart" size={48} className="mx-auto text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold">Ваша помощь меняет жизни</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Присоединяйтесь к тысячам людей, которые уже делают мир добрее. 
                  Каждое пожертвование, большое или маленькое, имеет значение.
                </p>
                <Button size="lg" asChild className="text-lg">
                  <Link to="/donate">
                    Сделать пожертвование
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
