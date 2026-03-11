import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import {
    LayoutDashboard,
    Users,
    Wifi,
    UserX,
    Eye,
    Shield,
    AlertTriangle,
    Activity,
} from 'lucide-react';

const FeaturesControllerDashboard = () => {
    const tocItems = [
        { id: 'overview', title: 'Overview', level: 2 },
        { id: 'dashboard-stats', title: 'Dashboard Statistics', level: 2 },
        { id: 'connected-devices', title: 'Connected Devices', level: 2 },
        { id: 'kick-ban', title: 'Kick & Ban Clients', level: 2 },
        { id: 'pending-requests', title: 'Pending Requests', level: 2 },
        { id: 'notes', title: 'Important Notes', level: 2 },
    ];

    return (
        <DocsLayout>
            <Breadcrumb
                items={[
                    { label: 'Docs', href: '/docs' },
                    { label: 'Features', href: '/docs/features/youtube' },
                    { label: 'Controller Dashboard' },
                ]}
            />

            <div className="flex gap-12">
                <div className="flex-1 max-w-4xl">
                    {/* HEADER */}
                    <div className="mt-6 mb-12">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Controller Dashboard & Client Management
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Monitor all connected devices, manage join requests, and kick or ban clients from the session directly from the controller dashboard.
                        </p>
                    </div>

                    {/* OVERVIEW */}
                    <section id="overview" className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <LayoutDashboard className="h-7 w-7 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold">Overview</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            The controller dashboard is the command center for managing your MediaSync session. It provides a real-time overview of the server status, connected clients, controllers, and pending join requests — all in a clean, dark-themed interface.
                        </p>
                    </section>

                    {/* DASHBOARD STATS */}
                    <section id="dashboard-stats" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <Activity className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Dashboard Statistics
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-6">
                            The dashboard panel displays the following real-time statistics:
                        </p>

                        <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden mb-6">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b bg-muted/50">
                                        <th className="text-left py-3 px-5 text-sm font-medium">Metric</th>
                                        <th className="text-left py-3 px-5 text-sm font-medium">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-3 px-5">
                                            <span className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                                Server Status
                                            </span>
                                        </td>
                                        <td className="py-3 px-5 text-muted-foreground">Shows whether the server is Online or Offline</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 px-5 font-medium">Connected Clients</td>
                                        <td className="py-3 px-5 text-muted-foreground">Total number of approved and active client connections</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 px-5 font-medium">Controllers</td>
                                        <td className="py-3 px-5 text-muted-foreground">Number of active controller connections</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-5">
                                            <span className="flex items-center gap-2">
                                                <span className="text-orange-500 font-medium">Pending Requests</span>
                                            </span>
                                        </td>
                                        <td className="py-3 px-5 text-muted-foreground">Number of clients waiting for approval to join</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-5">
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Dashboard Location:</strong>{' '}
                                The dashboard panel is located on the left side of the controller interface, visible alongside the media controls.
                            </p>
                        </div>
                    </section>

                    {/* CONNECTED DEVICES */}
                    <section id="connected-devices" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Connected Devices Panel
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-6">
                            Click the <strong>"View All Devices"</strong> button on the dashboard to open the connected devices panel. This panel shows:
                        </p>

                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm mb-6">
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">Controllers</h4>
                                    <div className="p-4 border rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="font-medium">Controller</span>
                                                <span className="ml-2 text-xs font-bold bg-green-500/20 text-green-500 px-2 py-0.5 rounded">HOST</span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-1">IP: 10.30.94.65</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">Clients</h4>
                                    <div className="p-4 border rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="font-medium">Client</span>
                                            </div>
                                            <button className="px-3 py-1 text-xs font-medium bg-red-500/20 text-red-500 border border-red-500/30 rounded">
                                                Kick
                                            </button>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-1">IP: 10.30.94.65</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                                <h4 className="font-semibold mb-1">Device Name</h4>
                                <p className="text-sm text-muted-foreground">The display name entered by the user when they connected</p>
                            </div>
                            <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                                <h4 className="font-semibold mb-1">IP Address</h4>
                                <p className="text-sm text-muted-foreground">The local network IP address of each connected device</p>
                            </div>
                            <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                                <h4 className="font-semibold mb-1">HOST Badge</h4>
                                <p className="text-sm text-muted-foreground">Controllers are marked with a green HOST badge for easy identification</p>
                            </div>
                            <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
                                <h4 className="font-semibold mb-1">Kick Button</h4>
                                <p className="text-sm text-muted-foreground">Each client has a Kick button to remove them from the session</p>
                            </div>
                        </div>
                    </section>

                    {/* KICK & BAN */}
                    <section id="kick-ban" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <UserX className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Kick & Ban Clients
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-6">
                            The controller has full authority to remove any client from the session. When a client is kicked:
                        </p>

                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm mb-6">
                            <ol className="space-y-4 text-muted-foreground">
                                <li>1. Click the <strong className="text-red-500">Kick</strong> button next to the client's name in the Connected Devices panel</li>
                                <li>2. The client's connection is <strong>immediately terminated</strong></li>
                                <li>3. All media controls and content are <strong>disabled</strong> on the kicked client's device</li>
                                <li>4. The client is <strong>banned for the current session</strong> — they cannot rejoin without a new approval from the controller</li>
                                <li>5. If the kicked client tries to reconnect, they must enter their name again and wait for controller approval</li>
                            </ol>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl bg-red-500/10 border border-red-500/20 p-4">
                            <Shield className="h-5 w-5 text-red-500 mt-0.5" />
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Session Ban:</strong> Kicked clients are banned for the <strong>current session only</strong>. When the server restarts, all bans are cleared and clients can request to join fresh.
                            </p>
                        </div>
                    </section>

                    {/* PENDING REQUESTS */}
                    <section id="pending-requests" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <Eye className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Pending Requests
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-4">
                            The Pending Requests counter on the dashboard shows how many clients are waiting for approval. The controller can:
                        </p>

                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                            <ul className="space-y-3 text-muted-foreground">
                                <li>• View each pending request with the client's <strong>name and IP</strong></li>
                                <li>• <strong>Accept</strong> the request to grant the client access to the session</li>
                                <li>• <strong>Reject</strong> the request to deny the client access</li>
                                <li>• Receive an <strong>audio notification</strong> when a new request arrives</li>
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
                                <li>• The dashboard <strong>updates in real-time</strong> as clients connect and disconnect</li>
                                <li>• Only the controller can kick clients — clients cannot kick other clients</li>
                                <li>• All session activity (joins, kicks, rejections) is <strong>logged</strong> and saved when the server shuts down</li>
                                <li>• The dashboard is accessible only from the controller page (<code className="bg-muted px-2 py-0.5 rounded">controller.html</code>)</li>
                            </ul>
                        </div>
                    </section>

                    <DocNavigation
                        previous={{ title: 'Client Join & Approval', href: '/docs/features/client-join' }}
                        next={{ title: 'Now Playing Preview', href: '/docs/features/now-playing' }}
                    />
                </div>

                <TableOfContents items={tocItems} />
            </div>
        </DocsLayout>
    );
};

export default FeaturesControllerDashboard;
