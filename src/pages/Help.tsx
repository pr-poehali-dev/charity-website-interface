import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Help = () => {
  const ways = [
    {
      icon: 'CreditCard',
      title: 'Финансовая помощь',
      description: 'Сделайте разовое или регулярное пожертвование любой суммы',
      action: 'Пожертвовать',
      link: '/donate',
    },
    {
      icon: 'Users',
      title: 'Стать волонтёром',
      description: 'Присоединяйтесь к нашей команде и помогайте людям напрямую',
      action: 'Подать заявку',
      link: '/contacts',
    },
    {
      icon: 'Package',
      title: 'Передать вещи',
      description: 'Одежда, игрушки, книги и другие вещи помогут нуждающимся',
      action: 'Узнать подробнее',
      link: '/contacts',
    },
    {
      icon: 'Share2',
      title: 'Рассказать друзьям',
      description: 'Поделитесь информацией о фонде в социальных сетях',
      action: 'Поделиться',
      link: '#',
    },
  ];

  const donations = [
    {
      amount: '500 ₽',
      description: 'Горячий обед для нуждающейся семьи',
    },
    {
      amount: '2,000 ₽',
      description: 'Школьные принадлежности для ребёнка',
    },
    {
      amount: '5,000 ₽',
      description: 'Неделя продуктов для многодетной семьи',
    },
    {
      amount: '10,000 ₽',
      description: 'Частичная оплата лечения',
    },
  ];

  const volunteer = [
    {
      title: 'Адресная помощь',
      description: 'Доставка продуктов и вещей нуждающимся',
    },
    {
      title: 'Организация мероприятий',
      description: 'Помощь в проведении благотворительных акций',
    },
    {
      title: 'Онлайн-помощь',
      description: 'Помощь в работе с документами и коммуникацией',
    },
    {
      title: 'Профессиональные навыки',
      description: 'Юридическая, медицинская, психологическая консультация',
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
                Как помочь
              </h1>
              <p className="text-xl text-muted-foreground">
                Есть много способов поддержать наш фонд и помочь тем, кто в этом нуждается
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ways.map((way, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={way.icon} className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{way.title}</CardTitle>
                    <CardDescription className="text-base">
                      {way.description}
                    </CardDescription>
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
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                На что идут пожертвования
              </h2>
              <p className="text-muted-foreground text-lg">
                Узнайте, как ваша помощь меняет жизни людей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {donations.map((donation, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center space-y-4">
                    <div className="text-3xl font-bold text-primary">
                      {donation.amount}
                    </div>
                    <p className="text-muted-foreground">{donation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link to="/donate">
                  <Icon name="Heart" className="mr-2 h-5 w-5" />
                  Сделать пожертвование
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Волонтёрство
              </h2>
              <p className="text-muted-foreground text-lg">
                Направления, где нужна ваша помощь
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {volunteer.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 space-y-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Готовы стать волонтёром? Оставьте заявку, и мы свяжемся с вами
              </p>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container">
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Info" className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Корпоративное сотрудничество</h3>
                    <p className="text-muted-foreground">
                      Мы приглашаем компании к партнёрству. Вместе мы можем реализовать масштабные проекты и помочь большему числу людей.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <Icon name="Check" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>Организация благотворительных акций для сотрудников</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>Спонсорство социальных проектов</span>
                      </li>
                      <li className="flex items-start">
                        <Icon name="Check" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>Долгосрочное партнёрство</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link to="/contacts">Обсудить сотрудничество</Link>
                    </Button>
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
