'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Prefeitura de Brazópolis',
    description:
      'Portal municipal refeito do zero. Saiu do PHP 5 e entrou Next.js com NestJS, layout responsivo e controles de acessibilidade.',
    image: '/case-studies/new-home.png',
    url: 'https://brazopolis.mg.gov.br/',
    caseStudyUrl: '/case-study/brazopolis',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'TamoQuite',
    description:
      'Gestão de repasses, empréstimos e cobranças. Um cron dispara a mensagem no WhatsApp no dia do vencimento e depois dele, sem ninguém precisar lembrar.',
    image: '/projects/tamoquite.png',
    url: 'https://tamoquite.app/',
    tags: ['Next.js', 'NestJS', 'Prisma', 'MySQL', 'Evolution API', 'Stripe'],
  },
  {
    title: 'Bolão Fácil',
    description:
      'Gerenciador de bolão gratuito. Controla cotas, jogos e pagamentos de Mega-Sena, Lotofácil e Quina.',
    image: '/projects/bolaofacil.png',
    url: 'https://bolaofacil.store/',
    tags: ['TypeScript', 'Next.js', 'Node.js'],
  },
  {
    title: 'RespondIA',
    description:
      'Secretária de IA no WhatsApp. Responde clientes a qualquer hora, marca compromissos no Google Calendar e, no modo finance, categoriza as despesas sozinha.',
    image: '/projects/respondia.png',
    url: 'https://respondia.pro/',
    tags: ['NestJS', 'Vite', 'PostgreSQL', 'Redis', 'Evolution API', 'Google Calendar'],
  },
  {
    title: 'AllInOne Converter',
    description:
      'Conversor de mídia open source em microserviços. Converte vídeo com FFmpeg, baixa de mais de mil sites com yt-dlp, puxa torrent por magnet e ainda faz streaming HLS.',
    image: '/projects/allinone-converter.png',
    url: 'https://github.com/Advansoftware/allInOne-Converter',
    urlLabel: 'GitHub',
    caseStudyUrl: '/case-study/allinone-converter',
    tags: ['React 18', 'Laravel 10', 'Python 3.11', 'FFmpeg', 'Redis', 'Docker'],
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              background: 'linear-gradient(135deg, #F8FAFC 0%, #94A3B8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Projetos
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              mb: 8,
            }}
          >
            O que desenvolvi recentemente.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={project.title}>
              <ProjectCard {...project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
