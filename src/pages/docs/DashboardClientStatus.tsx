import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Users, Activity, Signal, Clock } from 'lucide-react';

const DashboardClientStatus = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'client-details', title: 'Client Details', level: 2 },
    { id: 'connection-states', title: 'Connection States', level: 2 },
    { id: 'real-time-updates', title: 'Real-Time Updates', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Dashboard', href: '/docs/dashboard/status' },
          { label: 'Live Client Status' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Live Client Status
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Monitor connected playback devices in real time from the controller dashboard.
          </p>

          {/* OVERVIEW */}
          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>

            <p className="text-muted-foreground">
              The Live Client Status panel provides visibility into all devices
              currently connected as playback clients. This helps the host
              confirm readiness before starting synchronized playback.
            </p>
          </section>

          {/* CLIENT DETAILS */}
          <section id="client-details" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Client Details</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted/40 px-4 py-3">
                <p className="font-medium">Total Clients</p>
                <p className="text-sm text-muted-foreground">
                  Number of active playback clients
                </p>
              </div>

              <div className="rounded-lg bg-muted/40 px-4 py-3">
                <p className="font-medium">Connection Metadata</p>
                <p className="text-sm text-muted-foreground">
                  Client IP address and join time
                </p>
              </div>

              <div className="rounded-lg bg-muted/40 px-4 py-3">
                <p className="font-medium">Last Seen</p>
                <p className="text-sm text-muted-foreground">
                  Updated via heartbeat events
                </p>
              </div>

              <div className="rounded-lg bg-muted/40 px-4 py-3">
                <p className="font-medium">Live Changes</p>
                <p className="text-sm text-muted-foreground">
                  Updates as clients join or leave
                </p>
              </div>
            </div>
          </section>

          {/* CONNECTION STATES */}
          <section id="connection-states" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Signal className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Connection States</h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg bg-muted/40 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <p className="text-sm">
                  <strong>Connected</strong> — client is actively receiving sync commands
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-muted/40 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <p className="text-sm">
                  <strong>Disconnected</strong> — client has left the session
                </p>
              </div>
            </div>
          </section>

          {/* REAL-TIME UPDATES */}
          <section id="real-time-updates" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Real-Time Updates</h2>
            </div>

            <p className="text-muted-foreground text-sm">
              Client status updates automatically using WebSocket events
              such as connection, disconnection, and heartbeat signals.
              No page refresh is required.
            </p>
          </section>

          <DocNavigation
            previous={{ title: 'Multi-Client', href: '/docs/features/multi-client' }}
            next={{ title: 'Playback Monitor', href: '/docs/dashboard/playback' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default DashboardClientStatus;
