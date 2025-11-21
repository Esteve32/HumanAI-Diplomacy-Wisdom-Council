import { useEffect, useState } from "react";

export default function ThinkingAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="relative w-24 h-24">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className="text-primary" style={{ stopColor: "currentColor", stopOpacity: 0.8 }} />
              <stop offset="100%" className="text-primary" style={{ stopColor: "currentColor", stopOpacity: 0.2 }} />
            </linearGradient>
            <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" className="text-primary" style={{ stopColor: "currentColor", stopOpacity: 0.6 }} />
              <stop offset="100%" className="text-primary" style={{ stopColor: "currentColor", stopOpacity: 0.1 }} />
            </linearGradient>
          </defs>
          
          <g className="origin-center" style={{ transformOrigin: "50% 50%" }}>
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="1.5"
              className="animate-[spin_4s_linear_infinite]"
              style={{
                transformOrigin: "50% 50%",
                opacity: step === 0 ? 1 : 0.3,
                transition: "opacity 0.8s ease-in-out"
              }}
            />
            
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="url(#gradient2)"
              strokeWidth="1.5"
              className="animate-[spin_3s_linear_infinite_reverse]"
              style={{
                transformOrigin: "50% 50%",
                opacity: step === 1 ? 1 : 0.3,
                transition: "opacity 0.8s ease-in-out"
              }}
            />
            
            <polygon
              points="50,20 65,40 80,50 65,60 50,80 35,60 20,50 35,40"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="1"
              className="animate-[spin_6s_linear_infinite]"
              style={{
                transformOrigin: "50% 50%",
                opacity: step === 2 ? 1 : 0.3,
                transition: "opacity 0.8s ease-in-out"
              }}
            />
            
            <g className="animate-pulse">
              <circle
                cx="50"
                cy="50"
                r="3"
                className="text-primary fill-current"
                style={{
                  opacity: 0.8
                }}
              />
              <circle
                cx="50"
                cy="50"
                r="6"
                fill="none"
                className="text-primary stroke-current"
                strokeWidth="1"
                style={{
                  opacity: 0.4
                }}
              />
            </g>
            
            <g className="animate-[spin_5s_ease-in-out_infinite]" style={{ transformOrigin: "50% 50%" }}>
              <line
                x1="50"
                y1="15"
                x2="50"
                y2="25"
                className="text-primary stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  opacity: 0.6
                }}
              />
              <line
                x1="50"
                y1="75"
                x2="50"
                y2="85"
                className="text-primary stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  opacity: 0.6
                }}
              />
              <line
                x1="15"
                y1="50"
                x2="25"
                y2="50"
                className="text-primary stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  opacity: 0.6
                }}
              />
              <line
                x1="75"
                y1="50"
                x2="85"
                y2="50"
                className="text-primary stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  opacity: 0.6
                }}
              />
            </g>
          </g>
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-ping" style={{ opacity: 0.4 }}></div>
        </div>
      </div>
      
      <div className="mt-6 space-y-1 text-center">
        <p className="text-sm font-medium text-foreground animate-pulse">
          {step === 0 && "🕰️ Time-traveling through epochs..."}
          {step === 1 && "✨ Channeling ancient wisdom..."}
          {step === 2 && "🔮 Consulting the cosmic library..."}
        </p>
        <p className="text-xs text-muted-foreground italic">
          {step === 0 && "Worth the wait, we promise!"}
          {step === 1 && "Bridging centuries in real-time"}
          {step === 2 && "Patience transcends time ✨"}
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            style={{
              animation: "pulse 1.5s ease-in-out infinite",
              animationDelay: "0ms"
            }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            style={{
              animation: "pulse 1.5s ease-in-out infinite",
              animationDelay: "200ms"
            }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            style={{
              animation: "pulse 1.5s ease-in-out infinite",
              animationDelay: "400ms"
            }}
          />
        </div>
      </div>
    </div>
  );
}
