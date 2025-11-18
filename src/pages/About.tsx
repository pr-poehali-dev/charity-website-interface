
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const values = [
    {
      title: 'Прозрачность',
      description: 'Мы открыто публикуем все отчёты о расходовании средств',
      icon: 'Eye'
    },
    {
      title: 'Ответственность',
      description: 'Каждый рубль идёт на помощь нуждающимся',
      icon: 'Shield'
    },
    {
      title: 'Человечность',
      description: 'Мы относимся к каждому с уважением и заботой',
      icon: 'Heart'
    },
    {
      title: 'Эффективность',
      description: 'Мы максимизируем пользу от каждого пожертвования',
      icon: 'Target'
    },
  ];

  const team = [
    { name: 'Анна Иванова', role: 'Директор фонда', icon: 'User' },
    { name: 'Михаил Петров', role: 'Руководитель программ', icon: 'User' },
    { name: 'Елена Сидорова', role: 'Координатор волонтёров', icon: 'User' },
    { name: 'Дмитрий Козлов', role: 'Финансовый директор', icon: 'User' },
  ];

  return (
    <div>
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">О фонде</h1>
            <p className="text-xl text-muted-foreground text-center">
              Мы создаём мир, где каждый человек может рассчитывать на поддержку и заботу
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="prose prose-lg max-w-none space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Наша история</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Благотворительный фонд "Доброе сердце" был основан в 2015 году группой энтузиастов, 
                  которые хотели помогать людям, оказавшимся в трудной жизненной ситуации. 
                  Начав с небольших проектов помощи детям, мы постепенно расширили свою деятельность 
                  и сегодня работаем по нескольким направлениям.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  За годы работы мы помогли тысячам людей, реализовали сотни проектов и создали 
                  сообщество неравнодушных людей, готовых протянуть руку помощи тем, кто в ней нуждается.
                </p>
              </div>

              <div className="space-y-4 mt-12">
                <h2 className="text-3xl font-bold">Наша миссия</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы стремимся создать общество, где каждый человек, независимо от своего положения, 
                  может рассчитывать на поддержку и помощь. Наша цель — не просто оказать материальную 
                  помощь, но и дать людям надежду, веру в будущее и возможность изменить свою жизнь к лучшему.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={value.icon as any} size={32} className="text-primary" />
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
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Наша команда</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={member.icon as any} size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;