import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Reports = () => {
  const annualReports = [
    {
      year: '2024',
      period: 'Январь - Октябрь 2024',
      raised: '45,200,000 ₽',
      helped: '8,500 человек',
      projects: '156 проектов',
    },
    {
      year: '2023',
      period: 'Годовой отчёт 2023',
      raised: '52,800,000 ₽',
      helped: '10,200 человек',
      projects: '183 проекта',
    },
    {
      year: '2022',
      period: 'Годовой отчёт 2022',
      raised: '48,300,000 ₽',
      helped: '9,800 человек',
      projects: '167 проектов',
    },
  ];

  const currentProjects = [
    {
      title: 'Помощь многодетным семьям',
      description: 'Обеспечение продуктами и вещами',
      raised: 1250000,
      goal: 2000000,
      helped: 45,
    },
    {
      title: 'Лечение детей',
      description: 'Оплата медицинских процедур',
      raised: 3800000,
      goal: 5000000,
      helped: 12,
    },
    {
      title: 'Образовательные стипендии',
      description: 'Поддержка талантливых детей',
      raised: 890000,
      goal: 1200000,
      helped: 28,
    },
  ];

  const spending = [
    { category: 'Медицинская помощь', percent: 35, color: 'bg-blue-500' },
    { category: 'Социальная поддержка', percent: 30, color: 'bg-green-500' },
    { category: 'Образование', percent: 20, color: 'bg-yellow-500' },
    { category: 'Продукты и вещи', percent: 10, color: 'bg-purple-500' },
    { category: 'Административные расходы', percent: 5, color: 'bg-gray-400' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Отчёты о деятельности
              </h1>
              <p className="text-xl text-muted-foreground">
                Прозрачность и открытость — основа нашей работы. Все средства идут на помощь людям.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Текущие проекты
              </h2>
              <p className="text-muted-foreground text-lg">
                Следите за ходом реализации наших программ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentProjects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Собрано</span>
                        <span className="font-semibold">
                          {(project.raised / 1000000).toFixed(1)} млн ₽
                        </span>
                      </div>
                      <Progress 
                        value={(project.raised / project.goal) * 100} 
                        className="h-2"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Цель: {(project.goal / 1000000).toFixed(1)} млн ₽</span>
                        <span>{Math.round((project.raised / project.goal) * 100)}%</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground">
                        Помогли <span className="font-semibold text-foreground">{project.helped}</span> людям
                      </p>
                    </div>
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
                Распределение средств
              </h2>
              <p className="text-muted-foreground text-lg">
                Куда направляются пожертвования в 2024 году
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6 space-y-6">
                  {spending.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{item.category}</span>
                        <span className="text-2xl font-bold text-primary">{item.percent}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div
                          className={`${item.color} h-3 rounded-full transition-all`}
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <Icon name="Info" className="inline h-4 w-4 mr-1" />
                  95% средств направляется на реализацию благотворительных программ
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Годовые отчёты
              </h2>
              <p className="text-muted-foreground text-lg">
                Подробная информация о нашей деятельности за каждый год
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {annualReports.map((report, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {report.year}
                    </div>
                    <CardDescription>{report.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Собрано средств</span>
                        <span className="font-semibold">{report.raised}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Получили помощь</span>
                        <span className="font-semibold">{report.helped}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Реализовано</span>
                        <span className="font-semibold">{report.projects}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Icon name="Download" className="mr-2 h-4 w-4" />
                      Скачать отчёт PDF
                    </Button>
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
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Финансовая прозрачность</h3>
                      <p className="text-muted-foreground">
                        Мы публикуем детальные финансовые отчёты каждый квартал и проходим независимый аудит ежегодно.
                      </p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Все расходы документально подтверждены</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Публикация отчётов в открытом доступе</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="Check" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>Независимый аудит финансовой деятельности</span>
                        </li>
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

export default Reports;
