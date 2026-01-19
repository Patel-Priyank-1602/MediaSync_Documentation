import React from 'react';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { Scale, CheckCircle, XCircle, FileText } from 'lucide-react';

const LegalLicense = () => {
  const tocItems = [
    { id: 'overview', title: 'License Overview', level: 2 },
    { id: 'permissions', title: 'Permissions', level: 2 },
    { id: 'limitations', title: 'Limitations', level: 2 },
    { id: 'full-text', title: 'Full License Text', level: 2 },
  ];

  return (
    <div className="flex gap-8">
      <div className="flex-1 max-w-3xl">
        <Breadcrumb items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Legal', href: '/docs/legal/license' },
          { label: 'License' }
        ]} />
        
        <h1 className="text-4xl font-bold mt-6 mb-4">License</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Media Sync Server is open source software.
        </p>

        <section id="overview" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">License Overview</h2>
          </div>
          <div className="p-6 bg-muted rounded-lg">
            <p className="text-lg font-medium mb-2">MIT License</p>
            <p className="text-muted-foreground">
              A permissive license that allows you to do almost anything with the code as long as you include the original license and copyright notice.
            </p>
          </div>
        </section>

        <section id="permissions" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold">Permissions</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border border-green-500/30 rounded-lg">
              <p className="font-medium">✅ Commercial Use</p>
              <p className="text-sm text-muted-foreground">Use for commercial purposes</p>
            </div>
            <div className="p-4 border border-green-500/30 rounded-lg">
              <p className="font-medium">✅ Modification</p>
              <p className="text-sm text-muted-foreground">Modify the source code</p>
            </div>
            <div className="p-4 border border-green-500/30 rounded-lg">
              <p className="font-medium">✅ Distribution</p>
              <p className="text-sm text-muted-foreground">Distribute the software</p>
            </div>
            <div className="p-4 border border-green-500/30 rounded-lg">
              <p className="font-medium">✅ Private Use</p>
              <p className="text-sm text-muted-foreground">Use privately</p>
            </div>
          </div>
        </section>

        <section id="limitations" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <XCircle className="h-6 w-6 text-red-500" />
            </div>
            <h2 className="text-2xl font-semibold">Limitations</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border border-red-500/30 rounded-lg">
              <p className="font-medium">❌ Liability</p>
              <p className="text-sm text-muted-foreground">No liability for damages</p>
            </div>
            <div className="p-4 border border-red-500/30 rounded-lg">
              <p className="font-medium">❌ Warranty</p>
              <p className="text-sm text-muted-foreground">No warranty provided</p>
            </div>
          </div>
        </section>

        <section id="full-text" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold">Full License Text</h2>
          </div>
          <div className="p-4 bg-muted rounded-lg text-sm font-mono">
            <p>MIT License</p>
            <br />
            <p>Copyright (c) 2024 Media Sync Server</p>
            <br />
            <p>
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software...
            </p>
          </div>
        </section>
      </div>
      <TableOfContents items={tocItems} />
    </div>
  );
};

export default LegalLicense;
