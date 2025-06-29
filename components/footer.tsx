export const Footer = () => {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <footer className="pt-0 md:pt-0.5 pb-5 md:pb-10 text-muted-foreground text-sm">
      <div className="max-w-3xl mx-auto text-center">
        &copy; {currentYear} Buddha Gurung. All rights reserved.
      </div>
    </footer>
  );
};
