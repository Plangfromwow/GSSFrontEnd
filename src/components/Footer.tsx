import { Github, Linkedin } from 'lucide-react'

const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="container-px mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="text-sm text-white/60">© {new Date().getFullYear()} Garcia Software Solutions, LLC</div>
      <div className="flex items-center gap-4 text-white/70">
        <a className="hover:text-white" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18} /></a>
        <a className="hover:text-white" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
      </div>
    </div>
  </footer>
)

export default Footer