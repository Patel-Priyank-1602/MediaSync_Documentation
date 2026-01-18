import { AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MigrationGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="flex">
            <div className="flex-1 max-w-4xl px-6 py-8 md:px-12">
              <Breadcrumb
                items={[
                  { label: "Guides", href: "/docs" },
                  { label: "Dyte to RealtimeKit Migration", href: "/docs/migration/realtimekit" },
                  { label: "SDK Migration Guide" },
                ]}
              />

              <h1 className="text-5xl font-bold text-foreground mb-6">SDK Migration Guide</h1>

              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                As{" "}
                <Link to="#" className="text-primary hover:underline">
                  Dyte joins Cloudflare
                </Link>
                , we are transitioning all Dyte SDKs to the new Cloudflare RealtimeKit SDKs.
              </p>

              {/* Danger Alert */}
              <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">DANGER</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      The Dyte SDKs are now in maintenance mode and will no longer receive feature updates or bug fixes. We
                      strongly recommend migrating to the Cloudflare RealtimeKit SDKs to ensure you continue to receive the
                      latest features and improvements. You can find the official documentation for RealtimeKit{" "}
                      <Link to="#" className="text-primary hover:underline">
                        here
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Package Mapping */}
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Package Mapping</h2>

                <Tabs defaultValue="web" className="w-full">
                  <TabsList className="bg-muted border-b border-border rounded-none w-full justify-start h-auto p-0">
                    <TabsTrigger
                      value="web"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                    >
                      Web Components
                    </TabsTrigger>
                    <TabsTrigger
                      value="react"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                    >
                      React
                    </TabsTrigger>
                    <TabsTrigger
                      value="angular"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                    >
                      Angular
                    </TabsTrigger>
                    <TabsTrigger
                      value="react-native"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                    >
                      React Native
                    </TabsTrigger>
                    <TabsTrigger
                      value="android"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                    >
                      Android
                    </TabsTrigger>
                    <TabsTrigger
                      value="ios"
                      className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
                    >
                      iOS
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="web" className="mt-6">
                    <p className="text-muted-foreground mb-6">
                      The following table maps the deprecated Dyte SDKs to their new Cloudflare RealtimeKit equivalents for Web
                      Components:
                    </p>

                    <div className="rounded-lg border border-border overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Dyte SDK</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-foreground">RealtimeKit SDK</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-border">
                            <td className="px-4 py-3">
                              <code className="text-primary text-sm">@dytesdk/web-core</code>
                            </td>
                            <td className="px-4 py-3">
                              <code className="text-primary text-sm">@cloudflare/realtimekit</code>
                            </td>
                          </tr>
                          <tr className="border-t border-border">
                            <td className="px-4 py-3">
                              <code className="text-primary text-sm">@dytesdk/ui-kit</code>
                            </td>
                            <td className="px-4 py-3">
                              <code className="text-primary text-sm">@cloudflare/realtimekit-ui</code>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>

                  <TabsContent value="react" className="mt-6">
                    <p className="text-muted-foreground mb-6">
                      The following table maps the deprecated Dyte SDKs to their new Cloudflare RealtimeKit equivalents for React:
                    </p>

                    <div className="rounded-lg border border-border overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium text-foreground">Dyte SDK</th>
                            <th className="px-4 py-3 text-left text-sm font-medium text-foreground">RealtimeKit SDK</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-border">
                            <td className="px-4 py-3">
                              <code className="text-primary text-sm">@dytesdk/react-web-core</code>
                            </td>
                            <td className="px-4 py-3">
                              <code className="text-primary text-sm">@cloudflare/realtimekit-react</code>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>

                  <TabsContent value="angular" className="mt-6">
                    <p className="text-muted-foreground">Angular SDK migration guide coming soon.</p>
                  </TabsContent>

                  <TabsContent value="react-native" className="mt-6">
                    <p className="text-muted-foreground">React Native SDK migration guide coming soon.</p>
                  </TabsContent>

                  <TabsContent value="android" className="mt-6">
                    <p className="text-muted-foreground">Android SDK migration guide coming soon.</p>
                  </TabsContent>

                  <TabsContent value="ios" className="mt-6">
                    <p className="text-muted-foreground">iOS SDK migration guide coming soon.</p>
                  </TabsContent>
                </Tabs>
              </section>
            </div>

            {/* Right Sidebar - Table of Contents */}
            <aside className="hidden xl:block w-64 border-l border-border p-6">
              <h4 className="text-sm font-semibold text-foreground mb-4">Package Mapping</h4>
              <h4 className="text-sm font-semibold text-foreground mb-2">Migration Steps</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">1. Update package.json</li>
                <li className="hover:text-foreground cursor-pointer">2. Update Import Paths</li>
                <li className="hover:text-foreground cursor-pointer">3. Update Codebase with New Naming Conventions</li>
              </ul>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MigrationGuide;
