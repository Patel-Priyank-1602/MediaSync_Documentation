import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Youtube, Play, AlertTriangle, Zap } from 'lucide-react';

const FeaturesYouTubeSync = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'how-it-works', title: 'How It Works', level: 2 },
    { id: 'supported-actions', title: 'Supported Actions', level: 2 },
    { id: 'limitations', title: 'Limitations', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Features', href: '/docs/features/youtube' },
        { label: 'YouTube Synchronization' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">YouTube Synchronization</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Sync YouTube videos across all connected devices in real-time.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <Youtube className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              YouTube synchronization allows you to play any YouTube video simultaneously on all connected clients. Using the YouTube IFrame API combined with WebSocket communication, playback state is kept in perfect sync.
            </p>
            <div className="p-4 border rounded-lg bg-card">
              <h4 className="font-medium mb-2">Supported Input Formats:</h4>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                <li>Full YouTube URL: <code className="bg-muted px-1 rounded">https://youtube.com/watch?v=VIDEO_ID</code></li>
                <li>Short URL: <code className="bg-muted px-1 rounded">https://youtu.be/VIDEO_ID</code></li>
                <li>Video ID only: <code className="bg-muted px-1 rounded">dQw4w9WgXcQ</code></li>
              </ul>
            </div>
          </section>

          <section id="how-it-works" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">How It Works</h2>
            </div>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>Controller loads YouTube video via IFrame API</li>
              <li>Video ID is broadcast to all clients via WebSocket</li>
              <li>Clients load the same video in their players</li>
              <li>Play/pause/seek commands are sent in real-time</li>
              <li>Periodic sync pulses maintain alignment</li>
            </ol>
          </section>

          <section id="supported-actions" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Play className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Supported Actions</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">▶️ Play/Pause</h4>
                <p className="text-sm text-muted-foreground">Synchronized across all devices</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">⏩ Seek</h4>
                <p className="text-sm text-muted-foreground">Jump to any timestamp</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">🔄 Video Change</h4>
                <p className="text-sm text-muted-foreground">Load new videos on the fly</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">⏮️ Restart</h4>
                <p className="text-sm text-muted-foreground">Reset to beginning</p>
              </div>
            </div>
          </section>

          <section id="limitations" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold">Limitations</h2>
            </div>
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Some videos have embedding restrictions and won't play</li>
                <li>Autoplay may require user interaction on mobile devices</li>
                <li>Age-restricted content may not load on all clients</li>
                <li>Network latency can cause minor sync variations</li>
              </ul>
            </div>
          </section>

          <DocNavigation
            previous={{ title: "Host vs Client", href: "/docs/usage/host-client" }}
            next={{ title: "Local Video", href: "/docs/features/local-video" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FeaturesYouTubeSync;