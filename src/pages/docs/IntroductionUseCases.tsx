import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { DocNavigation } from "@/components/docs/DocNavigation";
import { GraduationCap, Home, Users, Presentation, Music, PartyPopper } from "lucide-react";

const tocItems = [
  { id: "education", title: "Education & Classrooms", level: 2 },
  { id: "home-theater", title: "Home Theater", level: 2 },
  { id: "group-listening", title: "Group Listening", level: 2 },
  { id: "presentations", title: "Presentations", level: 2 },
  { id: "events", title: "Events & Parties", level: 2 },
];

const IntroductionUseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-5xl px-4 py-8 md:px-12">
            <Breadcrumb
              items={[
                { label: "Documentation", href: "/docs" },
                { label: "Introduction" },
                { label: "Use Cases" },
              ]}
            />

            <div className="flex gap-8">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold text-foreground mb-4 md:text-4xl">
                  Use Cases
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Discover the many ways you can use the Media Sync Server in real-world scenarios.
                </p>

                <section id="education" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      Education & Classrooms
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Perfect for educational settings where synchronized content viewing is essential.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong className="text-foreground">Video Lessons:</strong> Play educational videos synchronized across all student devices</li>
                    <li>• <strong className="text-foreground">Online Lectures:</strong> Stream recorded lectures to multiple screens in a classroom</li>
                    <li>• <strong className="text-foreground">Group Discussions:</strong> Pause at specific moments for class discussions</li>
                    <li>• <strong className="text-foreground">Training Sessions:</strong> Corporate training with synchronized video content</li>
                  </ul>
                </section>

                <section id="home-theater" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      Home Theater
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Create an immersive multi-screen viewing experience at home.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong className="text-foreground">Multi-Room Audio:</strong> Sync audio across multiple speakers/devices</li>
                    <li>• <strong className="text-foreground">Watch Parties:</strong> Everyone watches the same content at the same moment</li>
                    <li>• <strong className="text-foreground">Sports Events:</strong> Synchronized viewing across multiple TVs</li>
                    <li>• <strong className="text-foreground">Movie Nights:</strong> Perfect sync for family movie sessions</li>
                  </ul>
                </section>

                <section id="group-listening" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Music className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      Group Listening Sessions
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Share music and audio content with perfect synchronization.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong className="text-foreground">Album Listening Parties:</strong> Experience new releases together</li>
                    <li>• <strong className="text-foreground">Podcast Sessions:</strong> Group podcast listening with discussion pauses</li>
                    <li>• <strong className="text-foreground">Ambient Sound:</strong> Synchronized background music for spaces</li>
                    <li>• <strong className="text-foreground">Sound Amplification:</strong> Multiple devices for louder audio output</li>
                  </ul>
                  <div className="bg-muted/50 border border-border rounded-lg p-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">💡 Origin Story:</strong> This project was inspired by the challenge 
                      of playing music on two laptops to increase volume—manual syncing caused annoying echoes!
                    </p>
                  </div>
                </section>

                <section id="presentations" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Presentation className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      Presentations & Demos
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Enhance presentations with synchronized video content.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong className="text-foreground">Product Demos:</strong> Show video demos on multiple screens</li>
                    <li>• <strong className="text-foreground">Conference Displays:</strong> Synchronized signage across venue screens</li>
                    <li>• <strong className="text-foreground">Trade Shows:</strong> Coordinated video playback at booth displays</li>
                  </ul>
                </section>

                <section id="events" className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <PartyPopper className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold text-foreground">
                      Events & Parties
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Make events more engaging with synchronized media.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong className="text-foreground">Dance Parties:</strong> Sync music across multiple speaker systems</li>
                    <li>• <strong className="text-foreground">Countdown Events:</strong> New Year's or launch countdowns on all screens</li>
                    <li>• <strong className="text-foreground">Karaoke:</strong> Lyrics video synced across display devices</li>
                    <li>• <strong className="text-foreground">Silent Discos:</strong> Alternative to traditional headphone sync systems</li>
                  </ul>
                </section>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-2">Have a unique use case?</h3>
                  <p className="text-muted-foreground">
                    The Media Sync Server is flexible and can adapt to many scenarios. 
                    If you've found an interesting use case, consider contributing to the project!
                  </p>
                </div>

                <DocNavigation
                  previous={{ title: "Architecture & Flow", href: "/docs/introduction/architecture" }}
                  next={{ title: "System Requirements", href: "/docs/getting-started/requirements" }}
                />
              </div>
              <TableOfContents items={tocItems} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IntroductionUseCases;
