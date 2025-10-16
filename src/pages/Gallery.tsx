import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

// Image and Video Imports
import HerProjectImg from "../assets/images/HerProjectImg.png";
import HerProjectVid from "../assets/videos/herProject.mp4";
import GalleryImg1 from "../assets/images/galleryImg1.webp";
import GalleryImg2 from "../assets/images/galleryImg2.webp";
import GalleryImg3 from "../assets/images/galleryImg3.webp";
import GalleryImg4 from "../assets/images/galleryImg4.webp";
import GalleryImg5 from "../assets/images/galleryImg5.webp";

const Gallery = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [playingVideo, setPlayingVideo] = useState(null);

  useEffect(() => {
    if (location.state?.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  const categories = [
    { id: "all", label: "All" },
    { id: "hero2", label: "HERO2" },
    { id: "research", label: "Research Projects" },
    { id: "community", label: "Community Outreach" },
  ];

  const galleryItems = [
    {
      id: 6,
      type: "video",
      title: "HER O₂: Breathing Life into Balance",
      category: "hero2",
      image: HerProjectImg,
      video: HerProjectVid,
      description:
        "A special Teachers’ Day initiative by ALVEO 4P Charitable Trust in collaboration with the Inner Wheel Club of Chennai Sunshine, empowering educators to rediscover vitality through self-awareness, respiratory health, and holistic well-being. Held on September 6, 2025.",
    },
    {
      id: 1,
      type: "image",
      title: "HER – Health, Emotion, Relation Program",
      category: "community",
      image: GalleryImg1,
      description:
        "An interactive wellness initiative for the Parikshan team featuring assessments, lectures, games, and activities focused on mind and reproductive health.",
    },
    {
      id: 2,
      type: "image",
      title: "Respiratory Awareness Skit at La Chatelaine School",
      category: "research",
      image: GalleryImg2,
      description:
        "MCC social work students performed an engaging skit on lung health, followed by sessions from Medway’s pulmonologist, yoga expert, and respiratory therapist on the importance of breathing.",
    },
    {
      id: 3,
      type: "image",
      title: "Internship for Medical Social Work Students",
      category: "research",
      image: GalleryImg3,
      description:
        "MCC students used skits, folk songs, and dance as creative tools to spread awareness on lung health during their internship at Medway Hospitals.",
    },
    {
      id: 4,
      type: "image",
      title: "Internship in Data Analysis – MCC MCA Students",
      category: "research",
      image: GalleryImg4,
      description:
        "A month-long internship at Medway Hospitals where MCA students from MCC gained hands-on experience in data collection and healthcare analytics.",
    },
    {
      id: 5,
      type: "image",
      title: "Psychology Internship – MCC Student",
      category: "research",
      image: GalleryImg5,
      description:
        "A one-month internship focusing on mind and respiratory health, offering practical exposure to a psychology student from MCC at Medway Hospitals.",
    },
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
              className="shadow-soft hover:shadow-elegant transition-all group"
            >
              <div className="relative overflow-hidden rounded-t-lg h-64 bg-slate-200">
                {item.type === "video" ? (
                  // Video Item Logic
                  playingVideo === item.id ? (
                    <video
                      src={item.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      controls
                      onEnded={() => setPlayingVideo(null)}
                    />
                  ) : (
                    <>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                      {/* Hover Overlay Container */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        {/* Play Button */}
                        <button
                          onClick={() => setPlayingVideo(item.id)}
                          className="text-white/80 hover:text-white transform transition-transform duration-300 group-hover:scale-110 opacity-0 group-hover:opacity-100"
                          aria-label="Play video"
                        >
                          <PlayCircle className="w-16 h-16" />
                        </button>
                        {/* Description Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <p className="text-white text-sm line-clamp-3">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )
                ) : (
                  // Image Item Logic
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <div className="mt-3">
                  <span className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {item.category.replace("-", " ")}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Statistics and CTA sections would go here */}
      </div>
    </div>
  );
};

export default Gallery;
