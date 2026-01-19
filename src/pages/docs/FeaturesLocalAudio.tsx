import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Music, Headphones, Upload, Volume2 } from 'lucide-react';

const FeaturesLocalAudio = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'supported-formats', title: 'Supported Formats', level: 2 },
    { id: 'use-cases', title: 'Use Cases', level: 2 },
    { id: 'tips', title: 'Best Practices', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Features', href: '/docs/features/youtube' },
        { label: 'Local Audio Sync' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Local Audio Sync</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Synchronize audio files for shared listening experiences.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Local audio sync provides lightweight, precise audio synchronization across all devices. Perfect for group listening sessions, parties, or creating a multi-room audio experience.
            </p>
          </section>

          <section id="supported-formats" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Supported Formats</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">MP3</h4>
                <p className="text-sm text-muted-foreground">Universal format, great compatibility</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">WAV</h4>
                <p className="text-sm text-muted-foreground">Uncompressed, highest quality</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">OGG</h4>
                <p className="text-sm text-muted-foreground">Open format, good compression</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">AAC</h4>
                <p className="text-sm text-muted-foreground">Modern format, excellent quality</p>
              </div>
            </div>
          </section>

          <section id="use-cases" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Use Cases</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Parties:</strong> Play music across multiple speakers throughout a venue</li>
              <li><strong>Podcasts:</strong> Listen to podcasts together with friends</li>
              <li><strong>Music Sessions:</strong> Enjoy albums as a group</li>
              <li><strong>Presentations:</strong> Background music for events</li>
            </ul>
          </section>

          <section id="tips" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Volume2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Best Practices</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use MP3 for best balance of quality and file size</li>
              <li>Each client can adjust their local volume independently</li>
              <li>Pre-upload audio before guests join for seamless experience</li>
              <li>Use lower sync intervals for tighter audio sync</li>
            </ul>
          </section>

          <DocNavigation
            previous={{ title: "Local Video", href: "/docs/features/local-video" }}
            next={{ title: "Seek & Drift", href: "/docs/features/seek-drift" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FeaturesLocalAudio;