import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image, Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeartDivider from "@/components/HeartDivider";

import heroRoses from "@/assets/hero-roses.jpg";
import teddyLove from "@/assets/teddy-love.jpg";
import roseBouquet from "@/assets/rose-bouquet.jpg";
import coupleSunset from "@/assets/couple-sunset.jpg";
import giftBox from "@/assets/gift-box.jpg";
import loveLetter from "@/assets/love-letter.jpg";

const galleryItems = [
  {
    id: 1,
    image: coupleSunset,
    title: "Our Beautiful Sunset",
    description: "Every sunset with you is a masterpiece"
  },
  {
    id: 2,
    image: heroRoses,
    title: "Roses for My Rose",
    description: "A thousand roses couldn't match your beauty"
  },
  {
    id: 3,
    image: teddyLove,
    title: "Cuddle Buddy",
    description: "Just like this teddy, I'll always hold you close"
  },
  {
    id: 4,
    image: roseBouquet,
    title: "Forever Blooming",
    description: "Our love grows more beautiful each day"
  },
  {
    id: 5,
    image: giftBox,
    title: "Wrapped in Love",
    description: "Every day with you is a gift"
  },
  {
    id: 6,
    image: loveLetter,
    title: "Words from the Heart",
    description: "My love for you fills endless pages"
  }
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryItems.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === galleryItems.length - 1 ? 0 : selectedIndex + 1);
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
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Image className="w-16 h-16 text-primary" />
            </motion.div>
          </div>
          <h1 className="font-script text-5xl md:text-7xl font-normal text-primary mb-4">
            Our Moments
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A gallery of memories, dreams, and endless love
          </p>
        </motion.div>

        <HeartDivider />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="glass-card rounded-2xl overflow-hidden romantic-shadow hover:scale-[1.03] transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:shadow-[0_0_30px_hsl(350,70%,70%,0.2)]">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-display text-xl font-semibold text-primary-foreground">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Love Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto romantic-shadow border-2 border-primary/10">
            <Heart className="w-12 h-12 text-primary fill-primary mx-auto mb-4 animate-pulse-love" />
            <p className="font-display text-2xl italic text-foreground">
              "Every picture tells our story, but my favorite story is ours."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/85 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryItems[selectedIndex].image}
                alt={galleryItems[selectedIndex].title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
              <div className="text-center mt-6">
                <h3 className="font-display text-2xl font-semibold text-primary-foreground">
                  {galleryItems[selectedIndex].title}
                </h3>
                <p className="text-primary-foreground/80 mt-2">
                  {galleryItems[selectedIndex].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
