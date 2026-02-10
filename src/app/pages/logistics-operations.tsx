import { motion } from "motion/react";
import { Download, Truck, MapPin, Clock, TrendingDown, Package, Route } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

const operationalKPIs = [
  { label: "On-Time Delivery Rate", value: "96.5%", trend: "+2.3%", icon: Clock, color: "text-green-600" },
  { label: "Cost Reduction", value: "18%", trend: "-$240K/yr", icon: TrendingDown, color: "text-green-600" },
  { label: "Route Efficiency", value: "92%", trend: "+8%", icon: Route, color: "text-blue-600" },
  { label: "Inventory Turnover", value: "12.4x", trend: "+1.2x", icon: Package, color: "text-purple-600" },
];

const caseScenarios = [
  {
    title: "Supply Chain Optimization",
    challenge: "Delivery delays causing customer dissatisfaction and 15% increase in operational costs due to inefficient routing.",
    action: [
      "Analyzed 6 months of delivery data to identify bottlenecks",
      "Implemented route optimization algorithm reducing average distance by 22%",
      "Established real-time tracking system for visibility",
      "Created contingency protocols for high-volume periods",
    ],
    results: [
      { metric: "22% reduction", description: "in total delivery distance" },
      { metric: "96.5% on-time", description: "delivery rate achieved" },
      { metric: "$180K savings", description: "annual fuel and labor costs" },
    ],
  },
  {
    title: "Warehouse Process Redesign",
    challenge: "Inventory discrepancies and slow fulfillment times impacting customer experience and operational efficiency.",
    action: [
      "Conducted time-motion studies across all warehouse processes",
      "Redesigned layout using lean principles to minimize movement",
      "Implemented barcode scanning system for real-time inventory",
      "Trained team on new procedures with SOPs",
    ],
    results: [
      { metric: "45% faster", description: "order fulfillment time" },
      { metric: "99.2% accuracy", description: "inventory accuracy rate" },
      { metric: "30% improvement", description: "in space utilization" },
    ],
  },
  {
    title: "Cross-Dock Distribution Network",
    challenge: "Long storage times and multiple handling increasing costs and delivery times for time-sensitive products.",
    action: [
      "Designed cross-dock facility layout and workflow",
      "Created scheduling system to synchronize inbound/outbound shipments",
      "Implemented quality control checkpoints at transfer points",
      "Established performance metrics and monitoring dashboards",
    ],
    results: [
      { metric: "60% reduction", description: "in storage time" },
      { metric: "2-day improvement", description: "in average delivery time" },
      { metric: "25% cost savings", description: "in handling expenses" },
    ],
  },
];

const processFlowSteps = [
  { id: 1, title: "Receive", description: "Incoming shipment verification", icon: Package },
  { id: 2, title: "Sort", description: "Categorize by destination", icon: MapPin },
  { id: 3, title: "Route", description: "Optimize delivery paths", icon: Route },
  { id: 4, title: "Dispatch", description: "Assign to carriers", icon: Truck },
  { id: 5, title: "Track", description: "Real-time monitoring", icon: Clock },
];

export function LogisticsOperationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500/10 to-red-500/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4">Logistics & Operations</Badge>
            <h1 className="mb-4">Operational Excellence Through Optimization</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Driving efficiency and cost reduction through data-driven process optimization,
              strategic planning, and systematic workflow improvements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Operations Resume
              </Button>
              <Button size="lg" variant="outline">
                View Process Maps
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI Dashboard */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="mb-6">Operational Performance Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
            {operationalKPIs.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <kpi.icon className={`h-8 w-8 ${kpi.color}`} />
                      <Badge variant="secondary" className="text-xs">
                        {kpi.trend}
                      </Badge>
                    </div>
                    <div className={`text-3xl font-semibold mb-1 ${kpi.color}`}>
                      {kpi.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{kpi.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Diagram */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Logistics Process Flow</h2>
          <div className="max-w-5xl">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  {processFlowSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center gap-4 w-full md:w-auto">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex-shrink-0"
                      >
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                            <step.icon className="h-7 w-7 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold">
                            {step.id}
                          </div>
                        </div>
                        <div className="mt-3 text-center">
                          <div className="font-medium">{step.title}</div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {step.description}
                          </div>
                        </div>
                      </motion.div>
                      
                      {index < processFlowSteps.length - 1 && (
                        <div className="hidden md:block flex-shrink-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 opacity-50" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Scenarios */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Operational Improvements: Case Studies</h2>
          <div className="space-y-8 max-w-5xl">
            {caseScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle>{scenario.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        Challenge
                      </h4>
                      <p className="text-muted-foreground pl-4">
                        {scenario.challenge}
                      </p>
                    </div>

                    {/* Action */}
                    <div>
                      <h4 className="mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        Action Taken
                      </h4>
                      <ul className="space-y-1 pl-4">
                        {scenario.action.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        Results
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4 pl-4">
                        {scenario.results.map((result, i) => (
                          <Card key={i} className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200 dark:border-green-900">
                            <CardContent className="p-4 text-center">
                              <div className="text-xl font-semibold text-green-600 dark:text-green-400 mb-1">
                                {result.metric}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {result.description}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Optimization Visualization */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Route Optimization Impact</h2>
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    Before Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm">Average Route Distance</span>
                      <span className="font-semibold">285 miles</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm">Delivery Time</span>
                      <span className="font-semibold">8.5 hours</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm">Fuel Cost per Route</span>
                      <span className="font-semibold">$142</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                      <span className="text-sm">Stops per Route</span>
                      <span className="font-semibold">18</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    After Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                      <span className="text-sm">Average Route Distance</span>
                      <div className="text-right">
                        <span className="font-semibold">222 miles</span>
                        <Badge variant="secondary" className="ml-2 bg-green-500/20 text-green-700 dark:text-green-400">
                          -22%
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                      <span className="text-sm">Delivery Time</span>
                      <div className="text-right">
                        <span className="font-semibold">6.8 hours</span>
                        <Badge variant="secondary" className="ml-2 bg-green-500/20 text-green-700 dark:text-green-400">
                          -20%
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                      <span className="text-sm">Fuel Cost per Route</span>
                      <div className="text-right">
                        <span className="font-semibold">$111</span>
                        <Badge variant="secondary" className="ml-2 bg-green-500/20 text-green-700 dark:text-green-400">
                          -22%
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                      <span className="text-sm">Stops per Route</span>
                      <div className="text-right">
                        <span className="font-semibold">22</span>
                        <Badge variant="secondary" className="ml-2 bg-green-500/20 text-green-700 dark:text-green-400">
                          +22%
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
