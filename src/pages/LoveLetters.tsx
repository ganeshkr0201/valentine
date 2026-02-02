import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeartDivider from "@/components/HeartDivider";
import loveLetterImage from "@/assets/love-letter.jpg";

const letters = [
  {
    id: 1,
    title: "My First Love Letter",
    date: "February 14, 2025",
    preview: "From the moment I saw you, my heart knew...",
    content: `My Dearest Love,

From the moment I saw you, my heart knew that you were the one I had been waiting for all my life. Your smile lights up my darkest days, and your laughter is the sweetest music to my ears.

Every day with you feels like a beautiful dream that I never want to wake up from. You've shown me what true love means - patient, kind, and unconditional.

Thank you for being you. Thank you for loving me. Thank you for making every moment magical.

Forever and always yours,
With all my love ❤️`
  },
  {
    id: 2,
    title: "Why I Love You",
    date: "February 14, 2025",
    preview: "There are so many reasons why I love you...",
    content: `My Beautiful Valentine,

There are so many reasons why I love you that I could fill a thousand pages and still not capture them all.

I love the way you laugh, especially when you're trying not to.
I love how you care for everyone around you.
I love your strength and your gentleness.
I love the way you make me want to be better.
I love waking up knowing you're in my life.
I love our silly inside jokes.
I love how you understand me without words.

But most of all, I love that out of all the people in this world, you chose me to share your heart with.

I am the luckiest person alive.

Yours eternally ❤️`
  },
  {
    id: 3,
    title: "Our Journey Together",
    date: "February 14, 2025",
    preview: "Looking forward to our journey together...",
    content: `To Someone Who’s Becoming Very Special,

It’s kind of amazing how someone can come into your life so recently and already mean so much.

We may not have a long history yet, but every conversation, every laugh, and every little moment we’ve shared has started to matter to me more than I expected. Getting to know you has been easy, natural… and honestly, something I look forward to every day.

I don’t know exactly where this path will lead, but I do know I’m excited to walk it step by step and see what we can build together. There’s something about you that just feels right, and I’m really glad our paths crossed.

Here’s to new memories, slow beginnings, and a future we’re just starting to talk about.

With endless love,
Your Forever Valentine ❤️`
  },
  {
    id: 4,
    title: "My Feelings",
    date: "February 14, 2025",
    preview: "my feelings for you are growing stronger every day",
    content: `To Someone Who Means More to Me Than She Realizes,

I may not know everything about you yet, but I know this — the feelings I have for you are real.

I feel happy when I talk to you.
I feel calm when you share your thoughts with me.
I feel excited about the idea of getting to know you more every day.

I don’t want to make big promises I haven’t earned the right to make yet. But I can say this honestly:

I want to be someone who makes you feel valued.
I want to listen to you, understand you, and be there for you.
I want to build something meaningful, slowly and genuinely.
I want to grow closer, not just through words, but through time and trust.

Let’s see where this journey takes us, one step at a time.

With real feelings,
Someone who’s really glad he met you ❤️`
  }
];

const LoveLetters = () => {
  const [selectedLetter, setSelectedLetter] = useState<typeof letters[0] | null>(null);

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
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Mail className="w-16 h-16 text-primary" />
            </motion.div>
          </div>
          <h1 className="font-script text-5xl md:text-7xl font-normal text-primary mb-4">
            Love Letters
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each letter holds a piece of my heart, written just for you
          </p>
        </motion.div>

        <HeartDivider />

        {/* Letters Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedLetter(letter)}
                className="w-full text-left group"
              >
                <div className="glass-card rounded-2xl p-6 romantic-shadow hover:scale-[1.02] transition-all duration-300 border-2 border-transparent hover:border-primary/20 hover:shadow-[0_0_30px_hsl(350,70%,70%,0.2)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Heart className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {letter.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">{letter.date}</p>
                      <p className="text-muted-foreground italic">{letter.preview}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden romantic-shadow border-2 border-primary/10">
            <img 
              src={loveLetterImage} 
              alt="Love Letter"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <p className="font-display text-xl italic text-foreground">
                "The best thing to hold onto in life is each other."
              </p>
              <p className="text-muted-foreground mt-2">— Audrey Hepburn</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-md"
            onClick={() => setSelectedLetter(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto romantic-shadow border-2 border-primary/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {selectedLetter.title}
                  </h2>
                  <p className="text-muted-foreground">{selectedLetter.date}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedLetter(null)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="prose prose-lg">
                <p className="whitespace-pre-line text-foreground/90 leading-relaxed font-body">
                  {selectedLetter.content}
                </p>
              </div>

              <div className="flex justify-center mt-8">
                <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-love" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveLetters;
