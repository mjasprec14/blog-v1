import { getProjects } from '@/sanity/sanity.utils';

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className=''>
      <p>my projects go here</p>
      {projects?.map(({ _id, name }: any) => (
        <div key={_id}>{name}</div>
      ))}
    </main>
  );
}
