import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Film, Youtube } from 'lucide-react';

const TroubleshootingMedia = () => {
  const tocItems = [
    { id: 'youtube-issues', title: 'YouTube Issues', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Troubleshooting', href: '/docs/troubleshooting/errors' },
        { label: 'Media Loading Failures' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Media Loading Failures</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Fix issues with loading and playing media content.
          </p>

          <section id="youtube-issues" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <Youtube className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">YouTube Issues</h2>
            </div>
            <p className="text-muted-foreground">Video may have embedding disabled or be age-restricted.</p>
          </section>

          <DocNavigation
            previous={{ title: "Sync Delay Issues", href: "/docs/troubleshooting/sync-delay" }}
            next={{ title: "Network Problems", href: "/docs/troubleshooting/network" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default TroubleshootingMedia;