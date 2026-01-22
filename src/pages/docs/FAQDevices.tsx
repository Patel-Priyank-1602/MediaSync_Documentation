import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Smartphone, Monitor, Tv, Laptop } from 'lucide-react';

const FAQDevices = () => {
  const tocItems = [
    { id: 'supported', title: 'Supported Devices', level: 2 },
    { id: 'mobile', title: 'Mobile Devices', level: 2 },
    { id: 'desktop', title: 'Desktop & Laptop', level: 2 },
    { id: 'smart-tv', title: 'Smart TVs', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'FAQ', href: '/docs/faq/devices' },
          { label: 'Supported Devices' },
        ]}
      />

      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Supported Devices</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Media Sync works on any device with a modern web browser on the same
            local network.
          </p>

          {/* SUPPORTED */}
          <section id="supported" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Supported Devices</h2>
            </div>

            <p className="text-muted-foreground mb-4">
              No app installation required — everything runs in the browser.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">✅ Fully Supported</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Windows PCs & laptops</li>
                  <li>macOS systems</li>
                  <li>Android phones & tablets</li>
                  <li>iPhone & iPad</li>
                  <li>Chromebooks</li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">⚠️ Partial / Limited</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Smart TVs (browser quality varies)</li>
                  <li>Gaming consoles</li>
                  <li>Very old devices or browsers</li>
                </ul>
              </div>
            </div>
          </section>

          {/* MOBILE */}
          <section id="mobile" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Mobile Devices</h2>
            </div>

            <div className="space-y-3">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">iPhone / iPad</h4>
                <p className="text-sm text-muted-foreground">
                  Safari works best. iOS may require a tap to start playback
                  due to autoplay restrictions.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">Android</h4>
                <p className="text-sm text-muted-foreground">
                  Chrome recommended. Most modern Android browsers work without issues.
                </p>
              </div>
            </div>
          </section>

          {/* DESKTOP */}
          <section id="desktop" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Laptop className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Desktop & Laptop</h2>
            </div>

            <p className="text-muted-foreground">
              All major browsers are supported. For best stability and sync
              accuracy, use Chrome or Edge.
            </p>
          </section>

          {/* SMART TV */}
          <section id="smart-tv" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Tv className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Smart TVs</h2>
            </div>

            <p className="text-muted-foreground mb-3">
              Smart TV support depends entirely on the built-in browser.
            </p>

            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Samsung (Tizen):</strong> Built-in browser usually works</li>
              <li><strong>LG (WebOS):</strong> Browser works for basic playback</li>
              <li><strong>Android TV:</strong> Chrome or WebView browsers work best</li>
              <li><strong>Fire TV:</strong> Silk browser supported</li>
            </ul>

            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Best experience: connect a laptop to the TV via HDMI and use it as a client.
              </p>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Network Problems', href: '/docs/troubleshooting/network' }}
            next={{ title: 'Media Size Limits', href: '/docs/faq/media-limits' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FAQDevices;
