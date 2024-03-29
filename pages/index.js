import Head from "next/head";
import Image from "next/image";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";
import Doctor from "../components/Doctor";
import DetailsCabinet from "../components/DetailsCabinet";
import Horaires from "../components/Horaires";
import Stories from "../components/Stories";
import RendezVous from "../components/RendezVous";
import ServiceCarousel from "../components/ServiceCarousel";
export default function Home() {
  return (
    <>
      <Head>
        <title>Cabinet Dentiste Tunisie | Dentiste Chirurgien tunisie</title>
        <link rel="canonical" href="https://tunisie-dentiste.tn/" />
      </Head>
      <br />
     
      <Slider />
      <Doctor title={true} />
      <DetailsCabinet />
      <ServiceCarousel />
      <RendezVous />
      <Stories />
      <Horaires />
    </>
  );
}
