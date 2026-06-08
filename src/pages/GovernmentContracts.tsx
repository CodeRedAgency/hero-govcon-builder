import { Shield, CheckCircle2, Award, FileText, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GovernmentContracts = () => {
  const identifiers = [
    { label: "Company Name", value: "Hero Industries" },
    { label: "DUNS Number", value: "044365124" },
    { label: "SAM UEI", value: "VMVHE3LAXNZ6" },
    { label: "CAGE Code", value: "9FZU3" },
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
          <div className="flex justify-center mb-6">
            <Shield className="w-20 h-20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Government Contracting Information
          </h1>
          <p className="text-xl text-center opacity-90 max-w-3xl mx-auto">
            All the information procurement officers need to work with Hero Industries
          </p>
        </div>
      </section>

      {/* Company Identifiers */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Company Identifiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {identifiers.map((item, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                  <p className="text-2xl font-bold text-primary">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification Badge */}
          <Card className="bg-secondary border-2 border-accent">
            <CardContent className="p-8 text-center">
              <Award className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Certified Minority Business Enterprise</h3>
              <p className="text-lg text-muted-foreground">MBE Certified Contractor</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Capabilities Statement */}
      <section className="py-16 bg-background border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Capabilities Statement</h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Hero Industries combines traditional facilities support with advanced pharmaceutical supply chain management.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-accent" />
                Scope of Work for Bids
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-accent font-bold text-sm mb-2">01. BIOTECH R&D</p>
                    <h4 className="font-bold text-lg mb-2">Peptide Synthesis Supply</h4>
                    <p className="text-sm text-muted-foreground">
                      Provision of custom and catalog research peptides for federal R&D labs, specifically supporting Biotechnology research (NAICS 541714).
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-accent font-bold text-sm mb-2">02. WHOLESALE</p>
                    <h4 className="font-bold text-lg mb-2">Pharmaceutical Wholesale</h4>
                    <p className="text-sm text-muted-foreground">
                      Distribution of medicinal chemicals and pharmaceutical preparations (NAICS 325412) as a value-added agent for international CDMOs.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-accent font-bold text-sm mb-2">03. FACILITIES SUPPORT</p>
                    <h4 className="font-bold text-lg mb-2">Facilities Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Janitorial, carpet cleaning, and building maintenance (Primary NAICS 561210).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="bg-secondary/50 border border-muted mt-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-accent" />
                  Compliance Assurance for Contracting Officers
                </h3>
                <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span><strong>MBE Status:</strong> Certified Minority Business Enterprise (MBE).</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span><strong>Supply Chain Transparency:</strong> While our manufacturing principals are located in China, all required traceability documentation (Country of Origin, FDA Registration, and cGMP certifications) is available for review in a Controlled Access Data Room upon request.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* NAICS Codes */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">NAICS Codes</h2>
            <div className="space-y-4">
              {naicsCodes.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-xl font-bold text-primary mb-1">{item.code}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Procurement */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-primary text-primary-foreground p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact our team to discuss your procurement needs or request additional documentation.
          </p>
          <div className="space-y-2">
            <p className="text-xl">
              <strong>Phone:</strong>{" "}
              <a href="tel:888-805-1733" className="underline hover:opacity-80">
                888-805-1733
              </a>
            </p>
            <p className="text-xl">
              <strong>Email:</strong>{" "}
              <a href="mailto:office@heroindustries.us" className="underline hover:opacity-80">
                office@heroindustries.us
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovernmentContracts;
