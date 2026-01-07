'use client';

import { Box, Container, Typography, Button, Stack, IconButton, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const socialLinks = [
  { icon: <GitHubIcon />, url: 'https://github.com/Advansoftware', label: 'GitHub' },
  { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/bruno-antunes-284679b6/', label: 'LinkedIn' },
  { icon: <WhatsAppIcon />, url: 'https://wa.me/5535984216196', label: 'WhatsApp' },
];

const solutions = [
  'Sites modernos e responsivos',
  'Sistemas web personalizados',
  'APIs e integrações',
  'Apps mobile (Flutter)',
  'E-commerce e landing pages',
  'Manutenção e suporte',
];

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 12,
      }}
    >
      <Container maxWidth="md">
        {/* Pain Points + CTA Section */}
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            p: { xs: 3, md: 5 },
            mb: 6,
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)',
            border: '2px solid rgba(139, 92, 246, 0.3)',
            borderRadius: 4,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              mb: 2,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #8B5CF6 0%, #10B981 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Precisa de um Desenvolvedor?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              mb: 4,
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Transformo suas ideias em soluções digitais de alto impacto.
            <br />
            Do conceito ao deploy, cuido de tudo.
          </Typography>

          {/* Solutions Grid */}
          <Grid container spacing={2} sx={{ mb: 4, maxWidth: 700, mx: 'auto' }}>
            {solutions.map((solution, index) => (
              <Grid size={{ xs: 6, md: 4 }} key={index}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    justifyContent: 'center',
                  }}
                >
                  <CheckCircleIcon sx={{ color: '#10B981', fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary">
                    {solution}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* WhatsApp CTA */}
          <Button
            component={motion.a}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variant="contained"
            size="large"
            href="https://wa.me/5535984216196?text=Ol%C3%A1%20Bruno!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<WhatsAppIcon />}
            sx={{
              px: 5,
              py: 2,
              fontSize: '1.1rem',
              background: '#25D366',
              fontWeight: 700,
              '&:hover': {
                background: '#128C7E',
              },
            }}
          >
            Chamar no WhatsApp
          </Button>

          <Typography
            variant="caption"
            sx={{ display: 'block', mt: 2, color: 'text.secondary' }}
          >
            Respondo em até 24 horas
          </Typography>
        </Paper>

        {/* Alternative Contact Methods */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{ textAlign: 'center' }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              mb: 3,
            }}
          >
            Ou se preferir:
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            <Button
              component={motion.a}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variant="outlined"
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:brunoantunes94@hotmail.com"
              sx={{
                px: 3,
                py: 1.5,
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'primary.main',
                  background: 'rgba(139, 92, 246, 0.1)',
                },
              }}
            >
              brunoantunes94@hotmail.com
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            component={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {socialLinks.map((link) => (
              <IconButton
                key={link.label}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                sx={{
                  color: 'text.secondary',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  p: 1.5,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    borderColor: 'primary.main',
                    background: 'rgba(139, 92, 246, 0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                {link.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
