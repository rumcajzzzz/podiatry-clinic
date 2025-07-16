"use client"

import { useState, useEffect } from "react"
import { Phone, MapPin, Star, Clock, Heart, Sparkles, Mail, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function PodiatryClinic() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    setIsLoaded(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      title: "Pielęgnacja stóp",
      description:
        "Kompleksowa pielęgnacja obejmująca usuwanie zrogowaceń, pielęgnację paznokci, oraz profesjonalne zabiegi nawilżające i regenerujące skórę stóp.",
      icon: "🦶",
      details: ["Usuwanie zrogowaceń", "Pielęgnacja paznokci", "Zabiegi nawilżające", "Masaż stóp"],
    },
    {
      title: "Przegląd podologiczny",
      description:
        "Dokładna analiza zdrowia stóp, ocena postawy, diagnostyka problemów oraz indywidualne zalecenia profilaktyczne i terapeutyczne.",
      icon: "🔍",
      details: ["Analiza postawy", "Diagnostyka problemów", "Zalecenia profilaktyczne", "Plan terapii"],
    },
    {
      title: "Leczenie wrastających paznokci",
      description:
        "Specjalistyczne leczenie wrastających paznokci metodami bezbolesnych, z zastosowaniem nowoczesnych technik korekcyjnych.",
      icon: "💅",
      details: ["Korekcja paznokci", "Metody bezbolesne", "Profilaktyka nawrotów", "Edukacja pacjenta"],
    },
    {
      title: "Usuwanie odcisków i modzeli",
      description:
        "Profesjonalne usuwanie odcisków, modzeli i innych zmian skórnych z zastosowaniem specjalistycznych narzędzi i technik.",
      icon: "✨",
      details: ["Usuwanie odcisków", "Leczenie modzeli", "Zabiegi regenerujące", "Profilaktyka"],
    },
    {
      title: "Orteza paznokciowa",
      description:
        "Nowoczesne ortezy paznokciowe korygujące nieprawidłowy wzrost paznokci, zapobiegające wrastaniu i deformacjom.",
      icon: "🔧",
      details: ["Korekcja wzrostu", "Zapobieganie wrastaniu", "Indywidualne dopasowanie", "Kontrola efektów"],
    },
    {
      title: "Konsultacje i edukacja",
      description:
        "Indywidualne konsultacje, edukacja w zakresie higieny stóp, doboru obuwia oraz codziennej pielęgnacji.",
      icon: "💬",
      details: ["Konsultacje indywidualne", "Edukacja higieniczna", "Dobór obuwia", "Zalecenia domowe"],
    },
  ]

  const reviews = [
    {
      name: "Anna K.",
      text: "Profesjonalna obsługa i miła atmosfera. Pani Lucyna bardzo delikatnie podchodzi do każdego problemu. Polecam z całego serca!",
      rating: 5,
    },
    {
      name: "Maria S.",
      text: "Bardzo delikatne podejście i świetne efekty. Po zabiegu stopy są jak nowe. Gabinet czysty i nowoczesny.",
      rating: 5,
    },
    {
      name: "Katarzyna W.",
      text: "Gabinet na najwyższym poziomie. Czuję się tu bezpiecznie i komfortowo. Profesjonalizm w każdym detalu.",
      rating: 5,
    },
  ]

  const faqData = [
    {
      question: "Czy zabiegi podologiczne są bolesne?",
      answer:
        "Zabiegi wykonywane w naszym gabinecie są bezbolesne. Stosujemy delikatne techniki i nowoczesne narzędzia, które zapewniają komfort podczas całego zabiegu. W przypadku bardziej zaawansowanych problemów informujemy pacjenta o każdym etapie zabiegu.",
    },
    {
      question: "Jak często należy wykonywać zabiegi pielęgnacyjne?",
      answer:
        "Częstotliwość zabiegów zależy od indywidualnych potrzeb. Zazwyczaj zalecamy wizyty co 4-6 tygodni dla zabiegów pielęgnacyjnych, a w przypadku problemów leczniczych - zgodnie z indywidualnym planem terapii.",
    },
    {
      question: "Czy przyjmujecie pacjentów z cukrzycą?",
      answer:
        "Tak, specjalizujemy się w opiece nad stopami osób z cukrzycą. Oferujemy specjalne zabiegi dostosowane do potrzeb pacjentów diabetycznych, z zachowaniem wszystkich zasad bezpieczeństwa.",
    },
    {
      question: "Jak przygotować się do wizyty?",
      answer:
        "Przed wizytą zalecamy dokładne umycie stóp, założenie czystych skarpetek i wygodnego obuwia. Nie stosuj kremów ani lakierów na paznokcie w dniu wizyty. Jeśli przyjmujesz leki wpływające na krzepliwość krwi, poinformuj nas o tym.",
    },
    {
      question: "Czy wydajecie faktury?",
      answer:
        "Tak, wystawiamy faktury VAT. Część zabiegów może być refundowana przez NFZ - szczegóły dostępne podczas konsultacji telefonicznej lub osobistej.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 via-white to-beige-50">
      
      {/* Loading Animation */}
      <div
        className={`fixed inset-0 bg-white z-50 transition-opacity duration-1000 ${isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
       >
        <div className="flex items-center justify-center h-full">
          <div className="w-64 h-1 bg-mint-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-mint-300 to-mint-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-mint-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-mint-200 to-mint-300 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-mint-700" />
              </div>
              <div>
                <h1 className="md:text-2xl text-md font-bold text-gray-800 tracking-tight">Lucyna Niemczal</h1>
                <p className="md:text-sm text-xs text-mint-600 font-medium">Gabinet Podologiczny • Kostrzyn</p>
              </div>
            </div>
            <Button
              className="bg-mint-500 hover:bg-mint-600 text-white rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Phone className="w-4 h-4 mr-2" />
              Kontakt
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left relative z-10">
            <div
              data-animate
              id="hero"
              className={`transition-all duration-1000 ${
                visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-snug">
                Profesjonalna opieka <span className="text-mint-600 block">dla Twoich stóp</span>
              </h2>
              <p className="text-gray-600 text-lg sm:text-xl mb-8 leading-relaxed">
                Komfort, doświadczenie i nowoczesne podejście. Od ponad 15 lat dbamy o zdrowie stóp naszych pacjentów.
              </p>

              <div className="flex items-center justify-center md:justify-start space-x-4 mb-10 text-gray-600 text-sm sm:text-base">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">5.0</span>
                  <span>(40 opinii)</span>
                </div>
                <div className="h-5 w-px bg-gray-300" />
                <div>
                  <span className="font-semibold">15+ lat</span> doświadczenia
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="bg-mint-500 hover:bg-mint-600 text-white px-8 py-3 rounded-full shadow-lg transition duration-300 hover:scale-105 text-base sm:text-lg"
                  onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Umów wizytę
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-mint-500 text-mint-600 hover:bg-mint-50 px-8 py-3 rounded-full transition duration-300 text-base sm:text-lg"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Nasze usługi
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Background Image */}
          <div className="hidden md:block md:w-1/2 h-[50vh] relative z-0">
            <Image
              src="/4.jpg"
              alt="Gabinet podologiczny"
              fill
              className="object-cover rounded-2xl shadow-md"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-[url('/bg1.svg')] bg-no-repeat bg-cover bg-center">
        <div className="container mx-auto">
          <div
            data-animate
            id="services"
            className={`transition-all duration-1000 delay-300 ${visibleSections.has("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl font-bold text-mint-500 text-center mb-4">NASZE USŁUGI</h1>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Oferujemy pełen zakres usług podologicznych - od podstawowej pielęgnacji po specjalistyczne zabiegi
              lecznicze
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{service.icon}</div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="text-sm text-gray-500 flex items-center">
                          <div className="w-1.5 h-1.5 bg-mint-400 rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div
            data-animate
            id="about"
            className={`transition-all duration-1000 delay-200 ${visibleSections.has("about") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-mint-500 mb-6">O NAS</h1>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Gabinet Podologiczny „Lucyna Niemczal" to miejsce, gdzie profesjonalizm spotyka się z kobiecą
                  delikatnością. Od ponad 15 lat oferujemy kompleksową opiekę nad zdrowiem Twoich stóp w atmosferze
                  pełnej zrozumienia i troski.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nasza założycielka, Lucyna Niemczal, jest certyfikowanym podologiem z wieloletnim doświadczeniem w
                  dziedzinie pielęgnacji i leczenia stóp. Ukończyła liczne kursy specjalistyczne i regularnie podnosi
                  swoje kwalifikacje, aby oferować pacjentom najnowsze metody terapii.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Nasza misja to nie tylko pielęgnacja, ale także edukacja i budowanie świadomości o znaczeniu zdrowia
                  stóp dla ogólnego samopoczucia i jakości życia. Wierzymy, że każdy zasługuje na profesjonalną opiekę w
                  komfortowych warunkach.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Heart className="w-6 h-6 text-mint-500" />
                    <span className="text-gray-700 font-medium">Z pasją dbamy o Twoje zdrowie</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Star className="w-6 h-6 text-mint-500" />
                    <span className="text-gray-700 font-medium">Certyfikowany podolog z 15-letnim doświadczeniem</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Sparkles className="w-6 h-6 text-mint-500" />
                    <span className="text-gray-700 font-medium">Nowoczesne metody i sterylne warunki</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative h-[400px] rounded-2xl overflow-hidden">
                  <Image
                    src="/2.jpg"
                    alt="Gabinet podologiczny"
                    className="object-cover"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div
            data-animate
            id="reviews"
            className={`transition-all duration-1000 delay-400 ${visibleSections.has("reviews") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-3xl font-bold text-mint-500 text-center mb-12">Opinie naszych klientek</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                    <p className="text-gray-800 font-semibold">- {review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-mint-500 backdrop-blur-sm">
        <div className="container mx-auto">
          <div
            data-animate
            id="faq"
            className={`transition-all duration-1000 delay-500 ${
              visibleSections.has("faq") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-3xl font-bold text-white text-center mb-4">Często zadawane pytania</h3>
            <p className="text-gray-100 text-center mb-12 max-w-2xl mx-auto">
              Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług i zabiegów
            </p>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <Card
                    key={index}
                    className="border border-white/20 shadow-md bg-white/80 backdrop-blur-md transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <button
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-mint-100/40 transition-colors duration-200"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <h4 className="font-semibold text-gray-800 pr-4">{faq.question}</h4>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-mint-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-mint-600 flex-shrink-0" />
                        )}
                      </button>

                      {/* Animated answer */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isOpen ? 'max-h-96 opacity-100 px-6 pb-6' : 'max-h-0 opacity-0 px-6 pb-0'
                        }`}
                      >
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div
            data-animate
            id="contact-form-section"
            className={`transition-all duration-1000 delay-600 ${visibleSections.has("contact-form-section") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">Umów wizytę</h3>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Skontaktuj się z nami, aby umówić wizytę lub zadać pytanie. Odpowiemy najszybciej jak to możliwe.
            </p>
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Imię i nazwisko</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Twoje imię i nazwisko"
                          className="border-mint-200 focus:border-mint-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Twój numer telefonu"
                          className="border-mint-200 focus:border-mint-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Twój adres email"
                        className="border-mint-200 focus:border-mint-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Rodzaj usługi</Label>
                      <select
                        id="service"
                        name="service"
                        className="w-full px-3 py-2 border border-mint-200 rounded-md focus:outline-none focus:ring-2 focus:ring-mint-500 focus:border-mint-500"
                        required
                      >
                        <option value="">Wybierz usługę</option>
                        <option value="pielegnacja">Pielęgnacja stóp</option>
                        <option value="przeglad">Przegląd podologiczny</option>
                        <option value="wrastajace">Leczenie wrastających paznokci</option>
                        <option value="odciski">Usuwanie odcisków i modzeli</option>
                        <option value="orteza">Orteza paznokciowa</option>
                        <option value="konsultacja">Konsultacja</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Wiadomość</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Opisz swój problem lub zadaj pytanie..."
                        rows={4}
                        className="border-mint-200 focus:border-mint-500 outline-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-mint-500 hover:bg-mint-600 text-white py-3 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Wyślij wiadomość
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div
            data-animate
            id="contact-section"
            className={`transition-all duration-1000 delay-700 ${visibleSections.has("contact-section") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Kontakt i lokalizacja</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">

                 {/* Adres */}
                <div className="flex items-center space-x-4 group">
                  <a
                    href="https://www.google.com/maps?ll=52.392356,17.22324&z=16&t=h&hl=pl&gl=PL&mapclient=embed&cid=13015005742524802709"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center group-hover:bg-mint-200 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-mint-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Adres</h4>
                      <p className="text-gray-600">Wiosny Ludów 37</p>
                      <p className="text-gray-600">66-470 Kostrzyn nad Odrą</p>
                    </div>
                  </a>
                </div>

                {/* Telefon */}
                <div className="flex items-center space-x-4 group">
                  <a
                    href="tel:+48797371919"
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center group-hover:bg-mint-200 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-mint-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Telefon</h4>
                      <p className="text-gray-600">+48 797 371 919</p>
                      <p className="text-sm text-gray-500">Umów wizytę telefonicznie</p>
                    </div>
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <a
                    href="mailto:kontakt@podolog-kostrzyn.pl"
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center group-hover:bg-mint-200 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-mint-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Email</h4>
                      <p className="text-gray-600">kontakt@podolog-kostrzyn.pl</p>
                    </div>
                  </a>
                </div>


                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-mint-100 rounded-full flex items-center justify-center group-hover:bg-mint-200 transition-colors duration-300">
                    <Clock className="w-6 h-6 text-mint-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Godziny otwarcia</h4>
                    <p className="text-gray-600">Poniedziałek - Piątek: 9:00-17:00</p>
                    <p className="text-gray-600">Sobota: 9:00-14:00</p>
                    <p className="text-gray-600">Niedziela: zamknięte</p>
                  </div>
                </div>
              </div>

              <div className="h-96 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2913.5053021054614!2d17.2232396!3d52.3923559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704f5399b2c594d%3A0xb49e96c430dc2695!2sGabinet%20Podologiczny%20Lucyna%20Niemczal%20Kostrzyn!5e1!3m2!1spl!2spl!4v1752682940921!5m2!1spl!2spl"
                  height="100%"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Gabinetu Podologicznego Lucyna Niemczal"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-mint-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">Gabinet Podologiczny Lucyna Niemczal</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Wiosny Ludów 37, 62-025 Kostrzyn</p>
          <p className="text-gray-400 text-sm">
            © 2025 Gabinet Podologiczny Lucyna Niemczal. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>

    </div>
  )
}
