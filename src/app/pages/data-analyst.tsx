import { motion } from "motion/react";
import { Download, BarChart3, TrendingUp, PieChart, LineChart, Database } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const analyticsTools = [
  { name: "Python", icon: Database, category: "Programming" },
  { name: "SQL", icon: Database, category: "Database" },
  { name: "Tableau", icon: BarChart3, category: "Visualization" },
  { name: "Power BI", icon: BarChart3, category: "Visualization" },
  { name: "Excel", icon: PieChart, category: "Analysis" },
  { name: "R", icon: LineChart, category: "Statistics" },
];

const revenueData = [
  { month: "Jan", revenue: 45000, target: 42000 },
  { month: "Feb", revenue: 52000, target: 48000 },
  { month: "Mar", revenue: 48000, target: 50000 },
  { month: "Apr", revenue: 61000, target: 55000 },
  { month: "May", revenue: 58000, target: 57000 },
  { month: "Jun", revenue: 67000, target: 60000 },
];

const customerSegmentData = [
  { name: "Enterprise", value: 45, color: "#3b82f6" },
  { name: "Mid-Market", value: 30, color: "#8b5cf6" },
  { name: "SMB", value: 25, color: "#06b6d4" },
];

const productPerformanceData = [
  { product: "Product A", sales: 4200, growth: 12 },
  { product: "Product B", sales: 3800, growth: 8 },
  { product: "Product C", sales: 3200, growth: -3 },
  { product: "Product D", sales: 2900, growth: 18 },
  { product: "Product E", sales: 2400, growth: 5 },
];

const insightStories = [
  {
    title: "Customer Churn Prediction Model",
    challenge: "High customer churn rate (23%) with unclear root causes and limited predictive capability.",
    analysis: [
      "Analyzed 18 months of customer interaction data across 5,000+ accounts",
      "Built logistic regression model identifying 7 key churn indicators",
      "Segmented customers by churn risk: High (32%), Medium (41%), Low (27%)",
      "Identified product usage patterns correlating with retention",
    ],
    insight: "Customers with <2 logins per week and no API integration had 3.2x higher churn risk. Support ticket response time >24hrs increased churn probability by 47%.",
    businessImpact: [
      { metric: "18% reduction", description: "in customer churn rate" },
      { metric: "$1.2M saved", description: "in annual recurring revenue" },
      { metric: "85% accuracy", description: "in churn prediction model" },
    ],
  },
  {
    title: "Marketing Campaign Attribution Analysis",
    challenge: "Multi-channel marketing spend of $480K/year with unclear ROI and attribution across touchpoints.",
    analysis: [
      "Consolidated data from 6 marketing platforms into unified dashboard",
      "Applied multi-touch attribution modeling across customer journey",
      "Analyzed conversion paths for 12,000+ customers over 9 months",
      "Calculated channel-specific ROI and customer acquisition costs",
    ],
    insight: "Email nurture sequences contributed to 34% of conversions but received only 12% of budget. Paid social had 2.3x higher CAC than organic search but 45% lower LTV.",
    businessImpact: [
      { metric: "$120K reallocation", description: "to high-ROI channels" },
      { metric: "28% improvement", description: "in overall campaign ROI" },
      { metric: "31% lower CAC", description: "through optimized spend" },
    ],
  },
  {
    title: "Inventory Optimization & Demand Forecasting",
    challenge: "Stock-outs costing $80K/month while excess inventory tied up $1.2M in working capital.",
    analysis: [
      "Built time-series forecasting model using 3 years of sales data",
      "Incorporated seasonality, promotions, and external factors",
      "Analyzed SKU-level demand patterns across 2,500+ products",
      "Simulated different inventory policies to optimize stock levels",
    ],
    insight: "20% of SKUs drove 75% of revenue but had highest stock-out rates. Seasonal demand patterns were 40% more pronounced than assumed, causing inefficient ordering.",
    businessImpact: [
      { metric: "92% reduction", description: "in stock-out incidents" },
      { metric: "$450K freed", description: "from excess inventory" },
      { metric: "15% improvement", description: "in inventory turnover" },
    ],
  },
];

export function DataAnalystPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-500/10 to-blue-500/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4">Data Analysis & Strategy</Badge>
            <h1 className="mb-4">Transforming Data into Strategic Insights</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Bridging the gap between raw data and actionable business strategy through
              advanced analytics, visualization, and storytelling.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download Data Analytics Resume
              </Button>
              <Button size="lg" variant="outline">
                View Dashboard Examples
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Tools */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl">
            {analyticsTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <tool.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">{tool.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Interactive Data Visualizations</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mb-6">
            {/* Revenue Trend Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-blue-600" />
                    Revenue vs Target Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsLineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }} 
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="revenue" 
                        stroke="#3b82f6" 
                        strokeWidth={2}
                        name="Actual Revenue"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="target" 
                        stroke="#8b5cf6" 
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        name="Target"
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Customer Segment Pie Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-purple-600" />
                    Customer Segment Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Pie
                        data={customerSegmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {customerSegmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }} 
                      />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Product Performance Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  Product Performance Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsBarChart data={productPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="product" className="text-xs" />
                    <YAxis className="text-xs" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="sales" fill="#10b981" name="Sales ($K)" />
                    <Bar dataKey="growth" fill="#06b6d4" name="Growth (%)" />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Insight Stories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Data-Driven Insight Stories</h2>
          <div className="space-y-8 max-w-5xl">
            {insightStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-l-4 border-l-indigo-500">
                  <CardHeader>
                    <CardTitle>{story.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">
                      <span className="font-medium">Challenge: </span>
                      {story.challenge}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Analysis Process */}
                    <div>
                      <h4 className="mb-2 flex items-center gap-2">
                        <Database className="h-4 w-4 text-blue-500" />
                        Analysis Process
                      </h4>
                      <ul className="space-y-1 pl-6">
                        {story.analysis.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Insight */}
                    <div className="p-4 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                      <h4 className="mb-2 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-indigo-600" />
                        Key Insight
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {story.insight}
                      </p>
                    </div>

                    {/* Business Impact */}
                    <div>
                      <h4 className="mb-3">Business Impact</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {story.businessImpact.map((impact, i) => (
                          <Card key={i} className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200 dark:border-green-900">
                            <CardContent className="p-4 text-center">
                              <div className="text-xl font-semibold text-green-600 dark:text-green-400 mb-1">
                                {impact.metric}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {impact.description}
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

      {/* Analytics Workflow */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">End-to-End Analytics Workflow</h2>
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { 
                  title: "Collection", 
                  description: "Gather data from multiple sources, APIs, databases",
                  icon: Database,
                  color: "from-blue-500 to-cyan-500"
                },
                { 
                  title: "Analysis", 
                  description: "Clean, transform, and analyze using statistical methods",
                  icon: BarChart3,
                  color: "from-purple-500 to-pink-500"
                },
                { 
                  title: "Visualization", 
                  description: "Create interactive dashboards and compelling visuals",
                  icon: PieChart,
                  color: "from-green-500 to-emerald-500"
                },
                { 
                  title: "Strategy", 
                  description: "Translate insights into actionable business recommendations",
                  icon: TrendingUp,
                  color: "from-orange-500 to-red-500"
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
