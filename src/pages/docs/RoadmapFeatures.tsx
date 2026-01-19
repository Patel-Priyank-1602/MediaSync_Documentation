import React from 'react';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { Rocket, Star, Clock, Sparkles } from 'lucide-react';

const RoadmapFeatures = () => {
  const tocItems = [
    { id: 'coming-soon', title: 'Coming Soon', level: 2 },
    { id: 'planned', title: 'Planned Features', level: 2 },
    { id: 'considering', title: 'Under Consideration', level: 2 },
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1 max-w-3xl">
        <Breadcrumb items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Roadmap', href: '/docs/roadmap/features' },
          { label: 'Planned Features' }
        ]} />
        
        <h1 className="text-4xl font-bold mt-6 mb-4">Planned Features</h1>
        <p className="text-lg text-muted-foreground mb-8">
          What's coming next for Media Sync Server.
        </p>

        <section id="coming-soon" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Rocket className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold">Coming Soon</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 border border-green-500/30 rounded-lg">
              <h4 className="font-medium">🎨 Mobile-Optimized UI</h4>
              <p className="text-sm text-muted-foreground mt-1">Better touch controls and responsive design for mobile devices</p>
            </div>
            <div className="p-4 border border-green-500/30 rounded-lg">
              <h4 className="font-medium">📋 Playlist Support</h4>
              <p className="text-sm text-muted-foreground mt-1">Queue multiple videos/audio files for continuous playback</p>
            </div>
          </div>
        </section>

        <section id="planned" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Planned Features</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">🔐 Role-Based Controls</h4>
              <p className="text-sm text-muted-foreground mt-1">Allow specific users to have controller privileges</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">🔄 Playback Drift Correction</h4>
              <p className="text-sm text-muted-foreground mt-1">Advanced algorithms for even tighter synchronization</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">📊 Advanced Analytics</h4>
              <p className="text-sm text-muted-foreground mt-1">Detailed sync health and performance metrics</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">🌐 Subtitle Support</h4>
              <p className="text-sm text-muted-foreground mt-1">Synchronized subtitles for accessibility</p>
            </div>
          </div>
        </section>

        <section id="considering" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Under Consideration</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 border rounded-lg opacity-75">
              <h4 className="font-medium">🌍 Remote Internet Sync</h4>
              <p className="text-sm text-muted-foreground mt-1">Sync across the internet (not just LAN)</p>
            </div>
            <div className="p-4 border rounded-lg opacity-75">
              <h4 className="font-medium">💬 Live Chat</h4>
              <p className="text-sm text-muted-foreground mt-1">Built-in chat for watch parties</p>
            </div>
            <div className="p-4 border rounded-lg opacity-75">
              <h4 className="font-medium">🎙️ Voice Chat</h4>
              <p className="text-sm text-muted-foreground mt-1">Real-time voice communication</p>
            </div>
          </div>
        </section>
      </div>
      <TableOfContents items={tocItems} />
    </div>
  );
};

export default RoadmapFeatures;
