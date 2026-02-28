import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { allProjects } from "@/components/SelectedWork";
import { ArrowLeft } from "lucide-react";

const Projects = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
                    >
                        <div>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-foreground transition-all mb-8 group"
                            >
                                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Back to Home
                            </Link>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-tight">
                                All Projects.
                            </h1>
                        </div>
                        <p className="text-muted-foreground font-sans text-lg max-w-md leading-relaxed">
                            A collection of my work in web design, development, and brand identity.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {allProjects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="overflow-hidden rounded-2xl mb-8 border border-border">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[250px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-3xl font-serif text-foreground">
                                            {project.title}
                                        </h2>
                                        <span className="text-[10px] font-sans font-medium tracking-widest px-3 py-1 rounded-full border border-border text-muted-foreground">
                                            {project.tag}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span key={tech} className="text-[10px] font-sans font-medium tracking-widest px-2 py-1 rounded bg-secondary text-secondary-foreground uppercase">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="mt-2">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex text-sm font-sans font-medium text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
                                        >
                                            Live Link
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Projects;
