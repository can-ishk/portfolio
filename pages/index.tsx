import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Social } from "@/types/social";
import SocialLink from "@/components/SocialLink";
import Hero from "@/components/HeroText";
import Projects from "@/components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanishk Chathley | Portfolio</title>
        <meta name="description" content="Kanishk Chathley's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div className={styles.mainGrid}>
        <Hero />
        <Projects/>
      </div>
      </main>
    </>
  );
}
