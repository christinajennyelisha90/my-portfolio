import Typewriter from "./Typewriter";
import Image from "next/image";
import GenerateCV from "./components/GenerateCV";

type Skill = {
  name: string;
  level: string;
  progress: number;
};

const coreStack = [
  {
    name: "LARAVEL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "REACT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "NEXT.JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    whiteCircle: true, // ikon aslinya hitam, jadi diberi lingkaran putih seperti di gambar
  },
  {
    name: "PYTHON",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "NODE.JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "DOCKER",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
];

function SkillCard({
  title,
  icon,
  skills,
  color,
}: {
  title: string;
  icon: string;
  skills: Skill[];
  color: string;
}) {
  return (
    <div className={`overflow-hidden rounded-xl border ${color}`}>
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-6 py-5">
        <div className="flex items-center gap-3">
          <span className="text-lg">{icon}</span>
          <h3 className="font-mono text-xs font-semibold tracking-wide">
            {title}
          </h3>
        </div>
        <span className="font-mono text-[9px] text-gray-500">
          {skills.length} tools
        </span>
      </div>

      <div className="space-y-1 px-6 py-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="grid min-h-8 grid-cols-[1fr_85px_80px] items-center gap-3"
          >
            <span className="text-xs font-medium text-gray-300">
              {skill.name}
            </span>

            <span className="text-right font-mono text-[9px] text-gray-400">
              {skill.level}
            </span>

            <div className="h-[3px] overflow-hidden rounded-full bg-gray-800">
              <div
                className="h-full rounded-full bg-emerald-400"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
     
{/* NAVBAR */}
<nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#090d10]/95 backdrop-blur-xl">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
    <a
      href="#home"
      className="font-mono text-sm font-bold text-emerald-400"
    >
      &lt;Christina /&gt;
    </a>

    <div className="hidden items-center gap-8 font-mono text-[11px] md:flex">
      <a href="#about" className="text-gray-400 transition hover:text-emerald-400">
        <span className="text-emerald-400">./</span>profile
      </a>

      <a href="#projects" className="text-gray-400 transition hover:text-emerald-400">
        <span className="text-emerald-400">./</span>projects
      </a>

      <a href="#skills" className="text-gray-400 transition hover:text-emerald-400">
        <span className="text-emerald-400">./</span>tools
      </a>

      <a href="#contact" className="text-gray-400 transition hover:text-emerald-400">
        <span className="text-emerald-400">./</span>contact
      </a>

      <a
        href="#contact"
        className="border border-emerald-400 px-6 py-3 text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
      >
        hire_me()
      </a>
    </div>
  </div>
</nav>

    {/* Hero Section */}
<section
  id="home"
  className="flex min-h-screen items-center px-6 pt-20"
>
  <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
    <div>
      <p className="mb-4 text-sm font-medium tracking-[0.3em] text-blue-400">
        WELCOME TO MY PORTFOLIO
      </p>
            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
  Hi, I'm <span className="text-blue-400">Christina</span>
  <br />
  Simanjuntak
</h2>

<Typewriter />

<p className="mt-6 max-w-lg leading-8 text-gray-400">
</p>

           <div className="mt-8 flex flex-wrap gap-4">
  <a
    href="#projects"
    className="rounded-lg bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-600"
  >
    View My Projects
  </a>

  <a
    href="#contact"
    className="rounded-lg border border-white/30 px-6 py-3 font-semibold transition hover:bg-white hover:text-black"
  >
    Contact Me
  </a>

  <a
    href="/CV_Christina_Simanjuntak.pdf"
    download="CV_Christina_Simanjuntak.pdf"
    className="rounded-lg border border-emerald-400 px-6 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
  >
    Download CV
  </a>
</div>
</div> {/* Menutup kolom kiri */}

<div className="flex justify-center">
  <div className="relative flex h-[320px] w-[320px] items-center justify-center">

    {/* Neon Green Border */}
    <div className="absolute flex h-[230px] w-[230px] items-center justify-center rounded-full border-2 border-emerald-500">

      {/* Profile Image */}
      <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full border-2 border-[#192326]">
        <Image
          src="/profile.jpg"
          alt="Christina Profile"
          fill
          priority
          sizes="200px"
          className="object-cover object-center"
        />
      </div>

    </div>

    {/* Web */}
    <div className="absolute right-[-10px] top-[55px] rounded border border-cyan-500 bg-[#080e10] px-3 py-1 font-mono text-[10px] text-cyan-400">
      web
    </div>

    {/* Software */}
    <div className="absolute bottom-[100px] right-[-22px] rounded border border-purple-500 bg-[#080e10] px-3 py-1 font-mono text-[10px] text-purple-400">
      Software
    </div>

    
    {/* Backend */}
    <div className="absolute bottom-[70px] left-[-40px] rounded border border-rose-500 bg-[#080e10] px-3 py-1 font-mono text-[10px] text-rose-400">
      Backend 
    </div>

  </div> {/* Menutup profile-wrapper */}
  </div> {/* Menutup kolom kanan */}
  </div> {/* Menutup grid utama */}
</section>

      {/* Placeholder Sections */}
      
{/* ABOUT ME SECTION */}
<section id="about" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-blue-400">
      GET TO KNOW ME
    </p>

    <h2 className="text-3xl font-bold md:text-4xl">
      About <span className="text-blue-400">Me</span>
    </h2>

    <div className="mt-10 grid items-center gap-8 md:grid-cols-2">

      {/* LEFT: ABOUT DESCRIPTION */}
      <div>
        <h3 className="text-2xl font-semibold">
          Hello! I'm Christina Simanjuntak
        </h3>

        <p className="mt-5 leading-8 text-gray-400">
          A tech developer passionate about Software Engineering,
          Web Development, Engineer and Backend Developer —
          building scalable systems with clean architecture
          and great UX.
        </p>
      </div>

      {/* RIGHT: CORE STACK */}
      <div className="rounded-2xl border border-white/10 bg-[#101116] p-6">

        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-emerald-400">
            &lt;/&gt;
          </span>
          <h3 className="text-sm font-bold text-white">
            Core Stack
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {coreStack.map((tech) => (
            <div
              key={tech.name}
              className="flex h-[74px] flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-white/[0.05]"
            >
              {tech.whiteCircle ? (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-[3px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-full w-full"
                  />
                </div>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-7 w-7"
                />
              )}

              <span className="font-mono text-[10px] font-semibold tracking-wider text-gray-500">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  </div>
</section>

{/* SKILLS SECTION */}
<section id="skills" className="relative overflow-hidden border-t border-white/10 bg-[#090B0F] px-6 py-24">

  <div className="mx-auto max-w-6xl">

    {/* SECTION TITLE */}
    <div className="mb-14">
      <p className="mb-4 text-xs font-bold tracking-[0.3em] text-emerald-400">
        03. TOOLS & STACK
      </p>

      <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
        My <span className="text-emerald-400">arsenal</span>
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
        Technologies and tools I use across different areas
        of development, database management, and software design.
      </p>
    </div>

    {/* CORE STACK */}
<div className="mt-6 rounded-2xl border border-white/10 bg-[#101116] p-6">
  <div className="mb-5 flex items-center gap-3">
    <span className="font-mono text-sm font-bold text-emerald-400">
      &lt;/&gt;
    </span>
    <h3 className="text-sm font-bold text-white">Core Stack</h3>
  </div>

  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
    {coreStack.map((tech) => (
      <div
        key={tech.name}
        className="flex h-[84px] flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-white/[0.05]"
      >
        {tech.whiteCircle ? (
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white p-[3px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tech.icon} alt={tech.name} className="h-full w-full" />
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={tech.icon} alt={tech.name} className="h-6 w-6" />
        )}

        <span className="font-mono text-[10px] font-semibold tracking-wider text-gray-500">
          {tech.name}
        </span>
      </div>
    ))}
  </div>
</div>


    {/* SKILLS GRID */}
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

      {/* WEB DEVELOPMENT */}
      <div className="group overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-[#101116] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/70">

        <div className="flex items-center justify-between border-b border-cyan-500/20 bg-cyan-500/5 px-6 py-5">
          <h3 className="font-bold text-cyan-400">
            🌐 Web Development
          </h3>
          <span className="text-xs text-gray-500">04 tools</span>
        </div>

        <div className="space-y-5 p-6">
          {["HTML", "CSS", "PHP", "REST APIs"].map((skill) => (
            <div key={skill} className="flex items-center gap-3">
              <span className="text-sm text-cyan-400">◆</span>
              <span className="text-sm font-medium text-gray-200">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* DATABASE */}
      <div className="group overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/40 to-[#101116] transition duration-300 hover:-translate-y-1 hover:border-purple-400/70">

        <div className="flex items-center justify-between border-b border-purple-500/20 bg-purple-500/5 px-6 py-5">
          <h3 className="font-bold text-purple-400">
            🗄️ Database Management
          </h3>
          <span className="text-xs text-gray-500">02 tools</span>
        </div>

        <div className="space-y-5 p-6">
          {["MySQL", "phpMyAdmin"].map((skill) => (
            <div key={skill} className="flex items-center gap-3">
              <span className="text-sm text-purple-400">◆</span>
              <span className="text-sm font-medium text-gray-200">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* DEVELOPMENT TOOLS */}
      <div className="group overflow-hidden rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-950/40 to-[#101116] transition duration-300 hover:-translate-y-1 hover:border-rose-400/70">

        <div className="flex items-center justify-between border-b border-rose-500/20 bg-rose-500/5 px-6 py-5">
          <h3 className="font-bold text-rose-400">
            🛠️ Development Tools
          </h3>
          <span className="text-xs text-gray-500">03 tools</span>
        </div>

        <div className="space-y-5 p-6">
          {[
            "Visual Studio Code",
            "XAMPP Control Panel",
            "VMware Workstation Pro"
          ].map((skill) => (
            <div key={skill} className="flex items-center gap-3">
              <span className="text-sm text-rose-400">◆</span>
              <span className="text-sm font-medium text-gray-200">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* DESIGN & TESTING */}
      <div className="group overflow-hidden rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 to-[#101116] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/70">

        <div className="flex items-center justify-between border-b border-emerald-500/20 bg-emerald-500/5 px-6 py-5">
          <h3 className="font-bold text-emerald-400">
            🎨 Design & Testing
          </h3>
          <span className="text-xs text-gray-500">06 tools</span>
        </div>

        <div className="space-y-5 p-6">
          {[
            "Figma",
            "StarUML",
            "Bizagi Modeler",
            "draw.io",
            "Visual Paradigm",
            "Manual Testing / QA"
          ].map((skill) => (
            <div key={skill} className="flex items-center gap-3">
              <span className="text-sm text-emerald-400">◆</span>
              <span className="text-sm font-medium text-gray-200">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

{/* PROJECTS SECTION */}
      <section
        id="projects"
        className="border-t border-white/10 bg-[#090B0F] px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          {/* SECTION TITLE */}
          <div className="mb-14">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-blue-400">
              04. MY WORK
            </p>

            <h2 className="text-4xl font-extrabold md:text-5xl">
              Featured <span className="text-blue-400">Projects</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
              Here are some of my academic projects and practical experiences.
            </p>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">


      {/* PROJECT 1 - TEWUNEED */}
      <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#111118] transition duration-300 hover:-translate-y-2 hover:border-blue-400/50">

        <div className="flex h-44 items-center justify-center bg-gradient-to-br from-blue-900/60 to-indigo-950/40">
          <span className="text-6xl font-bold text-blue-400">WEB</span>
        </div>

        <div className="p-6">
          <span className="text-xs font-semibold text-blue-400">
            E-COMMERCE DEVELOPMENT
          </span>

          <h3 className="mt-3 text-xl font-bold">
            TEWUNEED Marketplace
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Platform marketplace berbasis web untuk mengelola katalog
            produk, kategori, keranjang belanja, checkout, pembayaran,
            akun pelanggan, dan dashboard administrator.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["PHP", "MySQL", "Bootstrap", "JavaScript"].map((item) => (
              <span key={item} className="rounded-md bg-blue-400/10 px-3 py-1.5 text-xs text-blue-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECT 2 - HYBRID ENERGY */}
      <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#111118] transition duration-300 hover:-translate-y-2 hover:border-purple-400/50">

        <div className="flex h-44 items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-950/40">
          <span className="text-6xl font-bold text-purple-400">IOT</span>
        </div>

        <div className="p-6">
          <span className="text-xs font-semibold text-purple-400">
            IOT & ENERGY MONITORING
          </span>

          <h3 className="mt-3 text-xl font-bold">
            Hybrid Energy Monitoring System
          </h3>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Sistem monitoring energi hybrid PLN dan PLTS menggunakan
            ESP32 untuk membaca data sensor, mengelola perpindahan
            sumber listrik, dan menampilkan informasi melalui dashboard.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["ESP32", "Arduino C++", "Node.js", "MySQL"].map((item) => (
              <span key={item} className="rounded-md bg-purple-400/10 px-3 py-1.5 text-xs text-purple-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

{/* PROJECT 3 - AIR PANAS SIPOHOLON */}
<div className="group overflow-hidden rounded-xl border border-white/10 bg-[#111118] transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50">

  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-emerald-900/50 to-slate-950/50">
    <span className="text-6xl font-bold text-emerald-400">WEB</span>
  </div>

  <div className="p-6">
    <span className="text-xs font-semibold text-emerald-400">
      TOURISM WEBSITE
    </span>

    <h3 className="mt-3 text-xl font-bold">
      Wisata Air Panas Sipoholon
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-400">
      Website informasi wisata Pemandian Air Panas Sipoholon
      yang menampilkan informasi objek wisata, deskripsi,
      galeri foto, dan ulasan pengunjung.
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {["HTML", "CSS", "JavaScript", "Bootstrap"].map((item) => (
        <span key={item} className="rounded-md bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
          {item}
        </span>
      ))}
    </div>
  </div>
</div>

{/* PROJECT 4 - PEST DETECTION SYSTEM */}
<div className="group overflow-hidden rounded-xl border border-white/10 bg-[#111118] transition duration-300 hover:-translate-y-2 hover:border-amber-400/50">

  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-amber-900/50 to-slate-950/50">
    <span className="text-6xl font-bold text-amber-400">IOT</span>
  </div>

  <div className="p-6">
    <span className="text-xs font-semibold text-amber-400">
      SMART AGRICULTURE
    </span>

    <h3 className="mt-3 text-xl font-bold">
      Early Pest Detection System
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-400">
      Prototipe sistem pendeteksi dini serangan hama
      menggunakan sensor getaran dan ultrasonik.
      Sistem memproses pembacaan sensor melalui Arduino
      dan memberikan peringatan menggunakan LED serta buzzer.
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {["Arduino Uno", "SW-420", "Ultrasonic Sensor", "LED", "Buzzer"].map((item) => (
        <span key={item} className="rounded-md bg-amber-400/10 px-3 py-1.5 text-xs text-amber-300">
          {item}
        </span>
      ))}
    </div>
  </div>
</div>

{/* PROJECT 5 - NODECHESS */}
<div className="group overflow-hidden rounded-xl border border-white/10 bg-[#111118] transition duration-300 hover:-translate-y-2 hover:border-purple-400/50">

  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-purple-900/50 to-indigo-950/40">
    <span className="text-6xl font-bold text-purple-400">WEB</span>
  </div>

  <div className="p-6">
    <span className="text-xs font-semibold text-purple-400">
      ONLINE GAME DEVELOPMENT
    </span>

    <h3 className="mt-3 text-xl font-bold">
      NodeChess – Online Multiplayer Chess
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-400">
      Aplikasi permainan catur online multiplayer berbasis
      sistem terdistribusi dengan fitur real-time gameplay,
      sinkronisasi permainan antar pemain, dan database recovery.
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {["Node.js", "Express", "Socket.io", "PostgreSQL", "Redis"].map((item) => (
        <span key={item} className="rounded-md bg-purple-400/10 px-3 py-1.5 text-xs text-purple-300">
          {item}
        </span>
      ))}
    </div>
  </div>
</div>

{/* PROJECT 6 - SECOND ELECTRONIC QUALITY MANAGEMENT */}
<div className="group overflow-hidden rounded-xl border border-white/10 bg-[#111118] transition duration-300 hover:-translate-y-2 hover:border-rose-400/50">

  <div className="flex h-44 items-center justify-center bg-gradient-to-br from-rose-900/50 to-slate-950/50">
    <span className="text-6xl font-bold text-rose-400">WEB</span>
  </div>

  <div className="p-6">
    <span className="text-xs font-semibold text-rose-400">
      E-COMMERCE DEVELOPMENT
    </span>

    <h3 className="mt-3 text-xl font-bold">
      Second Electronic Quality Management System
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-400">
      Sistem manajemen kualitas barang elektronik second
      berbasis web untuk mengelola katalog produk, kategori,
      grade kualitas, keranjang belanja, transaksi, dan
      dashboard administrator.
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {["Laravel", "PHP", "MySQL", "REST API", "JavaScript"].map((item) => (
        <span key={item} className="rounded-md bg-rose-400/10 px-3 py-1.5 text-xs text-rose-300">
          {item}
        </span>
      ))}
    </div>
  </div>
</div>

   {/* PENUTUP PROJECTS */}
      </div>
    </div>
  </section>

{/* CERTIFICATIONS SECTION */}
<section id="certifications" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <div className="mb-10">
      <p className="mb-3 text-xs font-bold tracking-[0.3em] text-blue-400">
        ACHIEVEMENTS
      </p>

      <h2 className="text-3xl font-bold md:text-4xl">
        My <span className="text-blue-400">Certifications</span>
      </h2>
    </div>

    <div className="grid gap-4 md:grid-cols-2">

      {/* CISCO */}
      <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#111118] p-5 transition hover:border-blue-400/50">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
          ✓
        </div>

        <div>
          <h3 className="text-sm font-bold text-white">
            Introduction to Cybersecurity
          </h3>
          <p className="mt-1 text-xs text-blue-400">
            Cisco Networking Academy Program
          </p>
          <p className="mt-2 text-[10px] text-gray-500">
            June 2026
          </p>
          <a
            href="https://drive.google.com/file/d/10MR4QFOhebIZ2El3EEt__o_xd-geZcm8/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-blue-400 hover:text-blue-300"
          >
            View Credential ↗
          </a>
        </div>
      </div>

      {/* FIT COMPETITION */}
      <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#111118] p-5 transition hover:border-blue-400/50">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
          ✓
        </div>

        <div>
          <h3 className="text-sm font-bold text-white">
            Web Development Contestant – FIT Competition 2026
          </h3>
          <p className="mt-1 text-xs text-blue-400">
            Universitas Kristen Satya Wacana
          </p>
          <p className="mt-2 text-[10px] text-gray-500">
            June 2026
          </p>
          <a
            href="https://drive.google.com/file/d/1q01f--ey3hLuf1nQmFY0EEKs1GdmGJXJ/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-blue-400 hover:text-blue-300"
          >
            View Credential ↗
          </a>
        </div>
      </div>

      {/* PEKAN IT */}
      <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-[#111118] p-5 transition hover:border-blue-400/50">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-400/10 text-blue-400">
          ✓
        </div>

        <div>
          <h3 className="text-sm font-bold text-white">
            National IT Competition PEKAN IT 2026
          </h3>
          <p className="mt-1 text-xs text-blue-400">
            Himpunan Mahasiswa Informatika Unsika (HIMTIKA)
          </p>
          <p className="mt-2 text-[10px] text-gray-500">
            June 2026
          </p>
          <p className="mt-1 text-[10px] text-gray-500">
            ID: 075/SPH/TPA-PEKAN.IT-HIMTIKA/VII/2026
          </p>
          <a
            href="https://drive.google.com/file/d/1_eEQ_8epQj1hN9Hl1Z2hcMn-tqAHWK6M/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-xs text-blue-400 hover:text-blue-300"
          >
            View Credential ↗
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

{/* CONTACT SECTION */}
<section id="contact" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    {/* HEADING */}
    <div className="mb-10 text-center">
      <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-blue-400">
        GET IN TOUCH
      </p>

      <h2 className="text-3xl font-bold md:text-4xl">
        Contact <span className="text-blue-400">Me</span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-400">
        I am always open to discussing new opportunities,
        collaboration, and interesting projects.
        Feel free to connect with me.
      </p>
    </div>

    {/* CONTACT CARDS */}
    <div className="mx-auto max-w-5xl space-y-3">

      {/* PHONE */}
      <a
        href="tel:+6285260632667"
        className="group flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/[0.07] px-6 py-4 transition-all duration-300 hover:border-emerald-400/60 hover:bg-emerald-500/[0.12]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10">
            <span className="text-xl text-emerald-400">☎</span>
          </div>

          <div>
            <p className="text-[9px] font-bold tracking-[2px] text-emerald-400">
              PHONE
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-300">
              085260632667
            </p>
          </div>
        </div>

        <span className="text-emerald-500 transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>

      {/* EMAIL */}
      <a
        href="mailto:christinasimanjuntak2019@gmail.com"
        className="group flex items-center justify-between rounded-xl border border-cyan-500/25 bg-cyan-500/[0.06] px-6 py-4 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/[0.12]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10">
            <span className="text-xl text-cyan-400">✉</span>
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-bold tracking-[2px] text-cyan-400">
              EMAIL
            </p>
            <p className="mt-1 break-all text-sm font-semibold text-gray-300">
              christinasimanjuntak2019@gmail.com
            </p>
          </div>
        </div>

        <span className="ml-3 text-cyan-500 transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>

      {/* LINKEDIN */}
      <a
        href="https://www.linkedin.com/in/christina-jenny-elisha-simanjuntak-b93528382/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-xl border border-purple-500/30 bg-purple-500/[0.07] px-6 py-4 transition-all duration-300 hover:border-purple-400/60 hover:bg-purple-500/[0.12]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10">
            <span className="text-xl font-bold text-purple-400">
              in
            </span>
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-bold tracking-[2px] text-purple-400">
              LINKEDIN
            </p>
            <p className="mt-1 break-all text-sm font-semibold text-gray-300">
              linkedin.com/in/christina-jenny-elisha-simanjuntak-b93528382/
            </p>
          </div>
        </div>

        <span className="ml-3 shrink-0 text-purple-500 transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>

      {/* GITHUB */}
      <a
        href="https://github.com/christinajennyelisha90"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-xl border border-gray-500/30 bg-gray-500/[0.07] px-6 py-4 transition-all duration-300 hover:border-gray-400/60 hover:bg-gray-500/[0.12]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-500/40 bg-gray-500/10">
            <span className="text-xl text-gray-300">⌘</span>
          </div>

          <div>
            <p className="text-[9px] font-bold tracking-[2px] text-gray-300">
              GITHUB
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-300">
              github.com/christinajennyelisha90
            </p>
          </div>
        </div>

        <span className="text-gray-400 transition-transform group-hover:translate-x-1">
          →
        </span>
      </a>

    </div>
  </div>
</section>

{/* FLOATING SPOTIFY PLAYER */}
<div className="fixed bottom-5 left-5 z-[100] w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-[#111118] shadow-2xl">
  <iframe
    src="https://open.spotify.com/embed/track/3xTRHJwjjTP9dBP9aWbCi1?utm_source=generator&theme=0"
    width="100%"
    height="80"
    style={{ border: 0 }}
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title="Ruang Sendiri - TULUS"
  />
</div>

{/* FOOTER */}
<footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-gray-500">
  © 2026 Christina Jenny Elisha Simanjuntak. All rights reserved.
</footer>

</main>
  );
}
