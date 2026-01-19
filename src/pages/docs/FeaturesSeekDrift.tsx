import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Timer, RefreshCw, Gauge, Settings } from 'lucide-react';

const FeaturesSeekDrift = () => {
  const tocItems = [
    { id: 'real-time-seek', title: 'Real-Time Seek', level: 2 },
    { id: 'drift-control', title: 'Drift Control', level: 2 },
    { id: 'sync-mechanism', title: 'Sync Mechanism', level: 2 },
    { id: 'tuning', title: 'Performance Tuning', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Features', href: '/docs/features/youtube' },
        { label: 'Real-Time Seek & Drift' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Real-Time Seek & Drift Control</h1>
          <p className="text-lg text-muted-foreground mb-8">
            How the server maintains perfect synchronization across all devices.
          </p>

          <section id="real-time-seek" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Timer className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Real-Time Seek</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              When the host seeks to a new position, the command is instantly broadcast to all clients:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Host triggers seek action with target timestamp</li>
              <li>Server broadcasts seek event via WebSocket</li>
              <li>All clients receive and execute seek simultaneously</li>
              <li>Clients report back their new position</li>
            </ol>
          </section>

          <section id="drift-control" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Drift Control</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Over time, clients may drift out of sync due to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li>Network latency variations</li>
              <li>Browser performance differences</li>
              <li>Buffer/loading time discrepancies</li>
            </ul>
            <p className="text-muted-foreground">
              The server counters this with periodic sync pulses that correct minor drifts automatically.
            </p>
          </section>

          <section id="sync-mechanism" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Sync Mechanism</h2>
            </div>
            <div className="p-4 border rounded-lg bg-card">
              <pre className="text-sm overflow-x-auto">
{`// Sync pulse every X milliseconds
setInterval(() => {
  broadcast({
    type: 'sync',
    timestamp: currentTime,
    state: playbackState
  });
}, syncInterval);`}
              </pre>
            </div>
            <p className="text-muted-foreground mt-4">
              If a client's position differs from the host by more than a threshold, it automatically corrects.
            </p>
          </section>

          <section id="tuning" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Performance Tuning</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Interval</th>
                    <th className="text-left py-3 px-4">Sync Tightness</th>
                    <th className="text-left py-3 px-4">CPU Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">200ms</td>
                    <td className="py-3 px-4">Very tight</td>
                    <td className="py-3 px-4">High</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">500ms</td>
                    <td className="py-3 px-4">Balanced</td>
                    <td className="py-3 px-4">Medium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">1000ms</td>
                    <td className="py-3 px-4">Relaxed</td>
                    <td className="py-3 px-4">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <DocNavigation
            previous={{ title: "Local Audio", href: "/docs/features/local-audio" }}
            next={{ title: "QR Code", href: "/docs/features/qr-code" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FeaturesSeekDrift;