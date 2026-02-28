import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="py-32 md:py-48">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary text-sm font-sans font-medium tracking-widest uppercase">
            Let's talk
          </span>
          <h2 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-tight">
            Let's make your
            <br />
            Website shine.
          </h2>
          <a
            href="#contact-form"
            className="inline-flex mt-12 text-sm font-sans px-10 py-5 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            Get In Touch
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
