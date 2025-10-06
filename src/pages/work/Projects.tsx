import React, { useState } from "react";
import { Microscope, Award, ChevronRight, PlayCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HerProjectImg from "../../assets/images/HerProjectImg.png";
import HerProjectVid from "../../assets/videos/herProject.mp4";

const Projects = () => {
  // State to track which project video is currently playing
  const [playingProjectIndex, setPlayingProjectIndex] = useState(null);

  const projects = [
    {
      title:
        "HER♀2 – How breath is important for the number of tasks to be completed by end of day",
      category: "Women Empowerment",
      description:
        "ALVEO 4P’s HER♀2 initiative targets working-caregiver women’s respiratory health, tackling delayed lung-condition diagnosis caused by low awareness and scarce early screening.",
      image: HerProjectImg,
      video: HerProjectVid,
      status: "Ongoing",
      impact: "Empowers women with tools and knowledge to breathe better",
      features: [
        "On-site health assessments",
        "Respiratory screenings",
        "Lifestyle guidance delivered by pulmonology, yoga, and Ayurveda experts",
        "Blend of modern medicine and traditional wellness",
      ],
      timeline: "2023-2025",
      funding: "₹2.5 Crores",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="alveo-logo-text">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Cutting-edge research initiatives transforming respiratory health
            outcomes through innovative science and technology.
          </p>
        </div>

        <div className="w-[100%] lg:w-[50%] m-auto mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-elegant transition-all group"
            >
              <div className="relative h-72 overflow-hidden rounded-t-lg bg-[#fef0c5]">
                {playingProjectIndex === index ? (
                  // If playing, render the video player
                  <video
                    src={project.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    onEnded={() => setPlayingProjectIndex(null)} // Optional: reverts to thumbnail when video ends
                  />
                ) : (
                  // Otherwise, show the thumbnail and play button
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300">
                      <button
                        onClick={() => setPlayingProjectIndex(index)}
                        className="text-white/80 hover:text-white transform transition-transform duration-300 group-hover:scale-110"
                        aria-label="Play video"
                      >
                        <PlayCircle className="w-20 h-20" />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  <span className="text-primary">HER♀2</span> – How breath is
                  important for the number of tasks to be completed by end of
                  day
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center space-x-2 text-sm text-primary font-medium">
                    <Award className="w-4 h-4" />
                    <span>{project.impact}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="w-3 h-3 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Research Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title:
                  "Integrated Respiratory Science & Disease Burden Reduction",
                description:
                  "Focus on reducing Disability Adjusted Life Years (DALYs) from respiratory diseases and gain a comprehensive understanding of respiratory pathophysiology while developing predictive and precision medicine within holistic and participative therapy models; AI-powered imaging and biomarker analysis for early disease detection.",
                icon: "🫁",
              },
              {
                title: "Advanced Diagnostics, AI & Biomarker Development",
                description:
                  "Implementation of advanced diagnostic tools and AI in clinical decision-making, identification and development of novel biomarkers, plus science profiling and state-of-the-art equipment for enhanced accuracy.",
                icon: "🧬",
              },
              {
                title: "Research, Innovation & Product Development",
                description:
                  "Sponsoring and conducting original research, development and patenting of research-based products and services, creation of IT-based tools for respiratory medicine, and import and deployment of specialized tools and technology.",
                icon: "🔬",
              },
              {
                title: "Public & Institutional Health Projects",
                description:
                  "Execution of public health projects at central, state, and local levels, micro-projects targeting community respiratory wellness, and infrastructure creation to support healthcare delivery and research.",
                icon: "🏥",
              },
              {
                title: "Education, Training & Knowledge Dissemination",
                description:
                  "Pulmonary education and professional training programs, seminars, conferences, and international symposiums, including educational collaborations and institutional partnerships.",
                icon: "🎓",
              },
            ].map((area, index) => (
              <Card
                key={index}
                className="shadow-soft hover:shadow-elegant transition-shadow text-center"
              >
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/5 rounded-lg p-8 md:p-12 text-center">
          <Microscope className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Research Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Collaborate with us on groundbreaking research that transforms
            respiratory health outcomes. Whether you're a researcher,
            institution, or organization, there are many ways to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="alveo-gradient text-white hover:opacity-90"
              asChild
            >
              <Link
                to="/get-involved/partner"
                onClick={() => window.scrollTo(0, 0)}
              >
                Research Partnerships
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                Contact Research Team
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
