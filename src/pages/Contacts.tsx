
import ContactForm from '@/components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const contacts = [
    {
      title: 'Телефон',
      value: '+7 (900) 123-45-67',
      icon: 'Phone',
      link: 'tel:+79001234567'
    },
    {
      title: 'Email',
      value: 'info@charity.org',
      icon: 'Mail',
      link: 'mailto:info@charity.org'
    },
    {
      title: 'Адрес',
      value: 'Москва, ул. Примерная, д. 1, офис 101',
      icon: 'MapPin',
      link: null
    },
    {
      title: 'Режим работы',
      value: 'Пн-Пт: 10:00-18:00',
      icon: 'Clock',
      link: null
    },
  ];

  const socials = [
    { name: 'ВКонтакте', icon: 'Facebook', link: '#' },
    { name: 'Telegram', icon: 'Send', link: '#' },
    { name: 'Instagram', icon: 'Instagram', link: '#' },
    { name: 'YouTube', icon: 'Youtube', link: '#' },
  ];

  return (
    <div>
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contacts.map((contact, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={contact.icon as any} size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold">{contact.title}</h3>
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{contact.value}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Напишите нам</CardTitle>
                    <CardDescription>
                      Мы ответим на ваше сообщение в течение 24 часов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Реквизиты</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><span className="text-muted-foreground">ИНН:</span> 1234567890</p>
                    <p><span className="text-muted-foreground">КПП:</span> 123456789</p>
                    <p><span className="text-muted-foreground">ОГРН:</span> 1234567890123</p>
                    <p><span className="text-muted-foreground">Расчётный счёт:</span> 40703810000000000000</p>
                    <p><span className="text-muted-foreground">Банк:</span> ПАО "Примербанк"</p>
                    <p><span className="text-muted-foreground">БИК:</span> 044525225</p>
                    <p><span className="text-muted-foreground">Корр. счёт:</span> 30101810400000000225</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Социальные сети</CardTitle>
                    <CardDescription>
                      Следите за нашими новостями и проектами
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4">
                      {socials.map((social, index) => (
                        <a
                          key={index}
                          href={social.link}
                          className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-muted transition-colors"
                        >
                          <Icon name={social.icon as any} size={20} />
                          <span className="text-sm font-medium">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Как добраться</h3>
                        <p className="text-sm text-muted-foreground">
                          Метро "Примерная станция", выход №3.
                          Пешком 5 минут по направлению к центру.
                          Здание с синим фасадом, вход со двора.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contacts;