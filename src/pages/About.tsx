import { Award, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About Hero Industries</h1>
          <p className="text-xl text-center opacity-90 max-w-3xl mx-auto">
            A trusted partner in government contracting since 2019
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              Since 2019, Hero Industries has provided innovative and cost-effective solutions to various agencies and commercial clients. Our roots extend back to 2009, when founder Cavan Mitchell Chan provided professional and IT services to organizations like the United Nations and many worldwide NGOs.
            </p>
            <p className="leading-relaxed">
              Since then, we have expanded to include Operations & Maintenance related services. This growth reflects our commitment to meeting the evolving needs of government agencies and commercial clients across the nation.
            </p>
            <p className="leading-relaxed">
              Today, Hero Industries stands as a certified Minority Business Enterprise (MBE), ready to serve federal, state, and local government agencies with a comprehensive suite of facility maintenance, logistics, and technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <Target className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-4">Mission-Driven</h3>
                <p className="text-muted-foreground">
                  We strive to be the heroes in our community by consistently providing the products and services that keep our great country operating.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-4">Customer Focus</h3>
                <p className="text-muted-foreground">
                  We are committed to providing our customers with exceptional service and delivering solutions that exceed expectations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We offer our employees the best training to ensure the highest quality service delivery to our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership</h2>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="font-bold text-2xl mb-2">Cavan Mitchell Chan</h3>
              <p className="text-accent font-semibold mb-4">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                With roots in professional and IT services dating back to 2009, Cavan Mitchell Chan has dedicated his career to serving both international organizations and government agencies. His vision for Hero Industries stems from years of experience working with the United Nations and worldwide NGOs, bringing that expertise to serve American government agencies and commercial clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed">
              We are committed to providing our customers with exceptional service while offering our employees the best training. We strive to be the heroes in our community by consistently providing the products and services that keep our great country operating.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
