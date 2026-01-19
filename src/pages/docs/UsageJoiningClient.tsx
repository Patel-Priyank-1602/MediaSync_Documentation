import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Smartphone, QrCode, Globe, CheckCircle } from 'lucide-react';

const UsageJoiningClient = () => {
  const tocItems = [
    { id: 'connection-methods', title: 'Connection Methods', level: 2 },
    { id: 'qr-code', title: 'Using QR Code', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Usage Guide', href: '/docs/usage/controller' },
        { label: 'Joining as a Client' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Joining as a Client</h1>
          <p className="text-lg text-muted-foreground mb-8">
            How to connect your device to Media Sync Server as a viewer.
          </p>

          <section id="connection-methods" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Connection Methods</h2>
            </div>
            <p className="text-muted-foreground">Scan QR code or enter URL manually.</p>
          </section>

          <section id="qr-code" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Using QR Code</h2>
            </div>
            <p className="text-muted-foreground">Scan WiFi QR code then Client QR code.</p>
          </section>

          <DocNavigation
            previous={{ title: "Controller Dashboard", href: "/docs/usage/controller" }}
            next={{ title: "Playback Controls", href: "/docs/usage/playback" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default UsageJoiningClient;