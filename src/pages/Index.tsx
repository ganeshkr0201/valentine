import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roses.jpg";
import roseBouquet from "@/assets/rose-bouquet.jpg";
import teddyImage from "@/assets/teddy-love.jpg";
import coupleImage from "@/assets/couple-sunset.jpg";
import HeartDivider from "@/components/HeartDivider";

const realFlowerBouquets = [
  heroImage,
  roseBouquet,
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80",
  "https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&q=80",
  "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&q=80",
];

const Index = () => {
  return (
    <div className="min-h-screen romantic-gradient">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Romantic roses" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/20 to-background/98" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <Heart className="w-16 h-16 text-primary fill-primary" />
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground drop-shadow-lg">
              Happy Valentine's
              <span className="block font-script text-6xl md:text-8xl lg:text-9xl font-normal text-love-gradient mt-2">My Love</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body"
            >
              Every moment with you is a treasure. This is my heart, my love, and my soul 
              wrapped in these pages just for you—to make your day extra special! 🌹❤️
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center pt-4"
            >
              <Button asChild size="lg" className="romantic-shadow romantic-glow hover:scale-105 transition-transform duration-300">
                <Link to="/letters">
                  Read My Letters <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary/40 hover:border-primary/60 hover:bg-primary/5">
                <Link to="/gifts">
                  See Your Gifts
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Flower Bouquets Greeting Section */}
      <section className="py-16 romantic-gradient relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-script text-4xl md:text-5xl font-normal text-primary mb-2">
              Flower Bouquets For You Love 🌹
            </h2>
            <p className="text-muted-foreground font-body">
              Beautiful bouquets to make your day extra special
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {realFlowerBouquets.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08 }}
                className="glass-card rounded-2xl p-3 romantic-shadow overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-colors"
              >
                <img src={src} alt="Flower bouquet" className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cute Couple Gifs - Hugging, Cuddling, Holding Hands */}
      <section className="py-16 blush-gradient relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-script text-4xl md:text-5xl font-normal text-primary mb-2">
              Making Your Day Special 💕
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Hugging, cuddling, holding hands—cute moments together, just like us!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {[
              { src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGNydjFoODJyMXJiN2p1MnMyeG02bDdlcnNieHJyNTV6dmNhdTVuNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ABjJcFelbuanC/giphy.gif", alt: "Couple hugging" },
              { src: "https://media.giphy.com/media/aJOOXoUDaEvDIMjOI0/giphy.gif", alt: "Couple cuddling" },
              { src: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjNwc2NhcjBoY2JxNjNsejR4aDlqZHF0MjY0cXRvN2VzOW9mNWRnbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PT0kQUBzWMOWI/giphy.gif", alt: "Big hug" },
              { src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazczMjEzMHUxYjNjOHdhZXhndDBkN2hpeW5kZTQwZWcyMW54NjJsdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KmxmoHUGPDjfQXqGgv/giphy.gif", alt: "Couple hug" },
              { src: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2FidHgwaHZ0aHl0czBncHBuYWgweXM5dnU2d3BtOHU2Nm9taXl5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RPjjqEpd5EnZK/giphy.gif", alt: "Holding hands" },
              { src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTExMjkwYTcxMTRmamE0Z3B0anNxcHI0bHJrbmx2eGgxY3E1MmYyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1JmGiBtqTuehfYxuy9/giphy.gif", alt: "Couple cuddling" },
            ].map((gif, i) => (
              <motion.div
                key={gif.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-3 romantic-shadow overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-colors"
              >
                <img src={gif.src} alt={gif.alt} className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 blush-gradient">
        <div className="container mx-auto px-4">
          <HeartDivider />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              What's Inside
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore all the special things I've prepared just for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Love Letters",
                description: "Heartfelt notes and messages written for you",
                link: "/letters",
                image: null,
                icon: "💌"
              },
              {
                title: "Our Moments",
                description: "A gallery of our beautiful memories together",
                link: "/gallery",
                image: coupleImage,
                icon: null
              },
              {
                title: "Special Gifts",
                description: "Surprises and tokens of my love for you",
                link: "/gifts",
                image: teddyImage,
                icon: null
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link to={item.link} className="block group">
                  <div className="glass-card rounded-2xl overflow-hidden romantic-shadow hover:scale-[1.03] hover:shadow-[0_0_40px_hsl(350,70%,70%,0.25)] transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                    <div className="h-48 overflow-hidden bg-secondary flex items-center justify-center">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <span className="text-6xl">{item.icon}</span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 romantic-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(350,70%,90%,0.3)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <HeartDivider />
            <div className="glass-card rounded-3xl p-10 md:p-14 romantic-shadow border-2 border-primary/10">
              <blockquote className="font-display text-3xl md:text-4xl italic text-foreground mb-6 leading-relaxed">
                "In all the world, there is no heart for me like yours. 
                In all the world, there is no love for you like mine."
              </blockquote>
              <p className="text-muted-foreground font-body">— Maya Angelou</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
