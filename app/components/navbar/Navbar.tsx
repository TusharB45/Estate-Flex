// Navbar.tsx
"use client";

import Container from "../Container";
import Categories from "./Categories";

import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { motion } from "framer-motion";

import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <motion.div
      className="fixed w-full z-10 shadow-sm transparent bg-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Container>
        <div className="py-4 border-b-[1px]">
          <div className="flex flex-row items-center justify-between">
            <motion.div
              className="flex items-center gap-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Logo />
            </motion.div>
            <Search />
            
            
              <UserMenu currentUser={currentUser} />
              
            
          </div>
        </div>
      </Container>
      <Categories />
    </motion.div>
    

  );
};

export default Navbar;
