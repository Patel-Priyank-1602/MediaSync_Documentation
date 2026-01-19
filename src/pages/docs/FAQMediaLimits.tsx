import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { HardDrive, Film } from 'lucide-react';

const FAQMediaLimits = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'FAQ', href: '/docs/faq/devices' },
        { label: 'Media Size Limits' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Media Size Limits</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Understanding file size limitations and best practices.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <HardDrive className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground">No hard limit - depends on network speed and device capabilities.</p>
          </section>

          <DocNavigation
            previous={{ title: "Devices FAQ", href: "/docs/faq/devices" }}
            next={{ title: "Browser Compatibility", href: "/docs/faq/browsers" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FAQMediaLimits;