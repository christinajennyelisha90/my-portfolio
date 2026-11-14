"use client";

import { jsPDF } from "jspdf";

export default function GenerateCV() {
  const handleGenerateCV = () => {
    const pdf = new jsPDF();

    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = 22;

    const addSection = (title: string, content: string[]) => {
      y += 5;

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(13);
      pdf.setTextColor(20, 100, 170);
      pdf.text(title, margin, y);

      y += 7;

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.setTextColor(55, 55, 55);

      content.forEach((item) => {
        const lines = pdf.splitTextToSize(item, contentWidth);

        if (y + lines.length * 5 > 275) {
          pdf.addPage();
          y = 20;
        }

        pdf.text(lines, margin, y);
        y += lines.length * 5 + 2;
      });
    };

    // HEADER
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(22);
    pdf.setTextColor(20, 100, 170);

    pdf.text("CHRISTINA JENNY ELISHA SIMANJUNTAK", margin, y);

    y += 9;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(10);
    pdf.setTextColor(80, 80, 80);

    pdf.text("Computer Technology Student", margin, y);

    y += 7;

    pdf.setDrawColor(20, 100, 170);
    pdf.line(margin, y, pageWidth - margin, y);

    // PROFILE
    addSection("PROFILE", [
      "A tech developer passionate about Software Engineering, Web Development, and Backend Development. Interested in building scalable systems with clean architecture and great user experience.",
    ]);

    // SKILLS
    addSection("TECHNICAL SKILLS", [
      "Web Development: HTML, CSS, PHP, REST APIs",
      "Database Management: MySQL, phpMyAdmin",
      "Development Tools: Visual Studio Code, XAMPP Control Panel, VMware Workstation Pro",
      "Design & Testing: Figma, StarUML, Bizagi Modeler, draw.io, Visual Paradigm, Manual Testing / QA",
    ]);

    // PROJECTS
    addSection("PROJECTS", [
      "TEWUNEED Marketplace: Web-based marketplace for managing product catalogs, categories, shopping carts, checkout, payments, customer accounts, and administrator dashboard.",
      "Hybrid Energy Monitoring System: Academic project using ESP32 to monitor hybrid PLN and solar power systems, read sensor data, and display information through a dashboard.",
    ]);

    // CONTACT
    addSection("CONTACT INFORMATION", [
      "Email: christinasimanjuntak2019@gmail.com",
      "Phone: +62 852-6063-2667",
      "LinkedIn: linkedin.com/in/christina-jenny-elisha-simanjuntak-b93528382/",
      "GitHub: github.com/christinajennyelisha90",
    ]);

    // FOOTER
    pdf.setFontSize(8);
    pdf.setTextColor(130, 130, 130);

    pdf.text(
      "Generated from Christina's Portfolio",
      margin,
      287
    );

    // DOWNLOAD
    pdf.save("CV-Christina-Simanjuntak.pdf");
  };

  return (
    <button
      type="button"
      onClick={handleGenerateCV}
      className="rounded-lg border border-emerald-400 px-6 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-black"
    >
      Generate CV ↓
    </button>
  );
}
