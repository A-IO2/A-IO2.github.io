import { motion } from "motion/react";
import { Download, Target, TrendingUp, Users, Lightbulb, CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

const caseStudies = [
  {
    title: "Mobile App Redesign & Feature Prioritization",
    challenge: "User retention dropped by 15% after a competitor launched with superior UX. Need to regain market position while balancing technical debt.",
    action: [
      "Conducted user research with 200+ users using JTBD framework",
      "Implemented OKR-based roadmap aligned with company strategy",
      "Led cross-functional team through MVP testing cycles",
      "Established data-driven feature prioritization using RICE scoring",
    ],
    results: [
      { metric: "+30% user retention", description: "in beta phase (6 months)" },
      { metric: "4.8/5.0 rating", description: "App Store rating improvement" },
      { metric: "25% faster", description: "feature delivery velocity" },
    ],
    tools: ["JTBD", "OKRs", "RICE", "A/B Testing"],
  },
  {
    title: "SaaS Platform Expansion Strategy",
    challenge: "Enterprise segment untapped despite product-market fit in SMB. Need to scale without disrupting core business.",
    action: [
      "Developed enterprise go-to-market strategy through customer interviews",
      "Created tiered pricing model validated through conjoint analysis",
      "Built product roadmap balancing new features with existing improvements",
      "Established success metrics and tracking dashboards",
    ],
    results: [
      { metric: "$2.4M ARR", description: "new enterprise revenue in year 1" },
      { metric: "12 enterprise", description: "clients acquired" },
      { metric: "92% retention", description: "enterprise customer retention" },
    ],
    tools: ["Market Analysis", "Pricing Strategy", "Customer Development", "Product Analytics"],
  },
  {
    title: "Data-Driven Feature Sunsetting",
    challenge: "Legacy features consuming 40% of engineering resources with declining usage and unclear business value.",
    action: [
      "Analyzed feature usage patterns across 10,000+ users",
      "Conducted stakeholder interviews to understand dependencies",
      "Created sunset roadmap with migration paths for affected users",
      "Implemented feature flagging for gradual rollout",
    ],
    results: [
      { metric: "40% reduction", description: "in technical debt" },
      { metric: "3 engineers", description: "reallocated to high-impact features" },
      { metric: "<2% churn", description: "from sunsetting activities" },
    ],
    tools: ["Product Analytics", "Feature Flags", "Stakeholder Management", "Migration Planning"],
  },
];

const frameworks = [
  { name: "Jobs to be Done (JTBD)", icon: Target },
  { name: "OKRs & KPIs", icon: TrendingUp },
  { name: "User Story Mapping", icon: Users },
  { name: "Design Thinking", icon: Lightbulb },
];

export function ProductManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4">Product Management</Badge>
            <h1 className="mb-4">Strategic Product Leadership</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Driving measurable business impact through strategic vision, customer-centric
              design, and data-driven decision making. Building products that users love
              and stakeholders value.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Product Management Resume
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Frameworks & Tools */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {frameworks.map((framework, index) => (
              <motion.div
                key={framework.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <framework.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm">{framework.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-4">Case Studies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Real-world examples of strategic product initiatives delivering measurable
              business outcomes.
            </p>
          </motion.div>

          <div className="space-y-8 max-w-5xl">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle>{study.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="challenge" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="challenge">Challenge</TabsTrigger>
                        <TabsTrigger value="action">Action</TabsTrigger>
                        <TabsTrigger value="results">Results</TabsTrigger>
                      </TabsList>

                      <TabsContent value="challenge" className="mt-4">
                        <div className="space-y-4">
                          <p className="text-muted-foreground">{study.challenge}</p>
                          <div className="flex flex-wrap gap-2">
                            {study.tools.map((tool) => (
                              <Badge key={tool} variant="secondary">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="action" className="mt-4">
                        <ul className="space-y-2">
                          {study.action.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </TabsContent>

                      <TabsContent value="results" className="mt-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          {study.results.map((result, i) => (
                            <Card key={i} className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200 dark:border-green-900">
                              <CardContent className="p-4 text-center">
                                <div className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-1">
                                  {result.metric}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {result.description}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Artifacts Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Product Artifacts</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            <Card>
              <CardHeader>
                <CardTitle>Roadmap Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                    <div>
                      <div className="font-medium">Q1 2024: Foundation</div>
                      <div className="text-sm text-muted-foreground">Core platform improvements, technical debt reduction</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                    <div>
                      <div className="font-medium">Q2 2024: Growth</div>
                      <div className="text-sm text-muted-foreground">New features based on user research, A/B testing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                    <div>
                      <div className="font-medium">Q3-Q4 2024: Scale</div>
                      <div className="text-sm text-muted-foreground">Enterprise features, international expansion</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Prioritization Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gradient-to-br from-background to-muted rounded-lg flex items-center justify-center border">
                  <div className="grid grid-cols-2 gap-4 p-4 w-full h-full">
                    <div className="bg-green-500/20 border-2 border-green-500 rounded-lg p-3 flex items-center justify-center text-center">
                      <span className="text-sm font-medium">High Impact<br/>Low Effort</span>
                    </div>
                    <div className="bg-yellow-500/20 border-2 border-yellow-500 rounded-lg p-3 flex items-center justify-center text-center">
                      <span className="text-sm font-medium">High Impact<br/>High Effort</span>
                    </div>
                    <div className="bg-blue-500/20 border-2 border-blue-500 rounded-lg p-3 flex items-center justify-center text-center">
                      <span className="text-sm font-medium">Low Impact<br/>Low Effort</span>
                    </div>
                    <div className="bg-red-500/20 border-2 border-red-500 rounded-lg p-3 flex items-center justify-center text-center">
                      <span className="text-sm font-medium">Low Impact<br/>High Effort</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
