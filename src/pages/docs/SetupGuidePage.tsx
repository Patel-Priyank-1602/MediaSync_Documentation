import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { Footer } from "@/components/layout/Footer";
import { Copy, Check, Monitor, FolderOpen, Download, Wifi, Terminal, Github, Play, Globe, QrCode, Smartphone, Laptop } from "lucide-react";
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
    <div className="relative group rounded-lg bg-muted dark:bg-[#0d0d0d] border border-border overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50 dark:bg-muted/30">
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
        <code className="text-sm text-foreground font-mono">{children}</code>
      </pre>
    </div>
  );
};

interface StepSectionProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imagePlaceholder?: string;
  children?: React.ReactNode;
}

const StepSection = ({ stepNumber, title, description, icon, imagePlaceholder, children }: StepSectionProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 p-6 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
        <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-primary text-primary-foreground font-bold text-xl">
          {stepNumber}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="hidden sm:flex items-center justify-center h-12 w-12 rounded-xl bg-muted text-primary">
          {icon}
        </div>
      </div>

      {/* Image Placeholder */}
      {imagePlaceholder && (
        <div className="border-b border-border bg-muted/30 p-6">
          <div className="rounded-xl border-2 border-dashed border-border bg-background/50 p-8 text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-muted mb-4">
              <Monitor className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground font-medium">{imagePlaceholder}</p>
            <p className="text-sm text-muted-foreground mt-1">Screenshot will be added here</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-4">
        {children}
      </div>
    </div>
  );
};

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "step-1", title: "Step 1: Install Node.js", level: 2 },
  { id: "step-2", title: "Step 2: Download Project", level: 2 },
  { id: "step-3", title: "Step 3: Project Structure", level: 2 },
  { id: "step-4", title: "Step 4: Install Dependencies", level: 2 },
  { id: "step-5", title: "Step 5: Configure WiFi", level: 2 },
  { id: "step-6", title: "Step 6: Find IP Address", level: 2 },
  { id: "step-7", title: "Step 7: Start Server", level: 2 },
  { id: "step-8", title: "Step 8: Connect Devices", level: 2 },
  { id: "whats-next", title: "What's Next", level: 2 },
];

