import { getProjects } from '@/sanity/sanity.utils';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className='max-w-5xl mx-auto py-20'>
      <h1
        className='text-7xl font-extrabold 
      hover:from-purple-600 hover:to-orange-400 '
      >
        Hello I&apos;m{' '}
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent '>
          MJ
        </span>
        !
      </h1>

      <p className='mt-3 text-xl text-gray-600'>
        Aloha everyone! Check out my projects!
      </p>

      <h2 className='mt-24 font-bold text-gray-700 text-3xl'>My Projects</h2>

      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects?.map((project) => (
          <Link
            href={`/projects/${project?.slug}`}
            key={project?._id}
            className='border-2 border-gray-500 rounded-lg p-1 flex flex-col items-center justify-end'
          >
            {project?.image && (
              <Image
                src={project?.image}
                alt={project?.name}
                width={750}
                height={300}
                className='object-contain rounded-lg hover:scale-105 hover:border-blue-500 transition'
              />
            )}
            <div className='text-center font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
              <h3 className='mt-2'>{project?.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
