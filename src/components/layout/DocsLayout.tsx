import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Footer } from "@/components/layout/Footer";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <DocsSidebar />

        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-4xl px-4 py-8 md:px-12">
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
