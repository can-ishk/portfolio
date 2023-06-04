import { Social } from "@/types/social";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/SocialLink.module.css";
export default function SocialLink(props: Social) {

    return(
        <div className={styles.container}>
            <Link href={props.url}>
                <Image src={props.icon} alt={props.name} width={50} height={50} />
            </Link>
        </div>
    )

}