import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={24} />
              <span className="font-semibold">Доброе сердце</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Благотворительный фонд помощи нуждающимся
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Главная
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                О фонде
              </Link>
              <Link to="/help" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Как помочь
              </Link>
              <Link to="/reports" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Отчёты
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+79001234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={16} />
                +7 (900) 123-45-67
              </a>
              <a href="mailto:info@charity.org" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={16} />
                info@charity.org
              </a>
              <span className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, ул. Примерная, д. 1
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Доброе сердце. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
