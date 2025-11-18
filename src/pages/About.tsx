import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      icon: 'Heart',
      title: 'Забота',
      description: 'Мы искренне заботимся о каждом, кто обращается к нам за помощью',
    },
    {
      icon: 'Users',
      title: 'Единство',
      description: 'Объединяем людей для достижения общих благородных целей',
    },
    {
      icon: 'Shield',
      title: 'Честность',
      description: 'Прозрачность и открытость во всех наших действиях',
    },
    {
      icon: 'Target',
      title: 'Эффективность',
      description: 'Каждый рубль направляется на реальную помощь',
    },
  ];

  const team = [
    {
      name: 'Анна Иванова',
      role: 'Директор фонда',
      description: '15 лет опыта в благотворительности',
    },
    {
      name: 'Михаил Петров',
      role: 'Координатор проектов',
      description: 'Реализовал более 200 благотворительных проектов',
    },
    {
      name: 'Елена Смирнова',
      role: 'Руководитель волонтёров',
      description: 'Координирует работу 500+ волонтёров',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                О нашем фонде
              </h1>
              <p className="text-xl text-muted-foreground">
                Мы создали этот фонд, чтобы помогать тем, кто в этом нуждается, и делать мир добрее
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Наша миссия
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Фонд Добра был создан в 2015 году группой неравнодушных людей, которые решили объединить свои усилия для помощи нуждающимся.
                  </p>
                  <p>
                    За годы работы мы помогли тысячам семей преодолеть трудности, оплатили лечение сотен людей, поддержали талантливых детей и реализовали множество социальных проектов.
                  </p>
                  <p>
                    Наша цель — создать общество, где каждый человек может рассчитывать на поддержку в трудную минуту.
                  </p>
                </div>
              </div>
              <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center">
                <Icon name="Heart" className="h-32 w-32 text-primary/20" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Наши ценности
              </h2>
              <p className="text-muted-foreground text-lg">
                Принципы, которыми мы руководствуемся в нашей работе
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon name={value.icon} className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Наша команда
              </h2>
              <p className="text-muted-foreground text-lg">
                Профессионалы, которые делают наш фонд эффективным
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Icon name="User" className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {member.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8 md:p-12 space-y-6">
                  <div className="flex items-start space-x-4">
                    <Icon name="FileText" className="h-8 w-8 text-primary flex-shrink-0" />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Документы и лицензии</h3>
                      <p className="text-muted-foreground">
                        Фонд Добра зарегистрирован в установленном законом порядке и имеет все необходимые документы для осуществления благотворительной деятельности.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Свидетельство о регистрации некоммерческой организации</li>
                        <li>• Устав фонда</li>
                        <li>• Лицензии на осуществление деятельности</li>
                        <li>• Отчёты о финансовой деятельности</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
