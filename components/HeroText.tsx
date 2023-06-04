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
    url: "https://github.com/can-ishk",
    icon: "icons/github.svg",
  },
  {
    id: 3,
    name: "CV",
    url: "https://www.linkedin.com/in/kanishk-chathley/details/featured/1635527520585/single-media-viewer?type=DOCUMENT&profileId=ACoAADFm0dsB6RkuctKI_mzp8V_jdJgRyJ6jbBk&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_featured_details%3BzutlpZIxTC",
    icon: "icons/resume.svg",
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
          <li className={styles.subtitle}>Cloud Engineer</li>
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
