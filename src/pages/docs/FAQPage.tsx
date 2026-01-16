import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is MediaSync?",
    answer:
      "MediaSync is a self-hosted Node.js server that synchronizes media playback (YouTube videos, local videos, and audio files) across multiple devices on a local network. One person controls the playback while all connected clients stay in sync.",
  },
  {
    question: "What do I need to run MediaSync?",
    answer:
      "You need Node.js installed on your computer, a local WiFi network or mobile hotspot that all devices can connect to, and the MediaSync project files. No cloud services or external accounts are required.",
  },
  {
    question: "How many devices can connect at once?",
    answer:
      "There's no hard limit on the number of connected devices. The practical limit depends on your network bandwidth and the server device's capabilities. Most local networks can handle 10-20+ devices without issues.",
  },
  {
    question: "Does it work with any YouTube video?",
    answer:
      "MediaSync works with most public YouTube videos. Some videos may be restricted by the uploader or YouTube and won't play. Age-restricted or region-locked videos may also not work.",
  },
  {
    question: "What video formats are supported for local files?",
    answer:
      "For video files, MP4 and WebM formats are supported. For audio files, MP3 and WAV formats work best. These are the formats that most browsers support natively.",
  },
  {
    question: "Why are my devices not syncing properly?",
    answer:
      "Sync issues are usually caused by network latency or buffering. Try using the Seek function to re-sync all devices. Make sure all devices are on the same WiFi network and have a stable connection. Moving closer to the router can also help.",
  },
  {
    question: "Can I use this over the internet?",
    answer:
      "MediaSync is designed for local network use. Using it over the internet would require port forwarding, a public IP, and potentially expose security risks. For internet use, consider setting up a VPN to your local network.",
  },
  {
    question: "How do I find my IP address?",
    answer:
      "On Windows, open Command Prompt and run 'ipconfig'. Look for the IPv4 Address under your active network adapter. On Mac/Linux, open Terminal and run 'ifconfig' or 'ip addr'. The address usually starts with 192.168.x.x.",
  },
  {
    question: "What port does MediaSync use?",
    answer:
      "By default, MediaSync runs on port 8000. You can access the controller at http://your-ip:8000/controller.html and clients at http://your-ip:8000/client.html.",
  },
  {
    question: "Is MediaSync free and open source?",
    answer:
      "Yes, MediaSync is completely free and open source. You can use it, modify it, and contribute to its development. Check out our GitHub repository for the source code.",
  },
];

const tocItems = [
  { id: "general", title: "General Questions", level: 2 },
  { id: "technical", title: "Technical Questions", level: 2 },
  { id: "troubleshooting", title: "Troubleshooting", level: 2 },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="flex">
            <div className="container max-w-4xl px-4 py-8 md:px-12">
              <Breadcrumb
                items={[
                  { label: "Documentation", href: "/docs" },
                  { label: "FAQ" },
                ]}
              />

              <h1 className="text-3xl font-bold text-foreground mb-6 md:text-5xl">
                Frequently Asked Questions
              </h1>

              <p className="text-muted-foreground text-lg mb-8">
                Find answers to commonly asked questions about MediaSync.
              </p>

              {/* General Questions */}
              <section className="mb-10" id="general">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  General Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.slice(0, 4).map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`general-${index}`}
                      className="rounded-lg border border-border bg-card px-4"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Technical Questions */}
              <section className="mb-10" id="technical">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Technical Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.slice(4, 7).map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`technical-${index}`}
                      className="rounded-lg border border-border bg-card px-4"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Troubleshooting */}
              <section className="mb-10" id="troubleshooting">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Troubleshooting
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.slice(7).map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`troubleshooting-${index}`}
                      className="rounded-lg border border-border bg-card px-4"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Still Need Help */}
              <section className="mb-10">
                <div className="rounded-lg bg-primary/10 border border-primary/20 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-muted-foreground">
                    If you can't find the answer you're looking for, please visit our{" "}
                    <a href="/contact" className="text-primary hover:underline">
                      Contact page
                    </a>{" "}
                    to get in touch, or check out the{" "}
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      GitHub repository
                    </a>{" "}
                    for more information.
                  </p>
                </div>
              </section>
            </div>
            <TableOfContents items={tocItems} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQPage;
