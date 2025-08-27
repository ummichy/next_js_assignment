import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./_components/Banner";
import ProductHighlight from "./_components/ProductHighlight";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ProductHighlight></ProductHighlight>
    </div>
  );
}

