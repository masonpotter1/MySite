import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const lines = fs.readFileSync(path.join(root, "src/styles.css"), "utf8").split("\n");

const tokensEnd = 24;
const globalStart = 25;
const globalEnd = 385;
const footerStart = 1081;
const footerEnd = 1099;
const navMediaStart = 1100;
const navMediaEnd = 1143;
const reducedStart = 1196;

const tokens =
  lines.slice(0, tokensEnd).join("\n") +
  `

:root {
  --accent: var(--teal);
  --accent-secondary: var(--orange);
  --focus-ring: rgba(57, 245, 211, 0.75);
  --gold: #d4b56a;
  --gold-strong: #f4d47b;
}

.page-mason {
  --accent: var(--gold-strong);
  --accent-soft: rgba(212, 181, 106, 0.18);
  --focus-ring: rgba(244, 212, 123, 0.85);
}
`;

const globalParts = [
  lines.slice(globalStart, globalEnd + 1),
  lines.slice(footerStart, footerEnd + 1),
  lines.slice(navMediaStart, navMediaEnd + 1),
  lines.slice(reducedStart),
];
let globalCss = globalParts.flat().join("\n");
globalCss = globalCss.replace(/rgba\(57, 245, 211, 0\.75\)/g, "var(--focus-ring)");

const cloutsites = [];
for (let i = 0; i < lines.length; i++) {
  if (i < tokensEnd) continue;
  if (i >= globalStart && i <= globalEnd) continue;
  if (i >= footerStart && i <= footerEnd) continue;
  if (i >= navMediaStart && i <= navMediaEnd) continue;
  if (i >= reducedStart) continue;
  cloutsites.push(lines[i]);
}

function prefixCss(css) {
  return css.replace(/(^|})\s*([^@{}][^{]*)\{/g, (match, brace, selectors) => {
    const trimmed = selectors.trim();
    if (!trimmed) return match;
    const prefixed = trimmed
      .split(",")
      .map((s) => {
        s = s.trim();
        if (s === ":root" || s.startsWith(".page-mason")) return s;
        return `.page-mason ${s}`;
      })
      .join(", ");
    return `${brace} ${prefixed} {`;
  });
}

const mysitePath = path.join(root, "..", "MySite", "src", "styles.css");
const mysite = fs.readFileSync(mysitePath, "utf8");

const stylesDir = path.join(root, "src/styles");
fs.mkdirSync(stylesDir, { recursive: true });
fs.writeFileSync(path.join(stylesDir, "tokens.css"), tokens);
fs.writeFileSync(path.join(stylesDir, "global.css"), globalCss);
fs.writeFileSync(path.join(stylesDir, "cloutsites.css"), cloutsites.join("\n"));
fs.writeFileSync(path.join(stylesDir, "mason.css"), prefixCss(mysite));
fs.writeFileSync(
  path.join(stylesDir, "index.css"),
  `@import "./tokens.css";
@import "./global.css";
@import "./cloutsites.css";
@import "./mason.css";
`,
);

console.log("Wrote src/styles/*.css");
