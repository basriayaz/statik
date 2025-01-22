"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              İletişim
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Projeleriniz için bizimle iletişime geçin.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-600 p-8 text-white"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Telefon</h3>
            <p className="mt-2 text-white/90">
              Bize hemen ulaşın, size yardımcı olmaktan mutluluk duyarız.
            </p>
            <Link
              href="tel:+905448060800"
              className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-white hover:text-white/90"
            >
              +90 544 806 08 00
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-600 p-8 text-white"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">E-posta</h3>
            <p className="mt-2 text-white/90">
              Projeleriniz için detaylı bilgi almak ister misiniz?
            </p>
            <Link
              href="mailto:sacikyunus@gmail.com"
              className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-white hover:text-white/90"
            >
              sacikyunus@gmail.com
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-600 p-8 text-white"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Çalışma Saatleri</h3>
            <div className="mt-2 space-y-1 text-white/90">
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 10:00 - 14:00</p>
              <p>Pazar: Kapalı</p>
            </div>
            <Link
              href="https://wa.me/905448060800"
              target="_blank"
              className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-white hover:text-white/90"
            >
              WhatsApp&apos;dan Mesaj Gönderin
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 overflow-hidden rounded-3xl bg-white shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.654552678928!2d28.63372687679689!3d40.986443571249514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fc19ca8d3a5%3A0x57d1a458c7c9557e!2zQWRuYW4gS2FodmVjaSwgRGF2dXRwYcWfYSBDZC4gTm86MTAsIDM0NTIwIEJleWxpa2TDvHrDvC_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1710195547492!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900">Adres</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Adnan Kahveci Mahallesi, Davutpaşa Caddesi No:10
                <br />
                İMKA GOLD sitesi A blok No:22
                <br />
                Beylikdüzü, İstanbul
              </p>
              <Link
                href="https://maps.google.com"
                target="_blank"
                className="mt-6 inline-flex items-center gap-x-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
              >
                Yol Tarifi Al
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 