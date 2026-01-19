import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Play, Pause, SkipForward, RotateCcw } from 'lucide-react';

const UsagePlaybackControls = () => {
  const tocItems = [
    { id: 'basic-controls', title: 'Basic Controls', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Usage Guide', href: '/docs/usage/controller' },
        { label: 'Playback Controls' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Playback Controls</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Master the playback controls for seamless synchronization.
          </p>

          <section id="basic-controls" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Basic Controls</h2>
            </div>
            <p className="text-muted-foreground">Play, Pause, Seek, and Restart controls.</p>
          </section>

          <DocNavigation
            previous={{ title: "Joining as a Client", href: "/docs/usage/joining" }}
            next={{ title: "Host vs Client", href: "/docs/usage/host-client" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default UsagePlaybackControls;