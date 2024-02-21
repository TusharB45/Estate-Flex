// UserMenu.tsx
"use client"
import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSetting } from "react-icons/ai";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import { SafeUser } from "@/app/types";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleSettingsClick = () => {
    console.log("Settings clicked!");
  };

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [loginModal, rentModal, currentUser]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
        onClick={onRent}
          className="
            hidden
            md:block
            text-sm 
            font-semibold 
            py-3 
            px-4 
            rounded-full 
            hover:bg-neutral-100 
            transition 
            cursor-pointer
            rounded-ful
            border-[1px]
           border-blue-600
            text-blue-600
            hover:shadow-md
          "
        >
        <motion.div
            whileHover={{ scale: 1.05 }} // Scale and rotate on hover
            whileTap={{ scale: 0.9 }} // Bounce effect on click
             // Continuous spin animation
            
          >
          Your Home
          </motion.div>
        </div>
        <div
          onClick={toggleOpen}
          className="
            p-4
            md:py-1
            md:px-2
            border-[1px] 
            border-neutral-200 
            flex 
            flex-row 
            items-center 
            gap-3 
            rounded-full 
            cursor-pointer 
            hover:shadow-md 
            transition
            bg-white
          "
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 10 }} // Scale and rotate on hover
            whileTap={{ scale: 0.9 }} // Bounce effect on click
            animate={{ rotate: 360 }} // Continuous spin animation
            className="text-2xl md:text-3xl"
          >

            <AiOutlineSetting onClick={handleSettingsClick} />
          </motion.div>
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden
            right-0 
            top-12 
            text-sm
          "
        >
          <div className="flex flex-col cursor-pointer shadow-neutral-950">
            {currentUser ? (
              <>
              
                <MenuItem
                
                  label="Trips"
                  onClick={() => router.push('/trips')}
                />
                
                <MenuItem
                  label="Favorites"
                  onClick={() => router.push('/favorites')}
                
                />
                <MenuItem
                  label="Reservations"
                  onClick={() =>  router.push('/reservations')}
                />
                <MenuItem
                  label="Properties"
                  onClick={() => router.push('/properties')}
                />

                <MenuItem
                  label="your home"
                  onClick={rentModal.onOpen}
                />

                <hr />
                <MenuItem
                  label="Logout"
                  onClick={() => signOut()}
                />

                <MenuItem
                  label="About Developers"
                  onClick={() => router.push('/Developers')}
                />
                
              </>
            ) : (
              <>
                <MenuItem
                  label="Login"
                  onClick={loginModal.onOpen}
                />
                <MenuItem
                  label="Sign up"
                  onClick={registerModal.onOpen}
                />
                <hr />
                <
                MenuItem
                  label="About Developers"
                  onClick={() => router.push('/Developers')}
                />
              </>

              
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
