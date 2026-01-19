import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const ConfigSecurity = () => {
  const tocItems = [
    { id: 'overview', title: 'Security Overview', level: 2 },
    { id: 'network-security', title: 'Network Security', level: 2 },
    { id: 'password-protection', title: 'Password Protection', level: 2 },
    { id: 'best-practices', title: 'Best Practices', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Configuration', href: '/docs/config/overview' },
        { label: 'Security Settings' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Security Settings</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Secure your Media Sync Server installation.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Security Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Media Sync Server is designed for trusted local networks. It doesn't include authentication by default, as it's meant for private, controlled environments.
            </p>
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm"><strong>⚠️ Warning:</strong> Never expose this server directly to the internet without additional security measures.</p>
            </div>
          </section>

          <section id="network-security" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Network Security</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use WPA2 or WPA3 for your WiFi network</li>
              <li>Create a separate guest network for media sync</li>
              <li>Enable firewall on the host machine</li>
              <li>Limit access to the server port (default 3000)</li>
            </ul>
          </section>

          <section id="password-protection" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Password Protection</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Your WiFi password is stored in <code className="bg-muted px-2 py-1 rounded">config.json</code> and used for QR code generation:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use a strong, unique password</li>
              <li>Don't commit config.json to public repositories</li>
              <li>Add config.json to .gitignore</li>
            </ul>
          </section>

          <section id="best-practices" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Best Practices</h2>
            </div>
            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">✅ Do</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Use on trusted local networks only</li>
                  <li>Keep server software updated</li>
                  <li>Monitor connected clients</li>
                  <li>Shut down when not in use</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">❌ Don't</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Expose to public internet</li>
                  <li>Share QR codes publicly</li>
                  <li>Use on untrusted networks</li>
                  <li>Store sensitive data on the server</li>
                </ul>
              </div>
            </div>
          </section>

          <DocNavigation
            previous={{ title: "Performance Tuning", href: "/docs/config/performance" }}
            next={{ title: "Common Errors", href: "/docs/troubleshooting/errors" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default ConfigSecurity;