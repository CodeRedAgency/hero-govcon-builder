import { Wrench, Leaf, Shield, Truck, Cpu, FileDown, Dna } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Dna className="w-16 h-16 text-accent" />,
      title: "Life Sciences & Research Compounds",
      naics: "325412, 541714, 424210",
      description: "Supply chain solutions and direct business development representation for FDA-compliant manufacturing partners of research peptides and active pharmaceutical ingredients.",
      details: [
        "Research Use Only (RUO) custom and catalog peptides (NAICS 541714)",
        "Exclusive U.S. Business Development Agent for premier CDMOs",
        "API & intermediate supply to 503A and 503B Compounding Pharmacies",
        "Regulatory compliance support (cGMP, FDA registration, CoA, stability data)",
        "Strict confidentiality & intellectual property safeguards under NDAs",
      ],
    },
    {
      icon: <Wrench className="w-16 h-16 text-accent" />,
      title: "Facility Maintenance",
      naics: "561210",
      description: "Comprehensive facilities support services including janitorial services, carpet and upholstery cleaning, and building maintenance.",
      details: [
        "Janitorial and custodial services",
        "Facilities support and management",
        "Carpet and upholstery cleaning",
        "Building maintenance and repairs",
        "Preventive maintenance programs",
      ],
    },
    {
      icon: <Leaf className="w-16 h-16 text-accent" />,
      title: "Landscaping & Grounds Maintenance",
      naics: "561790",
      description: "Professional landscaping and grounds keeping services for government facilities and commercial properties.",
      details: [
        "Landscape design and installation",
        "Lawn care and maintenance",
        "Tree and shrub care",
        "Seasonal cleanup services",
        "Irrigation system management",
      ],
    },
    {
      icon: <Shield className="w-16 h-16 text-accent" />,
      title: "Mechanical, HVAC & Controls",
      naics: "Various",
      description: "Expert mechanical systems management, HVAC services, and building automation controls.",
      details: [
        "HVAC installation and maintenance",
        "Building automation systems",
        "Energy management solutions",
        "Climate control systems",
        "Emergency repair services",
      ],
    },
    {
      icon: <Truck className="w-16 h-16 text-accent" />,
      title: "Trucking & Logistics",
      naics: "Various",
      description: "Reliable transportation and logistics solutions for government and commercial clients.",
      details: [
        "Fleet management services",
        "Transportation logistics",
        "Supply chain management",
        "Warehouse operations",
        "Distribution services",
      ],
    },
    {
      icon: <Cpu className="w-16 h-16 text-accent" />,
      title: "IT & Cyber Solutions",
      naics: "Various",
      description: "Advanced information technology infrastructure and cybersecurity solutions for mission-critical operations.",
      details: [
        "IT infrastructure management",
        "Cybersecurity solutions",
        "Network administration",
        "System integration",
        "Technical support services",
      ],
    },
  ];

  const naicsCodes = [
    { code: "325412", description: "Pharmaceutical Preparation Manufacturing" },
    { code: "541714", description: "Research and Development in Biotechnology (except Nanobiotechnology)" },
    { code: "424210", description: "Drugs and Druggists' Sundries Merchant Wholesalers" },
    { code: "561210", description: "Facilities Support Services" },
    { code: "561720", description: "Janitorial Services" },
    { code: "561740", description: "Carpet and Upholstery Cleaning Services" },
    { code: "561790", description: "Other Services to Buildings and Dwellings" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Services & Capabilities</h1>
          <p className="text-xl text-center opacity-90 max-w-3xl mx-auto">
            Comprehensive solutions for government agencies and commercial clients
          </p>
        </div>
      </section>

      {/* Capability Statement Download */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <Button size="lg" className="gap-2">
            <FileDown className="w-5 h-5" />
            Download Our Capability Statement (PDF)
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-secondary">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">NAICS: {service.naics}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                <h4 className="font-semibold mb-3">Key Services:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* NAICS Codes */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our NAICS Codes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {naicsCodes.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <p className="text-2xl font-bold text-primary mb-2">{item.code}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
