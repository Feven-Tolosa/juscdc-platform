import { EventVideo } from './types'

interface VideoSectionProps {
  videos: EventVideo[]
}

export default function VideoSection({ videos }: VideoSectionProps) {
  return (
    <div className='mt-10 grid gap-8 lg:grid-cols-2'>
      {videos.map((video) => (
        <div
          key={video.title}
          className='overflow-hidden rounded-[30px] bg-slate-100'
        >
          <iframe
            src={video.url}
            title={video.title}
            allowFullScreen
            className='h-[350px] w-full'
          />

          <div className='p-5'>
            <h3 className='text-xl font-bold text-slate-900'>{video.title}</h3>

            <p className='mt-2 text-slate-500'>
              {video.platform === 'youtube'
                ? 'YouTube Video'
                : 'Telegram Video'}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
