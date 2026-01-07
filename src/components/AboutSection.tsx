import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Bhagvan Savaliya",
    title: "Founder & Owner",
    description: "Managing business operations, billing, and client relations to ensure seamless project delivery.",
    color: "primary",
  },
  {
    name: "Hemali Savaliya",
    title: "Lead Full-Stack Engineer",
    description: "Specializing in Shopify architecture, MERN stack, and n8n automation workflows.",
    color: "secondary",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2">
              Leadership <span className="gradient-text-blue">Team</span>
            </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A dedicated team combining business expertise with technical excellence to deliver exceptional results.
          </p>

          {/* Legal & Business Information */}
          <div className="mt-8 p-6 bg-card/50 border border-border rounded-xl">
            <h3 className="text-foreground font-semibold mb-3">Legal & Business Information</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Savaliya Solutions is a sole proprietorship owned and operated by Bhagvanbhai Savaliya. 
              The owner is authorized to manage, receive, and control all client payments and financial 
              transactions on behalf of the business.
            </p>
          </div>
        </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group relative bg-card border border-border rounded-2xl p-8 card-hover overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${member.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Avatar Placeholder */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 rounded-full bg-${member.color}/10 border-2 border-${member.color}/20 flex items-center justify-center mx-auto`}>
                      <User className={`w-10 h-10 text-${member.color}`} />
                    </div>
                    {/* Status dot */}
                    <div className={`absolute bottom-1 right-1/2 translate-x-8 w-4 h-4 rounded-full bg-secondary border-2 border-card`} />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className={`text-${member.color} text-sm font-medium mb-4`}>
                      {member.title}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>

                {/* Decorative glow */}
                <div className={`absolute -bottom-16 -right-16 w-32 h-32 bg-${member.color}/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
