import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GalleryImg1 from "../assets/images/galleryImg1.webp";
import GalleryImg2 from "../assets/images/galleryImg2.webp";
import GalleryImg3 from "../assets/images/galleryImg3.webp";
import GalleryImg4 from "../assets/images/galleryImg4.webp";
import GalleryImg5 from "../assets/images/galleryImg5.webp";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "research", label: "Research Projects" },
    { id: "community", label: "Community Outreach" },
    // { id: "events", label: "Events" },
    // { id: "facilities", label: "Facilities" },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "HER – Health",
      category: "community",
      image: GalleryImg1,
      description:
        "HER – Health, emotion, Relation Program for Parikshan team ",
    },
    {
      id: 2,
      title: "Respiratory awareness skit to Children",
      category: "research",
      image: GalleryImg2,
      description:
        "Students from MCC who performed Respiratory awareness skit to Children at La chatelaine school",
    },
    {
      id: 3,
      title: "Internship at Medway Hospitals",
      category: "research",
      image: GalleryImg3,
      description:
        "Students from MCC – MCA who did 1 month internship at Medway Hospitals. ",
    },
    {
      id: 4,
      title: "Internship at Medway Hospitals",
      category: "research",
      image: GalleryImg4,
      description:
        "Student from MCC – Psychology who did 1 month internship at Medway Hospitals.",
    },
    {
      id: 5,
      title: "Internship at Medway Hospitals",
      category: "research",
      image: GalleryImg5,
      description:
        "Student from MCC – Psychology who did 1 month internship at Medway Hospitals.",
    },
    // {
    //   id: 3,
    //   title: "International Respiratory Symposium",
    //   category: "events",
    //   image:
    //     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Annual conference bringing together global experts",
    // },
    // {
    //   id: 4,
    //   title: "Research Center Facility",
    //   category: "facilities",
    //   image:
    //     "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Modern research infrastructure and laboratories",
    // },
    // {
    //   id: 5,
    //   title: "AI-Powered Lung Analysis",
    //   category: "research",
    //   image:
    //     "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Machine learning algorithms for disease detection",
    // },
    // {
    //   id: 6,
    //   title: "Mobile Health Unit",
    //   category: "community",
    //   image:
    //     "https://images.unsplash.com/photo-1584516201806-4e1b0621ad4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Bringing healthcare to remote communities",
    // },
    // {
    //   id: 7,
    //   title: "Research Excellence Awards",
    //   category: "events",
    //   image:
    //     "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description:
    //     "Recognizing outstanding contributions to respiratory health",
    // },
    // {
    //   id: 8,
    //   title: "Digital Health Platform",
    //   category: "research",
    //   image:
    //     "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Telemedicine and remote monitoring solutions",
    // },
    // {
    //   id: 9,
    //   title: "Traditional Medicine Workshop",
    //   category: "community",
    //   image:
    //     "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Integrating traditional healing with modern medicine",
    // },
    // {
    //   id: 10,
    //   title: "Youth Research Program",
    //   category: "events",
    //   image:
    //     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Training the next generation of researchers",
    // },
    // {
    //   id: 11,
    //   title: "Clean Air Laboratory",
    //   category: "facilities",
    //   image:
    //     "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Environmental factors research facility",
    // },
    // {
    //   id: 12,
    //   title: "Patient Care Innovation",
    //   category: "research",
    //   image:
    //     "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   description: "Developing personalized treatment protocols",
    // },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="alveo-logo-text">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our work in respiratory health research, community outreach,
            and innovation through these moments captured over our journey.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={
                selectedCategory === category.id
                  ? "alveo-gradient text-white"
                  : ""
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="shadow-soft hover:shadow-elegant transition-all group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-3">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {item.category.replace("-", " ")}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <section className="mt-20 bg-primary/5 rounded-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {[
              { number: "25+", label: "Patients Screened" },
              { number: "6+", label: "Micro projects" },
              { number: "2", label: "Research Publications" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold alveo-logo-text">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join us in our mission to transform respiratory health. Whether
            through volunteering, partnerships, or support, you can help us
            create more moments like these.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="alveo-gradient text-white hover:opacity-90"
            >
              Get Involved
            </Button>
            <Button size="lg" variant="outline">
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
