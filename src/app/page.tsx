"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2940&auto=format&fit=crop"
          alt="Hero"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              İnşaat Sektöründe Yenilikçi Mühendislik Çözümleri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-200"
            >
              2014&apos;ten beri müşterilerimize en yüksek kalitede hizmet sunuyor, projelerindeki başarılarını artırmak için teknik uzmanlığımızı kullanıyoruz.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="/hizmetlerimiz"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="/iletisim"
                className="rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
              >
                İletişime Geç
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
            >
              Profesyonel Hizmetler
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Hizmetlerimiz
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Endüstri lideri ekibimizle, her projeniz için en iyi mühendislik çözümlerini sunuyoruz.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2940&auto=format&fit=crop"
                  alt="Yapısal Tasarım"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white">Yapısal Tasarım (Statik Proje)</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Betonarme Yapı Tasarımı</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Çelik Yapı Tasarımı</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Güçlendirme Projeleri</span>
                  </li>
                </ul>
                <Link
                  href="/hizmetlerimiz"
                  className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-primary hover:text-primary-600"
                >
                  Detaylı Bilgi
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2940&auto=format&fit=crop"
                  alt="Bağımsız Tasarım Kontrolü"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white">Bağımsız Tasarım Kontrolü</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Proje Kontrol ve Denetimi</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Yapı Denetimi</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Teknik Müşavirlik</span>
                  </li>
                </ul>
                <Link
                  href="/hizmetlerimiz"
                  className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-primary hover:text-primary-600"
                >
                  Detaylı Bilgi
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop"
                  alt="Danışmanlık"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white">Danışmanlık Hizmetleri</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Fizibilite Çalışmaları</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Keşif ve Ön Değerlendirme</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Teknik Danışmanlık</span>
                  </li>
                </ul>
                <Link
                  href="/hizmetlerimiz"
                  className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-primary hover:text-primary-600"
                >
                  Detaylı Bilgi
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Additional Services */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop"
                  alt="Rölöve Projeleri"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white">Rölöve Projeleri</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Mevcut Yapı Ölçümleri</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Detaylı Çizimler</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>3D Modellemeler</span>
                  </li>
                </ul>
                <Link
                  href="/hizmetlerimiz"
                  className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-primary hover:text-primary-600"
                >
                  Detaylı Bilgi
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2901&auto=format&fit=crop"
                  alt="Kentsel Dönüşüm"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white">Kentsel Dönüşüm</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Risk Tespiti</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Yenileme Projeleri</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Danışmanlık</span>
                  </li>
                </ul>
                <Link
                  href="/hizmetlerimiz"
                  className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-primary hover:text-primary-600"
                >
                  Detaylı Bilgi
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="relative h-60">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2940&auto=format&fit=crop"
                  alt="Özel Projeler"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0" />
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white">Özel Projeler</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="mt-2 space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Endüstriyel Yapılar</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Ticari Binalar</span>
                  </li>
                  <li className="flex items-center gap-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>Özel Tasarımlar</span>
                  </li>
                </ul>
                <Link
                  href="/hizmetlerimiz"
                  className="mt-6 inline-flex items-center gap-x-2 text-sm font-semibold text-primary hover:text-primary-600"
                >
                  Detaylı Bilgi
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5 via-primary/5 to-transparent py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-primary/10 ring-1 ring-primary/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
            >
              Neden Biz?
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              10 Yıllık Deneyim ve Uzmanlık
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              2014&apos;ten beri inşaat sektöründe edindiğimiz deneyim ve uzmanlıkla, projeleriniz için en iyi çözümleri sunuyoruz.
            </motion.p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-16"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Uzman Ekip
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Her biri kendi alanında deneyimli mühendislerden oluşan profesyonel kadro.
              </dd>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-16"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Kaliteli Hizmet
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                En yüksek standartlarda mühendislik çözümleri ve müşteri memnuniyeti.
              </dd>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative pl-16"
            >
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                  <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Güvenilir Çözümler
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Yenilikçi yaklaşımlarla güvenli ve sürdürülebilir projeler.
              </dd>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="flex flex-col-reverse gap-y-3 rounded-2xl bg-white/60 p-8 ring-1 ring-gray-900/10">
              <dt className="text-base leading-7 text-gray-600">Tamamlanan Proje</dt>
              <dd className="text-3xl font-semibold tracking-tight text-gray-900">500+</dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 rounded-2xl bg-white/60 p-8 ring-1 ring-gray-900/10">
              <dt className="text-base leading-7 text-gray-600">Mutlu Müşteri</dt>
              <dd className="text-3xl font-semibold tracking-tight text-gray-900">300+</dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 rounded-2xl bg-white/60 p-8 ring-1 ring-gray-900/10">
              <dt className="text-base leading-7 text-gray-600">Yıllık Tecrübe</dt>
              <dd className="text-3xl font-semibold tracking-tight text-gray-900">10+</dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 rounded-2xl bg-white/60 p-8 ring-1 ring-gray-900/10">
              <dt className="text-base leading-7 text-gray-600">Uzman Mühendis</dt>
              <dd className="text-3xl font-semibold tracking-tight text-gray-900">20+</dd>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Projeniz için Hemen İletişime Geçin
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90"
            >
              Size en uygun çözümü sunmak için hazırız. Hemen iletişime geçin, projenizi birlikte hayata geçirelim.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center gap-x-6"
            >
              <Link
                href="https://wa.me/905448060800"
                target="_blank"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-white/90"
              >
                WhatsApp&apos;dan Mesaj Gönderin
              </Link>
              <Link
                href="tel:+905448060800"
                className="text-sm font-semibold leading-6 text-white transition-colors hover:text-white/90"
              >
                Hemen Arayın <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Background pattern */}
        <div
          className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-primary-500 to-primary-300 opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </section>
    </main>
  )
} 