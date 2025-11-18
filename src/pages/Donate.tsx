import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState('1000');
  const [frequency, setFrequency] = useState('once');
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = [
    { value: '500', label: '500 ₽' },
    { value: '1000', label: '1 000 ₽' },
    { value: '3000', label: '3 000 ₽' },
    { value: '5000', label: '5 000 ₽' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount || amount;
    
    toast({
      title: 'Спасибо за ваше пожертвование!',
      description: `Сумма ${finalAmount} ₽ будет направлена на помощь нуждающимся`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="container max-w-4xl text-center">
            <Icon name="Heart" size={64} className="mx-auto text-primary mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Сделать пожертвование</h1>
            <p className="text-xl text-muted-foreground">
              Ваша поддержка меняет жизни людей к лучшему
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Выберите сумму пожертвования</CardTitle>
                <CardDescription>
                  Любая сумма поможет нуждающимся людям
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-4">
                    <Label>Частота пожертвований</Label>
                    <RadioGroup value={frequency} onValueChange={setFrequency}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="once" id="once" />
                        <Label htmlFor="once" className="cursor-pointer">Разовое пожертвование</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="cursor-pointer">Ежемесячное пожертвование</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label>Сумма</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {presetAmounts.map((preset) => (
                        <Button
                          key={preset.value}
                          type="button"
                          variant={amount === preset.value && !customAmount ? 'default' : 'outline'}
                          onClick={() => {
                            setAmount(preset.value);
                            setCustomAmount('');
                          }}
                          className="h-16"
                        >
                          {preset.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom">Другая сумма</Label>
                    <Input
                      id="custom"
                      type="number"
                      placeholder="Введите сумму"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      min="1"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" required />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="phone">Телефон (необязательно)</Label>
                    <Input id="phone" type="tel" placeholder="+7 (900) 123-45-67" />
                  </div>

                  <div className="pt-4 space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex justify-between items-center text-lg font-semibold">
                        <span>Итого:</span>
                        <span className="text-2xl text-primary">{customAmount || amount} ₽</span>
                      </div>
                      {frequency === 'monthly' && (
                        <p className="text-sm text-muted-foreground mt-2">
                          Ежемесячное списание
                        </p>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Icon name="Heart" size={20} className="mr-2" />
                      Пожертвовать
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center space-y-2">
                  <Icon name="Shield" size={32} className="mx-auto text-primary" />
                  <h3 className="font-semibold">Безопасно</h3>
                  <p className="text-sm text-muted-foreground">
                    Платёж защищён шифрованием
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center space-y-2">
                  <Icon name="FileCheck" size={32} className="mx-auto text-primary" />
                  <h3 className="font-semibold">Документы</h3>
                  <p className="text-sm text-muted-foreground">
                    Все документы для отчётности
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center space-y-2">
                  <Icon name="Receipt" size={32} className="mx-auto text-primary" />
                  <h3 className="font-semibold">Вычет</h3>
                  <p className="text-sm text-muted-foreground">
                    Можно получить налоговый вычет
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
