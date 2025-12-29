import { ShoppingBag, Bot, Code, TrendingUp } from "lucide-react";

const skills = [
  {
    icon: ShoppingBag,
    title: "Shopify & E-commerce",
    description: "Liquid, Headless Storefronts, Custom Themes, & App Integration.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Bot,
    title: "Automation & AI",
    description: "n8n Workflows, Business Logic Automation, & AI Agents.",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Code,
    title: "Full Stack Web Dev",
    description: "React.js, Node.js, WordPress, & Custom Web Apps.",
    color: "primary",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Meta Ads Pixel Setup, SEO Optimization, & Conversion Rate Optimization (CRO).",
    color: "secondary",
    gradient: "from-secondary/20 to-secondary/5",
  },
];

const SkillsSection = () => {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">What I Do</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              The <span className="gradient-text-blue">Skill Stack</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A unique blend of technical expertise and business acumen to build systems that scale.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className={`group relative bg-card border border-border rounded-2xl p-8 card-hover overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${skill.color}/10 mb-6`}>
                    <skill.icon className={`w-7 h-7 text-${skill.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Hover glow */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-${skill.color}/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
