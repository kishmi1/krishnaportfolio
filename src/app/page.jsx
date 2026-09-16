"use client";

import { TypeAnimation } from "react-type-animation";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
       {/* Hero Section */}
<section
  id="home"
  className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#090909] px-6 py-20 text-[#F5F5F0] md:px-10 lg:px-[8%]"
>
  {/* Decorative background */}
  <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#F47B20]/[0.06] blur-3xl" />

<div className="mx-auto grid min-h-[calc(100vh-160px)] max-w-[1500px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4">
    {/* Left */}
    <div className="relative z-10 max-w-4xl">

      <div className="mb-7 flex items-center gap-3">
        <span className="h-px w-10 bg-[#F47B20]" />

        <p className="text-sm font-semibold uppercase tracking-[3px] text-[#F47B20]">
          <TypeAnimation
            sequence={[
              "F",
              70,
              "Fr",
              70,
              "Fro",
              70,
              "Fron",
              70,
              "Front",
              70,
              "Fronte",
              70,
              "Fronten",
              70,
              "Frontend",
              70,
              "Frontend Developer",
              700,
            ]}
            speed={50}
            cursor
            repeat={0}
          />
        </p>
      </div>

   <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-1.5px] sm:text-5xl md:text-6xl lg:text-[68px]">

  <TypeAnimation
    sequence={[
      "Hi, I'm Krishna Gharti.",
      1500,
    ]}
    speed={150}
    cursor={false}
    repeat={0}
  />

  <br />

  <span className="text-[#F47B20]">
    Frontend Developer.
  </span>

</h1>
      <p className="mt-8 max-w-2xl text-base leading-8 text-[#9A9A9A] sm:text-lg md:text-xl">
        I create clean, responsive and meaningful digital
        experiences with modern web technologies and thoughtful
        design.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">

        <a
          href="#projects"
          className="group inline-flex items-center gap-3 bg-[#F47B20] px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:bg-[#FF9638]"
        >
          View My Work
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

          <a
    href="/Krishnacv.pdf"
    download
    className="inline-flex items-center justify-center gap-3 border border-[#2A2A2A] px-7 py-4 text-sm font-semibold text-[#F5F5F0] transition-all duration-300 hover:border-[#F47B20] hover:text-[#F47B20]"
  >
    Download CV
    <span>↓</span>
  </a>

      </div>

      <div className="mt-14 flex items-center gap-8 text-xs uppercase tracking-[2px] text-[#666]">
        <span>Web Development</span>
        <span className="h-1 w-1 rounded-full bg-[#F47B20]" />
        <span>UI / UX</span>
      </div>
    </div>

    {/* RIGHT VISUAL */}
    <div className="relative flex min-h-[620px] items-center justify-center lg:min-h-[700px] lg:justify-end">

      {/* Orange Glow */}
      <div className="pointer-events-none absolute right-[8%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#F47B20]/10 blur-[100px]" />

      {/* Orange Circle */}
      <div className="pointer-events-none absolute right-[8%] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#F47B20]/70" />

      {/* Small Orange Dot */}
      <div className="absolute right-[5%] top-[18%] h-3 w-3 rounded-full bg-[#F47B20]" />

      {/* Decorative Lines */}
      <div className="absolute right-[2%] top-[45%] flex flex-col gap-3">
        <span className="h-px w-8 rotate-[-50deg] bg-[#F47B20]" />
        <span className="h-px w-8 rotate-[-50deg] bg-[#F47B20]" />
        <span className="h-px w-8 rotate-[-50deg] bg-[#F47B20]" />
        <span className="h-px w-8 rotate-[-50deg] bg-[#F47B20]" />
      </div>

      {/* Main Image */}
      <div className="relative z-10 w-full max-w-[720px]">
        <img
          src="/portfolios.jpg"
          alt="Krishna Gharti"
          className="block h-auto w-full object-contain"
        />
      </div>
      </div>
</div>
</section>

        {/* Sections */}
{/* About Section */}
<section
  id="about"
  className="relative overflow-hidden bg-[#121212] px-6 py-28 text-[#F5F5F0] md:px-10 md:py-32 lg:px-[8%]"
