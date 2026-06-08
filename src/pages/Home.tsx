import { Shield, Wrench, Leaf, Truck, Cpu, CheckCircle2, Dna } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: <Dna className="w-12 h-12 text-accent" />,
      title: "Life Sciences & Compounds",
      description: "Secure sourcing for research peptides and CDMO distribution",
    },
    {
      icon: <Wrench className="w-12 h-12 text-accent" />,
      title: "Facility Maintenance",
      description: "Comprehensive facilities support and janitorial services",
    },
    {
      icon: <Leaf className="w-12 h-12 text-accent" />,
      title: "Landscaping & Grounds",
      description: "Professional landscaping and grounds maintenance",
    },
    {
      icon: <Shield className="w-12 h-12 text-accent" />,
      title: "Mechanical & HVAC",
      description: "Expert HVAC systems and controls management",
    },
    {
      icon: <Truck className="w-12 h-12 text-accent" />,
      title: "Trucking & Logistics",
      description: "Reliable transportation and logistics solutions",
    },
    {
      icon: <Cpu className="w-12 h-12 text-accent" />,
      title: "IT & Cyber Solutions",
      description: "Advanced IT infrastructure and cybersecurity",
    },
  ];

  const certifications = [
    { label: "CAGE Code", value: "9FZU3" },
    { label: "SAM UEI", value: "VMVHE3LAXNZ6" },
    { label: "DUNS", value: "044365124" },
    { label: "Certification", value: "MBE" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-slate-900 to-primary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 animate-pulse">
              <Shield className="w-4 h-4" />
              Certified MBE Contractor
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Hero Industries: Innovative Solutions for Local and Federal Agencies
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Providing mission-critical life sciences, peptide supply, facility maintenance, logistics, and IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                  View Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government-Ready Banner */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Government-Ready Contractor</h2>
            <p className="text-muted-foreground">Certified and registered to serve federal, state, and local agencies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6 text-center">
                  <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="font-semibold text-sm mb-1">{cert.label}</p>
                  <p className="text-lg font-bold text-primary">{cert.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Who We Are</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Since 2019, Hero Industries has provided innovative and cost-effective solutions to various agencies and commercial clients. Our roots extend back to 2009, when founder Cavan Mitchell Chan provided professional and IT services to organizations like the United Nations and many worldwide NGOs.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Since then, we have expanded to include Operations & Maintenance related services, positioning ourselves as a comprehensive solution provider for government and commercial facilities nationwide.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Core Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button size="lg">Explore All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-lg md:text-xl text-center leading-relaxed">
            We strive to be the heroes in our community by consistently providing the products and services that keep our great country operating. We are committed to providing our customers with exceptional service while offering our employees the best training.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
