import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { HardDrive, Film, Wifi } from 'lucide-react';

const FAQMediaLimits = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'practical-limits', title: 'Practical Limits', level: 2 },
    { id: 'best-practices', title: 'Best Practices', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'FAQ', href: '/docs/faq/devices' },
          { label: 'Media Size Limits' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Media Size Limits</h1>
          <p className="text-lg text-muted-foreground mb-8">
            How large media files behave in Media Sync and what to expect.
          </p>

          {/* OVERVIEW */}
          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <HardDrive className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              Media Sync Server does not enforce a hard file size limit.
              Playback success depends on network speed, device performance,
              and browser capabilities.
            </p>

            <div className="p-4 border rounded-lg bg-muted/50">
              <p className="text-sm text-muted-foreground">
                Media files are streamed from the host machine to clients over
                the local network — they are <strong>not fully loaded into memory</strong>.
              </p>
            </div>
          </section>

          {/* PRACTICAL LIMITS */}
          <section id="practical-limits" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Film className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Practical Limits</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">File Size</th>
                    <th className="text-left py-3 px-4">Expected Behavior</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Under 500 MB</td>
                    <td className="py-3 px-4">Smooth playback on most networks</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">500 MB – 1 GB</td>
                    <td className="py-3 px-4">Works well on stable WiFi</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">1 – 2 GB</td>
                    <td className="py-3 px-4">May buffer on slower devices</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">2 GB+</td>
                    <td className="py-3 px-4">Not recommended for live upload</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* BEST PRACTICES */}
          <section id="best-practices" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Best Practices</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use MP4 (H.264) for best browser compatibility</li>
              <li>Prefer wired Ethernet for the host device</li>
              <li>Pre-load large videos before clients join</li>
              <li>Avoid uploading very large files during playback</li>
              <li>For very large files, consider local copies on clients</li>
            </ul>

            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Tip: For events or classrooms, files under <strong>1 GB </strong>
                provide the best balance of quality and reliability.
              </p>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Devices FAQ', href: '/docs/faq/devices' }}
            next={{ title: 'Browser Compatibility', href: '/docs/faq/browsers' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FAQMediaLimits;
