"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";

function LogoMarkSmall() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg width="24" height="20" viewBox="0 0 26 22" fill="none" aria-hidden="true">
        <path d="M1 2L9 20" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        <path d="M9 20L17 2" stroke="#06b6d4" strokeWidth="3" strokeLinecap="round" />
        <path d="M19 2L24 20" stroke="#cbd5e1" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
      <span className="text-[17px] font-black tracking-[0.08em] uppercase text-neutral-900">
        VISUAL<span className="font-light text-neutral-500">ODYSSEY</span>
      </span>
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      <Header />

      <main
        id="main"
        className="w-full min-h-screen flex flex-col items-center pt-28 sm:pt-34 pb-20 px-4 sm:px-6"
        style={{ background: "var(--bg-subtle)" }}
      >
        {/* Top Control Bar with ONLY the Download PDF Button */}
        <div className="no-print w-full max-w-[850px] flex items-center justify-end mb-6">
          <a
            href="/resume.pdf"
            download="Anisur_Rahaman_Maruf_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0066b2] hover:bg-[#005299] active:scale-[0.98] text-white text-[14px] font-semibold shadow-md transition-all duration-150 cursor-pointer"
            title="Download 2-Page PDF"
          >
            <Download size={16} />
            <span>Download PDF</span>
          </a>
        </div>

        {/* ─── Document Sheets (Exact 2-page sheets with authentic PDF data) ─── */}
        <div className="resume-container w-full max-w-[850px] flex flex-col gap-10">
          {/* ────── PAGE 1 ────── */}
          <article className="resume-sheet w-full bg-white text-neutral-900 rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-neutral-200/90 p-8 sm:p-12 relative select-text flex flex-col justify-between">
            <div>
              {/* Header: Logo and Site Link */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-neutral-100">
                <LogoMarkSmall />
                <span className="text-[13px] font-medium text-neutral-500">
                  Visual Odyssey
                </span>
              </div>

              {/* Title and Intro */}
              <div className="mb-6">
                <h1 className="text-[24px] sm:text-[28px] font-bold tracking-tight text-neutral-900 leading-snug">
                  Anisur Rahaman Maruf{" "}
                  <span className="text-neutral-400 font-light">·</span>{" "}
                  <span className="text-neutral-600 font-normal">AI Website Builder, Web Engineer &amp; Visual Storyteller</span>
                </h1>
                <p className="mt-2.5 text-[14px] leading-relaxed text-neutral-600 max-w-[720px]">
                  Computer Science and Engineering undergraduate at Green University of Bangladesh. Founder &amp; Visual Storyteller at Design w Anis. Dedicated to modern web architecture, AI-powered web development, rapid digital creation, and medical deep learning computer vision research.
                </p>

                {/* Skill tag pills from authentic PDF */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "AI-Driven Web Development",
                    "Modern Web Architecture",
                    "Visual Storytelling",
                    "HTML5 / CSS3 / JS",
                    "React / Next.js",
                    "Tailwind CSS",
                    "PyTorch & Deep Learning",
                    "Computer Vision",
                    "Competitive Programming",
                    "Git & GitHub",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-[11.5px] font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience / Position of Responsibility Section */}
              <div className="mt-8">
                <p className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-400 mb-5">
                  Experience &amp; Leadership
                </p>

                <div className="flex flex-col gap-6">
                  {/* Job 1: Design w Anis */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm"
                      style={{ background: "linear-gradient(135deg, #FF0000 0%, #D90000 100%)" }}
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-neutral-900 leading-snug">
                        Design w Anis (YouTube Channel) <span className="font-normal text-neutral-400">·</span> Founder &amp; Content Strategist
                      </h3>
                      <p className="text-[12.5px] text-neutral-500 mt-0.5 mb-2">
                        YouTube &amp; Online Design Platform · Jan 2023 – Present
                      </p>
                      <ul className="list-disc list-outside ml-4 space-y-1.5 text-[13.5px] leading-relaxed text-neutral-600">
                        <li>
                          Managed and scaled an online educational platform focused on modern web design and visual tech by producing high-quality tutorial series and workflows.
                        </li>
                        <li>
                          Formulated comprehensive content strategies, analyzed channel audience metrics, and led community engagement to resolve complex frontend and modern web challenges.
                        </li>
                        <li>
                          Designed curriculum and structural roadmaps for modern web bootcamps, architectural patterns, and digital web assets.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Job 2: Freelance Web & IDP */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm"
                      style={{ background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)" }}
                    >
                      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[17px] font-bold text-neutral-900 leading-snug">
                        Freelance &amp; University IDP Project <span className="font-normal text-neutral-400">·</span> Lead Web Builder &amp; Frontend Developer
                      </h3>
                      <p className="text-[12.5px] text-neutral-500 mt-0.5 mb-2">
                        Dhaka, Bangladesh · Jan 2023 – Present
                      </p>
                      <ul className="list-disc list-outside ml-4 space-y-1.5 text-[13.5px] leading-relaxed text-neutral-600">
                        <li>
                          Led a remote team on freelance web projects, managing end-to-end client communications, technical scoping, responsive layouts, and final delivery.
                        </li>
                        <li>
                          Served as the lead web developer for the university Interdisciplinary Project (IDP), successfully delivering scalable web interfaces and high-performance functional code.
                        </li>
                        <li>
                          Collaborated with cross-functional team members to implement clean, responsive, and accessible user interfaces using modern frontend technologies.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Page 1 Bottom Indicator */}
            <div className="mt-8 pt-3 border-t border-neutral-100 flex justify-end">
              <span className="text-[11px] font-mono text-neutral-400">Page 1 / 2</span>
            </div>
          </article>

          {/* ────── PAGE 2 ────── */}
          <article className="resume-sheet w-full bg-white text-neutral-900 rounded-xl shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-neutral-200/90 p-8 sm:p-12 relative select-text flex flex-col justify-between">
            <div>
              {/* Header: Name and Contact info from authentic PDF */}
              <div className="flex flex-wrap items-center justify-between pb-4 mb-5 border-b border-neutral-100 gap-2">
                <span className="text-[14px] font-bold text-neutral-900">
                  Anisur Rahaman Maruf <span className="font-normal text-neutral-400">· Resume</span>
                </span>
                <span className="text-[12px] font-medium text-neutral-500">
                  Dhaka, Bangladesh · <a href="mailto:anisurrahman320101@gmail.com" className="hover:text-blue-600 transition-colors">anisurrahman320101@gmail.com</a> · <a href="https://www.linkedin.com/in/maruf320101/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">linkedin.com/in/maruf320101</a>
                </span>
              </div>

              {/* Research & Ongoing Work */}
              <div className="mb-5">
                <p className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-400 mb-3.5">
                  Research &amp; Leadership (continued)
                </p>

                <div className="flex flex-col gap-4">
                  {/* Research: Diabetic Foot Ulcers */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm"
                      style={{ background: "linear-gradient(135deg, #0284C7 0%, #0D9488 100%)" }}
                    >
                      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                        <circle cx="12" cy="12" r="4" />
                        <path d="m4.93 4.93 2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-neutral-900 leading-snug">
                        Early Detection of Diabetic Foot Ulcers Using Mobile Camera Images <span className="font-normal text-neutral-400">·</span> Research Student &amp; Lead Developer
                      </h3>
                      <p className="text-[12px] text-neutral-500 mt-0.5 mb-1.5">
                        Google Colab &amp; PyTorch · April 2026 – Present
                      </p>
                      <ul className="list-disc list-outside ml-4 space-y-1 text-[13px] leading-relaxed text-neutral-600">
                        <li>
                          Developed a lightweight, real-time computer vision system utilizing the EfficientNet-B0 architecture with Transfer Learning to enhance automated clinical screening efficiency.
                        </li>
                        <li>
                          Implemented advanced image preprocessing pipelines, applying Non-Local Means (NLM) denoising and CLAHE contrast enhancement to optimize clinical feature extraction.
                        </li>
                        <li>
                          Achieved 99.65% validation accuracy within 5 training epochs; currently conducting performance evaluation and authoring the final thesis for academic publication.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Job 4: School & College Event Management Committees */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm"
                      style={{ background: "linear-gradient(135deg, #059669 0%, #10B981 100%)" }}
                    >
                      <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-bold text-neutral-900 leading-snug">
                        School &amp; College Event Management Committees <span className="font-normal text-neutral-400">·</span> Chief Student Representative &amp; Team Coordinator
                      </h3>
                      <p className="text-[12px] text-neutral-500 mt-0.5 mb-1.5">
                        Institutional Event Committees · 2021 – 2023
                      </p>
                      <ul className="list-disc list-outside ml-4 space-y-1 text-[13px] leading-relaxed text-neutral-600">
                        <li>
                          Spearheaded a core cross-functional team of 10 members to successfully organize, coordinate, and execute all major institutional programs and technical hackathons.
                        </li>
                        <li>
                          Delegated tasks efficiently among team members, provided real-time troubleshooting support, and ensured operational excellence across all audio-visual and stage setups.
                        </li>
                        <li>
                          Acted as the primary liaison between the student body and administration, compiling and presenting formal execution reports directly to institutional heads.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects & Competitive Programming */}
              <div className="pt-4 border-t border-neutral-100 mb-5">
                <p className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-400 mb-3">
                  Key Technical Projects
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-[13px]">
                  <div>
                    <h4 className="font-bold text-neutral-900">Algorithmic Problem Solving</h4>
                    <p className="text-[11.5px] text-neutral-500 mb-1">LeetCode &amp; Codeforces · Mar 2024 – Jan 2025</p>
                    <p className="text-neutral-600 leading-relaxed text-[12.5px]">
                      Solved 20+ algorithmic challenges focusing on time/space complexity optimization, advanced Data Structures &amp; Algorithms (DSA), and real-time coding speed.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-neutral-900">Web Development &amp; Engineering</h4>
                    <p className="text-[11.5px] text-neutral-500 mb-1">Personal &amp; Academic · Jan 2025 – Mar 2026</p>
                    <p className="text-neutral-600 leading-relaxed text-[12.5px]">
                      Engineered responsive web applications with modern architecture, translating visual concepts into pixel-perfect production code with HTML5, CSS3, JavaScript, Next.js, and Git.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education from authentic PDF */}
              <div className="pt-4 border-t border-neutral-100 mb-4">
                <p className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-400 mb-3">
                  Education
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-[13.5px] font-bold text-neutral-900">Bachelor of CSE</p>
                    <p className="text-[12.5px] text-neutral-600">Green University of Bangladesh</p>
                    <p className="text-[11.5px] text-neutral-500">2023 – 2027</p>
                  </div>
                  <div>
                    <p className="text-[13.5px] font-bold text-neutral-900">HSC (Class XII)</p>
                    <p className="text-[12.5px] text-neutral-600">Gopaldi N. I. Babu College</p>
                    <p className="text-[11.5px] text-neutral-500">2021</p>
                  </div>
                  <div>
                    <p className="text-[13.5px] font-bold text-neutral-900">SSC (Class X)</p>
                    <p className="text-[12.5px] text-neutral-600">Araihazar Model High School</p>
                    <p className="text-[11.5px] text-neutral-500">2019</p>
                  </div>
                </div>
              </div>

              {/* Skills & Extra-Curricular Breakdown from authentic PDF */}
              <div className="pt-3 border-t border-neutral-100">
                <p className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-neutral-400 mb-2">
                  Skills &amp; Extra-Curricular
                </p>
                <div className="text-[12px] text-neutral-600 space-y-1.5 leading-relaxed">
                  <p>
                    <strong className="text-neutral-900">AI &amp; Web Building:</strong> AI-Powered Web Development, Modern Web Architecture, Visual Storytelling, Responsive Systems, Performance Optimization.
                  </p>
                  <p>
                    <strong className="text-neutral-900">Web &amp; Databases:</strong> HTML5, CSS3, JavaScript, MySQL, MySQL Workbench, React, Next.js, Tailwind CSS, Responsive Web.
                  </p>
                  <p>
                    <strong className="text-neutral-900">Tools, OS &amp; AI:</strong> Git, GitHub, VS Code, Linux (Ubuntu/WSL), Eclipse, IntelliJ IDEA, Python, PyTorch, Google Colab.
                  </p>
                  <p>
                    <strong className="text-neutral-900">Achievements &amp; Activities:</strong> National Hackathon Event Participant (Green University of Bangladesh, 2025), Data Science &amp; Predictive Analytics learning path, YouTube Content Creation.
                  </p>
                </div>
              </div>
            </div>

            {/* Page 2 Bottom Indicator */}
            <div className="mt-4 pt-2.5 border-t border-neutral-100 flex justify-end">
              <span className="text-[11px] font-mono text-neutral-400">Page 2 / 2</span>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
