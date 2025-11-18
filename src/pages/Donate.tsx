import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';

const Donate = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState('1000');
  const [customAmount, setCustomAmount] = useState('');
  const [isRecurring, setIsRecurring] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const predefinedAmounts = ['500', '1000', '2500', '5000'];

  const handleDonate = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: 'Спасибо за ваше пожертвование!',
        description: `Вы помогли на ${amount || customAmount} ₽. Это очень важно для нас!`,
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const selectedAmount = customAmount || amount;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Сделать пожертвование</h1>
              <p className="text-lg text-muted-foreground">
                Ваша помощь меняет жизни людей. Спасибо за вашу доброту!
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Heart" className="h-12 w-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">500 ₽</div>
                  <p className="text-sm text-muted-foreground">
                    Продукты первой необходимости для одной семьи
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="Stethoscope" className="h-12 w-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">2 500 ₽</div>
                  <p className="text-sm text-muted-foreground">
                    Медикаменты для тяжелобольного ребёнка на месяц
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Icon name="GraduationCap" className="h-12 w-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold mb-1">5 000 ₽</div>
                  <p className="text-sm text-muted-foreground">
                    Учебные материалы для ребёнка на год
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Выберите сумму</CardTitle>
                <CardDescription>
                  Любая сумма имеет значение. Вы можете выбрать из предложенных или указать свою.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="mb-3 block">Быстрый выбор суммы</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {predefinedAmounts.map((value) => (
                      <Button
                        key={value}
                        variant={amount === value && !customAmount ? 'default' : 'outline'}
                        onClick={() => {
                          setAmount(value);
                          setCustomAmount('');
                        }}
                        className="h-12"
                      >
                        {value} ₽
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-amount">Или укажите свою сумму</Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Введите сумму"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount('');
                    }}
                    min="1"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="recurring"
                    checked={isRecurring}
                    onCheckedChange={(checked) => setIsRecurring(checked as boolean)}
                  />
                  <Label htmlFor="recurring" className="cursor-pointer">
                    Сделать регулярным (ежемесячно)
                  </Label>
                </div>

                <div className="pt-4 space-y-4">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground mb-2">
                      Вы собираетесь {isRecurring ? 'пожертвовать ежемесячно' : 'сделать разовое пожертвование'}:
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {selectedAmount ? `${selectedAmount} ₽` : '0 ₽'}
                    </div>
                  </div>

                  <Button
                    className="w-full h-12"
                    size="lg"
                    onClick={handleDonate}
                    disabled={!selectedAmount || isSubmitting}
                  >
                    <Icon name="Heart" className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Обработка...' : 'Пожертвовать'}
                  </Button>
                </div>

                <div className="text-xs text-muted-foreground text-center pt-4 border-t">
                  Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных.
                  Платежи проходят через защищённое соединение.
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Icon name="Shield" className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Безопасность</h3>
                  <p className="text-sm text-muted-foreground">
                    Все платежи защищены SSL-шифрованием
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Icon name="FileText" className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Прозрачность</h3>
                  <p className="text-sm text-muted-foreground">
                    Подробные отчёты о расходовании средств
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <Icon name="Award" className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Налоговый вычет</h3>
                  <p className="text-sm text-muted-foreground">
                    Документы для получения вычета
                  </p>
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

export default Donate;
