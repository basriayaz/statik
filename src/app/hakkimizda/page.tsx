"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Users, BookOpen, Target, Building2, Rocket, Shield, Trophy } from "lucide-react"

const stats = [
  { id: 1, name: 'Yıllık Tecrübe', value: '10+' },
  { id: 2, name: 'Tamamlanan Proje', value: '500+' },
  { id: 3, name: 'Mutlu Müşteri', value: '300+' },
  { id: 4, name: 'Uzman Ekip', value: '20+' },
]

const team = [
  {
    name: "Yunus SAÇIK",
    role: "İnşaat Mühendisi",
    image: "/images/team/yunus.png",
  },
  {
    name: "Ahmet ÇELİKKOLLU",
    role: "Danışman / İnşaat Mühendisi",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Sema TOZAR",
    role: "İnşaat Mühendisi",
    image: "/images/team/sema.png",
  },
  {
    name: "Enes YANGIN",
    role: "İnşaat Mühendisi",
    image: "/images/team/enes.png",
  },
  {
    name: "Samet Kemal ÖZSOMUNCU",
    role: "İnşaat Mühendisi",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Bahar YANIK",
    role: "İnşaat Mühendisi",
    image: "/images/team/bahar.png",
  },
  {
    name: "Furkan BİLSİN",
    role: "Elektrik Elektronik Mühendisi",
    image: "/images/team/placeholder.png",
  },
  {
    name: "Furkan ÇELEBİ",
    role: "Makine Mühendisi",
    image: "/images/team/furkan-celebi.png",
  },
  {
    name: "Vedat YILDIZ",
    role: "İnşaat Mühendisi",
    image: "/images/team/vedat.png",
  },
  {
    name: "Rahmi Doğukan AKDEMİR",
    role: "Elektrik Elektronik Mühendisi",
    image: "/images/team/dogukan.png",
  },
]

const features = [
  {
    name: 'Profesyonel Yaklaşım',
    description: 'Her projede profesyonel ve sistematik bir yaklaşım benimsiyoruz.',
    icon: Building2,
  },
  {
    name: 'Yenilikçi Çözümler',
    description: 'Modern teknolojileri kullanarak yenilikçi çözümler üretiyoruz.',
    icon: Rocket,
  },
  {
    name: 'Güvenilir Hizmet',
    description: 'Güvenilir ve şeffaf bir hizmet anlayışıyla çalışıyoruz.',
    icon: Shield,
  },
  {
    name: 'Kalite Odaklı',
    description: 'En yüksek kalite standartlarında hizmet sunuyoruz.',
    icon: Trophy,
  },
]

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl"
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Statik Projeler ile Geleceği İnşa Ediyoruz
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  2014 yılından bu yana, inşaat sektöründe güvenilir ve yenilikçi çözümler sunuyoruz. Deneyimli ekibimiz ve modern yaklaşımımızla, projelerinizi en yüksek kalite standartlarında hayata geçiriyoruz.
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
              >
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <Image
                      src="/images/projects/avcilar-otel.webp"
                      alt="Proje 1"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={176}
                      height={264}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <Image
                      src="/images/projects/avcilar-otel.webp"
                      alt="Proje 2"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={176}
                      height={264}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/projects/avcilar-otel.webp"
                      alt="Proje 3"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      width={176}
                      height={264}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative isolate -mt-12 overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-24 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col-reverse gap-y-4">
                  <div className="text-base leading-7 text-gray-600">{stat.name}</div>
                  <div className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Neden Biz?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kaliteli ve Güvenilir Hizmet
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Müşteri memnuniyeti odaklı çalışma prensibimiz ve deneyimli ekibimizle, sektörde fark yaratıyoruz.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:mx-0"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ekibimiz</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Uzman kadromuz ile sizlere en iyi hizmeti sunmak için çalışıyoruz.
            </p>
          </motion.div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {team.map((person, index) => (
              <motion.li
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative">
                  <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100">
                    <Image
                      className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                      src={person.image}
                      alt={person.name}
                      width={400}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
} 