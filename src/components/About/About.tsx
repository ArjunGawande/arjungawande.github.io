import CardSwap, { Card } from "../ui/CardSwap";

import about1 from "../../assets/about/about1.png";
import about2 from "../../assets/about/about2.png";
import about3 from "../../assets/about/about3.png";

export default function About() {
  return (
    <section id="about" className="flex w-full max-w-6xl flex-col items-start gap-12 py-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold tracking-tight">ABOUT ME</h2>
        <div className="h-1 w-12 rounded-full bg-cyan-400"></div>
      </div>

      {/* Elegant Introductory Copy */}
      {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-12 w-full text-slate-300">
        <div className="md:col-span-5 flex flex-col justify-center">
          <p className="text-xl font-medium text-white leading-relaxed">
            Building premium, scalable web experiences driven by <span className="text-cyan-400 font-semibold">first-principles thinking</span> and modern architectural patterns.
          </p>
        </div>
        <div className="md:col-span-7 flex flex-col gap-4 text-sm leading-relaxed text-slate-400">
          <p>
            I am a versatile Full-Stack Web Engineer, Cloud & Infrastructure Enthusiast, and Generative AI developer who thrives at the intersection of engineering excellence and creative problem-solving. My technical focus ranges from designing modern responsive frontends with micro-interactions, to orchestrating secure, scalable cloud architectures.
          </p>
          <p>
            I believe that great software is built with intention—secure by design, highly optimized for performance, and engineered to grow. I'm dedicated to continuous learning, active developer advocacy, and pushing the boundaries of what is possible with cloud computing and AI.
          </p>
        </div>
      </div> */}

      {/* Inner: THIS is the positioning context for card-swap-container */}
      <div className="w-full mt-6" style={{ position: "relative", height: "420px", overflow: "hidden" }}>
        <CardSwap
          width="100%"
          height={340}
          cardDistance={15}
          verticalDistance={15}
          delay={3500}
          skewAmount={0}
          easing="elastic"
        >
          <Card>
            <div className="flex h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c] shadow-2xl">
              <div className="flex flex-1 flex-col justify-center gap-3 p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">01 / ACHIEVEMENTS</span>
                <h3 className="text-xl font-bold text-white leading-snug">Web Protoplot Hackathon Winners</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Secured 3rd place at  Web Protoplot Hackathon organized by MKSSS's Cummins College of Engineering for Women, Pune. Our team designed and pitched a functional, highly responsive system solving modern web usability and infrastructure bottlenecks under intense time constraints.
                </p>
              </div>
              <div className="w-2/5 shrink-0 overflow-hidden border-l border-white/5 bg-gradient-to-br from-cyan-900/30 to-indigo-900/40">
                <img 
                  src={about1} 
                  alt="Hackathon Winner Badge" 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c] shadow-2xl">
              <div className="flex flex-1 flex-col justify-center gap-3 p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">02 / SPORTS</span>
                <h3 className="text-xl font-bold text-white leading-snug">State-Level Competitive Swimmer</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Outside of software engineering, I am passionate about athletics, health, and fitness. Having competed twice as a state-level swimmer.
                </p>
              </div>
              <div className="w-2/5 shrink-0 overflow-hidden border-l border-white/5 bg-gradient-to-br from-indigo-900/30 to-purple-900/40">
                <img 
                  src={about2} 
                  alt="Swimming Discipline" 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c] shadow-2xl">
              <div className="flex flex-1 flex-col justify-center gap-3 p-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">03 / COMMUNITY</span>
                <h3 className="text-xl font-bold text-white leading-snug">Technical Mentorship & Club SIGs</h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  Deeply committed to student developer community empowerment. I participate in Special Interest Group (SIG) technical training sessions for junior developers, mentoring them on modern full-stack web architectures, tools, and engineering frameworks.
                </p>
              </div>
              <div className="w-2/5 shrink-0 overflow-hidden border-l border-white/5 bg-gradient-to-br from-emerald-900/30 to-teal-900/40">
                <img 
                  src={about3} 
                  alt="Mentorship Session" 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </Card>
        </CardSwap>
      </div>
    </section>
  );
}
