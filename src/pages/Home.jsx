import WhyCiseco from "../components/home/WhyCiseco";
import DiscoverMore from "../components/home/DiscoverMore";
import Hero from "../components/home/Hero";
import EarnMoney from "../components/home/EarnMoney";
import ShopByCategory from "../components/home/ShopByCategory";
import ChosenByExperts from "../components/home/ChosenByExperts";
import NewArrivals from "../components/home/NewArrivals";
import TryRadio from "../components/TryRadio";

const Home = () => {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <DiscoverMore />
      <NewArrivals />
      <WhyCiseco />
      <EarnMoney />
      <ChosenByExperts />
      <ShopByCategory />
    </main>
  );
};

export default Home;
