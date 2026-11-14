"use client";

import { jsPDF } from "jspdf";

export default function GenerateCV() {
  const handleGenerateCV = async () => {
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = 210;
    const margin = 17;
    const contentWidth = pageWidth - margin * 2;
    let y = 17;

    const black = [30, 30, 30] as [number, number, number];
    const gray = [90, 90, 90] as [number, number, number];

    // Load profile photo from public folder
    const loadPhoto = async (): Promise<string | null> => {
      try {
        const response = await fetch("/profile.jpg");
        if (!response.ok) return null;

        const blob = await response.blob();

        return await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () =>
            resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      } catch {
        return null;
      }
    };

    const photo = await loadPhoto();

    const text = (
      value: string,
      x: number,
      top: number,
      size = 9,
      bold = false,
      color = black
    ) => {
      pdf.setFont("helvetica", bold ? "bold" : "normal");
      pdf.setFontSize(size);
      pdf.setTextColor(...color);
      pdf.text(value, x, top);
    };

    const paragraph = (
      value: string,
      x: number,
      top: number,
      width: number,
      size = 9
    ) => {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(size);
      pdf.setTextColor(...gray);

      const lines = pdf.splitTextToSize(value, width);
      pdf.text(lines, x, top);

      return top + lines.length * 4.5;
    };

    const section = (title: string) => {
      y += 5;
      text(title.toUpperCase(), margin, y, 10, true);
      y += 2;

      pdf.setDrawColor(55, 55, 55);
      pdf.setLineWidth(0.35);
      pdf.line(margin, y, pageWidth - margin, y);

      y += 7;
    };

    const project = (title: string, description: string) => {
      text(title, margin, y, 9.5, true);
      y += 5;

      y = paragraph(description, margin, y, contentWidth, 9);
      y += 5;
    };

    const footer = (page: number) => {
      pdf.setDrawColor(190, 190, 190);
      pdf.setLineWidth(0.2);
      pdf.line(margin, 283, pageWidth - margin, 283);

      text(
        "Christina Jenny Elisha Simanjuntak | Curriculum Vitae",
        margin,
        289,
        7.5,
        false,
        gray
      );

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(7.5);
      pdf.setTextColor(...gray);
      pdf.text(`${page}/2`, pageWidth - margin, 289, {
        align: "right",
      });
    };

    // =========================
    // PAGE 1 - PROFILE
    // =========================

    // Profile photo
    if (photo) {
      pdf.addImage(photo, "JPEG", margin, y, 34, 42);
    }

    // Name and contact information
    const nameX = 57;

    text("CHRISTINA JENNY", nameX, 25, 17, true);
    text("ELISHA SIMANJUNTAK", nameX, 33, 17, true);

    text("Computer Technology Student", nameX, 40, 9.5, false, gray);

    text("Phone: 085260632667", nameX, 49, 8.5);
    text(
      "Email: christinasimanjuntak2019@gmail.com",
      nameX,
      54,
      8.5
    );
    text(
      "LinkedIn: linkedin.com/in/christina-jenny-elisha-simanjuntak-b93528382/",
      nameX,
      59,
      7.2
    );
    text(
      "GitHub: github.com/christinajennyelisha90",
      nameX,
      64,
      8
    );

    y = 73;

    pdf.setDrawColor(40, 40, 40);
    pdf.setLineWidth(0.45);
    pdf.line(margin, y, pageWidth - margin, y);

    // PROFILE
    section("Profile");

    y = paragraph(
      "A technology student passionate about Software Engineering, Web Development, and Backend Development. Interested in building scalable systems with clean architecture and good user experience.",
      margin,
      y,
      contentWidth,
      9.2
    );

    // EDUCATION
    section("Education");

    text("Institut Teknologi Del", margin, y, 9.5, true);
    text("2024 - Present", pageWidth - margin, y, 8.5, false, gray);

    y += 5;
    text("Computer Technology", margin, y, 9, false, gray);
    y += 5;

    // PROJECT EXPERIENCE
    section("Project Experience");

    project(
      "TEWUNEED Marketplace",
      "Developed a web-based marketplace featuring product catalogs, categories, shopping carts, checkout, payment processes, customer accounts, and an administrator dashboard. Technologies: PHP, MySQL, Bootstrap, JavaScript."
    );

    project(
      "Hybrid Energy Monitoring System",
      "Academic project for monitoring hybrid PLN and solar energy systems using ESP32, sensor readings, and a monitoring dashboard."
    );

    project(
      "Wisata Air Panas Sipoholon",
      "Created a tourism information website presenting destination information, descriptions, photo galleries, and visitor reviews. Technologies: HTML, CSS, JavaScript, Bootstrap."
    );

    footer(1);

    // =========================
    // PAGE 2 - PROJECTS & SKILLS
    // =========================

    pdf.addPage();
    y = 20;

    section("Project Experience (Continued)");

    project(
      "Early Pest Detection System",
      "Developed a prototype for early pest detection using vibration and ultrasonic sensors, Arduino, LED indicators, and a buzzer."
    );

    project(
      "NodeChess - Online Multiplayer Chess",
      "Developed an online multiplayer chess application featuring real-time gameplay, player synchronization, and database recovery. Technologies: Node.js, Express, Socket.io, PostgreSQL, Redis."
    );

    project(
      "Second Electronic Quality Management System",
      "Developed a web-based system for managing second-hand electronic product catalogs, quality grades, shopping carts, transactions, and an administrator dashboard. Technologies: Laravel, PHP, MySQL, REST API, JavaScript."
    );

    // TECHNICAL SKILLS
    section("Technical Skills");

    const skills = [
      ["Web Development", "HTML, CSS, PHP, REST APIs"],
      ["Database Management", "MySQL, phpMyAdmin"],
      [
        "Development Tools",
        "Visual Studio Code, XAMPP Control Panel, VMware Workstation Pro",
      ],
      [
        "Design & Testing",
        "Figma, StarUML, Bizagi Modeler, draw.io, Visual Paradigm, Manual Testing / QA",
      ],
      ["Core Stack", "Laravel, React, Next.js, Python, Node.js, Docker"],
    ];

    skills.forEach(([heading, details]) => {
      text(heading, margin, y, 9, true);
      y += 4.5;

      y = paragraph(details, margin, y, contentWidth, 8.8);
      y += 4;
    });

    // CERTIFICATIONS
    section("Certifications & Achievements");

    const certifications = [
      "Introduction to Cybersecurity - Cisco Networking Academy Program (June 2026)",
      "Web Development Contestant - FIT Competition 2026, Universitas Kristen Satya Wacana (June 2026)",
      "National IT Competition PEKAN IT 2026 - HIMTIKA (June 2026)",
    ];

    certifications.forEach((item) => {
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8.8);

      const lines = pdf.splitTextToSize(
        `• ${item}`,
        contentWidth
      );

      pdf.setTextColor(...gray);
      pdf.text(lines, margin, y);

      y += lines.length * 4.5 + 3;
    });

    footer(2);

     const pdfData = pdf.output("datauristring");

const link = document.createElement("a");
link.href = pdfData;
link.download = "CV-Christina-Jenny-Elisha-Simanjuntak.pdf";

document.body.appendChild(link);
link.click();
link.remove();
  };

  return (
    <button
      type="button"
      onClick={handleGenerateCV}
      className="rounded-lg border border-emerald-400/40 px-6 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
    >
      Download CV ↓
    </button>
  );
  };

 