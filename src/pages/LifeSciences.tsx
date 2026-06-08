import { Dna, FlaskConical, Database, ShieldAlert, FileCheck2, Shield, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LifeSciences = () => {
  const complianceDocs = [
    { name: "Current Good Manufacturing Practices (cGMP)", description: "Ensuring top-tier production standards and consistency." },
    { name: "Certificate of Analysis (CoA)", description: "Complete purity, identity, and quality validation records." },
    { name: "FDA Registration", description: "Verified manufacturing facility registrations with the US FDA." },
    { name: "Stability Study Data", description: "Rigorous product integrity and shelf-life documentation." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-slate-900 to-primary text-primary-foreground py-20 md:py-32">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 rounded-full px-4 py-1.5 text-sm font-semibold mb-6 animate-pulse">
              <Dna className="w-4 h-4" />
              New Service Division
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Life Sciences & <span className="text-accent">Research Compounds</span> Division
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Securing critical supply chains and representing FDA-compliant manufacturing partners for research compounds and pharmaceutical ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                  Inquire About Supply
                </Button>
              </Link>
              <a href="#compliance">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground">
                  View Regulatory Info
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction & Value Proposition */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Securing the Biotech Supply Chain</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hero Industries is proud to announce the expansion of our government and commercial capabilities into the biotechnology and pharmaceutical supply sector. Leveraging our status as a Certified Minority Business Enterprise (MBE), we provide robust supply chain solutions and direct business development representation for FDA-compliant contract manufacturing partners.
          </p>
        </div>
      </section>

      {/* Division Structure */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Capabilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Capability 1: Research Only Peptides */}
            <Card className="border-2 hover:border-accent/50 transition-colors">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">1. Research Only Peptides</CardTitle>
                  <p className="text-sm text-accent font-semibold mt-1">NAICS: 541714</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Hero Industries supplies high-purity Research Use Only (RUO) Peptides for preclinical development, assay development, and laboratory research.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span><strong>Preclinical Research Support:</strong> Catalog and custom peptides synthesized to exact specifications.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span><strong>Target Client Base:</strong> Supporting government R&D initiatives, federal labs, biotechnology firms, and academic institutions.</span>
                  </div>
                  <div className="flex items-start gap-2 text-amber-600 dark:text-amber-400">
                    <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
                    <span><strong>Strict Compliance:</strong> Labeled strictly for "Research Use Only." Not for therapeutic, diagnostic, or human use in this category.</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Capability 2: CDMO Strategic Sourcing */}
            <Card className="border-2 hover:border-accent/50 transition-colors">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">2. Strategic Sourcing & CDMO representation</CardTitle>
                  <p className="text-sm text-accent font-semibold mt-1">NAICS: 325412 (Primary) & 424210 (Secondary)</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Hero Industries acts as the exclusive U.S. Business Development Agent for premier China-based Contract Development and Manufacturing Organizations (CDMOs).
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span><strong>Pharmacy Supply Chain:</strong> We facilitate the direct supply of Active Pharmaceutical Ingredients (APIs) and Peptide intermediates to 503A and 503B Compounding Pharmacies across the United States.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span><strong>Regulatory Assurance:</strong> All manufacturing principals comply with U.S. standards. We host and maintain cGMP, FDA facility registration, stability data, and CoAs.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Lock className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span><strong>Confidentiality Protection:</strong> Manufacturer details are protected under strict NDAs to safeguard proprietary IP and trade secrets.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory Documentation Access */}
      <section className="py-16 container mx-auto px-4" id="compliance">
        <div className="max-w-5xl mx-auto">
          <div className="bg-secondary p-8 md:p-12 rounded-2xl border border-muted flex flex-col md:flex-row items-center gap-8">
            <div className="space-y-4 md:w-3/5">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                <FileCheck2 className="w-4 h-4" />
                Traceability & Verification
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Controlled Access Data Room</h2>
              <p className="text-muted-foreground leading-relaxed">
                For contracting officers and compliance auditors, all verification documents for our manufacturing principals—including Country of Origin, FDA Registration, cGMP certifications, and Certificates of Analysis (CoA)—are maintained in a secure, Controlled Access Data Room.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {complianceDocs.map((doc, idx) => (
                  <div key={idx} className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-2/5 w-full bg-card p-6 rounded-xl border border-muted flex flex-col justify-center text-center shadow-lg">
              <Lock className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Request Auditor Access</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Identity verification and NDA signatures are required before access to principal documentation is granted.
              </p>
              <Link to="/contact">
                <Button className="w-full flex items-center justify-center gap-2">
                  Contact Compliance Officer
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Notice Banner */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-accent shrink-0 mt-1" />
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Compliance Statement for Peptide Sales</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong>For Research:</strong> Products listed under "Research Only" are supplied for laboratory research and product development purposes only. They are not scheduled controlled substances. They are not for diagnostic, therapeutic, or human consumption use.
                </p>
                <p>
                  <strong>For Compounding Pharmacies:</strong> Hero Industries strictly adheres to the FDA Federal Food, Drug, and Cosmetic (FD&C) Act. We supply Peptides and APIs only to registered 503A and 503B entities when the substance is not on the FDA's Prohibited List or when the drug product is not listed as "Commercially Available" without a shortage. It is the responsibility of the purchasing Pharmacy to verify the drug shortage list status (e.g., GLP-1 agents like Tirzepatide/Semaglutide) prior to purchase to ensure compliance with FDA compounding regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeSciences;
