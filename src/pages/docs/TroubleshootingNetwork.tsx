import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Wifi, Shield, AlertTriangle } from 'lucide-react';

const TroubleshootingNetwork = () => {
  const tocItems = [
    { id: 'connectivity', title: 'Connectivity Issues', level: 2 },
    { id: 'firewall', title: 'Firewall & Permissions', level: 2 },
    { id: 'best-practices', title: 'Best Practices', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Troubleshooting', href: '/docs/troubleshooting/errors' },
          { label: 'Network Problems' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Network Problems</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Fix connection issues between the controller and client devices.
          </p>

          {/* CONNECTIVITY */}
          <section id="connectivity" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Connectivity Issues</h2>
            </div>

            <p className="text-muted-foreground mb-3">
              Media Sync works only on a shared local network.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>All devices must be on the same WiFi or hotspot</li>
              <li>Do not mix <code className="bg-muted px-1 rounded">localhost</code> and IP access</li>
              <li>VPNs must be disabled on all devices</li>
              <li>Use the host machine’s local IP address</li>
            </ul>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Tip: If clients can open the page but don’t sync, the WebSocket
                connection is being blocked.
              </p>
            </div>
          </section>

          {/* FIREWALL */}
          <section id="firewall" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Firewall & Permissions</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Allow inbound connections on the server port (default: 3000)</li>
              <li>Grant Node.js network access when prompted</li>
              <li>Disable aggressive firewall rules temporarily for testing</li>
            </ul>

            <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Windows Defender and macOS Firewall are the most common blockers.
              </p>
            </div>
          </section>

          {/* BEST PRACTICES */}
          <section id="best-practices" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold">Best Practices</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use a stable WiFi router or hotspot</li>
              <li>Prefer 5GHz WiFi for lower latency</li>
              <li>Restart router if devices fail to discover the server</li>
              <li>Keep the host device plugged in and awake</li>
            </ul>
          </section>

          <DocNavigation
            previous={{ title: 'Media Issues', href: '/docs/troubleshooting/media' }}
            next={{ title: 'Devices FAQ', href: '/docs/faq/devices' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default TroubleshootingNetwork;
