import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Clock, Wifi } from 'lucide-react';

const TroubleshootingSyncDelay = () => {
  const tocItems = [
    { id: 'symptoms', title: 'Symptoms', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Troubleshooting', href: '/docs/troubleshooting/errors' },
        { label: 'Sync Delay Issues' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Sync Delay Issues</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Diagnose and fix synchronization delays between devices.
          </p>

          <section id="symptoms" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Symptoms</h2>
            </div>
            <p className="text-muted-foreground">Audio/video playing at different times on devices.</p>
          </section>

          <DocNavigation
            previous={{ title: "Common Errors", href: "/docs/troubleshooting/errors" }}
            next={{ title: "Media Issues", href: "/docs/troubleshooting/media" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default TroubleshootingSyncDelay;