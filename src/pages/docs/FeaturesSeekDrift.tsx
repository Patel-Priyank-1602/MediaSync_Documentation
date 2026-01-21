import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Timer, RefreshCw, Gauge, Settings } from 'lucide-react';

const FeaturesSeekDrift = () => {
  const tocItems = [
    { id: 'real-time-seek', title: 'Real-Time Seek', level: 2 },
    { id: 'drift-control', title: 'Drift Behavior', level: 2 },
    { id: 'sync-mechanism', title: 'Sync Mechanism', level: 2 },
    { id: 'tuning', title: 'Performance Notes', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Features', href: '/docs/features/youtube' },
          { label: 'Real-Time Seek & Sync Behavior' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Real-Time Seek & Sync Behavior
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            How Media Sync Server keeps playback aligned across all connected devices.
          </p>

          {/* REAL-TIME SEEK */}
          <section id="real-time-seek" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Timer className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Real-Time Seek</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              When the host seeks to a new position, the action is immediately synchronized
              across all connected clients.
            </p>

            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Host triggers a seek action with a target timestamp</li>
              <li>Server updates the global media state</li>
              <li>Seek command is broadcast via WebSocket (Socket.IO)</li>
              <li>All clients execute the seek at nearly the same time</li>
            </ol>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Result:</strong> Fast, deterministic seeking
                without client-side conflicts.
              </p>
            </div>
          </section>

          {/* DRIFT BEHAVIOR */}
          <section id="drift-control" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Drift Behavior</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              Minor playback drift can occur over time due to external factors:
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Network latency variations</li>
              <li>Device and browser performance differences</li>
              <li>Media buffering and decoding delays</li>
            </ul>

            <p className="text-muted-foreground">
              Media Sync Server minimizes drift by using a <strong className="text-foreground">
              single authoritative host</strong> and event-based synchronization.
            </p>

            <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-sm">
                Automatic periodic drift correction is not enabled by default,
                but can be added as an advanced feature if needed.
              </p>
            </div>
          </section>

          {/* SYNC MECHANISM */}
          <section id="sync-mechanism" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Sync Mechanism</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              The Media Sync Server uses an <strong className="text-foreground">
              event-based synchronization model</strong>.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Single global media state stored on the server</li>
              <li>State updates sent on load, play, pause, seek, and restart</li>
              <li>Late-joining clients automatically receive current state</li>
              <li>No continuous polling or time reporting from clients</li>
            </ul>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                This approach keeps CPU usage low while maintaining reliable synchronization.
              </p>
            </div>
          </section>

          {/* PERFORMANCE NOTES */}
          <section id="tuning" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Performance Notes</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Action</th>
                    <th className="text-left py-3 px-4">Sync Accuracy</th>
                    <th className="text-left py-3 px-4">Resource Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Play / Pause</td>
                    <td className="py-3 px-4">High</td>
                    <td className="py-3 px-4">Low</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Seek / Restart</td>
                    <td className="py-3 px-4">Very High</td>
                    <td className="py-3 px-4">Low</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Late Join Sync</td>
                    <td className="py-3 px-4">High</td>
                    <td className="py-3 px-4">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Local Audio', href: '/docs/features/local-audio' }}
            next={{ title: 'QR Code', href: '/docs/features/qr-code' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FeaturesSeekDrift;
