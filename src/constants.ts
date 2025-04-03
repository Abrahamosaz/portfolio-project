import { nattypay } from "@/public/images";
import { mySkillSetsProps, projectCardProps } from "./types";
import { ai, api, cloud, code } from "@/public/icons";

export const AllProjects: projectCardProps[] = [
  {
    id: 1,
    previewSite: nattypay,
    title: "Outsourcing platform",
    description:
      "Every project, challenge, and collaboration has shaped me into the developer....",
    githubLink: "",
    hostedLink: "",
  },
  {
    id: 2,
    previewSite: nattypay,
    title: "Outsourcing platform",
    description:
      "Every project, challenge, and collaboration has shaped me into the developer....",
    githubLink: "",
    hostedLink: "",
  },
  {
    id: 3,
    previewSite: nattypay,
    title: "Outsourcing platform",
    description:
      "Every project, challenge, and collaboration has shaped me into the developer....",
    githubLink: "",
    hostedLink: "",
  },
  {
    id: 4,
    previewSite: nattypay,
    title: "Outsourcing platform",
    description:
      "Every project, challenge, and collaboration has shaped me into the developer....",
    githubLink: "",
    hostedLink: "",
  },
];

export const mySkillSets: mySkillSetsProps[] = [
  {
    id: 1,
    title: "Cloud & DevOps Solutions",
    description:
      "Deploying and managing cloud-based applications using AWS, Docker, Kubernetes, and CI/CD pipelines to keep your systems running smoothly.",
    icon: cloud,
  },
  {
    id: 2,
    title: "Full-Stack Development",
    description:
      "From front-end UI/UX to back-end architecture, I build high-performance web applications that deliver smooth user experiences and robust functionality.",
    icon: code,
  },
  {
    id: 3,
    title: "AI-Powered Applications",
    description:
      "Leveraging AI and machine learning to develop intelligent apps that automate tasks, analyze data, and enhance user interactions.",
    icon: ai,
  },
  {
    id: 4,
    title: "API Development & Integrations",
    description:
      "I design and implement RESTful and GraphQL APIs, integrating third-party services to ensure smooth communication between platforms.",
    icon: api,
  },
];
