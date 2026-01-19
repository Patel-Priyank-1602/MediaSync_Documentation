import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const tocItems = [
  { id: "finding-ip", title: "Finding Your IP Address", level: 2 },
  { id: "firewall", title: "Firewall Configuration", level: 2 },
  { id: "hotspot", title: "Using Mobile Hotspot", level: 2 },
  { id: "best-practices", title: "Best Practices", level: 2 },
];

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-muted rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border">
        <span className="text-xs text-muted-foreground">{language}</span>
        <button
          onClick={handleCopy}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-foreground">{code}</code>
      </pre>
    </div>
  );
}

const GettingStartedNetwork = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-5xl px-4 py-8 md:px-12">
            <Breadcrumb
              items={[
                { label: "Documentation", href: "/docs" },
                { label: "Getting Started" },
                { label: "Network Requirements" },
              ]}
            />

            <div className="flex gap-8">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
                  Network Requirements
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Configure your network for optimal Media Sync Server performance.
                </p>

                <section id="finding-ip" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Finding Your IP Address
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    To share the server with other devices, you need to know your host machine's IP address.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3">Windows</h3>
                  <CodeBlock code="ipconfig" language="cmd" />
                  <p className="text-sm text-muted-foreground mt-2 mb-6">
                    Look for "IPv4 Address" under your active network adapter.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3">macOS</h3>
                  <CodeBlock code="ifconfig | grep 'inet '" language="bash" />
                  <p className="text-sm text-muted-foreground mt-2 mb-6">
                    Look for the IP address on your active network interface (usually en0 for WiFi).
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3">Linux</h3>
                  <CodeBlock code="ip addr show" language="bash" />
                </section>

                <section id="firewall" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Firewall Configuration
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Ensure the server port (default: 3000 or 8000) is accessible through your firewall.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3">Windows Firewall</h3>
                  <ol className="space-y-2 text-muted-foreground mb-6">
                    <li>1. Open Windows Defender Firewall</li>
                    <li>2. Click "Advanced settings"</li>
                    <li>3. Create a new Inbound Rule for port 3000 (or your configured port)</li>
                    <li>4. Allow the connection</li>
                  </ol>

                  <h3 className="text-lg font-medium text-foreground mb-3">macOS</h3>
                  <p className="text-muted-foreground mb-4">
                    When you first run the server, macOS may prompt you to allow incoming connections. 
                    Click "Allow" to permit network access.
                  </p>

                  <h3 className="text-lg font-medium text-foreground mb-3">Linux (UFW)</h3>
                  <CodeBlock code="sudo ufw allow 3000" language="bash" />
                </section>

                <section id="hotspot" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Using Mobile Hotspot
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    If you don't have a WiFi network available, you can use a mobile hotspot:
                  </p>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">1</span>
                      <span>Enable hotspot on your mobile device</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">2</span>
                      <span>Connect your host computer to the hotspot</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">3</span>
                      <span>Update config.json with hotspot SSID and password</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">4</span>
                      <span>Connect other devices to the same hotspot</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">5</span>
                      <span>Start the server and share the QR code</span>
                    </li>
                  </ol>
                  <div className="bg-muted/50 border border-border rounded-lg p-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">💡 Tip:</strong> Mobile hotspots work great for 
                      on-the-go synchronization at events, outdoor locations, or when WiFi isn't available.
                    </p>
                  </div>
                </section>

                <section id="best-practices" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Best Practices
                  </h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Use wired Ethernet</strong> for the host machine when possible for maximum stability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Disable VPNs</strong> on all devices as they can interfere with local network discovery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Minimize network congestion</strong> by limiting other bandwidth-heavy activities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Keep devices close</strong> to the WiFi router for stronger signal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <span><strong className="text-foreground">Use 5GHz WiFi</strong> if available for better performance with video content</span>
                    </li>
                  </ul>
                </section>

                <DocNavigation
                  previous={{ title: "First-Time Setup", href: "/docs/setup" }}
                  next={{ title: "Controller Dashboard", href: "/docs/usage" }}
                />
              </div>
              <TableOfContents items={tocItems} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GettingStartedNetwork;
