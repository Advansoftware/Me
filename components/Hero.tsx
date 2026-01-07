'use client';

import { Box, Container, Typography, Button, Stack, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 0 },
        background: 'radial-gradient(ellipse at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)',
      }}
    >
      {/* Animated background gradient */}
      <Box
        component={motion.div}
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        sx={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}
          >
            <Typography
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              variant="body2"
              sx={{
                color: 'secondary.main',
                fontWeight: 600,
                mb: 2,
                letterSpacing: 2,
                textTransform: 'uppercase',
              }}
            >
              Full Stack Developer
            </Typography>

            <Typography
              variant="h1"
              sx={{
                mb: 3,
                background: 'linear-gradient(135deg, #F8FAFC 0%, #94A3B8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Olá, eu sou{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Bruno Antunes
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                mb: 2,
                maxWidth: 520,
                mx: { xs: 'auto', md: 0 },
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              Desenvolvedor Full Stack apaixonado por tecnologia, sempre aprendendo! 
              Criando soluções inovadoras com React, Next.js, Node.js, PHP e agora explorando Flutter.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: { xs: 'center', md: 'flex-start' },
                gap: 1,
              }}
            >
              📍 Brazópolis/MG, Brasil • 
              <Box component="span" sx={{ color: 'primary.light' }}>70+ repositórios</Box> • 
              <Box component="span" sx={{ color: 'secondary.main' }}>Arctic Code Vault Contributor</Box>
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={scrollToProjects}
              >
                Ver Projetos
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<GitHubIcon />}
                component="a"
                href="https://github.com/Advansoftware"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'primary.main',
                    background: 'rgba(139, 92, 246, 0.1)',
                  },
                }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<LinkedInIcon />}
                component="a"
                href="https://www.linkedin.com/in/bruno-antunes-284679b6/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: '#0A66C2',
                    background: 'rgba(10, 102, 194, 0.1)',
                  },
                }}
              >
                LinkedIn
              </Button>
            </Stack>
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{ 
              flex: { xs: 'none', md: 1 }, 
              display: 'flex', 
              justifyContent: 'center',
              width: '100%',
              maxWidth: { xs: '200px', sm: '250px', md: '320px' },
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: -4,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8B5CF6, #10B981, #8B5CF6)',
                  backgroundSize: '200% 200%',
                  animation: 'gradient-rotate 3s ease infinite',
                  '@keyframes gradient-rotate': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                  },
                },
              }}
            >
              <Avatar
                src="/avatar.jpg"
                alt="Bruno Antunes"
                sx={{
                  width: '100%',
                  height: '100%',
                  border: '4px solid rgba(10, 10, 15, 1)',
                  position: 'relative',
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
