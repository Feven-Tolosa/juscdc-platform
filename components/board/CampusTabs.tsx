interface CampusTabsProps {
  campuses: string[]
  activeCampus: string
  onChange: (campus: string) => void
}

export default function CampusTabs({
  campuses,
  activeCampus,
  onChange,
}: CampusTabsProps) {
  return (
    <div className='mb-14 flex flex-wrap items-center justify-center gap-4'>
      {campuses.map((campus) => (
        <button
          key={campus}
          onClick={() => onChange(campus)}
          className={`rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 ${
            activeCampus === campus
              ? 'bg-[#1e3a8a] text-white shadow-lg'
              : 'bg-white text-slate-700 hover:bg-slate-100'
          }`}
        >
          {campus} Campus
        </button>
      ))}
    </div>
  )
}
