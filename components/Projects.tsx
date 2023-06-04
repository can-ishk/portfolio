import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css";
import { useState } from "react";
import { Job } from "@/types/job";
import JobCard from "./JobCard";

const internships: Job[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Dell Technologies",
    description: "This is a job",
    location: "Bangalore, India",
    from: "May 2023",
    current: true,
  },
  {
    id: 2,
    title: "Cloud Engineering Intern",
    company: "Ameriprise Financial",
    description: "This is a job",
    location: "Bangalore, India",
    from: "June 2022",
    to: "August 2022",
    current: false,
  },
];

const projects: Project[] = [
  {
    id: 1,
    name: "MentorME: Effortless Collaboration",
    description: "This is a project",
    image: "/project1.png",
    url: "https://www.google.com",
    year: "2023",
  },
  {
    id: 2,
    name: "Sentiment Analysis Discord Bot",
    description: "This is a project",
    image: "/project1.png",
    url: "https://www.google.com",
    year: "2022",
  },
  {
    id: 3,
    name: "E - Cell SNU Website",
    description: "This is a project",
    image: "/project1.png",
    url: "https://www.google.com",
    year: "2022",
  },
  {
    id: 4,
    name: "Random Lyric Twitter Bot",
    description: "This is a project",
    image: "/project1.png",
    url: "https://www.google.com",
    year: "2021",
  },
  // {
  //   id: 5,
  //   name: "Project 1",
  //   description: "This is a project",
  //   image: "/project1.png",
  //   url: "https://www.google.com",
  //   year: "2021",
  // },
];

export default function Projects() {
  const [displayJobs, setDisplayJobs] = useState(true);
  // console.log(internships, projects);
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1
          className={
            !displayJobs
              ? [styles.heading, styles.disabled].join(" ")
              : styles.heading
          }
          onClick={() => setDisplayJobs(true)}
        >
          Internships
        </h1>
        <h1
          className={
            displayJobs
              ? [styles.heading, styles.disabled].join(" ")
              : styles.heading
          }
          onClick={() => setDisplayJobs(false)}
        >
          Projects
        </h1>
      </div>
      {displayJobs ? (
        <ul className={styles.projectList}>
          {internships.map((job) => (
            <li key={job.id}>
              <JobCard key={job.id} {...job} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className={styles.projectList}>
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard key={project.id} {...project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
