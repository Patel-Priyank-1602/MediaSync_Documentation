import React from 'react';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { GitPullRequest, GitBranch, CheckSquare, MessageCircle } from 'lucide-react';

const CodeBlock = ({ children }: { children: string }) => (
  <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
    <code>{children}</code>
  </pre>
);

const ContributingPR = () => {
  const tocItems = [
    { id: 'before', title: 'Before You Start', level: 2 },
    { id: 'process', title: 'PR Process', level: 2 },
    { id: 'guidelines', title: 'PR Guidelines', level: 2 },
    { id: 'review', title: 'Review Process', level: 2 },
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1 max-w-3xl">
        <Breadcrumb items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Contributing', href: '/docs/contributing/structure' },
          { label: 'Pull Request Guide' }
        ]} />
        
        <h1 className="text-4xl font-bold mt-6 mb-4">Pull Request Guide</h1>
        <p className="text-lg text-muted-foreground mb-8">
          How to submit changes to Media Sync Server.
        </p>

        <section id="before" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GitBranch className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Before You Start</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Fork the repository</li>
            <li>Create a feature branch from <code className="bg-muted px-1 rounded">main</code></li>
            <li>Make sure tests pass locally</li>
            <li>Keep changes focused and atomic</li>
          </ol>
          <CodeBlock>{`# Fork and clone
git clone https://github.com/YOUR_USERNAME/media-sync-server.git

# Create feature branch
git checkout -b feature/my-new-feature

# Make changes, then commit
git add .
git commit -m "feat: add new feature"`}</CodeBlock>
        </section>

        <section id="process" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <GitPullRequest className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">PR Process</h2>
          </div>
          <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
            <li>Push your branch to your fork</li>
            <li>Open a Pull Request against <code className="bg-muted px-1 rounded">main</code></li>
            <li>Fill out the PR template</li>
            <li>Wait for review and address feedback</li>
            <li>Once approved, your PR will be merged</li>
          </ol>
        </section>

        <section id="guidelines" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <CheckSquare className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">PR Guidelines</h2>
          </div>
          <div className="space-y-3">
            <div className="p-4 border border-green-500/30 rounded-lg bg-green-500/5">
              <p className="text-sm">✅ Clear, descriptive title</p>
            </div>
            <div className="p-4 border border-green-500/30 rounded-lg bg-green-500/5">
              <p className="text-sm">✅ Explain what and why, not just how</p>
            </div>
            <div className="p-4 border border-green-500/30 rounded-lg bg-green-500/5">
              <p className="text-sm">✅ Include screenshots for UI changes</p>
            </div>
            <div className="p-4 border border-green-500/30 rounded-lg bg-green-500/5">
              <p className="text-sm">✅ Reference related issues</p>
            </div>
            <div className="p-4 border border-red-500/30 rounded-lg bg-red-500/5">
              <p className="text-sm">❌ Don't mix unrelated changes</p>
            </div>
            <div className="p-4 border border-red-500/30 rounded-lg bg-red-500/5">
              <p className="text-sm">❌ Don't include generated files</p>
            </div>
          </div>
        </section>

        <section id="review" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Review Process</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            What to expect during review:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Maintainers will review within a few days</li>
            <li>You may receive feedback or change requests</li>
            <li>Discussion is encouraged - ask questions!</li>
            <li>Once approved, your code will be merged</li>
          </ul>
        </section>
      </div>
      <TableOfContents items={tocItems} />
    </div>
  );
};

export default ContributingPR;
