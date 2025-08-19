// DonateForm.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
};

interface DonateFormProps {
  onSuccess?: () => void; // parent can close dialog
}

export default function DonateForm({ onSuccess }: DonateFormProps) {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    if (!formData.phone.trim()) {
      newErr.phone = "Phone number is required.";
    } else if (!/^[\d\s\-+()]{7,20}$/.test(formData.phone)) {
      newErr.phone = "Enter a valid phone number.";
    }

    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
      setErrors({ ...errors, [field]: undefined });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const fd = new FormData();
    fd.append("access_key", WEB3FORMS_KEY);
    fd.append("from_name", "ALVEO 4P Donation Form");
    fd.append("from_email", "donations@alveo4p.org");
    fd.append("reply_to", formData.email);
    fd.append("subject", `New Donation Inquiry from ${formData.name}`);

    // Add form data
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));

    // Add additional context
    fd.append("form_type", "donation_inquiry");
    fd.append("timestamp", new Date().toISOString());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();

      if (data.success) {
        toast({
          title: "Thank you for your interest!",
          description: "We'll contact you with donation details soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setErrors({});
        onSuccess?.();
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
    <div className="w-full">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold mb-2">
          Support Our <span className="alveo-logo-text">Mission</span>
        </h2>
        <p className="text-muted-foreground">
          Help us advance respiratory health research and community outreach.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <Label htmlFor="donor-name">Full Name *</Label>
          <Input
            id="donor-name"
            value={formData.name}
            onChange={handleChange("name")}
            placeholder="Enter your full name"
          />
          <Error msg={errors.name} />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="donor-email">Email Address *</Label>
          <Input
            id="donor-email"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            placeholder="your.email@example.com"
          />
          <Error msg={errors.email} />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="donor-phone">Phone Number *</Label>
          <Input
            id="donor-phone"
            value={formData.phone}
            onChange={handleChange("phone")}
            placeholder="+91 98765 43210"
          />
          <Error msg={errors.phone} />
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="donor-message">Message (optional)</Label>
          <Textarea
            id="donor-message"
            value={formData.message}
            onChange={handleChange("message")}
            placeholder="Any specific areas you'd like to support or questions about donations..."
            className="min-h-[100px]"
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full alveo-gradient text-white hover:opacity-90"
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Heart className="w-4 h-4 mr-2" />
              Send Donation Inquiry
            </>
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          We'll contact you with secure donation methods.
        </p>
      </form>

      {/* Donation Info */}
      {/* <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="text-center">
          <h3 className="font-semibold mb-2">Multiple Ways to Contribute</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Your donation helps fund research, community programs, and awareness
            initiatives.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium">Tax Benefits</p>
              <p className="text-muted-foreground">80G receipts available</p>
            </div>
            <div>
              <p className="font-medium">Secure Payment</p>
              <p className="text-muted-foreground">
                Multiple options available
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
