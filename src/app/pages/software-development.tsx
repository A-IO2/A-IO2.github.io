import { motion } from "motion/react";
import { Download, Code2, Database, Cloud, Layers, GitBranch, Terminal } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

const technologies = [
  {
    category: "Frontend",
    icon: Layers,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "Redux"],
  },
  {
    category: "Backend",
    icon: Database,
    skills: ["Node.js", "Python", "Django", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions"],
  },
  {
    category: "Tools & Methods",
    icon: GitBranch,
    skills: ["Git", "Agile/Scrum", "TDD", "REST APIs", "GraphQL", "Microservices"],
  },
];

const projects = [
  {
    title: "E-Commerce Platform Rebuild",
    role: "Full-Stack Developer",
    duration: "8 months",
    description: "Led frontend architecture and implementation for high-traffic e-commerce platform serving 100k+ daily users.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
    achievements: [
      "Reduced page load time by 60% through code splitting and lazy loading",
      "Implemented real-time inventory system with WebSocket connections",
      "Built reusable component library adopted across 3 product teams",
    ],
  },
  {
    title: "Data Analytics Dashboard",
    role: "Frontend Developer",
    duration: "4 months",
    description: "Developed interactive dashboard for real-time business intelligence and reporting.",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    achievements: [
      "Created 15+ custom data visualizations with D3.js",
      "Implemented responsive design supporting mobile and tablet",
      "Achieved <100ms query response time through query optimization",
    ],
  },
  {
    title: "Microservices Migration",
    role: "Backend Developer",
    duration: "6 months",
    description: "Migrated monolithic application to microservices architecture for improved scalability.",
    tech: ["Python", "Docker", "Kubernetes", "RabbitMQ", "MongoDB"],
    achievements: [
      "Decomposed monolith into 8 independent services",
      "Implemented event-driven architecture with message queues",
      "Reduced deployment time from 2 hours to 15 minutes",
    ],
  },
];

const codeExample = `// Type-safe API client with error handling
interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(\`\${this.baseUrl}\${endpoint}\`);
      
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      
      const data = await response.json();
      
      return {
        data,
        status: response.status,
      };
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
}

// Usage
const api = new ApiClient('https://api.example.com');
const result = await api.get<User[]>('/users');`;

export function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4">Software Development</Badge>
            <h1 className="mb-4">Building Scalable Solutions</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Full-stack engineer with expertise in modern web technologies, cloud infrastructure,
              and building user-centric applications that scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Software Development Resume
              </Button>
              <Button size="lg" variant="outline">
                View GitHub Profile
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies & Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Core Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <tech.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{tech.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tech.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Experience */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Project Experience</h2>
          <div className="space-y-6 max-w-5xl">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <CardTitle>{project.title}</CardTitle>
                        <div className="flex gap-2 mt-1">
                          <Badge variant="outline">{project.role}</Badge>
                          <Badge variant="outline">{project.duration}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Achievements</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-green-500">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Code Quality & Best Practices</h2>
          <div className="max-w-5xl">
            <Card className="bg-slate-950 dark:bg-slate-900 border-slate-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-green-400" />
                    <CardTitle className="text-slate-100">api-client.ts</CardTitle>
                  </div>
                  <Badge variant="outline" className="border-slate-700 text-slate-300">
                    TypeScript
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="text-sm overflow-x-auto">
                  <code className="text-slate-300 font-mono">{codeExample}</code>
                </pre>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Code2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-medium">Type Safety</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Strong typing with TypeScript
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <GitBranch className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-medium">Version Control</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Git workflow best practices
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Terminal className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-medium">Testing</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    TDD & comprehensive coverage
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Development Workflow</h2>
          <div className="max-w-5xl">
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="design">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="design">Design</TabsTrigger>
                    <TabsTrigger value="develop">Develop</TabsTrigger>
                    <TabsTrigger value="test">Test</TabsTrigger>
                    <TabsTrigger value="deploy">Deploy</TabsTrigger>
                  </TabsList>

                  <TabsContent value="design" className="mt-4 space-y-2">
                    <p className="text-muted-foreground">
                      • Collaborate with designers and product managers<br/>
                      • Review mockups and design specifications<br/>
                      • Plan component architecture and data flow<br/>
                      • Create technical specifications
                    </p>
                  </TabsContent>

                  <TabsContent value="develop" className="mt-4 space-y-2">
                    <p className="text-muted-foreground">
                      • Write clean, maintainable code following best practices<br/>
                      • Implement features with reusability in mind<br/>
                      • Regular code reviews with team members<br/>
                      • Document code and APIs thoroughly
                    </p>
                  </TabsContent>

                  <TabsContent value="test" className="mt-4 space-y-2">
                    <p className="text-muted-foreground">
                      • Write unit tests for core functionality<br/>
                      • Implement integration tests for critical paths<br/>
                      • Perform manual testing across browsers/devices<br/>
                      • QA collaboration and bug fixing
                    </p>
                  </TabsContent>

                  <TabsContent value="deploy" className="mt-4 space-y-2">
                    <p className="text-muted-foreground">
                      • CI/CD pipeline automation with GitHub Actions<br/>
                      • Staging environment validation<br/>
                      • Gradual rollout with feature flags<br/>
                      • Monitoring and performance tracking
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
