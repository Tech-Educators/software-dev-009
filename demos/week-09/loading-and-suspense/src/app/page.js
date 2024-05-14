import Image from "next/image";
import Alpaca from "@/assets/alpaca.webp";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Image src={Alpaca} alt="Alpaca lunch" />
    </div>
  );
}
