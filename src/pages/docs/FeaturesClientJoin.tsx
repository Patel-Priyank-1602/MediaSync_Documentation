import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import {
    UserPlus,
    ShieldCheck,
    ShieldX,
    UserCircle,
    Wifi,
    Bell,
    AlertTriangle,
} from 'lucide-react';

const FeaturesClientJoin = () => {
    const tocItems = [
        { id: 'overview', title: 'Overview', level: 2 },
        { id: 'name-entry', title: 'Name Entry', level: 2 },
        { id: 'join-request-flow', title: 'Join Request Flow', level: 2 },
        { id: 'controller-approval', title: 'Controller Approval', level: 2 },
        { id: 'client-waiting', title: 'Client Waiting Screen', level: 2 },
        { id: 'rejection-handling', title: 'Rejection Handling', level: 2 },
        { id: 'notes', title: 'Important Notes', level: 2 },
    ];

    return (
        <DocsLayout>
            <Breadcrumb
                items={[
                    { label: 'Docs', href: '/docs' },
                    { label: 'Features', href: '/docs/features/youtube' },
                    { label: 'Client Join & Approval' },
                ]}
            />

            <div className="flex gap-12">
                <div className="flex-1 max-w-4xl">
                    {/* HEADER */}
                    <div className="mt-6 mb-12">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">
                            Client Join & Approval System
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Secure your sync session with name-based identification and controller-approved client joining.
                        </p>
                    </div>

                    {/* OVERVIEW */}
                    <section id="overview" className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <UserPlus className="h-7 w-7 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold">Overview</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            MediaSync implements a permission-based joining system. When a new client wants to join a session, they must first provide their name. This name is then sent to the controller along with the client's IP address as a join request. The controller can choose to <strong>accept</strong> or <strong>reject</strong> the request. Only approved clients gain access to the synchronized media session.
                        </p>
                        <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-5">
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Security Benefit:</strong>{' '}
                                This prevents unauthorized devices on the same network from automatically joining your sync session.
                            </p>
                        </div>
                    </section>

                    {/* NAME ENTRY */}
                    <section id="name-entry" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <UserCircle className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Name Entry
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-6">
                            When a user opens the controller or client page for the first time, they are prompted to enter a <strong>display name</strong>. This name is used throughout the entire session:
                        </p>

                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm mb-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium mb-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        Controller
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        The controller enters their name and directly opens the dashboard. No approval needed — the controller is the host.
                                    </p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium mb-2 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        Client
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        The client enters their name and a <strong>join request</strong> is sent to the controller. The client must wait for approval before accessing the session.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-muted/50 border border-border p-5">
                            <h4 className="font-medium mb-2">Display Name Usage</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>• Shown in the <strong>chat</strong> alongside every message</li>
                                <li>• Displayed in the controller's <strong>dashboard</strong> device list</li>
                                <li>• Appears in the <strong>join request notification</strong> on the controller</li>
                                <li>• Logged in the <strong>session log</strong> file on server shutdown</li>
                            </ul>
                        </div>
                    </section>

                    {/* JOIN REQUEST FLOW */}
                    <section id="join-request-flow" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <Wifi className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Join Request Flow
                            </h2>
                        </div>

                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                            <div className="space-y-6">
                                <FlowStep
                                    step={1}
                                    title="Client Opens Page"
                                    description="Client navigates to the client URL and sees the name entry screen."
                                />
                                <FlowStep
                                    step={2}
                                    title="Client Enters Name"
                                    description="Client types their display name and submits the form."
                                />
                                <FlowStep
                                    step={3}
                                    title="Request Sent to Controller"
                                    description="A join request containing the client's name and IP address is sent to the controller via WebSocket."
                                />
                                <FlowStep
                                    step={4}
                                    title="Controller Reviews Request"
                                    description="The controller sees a notification with the client's name and IP. They can accept or reject."
                                />
                                <FlowStep
                                    step={5}
                                    title="Client Gets Access"
                                    description="If accepted, the client page loads the media and starts syncing. If rejected, the client sees a denial message."
                                />
                            </div>
                        </div>
                    </section>

                    {/* CONTROLLER APPROVAL */}
                    <section id="controller-approval" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Controller Approval Interface
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-6">
                            When a new client sends a join request, the controller receives a real-time notification:
                        </p>

                        <div className="grid gap-4 mb-6">
                            <FeatureCard
                                title="Audio Notification"
                                description="A sound alert plays when a new join request arrives, so the controller doesn't miss it."
                            />
                            <FeatureCard
                                title="Pending Requests Counter"
                                description="The dashboard shows the number of pending join requests in real-time."
                            />
                            <FeatureCard
                                title="Accept / Reject Buttons"
                                description="Each pending request shows the client's name and IP with Accept and Reject action buttons."
                            />
                            <FeatureCard
                                title="Request History"
                                description="Previously accepted and rejected requests are saved for reference during the session."
                            />
                        </div>
                    </section>

                    {/* CLIENT WAITING SCREEN */}
                    <section id="client-waiting" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <Bell className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Client Waiting Screen
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-4">
                            After submitting a join request, the client sees a <strong>waiting screen</strong> with:
                        </p>

                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                            <ul className="space-y-3 text-muted-foreground">
                                <li>• A message indicating that the request has been sent</li>
                                <li>• The client's display name shown on screen</li>
                                <li>• A loading spinner while waiting for the controller's decision</li>
                                <li>• Real-time status update when the controller accepts or rejects</li>
                            </ul>
                        </div>
                    </section>

                    {/* REJECTION HANDLING */}
                    <section id="rejection-handling" className="mb-20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <ShieldX className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">
                                Rejection Handling
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-4">
                            If the controller rejects a client's join request:
                        </p>

                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm mb-6">
                            <ul className="space-y-3 text-muted-foreground">
                                <li>• The client sees a <strong>"Request Denied"</strong> message</li>
                                <li>• The client cannot access any media controls or content</li>
                                <li>• The client may re-enter their name and submit a new request</li>
                            </ul>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Note:</strong> If a client is kicked after being accepted, they are <strong>banned for the current session</strong> and need controller approval again if they try to rejoin.
                            </p>
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
                                <li>• Each client <strong>must provide a name</strong> before they can request to join</li>
                                <li>• The name cannot be changed once the session starts</li>
                                <li>• The controller always has automatic access (no approval needed)</li>
                                <li>• Join request approval is per-session — restarting the server resets all permissions</li>
                            </ul>
                        </div>
                    </section>

                    <DocNavigation
                        previous={{ title: 'Chat System', href: '/docs/features/chat' }}
                        next={{ title: 'Controller Dashboard', href: '/docs/features/dashboard' }}
                    />
                </div>

                <TableOfContents items={tocItems} />
            </div>
        </DocsLayout>
    );
};

const FlowStep = ({
    step,
    title,
    description,
}: {
    step: number;
    title: string;
    description: string;
}) => (
    <div className="flex items-start gap-4">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
            {step}
        </div>
        <div>
            <h4 className="font-medium mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    </div>
);

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

export default FeaturesClientJoin;
