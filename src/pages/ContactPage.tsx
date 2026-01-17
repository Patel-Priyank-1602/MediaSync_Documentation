import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Twitter,
  Laptop2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const { toast } = useToast();
  
  // Formspree Hook
  const [state, handleSubmit] = useForm("xreeerwj");

  // Local state for controlled inputs (to allow clearing the form)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Effect to handle success state from Formspree
  useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I’ll get back to you soon.",
      });
      
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded, toast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 container px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Have a question, project idea, or just want to say hi?
              Fill out the form or connect with me directly.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-12 lg:grid-cols-12">
            {/* FORM */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="text-lg font-semibold mb-6">Send a message</h2>

                {/* Formspree Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input
                        id="name"
                        name="name" // Required by Formspree
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 focus:ring-1 focus:ring-primary/40 outline-none"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email" // Required by Formspree
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="you@example.com"
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 focus:ring-1 focus:ring-primary/40 outline-none"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <input
                      id="subject"
                      name="subject" // Formspree will capture this as an extra field
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What’s this about?"
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-2.5 focus:ring-1 focus:ring-primary/40 outline-none"
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message" // Required by Formspree
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your message..."
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 resize-none focus:ring-1 focus:ring-primary/40 outline-none"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="signup"
                    className="w-full"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send message"}
                  </Button>
                </form>
              </div>
            </div>

            {/* INFO */}
            <div className="lg:col-span-5 space-y-6">
              {/* Mobile */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold mb-4">Contact details</h3>

                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+91 9512771016</span>
                </div>

                <div className="flex items-center gap-3 text-sm mt-3">
                  <Mail className="h-4 w-4" />
                  <span>patelpriyank2526@gmail.com</span>
                </div>

                <div className="flex items-center gap-3 text-sm mt-3">
                  <MapPin className="h-4 w-4" />
                  <span>Gandhinagar, Gujarat</span>
                </div>
              </div>

              {/* SOCIALS */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold mb-4">Social links</h3>

                <div className="space-y-3 text-sm">
                  <a
                    href="https://www.linkedin.com/in/patel-priyank-945131288/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                
                  <a
                    href="https://github.com/Patel-Priyank-1602"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  
                  <a
                    href="https://x.com/Priyank_P16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline hover:text-primary transition-colors"
                  >
                    <Twitter className="h-4 w-4" /> X
                  </a>
                  
                  <a
                    href="https://www.instagram.com/patelpriyank.d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline hover:text-primary transition-colors"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                  
                  <a
                    href="https://priyank.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:underline hover:text-primary transition-colors"
                  >
                    <Laptop2 className="h-4 w-4" /> Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;