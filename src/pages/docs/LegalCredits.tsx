import React from 'react';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { Heart, Package, Users, ExternalLink } from 'lucide-react';

const LegalCredits = () => {
  const tocItems = [
    { id: 'dependencies', title: 'Dependencies', level: 2 },
    { id: 'acknowledgments', title: 'Acknowledgments', level: 2 },
    { id: 'contributors', title: 'Contributors', level: 2 },
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1 max-w-3xl">
        <Breadcrumb items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Legal', href: '/docs/legal/license' },
          { label: 'Third-Party Credits' }
        ]} />
        
        <h1 className="text-4xl font-bold mt-6 mb-4">Third-Party Credits</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Acknowledging the open source projects that make Media Sync Server possible.
        </p>

        <section id="dependencies" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Dependencies</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Express</h4>
                <span className="text-sm text-muted-foreground">MIT License</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Fast, unopinionated web framework for Node.js</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Socket.IO</h4>
                <span className="text-sm text-muted-foreground">MIT License</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Real-time bidirectional event-based communication</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">qrcode</h4>
                <span className="text-sm text-muted-foreground">MIT License</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">QR code generator for Node.js</p>
            </div>
          </div>
        </section>

        <section id="acknowledgments" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Acknowledgments</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li><strong>Node.js:</strong> JavaScript runtime that powers the server</li>
            <li><strong>YouTube IFrame API:</strong> Enables YouTube video embedding and control</li>
            <li><strong>HTML5 Media API:</strong> Powers local video and audio playback</li>
          </ul>
        </section>

        <section id="contributors" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Contributors</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Thank you to everyone who has contributed to Media Sync Server!
          </p>
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              See the full list of contributors on GitHub.
            </p>
          </div>
        </section>
      </div>
      <TableOfContents items={tocItems} />
    </div>
  );
};

export default LegalCredits;
