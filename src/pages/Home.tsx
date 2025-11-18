import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Home = () => {
  const stats = [
    { value: "15,000+", label: "Людей помогли" },
    { value: "250+", label: "Проектов завершено" },
    { value: "98%", label: "Прозрачность отчётов" },
  ];

  const activities = [
    {
      icon: "Heart",
      title: "Помощь семьям",
      description: "Поддерживаем семьи в трудной жизненной ситуации, предоставляя необходимую помощь и ресурсы",
    },
    {
      icon: "School",
      title: "Образование детей",
      description: "Создаём возможности для получения качественного образования и развития талантов",
    },
    {
      icon: "Home",
      title: "Жильё и уход",
      description: "Обеспечиваем безопасное жильё и квалифицированный уход нуждающимся",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Вместе мы меняем жизни к лучшему
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Благотворительный фонд помощи людям в трудной жизненной ситуации. 
              Каждое доброе дело начинается с желания помочь.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/donate">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Пожертвовать
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/about">
                  Узнать больше
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Чем мы занимаемся
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Наша миссия — создать мир, где каждый человек имеет шанс на достойную жизнь
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={activity.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <Icon name="HandHeart" size={48} className="text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ваша помощь меняет судьбы
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Каждое пожертвование — это конкретная помощь конкретному человеку. 
              Присоединяйтесь к тысячам людей, которые уже делают мир добрее.
            </p>
            <Button size="lg" className="text-lg px-10" asChild>
              <Link to="/donate">
                Помочь сейчас
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Истории наших подопечных
            </h2>
            <p className="text-muted-foreground text-lg">
              Реальные люди, которым мы смогли помочь благодаря вашей поддержке
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    История помощи семье
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Благодаря поддержке фонда, семья смогла преодолеть трудности 
                    и начать новую главу своей жизни.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link to="/about">
                      Читать подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
