import type { Metadata } from 'next';
import CaseStudyAllInOne from './CaseStudy';

const path = '/case-study/allinone-converter';
const title = 'AllInOne Converter, conversor open source | Bruno Antunes';
const description =
  'Conversor de mídia open source em microserviços: React e Laravel na frente, quatro serviços Python com FFmpeg, yt-dlp, libtorrent e HLS, tudo rodando em Docker.';

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
    images: ['/case-studies/allinone/dashboard.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/case-studies/allinone/dashboard.png'],
  },
};

export default function Page() {
  return <CaseStudyAllInOne />;
}
