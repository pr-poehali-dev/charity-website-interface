import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    main: [
      { name: "О фонде", path: "/about" },
      { name: "Как помочь", path: "/donate" },
      { name: "Отчёты", path: "/reports" },
      { name: "Контакты", path: "/contacts" },
    ],
    legal: [
      { name: "Политика конфиденциальности", path: "#" },
      { name: "Пользовательское соглашение", path: "#" },
      { name: "Реквизиты", path: "/contacts" },
    ],
  };

  const socials = [
    { icon: "Facebook", link: "#" },
    { icon: "Send", link: "#" },
    { icon: "Instagram", link: "#" },
    { icon: "Youtube", link: "#" },
  ];

  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">Доброе сердце</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Благотворительный фонд помощи людям в трудной жизненной ситуации
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Icon name={social.icon} size={18} className="text-primary" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {links.main.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Документы</h3>
            <ul className="space-y-2">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Phone" size={16} className="text-primary mt-0.5" />
                <a
                  href="tel:+79001234567"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Mail" size={16} className="text-primary mt-0.5" />
                <a
                  href="mailto:info@charity.org"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@charity.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Москва, ул. Примерная, д. 1
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Благотворительный фонд "Доброе сердце". Все права защищены.</p>
            <p>ИНН 1234567890 | ОГРН 1234567890123</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
