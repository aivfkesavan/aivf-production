
import { Menu, Code } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

type NavbarProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
};

export const Navbar = ({ isMenuOpen, setIsMenuOpen, scrollToSection }: NavbarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      // First navigate to home page with the section parameter
      navigate(`/?section=${sectionId}`);
    } else {
      scrollToSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/7197ae48-0638-4e33-9ef3-4af7d8191ee9.png" 
              alt="AIVF Logo" 
              className="h-10 w-auto md:h-14"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/hackathon"
              className="text-gray-600 hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Code className="w-4 h-4" />
              Hackathon
            </Link>
            <button 
              onClick={() => handleNavigation('services')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('testimonials')} 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavigation('contact')} 
              className="button-primary"
            >
              Join Us
            </button>
          </div>
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              to="/hackathon"
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Code className="w-4 h-4" />
              Hackathon
            </Link>
            <button 
              onClick={() => handleNavigation('services')} 
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('testimonials')} 
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavigation('contact')} 
              className="block w-full px-4 py-2 button-primary"
            >
              Join Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};
