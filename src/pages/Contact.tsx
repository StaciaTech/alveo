import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";
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
  subject?: string;
};

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  /* ---------- validation ---------- */
  const validate = () => {
    const newErr: Errors = {};

    if (!formData.name.trim()) newErr.name = "Name is required.";
    if (!formData.email.trim()) {
      newErr.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErr.email = "Enter a valid email.";
    }
    if (formData.phone.trim() && !/^[\d\s\-+()]{7,20}$/.test(formData.phone)) {
      newErr.phone = "Enter a valid phone number.";
    }
    if (!formData.subject.trim()) newErr.subject = "Subject is required.";

    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
      setErrors({ ...errors, [field]: undefined });
    };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, category: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const fd = new FormData();
    fd.append("access_key", WEB3FORMS_KEY);
    fd.append("from_name", "ALVEO 4P");
    fd.append("from_email", "contact@alveo4p.org");
    fd.append("reply_to", formData.email);
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Message sent! We'll reply soon..." });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          category: "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error();
      }
    } catch {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const Error = ({ msg }: { msg?: string }) =>
    msg ? <p className="text-xs text-destructive mt-1">{msg}</p> : null;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ...same header... */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="alveo-logo-text">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We're here to answer your questions, discuss partnerships, and
            explore how we can work together to advance respiratory health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information - unchanged */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a researcher, community leader, or supporter,
                we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground">alveo4p@gmaill.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      +91 (0) 636-917-5265
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Send Us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={handleChange("name")}
                      />
                      <Error msg={errors.name} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange("email")}
                      />
                      <Error msg={errors.email} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number (optional)</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      placeholder="+91 98765 43210"
                    />
                    <Error msg={errors.phone} />
                  </div>

                  <div>
                    <Label htmlFor="category">Inquiry Category</Label>
                    <Select
                      onValueChange={handleSelectChange}
                      value={formData.category}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">
                          General Information
                        </SelectItem>
                        <SelectItem value="research">
                          Research Collaboration
                        </SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunity
                        </SelectItem>
                        <SelectItem value="volunteer">
                          Volunteer Program
                        </SelectItem>
                        <SelectItem value="donation">
                          Donation Inquiry
                        </SelectItem>
                        <SelectItem value="media">Media Request</SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange("subject")}
                      placeholder="Brief subject line"
                    />
                    <Error msg={errors.subject} />
                  </div>

                  <div>
                    <Label htmlFor="message">Message (optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange("message")}
                      placeholder="Any additional details..."
                      className="min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full alveo-gradient text-white hover:opacity-90"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency banner */}
        <section className="mt-16 bg-destructive/5 border border-destructive/20 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">
              Emergency Health Information
            </h2>
            <p className="text-muted-foreground mb-6">
              For medical emergencies contact local emergency services. For
              urgent respiratory concerns consult your doctor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div>
                <p className="font-semibold">National Emergency</p>
                <p className="text-lg font-bold text-destructive">112</p>
              </div>
              <div>
                <p className="font-semibold">Health Helpline</p>
                <p className="text-lg font-bold text-primary">104</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
