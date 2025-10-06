import React from "react";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Supraja from "../../assets/images/trustees/Dr Supraja K.webp";
import Pasupathy from "../../assets/images/trustees/Dr Pasupathy photo.webp";
import Palaniappam from "../../assets/images/trustees/Dr Palaniappan.webp";
import Sandilya from "../../assets/images/trustees/S SANDILYA.webp";
import Nataraajan from "../../assets/images/trustees/T Nataraajan.webp";
import Dhandapani from "../../assets/images/trustees/Dhandapani.webp";

const BoardOfTrustees = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Board of <span className="alveo-logo-text">Trustees</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our distinguished board brings together leading experts in medicine,
            research, and public health to guide our mission and ensure
            strategic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: "Dr. Supraja.K",
              role: "Managing Trustee",
              specialty: "Pulmonology & Respiratory Medicine",
              image: Supraja,
              bio: "Dr. Supraja K. is the Director of the Medway Institute of Pulmonology and a leading advocate of integrative respiratory care. With a strong focus on P4 medicine, she blends clinical excellence with research in lung biomechanics, lifestyle medicine, and pulmonary rehabilitation.",
            },
            {
              name: "Dr. V Pasupathy",
              role: "Trustee",
              specialty: "Public Health & Epidemiology",
              image: Pasupathy,
              bio: "Dr Pasupathy V is a scientist, social worker, and mentor for startups, serving as the Founder and Managing Trustee of Parikshan Charitable Trust and Parikshan Labs. Through his innovative “Vigyan Rath” initiative, he has brought hands-on science education to over 11.9 lakh rural students, igniting curiosity across Tamil Nadu’s government schools.",
            },
            {
              name: "Dr. T Palaniappan ",
              role: "Trustee",
              specialty: "Biomedical Engineering",
              image: Palaniappam,
              bio: "Dr. T. Palaniappan is the Chairman of Medway Hospitals and a pioneer in multi-specialty healthcare delivery. With a vision to make quality healthcare accessible, he has led Medway’s growth into a trusted hospital network across South India.",
            },
            {
              name: "Mr. S Sandilya ",
              role: "Trustee",
              specialty: "Healthcare Administration",
              image: Sandilya,
              bio: "Mr. S. Sandilya has held esteemed positions including Chairman of Lean Management Institute of India and has been a key leader in SIAM, CII, AIMA, and NSDC. Internationally, he has served on the boards of Lean Global Network, USA, and as President of the International Motorcycle Manufacturers Association, Geneva.",
            },
            {
              name: "Mr. T Nataraajan ",
              role: "Trustee",
              specialty: "Preventive Medicine",
              image: Nataraajan,
              bio: "T. Nataraajan is a seasoned corporate leader with over four decades of experience, including 22+ years with the Taj Group and currently Deputy Managing Director at GRT Hotels & Resorts. A Chartered Accountant, Company Secretary, and Law graduate, he brings a unique blend of financial, legal, and hospitality expertise.",
            },
            {
              name: "Mr. T G Dhandapani",
              role: "Trustee",
              specialty: "Community Health",
              image: Dhandapani,
              bio: "Mr. T.G. Dhandapani is the former Chief Information Officer of the TVS Group, where he led enterprise-wide digital transformation across one of India’s most respected industrial conglomerates. A Chartered Accountant by training, he served the group for 38 years in diverse leadership roles spanning Finance, Business Planning, Manufacturing Operations, and IT, blending strategic insight with operational excellence.",
            },
          ].map((member, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-elegant transition-shadow"
            >
              <CardContent className="p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                {/* <p className="text-sm text-muted-foreground mb-3">
                  {member.specialty}
                </p> */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Board Responsibilities */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Board Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Strategic Oversight",
                description:
                  "Providing strategic direction and long-term planning for the organization",
              },
              {
                title: "Financial Governance",
                description:
                  "Ensuring responsible financial management and transparent resource allocation",
              },
              {
                title: "Research Ethics",
                description:
                  "Maintaining highest ethical standards in all research and clinical activities",
              },
              {
                title: "Community Impact",
                description:
                  "Measuring and maximizing positive impact on communities we serve",
              },
            ].map((responsibility, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {responsibility.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {responsibility.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Board Meeting Schedule */}
        <section className="text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Governance Excellence
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Our Board of Trustees meets quarterly to review progress, set
            strategic priorities, and ensure accountability in all our
            initiatives. We maintain the highest standards of governance and
            transparency.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">4</div>
              <div className="text-muted-foreground">Quarterly Meetings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Transparency</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">
                Years Combined Experience
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BoardOfTrustees;
