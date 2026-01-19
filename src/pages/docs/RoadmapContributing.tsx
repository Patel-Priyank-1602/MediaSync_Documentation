import React from 'react';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { Lightbulb, MessageSquare, Code, Heart } from 'lucide-react';

const RoadmapContributing = () => {
  const tocItems = [
    { id: 'ideas', title: 'Feature Ideas', level: 2 },
    { id: 'feedback', title: 'Giving Feedback', level: 2 },
    { id: 'priorities', title: 'Current Priorities', level: 2 },
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1 max-w-3xl">
        <Breadcrumb items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Roadmap', href: '/docs/roadmap/features' },
          { label: 'Contribution Ideas' }
        ]} />
        
        <h1 className="text-4xl font-bold mt-6 mb-4">Contribution Ideas</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Ways you can help improve Media Sync Server.
        </p>

        <section id="ideas" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Feature Ideas</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Areas where contributions would be especially valuable:
          </p>
          <div className="grid gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">🎨 UI/UX Improvements</h4>
              <p className="text-sm text-muted-foreground mt-1">Mobile responsiveness, dark mode, accessibility</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">🔄 Sync Algorithms</h4>
              <p className="text-sm text-muted-foreground mt-1">Better drift correction, latency compensation</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">📹 Media Format Support</h4>
              <p className="text-sm text-muted-foreground mt-1">Additional video/audio codecs and formats</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium">📚 Documentation</h4>
              <p className="text-sm text-muted-foreground mt-1">Tutorials, examples, translations</p>
            </div>
          </div>
        </section>

        <section id="feedback" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Giving Feedback</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Report bugs with detailed reproduction steps</li>
            <li>Suggest features with use case descriptions</li>
            <li>Share your sync setup and experience</li>
            <li>Provide feedback on documentation clarity</li>
          </ul>
        </section>

        <section id="priorities" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Current Priorities</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Stability and reliability improvements</li>
            <li>Mobile experience optimization</li>
            <li>Sync precision enhancements</li>
            <li>Documentation expansion</li>
          </ol>
        </section>
      </div>
      <TableOfContents items={tocItems} />
    </div>
  );
};

export default RoadmapContributing;
