import { Laptop, MonitorSmartphone, PackageCheck, UserSearch, Users, Briefcase, type LucideIcon } from "lucide-react";
import clientOperationsPortrait from "@/assets/client-operations-portrait.jpg";
import clientRecruitingPortrait from "@/assets/client-recruiting-portrait.jpg";
import clientWorkforcePortrait from "@/assets/client-workforce-portrait.jpg";
import professionalEquipmentPortrait from "@/assets/professional-equipment-portrait.jpg";
import professionalRecruitingPortrait from "@/assets/professional-recruiting-portrait.jpg";
import professionalRemotePortrait from "@/assets/professional-remote-portrait.jpg";
import professionalWorkforcePortrait from "@/assets/professional-workforce-portrait.jpg";

export type Service = {
  slug: string; title: string; icon: LucideIcon; short: string; description: string;
  activities: string[]; note?: string;
};

export const services: Service[] = [
  { slug: "it-equipment-device-support", title: "IT Equipment & Device Support", icon: Laptop,
    short: "Technology equipment coordination, device handling, delivery, recovery, and authorized support processes.",
    description: "Collabio helps coordinate the handling, delivery, recovery, and return of business technology equipment through organized processes and clear instructions.",
    activities: ["Equipment delivery coordination", "Laptop receiving and custody tracking", "Device inventory and identification", "Authorized equipment condition checks", "Return shipping coordination", "Equipment status updates"],
    note: "Equipment remains untouched and unpowered unless the client has explicitly authorized the relevant action. All inspection, testing, access, and shipping activities follow documented client instructions." },
  { slug: "remote-technology-support", title: "Remote Technology Support", icon: MonitorSmartphone,
    short: "Flexible technology support and coordination through client-approved remote access arrangements.",
    description: "Flexible technology support and coordination designed to help clients manage distributed work and authorized device access requirements.",
    activities: ["Remote support coordination", "Device availability coordination", "Client-approved remote access arrangements", "Technical workflow assistance", "Equipment and access coordination"],
    note: "Remote access is always authorized by the client and follows their security, identity verification, network, location, and access-control requirements." },
  { slug: "it-asset-recovery-logistics", title: "IT Asset Recovery & Logistics", icon: PackageCheck,
    short: "Structured handling, tracking, inspection coordination, and return shipping of client-owned equipment.",
    description: "Organized equipment recovery and return processes that help businesses maintain visibility and accountability for their technology assets.",
    activities: ["Receiving returned equipment", "Recording device information and condition", "Secure temporary storage", "Following client-provided inspection procedures", "Coordinating FedEx, USPS, or other approved shipping", "Shipping confirmation and tracking details"] },
  { slug: "recruiting-talent-solutions", title: "Recruiting & Talent Solutions", icon: UserSearch,
    short: "Helping businesses connect with qualified professionals for technical and operational requirements.",
    description: "Helping organizations identify and connect with professionals who match their technical and operational requirements.",
    activities: ["Technical recruiting coordination", "Candidate sourcing", "Resume and profile collection", "Initial screening coordination", "Interview scheduling", "Candidate communication", "Recruiting workflow support"] },
  { slug: "workforce-professional-support", title: "Workforce & Professional Support", icon: Users,
    short: "Connecting individuals with professional opportunities and coordinating workforce-related processes.",
    description: "Connecting professionals with opportunities and helping coordinate workforce-related processes.",
    activities: ["Professional profile submissions", "Opportunity matching", "Candidate communication", "Application coordination", "Onboarding coordination where authorized"] },
  { slug: "business-operations-support", title: "Business Operations Support", icon: Briefcase,
    short: "Helping organizations manage selected administrative and operational responsibilities more efficiently.",
    description: "Flexible operational assistance for selected business activities, allowing organizations to focus more attention on their core objectives.",
    activities: ["Administrative coordination", "Documentation support", "Workflow organization", "Communication coordination", "Project and operational assistance"] },
];

export type Job = {
  slug: string; title: string; category: string; location: string; arrangement: "Remote" | "Hybrid" | "On-site";
  type: "Full-time" | "Contract" | "Part-time" | "Project-based"; level: "Entry" | "Mid" | "Senior";
  summary: string; posted: string; compensation?: string;
  responsibilities: string[]; required: string[]; preferred: string[];
};

