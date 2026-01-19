import React from 'react';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { AlertTriangle, Info, Shield } from 'lucide-react';

const RoadmapLimitations = () => {
  const tocItems = [
    { id: 'current', title: 'Current Limitations', level: 2 },
    { id: 'by-design', title: 'By Design', level: 2 },
    { id: 'workarounds', title: 'Workarounds', level: 2 },
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1 max-w-3xl">
        <Breadcrumb items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Roadmap', href: '/docs/roadmap/features' },
          { label: 'Known Limitations' }
        ]} />
        
        <h1 className="text-4xl font-bold mt-6 mb-4">Known Limitations</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Current limitations and design constraints.
        </p>

        <section id="current" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-amber-500" />
            </div>
            <h2 className="text-2xl font-semibold">Current Limitations</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 border border-amber-500/30 rounded-lg">
              <h4 className="font-medium">🌐 Local Network Only</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Cannot sync devices over the internet. All devices must be on the same LAN.
              </p>
            </div>
            <div className="p-4 border border-amber-500/30 rounded-lg">
              <h4 className="font-medium">👤 Single Controller</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Only one person can control playback at a time.
              </p>
            </div>
            <div className="p-4 border border-amber-500/30 rounded-lg">
              <h4 className="font-medium">📺 YouTube Restrictions</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Some YouTube videos can't be embedded due to creator/copyright restrictions.
              </p>
            </div>
            <div className="p-4 border border-amber-500/30 rounded-lg">
              <h4 className="font-medium">📱 Mobile Autoplay</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Mobile browsers often require user interaction before playing media.
              </p>
            </div>
          </div>
        </section>

        <section id="by-design" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">By Design</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            These are intentional design decisions:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>No authentication:</strong> Designed for trusted local environments</li>
            <li><strong>No encryption:</strong> Local network communication only</li>
            <li><strong>No persistence:</strong> State is not saved between sessions</li>
          </ul>
        </section>

        <section id="workarounds" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Info className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Workarounds</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">Large files</h4>
              <p className="text-sm text-muted-foreground mt-1">Manually copy to each device before session</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">YouTube restrictions</h4>
              <p className="text-sm text-muted-foreground mt-1">Download video and use local video mode</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">Mobile autoplay</h4>
              <p className="text-sm text-muted-foreground mt-1">Tap screen once before host starts playback</p>
            </div>
          </div>
        </section>
      </div>
      <TableOfContents items={tocItems} />
    </div>
  );
};

export default RoadmapLimitations;
