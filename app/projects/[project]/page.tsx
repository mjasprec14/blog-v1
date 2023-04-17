import { getProject } from '@/sanity/sanity.utils';

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  console.log(project);

  return <div>My project goes here</div>;
}
