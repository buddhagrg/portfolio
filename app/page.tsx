import { Articles } from "@/components/articles/articles";
import { Contact } from "@/components/contact/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects/projects";
import { SiteLayout } from "@/components/site-layout";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Projects />
      <Articles />
      <Contact />
    </SiteLayout>
  );
}
