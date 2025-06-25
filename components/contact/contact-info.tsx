import { Github, Linkedin, Mail } from "lucide-react";

import { SocialContactItem } from "./social-contact-item";
import type { SocialItem } from "@/types";
import { CurrentStatus } from "./current-status";

export const socialLinks: SocialItem[] = [
  {
    id: "email",
    name: "Email",
    icon: Mail,
    link: "mailto:gurungbuddha6@outlook.com",
    label: "gurungbuddha6@outlook.com",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://linkedin.com/in/buddhagrg",
    label: "linkedin.com/in/buddhagrg",
  },

  {
    id: "github",
    name: "GitHub",
    icon: Github,
    link: "https://github.com/buddhagrg",
    label: "github.com/buddhagrg",
  },
];

export function ContactInfo() {
  return (
    <section>
      <h4 className="text-xl font-medium mb-5">Contact Info</h4>

      {socialLinks.map((link) => (
        <SocialContactItem key={link.id} item={link} />
      ))}

      <div className="mt-5" />
      <CurrentStatus />
    </section>
  );
}
