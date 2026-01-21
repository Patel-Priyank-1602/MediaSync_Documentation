import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Footer } from "@/components/layout/Footer";

const tocItems = [
  { id: "prerequisites", title: "1. Prerequisites", level: 2 },
  { id: "clone", title: "2. Clone or Download", level: 2 },
  { id: "install", title: "3. Install Dependencies", level: 2 },
  { id: "project-structure", title: "4. Project Structure", level: 2 },
  { id: "start", title: "5. Start the Server", level: 2 },
  { id: "next", title: "6. Config.json", level: 2 },
];

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-muted rounded-lg overflow-hidden group">
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

const GettingStartedInstallation = () => {
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
                { label: "Installation" },
              ]}
            />

            <div className="flex gap-8">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
                  Installation
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Get the Media Sync Server up and running in minutes.
                </p>

                <section id="prerequisites" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Prerequisites
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Before you begin, ensure you have the following installed:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">✓</span>
                      <div>
                        <strong className="text-foreground">Node.js</strong>
                        <span className="text-muted-foreground"> v18 or later (includes npm)</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">✓</span>
                      <div>
                        <strong className="text-foreground">Local Network</strong>
                        <span className="text-muted-foreground"> - All devices must be on the same WiFi/network</span>
                      </div>
                    </li>
                  </ul>
                </section>

                <section id="clone" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    1. Clone or Download Project
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Get the project files using Git:
                  </p>
                  <CodeBlock code={`git clone https://github.com/Patel-Priyank-1602/Media_Sync.git
cd Media_Sync`} />
                  <p className="text-muted-foreground mt-4">
                    Or download and extract the ZIP file, then navigate to the project directory.
                  </p>
                </section>

                <section id="install" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    2. Install Dependencies
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Install the required Node.js packages:
                  </p>
                  <CodeBlock code="npm install" />
                  <p className="text-muted-foreground mt-4">
                    This installs <code className="bg-muted px-1.5 py-0.5 rounded text-sm">express</code>, 
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm ml-1">socket.io</code>, 
                    <code className="bg-muted px-1.5 py-0.5 rounded text-sm ml-1">qrcode</code>, 
                    and other dependencies defined in <code className="bg-muted px-1.5 py-0.5 rounded text-sm">package.json</code>.
                  </p>
                </section>

                <section id="project-structure" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Project Structure
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Ensure your project has the following structure:
                  </p>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                    <pre className="text-foreground">{`/your-project
├── node_modules/
├── uploads/             
├── public/
│   ├── client.html      ← The video player page 💻
│   └── controller.html  ← The remote control page 📱
├── config.json
├── package.json
└── server.js`}</pre>
                  </div>
                </section>

                <section id="start" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    3. Start the Server
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Run the server from your terminal:
                  </p>
                  <CodeBlock code="node server.js" />
                  <p className="text-muted-foreground mt-4 mb-4">
                    You should see output similar to:
                  </p>
                  <div className="bg-muted rounded-lg p-4 font-mono text-xs overflow-x-auto">
                    <pre className="text-foreground">{`══════════════════════════════════════════════════════════════════════
  MULTI-MEDIA SYNC SERVER
══════════════════════════════════════════════════════════════════════
  Status:       Running
  Local Time:   7/12/2025, 10:06:41 pm
  Server IP:    0.0.0.0 (Manual: true)
  Port:         8000

  WiFi Network: YOUR_NETWORK
  Password:     YOUR_PASSWORD

  Controller URL:
  http://0.0.0.0:8000/controller.html

  Client URL:
  http://0.0.0.0:8000/client.html

  Supports: YouTube Videos | Local Videos | Local Audio
══════════════════════════════════════════════════════════════════════
  Waiting for connections...`}</pre>
                  </div>
                </section>

                <div id="next" className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">🎉 Next Steps</h3>
                  <p className="text-muted-foreground">
                    Before running the Media Sync Server for the first time, you need to configure <a href="/docs/setup-guide" className="text-primary hover:underline">Your WiFi credentials</a> so client devices can easily connect to the same network.
                  </p>
                </div>

                <DocNavigation
                  previous={{ title: "System Requirements", href: "/docs/getting-started/requirements" }}
                  next={{ title: "First-Time Setup", href: "/docs/getting-started/setup" }}
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

export default GettingStartedInstallation;
