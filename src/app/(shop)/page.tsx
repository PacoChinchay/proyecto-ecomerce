import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1>hola Mundo</h1>
      <h1 className={titleFont.className}>hola Mundo</h1>
    </div>
  );
}
