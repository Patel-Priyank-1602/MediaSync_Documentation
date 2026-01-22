import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { AlertCircle } from 'lucide-react';

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
    <code>{children}</code>
  </pre>
);

const TroubleshootingErrors = () => {
  const tocItems = [
    { id: 'module-not-found', title: 'ERR_MODULE_NOT_FOUND', level: 2 },
    { id: 'eaddrinuse', title: 'EADDRINUSE', level: 2 },
    { id: 'cors-error', title: 'CORS / Connection Issues', level: 2 },
    { id: 'connection-refused', title: 'Connection Refused', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Troubleshooting', href: '/docs/troubleshooting/errors' },
          { label: 'Common Errors' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Common Errors
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Quick fixes for issues commonly encountered while running Media Sync Server.
          </p>

          {/* MODULE NOT FOUND */}
          <section id="module-not-found" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">
                ERR_MODULE_NOT_FOUND
              </h2>
            </div>

            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
              <code className="text-sm">
                Error: Cannot find module 'express'
              </code>
            </div>

            <p className="text-muted-foreground mb-2">
              <strong>Cause:</strong> Project dependencies are not installed.
            </p>

            <p className="text-muted-foreground mb-2">
              <strong>Fix:</strong> Install dependencies from the project root:
            </p>

            <CodeBlock>{`npm install`}</CodeBlock>

            <p className="text-xs text-muted-foreground mt-2">
              Make sure you are using Node.js v18 or later.
            </p>
          </section>

          {/* PORT IN USE */}
          <section id="eaddrinuse" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">
                EADDRINUSE
              </h2>
            </div>

            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
              <code className="text-sm">
                Error: listen EADDRINUSE :::3000
              </code>
            </div>

            <p className="text-muted-foreground mb-2">
              <strong>Cause:</strong> Another application is already using the port.
            </p>

            <p className="text-muted-foreground mb-2">
              <strong>Fix:</strong> Stop the existing process or change the port.
            </p>

            <CodeBlock>{`# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS / Linux
lsof -i :3000
kill -9 <PID>`}</CodeBlock>
          </section>

          {/* CORS / ACCESS */}
          <section id="cors-error" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">
                CORS / Access Issues
              </h2>
            </div>

            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
              <code className="text-sm">
                Access-Control-Allow-Origin error
              </code>
            </div>

            <p className="text-muted-foreground mb-2">
              <strong>Cause:</strong> Devices accessing the server using different URLs.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Using <code className="bg-muted px-1 rounded">localhost</code> on one device</li>
              <li>Using local IP on another device</li>
            </ul>

            <p className="text-muted-foreground mt-2">
              <strong>Fix:</strong> Always use the server’s local IP address on all devices.
            </p>
          </section>

          {/* CONNECTION REFUSED */}
          <section id="connection-refused" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">
                Connection Refused
              </h2>
            </div>

            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
              <code className="text-sm">
                ERR_CONNECTION_REFUSED
              </code>
            </div>

            <p className="text-muted-foreground mb-2">
              <strong>Cause:</strong> Server not reachable.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Server is not running</li>
              <li>Wrong IP address or port</li>
              <li>Firewall blocking the connection</li>
              <li>Devices not on the same network</li>
            </ul>

            <p className="text-muted-foreground mt-2">
              <strong>Fix:</strong> Restart the server and verify network connectivity.
            </p>
          </section>

          <DocNavigation
            previous={{ title: 'Security Model', href: '/docs/config/security' }}
            next={{ title: 'Sync Delay Issues', href: '/docs/troubleshooting/sync-delay' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default TroubleshootingErrors;
