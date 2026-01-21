import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Play, Pause, SkipForward, RotateCcw } from 'lucide-react';

const UsagePlaybackControls = () => {
  const tocItems = [
    { id: 'basic-controls', title: 'Basic Controls', level: 2 },
    { id: 'sync-behavior', title: 'Synchronization Behavior', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Usage Guide', href: '/docs/usage/controller' },
          { label: 'Playback Controls' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Playback Controls
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Learn how playback controls work to keep all clients perfectly synchronized.
          </p>

          {/* BASIC CONTROLS */}
          <section id="basic-controls" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Basic Controls</h2>
            </div>

            <p className="text-muted-foreground mb-6">
              Playback controls are issued from the <strong className="text-foreground">
              controller</strong> and applied simultaneously to all connected clients.
            </p>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Play className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  <strong className="text-foreground">Play</strong> – Starts or resumes media
                  playback on all clients at the same time.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Pause className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  <strong className="text-foreground">Pause</strong> – Pauses playback on all
                  clients at the current timestamp.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <SkipForward className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  <strong className="text-foreground">Seek</strong> – Jumps all clients to a
                  specific timestamp in the media.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <RotateCcw className="h-5 w-5 text-primary mt-0.5" />
                <span>
                  <strong className="text-foreground">Restart</strong> – Resets playback to
                  the beginning and starts playing again.
                </span>
              </li>
            </ul>
          </section>

          {/* SYNC BEHAVIOR */}
          <section id="sync-behavior" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Synchronization Behavior
            </h2>

            <p className="text-muted-foreground mb-4">
              Media Sync Server uses a centralized state model to ensure consistency
              across all devices.
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Playback state is maintained on the server</li>
              <li>• All commands are broadcast in real time using WebSockets</li>
              <li>• New clients automatically sync to the current playback position</li>
              <li>• Clients cannot override or desynchronize playback</li>
            </ul>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Tip:</strong> If a client falls out of sync
                due to network lag, issuing a <em>Seek</em> or <em>Restart</em> command will
                immediately realign all clients.
              </p>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Joining as a Client', href: '/docs/usage/joining' }}
            next={{ title: 'Client Role', href: '/docs/usage/client-role' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default UsagePlaybackControls;
