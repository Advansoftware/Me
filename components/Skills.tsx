'use client';

import { Box, Container, Typography, Grid, Paper, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Node.js', color: '#339933' },
  { name: 'NestJS', color: '#E0234E' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'Dart', color: '#0175C2' },
  { name: 'PHP', color: '#777BB4' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Git', color: '#F05032' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Material UI', color: '#007FFF' },
];

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, transparent 0%, rgba(16, 185, 129, 0.05) 50%, transparent 100%)',
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
            Tecnologias
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
            Ferramentas e tecnologias que utilizo no dia a dia para criar
            aplicações incríveis.
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid key={skill.name}>
              <Tooltip title={skill.name} arrow>
                <Paper
                  component={motion.div}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  sx={{
                    p: 2,
                    px: 3,
                    background: 'rgba(18, 18, 26, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: 'default',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(18, 18, 26, 0.9)',
                      borderColor: skill.color,
                      boxShadow: `0 0 20px ${skill.color}33`,
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: skill.color,
                    }}
                  >
                    {skill.name}
                  </Typography>
                </Paper>
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
