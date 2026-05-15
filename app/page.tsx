import AboutSection from '@/components/home/About'
import CTA from '@/components/home/CAT'
import ExecutiveSection from '@/components/home/Executive'
import Hero from '@/components/home/Hero'
import Partners from '@/components/home/Partners'
import ProgramsPreview from '@/components/home/Programs'
import Testimonials from '@/components/home/Testimonials'
import WhyJoin from '@/components/home/WhyJoin'

export default function Home() {
  return (
    <>
      <Hero />
      <ExecutiveSection />
      <AboutSection />
      <Partners />
      <ProgramsPreview />
      <WhyJoin />
      <Testimonials />
      <CTA />
    </>
  )
}
