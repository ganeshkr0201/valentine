import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const HeartDivider = () => {
  return (
    <div className="flex items-center justify-center gap-6 my-12">
      <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent via-primary/40 to-primary/60" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex items-center gap-1"
      >
        <Heart className="w-5 h-5 text-primary fill-primary/60" />
        <Heart className="w-7 h-7 text-primary fill-primary/80" />
        <Heart className="w-5 h-5 text-primary fill-primary/60" />
      </motion.div>
      <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent via-primary/40 to-primary/60" />
    </div>
  );
};

export default HeartDivider;
