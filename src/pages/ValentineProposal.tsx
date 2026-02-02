import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroRoses from "@/assets/hero-roses.jpg";
import roseBouquet from "@/assets/rose-bouquet.jpg";

const NO_BUTTON_TEXTS = [
  "Are you sure? 💕",
  "Pretty please? 🥺",
  "Think about it! 💖",
  "You'll make me so happy! 😊",
  "I'll love you forever! 💝",
  "Say yes! You won't regret it! ✨",
  "One more chance? 🙏",
  "Please? 🙏",
  "My heart is waiting! 💗",
  "You're my one and only! 💕",
  "I'm not giving up! 💪❤️",
  "You're too sweet to say no! 🍬",
  "Let's make memories! 🌟",
  "I'll be the best valentine! 💝",
  "Yes? Yes? Yes? 💖",
];

const ValentineProposal = () => {
  const navigate = useNavigate();
  const [noClickCount, setNoClickCount] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const noButtonText =
    NO_BUTTON_TEXTS[noClickCount % NO_BUTTON_TEXTS.length];

  const handleYesClick = () => {
    setIsAnimating(true);
    setShowSuccess(true);

    // Play success animation, then navigate to main website
    setTimeout(() => {
      navigate("/home");
    }, 3500);
  };

  const handleNoClick = () => {
    setNoClickCount((prev) => prev + 1);
  };

  if (showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen romantic-gradient flex items-center justify-center overflow-hidden relative"
      >
        {/* Decorative corner hearts */}
        <div className="absolute top-8 left-8 text-primary/30">
          <Heart className="w-12 h-12 fill-primary/20 animate-float-heart" />
        </div>
        <div className="absolute top-8 right-8 text-primary/30">
          <Heart className="w-12 h-12 fill-primary/20 animate-float-heart animation-delay-300" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Floating hearts animation */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: (Math.random() - 0.5) * 400,
                y: -300 - Math.random() * 200,
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.1,
              }}
              className="absolute"
            >
              <Heart className="w-8 h-8 md:w-12 md:h-12 text-primary fill-primary" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.3,
          }}
          className="relative z-10 text-center px-4"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-24 h-24 md:w-32 md:h-32 text-primary fill-primary mx-auto mb-6" />
          </motion.div>
          <h2 className="font-script text-5xl md:text-7xl font-normal text-primary mb-4 drop-shadow-sm">
            Yay! You said Yes! 💕
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Opening your lovebook...
          </p>
          <p className="font-script text-2xl text-primary">
            Making your day extra special! 🌹
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen romantic-gradient flex flex-col items-center justify-center overflow-hidden px-4 py-12 relative"
    >
      {/* Decorative corner hearts */}
      <div className="absolute top-8 left-8 text-primary/25 pointer-events-none">
        <Heart className="w-10 h-10 md:w-14 md:h-14 fill-primary/15 animate-float-heart" />
      </div>
      <div className="absolute top-8 right-8 text-primary/25 pointer-events-none">
        <Heart className="w-10 h-10 md:w-14 md:h-14 fill-primary/15 animate-float-heart animation-delay-200" />
      </div>
      <div className="absolute bottom-8 left-12 text-primary/20 pointer-events-none">
        <Heart className="w-8 h-8 fill-primary/10 animate-float-heart animation-delay-500" />
      </div>
      <div className="absolute bottom-8 right-12 text-primary/20 pointer-events-none">
        <Heart className="w-8 h-8 fill-primary/10 animate-float-heart animation-delay-700" />
      </div>

      {/* Real flower bouquets greeting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-24 left-4 md:left-8 flex flex-col gap-2"
      >
        <img src={heroRoses} alt="Roses bouquet" className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover romantic-shadow border-2 border-white/60" />
        <img src={roseBouquet} alt="Rose bouquet" className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover romantic-shadow border-2 border-white/60" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute top-24 right-4 md:right-8 flex flex-col gap-2"
      >
        <img src={roseBouquet} alt="Rose bouquet" className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover romantic-shadow border-2 border-white/60" />
        <img src={heroRoses} alt="Roses bouquet" className="w-20 h-20 md:w-24 md:h-24 rounded-lg object-cover romantic-shadow border-2 border-white/60" />
      </motion.div>

      {/* Love GIF with romantic frame */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-10 relative"
      >
        <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-rose-medium/10 to-primary/20 rounded-3xl blur-sm" />
        <div className="relative rounded-2xl overflow-hidden romantic-shadow romantic-glow p-2 bg-white/60 backdrop-blur-sm max-w-sm border-2 border-primary/20">
          <img
            src="https://media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif"
            alt="Love hearts"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </motion.div>

      {/* Question */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-10 max-w-xl"
      >
        <h1 className="font-script text-4xl md:text-6xl font-normal text-primary mb-3 drop-shadow-sm">
          will you be my valentine? 🥹💖
        </h1>
        <p className="text-muted-foreground text-lg font-body">
          💖 I'd be the luckiest person in the world 💖
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-wrap gap-4 justify-center items-center"
      >
        <Button
          size="lg"
          className="romantic-shadow romantic-glow text-lg px-10 py-6 h-auto bg-primary hover:bg-primary/90 hover:scale-105 transition-transform duration-300"
          onClick={handleYesClick}
          disabled={isAnimating}
        >
          Yes! 💕
        </Button>

        <AnimatePresence mode="wait">
          <motion.div
            key={noClickCount}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto min-w-[180px] border-2 border-primary/40 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
              onClick={handleNoClick}
              disabled={isAnimating}
            >
              {noClickCount === 0 ? "No" : noButtonText}
            </Button>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ValentineProposal;
