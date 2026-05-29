import React from "react";
import DecryptedText from "../ui/DecryptedText";

interface ConnectPageProps {
  formData: { name: string; email: string; message: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string }>>;
  formStatus: "idle" | "submitting" | "success" | "error";
  setFormStatus: React.Dispatch<React.SetStateAction<"idle" | "submitting" | "success" | "error">>;
  handleFormSubmit: (e: React.FormEvent) => Promise<void>;
  onClose: () => void;
}

export default function ConnectPage({
  formData,
  setFormData,
  formStatus,
  setFormStatus,
  handleFormSubmit,
  onClose,
}: ConnectPageProps) {
  return (
    <section id="connect" className="relative flex min-h-screen w-full max-w-6xl flex-col items-center justify-center pt-24 pb-16 md:flex-row md:justify-between md:pt-0">
      {/* LEFT COLUMN: Text & Info */}
      <div className="z-10 flex w-full flex-col items-start md:w-1/2 md:pr-8 mb-12 md:mb-0">
        <span className="ml-2 text-sm uppercase tracking-[0.3em] text-slate-400 animate-pulse">
          GET IN TOUCH
        </span>
        
        <div className="mt-2 text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
          <DecryptedText
            text="SAY HELLO"
            speed={150}
            maxIterations={20}
            sequential={true}
            revealDirection="start"
            useOriginalCharsOnly={false}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            className="revealed text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400"
            parentClassName="all-letters"
            animateOn="view"
          />
        </div>

        <div className="mt-4 text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
          Let's collaborate on something awesome! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </div>

        {/* Sleek contact details */}
        {/* <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-[#0a0f1c] text-cyan-400 text-lg">
              ✉
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Email Me</p>
              <a href="mailto:your.email@example.com" className="text-xs text-white hover:text-cyan-400 transition">your.email@example.com</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-[#0a0f1c] text-indigo-400 text-lg">
              📍
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Location</p>
              <p className="text-xs text-white font-medium">Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-[#0a0f1c] text-emerald-400 text-lg">
              ⏱
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Response Time</p>
              <p className="text-xs text-white font-medium">Within 24 Hours</p>
            </div>
          </div>
        </div> */}

        <button
          onClick={onClose}
          className="mt-10 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition duration-300 cursor-pointer shadow-sm"
        >
          ← Back to Portfolio
        </button>
      </div>

      {/* RIGHT COLUMN: The Form */}
      <div className="relative z-10 flex w-full justify-end md:w-1/2">
        <div className="w-full max-w-[600] rounded-2xl border border-indigo-500/20 bg-indigo-950/30 p-8 backdrop-blur-md shadow-[0_0_50px_rgba(79,70,229,0.15)] flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold tracking-wider text-white uppercase">
                Send a Message 
              </h3>
            </div>

            {formStatus === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-3xl mb-4">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-white">Message Sent!</h4>
                <p className="mt-2 text-xs text-slate-400 max-w-[240px]">
                  Thanks for reaching out! I'll get back to you shortly.
                </p>
                <button
                  onClick={() => setFormStatus("idle")}
                  className="mt-6 text-xs text-cyan-400 hover:underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
                {/* Name Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    // placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={formStatus === "submitting"}
                    className="w-full bg-[#0a0f1c]/80 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400/55 focus:bg-indigo-950/20 focus:ring-1 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    // placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={formStatus === "submitting"}
                    className="w-full bg-[#0a0f1c]/80 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400/55 focus:bg-indigo-950/20 focus:ring-1 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    // placeholder="Let's build something amazing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={formStatus === "submitting"}
                    className="w-full h-24 resize-none bg-[#0a0f1c]/80 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-cyan-400/55 focus:bg-indigo-950/20 focus:ring-1 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-2">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className={`w-full flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-xs font-semibold transition-all duration-300 ${
                      formStatus === "submitting"
                        ? "border-indigo-500/20 bg-indigo-950/20 text-slate-400 cursor-not-allowed"
                        : "border-cyan-400/30 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20 active:scale-98 cursor-pointer shadow-[0_0_15px_rgba(34,211,238,0.05)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                    }`}
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit <span className="text-[10px]">✈</span>
                      </>
                    )}
                  </button>
                </div>

                {formStatus === "error" && (
                  <p className="text-[10px] text-rose-400 text-center animate-pulse">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
