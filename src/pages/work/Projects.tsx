import React from "react";
import { Microscope, Award, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="alveo-logo-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Cutting-edge research initiatives transforming respiratory health
            outcomes through innovative science and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "HER♀2 – Breathing Health into Women’s Work & Life",
              category: "Women Empowerment",
              description:
                "ALVEO 4P’s HER♀2 initiative targets working-caregiver women’s respiratory health, tackling delayed lung-condition diagnosis caused by low awareness and scarce early screening.",
              image:
                "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              status: "Ongoing",
              impact:
                "Empowers women with tools and knowledge to breathe better",
              features: [
                "On-site health assessments",
                "Respiratory screenings",
                "Lifestyle guidance delivered by pulmonology, yoga, and Ayurveda experts",
                "Blend of modern medicine and traditional wellness",
              ],
              timeline: "2023-2025",
              funding: "₹2.5 Crores",
            },
            // {
            //   title: "Rural Respiratory Health Initiative",
            //   category: "Community Outreach",
            //   description:
            //     "Comprehensive healthcare delivery program targeting underserved rural populations across India.",
            //   image:
            //     "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            //   status: "Expanding",
            //   impact: "50+ villages reached",
            //   features: [
            //     "Mobile screening units",
            //     "Community health education",
            //     "Telemedicine consultations",
            //     "Traditional medicine integration",
            //   ],
            //   timeline: "2022-2026",
            //   funding: "₹1.8 Crores",
            // },
            // {
            //   title: "Precision Medicine Platform",
            //   category: "Technology Innovation",
            //   description:
            //     "Integrated digital platform combining genomics, environmental data, and clinical records for personalized care.",
            //   image:
            //     "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            //   status: "Development",
            //   impact: "Multi-center deployment",
            //   features: [
            //     "Genomic data integration",
            //     "Environmental factor analysis",
            //     "Real-time monitoring",
            //     "Clinical decision support",
            //   ],
            //   timeline: "2024-2027",
            //   funding: "₹3.2 Crores",
            // },
            // {
            //   title: "Youth Researcher Program",
            //   category: "Education & Training",
            //   description:
            //     "Mentorship and funding program developing the next generation of respiratory health researchers.",
            //   image:
            //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            //   status: "Annual",
            //   impact: "100+ researchers trained",
            //   features: [
            //     "Research fellowships",
            //     "International collaborations",
            //     "Patent support",
            //     "Publication assistance",
            //   ],
            //   timeline: "Ongoing",
            //   funding: "₹80 Lakhs/year",
            // },
          ].map((project, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-elegant transition-all group"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {/* <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span> */}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">
                      Timeline:
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {project.timeline}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">
                      Funding:
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {project.funding}
                    </span>
                  </div>
                </div> */}

                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-sm text-primary font-medium">
                    <Award className="w-4 h-4" />
                    <span>{project.impact}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="w-3 h-3 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  View Details
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Research Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Advanced Diagnostics",
                description:
                  "AI-powered imaging and biomarker analysis for early disease detection",
                icon: "🔬",
                projects: 5,
              },
              {
                title: "Personalized Medicine",
                description:
                  "Tailored treatment protocols based on individual patient profiles",
                icon: "👤",
                projects: 3,
              },
              {
                title: "Community Health",
                description:
                  "Population-based interventions and preventive care programs",
                icon: "🏘️",
                projects: 8,
              },
              {
                title: "Digital Health",
                description:
                  "Technology solutions for remote monitoring and telemedicine",
                icon: "💻",
                projects: 4,
              },
              {
                title: "Environmental Health",
                description:
                  "Impact of environmental factors on respiratory health outcomes",
                icon: "🌍",
                projects: 6,
              },
              {
                title: "Policy Research",
                description:
                  "Evidence-based policy development for healthcare systems",
                icon: "📋",
                projects: 2,
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-elegant transition-shadow text-center"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {area.description}
                  </p>
                  <div className="text-primary font-medium text-sm">
                    {area.projects} Active Projects
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/5 rounded-lg p-8 md:p-12 text-center">
          <Microscope className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Research Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Collaborate with us on groundbreaking research that transforms
            respiratory health outcomes. Whether you're a researcher,
            institution, or organization, there are many ways to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="alveo-gradient text-white hover:opacity-90"
              asChild
            >
              <Link
                to="/get-involved/partner"
                onClick={() => window.scrollTo(0, 0)}
              >
                Research Partnerships
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                Contact Research Team
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
