// components/DeveloperBox.tsx
'use client'; 

import Image from 'next/image';
import Button from './Button'; // Replace with the actual path

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaFileAlt } from 'react-icons/fa';

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
  <div className="flex-1 flex p-6 bg-gray-200 rounded-lg relative">
    {/* Developer Image */}
    <div className="w-24 h-24 rounded-full overflow-hidden absolute top-4 left-4">
      <Image src={imageUrl} alt={name} layout="responsive" width={96} height={96} />
    </div>

    {/* Developer Details */}
    <div className="ml-32">
    {/* Name (Pronouns) */}
      <p className="text-black text-2xl font-bold mb-4">{name} ({pronouns})</p>

      {/* About Me */}
      <h2 className="text-l font-semibold mb-4">About Me</h2>

      {/* Bio */}
      <p className="text-black mb-4">{bio}</p>



      {/* Role */}
      <p className="text-black mb-4">{role}</p>

      {/* Contact Buttons */}
      <div className="flex mt-4 space-x-4">
        <Button label="Email Me" onClick={() => (window.location.href = `mailto:${email}`)} small outline />
        <Button label="Resume" onClick={() => window.open(resumePath, '_blank')} small outline />
        <Button label="Nothing" small outline />
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

export default DeveloperBox
