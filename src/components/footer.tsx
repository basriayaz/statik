"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const navigation = {
  main: [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
    { name: "Projelerimiz", href: "/projelerimiz" },
    { name: "Referanslar", href: "/referanslar" },
    { name: "İletişim", href: "/iletisim" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary/5">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">Statik Projeler</h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              2014'ten beri inşaat sektöründe yenilikçi mühendislik çözümleri sunuyoruz. Dürüstlük, kalite ve müşteri memnuniyeti önceliğimizdir.
            </p>
            <div className="mt-6 space-y-4">
              <div className="group flex items-center gap-x-3 transition-colors hover:text-primary">
                <Phone className="h-6 w-6 text-primary group-hover:text-primary-600" />
                <Link href="tel:+905448060800" className="text-sm text-gray-600 group-hover:text-primary">
                  +90 544 806 08 00
                </Link>
              </div>
              <div className="group flex items-center gap-x-3 transition-colors hover:text-primary">
                <Mail className="h-6 w-6 text-primary group-hover:text-primary-600" />
                <Link href="mailto:sacikyunus@gmail.com" className="text-sm text-gray-600 group-hover:text-primary">
                  sacikyunus@gmail.com
                </Link>
              </div>
              <div className="group flex items-start gap-x-3 transition-colors hover:text-primary">
                <MapPin className="h-6 w-6 text-primary group-hover:text-primary-600" />
                <Link
                  href="https://maps.google.com"
                  target="_blank"
                  className="text-sm text-gray-600 group-hover:text-primary"
                >
                  Adnan Kahveci Mahallesi, Davutpaşa Caddesi No:10
                  <br />
                  İMKA GOLD sitesi A blok No:22
                  <br />
                  Beylikdüzü, İstanbul
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Kurumsal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      Anasayfa
                    </Link>
                  </li>
                  <li>
                    <Link href="/hakkimizda" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      Hakkımızda
                    </Link>
                  </li>
                  <li>
                    <Link href="/ekibimiz" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      Ekibimiz
                    </Link>
                  </li>
                  <li>
                    <Link href="/projeler" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      Projeler
                    </Link>
                  </li>
                  <li>
                    <Link href="/referanslar" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      Referanslar
                    </Link>
                  </li>
                  <li>
                    <Link href="/iletisim" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      İletişim
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Hizmetlerimiz</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/hizmetlerimiz" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      Yapısal Tasarım (Statik Proje)
                    </Link>
                  </li>
                  <li>
                    <Link href="/hizmetlerimiz" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      Bağımsız Tasarım Kontrolü
                    </Link>
                  </li>
                  <li>
                    <Link href="/hizmetlerimiz" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      Performansa Dayalı Tasarım
                    </Link>
                  </li>
                  <li>
                    <Link href="/hizmetlerimiz" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      Mesleki Kontrollük
                    </Link>
                  </li>
                  <li>
                    <Link href="/hizmetlerimiz" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      Yapısal Danışmanlık
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">İletişim</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="https://wa.me/905448060800" target="_blank" className="text-sm leading-6 text-gray-600 transition-colors hover:text-primary">
                      WhatsApp'dan İletişime Geç
                    </Link>
                  </li>
                  <li className="text-sm leading-6 text-gray-600">
                    <span className="font-semibold text-gray-900">Çalışma Saatleri</span>
                    <br />
                    Pazartesi - Cuma: 09:00 - 18:00
                    <br />
                    Cumartesi: 10:00 - 14:00
                    <br />
                    Pazar: Kapalı
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex items-center justify-between border-t border-gray-900/10 pt-8"
        >
          <p className="text-xs leading-5 text-gray-600">
            &copy; {new Date().getFullYear()} Statik Projeler. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 transition-colors hover:text-primary"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}