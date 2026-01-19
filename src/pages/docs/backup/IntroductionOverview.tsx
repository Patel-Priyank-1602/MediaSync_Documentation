import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { Video, Music, QrCode, Users, Zap, Wifi } from "lucide-react";

const tocItems = [
  { id: "what-is", title: "What is Media Sync Server?", level: 2 },
  { id: "key-features", title: "Key Features", level: 2 },
  { id: "tech-stack", title: "Tech Stack", level: 2 },
  { id: "how-it-works", title: "How It Works", level: 2 },
];

const IntroductionOverview = () => {
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
                { label: "Introduction" },
                { label: "Overview" },
              ]}
            />

            <div className="flex gap-8">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
                  Overview
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  A comprehensive introduction to the Media Sync Server and its capabilities.
                </p>

                <section id="what-is" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    What is Media Sync Server?
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    The <strong className="text-foreground">Real-Time Sync Media Server</strong> is a 
                    self-hosted Node.js server designed to synchronize YouTube video, local video, 
                    and local audio playback across multiple clients on a local network.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    It's perfect for creating a shared viewing experience where one person (the host) 
                    can control the video—play, pause, seek, and load—for everyone else, all in real-time.
                  </p>
                  <div className="bg-muted/50 border border-border rounded-lg p-4 mt-6">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">💡 Ideal for:</strong> Shared viewing sessions, 
                      classrooms, home theaters, group listening, and synchronized presentations.
                    </p>
                  </div>
                </section>

                <section id="key-features" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Key Features
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                      <Video className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-foreground">YouTube Sync</h3>
                        <p className="text-sm text-muted-foreground">
                          Load any YouTube video using URL or 11-character ID.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                      <Music className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-foreground">Local Media</h3>
                        <p className="text-sm text-muted-foreground">
                          Upload video/audio files and sync across clients.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                      <Zap className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-foreground">Core Controls</h3>
                        <p className="text-sm text-muted-foreground">
                          Play ▶️, Pause ⏸️, Seek ⏩, and Restart ⏮️.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                      <QrCode className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-foreground">QR Code Access</h3>
                        <p className="text-sm text-muted-foreground">
                          Generate QR codes for WiFi and page access.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                      <Users className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-foreground">Status Dashboard</h3>
                        <p className="text-sm text-muted-foreground">
                          Live count of connected clients.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-lg border border-border">
                      <Wifi className="h-6 w-6 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium text-foreground">Easy Setup</h3>
                        <p className="text-sm text-muted-foreground">
                          Simple config.json for WiFi credentials.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="tech-stack" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Tech Stack
                  </h2>
                  <div className="bg-muted rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-4 font-medium text-foreground">Component</th>
                          <th className="text-left p-4 font-medium text-foreground">Technology</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Server</td>
                          <td className="p-4 text-foreground">Node.js, Express, Socket.io</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-4 text-muted-foreground">Client</td>
                          <td className="p-4 text-foreground">HTML, CSS, JavaScript (Socket.io client)</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-muted-foreground">Utilities</td>
                          <td className="p-4 text-foreground">qrcode (for generating QR codes)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="how-it-works" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    How It Works
                  </h2>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">1</span>
                      <div>
                        <h3 className="font-medium text-foreground">Host opens the controller dashboard</h3>
                        <p className="text-sm text-muted-foreground">Access via http://localhost:3000</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">2</span>
                      <div>
                        <h3 className="font-medium text-foreground">Choose media type</h3>
                        <p className="text-sm text-muted-foreground">YouTube, Local Video, or Local Audio</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">3</span>
                      <div>
                        <h3 className="font-medium text-foreground">Load media and control playback</h3>
                        <p className="text-sm text-muted-foreground">Play, pause, seek from the controller</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">4</span>
                      <div>
                        <h3 className="font-medium text-foreground">Others connect via QR code or URL</h3>
                        <p className="text-sm text-muted-foreground">Scan QR or enter direct local IP URL</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">5</span>
                      <div>
                        <h3 className="font-medium text-foreground">All clients stay perfectly synchronized</h3>
                        <p className="text-sm text-muted-foreground">Real-time sync via WebSockets</p>
                      </div>
                    </li>
                  </ol>
                </section>

                <DocNavigation
                  previous={{ title: "Documentation", href: "/docs" }}
                  next={{ title: "Architecture & Flow", href: "/docs/introduction/architecture" }}
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

export default IntroductionOverview;
