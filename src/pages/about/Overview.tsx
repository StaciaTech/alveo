import React from "react";
import { Award, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Overview = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="alveo-logo-text">ALVEO 4P</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            In a world where breath is taken for granted—until it becomes a
            struggle—ALVEO 4P Charitable Trust stands committed to transforming
            the narrative of respiratory health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Our Foundation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              ALVEO 4P stands for a purpose beyond treatment—it is a space
              committed to scientific research, integrated care, and a deeper
              understanding of respiratory illnesses, with a goal to reduce the
              disability-adjusted life years (DALY). With over 76 lakh people
              suffering from chronic respiratory diseases every year, we believe
              that investing in science and taking a 360-degree view of
              healthcare is just as important as building more hospitals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In tune with the WHO’s One Health approach, the National Health
              Mission, and our Hon’ble Prime Minister’s call for an Aatma
              Nirbhar Bharat during this Amrit Kaal, we bring together advanced
              diagnostics with the wisdom of Ayurveda, yoga, balanced nutrition,
              and meaningful patient engagement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We apply artificial intelligence to individual health data to
              uncover patterns that are unique to each person. The aim is not
              just to treat—but to help people rejuvenate, regain, and reclaim
              their health, the way it was meant to be.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Medical research"
              className="rounded-lg shadow-elegant w-full"
            />
          </div>
        </div>

        {/* Recognition Section */}
        {/* <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Commitment to Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ALVEO 4P Charitable Trust is committed to the highest standards of
              scientific integrity, ethical research practices, and transparent
              governance. Our work is guided by principles of equity,
              innovation, and sustainable impact in respiratory health.
            </p>
          </div>
        </section> */}
        <section className="bg-muted/30 rounded-lg p-8 md:p-12">
          <div className="text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ADDRESSING GAPS IN CHRONIC RESPIRATORY DISEASE MANAGEMENT
            </h2>
            <div className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-left">
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>Recurrent Admissions and Productivity Loss:</strong>{" "}
                  Chronic respiratory diseases often result in recurrent
                  admissions, particularly debilitating for those in their
                  productive years. This not only adversely affects the
                  individual and their family but also results in significant
                  economic losses for the nation.
                </li>
                <li>
                  <strong>
                    Antibiotic Misuse and Antimicrobial Resistance:
                  </strong>{" "}
                  The indiscriminate use of antibiotics in treating respiratory
                  exacerbations contributes significantly to the rise of
                  antimicrobial resistance. This cycle of sequential antibiotic
                  escalation needs to be addressed to prevent the development of
                  dangerous drug-resistant strains.
                </li>
                <li>
                  <strong>
                    Advancements in Diagnostics and Precision Medicine:
                  </strong>{" "}
                  Current diagnostics primarily characterize phenotypically. To
                  move towards precision medicine, there is a need for
                  bio-profiling based on genetics, metabolomics, cell sorting,
                  and proteomics to enable targeted therapies and minimize
                  unwanted side effects.
                </li>
                <li>
                  <strong>Inclusive Healthcare and Cost Reduction:</strong> The
                  exorbitant cost of healthcare can only be mitigated through
                  inclusive health practices and the implementation of targeted
                  therapies. Active patient participation in the recovery
                  process, guided by medical professionals, is crucial for
                  effective and economical healthcare.
                </li>
                <li>
                  <strong>Integration of Therapies:</strong> A holistic approach
                  to recovery involves the integration of therapies from various
                  fields. Patients may benefit from a combination of
                  conventional medicine, physiotherapy, yoga, nutrition, and
                  Ayurveda.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Overview;
