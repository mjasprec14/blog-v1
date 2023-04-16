import { createClient, groq } from 'next-sanity';

export async function getProjects() {
  const client = createClient({
    projectId: 'jswvt59x',
    dataset: 'production',
    apiVersion: '2023-04-16',
  });

  return await client.fetch(
    groq`*[_type=='project']{_id,_createdAt,name,"slug":slug.current,"image": image.asset->url, url, content}`
  );
}
