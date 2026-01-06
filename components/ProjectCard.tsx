'use client';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  url,
  tags,
  index,
}: ProjectCardProps) {
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 20px 60px rgba(139, 92, 246, 0.2)',
          '& .project-image': {
            transform: 'scale(1.05)',
          },
        },
      }}
      onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt={title}
          className="project-image"
          sx={{
            transition: 'transform 0.5s ease',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(10, 10, 15, 0.8) 0%, transparent 50%)',
          }}
        />
      </Box>

      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h4"
          sx={{
            mb: 1,
            fontSize: '1.25rem',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            flex: 1,
          }}
        >
          {description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2, gap: 1 }}>
          {tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>

        <Button
          variant="outlined"
          endIcon={<OpenInNewIcon />}
          fullWidth
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.2)',
            color: 'text.primary',
            '&:hover': {
              borderColor: 'primary.main',
              background: 'rgba(139, 92, 246, 0.1)',
            },
          }}
        >
          Visitar Site
        </Button>
      </CardContent>
    </Card>
  );
}
