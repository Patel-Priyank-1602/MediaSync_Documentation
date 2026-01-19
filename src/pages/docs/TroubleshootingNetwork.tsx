import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Wifi, Shield } from 'lucide-react';

const TroubleshootingNetwork = () => {
  const tocItems = [
    { id: 'connectivity', title: 'Connectivity Issues', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Troubleshooting', href: '/docs/troubleshooting/errors' },
        { label: 'Network Problems' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Network Problems</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Diagnose and resolve network-related issues.
          </p>

          <section id="connectivity" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Connectivity Issues</h2>
            </div>
            <p className="text-muted-foreground">Ensure all devices are on the same network.</p>
          </section>

          <DocNavigation
            previous={{ title: "Media Issues", href: "/docs/troubleshooting/media" }}
            next={{ title: "Devices FAQ", href: "/docs/faq/devices" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default TroubleshootingNetwork;