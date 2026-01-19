import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { Copy, Check, Video, FileVideo, Music } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const CodeBlock = ({ children, language = "bash" }: { children: string; language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg bg-[#0d0d0d] border border-border overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
        <span className="text-xs text-muted-foreground">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 text-muted-foreground hover:text-foreground"
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-foreground font-mono whitespace-pre">{children}</code>
      </pre>
    </div>
  );
};

const tocItems = [
  { id: "start-server", title: "Step 1: Start the Server", level: 2 },
  { id: "connect-devices", title: "Step 2: Connect Devices", level: 2 },
  { id: "control-playback", title: "Step 3: Control Playback", level: 2 },
  { id: "media-types", title: "Supported Media Types", level: 2 },
];

const UsagePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="flex">
            <div className="container max-w-5xl px-4 py-8 md:px-12">
              <Breadcrumb
                items={[
                  { label: "Documentation", href: "/docs" },
                  { label: "How to Use" },
                ]}
              />

              <h1 className="text-3xl font-bold text-foreground mb-6 md:text-5xl">
                How to Use
              </h1>

              {/* Step 1: Start Server */}
              <section className="mb-10" id="start-server">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Step 1: Start the Server</h2>
                <p className="text-muted-foreground mb-4">
                  Run the server from your terminal:
                </p>
                <CodeBlock language="bash">node server.js</CodeBlock>
                <p className="text-muted-foreground mt-4 mb-4">
                  A banner will appear in your console showing the server's IP address, port, and the URLs for the controller and client pages:
                </p>
                <CodeBlock language="text">{`══════════════════════════════════════════════════════════════════════
  MULTI-MEDIA SYNC SERVER
══════════════════════════════════════════════════════════════════════
  Status:       Running
  Local Time:   7/12/2025, 10:06:41 pm
  Server IP:    192.168.1.100 (Manual: true)
  Port:         8000

  WiFi Network: KALE KALE
  Password:     Priyank@1602

  Controller URL:
  http://192.168.1.100:8000/controller.html

  Client URL:
  http://192.168.1.100:8000/client.html

  Supports: YouTube Videos | Local Videos | Local Audio
══════════════════════════════════════════════════════════════════════
  Waiting for connections...`}</CodeBlock>
                <p className="text-muted-foreground mt-4">
                  You should either copy the URL from your terminal or scan the QR code.
                </p>
              </section>

              {/* Step 2: Connect Devices */}
              <section className="mb-10" id="connect-devices">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Step 2: Connect Devices</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium shrink-0">1</span>
                    <p>
                      On your <strong className="text-foreground">"controller" device</strong> (e.g., your phone), open a browser and go to the <strong className="text-foreground">Controller URL</strong> printed in the terminal.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium shrink-0">2</span>
                    <p>
                      On your <strong className="text-foreground">"viewer" devices</strong> (e.g., laptops, tablets), connect them to the WiFi hotspot. You can use the "WiFi Connection" QR code on the controller page for this.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm font-medium shrink-0">3</span>
                    <p>
                      Once connected, have the viewer devices open the <strong className="text-foreground">Client URL</strong>.
                    </p>
                  </div>
                </div>
              </section>

              {/* Step 3: Control Playback */}
              <section className="mb-10" id="control-playback">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Step 3: Control Playback</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    You should see the <strong className="text-foreground">"Connected Clients"</strong> count increase on the controller page.
                  </p>
                  <p>
                    Paste a <strong className="text-foreground">YouTube URL</strong> or <strong className="text-foreground">Video ID</strong> into the input box on the controller page and click <strong className="text-foreground">"Load Video"</strong>.
                  </p>
                  <p>
                    Use the <strong className="text-foreground">Play</strong>, <strong className="text-foreground">Pause</strong>, and <strong className="text-foreground">Seek</strong> buttons to control all connected clients at once.
                  </p>
                </div>
                <div className="mt-6 rounded-lg bg-green-500/10 border border-green-500/20 p-6">
                  <p className="text-foreground font-medium">Enjoy the show!</p>
                  <p className="text-muted-foreground mt-1">
                    All connected clients will now play, pause, and seek in perfect sync.
                  </p>
                </div>
              </section>

              {/* Media Type Support */}
              <section className="mb-10" id="media-types">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Supported Media Types</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-card border border-border p-4">
                    <Video className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground mb-2">YouTube Videos</h3>
                    <p className="text-sm text-muted-foreground">Paste any YouTube URL or 11-character video ID</p>
                  </div>
                  <div className="rounded-lg bg-card border border-border p-4">
                    <FileVideo className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground mb-2">Local Videos</h3>
                    <p className="text-sm text-muted-foreground">Upload MP4, WebM files from controller</p>
                  </div>
                  <div className="rounded-lg bg-card border border-border p-4">
                    <Music className="h-6 w-6 text-primary mb-2" />
                    <h3 className="font-semibold text-foreground mb-2">Local Audio</h3>
                    <p className="text-sm text-muted-foreground">Upload MP3, WAV audio files</p>
                  </div>
                </div>
              </section>

              <DocNavigation
                previous={{ title: "Network Requirements", href: "/docs/getting-started/network" }}
                next={{ title: "Joining as a Client", href: "/docs/usage/client" }}
              />
            </div>
            <TableOfContents items={tocItems} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UsagePage;
