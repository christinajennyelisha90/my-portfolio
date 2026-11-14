"use client";

import { jsPDF } from "jspdf";

export default function GenerateCV() {
  const handleGenerateCV = () => {
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 18;
    const contentWidth = pageWidth - margin * 2;
    let y = 20;

    const addText = (
      text: string,
      size = 10,
      bold = false,
      color: [number, number, number] = [55, 55, 55]
    ) => {
      pdf.setFont("helvetica", bold ? "bold" : "normal");
      pdf.setFontSize(size);
      pdf.setTextColor(...color);

      const lines = pdf.splitTextToSize(text, contentWidth);
      const lineHeight = size * 0.45 + 1.5;

      if (y + lines.length * lineHeight > pageHeight - 20) {
        pdf.addPage();
        y = 20;
      }

      pdf.text(lines, margin, y);
      y += lines.length * lineHeight + 2;
    };

    const addSection = (title: string) => {
      y += 4;

      if (y + 14 > pageHeight - 20) {
        pdf.addPage();
        y = 20;
      }

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(12);
      pdf.setTextColor(20, 120, 100);
      pdf.text(title, margin, y);

      y += 3;

      pdf.setDrawColor(20, 120, 100);
      pdf.line(margin, y, pageWidth - margin, y);

      y += 6;
    };

    // HEADER
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(19);
    pdf.setTextColor(20, 120, 100);

    pdf.text("CHRISTINA JENNY ELISHA", margin, y);
    y += 8;
    pdf.text("SIMANJUNTAK", margin, y);

    y += 7;
    addText("Computer Technology Student", 11, true);

    addText(
      "Phone: 085260632667 | Email: christinasimanjuntak2019@gmail.com",
      9
    );

    addText(
      "LinkedIn: linkedin.com/in/christina-jenny-elisha-simanjuntak-b93528382/",
      9
    );

    addText("GitHub: github.com/christinajennyelisha90", 9);

    y += 2;
    pdf.setDrawColor(20, 120, 100);
    pdf.line(margin, y, pageWidth - margin, y);
    y += 5;

    // PROFILE
    addSection("PROFILE");

    addText(
      "A technology student passionate about Software Engineering, Web Development, and Backend Development. Interested in building scalable systems with clean architecture and good user experience."
    );

    // CORE STACK
    addSection("CORE STACK");

    addText(
      "Laravel, React, Next.js, Python, Node.js, Docker"
    );

    // TECHNICAL SKILLS
    addSection("TECHNICAL SKILLS");

    addText("Web Development", 10, true);
    addText("HTML, CSS, PHP, REST APIs");

    addText("Database Management", 10, true);
    addText("MySQL, phpMyAdmin");

    addText("Development Tools", 10, true);
    addText(
      "Visual Studio Code, XAMPP Control Panel, VMware Workstation Pro"
    );

    addText("Design & Testing", 10, true);
    addText(
      "Figma, StarUML, Bizagi Modeler, draw.io, Visual Paradigm, Manual Testing / QA"
    );

    // PROJECTS
    addSection("PROJECT EXPERIENCE");

    addText("1. TEWUNEED Marketplace", 10, true);
    addText(
      "Web-based marketplace for managing product catalogs, categories, shopping carts, checkout, payments, customer accounts, and administrator dashboard. Technologies: PHP, MySQL, Bootstrap, JavaScript."
    );

    addText("2. Hybrid Energy Monitoring System", 10, true);
    addText(
      "Academic project for monitoring hybrid PLN and solar energy systems using ESP32, sensor readings, and a dashboard."
    );

    addText("3. Wisata Air Panas Sipoholon", 10, true);
    addText(
      "Tourism information website presenting destination information, descriptions, photo galleries, and visitor reviews. Technologies: HTML, CSS, JavaScript, Bootstrap."
    );

    addText("4. Early Pest Detection System", 10, true);
    addText(
      "Prototype for early pest detection using vibration and ultrasonic sensors, Arduino, LED indicators, and a buzzer."
    );

    addText("5. NodeChess – Online Multiplayer Chess", 10, true);
    addText(
      "Online multiplayer chess application with real-time gameplay, player synchronization, and database recovery. Technologies: Node.js, Express, Socket.io, PostgreSQL, Redis."
    );

    addText("6. Second Electronic Quality Management System", 10, true);
    addText(
      "Web-based system for managing second-hand electronic product catalogs, quality grades, shopping carts, transactions, and administrator dashboard. Technologies: Laravel, PHP, MySQL, REST API, JavaScript."
    );

    // CERTIFICATIONS
    addSection("CERTIFICATIONS & ACHIEVEMENTS");

    addText(
      "Introduction to Cybersecurity – Cisco Networking Academy Program (June 2026)"
    );

    addText(
      "Web Development Contestant – FIT Competition 2026, Universitas Kristen Satya Wacana (June 2026)"
    );

    addText(
      "National IT Competition PEKAN IT 2026 – HIMTIKA (June 2026)"
    );

    // FOOTER
    const totalPages = pdf.getNumberOfPages();

    for (let page = 1; page <= totalPages; page++) {
      pdf.setPage(page);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(130, 130, 130);

      pdf.text(
        "Christina Jenny Elisha Simanjuntak | Curriculum Vitae",
        margin,
        pageHeight - 10
      );

      pdf.text(
        `${page} / ${totalPages}`,
        pageWidth - margin,
        pageHeight - 10,
        { align: "right" }
      );
    }

    pdf.save("CV-Christina-Jenny-Elisha-Simanjuntak.pdf");
  };

  return (
    <button
      type="button"
      onClick={handleGenerateCV}
      className="rounded-lg border border-emerald-400 px-6 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
    >
      Download CV ↓
    </button>
  );
}
