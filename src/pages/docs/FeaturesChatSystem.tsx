import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import {
  MessageSquare,
  Send,
  Users,
  Smartphone,
  Monitor,
  AlertTriangle,
} from 'lucide-react';

const FeaturesChatSystem = () => {
  const tocItems = [
    { id: 'overview', title: 'Overview', level: 2 },
    { id: 'how-it-works', title: 'How It Works', level: 2 },
    { id: 'chat-interface', title: 'Chat Interface', level: 2 },
    { id: 'message-display', title: 'Message Display', level: 2 },
    { id: 'mobile-view', title: 'Mobile Chat View', level: 2 },
    { id: 'notes', title: 'Important Notes', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Features', href: '/docs/features/youtube' },
          { label: 'Chat System' },
        ]}
      />

      <div className="flex gap-12">
        <div className="flex-1 max-w-4xl">
          {/* HEADER */}
          <div className="mt-6 mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Real-Time Chat System
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Communicate instantly with all connected devices during a media sync session using the built-in chat feature.
            </p>
          </div>

          {/* OVERVIEW */}
          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageSquare className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              MediaSync includes a built-in real-time chat system powered by WebSocket connections. Both the controller and all connected clients can send and receive messages instantly. This allows seamless communication during synchronized media playback sessions — no external messaging app needed.
            </p>
            <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-5">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Key Benefit:</strong>{' '}
                Chat messages are broadcast in real-time to all connected devices, enabling instant coordination between controller and clients.
              </p>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section id="how-it-works" className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-xl bg-primary/15 p-3">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                How It Works
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <ol className="space-y-4 text-muted-foreground">
                <li>1. Each user (controller or client) enters their <strong>display name</strong> when they first connect</li>
                <li>2. The display name is shown alongside every message in the conversation</li>
                <li>3. Messages are sent via WebSocket and broadcast to all connected devices</li>
                <li>4. All participants see messages in real-time with the sender's name</li>
              </ol>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Monitor className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Controller Side</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  The controller can send messages and see all client messages. Chat panel is accessible alongside media controls.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Client Side</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Clients can chat while watching synced media. Messages from the controller and other clients appear instantly.
                </p>
              </div>
            </div>
          </section>

          {/* CHAT INTERFACE */}
          <section id="chat-interface" className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-xl bg-primary/15 p-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Chat Interface
              </h2>
            </div>

            <p className="text-muted-foreground mb-6">
              The chat panel is integrated into both the controller and client interfaces. It features:
            </p>

            <div className="grid gap-4 mb-6">
              <FeatureCard
                title="Message Input Area"
                description="A text input at the bottom of the chat panel allows you to type and send messages. Press Enter or click the Send button."
              />
              <FeatureCard
                title="Message History"
                description="All messages are displayed in a scrollable conversation area with the sender's name and timestamp."
              />
              <FeatureCard
                title="Chat Toggle Button"
                description="A floating chat button allows you to open/close the chat panel without interrupting media playback."
              />
              <FeatureCard
                title="Unread Indicator"
                description="When new messages arrive while the chat panel is closed, a notification badge appears on the chat button."
              />
            </div>
          </section>

          {/* MESSAGE DISPLAY */}
          <section id="message-display" className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-xl bg-primary/15 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Message Display
              </h2>
            </div>

            <p className="text-muted-foreground mb-6">
              Each message in the chat displays the following information:
            </p>

            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm mb-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-xs font-bold text-blue-500">P</div>
                  <div>
                    <p className="text-sm font-medium">Priyank <span className="text-xs text-muted-foreground ml-2">10:30 AM</span></p>
                    <p className="text-sm text-muted-foreground">Hey, can everyone see the video?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-xs font-bold text-green-500">A</div>
                  <div>
                    <p className="text-sm font-medium">Alex <span className="text-xs text-muted-foreground ml-2">10:31 AM</span></p>
                    <p className="text-sm text-muted-foreground">Yes, it's playing perfectly!</p>
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-3 text-muted-foreground">
              <li>• <strong>Sender Name:</strong> The display name entered when connecting</li>
              <li>• <strong>Avatar Initial:</strong> First letter of the sender's name as a colored avatar</li>
              <li>• <strong>Timestamp:</strong> When the message was sent</li>
              <li>• <strong>Message Content:</strong> The actual text message</li>
            </ul>
          </section>

          {/* MOBILE VIEW */}
          <section id="mobile-view" className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-xl bg-primary/15 p-3">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Mobile Chat View
              </h2>
            </div>

            <p className="text-muted-foreground mb-4">
              On mobile devices, the chat opens as a <strong>full-screen overlay</strong> for a better experience. The chat panel covers the entire screen, providing more space for reading and typing messages.
            </p>

            <div className="rounded-xl bg-muted/50 border border-border p-5">
              <h4 className="font-medium mb-2">Mobile Chat Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full-screen overlay mode for comfortable typing</li>
                <li>• Close button to return to the media view</li>
                <li>• Input area stays visible above the keyboard</li>
                <li>• Auto-scroll to the latest message</li>
              </ul>
            </div>
          </section>

          {/* IMPORTANT NOTES */}
          <section id="notes" className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="rounded-xl bg-primary/15 p-3">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Important Notes
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
              <ul className="space-y-3 text-muted-foreground">
                <li>• Chat messages are <strong>session-based</strong> — they are not persisted after the server restarts</li>
                <li>• All messages are visible to <strong>all connected devices</strong> (there are no private messages)</li>
                <li>• The display name entered at the start is used throughout the entire session</li>
                <li>• Chat works alongside all media types: YouTube, Video, Audio, and PDF</li>
              </ul>
            </div>

            <div className="flex items-start gap-3 rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 mt-6">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Chat functionality requires an active WebSocket connection. If a client gets disconnected, they will need to reconnect to resume chatting.
              </p>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Multi-Client Handling', href: '/docs/features/multi-client' }}
            next={{ title: 'Client Join & Approval', href: '/docs/features/client-join' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
    <h4 className="font-semibold mb-1">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export default FeaturesChatSystem;
