import React, { useState } from "react";
import { Users, ArrowRight, Building, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Partner = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    location: "",
    organizationType: "",
    background: "",
    partnershipAreas: "",
    proposal: "",
    budget: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Inquiry Submitted!",
      description:
        "Thank you for your interest. Our partnerships team will contact you within 5 business days.",
    });
    setFormData({
      organizationName: "",
      contactName: "",
      email: "",
      phone: "",
      location: "",
      organizationType: "",
      background: "",
      partnershipAreas: "",
      proposal: "",
      budget: "",
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partner <span className="alveo-logo-text">With Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Collaborate with ALVEO 4P to amplify your impact in respiratory
            health through strategic partnerships that create lasting change.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Strategic Collaboration
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Join our network of distinguished partners working together to
                transform respiratory health outcomes through innovative
                research, technology, and community engagement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Research Institutions",
                    description:
                      "Joint research projects and knowledge sharing initiatives",
                    icon: "🎓",
                  },
                  {
                    title: "Healthcare Organizations",
                    description:
                      "Clinical collaborations and patient care improvements",
                    icon: "🏥",
                  },
                  {
                    title: "Technology Companies",
                    description:
                      "Digital health solutions and innovation partnerships",
                    icon: "💡",
                  },
                  {
                    title: "Government Bodies",
                    description:
                      "Policy development and public health program implementation",
                    icon: "🏛️",
                  },
                  {
                    title: "Pharmaceutical Companies",
                    description:
                      "Drug development and clinical trial collaborations",
                    icon: "💊",
                  },
                  {
                    title: "NGOs & Foundations",
                    description:
                      "Community outreach and social impact initiatives",
                    icon: "🤝",
                  },
                ].map((partner, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{partner.icon}</span>
                        <h3 className="font-semibold text-foreground">
                          {partner.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {partner.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Partnership Benefits */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Partnership Benefits
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Access to cutting-edge research facilities and expertise",
                  "Collaboration with leading global experts",
                  "Joint publication and intellectual property opportunities",
                  "Expanded network and international visibility",
                  "Co-funding opportunities for research projects",
                  "Access to patient populations and clinical data",
                  "Shared resources and infrastructure utilization",
                  "Recognition as a health innovation leader",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Partnership Inquiry Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Partnership Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="organizationName">Organization Name *</Label>
                  <Input
                    id="organizationName"
                    value={formData.organizationName}
                    onChange={(e) =>
                      handleInputChange("organizationName", e.target.value)
                    }
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Person *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) =>
                        handleInputChange("contactName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location/Headquarters</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organizationType">Organization Type</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("organizationType", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="research">
                        Research Institution
                      </SelectItem>
                      <SelectItem value="healthcare">
                        Healthcare Organization
                      </SelectItem>
                      <SelectItem value="technology">
                        Technology Company
                      </SelectItem>
                      <SelectItem value="government">
                        Government Body
                      </SelectItem>
                      <SelectItem value="pharmaceutical">
                        Pharmaceutical Company
                      </SelectItem>
                      <SelectItem value="ngo">NGO/Foundation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="background">Organization Background</Label>
                  <Textarea
                    id="background"
                    value={formData.background}
                    onChange={(e) =>
                      handleInputChange("background", e.target.value)
                    }
                    placeholder="Tell us about your organization, mission, and current initiatives"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="partnershipAreas">
                    Partnership Areas of Interest
                  </Label>
                  <Textarea
                    id="partnershipAreas"
                    value={formData.partnershipAreas}
                    onChange={(e) =>
                      handleInputChange("partnershipAreas", e.target.value)
                    }
                    placeholder="Research collaboration, funding, technology sharing, clinical trials, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="proposal">Partnership Proposal</Label>
                  <Textarea
                    id="proposal"
                    value={formData.proposal}
                    onChange={(e) =>
                      handleInputChange("proposal", e.target.value)
                    }
                    placeholder="Describe your partnership ideas, objectives, and how we can work together"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">
                    Proposed Budget Range (Optional)
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("budget", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10-lakhs">
                        Under ₹10 Lakhs
                      </SelectItem>
                      <SelectItem value="10-50-lakhs">
                        ₹10 Lakhs - ₹50 Lakhs
                      </SelectItem>
                      <SelectItem value="50-lakhs-1-crore">
                        ₹50 Lakhs - ₹1 Crore
                      </SelectItem>
                      <SelectItem value="1-5-crores">
                        ₹1 Crore - ₹5 Crores
                      </SelectItem>
                      <SelectItem value="above-5-crores">
                        Above ₹5 Crores
                      </SelectItem>
                      <SelectItem value="in-kind">In-kind Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full alveo-gradient text-white"
                >
                  Submit Partnership Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Current Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Our Valued Partners
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                category: "Academic Institutions",
                count: "3+",
                icon: <Building className="w-8 h-8" />,
              },
              {
                category: "Healthcare Organizations",
                count: "2",
                icon: <Globe className="w-8 h-8" />,
              },
              {
                category: "Technology Partners",
                count: "2",
                icon: <Users className="w-8 h-8" />,
              },
              {
                category: "Government Bodies",
                count: "5+",
                icon: <Building className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <Card key={index} className="shadow-soft text-center">
                <CardContent className="p-6">
                  <div className="text-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold alveo-logo-text mb-2">
                    {stat.count}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.category}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Our Collaboration
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "MOU with Madras Christian College",
                partner: "Madras Christian College",
                description:
                  "Collaborative development of AI-powered lung imaging analysis resulted in 40% improvement in early disease detection.",
                impact: "1,000+ patients benefited",
              },
              {
                title: "MOU with IIT madras",
                partner: "SIIT madras",
                description: "IIT madras",
                impact: "5,000+ screenings completed",
              },
              {
                title:
                  "Partnered With Satyabhama institute of science and technology",
                partner: "Satyabhama institute of science and technology",
                description: "IIT madras",
                impact: "5,000+ screenings completed",
              },
            ].map((story, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {story.title}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-3">
                    {story.partner}
                  </p>
                  {/* <p className="text-muted-foreground mb-4">
                    {story.description}
                  </p> */}
                  {/* <div className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full inline-block">
                    {story.impact}
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let's Transform Healthcare Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your organization's expertise combined with our innovative approach
            can create breakthrough solutions in respiratory health. Let's
            explore how we can work together.
          </p>
          <Button
            size="lg"
            className="alveo-gradient text-white hover:opacity-90"
          >
            Schedule a Partnership Discussion
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Partner;
