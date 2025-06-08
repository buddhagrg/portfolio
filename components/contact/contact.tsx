import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";

export function Contact() {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Get In Touch
        </h1>
        <p className="mb-10">
          I&apos;m currently open to new opportunities and collaborations. Whether
          you have a question, a project idea, or just want to say hello, feel
          free to reach out!
        </p>

        <div className="grid gap-15 grid-cols-1 md:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
