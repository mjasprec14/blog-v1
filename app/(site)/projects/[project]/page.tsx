import { getProject } from '@/sanity/sanity.utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div>
      <header className='flex justify-between items-center'>
        <h1 className='h-16 text-5xl font-extrabold drop-shadow-md bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
          {project?.name}
        </h1>
        <a
          href={project?.url}
          title='View Project'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-teal-500 hover:text-teal-100 transition'
        >
          View Project
        </a>
      </header>

      <section>
        <article className='text-lg font-semibold ml-1 text-gray-700 mt-5'>
          <PortableText value={project?.content} />
        </article>
      </section>

      <section>
        <Image
          src={project?.image}
          alt={project?.name}
          width={1920}
          height={1080}
          className='mt-10 border-2 drop-shadow-lg border-gray-700 object-cover rounded-xl hover:scale-105 transition ease-in-out'
        />
      </section>
    </div>
  );
}
