import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { FileJson, Settings, Info } from 'lucide-react';

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
    <code>{children}</code>
  </pre>
);

const ConfigOverview = () => {
  const tocItems = [
    { id: 'introduction', title: 'Introduction', level: 2 },
    { id: 'file-location', title: 'File Location', level: 2 },
    { id: 'basic-structure', title: 'Basic Structure', level: 2 },
    { id: 'editing', title: 'Editing the Config', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Configuration', href: '/docs/config/overview' },
        { label: 'config.json Overview' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">config.json Overview</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The central configuration file for customizing your Media Sync Server.
          </p>

          <section id="introduction" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileJson className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Introduction</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The <code className="bg-muted px-2 py-1 rounded">config.json</code> file allows you to customize server behavior without modifying code. Changes take effect on server restart.
            </p>
          </section>

          <section id="file-location" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">File Location</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Place the config file in your project root:
            </p>
            <CodeBlock>{`/media-sync-server
├── config.json   ← Here
├── server.js
├── package.json
└── public/`}</CodeBlock>
          </section>

          <section id="basic-structure" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Basic Structure</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              A complete example configuration:
            </p>
            <CodeBlock>{`{
  "WIFI_SSID": "MyNetwork",
  "WIFI_PASSWORD": "MyPassword123",
  "HOTSPOT_IP": "192.168.1.100",
  "port": 3000,
  "syncInterval": 500,
  "maxClients": 20,
  "enableQRCode": true,
  "debug": false
}`}</CodeBlock>
          </section>

          <section id="editing" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Editing the Config</h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>Stop the server if running</li>
              <li>Open <code className="bg-muted px-1 rounded">config.json</code> in any text editor</li>
              <li>Make your changes (ensure valid JSON syntax)</li>
              <li>Save the file</li>
              <li>Restart the server: <code className="bg-muted px-1 rounded">node server.js</code></li>
            </ol>
            <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm"><strong>Tip:</strong> Use a JSON validator to check syntax before saving.</p>
            </div>
          </section>

          <DocNavigation
            previous={{ title: "Sync Health", href: "/docs/dashboard/sync-health" }}
            next={{ title: "Config Options", href: "/docs/config/options" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default ConfigOverview;