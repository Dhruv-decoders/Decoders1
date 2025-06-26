import "./globals.css";
import HomeHero1 from "@/components/Heroes/HomeHero1";
import HomeHero2 from "@/components/Heroes/HomeHero2";
import HomeHero3 from "@/components/Heroes/HomeHero3";
import HomeHero4 from "@/components/Heroes/HomeHero4";
import SubscribeSection from "@/components/subscribe/SubscribeSection";
export default function Home() {
  return (
    <div>
      <HomeHero1 />

      <HomeHero2 />
      <HomeHero3/>
      <HomeHero4 />
      <SubscribeSection />
    </div>
  );
}
