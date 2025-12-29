import { ArrowUpRight, Image, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Civia Jewels",
    subtitle: "Global Jewelry Brand",
    description: "Scalable e-commerce architecture designed for international sales. Features multi-currency support, Liquid coding for variant switching, and premium UX focus to increase average order value (AOV).",
    tags: ["Shopify", "Liquid", "Meta Ads"],
    link: "https://civiajewels.com/",
  },
  {
    title: "Durvasa Diamond",
    subtitle: "High-Ticket E-commerce",
    description: "Trust-optimized storefront for high-value lab-grown diamond sales. Integrated complex data structures using Shopify Metaobjects for detailed diamond specifications and automated inventory workflows.",
    tags: ["Shopify Plus", "SEO", "Automation"],
    link: "https://durvasadiamond.com/",
  },
  {
    title: "Trend Looker",
    subtitle: "Fashion & Accessories",
    description: "High-performance fashion store focused on speed and Conversion Rate Optimization (CRO). Integrated with Meta Pixel for precise ad targeting and growth tracking.",
    tags: ["Shopify", "CRO", "Meta Pixel"],
    link: "https://trendlooker.com/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Case Studies</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              Featured <span className="gradient-text-blue">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Real client work showcasing our expertise in e-commerce architecture, automation, and conversion optimization.
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
                    className="w-full border-border hover:bg-muted text-foreground group/btn"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Visit Live Site
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
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
