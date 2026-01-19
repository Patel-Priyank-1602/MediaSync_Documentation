import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Users, Activity, Clock, Signal } from 'lucide-react';

const DashboardClientStatus = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'client-info', title: 'Client Information', level: 2 },
    { id: 'connection-states', title: 'Connection States', level: 2 },
    { id: 'monitoring', title: 'Real-Time Monitoring', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Dashboard', href: '/docs/dashboard/status' },
        { label: 'Live Client Status' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Live Client Status</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Monitor all connected clients in real-time from the controller dashboard.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The client status panel provides a real-time view of all connected devices, helping you ensure everyone is ready for synchronized playback.
            </p>
          </section>

          <section id="client-info" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Client Information</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              For each connected client, you can see:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">👥 Count</h4>
                <p className="text-sm text-muted-foreground">Total number of connected clients</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">🔗 Connection Status</h4>
                <p className="text-sm text-muted-foreground">Active/Inactive indicator</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">⏱️ Join Time</h4>
                <p className="text-sm text-muted-foreground">When the client connected</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">📊 Sync Status</h4>
                <p className="text-sm text-muted-foreground">Whether client is in sync</p>
              </div>
            </div>
          </section>

          <section id="connection-states" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Signal className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Connection States</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <span className="font-medium">Connected</span>
                  <p className="text-sm text-muted-foreground">Client is active and receiving sync commands</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div>
                  <span className="font-medium">Reconnecting</span>
                  <p className="text-sm text-muted-foreground">Client lost connection, attempting to reconnect</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div>
                  <span className="font-medium">Disconnected</span>
                  <p className="text-sm text-muted-foreground">Client has left the session</p>
                </div>
              </div>
            </div>
          </section>

          <section id="monitoring" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Real-Time Monitoring</h2>
            </div>
            <p className="text-muted-foreground">
              The dashboard updates automatically as clients join and leave. No manual refresh needed.
            </p>
          </section>

          <DocNavigation
            previous={{ title: "Multi-Client", href: "/docs/features/multi-client" }}
            next={{ title: "Playback Monitor", href: "/docs/dashboard/playback" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default DashboardClientStatus;