import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { Copy, Check } from "lucide-react";
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
        <code className="text-sm text-foreground font-mono">{children}</code>
      </pre>
    </div>
  );
};

const SetupPage = () => {
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
                { label: "Installation & Setup" },
              ]}
            />

            <h1 className="text-3xl font-bold text-foreground mb-6 md:text-5xl">
              ⚙️ Installation & Setup
            </h1>

            {/* Prerequisites */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">📦 Prerequisites</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><strong className="text-foreground">Node.js</strong> (which includes npm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>A local <strong className="text-foreground">WiFi network</strong> or mobile hotspot 📶 that all your devices can connect to.</span>
                </li>
              </ul>
            </section>

            {/* Step 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Step 1: Download Files</h2>
              <p className="text-muted-foreground mb-4">
                Download the project files (<code className="bg-muted px-1.5 py-0.5 rounded text-sm">server.js</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">package.json</code>, etc.) and place them in a new directory 📁.
              </p>
            </section>

            {/* Step 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Step 2: Create Folder Structure</h2>
              <p className="text-muted-foreground mb-4">
                You must create a folder named <code className="bg-muted px-1.5 py-0.5 rounded text-sm">public</code> and place your <code className="bg-muted px-1.5 py-0.5 rounded text-sm">controller.html</code> and <code className="bg-muted px-1.5 py-0.5 rounded text-sm">client.html</code> files inside it.
              </p>
              <CodeBlock language="text">{`/your-project
├── node_modules/
├── uploads/  
├── public/
│   ├── client.html      <-- The video player page 💻
│   └── controller.html  <-- The remote control page 📱
├── config.json
├── package.json
└── server.js`}</CodeBlock>
            </section>

            {/* Step 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Step 3: Install Dependencies</h2>
              <p className="text-muted-foreground mb-4">
                Open a terminal in the project directory and run:
              </p>
              <CodeBlock language="bash">npm install</CodeBlock>
              <p className="text-muted-foreground mt-4">
                This will install <code className="bg-muted px-1.5 py-0.5 rounded text-sm">express</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">socket.io</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm">qrcode</code>, and other necessary packages.
              </p>
            </section>

            {/* Step 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Step 4: Configure WiFi</h2>
              <p className="text-muted-foreground mb-4">
                Create a file named <code className="bg-muted px-1.5 py-0.5 rounded text-sm">config.json</code> in the same directory as <code className="bg-muted px-1.5 py-0.5 rounded text-sm">server.js</code>. This is where you will set the WiFi credentials that the server will share via QR code.
              </p>
              <CodeBlock language="json">{`{
  "WIFI_SSID": "Your_Hotspot_Name",
  "WIFI_PASSWORD": "Your_Hotspot_Password",
  "HOTSPOT_IP": "Your_IP"
}`}</CodeBlock>
            </section>

            {/* Find IP */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Finding Your Hotspot IP Address</h2>
              <p className="text-muted-foreground mb-4">
                Open Command Prompt and run:
              </p>
              <CodeBlock language="bash">ipconfig</CodeBlock>
              <p className="text-muted-foreground mt-4">
                Look for the <strong className="text-foreground">IPv4 Address</strong> under your active network adapter (usually starts with 192.168.x.x).
              </p>
            </section>

            {/* Next Steps */}
            <section className="mb-10">
              <div className="rounded-lg bg-primary/10 border border-primary/20 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">✅ Setup Complete!</h3>
                <p className="text-muted-foreground">
                  You're now ready to start the server. Head over to the{" "}
                  <a href="/docs/usage" className="text-primary hover:underline">
                    How to Use
                  </a>{" "}
                  guide to learn how to run the server and connect devices.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SetupPage;
