export type Job = {
    id: number;
    title: string;
    description: string;
    company: string;
    location: string;
    from: string;
    to?: string;
    current: boolean;
}