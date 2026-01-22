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
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Configuration', href: '/docs/config/overview' },
          { label: 'config.json Overview' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            config.json Overview
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Central configuration file for customizing Media Sync Server behavior.
          </p>

          {/* INTRODUCTION */}
          <section id="introduction" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileJson className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Introduction</h2>
            </div>

            <p className="text-muted-foreground">
              The <code className="bg-muted px-2 py-1 rounded">config.json</code> file
              controls runtime behavior such as networking, synchronization frequency,
              client limits, and QR code generation.
            </p>

            <p className="text-sm text-muted-foreground mt-3">
              Changes require a server restart to take effect.
            </p>
          </section>

          {/* FILE LOCATION */}
          <section id="file-location" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Info className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">File Location</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              The configuration file must be placed in the project root:
            </p>

            <CodeBlock>{`/media-sync-server
├── config.json   ← configuration file
├── server.js
├── package.json
├── uploads/
└── public/`}</CodeBlock>
          </section>

          {/* BASIC STRUCTURE */}
          <section id="basic-structure" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Basic Structure</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              Example of a complete and valid configuration:
            </p>

            <CodeBlock>{`{
  "WIFI_SSID": "MyNetwork",
  "WIFI_PASSWORD": "MyPassword123",
  "HOTSPOT_IP": "192.168.1.100",
}`}</CodeBlock>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> WiFi credentials are
                used only for QR code generation and display.
                The server does not modify system network settings.
              </p>
            </div>
          </section>

          {/* EDITING */}
          <section id="editing" className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Editing the Config
            </h2>

            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>Stop the server if it is running</li>
              <li>
                Open <code className="bg-muted px-1 rounded">config.json</code> in a text editor
              </li>
              <li>Modify values as needed (keep valid JSON syntax)</li>
              <li>Save the file</li>
              <li>
                Restart the server using{' '}
                <code className="bg-muted px-1 rounded">node server.js</code>
              </li>
            </ol>

            <div className="mt-4 bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
              <p className="text-sm">
                <strong>Tip:</strong> Use a JSON validator if the server fails to start
                after editing the file.
              </p>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Sync Health', href: '/docs/dashboard/sync-health' }}
            next={{ title: 'Config Options', href: '/docs/config/options' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default ConfigOverview;
