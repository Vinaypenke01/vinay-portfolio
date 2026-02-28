const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-muted-foreground text-sm font-sans">
          © 2024 Vinay. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm font-sans hover:text-foreground transition-colors">
            Twitter
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm font-sans hover:text-foreground transition-colors">
            Dribbble
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm font-sans hover:text-foreground transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
