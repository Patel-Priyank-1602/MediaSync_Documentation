import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { Footer } from "@/components/layout/Footer";
import { AlertTriangle } from "lucide-react";

const tocItems = [
  { id: "not-syncing", title: "Clients Not Syncing", level: 2 },
  { id: "not-loading", title: "Video Not Loading", level: 2 },
  { id: "common-solutions", title: "Common Solutions", level: 2 },
];

const TroubleshootingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <div className="flex-1 flex">
          <main className="flex-1 px-4 py-8 md:px-12 max-w-4xl">
            <Breadcrumb
              items={[
                { label: "Documentation", href: "/docs" },
                { label: "Troubleshooting" },
              ]}
            />

            <h1 className="text-3xl font-bold text-foreground mb-6 md:text-5xl">
              Troubleshooting
            </h1>

            <p className="text-muted-foreground text-lg mb-8">
              Having issues? Here are solutions to common problems.
            </p>

              {/* Clients Not Syncing */}
              <section className="mb-10" id="not-syncing">
                <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 overflow-hidden">
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-yellow-500/30 bg-yellow-500/5">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                    <h2 className="text-xl font-semibold text-foreground">Clients Not Syncing?</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">Try the following steps:</p>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500/20 text-yellow-500 text-sm font-medium shrink-0">1</span>
                        <span>Enter a time (in seconds) into the <strong className="text-foreground">Seek</strong> box.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500/20 text-yellow-500 text-sm font-medium shrink-0">2</span>
                        <span>Press <strong className="text-foreground">Seek</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-yellow-500/20 text-yellow-500 text-sm font-medium shrink-0">3</span>
                        <span>Repeat the Seek command <strong className="text-foreground">1-2 times</strong> if needed (helps reduce buffering lag).</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* Video Not Loading */}
              <section className="mb-10" id="not-loading">
                <div className="rounded-lg border border-destructive/30 bg-destructive/10 overflow-hidden">
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-destructive/30 bg-destructive/5">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <h2 className="text-xl font-semibold text-foreground">Video Not Loading?</h2>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">Check the following:</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-destructive">•</span>
                        <span>Ensure the <strong className="text-foreground">server IP address</strong> is correct.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive">•</span>
                        <span>Make sure all devices are connected to the <strong className="text-foreground">same WiFi/hotspot</strong>.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-destructive">•</span>
                        <span>Verify the file format is <strong className="text-foreground">supported by the browser</strong> (e.g., MP4/WebM for video, MP3/WAV for audio).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Common Solutions */}
              <section className="mb-10" id="common-solutions">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Common Solutions</h2>
                <div className="space-y-4">
                  <div className="rounded-lg bg-card border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-2">Server Won't Start</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Make sure Node.js is installed: run <code className="bg-muted px-1.5 py-0.5 rounded">node --version</code></li>
                      <li>• Ensure all dependencies are installed: run <code className="bg-muted px-1.5 py-0.5 rounded">npm install</code></li>
                      <li>• Check that port 8000 is not in use by another application</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg bg-card border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-2">QR Codes Not Working</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Verify your <code className="bg-muted px-1.5 py-0.5 rounded">config.json</code> has correct WiFi credentials</li>
                      <li>• Make sure the IP address in config matches your actual network IP</li>
                      <li>• Try accessing the URL directly instead of scanning QR code</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-card border border-border p-6">
                    <h3 className="font-semibold text-foreground mb-2">Audio/Video Lagging</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Ensure all devices have stable WiFi connection</li>
                      <li>• Use the Seek function to re-sync clients</li>
                      <li>• Try using lower resolution videos for better performance</li>
                      <li>• Move devices closer to the WiFi router/hotspot</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Still Need Help */}
              <section className="mb-10">
                <div className="rounded-lg bg-primary/10 border border-primary/20 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Still Need Help?</h3>
                  <p className="text-muted-foreground">
                    If you're still experiencing issues, please visit our{" "}
                    <a href="/contact" className="text-primary hover:underline">
                      Contact page
                    </a>{" "}
                    to get in touch.
                  </p>
                </div>
              </section>

              <DocNavigation
                previous={{ title: "How to Use", href: "/docs/usage" }}
                next={{ title: "FAQ", href: "/docs/faq" }}
              />
            </main>
            <TableOfContents items={tocItems} />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default TroubleshootingPage;