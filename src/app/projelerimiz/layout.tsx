import Navbar from "@/components/navbar"

export default function ProjelerimizLayout({
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