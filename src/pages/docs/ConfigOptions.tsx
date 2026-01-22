import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { TableOfContents } from '../../components/docs/TableOfContents';
import { DocNavigation } from '../../components/docs/DocNavigation';
import { Settings, Wifi, Server, Shield } from 'lucide-react';

const ConfigOptions = () => {
  const tocItems = [
    { id: 'network', title: 'Network Settings', level: 2 },
    { id: 'server', title: 'Server Settings', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Configuration', href: '/docs/config/overview' },
          { label: 'All Configuration Options' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            All Configuration Options
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Complete reference of supported <code>config.json</code> parameters.
          </p>

          {/* NETWORK SETTINGS */}
          <section id="network" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Network Settings</h2>
            </div>

            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Option</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4"><code>WIFI_SSID</code></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">
                    WiFi name displayed in QR code
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4"><code>WIFI_PASSWORD</code></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">
                    WiFi password embedded in QR code
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4"><code>HOTSPOT_IP</code></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">
                    Server IP used to generate controller & client URLs
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="mt-3 text-xs text-muted-foreground">
              These values do not modify system network settings.
            </p>
          </section>

          {/* SERVER SETTINGS */}
          <section id="server" className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Server Settings</h2>
            </div>

            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Option</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Default</th>
                  <th className="text-left py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4"><code>port</code></td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">3000</td>
                  <td className="py-3 px-4">
                    HTTP server listening port
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <DocNavigation
            previous={{ title: 'Config Overview', href: '/docs/config/overview' }}
            next={{ title: 'Performance Tuning', href: '/docs/config/performance' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default ConfigOptions;
