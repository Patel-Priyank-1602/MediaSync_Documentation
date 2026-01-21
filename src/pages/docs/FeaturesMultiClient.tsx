import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Users, Network, Shield, Zap } from 'lucide-react';

const FeaturesMultiClient = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'connection-handling', title: 'Connection Handling', level: 2 },
    { id: 'scalability', title: 'Scalability Considerations', level: 2 },
    { id: 'best-practices', title: 'Best Practices', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Features', href: '/docs/features/youtube' },
          { label: 'Multi-Client Handling' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Multi-Client Handling
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            How Media Sync Server manages multiple connected client devices.
          </p>

          {/* OVERVIEW */}
          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              Media Sync Server supports multiple simultaneous client connections
              over WebSocket (Socket.IO). Each client maintains an independent
              connection while receiving the same synchronized playback commands.
            </p>

            <div className="p-4 border rounded-lg bg-card">
              <p className="text-sm text-muted-foreground">
                The maximum number of clients depends on your device performance,
                network quality, and media type being played.
              </p>
            </div>
          </section>

          {/* CONNECTION HANDLING */}
          <section id="connection-handling" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Network className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Connection Handling</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>Persistent connections:</strong> Each client maintains
                an active WebSocket connection
              </li>
              <li>
                <strong>Late join sync:</strong> New clients automatically receive
                the current playback state on connection
              </li>
              <li>
                <strong>Graceful disconnect:</strong> Client disconnects do not
                affect other connected devices
              </li>
              <li>
                <strong>Live visibility:</strong> Controller displays real-time
                client and controller counts
              </li>
            </ul>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Socket.IO handles reconnection attempts automatically when
                network interruptions occur.
              </p>
            </div>
          </section>

          {/* SCALABILITY */}
          <section id="scalability" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">
                Scalability Considerations
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Clients</th>
                    <th className="text-left py-3 px-4">Expected Performance</th>
                    <th className="text-left py-3 px-4">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">1–5</td>
                    <td className="py-3 px-4">Excellent</td>
                    <td className="py-3 px-4">Home, testing</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">5–15</td>
                    <td className="py-3 px-4">Very good</td>
                    <td className="py-3 px-4">Classrooms, meetings</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">15+</td>
                    <td className="py-3 px-4">Depends on network</td>
                    <td className="py-3 px-4">Events, demos</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* BEST PRACTICES */}
          <section id="best-practices" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Best Practices</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use a stable host device with good CPU and network performance</li>
              <li>Prefer wired Ethernet or strong WiFi for the server</li>
              <li>Start playback only after all clients have joined</li>
              <li>Avoid heavy background downloads on the host machine</li>
            </ul>
          </section>

          <DocNavigation
            previous={{ title: 'QR Code', href: '/docs/features/qr-code' }}
            next={{ title: 'Client Status', href: '/docs/dashboard/status' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FeaturesMultiClient;
