import { 
  Home as HomeIcon, 
  Search as SearchIcon, 
  Library as LibraryIcon,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  Volume,
  Laptop2,
  LayoutList,
  Maximize2
} from 'lucide-react'

import Image from 'next/image'

import Album from '../components/Album';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-1'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>

          <nav className='space-y-4 mt-8'>
            <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'><HomeIcon />Home</a>
            <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'><SearchIcon />Search</a>
            <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'><LibraryIcon />Your library</a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href='' className='bg-white/0-hover:bg-white/5 zinc-400 hover:text-zinc-100'>Curtidas</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Vibes</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>LolFi</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Sertanejo</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>MPB</a>
            <a href='' className='text-sm text-zinc-400 hover:text-zinc-100'>Musics</a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='bg-black/40 p-2 rounded-full flex items-center justify-center'>
              <ChevronLeft />
            </button>

            <button className='bg-black/40 p-2 rounded-full flex items-center justify-center'>
            <ChevronRight />
            </button>
          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-6'>
            <a href='' className='bg-white/5 hover:bg-white/20 group transition-colors rounded flex items-center gap-6 overflow-hidden'> 
              <Image 
                src={'/bart vibes.jpg'} 
                alt='bart viber'
                width={85}
                height={85}
              /> 
              <strong>Playlist</strong>
              <button className='w-12 h-12 p-2 pl-3 flex items-center justify-center rounded-full text-black bg-green-500 ml-auto mr-10 invisible group-hover:visible transition-colors'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 hover:bg-white/20 group transition-colors rounded flex items-center gap-6 overflow-hidden'> 
              <Image 
                src={'/bart vibes.jpg'} 
                alt='bart viber' 
                width={85}
                height={85}
              />
              <strong>Playlist</strong>
                            <button className='w-12 h-12 p-2 pl-3 flex items-center justify-center rounded-full text-black bg-green-500 ml-auto mr-10 invisible group-hover:visible transition-colors'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 hover:bg-white/20 group transition-colors rounded flex items-center gap-6 overflow-hidden'> 
              <Image 
                src={'/bart vibes.jpg'} 
                alt='bart viber' 
                width={85}
                height={85}
              />
              <strong>Playlist</strong>
                            <button className='w-12 h-12 p-2 pl-3 flex items-center justify-center rounded-full text-black bg-green-500 ml-auto mr-10 invisible group-hover:visible transition-colors'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 hover:bg-white/20 group transition-colors rounded flex items-center gap-6 overflow-hidden'> 
              <Image 
                src={'/bart vibes.jpg'} 
                alt='bart viber' 
                width={85}
                height={85}
              />
              <strong>Playlist</strong>
                            <button className='w-12 h-12 p-2 pl-3 flex items-center justify-center rounded-full text-black bg-green-500 ml-auto mr-10 invisible group-hover:visible transition-colors'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 hover:bg-white/20 group transition-colors rounded flex items-center gap-6 overflow-hidden'> 
              <Image 
                src={'/bart vibes.jpg'} 
                alt='bart viber' 
                width={85}
                height={85}
              />
              <strong>Playlist</strong>
              <button className='w-12 h-12 p-2 pl-3 flex items-center justify-center rounded-full text-black bg-green-500 ml-auto mr-10 invisible group-hover:visible transition-colors'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 hover:bg-white/20 group transition-colors rounded flex items-center gap-6 overflow-hidden'> 
              <Image 
                src={'/bart vibes.jpg'} 
                alt='bart viber' 
                width={85}
                height={85}
              />
              <strong>Playlist</strong>
                            <button className='w-12 h-12 p-2 pl-3 flex items-center justify-center rounded-full text-black bg-green-500 ml-auto mr-10 invisible group-hover:visible transition-colors'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Jorge Santos</h2>

          <div className='grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mt-4'>
          {/* <Album description={'meu primeiro album'} link={''} path={'/bart vibes.jpg'} title={'Bart Vibes'} /> */}
            <a href='' className='bg-white/0 hover:bg-white/5 p-3 rounded flex flex-col gap-2'>
              <Image 
                className='w-full rounded min-w-min'
                src={'/bart vibes.jpg'} 
                alt='bart viber'
                width={85}
                height={85}
              /> 
              <strong className='font-semibold'>Title</strong>
              <p className='text-sm text-zinc-500'>description</p>
            </a>
            <a href='' className='bg-white/0 hover:bg-white/5 p-3 rounded flex flex-col gap-2'>
              <Image 
                className='w-full rounded min-w-min'
                src={'/bart vibes.jpg'} 
                alt='bart viber'
                width={85}
                height={85}
              /> 
              <strong className='font-semibold'>Title</strong>
              <p className='text-sm text-zinc-500'>description</p>
            </a>
            <a href='' className='bg-white/0 hover:bg-white/5 p-3 rounded flex flex-col gap-2'>
              <Image 
                className='w-full rounded min-w-min max-w-xs'
                src={'/bart vibes.jpg'} 
                alt='bart viber'
                width={85}
                height={85}
              /> 
              <strong className='font-semibold'>Title</strong>
              <p className='text-sm text-zinc-500'>description</p>
            </a>
            <a href='' className='bg-white/0 hover:bg-white/5 p-3 rounded flex flex-col gap-2'>
              <Image 
                className='w-full rounded min-w-min max-w-xs'
                src={'/bart vibes.jpg'} 
                alt='bart viber'
                width={85}
                height={85}
              /> 
              <strong className='font-semibold'>Title</strong>
              <p className='text-sm text-zinc-500'>description</p>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-3 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image 
            className='w-full rounded min-w-min max-w-xs'
            src={'/bart vibes.jpg'} 
            alt='bart viber'
            width={85}
            height={85}
          />
          <div className='flex flex-col'>
            <strong className='font-normal text-sm'>Title</strong>
            <p className='text-xs text-zinc-500'>description</p>
          </div> 
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex flex-row items-center gap-6'>
            <Shuffle size={18} className='text-zinc-200'/>
            <SkipBack size={18} className='text-zinc-200'/>
            <button className='w-8 h-98 p-1 pl-2 flex items-center justify-center rounded-full text-black bg-white transition-colors'>
              <Play />
            </button>
            <SkipForward size={18} className='text-zinc-200'/>
            <Repeat size={18} className='text-zinc-200'/>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <span className='text-xs text-zinc-500'>0:33</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='rounded-full w-20 bg-zinc-100 h-1'/>
            </div>
            <span className='text-xs text-zinc-500'>2:50</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={18}/> 
          <LayoutList size={18}/> 
          <Laptop2 size={18}/> 
          
          <div className='flex flex-row items-center gap-2'>
            <Volume size={16}/> 
            <div className='h-1 rounded-full w-16 bg-zinc-600'>
              <div className='rounded-full w-3 bg-zinc-100 h-1'/>
            </div>
          </div>
          
          <Maximize2 size={16}/> 
        </div>
      </footer>
    </div>
  )
}
