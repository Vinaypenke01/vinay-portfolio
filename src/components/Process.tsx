import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Requirement Analysis",
    description:
      "I work closely with clients or stakeholders to understand their business needs, technical constraints, and long-term goals.",
    bullets: [
      "Defining system architecture",
      "Selecting the right tech stack",
      "Drafting an actionable roadmap",
    ],
  },
  {
    num: "02",
    title: "Development & Integration",
    description:
      "This is where the coding happens. I build robust backend APIs, integrate AI pipelines, and develop responsive, user-friendly frontend interfaces.",
    bullets: [
      "Writing clean, maintainable code",
      "Integrating LLMs and external APIs",
      "Ensuring secure data workflows",
    ],
  },
  {
    num: "03",
    title: "Testing & Deployment",
    description:
      "Before going live, the application undergoes rigorous testing to ensure performance, security, and cross-device compatibility.",
    bullets: [
      "Automated and manual testing",
      "Performance optimization",
      "Smooth production deployment",
    ],
  },
];

const Process = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-sans font-medium tracking-widest uppercase">
            My Process
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight max-w-xl">
              From Concept to Deployment
            </h2>
            <a
              href="#contact"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-sans px-8 py-4 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-fit group"
            >
              Get in Touch
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl font-sans">
            A structured engineering process ensures scalable, high-quality software delivered on time.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <span className="text-primary text-sm font-sans font-semibold">{step.num}</span>
              <h3 className="mt-4 text-2xl font-serif text-foreground">{step.title}</h3>
              <p className="mt-4 text-muted-foreground font-sans text-sm leading-relaxed">
                {step.description}
              </p>
              <ul className="mt-6 space-y-3">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground font-sans">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
