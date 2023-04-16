import { getProjects } from '@/sanity/sanity.utils';
import Image from 'next/image';

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className=''>
      <p>my projects go here</p>
      {projects?.map((project) => (
        <div key={project?._id}>
          {project?.name}
          <Image
            src={project?.image}
            alt={project?.name}
            width={142}
            height={142}
          />
        </div>
      ))}
    </main>
  );
}
