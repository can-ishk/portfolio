export type Project = {
    id: number;
    name: string;
    description: string;
    url?: string;
    github: string;
    image: string;
    year: string;
    technologies?: string[];
}