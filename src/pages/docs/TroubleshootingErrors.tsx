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
    { id: 'cors-error', title: 'CORS Error', level: 2 },
    { id: 'connection-refused', title: 'Connection Refused', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Troubleshooting', href: '/docs/troubleshooting/errors' },
        { label: 'Common Errors' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Common Errors</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Solutions for frequently encountered errors.
          </p>

          <section id="module-not-found" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">ERR_MODULE_NOT_FOUND</h2>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
              <code className="text-sm">Error: Cannot find module 'express'</code>
            </div>
            <p className="text-muted-foreground mb-4"><strong>Cause:</strong> Dependencies not installed</p>
            <p className="text-muted-foreground mb-2"><strong>Fix:</strong></p>
            <CodeBlock>{`npm install`}</CodeBlock>
          </section>

          <section id="eaddrinuse" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">EADDRINUSE</h2>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
              <code className="text-sm">Error: listen EADDRINUSE :::3000</code>
            </div>
            <p className="text-muted-foreground mb-4"><strong>Cause:</strong> Port already in use</p>
            <p className="text-muted-foreground mb-2"><strong>Fix:</strong> Kill the process or change port</p>
            <CodeBlock>{`# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>

# Or change port in config.json
{ "port": 3001 }`}</CodeBlock>
          </section>

          <section id="cors-error" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">CORS Error</h2>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
              <code className="text-sm">Access-Control-Allow-Origin error</code>
            </div>
            <p className="text-muted-foreground mb-4"><strong>Cause:</strong> Cross-origin request blocked</p>
            <p className="text-muted-foreground"><strong>Fix:</strong> Ensure all devices access via the same IP (not localhost vs IP)</p>
          </section>

          <section id="connection-refused" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <AlertCircle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">Connection Refused</h2>
            </div>
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
              <code className="text-sm">ERR_CONNECTION_REFUSED</code>
            </div>
            <p className="text-muted-foreground mb-4"><strong>Cause:</strong> Server not running or firewall blocking</p>
            <p className="text-muted-foreground mb-2"><strong>Fix:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Verify server is running</li>
              <li>Check firewall settings</li>
              <li>Confirm correct IP address</li>
              <li>Ensure same network</li>
            </ul>
          </section>

          <DocNavigation
            previous={{ title: "Security Settings", href: "/docs/config/security" }}
            next={{ title: "Sync Delay Issues", href: "/docs/troubleshooting/sync-delay" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default TroubleshootingErrors;