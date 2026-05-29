interface TechStackProps {
  setShowConnectPage: (show: boolean) => void;
}

export default function TechStack({ setShowConnectPage }: TechStackProps) {
  return (
    <section id="tech-stack" className="flex w-full max-w-6xl gap-8 py-20 items-stretch flex-col lg:flex-row">
      {/* LEFT: TECH STACK */}
      <div className="flex-[3] flex flex-col gap-8 min-w-0">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 whitespace-nowrap">
        TECH STACK
      </h2>

        <div className="w-full overflow-hidden rounded-2xl border border-indigo-500/20 bg-indigo-950/20 py-12 backdrop-blur-sm h-full flex flex-col justify-center">
          <div className="relative flex w-full flex-col gap-6">
            {/* ROW 1 */}
            <div className="flex w-full overflow-hidden pause-on-hover">
              <div className="flex w-max animate-scroll">
                {[...Array(2)].map((_, i) => (
                  <div key={`r1-${i}`} className="flex gap-4 pr-4">
                    {["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Node.js"].map((tech) => (
                      <div key={tech} className="flex items-center justify-center whitespace-nowrap rounded-lg border border-white/5 bg-[#0a0f1c] px-6 py-3 text-sm font-medium text-slate-300 shadow-sm transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                        {tech}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 2 */}
            <div className="flex w-full overflow-hidden pause-on-hover">
              <div className="flex w-max animate-scroll-reverse">
                {[...Array(2)].map((_, i) => (
                  <div key={`r2-${i}`} className="flex gap-4 pr-4">
                    {["Prisma ORM", "Docker", "Linux (Ubuntu)", "MongoDB", "PostgreSQL", "Knex.js", "Git"].map((tech) => (
                      <div key={tech} className="flex items-center justify-center whitespace-nowrap rounded-lg border border-white/5 bg-[#0a0f1c] px-6 py-3 text-sm font-medium text-slate-300 shadow-sm transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                        {tech}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* ROW 3 */}
            <div className="flex w-full overflow-hidden pause-on-hover">
              <div className="flex w-max animate-scroll">
                {[...Array(2)].map((_, i) => (
                  <div key={`r3-${i}`} className="flex gap-4 pr-4">
                    {["LangChain", "Pinecone", "Generative AI", "Nmap", "Network Security", "Kali Linux", "REST APIs"].map((tech) => (
                      <div key={tech} className="flex items-center justify-center whitespace-nowrap rounded-lg border border-white/5 bg-[#0a0f1c] px-6 py-3 text-sm font-medium text-slate-300 shadow-sm transition-colors hover:border-cyan-500/50 hover:text-cyan-400">
                        {tech}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-indigo-950/80 to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-indigo-950/80 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* RIGHT: CONNECT CARD - MATCHED HEIGHT */}
      <div className="flex-[1] flex flex-col gap-8">
        {/* INVISIBLE TITLE: This acts as a spacer to perfectly align the top of this card with the top of the tech stack card! */}
        <h2 className="text-3xl font-bold opacity-0 hidden lg:block select-none">
          Spacer
        </h2>

        {/* Original elegant card layout with full-height stretch */}
        <div className="w-full h-full rounded-2xl border border-indigo-500/20 bg-indigo-950/30 p-8 backdrop-blur-md flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-white leading-snug">
              Tech enthusiast with a passion for development.
            </h3>
            <p className="mt-4 text-slate-400">
              Connect with me professionally
            </p>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <button
              onClick={() => setShowConnectPage(true)}
              className="flex items-center justify-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm font-medium text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition active:scale-95 duration-300 cursor-pointer"
            >
              Connect ✈
            </button>

            <a
              href="/resume.pdf"
              download="Arjun_Gawande_Resume.pdf"
              className="flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#0a0f1c] px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition duration-300 border-cyan-500/20 hover:border-cyan-400/50 cursor-pointer"
            >
              Resume ⬇
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
