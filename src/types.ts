export interface ButtonType {
  type: "contained" | "outlined";
  label: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => Promise<void>;
  isSubmit?: boolean;
  className?: string; // Optional className prop
}

export interface HamburgerButtonProps {
  setIsOpen: (par: boolean) => void;
  isOpen: boolean;
}

export interface SkillCardType {
  id: number;
  name: string;
  description: string;
  icon: string;
}
export interface AboutMeType {
  id: number;
  intro: string;
  experience: string;
  image_url: string;
}

export interface SocialType {
  id: number;
  name: string;
  link: string;
  icon: string;
}

export interface ProjectType {
  id: number;
  name: string;
  description: string;
  image_url: string;
  live_url: string;
}

export interface ContactFormType {
  first_name: string;
  last_name: string | null;
  email: string;
  phone_number: string;
  message: string;
}