const SetupGuidePage = () => {
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
                { label: "Setup Guide" },
              ]}
            />

            <h1 className="text-3xl font-bold text-foreground mb-4 md:text-5xl">
              Complete Setup Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Follow this step-by-step guide to set up MediaSync on your computer and start synchronizing media across all your devices.
            </p>

            {/* Overview */}
            <section className="mb-10" id="overview">
              <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">What You'll Need</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20 text-primary shrink-0">
                      <Terminal className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Node.js</h4>
                      <p className="text-sm text-muted-foreground">JavaScript runtime (includes npm)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20 text-primary shrink-0">
                      <Wifi className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">WiFi Network</h4>
                      <p className="text-sm text-muted-foreground">Local network or mobile hotspot</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20 text-primary shrink-0">
                      <Laptop className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Computer</h4>
                      <p className="text-sm text-muted-foreground">Windows, Mac, or Linux</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/20 text-primary shrink-0">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Devices</h4>
                      <p className="text-sm text-muted-foreground">Phones, tablets, laptops to sync</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 1: Install Node.js */}
            <section className="mb-8" id="step-1">
              <StepSection
                stepNumber={1}
                title="Install Node.js"
                description="Download and install Node.js on your computer"
                icon={<Terminal className="h-6 w-6" />}
                imagePlaceholder="Node.js download page screenshot"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Node.js is required to run the MediaSync server. Download the LTS (Long Term Support) version from the official website.
                  </p>
                  
                  <div className="rounded-lg bg-muted/50 p-4 border border-border">
                    <h4 className="font-medium text-foreground mb-2">Download Link</h4>
                    <a 
                      href="https://nodejs.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      <Globe className="h-4 w-4" />
                      https://nodejs.org
                    </a>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Verify Installation</h4>
                    <p className="text-sm text-muted-foreground">After installation, open a terminal and run:</p>
                    <CodeBlock language="bash">node --version</CodeBlock>
                    <p className="text-sm text-muted-foreground mt-2">
                      You should see a version number like <code className="bg-muted px-1.5 py-0.5 rounded">v18.17.0</code> or higher.
                    </p>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 2: Download Project */}
            <section className="mb-8" id="step-2">
              <StepSection
                stepNumber={2}
                title="Download Project Files"
                description="Get the MediaSync project files from GitHub"
                icon={<Download className="h-6 w-6" />}
                imagePlaceholder="GitHub repository page screenshot"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Download the project files from GitHub. You can either clone the repository or download the ZIP file.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Option A: Clone with Git</h4>
                    <CodeBlock language="bash">git clone https://github.com/your-username/mediasync.git</CodeBlock>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Option B: Download ZIP</h4>
                    <div className="rounded-lg bg-muted/50 p-4 border border-border">
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground">
                          Go to the GitHub repository → Click "Code" → "Download ZIP"
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Tip:</strong> Extract the ZIP file to a folder like <code className="bg-muted px-1.5 py-0.5 rounded">C:\MediaSync</code> or <code className="bg-muted px-1.5 py-0.5 rounded">~/MediaSync</code>
                    </p>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 3: Project Structure */}
            <section className="mb-8" id="step-3">
              <StepSection
                stepNumber={3}
                title="Understand Project Structure"
                description="Make sure your project folder has the correct structure"
                icon={<FolderOpen className="h-6 w-6" />}
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Your project folder should contain these files and folders:
                  </p>

                  <CodeBlock language="text">{`mediasync/
├── node_modules/      ← Created after npm install
├── uploads/           ← For uploaded media files
├── public/
│   ├── client.html    ← Video player page (viewers)
│   └── controller.html ← Remote control page (you)
├── config.json        ← WiFi configuration
├── package.json       ← Project dependencies
└── server.js          ← Main server file`}</CodeBlock>

                  <div className="grid gap-3 sm:grid-cols-2 mt-4">
                    <div className="rounded-lg bg-muted/50 p-3 border border-border">
                      <code className="text-sm text-primary">server.js</code>
                      <p className="text-xs text-muted-foreground mt-1">Main Node.js server file</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3 border border-border">
                      <code className="text-sm text-primary">public/</code>
                      <p className="text-xs text-muted-foreground mt-1">HTML files served to browsers</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3 border border-border">
                      <code className="text-sm text-primary">config.json</code>
                      <p className="text-xs text-muted-foreground mt-1">WiFi credentials for QR code</p>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-3 border border-border">
                      <code className="text-sm text-primary">uploads/</code>
                      <p className="text-xs text-muted-foreground mt-1">Stores uploaded media files</p>
                    </div>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 4: Install Dependencies */}
            <section className="mb-8" id="step-4">
              <StepSection
                stepNumber={4}
                title="Install Dependencies"
                description="Install the required npm packages"
                icon={<Terminal className="h-6 w-6" />}
                imagePlaceholder="Terminal showing npm install output"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Open a terminal in the project folder and run the following command:
                  </p>

                  <CodeBlock language="bash">npm install</CodeBlock>

                  <p className="text-muted-foreground">
                    This will install all required packages:
                  </p>

                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded">express</code> - Web server</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded">socket.io</code> - Real-time sync</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded">qrcode</code> - QR code generation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-muted-foreground"><code className="bg-muted px-1.5 py-0.5 rounded">multer</code> - File uploads</span>
                    </div>
                  </div>

                  <div className="rounded-lg bg-yellow-500/10 border border-yellow-500/30 p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> This creates a <code className="bg-muted px-1.5 py-0.5 rounded">node_modules</code> folder with all dependencies.
                    </p>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 5: Configure WiFi */}
            <section className="mb-8" id="step-5">
              <StepSection
                stepNumber={5}
                title="Configure WiFi Settings"
                description="Set up your WiFi credentials for the QR code"
                icon={<Wifi className="h-6 w-6" />}
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Create or edit the <code className="bg-muted px-1.5 py-0.5 rounded">config.json</code> file with your WiFi details:
                  </p>

                  <CodeBlock language="json">{`{
  "WIFI_SSID": "Your_WiFi_Name",
  "WIFI_PASSWORD": "Your_WiFi_Password",
  "HOTSPOT_IP": "192.168.1.100"
}`}</CodeBlock>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-muted text-muted-foreground shrink-0 text-sm font-medium">1</div>
                      <div>
                        <h4 className="font-medium text-foreground">WIFI_SSID</h4>
                        <p className="text-sm text-muted-foreground">The name of your WiFi network or mobile hotspot</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-muted text-muted-foreground shrink-0 text-sm font-medium">2</div>
                      <div>
                        <h4 className="font-medium text-foreground">WIFI_PASSWORD</h4>
                        <p className="text-sm text-muted-foreground">The password to connect to your network</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-muted text-muted-foreground shrink-0 text-sm font-medium">3</div>
                      <div>
                        <h4 className="font-medium text-foreground">HOTSPOT_IP</h4>
                        <p className="text-sm text-muted-foreground">Your computer's IP address on the network (see next step)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 6: Find IP Address */}
            <section className="mb-8" id="step-6">
              <StepSection
                stepNumber={6}
                title="Find Your IP Address"
                description="Get your computer's local IP address"
                icon={<Monitor className="h-6 w-6" />}
                imagePlaceholder="ipconfig command output screenshot"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    You need to find your computer's IP address on the local network.
                  </p>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-card border border-border p-4">
                      <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                        <Laptop className="h-4 w-4" />
                        Windows
                      </h4>
                      <CodeBlock language="bash">ipconfig</CodeBlock>
                      <p className="text-sm text-muted-foreground mt-2">
                        Look for <strong className="text-foreground">IPv4 Address</strong> under your active network adapter.
                      </p>
                    </div>

                    <div className="rounded-lg bg-card border border-border p-4">
                      <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                        <Terminal className="h-4 w-4" />
                        Mac / Linux
                      </h4>
                      <CodeBlock language="bash">ifconfig | grep "inet "</CodeBlock>
                      <p className="text-sm text-muted-foreground mt-2">
                        Look for an address starting with <code className="bg-muted px-1.5 py-0.5 rounded">192.168.x.x</code>
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-primary/10 border border-primary/20 p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Example:</strong> If your IP is <code className="bg-muted px-1.5 py-0.5 rounded">192.168.1.100</code>, use this in your config.json
                    </p>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 7: Start Server */}
            <section className="mb-8" id="step-7">
              <StepSection
                stepNumber={7}
                title="Start the Server"
                description="Run the MediaSync server"
                icon={<Play className="h-6 w-6" />}
                imagePlaceholder="Server running in terminal with banner"
              >
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Open a terminal in the project folder and start the server:
                  </p>

                  <CodeBlock language="bash">node server.js</CodeBlock>

                  <p className="text-muted-foreground">
                    You should see a banner like this:
                  </p>

                  <CodeBlock language="text">{`══════════════════════════════════════════════════════════════════════
  MULTI-MEDIA SYNC SERVER
══════════════════════════════════════════════════════════════════════
  Status:       Running
  Server IP:    192.168.1.100
  Port:         8000

  Controller URL: http://192.168.1.100:8000/controller.html
  Client URL:     http://192.168.1.100:8000/client.html

  Supports: YouTube Videos | Local Videos | Local Audio
══════════════════════════════════════════════════════════════════════
  Waiting for connections...`}</CodeBlock>

                  <div className="grid gap-3 sm:grid-cols-2 mt-4">
                    <div className="rounded-lg bg-green-500/10 border border-green-500/30 p-4">
                      <h4 className="font-medium text-foreground mb-1">Controller URL</h4>
                      <p className="text-sm text-muted-foreground">Open this on your phone to control playback</p>
                    </div>
                    <div className="rounded-lg bg-blue-500/10 border border-blue-500/30 p-4">
                      <h4 className="font-medium text-foreground mb-1">Client URL</h4>
                      <p className="text-sm text-muted-foreground">Open this on viewer devices</p>
                    </div>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 8: Connect Devices */}
            <section className="mb-8" id="step-8">
              <StepSection
                stepNumber={8}
                title="Connect Your Devices"
                description="Connect all devices and start syncing"
                icon={<QrCode className="h-6 w-6" />}
                imagePlaceholder="Controller page with QR codes screenshot"
              >
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground shrink-0 text-sm font-medium">1</div>
                      <div>
                        <h4 className="font-medium text-foreground">Connect to WiFi</h4>
                        <p className="text-sm text-muted-foreground">Make sure all devices are connected to the same WiFi network</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground shrink-0 text-sm font-medium">2</div>
                      <div>
                        <h4 className="font-medium text-foreground">Open Controller</h4>
                        <p className="text-sm text-muted-foreground">On your phone, open the Controller URL in a browser</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground shrink-0 text-sm font-medium">3</div>
                      <div>
                        <h4 className="font-medium text-foreground">Scan QR Code</h4>
                        <p className="text-sm text-muted-foreground">Use the QR code on the controller page to connect other devices</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground shrink-0 text-sm font-medium">4</div>
                      <div>
                        <h4 className="font-medium text-foreground">Start Playing</h4>
                        <p className="text-sm text-muted-foreground">Paste a YouTube URL or upload a file, then hit Play!</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg bg-green-500/10 border border-green-500/30 p-4">
                    <p className="text-foreground font-medium">🎉 Congratulations!</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      All connected devices will now play, pause, and seek in perfect sync!
                    </p>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* What's Next */}
            <section className="mb-10" id="whats-next">
              <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">What's Next?</h2>
                <div className="space-y-3">
                  <a href="/docs/usage" className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group">
                    <Play className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Learn How to Use</h4>
                      <p className="text-sm text-muted-foreground">Detailed usage guide for all features</p>
                    </div>
                  </a>
                  <a href="/docs/troubleshooting" className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group">
                    <Monitor className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">Troubleshooting</h4>
                      <p className="text-sm text-muted-foreground">Fix common issues</p>
                    </div>
                  </a>
                  <a href="/docs/faq" className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group">
                    <Terminal className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">FAQ</h4>
                      <p className="text-sm text-muted-foreground">Frequently asked questions</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            <DocNavigation
              previous={{ title: "Documentation", href: "/docs" }}
              next={{ title: "How to Use", href: "/docs/usage" }}
            />
          </main>
          <TableOfContents items={tocItems} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SetupGuidePage;