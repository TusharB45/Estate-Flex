'use client';
// ... (imports)
import { motion } from "framer-motion";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <motion.div
      className={`text-center ${center ? 'mx-auto' : ''}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 className="text-4xl font-bold text-primary-500 mb-2 cursor-default" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p className="text-lg font-light text-neutral-600 mb-4 cursor-default" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Heading;
