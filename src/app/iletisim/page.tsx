"use client"

import { motion } from "framer-motion"
import { Building2, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">İletişim</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapalım.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Contact Cards */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
          >
            <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/5 to-primary/30 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <Phone className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">WhatsApp ile İletişim</h3>
              <p className="mt-4 text-base text-gray-600">
                7/24 WhatsApp üzerinden bize ulaşabilirsiniz. En kısa sürede dönüş yapacağız.
              </p>
              <Link
                href="https://wa.me/905448060800"
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-600"
              >
                WhatsApp'tan Mesaj Gönder
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
          >
            <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/5 to-primary/30 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <Mail className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">E-posta</h3>
              <p className="mt-4 text-base text-gray-600">
                E-posta yoluyla bizimle iletişime geçebilirsiniz. Detaylı bilgi ve talepleriniz için.
              </p>
              <Link
                href="mailto:sacikyunus@gmail.com"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-600"
              >
                E-posta Gönder
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Office Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
          >
            <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/5 to-primary/30 transition-transform duration-500 group-hover:scale-150" />
            <div className="relative">
              <Building2 className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Çalışma Saatleri</h3>
              <p className="mt-4 text-base text-gray-600">
                Pazartesi - Cuma: 09:00 - 18:00
                <br />
                Cumartesi: 10:00 - 14:00
                <br />
                Pazar: Kapalı
              </p>
            </div>
          </motion.div>
        </div>

        {/* Address Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <MapPin className="h-10 w-10 text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Ofis Adresimiz</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Adnan Kahveci Mahallesi,
                <br />
                Davutpaşa Caddesi No:10
                <br />
                İMKA GOLD sitesi A blok No:22
                <br />
                Beylikdüzü, İstanbul
              </p>
              <Link
                href="https://maps.google.com"
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-600"
              >
                Yol Tarifi Al
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="aspect-[4/3] lg:aspect-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.654552561035!2d28.628291776332688!3d40.986643571240275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fc19ca8d3a5%3A0x3d7c9cecc31c0644!2zQWRuYW4gS2FodmVjaSwgRGF2dXRwYcWfYSBDZC4gTm86MTAsIDM0NTIwIEJleWxpa2TDvHrDvC_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1708106136319!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 