import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { 
  Crown, 
  Users, 
  Play, 
  Upload, 
  Radio, 
  Clock, 
  Shield, 
  Check, 
  X,
  Info 
} from 'lucide-react';

const UsageHostClient = () => {
  const tocItems = [
    { id: 'host-role', title: 'Host Role', level: 2 },
    { id: 'client-role', title: 'Client Role', level: 2 },
    { id: 'comparison', title: 'Permissions Matrix', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb
        items={[
          { label: 'Docs', href: '/docs' },
          { label: 'Usage Guide', href: '/docs/usage/controller' },
          { label: 'Host vs Client', href: '#' },
        ]}
      />

      <div className="flex gap-10">
        <div className="flex-1 max-w-3xl">
          {/* Header */}
          <div className="space-y-4 mb-10">
            <h1 className="text-4xl font-bold tracking-tight">
              Host vs Client Behavior
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Understanding the distinction between the controller (Host) and the 
              audience (Clients) is key to managing synchronization effectively.
            </p>
          </div>

          <hr className="my-8 border-border" />

          {/* HOST ROLE */}
          <section id="host-role" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <Crown className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Host Role</h2>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">The Controller</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              The <strong className="text-foreground font-semibold">Host</strong> acts as the single source of truth. 
              The server trusts the Host's timestamps and state changes above all else to maintain synchronization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FeatureCard 
                icon={<Play className="h-4 w-4" />}
                title="Playback Control"
                desc="Exclusive ability to play, pause, seek, and restart media."
              />
              <FeatureCard 
                icon={<Upload className="h-4 w-4" />}
                title="Media Management"
                desc="Upload local files, delete media, or load YouTube URLs."
              />
              <FeatureCard 
                icon={<Radio className="h-4 w-4" />}
                title="Broadcasting"
                desc="Sends authoritative sync commands to all connected clients."
              />
              <FeatureCard 
                icon={<Shield className="h-4 w-4" />}
                title="State Authority"
                desc="Maintains the master timeline that others must follow."
              />
            </div>

            <InfoCallout title="Why only one host?">
              Restricting control to a single host prevents "race conditions" where multiple users 
              fighting for control would cause the video to stutter or jump unexpectedly.
            </InfoCallout>
          </section>

          {/* CLIENT ROLE */}
          <section id="client-role" className="mb-16 scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Client Role</h2>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">The Audience</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground font-semibold">Clients</strong> are passive participants. 
              They maintain a persistent WebSocket connection to receive updates and adjust their local player 
              to match the Host.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <FeatureCard 
                icon={<Radio className="h-4 w-4" />}
                title="Passive Receiver"
                desc="Listens for socket events via WebSocket (Socket.IO)."
              />
              <FeatureCard 
                icon={<Clock className="h-4 w-4" />}
                title="Auto-Correction"
                desc="Micro-adjusts playback speed or seeks to align with Host."
              />
              <FeatureCard 
                icon={<Play className="h-4 w-4" />}
                title="Local Rendering"
                desc="Streams the actual video file directly (not a screen share)."
              />
              <FeatureCard 
                icon={<Shield className="h-4 w-4" />}
                title="Read-Only"
                desc="UI controls are often disabled or overridden by sync events."
              />
            </div>

            <InfoCallout title="Late Joiners">
              When a client joins a room that is already in progress, they immediately request 
              the current timestamp and state, jumping straight to the live action.
            </InfoCallout>
          </section>

          {/* COMPARISON TABLE */}
          <section id="comparison" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight mb-6">Permissions Matrix</h2>
            <div className="border border-border rounded-xl overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/50 font-medium border-b border-border">
                  <tr>
                    <th className="p-4 w-1/2">Action</th>
                    <th className="p-4 text-center text-amber-600 dark:text-amber-500">Host</th>
                    <th className="p-4 text-center text-blue-600 dark:text-blue-500">Client</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  <TableRow label="Play / Pause / Seek" host={true} client={false} />
                  <TableRow label="Load YouTube URL" host={true} client={false} />
                  <TableRow label="Upload Files" host={true} client={false} />
                  <TableRow label="View Video" host={true} client={true} />
                </tbody>
              </table>
            </div>
          </section>

          <DocNavigation
            previous={{ title: 'Playback Controls', href: '/docs/usage/playback' }}
            next={{ title: 'YouTube Sync', href: '/docs/features/youtube' }}
          />
        </div>

        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

// --- Subcomponents for cleaner usage ---

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-4 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors">
    <div className="flex items-center gap-2 mb-2">
      <div className="text-primary">{icon}</div>
      <h3 className="font-semibold text-sm text-foreground">{title}</h3>
    </div>
    <p className="text-sm text-muted-foreground">{desc}</p>
  </div>
);

const InfoCallout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="relative pl-6 py-4 pr-4 rounded-r-xl border-y border-r border-border bg-muted/30">
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40 rounded-l-full" />
    <div className="flex items-start gap-3">
      <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <div>
        <h4 className="font-semibold text-sm text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  </div>
);

const TableRow = ({ label, host, client }: { label: string, host: boolean, client: boolean }) => (
  <tr className="hover:bg-muted/20 transition-colors">
    <td className="p-4 font-medium text-muted-foreground">{label}</td>
    <td className="p-4 text-center">
      {host ? <Check className="h-5 w-5 mx-auto text-green-500" /> : <X className="h-5 w-5 mx-auto text-muted-foreground/30" />}
    </td>
    <td className="p-4 text-center">
      {client ? <Check className="h-5 w-5 mx-auto text-green-500" /> : <X className="h-5 w-5 mx-auto text-muted-foreground/30" />}
    </td>
  </tr>
);

export default UsageHostClient;