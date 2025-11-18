import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Help = () => {
  const ways = [
    {
      title: 'Разовое пожертвование',
      description: 'Сделайте пожертвование любой суммы прямо сейчас',
      icon: 'CreditCard',
      action: 'Пожертвовать',
      link: '/donate'
    },
    {
      title: 'Ежемесячная поддержка',
      description: 'Станьте постоянным благотворителем и помогайте регулярно',
      icon: 'Calendar',
      action: 'Оформить подписку',
      link: '/donate'
    },
    {
      title: 'Стать волонтёром',
      description: 'Присоединяйтесь к нашей команде и помогайте делом',
      icon: 'Users',
      action: 'Подать заявку',
      link: '/contacts'
    },
    {
      title: 'Корпоративная помощь',
      description: 'Сотрудничество для компаний и организаций',
      icon: 'Building',
      action: 'Связаться с нами',
      link: '/contacts'
    },
  ];

  const amounts = [
    { value: 500, label: '500 ₽', description: 'Покупка продуктов' },
    { value: 1000, label: '1 000 ₽', description: 'Лекарства' },
    { value: 3000, label: '3 000 ₽', description: 'Одежда и обувь' },
    { value: 5000, label: '5 000 ₽', description: 'Медицинское обследование' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Как помочь</h1>
            <p className="text-xl text-muted-foreground">
              Есть много способов поддержать наш фонд и тех, кому мы помогаем
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {ways.map((way, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={way.icon as any} size={24} className="text-primary" />
                    </div>
                    <CardTitle>{way.title}</CardTitle>
                    <CardDescription>{way.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link to={way.link}>{way.action}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что даёт ваше пожертвование</h2>
              <p className="text-muted-foreground">
                Каждая сумма помогает конкретным людям в их нуждах
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {amounts.map((amount, index) => (
                <Card key={index} className="text-center hover:border-primary transition-colors cursor-pointer">
                  <CardContent className="pt-6 space-y-2">
                    <div className="text-3xl font-bold text-primary">{amount.label}</div>
                    <p className="text-sm text-muted-foreground">{amount.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" asChild>
                <Link to="/donate">
                  <Icon name="Heart" size={20} className="mr-2" />
                  Сделать пожертвование
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-4xl">
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-primary/20">
              <CardContent className="pt-12 pb-12 space-y-6">
                <div className="text-center">
                  <Icon name="Lightbulb" size={48} className="mx-auto text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Другие способы помочь</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Share2" size={20} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Расскажите о нас</h3>
                        <p className="text-sm text-muted-foreground">
                          Поделитесь информацией о фонде в социальных сетях
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Gift" size={20} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Подарите вместо подарка</h3>
                        <p className="text-sm text-muted-foreground">
                          Предложите гостям пожертвовать вместо подарков
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Store" size={20} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Благотворительная акция</h3>
                        <p className="text-sm text-muted-foreground">
                          Организуйте сбор пожертвований в вашей компании
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Package" size={20} className="text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Передайте вещи</h3>
                        <p className="text-sm text-muted-foreground">
                          Одежда, игрушки, книги в хорошем состоянии
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
