'use client';

import { Box, Container, Typography, Divider } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
          }}
        >
          © {currentYear} Bruno Antunes. Feito com{' '}
          <FavoriteIcon sx={{ fontSize: 16, color: 'error.main' }} /> usando Next.js & MUI
        </Typography>
      </Container>
    </Box>
  );
}
