import { socialLinks } from "./contact/contact-info";

export const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer className="pt-0 md:pt-0.5 pb-5 md:pb-10 text-muted-foreground text-sm bg-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center mt-10">
          <div>&copy; {currentYear} Buddha Gurung. All rights reserved.</div>
          <div className="flex gap-5 md:gap-10 hover:cursor-pointer md:ml-auto">
            {socialLinks.map(({ id, icon: Icon, link }) => (
              <a href={link} key={id}>
                <Icon className="size-6 md:size-4" />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-0 md:mt-5">
          Designed and built with React, Typescript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};
