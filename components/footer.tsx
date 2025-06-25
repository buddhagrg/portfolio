import { socialLinks } from "./contact/contact-info";

export const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer className="pt-0 md:pt-0.5 pb-5 md:pb-10 text-muted-foreground text-sm bg-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center mt-10">
          <div className="order-2 md:order-1">
            &copy; {currentYear} Buddha Gurung. All rights reserved.
          </div>
          <div className="order-1 md:order-2 flex gap-5 md:gap-10 hover:cursor-pointer md:ml-auto">
            {socialLinks.map(({ id, icon: Icon, link }) => (
              <a href={link} key={id}>
                <Icon className="size-6 md:size-5 lg:size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
