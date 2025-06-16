export default function AnimatedBackground() {
  return (
    <>
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6FB0F1] via-[#3B85ED] to-[#0076CC] animate-gradient"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-blue-500/20 animate-gradient" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="bg-particles">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-purple-300/20 rounded-full blur-lg animate-float-delayed opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-pink-300/15 rounded-full blur-md animate-pulse-glow opacity-50"></div>
        
        {/* Small animated particles */}
        <div className="particle particle-1 animate-particle-1"></div>
        <div className="particle particle-2 animate-particle-2"></div>
        <div className="particle particle-3 animate-particle-3"></div>
        <div className="particle particle-4 animate-particle-1" style={{ animationDelay: '4s' }}></div>
        <div className="particle particle-5 animate-particle-2" style={{ animationDelay: '7s' }}></div>
        
        {/* Many more bubbles with various sizes and speeds */}
        {/* Extra Small Bubbles (2-4px) */}
        <div className="absolute w-2 h-2 bg-white/40 rounded-full top-[15%] left-[25%] animate-bubble-1" style={{ animationDelay: '0s' }}></div>
        <div className="absolute w-3 h-3 bg-blue-400/30 rounded-full top-[45%] left-[15%] animate-bubble-2" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-2 h-2 bg-purple-400/35 rounded-full top-[75%] left-[35%] animate-bubble-3" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-4 h-4 bg-pink-400/25 rounded-full top-[25%] left-[85%] animate-bubble-4" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-3 h-3 bg-cyan-400/30 rounded-full top-[65%] left-[75%] animate-bubble-5" style={{ animationDelay: '4s' }}></div>
        <div className="absolute w-2 h-2 bg-yellow-400/35 rounded-full top-[35%] left-[65%] animate-bubble-6" style={{ animationDelay: '5s' }}></div>
        
        {/* Small Bubbles (5-8px) */}
        <div className="absolute w-5 h-5 bg-white/30 rounded-full top-[20%] left-[45%] animate-bubble-1" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute w-6 h-6 bg-purple-300/25 rounded-full top-[55%] left-[25%] animate-bubble-2" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute w-7 h-7 bg-blue-300/30 rounded-full top-[85%] left-[55%] animate-bubble-3" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute w-8 h-8 bg-pink-300/20 rounded-full top-[10%] left-[75%] animate-bubble-4" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute w-5 h-5 bg-green-400/25 rounded-full top-[40%] left-[85%] animate-bubble-5" style={{ animationDelay: '5.5s' }}></div>
        <div className="absolute w-6 h-6 bg-indigo-400/30 rounded-full top-[70%] left-[5%] animate-bubble-6" style={{ animationDelay: '6.5s' }}></div>
        
        {/* Medium Bubbles (10-16px) */}
        <div className="absolute w-10 h-10 bg-white/20 rounded-full top-[30%] left-[55%] animate-bubble-1" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-12 h-12 bg-purple-400/15 rounded-full top-[60%] left-[35%] animate-bubble-2" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-14 h-14 bg-blue-400/20 rounded-full top-[90%] left-[65%] animate-bubble-3" style={{ animationDelay: '4s' }}></div>
        <div className="absolute w-16 h-16 bg-pink-400/15 rounded-full top-[5%] left-[95%] animate-bubble-4" style={{ animationDelay: '5s' }}></div>
        <div className="absolute w-11 h-11 bg-cyan-400/20 rounded-full top-[50%] left-[5%] animate-bubble-5" style={{ animationDelay: '6s' }}></div>
        <div className="absolute w-13 h-13 bg-violet-400/25 rounded-full top-[80%] left-[85%] animate-bubble-6" style={{ animationDelay: '7s' }}></div>
        
        {/* Large Bubbles (18-24px) */}
        <div className="absolute w-18 h-18 bg-white/15 rounded-full top-[25%] left-[75%] animate-bubble-1" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute w-20 h-20 bg-purple-300/10 rounded-full top-[65%] left-[45%] animate-bubble-2" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute w-22 h-22 bg-blue-300/15 rounded-full top-[95%] left-[75%] animate-bubble-3" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute w-24 h-24 bg-pink-300/10 rounded-full top-[15%] left-[5%] animate-bubble-4" style={{ animationDelay: '5.5s' }}></div>
        
        {/* Extra Large Bubbles (28-40px) */}
        <div className="absolute w-28 h-28 bg-white/8 rounded-full top-[35%] left-[15%] animate-bubble-5" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-32 h-32 bg-purple-400/8 rounded-full top-[75%] left-[65%] animate-bubble-6" style={{ animationDelay: '4s' }}></div>
        <div className="absolute w-36 h-36 bg-blue-400/6 rounded-full top-[5%] left-[45%] animate-bubble-1" style={{ animationDelay: '5s' }}></div>
        <div className="absolute w-40 h-40 bg-pink-400/6 rounded-full top-[85%] left-[25%] animate-bubble-2" style={{ animationDelay: '6s' }}></div>
        
        {/* Additional floating elements with blur effects */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-pulse-glow blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 right-1/5 w-14 h-14 bg-gradient-to-br from-cyan-400/15 to-purple-400/15 rounded-full animate-bubble-3 blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-18 h-18 bg-gradient-to-br from-yellow-400/10 to-pink-400/10 rounded-full animate-bubble-5 blur-md" style={{ animationDelay: '4s' }}></div>
        
        {/* Drifting elements with various speeds */}
        <div className="absolute top-1/3 w-2 h-2 bg-white/40 rounded-full animate-drift" style={{ animationDelay: '0s', animationDuration: '20s' }}></div>
        <div className="absolute top-2/3 w-3 h-3 bg-purple-400/30 rounded-full animate-drift" style={{ animationDelay: '5s', animationDuration: '25s' }}></div>
        <div className="absolute top-1/2 w-1 h-1 bg-pink-400/50 rounded-full animate-drift" style={{ animationDelay: '10s', animationDuration: '15s' }}></div>
        <div className="absolute top-1/4 w-4 h-4 bg-blue-400/25 rounded-full animate-drift" style={{ animationDelay: '3s', animationDuration: '30s' }}></div>
        <div className="absolute top-3/4 w-2 h-2 bg-cyan-400/35 rounded-full animate-drift" style={{ animationDelay: '8s', animationDuration: '18s' }}></div>
        <div className="absolute top-1/5 w-3 h-3 bg-violet-400/30 rounded-full animate-drift" style={{ animationDelay: '12s', animationDuration: '22s' }}></div>
      </div>

      {/* Subtle overlay patterns */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>
    </>
  );
} 