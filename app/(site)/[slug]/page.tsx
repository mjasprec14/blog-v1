import { getPage } from '@/sanity/sanity.utils';
import { PortableText } from '@portabletext/react';

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);
  return (
    <div>
      <h1 className='h-16 text-5xl font-extrabold drop-shadow-md bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
        {page.title}
      </h1>

      <section>
        <article className='text-lg font-semibold ml-1 text-gray-700 mt-5'>
          <PortableText value={page?.content} />
        </article>
      </section>
    </div>
  );
}
