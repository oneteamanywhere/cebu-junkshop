import Header from "@/container/Header"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default HomeLayout