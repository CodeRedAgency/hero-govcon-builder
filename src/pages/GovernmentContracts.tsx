import { Shield, CheckCircle2, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const GovernmentContracts = () => {
  const identifiers = [
    { label: "Company Name", value: "Hero Industries" },
    { label: "DUNS Number", value: "044365124" },
    { label: "SAM UEI", value: "VMVHE3LAXNZ6" },
    { label: "CAGE Code", value: "9FZU3" },
  ];

  const naicsCodes = [
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
