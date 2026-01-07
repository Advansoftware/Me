'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Chip,
  Paper,
  Button,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from 'next/link';

const improvements = [
  {
    title: 'Design Moderno',
    description: 'Transição de layout Web 2.0 para design flat moderno com Material UI',
  },
  {
    title: 'Segurança',
    description: 'Migração de PHP 5 vulnerável para arquitetura moderna, eliminando ataques hacker recorrentes',
  },
  {
    title: 'Cards de Serviços',
    description: 'Acesso rápido a serviços municipais através de cards organizados por categoria',
  },
  {
    title: 'Busca Inteligente',
    description: 'Barra de busca global (Ctrl+K) para encontrar informações rapidamente',
  },
  {
    title: 'Responsivo',
    description: 'Layout 100% responsivo para acesso em dispositivos móveis',
  },
  {
    title: 'Acessibilidade',
    description: 'Controles de acessibilidade nativos: ajuste de fonte e alto contraste',
  },
  {
    title: 'Performance',
    description: 'Next.js com SSR para carregamento rápido e SEO otimizado',
  },
];

const comparisons = [
  {
    label: 'Homepage',
    old: '/case-studies/old-home.png',
    new: '/case-studies/new-home.png',
  },
  {
    label: 'Conteúdo',
    old: '/case-studies/old-middle.png',
    new: '/case-studies/new-content.png',
  },
  {
    label: 'Cultura e Turismo',
    old: '/case-studies/old-tourism.png',
    new: '/case-studies/new-tourism.png',
  },
  {
    label: 'Ponto Turístico',
    old: '/case-studies/old-tourist-point.png',
    new: '/case-studies/new-tourist-point.png',
  },
];

const technologies = [
  'Next.js 15',
  'TypeScript',
  'Material UI',
  'NestJS',
  'PostgreSQL',
  'Docker',
  'Node.js',
];

export default function CaseStudyBrazopolis() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 50%, #0A0A0F 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Button
            component={Link}
            href="/"
            startIcon={<ArrowBackIcon />}
            sx={{
              color: 'text.secondary',
              mb: 2,
              '&:hover': { color: 'primary.main' },
            }}
          >
            Voltar ao Portfólio
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #8B5CF6 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Prefeitura de Brazópolis
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
              Estudo de Caso: Modernização do Portal Municipal
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    background: 'rgba(139, 92, 246, 0.2)',
                    color: '#A78BFA',
                    border: '1px solid rgba(139, 92, 246, 0.3)',
                  }}
                />
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Intro */}
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          sx={{
            p: 4,
            mb: 6,
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
            O Desafio
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            A Prefeitura de Brazópolis possuía um portal institucional desatualizado, desenvolvido em
            PHP 5, com design dos anos 2000, navegação confusa e sem responsividade para dispositivos móveis.
            Além disso, o site sofria constantes <strong>ataques hacker</strong> devido às vulnerabilidades
            de segurança da versão obsoleta do PHP. O primeiro passo foi migrar para PHP 8 e corrigir
            todas as falhas de segurança. Em seguida, criamos uma plataforma completamente nova
            com arquitetura moderna que facilitasse o acesso dos cidadãos aos serviços municipais,
            licitações, notícias e informações turísticas da cidade.
          </Typography>
        </Paper>

        {/* Comparisons */}
        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <CompareArrowsIcon sx={{ color: 'primary.main' }} />
          Antes vs Depois
        </Typography>

        {comparisons.map((comparison, index) => (
          <Paper
            key={comparison.label}
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            sx={{
              p: 3,
              mb: 4,
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, textAlign: 'center' }}>
              {comparison.label}
            </Typography>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Chip
                    label="ANTES"
                    size="small"
                    sx={{
                      mb: 2,
                      background: 'rgba(239, 68, 68, 0.2)',
                      color: '#F87171',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                    }}
                  />
                  <Card
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      border: '2px solid rgba(239, 68, 68, 0.3)',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={comparison.old}
                      alt={`${comparison.label} - Versão Antiga`}
                      sx={{ width: '100%', height: 'auto' }}
                    />
                  </Card>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Chip
                    label="DEPOIS"
                    size="small"
                    sx={{
                      mb: 2,
                      background: 'rgba(16, 185, 129, 0.2)',
                      color: '#34D399',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  />
                  <Card
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      border: '2px solid rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={comparison.new}
                      alt={`${comparison.label} - Versão Nova`}
                      sx={{ width: '100%', height: 'auto' }}
                    />
                  </Card>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))}

        {/* Improvements */}
        <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <CheckCircleIcon sx={{ color: 'secondary.main' }} />
          Melhorias Implementadas
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {improvements.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                sx={{
                  p: 3,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 3,
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Button
            variant="contained"
            size="large"
            href="https://visitebrazopolis.com.br"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              px: 4,
              py: 1.5,
              background: 'linear-gradient(135deg, #8B5CF6 0%, #10B981 100%)',
              fontWeight: 600,
              '&:hover': {
                background: 'linear-gradient(135deg, #7C3AED 0%, #059669 100%)',
              },
            }}
          >
            Visitar Site Novo
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
