// Avatar.tsx
'use client';
import Image from "next/image";
import { motion } from "framer-motion";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <motion.div
      className="relative rounded-full overflow-hidden"
      whileHover={{ scale: 1.1 }}
    >
      <Image
        className="rounded-full"
        height="30"
        width="30"
        alt="Avatar"
        src={src || '/images/placeholder.jpg'}
      />
      
      <div className="absolute inset-0 rounded-full border-2 border-white"></div>
    </motion.div>
  );
};

export default Avatar;

