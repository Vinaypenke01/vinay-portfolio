import { motion } from "framer-motion";
import { useState } from "react";
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";
import testimonial4 from "@/assets/testimonial-4.webp";
import testimonial5 from "@/assets/testimonial-5.webp";
import testimonial6 from "@/assets/testimonial-6.webp";

const testimonials = [
  {
    quote: "Exceptional web design that exceeded our expectations. The attention to detail and creativity resulted in a visually stunning and user-friendly site.",
    name: "John Smith",
    company: "ABC Company",
    avatar: testimonial1,
  },
  {
    quote: "Vinay delivered a website that showcases our business in a professional and user-friendly manner. We couldn't be happier with the outcome.",
    name: "Karen Lee",
    company: "Redwood Technologies",
    avatar: testimonial2,
  },
  {
    quote: "Vinay's expertise in web design breathed life into our brand. She captured our vision with precision, and delivered a website that stands out.",
    name: "David Kim",
    company: "Design Inc.",
    avatar: testimonial3,
  },
  {
    quote: "Vinay's web design skills are unparalleled. She's able to take our ideas and turn them into a visually stunning website that reflects our brand.",
    name: "Andrew Thompson",
    company: "Silverstone Corporation",
    avatar: testimonial4,
  },
  {
    quote: "Vinay's expertise in web design and SEO has exceeded our expectations. Her attention to detail and personalized approach make her highly recommended.",
    name: "Emily Davis",
    company: "Greenway Industries",
    avatar: testimonial5,
  },
  {
    quote: "Vinay's content creation and web design skills are top-notch. She's able to produce high-quality content that engages our audience.",
    name: "Ryan Chen",
    company: "Golden Gate Solutions",
    avatar: testimonial6,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground">
            What my clients say
          </h2>
          <p className="mt-4 text-muted-foreground font-sans text-lg max-w-xl">
            See what our clients have to say about their experience working with me and my team.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onMouseEnter={() => setActive(i)}
              className={`p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${active === i
                  ? "border-primary/30 bg-card"
                  : "border-border bg-transparent"
                }`}
            >
              <p className="text-foreground font-sans text-sm leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-foreground font-sans text-sm font-medium">{t.name}</p>
                  <p className="text-muted-foreground font-sans text-xs">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
