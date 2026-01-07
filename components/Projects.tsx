'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Prefeitura de Brazópolis',
    description:
      'Modernização completa do portal municipal. Redesign de UX/UI com foco em acessibilidade e experiência do cidadão.',
    image: '/case-studies/new-home.png',
    url: 'https://visitebrazopolis.com.br/',
    caseStudyUrl: '/case-study/brazopolis',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL'],
  },
  {
    title: 'Gastometria',
    description:
      'Dashboard financeiro com IA para análise e categorização de gastos. Controle sua vida financeira com inteligência artificial.',
    image: '/projects/gastometria.png',
    url: 'https://gastometria.com.br/',
    tags: ['React', 'Node.js', 'IA', 'TypeScript'],
  },
  {
    title: 'Bolão Fácil',
    description:
      'O melhor gerenciador de bolão grátis do Brasil. Controle cotas, jogos e pagamentos para Mega-Sena, Lotofácil e Quina.',
    image: '/projects/bolaofacil.png',
    url: 'https://bolaofacil.store/',
    tags: ['TypeScript', 'Next.js', 'Node.js'],
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
            Projetos em Destaque
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
            Alguns dos projetos que desenvolvi recentemente, aplicando as melhores
            práticas e tecnologias modernas.
          </Typography>
        </Box>

        <Grid container spacing={4}>
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
