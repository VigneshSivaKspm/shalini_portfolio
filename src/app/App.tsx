import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FlaskConical,
  Microscope,
  ShieldCheck,
  Atom,
  GraduationCap,
  CheckCircle2,
  Plane,
  BookOpen,
  Car,
  Linkedin,
  Mail,
  Phone,
  Menu,
  X,
  Download,
  ExternalLink,
  ChevronRight,
  Beaker,
  HeartPulse,
  ClipboardList,
  Activity,
  Sparkles,
  School,
  MapPin,
} from "lucide-react";

const NAV_LINKS = ["About", "Education", "Skills", "Projects", "Contact"];

const SKILLS = [
  { label: "Quality Assurance (QA) / Quality Control (QC)", color: "green" },
  { label: "Research & Development (R&D)", color: "blue" },
  { label: "Pharmaceutical Manufacturing", color: "green" },
  { label: "Packaging Operations", color: "blue" },
  { label: "UV Spectroscopy", color: "green" },
  { label: "Thin Layer Chromatography (TLC)", color: "blue" },
  { label: "Good Manufacturing Practices (GMP)", color: "green" },
  { label: "Regulatory Affairs", color: "blue" },
  { label: "Pharmacovigilance", color: "green" },
  { label: "Clinical Research", color: "blue" },
];

const CERTIFICATIONS = [
  "Clinical Research",
  "Pharmacovigilance",
  "Quality Assurance / Quality Control",
  "Regulatory Affairs",
];

const CAREER_CARDS = [
  { icon: FlaskConical, title: "Clinical Research & Development", desc: "Designing and executing trials that bring safe, effective drugs to patients." },
  { icon: ShieldCheck, title: "Quality Assurance / Quality Control", desc: "Ensuring pharmaceutical products meet rigorous safety and efficacy standards." },
  { icon: Activity, title: "Production", desc: "Overseeing large-scale pharmaceutical manufacturing with precision and compliance." },
  { icon: HeartPulse, title: "Pharmacovigilance", desc: "Monitoring drug safety signals and protecting patient outcomes post-approval." },
];

const HOBBIES = [
  { icon: Plane, label: "Travelling" },
  { icon: Atom, label: "Yoga" },
  { icon: BookOpen, label: "Reading" },
  { icon: Car, label: "Driving" },
];

