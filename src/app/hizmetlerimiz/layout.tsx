import Navbar from "@/components/navbar"

export default function HizmetlerimizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar isDark={true} />
      {children}
    </>
  )
} 