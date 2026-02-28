import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Concept",
    description:
      "During the concept phase, I work closely with my clients to understand their needs and goals for their website.",
    bullets: [
      "Reviewing any existing branding",
      "Target audience and competitors research",
      "Developing a strategy",
    ],
  },
  {
    num: "02",
    title: "Design",
    description:
      "Once the concept is established, I move on to the design phase. Here, I create a visual representation of the website that reflects the client's brand and messaging.",
    bullets: [
      "Developing wireframes and mockup",
      "Choosing typography, color palettes, and imagery",
      "Refining the design",
    ],
  },
  {
    num: "03",
    title: "Framer",
    description:
      "After the design is finalized, I move on to building the website using Framer.",
    bullets: [
      "Translating the design into code using Framer",
      "Responsive and functions perfectly across all devices",
      "Testing the website thoroughly before launch",
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
              Your Dream Website in just few steps
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
            From consultation to launch, our streamlined process ensures timely delivery and quality work.
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
