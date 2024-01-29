import WhyCiseco from "../components/home/WhyCiseco"
import DiscoverMore from "../components/home/DiscoverMore"
import Hero from "../components/home/Hero"

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <Hero/>
      <DiscoverMore/>
      <WhyCiseco/>
    </main>
  )
}

export default Home