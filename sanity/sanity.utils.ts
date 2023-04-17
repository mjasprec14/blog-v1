import { createClient, groq } from 'next-sanity';
import { Project } from '@/types';

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: 'jswvt59x',
    dataset: 'production',
    apiVersion: '2023-04-16',
  });

  return await client.fetch(
    groq`*[_type=='project']{_id,_createdAt,name,"slug":slug.current,"image": image.asset->url, url, content}`
  );
}

export async function getProject(slug: string): Promise<Project> {
  const client = createClient({
    projectId: 'jswvt59x',
    dataset: 'production',
    apiVersion: '2023-04-16',
  });

  return await client.fetch(
    groq`*[_type=='project' && slug.current == $slug][0]{_id,_createdAt,name,"slug":slug.current,"image": image.asset->url, url, content}`,
    { slug }
  );
}
