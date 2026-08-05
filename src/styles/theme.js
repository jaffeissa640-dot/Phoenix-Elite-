export const colors = {
  // Dark & Gold Theme
  gold: '#FFD700',
  goldDark: '#B8860B',
  goldLight: '#FFC107',
  goldGlow: 'rgba(255, 215, 0, 0.12)',
  black: '#0A0500',
  blackLight: '#1A0A00',
  darkGold: '#2D1B00',
  warmWhite: '#FFF8E7',
  textMuted: '#A89070',
  textDark: '#5A4A30',
  borderGold: 'rgba(255, 215, 0, 0.08)',
  success: '#4CAF50',
  danger: '#FF5722',
};

export const typography = {
  fontFamily: {
    primary: 'Inter_400Regular',
    primaryBold: 'Inter_700Bold',
    display: 'PlayfairDisplay_700Bold',
  },
  sizes: {
    small: 12,
    regular: 14,
    medium: 16,
    large: 20,
    xlarge: 24,
    xxlarge: 32,
    hero: 40,
  },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const shadows = {
  gold: {
    shadowColor: colors.gold,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  card: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
};

export const theme = {
  colors,
  typography,
  spacing,
  shadows,
};
