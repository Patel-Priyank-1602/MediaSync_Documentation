import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { QrCode, Wifi, Smartphone, Scan } from 'lucide-react';

const FeaturesQRCode = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'wifi-qr', title: 'WiFi QR Code', level: 2 },
    { id: 'client-qr', title: 'Client Page QR', level: 2 },
    { id: 'scanning', title: 'How to Scan', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Features', href: '/docs/features/youtube' },
        { label: 'QR Code Device Join' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">QR Code Device Join</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Instant device connection without typing URLs or passwords.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The controller automatically generates QR codes for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>WiFi/Hotspot connection</li>
              <li>Controller page access</li>
              <li>Client page access</li>
            </ul>
          </section>

          <section id="wifi-qr" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">WiFi QR Code</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The WiFi QR code encodes your network credentials from <code className="bg-muted px-2 py-1 rounded">config.json</code>:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Network name (SSID)</li>
              <li>Password</li>
              <li>Security type</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              When scanned, the device will automatically connect to the network.
            </p>
          </section>

          <section id="client-qr" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Client Page QR</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The client QR code contains the full URL to the client page:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>http://[HOST_IP]:3000/client.html</code>
            </pre>
            <p className="text-muted-foreground mt-4">
              Scanning opens the browser directly to the synchronized player.
            </p>
          </section>

          <section id="scanning" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Scan className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">How to Scan</h2>
            </div>
            <div className="grid gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">iPhone</h4>
                <p className="text-sm text-muted-foreground">Open Camera app → Point at QR → Tap notification</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Android</h4>
                <p className="text-sm text-muted-foreground">Open Camera or Google Lens → Scan → Tap link</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Laptop</h4>
                <p className="text-sm text-muted-foreground">Use a QR scanner app or browser extension</p>
              </div>
            </div>
          </section>

          <DocNavigation
            previous={{ title: "Seek & Drift", href: "/docs/features/seek-drift" }}
            next={{ title: "Multi-Client", href: "/docs/features/multi-client" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FeaturesQRCode;