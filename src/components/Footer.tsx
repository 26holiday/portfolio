import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-2 text-[hsl(var(--pastel-pink))] fill-current" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            Built with a focus on performance, accessibility, and beautiful design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
