// Image optimization utility for better loading performance
export const getOptimizedImageUrl = (imagePath: string, width?: number) => {
  // For Vercel deployment, you can use Vercel's image optimization
  // or implement lazy loading with smaller initial sizes
  return imagePath;
};

// Lazy loading configuration
export const lazyLoadConfig = {
  threshold: 0.1,
  rootMargin: '50px',
};

// Image preload utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};