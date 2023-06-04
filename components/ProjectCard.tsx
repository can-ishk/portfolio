import { Project } from "@/types/project";
import styles from "../styles/ProjectCard.module.css";
import Link from "next/link";

export default function ProjectCard(project: Project) {
    return (
        <div className={styles.container}>
            <p>{project.year}/</p>
            <Link target="_blank" className={styles.projectName} href={project.url?project.url:project.github}>
            <span >{project.name}</span>
            </Link>
        </div>
    )
}