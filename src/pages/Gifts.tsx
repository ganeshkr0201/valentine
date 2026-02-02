import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeartDivider from "@/components/HeartDivider";

import teddyLove from "@/assets/teddy-love.jpg";
import roseBouquet from "@/assets/rose-bouquet.jpg";
import giftBox from "@/assets/gift-box.jpg";

const gifts = [
  {
    id: 1,
    title: "Cuddle Buddy",
    description: "A soft teddy bear to hold when I'm not there",
    image: teddyLove,
    message: "This teddy represents all the warm hugs I want to give you. Whenever you hold it close, know that my love is wrapped around you. 🧸❤️",
    color: "from-rose-light to-blush"
  },
  {
    id: 2,
    title: "Eternal Roses",
    description: "A bouquet that symbolizes my everlasting love",
    image: roseBouquet,
    message: "Like these roses, my love for you will never fade. Each petal represents a reason why you're the most beautiful person in my world. 🌹💕",
    color: "from-rose-medium to-rose-light"
  },
  {
    id: 3,
    title: "Mystery Gift",
    description: "A special surprise wrapped with love",
    image: giftBox,
    message: "Some gifts can't be wrapped in boxes. My heart, my time, my devotion - these are yours forever. This Valentine's Day and every day after. 🎁💖",
    color: "from-gold-light to-cream"
  }
];

const specialPromises = [
  "My shoulder to lean on, always",
  "Listening when you just need to vent",
  "Holding your hand during walks, even short ones",
  "Being there on your bad days, not just the good ones",
  "Warm, quiet cuddles after a long day",
  "Late-night talks when you need someone to listen"
];

const Gifts = () => {
  const [selectedGift, setSelectedGift] = useState<typeof gifts[0] | null>(null);
  const [revealedPromises, setRevealedPromises] = useState<number[]>([]);

  const revealPromise = (index: number) => {
    if (!revealedPromises.includes(index)) {
      setRevealedPromises([...revealedPromises, index]);
    }
  };

  return (
    <div className="min-h-screen romantic-gradient pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Gift className="w-16 h-16 text-primary" />
            </motion.div>
          </div>
          <h1 className="font-script text-5xl md:text-7xl font-normal text-primary mb-4">
            Gifts for You
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each gift is wrapped with love and chosen with you in mind
          </p>
        </motion.div>

        <HeartDivider />

        {/* Gifts Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {gifts.map((gift, index) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <button
                onClick={() => setSelectedGift(gift)}
                className="w-full text-left group"
              >
                <div className="glass-card rounded-2xl overflow-hidden romantic-shadow hover:scale-[1.03] transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:shadow-[0_0_30px_hsl(350,70%,70%,0.2)]">
                  <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${gift.color}`}>
                    <img 
                      src={gift.image} 
                      alt={gift.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Sparkles className="w-6 h-6 text-gold" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {gift.title}
                    </h3>
                    <p className="text-muted-foreground">{gift.description}</p>
                    <div className="flex items-center gap-2 mt-4 text-primary">
                      <span className="text-sm font-medium">Open gift</span>
                      <Heart className="w-4 h-4 animate-pulse-love" />
                    </div>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Promise Coupons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="font-script text-4xl font-normal text-primary mb-2">
              Special Promise Cards
            </h2>
            <p className="text-muted-foreground">
              Click to reveal my promises to you
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {specialPromises.map((promise, index) => (
              <motion.button
                key={index}
                onClick={() => revealPromise(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className={`glass-card rounded-xl p-6 h-32 flex items-center justify-center romantic-shadow transition-all duration-500 ${
                  revealedPromises.includes(index) 
                    ? "bg-secondary" 
                    : "bg-gradient-to-br from-primary/20 to-rose-medium/30"
                } border-2 border-transparent hover:border-primary/20`}>
                  {revealedPromises.includes(index) ? (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center"
                    >
                      <Star className="w-5 h-5 text-gold mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">{promise}</p>
                    </motion.div>
                  ) : (
                    <div className="text-center">
                      <Gift className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Click to reveal</p>
                    </div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto romantic-shadow border-2 border-primary/10">
            <Heart className="w-12 h-12 text-primary fill-primary mx-auto mb-4 animate-heart-beat" />
            <p className="font-display text-2xl italic text-foreground mb-2">
              "The greatest gift I ever got was you."
            </p>
            <p className="text-muted-foreground">Happy Valentine's Day, my love!</p>
          </div>
        </motion.div>
      </div>

      {/* Gift Modal */}
      <AnimatePresence>
        {selectedGift && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-md"
            onClick={() => setSelectedGift(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.9, opacity: 0, rotateY: 90 }}
              transition={{ type: "spring", damping: 20 }}
              className="glass-card rounded-2xl overflow-hidden max-w-lg w-full romantic-shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                <img 
                  src={selectedGift.image}
                  alt={selectedGift.title}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/50 hover:bg-background/70"
                  onClick={() => setSelectedGift(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {selectedGift.title}
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  {selectedGift.message}
                </p>
                <div className="flex justify-center mt-6">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-8 h-8 text-primary fill-primary" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gifts;
