import { useState, useEffect } from "react";
import { FaLocationArrow, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import techfiesta1 from "../../assets/projects/techfiesta1.png";
import techfiesta2 from "../../assets/projects/techfiesta2.png";
import techfiesta3 from "../../assets/projects/techfiesta3.png";

import onlinejudge1 from "../../assets/projects/onlinejudge1.png";
import onlinejudge2 from "../../assets/projects/onlinejudge2.png";
import onlinejudge3 from "../../assets/projects/onlinejudge3.png";

import mcq1 from "../../assets/projects/mcq1.png";
import mcq2 from "../../assets/projects/mcq2.png";
import mcq3 from "../../assets/projects/mcq3.png";
import pasc1 from "../../assets/projects/pasc1.png";

/* 
  =========================================
  IMAGE CONFIGURATION: WHERE TO ADD IMAGES
  =========================================
  You can add or replace these images by:
  1. Importing local images from your assets folder:
     import myImage1 from "../../assets/workspace-dashboard.png";
  2. Placing images in your "public/" folder and referencing them by absolute path:
     "/images/workspace-dashboard.png"
  3. Using standard external URLs.
*/

// Carousel images for Project 1 (Student Workspace Hub)
const STUDENT_WORKSPACE_IMAGES = [
  techfiesta1,
  // techfiesta2,
  techfiesta3
];

// Carousel images for Project 2 (DoS Detection System)
const DOS_DETECTION_IMAGES = [
  onlinejudge1,
  onlinejudge2,
  onlinejudge3
];

// Carousel images for Project 3 (PASC Co-Curricular Activity Management Platform)
const PASC_CCA_IMAGES = [
  pasc1
];

// Carousel images for Project 4 (MCQ Quiz Platform)
const MCQ_QUIZ_IMAGES = [
  mcq1,
  mcq3,
  mcq2
];

interface ProjectCarouselProps {
  images: string[];
}

function ProjectCarousel({ images }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-full w-full group/carousel">
      {/* Slides */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={img}
            alt={`Project screenshot ${index + 1}`}
            className="h-full w-full object-cover"
          />
          {/* Ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/70 hover:bg-black/60 hover:text-white transition opacity-0 group-hover/carousel:opacity-100 duration-300 cursor-pointer"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={12} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/70 hover:bg-black/60 hover:text-white transition opacity-0 group-hover/carousel:opacity-100 duration-300 cursor-pointer"
        aria-label="Next slide"
      >
        <FaChevronRight size={12} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentIndex ? "w-4 bg-cyan-400" : "w-1.5 bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="flex w-full max-w-6xl flex-col items-start gap-8 py-20">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 whitespace-nowrap">
        PROJECTS
      </h2>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {/* PROJECT 1: Student Workspace Hub */}
        <div className="group flex w-full flex-col overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-950/20 p-5 backdrop-blur-sm transition-colors hover:border-indigo-500/40">
          {/* Top: Carousel/Image Area (Increased height) */}
          <div className="relative mb-5 h-72 w-full overflow-hidden rounded-xl bg-black/50 border border-white/5">
            <ProjectCarousel images={STUDENT_WORKSPACE_IMAGES} />
          </div>

          {/* Bottom: Content Area (Reduced margins and modern smaller font) */}
          <div className="flex flex-grow flex-col">
            <div className="text-center px-2">
              <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                PICT Techfiesta26 hackathon
              </h3>
              <p className="mb-4 text-[13px] leading-relaxed text-slate-400 text-left">
                Our project is a workspace tailored for students to balance classes, projects, and personal time. It’s a unified hub that automatically syncs with Google Calendar, organizes complex assignments using AI-powered task management, lets you interact with your study materials through RAG, and even sends instant schedule updates to your phone via Telegram.
              </p>
            </div>

            {/* Tech Stack & Link Row (Pushed to the absolute bottom using mt-auto) */}
            <div className="mt-auto flex items-center justify-between px-2">
              {/* Call to Action */}
              <a href="https://github.com/ArjunGawande/techfiesta-2026" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-sm font-medium text-indigo-300 transition-colors hover:text-white">
                Check project
                <FaLocationArrow size={14} className="-rotate-45 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 2: DoS Detection System */}
        <div className="group flex w-full flex-col overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-950/20 p-5 backdrop-blur-sm transition-colors hover:border-indigo-500/40">
          {/* Top: Carousel/Image Area (Increased height) */}
          <div className="relative mb-5 h-72 w-full overflow-hidden rounded-xl bg-black/50 border border-white/5">
            <ProjectCarousel images={DOS_DETECTION_IMAGES} />
          </div>

          {/* Bottom: Content Area (Reduced margins and modern smaller font) */}
          <div className="flex flex-grow flex-col">
            <div className="text-center px-2">
              <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                Online Judge System
              </h3>
              <p className="mb-4 text-[13px] leading-relaxed text-slate-400 text-left">
                An online judge system is a competitive programming platform where users can submit their code for various programming problems, and the system automatically tests their solution against a set of predefined test cases to determine its correctness and efficiency.
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between px-2">
              <a href="https://github.com/ArjunGawande/OJ" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-sm font-medium text-indigo-300 transition-colors hover:text-white">
                Check project
                <FaLocationArrow size={14} className="-rotate-45 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 3: PASC Co-Curricular Activity Management Platform */}
        <div className="group flex w-full flex-col overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-950/20 p-5 backdrop-blur-sm transition-colors hover:border-indigo-500/40">
          {/* Top: Carousel/Image Area (Increased height) */}
          <div className="relative mb-5 h-72 w-full overflow-hidden rounded-xl bg-black/50 border border-white/5">
            <ProjectCarousel images={PASC_CCA_IMAGES} />
          </div>

          {/* Bottom: Content Area */}
          <div className="flex flex-grow flex-col">
            <div className="text-center px-2">
              <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                PASC Co-Curricular Activity Management Platform
              </h3>
              <p className="mb-4 text-[13px] leading-relaxed text-slate-400 text-left">
                The CCA platform for the PICT ACM Student Chapter helps students track their credit hours and attendance across various chapter events. It includes authentication, a personalized dashboard, announcements, event discovery, RSVP functionality, and an achievements system that gives students a clear view of their participation and contributions.
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between px-2">
              <a href="https://pasc-cca-frontend-2025-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-sm font-medium text-indigo-300 transition-colors hover:text-white">
                Check project
                <FaLocationArrow size={14} className="-rotate-45 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 4: MCQ Quiz Platform */}
        <div className="group flex w-full flex-col overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-950/20 p-5 backdrop-blur-sm transition-colors hover:border-indigo-500/40">
          {/* Top: Carousel/Image Area (Increased height) */}
          <div className="relative mb-5 h-72 w-full overflow-hidden rounded-xl bg-black/50 border border-white/5">
            <ProjectCarousel images={MCQ_QUIZ_IMAGES} />
          </div>

          {/* Bottom: Content Area */}
          <div className="flex flex-grow flex-col">
            <div className="text-center px-2">
              <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                MCQ Quiz platform
              </h3>
              <div className="mb-4 text-[13px] leading-relaxed text-slate-400 text-left space-y-2">
                <p>
                  An interactive MCQ platform built for high-concurrency competitive tests, featuring:
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Unlimited MCQs</strong> – Keep solving as long as the clock is ticking!</li>
                  <li><strong>30-minute challenge</strong> – Test speed and accuracy under pressure.</li>
                  <li>
                    <strong>Lifelines for an Edge:</strong>
                    <ul className="list-[circle] pl-4 mt-0.5 space-y-0.5">
                      <li><strong>50-50</strong> – Eliminate two wrong answers.</li>
                      <li><strong>Gamble</strong> – Get double points if correct, but lose points if wrong.</li>
                      <li><strong>Double Dip</strong> – Take two shots for the right answer!</li>
                    </ul>
                  </li>
                  {/* <li><strong>Live Leaderboard</strong> – Track current rank in real-time, categorized into Junior & Senior sections.</li> */}
                </ul>
                {/* <p className="pt-1 text-slate-300 font-medium">
                  With 100+ participants, the platform handled traffic seamlessly, ensuring a smooth and engaging experience.
                </p> */}
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between px-2">
              <a 
                href="https://github.com/CREDENZ-25/Clash_Backend_Rd1"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 text-sm font-medium text-indigo-300 transition-colors hover:text-white"
              >
                Check project
                <FaLocationArrow size={14} className="-rotate-45 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
