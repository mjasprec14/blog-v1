import { createClient, groq } from 'next-sanity';
import { Project, Page } from '@/types';
import config from './config/client-config';

export async function getProjects(): Promise<Project[]> {
  return await createClient(config).fetch(
    groq`*[_type=='project']{_id,_createdAt,name,"slug":slug.current,"image": image.asset->url, url, content}`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return await createClient(config).fetch(
    groq`*[_type=='project' && slug.current == $slug][0]{_id,_createdAt,name,"slug":slug.current,"image": image.asset->url, url, content}`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return await createClient(config).fetch(
    groq`*[_type=='page']{_id,_createdAt,title,"slug":slug.current}`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return await createClient(config).fetch(
    groq`*[_type=='page' && slug.current == $slug][0]{_id,_createdAt,title,"slug":slug.current, content}`,
    { slug }
  );
}
