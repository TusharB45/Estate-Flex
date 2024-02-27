// components/DeveloperBox.tsx
'use client'; 

import Image from 'next/image';
import Button from './Button'; // Replace with the actual path
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { motion } from "framer-motion";

interface DeveloperBoxProps {
  name: string;
  imageUrl: string;
  bio:string;
  pronouns: string;
  role: string;
  email: string;
  resumePath: string;
  github: string;
  linkedin: string;
  instagram: string;
}
const SocialLink: React.FC<{ href: string; Icon: IconType }> = ({ href, Icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="mr-4" title={href}>
    <Icon size={35} />
  </a>
);


const DeveloperBox: React.FC<DeveloperBoxProps> = ({
  name,
  imageUrl,
  bio,
  pronouns,
  role,
  email,
  resumePath,
  github,
  linkedin,
  instagram,
}) => (
  <div className="flex p-6 bg-white rounded-lg shadow-md">
    {/* Developer Image */}
    <div className="relative w-24 h-24 rounded-full overflow-hidden mr-6 flex-shrink-0">
      <Image className="object-cover w-full h-full hover:scale-110 transition" src={imageUrl} alt={name} layout="fill" />
    </div>
    {/* Developer Details */}
    <div className="flex flex-col">
      {/* Name (Pronouns) */}
      <p className="text-black text-2xl font-bold mb-2">{name} ({pronouns})</p>
      {/* About Me */}
      <h2 className="text-l font-semibold mb-2">About Me</h2>
      {/* Bio */}
      <p className="text-gray-700 mb-4">{bio}</p>
      {/* Role */}
      <p className="text-gray-600 mb-4">{role}</p>
      {/* Contact Buttons */}
      <div className="flex mt-4 space-x-4">
        <Button label="Email Me" onClick={() => (window.location.href = `mailto:${email}`)} small />
        <Button label="Resume" onClick={() => window.open(resumePath, '_blank')} small />
        <Button label="Nothing" small />
      </div>
      {/* Social Media Links */}
      <div className="flex mt-4 space-x-2">
        <SocialLink href={github} Icon={FaGithub} />
        <SocialLink href={linkedin} Icon={FaLinkedin} />
        <SocialLink href={instagram} Icon={FaInstagram} />
      </div> 
    </div>

  </div>
);

export default DeveloperBox;

