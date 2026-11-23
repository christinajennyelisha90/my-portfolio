import styles from "./ToolsCategories.module.css";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

const categories = [
  {
    title: "Web Development",
    tools: [
      { name: "HTML", icon: D + "html5/html5-original.svg" },
      { name: "CSS", icon: D + "css3/css3-original.svg" },
      { name: "PHP", icon: D + "php/php-original.svg" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Database Management",
    tools: [
      { name: "MySQL", icon: D + "mysql/mysql-original.svg" },
      { name: "phpMyAdmin", icon: D + "phpmyadmin/phpmyadmin-original.svg" },
    ],
  },
  {
    title: "Development Tools",
    tools: [
      { name: "Visual Studio Code", icon: D + "vscode/vscode-original.svg" },
      { name: "XAMPP Control Panel", icon: D + "xampp/xampp-original.svg" },
      { name: "VMware Workstation Pro" },
    ],
  },
  {
    title: "Design & Testing",
    tools: [
      { name: "Figma", icon: D + "figma/figma-original.svg" },
      { name: "StarUML" },
      { name: "Bizagi Modeler" },
      { name: "draw.io" },
      { name: "Visual Paradigm" },
      { name: "Manual Testing / QA" },
    ],
  },
];

const initials = (name: string) =>
  name
    .split(/[\s/.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

export default function ToolsCategories() {
  return (
    <div className={styles.wrap}>
      {categories.map((cat) => (
        <section key={cat.title} className={styles.card}>
          <div className={styles.head}>
            <div className={styles.title}>
              <span className={styles.ico}>&lt;/&gt;</span>
              {cat.title}
            </div>
            <span className={styles.count}>
              {String(cat.tools.length).padStart(2, "0")} tools
            </span>
          </div>

          <div className={styles.grid}>
            {cat.tools.map((tool) => (
              <div key={tool.name} className={styles.tile}>
                {tool.icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={tool.icon} alt={tool.name} width={26} height={26} />
                ) : (
                  <div className={styles.mono}>{initials(tool.name)}</div>
                )}
                <span className={styles.label}>{tool.name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

