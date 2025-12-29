import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'book' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#EFE4CF] text-[#18776C]">
      <header className="fixed top-0 left-0 right-0 bg-[#EFE4CF] z-50 border-b border-[#18776C]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <button
              onClick={() => navigateTo('home')}
              className="text-2xl md:text-3xl font-bold tracking-wide hover:opacity-70 transition-opacity"
            >
              THEO-CARE
            </button>

            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => navigateTo('home')}
                className="hover:opacity-70 transition-opacity"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigateTo('home');
                  setTimeout(() => scrollToSection('about'), 0);
                }}
                className="hover:opacity-70 transition-opacity"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigateTo('home');
                  setTimeout(() => scrollToSection('services'), 0);
                }}
                className="hover:opacity-70 transition-opacity"
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigateTo('home');
                  setTimeout(() => scrollToSection('approach'), 0);
                }}
                className="hover:opacity-70 transition-opacity"
              >
                Approach
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="hover:opacity-70 transition-opacity"
              >
                Contact
              </button>
              <button
                onClick={() => navigateTo('book')}
                className="px-6 py-2.5 border-2 border-[#18776C] rounded-full hover:bg-[#18776C] hover:text-[#EFE4CF] transition-colors"
              >
                Book Now
              </button>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#EFE4CF] border-t border-[#18776C]/10">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button
                onClick={() => navigateTo('home')}
                className="text-left py-3 text-lg hover:opacity-70 transition-opacity"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigateTo('home');
                  setTimeout(() => scrollToSection('about'), 0);
                }}
                className="text-left py-3 text-lg hover:opacity-70 transition-opacity"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigateTo('home');
                  setTimeout(() => scrollToSection('services'), 0);
                }}
                className="text-left py-3 text-lg hover:opacity-70 transition-opacity"
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigateTo('home');
                  setTimeout(() => scrollToSection('approach'), 0);
                }}
                className="text-left py-3 text-lg hover:opacity-70 transition-opacity"
              >
                Approach
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="text-left py-3 text-lg hover:opacity-70 transition-opacity"
              >
                Contact
              </button>
              <button
                onClick={() => navigateTo('book')}
                className="w-full py-3 border-2 border-[#18776C] rounded-full hover:bg-[#18776C] hover:text-[#EFE4CF] transition-colors text-lg"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="pt-16 md:pt-20">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'book' && <BookAppointmentPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
    </div>
  );
}

export default App;
