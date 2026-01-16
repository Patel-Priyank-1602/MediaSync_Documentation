import { Navbar } from "@/components/layout/Navbar";
import { DocsSidebar } from "@/components/layout/DocsSidebar";
import { Breadcrumb } from "@/components/docs/Breadcrumb";
import { useParams, useLocation } from "react-router-dom";

const GenericDocPage = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  
  // Generate title from the last part of the path
  const title = pathParts[pathParts.length - 1]
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ") || "Documentation";

  // Generate breadcrumb items
  const breadcrumbItems = pathParts.slice(1).map((part, index) => ({
    label: part
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    href: index < pathParts.length - 2 ? `/${pathParts.slice(0, index + 2).join("/")}` : undefined,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DocsSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container max-w-4xl px-6 py-8 md:px-12">
            <Breadcrumb items={breadcrumbItems} />

            <h1 className="text-5xl font-bold text-foreground mb-6">{title}</h1>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              This documentation page is coming soon. Check back later for more information about {title.toLowerCase()}.
            </p>

            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-3">Getting Started</h2>
              <p className="text-muted-foreground mb-4">
                Learn how to integrate this feature into your application with our step-by-step guide.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Prerequisites and requirements
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Installation and setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Configuration options
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Example implementations
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GenericDocPage;
