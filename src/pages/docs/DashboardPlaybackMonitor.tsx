import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Play, MonitorPlay, Clock, Film } from 'lucide-react';

const DashboardPlaybackMonitor = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'state-indicators', title: 'State Indicators', level: 2 },
    { id: 'timestamp-display', title: 'Timestamp Display', level: 2 },
    { id: 'media-info', title: 'Media Information', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Dashboard', href: '/docs/dashboard/status' },
        { label: 'Playback State Monitor' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Playback State Monitor</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Track the current playback state across all synchronized devices.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MonitorPlay className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The playback monitor shows the current state of media playback.
            </p>
          </section>

          <section id="state-indicators" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">State Indicators</h2>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <Play className="h-8 w-8 text-green-500" />
                <div>
                  <h4 className="font-medium">Playing</h4>
                  <p className="text-sm text-muted-foreground">Media is actively playing</p>
                </div>
              </div>
            </div>
          </section>

          <section id="timestamp-display" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Timestamp Display</h2>
            </div>
            <p className="text-muted-foreground">Current playback position is displayed in real-time.</p>
          </section>

          <section id="media-info" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Film className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Media Information</h2>
            </div>
            <p className="text-muted-foreground">Shows current media type and title.</p>
          </section>

          <DocNavigation
            previous={{ title: "Client Status", href: "/docs/dashboard/status" }}
            next={{ title: "Sync Health", href: "/docs/dashboard/sync-health" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default DashboardPlaybackMonitor;