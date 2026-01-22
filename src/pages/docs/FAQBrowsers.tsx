import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Globe, Chrome, CheckCircle, AlertTriangle } from 'lucide-react';

const FAQBrowsers = () => {
  const tocItems = [
    { id: 'recommended', title: 'Recommended Browsers', level: 2 },
    { id: 'chromium', title: 'Chromium-Based Browsers', level: 2 },
    { id: 'limitations', title: 'Known Limitations', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'FAQ', href: '/docs/faq/devices' },
          { label: 'Browser Compatibility' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Browser Compatibility
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Media Sync Server works on all modern browsers that support
            WebSockets and HTML5 media.
          </p>

          {/* RECOMMENDED */}
          <section id="recommended" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Chrome className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Recommended Browsers</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Chrome / Chromium
                </h4>
                <p className="text-sm text-muted-foreground">
                  Best sync accuracy and playback stability
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Microsoft Edge
                </h4>
                <p className="text-sm text-muted-foreground">
                  Same engine as Chrome, highly reliable
                </p>
              </div>
            </div>
          </section>

          {/* CHROMIUM BASED */}
          <section id="chromium" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">
                Chromium-Based Browsers
              </h2>
            </div>

            <p className="text-muted-foreground mb-4">
              All Chromium-based browsers work reliably with Media Sync:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Brave</h4>
                <p className="text-sm text-muted-foreground">
                  Fully supported. Disable Shields if media or sockets are blocked
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Opera</h4>
                <p className="text-sm text-muted-foreground">
                  Works well for local media and YouTube playback
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Vivaldi</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced UI, same behavior as Chrome
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Perplexity Comet</h4>
                <p className="text-sm text-muted-foreground">
                  Chromium-based. Fully compatible with Media Sync
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Other Chromium Browsers</h4>
                <p className="text-sm text-muted-foreground">
                  Expected to work if kept up to date
                </p>
              </div>
            </div>
          </section>

          {/* LIMITATIONS */}
          <section id="limitations" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold">Known Limitations</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Mobile browsers require user interaction to start playback</li>
              <li>Safari may pause playback when backgrounded</li>
              <li>Brave Shields or similar blockers can interfere with media</li>
              <li>Smart TV browsers vary widely in reliability</li>
            </ul>

            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Tip: For best sync accuracy, use the same browser on all devices.
              </p>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Media Size Limits', href: '/docs/faq/media-limits' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FAQBrowsers;
