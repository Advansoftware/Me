'use client';

import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        component={motion.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        position="fixed"
        sx={{
          background: 'rgba(10, 10, 15, 0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              component="a"
              href="#home"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                cursor: 'pointer',
                textDecoration: 'none',
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: 300,
                  fontSize: '1.8rem',
                  color: '#8B5CF6',
                  fontFamily: 'monospace',
                }}
              >
                {'<'}
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  background: 'linear-gradient(135deg, #F8FAFC 0%, #A78BFA 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.5px',
                }}
              >
                Bruno
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontWeight: 700,
                  fontSize: '1.4rem',
                  background: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.5px',
                }}
              >
                Antunes
              </Typography>
              <Typography
                component="span"
                sx={{
                  fontWeight: 300,
                  fontSize: '1.8rem',
                  color: '#10B981',
                  fontFamily: 'monospace',
                }}
              >
                {'/>'}
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      background: 'rgba(139, 92, 246, 0.1)',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton
                component="a"
                href="https://github.com/Advansoftware"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            background: 'rgba(10, 10, 15, 0.95)',
            backdropFilter: 'blur(20px)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'text.primary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(item.href)}
                sx={{
                  py: 2,
                  '&:hover': {
                    background: 'rgba(139, 92, 246, 0.1)',
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Toolbar />
    </>
  );
}
