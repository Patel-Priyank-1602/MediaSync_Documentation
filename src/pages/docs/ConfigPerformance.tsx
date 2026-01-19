import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Gauge, Cpu, Zap, Settings } from 'lucide-react';

const ConfigPerformance = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'sync-interval', title: 'Sync Interval Tuning', level: 2 },
    { id: 'client-limits', title: 'Client Limits', level: 2 },
    { id: 'recommended', title: 'Recommended Configs', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Configuration', href: '/docs/config/overview' },
        { label: 'Performance Tuning' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Performance Tuning</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Optimize server performance for your specific use case.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Performance tuning involves balancing sync precision against resource usage. The right configuration depends on your network quality, device count, and use case.
            </p>
          </section>

          <section id="sync-interval" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Sync Interval Tuning</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Interval</th>
                    <th className="text-left py-3 px-4">Sync Quality</th>
                    <th className="text-left py-3 px-4">CPU Load</th>
                    <th className="text-left py-3 px-4">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">200ms</td>
                    <td className="py-3 px-4">⭐⭐⭐⭐⭐</td>
                    <td className="py-3 px-4">High</td>
                    <td className="py-3 px-4">Critical sync (audio)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">500ms</td>
                    <td className="py-3 px-4">⭐⭐⭐⭐</td>
                    <td className="py-3 px-4">Medium</td>
                    <td className="py-3 px-4">General use</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">1000ms</td>
                    <td className="py-3 px-4">⭐⭐⭐</td>
                    <td className="py-3 px-4">Low</td>
                    <td className="py-3 px-4">Many clients</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="client-limits" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Client Limits</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Adjust <code className="bg-muted px-2 py-1 rounded">maxClients</code> based on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>5-10 clients:</strong> Low-end hardware, weak network</li>
              <li><strong>10-20 clients:</strong> Standard setup (default)</li>
              <li><strong>20-50 clients:</strong> Powerful host, excellent network</li>
            </ul>
          </section>

          <section id="recommended" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Recommended Configs</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">🏠 Home Theater</h4>
                <pre className="bg-muted p-3 rounded text-sm">
{`{
  "syncInterval": 300,
  "maxClients": 5
}`}
                </pre>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">🎓 Classroom</h4>
                <pre className="bg-muted p-3 rounded text-sm">
{`{
  "syncInterval": 500,
  "maxClients": 30
}`}
                </pre>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">🎉 Large Event</h4>
                <pre className="bg-muted p-3 rounded text-sm">
{`{
  "syncInterval": 1000,
  "maxClients": 50
}`}
                </pre>
              </div>
            </div>
          </section>

          <DocNavigation
            previous={{ title: "Config Options", href: "/docs/config/options" }}
            next={{ title: "Security Settings", href: "/docs/config/security" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default ConfigPerformance;