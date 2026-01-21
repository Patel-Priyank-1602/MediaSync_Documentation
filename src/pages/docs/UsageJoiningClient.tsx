import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Smartphone, QrCode, Globe, CheckCircle } from 'lucide-react';

const UsageJoiningClient = () => {
  const tocItems = [
    { id: 'connection-methods', title: 'Connection Methods', level: 2 },
    { id: 'qr-code', title: 'Using QR Code', level: 2 },
    { id: 'manual-url', title: 'Using Manual URL', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Usage Guide', href: '/docs/usage/controller' },
          { label: 'Joining as a Client' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Joining as a Client
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Learn how to connect your device to the Media Sync Server as a viewer.
          </p>

          {/* CONNECTION METHODS */}
          <section id="connection-methods" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Connection Methods</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              Client devices can join the Media Sync session using one of the following methods:
            </p>

            <ul className="space-y-3 text-muted-foreground">
              <li>• Scan the <strong className="text-foreground">Client QR Code</strong> from the controller dashboard</li>
              <li>• Open the <strong className="text-foreground">Client URL</strong> manually in a browser</li>
            </ul>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                All client devices must be connected to the <strong className="text-foreground">
                same local network</strong> as the server.
              </p>
            </div>
          </section>

          {/* QR CODE */}
          <section id="qr-code" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Using QR Code</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              This is the recommended and fastest way to join as a client.
            </p>

            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Scan the <strong className="text-foreground">WiFi QR Code</strong> shown on the controller screen</li>
              <li>Connect your device to the displayed WiFi network</li>
              <li>Scan the <strong className="text-foreground">Client QR Code</strong></li>
              <li>The client page will open automatically in your browser</li>
            </ol>

            <div className="mt-4 bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Once connected, the client will automatically synchronize with
                the current playback state.
              </p>
            </div>
          </section>

          {/* MANUAL URL */}
          <section id="manual-url" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Using Manual URL</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              If QR scanning is not available, you can join manually:
            </p>

            <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
              <li>Ensure your device is connected to the same WiFi network</li>
              <li>Open a modern web browser (Chrome, Firefox, Safari, Edge)</li>
              <li>Enter the client URL shown on the controller dashboard</li>
              <li>Press Enter to join the session</li>
            </ol>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Tip:</strong> On first load, browsers may
                require a user interaction (tap or click) to enable audio playback.
              </p>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Controller Dashboard', href: '/docs/usage/controller' }}
            next={{ title: 'Playback Controls', href: '/docs/usage/playback' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default UsageJoiningClient;
