import { Wrench, Leaf, Shield, Truck, Cpu, FileDown, Dna } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Dna className="w-16 h-16 text-accent" />,
      title: "Life Sciences & Research Compounds",
      naics: "325412, 541714, 424210",
      image: "/lifesciences_service.png",
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
      image: "/facility_service.png",
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
      image: "/landscaping_service.png",
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
      naics: "238220, 238210",
      image: "/hvac_service.png",
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
      naics: "484110, 493110, 488510",
      image: "/logistics_service.png",
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
      naics: "541512, 541519, 541513",
      image: "/it_service.png",
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
    { code: "238220", description: "Plumbing, Heating, and Air-Conditioning Contractors" },
    { code: "238210", description: "Electrical Contractors and Other Wiring Installation Contractors" },
    { code: "484110", description: "General Freight Trucking, Local" },
    { code: "493110", description: "General Warehousing and Storage" },
    { code: "488510", description: "Freight Transportation Arrangement" },
    { code: "541512", description: "Computer Systems Design Services" },
    { code: "541519", description: "Other Computer Related Services" },
    { code: "541513", description: "Computer Facilities Management Services" },
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
            <Card key={index} className="overflow-hidden flex flex-col md:flex-row border border-muted hover:shadow-xl transition-shadow duration-300">
              <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent md:bg-gradient-to-t md:from-slate-900/80 md:to-transparent flex items-end p-6 md:hidden">
                  <div className="flex-shrink-0 text-white mr-3">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{service.title}</h3>
                </div>
              </div>
              <div className="md:w-2/3 flex flex-col justify-between">
                <CardHeader className="bg-secondary/40 border-b border-muted py-5 px-6">
                  <div className="flex items-center gap-4">
                    <div className="hidden md:flex flex-shrink-0">{service.icon}</div>
                    <div>
                      <CardTitle className="text-2xl mb-1">{service.title}</CardTitle>
                      <p className="text-xs font-semibold text-accent tracking-wider uppercase">NAICS: {service.naics}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <h4 className="font-semibold text-sm tracking-wide text-primary uppercase mb-3">Key Capabilities:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2 font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
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
