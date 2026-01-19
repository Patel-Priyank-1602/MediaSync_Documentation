import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Video, Upload, FileVideo, Settings } from 'lucide-react';

const FeaturesLocalVideo = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'supported-formats', title: 'Supported Formats', level: 2 },
    { id: 'uploading', title: 'Uploading Videos', level: 2 },
    { id: 'large-files', title: 'Large File Handling', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Features', href: '/docs/features/youtube' },
        { label: 'Local Video Sync' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Local Video Sync</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Synchronize your own video files across all connected devices.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Local video sync allows you to upload video files from your device and stream them to all connected clients. The host uploads the file, which is then served to all clients via the Express server.
            </p>
          </section>

          <section id="supported-formats" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileVideo className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Supported Formats</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">MP4</h4>
                <p className="text-sm text-muted-foreground">Most widely supported format</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">WebM</h4>
                <p className="text-sm text-muted-foreground">Open format, good compression</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm"><strong>Note:</strong> Use H.264 codec for maximum browser compatibility.</p>
            </div>
          </section>

          <section id="uploading" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Uploading Videos</h2>
            </div>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>Select "Local Video" mode on the controller</li>
              <li>Click the upload button and select your video file</li>
              <li>Wait for the upload to complete</li>
              <li>The video will automatically load on all clients</li>
            </ol>
          </section>

          <section id="large-files" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Large File Handling</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              For very large files (1GB+), consider these alternatives:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Manually copy the video file to each client device</li>
              <li>Use the same filename on all devices</li>
              <li>Load from local path instead of uploading</li>
            </ul>
            <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-sm"><strong>Tip:</strong> Pre-load large videos before clients join to avoid buffering delays.</p>
            </div>
          </section>

          <DocNavigation
            previous={{ title: "YouTube Sync", href: "/docs/features/youtube" }}
            next={{ title: "Local Audio", href: "/docs/features/local-audio" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FeaturesLocalVideo;