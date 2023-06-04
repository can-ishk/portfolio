import { Social } from "@/types/social";
import styles from "../styles/HeroText.module.css";
import SocialLink from "./SocialLink";

const socials: Social[] = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/kanishk-chathley/",
    icon: "icons/linkedin.svg",
  },
  {
    id: 2,
    name: "GitHub",
    url: "",
    icon: "icons/github.svg",
  },
];

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Kanishk Chathley</h1>
      <div className={styles.subtitleContainer}>
        <ul className={styles.subtitleList}>
          <li className={styles.subtitle}>Software Engineer</li>
          <li className={styles.subtitle}>Technology Enthusiast</li>
          <li className={styles.subtitle}>Full Stack Developer</li>
        </ul>
      </div>
      {/* <h2 className={styles.subtitle}>Software Engineer</h2> */}
      <div className={styles.socials}>
        {socials.map((social) => (
          <SocialLink key={social.id} {...social} />
        ))}
      </div>
    </div>
  );
}
