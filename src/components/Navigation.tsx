import { Link, useLocation } from "react-router-dom";
import { Gift, Mail, Image, Home } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/home", label: "Home", icon: Home },
  { path: "/letters", label: "Love Letters", icon: Mail },
  { path: "/gallery", label: "Our Moments", icon: Image },
  { path: "/gifts", label: "Gifts", icon: Gift },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-card border-b-2 border-primary/10 romantic-shadow"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/home" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="animate-pulse-love"
            >
              <span className="text-2xl">❤️</span>
            </motion.div>
            <span className="font-display text-xl font-semibold text-foreground">
              Forever Yours
            </span>
          </Link>

          <div className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative px-3 py-2 rounded-lg transition-all duration-300",
                    "flex items-center gap-2 text-sm font-medium",
                    "hover:bg-secondary",
                    isActive 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-secondary rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
