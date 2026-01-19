import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Smartphone, Monitor, Tv, Tablet } from 'lucide-react';

const FAQDevices = () => {
  const tocItems = [
    { id: 'supported', title: 'Supported Devices', level: 2 },
    { id: 'mobile', title: 'Mobile Devices', level: 2 },
    { id: 'desktop', title: 'Desktop & Laptop', level: 2 },
    { id: 'smart-tv', title: 'Smart TVs', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'FAQ', href: '/docs/faq/devices' },
        { label: 'Supported Devices' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Supported Devices</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Which devices work with Media Sync Server.
          </p>

          <section id="supported" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Supported Devices</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Any device with a modern web browser can be a client:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">✅ Fully Supported</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Windows PC/Laptop</li>
                  <li>Mac</li>
                  <li>iPhone/iPad</li>
                  <li>Android phones/tablets</li>
                  <li>Chromebooks</li>
                </ul>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">⚠️ Limited Support</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Smart TVs (browser dependent)</li>
                  <li>Gaming consoles</li>
                  <li>Older devices</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="mobile" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Mobile Devices</h2>
            </div>
            <div className="grid gap-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">📱 iPhone/iPad</h4>
                <p className="text-sm text-muted-foreground">Safari or Chrome work well. May require tap to start playback.</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">🤖 Android</h4>
                <p className="text-sm text-muted-foreground">Chrome recommended. Most browsers work.</p>
              </div>
            </div>
          </section>

          <section id="desktop" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Tablet className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Desktop & Laptop</h2>
            </div>
            <p className="text-muted-foreground">
              All major browsers supported: Chrome, Firefox, Safari, Edge. Best experience with Chrome.
            </p>
          </section>

          <section id="smart-tv" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Tv className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Smart TVs</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Smart TV support varies by manufacturer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Samsung:</strong> Use built-in browser</li>
              <li><strong>LG:</strong> WebOS browser works</li>
              <li><strong>Android TV:</strong> Install Chrome</li>
              <li><strong>Fire TV:</strong> Use Silk browser</li>
            </ul>
            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm"><strong>Tip:</strong> Connect a laptop via HDMI for best TV experience.</p>
            </div>
          </section>

          <DocNavigation
            previous={{ title: "Network Problems", href: "/docs/troubleshooting/network" }}
            next={{ title: "Media Size Limits", href: "/docs/faq/media-limits" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FAQDevices;