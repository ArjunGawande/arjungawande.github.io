import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import expImg1 from "../../assets/experience/image.png";
import expImg2 from "../../assets/experience/image copy.png";
import expImg3 from "../../assets/experience/image copy 2.png";

const IMAGES = [expImg1, expImg2, expImg3];

interface ExperienceCarouselProps {
  images: string[];
}

function ExperienceCarousel({ images }: ExperienceCarouselProps) {
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
    <div className="relative h-full w-full group/carousel bg-[#030014]/40">
      {/* Slides */}
      {images.map((img, index) => {
        const isLogo = index === 0; // The first image (image.png) is the logo
        return (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Experience screenshot ${index + 1}`}
              className={`h-full w-full transition-all duration-500 ${
                isLogo 
                  ? "object-contain p-8 bg-indigo-950/20 backdrop-blur-sm" 
                  : "object-cover group-hover/carousel:scale-102"
              }`}
            />
            {/* Ambient overlay for non-logo slides */}
            {!isLogo && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            )}
          </div>
        );
      })}

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

export default function Experience() {
  return (
    <section id="experience" className="flex w-full max-w-6xl flex-col items-start gap-8 py-20">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 whitespace-nowrap">
        EXPERIENCE
      </h2>

      <div className="flex w-full flex-col gap-8">
        {/* EXPERIENCE 1: Building Inc 25 */}
        <div className="group flex w-full flex-col gap-6 overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-950/20 p-4 backdrop-blur-sm transition-colors hover:border-indigo-500/40 md:flex-row md:p-6">
          {/* Left Side: Carousel/Image Area */}
          <div className="relative h-72 md:h-80 w-full md:w-1/2 shrink-0 overflow-hidden rounded-xl bg-black/50 border border-white/5">
            <ExperienceCarousel images={IMAGES} />
          </div>

          {/* Right Side: Content Area */}
          <div className="flex w-full flex-col justify-center py-2 md:pr-4">
            {/* Role & Date Header */}
            <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white">Aionyix Solutions</h3>
                <p className="text-sm font-medium text-indigo-400">Full Stack and GenAI Intern</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300">
                Sept 2025 - Present
              </span>
            </div>

            <p className="mb-8 text-sm leading-relaxed text-slate-400">
              Spearheaded the development of the official event website, creating a seamless and responsive user experience for attendees and participants. Managed frontend architecture and deployment pipelines.
            </p>

            {/* Skills/Tech Used */}
            {/* <div className="mt-auto flex flex-wrap gap-2">
              <span className="rounded-md bg-indigo-900/30 px-2.5 py-1 text-xs font-medium text-indigo-300 border border-indigo-500/20">React</span>
              <span className="rounded-md bg-indigo-900/30 px-2.5 py-1 text-xs font-medium text-indigo-300 border border-indigo-500/20">TypeScript</span>
              <span className="rounded-md bg-indigo-900/30 px-2.5 py-1 text-xs font-medium text-indigo-300 border border-indigo-500/20">Vite</span>
              <span className="rounded-md bg-indigo-900/30 px-2.5 py-1 text-xs font-medium text-indigo-300 border border-indigo-500/20">Tailwind CSS</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

