import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Settings, FileJson, Wifi, Play } from 'lucide-react';

const CodeBlock = ({ children, language = 'bash' }: { children: string; language?: string }) => (
  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
    <code>{children}</code>
  </pre>
);

const GettingStartedSetup = () => {
  const tocItems = [
    { id: 'configure-wifi', title: 'Configure WiFi Settings', level: 2 },
    { id: 'create-public', title: 'Create Public Folder', level: 2 },
    { id: 'verify-structure', title: 'Verify Project Structure', level: 2 },
    { id: 'first-launch', title: 'First Launch', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Getting Started', href: '/docs/getting-started/requirements' },
        { label: 'First-Time Setup' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">First-Time Setup</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Complete configuration guide for your first Media Sync Server launch.
          </p>

          <section id="configure-wifi" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileJson className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Configure WiFi Settings</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Create a <code className="bg-muted px-2 py-1 rounded">config.json</code> file in your project root with your network credentials:
            </p>
            <CodeBlock language="json">{`{
  "WIFI_SSID": "Your_Hotspot_Name",
  "WIFI_PASSWORD": "Your_Hotspot_Password",
  "HOTSPOT_IP": "192.168.1.100"
}`}</CodeBlock>
            <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm"><strong>Finding Your IP:</strong> Run <code className="bg-muted px-1 rounded">ipconfig</code> (Windows) or <code className="bg-muted px-1 rounded">ifconfig</code> (Mac/Linux) to find your local IP address.</p>
            </div>
          </section>

          <section id="create-public" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Create Public Folder</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Create a <code className="bg-muted px-2 py-1 rounded">public</code> folder and add your HTML files:
            </p>
            <CodeBlock language="bash">{`mkdir public
# Place controller.html and client.html inside`}</CodeBlock>
          </section>

          <section id="verify-structure" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Verify Project Structure</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Your project should look like this:
            </p>
            <CodeBlock>{`/media-sync-server
├── node_modules/
├── uploads/
├── public/
│   ├── client.html
│   └── controller.html
├── config.json
├── package.json
└── server.js`}</CodeBlock>
          </section>

          <section id="first-launch" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">First Launch</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Start the server and verify everything works:
            </p>
            <CodeBlock>{`node server.js`}</CodeBlock>
            <p className="text-muted-foreground mt-4">
              You should see a banner with your server URLs and QR codes for easy device connection.
            </p>
          </section>

          <DocNavigation
            previous={{ title: "Installation", href: "/docs/getting-started/installation" }}
            next={{ title: "Network Requirements", href: "/docs/getting-started/network" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default GettingStartedSetup;