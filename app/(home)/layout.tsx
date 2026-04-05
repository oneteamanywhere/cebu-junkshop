import Header from "@/container/Header"
import Stats from "./Stats"



const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />

  


      {children}
    </div>
  )
}

export default HomeLayout