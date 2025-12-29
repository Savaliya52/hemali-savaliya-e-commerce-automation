import { ArrowUpRight, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Renaissance Jewel",
    subtitle: "Luxury E-commerce",
    description: "A premium Shopify store with custom theme development, advanced filtering, and seamless checkout experience.",
    tags: ["Shopify", "Liquid", "Custom Theme"],
  },
  {
    title: "2026 Coastal Planner",
    subtitle: "High-Ticket Digital Product",
    description: "E-commerce funnel for a premium digital product with automated delivery and upsell sequences.",
    tags: ["Shopify", "n8n", "Meta Ads"],
  },
  {
    title: "Client Dashboard",
    subtitle: "Full-Stack Web App",
    description: "Custom client portal with real-time analytics, automated reporting, and integrated payment processing.",
    tags: ["React", "Node.js", "Supabase"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              Featured <span className="gradient-text-blue">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in e-commerce, automation, and full-stack development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card border border-border rounded-2xl overflow-hidden card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-primary">{project.subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-border hover:bg-muted text-foreground"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
