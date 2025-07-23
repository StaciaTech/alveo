import React from "react";
import { Eye, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisionMission = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vision & <span className="alveo-logo-text">Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our vision and mission guide every aspect of our work in
            transforming respiratory health through science and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-soft border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                "Promoting Responsible Science and Research for Personalized
                Good Health Practices"
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                We envision a world where scientific research drives
                personalized healthcare solutions, making respiratory health
                accessible to all through responsible innovation and
                evidence-based practices.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-l-4 border-l-primary">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                "To foster respiratory health awareness and build a sustainable,
                personalized respiratory health ecosystem through continuous
                research, education, and technology"
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                We are committed to creating comprehensive solutions that
                integrate cutting-edge research, community education, and
                technological innovation to transform respiratory care.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "P4-Centered Care",
                description:
                  "We follow the P4 model—Preventive, Predictive, Personalized, and Participative care—placing individuals, not just illnesses, at the heart of every intervention.",
                icon: "🔬",
              },
              {
                title: "Science-Driven, Holistically Delivered",
                description:
                  "We blend cutting-edge pulmonology with traditional wisdom from Ayurveda, yoga, and lifestyle medicine, offering comprehensive solutions that restore long-term health.",
                icon: "⚖️",
              },
              {
                title: "Health Equity and Access",
                description:
                  "We are committed to reaching underserved and marginalized communities, ensuring that advanced diagnostics, therapies, and education are accessible to all.",
                icon: "💡",
              },
              {
                title: "Collaboration and Capacity Building",
                description:
                  "We actively partner with institutions, governments, and grassroots organizations to drive innovation, build infrastructure, and strengthen public health systems.",
                icon: "🤝",
              },
              {
                title: "Research with Real-World Impact",
                description:
                  "Our focus on translational research helps bridge the gap between scientific discovery and day-to-day clinical care—reducing the burden of respiratory disease in meaningful ways.",
                icon: "🤝",
              },
              {
                title: "Innovation with Purpose",
                description:
                  "From developing AI tools and biomarkers to launching public awareness programs and educational training, our initiatives are designed to spark change and improve lives.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <Card key={index} className="shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Strategic Pillars */}
        <section className="bg-primary/5 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Strategic Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Research & Innovation",
                description:
                  "Advancing scientific knowledge through rigorous research and technological innovation",
                features: [
                  "AI-driven diagnostics",
                  "Biomarker development",
                  "Clinical trials",
                  "Technology platforms",
                ],
              },
              {
                title: "Education & Training",
                description:
                  "Building capacity and knowledge across healthcare professionals and communities",
                features: [
                  "Professional development",
                  "Community education",
                  "Academic partnerships",
                  "Knowledge sharing",
                ],
              },
              {
                title: "Policy & Advocacy",
                description:
                  "Influencing health systems and policies to support respiratory health initiatives",
                features: [
                  "Policy research",
                  "Government engagement",
                  "Advocacy campaigns",
                  "System reform",
                ],
              },
            ].map((pillar, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {pillar.description}
                </p>
                <ul className="space-y-2">
                  {pillar.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-sm text-muted-foreground"
                    >
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default VisionMission;
