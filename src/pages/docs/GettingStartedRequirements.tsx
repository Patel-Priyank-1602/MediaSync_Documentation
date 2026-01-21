import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { Monitor, Server, Wifi, Globe } from "lucide-react";
import { Footer } from "@/components/layout/Footer";

const tocItems = [
  { id: "server", title: "Server Requirements", level: 2 },
  { id: "client", title: "Client Requirements", level: 2 },
  { id: "network", title: "Network Requirements", level: 2 },
  { id: "browsers", title: "Browser Support", level: 2 },
];

const GettingStartedRequirements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-4xl px-4 py-8 md:px-12">
            <Breadcrumb
              items={[
                { label: "Documentation", href: "/docs" },
                { label: "Getting Started" },
                { label: "System Requirements" },
              ]}
            />

            <div className="flex gap-8">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
                  System Requirements
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Hardware and software requirements for running the Media Sync Server.
                </p>

                <section id="server" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      Server Requirements
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    The host machine running the Media Sync Server needs:
                  </p>
                  <div className="bg-muted rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-4 font-medium text-foreground">Component</th>
                          <th className="text-left p-4 font-medium text-foreground">Requirement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Operating System</td>
                          <td className="p-4 text-foreground">Windows, macOS, or Linux</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Node.js</td>
                          <td className="p-4 text-foreground">v18.0.0 or later</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">RAM</td>
                          <td className="p-4 text-foreground">512MB minimum (1GB+ recommended)</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Storage</td>
                          <td className="p-4 text-foreground">100MB + space for local media files</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-muted-foreground">Network</td>
                          <td className="p-4 text-foreground">Ethernet or Hotspot</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="client" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Monitor className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      Client Requirements
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Client devices that connect to view synchronized media need:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>Modern web browser with JavaScript enabled</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>WiFi capability to connect to the same network</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>Audio/video playback capability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>Camera app for QR code scanning (optional)</span>
                    </li>
                  </ul>
                  <div className="bg-muted/50 border border-border rounded-lg p-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Supported Devices:</strong> Laptops, tablets, smartphones,
                      smart TVs with browsers, and any device with a modern web browser.
                    </p>
                  </div>
                </section>

                <section id="network" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Wifi className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      Network Requirements
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    All devices must be on the <strong className="text-foreground">same local network</strong>:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>Same WiFi network or mobile hotspot</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>No VPN connections (can interfere with local discovery)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>Firewall must allow connections on the server port (default: 3000)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span>For YouTube playback: Internet access required on all devices</span>
                    </li>
                  </ul>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-foreground">
                      <strong>⚠️ Important:</strong> This server is designed for local networks only.
                      Internet-based synchronization is not supported.
                    </p>
                  </div>
                </section>

                <section id="browsers" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      Browser Support
                    </h2>
                  </div>
                  <div className="bg-muted rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-4 font-medium text-foreground">Browser</th>
                          <th className="text-left p-4 font-medium text-foreground">Minimum Version</th>
                          <th className="text-left p-4 font-medium text-foreground">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-4 text-foreground">Chrome / Chromium</td>
                          <td className="p-4 text-muted-foreground">80+</td>
                          <td className="p-4"><span className="text-green-500">✓ Recommended</span></td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-foreground">Firefox</td>
                          <td className="p-4 text-muted-foreground">75+</td>
                          <td className="p-4"><span className="text-green-500">✓ Supported</span></td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-foreground">Safari</td>
                          <td className="p-4 text-muted-foreground">13+</td>
                          <td className="p-4"><span className="text-green-500">✓ Supported</span></td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-foreground">Edge</td>
                          <td className="p-4 text-muted-foreground">80+</td>
                          <td className="p-4"><span className="text-green-500">✓ Supported</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> All modern Chromium-based browsers
                      (such as Brave, Opera, Vivaldi, Arc, and Samsung Internet) are supported.
                    </p>
                </section>

                <DocNavigation
                  previous={{ title: "Use Cases", href: "/docs/introduction/use-cases" }}
                  next={{ title: "Installation", href: "/docs/getting-started/installation" }}
                />
              </div>
              <TableOfContents items={tocItems} />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default GettingStartedRequirements;
