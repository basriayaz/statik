"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Building2, Search } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Lotus Meydan",
    category: "Konut",
    image: "/images/projects/lotus-meydan.webp",
  },
  {
    id: 2,
    title: "Lotus KORU",
    category: "Konut",
    image: "/images/projects/lotus-koru.webp",
  },
  {
    id: 3,
    title: "Nefes Atakent",
    category: "Konut",
    image: "/images/projects/nefes-atakent.webp",
  },
  {
    id: 4,
    title: "Brand Atakent 2",
    category: "Konut",
    image: "/images/projects/brand-atakent-2.webp",
  },
  {
    id: 5,
    title: "Brand Atakent 1",
    category: "Konut",
    image: "/images/projects/brand-atakent-1.webp",
  },
  {
    id: 6,
    title: "Panorama Büyükçekmece",
    category: "Konut",
    image: "/images/projects/panorama-buyukcekmece.webp",
  },
  {
    id: 7,
    title: "Kağıthane Gül Yapı",
    category: "Konut",
    image: "/images/projects/kagithane-gul-yapi.webp",
  },
  {
    id: 8,
    title: "İsmail Altun",
    category: "Konut",
    image: "/images/projects/ismail-altun.webp",
  },
  {
    id: 9,
    title: "Alya Trio",
    category: "Konut",
    image: "/images/projects/alya-trio.webp",
  },
  {
    id: 10,
    title: "Batıköy Konut",
    category: "Konut",
    image: "/images/projects/batikoy-konut.webp",
  },
  {
    id: 11,
    title: "Hüseyin Öztürk Fabrika",
    category: "Endüstriyel",
    image: "/images/projects/huseyin-ozturk-fabrika.webp",
  },
  {
    id: 12,
    title: "Marmara Konakları",
    category: "Konut",
    image: "/images/projects/marmara-konaklari.webp",
  },
  {
    id: 13,
    title: "Modern Eğitim Koleji",
    category: "Eğitim",
    image: "/images/projects/modern-egitim-koleji.webp",
  },
  {
    id: 14,
    title: "Sahil Konakları",
    category: "Konut",
    image: "/images/projects/sahil-konaklari.webp",
  },
  {
    id: 15,
    title: "Tesa",
    category: "Ticari",
    image: "/images/projects/tesa.webp",
  },
  {
    id: 16,
    title: "Hadımköy Cami",
    category: "Dini",
    image: "/images/projects/hadimkoy-cami.webp",
  },
  {
    id: 17,
    title: "Avcılar Otel",
    category: "Otel",
    image: "/images/projects/avcilar-otel.webp",
  },
  {
    id: 18,
    title: "Kuğulu Park",
    category: "Ticari",
    image: "/images/projects/kugulu-park.webp",
  },
  {
    id: 19,
    title: "Alya Onist",
    category: "Konut",
    image: "/images/projects/alya-onist.webp",
  },
  {
    id: 20,
    title: "Zigana AVM",
    category: "AVM",
    image: "/images/projects/zigana-avm.webp",
  },
  {
    id: 21,
    title: "Beyoğlu Konut",
    category: "Konut",
    image: "/images/projects/beyoglu-konut.webp",
  },
  {
    id: 22,
    title: "Engin Grup",
    category: "Ticari",
    image: "/images/projects/engin-grup.webp",
  },
  {
    id: 23,
    title: "Bomonti Otel",
    category: "Otel",
    image: "/images/projects/bomonti-otel.webp",
  },
  {
    id: 24,
    title: "İmamoğlu İnşaat",
    category: "Ticari",
    image: "/images/projects/imamoglu-insaat.webp",
  },
  {
    id: 25,
    title: "Palm Marin",
    category: "Konut",
    image: "/images/projects/palm-marin.webp",
  },
  {
    id: 26,
    title: "Pagev",
    category: "Ticari",
    image: "/images/projects/pagev.webp",
  },
  {
    id: 27,
    title: "Oto Galeri",
    category: "Ticari",
    image: "/images/projects/oto-galeri.webp",
  },
  {
    id: 28,
    title: "Mabeyn Sahil",
    category: "Konut",
    image: "/images/projects/mabeyn-sahil.webp",
  },
]

const categories = ["Tümü", "Konut", "Ticari", "Endüstriyel", "Otel", "AVM", "Eğitim", "Dini"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "Tümü" || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white pt-24 pb-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.50),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-primary/5 ring-1 ring-primary/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Projelerimiz
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              2014'ten beri tamamladığımız seçkin projelerimizi inceleyebilirsiniz.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Proje ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border-0 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:w-64"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0" />
                <div className="absolute bottom-0 p-6">
                  <div className="flex items-center gap-x-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-white">{project.category}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
} 