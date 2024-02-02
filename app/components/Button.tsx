// Button.tsx
'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  onClick,
  disabled = false,
  outline = false,
  small = false,
  icon: Icon,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: 1,
      color: outline ? "#000" : "#fff",
    });
  }, [controls, outline]);

  const buttonVariants = {
    rest: {
      scale: 1,
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.05,
      color: outline ? "#3B82F6" : "#111827",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    tap: {
      scale: 0.95,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    },
  };

  const renderButton = () => {
    if (onClick) {
      return (
        <motion.button
          disabled={disabled}
          onClick={onClick}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          animate={controls}
          transition={{ duration: 0.2 }}
          className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-md
            transition-all
            w-full
            ${outline ? 'bg-white border-black text-black' : 'bg-blue-600 border-black text-white'}
            ${small ? 'text-s py-3 font-light' : 'text-s py-2 font-semibold'}
            ${small ? 'border-[1px]' : 'border-2'}
          `}
        >
          {Icon && (
            <Icon
              size={20}
              className={`
                absolute
                ${outline ? 'left-3 top-2' : 'left-3 top-2 text-white'}
              `}
            />
          )}
          {label}
        </motion.button>
      );
    }

    if (href) {
      return (
        <Link href={href}>
          <a>
            <motion.button
              disabled={disabled}
              onClick={onClick}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={controls}
              transition={{ duration: 0.2 }}
              className={`
                relative
                disabled:opacity-70
                disabled:cursor-not-allowed
                rounded-md
                transition-all
                w-full
                ${outline ? 'bg-white border-black text-black' : 'bg-blue-600 border-black text-white'}
                ${small ? 'text-s py-3 font-light' : 'text-s py-2 font-semibold'}
                ${small ? 'border-[1px]' : 'border-2'}
              `}
            >
              {Icon && (
                <Icon
                  size={20}
                  className={`
                    absolute
                    ${outline ? 'left-3 top-2' : 'left-3 top-2 text-white'}
                  `}
                />
              )}
              {label}
            </motion.button>
          </a>
        </Link>
      );
    }

    return null;
  };

  return renderButton();
};

export default Button;
