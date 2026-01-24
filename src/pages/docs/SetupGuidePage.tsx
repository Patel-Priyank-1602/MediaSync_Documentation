import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { Footer } from "@/components/layout/Footer";
import { Copy, Check, Monitor, FolderOpen, Download, Wifi, Terminal, Github, Play, Globe, QrCode, Smartphone, Laptop, Menu, X } from "lucide-react";
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
    <div className="relative group rounded-lg bg-muted dark:bg-[#0d0d0d] border border-border overflow-hidden my-3 md:my-4">
      <div className="flex items-center justify-between px-3 py-2 md:px-4 border-b border-border bg-muted/50 dark:bg-muted/30">
        <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-7 px-2 text-muted-foreground hover:text-foreground"
        >
          {copied ? <Check className="h-3 w-3 mr-1" /> : <Copy className="h-3 w-3 mr-1" />}
          <span className="text-xs">{copied ? "Copied" : "Copy"}</span>
        </Button>
      </div>
      <pre className="p-3 md:p-4 overflow-x-auto">
        <code className="text-xs md:text-sm text-foreground font-mono whitespace-pre">{children}</code>
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
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="flex items-start md:items-center gap-3 md:gap-4 p-4 md:p-6 border-b border-border bg-gradient-to-r from-primary/10 to-transparent">
        <div className="flex items-center justify-center h-10 w-10 md:h-14 md:w-14 rounded-lg md:rounded-xl bg-primary text-primary-foreground font-bold text-lg md:text-2xl shrink-0 shadow-sm">
          {stepNumber}
        </div>
        <div className="flex-1 min-w-0 py-0.5">
          <h3 className="text-lg md:text-2xl font-bold text-foreground truncate">{title}</h3>
          <p className="text-sm md:text-base text-muted-foreground mt-0.5 md:mt-1 line-clamp-2 md:line-clamp-none leading-relaxed">
            {description}
          </p>
        </div>
        <div className="hidden sm:flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-lg md:rounded-xl bg-muted text-primary shrink-0">
          {icon}
        </div>
      </div>

      {/* Image Placeholder */}
      {imagePlaceholder && (
        <div className="border-b border-border bg-muted/30 p-4 md:p-6">
          <div className="rounded-lg md:rounded-xl border-2 border-dashed border-border bg-background/50 p-6 md:p-10 text-center transition-colors hover:border-primary/50 hover:bg-background/80">
            <div className="inline-flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-muted mb-3 md:mb-4">
              <Monitor className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground" />
            </div>
            <p className="text-sm md:text-base text-muted-foreground font-medium">{imagePlaceholder}</p>
            <p className="text-xs text-muted-foreground mt-1">Screenshot will be added here</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
        {children}
      </div>
    </div>
  );
};

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "full-setup-guide", title: "Full setup guide and feature explain", level: 2 },
  { id: "step-1", title: "Step 1: Install Node.js", level: 2 },
  { id: "step-2", title: "Step 2: Download Project", level: 2 },
  { id: "step-3", title: "Step 3: Install Dependencies", level: 2 },
  { id: "step-4", title: "Step 4: Configure WiFi", level: 2 },
  { id: "step-5", title: "Step 5: Project Structure", level: 2 },
  { id: "step-6", title: "Step 6: Find IP Address", level: 2 },
  { id: "step-7", title: "Step 7: Start Server", level: 2 },
  { id: "step-8", title: "Step 8: Controller Dashboard", level: 2 },
  { id: "step-9", title: "Step 9: Clinet Dashboard", level: 2 },
];

