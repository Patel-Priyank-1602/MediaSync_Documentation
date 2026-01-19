import React from 'react';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { Zap, Code, ArrowRightLeft, Server } from 'lucide-react';

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
    <code>{children}</code>
  </pre>
);

const InternalsWebSocket = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'connection-flow', title: 'Connection Flow', level: 2 },
    { id: 'message-types', title: 'Message Types', level: 2 },
    { id: 'sync-protocol', title: 'Sync Protocol', level: 2 },
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1 max-w-3xl">
        <Breadcrumb items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Internals', href: '/docs/internals/websocket' },
          { label: 'WebSocket Sync Logic' }
        ]} />
        
        <h1 className="text-4xl font-bold mt-6 mb-4">WebSocket Sync Logic</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Deep dive into the real-time communication protocol.
        </p>

        <section id="overview" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Overview</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Media Sync Server uses Socket.IO for bi-directional real-time communication. This enables instant sync commands and state updates between the controller and all clients.
          </p>
        </section>

        <section id="connection-flow" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ArrowRightLeft className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Connection Flow</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Client opens WebSocket connection to server</li>
            <li>Server assigns unique socket ID</li>
            <li>Server sends current playback state</li>
            <li>Client begins listening for sync events</li>
            <li>Connection maintained until client disconnects</li>
          </ol>
        </section>

        <section id="message-types" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Message Types</h2>
          </div>
          <CodeBlock>{`// Controller → Server → Clients
'play'     → { timestamp: 123.45 }
'pause'    → { timestamp: 123.45 }
'seek'     → { timestamp: 300.00 }
'load'     → { type: 'youtube', id: 'abc123' }

// Server → Clients
'sync'     → { timestamp, state, mediaType }
'clientCount' → { count: 5 }`}</CodeBlock>
        </section>

        <section id="sync-protocol" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Sync Protocol</h2>
          </div>
          <CodeBlock>{`// Server-side sync pulse
setInterval(() => {
  io.emit('sync', {
    timestamp: currentTimestamp,
    state: playbackState,
    mediaType: currentMediaType
  });
}, config.syncInterval);

// Client-side handling
socket.on('sync', (data) => {
  if (Math.abs(player.currentTime - data.timestamp) > DRIFT_THRESHOLD) {
    player.currentTime = data.timestamp;
  }
});`}</CodeBlock>
        </section>
      </div>
      <TableOfContents items={tocItems} />
    </div>
  );
};

export default InternalsWebSocket;
