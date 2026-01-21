import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import {
  Video,
  Upload,
  FileVideo,
  Settings,
  AlertTriangle,
} from 'lucide-react';

const FeaturesLocalVideo = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'supported-formats', title: 'Supported Formats', level: 2 },
    { id: 'uploading', title: 'Uploading Videos', level: 2 },
    { id: 'large-files', title: 'Large File Handling', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Features', href: '/docs/features/youtube' },
          { label: 'Local Video Sync' },
        ]}
      />

      <div className="flex gap-12">
        <div className="flex-1 max-w-4xl">
          {/* HEADER */}
          <div className="mt-6 mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Local Video Sync
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Synchronize your own video files across all connected devices with
              frame-accurate playback.
            </p>
          </div>

          {/* OVERVIEW */}
          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Video className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Local video sync allows you to upload video files from your device and stream them to all connected clients. The host uploads the file, which is then served to all clients via the Express server.
            </p>
          </section>

          {/* SUPPORTED FORMATS */}
          <section id="supported-formats" className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-xl bg-primary/15 p-3">
                <FileVideo className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Supported Formats
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <FormatCard
                title="MP4 (Recommended)"
                description="Best compatibility across all modern browsers"
              />
              <FormatCard
                title="WebM"
                description="Open format with good compression (best on Chromium/Firefox)"
              />
            </div>

            <div className="rounded-xl bg-muted/50 border border-border p-5 mb-6">
              <h4 className="font-medium mb-2">Also Supported (Browser-Dependent)</h4>
              <p className="text-sm text-muted-foreground">
                MKV, AVI, MOV, M4V, WMV, FLV, 3GP
              </p>
            </div>

            <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-5">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Codec Recommendation:</strong>{' '}
                Use <strong>H.264 (AVC)</strong> for video and <strong>AAC</strong>{' '}
                for audio to ensure maximum compatibility and smooth sync.
              </p>
            </div>
          </section>

          {/* UPLOADING */}
          <section id="uploading" className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-xl bg-primary/15 p-3">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Uploading Videos
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <ol className="space-y-4 text-muted-foreground">
                <li>1. Select <strong>Local Video</strong> mode on the controller</li>
                <li>2. Click the upload button and choose a video file</li>
                <li>3. Wait for the upload to finish</li>
                <li>4. The video automatically loads on all clients</li>
              </ol>
            </div>
          </section>

          {/* LARGE FILES */}
          <section id="large-files" className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-xl bg-primary/15 p-3">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Large File Handling
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <p className="text-muted-foreground mb-6">
                For very large video files (<strong>1GB+</strong>), uploading may
                introduce delays or high memory usage.
              </p>

              <ul className="space-y-3 text-muted-foreground mb-6">
                <li>• Manually copy the video file to each client device</li>
                <li>• Use the same filename and format on all devices</li>
                <li>• Load the video from a local path instead of uploading</li>
              </ul>

              <div className="flex items-start gap-3 rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
                <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Tip:</strong> Pre-load large
                  videos before clients join to minimize buffering and sync delay.
                </p>
              </div>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'YouTube Sync', href: '/docs/features/youtube' }}
            next={{ title: 'Local Audio', href: '/docs/features/local-audio' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const FormatCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
    <h4 className="font-semibold mb-1">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default FeaturesLocalVideo;
