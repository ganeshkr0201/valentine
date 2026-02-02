import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingHeart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: FloatingHeart = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        size: Math.random() * 20 + 12,
        duration: Math.random() * 3 + 4,
        delay: 0,
      };
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, newHeart.duration * 1000);
    };

    const interval = setInterval(createHeart, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ 
              y: "100vh", 
              x: `${heart.x}vw`, 
              opacity: 0.8,
              scale: 0.5 
            }}
            animate={{ 
              y: "-10vh", 
              opacity: 0,
              scale: 1,
              rotate: [0, 10, -10, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: heart.duration,
              ease: "easeOut",
              rotate: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute"
          >
            <Heart 
              size={heart.size} 
              className="text-primary fill-primary/40 drop-shadow-sm"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;
