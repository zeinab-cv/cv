// Glassmorphism Theme Configuration
export const theme = {
  name: "Glassmorphism",
  // Glassmorphism styles
  glass: {
    card: "bg-white/10 backdrop-blur-md border border-white/20",
    overlay: "bg-white/10 backdrop-blur-xl border border-white/20",
    button: "bg-white/5 backdrop-blur-sm border border-white/20",
    buttonHover: "bg-white/35 backdrop-blur-md border border-white/30"
  },
  gradients: {
    // Background gradients
    hero: "from-[#6FB0F1] via-[#3B85ED] to-[#0076CC]",
    sidebar: "from-[#6FB0F1] to-[#0076CC]",
    
    // Primary accent gradient (used for buttons, active states, skills bars, etc.)
    primary: "from-[#F8A662] to-[#E2A836]",
    primaryHover: "from-[#F8A662] to-[#E2A836]",
    primaryLight: "from-[#F8A662]/20 to-[#E2A836]/20",
    
    // Secondary gradients for certificates sections
    secondary1: "from-green-600 to-teal-600",
    secondary2: "from-[#F8A662] to-[#E2A836]", // Using primary
    secondary3: "from-blue-600 to-cyan-600"
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
    
    // Unified gradients
    primaryGradient: `bg-gradient-to-r ${theme.gradients.primary}`,
    primaryGradientHover: `bg-gradient-to-r ${theme.gradients.primaryHover}`,
    primaryGradientLight: `bg-gradient-to-r ${theme.gradients.primaryLight}`,
    
    // Secondary gradients for certificates
    secondaryGradient1: `bg-gradient-to-r ${theme.gradients.secondary1}`,
    secondaryGradient2: `bg-gradient-to-r ${theme.gradients.secondary2}`,
    secondaryGradient3: `bg-gradient-to-r ${theme.gradients.secondary3}`,
    
    // Text colors
    heroText: "text-white",
    primaryText: "text-gray-800",
    lightText: "text-gray-600",
    whiteText: "text-white",
    primaryGradientText: `bg-gradient-to-r ${theme.gradients.primary} text-transparent bg-clip-text`,
    secondaryButton: "bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-600",
    
    // Shadows
    cardShadow: "shadow-lg",
    glassShadow: "shadow-2xl shadow-blue-500/10",

    // Reusable pill/tag style
    skillPill: "px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 hover:bg-gradient-to-br hover:from-yellow-300/20 hover:via-cyan-400/30 hover:to-violet-300/20 hover:scale-115 transition-all duration-300",
    skillPill2: "px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20 transition-all duration-300"
  };
  };