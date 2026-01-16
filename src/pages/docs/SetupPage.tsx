import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { Footer } from "@/components/layout/Footer";
import { Copy, Check, Monitor, FolderOpen, Download, Wifi, Terminal } from "lucide-react";
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

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

const StepCard = ({ stepNumber, title, description, icon, children }: StepCardProps) => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="flex items-center gap-4 p-6 border-b border-border bg-muted/30">
        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <div className="text-sm text-primary font-medium mb-1">Step {stepNumber}</div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-muted-foreground mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
};

const tocItems = [
  { id: "prerequisites", title: "Prerequisites", level: 2 },
  { id: "step-1", title: "Step 1: Download Files", level: 2 },
  { id: "step-2", title: "Step 2: Create Folder Structure", level: 2 },
  { id: "step-3", title: "Step 3: Install Dependencies", level: 2 },
  { id: "step-4", title: "Step 4: Configure WiFi", level: 2 },
  { id: "find-ip", title: "Finding Your IP Address", level: 2 },
];

const SetupPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="flex">
            <div className="container max-w-4xl px-4 py-8 md:px-12">
              <Breadcrumb
                items={[
                  { label: "Documentation", href: "/docs" },
                  { label: "Installation & Setup" },
                ]}
              />

              <h1 className="text-3xl font-bold text-foreground mb-6 md:text-5xl">
                Installation & Setup
              </h1>

              {/* Prerequisites */}
              <section className="mb-10" id="prerequisites">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Prerequisites</h2>
                <div className="rounded-lg bg-card border border-border p-6">
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Terminal className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="text-foreground">Node.js</strong>
                        <p className="text-sm">Make sure Node.js (which includes npm) is installed on your system.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10 text-primary shrink-0">
                        <Wifi className="h-4 w-4" />
                      </div>
                      <div>
                        <strong className="text-foreground">Local WiFi Network</strong>
                        <p className="text-sm">A WiFi network or mobile hotspot that all your devices can connect to.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Step 1 */}
              <section className="mb-8" id="step-1">
                <StepCard
                  stepNumber={1}
                  title="Download Files"
                  description="Download the project files from GitHub and place them in a new directory on your computer."
                  icon={<Download className="h-6 w-6" />}
                >
                  <div className="rounded-lg bg-muted/50 dark:bg-muted/30 p-4 border border-border">
                    <p className="text-sm text-muted-foreground">
                      Download files: <code className="bg-background px-1.5 py-0.5 rounded text-sm">server.js</code>, <code className="bg-background px-1.5 py-0.5 rounded text-sm">package.json</code>, and HTML files.
                    </p>
                  </div>
                </StepCard>
              </section>

              {/* Step 2 */}
              <section className="mb-8" id="step-2">
                <StepCard
                  stepNumber={2}
                  title="Create Folder Structure"
                  description="Create the required folder structure. You must have a 'public' folder containing your HTML files."
                  icon={<FolderOpen className="h-6 w-6" />}
                >
                  <CodeBlock language="text">{`/your-project
├── node_modules/
├── uploads/  
├── public/
│   ├── client.html      ← The video player page
│   └── controller.html  ← The remote control page
├── config.json
├── package.json
└── server.js`}</CodeBlock>
                </StepCard>
              </section>

              {/* Step 3 */}
              <section className="mb-8" id="step-3">
                <StepCard
                  stepNumber={3}
                  title="Install Dependencies"
                  description="Open a terminal in the project directory and run the following command to install required packages."
                  icon={<Terminal className="h-6 w-6" />}
                >
                  <CodeBlock language="bash">npm install</CodeBlock>
                  <p className="text-sm text-muted-foreground mt-4">
                    This installs <code className="bg-muted px-1.5 py-0.5 rounded text-xs">express</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">socket.io</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-xs">qrcode</code>, and other packages.
                  </p>
                </StepCard>
              </section>

              {/* Step 4 */}
              <section className="mb-8" id="step-4">
                <StepCard
                  stepNumber={4}
                  title="Configure WiFi"
                  description="Create a config.json file to set your WiFi credentials that the server will share via QR code."
                  icon={<Wifi className="h-6 w-6" />}
                >
                  <CodeBlock language="json">{`{
  "WIFI_SSID": "Your_Hotspot_Name",
  "WIFI_PASSWORD": "Your_Hotspot_Password",
  "HOTSPOT_IP": "Your_IP"
}`}</CodeBlock>
                </StepCard>
              </section>

              {/* Find IP */}
              <section className="mb-10" id="find-ip">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Finding Your Hotspot IP Address</h2>
                <div className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="flex items-center gap-4 p-6 border-b border-border bg-muted/30">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary">
                      <Monitor className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Windows Command</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      Open Command Prompt and run:
                    </p>
                    <CodeBlock language="bash">ipconfig</CodeBlock>
                    <p className="text-sm text-muted-foreground mt-4">
                      Look for the <strong className="text-foreground">IPv4 Address</strong> under your active network adapter (usually starts with 192.168.x.x).
                    </p>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section className="mb-10">
                <div className="rounded-lg bg-primary/10 border border-primary/20 p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Setup Complete!</h3>
                  <p className="text-muted-foreground">
                    You're now ready to start the server. Head over to the{" "}
                    <a href="/docs/usage" className="text-primary hover:underline">
                      How to Use
                    </a>{" "}
                    guide to learn how to run the server and connect devices.
                  </p>
                </div>
              </section>

              <DocNavigation
                previous={{ title: "Documentation", href: "/docs" }}
                next={{ title: "How to Use", href: "/docs/usage" }}
              />
            </div>
            <TableOfContents items={tocItems} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default SetupPage;