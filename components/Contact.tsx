'use client';

import { Box, Container, Typography, Button, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const socialLinks = [
  { icon: <GitHubIcon />, url: 'https://github.com/Advansoftware', label: 'GitHub' },
  { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/bruno-antunes-284679b6/', label: 'LinkedIn' },
  { icon: <WhatsAppIcon />, url: 'https://wa.me/5535984216196', label: 'WhatsApp' },
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
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: 'center' }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              background: 'linear-gradient(135deg, #F8FAFC 0%, #94A3B8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Vamos Conversar?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 500,
              mx: 'auto',
              mb: 6,
            }}
          >
            Estou sempre aberto a novas oportunidades, projetos interessantes e
            colaborações open source. Entre em contato!
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 6 }}>
            <Button
              component={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              href="mailto:brunoantunes94@hotmail.com"
              sx={{
                px: 4,
                py: 1.5,
              }}
            >
              brunoantunes94@hotmail.com
            </Button>
            <Button
              component={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/5535984216196"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.5,
                borderColor: '#25D366',
                color: '#25D366',
                '&:hover': {
                  borderColor: '#25D366',
                  background: 'rgba(37, 211, 102, 0.1)',
                },
              }}
            >
              WhatsApp
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
