import { nattypay, wth, jpgold, swiftreseller } from "@/public/images";
import { mySkillSetsProps, projectCardProps } from "./types";
import { ai, api, cloud, code } from "@/public/icons";

export const AllProjects: projectCardProps[] = [
  {
    id: 1,
    previewSite: nattypay,
    title: "NattyPay - Digital Payment Platform",
    description:
      "A modern fintech solution that enables secure digital payments and financial transactions. Built with a focus on user experience and security, featuring real-time payment processing, wallet management, and seamless fund transfers.",
    githubLink: "https://github.com/Abrahamosaz",
    hostedLink: "https://nattypay.com",
  },
  {
    id: 2,
    previewSite: wth,
    title: "WebTrendsHub Bills - Utility Bill Management",
    description:
      "A comprehensive utility bill management system that streamlines payment processing for various services. Features include automated billing, payment tracking, and an intuitive dashboard for managing multiple utility accounts in one place.",
    githubLink: "https://github.com/Abrahamosaz",
    hostedLink: "http://bills.webtrendshub.com",
  },
  {
    id: 3,
    previewSite: jpgold,
    title: "JP Gold - Cryptocurrency Trading Platform",
    description:
      "A sophisticated blockchain-based trading platform specializing in precious metals and cryptocurrencies. Features include real-time market data, secure wallet integration, advanced trading tools, and an intuitive interface for seamless trading experience.",
    githubLink: "https://github.com/Abrahamosaz",
    hostedLink: "https://new-jpgold.vercel.app",
  },
  {
    id: 4,
    previewSite: swiftreseller,
    title: "SwiftReseller - E-Commerce Management System",
    description:
      "A modern e-commerce management platform built with Next.js and Node.js, featuring inventory tracking, order management, and automated sales reporting. Integrated with multiple payment gateways and includes a responsive dashboard for real-time business analytics and customer order processing.",
    githubLink: "https://github.com/Abrahamosaz",
    hostedLink: "https://swiftreseller.com",
  },
];

export const WebProjects: projectCardProps[] = [
  {
    id: 1,
    previewSite: nattypay,
    title: "NattyPay - Digital Payment Platform",
    description:
      "A modern fintech solution that enables secure digital payments and financial transactions. Built with a focus on user experience and security, featuring real-time payment processing, wallet management, and seamless fund transfers.",
    githubLink: "https://github.com/Abrahamosaz",
    hostedLink: "https://nattypay.com",
  },
  {
    id: 2,
    previewSite: wth,
    title: "WebTrendsHub Bills - Utility Bill Management",
    description:
      "A comprehensive utility bill management system that streamlines payment processing for various services. Features include automated billing, payment tracking, and an intuitive dashboard for managing multiple utility accounts in one place.",
    githubLink: "https://github.com/Abrahamosaz",
    hostedLink: "http://bills.webtrendshub.com",
  },
  {
    id: 4,
    previewSite: swiftreseller,
    title: "SwiftReseller - E-Commerce Management System",
    description:
      "A modern e-commerce management platform built with Next.js and Node.js, featuring inventory tracking, order management, and automated sales reporting. Integrated with multiple payment gateways and includes a responsive dashboard for real-time business analytics and customer order processing.",
    githubLink: "https://github.com/Abrahamosaz",
    hostedLink: "https://swiftreseller.com",
  },
];

export const MobileProjects: projectCardProps[] = [];

export const BlockchainProjects: projectCardProps[] = [
  {
    id: 1,
    previewSite: jpgold,
    title: "JP Gold - Cryptocurrency Trading Platform",
    description:
      "A sophisticated blockchain-based trading platform specializing in precious metals and cryptocurrencies. Features include real-time market data, secure wallet integration, advanced trading tools, and an intuitive interface for seamless trading experience.",
    githubLink: "https://github.com/Abrahamosaz",
    hostedLink: "https://new-jpgold.vercel.app",
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
