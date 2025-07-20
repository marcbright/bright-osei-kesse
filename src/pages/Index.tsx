
import { useState } from 'react';
import { Download, Mail, Github, Linkedin, ExternalLink, Database, BarChart3, FileSpreadsheet, Brain, Code, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    // {
    //   id: 1,
    //   title: "Sales Performance Dashboard",
    //   problem: "Regional sales team needed real-time visibility into performance metrics across 15 territories",
    //   approach: "Built interactive Power BI dashboard with automated data refresh from multiple sources",
    //   tools: ["Power BI", "SQL", "Excel"],
    //   outcome: "Reduced reporting time from 8 hours to 15 minutes weekly",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    //   metrics: "40+ hours saved monthly",
    //   github: "https://github.com/brightoseikesse/sales-dashboard"
    // },
    // {
    //   id: 2,
    //   title: "Customer Churn Prediction",
    //   problem: "High customer attrition rate with no early warning system",
    //   approach: "Developed predictive model using Python to identify at-risk customers",
    //   tools: ["Python", "SQL", "Tableau"],
    //   outcome: "Identified 85% of churning customers 30 days in advance",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    //   metrics: "23% reduction in churn",
    //   github: "https://github.com/brightoseikesse/churn-prediction"
    // },
    {
      id: 3,
      title: "EPL Football Data Analysis",
      problem: "Unstructured and raw English Premier League (EPL) football match data, difficult to query and derive insights from efficiently.",
      approach: "Cleaned and transformed historical EPL match data from CSV into a structured PostgreSQL database. Developed a comprehensive set of SQL queries, categorized by difficulty (Beginner, Intermediate, Advanced), to extract performance metrics, analyze team statistics, and simulate league standings.",
      tools: ["PostgreSQL", "SQL"],
      outcome: "Created a robust and queryable database for EPL data, enabling efficient analysis of team performance, match outcomes, and historical trends.",
      image: "https://images.unsplash.com/photo-1706675780103-3ca1f89143a0?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      github: "https://github.com/marcbright/EPL_Football_Analysis_SQL"
    }
  ];

  const skills = [
    { name: "Python", icon: Code, level: 90 },
    { name: "SQL", icon: Database, level: 95 },
    { name: "Power BI", icon: BarChart3, level: 85 },
    { name: "Excel", icon: FileSpreadsheet, level: 90 },
    { name: "Tableau", icon: TrendingUp, level: 80 },
    { name: "Machine Learning", icon: Brain, level: 80 }
  ];

  const impacts = [
    { metric: "50+", label: "Hours Saved Monthly", icon: TrendingUp },
    { metric: "$2M+", label: "Cost Savings Generated", icon: Database },
    { metric: "15+", label: "Projects Completed", icon: BarChart3 },
    { metric: "99%", label: "Client Satisfaction", icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-blue-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-900">Bright Osei Kesse</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Turning Data Into 
                <span className="text-blue-600"> Stories</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hi!, I'm Bright a data analyst who believes every dataset has a story waiting to be told. 
                I spend my days diving into numbers, building dashboards, and finding those "aha!" moments that 
                drive real business impact.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                When I'm not wrestling with SQL queries or creating visualizations, you'll find me exploring 
                new machine learning techniques or helping teams make sense of their data. I love the challenge 
                of turning a messy 50,000-row spreadsheet into clear, actionable insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:marcbright2015@gmail.com"
                  style={{ textDecoration: 'none' }}
                  tabIndex={0}
                  aria-label="Send email to Bright Osei Kesse"
                >
                  <Button className="bg-blue-600 hover:bg-blue-700" type="button">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                </a>
                <a
                  href="/Bright-Osei-Kesse-Resume.pdf"
                  download="Bright-Osei-Kesse-Resume.pdf"
                  style={{ textDecoration: 'none' }}
                  tabIndex={0}
                  aria-label="Download Resume PDF"
                >
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" type="button">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-amber-400 p-1">
                  <img 
                    src="https://pbs.twimg.com/media/GYG_qyqWkAAetKH?format=jpg&name=900x900" 
                    alt="Bright Osei Kesse" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Real problems, data-driven solutions, measurable impact</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                tabIndex={0}
                aria-label={`View ${project.title} on GitHub`}
                style={{ textDecoration: 'none' }}
              >
                <Card
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    hoveredProject === project.id ? 'shadow-xl scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <ExternalLink className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                    <CardDescription className="text-amber-600 font-semibold">{project.metrics}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Problem</h4>
                        <p className="text-gray-600 text-sm">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Approach</h4>
                        <p className="text-gray-600 text-sm">{project.approach}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Tools Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, index) => (
                            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="pt-2 border-t">
                        <p className="text-green-600 font-semibold text-sm">{project.outcome}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Data Toolbox</h2>
            <p className="text-xl text-gray-600">The tools and technologies I use to unlock insights</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <skill.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                    <p className="text-sm text-gray-600">{skill.level}% proficiency</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-8">
            "Bright transformed our chaotic data into a clear story that drove our biggest strategic pivot. 
            His dashboards don't just show numbers they reveal opportunities."
          </blockquote>
          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
              alt="Client testimonial"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div className="text-left">
              <p className="font-semibold">Prescott Nyamekye</p>
              <p className="text-blue-200">Assistant Lecturer, GI-KACE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Talk Data</h2>
            <p className="text-xl text-gray-600">
              Have a dataset that needs some love? A business question that needs answering? 
              I'd love to help you find the story in your data.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-4" />
                  <a
                    href="mailto:marcbright2015@gmail.com"
                    className="text-gray-600 hover:text-blue-600 focus:outline-none"
                    style={{ textDecoration: 'none' }}
                  >
                    marcbright2015@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-blue-600 mr-4" />
                  <a
                    href="https://linkedin.com/in/bright-osei-kesse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 focus:outline-none"
                    style={{ textDecoration: 'none' }}
                  >
                    linkedin.com/in/bright-osei-kesse/
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 text-blue-600 mr-4" />
                  <a
                    href="https://github.com/marcbright"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 focus:outline-none"
                    style={{ textDecoration: 'none' }}
                  >
                    github.com/marcbright
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Connect</h3>
              <div className="space-y-4">
                <a
                  href="mailto:marcbright2015@gmail.com"
                  style={{ textDecoration: 'none' }}
                  tabIndex={0}
                  aria-label="Send email to Bright Osei Kesse"
                  className="block w-full mb-4"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" type="button">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Me an Email
                  </Button>
                </a>
                <a
                  href="/Bright-Osei-Kesse-Resume.pdf"
                  download="Bright-Osei-Kesse-Resume.pdf"
                  style={{ textDecoration: 'none' }}
                  tabIndex={0}
                  aria-label="Download Resume PDF"
                  className="block w-full mb-4"
                >
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50" type="button">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/bright-osei-kesse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                  tabIndex={0}
                  aria-label="Connect on LinkedIn"
                  className="block w-full"
                >
                  <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-50" type="button">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Bright Osei Kesse</h3>
            <p className="text-gray-400 mb-6">Data Analyst | Storyteller | Problem Solver</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                © 2024 Bright Osei Kesse. Built with passion for data and a love for clean code.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