const SetupGuidePage = () => {
  // State to manage mobile sidebar visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <Navbar />

      <div className="flex flex-1 w-full">
        {/* Desktop Sidebar (Wide) */}
        <aside className="hidden lg:block w-80 shrink-0 border-r border-border h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto">
          <DocsSidebar />
        </aside>

        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Sidebar Panel */}
            <div className="fixed inset-y-0 left-0 w-80 border-r border-border bg-background shadow-2xl animate-in slide-in-from-left-1/2 duration-300 flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="font-semibold text-foreground">Navigation</span>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 overflow-y-auto">
                <DocsSidebar embedded onLinkClick={() => setMobileMenuOpen(false)} />
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row min-w-0">
          <main className="flex-1 px-4 py-6 md:px-8 lg:px-10 lg:py-8 w-full max-w-4xl mx-auto">
            <div className="mb-4 md:mb-6">
              <Breadcrumb
                items={[
                  { label: "Documentation", href: "/docs" },
                  { label: "Setup Guide" },
                ]}
              />
            </div>

            <div className="mb-8 md:mb-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-3 md:mb-4">
                Complete Setup Guide
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Follow this step-by-step guide to set up MediaSync on your computer and start synchronizing media across all your devices.
              </p>
            </div>

            {/* Overview */}
            <section className="mb-8 md:mb-10 scroll-mt-20" id="overview">
              <div className="rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">What You'll Need</h2>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  {[
                    { icon: Terminal, title: "Node.js", desc: "JavaScript runtime (includes npm)" },
                    { icon: Wifi, title: "WiFi Network", desc: "Local network or mobile hotspot" },
                    { icon: Laptop, title: "Computer", desc: "Windows, Mac, or Linux" },
                    { icon: Smartphone, title: "Devices", desc: "Phones, tablets, laptops to sync" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-background/40 transition-colors">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-background border border-primary/20 text-primary shrink-0 shadow-sm">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm md:text-base">{item.title}</h4>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Step 1: Install Node.js */}
            {/* Full Setup Guide Video */}
            <section className="mb-8 md:mb-12 scroll-mt-20" id="full-setup-guide">
              <div className="rounded-xl border border-border bg-card overflow-hidden p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold text-foreground">Full setup guide and feature explain</h2>
                    <p className="text-sm text-muted-foreground mt-1">Watch the full walkthrough to get started quickly.</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
                    <Play className="h-5 w-5 text-primary" />
                    <span className="text-xs">YouTube</span>
                  </div>
                </div>

                <div className="rounded-lg overflow-hidden border border-border">
                  <div className="relative" style={{ paddingTop: "56.25%" }}>
                    <iframe
                      src="https://www.youtube.com/embed/VIDEO_ID"
                      title="Full setup guide and feature explain"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="mb-8 md:mb-12 scroll-mt-20" id="step-1">
              <StepSection
                stepNumber={1}
                title="Install Node.js"
                description="Download and install Node.js on your computer"
                icon={<Terminal className="h-6 w-6" />}                >
                <div className="space-y-4">

                  <img
                    src="/img/node.png"
                    alt="Node.js download page screenshot"
                    className="rounded-lg border border-border w-full"
                  />


                  <p className="text-sm md:text-base text-muted-foreground">
                    Node.js is required to run the MediaSync server. Download the LTS (Long Term Support) version from the official website.
                  </p>

                  <div className="rounded-lg bg-muted/50 p-4 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="font-medium text-foreground text-sm">Official Download</h4>
                      <p className="text-xs text-muted-foreground">Get the LTS version</p>
                    </div>
                    <Button variant="outline" size="sm" asChild className="shrink-0 w-full sm:w-auto">
                      <a href="https://nodejs.org/en/download" target="_blank" rel="noopener noreferrer">
                        <Globe className="h-3.5 w-3.5 mr-2" />
                        Visit nodejs.org
                      </a>
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-foreground">Verify Installation</h4>
                    <p className="text-xs md:text-sm text-muted-foreground">After installation, open a terminal and run:</p>
                    <CodeBlock language="bash">node --version</CodeBlock>
                    <p className="text-xs text-muted-foreground mt-2">
                      You should see a version number like <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-foreground">v18.17.0</code> or higher.
                    </p>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 2: Download Project */}
            <section className="mb-8 md:mb-12 scroll-mt-20" id="step-2">
              <StepSection
                stepNumber={2}
                title="Download Project Files"
                description="Get the MediaSync project files from GitHub"
                icon={<Download className="h-6 w-6" />}
              >
                <div className="space-y-4">

                  <img
                    src="/img/clone.png"
                    alt="Node.js download page screenshot"
                    className="rounded-lg border border-border w-full"
                  />

                  <p className="text-sm md:text-base text-muted-foreground">
                    Download the project files from GitHub. You can either clone the repository or download the ZIP file.
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm text-foreground mb-1">Option A: Clone with Git</h4>
                      <CodeBlock language="bash">git clone https://github.com/Patel-Priyank-1602/Media_Sync.git</CodeBlock>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-foreground mb-2">Option B: Download ZIP</h4>
                      <div className="rounded-lg bg-muted/50 p-3 md:p-4 border border-border flex items-center gap-3">
                        <Github className="h-5 w-5 text-foreground shrink-0" />
                        <span className="text-xs md:text-sm text-muted-foreground">
                          Go to repository <span className="text-muted-foreground/60 mx-1">→</span> Click "Code" <span className="text-muted-foreground/60 mx-1">→</span> "Download ZIP" or Clone
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </StepSection>
            </section>


            {/* Step 3: Install Dependencies */}
            <section className="mb-8 md:mb-12 scroll-mt-20" id="step-3">
              <StepSection
                stepNumber={3}
                title="Install Dependencies"
                description="Install the required npm packages"
                icon={<Terminal className="h-6 w-6" />}
              >
                <div className="space-y-4">

                  <img
                    src="/img/npm.png"
                    alt="Node.js download page screenshot"
                    className="rounded-lg border border-border w-full"
                  />

                  <p className="text-sm md:text-base text-muted-foreground">
                    Open a terminal in the project folder and run:
                  </p>

                  <CodeBlock language="bash">npm install</CodeBlock>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">This installs:</p>
                    <div className="grid gap-2 grid-cols-1 sm:grid-cols-2">
                      {[
                        { pkg: "express", desc: "Web server" },
                        { pkg: "socket.io", desc: "Real-time sync" },
                        { pkg: "qrcode", desc: "QR code generation" },
                        { pkg: "multer", desc: "File uploads" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs md:text-sm p-2 rounded bg-muted/30">
                          <Check className="h-3.5 w-3.5 text-green-500 shrink-0" />
                          <span className="font-mono font-medium">{item.pkg}</span>
                          <span className="text-muted-foreground">- {item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 4: Configure WiFi */}
            <section className="mb-8 md:mb-12 scroll-mt-20" id="step-4">
              <StepSection
                stepNumber={4}
                title="Configure WiFi"
                description="Set up your WiFi credentials for the QR code"
                icon={<Wifi className="h-6 w-6" />}
              >
                <div className="space-y-4">

                  <img
                    src="/img/config.png"
                    alt="Node.js download page screenshot"
                    className="rounded-lg border border-border w-full"
                  />

                  <p className="text-sm md:text-base text-muted-foreground">
                    Create an edit the <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">config.json</code> file:
                  </p>

                  <CodeBlock language="json">{`{
  "WIFI_SSID": "Your_WiFi_Name",
  "WIFI_PASSWORD": "Your_WiFi_Password",
  "HOTSPOT_IP": "192.168.1.100"
}`}</CodeBlock>

                  <div className="space-y-2 mt-4">
                    {[
                      { key: "WIFI_SSID", desc: "The name of your WiFi network or mobile hotspot" },
                      { key: "WIFI_PASSWORD", desc: "The password to connect to your network" },
                      { key: "HOTSPOT_IP", desc: "Your computer's IP address (see next step)" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 text-sm">
                        <div className="flex items-center justify-center h-5 w-5 rounded bg-muted text-muted-foreground shrink-0 text-xs font-medium mt-0.5">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-mono font-bold text-foreground">{item.key}</h4>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 5: Project Structure */}
            <section className="mb-8 md:mb-12 scroll-mt-20" id="step-5">
              <StepSection
                stepNumber={5}
                title="Understand Structure"
                description="Verify your project folder contents"
                icon={<FolderOpen className="h-6 w-6" />}
              >
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-muted-foreground">
                    Your project folder should contain these files and folders:
                  </p>

                  <CodeBlock language="text">{`mediasync/
├── node_modules/       ← Created after npm install
├── uploads/            ← For uploaded media files
├── public/
│   ├── client.html     ← Video player page (viewers)
│   └── controller.html ← Remote control page (you)
├── config.json         ← WiFi configuration
├── package.json        ← Project dependencies
└── server.js           ← Main server file`}</CodeBlock>

                  <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 pt-2">
                    {[
                      { file: "server.js", desc: "Main Node.js server file" },
                      { file: "public/", desc: "HTML files served to browsers" },
                      { file: "config.json", desc: "WiFi credentials for QR code" },
                      { file: "uploads/", desc: "Stores uploaded media files. This directory is automatically generated when the first file is uploaded." }
                    ].map((item, i) => (
                      <div key={i} className="rounded-lg bg-muted/30 p-2.5 border border-border">
                        <code className="text-xs md:text-sm font-bold text-primary">{item.file}</code>
                        <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 6: Find IP Address */}
            <section className="mb-8 md:mb-12 scroll-mt-20" id="step-6">
              <StepSection
                stepNumber={6}
                title="Find Your IP"
                description="Get your computer's local IP address"
                icon={<Monitor className="h-6 w-6" />}
              >
                <div className="space-y-4">

                  <img
                    src="/img/ip.png"
                    alt="Node.js download page screenshot"
                    className="rounded-lg border border-border w-full"
                  />

                  <p className="text-sm md:text-base text-muted-foreground">
                    Find your IP address to put in <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">config.json</code>.
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-card border border-border p-4">
                      <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-2">
                        <Laptop className="h-4 w-4" /> Windows
                      </h4>
                      <CodeBlock language="bash">ipconfig</CodeBlock>
                      <p className="text-xs text-muted-foreground mt-2">
                        Look for <strong>IPv4 Address</strong> under your adapter.
                      </p>
                    </div>

                    <div className="rounded-lg bg-card border border-border p-4">
                      <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-2">
                        <Terminal className="h-4 w-4" /> Mac / Linux
                      </h4>
                      <CodeBlock language="bash">ifconfig | grep "inet "</CodeBlock>
                      <p className="text-xs text-muted-foreground mt-2">
                        Look for address starting with <code className="bg-muted px-1 py-0.5 rounded">192.168.x.x</code>
                      </p>
                    </div>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 7: Start Server */}
            <section className="mb-8 md:mb-12 scroll-mt-20" id="step-7">
              <StepSection
                stepNumber={7}
                title="Start Server"
                description="Run the MediaSync server"
                icon={<Play className="h-6 w-6" />}
              >
                <div className="space-y-4">

                  <img
                    src="/img/start.png"
                    alt="Node.js download page screenshot"
                    className="rounded-lg border border-border w-full"
                  />

                  <p className="text-sm md:text-base text-muted-foreground">
                    Start the server in your terminal:
                  </p>

                  <CodeBlock language="bash">node server.js</CodeBlock>

                  <p className="text-sm text-muted-foreground">
                    You should see a success banner:
                  </p>

                  <CodeBlock language="text">{`  Status:       Running
  Server IP:    192.168.1.100
  Port:         8000
  ...
  Waiting for connections...`}</CodeBlock>

                  <div className="grid gap-3 sm:grid-cols-2 pt-2">
                    <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-3">
                      <h4 className="font-medium text-sm text-green-700 dark:text-green-400 mb-1">Controller URL</h4>
                      <p className="text-xs text-muted-foreground">For your phone (to control)</p>
                    </div>
                    <div className="rounded-lg bg-blue-500/10 border border-blue-500/20 p-3">
                      <h4 className="font-medium text-sm text-blue-700 dark:text-blue-400 mb-1">Client URL</h4>
                      <p className="text-xs text-muted-foreground">For viewer devices</p>
                    </div>
                  </div>
                </div>
              </StepSection>
            </section>

            {/* Step 8: Connect Devices */}
            <section className="mb-8 md:mb-12 scroll-mt-20" id="step-8">
              <StepSection
                stepNumber={8}
                title="Controller Dashboard"
                description="Control playback and manage all connected devices"
                icon={<Monitor className="h-6 w-6" />}
              >
                <div className="space-y-4">

                <img
                    src="/img/cond.png"
                    alt="Node.js download page screenshot"
                    className="rounded-lg border border-border w-full"
                  />

                  <div className="space-y-3">
                    {[
                      { title: "Create Session", desc: "Start a new sync session from the controller." },
                      { title: "Share QR Code", desc: "Let viewers join instantly by scanning the QR." },
                      { title: "Control Playback", desc: "Play, pause, seek, or change media globally." },
                      { title: "Monitor Devices", desc: "See all connected clients in real time." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground shrink-0 text-xs font-bold mt-0.5">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-foreground">{item.title}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg bg-blue-500/10 border border-blue-500/20 p-4 text-center">
                    <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
                      You’re the Controller
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Any action here syncs instantly across all devices.
                    </p>
                  </div>
                </div>
              </StepSection>
            </section>

            <section className="mb-8 md:mb-12 scroll-mt-20" id="step-9">
              <StepSection
                stepNumber={9}
                title="Client Dashboard"
                description="Join the session and stay perfectly in sync"
                icon={<Smartphone className="h-6 w-6" />}
              >
                <div className="space-y-4">

                <img
                    src="/img/cld.png"
                    alt="Node.js download page screenshot"
                    className="rounded-lg border border-border w-full"
                  />

                  <div className="space-y-3">
                    {[
                      { title: "Join via QR", desc: "Scan the controller QR to enter the session." },
                      { title: "Auto Sync", desc: "Playback syncs automatically with the controller." },
                      { title: "Live Status", desc: "See current media, time, and connection status." },
                      { title: "Zero Control Hassle", desc: "Sit back—no manual controls needed." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-secondary text-secondary-foreground shrink-0 text-xs font-bold mt-0.5">
                          {i + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-foreground">{item.title}</h4>
                          <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg bg-green-500/10 border border-green-500/20 p-4 text-center">
                    <p className="text-sm font-medium text-green-700 dark:text-green-400">
                       Synced & Ready
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Your screen is now perfectly aligned with the controller.
                    </p>
                  </div>
                </div>
              </StepSection>
            </section>

            <DocNavigation
              previous={{ title: "Installation", href: "/docs/getting-started/installation" }}
              next={{ title: "Network Requirements", href: "/docs/getting-started/network" }}
            />
          </main>

          {/* Table of Contents - Hidden on mobile/tablet, visible on large screens */}
          <div className="hidden xl:block w-64 shrink-0 border-l border-border h-[calc(100vh-3.5rem)] sticky top-14 p-6">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>
      <Footer />

      {/* Floating Action Button (Mobile Only) */}
      <Button
        size="icon"
        className="fixed bottom-8 right-8 h-14 w-14 rounded-full shadow-2xl z-40 lg:hidden bg-blue-600 hover:bg-blue-700 text-white"
        onClick={() => setMobileMenuOpen(true)}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open Menu</span>
      </Button>
    </div>
  );
};

export default SetupGuidePage;