import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Reports = () => {
  const reports = [
    {
      period: 'Октябрь 2024',
      received: '4 250 000 ₽',
      spent: '4 100 000 ₽',
      projects: 12,
      people: 347,
      file: '#'
    },
    {
      period: 'Сентябрь 2024',
      received: '3 890 000 ₽',
      spent: '3 750 000 ₽',
      projects: 10,
      people: 312,
      file: '#'
    },
    {
      period: 'Август 2024',
      received: '5 120 000 ₽',
      spent: '4 980 000 ₽',
      projects: 15,
      people: 425,
      file: '#'
    },
  ];

  const expenses = [
    { category: 'Медицинская помощь', percent: 35, amount: '1 435 000 ₽' },
    { category: 'Помощь детям', percent: 30, amount: '1 230 000 ₽' },
    { category: 'Помощь пожилым', percent: 20, amount: '820 000 ₽' },
    { category: 'Административные расходы', percent: 10, amount: '410 000 ₽' },
    { category: 'Другое', percent: 5, amount: '205 000 ₽' },
  ];

  const stories = [
    {
      name: 'Мария, 8 лет',
      story: 'Получила средства на операцию и восстановление',
      amount: '450 000 ₽',
      icon: 'Heart'
    },
    {
      name: 'Семья Петровых',
      story: 'Помощь многодетной семье в трудной ситуации',
      amount: '85 000 ₽',
      icon: 'Home'
    },
    {
      name: 'Николай Иванович, 75 лет',
      story: 'Покупка лекарств и продуктов питания',
      amount: '25 000 ₽',
      icon: 'ShoppingBag'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Отчёты о деятельности</h1>
            <p className="text-xl text-muted-foreground">
              Мы верим в полную прозрачность и публикуем подробные отчёты о расходовании средств
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Ежемесячные отчёты</h2>
            <div className="space-y-4">
              {reports.map((report, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{report.period}</span>
                      <Button variant="outline" size="sm" asChild>
                        <a href={report.file} download>
                          <Icon name="Download" size={16} className="mr-2" />
                          Скачать PDF
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Получено</p>
                        <p className="text-lg font-semibold text-green-600">{report.received}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Потрачено</p>
                        <p className="text-lg font-semibold text-blue-600">{report.spent}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Проектов</p>
                        <p className="text-lg font-semibold">{report.projects}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Получили помощь</p>
                        <p className="text-lg font-semibold">{report.people}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container max-w-5xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Распределение средств (октябрь 2024)</h2>
            <Card>
              <CardContent className="pt-6 space-y-6">
                {expenses.map((expense, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{expense.category}</span>
                      <span className="text-sm text-muted-foreground">{expense.amount}</span>
                    </div>
                    <Progress value={expense.percent} className="h-2" />
                    <p className="text-xs text-muted-foreground text-right">{expense.percent}%</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Истории помощи</h2>
              <p className="text-muted-foreground">
                Реальные люди, которым мы помогли в этом месяце
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stories.map((story, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={story.icon as any} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{story.name}</CardTitle>
                    <CardDescription>{story.story}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">{story.amount}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container max-w-3xl text-center space-y-6">
            <Icon name="FileCheck" size={48} className="mx-auto" />
            <h2 className="text-3xl font-bold">Годовой отчёт 2023</h2>
            <p className="text-lg opacity-90">
              Подробный отчёт о деятельности фонда за весь год с полной финансовой отчётностью
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#" download>
                <Icon name="Download" size={20} className="mr-2" />
                Скачать годовой отчёт
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reports;
