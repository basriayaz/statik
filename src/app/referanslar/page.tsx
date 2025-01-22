"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const references = [
  { name: "ARTAŞ YAPI", image: "/images/references/1-ARTAS-YAPI-400x279-1.webp" },
  { name: "KİPTAŞ", image: "/images/references/2-KIPTAS-400x279-1.webp" },
  { name: "GÜL İNŞAAT", image: "/images/references/3-GUL-INSAAT-400x279-1.webp" },
  { name: "KİLER GYO", image: "/images/references/5-KILER-GYO-400x279-1.webp" },
  { name: "BOSS4 GAYRİMENKUL", image: "/images/references/6-BOSS4-GAYRIMENKUL-400x279-1.webp" },
  { name: "CEVAHİR HOLDİNG", image: "/images/references/7-CEVAHIR-HOLDING-400x279-1.webp" },
  { name: "BEYAZLAR İNŞAAT", image: "/images/references/9-BEYAZLAR-INSAAT-400x279-1.webp" },
  { name: "FOLKART", image: "/images/references/10-FOLKART-400x279-1.webp" },
  { name: "İMAMOĞLU İNŞAAT", image: "/images/references/11-IMAMOGLU-INSAAT-400x279-1.webp" },
  { name: "MUTLU İNŞAAT", image: "/images/references/12-MUTLU-INSAAT-400x279-1.webp" },
  { name: "AKKUŞ GRUP", image: "/images/references/13-AKKUS-GRUP-400x279-1.webp" },
  { name: "BEYAZ İNŞAAT", image: "/images/references/15-BEYAZ-INSAAT-400x279-1.webp" },
  { name: "FIRAT", image: "/images/references/16-FIRAT-400x279-1.webp" },
  { name: "HAKAN PLASTİK", image: "/images/references/17-HAKAN-PLASTIK-400x279-1.webp" },
  { name: "KOROZO", image: "/images/references/18-KOROZO-400x279-1.webp" },
  { name: "BAKIRCI YAPI", image: "/images/references/19-BAKIRCI-YAPI-400x279-1.webp" },
  { name: "LOTUS", image: "/images/references/20-LOTUS-400x279-1.webp" },
  { name: "DEMİR GRUP", image: "/images/references/21-DEMIR-GRUP-400x279-1.webp" },
  { name: "BELEDİYE", image: "/images/references/22-BELEDIYE-400x279-1.webp" },
  { name: "PAGEV", image: "/images/references/23-PAGEV-400x279-1.webp" },
  { name: "BİLGİÇLER", image: "/images/references/24-BILGICLER-400x279-1.webp" },
  { name: "MUYA", image: "/images/references/25-MUYA-400x279-1.webp" },
  { name: "SANICA", image: "/images/references/26-SANICA-400x279-1.webp" },
  { name: "CANAN İNŞAAT", image: "/images/references/27-CANAN-INSAAT-400x279-1.webp" },
  { name: "CEYLAN ŞEHİRCİLİK", image: "/images/references/28-CEYLAN-SEHIRCILIK-400x279-1.webp" },
  { name: "GÖKÇEADA BELEDİYESİ", image: "/images/references/29-GOKCEADA-BELEDIYESI-400x279-1.webp" },
  { name: "MARMARA MÜH. YAPI", image: "/images/references/30-MARMARA-MUH.YAPI-A.S.-400x279-1.webp" },
  { name: "SİNBO", image: "/images/references/31-SINBO-400x279-1.webp" },
  { name: "DORA PARK", image: "/images/references/32-DORA-PARK-400x279-1.webp" },
  { name: "ÖZEN MOTOR", image: "/images/references/33-OZEN-MOTOR-400x279-1.webp" },
  { name: "YUKİ MOTOR", image: "/images/references/34-YUKI-MOTOR-400x279-1.webp" },
  { name: "TESA YAPI", image: "/images/references/35-TESA-YAPI-400x279-1.webp" },
  { name: "AK YAPI", image: "/images/references/AK-YAPI-LOGO-400x260-1.webp" },
  { name: "BATIBEYLİ", image: "/images/references/batibey-400x279-1.webp" },
  { name: "BÜYÜKÇEKMECE", image: "/images/references/buyukcekmece-400x279-1.webp" },
  { name: "EMS", image: "/images/references/ems-400x279-1.webp" },
  { name: "YEMAR", image: "/images/references/yemar-400x279-1.webp" }
]

export default function ReferencesPage() {
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
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Referanslarımız</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Yılların deneyimi ve güveniyle birlikte çalıştığımız seçkin firmalar.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* References Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {references.map((reference, index) => (
            <motion.div
              key={reference.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-md ring-1 ring-gray-100/5 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={reference.image}
                  alt={reference.name}
                  width={400}
                  height={279}
                  className="h-full w-full object-contain object-center transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-center text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {reference.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 