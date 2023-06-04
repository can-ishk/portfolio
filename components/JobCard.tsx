import { Job } from "@/types/job";
import styles from "../styles/JobCard.module.css";

export default function JobCard(job: Job) {
    return (
        <div className={styles.container}>
            <p>{job.from} - {job.current?"Present":job.to}</p>
            <span className={styles.jobContainer}>
            <span className={styles.jobName}>{job.title}</span>
            <br/>
            <span className={styles.companyName}>{job.company}</span>
            </span>
        </div>
    )
}