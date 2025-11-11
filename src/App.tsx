import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Categories } from "./components/Categories";
import { PopularDishes } from "./components/PopularDishes";
import { HowItWorks } from "./components/HowItWorks";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <PopularDishes />
      <HowItWorks />
      <Footer />
    </div>
  );
}
