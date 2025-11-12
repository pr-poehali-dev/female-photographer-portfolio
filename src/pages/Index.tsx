import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

type Category = 'all' | 'wedding' | 'portrait' | 'commercial'

interface GalleryItem {
  id: number
  category: Category
  title: string
  image: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: 'wedding', title: 'Свадебная церемония', image: 'https://cdn.poehali.dev/projects/43a27871-bfa2-4efc-b221-447fc7d11c9d/files/c7180015-de77-49e8-b204-cf0b18cb86be.jpg' },
  { id: 2, category: 'portrait', title: 'Студийный портрет', image: 'https://cdn.poehali.dev/projects/43a27871-bfa2-4efc-b221-447fc7d11c9d/files/90c674c7-b7a1-4266-b239-e7272fa4734b.jpg' },
  { id: 3, category: 'commercial', title: 'Рекламная съёмка', image: 'https://cdn.poehali.dev/projects/43a27871-bfa2-4efc-b221-447fc7d11c9d/files/f0432451-b6cd-4665-a9ec-9976a21b9adb.jpg' },
  { id: 4, category: 'wedding', title: 'Свадебная прогулка', image: 'https://cdn.poehali.dev/projects/43a27871-bfa2-4efc-b221-447fc7d11c9d/files/c7180015-de77-49e8-b204-cf0b18cb86be.jpg' },
  { id: 5, category: 'portrait', title: 'Портрет на природе', image: 'https://cdn.poehali.dev/projects/43a27871-bfa2-4efc-b221-447fc7d11c9d/files/90c674c7-b7a1-4266-b239-e7272fa4734b.jpg' },
  { id: 6, category: 'commercial', title: 'Каталожная съёмка', image: 'https://cdn.poehali.dev/projects/43a27871-bfa2-4efc-b221-447fc7d11c9d/files/f0432451-b6cd-4665-a9ec-9976a21b9adb.jpg' },
]

const pricingPlans = [
  {
    name: 'Экспресс',
    price: '15 000 ₽',
    duration: '1 час',
    features: ['До 20 обработанных фото', 'Съёмка в студии или на локации', 'Базовая ретушь']
  },
  {
    name: 'Стандарт',
    price: '30 000 ₽',
    duration: '2-3 часа',
    features: ['До 50 обработанных фото', 'Съёмка на 2 локациях', 'Полная ретушь', 'Онлайн-галерея']
  },
  {
    name: 'Премиум',
    price: '50 000 ₽',
    duration: '5-6 часов',
    features: ['До 100 обработанных фото', 'Безлимитные локации', 'Художественная ретушь', 'Фотокнига в подарок']
  }
]

export default function Index() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Alexandra</h1>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>

            <ul className="hidden md:flex gap-8">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">
                  Главная
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">
                  Портфолио
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
                  Обо мне
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">
                  Цены
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          {isMenuOpen && (
            <ul className="md:hidden mt-4 space-y-4 animate-fade-in">
              <li>
                <button onClick={() => scrollToSection('hero')} className="block w-full text-left hover:text-primary transition-colors">
                  Главная
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left hover:text-primary transition-colors">
                  Портфолио
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-primary transition-colors">
                  Обо мне
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="block w-full text-left hover:text-primary transition-colors">
                  Цены
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-primary transition-colors">
                  Контакты
                </button>
              </li>
            </ul>
          )}
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in-up">
              Фотография —<br />это искусство
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-2xl mx-auto">
              Запечатлеваю моменты, которые останутся с вами навсегда
            </p>
            <Button 
              size="lg" 
              className="animate-scale-in"
              onClick={() => scrollToSection('portfolio')}
            >
              Смотреть портфолио
            </Button>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">Портфолио</h2>
            
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              <Button 
                variant={activeCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('all')}
              >
                Все работы
              </Button>
              <Button 
                variant={activeCategory === 'wedding' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('wedding')}
              >
                Свадьбы
              </Button>
              <Button 
                variant={activeCategory === 'portrait' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('portrait')}
              >
                Портреты
              </Button>
              <Button 
                variant={activeCategory === 'commercial' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('commercial')}
              >
                Коммерция
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/43a27871-bfa2-4efc-b221-447fc7d11c9d/files/f35a4641-c55b-4a83-83e6-c9740484383d.jpg" 
                  alt="Alexandra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-5xl md:text-6xl font-bold mb-6">Обо мне</h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Привет! Я — Александра, фотограф с 8-летним опытом работы. 
                    Моя специализация — создание эмоциональных и живых снимков, 
                    которые рассказывают историю.
                  </p>
                  <p>
                    Я работала с ведущими журналами и брендами, но больше всего 
                    ценю возможность запечатлеть искренние моменты из жизни людей.
                  </p>
                  <p>
                    Мой подход — минимум постановки, максимум естественности. 
                    Я создаю комфортную атмосферу, где вы можете быть собой.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">Цены</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={plan.name} 
                  className="p-8 hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.duration}</p>
                  <p className="text-4xl font-bold text-primary mb-6">{plan.price}</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" onClick={() => scrollToSection('contact')}>
                    Забронировать
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">Свяжитесь со мной</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Готова обсудить вашу фотосессию и воплотить ваши идеи в жизнь
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="mailto:photo@example.com" className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
                <Icon name="Mail" size={24} />
                photo@example.com
              </a>
              <a href="tel:+79001234567" className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
                <Icon name="Phone" size={24} />
                +7 (900) 123-45-67
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
                @alexandra_photo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Alexandra Photography. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}