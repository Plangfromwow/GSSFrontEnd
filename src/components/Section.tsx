const Section = ({ id, children, className = '' }: { id?: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`container-px py-16 sm:py-24 scroll-mt-24 ${className}`}>
    {children}
  </section>
)

export default Section