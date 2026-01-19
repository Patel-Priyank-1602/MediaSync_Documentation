import React from 'react';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { Code, CheckCircle, FileCode, MessageSquare } from 'lucide-react';

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
    <code>{children}</code>
  </pre>
);

const ContributingStandards = () => {
  const tocItems = [
    { id: 'style', title: 'Code Style', level: 2 },
    { id: 'naming', title: 'Naming Conventions', level: 2 },
    { id: 'comments', title: 'Comments & Docs', level: 2 },
    { id: 'testing', title: 'Testing', level: 2 },
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1 max-w-3xl">
        <Breadcrumb items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Contributing', href: '/docs/contributing/structure' },
          { label: 'Coding Standards' }
        ]} />
        
        <h1 className="text-4xl font-bold mt-6 mb-4">Coding Standards</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Guidelines for consistent, maintainable code.
        </p>

        <section id="style" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Code Style</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Use 2 spaces for indentation</li>
            <li>Use single quotes for strings</li>
            <li>Add semicolons at end of statements</li>
            <li>Maximum line length: 100 characters</li>
          </ul>
          <CodeBlock>{`// Good
const syncInterval = 500;
socket.emit('play', { timestamp: currentTime });

// Bad
const syncInterval=500
socket.emit("play",{timestamp:currentTime})`}</CodeBlock>
        </section>

        <section id="naming" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileCode className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Naming Conventions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Convention</th>
                  <th className="text-left py-3 px-4">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Variables</td>
                  <td className="py-3 px-4">camelCase</td>
                  <td className="py-3 px-4"><code>syncInterval</code></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Constants</td>
                  <td className="py-3 px-4">UPPER_SNAKE_CASE</td>
                  <td className="py-3 px-4"><code>MAX_CLIENTS</code></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Functions</td>
                  <td className="py-3 px-4">camelCase</td>
                  <td className="py-3 px-4"><code>handlePlayback()</code></td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Events</td>
                  <td className="py-3 px-4">lowercase</td>
                  <td className="py-3 px-4"><code>'play'</code>, <code>'sync'</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="comments" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Comments & Documentation</h2>
          </div>
          <CodeBlock>{`// Single line comment for brief explanations

/**
 * Multi-line comment for functions
 * @param {number} timestamp - The playback timestamp
 * @returns {void}
 */
function seekTo(timestamp) {
  // Implementation
}`}</CodeBlock>
        </section>

        <section id="testing" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Testing</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Test with multiple devices before submitting changes</li>
            <li>Verify both YouTube and local media sync work</li>
            <li>Check mobile browser compatibility</li>
            <li>Test edge cases (disconnection, reconnection)</li>
          </ul>
        </section>
      </div>
      <TableOfContents items={tocItems} />
    </div>
  );
};

export default ContributingStandards;
