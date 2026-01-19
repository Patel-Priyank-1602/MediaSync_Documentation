import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Users, Network, Shield, Zap } from 'lucide-react';

const FeaturesMultiClient = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'connection-handling', title: 'Connection Handling', level: 2 },
    { id: 'scalability', title: 'Scalability', level: 2 },
    { id: 'best-practices', title: 'Best Practices', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Features', href: '/docs/features/youtube' },
        { label: 'Multi-Client Handling' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Multi-Client Handling</h1>
          <p className="text-lg text-muted-foreground mb-8">
            How the server manages multiple simultaneous connections.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Media Sync Server supports multiple simultaneous client connections. Each client maintains its own WebSocket connection to the server, receiving real-time sync commands.
            </p>
            <div className="p-4 border rounded-lg bg-card">
              <p className="text-sm"><strong>Default limit:</strong> 20 clients (configurable in config.json)</p>
            </div>
          </section>

          <section id="connection-handling" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Connection Handling</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Auto-reconnect:</strong> Clients automatically attempt to reconnect if disconnected</li>
              <li><strong>Late join:</strong> New clients sync to current playback state immediately</li>
              <li><strong>Graceful disconnect:</strong> Disconnected clients don't affect other viewers</li>
              <li><strong>Live count:</strong> Controller shows real-time connected client count</li>
            </ul>
          </section>

          <section id="scalability" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Scalability</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Clients</th>
                    <th className="text-left py-3 px-4">Performance</th>
                    <th className="text-left py-3 px-4">Recommended For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">1-5</td>
                    <td className="py-3 px-4">Excellent</td>
                    <td className="py-3 px-4">Home use</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">5-15</td>
                    <td className="py-3 px-4">Very Good</td>
                    <td className="py-3 px-4">Classrooms, meetings</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">15-20</td>
                    <td className="py-3 px-4">Good</td>
                    <td className="py-3 px-4">Events</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">20+</td>
                    <td className="py-3 px-4">May vary</td>
                    <td className="py-3 px-4">Increase resources</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="best-practices" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Best Practices</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use a dedicated host device with good network connection</li>
              <li>Increase <code className="bg-muted px-1 rounded">maxClients</code> in config for larger groups</li>
              <li>Monitor client count before starting playback</li>
              <li>Use wired ethernet for host when possible</li>
            </ul>
          </section>

          <DocNavigation
            previous={{ title: "QR Code", href: "/docs/features/qr-code" }}
            next={{ title: "Client Status", href: "/docs/dashboard/status" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FeaturesMultiClient;