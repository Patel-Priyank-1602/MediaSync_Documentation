import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Activity, Gauge, AlertTriangle, CheckCircle } from 'lucide-react';

const DashboardSyncHealth = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'health-indicators', title: 'Health Indicators', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Dashboard', href: '/docs/dashboard/status' },
        { label: 'Sync Health Indicators' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Sync Health Indicators</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Monitor synchronization quality across all connected devices.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground">Sync health indicators show how well devices are synchronized.</p>
          </section>

          <section id="health-indicators" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Gauge className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Health Indicators</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border rounded-lg border-green-500/30 bg-green-500/5">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <h4 className="font-medium text-green-600">Excellent Sync</h4>
                  <p className="text-sm text-muted-foreground">All clients within 100ms</p>
                </div>
              </div>
            </div>
          </section>

          <DocNavigation
            previous={{ title: "Playback Monitor", href: "/docs/dashboard/playback" }}
            next={{ title: "Config Overview", href: "/docs/config/overview" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default DashboardSyncHealth;