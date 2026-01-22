import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Clock, Wifi, AlertTriangle, Wrench } from 'lucide-react';

const TroubleshootingSyncDelay = () => {
  const tocItems = [
    { id: 'symptoms', title: 'Symptoms', level: 2 },
    { id: 'common-causes', title: 'Common Causes', level: 2 },
    { id: 'how-to-fix', title: 'How to Reduce Delay', level: 2 },
    { id: 'expectations', title: 'What to Expect', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Troubleshooting', href: '/docs/troubleshooting/errors' },
          { label: 'Sync Delay Issues' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">
            Sync Delay Issues
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Understand why small delays happen and how to minimize them.
          </p>

          {/* SYMPTOMS */}
          <section id="symptoms" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Symptoms</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Audio or video slightly ahead on some devices</li>
              <li>Noticeable echo when multiple speakers are close</li>
              <li>Clients briefly re-sync after seek or restart</li>
            </ul>
          </section>

          {/* CAUSES */}
          <section id="common-causes" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Common Causes</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>WiFi latency or unstable network conditions</li>
              <li>Different device performance (phones vs laptops)</li>
              <li>Browser buffering and decoding differences</li>
              <li>YouTube adaptive streaming behavior</li>
            </ul>
          </section>

          {/* FIXES */}
          <section id="how-to-fix" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">How to Reduce Delay</h2>
            </div>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Use a strong, private WiFi or hotspot</li>
              <li>Keep the host device on wired Ethernet if possible</li>
              <li>Limit the number of active clients</li>
              <li>Avoid background downloads on client devices</li>
              <li>Use local media instead of YouTube for tighter sync</li>
            </ul>

            <div className="mt-4 bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                Restarting playback (restart button) forces all clients to realign.
              </p>
            </div>
          </section>

          {/* EXPECTATIONS */}
          <section id="expectations" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-amber-500" />
              </div>
              <h2 className="text-2xl font-semibold">What to Expect</h2>
            </div>

            <p className="text-muted-foreground">
              Media Sync Server provides <strong>best-effort synchronization</strong>
              over local networks. Minor delays (tens to hundreds of milliseconds)
              are normal and depend on device and network conditions.
            </p>

            <p className="text-muted-foreground mt-2">
              It is designed for group viewing and listening—not frame-perfect
              professional AV synchronization.
            </p>
          </section>

          <DocNavigation
            previous={{ title: 'Common Errors', href: '/docs/troubleshooting/errors' }}
            next={{ title: 'Media Issues', href: '/docs/troubleshooting/media' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default TroubleshootingSyncDelay;
