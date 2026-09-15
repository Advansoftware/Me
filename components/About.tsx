'use client';

import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const stats = [
  { icon: <FolderCopyIcon sx={{ fontSize: 40 }} />, value: '80+', label: 'Repositórios no GitHub' },
  { icon: <CodeIcon sx={{ fontSize: 40 }} />, value: '2.5K+', label: 'Contribuições' },
  { icon: <AcUnitIcon sx={{ fontSize: 40 }} />, value: '🏆', label: 'Arctic Code Vault' },
];

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)',
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
            Sobre mim
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              mb: 8,
            }}
          >
            Gosto de entregar código que outra pessoa consiga ler seis meses depois,
            sem precisar me perguntar nada.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid key={stat.label} size={{ xs: 12, md: 4 }}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  cursor: 'default',
                }}
              >
                <CardContent sx={{ py: 5 }}>
                  <Box
                    sx={{
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    sx={{
                      mb: 1,
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #10B981 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          sx={{ mt: 8 }}
        >
          <Card sx={{ p: 4 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.9 }}>
              Hoje colaboro com a{' '}
              <strong style={{ color: '#10B981' }}>Prefeitura de Brazópolis</strong>, onde
              refiz o portal municipal do zero.
              <br /><br />
              Além do desenvolvimento tradicional, trabalho com IA dentro do produto. O
              RespondIA atende clientes no WhatsApp, marca compromissos na agenda e, no modo
              finance, categoriza as despesas sozinho.
              <br /><br />
              No momento estou aprendendo Flutter para mobile e estudando arquitetura de
              software. O que eu construo fica quase todo no{' '}
              <Box component="a" href="https://github.com/Advansoftware?tab=repositories" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.light', textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>GitHub</Box>.
              Se você tem um projeto open source em React, Next.js, Node.js ou PHP, me chame.
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
