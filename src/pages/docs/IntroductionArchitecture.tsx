import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { Footer } from "@/components/layout/Footer";

const tocItems = [
  { id: "overview", title: "Architecture Overview", level: 2 },
  { id: "components", title: "Core Components", level: 2 },
  { id: "data-flow", title: "Data Flow", level: 2 },
  { id: "communication", title: "Communication Model", level: 2 },
];

const IntroductionArchitecture = () => {
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
                { label: "Introduction" },
                { label: "Architecture & Flow" },
              ]}
            />

            <div className="flex gap-8">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
                  Architecture & Flow
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Understanding how the Media Sync Server components work together.
                </p>

                <section id="overview" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Architecture Overview
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    The Media Sync Server follows a <strong className="text-foreground">hub-and-spoke model</strong> where 
                    the server acts as a central hub, and all clients (controller and viewers) connect as spokes.
                  </p>
                    <div className="my-6">
                    <img 
                      src="/arch.png" 
                      alt="Media Sync Server Architecture Diagram" 
                      className="w-full border border-border"
                    />
                    </div>
                </section>

                <section id="components" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Core Components
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="border border-border rounded-lg p-6">
                      <h3 className="text-lg font-medium text-foreground mb-2">1. Server (server.js)</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Express.js web server for static file serving</li>
                        <li>• Socket.io for real-time WebSocket communication</li>
                        <li>• QR code generation for easy access</li>
                        <li>• File upload handling for local media</li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-lg p-6">
                      <h3 className="text-lg font-medium text-foreground mb-2">2. Controller (controller.html)</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Master control interface for the host</li>
                        <li>• Media selection and loading</li>
                        <li>• Playback controls (play, pause, seek)</li>
                        <li>• Connected clients dashboard</li>
                      </ul>
                    </div>

                    <div className="border border-border rounded-lg p-6">
                      <h3 className="text-lg font-medium text-foreground mb-2">3. Client (client.html)</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Viewer interface that receives sync commands</li>
                        <li>• Media player (YouTube IFrame or HTML5 player)</li>
                        <li>• Automatic synchronization with server state</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="data-flow" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Data Flow
                  </h2>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm">1</span>
                      <div>
                        <h4 className="font-medium text-foreground">Controller Action</h4>
                        <p className="text-sm text-muted-foreground">Host performs an action (play, pause, seek, load media)</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm">2</span>
                      <div>
                        <h4 className="font-medium text-foreground">Event Emission</h4>
                        <p className="text-sm text-muted-foreground">Controller emits a Socket.io event to the server</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm">3</span>
                      <div>
                        <h4 className="font-medium text-foreground">Server Broadcast</h4>
                        <p className="text-sm text-muted-foreground">Server receives and broadcasts to all connected clients</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium text-sm">4</span>
                      <div>
                        <h4 className="font-medium text-foreground">Client Execution</h4>
                        <p className="text-sm text-muted-foreground">All clients execute the command simultaneously</p>
                      </div>
                    </li>
                  </ol>
                </section>

                <section id="communication" className="mb-12">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Communication Model
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    The server uses WebSockets via Socket.io for low-latency, bidirectional communication:
                  </p>
                  <div className="bg-muted rounded-lg p-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-3 font-medium text-foreground">Event</th>
                          <th className="text-left p-3 font-medium text-foreground">Direction</th>
                          <th className="text-left p-3 font-medium text-foreground">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="p-3 font-mono text-primary">play</td>
                          <td className="p-3 text-muted-foreground">Controller → Server → Clients</td>
                          <td className="p-3 text-muted-foreground">Resume playback</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3 font-mono text-primary">pause</td>
                          <td className="p-3 text-muted-foreground">Controller → Server → Clients</td>
                          <td className="p-3 text-muted-foreground">Pause playback</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3 font-mono text-primary">seek</td>
                          <td className="p-3 text-muted-foreground">Controller → Server → Clients</td>
                          <td className="p-3 text-muted-foreground">Jump to timestamp</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="p-3 font-mono text-primary">load</td>
                          <td className="p-3 text-muted-foreground">Controller → Server → Clients</td>
                          <td className="p-3 text-muted-foreground">Load new media</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono text-primary">clientCount</td>
                          <td className="p-3 text-muted-foreground">Server → Controller</td>
                          <td className="p-3 text-muted-foreground">Update client count</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <DocNavigation
                  previous={{ title: "Overview", href: "/docs/introduction/overview" }}
                  next={{ title: "Use Cases", href: "/docs/introduction/use-cases" }}
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

export default IntroductionArchitecture;
