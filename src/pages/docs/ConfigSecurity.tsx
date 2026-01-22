import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const ConfigSecurity = () => {
  const tocItems = [
    { id: 'overview', title: 'Security Overview', level: 2 },
    { id: 'network-security', title: 'Network Security', level: 2 },
    { id: 'wifi-credentials', title: 'WiFi Credential Handling', level: 2 },
    { id: 'best-practices', title: 'Best Practices', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Configuration', href: '/docs/config/overview' },
          { label: 'Security Model' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Security Model
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Understanding the security assumptions and safe usage of Media Sync Server.
          </p>

          {/* OVERVIEW */}
          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Security Overview</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              Media Sync Server is designed for use on <strong>trusted local networks</strong>.
              It does not include authentication, user accounts, or access control by design.
            </p>

            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm">
                <strong>⚠️ Important:</strong> This project assumes all connected devices are trusted.
                It should never be exposed directly to the public internet.
              </p>
            </div>
          </section>

          {/* NETWORK SECURITY */}
          <section id="network-security" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Network Security</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use WPA2 or WPA3 secured WiFi networks</li>
              <li>Prefer a private hotspot or closed LAN</li>
              <li>Keep the server accessible only inside the local network</li>
              <li>Allow inbound connections only on the server port</li>
            </ul>

            <p className="mt-3 text-sm text-muted-foreground">
              Network isolation is the primary security boundary for Media Sync.
            </p>
          </section>

          {/* WIFI CREDENTIALS */}
          <section id="wifi-credentials" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">WiFi Credential Handling</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              WiFi credentials stored in
              <code className="bg-muted px-2 py-1 rounded ml-1">config.json</code>
              are used only to generate QR codes for easier device onboarding.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Credentials are not transmitted to any external service</li>
              <li>QR codes are for convenience, not authentication</li>
              <li>Anyone with access to the QR code can join the network</li>
            </ul>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Do not commit <code className="bg-muted px-1 rounded">config.json</code> to public repositories.
                Always add it to <code className="bg-muted px-1 rounded">.gitignore</code>.
              </p>
            </div>
          </section>

          {/* BEST PRACTICES */}
          <section id="best-practices" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Best Practices</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">✅ Recommended</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Run only on trusted local networks</li>
                  <li>Shut down the server when not in use</li>
                  <li>Monitor connected devices from controller</li>
                  <li>Rotate WiFi password if shared widely</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">❌ Avoid</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground">
                  <li>Exposing the server via port forwarding</li>
                  <li>Sharing QR codes publicly</li>
                  <li>Using on open or public WiFi</li>
                  <li>Assuming built-in authentication exists</li>
                </ul>
              </div>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Performance Tuning', href: '/docs/config/performance' }}
            next={{ title: 'Common Errors', href: '/docs/troubleshooting/errors' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default ConfigSecurity;
