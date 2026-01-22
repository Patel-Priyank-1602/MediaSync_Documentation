import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Film, Youtube, AlertTriangle, HardDrive } from 'lucide-react';

const TroubleshootingMedia = () => {
  const tocItems = [
    { id: 'youtube-issues', title: 'YouTube Issues', level: 2 },
    { id: 'local-media-issues', title: 'Local Media Issues', level: 2 },
    { id: 'general-tips', title: 'General Tips', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Troubleshooting', href: '/docs/troubleshooting/errors' },
          { label: 'Media Loading Failures' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Media Loading Failures
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Diagnose and resolve issues when media fails to load or play.
          </p>

          {/* YOUTUBE ISSUES */}
          <section id="youtube-issues" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <Youtube className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-semibold">YouTube Issues</h2>
            </div>

            <p className="text-muted-foreground mb-3">
              YouTube videos may fail to load due to platform restrictions.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Embedding disabled by the video owner</li>
              <li>Age-restricted or region-locked content</li>
              <li>Autoplay blocked until user interaction</li>
              <li>Unstable internet connection</li>
            </ul>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Tip: Try opening the video directly on YouTube. If it doesn’t
                play there, it won’t work in Media Sync either.
              </p>
            </div>
          </section>

          {/* LOCAL MEDIA ISSUES */}
          <section id="local-media-issues" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <HardDrive className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Local Media Issues</h2>
            </div>

            <p className="text-muted-foreground mb-3">
              Problems playing uploaded audio or video files are usually format-related.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Unsupported codec (e.g. HEVC / H.265)</li>
              <li>Corrupted or incomplete upload</li>
              <li>Large files still being copied or uploaded</li>
              <li>Browser does not support the file format</li>
            </ul>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Recommended formats: MP4 (H.264), WebM for video and MP3, AAC for audio.
              </p>
            </div>
          </section>

          {/* GENERAL TIPS */}
          <section id="general-tips" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold">General Tips</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Refresh the client page if playback stalls</li>
              <li>Restart playback from the controller</li>
              <li>Avoid renaming files while the server is running</li>
              <li>Test media on the host browser first</li>
            </ul>
          </section>

          <DocNavigation
            previous={{ title: 'Sync Delay Issues', href: '/docs/troubleshooting/sync-delay' }}
            next={{ title: 'Network Problems', href: '/docs/troubleshooting/network' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default TroubleshootingMedia;
