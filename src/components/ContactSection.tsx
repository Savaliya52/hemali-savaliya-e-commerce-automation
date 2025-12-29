import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Let's <span className="gradient-text-green">Work Together</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Ready to build something amazing? We're always open to discussing new projects, creative ideas, or opportunities to help your brand scale.
          </p>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:hello@savaliya.digital"
              className="group bg-card border border-border rounded-xl p-6 card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-medium mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">hello@savaliya.digital</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/savaliya-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-medium mb-1">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">Connect with us</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/savaliya-digital"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card border border-border rounded-xl p-6 card-hover text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-foreground font-medium mb-1">GitHub</h3>
              <p className="text-muted-foreground text-sm">View our code</p>
            </a>
          </div>

          {/* Location */}
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Available for remote work worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
