import { ContactForm } from "./contact-form";

export function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Get In Touch</h1>
        <p className="mb-10">
          I&apos;m currently open to new opportunities and collaborations.
          Whether you have a question, a project idea, or just want to say
          hello, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
