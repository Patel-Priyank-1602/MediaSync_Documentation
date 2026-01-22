import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import {
  Activity,
  RefreshCw,
  Signal,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';

const DashboardSyncHealth = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'health-model', title: 'Sync Health Model', level: 2 },
    { id: 'indicators', title: 'Health Indicators', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Dashboard', href: '/docs/dashboard/status' },
          { label: 'Sync Health' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Sync Health
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Understand how well clients are staying aligned with the server’s
            playback state.
          </p>

          {/* OVERVIEW */}
          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>

            <p className="text-muted-foreground">
              Sync Health reflects whether all connected clients are actively
              following the server’s authoritative playback state.
              The system prioritizes consistency over precise latency measurement.
            </p>
          </section>

          {/* HEALTH MODEL */}
          <section id="health-model" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Sync Health Model</h2>
            </div>

            <div className="space-y-3">
              <div className="rounded-lg bg-muted/40 px-4 py-3">
                <p className="font-medium">Authoritative State</p>
                <p className="text-sm text-muted-foreground">
                  Server defines media, time, and play/pause state
                </p>
              </div>

              <div className="rounded-lg bg-muted/40 px-4 py-3">
                <p className="font-medium">Broadcast Commands</p>
                <p className="text-sm text-muted-foreground">
                  Clients receive updates via WebSocket
                </p>
              </div>

              <div className="rounded-lg bg-muted/40 px-4 py-3">
                <p className="font-medium">Periodic Sync</p>
                <p className="text-sm text-muted-foreground">
                  Sync pulses correct minor drift automatically
                </p>
              </div>
            </div>
          </section>

          {/* INDICATORS */}
          <section id="indicators" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Signal className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Health Indicators</h2>
            </div>

            <div className="space-y-4">
              {/* HEALTHY */}
              <div className="flex gap-4 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <p className="font-medium text-green-600">
                    Healthy Sync
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Clients are receiving commands and following server state
                  </p>
                </div>
              </div>

              {/* DEGRADED */}
              <div className="flex gap-4 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
                <AlertTriangle className="h-6 w-6 text-amber-500 mt-1" />
                <div>
                  <p className="font-medium text-amber-600">
                    Degraded Sync
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Some clients may be reconnecting or buffering
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Exact per-client drift values are not measured. Sync health is inferred
              from connection stability and command flow.
            </p>
          </section>

          <DocNavigation
            previous={{ title: 'Playback Monitor', href: '/docs/dashboard/playback' }}
            next={{ title: 'Config Overview', href: '/docs/config/overview' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default DashboardSyncHealth;
