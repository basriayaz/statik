import Navbar from "@/components/navbar"

export default function IletisimLayout({
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