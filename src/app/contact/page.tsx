import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/feature/contact-form";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to work together? I&apos;d love to hear
              from you.
            </p>
          </div>

          <ContactForm />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 justify-evenly gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground">s.jun.maker@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Location
              </h3>
              <p className="text-muted-foreground">Seoul</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
