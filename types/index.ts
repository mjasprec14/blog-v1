import { PortableTextBlock } from 'sanity';

interface SanityBody {
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _id: string;
}

interface Image {
  _type: 'image';
  alt: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface Slug {
  _type: 'slug';
  current: string;
}

export interface Project extends SanityBody {
  _type: 'project';
  name: string;
  url: string;
  image: string;
  slug: Slug;
  content: PortableTextBlock[];
}

export interface Page extends SanityBody {
  _type: 'page';
  title: string;
  slug: Slug;
  content: PortableTextBlock[];
}
