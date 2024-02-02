// logo.tsx
'use client';
// logo.tsx
'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Logo = () => {
  const router = useRouter();

  return (
    <motion.button
      className="logo-container"
      onClick={() => router.push('/')}
      aria-label="Go to homepage"
    >
      <div className="logo-content">
        <motion.div
          className="logo-img-container"
          onClick={() => router.push('/')}
          animate={{ rotate: 360 }}
          transition={{
            duration: 0.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
        >
          <Image
            src="/images/Estate.png"
            height="100"
            width="40"
            alt="Logo"
            className="logo-img"
          />
        </motion.div>

        <span className="logo-text">Estate Flex</span>
      </div>
      <style jsx>{`
        .logo-container {
          padding: 10px;
          background: linear-gradient(to right, #4a90e2, #5cb85c);
          cursor: pointer;
          border: none;
          display: flex;
          align-items: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }

        .logo-content {
          display: flex;
          align-items: center;
        }

        .logo-img-container {
          border-radius: 50%;
        }

        .logo-text {
          font-size: 1.4rem;
          font-weight: bold;
          margin-left: 10px;
          color: black; /* Default text color */
        }
      `}</style>
      {/* Tailwind CSS Styles */}
      <style jsx global>{`
        .logo-img-container {
          @apply border-rounded-full;
        }
      `}</style>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          
          .logo-container {
            background-color: #63b3ed; /* Change background color for mobile */
          }
          .logo-text {
            font-size: 0.8rem;
            color: black; /* Default text color */
          }
          .logo-img{

          }

        }
      `}</style>
    </motion.button>
  );
};

export default Logo;
