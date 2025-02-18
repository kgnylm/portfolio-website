const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Circles */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      {/* Wavy Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="absolute w-full"
            style={{
              top: `${10 + (index * 80) / 8}%`,
              opacity: 0.1,
              transform: `translateY(${Math.sin(index) * 20}px)`,
            }}
          >
            <svg
              className="w-full animate-wave"
              style={{
                animationDelay: `${index * -0.5}s`,
                animationDuration: `${8 + Math.random() * 7}s`,
              }}
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path
                className="fill-none stroke-primary/30"
                strokeWidth="1"
                d="M0,50 Q250,${40 + Math.sin(index) * 20} 500,50 T1000,50"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Moving Dots */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-gray-500/20 rounded-full animate-floating"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Background;
