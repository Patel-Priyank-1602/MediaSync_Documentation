import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import {
  Play,
  Pause,
  MonitorPlay,
  Clock,
  Film,
  Volume2,
  VolumeX,
} from 'lucide-react';

const DashboardPlaybackMonitor = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'playback-state', title: 'Playback State', level: 2 },
    { id: 'timeline', title: 'Playback Timeline', level: 2 },
    { id: 'media-details', title: 'Media Details', level: 2 },
    { id: 'audio-state', title: 'Audio State', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Dashboard', href: '/docs/dashboard/status' },
          { label: 'Playback State Monitor' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Playback State Monitor
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Observe the current media playback state shared across all synchronized clients.
          </p>

          {/* OVERVIEW */}
          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MonitorPlay className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>

            <p className="text-muted-foreground">
              The Playback State Monitor reflects the server’s
              <strong className="text-foreground"> current media state</strong>.
              This state is broadcast to all clients and acts as the single
              source of truth for synchronized playback.
            </p>
          </section>

          {/* PLAYBACK STATE */}
          <section id="playback-state" className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Playback State</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted/40 px-4 py-3 flex gap-3 items-center">
                <Play className="h-5 w-5 text-green-500" />
                <div>
                  <p className="font-medium">Playing</p>
                  <p className="text-sm text-muted-foreground">
                    Media is actively playing
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-muted/40 px-4 py-3 flex gap-3 items-center">
                <Pause className="h-5 w-5 text-yellow-500" />
                <div>
                  <p className="font-medium">Paused</p>
                  <p className="text-sm text-muted-foreground">
                    Playback is temporarily stopped
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              The state is controlled exclusively by the host (controller).
            </p>
          </section>

          {/* TIMELINE */}
          <section id="timeline" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Playback Timeline</h2>
            </div>

            <p className="text-muted-foreground">
              Displays the current playback position (in seconds) tracked by the server.
              Seek and restart actions update this value in real time.
            </p>

            <div className="mt-4 rounded-lg bg-muted/40 px-4 py-3">
              <p className="font-medium">Current Time</p>
              <p className="text-sm text-muted-foreground">
                Synced across all clients
              </p>
            </div>
          </section>

          {/* MEDIA DETAILS */}
          <section id="media-details" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Film className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Media Details</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted/40 px-4 py-3">
                <p className="font-medium">Media Type</p>
                <p className="text-sm text-muted-foreground">
                  YouTube, local video, or local audio
                </p>
              </div>

              <div className="rounded-lg bg-muted/40 px-4 py-3">
                <p className="font-medium">Media Identifier</p>
                <p className="text-sm text-muted-foreground">
                  Video ID or file name
                </p>
              </div>
            </div>
          </section>

          {/* AUDIO STATE */}
          <section id="audio-state" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Volume2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Audio State</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted/40 px-4 py-3 flex gap-3 items-center">
                <Volume2 className="h-5 w-5" />
                <div>
                  <p className="font-medium">Volume Level</p>
                  <p className="text-sm text-muted-foreground">
                    Shared across all clients
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-muted/40 px-4 py-3 flex gap-3 items-center">
                <VolumeX className="h-5 w-5" />
                <div>
                  <p className="font-medium">Mute State</p>
                  <p className="text-sm text-muted-foreground">
                    Enabled or disabled globally
                  </p>
                </div>
              </div>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Client Status', href: '/docs/dashboard/status' }}
            next={{ title: 'Sync Health', href: '/docs/dashboard/sync-health' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default DashboardPlaybackMonitor;
