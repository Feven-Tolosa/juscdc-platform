import { faqs } from './data'

export default function FAQSection() {
  return (
    <section className='rounded-[36px] bg-white p-8 shadow-xl'>
      <h2 className='text-3xl font-bold text-slate-900'>
        Frequently Asked Questions
      </h2>

      <div className='mt-8 space-y-5'>
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className='rounded-2xl border border-slate-200 p-5'
          >
            <h3 className='text-xl font-bold text-slate-900'>{faq.question}</h3>

            <p className='mt-3 leading-8 text-slate-600'>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
