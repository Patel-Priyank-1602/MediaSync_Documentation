import React from 'react';
import { DocsLayout } from '@/components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { Globe, Chrome, CheckCircle } from 'lucide-react';

const FAQBrowsers = () => {
  const tocItems = [
    { id: 'recommended', title: 'Recommended Browsers', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'FAQ', href: '/docs/faq/devices' },
        { label: 'Browser Compatibility' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Browser Compatibility</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Browser support and compatibility information.
          </p>

          <section id="recommended" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Chrome className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Recommended Browsers</h2>
            </div>
            <p className="text-muted-foreground">Chrome, Firefox, Safari, and Edge all work well.</p>
          </section>

          <DocNavigation
            previous={{ title: "Media Size Limits", href: "/docs/faq/media-limits" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default FAQBrowsers;