const EDUCATION = [
  {
    degree: "M.Pharm",
    status: "Master of Pharmacy — Currently Pursuing",
    institute: "Swami Vivekhanandha College of Pharmacy",
    board: "The Tamil Nadu Dr. M.G.R. Medical University",
    year: "First Semester",
    score: "CGPA: 8.53",
    tag: "In Progress",
    icon: GraduationCap,
    tagColor: "#27ae60",
    bg: "#e8f5ee",
    iconColor: "#27ae60",
  },
  {
    degree: "B.Pharm",
    status: "Bachelor of Pharmacy",
    institute: "Swami Vivekhanandha College of Pharmacy",
    board: "The Tamil Nadu Dr. M.G.R. Medical University",
    year: "2025",
    score: "Completed",
    tag: "Completed",
    icon: GraduationCap,
    tagColor: "#2980b9",
    bg: "#e8f0f9",
    iconColor: "#2980b9",
  },
  {
    degree: "HSC",
    status: "Higher Secondary Certificate",
    institute: "Shree Gurukulam Higher Secondary School, Moolavaikkal",
    board: "State Board of Tamil Nadu",
    year: "2020",
    score: "57.3%",
    tag: "Completed",
    icon: School,
    tagColor: "#27ae60",
    bg: "#e8f5ee",
    iconColor: "#27ae60",
  },
  {
    degree: "SSLC",
    status: "Secondary School Leaving Certificate",
    institute: "Government Higher Secondary School, Kasipalayam",
    board: "State Board of Tamil Nadu",
    year: "2018",
    score: "81.6%",
    tag: "Completed",
    icon: School,
    tagColor: "#2980b9",
    bg: "#e8f0f9",
    iconColor: "#2980b9",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4 px-3.5 py-1.5 rounded-full"
      style={{
        color: "#1a6b3c",
        background: "linear-gradient(90deg, #e8f5ee, #e8f0f9)",
        border: "1px solid rgba(39,174,96,0.25)",
      }}
    >
      <Sparkles size={12} style={{ color: "#27ae60" }} />
      {children}
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-white text-[#1a2332] overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @keyframes blobFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.08); }
          66% { transform: translate(-25px, 25px) scale(0.95); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes softBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes shimmerLine {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(70px);
          animation: blobFloat 14s ease-in-out infinite;
          pointer-events: none;
        }
        .gradient-text {
          background: linear-gradient(90deg, #27ae60, #2980b9, #27ae60);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 6s ease-in-out infinite;
        }
        .glass {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.5);
        }
        .btn-glow {
          box-shadow: 0 8px 24px -8px rgba(39,174,96,0.55);
        }
        .btn-glow:hover {
          box-shadow: 0 12px 32px -6px rgba(39,174,96,0.7);
        }
        .nav-underline {
          position: relative;
        }
        .nav-underline::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #27ae60, #2980b9);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .nav-underline:hover::after {
          transform: scaleX(1);
        }
        .card-premium {
          position: relative;
          isolation: isolate;
        }
        .card-premium::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(39,174,96,0.35), rgba(41,128,185,0.35));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .card-premium:hover::before {
          opacity: 1;
        }
      `}</style>

      {/* ── NAV ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            SHALINI S<span style={{ color: "#27ae60" }}>.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                className="nav-underline text-sm font-medium text-[#5a6a7a] hover:text-[#1a2332] transition-colors"
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="btn-glow ml-4 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#27ae60", fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Me
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-[#1a2332]"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden glass border-t border-[rgba(26,35,50,0.08)] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l.toLowerCase())}
                className="text-left text-sm font-medium text-[#5a6a7a] hover:text-[#1a2332]"
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 px-5 py-2 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "#27ae60" }}
            >
              Contact Me
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-16 min-h-screen grid md:grid-cols-2 overflow-hidden">
        {/* Ambient blobs */}
        <div className="blob w-72 h-72 top-10 left-1/3" style={{ backgroundColor: "rgba(39,174,96,0.18)" }} />
        <div className="blob w-96 h-96 bottom-0 right-0" style={{ backgroundColor: "rgba(41,128,185,0.14)", animationDelay: "4s" }} />

        {/* Left — image + overlay */}
        <div
          className="relative overflow-hidden bg-[#eef4f9] flex items-center justify-center min-h-[55vw] md:min-h-0"
          data-aos="fade-right"
        >
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&h=1100&fit=crop&auto=format"
            alt="Pharmaceutical research environment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Tint overlay */}
          <div className="absolute inset-0 bg-[#1a2332]/30" />
          {/* Green accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#27ae60" }} />

          {/* Floating glass badge */}
          <div
            className="glass absolute bottom-6 left-6 right-6 md:left-8 md:right-auto md:bottom-8 rounded-2xl px-5 py-4 flex items-center gap-4 shadow-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(39,174,96,0.15)" }}
            >
              <GraduationCap size={22} style={{ color: "#27ae60" }} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#1a2332]">M.Pharm — CGPA 8.53</p>
              <p className="text-xs text-[#5a6a7a]">Swami Vivekhanandha College of Pharmacy</p>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div className="relative flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 md:py-0">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "#27ae60" }}
            data-aos="fade-up"
          >
            Master of Pharmacy (M.Pharm) Candidate
          </p>
          <h1
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none mb-6 tracking-tight"
            style={{ fontFamily: "'Montserrat', sans-serif", color: "#1a2332" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Shalini <span className="gradient-text">S.</span>
          </h1>
          <p
            className="text-base lg:text-lg text-[#5a6a7a] leading-relaxed max-w-md mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Passionate about Quality Assurance, Research & Development, and Pharmaceutical Innovation. Bridging scientific rigour with industry-ready precision.
          </p>
          <div className="flex flex-wrap gap-4" data-aos="fade-up" data-aos-delay="300">
            <button
              className="btn-glow inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: "#27ae60", fontFamily: "'Montserrat', sans-serif" }}
            >
              <Download size={16} />
              View Resume
            </button>
            <button
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-all hover:bg-[#eef4f9] hover:scale-105"
              style={{ borderColor: "#2980b9", color: "#2980b9", fontFamily: "'Montserrat', sans-serif" }}
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </button>
          </div>

          {/* Scroll cue */}
          <div className="hidden md:flex items-center gap-3 mt-16 text-xs text-[#5a6a7a]" data-aos="fade-in" data-aos-delay="500">
            <div className="w-6 h-10 rounded-full border-2 border-[#5a6a7a]/30 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full" style={{ backgroundColor: "#27ae60", animation: "softBounce 1.6s ease-in-out infinite" }} />
            </div>
            Scroll to explore
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <Eyebrow>Introduction</Eyebrow>
            <h2
              className="text-4xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Get to Know Me
            </h2>
            <p className="text-[#5a6a7a] leading-8 mb-6">
              Motivated and dedicated M.Pharm student with a strong academic foundation in pharmaceutical sciences. Combining theoretical knowledge with practical exposure to pharmaceutical manufacturing processes and a keen eye for Quality Assurance, Quality Control, and Research & Development.
            </p>
            <p className="text-[#5a6a7a] leading-8">
              My industrial training at Intermed and Kniss Laboratories deepened my understanding of real-world pharmaceutical workflows — from raw material sourcing through final packaging — and reinforced my commitment to quality at every stage.
            </p>
          </div>

          {/* Icon grid */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-left">
            {[
              { icon: Microscope, label: "Research", bg: "#e8f5ee", color: "#27ae60" },
              { icon: FlaskConical, label: "Lab Science", bg: "#e8f0f9", color: "#2980b9" },
              { icon: ShieldCheck, label: "Quality", bg: "#e8f5ee", color: "#27ae60" },
              { icon: Atom, label: "Molecular", bg: "#e8f0f9", color: "#2980b9" },
            ].map(({ icon: Icon, label, bg, color }, i) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-2xl p-8 gap-3 transition-all hover:shadow-xl hover:-translate-y-1.5 duration-300"
                style={{ backgroundColor: bg }}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <Icon size={36} style={{ color }} />
                <span className="text-sm font-semibold text-[#1a2332]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="py-24 px-6 lg:px-8 bg-[#f7fafd] relative overflow-hidden">
        <div className="blob w-80 h-80 -top-20 -right-20" style={{ backgroundColor: "rgba(41,128,185,0.10)" }} />
        <div className="max-w-4xl mx-auto relative">
          <div data-aos="fade-up">
            <Eyebrow>Education</Eyebrow>
            <h2
              className="text-4xl font-bold mb-16 tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Academic Journey
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5"
              style={{ background: "linear-gradient(to bottom, #27ae60, #2980b9, transparent)" }}
            />

            {EDUCATION.map((item, i) => (
              <div
                key={item.degree}
                className="relative pl-16 pb-12 last:pb-0"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div
                  className="absolute left-0 top-1 w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon size={22} style={{ color: item.iconColor }} />
                </div>
                <div className="card-premium bg-white rounded-xl p-6 shadow-sm border border-[rgba(26,35,50,0.06)] hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {item.degree}
                      </h3>
                      <p className="text-sm text-[#5a6a7a] mt-0.5">{item.status}</p>
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: item.bg,
                        color: item.tagColor,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#1a2332] flex items-center gap-1.5">
                    <MapPin size={13} style={{ color: item.iconColor }} />
                    {item.institute}
                  </p>
                  <p className="text-xs text-[#5a6a7a] mt-1 ml-[19px]">{item.board}</p>
                  <div className="flex items-center gap-2 mt-3 ml-[19px]">
                    <span className="text-xs font-semibold text-[#1a2332] bg-[#f7fafd] px-2.5 py-1 rounded-md border border-[rgba(26,35,50,0.06)]">
                      {item.year}
                    </span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: item.bg, color: item.iconColor }}
                    >
                      {item.score}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRAINING & CERTIFICATIONS ── */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up">
            <Eyebrow>Experience</Eyebrow>
            <h2
              className="text-4xl font-bold mb-12 tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Training & Credentials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Training cards */}
            {[
              {
                title: "Intermed Industrial Training",
                duration: "10–15 Days",
                points: [
                  "Pharmaceutical manufacturing line operations",
                  "Primary and secondary packaging protocols",
                  "Quality Assurance systems and SOPs",
                ],
                color: "#27ae60",
                bg: "#e8f5ee",
              },
              {
                title: "Kniss Laboratory Training",
                duration: "10–15 Days",
                points: [
                  "Process observation and analytical workflows",
                  "Laboratory best practices and safety",
                  "Quality Control testing methodologies",
                ],
                color: "#2980b9",
                bg: "#e8f0f9",
              },
            ].map((t, i) => (
              <div
                key={t.title}
                className="card-premium rounded-xl border border-[rgba(26,35,50,0.06)] p-7 bg-[#f7fafd] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                data-aos={i === 0 ? "fade-right" : "fade-left"}
              >
                <div
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
                  style={{ backgroundColor: t.bg, color: t.color }}
                >
                  {t.duration}
                </div>
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {t.title}
                </h3>
                <ul className="space-y-2.5">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-[#5a6a7a]">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: t.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Certifications */}
            <div
              className="md:col-span-2 rounded-xl border border-[rgba(26,35,50,0.06)] p-7 bg-[#f7fafd]"
              data-aos="fade-up"
            >
              <h3
                className="text-lg font-bold mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Certifications
              </h3>
              <div className="flex flex-wrap gap-3">
                {CERTIFICATIONS.map((c, i) => (
                  <div
                    key={c}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all hover:shadow-md hover:-translate-y-0.5 duration-200"
                    style={{ backgroundColor: "#e8f0f9", color: "#2980b9" }}
                    data-aos="zoom-in"
                    data-aos-delay={i * 80}
                  >
                    <ClipboardList size={15} />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 px-6 lg:px-8 bg-[#f7fafd]">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up">
            <Eyebrow>Expertise</Eyebrow>
            <h2
              className="text-4xl font-bold mb-12 tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Core Competencies
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {SKILLS.map((s, i) => (
              <span
                key={s.label}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-1 hover:scale-105 duration-200 cursor-default"
                style={
                  s.color === "green"
                    ? { backgroundColor: "#e8f5ee", color: "#1a6b3c", border: "1px solid #b7e0c8" }
                    : { backgroundColor: "#e8f0f9", color: "#1a5276", border: "1px solid #aed6f1" }
                }
                data-aos="zoom-in"
                data-aos-delay={i * 60}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up">
            <Eyebrow>Research</Eyebrow>
            <h2
              className="text-4xl font-bold mb-12 tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Featured Research Project
            </h2>
          </div>

          <div
            className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-xl border border-[rgba(26,35,50,0.06)] hover:shadow-2xl transition-shadow duration-300"
            data-aos="fade-up"
          >
            {/* Visual */}
            <div
              className="lg:col-span-2 min-h-64 flex flex-col items-center justify-center p-10 gap-6"
              style={{ background: "linear-gradient(135deg, #1a2332 0%, #2c3e50 100%)" }}
            >
              {/* UV Curve illustration */}
              <svg viewBox="0 0 200 120" className="w-full max-w-xs" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="120" fill="transparent" />
                {/* Axes */}
                <line x1="20" y1="100" x2="185" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                <line x1="20" y1="10" x2="20" y2="100" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                {/* UV curve green */}
                <path
                  d="M25,90 C50,88 65,60 80,35 C95,10 100,8 110,25 C120,42 130,80 155,85 C170,87 180,89 185,90"
                  fill="none"
                  stroke="#27ae60"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Peak dot */}
                <circle cx="110" cy="25" r="4" fill="#27ae60" />
                <line x1="110" y1="25" x2="110" y2="100" stroke="rgba(39,174,96,0.4)" strokeWidth="1" strokeDasharray="3,3" />
                {/* Labels */}
                <text x="100" y="115" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8">Wavelength (nm)</text>
                <text x="8" y="55" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" transform="rotate(-90,8,55)">Absorbance</text>
                <text x="115" y="22" fill="#27ae60" fontSize="7" fontWeight="bold">λmax</text>
              </svg>
              <p className="text-xs text-center text-white/40 font-mono">UV Absorption Spectrum — Cyclobenzaprine HCl</p>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 p-8 lg:p-12 bg-[#f7fafd] flex flex-col justify-center">
              <div
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 w-fit"
                style={{ backgroundColor: "#e8f5ee", color: "#27ae60" }}
              >
                <Beaker size={12} />
                M.Pharm Research
              </div>
              <h3
                className="text-xl font-bold leading-snug mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Optimized UV Spectroscopy and TLC Methods for Determination of Cyclobenzaprine Hydrochloride in Bulk and Capsule Dosage Form
              </h3>
              <p className="text-sm text-[#5a6a7a] leading-7 mb-6">
                Developed and validated accurate, cost-effective analytical methods using UV spectrophotometry and Thin-Layer Chromatography to quantify Cyclobenzaprine HCl in pharmaceutical bulk drug and capsule formulations. Emphasis on precision, linearity, and regulatory compliance per ICH guidelines.
              </p>
              <div className="flex flex-wrap gap-2">
                {["UV Spectroscopy", "TLC", "Analytical Validation", "ICH Guidelines"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded font-medium"
                    style={{ backgroundColor: "#eef4f9", color: "#2980b9" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREER INTERESTS ── */}
      <section className="py-24 px-6 lg:px-8 bg-[#f7fafd]">
        <div className="max-w-7xl mx-auto">
          <div data-aos="fade-up">
            <Eyebrow>Aspirations</Eyebrow>
            <h2
              className="text-4xl font-bold mb-12 tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Target Career Path
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CAREER_CARDS.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="card-premium bg-white rounded-xl p-7 border border-[rgba(26,35,50,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ backgroundColor: "#e8f0f9" }}
                >
                  <Icon size={22} style={{ color: "#2980b9" }} />
                </div>
                <h3
                  className="text-base font-bold mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-sm text-[#5a6a7a] leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOBBIES ── */}
      <section className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div data-aos="fade-up">
            <Eyebrow>Beyond the Lab</Eyebrow>
            <h2
              className="text-4xl font-bold mb-16 tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Personal Interests
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {HOBBIES.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="flex flex-col items-center gap-4 group"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center transition-all group-hover:shadow-lg group-hover:-translate-y-1.5 group-hover:scale-105 duration-300"
                  style={{ backgroundColor: "#e8f5ee" }}
                >
                  <Icon size={32} style={{ color: "#27ae60" }} />
                </div>
                <span className="text-sm font-semibold text-[#1a2332]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / FOOTER ── */}
      <footer id="contact" className="relative py-20 px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: "#1a2332" }}>
        <div className="blob w-96 h-96 -top-32 -left-32" style={{ backgroundColor: "rgba(39,174,96,0.12)" }} />
        <div className="blob w-80 h-80 -bottom-24 -right-24" style={{ backgroundColor: "rgba(41,128,185,0.12)" }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 mb-14">
            <div data-aos="fade-right">
              <h2
                className="text-3xl font-bold text-white mb-4 tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Let's Connect
              </h2>
              <p className="text-white/50 leading-7 max-w-sm">
                Open to opportunities in pharmaceutical research, quality assurance, and clinical roles. Reach out — I'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-5" data-aos="fade-left">
              {[
                { icon: Mail, text: "shalinisshalinis309@gmail.com", href: "mailto:shalinisshalinis309@gmail.com" },
                { icon: Phone, text: "+91 88386 43606", href: "tel:+918838643606" },
                { icon: Linkedin, text: "linkedin.com/in/shalini-s", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "rgba(39,174,96,0.15)" }}
                  >
                    <Icon size={18} style={{ color: "#27ae60" }} />
                  </div>
                  <span className="text-sm">{text}</span>
                  <ChevronRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          <div
            className="pt-8 flex flex-wrap items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span
              className="text-lg font-bold text-white tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              SHALINI S<span style={{ color: "#27ae60" }}>.</span>
            </span>
            <p className="text-xs text-white/30">© 2026 Shalini S. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
