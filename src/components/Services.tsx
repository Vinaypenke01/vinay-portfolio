import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using React, Python, Django, and modern databases like PostgreSQL. Delivering scalable, high-performance solutions.",
  },
  {
    num: "02",
    title: "AI & LLM Integrations",
    description:
      "Integrating Generative AI tools (Grok, Llama), building LLM pipelines, and deploying OCR solutions to transform raw data into intelligent structured insights.",
  },
  {
    num: "03",
    title: "Backend Architecture",
    description:
      "Designing robust backend architectures, building complex REST APIs using Django REST Framework (DRF), and implementing secure multi-stakeholder workflows.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-sans font-medium tracking-widest uppercase">
            Services
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight max-w-2xl">
            Development, Architecture, and AI. All-in-one.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl font-sans">
            Elevate your digital products with robust engineering, modern full-stack frameworks, and cutting-edge generative AI capabilities.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500"
            >
              <span className="text-primary text-sm font-sans font-semibold">{service.num}</span>
              <h3 className="mt-4 text-2xl font-serif text-foreground">{service.title}</h3>
              <p className="mt-4 text-muted-foreground font-sans leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
