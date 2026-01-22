import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Gauge, Cpu, Zap, Settings } from 'lucide-react';

const ConfigPerformance = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'sync-interval', title: 'Sync Interval Tuning', level: 2 },
    { id: 'client-limits', title: 'Client Guidelines', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Configuration', href: '/docs/config/overview' },
          { label: 'Performance Tuning' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Performance Tuning
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Balance synchronization responsiveness with system resource usage.
          </p>

          {/* OVERVIEW */}
          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>

            <p className="text-muted-foreground">
              Media Sync uses periodic state broadcasts to keep all clients aligned.
              Performance tuning controls how often those updates are sent and how
              many clients the system is expected to handle comfortably.
            </p>
          </section>

          {/* SYNC INTERVAL */}
          <section id="sync-interval" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Sync Interval Tuning</h2>
            </div>

            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Interval</th>
                  <th className="text-left py-3 px-4">Behavior</th>
                  <th className="text-left py-3 px-4">CPU Impact</th>
                  <th className="text-left py-3 px-4">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">200–300ms</td>
                  <td className="py-3 px-4">
                    Very frequent corrections
                  </td>
                  <td className="py-3 px-4">High</td>
                  <td className="py-3 px-4">
                    Small groups, strong hardware
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">500ms</td>
                  <td className="py-3 px-4">
                    Balanced responsiveness
                  </td>
                  <td className="py-3 px-4">Medium</td>
                  <td className="py-3 px-4">
                    Default, general usage
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">1000ms</td>
                  <td className="py-3 px-4">
                    Relaxed sync updates
                  </td>
                  <td className="py-3 px-4">Low</td>
                  <td className="py-3 px-4">
                    Larger groups
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-3 text-xs text-muted-foreground">
              Lower values increase update frequency but do not guarantee perfect
              frame-level alignment.
            </p>
          </section>

          {/* CLIENT GUIDELINES */}
          <section id="client-limits" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cpu className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Client Guidelines</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>
                <strong>1–5 clients:</strong> Very stable on most machines
              </li>
              <li>
                <strong>5–15 clients:</strong> Typical classroom or group setup
              </li>
              <li>
                <strong>15–25 clients:</strong> Requires good WiFi and host performance
              </li>
            </ul>
          </section>

          <DocNavigation
            previous={{ title: 'Config Options', href: '/docs/config/options' }}
            next={{ title: 'Security Model', href: '/docs/config/security' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default ConfigPerformance;
