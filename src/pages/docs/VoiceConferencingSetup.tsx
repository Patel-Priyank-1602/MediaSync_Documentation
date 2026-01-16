import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { Link } from "react-router-dom";

const VoiceConferencingSetup = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-4xl px-6 py-8 md:px-12">
            <Breadcrumb
              items={[
                { label: "Guides", href: "/docs" },
                { label: "Voice Conferencing", href: "/docs/voice-conferencing/overview" },
                { label: "Setup" },
              ]}
            />

            <h1 className="text-5xl font-bold text-foreground mb-6">Setup</h1>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              To get started with creating live video calls from Dyte, make sure to finish these steps and then move on to
              integrating Dyte in your application.
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <section>
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    1
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      Register in the Developer Portal
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To get started with Dyte, you must first register an account on the{" "}
                      <Link to="#" className="text-primary hover:underline">
                        Developer portal
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </section>

              {/* Step 2 */}
              <section>
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    2
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      Create an Organisation
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      After you have created your account on Dyte, go ahead and create an orgnisation. All meeting, sessions, logs
                      and recordings are created within an organisation.
                    </p>
                  </div>
                </div>
              </section>

              {/* Step 3 */}
              <section>
                <div className="flex items-start gap-4">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    3
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      Get your API Keys
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Copy the{" "}
                      <Link to="#" className="text-primary hover:underline">
                        API Keys
                      </Link>{" "}
                      for your organization from the Developer portal. The API Key is unique to your organization
                      and is required as an authorization header to use Dyte REST APIs.
                    </p>

                    {/* Code block mockup */}
                    <div className="rounded-lg border border-border bg-card overflow-hidden">
                      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">Dyte.io Academy</span>
                          <span className="text-xs text-muted-foreground">&gt;</span>
                          <span className="text-xs text-muted-foreground">API Keys</span>
                        </div>
                      </div>
                      <div className="p-4 space-y-4">
                        <div>
                          <label className="text-xs text-muted-foreground mb-2 block">Organization ID</label>
                          <div className="flex items-center gap-2">
                            <code className="flex-1 rounded bg-muted px-3 py-2 text-sm text-foreground font-mono">
                              1effe7fd-c815-4448-bbfb-53e8eb9f15f1
                            </code>
                            <button className="rounded bg-primary px-3 py-2 text-xs text-primary-foreground">
                              Copy
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground mb-2 block">API Key</label>
                          <div className="flex items-center gap-2">
                            <code className="flex-1 rounded bg-muted px-3 py-2 text-sm text-foreground font-mono">
                              ••••••••••••••0T7c
                            </code>
                            <button className="rounded bg-primary px-3 py-2 text-xs text-primary-foreground">
                              Copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VoiceConferencingSetup;
