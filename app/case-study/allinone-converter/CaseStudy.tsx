'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Chip,
  Paper,
  Button,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import DownloadIcon from '@mui/icons-material/Download';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Link from 'next/link';
import Image from 'next/image';

const technologies = [
  'React 18',
  'Laravel 10',
  'Python 3.11',
  'FFmpeg',
  'yt-dlp',
  'libtorrent',
  'Redis',
  'MySQL',
  'Docker',
  'Nginx',
];

const services = [
  {
    icon: <MovieCreationIcon />,
    name: 'Converter',
    stack: 'Python + FFmpeg',
    port: ':8001',
    items: [
      'Perfis de conversão já prontos',
      'Thumbnail gerada sozinha',
      'Gera o HLS para o streaming',
      'Usa aceleração por hardware quando a máquina tem',
    ],
  },
  {
    icon: <DownloadIcon />,
    name: 'Downloader',
    stack: 'Python + yt-dlp',
    port: ':8002',
    items: [
      'YouTube, Vimeo e Dailymotion',
      'Twitter/X, Instagram e TikTok',
      'Mais de mil sites no total',
      'Consulta as informações do vídeo antes de baixar',
    ],
  },
  {
    icon: <CloudSyncIcon />,
    name: 'Torrent',
    stack: 'Python + libtorrent',
    port: ':8003',
    items: [
      'Magnet link ou arquivo .torrent',
      'Dá para escolher quais arquivos baixar',
      'Pause e resume por item',
      'Peers e seeds em tempo real',
    ],
  },
  {
    icon: <LiveTvIcon />,
    name: 'Streamer',
    stack: 'Python + HLS',
    port: ':8004',
    items: [
      'Transcodifica sob demanda',
      'De 360p a 1080p',
      'Cache dos segmentos já gerados',
      'Funciona em arquivo que ainda está baixando',
    ],
  },
];

const screens = [
  {
    src: '/case-studies/allinone/dashboard.png',
    width: 1877,
    height: 678,
    caption: 'O painel, com a conversão a um clique e a contagem do que está na fila',
  },
  {
    src: '/case-studies/allinone/upload.png',
    width: 1877,
    height: 913,
    caption: 'Arquivo, URL ou magnet entram pela mesma caixa',
  },
  {
    src: '/case-studies/allinone/torrents.png',
    width: 1877,
    height: 913,
    caption: 'O gerenciador de torrent, com velocidade, progresso e peers',
  },
];

