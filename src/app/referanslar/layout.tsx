import Navbar from "@/components/navbar"

export default function ReferanslarLayout({
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