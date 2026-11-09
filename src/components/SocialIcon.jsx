import { Github, Linkedin, Twitter, Instagram, Facebook, Mail, Globe } from "lucide-react";

// Same icon-map approach as Profile-Generator's Footer
const icons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
  email: Mail,
};

const SocialIcon = ({ platform, className = "h-5 w-5" }) => {
  const Icon = icons[platform] || Globe;
  return <Icon className={className} />;
};

export default SocialIcon;
