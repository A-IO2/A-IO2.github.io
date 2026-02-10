import { motion } from "motion/react";
import { Download, Award, Calendar, Users, Target, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Progress } from "@/app/components/ui/progress";

const projectTimeline = [
  { phase: "Initiation", duration: "2 weeks", status: "completed", progress: 100 },
  { phase: "Planning", duration: "3 weeks", status: "completed", progress: 100 },
  { phase: "Execution", duration: "12 weeks", status: "in-progress", progress: 75 },
  { phase: "Monitoring", duration: "Ongoing", status: "in-progress", progress: 75 },
  { phase: "Closure", duration: "2 weeks", status: "pending", progress: 0 },
];

const sprints = [
  {
    name: "Sprint 12",
    status: "completed",
    stories: 8,
    completed: 8,
    velocity: 34,
  },
  {
    name: "Sprint 13",
    status: "completed",
    stories: 10,
    completed: 9,
    velocity: 38,
  },
  {
    name: "Sprint 14",
    status: "active",
    stories: 9,
    completed: 6,
    velocity: 32,
  },
];

const kpis = [
  { label: "On-Time Delivery", value: "94%", trend: "up", color: "text-green-600" },
  { label: "Budget Adherence", value: "98%", trend: "up", color: "text-green-600" },
  { label: "Stakeholder Satisfaction", value: "4.7/5.0", trend: "up", color: "text-green-600" },
  { label: "Team Velocity", value: "35 pts/sprint", trend: "up", color: "text-blue-600" },
];

const risks = [
  { title: "Resource Availability", severity: "medium", mitigation: "Cross-training team members, buffer capacity planned" },
  { title: "Third-party API Delays", severity: "low", mitigation: "Parallel development tracks, fallback options identified" },
  { title: "Scope Creep", severity: "medium", mitigation: "Strict change control process, regular stakeholder alignment" },
];

export function ProjectManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4">Project Management</Badge>
            <h1 className="mb-4">Execution Excellence Through Leadership</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Delivering complex projects on time and within budget through disciplined agile
              methodologies, stakeholder collaboration, and data-driven decision making.
            </p>

            {/* CAP-m Certification Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 p-6 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/50 max-w-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-yellow-500/20">
                  <Award className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <h3 className="mb-1">CAP-m Certified</h3>
                  <p className="text-sm text-muted-foreground">
                    Certified Associate in Project Management, demonstrating mastery of
                    PMI's project management framework and best practices.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Project Management Resume
              </Button>
              <Button size="lg" variant="outline">
                View Project Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KPI Dashboard */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="mb-6">Project Performance Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <p className="text-sm text-muted-foreground">{kpi.label}</p>
                      <TrendingUp className={`h-4 w-4 ${kpi.color}`} />
                    </div>
                    <div className={`text-2xl font-semibold ${kpi.color}`}>
                      {kpi.value}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline / Gantt Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Project Timeline & Progress</h2>
          <div className="max-w-5xl">
            <Card>
              <CardHeader>
                <CardTitle>Multi-Phase Project Execution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {projectTimeline.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${
                          phase.status === 'completed' ? 'bg-green-500/20' :
                          phase.status === 'in-progress' ? 'bg-blue-500/20' :
                          'bg-gray-500/20'
                        }`}>
                          {phase.status === 'completed' ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : phase.status === 'in-progress' ? (
                            <Calendar className="h-4 w-4 text-blue-600" />
                          ) : (
                            <Calendar className="h-4 w-4 text-gray-600" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">{phase.phase}</div>
                          <div className="text-sm text-muted-foreground">{phase.duration}</div>
                        </div>
                      </div>
                      <Badge variant={
                        phase.status === 'completed' ? 'default' :
                        phase.status === 'in-progress' ? 'secondary' :
                        'outline'
                      }>
                        {phase.status}
                      </Badge>
                    </div>
                    <Progress value={phase.progress} className="h-2" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agile Board */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Sprint Overview</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {sprints.map((sprint, index) => (
              <motion.div
                key={sprint.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={sprint.status === 'active' ? 'border-2 border-primary' : ''}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{sprint.name}</CardTitle>
                      {sprint.status === 'active' && (
                        <Badge>Active</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Stories Completed</span>
                        <span className="font-medium">{sprint.completed}/{sprint.stories}</span>
                      </div>
                      <Progress value={(sprint.completed / sprint.stories) * 100} />
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-sm text-muted-foreground">Team Velocity</div>
                      <div className="text-2xl font-semibold text-primary">
                        {sprint.velocity} pts
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Assessment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Risk Assessment & Mitigation</h2>
          <div className="space-y-4 max-w-5xl">
            {risks.map((risk, index) => (
              <motion.div
                key={risk.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg ${
                        risk.severity === 'high' ? 'bg-red-500/20' :
                        risk.severity === 'medium' ? 'bg-yellow-500/20' :
                        'bg-blue-500/20'
                      }`}>
                        <AlertTriangle className={`h-5 w-5 ${
                          risk.severity === 'high' ? 'text-red-600' :
                          risk.severity === 'medium' ? 'text-yellow-600' :
                          'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h4>{risk.title}</h4>
                          <Badge variant={
                            risk.severity === 'high' ? 'destructive' :
                            risk.severity === 'medium' ? 'secondary' :
                            'outline'
                          }>
                            {risk.severity} severity
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <span className="font-medium">Mitigation: </span>
                          {risk.mitigation}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retrospective Summary */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Recent Retrospective Highlights</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  What Went Well
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Strong cross-functional collaboration</li>
                  <li>• Daily standups kept team aligned</li>
                  <li>• Early detection of technical risks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sprint planning took longer than expected</li>
                  <li>• Need better estimation for complex tasks</li>
                  <li>• Documentation could be more thorough</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  Action Items
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Implement planning poker for estimates</li>
                  <li>• Create documentation templates</li>
                  <li>• Schedule knowledge sharing sessions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
