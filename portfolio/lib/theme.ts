// Theme Configuration - Change themes instantly!
export const themes = {
  // CV-Inspired Theme (matches your CV design!)
  cv: {
    name: "CV Professional",
    colors: {
      primary: "blue-600",
      primaryHover: "blue-700",
      primaryLight: "blue-50",
      secondary: "white",
      text: "gray-800",
      textLight: "gray-600",
      background: "white",
      backgroundAlt: "blue-50",
      accent: "blue-500"
    },
    gradients: {
      hero: "from-[#6FB0F1] via-[#3B85ED] to-[#0076CC]",
      sidebar: "from-[#6FB0F1] to-[#0076CC]"
    },
    // Glassmorphism styles
    glass: {
      card: "bg-white/20 backdrop-blur-md border border-white/30",
      cardHover: "bg-white/30 backdrop-blur-lg border border-white/40",
      button: "bg-white/25 backdrop-blur-sm border border-white/30",
      buttonHover: "bg-white/35 backdrop-blur-md border border-white/50",
      section: "bg-white/10 backdrop-blur-sm border-t border-white/20",
      overlay: "bg-white/15 backdrop-blur-xl border border-white/25"
    }
  },

  // Current Blue Theme
  blue: {
    name: "Professional Blue",
    colors: {
      primary: "blue-600",
      primaryHover: "blue-700",
      primaryLight: "blue-50",
      secondary: "gray-900",
      text: "gray-700",
      textLight: "gray-600",
      background: "white",
      backgroundAlt: "gray-50",
      accent: "blue-100"
    },
    gradients: {
      hero: "from-blue-50 to-white"
    }
  },

  // Green Nature Theme
  green: {
    name: "Nature Green",
    colors: {
      primary: "emerald-600",
      primaryHover: "emerald-700", 
      primaryLight: "emerald-50",
      secondary: "gray-900",
      text: "gray-700",
      textLight: "gray-600",
      background: "white",
      backgroundAlt: "emerald-50",
      accent: "emerald-100"
    },
    gradients: {
      hero: "from-emerald-50 to-white"
    }
  },

  // Purple Creative Theme
  purple: {
    name: "Creative Purple",
    colors: {
      primary: "purple-600",
      primaryHover: "purple-700",
      primaryLight: "purple-50", 
      secondary: "gray-900",
      text: "gray-700",
      textLight: "gray-600",
      background: "white",
      backgroundAlt: "purple-50",
      accent: "purple-100"
    },
    gradients: {
      hero: "from-purple-50 to-white"
    }
  },

  // Dark Theme
  dark: {
    name: "Dark Mode",
    colors: {
      primary: "blue-500",
      primaryHover: "blue-400",
      primaryLight: "gray-800",
      secondary: "white",
      text: "gray-300",
      textLight: "gray-400", 
      background: "gray-900",
      backgroundAlt: "gray-800",
      accent: "gray-700"
    },
    gradients: {
      hero: "from-gray-900 to-gray-800"
    }
  },

  // Orange Warm Theme
  orange: {
    name: "Warm Orange",
    colors: {
      primary: "orange-600",
      primaryHover: "orange-700",
      primaryLight: "orange-50",
      secondary: "gray-900", 
      text: "gray-700",
      textLight: "gray-600",
      background: "white",
      backgroundAlt: "orange-50",
      accent: "orange-100"
    },
    gradients: {
      hero: "from-orange-50 to-white"
    }
  },

  // Minimal Gray Theme
  minimal: {
    name: "Minimal Gray",
    colors: {
      primary: "gray-800",
      primaryHover: "gray-900",
      primaryLight: "gray-100",
      secondary: "gray-900",
      text: "gray-600", 
      textLight: "gray-500",
      background: "white",
      backgroundAlt: "gray-50",
      accent: "gray-200"
    },
    gradients: {
      hero: "from-gray-50 to-white"
    }
  }
};

// Current active theme - Using CV theme to match your design!
export const currentTheme = themes.cv;

// Helper function to get theme classes
export const getThemeClasses = () => {
  const t = currentTheme.colors;
  const glass = currentTheme.glass;
  
  return {
    // Backgrounds with CV-style gradients
    heroBg: `bg-gradient-to-br ${currentTheme.gradients.hero}`,
    sectionBg: `bg-${t.background}`,
    sectionAltBg: glass ? glass.section : `bg-${t.backgroundAlt}`,
    primaryBg: `bg-gradient-to-r ${currentTheme.gradients.sidebar || `bg-${t.primary}`}`,
    cardBg: `bg-${t.background}`,
    
    // Text Colors (white on blue sections like your CV)
    primaryText: `text-${t.text}`,
    heroText: `text-${t.secondary}`, // White text for hero on gradient
    bodyText: `text-${t.text}`,
    lightText: `text-${t.textLight}`,
    whiteText: `text-white`,
    primaryButtonText: `text-white`,
    secondaryButtonText: `text-${t.primary}`,
    
    // Buttons matching CV style with glassmorphism
    primaryButton: glass ? 
      `${glass.button} text-white hover:${glass.buttonHover} transition-all duration-300` :
      `bg-gradient-to-r ${currentTheme.gradients.sidebar || `bg-${t.primary} hover:bg-${t.primaryHover}`} text-white hover:opacity-90`,
    secondaryButton: glass ?
      `${glass.button} text-white hover:${glass.buttonHover} transition-all duration-300` :
      `bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-600`,
    
    // Glassmorphism cards and accents
    skillCard: glass ? 
      `${glass.card} hover:${glass.cardHover} transition-all duration-300` :
      `bg-${t.background} border border-blue-100`,
    glassCard: glass ? glass.card : `bg-${t.background}`,
    glassOverlay: glass ? glass.overlay : `bg-${t.background}`,
    accentBg: `bg-${t.accent}`,
    accentText: `text-${t.primary}`,
    
    // Enhanced shadows like your CV
    cardShadow: "shadow-lg",
    buttonShadow: "shadow-md",
    glassShadow: "shadow-2xl shadow-blue-500/10"
  };
}; 