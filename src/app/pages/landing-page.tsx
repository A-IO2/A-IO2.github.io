import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Briefcase,
  Code,
  Target,
  TrendingUp,
  Truck,
  BarChart3,
  Download,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const roleCards = [
  {
    icon: Target,
    title: "Product Management",
    description: "Strategic vision and measurable impact through data-driven product decisions",
    path: "/product-management",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "Leadership excellence in agile execution and stakeholder collaboration",
    path: "/project-management",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Technical proficiency in building scalable, user-centric solutions",
    path: "/software-development",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Truck,
    title: "Logistics & Operations",
    description: "Operational excellence through process optimization and system design",
    path: "/logistics-operations",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Data Strategy",
    description: "Analytical insights that bridge data to actionable business outcomes",
    path: "/data-analyst",
    color: "from-indigo-500 to-blue-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function LandingPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with Gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-green-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >

            <motion.h1
              variants={itemVariants}
              className="mb-6 text-4xl md:text-6xl lg:text-7xl tracking-tight"
            >
              Building Product Vision Through
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                Strategy, Data, and Execution
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A versatile professional blending product strategy, technical expertise,
              and analytical rigor to deliver measurable business impact across diverse domains.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="#roles">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#about">
                  About Me
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <Download className="mr-2 h-4 w-4" />
		<a href="/cv.pdf">
		    Download Full CV
		</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">About Me</h2>
                <p className="text-muted-foreground mb-4">
                  I'm a multi-disciplinary professional with a passion for solving complex problems
                  through the intersection of strategy, technology, and data. My approach combines
                  strategic product thinking with hands-on technical execution and analytical rigor.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether I'm defining product roadmaps, leading cross-functional teams, architecting
                  technical solutions, optimizing operational workflows, or uncovering insights from data,
                  I bring a holistic perspective that drives meaningful business outcomes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Product Strategy
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Agile Leadership
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Full-Stack Development
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Data Analytics
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                    Process Optimization
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <ImageWithFallback
                    src="/portrait.webp"
                    alt="Professional portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Role Cards Section */}
      <section id="roles" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Areas of Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my work across different domains, each showcasing unique skills
              and delivering measurable impact.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {roleCards.map((role, index) => (
              <motion.div key={role.path} variants={itemVariants}>
                <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg h-full">
                  <Link to={role.path} className="block h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      {/* Gradient Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      {/* Icon */}
                      <div className="relative mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                        >
                          <role.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="relative mb-2">{role.title}</h3>
                      <p className="relative text-muted-foreground text-sm flex-grow">
                        {role.description}
                      </p>

                      {/* Arrow */}
                      <div className="relative mt-4 flex items-center text-primary group-hover:gap-2 transition-all">
                        <span className="text-sm">Learn more</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-4 text-primary-foreground">Ready to Collaborate?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              I'm always interested in discussing new opportunities, innovative projects,
              and ways to create meaningful impact together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary">
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <Download className="mr-2 h-4 w-4" />
                Download Full CV
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
