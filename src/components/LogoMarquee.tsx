const logos = [
  "Python", "Django", "DRF", "React", "HTML", "CSS", "Bootstrap", "Tailwind", "SQL", "PostgreSQL", "TypeScript", "Next.js", "Vite", "Node.js", "Express", "MongoDB", "Redux", "SASS", "Framer", "Git", "GitHub"
];

const LogoMarquee = () => {
  return (
    <section className="py-12 border-t border-border overflow-hidden">
      <div className="flex animate-marquee">
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 px-12 flex items-center justify-center"
          >
            <span className="text-muted-foreground text-lg font-sans font-bold tracking-widest whitespace-nowrap opacity-40">
              {logo}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoMarquee;
