import { motion } from "framer-motion";
import heroPortrait from "@/assets/hero-portrait-1.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt="Creative portrait"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-32 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-normal text-foreground leading-[0.95] tracking-tight text-left"
        >
          Web Design
          <br />
          & Framer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-md font-sans leading-relaxed"
        >
          Premium web design, webflow, and SEO services to help your business stand out.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
