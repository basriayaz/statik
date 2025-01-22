"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, Shield, Target, Wrench, Zap, Cog, Ruler, FileCheck } from "lucide-react"

const services = [
  {
    id: 1,
    title: "YAPISAL TASARIM",
    subtitle: "Statik Proje",
    icon: Building2,
    description: "Yapısal tasarım statik projeleri, binalar, köprüler, kuleler, barajlar ve diğer yapıların mühendislik açısından dayanıklılığını ve güvenliğini sağlamak için hayati öneme sahiptir. Bu projeler, yapıların ağırlığına, çevresel etkilere (rüzgar, deprem, kar yükü gibi) ve kullanım amaçlarına göre optimal yapısal çözümler geliştirmeyi amaçlar.",
    areas: [
      "Yüksek Yapılar", "Anıtsal Yapılar", "Kültür Yapıları", "Eğitim Yapıları",
      "Sağlık Yapıları", "Konut Yapıları", "Ofis Yapıları", "Ticari Yapılar",
      "Karma Yapılar", "Üretim Yapıları", "Ulaşım Yapıları", "Özel Yapılar"
    ]
  },
  {
    id: 2,
    title: "BAĞIMSIZ TASARIM KONTROLÜ",
    icon: Shield,
    description: "Bağımsız tasarım kontrolü, projenin kalitesini artırmak, hataları azaltmak, uygunluk ve güvenlik seviyelerini sağlamak ve genel olarak projenin başarısını artırmak için önemlidir. Bu süreç, proje sahibi, müteahhit ve diğer paydaşlar arasında güvenilirlik ve şeffaflık sağlar."
  },
  {
    id: 3,
    title: "PERFORMANSA DAYALI TASARIM",
    icon: Target,
    description: "Performansa dayalı tasarım, bir yapı veya sistem tasarımının, belirli performans kriterlerini karşılayacak şekilde optimize edilmesini sağlayan bir yaklaşımdır. İşveren ile performans hedeflerini belirler, bu hedefler doğrultusunda doğrusal olmayan analiz yöntemlerini kullanarak tasarımın gerçekliğini kontrol ederiz."
  },
  {
    id: 4,
    title: "MESLEKİ KONTROLLÜK",
    icon: FileCheck,
    description: "Her türlü yapısal projenin tasarım aşamasından imalat aşamasına kadar geçen süreç içerisinde geliştirilmesinde işveren, müteahhit, imalatçı ve proje yöneticileri ile işbirliği içerisinde çalışırız. BIM koordinasyonu, çelik bağlantı detay tasarımı ve maliyet analizi hizmetleri sunmaktayız."
  },
  {
    id: 5,
    title: "YAPISAL DANIŞMANLIK",
    icon: Ruler,
    description: "Proje sahibi, mimarlar, mühendisler ve diğer paydaşlarla işbirliği yaparak yapısal mühendislik açısından uzmanlık sağlarız. Projenin bütünlüğünü, kalitesini ve güvenliğini sağlamak için gerekli teknik bilgi ve deneyimi sunarız."
  },
  {
    id: 6,
    title: "ELEKTRİK TESİSAT PROJELERİ",
    icon: Zap,
    description: "Elektrik tesisat projeleri, bir binanın veya tesisin elektrik ihtiyaçlarını karşılamak için tasarlanan elektrik sistemlerini içeren planları ifade eder. Elektrik dağıtımı, aydınlatma, güç altyapısı, iletişim ve güvenlik sistemleri konularında çözümler üretiriz."
  },
  {
    id: 7,
    title: "MEKANİK TESİSAT PROJELERİ",
    icon: Cog,
    description: "Mekanik tesisat projeleri, bir binanın içindeki ortamı kontrol etmek ve yönetmek için tasarlanan sistemleri içerir. Sıcaklık, havalandırma, su temini, drenaj, gaz dağıtımı ve yangın söndürme sistemleri için optimal çözümler geliştiririz."
  }
]

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-primary to-primary-600 pt-14">
        <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-primary-600/10 ring-1 ring-primary-50 sm:-mr-80 lg:-mr-96" />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-600 to-primary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hizmetlerimiz</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Modern mühendislik çözümleri ve profesyonel yaklaşımımızla, projelerinizi en yüksek standartlarda hayata geçiriyoruz.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Services Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-100/5 hover:shadow-xl transition-all duration-300"
            >
              <div className="lg:flex lg:items-start lg:gap-x-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
                <div className="mt-6 lg:mt-0 lg:flex-1">
                  <div className="flex items-center gap-x-2">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <span className="text-sm text-primary">({service.subtitle})</span>
                    )}
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {service.description}
                  </p>
                  {service.areas && (
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-900">Hizmet Alanlarımız</h4>
                      <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {service.areas.map((area) => (
                          <li
                            key={area}
                            className="flex items-center gap-x-2 text-gray-600"
                          >
                            <Wrench className="h-4 w-4 text-primary" />
                            <span className="text-sm">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 