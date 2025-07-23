import React from "react";
import { Award, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import AboutImg from "../../assets/svg/WhoPic.svg";
import DnaImg from "../../assets/images/dnaimg.avif";
import FamWithMask from "../../assets/images/famWithmask.jpg";
import Yoga from "../../assets/images/meditating.webp";
import DocWithThings from "../../assets/images/docWithThings.png";
import CurveLine from "../../assets/svg/curveLine.svg";

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
          <div className="relative h-full flex items-center">
            <img
              src={AboutImg}
              alt="Medical research"
              className=" w-[60%] m-auto"
            />
            {/* <div className="w-[80%] m-auto">
              <div className="flex w-full justify-between">
                <div className="flex flex-col">
                  <div className="text-[14px] font-bold">Preventive</div>
                  <p className="flex-1 text-[12px]">No entry for spilers</p>
                  <div className="text-end font-bold">P1</div>
                </div>
                <div>
                  <div className="text-end text-[14px] font-bold">
                    Personalized
                  </div>
                  <p className="text-end text-[12px]">
                    Am Unique
                    <br />
                    genetics,metabolics,proteomics,
                    <br />
                    cell biology, cell sorting
                  </p>
                  <div className="text-center font-bold">P2</div>
                </div>
              </div>
              <div className="w-[34%] relative rounded-full m-auto aspect-square border-[0.5rem] border-[#e8e8e8] grid place-items-center">
                <div>
                  <div className="text-center font-extrabold text-[1.25rem]">
                    4P
                  </div>
                  <div className="text-center font-bold">concept</div>
                </div>
                <div className="absolute w-[35%] aspect-square rounded-full bg-[#e8e8e8] left-1/2 -translate-x-1/2 -top-[18.5%] p-[0.3rem]">
                  <img
                    src={DnaImg}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute w-[60%] left-[95%] -translate-x-1/2 -top-[27%] p-[0.3rem]">
                  <img
                    src={CurveLine}
                    alt=""
                    className="w-full h-full scale-x-[-1] scale-y-[-1] rotate-12"
                  />
                </div>

                <div className="absolute w-[35%] aspect-square rounded-full bg-[#e8e8e8] top-1/2 -translate-y-1/2 -left-[18.5%] p-[0.3rem]">
                  <img
                    src={FamWithMask}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute w-[50%] -left-[25%] -translate-x-1/2 -top-[2%] p-[0.3rem]">
                  <img
                    src={CurveLine}
                    alt=""
                    className="w-full h-full scale-y-[-1] rotate-45"
                  />
                </div>

                <div className="absolute w-[35%] aspect-square rounded-full bg-[#e8e8e8] left-1/2 -translate-x-1/2 -bottom-[18.5%] p-[0.3rem]">
                  <img
                    src={Yoga}
                    alt=""
                    className="w-full h-full object-cover rounded-full "
                  />
                </div>

                <div className="absolute w-[35%] aspect-square rounded-full bg-[#e8e8e8] top-1/2 -translate-y-1/2 -right-[18.5%] p-[0.3rem]">
                  <img
                    src={DocWithThings}
                    alt=""
                    className="w-full h-full object-cover rounded-full object-right"
                  />
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex flex-col">
                  <div className="text-center font-bold">P3</div>
                  <div className="text-[14px] font-bold">Participative</div>
                  <p className="flex-1 text-[12px]">
                    Health is my wealth
                    <br />I will earn it by participating
                  </p>
                </div>
                <div>
                  <div className="text-center font-bold">P4</div>
                  <div className="text-end text-[14px] font-bold">
                    Predictive
                  </div>
                  <p className="text-end text-[12px]">
                    Visualise good health by
                    <br />
                    scientific prediction
                  </p>
                </div>
              </div>
            </div> */}
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
