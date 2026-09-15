'use client';

import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PublicIcon from '@mui/icons-material/Public';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const services = [
  { icon: <PublicIcon />, label: 'Portais públicos' },
  { icon: <CloudQueueIcon />, label: 'Sistemas SaaS' },
  { icon: <SmartToyIcon />, label: 'Atendimento com IA' },
];

export default function Company() {
  return (
    <Box
      id="company"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, transparent 0%, rgba(98, 0, 234, 0.08) 50%, transparent 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            border: '1px solid rgba(139, 92, 246, 0.3)',
            background:
              'linear-gradient(135deg, rgba(98, 0, 234, 0.12) 0%, rgba(0, 230, 118, 0.08) 100%)',
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 6 }}
            alignItems="center"
          >
            <Box
              component={motion.div}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              sx={{ flexShrink: 0, textAlign: 'center' }}
            >
              <Box
                component="img"
                src="/advansoftware-logo.svg"
                alt="Logo da AdvanSoftware"
                sx={{
                  width: { xs: 120, md: 170 },
                  height: { xs: 120, md: 170 },
                  filter: 'drop-shadow(0 0 40px rgba(98, 0, 234, 0.6))',
                }}
              />
            </Box>

            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Chip
                label="Minha empresa"
                size="small"
                sx={{
                  mb: 2,
                  background: 'rgba(0, 230, 118, 0.15)',
                  color: '#00E676',
                  border: '1px solid rgba(0, 230, 118, 0.3)',
                  fontWeight: 600,
                }}
              />

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #00E676 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                AdvanSoftware
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.9, maxWidth: 620 }}
              >
                Fundei a AdvanSoftware em Brazópolis e é por ela que passam meus projetos,
                do portal da Prefeitura ao RespondIA. É uma empresa pequena, então quem
                contrata fala comigo direto.
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                sx={{ gap: 1, mb: 4 }}
              >
                {services.map((service) => (
                  <Chip
                    key={service.label}
                    icon={service.icon}
                    label={service.label}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'text.secondary',
                      '& .MuiChip-icon': { color: '#A78BFA' },
                    }}
                  />
                ))}
              </Stack>

              <Button
                component={motion.a}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                variant="contained"
                size="large"
                href="https://advan-site.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #6200EA 0%, #00E676 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #7C3AED 0%, #10B981 100%)',
                  },
                }}
              >
                Conhecer a AdvanSoftware
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
