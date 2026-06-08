import { useState } from "react";
import { BookOpen, Calendar, User, ArrowLeft, Dna, FileText, CheckCircle2, ShieldAlert, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Articles = () => {
  const [activeArticleIdx, setActiveArticleIdx] = useState<number | null>(null);

  const articles = [
    {
      title: "FDA PCAC Review: Potential Reclassification of 12 Peptides to Category 1 Bulk Compounding List",
      summary: "An analysis of the upcoming July 23–24, 2026 FDA Pharmacy Compounding Advisory Committee meeting and its implications for 503A and 503B pharmacies.",
      date: "June 8, 2026",
      author: "Regulatory Compliance Department",
      readTime: "5 min read",
      icon: <Dna className="w-6 h-6 text-accent" />,
      content: (
        <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            The regulatory landscape for therapeutic peptides in pharmacy compounding is facing a historic milestone. On **July 23–24, 2026**, the FDA's Pharmacy Compounding Advisory Committee (PCAC) is scheduled to meet to review the safety and clinical profile of approximately **12 to 14 bulk peptide drug substances** nominated for compounding under the Federal Food, Drug, and Cosmetic (FD&C) Act.
          </p>

          <h3 className="text-xl font-bold text-primary mt-6">Understanding Category 1 vs. Category 2</h3>
          <p>
            For several years, the FDA has maintained bulk drug substance nomination categories under Section 503A. In late 2023, the FDA moved a broad list of popular peptides into **Category 2**, designating them as substances raising significant safety concerns (such as potential immunogenicity risks or high levels of peptide-related impurities). This action prohibited traditional compounding pharmacies (503A) and outsourcing facilities (503B) from compounding these substances.
          </p>
          <p>
            The upcoming July meeting will review detailed scientific evaluations to determine whether these peptides should transition to **Category 1**. Substances in Category 1 are placed on an active evaluation list, allowing pharmacies to compound them while the FDA completes its final safety reviews.
          </p>

          <div className="bg-secondary p-6 rounded-xl border border-muted my-6">
            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-accent" />
              What Reclassification Means for Compounding Pharmacies
            </h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>• <strong>Legal Compounding Status:</strong> Transitioning to Category 1 allows pharmacies to prepare these peptides for patient prescriptions during the FDA's evaluation period.</li>
              <li>• <strong>Safety Assessments:</strong> The FDA will closely monitor the immunogenicity risks and impurity levels of each raw material batch.</li>
              <li>• <strong>Shortage Vulnerabilities:</strong> Access to Category 1 bulk APIs is vital during periods of commercial drug shortages, enabling compounding pharmacists to fill patient gaps.</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-primary mt-6">Peptides Currently Under Advisory Committee Review</h3>
          <p>
            The list of peptides under review includes compounds that are highly sought after by clinicians for wellness, tissue repair, and metabolic research. The committee will examine clinical evidence, manufacturer testing data, and stability study records before recommending whether to allow these substances to proceed under Category 1 guidelines.
          </p>
          <p>
            Hero Industries remains committed to tracking these regulatory changes closely, ensuring that compounding pharmacies have access to verified, compliant peptide intermediates and APIs as the legal parameters evolve.
          </p>
        </div>
      ),
    },
    {
      title: "Quality Control in Peptide Sourcing: The Core of cGMP & CoA Verification",
      summary: "A deep dive into the chemical parameters, purity standards, and facility requirements necessary for secure pharmaceutical supply chains.",
      date: "May 28, 2026",
      author: "Quality Assurance Division",
      readTime: "4 min read",
      icon: <FileText className="w-6 h-6 text-accent" />,
      content: (
        <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            In the procurement of bulk active pharmaceutical ingredients (APIs) and research compounds, purity is not just a performance metric—it is a critical safety requirement. For registered compounding pharmacies and clinical researchers, sourcing peptides requires strict adherence to cGMP (current Good Manufacturing Practices) guidelines.
          </p>
          <p>
            Every batch of peptides supplied must undergo rigorous analytical verification, summarized in an authentic **Certificate of Analysis (CoA)**.
          </p>

          <h3 className="text-xl font-bold text-primary mt-6">Crucial Analytical Parameters of a CoA</h3>
          <p>
            A Certificate of Analysis is a legal document that verifies a product meets its product specifications. For peptides, three primary analytical tests are essential:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <Card className="bg-secondary/30">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-2">1. HPLC Purity</h4>
                <p className="text-sm">High-Performance Liquid Chromatography measures the purity profile of the peptide. Clinical and research grades must exceed 98% purity to prevent off-target effects.</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-2">2. Mass Spec (MS)</h4>
                <p className="text-sm">Mass Spectrometry identifies the molecular mass of the peptide, confirming that the synthesized chain matches the target amino acid sequence exactly.</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/30">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-2">3. Residual Solvents</h4>
                <p className="text-sm">Peptide synthesis involves solvents like acetonitrile and trifluoroacetic acid (TFA). A CoA must verify that residual solvents are well below toxic thresholds.</p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-bold text-primary mt-6">Securing the Supply Chain</h3>
          <p>
            Many compounding pharmacies struggle with verifying global manufacturers. Under the FDA Federal Food, Drug, and Cosmetic (FD&C) Act, purchasing entities must have full traceability of origin. 
          </p>
          <p>
            Hero Industries addresses this by maintaining a **Controlled Access Data Room**. For all represented CDMO partners, we maintain and provide upon request: current cGMP certifications, stability data, and verified CoAs, ensuring peace of mind for both contracting officers and compounders.
          </p>
        </div>
      ),
    },
    {
      title: "Handling and Storage of Research Use Only (RUO) Peptides",
      summary: "A practical guide for laboratory researchers to prevent degradation, maintain peptide stability, and ensure experimental reproducibility.",
      date: "May 15, 2026",
      author: "Biotechnology Research Team",
      readTime: "3 min read",
      icon: <FlaskConical className="w-6 h-6 text-accent" />,
      content: (
        <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
          <p>
            Lyophilized (freeze-dried) peptides are widely used in preclinical biotechnology research, assay development, and laboratory testing. However, peptides are inherently sensitive biological polymers. Proper storage and reconstitution are crucial to prevent degradation via hydrolysis, oxidation, or beta-elimination.
          </p>

          <h3 className="text-xl font-bold text-primary mt-6">Best Practices for Lyophilized Peptide Storage</h3>
          <p>
            Peptides in their lyophilized form are relatively stable, but still vulnerable to moisture and temperature fluctuations.
          </p>
          <ul className="space-y-3 pt-2">
            <li className="flex gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span><strong>Temperature:</strong> Store lyophilized peptides at -20°C for short-term projects (less than 3 months) or -80°C for long-term storage to preserve chemical bonds.</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span><strong>Avoid Moisture:</strong> Keep peptides in an airtight container with a desiccant. Moisture condensation is the leading cause of peptide degradation.</span>
            </li>
            <li className="flex gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <span><strong>Freeze-Thaw Cycles:</strong> Never open a cold vial. Allow it to sit at room temperature for 30–60 minutes before opening to prevent moisture from condensing on the peptide powder.</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-primary mt-6">Reconstitution and Aliquotting Guidelines</h3>
          <p>
            Once a peptide is dissolved in liquid, its shelf-life decreases dramatically.
          </p>
          <p>
            Researchers should reconstituted peptides using sterile, degassed solvents such as bacteriostatic water, sterile saline, or phosphate-buffered saline (PBS) based on the peptide's unique chemical properties (acidic, basic, or neutral amino acid structures).
          </p>
          <p>
            Immediately after reconstitution, divide the peptide solution into single-use aliquots. Store these aliquots at -20°C or -80°C. This practice prevents the need for repeated freeze-thaw cycles of the stock solution, ensuring consistent experimental results in the laboratory.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Banner */}
      <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Articles & Research</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Regulatory insights, quality standards, and technical updates for Life Sciences and Compounding Pharmacies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 container mx-auto px-4 max-w-6xl">
        {activeArticleIdx === null ? (
          /* Article List View */
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="border-b border-muted pb-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-accent" />
                Featured Publications
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border border-muted">
                  <CardHeader className="flex flex-row items-start gap-4 pb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      {article.icon}
                    </div>
                    <div className="space-y-1">
                      <CardTitle 
                        className="text-xl font-bold cursor-pointer hover:text-accent transition-colors"
                        onClick={() => setActiveArticleIdx(index)}
                      >
                        {article.title}
                      </CardTitle>
                      <CardDescription className="flex flex-wrap gap-4 text-xs mt-1">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</span>
                        <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {article.author}</span>
                        <span className="flex items-center gap-1">{article.readTime}</span>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {article.summary}
                    </p>
                    <Button 
                      variant="link" 
                      onClick={() => setActiveArticleIdx(index)}
                      className="text-accent p-0 h-auto font-semibold flex items-center gap-1 hover:no-underline"
                    >
                      Read Full Article &rarr;
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* Full Article Reader View */
          <div className="max-w-3xl mx-auto bg-card p-8 md:p-12 rounded-2xl border border-muted shadow-sm">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveArticleIdx(null)}
              className="mb-8 gap-2 border-muted text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Articles
            </Button>
            
            <article className="space-y-6">
              <div className="space-y-4 border-b border-muted pb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  {articles[activeArticleIdx].icon}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-tight">
                  {articles[activeArticleIdx].title}
                </h1>
                <div className="flex flex-wrap gap-6 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {articles[activeArticleIdx].date}</span>
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {articles[activeArticleIdx].author}</span>
                  <span>{articles[activeArticleIdx].readTime}</span>
                </div>
              </div>

              <div className="pt-4">
                {articles[activeArticleIdx].content}
              </div>
            </article>

            <div className="border-t border-muted mt-12 pt-8 flex justify-between">
              <Button
                variant="ghost"
                onClick={() => setActiveArticleIdx(null)}
                className="gap-2 text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Articles
              </Button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Articles;