>
  <div className="mx-auto max-w-7xl">

    {/* Section heading */}
    <div className="mb-20 flex items-end justify-between border-b border-[#2A2A2A] pb-8">
      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[3px] text-[#F47B20]">
          About Me
        </p>

        <h2 className="text-4xl font-bold tracking-[-2px] sm:text-5xl md:text-6xl">
          More than just code.
        </h2>
      </div>

      <span className="hidden text-6xl font-bold text-[#F47B20]/10 md:block">
        01
      </span>
    </div>

    <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">

      {/* Main introduction */}
      <div>
        <p className="max-w-3xl text-2xl font-medium leading-relaxed text-[#F5F5F0] md:text-3xl">
          I'm Krishna Gharti, currently completing my Bachelor of
          Information Management (BIM), with a strong interest in
          frontend development and creating clean, meaningful
          digital experiences.
        </p>

        <p className="mt-8 max-w-2xl text-base leading-8 text-[#999] sm:text-lg">
          My interest in web development started with a curiosity
          about how websites work and gradually grew into a passion
          for building interfaces that are simple, responsive and
          enjoyable to use.
        </p>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#999] sm:text-lg">
          I enjoy working with modern frontend technologies, gaining
          hands-on experience through my current internship, and
          continuously improving my technical and design skills
          through real-world projects.
        </p>

        <a
          href="#projects"
          className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-[#F47B20]"
        >
          Explore my work
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </a>
      </div>

      {/* Details */}
      <div className="border-t border-[#2A2A2A]">

        <div className="flex items-center justify-between border-b border-[#2A2A2A] py-7">
          <div>
            <p className="text-xs uppercase tracking-[2px] text-[#666]">
              Education
            </p>
            <p className="mt-2 text-base font-medium text-[#E5E5E0]">
              Bachelor of Information Management
            </p>
          </div>

          <span className="text-[#F47B20]">01</span>
        </div>

        <div className="flex items-center justify-between border-b border-[#2A2A2A] py-7">
          <div>
            <p className="text-xs uppercase tracking-[2px] text-[#666]">
              Current Focus
            </p>
            <p className="mt-2 text-base font-medium text-[#E5E5E0]">
              Frontend Development
            </p>
          </div>

          <span className="text-[#F47B20]">02</span>
        </div>

        <div className="flex items-center justify-between border-b border-[#2A2A2A] py-7">
          <div>
            <p className="text-xs uppercase tracking-[2px] text-[#666]">
              Experience
            </p>
            <p className="mt-2 text-base font-medium text-[#E5E5E0]">
              Frontend Development Internship
            </p>
          </div>

          <span className="text-[#F47B20]">03</span>
        </div>

        <div className="flex items-center justify-between border-b border-[#2A2A2A] py-7">
          <div>
            <p className="text-xs uppercase tracking-[2px] text-[#666]">
              Interests
            </p>
            <p className="mt-2 text-base font-medium text-[#E5E5E0]">
              Web Design · Development · Technology
            </p>
          </div>

          <span className="text-[#F47B20]">04</span>
        </div>

      </div>
    </div>
  </div>
</section>
{/* Skills Section */}
{/* Skills Section */}
<section
  id="skills"
  className="relative overflow-hidden bg-[#0D0D0D] px-6 py-24 text-[#F5F5F0] md:px-10 lg:px-[8%]"
>
  {/* Background Glow */}
  <div className="pointer-events-none absolute left-[-180px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#F47B20]/[0.05] blur-[100px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-16 max-w-2xl">

      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-[#F47B20]" />

        <span className="text-sm font-semibold uppercase tracking-[3px] text-[#F47B20]">
          My Skills
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Tools I use to
        <span className="text-[#F47B20]"> build ideas.</span>
      </h2>

      <p className="mt-6 text-base leading-8 text-[#8E8E8E] sm:text-lg">
        I enjoy working with modern web technologies and continuously
        improving my development and design skills through real projects.
      </p>

    </div>

    {/* Skills Grid */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {/* HTML */}
      <div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#F47B20]">01</span>
          <span className="text-sm text-[#666]">Frontend</span>
        </div>

        <h3 className="text-2xl font-semibold">HTML</h3>

        <p className="mt-3 text-sm leading-7 text-[#777]">
          Building clean and well-structured web pages.
        </p>
      </div>

      {/* CSS */}
      <div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#F47B20]">02</span>
          <span className="text-sm text-[#666]">Frontend</span>
        </div>

        <h3 className="text-2xl font-semibold">CSS</h3>

        <p className="mt-3 text-sm leading-7 text-[#777]">
          Creating responsive layouts and polished interfaces.
        </p>
      </div>

      {/* JavaScript */}
      <div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#F47B20]">03</span>
          <span className="text-sm text-[#666]">Frontend</span>
        </div>

        <h3 className="text-2xl font-semibold">JavaScript</h3>

        <p className="mt-3 text-sm leading-7 text-[#777]">
          Adding interactive and dynamic functionality to websites.
        </p>
      </div>

      {/* React */}
      <div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#F47B20]">04</span>
          <span className="text-sm text-[#666]">Framework</span>
        </div>

        <h3 className="text-2xl font-semibold">React</h3>

        <p className="mt-3 text-sm leading-7 text-[#777]">
          Developing reusable components and modern user interfaces.
        </p>
      </div>

      {/* Next.js */}
      <div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#F47B20]">05</span>
          <span className="text-sm text-[#666]">Framework</span>
        </div>

        <h3 className="text-2xl font-semibold">Next.js</h3>

        <p className="mt-3 text-sm leading-7 text-[#777]">
          Building full-stack and production-ready web applications.
        </p>
      </div>

      {/* Tailwind */}
      <div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#F47B20]">06</span>
          <span className="text-sm text-[#666]">Styling</span>
        </div>

        <h3 className="text-2xl font-semibold">Tailwind CSS</h3>

        <p className="mt-3 text-sm leading-7 text-[#777]">
          Designing clean and responsive interfaces efficiently.
        </p>
      </div>

      {/* PHP */}
      <div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#F47B20]">07</span>
          <span className="text-sm text-[#666]">Backend</span>
        </div>

        <h3 className="text-2xl font-semibold">PHP</h3>

        <p className="mt-3 text-sm leading-7 text-[#777]">
          Working with server-side logic and web applications.
        </p>
      </div>

      {/* PostgreSQL + Neon */}
<div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
  <div className="mb-6 flex items-center justify-between">
    <span className="text-2xl font-bold text-[#F47B20]">08</span>
    <span className="text-sm text-[#666]">Database</span>
  </div>

  <h3 className="text-2xl font-semibold">
    PostgreSQL + Neon
  </h3>

  <p className="mt-3 text-sm leading-7 text-[#777]">
    Working with PostgreSQL databases using Neon for cloud-based
    data storage and application management.
  </p>
</div>
{/* Prisma */}
<div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
  <div className="mb-6 flex items-center justify-between">
    <span className="text-2xl font-bold text-[#F47B20]">09</span>
    <span className="text-sm text-[#666]">ORM</span>
  </div>

  <h3 className="text-2xl font-semibold">
    Prisma
  </h3>

  <p className="mt-3 text-sm leading-7 text-[#777]">
    Working with Prisma ORM for database access and application data management.
  </p>
</div>

{/* Vercel */}
<div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
  <div className="mb-6 flex items-center justify-between">
    <span className="text-2xl font-bold text-[#F47B20]">10</span>
    <span className="text-sm text-[#666]">Deployment</span>
  </div>

  <h3 className="text-2xl font-semibold">
    Vercel
  </h3>

  <p className="mt-3 text-sm leading-7 text-[#777]">
    Deploying and hosting modern Next.js applications with Vercel.
  </p>
</div>


      {/* GitHub */}
      <div className="group border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-2xl font-bold text-[#F47B20]">11</span>
          <span className="text-sm text-[#666]">Tools</span>
        </div>

        <h3 className="text-2xl font-semibold">Git & GitHub</h3>

        <p className="mt-3 text-sm leading-7 text-[#777]">
          Managing code, version control and project collaboration.
        </p>
      </div>

    </div>
  </div>
</section>


{/* Projects Section */}
<section
  id="projects"
  className="relative overflow-hidden bg-[#090909] px-6 py-24 text-[#F5F5F0] md:px-10 lg:px-[8%]"
>
  {/* Background Glow */}
  <div className="pointer-events-none absolute right-[-180px] top-1/3 h-[450px] w-[450px] rounded-full bg-[#F47B20]/[0.05] blur-[110px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* Section Heading */}
    <div className="mb-16 max-w-3xl">

      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-[#F47B20]" />

        <span className="text-sm font-semibold uppercase tracking-[3px] text-[#F47B20]">
          Selected Work
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Projects I’ve
        <span className="text-[#F47B20]"> worked on.</span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-[#8E8E8E] sm:text-lg">
        A selection of projects where I applied my development skills,
        explored modern technologies, and solved real-world problems.
      </p>

    </div>

    {/* Projects */}
    <div className="grid gap-8 lg:grid-cols-2">

      {/* Project 01 — HydraNexa */}
      <article className="group overflow-hidden border border-[#252525] bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">

        {/* Project Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#151515]">

          <div className="absolute inset-0">
  <img
    src="/hydranexa-project.jpg"
    alt="HydraNexa Hydropower Project"
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
</div>

          <div className="absolute left-5 top-5 border border-[#F47B20]/40 bg-[#090909]/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-[#F47B20]">
             Web Application
          </div>

        </div>

        {/* Content */}
        <div className="p-7 md:p-8">

          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-xs uppercase tracking-[2px] text-[#666]">
                01 / Web Application
              </p>

              <h3 className="text-2xl font-bold sm:text-3xl">
                HydraNexa Hydropower
              </h3>
            </div>

            <span className="text-2xl text-[#F47B20]">
              ↗
            </span>
          </div>

          <p className="text-sm leading-7 text-[#888] sm:text-base">
            A professional hydropower company website and admin dashboard
            built to manage projects, news, company information and other
            dynamic website content.
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Next.js",
              "PostgreSQL",
              "Prisma",
              "Neon",
              "Tailwind CSS",
              "Vercel",
            ].map((tech) => (
              <span
                key={tech}
                className="border border-[#2A2A2A] px-3 py-1.5 text-xs text-[#999]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-8 flex gap-5">
            <a
              href="https://hydra-nexas-hydropower.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#F47B20] transition-colors hover:text-[#FF9638]"
            >
              Live Demo ↗
            </a>

            <a
              href="https://github.com/kishmi1/HydraNexas_Hydropower"
              className="text-sm font-semibold text-[#999] transition-colors hover:text-[#F5F5F0]"
            >
              GitHub ↗
            </a>
          </div>

        </div>
      </article>

    <article className="group overflow-hidden border border-[#252525] bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">

  {/* Project Image */}
  <div className="relative aspect-[16/10] overflow-hidden bg-[#151515]">

    <div className="absolute inset-0">
      <img
        src="/pizza-ordering-project.jpg"
        alt="Pizza Ordering System Project"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="absolute left-5 top-5 border border-[#2A2A2A] bg-[#090909]/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-[#999]">
      Web Application
    </div>

  </div>

  {/* Content */}
  <div className="p-7 md:p-8">

    <div className="mb-4 flex items-start justify-between gap-4">
      <div>

        <p className="mb-2 text-xs uppercase tracking-[2px] text-[#666]">
          02 / Ordering System
        </p>

        <h3 className="text-2xl font-bold sm:text-3xl">
          Pizza Ordering System
        </h3>

      </div>

      <span className="text-2xl text-[#F47B20]">
        ↗
      </span>

    </div>

    <p className="text-sm leading-7 text-[#888] sm:text-base">
      A web-based pizza ordering system designed to make food ordering
      simple and convenient, with menu browsing, cart management and
      order placement features.
    </p>

    {/* Technologies */}
    <div className="mt-6 flex flex-wrap gap-2">
      {[
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ].map((tech) => (
        <span
          key={tech}
          className="border border-[#2A2A2A] px-3 py-1.5 text-xs text-[#999]"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="mt-8 flex gap-5">

      <a
        href="https://drive.google.com/file/d/10YRVcwXj5oznPb58SzDqA9LAV99Id5Cu/view?usp=sharing"
        className="text-sm font-semibold text-[#F47B20] transition-colors hover:text-[#FF9638]"
      >
        Live Demo ↗
      </a>

      <a
        href="https://github.com/kishmi1/pizzaorderingphp"
        className="text-sm font-semibold text-[#999] transition-colors hover:text-[#F5F5F0]"
      >
        GitHub ↗
      </a>

    </div>

  </div>

</article>

<article className="group overflow-hidden border border-[#252525] bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">

  {/* Project Image */}
  <div className="relative aspect-[16/10] overflow-hidden bg-[#151515]">

    <div className="absolute inset-0">
      <img
        src="/donation-management-project.jpg"
        alt="Donation Management System Project"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="absolute left-5 top-5 border border-[#2A2A2A] bg-[#090909]/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-[#999]">
      Web Application
    </div>

  </div>

  {/* Content */}
  <div className="p-7 md:p-8">

    <div className="mb-4 flex items-start justify-between gap-4">

      <div>
        <p className="mb-2 text-xs uppercase tracking-[2px] text-[#666]">
          03 / Management System
        </p>

        <h3 className="text-2xl font-bold sm:text-3xl">
          Donation Management System
        </h3>
      </div>

      <span className="text-2xl text-[#F47B20]">
        ↗
      </span>

    </div>

    <p className="text-sm leading-7 text-[#888] sm:text-base">
      A web-based donation management platform designed to manage
      donors, donations, causes and donation history through an
      organized and user-friendly system.
    </p>

    {/* Technologies */}
    <div className="mt-6 flex flex-wrap gap-2">
      {[
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
      ].map((tech) => (
        <span
          key={tech}
          className="border border-[#2A2A2A] px-3 py-1.5 text-xs text-[#999]"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Links */}

<div className="mt-8 flex gap-5">
 <a
  href="/donation-demo.mp4"
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-semibold text-[#F47B20] transition-colors hover:text-[#FF9638]"
>
  Demo Video ↗
</a>


      <a
        href="https://github.com/kishmi1/organization"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-[#999] transition-colors hover:text-[#F5F5F0]"
      >
        GitHub ↗
      </a>

    </div>

  </div>

</article>
{/* Project 02 — Cherdung Cafe */}
<article className="group overflow-hidden border border-[#252525] bg-[#111111] transition-all duration-300 hover:-translate-y-1 hover:border-[#F47B20]/50">

  {/* Project Image */}
  <div className="relative aspect-[16/10] overflow-hidden bg-[#151515]">

    <div className="absolute inset-0">
      <img
        src="/cherdung-cafe-project.jpg"
        alt="Cherdung Cafe Website"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>

    <div className="absolute left-5 top-5 border border-[#F47B20]/40 bg-[#090909]/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[2px] text-[#F47B20]">
      Full-Stack Web Application
    </div>

  </div>

  {/* Content */}
  <div className="p-7 md:p-8">

    <div className="mb-4 flex items-start justify-between gap-4">
      <div>
        <p className="mb-2 text-xs uppercase tracking-[2px] text-[#666]">
          02 / Full-Stack Web Application
        </p>

        <h3 className="text-2xl font-bold sm:text-3xl">
          Cherdung Cafe
        </h3>
      </div>

      <span className="text-2xl text-[#F47B20]">
        ↗
      </span>
    </div>

    <p className="text-sm leading-7 text-[#888] sm:text-base">
      A full-stack cafe website with online food ordering, table
      reservations, menu management, offers, gallery, blog, enquiries
      and an admin dashboard for managing dynamic content.
    </p>

    {/* Technologies */}
    <div className="mt-6 flex flex-wrap gap-2">
      {[
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
        "Cloudinary",
        "Vercel",
      ].map((tech) => (
        <span
          key={tech}
          className="border border-[#2A2A2A] px-3 py-1.5 text-xs text-[#999]"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Links */}
    <div className="mt-8 flex gap-5">
      <a
        href="https://cherdungcafe.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-[#F47B20] transition-colors hover:text-[#FF9638]"
      >
        Live Demo ↗
      </a>

      <a
        href="https://github.com/kishmi1/cherdungcafe"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-semibold text-[#999] transition-colors hover:text-[#F5F5F0]"
      >
        GitHub ↗
      </a>
    </div>

  </div>
</article>


    </div>

  </div>
</section>

{/* Experience Section */}
<section
  id="experience"
  className="relative overflow-hidden bg-[#090909] px-6 py-24 text-[#F5F5F0] md:px-10 lg:px-[8%]"
>
  {/* Background Glow */}
  <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[400px] w-[400px] rounded-full bg-[#F47B20]/[0.04] blur-[110px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mb-16 max-w-3xl">

      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-[#F47B20]" />

        <span className="text-sm font-semibold uppercase tracking-[3px] text-[#F47B20]">
          Experience
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        My professional
        <span className="text-[#F47B20]"> journey.</span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-[#8E8E8E] sm:text-lg">
        Building practical experience through real projects, continuous
        learning and hands-on development.
      </p>

    </div>

    {/* Experience Card */}
    <div className="relative border-l border-[#2A2A2A] pl-8 md:pl-12">

      {/* Timeline Dot */}
      <div className="absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-[#F47B20] shadow-[0_0_20px_rgba(244,123,32,0.5)]" />

      <div className="group max-w-5xl border border-[#252525] bg-[#111111] p-7 transition-all duration-300 hover:border-[#F47B20]/50 md:p-10">

        {/* Top */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[2px] text-[#F47B20]">
              Frontend Development
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Frontend Developer Intern
            </h3>

            <p className="mt-2 text-base text-[#999]">
              Cherdung Infotech
            </p>
          </div>

          <span className="w-fit border border-[#2A2A2A] px-4 py-2 text-xs font-medium text-[#999]">
            July 2026 — Present
          </span>

        </div>

        {/* Description */}
        <p className="mt-8 max-w-4xl text-sm leading-8 text-[#888] sm:text-base">
          Working on modern web projects using React, Next.js and Tailwind CSS.
          Developing responsive user interfaces, implementing reusable
          components, integrating APIs, and improving frontend development and
          design skills through real-world projects.
        </p>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Tailwind CSS",
            "JavaScript",
            "API Integration",
            "Responsive Design",
          ].map((tech) => (
            <span
              key={tech}
              className="border border-[#2A2A2A] px-3 py-1.5 text-xs text-[#999] transition-colors group-hover:border-[#F47B20]/30"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </div>

  </div>
</section>
{/* Contact Section */}
<section
  id="contact"
  className="relative overflow-hidden bg-[#0D0D0D] px-6 py-24 text-[#F5F5F0] md:px-10 lg:px-[8%]"
>
  {/* Background Glow */}
  <div className="pointer-events-none absolute right-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-[#F47B20]/[0.05] blur-[110px]" />

  <div className="relative mx-auto max-w-7xl">

    {/* Heading */}
    <div className="max-w-3xl">

      <div className="mb-5 flex items-center gap-3">
        <span className="h-px w-10 bg-[#F47B20]" />

        <span className="text-sm font-semibold uppercase tracking-[3px] text-[#F47B20]">
          Get In Touch
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Let’s work
        <span className="text-[#F47B20]"> together.</span>
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-8 text-[#8E8E8E] sm:text-lg">
        Have a project idea, opportunity, or just want to connect?
        Feel free to reach out. I’d be happy to hear from you.
      </p>

    </div>

    {/* Contact Content */}
    <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.8fr]">

      {/* Contact Details */}
      <div className="border border-[#252525] bg-[#111111] p-7 md:p-10">

        <div className="space-y-8">

          {/* Email */}
          <a
            href="mailto:krishnagharti688@gmail.com"
            className="group flex items-start gap-5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#2A2A2A] text-[#F47B20] transition-colors group-hover:border-[#F47B20]">
              @
            </div>

            <div>
              <p className="text-xs uppercase tracking-[2px] text-[#666]">
                Email
              </p>

              <p className="mt-2 text-base text-[#DDD] transition-colors group-hover:text-[#F47B20]">
                krishnagharti688@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+9779849988348"
            className="group flex items-start gap-5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#2A2A2A] text-[#F47B20] transition-colors group-hover:border-[#F47B20]">
              ☎
            </div>

            <div>
              <p className="text-xs uppercase tracking-[2px] text-[#666]">
                Phone
              </p>

              <p className="mt-2 text-base text-[#DDD] transition-colors group-hover:text-[#F47B20]">
                +977 9740715599
              </p>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-start gap-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#2A2A2A] text-[#F47B20]">
              •
            </div>

            <div>
              <p className="text-xs uppercase tracking-[2px] text-[#666]">
                Location
              </p>

              <p className="mt-2 text-base text-[#DDD]">
                Nepaltar, Kathmandu, Nepal
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Social / Connect */}
      <div className="flex flex-col justify-between border border-[#252525] bg-[#111111] p-7 md:p-10">

        <div>
          <p className="text-xs uppercase tracking-[2px] text-[#666]">
            Connect
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            Find me online.
          </h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#777]">
            You can also find my work and professional profile through
            GitHub and LinkedIn.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">

          <a
            href="https://github.com/kishmi1"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2A2A2A] px-5 py-3 text-sm font-semibold text-[#DDD] transition-all hover:border-[#F47B20] hover:text-[#F47B20]"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/krishna-gharti-a13b82349"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#2A2A2A] px-5 py-3 text-sm font-semibold text-[#DDD] transition-all hover:border-[#F47B20] hover:text-[#F47B20]"
          >
            LinkedIn ↗
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

{/* Footer */}
<footer className="border-t border-[#252525] bg-[#090909] px-6 py-7 text-[#777] md:px-10 lg:px-[8%]">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm md:flex-row">

    <p>
      © {new Date().getFullYear()} Krishna Gharti. All rights reserved.
    </p>

    <p className="text-[#555]">
      Designed & built with care.
    </p>

  </div>

</footer>
      </main>
    </>
  );
}
