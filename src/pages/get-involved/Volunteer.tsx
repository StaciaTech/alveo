import React, { useState } from "react";
import { Heart, ArrowRight } from "lucide-react";
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

const Volunteer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: "",
    skills: "",
    availability: "",
    motivation: "",
    interests: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Volunteer Application Submitted!",
      description:
        "Thank you for your interest. We'll get back to you within 48 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      skills: "",
      availability: "",
      motivation: "",
      interests: "",
    });
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Become a <span className="alveo-logo-text">Volunteer</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join our dedicated team of volunteers and contribute to
            life-changing respiratory health initiatives across India and
            beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Make a Difference
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your time and skills can transform lives. Join our mission to
                advance respiratory health through meaningful volunteer work
                that creates lasting impact in communities worldwide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Research Support",
                    description:
                      "Assist with data collection, analysis, and research administration",
                    icon: "🔬",
                  },
                  {
                    title: "Community Outreach",
                    description:
                      "Help organize and conduct health awareness programs in communities",
                    icon: "🏘️",
                  },
                  {
                    title: "Educational Programs",
                    description:
                      "Support training workshops and educational content development",
                    icon: "📚",
                  },
                  {
                    title: "Event Coordination",
                    description:
                      "Assist with symposiums, conferences, and networking events",
                    icon: "📅",
                  },
                  {
                    title: "Digital Outreach",
                    description:
                      "Social media management and digital content creation",
                    icon: "💻",
                  },
                  {
                    title: "Translation Services",
                    description:
                      "Help translate materials into local languages",
                    icon: "🌐",
                  },
                ].map((opportunity, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{opportunity.icon}</span>
                        <h3 className="font-semibold text-foreground">
                          {opportunity.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {opportunity.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Volunteer Benefits */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Volunteer Benefits
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Professional development opportunities",
                  "Networking with healthcare professionals",
                  "Certificate of appreciation and recommendation letters",
                  "Access to exclusive training programs",
                  "Contribution to meaningful health initiatives",
                  "Flexible scheduling options",
                  "Travel and accommodation support for events",
                  "Recognition in annual reports and publications",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle>Volunteer Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    placeholder="City, State"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("interests", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your primary interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="research">Research Support</SelectItem>
                      <SelectItem value="community">
                        Community Outreach
                      </SelectItem>
                      <SelectItem value="education">
                        Educational Programs
                      </SelectItem>
                      <SelectItem value="events">Event Coordination</SelectItem>
                      <SelectItem value="digital">Digital Outreach</SelectItem>
                      <SelectItem value="translation">
                        Translation Services
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) =>
                      handleInputChange("experience", e.target.value)
                    }
                    placeholder="Brief description of your background and experience"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skills">Skills & Interests</Label>
                  <Textarea
                    id="skills"
                    value={formData.skills}
                    onChange={(e) =>
                      handleInputChange("skills", e.target.value)
                    }
                    placeholder="What skills do you bring? What areas interest you most?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability">Availability</Label>
                  <Select
                    onValueChange={(value) =>
                      handleInputChange("availability", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekends">Weekends only</SelectItem>
                      <SelectItem value="evenings">Weekday evenings</SelectItem>
                      <SelectItem value="flexible">
                        Flexible schedule
                      </SelectItem>
                      <SelectItem value="full-time">
                        Full-time availability
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">
                    Why do you want to volunteer with us?
                  </Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) =>
                      handleInputChange("motivation", e.target.value)
                    }
                    placeholder="Tell us about your motivation to join our mission"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full alveo-gradient text-white"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Volunteer Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Volunteer Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr Krishnaveni R",
                role: "Research Volunteer",
                quote:
                  "Contributing to cutting-edge respiratory research has been incredibly fulfilling. The team is supportive and the impact is real.",
                image:
                  "https://images.unsplash.com/photo-1594824204845-c5ae2d9a4b5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Mrs Preethi Aravind",
                role: "Community Outreach Volunteer",
                quote:
                  "Seeing the difference our health education programs make in rural communities keeps me motivated every day.",
                image:
                  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Dr Roja Gurumoorthy",
                role: "Medical Volunteer",
                quote:
                  "As a retired physician, volunteering here allows me to continue serving communities while learning about new approaches.",
                image:
                  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
              },
            ].map((volunteer, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-6 text-center">
                  <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-foreground mb-1">
                    {volunteer.name}
                  </h3>
                  <p className="text-primary text-sm mb-3">{volunteer.role}</p>
                  <p className="text-muted-foreground text-sm italic leading-relaxed">
                    "{volunteer.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join hundreds of volunteers who are already making a difference in
            respiratory health. Your contribution, no matter how small, can help
            save lives and improve communities.
          </p>
          <Button
            size="lg"
            className="alveo-gradient text-white hover:opacity-90"
          >
            Start Your Volunteer Journey
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Volunteer;
