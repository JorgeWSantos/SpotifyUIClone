import React from 'react';
import Image from 'next/image';

const Album = ({ path, title, description, link }) => (
    <a href={link} className='bg-white/0 hover:bg-white/5 p-3 rounded flex flex-col gap-2'>
    <Image 
      className='w-full rounded min-w-min'
      src={path} 
      alt={title}
      width={85}
      height={85}
    /> 
    <strong className='font-semibold'>{title}</strong>
    <p className='text-sm text-zinc-500'>{description}</p>
  </a>
)

export default Album;