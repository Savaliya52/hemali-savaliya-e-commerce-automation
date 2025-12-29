import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-card border border-border overflow-hidden relative">
                {/* Placeholder for headshot */}
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <User className="w-32 h-32 text-muted-foreground/50" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Open to Work</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-wider">About Me</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-6">
                Hi, I am <span className="gradient-text-blue">Hemali Savaliya</span>.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I am a <span className="text-foreground font-medium">Computer Science Engineer</span> bridging the gap between technical development and business growth. Unlike traditional developers, I understand <span className="text-foreground font-medium">Meta Ads, ROI, and Operational Efficiency</span>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                My approach combines clean code with marketing insights to build systems that don't just work—they <span className="gradient-text-green font-medium">generate revenue</span>.
              </p>

              {/* Quick facts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="text-2xl font-bold text-foreground">B.E.</div>
                  <div className="text-sm text-muted-foreground">Computer Science</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <div className="text-2xl font-bold gradient-text-blue">Full Stack</div>
                  <div className="text-sm text-muted-foreground">Development Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
