import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Viprata Software Services Pvt. Ltd",
    period: "10/2025 – 01/2026",
    bullets: [
      "Developed a loan application platform with eligibility workflows, underwriting tracking, and interactive dashboards.",
      "Processed CIBIL and bank statement data through algorithmic scoring models to normalize actionable patterns.",
      "Engineered a healthcare platform for Mayura Hospitals supporting tel-consultations and patient record management.",
      "Built an OCR + LLM pipeline using Paddle-OCR and Grok-3 to transform raw statements into structured data.",
      "Implemented role-based access control (RBAC) and Simple-JWT authentication for secure multi-stakeholder environments."
    ],
  },
  {
    role: "Trainee Software Developer",
    company: "Viprata Software Services Pvt. Ltd",
    period: "04/2025 – 10/2025",
    bullets: [
      "Assisted in the development of full-stack web applications and gained hands-on experience with Python and React.",
      "Contributed to database design and API integration for internal tools.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Infoz IT Solutions",
    period: "11/2024 – 02/2025",
    bullets: [
      "Developed web applications using Python, Django, and React, focusing on responsive UI and RESTful API integration.",
      "Optimized front-end performance and conducted cross-browser testing for seamless user experience.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-sans font-medium tracking-widest uppercase">
            Experience
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight max-w-2xl">
            Professional Journey
          </h2>
        </motion.div>

        <div className="mt-16 space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-serif text-foreground">{exp.role}</h3>
                  <p className="text-lg text-primary font-sans mt-1">{exp.company}</p>
                </div>
                <span className="text-sm font-sans font-medium px-4 py-2 rounded-full border border-border text-muted-foreground whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground font-sans leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
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

export default Experience;
