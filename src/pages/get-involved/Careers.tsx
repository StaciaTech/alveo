import React, { useState, useRef, useEffect } from "react";
import { Briefcase, TrendingUp, Users, Award } from "lucide-react";
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

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  position?: string;
  experience?: string;
  education?: string;
  skills?: string;
  availability?: string;
};

const openPositions = [
  {
    title: "Research Coordinator",
    department: "Research & Development",
    type: "Part-time",
    location: "Chennai",
    experience: "Retired",
    description:
      "Reviewing student work and providing online guidance with their periodic submissions (not necessarily technical in nature)analysis.",
    requirements: [
      "Retired, senior-level teacher or faculty member from any educational institution",
      "Possesses a passion for and understanding of science",
      "Skilled in coordinating smoothly between ALVEO 4P, student institutions, and partner organizations",
    ],
  },
  {
    title: "Community Health Coordinator",
    department: "Outreach Programs",
    type: "Part-time",
    location: "Chennai",
    experience: "3+ years",
    description:
      "Manage community health initiatives and educational programs across rural and urban areas.",
    requirements: [
      "Public health background",
      "Community engagement experience",
      "Multi-language skills",
    ],
  },
];

const Careers = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    experience: "",
    education: "",
    skills: "",
    motivation: "",
    availability: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  /* ---------- validation helpers ---------- */
  const validate = () => {
    const e: Errors = {};
    if (!formData.name.trim()) e.name = "Name is required.";
    if (!formData.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Enter a valid email.";
    }
    if (!formData.phone.trim()) {
      e.phone = "Phone is required.";
    } else if (!/^[\d\s\-+()]{7,20}$/.test(formData.phone)) {
      e.phone = "Enter a valid phone number.";
    }
    if (!formData.location.trim()) e.location = "Location is required.";
    if (!formData.position) e.position = "Please select a position.";
    if (!formData.experience.trim()) e.experience = "Experience is required.";
    if (!formData.education.trim()) e.education = "Education is required.";
    if (!formData.skills.trim()) e.skills = "Skills are required.";
    if (!formData.availability) e.availability = "Please choose availability.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
      setErrors({ ...errors, [field]: undefined });
    };

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: undefined });
  };

  /* ---------- scroll & prefill ---------- */
  const scrollToForm = (positionValue: string) => {
    setFormData((prev) => ({ ...prev, position: positionValue }));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* ---------- submit ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const fd = new FormData();
    fd.append("access_key", WEB3FORMS_KEY);
    fd.append("from_name", "Job Application");
    fd.append("from_email", "careers@alveo4p.org");
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Application submitted! We'll contact you soon...",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          position: "",
          experience: "",
          education: "",
          skills: "",
          motivation: "",
          availability: "",
        });
        setErrors({});
      } else throw new Error();
    } catch {
      toast({ title: "Submission failed", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const Error = ({ msg }: { msg?: string }) =>
    msg ? <p className="text-xs text-destructive mt-1">{msg}</p> : null;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your <span className="alveo-logo-text">Career</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Join our mission-driven team and build a meaningful career while
            advancing respiratory health research and improving lives across
            communities.
          </p>
        </div>

        {/* Why Work With Us & Benefits – unchanged */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Work With Us?
              </h2>
            </div>
            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground">
                At ALVEO 4P we’re shaping the future of respiratory health.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Meaningful Impact",
                    desc: "Improve health outcomes",
                    icon: "🎯",
                  },
                  {
                    title: "Innovation Focus",
                    desc: "Cutting-edge tech",
                    icon: "🚀",
                  },
                  {
                    title: "Global Collaboration",
                    desc: "Work with experts",
                    icon: "🌍",
                  },
                  {
                    title: "Career Growth",
                    desc: "Advancement opportunities",
                    icon: "📈",
                  },
                  {
                    title: "Work-Life Balance",
                    desc: "Flexible hours",
                    icon: "⚖️",
                  },
                  {
                    title: "Continuous Learning",
                    desc: "Training & conferences",
                    icon: "📚",
                  },
                ].map((b, i) => (
                  <Card key={i} className="shadow-soft">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{b.icon}</span>
                        <h3 className="font-semibold">{b.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Comprehensive Benefits</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>
                  • Competitive salary, health insurance, bonuses, retirement
                </li>
                <li>• Professional development budget, flexible hours</li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <Card className="shadow-elegant" ref={formRef as any}>
            <CardHeader>
              <CardTitle>General Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange("name")}
                  />
                  <Error msg={errors.name} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange("email")}
                    />
                    <Error msg={errors.email} />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                    />
                    <Error msg={errors.phone} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location">Current Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={handleChange("location")}
                  />
                  <Error msg={errors.location} />
                </div>

                <div>
                  <Label htmlFor="position">Position of Interest *</Label>
                  <Select
                    value={formData.position}
                    onValueChange={handleSelectChange("position")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select position" />
                    </SelectTrigger>
                    <SelectContent>
                      {openPositions.map((p) => (
                        <SelectItem key={p.title} value={p.title}>
                          {p.title}
                        </SelectItem>
                      ))}
                      <SelectItem value="Open to Opportunities">
                        Open to Opportunities
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Error msg={errors.position} />
                </div>

                <div>
                  <Label htmlFor="experience">Professional Experience *</Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={handleChange("experience")}
                  />
                  <Error msg={errors.experience} />
                </div>

                <div>
                  <Label htmlFor="education">Educational Background *</Label>
                  <Textarea
                    id="education"
                    value={formData.education}
                    onChange={handleChange("education")}
                  />
                  <Error msg={errors.education} />
                </div>

                <div>
                  <Label htmlFor="skills">Key Skills & Expertise *</Label>
                  <Textarea
                    id="skills"
                    value={formData.skills}
                    onChange={handleChange("skills")}
                  />
                  <Error msg={errors.skills} />
                </div>

                <div>
                  <Label htmlFor="availability">Availability *</Label>
                  <Select
                    value={formData.availability}
                    onValueChange={handleSelectChange("availability")}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="When can you start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Immediate">Immediate</SelectItem>
                      <SelectItem value="2 weeks notice">
                        2 weeks notice
                      </SelectItem>
                      <SelectItem value="1 month notice">
                        1 month notice
                      </SelectItem>
                      <SelectItem value="2 months notice">
                        2 months notice
                      </SelectItem>
                      <SelectItem value="Negotiable">Negotiable</SelectItem>
                    </SelectContent>
                  </Select>
                  <Error msg={errors.availability} />
                </div>

                <div>
                  <Label htmlFor="motivation">Why ALVEO 4P? (optional)</Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={handleChange("motivation")}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full alveo-gradient text-white"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Current Openings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Current Openings
          </h2>
          <div className="space-y-6">
            {openPositions.map((job) => (
              <Card key={job.title} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>📍 {job.location}</span>
                        <span>🏢 {job.department}</span>
                        <span>💼 {job.type}</span>
                        <span>⏱️ {job.experience}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="hover:bg-primary hover:text-white transition-colors mt-4 lg:mt-0"
                      onClick={() => scrollToForm(job.title)}
                    >
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <h4 className="font-medium mb-2">Key Requirements:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {job.requirements.map((r, i) => (
                      <li key={i}>• {r}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Culture & CTA – unchanged */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Innovation-Driven",
                desc: "Creative thinking & breakthrough solutions",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaborative",
                desc: "Cross-functional teamwork",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence-Oriented",
                desc: "High standards & continuous improvement",
              },
            ].map((v, i) => (
              <Card key={i} className="shadow-soft">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted/30 rounded-lg p-8 text-center">
          <Briefcase className="w-12 h-12 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our team of passionate professionals working to transform
            respiratory health globally.
          </p>
          <Button size="lg" className="alveo-gradient text-white">
            Explore Opportunities
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Careers;
