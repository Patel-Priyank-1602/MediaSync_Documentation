import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { LayoutDashboard, Monitor, Settings, Users } from 'lucide-react';

const UsageControllerDashboard = () => {
  const tocItems = [
    { id: 'overview', title: 'Dashboard Overview', level: 2 },
    { id: 'media-selection', title: 'Media Selection', level: 2 },
    { id: 'playback-controls', title: 'Playback Controls', level: 2 },
    { id: 'client-management', title: 'Client Management', level: 2 },
  ];

  return (
    <DocsLayout>
      <Breadcrumb items={[
        { label: 'Docs', href: '/docs' },
        { label: 'Usage Guide', href: '/docs/usage/controller' },
        { label: 'Controller Dashboard' }
      ]} />
      
      <div className="flex gap-8">
        <div className="flex-1 max-w-3xl">
          <h1 className="text-4xl font-bold mt-6 mb-4">Controller Dashboard</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The central hub for managing synchronized media playback across all connected devices.
          </p>

          <section id="overview" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Dashboard Overview</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              The controller dashboard is your command center. Access it by opening <code className="bg-muted px-2 py-1 rounded">http://YOUR_IP:3000/controller.html</code> on your host device.
            </p>
            <div className="grid gap-4 mt-6">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">🎛️ Media Controls</h4>
                <p className="text-sm text-muted-foreground">Play, pause, seek, and restart controls for all media types</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">📊 Status Panel</h4>
                <p className="text-sm text-muted-foreground">Real-time view of connected clients and sync status</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">📱 QR Codes</h4>
                <p className="text-sm text-muted-foreground">Quick-access codes for WiFi and client page connection</p>
              </div>
            </div>
          </section>

          <section id="media-selection" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Media Selection</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Choose from three media types:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>YouTube:</strong> Paste any YouTube URL or video ID</li>
              <li><strong>Local Video:</strong> Upload MP4/WebM files from your device</li>
              <li><strong>Local Audio:</strong> Upload MP3/WAV files for synchronized audio</li>
            </ul>
          </section>

          <section id="playback-controls" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Playback Controls</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Control</th>
                    <th className="text-left py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">▶️ Play</td>
                    <td className="py-3 px-4">Start playback on all clients</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">⏸️ Pause</td>
                    <td className="py-3 px-4">Pause all clients simultaneously</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">⏩ Seek</td>
                    <td className="py-3 px-4">Jump to specific timestamp</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">⏮️ Restart</td>
                    <td className="py-3 px-4">Reset playback to beginning</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="client-management" className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold">Client Management</h2>
            </div>
            <p className="text-muted-foreground">
              The dashboard shows a live count of connected clients. Monitor connection status and ensure all devices are synced before starting playback.
            </p>
          </section>

          <DocNavigation
            previous={{ title: "Network Requirements", href: "/docs/getting-started/network" }}
            next={{ title: "Joining as a Client", href: "/docs/usage/joining" }}
          />
        </div>
        <TableOfContents items={tocItems} />
      </div>
    </DocsLayout>
  );
};

export default UsageControllerDashboard;