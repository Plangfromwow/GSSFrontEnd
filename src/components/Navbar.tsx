const Navbar = () => (
  <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
    <div className="container-px mx-auto flex h-16 items-center justify-between">
      <a href="#top" aria-label="Go to top" className="text-lg font-extrabold tracking-tight">
        <span className="text-brand">Garcia</span> <span className="text-white">Software Solutions</span>
      </a>
      <nav aria-label="Primary" className="hidden gap-6 text-sm font-medium text-white/80 sm:flex">
        <a className="hover:text-white" href="#services">Services</a>
        <a className="hover:text-white" href="#process">Process</a>
        <a className="hover:text-white" href="#testimonials">Testimonials</a>
        <a className="hover:text-white" href="#contact">Contact</a>
      </nav>
      <div className="flex items-center gap-3">
        <a className="btn-secondary hidden sm:inline-flex" href="#contact">Free consultation</a>
        <a className="btn-primary" href="#contact">Get in touch</a>
      </div>
    </div>
  </header>
)

export default Navbar