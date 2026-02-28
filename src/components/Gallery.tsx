import { motion } from "framer-motion";
import gallery1 from "@/assets/project-estate.png";
import gallery2 from "@/assets/project-roadways.png";
import gallery3 from "@/assets/project-skb.png";
import gallery4 from "@/assets/project-tailwind.png";
import gallery5 from "@/assets/project-villas.png";
import gallery6 from "@/assets/project-webora.png";
import gallery7 from "@/assets/projectinterior.png";
import gallery8 from "@/assets/projectstudio.png";
import gallery9 from "@/assets/project-roadways.png";
import gallery10 from "@/assets/project-skb.png";
import gallery11 from "@/assets/project-tailwind.png";
import gallery12 from "@/assets/project-villas.png";

const row1 = [gallery1, gallery2, gallery3, gallery4];
const row2 = [gallery5, gallery6, gallery7, gallery8];
const row3 = [gallery9, gallery10, gallery11, gallery12];

const GalleryRow = ({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) => (
  <div className="overflow-hidden py-2">
    <div className={`flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
      {[...images, ...images, ...images].map((img, i) => (
        <div key={i} className="flex-shrink-0 w-[300px] md:w-[400px] rounded-xl overflow-hidden">
          <img
            src={img}
            alt="Website showcase"
            className="w-full h-[200px] md:h-[260px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  </div>
);

const Gallery = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground"
        >
          Award-Winning Websites
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-muted-foreground font-sans text-lg max-w-xl"
        >
          I create award-winning websites that elevate your brand and attract more customers.
        </motion.p>
      </div>

      <div className="space-y-4">
        <GalleryRow images={row1} />
        <GalleryRow images={row2} reverse />
        <GalleryRow images={row3} />
      </div>
    </section>
  );
};

export default Gallery;
