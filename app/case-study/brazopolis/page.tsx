import type { Metadata } from 'next';
import CaseStudyBrazopolis from './CaseStudy';

const path = '/case-study/brazopolis';
const title = 'Portal da Prefeitura de Brazópolis | Bruno Antunes';
const description =
  'Como refiz o portal da Prefeitura de Brazópolis: saída do PHP 5 vulnerável, Next.js com NestJS, layout responsivo, busca global e controles de acessibilidade.';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: path,
    title,
    description,
    images: ['/case-studies/new-home.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/case-studies/new-home.png'],
  },
};

export default function Page() {
  return <CaseStudyBrazopolis />;
}
