import React from 'react';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { FolderTree, FileCode, Server, Layout } from 'lucide-react';

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
    <code>{children}</code>
  </pre>
);

const ContributingStructure = () => {
  const tocItems = [
    { id: 'overview', title: 'Project Overview', level: 2 },
    { id: 'directories', title: 'Directory Structure', level: 2 },
    { id: 'key-files', title: 'Key Files', level: 2 },
    { id: 'architecture', title: 'Architecture', level: 2 },
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1 max-w-3xl">
        <Breadcrumb items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Contributing', href: '/docs/contributing/structure' },
          { label: 'Project Structure' }
        ]} />
        
        <h1 className="text-4xl font-bold mt-6 mb-4">Project Structure</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Understanding the codebase organization.
        </p>

        <section id="overview" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FolderTree className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Project Overview</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Media Sync Server follows a simple, flat structure optimized for maintainability:
          </p>
        </section>

        <section id="directories" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileCode className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Directory Structure</h2>
          </div>
          <CodeBlock>{`/media-sync-server
├── public/              # Static files served to clients
│   ├── controller.html  # Host control interface
│   ├── client.html      # Client player interface
│   └── assets/          # CSS, images, etc.
├── uploads/             # Uploaded media files (auto-created)
├── node_modules/        # Dependencies (auto-generated)
├── server.js            # Main server entry point
├── config.json          # Configuration file
├── package.json         # Project dependencies
└── README.md            # Project documentation`}</CodeBlock>
        </section>

        <section id="key-files" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Key Files</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium font-mono">server.js</h4>
              <p className="text-sm text-muted-foreground mt-1">Express server, Socket.IO setup, all sync logic</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium font-mono">public/controller.html</h4>
              <p className="text-sm text-muted-foreground mt-1">Host interface with controls and status display</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium font-mono">public/client.html</h4>
              <p className="text-sm text-muted-foreground mt-1">Client player that receives sync commands</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium font-mono">config.json</h4>
              <p className="text-sm text-muted-foreground mt-1">User configuration (WiFi, port, sync settings)</p>
            </div>
          </div>
        </section>

        <section id="architecture" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Layout className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Architecture</h2>
          </div>
          <div className="p-6 bg-muted rounded-lg text-center">
            <div className="space-y-2">
              <p className="font-medium">Controller (HTML/JS)</p>
              <p>↓ WebSocket ↓</p>
              <p className="font-medium">Server (Node.js + Socket.IO)</p>
              <p>↓ Broadcast ↓</p>
              <p className="font-medium">Clients (HTML/JS)</p>
            </div>
          </div>
        </section>
      </div>
      <TableOfContents items={tocItems} />
    </div>
  );
};

export default ContributingStructure;