export default function CaseStudyAllInOne() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 50%, #0A0A0F 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Button
            component={Link}
            href="/"
            startIcon={<ArrowBackIcon />}
            sx={{ color: 'text.secondary', mb: 2, '&:hover': { color: 'primary.main' } }}
          >
            Voltar ao portfólio
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Chip
              label="Open source"
              size="small"
              sx={{
                mb: 2,
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10B981',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                fontWeight: 600,
              }}
            />
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
              AllInOne Converter
            </Typography>
            <Typography variant="h5" component="p" color="text.secondary" sx={{ mb: 3 }}>
              Estudo de caso: conversor de mídia em microserviços
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

        {/* O que é */}
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
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            O que ele faz
          </Typography>
          <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
            O AllInOne Converter roda inteiro na sua máquina, dentro do Docker. Ele converte
            vídeo e áudio com FFmpeg, baixa de mais de mil sites com yt-dlp, puxa torrent por
            magnet ou por arquivo <code>.torrent</code> e transmite por HLS o que ainda está
            baixando. É um projeto aberto, e o README pede colaboradores.
          </Typography>
        </Paper>

        {/* Arquitetura */}
        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
          Como está montado
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, maxWidth: 820 }}>
          O front em React fala com um gateway em Laravel, e o gateway reparte o trabalho
          entre quatro serviços em Python, cada um no seu container. O Redis segura a fila,
          o MySQL guarda o estado dos jobs e os serviços trocam arquivo por volumes
          compartilhados. Quebrar assim deixa escalar só a parte que estiver apertada.
        </Typography>

        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{
            p: { xs: 2, md: 4 },
            mb: 6,
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
          }}
        >
          <Stack spacing={2} alignItems="center">
            <Box
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 2,
                width: { xs: '100%', md: '60%' },
                textAlign: 'center',
                border: '1px solid rgba(97, 218, 251, 0.4)',
                background: 'rgba(97, 218, 251, 0.08)',
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>Front em React</Typography>
              <Typography variant="caption" color="text.secondary">
                :3000
              </Typography>
            </Box>

            <Typography color="text.secondary">↓</Typography>

            <Box
              sx={{
                px: 3,
                py: 1.5,
                borderRadius: 2,
                width: { xs: '100%', md: '60%' },
                textAlign: 'center',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                background: 'rgba(239, 68, 68, 0.08)',
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>Gateway em Laravel</Typography>
              <Typography variant="caption" color="text.secondary">
                Nginx, PHP-FPM e Supervisor · :8080
              </Typography>
            </Box>

            <Typography color="text.secondary">↓</Typography>

            <Grid container spacing={2} sx={{ width: '100%' }}>
              {services.map((service) => (
                <Grid size={{ xs: 6, md: 3 }} key={service.name}>
                  <Box
                    sx={{
                      p: 2,
                      height: '100%',
                      borderRadius: 2,
                      textAlign: 'center',
                      border: '1px solid rgba(139, 92, 246, 0.35)',
                      background: 'rgba(139, 92, 246, 0.08)',
                    }}
                  >
                    <Typography sx={{ fontWeight: 700 }}>{service.name}</Typography>
                    <Typography variant="caption" color="text.secondary" display="block">
                      {service.stack}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {service.port}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Typography color="text.secondary">↓</Typography>

            <Stack direction="row" spacing={2} sx={{ width: { xs: '100%', md: '60%' } }}>
              {[
                { name: 'Redis', role: 'fila', port: ':6379' },
                { name: 'MySQL', role: 'banco', port: ':3306' },
              ].map((store) => (
                <Box
                  key={store.name}
                  sx={{
                    flex: 1,
                    px: 2,
                    py: 1.5,
                    borderRadius: 2,
                    textAlign: 'center',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    background: 'rgba(16, 185, 129, 0.08)',
                  }}
                >
                  <Typography sx={{ fontWeight: 700 }}>{store.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {store.role} · {store.port}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Paper>

        {/* Serviços */}
        <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 700 }}>
          Os quatro serviços
        </Typography>
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={service.name}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                sx={{ p: 3, height: '100%', backdropFilter: 'none' }}
              >
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                  <Box sx={{ color: '#A78BFA', display: 'flex' }}>{service.icon}</Box>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                    {service.name}
                  </Typography>
                  <Chip label={service.port} size="small" />
                </Stack>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {service.stack}
                </Typography>
                <Stack component="ul" spacing={0.5} sx={{ pl: 2, m: 0 }}>
                  {service.items.map((item) => (
                    <Typography
                      key={item}
                      component="li"
                      variant="body2"
                      color="text.secondary"
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Telas */}
        <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 700 }}>
          As telas
        </Typography>
        <Grid container spacing={3} sx={{ mb: 8 }}>
          {screens.map((screen, index) => (
            <Grid size={{ xs: 12 }} key={screen.src}>
              <Card
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                sx={{ backdropFilter: 'none' }}
              >
                <Image
                  src={screen.src}
                  alt={screen.caption}
                  width={screen.width}
                  height={screen.height}
                  sizes="(max-width: 1200px) 100vw, 1152px"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {screen.caption}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Como rodar */}
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{
            p: 4,
            mb: 6,
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
            Subindo na sua máquina
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.8 }}>
            Precisa de Docker 20.10, Docker Compose 2.0, 8GB de RAM e 20GB de disco. Depois
            disso é clonar e subir, sem arquivo de configuração para preencher.
          </Typography>
          <Box
            component="pre"
            sx={{
              p: 2,
              mb: 3,
              overflowX: 'auto',
              borderRadius: 2,
              background: 'rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
              color: '#A7F3D0',
            }}
          >
            {`git clone https://github.com/Advansoftware/allInOne-Converter.git
cd allInOne-Converter
make up`}
          </Box>
          <Typography variant="body2" color="text.secondary">
            O front sobe em <code>localhost:3000</code> e a API em{' '}
            <code>localhost:8080</code>. O Makefile ainda traz atalhos para logs, migrations
            e para checar a saúde dos containers.
          </Typography>
        </Paper>

        {/* CTA */}
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          sx={{
            p: 4,
            mb: 4,
            textAlign: 'center',
            borderRadius: 3,
            border: '2px solid rgba(139, 92, 246, 0.3)',
            background:
              'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(16, 185, 129, 0.1) 100%)',
          }}
        >
          <Typography variant="h5" component="p" sx={{ mb: 3, fontWeight: 600 }}>
            O código está todo aberto.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              href="https://github.com/Advansoftware/allInOne-Converter"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #8B5CF6 0%, #10B981 100%)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #7C3AED 0%, #059669 100%)',
                },
              }}
            >
              Ver o código no GitHub
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://wa.me/5535984216196?text=Ol%C3%A1%20Bruno!%20Vi%20o%20case%20do%20AllInOne%20Converter%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<WhatsAppIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 600,
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: 'text.primary',
                '&:hover': {
                  borderColor: '#25D366',
                  background: 'rgba(37, 211, 102, 0.1)',
                },
              }}
            >
              Falar sobre um projeto
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
