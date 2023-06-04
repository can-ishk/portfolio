import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";

const projects: Project[] = [
  {
    id: 1,
    name: "MentorME: Effortless Collaboration",
    description: "This is a project",
    image: "/project1.png",
    url: "https://www.google.com",
    year: "2021",
  },
  {
    id: 1,
    name: "Sentiment Analysis Discord Bot",
    description: "This is a project",
    image: "/project1.png",
    url: "https://www.google.com",
    year: "2021",
  },
  {
    id: 1,
    name: "E-Cell SNU Website",
    description: "This is a project",
    image: "/project1.png",
    url: "https://www.google.com",
    year: "2021",
  },
  {
    id: 1,
    name: "Random Lyric Twitter Bot",
    description: "This is a project",
    image: "/project1.png",
    url: "https://www.google.com",
    year: "2021",
  },
  {
    id: 1,
    name: "Project 1",
    description: "This is a project",
    image: "/project1.png",
    url: "https://www.google.com",
    year: "2021",
  },
];


export default function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <ul className={styles.projectList}>
      {projects.map((project) => (
        <li key={project.id}>
            <ProjectCard key={project.id} {...project} />
        </li>
      ))}
      </ul>
    </div>
  );
}
