import Navbar from "@/components/navbar"

export default function HakkimizdaLayout({
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