import React from "react";
import { Users, Calendar, Award, Microscope, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PranErgoImg from "../../assets/images/PRAN-ERGO.png";

const ProgrammesEvents = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Programmes & <span className="alveo-logo-text">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Educational initiatives and collaborative events advancing
            respiratory health knowledge across communities and professionals.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'International Respiratory Health Symposium',
              type: 'Annual Conference',
              icon: <Users className="w-8 h-8" />,
              description: 'Global gathering of researchers, clinicians, and policymakers sharing latest advancements.',
              details: [
                '500+ international participants',
                '50+ research presentations',
                'Networking opportunities',
                'Policy roundtables'
              ],
              nextDate: 'March 15-17, 2024',
              location: 'New Delhi',
              registration: 'Open'
            },
            {
              title: 'Community Health Education Program',
              type: 'Ongoing Initiative',
              icon: <Calendar className="w-8 h-8" />,
              description: 'Grassroots education program raising awareness about respiratory health in communities.',
              details: [
                'Monthly community workshops',
                'School awareness programs',
                'Healthcare worker training',
                'Educational material distribution'
              ],
              nextDate: 'Every Month',
              location: 'Multiple States',
              registration: 'Ongoing'
            },
            {
              title: 'Research Excellence Fellowship',
              type: 'Scholarship Program',
              icon: <Award className="w-8 h-8" />,
              description: 'Supporting promising researchers with funding and mentorship opportunities.',
              details: [
                'Full funding for 2 years',
                'Mentorship from experts',
                'Conference participation',
                'Publication support'
              ],
              nextDate: 'Applications Open',
              location: 'Pan-India',
              registration: 'Apply Now'
            },
            {
              title: 'Digital Health Innovation Challenge',
              type: 'Competition',
              icon: <Microscope className="w-8 h-8" />,
              description: 'Annual competition encouraging innovative digital solutions for respiratory health.',
              details: [
                'Open to global participants',
                '₹10 Lakhs prize pool',
                'Mentorship opportunities',
                'Startup acceleration'
              ],
              nextDate: 'September 2024',
              location: 'Virtual & Delhi',
              registration: 'June 2024'
            },
            {
              title: 'Traditional Medicine Integration Workshop',
              type: 'Research Collaboration',
              icon: <Users className="w-8 h-8" />,
              description: 'Exploring synergies between traditional healing practices and modern medicine.',
              details: [
                'Traditional healers collaboration',
                'Research methodology training',
                'Documentation of practices',
                'Clinical trial design'
              ],
              nextDate: 'Quarterly',
              location: 'Various Rural Centers',
              registration: 'Invitation Only'
            },
            {
              title: 'Policy Advocacy Summit',
              type: 'Government Engagement',
              icon: <Calendar className="w-8 h-8" />,
              description: 'Engaging with policymakers to shape respiratory health policies and guidelines.',
              details: [
                'Government stakeholder meetings',
                'Policy recommendation reports',
                'Public health advocacy',
                'Healthcare system reform'
              ],
              nextDate: 'Bi-annual',
              location: 'New Delhi',
              registration: 'Stakeholders Only'
            }
          ].map((programme, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-primary">{programme.icon}</div>
                  <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                    {programme.type}
                  </span>
                </div>
                <CardTitle className="text-lg">{programme.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {programme.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {programme.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Date:</span>
                    <span className="text-muted-foreground">{programme.nextDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Location:</span>
                    <span className="text-muted-foreground">{programme.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Registration:</span>
                    <span className="text-primary font-medium">{programme.registration}</span>
                  </div>
                </div>

                <Button size="sm" variant="outline" className="w-full hover:bg-primary hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div> */}

        <div className="w-[100%] lg:w-[50%] m-auto mb-16">
          {[
            {
              title:
                "PRAN-ERGO – A comprehensive corporate wellness program integrating ergonomics, breath regulation, and pulmonary health",
              category: "Corporate Wellness",
              description:
                "PRAN-ERGO enhances employee well-being by improving posture, balanced body weight distribution, and guided breath work to reduce stress, improve concentration, and boost respiratory function, supporting productivity and reducing health risks in digital, desk-bound work environments.",
              image: PranErgoImg,
              status: "Ongoing",
              impact:
                "Helps employees feel energized, focused, and resilient during the workday",
              features: [
                "Integration of ergonomics and pulmonary health practices",
                "Proper posture and balanced body weight distribution",
                "Guided breath work to reduce stress and improve concentration",
                "Support for healthier, more productive workspaces",
              ],
              timeline: "2023-2025",
              funding: "₹2.5 Crores",
            },
          ].map((project, index) => (
            <Card
              key={index}
              className="shadow-soft hover:shadow-elegant transition-all group"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg bg-[#fefcf9]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  {/* <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                            {project.status}
                          </span> */}
                </div>
                <div className="absolute top-4 right-4">
                  {/* <span className="bg-white/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {project.category}
                          </span> */}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <span className="font-medium text-foreground">
                              Timeline:
                            </span>
                            <span className="text-muted-foreground ml-2">
                              {project.timeline}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-foreground">
                              Funding:
                            </span>
                            <span className="text-muted-foreground ml-2">
                              {project.funding}
                            </span>
                          </div>
                        </div> */}

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

                {/* <Button
                          variant="outline"
                          className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                        >
                          View Details
                        </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events Calendar */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Upcoming Events Calendar
          </h2>
          {/* <div className="grid gap-4">
            {[
              {
                date: "Jan 25, 2024",
                title: "Community Health Workshop - Mumbai",
                type: "Workshop",
                status: "Registration Open",
              },
              {
                date: "Feb 10-12, 2024",
                title: "Research Methodology Training",
                type: "Training",
                status: "Few Spots Left",
              },
              {
                date: "Mar 15-17, 2024",
                title: "International Respiratory Health Symposium",
                type: "Conference",
                status: "Early Bird Pricing",
              },
              {
                date: "Apr 5, 2024",
                title: "Digital Health Webinar Series",
                type: "Webinar",
                status: "Free Registration",
              },
              {
                date: "May 20-21, 2024",
                title: "Rural Health Innovation Challenge",
                type: "Competition",
                status: "Applications Open",
              },
            ].map((event, index) => (
              <Card key={index} className="shadow-soft">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 px-3 py-2 rounded-lg text-center">
                        <div className="text-sm font-bold text-primary">
                          {event.date.split(" ")[1]}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {event.date.split(" ")[0]}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {event.type}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {event.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <h3 className="text-xl font-semibold text-foreground mb-2 alveo-logo-text text-center">
            Events Coming Soon
          </h3>
        </section>

        {/* Past Events Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Past Events Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                number: "5,000+",
                label: "Total Participants",
                description: "Across all our events in 2023",
              },
              {
                number: "150+",
                label: "Research Papers",
                description: "Presented at our symposiums",
              },
              {
                number: "25+",
                label: "Countries",
                description: "International participation",
              },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold alveo-logo-text mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary/5 rounded-lg p-8 md:p-12 text-center">
          <Calendar className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Don't miss out on our upcoming programmes and events. Subscribe to
            our newsletter or follow us to stay updated on the latest
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="alveo-gradient text-white hover:opacity-90"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              onClick={() => window.scrollTo(0, 0)}
            >
              <Link to="/get-involved/partner">Event Partnerships</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgrammesEvents;
