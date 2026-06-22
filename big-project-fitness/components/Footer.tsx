export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-16 px-6 md:px-12 border-t border-divider">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display text-3xl tracking-wider text-primary mb-2">
            BiG PROJECT
          </span>
          <p className="font-body text-secondary text-sm">
            Johor Bahru&apos;s Premium Strength Facility
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a href="#philosophy" className="font-body text-sm text-secondary hover:text-primary transition-colors">Philosophy</a>
          <a href="#facility" className="font-body text-sm text-secondary hover:text-primary transition-colors">Facility</a>
          <a href="#memberships" className="font-body text-sm text-secondary hover:text-primary transition-colors">Memberships</a>
          <a href="#coaching" className="font-body text-sm text-secondary hover:text-primary transition-colors">Coaching</a>
          <a href="#faq" className="font-body text-sm text-secondary hover:text-primary transition-colors">FAQ</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-secondary/60">
          &copy; {currentYear} BiG Project Fitness. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="font-body text-xs text-secondary/60 hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="font-body text-xs text-secondary/60 hover:text-primary transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
