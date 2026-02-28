import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web design",
    description:
      "Premium, custom web design services that cater to the unique needs of each client. Visually stunning and user-friendly websites that drive results.",
  },
  {
    num: "02",
    title: "Framer Development",
    description:
      "Beautiful, functional websites created using the powerful Framer platform. Highly customizable and easily manageable, even with no prior web development experience.",
  },
  {
    num: "03",
    title: "Content & Seo",
    description:
      "Comprehensive services that help businesses build a strong online presence. High-quality, engaging content that drives conversions, optimized for search engines.",
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
            Design, Development, and Content. All-in-one.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl font-sans">
            Take your online presence to the next level with my expert web design and content creation services.
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
