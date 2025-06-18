// Glassmorphism Theme Configuration
export const theme = {
  name: "Glassmorphism",
  // Glassmorphism styles
  glass: {
    card: "bg-white/30 backdrop-blur-md border border-white/30",
    overlay: "bg-white/25 backdrop-blur-xl border border-white/25",
    button: "bg-white/25 backdrop-blur-sm border border-white/30",
    buttonHover: "bg-white/35 backdrop-blur-md border border-white/50"
  },
  gradients: {
    hero: "from-[#6FB0F1] via-[#3B85ED] to-[#0076CC]",
    sidebar: "from-[#6FB0F1] to-[#0076CC]"
  }
};

// Helper function to get theme classes
export const getThemeClasses = () => {
  return {
    // Glassmorphism components
    glassCard: theme.glass.card,
    glassOverlay: theme.glass.overlay,
    primaryButton: `${theme.glass.button} text-white hover:${theme.glass.buttonHover} transition-all duration-300`,
    
    // Backgrounds
    heroBg: `bg-gradient-to-br ${theme.gradients.hero}`,
    primaryBg: `bg-gradient-to-r ${theme.gradients.sidebar}`,
    sectionBg: "bg-white",
    
    // Text colors
    heroText: "text-white",
    primaryText: "text-gray-800",
    lightText: "text-gray-600",
    whiteText: "text-white",
    secondaryButton: "bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-600",
    
    // Shadows
    cardShadow: "shadow-lg",
    glassShadow: "shadow-2xl shadow-blue-500/10"
  };
}; 