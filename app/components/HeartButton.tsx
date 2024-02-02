// Import necessary libraries and components
'use client';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import useFavorite from '@/app/hooks/useFavorite';
import { SafeUser } from '@/app/types';

import ClientOnly from './ClientOnly';
interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}


const HeartButton: React.FC<HeartButtonProps> = ({ listingId, currentUser }) => {
  const { hasFavorited, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  const heartControl = useAnimation();

  useEffect(() => {
    heartControl.start({
      scale: [1, 1.2, 1], // Pulsating animation
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    });
  }, [heartControl]);

  return (
    <motion.div
      onClick={toggleFavorite}
      animate={heartControl}
      className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
    >
      <AiOutlineHeart
        size={28}
        className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
      />

      <AiFillHeart
        size={24}
        className={hasFavorited ? 'fill-blue-500' : 'fill-neutral-400'}
      />
    </motion.div>
  );
};

export default HeartButton;
