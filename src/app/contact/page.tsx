import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Ivan Getov",
  description: "Get in touch with Ivan Getov.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactForm />
      <Footer />
    </main>
  );
}
