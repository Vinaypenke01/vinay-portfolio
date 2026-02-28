import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectDigitalCore from "@/assets/project-webora.png";
import projectSKB from "@/assets/project-skb.png";
import projectAura from "@/assets/projectstudio.png";
import galleryEstate from "@/assets/project-estate.png";
import galleryRoadways from "@/assets/project-roadways.png";
import galleryTailwind from "@/assets/project-tailwind.png";
import galleryVillas from "@/assets/project-villas.png";
import galleryInterior from "@/assets/projectinterior.png";

export const allProjects = [
  {
    image: projectDigitalCore,
    title: "Digital Core",
    description:
      "DigitalCore is an Indian digital marketing and web development agency offering services like SEO, mobile app development, e-commerce solutions, and cloud services to help businesses grow online",
    tag: "Web",
    techStack: ["React", "Framer", "Tailwind"],
    liveLink: "https://digitalcore.co.in/",
  },
  {
    image: projectSKB,
    title: "SKB",
    description:
      "A personal showcase website designed to highlight professional cinematography skills, artistic visuals, and contact details for collaboration.",
    tag: "Web",
    techStack: ["Next.js", "TypeScript", "Framer Motion"],
    liveLink: "https://cinematographer-portfolio.netlify.app/",
  },
  {
    image: projectAura,
    title: "Aura Studios",
    description:
      "✨ Aura Studios – A creative photography and videography portfolio showcasing South Indian wedding photography and cinematic visuals.",
    tag: "Web",
    techStack: ["React", "Vite", "Tailwind CSS"],
    liveLink: "https://gloden-hour-studio.netlify.app/",
  },
  {
    image: galleryEstate,
    title: "Elite layouts",
    description:
      "A premium real estate listing platform with advanced filtering and map integration.",
    tag: "Real Estate",
    techStack: ["React", "Node.js", "Mapbox"],
    liveLink: "https://elite-layouts-estates-demo.netlify.app/",
  },
  {
    image: galleryRoadways,
    title: "Roadway Cars",
    description:
      "Roadway Cars is a full-stack car rental web app built to enable seamless browsing and booking of rental vehicles with easy pickup/return options and featured car listings.",
    tag: "Logistics",
    techStack: ["React", "Express", "PostgreSQL"],
    liveLink: "https://roadwaycars.pythonanywhere.com/",
  },
  {
    image: galleryVillas,
    title: "Prestige Villa Stay",
    description:
      "Designed to highlight property features with sleek UI, easy navigation, and emphasis on visual appeal to enhance user experience.",
    tag: "Hospitality",
    techStack: ["Next.js", "Prisma", "Stripe"],
    liveLink: "https://premium-properties01.netlify.app/",
  },
  {
    image: galleryInterior,
    title: "Studio Aarna",
    description:
      "A clean, responsive portfolio demo built with modern web technologies to showcase Studio Aarna Interiors’ design services and project highlights.",
    tag: "Design",
    techStack: ["React", "Framer Motion", "GSAP"],
    liveLink: "https://studio-aarna-interiors-demo.netlify.app/",
  },
  {
    image: galleryTailwind,
    title: "Tailwind UI",
    description:
      "A clean, responsive UI project built using Tailwind CSS utility classes to quickly prototype frontend layouts with minimal custom CSS.",
    tag: "Tooling",
    techStack: ["Tailwind", "React", "Radix UI"],
    liveLink: "https://tailwind-tails.netlify.app/",
  },
];

const SelectedWork = () => {
  const displayedProjects = allProjects.slice(0, 3);

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
            Selected Work
          </h2>
          <Link
            to="/projects"
            className="hidden md:inline-flex text-sm font-sans text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground hover:border-foreground pb-1"
          >
            See All
          </Link>
        </motion.div>

        <div className="space-y-20">
          {displayedProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col md:flex-row items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-serif text-foreground">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-sans font-medium tracking-widest px-2 py-1 rounded bg-secondary text-secondary-foreground uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-muted-foreground font-sans max-w-lg text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6 flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex text-sm font-sans text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <span className="text-xs font-sans font-medium tracking-widest px-4 py-2 rounded-full border border-border text-muted-foreground">
                  {project.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
