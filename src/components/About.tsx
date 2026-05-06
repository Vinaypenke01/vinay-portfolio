import { motion } from "framer-motion";
import aboutPortrait from "@/assets/about-portrait-1.png";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutPortrait}
              alt="About Vinay"
              className="w-full max-w-md rounded-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary text-sm font-sans font-medium tracking-widest uppercase">
              About
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-foreground leading-tight">
              Building innovative applications with Generative AI tools.
            </h2>
            <p className="mt-6 text-muted-foreground font-sans leading-relaxed">
              I am a Software Engineer with 10 months of hands-on experience building modern full-stack and AI-powered web applications using Python, Django, DRF, React, and SQL.
            </p>
            <p className="mt-4 text-muted-foreground font-sans leading-relaxed">
              Highly proficient in leveraging AI tools like Grok, Llama, and LLM pipelines to accelerate development and improve code quality. I am passionate about creating impactful digital solutions that bridge the gap between complex backend architectures and intuitive user experiences.
            </p>
            <a
              href="#about"
              className="inline-flex mt-8 text-sm font-sans px-8 py-4 rounded-full border border-border text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
