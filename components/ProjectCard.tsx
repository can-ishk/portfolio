import { Project } from "@/types/project";
import styles from "../styles/ProjectCard.module.css";

export default function ProjectCard(project: Project) {
    return (
        <div className={styles.container}>
            <p>{project.year}/</p>
            <span className={styles.projectName}>{project.name}</span>
        </div>
    )
}