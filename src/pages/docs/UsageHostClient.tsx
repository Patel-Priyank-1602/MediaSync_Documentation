import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Crown, Users } from 'lucide-react';

const UsageHostClient = () => {
  const tocItems = [
    { id: 'host-role', title: 'Host Role', level: 2 },
    { id: 'client-role', title: 'Client Role', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Usage Guide', href: '/docs/usage/controller' },
        { label: 'Host vs Client Behavior' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Host vs Client Behavior</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Understanding roles and capabilities in Media Sync Server.
          </p>

          <section id="host-role" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Crown className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Host Role</h2>
            </div>
            <p className="text-muted-foreground">Host controls playback for all clients.</p>
          </section>

          <section id="client-role" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Client Role</h2>
            </div>
            <p className="text-muted-foreground">Clients receive sync commands via WebSocket.</p>
          </section>

          <DocNavigation
            previous={{ title: "Playback Controls", href: "/docs/usage/playback" }}
            next={{ title: "YouTube Sync", href: "/docs/features/youtube" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default UsageHostClient;