// SAMPLE DATA — clearly labeled in the UI. Replace with real listings.
export const jobs: Job[] = [
  { slug: "full-stack-developer", title: "Full-Stack Developer", category: "Full-Stack Development", location: "United States", arrangement: "Remote", type: "Contract", level: "Mid",
    summary: "Build and maintain web applications across frontend and backend for client projects.", posted: "2026-11-02",
    responsibilities: ["Develop features across React and Node.js codebases", "Collaborate with project leads on requirements", "Write clean, tested, documented code"],
    required: ["3+ years of full-stack experience", "Strong TypeScript skills", "Experience with REST APIs and SQL"], preferred: ["Cloud deployment experience", "Prior contract work"] },
  { slug: "it-support-specialist", title: "IT Support Specialist", category: "IT Support", location: "Austin, TX", arrangement: "On-site", type: "Full-time", level: "Entry",
    summary: "Coordinate device intake, documentation, and authorized support for client equipment.", posted: "2026-10-28",
    responsibilities: ["Receive and log client equipment", "Follow documented handling procedures", "Communicate status updates"],
    required: ["1+ year in IT support", "Detail-oriented and organized"], preferred: ["CompTIA A+ or similar"] },
  { slug: "cloud-devops-engineer", title: "Cloud & DevOps Engineer", category: "Cloud and DevOps", location: "United States", arrangement: "Remote", type: "Project-based", level: "Senior",
    summary: "Design and maintain cloud infrastructure and CI/CD pipelines for client engagements.", posted: "2026-10-20",
    responsibilities: ["Manage infrastructure as code", "Improve deployment pipelines", "Support security and monitoring"],
    required: ["5+ years DevOps experience", "AWS or GCP expertise", "Terraform"], preferred: ["Kubernetes", "Security certifications"] },
  { slug: "talent-coordinator", title: "Recruiting & Talent Coordinator", category: "Recruiting and Talent Coordination", location: "New York, NY", arrangement: "Hybrid", type: "Full-time", level: "Mid",
    summary: "Coordinate candidate communication, interview scheduling, and recruiting workflows.", posted: "2026-10-15",
    responsibilities: ["Schedule interviews", "Manage candidate pipelines", "Maintain clear records"],
    required: ["2+ years recruiting coordination", "Excellent communication"], preferred: ["ATS experience"] },
];

export const categories = ["Software Development", "Frontend Engineering", "Backend Engineering", "Full-Stack Development", "AI and Machine Learning", "Cloud and DevOps", "IT Support", "Technical Operations", "Business Operations", "Recruiting and Talent Coordination", "Administrative Support"];

export type Testimonial = {
  id: string;
  quote: string;
  topic: string;
  relationship: string;
  name?: string;
  title?: string;
  company?: string;
  portrait?: string;
  portraitAlt?: string;
  disclosure?: string;
};

// Illustrative quotes supplied in the brief, not genuine endorsements.
export const clientTestimonialSamples: Testimonial[] = [
  { id: "client-operations", topic: "IT Operations", relationship: "Client perspective", portrait: clientOperationsPortrait, portraitAlt: "AI-generated illustrative business professional portrait", disclosure: "Illustrative quote · AI-generated portrait", quote: "Collabio has been a valuable support partner for our equipment coordination needs. Their communication and attention to detail have helped make our operations more organized and efficient." },
  { id: "client-recruiting", topic: "Recruiting", relationship: "Business partner perspective", portrait: clientRecruitingPortrait, portraitAlt: "AI-generated illustrative business professional portrait", disclosure: "Illustrative quote · AI-generated portrait", quote: "The Collabio team understands our hiring requirements and consistently works to connect us with professionals who match our needs. We appreciate their responsiveness and professional approach." },
  { id: "client-workforce", topic: "Workforce Solutions", relationship: "Client perspective", portrait: clientWorkforcePortrait, portraitAlt: "AI-generated illustrative business professional portrait", disclosure: "Illustrative quote · AI-generated portrait", quote: "Working with Collabio has made workforce coordination much easier. Their flexibility and commitment to supporting our business operations have been impressive." },
];

export const professionalTestimonialSamples: Testimonial[] = [
  { id: "professional-equipment", topic: "Equipment Support", relationship: "Employee perspective", portrait: professionalEquipmentPortrait, portraitAlt: "AI-generated illustrative technology professional portrait", disclosure: "Illustrative quote · AI-generated portrait", quote: "The onboarding process was straightforward, and the team provided clear instructions throughout the equipment coordination process. Communication made everything much easier." },
  { id: "professional-recruiting", topic: "Recruiting Support", relationship: "Contractor perspective", portrait: professionalRecruitingPortrait, portraitAlt: "AI-generated illustrative technology professional portrait", disclosure: "Illustrative quote · AI-generated portrait", quote: "I appreciate the opportunity to work with Collabio. The team is responsive, professional, and supportive. It's been a positive experience working with them." },
  { id: "professional-remote", topic: "Remote Technical Support", relationship: "Employee perspective", portrait: professionalRemotePortrait, portraitAlt: "AI-generated illustrative technology professional portrait", disclosure: "Illustrative quote · AI-generated portrait", quote: "I enjoy working with a team that values technical skills, accountability, and communication. The flexibility and professional environment are great." },
  { id: "professional-workforce", topic: "Workforce Coordination", relationship: "Professional network perspective", portrait: professionalWorkforcePortrait, portraitAlt: "AI-generated illustrative technology professional portrait", disclosure: "Illustrative quote · AI-generated portrait", quote: "Collabio has provided a good opportunity to develop my professional experience. The team keeps communication organized and makes sure expectations are clear." },
];
