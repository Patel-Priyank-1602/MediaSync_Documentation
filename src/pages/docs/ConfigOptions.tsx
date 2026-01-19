import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '../../components/docs/Breadcrumb';
import { TableOfContents } from '../../components/docs/TableOfContents';
import { DocNavigation } from '../../components/docs/DocNavigation';
import { Settings, Wifi, Server, Shield } from 'lucide-react';
import { Footer } from '../../components/layout/Footer';

const ConfigOptions = () => {
  const tocItems = [
    { id: 'network', title: 'Network Settings', level: 2 },
    { id: 'server', title: 'Server Settings', level: 2 },
    { id: 'sync', title: 'Sync Settings', level: 2 },
    { id: 'features', title: 'Feature Flags', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Configuration', href: '/docs/config/overview' },
        { label: 'All Configuration Options' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">All Configuration Options</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Complete reference of all available configuration parameters.
          </p>

          <section id="network" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Network Settings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
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
                    <td className="py-3 px-4">WiFi network name for QR code</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4"><code>WIFI_PASSWORD</code></td>
                    <td className="py-3 px-4">string</td>
                    <td className="py-3 px-4">WiFi password for QR code</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4"><code>HOTSPOT_IP</code></td>
                    <td className="py-3 px-4">string</td>
                    <td className="py-3 px-4">Server IP address</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="server" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Server Settings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
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
                    <td className="py-3 px-4">Server port number</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4"><code>maxClients</code></td>
                    <td className="py-3 px-4">number</td>
                    <td className="py-3 px-4">20</td>
                    <td className="py-3 px-4">Maximum connections allowed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="sync" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Sync Settings</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
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
                    <td className="py-3 px-4"><code>syncInterval</code></td>
                    <td className="py-3 px-4">number</td>
                    <td className="py-3 px-4">500</td>
                    <td className="py-3 px-4">Sync pulse interval (ms)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4"><code>driftThreshold</code></td>
                    <td className="py-3 px-4">number</td>
                    <td className="py-3 px-4">200</td>
                    <td className="py-3 px-4">Max drift before correction (ms)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="features" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Feature Flags</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
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
                    <td className="py-3 px-4"><code>enableQRCode</code></td>
                    <td className="py-3 px-4">boolean</td>
                    <td className="py-3 px-4">true</td>
                    <td className="py-3 px-4">Enable QR code generation</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4"><code>debug</code></td>
                    <td className="py-3 px-4">boolean</td>
                    <td className="py-3 px-4">false</td>
                    <td className="py-3 px-4">Enable verbose logging</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <DocNavigation
            previous={{ title: "Config Overview", href: "/docs/config/overview" }}
            next={{ title: "Performance Tuning", href: "/docs/config/performance" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default ConfigOptions;