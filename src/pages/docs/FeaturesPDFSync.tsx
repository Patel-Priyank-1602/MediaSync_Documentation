import React from 'react';
import { DocsLayout } from '../../components/layout/DocsLayout';
import { Breadcrumb } from '@/components/docs/Breadcrumb';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { DocNavigation } from '@/components/docs/DocNavigation';
import { FileText, Upload, Pencil, ZoomIn, Highlighter, MousePointer, Trash2, AlertTriangle } from 'lucide-react';

const FeaturesPDFSync = () => {
    const tocItems = [
        { id: 'overview', title: 'Overview', level: 2 },
        { id: 'uploading-pdf', title: 'Uploading PDFs', level: 2 },
        { id: 'pdf-controls', title: 'PDF Controls', level: 2 },
        { id: 'drawing-tools', title: 'Drawing & Annotation Tools', level: 2 },
        { id: 'zoom-navigation', title: 'Zoom & Navigation', level: 2 },
        { id: 'sync-behavior', title: 'Sync Behavior', level: 2 },
        { id: 'notes', title: 'Important Notes', level: 2 },
    ];

    return (
        <DocsLayout>
            <Breadcrumb items={[
                { label: 'Docs', href: '/docs' },
                { label: 'Features', href: '/docs/features/youtube' },
                { label: 'PDF Sync' },
            ]} />

            <div className="flex gap-12">
                <div className="flex-1 max-w-4xl">
                    <div className="mt-6 mb-12">
                        <h1 className="text-4xl font-bold tracking-tight mb-4">PDF Synchronization</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Share and annotate PDF documents in real-time across all devices with drawing, highlighting, zoom, and laser pointer tools.
                        </p>
                    </div>

                    {/* OVERVIEW */}
                    <section id="overview" className="mb-12">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <FileText className="h-7 w-7 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold">Overview</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            MediaSync supports <strong>PDF synchronization</strong> as a media type alongside YouTube, Video, and Audio. The controller can upload PDF files, navigate through pages, and use powerful annotation tools — all of which are reflected on every connected client in real-time.
                        </p>
                        <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-5">
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Perfect for:</strong> Presentations, lectures, document reviews, and collaborative reading sessions where everyone needs to see the same page with annotations.
                            </p>
                        </div>
                    </section>

                    {/* UPLOADING PDF */}
                    <section id="uploading-pdf" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <Upload className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">Uploading PDFs</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            To use PDF sync, select the <strong>PDF</strong> tab on the controller's media selection panel:
                        </p>
                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm mb-6">
                            <ol className="space-y-4 text-muted-foreground">
                                <li>1. Click the <strong>PDF</strong> tab in the media type selector (alongside YouTube, Video, Audio)</li>
                                <li>2. Click <strong>"Choose PDF File"</strong> to select a PDF from your device</li>
                                <li>3. Click <strong>"Upload & View"</strong> to upload the file to the server</li>
                                <li>4. The PDF is now available in the <strong>Uploaded PDFs</strong> list</li>
                                <li>5. Click <strong>"Play"</strong> next to the PDF to start syncing it to all clients</li>
                            </ol>
                        </div>
                        <div className="rounded-xl bg-muted/50 border border-border p-5">
                            <h4 className="font-medium mb-2">Uploaded PDFs List</h4>
                            <p className="text-sm text-muted-foreground">
                                All uploaded PDFs are displayed with their file name, size, and upload timestamp. You can click <strong>Refresh</strong> to update the list, <strong>Play</strong> to start syncing, or <strong>Delete</strong> to remove a PDF from the server.
                            </p>
                        </div>
                    </section>

                    {/* PDF CONTROLS */}
                    <section id="pdf-controls" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <MousePointer className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">PDF Controls</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            Once a PDF is playing, the controller has access to these controls:
                        </p>
                        <div className="rounded-2xl border border-border bg-background shadow-sm overflow-hidden">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b bg-muted/50">
                                        <th className="text-left py-3 px-5 text-sm font-medium">Control</th>
                                        <th className="text-left py-3 px-5 text-sm font-medium">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['Play', 'Start displaying the PDF on all clients'],
                                        ['Pause', 'Freeze the current view on all clients'],
                                        ['Restart', 'Go back to the first page'],
                                        ['Seek to Page', 'Jump to a specific page number'],
                                        ['Delete', 'Remove the PDF from the server'],
                                    ].map(([ctrl, desc], i) => (
                                        <tr key={i} className="border-b last:border-0">
                                            <td className="py-3 px-5 font-medium">{ctrl}</td>
                                            <td className="py-3 px-5 text-muted-foreground">{desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* DRAWING & ANNOTATION TOOLS */}
                    <section id="drawing-tools" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <Pencil className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">Drawing & Annotation Tools</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            The controller has powerful annotation tools that sync to all connected clients in real-time:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <ToolCard icon={<Pencil className="h-5 w-5 text-primary" />} title="Draw Lines" description="Freehand drawing on the PDF to mark, underline, or point out content" />
                            <ToolCard icon={<Highlighter className="h-5 w-5 text-yellow-500" />} title="Highlight" description="Highlight text or areas with a semi-transparent marker in various colors" />
                            <ToolCard icon={<MousePointer className="h-5 w-5 text-red-500" />} title="Laser Pointer" description="A red laser dot that follows the controller's cursor, visible on all client screens" />
                            <ToolCard icon={<Trash2 className="h-5 w-5 text-muted-foreground" />} title="Eraser / Clear" description="Erase specific annotations or clear all drawings from the current page" />
                        </div>
                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                            <h4 className="font-medium mb-4">How Annotations Sync</h4>
                            <ul className="space-y-3 text-muted-foreground">
                                <li>• All drawings, highlights, and laser pointer movements are sent via WebSocket</li>
                                <li>• Clients see the annotations appear in real-time as the controller draws</li>
                                <li>• Annotations are tied to specific pages — switching pages shows page-specific drawings</li>
                                <li>• The laser pointer position updates continuously for a smooth pointing experience</li>
                            </ul>
                        </div>
                    </section>

                    {/* ZOOM & NAVIGATION */}
                    <section id="zoom-navigation" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <ZoomIn className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">Zoom & Navigation</h2>
                        </div>
                        <p className="text-muted-foreground mb-6">
                            The controller can zoom in/out on specific areas of the PDF, and the zoom level and position are synced to all clients:
                        </p>
                        <div className="grid gap-4 mb-6">
                            <Card title="Zoom In / Out" desc="Increase or decrease the zoom level to focus on specific content areas" />
                            <Card title="Pan / Scroll" desc="Navigate around a zoomed-in page — the scroll position syncs to clients" />
                            <Card title="Page Navigation" desc="Navigate between pages using next/previous buttons or page number input" />
                            <Card title="Fit to Screen" desc="Reset the zoom level to fit the entire page on screen" />
                        </div>
                    </section>

                    {/* SYNC BEHAVIOR */}
                    <section id="sync-behavior" className="mb-16">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <FileText className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">Sync Behavior</h2>
                        </div>
                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm">
                            <ul className="space-y-3 text-muted-foreground">
                                <li>• <strong>Page changes</strong> on the controller are instantly reflected on clients</li>
                                <li>• <strong>Zoom level</strong> changes sync so all clients see the same view</li>
                                <li>• <strong>Drawings and highlights</strong> appear on client screens as the controller draws</li>
                                <li>• <strong>Laser pointer</strong> dot moves on client screens following the controller's cursor</li>
                                <li>• <strong>Scroll position</strong> syncs so all clients see the same area of the page</li>
                            </ul>
                        </div>
                    </section>

                    {/* NOTES */}
                    <section id="notes" className="mb-20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="rounded-xl bg-primary/15 p-3">
                                <AlertTriangle className="h-6 w-6 text-primary" />
                            </div>
                            <h2 className="text-2xl font-semibold tracking-tight">Important Notes</h2>
                        </div>
                        <div className="rounded-2xl border border-border bg-background p-8 shadow-sm mb-6">
                            <ul className="space-y-3 text-muted-foreground">
                                <li>• Only the <strong>controller</strong> can draw, highlight, and use the laser pointer</li>
                                <li>• Clients see the annotations in <strong>read-only</strong> mode</li>
                                <li>• PDF files are uploaded to the server and served to clients via HTTP</li>
                                <li>• Large PDFs may take a moment to load on slower connections</li>
                                <li>• Annotations are session-based and are <strong>not saved</strong> after the session ends</li>
                            </ul>
                        </div>
                        <div className="flex items-start gap-3 rounded-xl bg-amber-500/10 border border-amber-500/20 p-4">
                            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Tip:</strong> For best results, use standard PDF files. Complex PDFs with embedded multimedia may not render perfectly.
                            </p>
                        </div>
                    </section>

                    <DocNavigation
                        previous={{ title: 'Now Playing Preview', href: '/docs/features/now-playing' }}
                        next={{ title: 'Real-Time Seek & Drift', href: '/docs/features/seek-drift' }}
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

const ToolCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
    <div className="rounded-xl border border-border bg-background p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-2">{icon}<h4 className="font-semibold">{title}</h4></div>
        <p className="text-sm text-muted-foreground">{description}</p>
    </div>
);

export default FeaturesPDFSync;
