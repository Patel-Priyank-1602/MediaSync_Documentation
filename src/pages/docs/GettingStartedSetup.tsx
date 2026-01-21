import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Settings, FileJson, Wifi, Play, Monitor } from 'lucide-react';

const CodeBlock = ({ children, language = 'bash' }: { children: string; language?: string }) => (
  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
    <code>{children}</code>
  </pre>
);

const GettingStartedSetup = () => {
  const tocItems = [
    { id: 'configure-wifi', title: 'Configure WiFi Settings', level: 2 },
    { id: 'find-ip', title: 'How to Find Your IP Address', level: 2 },
    { id: 'find-ip-windows', title: 'Windows', level: 3 },
    { id: 'find-ip-macos', title: 'macOS', level: 3 },
    { id: 'find-ip-linux', title: 'Linux', level: 3 },
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
              <p className="text-sm"><strong>Important:</strong> You need to find your local IP address to configure the HOTSPOT_IP field. See the next section for detailed instructions.</p>
            </div>
          </section>

          <section id="find-ip" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">How to Find Your IP Address</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Your local IP address is needed for the HOTSPOT_IP configuration. Follow the instructions for your operating system:
            </p>

            <div className="space-y-6">
              <div id="find-ip-windows">
                <h3 className="text-xl font-semibold mb-3">Windows</h3>
                <p className="text-muted-foreground mb-3">Method 1: Using Command Prompt</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Press <kbd className="bg-muted px-2 py-1 rounded text-xs">Win + R</kbd> to open Run dialog</li>
                  <li>Type <code className="bg-muted px-2 py-1 rounded">cmd</code> and press Enter</li>
                  <li>In the Command Prompt, type:</li>
                </ol>
                <CodeBlock>ipconfig</CodeBlock>
                <p className="text-muted-foreground mt-3 mb-4">
                  Look for "IPv4 Address" under your active network adapter (usually "Wireless LAN adapter Wi-Fi" or "Ethernet adapter"). It will look like: <code className="bg-muted px-2 py-1 rounded">192.168.x.x</code>
                </p>

                <p className="text-muted-foreground mb-3">Method 2: Using Settings</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Open Settings → Network & Internet</li>
                  <li>Click on Wi-Fi or Ethernet (whichever you're using)</li>
                  <li>Click on your active connection</li>
                  <li>Scroll down to find "IPv4 address"</li>
                </ol>
              </div>

              <div className="border-t pt-6" id="find-ip-macos">
                <h3 className="text-xl font-semibold mb-3">macOS</h3>
                <p className="text-muted-foreground mb-3">Method 1: Using Terminal</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground mb-4">
                  <li>Open Terminal (press <kbd className="bg-muted px-2 py-1 rounded text-xs">Cmd + Space</kbd>, type "Terminal")</li>
                  <li>Type the following command:</li>
                </ol>
                <CodeBlock>ifconfig | grep "inet " | grep -v 127.0.0.1</CodeBlock>
                <p className="text-muted-foreground mt-3 mb-4">
                  Your local IP will be shown next to "inet" (usually starts with 192.168 or 10.0)
                </p>

                <p className="text-muted-foreground mb-3">Method 2: Using System Preferences</p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Open System Preferences → Network</li>
                  <li>Select your active connection (Wi-Fi or Ethernet with green dot)</li>
                  <li>Your IP address will be displayed on the right side</li>
                </ol>
              </div>

              <div className="border-t pt-6" id="find-ip-linux">
                <h3 className="text-xl font-semibold mb-3">Linux</h3>
                <p className="text-muted-foreground mb-3">Open Terminal and use one of these commands:</p>
                <CodeBlock>ip addr show</CodeBlock>
                <p className="text-muted-foreground my-3">Or:</p>
                <CodeBlock>hostname -I</CodeBlock>
                <p className="text-muted-foreground mt-3">
                  Look for an address starting with 192.168 or 10.0 under your active network interface (usually eth0 for Ethernet or wlan0 for Wi-Fi)
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm mb-2"><strong>Tips:</strong></p>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Ignore the loopback address (127.0.0.1) - that's not your local network IP</li>
                <li>Most home networks use addresses starting with 192.168.x.x or 10.0.x.x</li>
                <li>Make sure you're connected to the same network you'll use for the hotspot</li>
                <li>If using a hotspot from your phone, you may need to check the IP assigned to your computer after connecting</li>
              </ul>
            </div>
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
              Install dependencies and start the server:
            </p>

            <CodeBlock>{`npm install
node server.js`}</CodeBlock>

            <p className="text-muted-foreground mt-4">
              You should see a startup banner displaying your server URLs and QR codes
              for controller and client access.
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