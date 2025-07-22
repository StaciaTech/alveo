import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, Users, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  console.log("Home component is rendering");
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Added explicit styling */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
              Transforming{" "}
              <span className="alveo-logo-text">Respiratory Health</span>{" "}
              Through Science
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              From rural villages to international symposium halls, we are
              laying the foundation for a future where respiratory diseases are
              not a lifelong burden, but a preventable, manageable, and
              reversible condition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="alveo-gradient text-white hover:opacity-90 transition-opacity"
              >
                Support Our Mission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                  Learn About Our Work
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Vision & Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Promoting Responsible Science and Research for Personalized
                    Good Health Practices"
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "To foster respiratory health awareness and build a
                    sustainable, personalized respiratory health ecosystem
                    through continuous research, education, and technology"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 4P Medicine Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The 4P Medicine Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are not just a health initiative. We are a movement for
              scientific excellence, equitable access, and integrated care—built
              on the firm foundation of 4P medicine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Preventive",
                description:
                  "Early intervention and disease prevention strategies",
                icon: "🛡️",
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Personalized ",
                description:
                  "Tailored treatments based on individual science bio profiling",
                icon: "👤",
                color: "from-green-500 to-green-600",
              },
              {
                title: "Participative ",
                description: "Regaining health through integrated approach",
                icon: "🤝",
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Predictive",
                description: "AI-driven risk assessment and forecasting",
                icon: "🔮",
                color: "from-pink-500 to-pink-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-elegant transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Areas */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Work Spans Across Science, Society & Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Science & Research Initiatives",
                icon: <Microscope className="w-8 h-8" />,
                items: [
                  "Advanced diagnostics and AI-driven profiling of lung diseases",
                  "Development of biomarkers, precision medicine, and predictive tools",
                  "IT-enabled innovations for early detection and management",
                  "State-of-the-art infrastructure and specialized tools",
                ],
              },
              {
                title: "Pulmonary Education & Training",
                icon: <Users className="w-8 h-8" />,
                items: [
                  "Educational programs, seminars, and international symposiums",
                  "Support for young researchers and academic innovation",
                  "Intellectual property generation and patent facilitation",
                  "Integrative and holistic medical approaches",
                ],
              },
              {
                title: "Integrated Public Health Programs",
                icon: <Heart className="w-8 h-8" />,
                items: [
                  "Participative therapy blending modern and traditional medicine",
                  "Outreach targeting tribal, marginalized and vulnerable populations",
                  "Community-based awareness campaigns for all ages",
                  "Infrastructure for accessible, inclusive respiratory care",
                ],
              },
              {
                title: "Institutional Partnerships & Policy",
                icon: <Globe className="w-8 h-8" />,
                items: [
                  "Projects with central, state and local governments",
                  "Joint programs with NGOs, hospitals, and educational bodies",
                  "Research-based products and specialized services",
                  "Global alliance development and collaboration",
                ],
              },
            ].map((area, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-primary">{area.icon}</div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {area.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {area.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3 text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Us in Transforming Respiratory Health
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Together, we can create a world where lung health is a right—not a
            privilege. Your support enables groundbreaking research, community
            outreach, and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="alveo-gradient text-white hover:opacity-90 transition-opacity"
            >
              Donate Now
              <Heart className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
