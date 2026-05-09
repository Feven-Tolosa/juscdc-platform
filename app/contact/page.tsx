import ContactHero from '@/components/contact/ContactHero'

import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import SocialLinks from '@/components/contact/SocialLinks'
import FAQSection from '@/components/contact/FAQSection'
import MapSection from '@/components/contact/MapSection'

export default function ContactPage() {
  return (
    <main className='min-h-screen bg-[#f8fafc]'>
      <ContactHero />

      <section className='mx-auto max-w-7xl px-6 py-24 lg:px-12'>
        <div className='grid gap-10 lg:grid-cols-2'>
          {/* Form */}
          <ContactForm />

          {/* Info */}
          <div className='space-y-10'>
            <ContactInfo />

            <SocialLinks />
          </div>
        </div>

        {/* FAQ */}
        <div className='mt-20'>
          <FAQSection />
        </div>

        {/* Map */}
        <div className='mt-20'>
          <MapSection />
        </div>
      </section>
    </main>
  )
}
