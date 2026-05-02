export default function Footer() {
  return (
    <footer className='bg-slate-950 text-gray-400 py-16 px-6'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-4 gap-10'>
        {/* Brand */}
        <div>
          <h2 className='text-white font-bold text-lg'>JUSCDC</h2>
          <p className='mt-3 text-sm'>
            Bridging the gap between education and industry.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className='text-white font-semibold mb-3'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li>Home</li>
            <li>Board</li>
            <li>Programs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className='text-white font-semibold mb-3'>Connect</h3>
          <ul className='space-y-2 text-sm'>
            <li>Telegram</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className='text-white font-semibold mb-3'>Stay Updated</h3>
          <input
            placeholder='Your email'
            className='w-full p-2 rounded bg-white/10 border border-white/20'
          />
          <button className='mt-3 w-full bg-[#eab308] text-black py-2 rounded'>
            Subscribe
          </button>
        </div>
      </div>

      <div className='text-center mt-12 text-sm text-gray-500'>
        © 2026 JUSCDC. All rights reserved.
      </div>
    </footer>
  )
}
