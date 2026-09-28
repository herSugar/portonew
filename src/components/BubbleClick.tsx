import { useState, useEffect } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
}

export default function BubbleClick() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const handleInteraction = (e: MouseEvent | TouchEvent) => {
      let x, y;
      
      if ("touches" in e) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      } else {
        x = e.clientX;
        y = e.clientY;
      }

      const newBubble = {
        id: Date.now() + Math.random(),
        x,
        y,
      };
      
      setBubbles((prev) => [...prev, newBubble]);

      // Remove bubble after animation ends (1000ms)
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, 1000);
    };

    window.addEventListener("click", handleInteraction);
    // window.addEventListener("touchstart", handleInteraction); 
    // We only attach to click to avoid double firing on mobile, as click fires on touch end natively

    return () => {
      window.removeEventListener("click", handleInteraction);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full border border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.5)] bg-blue-500/20 animate-bubble"
          style={{
            left: bubble.x - 25,
            top: bubble.y - 25,
            width: 50,
            height: 50,
          }}
        />
      ))}
    </div>
  );
}
