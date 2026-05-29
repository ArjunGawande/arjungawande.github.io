import { useState, useEffect } from "react";
import ShapeGrid from "./components/ui/ShapeGrid";
import DecryptedText from "./components/ui/DecryptedText";
import TextType from "./components/ui/TextType";
import ConnectPage from "./components/ConnectPage/ConnectPage";
// Import the new icons from FontAwesome 6 (inside react-icons)
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import TechStack from "./components/TechStack/TechStack";
import heroImg from "./assets/hero/hero.png";


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showConnectPage, setShowConnectPage] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus("submitting");

    // Access Key placeholder - user can replace it with their key from web3forms.com
    const accessKey = "bfc242ec-1e10-4904-b522-04eb11ca59b1";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "experience", "tech-stack"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30">

      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0">
        <ShapeGrid
          borderColor="#2f00d8ff"
          hoverFillColor="#08004eff"
          speed={0.2}
        />
      </div>

      {/* LEFT VERTICAL NAVBAR (Full-Height Premium Sidebar) */}
      <nav
        className="fixed top-0 left-0 bottom-0 z-50 hidden h-screen w-20 flex-col items-center justify-between border-r border-white/10 bg-[#030014]/65 backdrop-blur-xl md:flex lg:w-24 shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
        style={{ paddingTop: 'clamp(1rem, 3vh, 2rem)', paddingBottom: 'clamp(1rem, 3vh, 2rem)' }}
      >
        {/* Navigation Items (Rotated vertical text) */}
        <div
          className="flex flex-col items-center"
          style={{ gap: 'clamp(0.75rem, 2.5vh, 2rem)', marginTop: 'clamp(0.5rem, 1.5vh, 1.5rem)' }}
        >
          {[
            { label: "ABOUT ME", href: "#about" },
            { label: "PROJECTS", href: "#projects" },
            { label: "EXPERIENCE", href: "#experience" },
            { label: "TECH STACK", href: "#tech-stack" }
          ].map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  if (showConnectPage) {
                    setShowConnectPage(false);
                  }
                }}
                className={`font-semibold uppercase transition-all duration-300 [writing-mode:vertical-rl] -rotate-180 hover:-translate-y-1 ${isActive
                  ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                  : "text-slate-400 hover:text-white"
                  }`}
                style={{ fontSize: 'clamp(11px, 1.7vh, 15px)', letterSpacing: 'clamp(0.15em, 0.3vh, 0.25em)' }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Social Icons Stack */}
        <div
          className="flex flex-col items-center"
          style={{ gap: 'clamp(0.125rem, 0.8vh, 0.75rem)' }}
        >
          {[
            {
              icon: <FaLinkedinIn />,
              href: "https://www.linkedin.com/in/arjun-gawande-a48b8528a/",
              color: "hover:text-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]"
            },
            {
              icon: <FaGithub />,
              href: "https://github.com/ArjunGawande",
              color: "hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            },
            {
              icon: <FaEnvelope />,
              href: "mailto:arjunsgawande123321@gmail.com",
              color: "hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            },
            {
              icon: <FaInstagram />,
              href: "https://www.instagram.com/arjungawande35/",
              color: "hover:text-[#E1306C] hover:shadow-[0_0_15px_rgba(225,48,108,0.4)]"
            }
          ].map((soc, idx) => (
            <a
              key={idx}
              href={soc.href}
              target={soc.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={soc.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className={`flex items-center justify-center rounded-lg text-slate-400 transition-all duration-300 hover:-translate-y-1 ${soc.color}`}
              style={{ height: 'clamp(1.25rem, 3.5vh, 2rem)', width: 'clamp(1.25rem, 3.5vh, 2rem)', fontSize: 'clamp(12px, 1.8vh, 18px)' }}
            >
              {soc.icon}
            </a>
          ))}
        </div>
      </nav>

      {/* MOBILE HEADER & NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-white/5 bg-[#030014]/80 px-6 backdrop-blur-md md:hidden">
        <a
          href="#home"
          onClick={() => {
            if (showConnectPage) setShowConnectPage(false);
          }}
          className="flex items-center gap-2"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
        </a>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 text-white transition-all hover:bg-white/5"
          aria-label="Toggle navigation menu"
        >
          <span className={`h-0.5 w-5 bg-white rounded-full transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`h-0.5 w-5 bg-white rounded-full transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-5 bg-white rounded-full transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#030014]/95 backdrop-blur-2xl transition-all duration-500 ease-out md:hidden ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-8 text-center">
          {[
            { label: "About me", href: "#about" },
            { label: "Projects", href: "#projects" },
            { label: "Experience", href: "#experience" },
            { label: "Tech Stack", href: "#tech-stack" }
          ].map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (showConnectPage) {
                    setShowConnectPage(false);
                  }
                }}
                className={`text-2xl font-bold uppercase tracking-widest transition-all duration-300 ${isActive
                  ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                  : "text-slate-400 hover:text-white"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="absolute bottom-10 flex gap-6">
          <a href="https://www.linkedin.com/in/arjun-gawande-a48b8528a/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400"><FaLinkedinIn size={20} /></a>
          <a href="https://github.com/ArjunGawande" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><FaGithub size={20} /></a>
          <a href="mailto:arjunsgawande123321@gmail.com" className="text-slate-400 hover:text-cyan-400"><FaEnvelope size={20} /></a>
          <a href="https://www.instagram.com/arjungawande35/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#E1306C]"><FaInstagram size={20} /></a>
        </div>
      </div>

      {/* CONTENT LAYER */}
      <main className="relative z-10 flex flex-col items-center px-6 md:pl-20 lg:pl-24">

        {showConnectPage ? (
          <ConnectPage
            formData={formData}
            setFormData={setFormData}
            formStatus={formStatus}
            setFormStatus={setFormStatus}
            handleFormSubmit={handleFormSubmit}
            onClose={() => setShowConnectPage(false)}
          />
        ) : (
          <>
            {/* HERO SECTION */}
            <section id="home" className="relative flex h-screen w-full max-w-6xl flex-col items-center justify-center pt-16 md:flex-row md:justify-between md:pt-0">

              {/* LEFT COLUMN: Text Only */}
              <div className="z-10 flex w-full flex-col items-start md:w-1/2">

                <span className="ml-2 text-sm uppercase tracking-[0.3em] text-slate-400">
                  Hello, I'm
                </span>

                <div className="mt-2 text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
                  <DecryptedText
                    text="ARJUN GAWANDE"
                    speed={170}
                    maxIterations={20}
                    sequential={true}
                    revealDirection="start"
                    useOriginalCharsOnly={false}
                    characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
                    className="revealed"
                    parentClassName="all-letters"
                    animateOn="view"
                  />
                </div>

                <div className="mt-4 text-lg font-medium text-cyan-400 md:text-xl">
                  <TextType
                    text={[
                      "Full-Stack Web Engineer",
                      "Cloud & Infrastructure Enthusiast",
                      "Generative AI & RAG Developer"
                    ]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    deletingSpeed={50}
                  />
                </div>
              </div>

              {/* RIGHT COLUMN: The Visual Anchor */}
              <div className="relative z-10 hidden w-full justify-end md:flex md:w-1/2">
                <div className="h-[450px] w-[350px] overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-950/20 backdrop-blur-sm shadow-[0_0_40px_rgba(79,70,229,0.1)] group">
                  <img
                    src={heroImg}
                    alt="Arjun Gawande"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* SCROLL INDICATOR */}
              <a
                href="#tech-stack"
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-slate-500 hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                aria-label="Scroll to Tech Stack section"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></svg>
              </a>

            </section>

            <TechStack setShowConnectPage={setShowConnectPage} />

            {/* PROJECTS SECTION */}
            <Projects />

            {/* EXPERIENCE SECTION */}
            <Experience />

            {/* ABOUT ME SECTION */}
            <About />
          </>
        )}
      </main>
    </div>
  );
}

export default App;