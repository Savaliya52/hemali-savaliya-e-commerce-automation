const technologies = [
  "Shopify",
  "React",
  "Node.js",
  "n8n",
  "WordPress",
  "Stripe",
  "Meta Ads",
  "Supabase",
];

const TechArsenal = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
              Technical Arsenal
            </span>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="tech-badge"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;
