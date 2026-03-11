import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { MonitorPlay, Play, Pause, SkipBack, Clock, Video, Wifi, AlertTriangle } from 'lucide-react';

const FeaturesNowPlaying = () => {
    const tocItems = [
        { id: 'overview', title: 'Overview', level: 2 },
        { id: 'preview-panel', title: 'Preview Panel', level: 2 },
        { id: 'real-time-sync', title: 'Real-Time Sync', level: 2 },
        { id: 'playback-controls', title: 'Playback Controls', level: 2 },
        { id: 'supported-media', title: 'Supported Media Types', level: 2 },
    ];

    return (
        <DocsLayout>
            <Breadcrumb items={[
                { label: 'Docs', href: '/docs' },
                { label: 'Features', href: '/docs/features/youtube' },
                { label: 'Now Playing Preview' },
            ]} />

            <div className="flex gap-12">
                <div className="flex-1 max-w-4xl">
                    <div className="mt-6 mb-12">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">Now Playing (Preview)</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            See exactly what's playing on client screens with a live preview on the controller — every action reflects instantly.
                        </p>
                    </div>

                    <section id="overview" className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg"><MonitorPlay className="h-7 w-7 text-primary" /></div>
                            <h2 className="text-2xl font-semibold">Overview</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            The <strong>Now Playing (Preview)</strong> section on the controller shows a live preview of the currently playing media. Any action performed on the controller (play, pause, seek, restart) is <strong>automatically reflected on all client devices in real-time</strong>.
                        </p>
                        <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-5">
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Key Feature:</strong> The controller can monitor exact playback state without switching to a client device.
                            </p>
                        </div>
                    </section>

                    <section id="preview-panel" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3"><Video className="h-6 w-6 text-primary" /></div>
                            <h2 className="text-2xl font-semibold tracking-tight">Preview Panel</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">The Now Playing panel displays:</p>
                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm mb-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                    <div>
                                        <p className="text-xs text-green-500 font-medium uppercase tracking-wider mb-1">Now Playing (Preview)</p>
                                        <p className="text-sm font-medium">movie_file.mkv</p>
                                    </div>
                                    <span className="text-xs font-medium text-red-500">Paused</span>
                                </div>
                                <div className="bg-muted/30 rounded-lg aspect-video flex items-center justify-center">
                                    <div className="text-center text-muted-foreground">
                                        <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                        <p className="text-sm">Video Preview Area</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
                                    <span>51:50 / 2:56:02</span>
                                    <span>Type: Local Video | Time: 3113s</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <Card title="File Name" desc="Shows the name of the currently playing media file" />
                            <Card title="Playback Status" desc="Displays Playing or Paused with color-coded indicators" />
                            <Card title="Progress Bar" desc="Shows current playback position with total duration" />
                            <Card title="Media Type" desc="Indicates YouTube, Local Video, Local Audio, or PDF" />
                        </div>
                    </section>

                    <section id="real-time-sync" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3"><Wifi className="h-6 w-6 text-primary" /></div>
                            <h2 className="text-2xl font-semibold tracking-tight">Real-Time Sync</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">Every controller action is instantly mirrored on all clients:</p>
                        <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b bg-muted/50">
                                        <th className="text-left py-3 px-5 text-sm font-medium">Controller Action</th>
                                        <th className="text-left py-3 px-5 text-sm font-medium">Client Effect</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Press Play', 'All clients start playing simultaneously'],
                                        ['Press Pause', 'All clients pause at the same timestamp'],
                                        ['Seek to Time', 'All clients jump to the exact same position'],
                                        ['Press Restart', 'All clients restart from the beginning'],
                                        ['Skip +10s / -10s', 'All clients skip forward or backward'],
                                        ['Load New Media', 'All clients switch to the new media source'],
                                    ].map(([action, effect], i) => (
                                        <tr key={i} className="border-b last:border-0">
                                            <td className="py-3 px-5">{action}</td>
                                            <td className="py-3 px-5 text-muted-foreground">{effect}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="playback-controls" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3"><Play className="h-6 w-6 text-primary" /></div>
                            <h2 className="text-2xl font-semibold tracking-tight">Playback Controls</h2>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-4 mb-6">
                            <CtrlCard icon={<Play className="h-5 w-5" />} title="Play" desc="Start playback on all devices" />
                            <CtrlCard icon={<Pause className="h-5 w-5" />} title="Pause" desc="Pause on all devices" />
                            <CtrlCard icon={<SkipBack className="h-5 w-5" />} title="Restart" desc="Reset to beginning" />
                        </div>
                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                            <h4 className="font-medium mb-4">Seek Controls</h4>
                            <ul className="space-y-3 text-muted-foreground">
                                <li>• <strong>Seek to Time:</strong> Enter a specific timestamp in seconds</li>
                                <li>• <strong>-10s Button:</strong> Skip backward by 10 seconds</li>
                                <li>• <strong>+10s Button:</strong> Skip forward by 10 seconds</li>
                            </ul>
                        </div>
                    </section>

                    <section id="supported-media" className="mb-20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3"><Clock className="h-6 w-6 text-primary" /></div>
                            <h2 className="text-2xl font-semibold tracking-tight">Supported Media Types</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <Card title="YouTube Videos" desc="Embedded YouTube player preview with real-time status" />
                            <Card title="Local Videos" desc="Uploaded video with full playback controls and progress" />
                            <Card title="Local Audio" desc="Audio player with track information and progress" />
                            <Card title="PDF Documents" desc="Current page and scroll position of synced PDF" />
                        </div>
                        <div className="flex items-start gap-3 rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Tip:</strong> Use the preview to verify all clients are synced before important moments.
                            </p>
                        </div>
                    </section>

                    <DocNavigation
                        previous={{ title: 'Controller Dashboard', href: '/docs/features/dashboard' }}
                        next={{ title: 'PDF Sync', href: '/docs/features/pdf-sync' }}
                    />
                </div>
                <TableOfContents items={tocItems} />
            </div>
        </DocsLayout>
    );
};

const Card = ({ title, desc }: { title: string; desc: string }) => (
    <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
);

const CtrlCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
    <div className="rounded-xl border border-border bg-background p-5 shadow-sm text-center">
        <div className="flex justify-center mb-2 text-primary">{icon}</div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
);

export default FeaturesNowPlaying;
