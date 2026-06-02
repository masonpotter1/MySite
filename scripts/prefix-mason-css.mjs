import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const input = fs.readFileSync(path.join(root, "..", "MySite", "src", "styles.css"), "utf8");

/** Prefix selectors inside a rule block (not @-rules). */
function prefixBlock(block) {
  return block.replace(/(^|})(\s*)([^@{}][^{]*)\{/g, (match, brace, space, selectors) => {
    const trimmed = selectors.trim();
    if (!trimmed || trimmed.startsWith("@")) return match;
    const prefixed = trimmed
      .split(",")
      .map((sel) => {
        sel = sel.trim();
        if (!sel || sel === ":root") return sel === ":root" ? "" : sel;
        if (sel.startsWith(".page-mason")) return sel;
        return `.page-mason ${sel}`;
      })
      .filter(Boolean)
      .join(", ");
    if (!prefixed) return match;
    return `${brace}${space}${prefixed} {`;
  });
}

function prefixCss(css) {
  let out = "";
  let i = 0;
  while (i < css.length) {
    const nextAt = css.indexOf("@", i);
    const nextBrace = css.indexOf("{", i);
    if (nextBrace === -1) break;

    if (nextAt !== -1 && nextAt < nextBrace) {
      const semi = css.indexOf(";", nextAt);
      const atWord = css.slice(nextAt, semi === -1 || semi > nextBrace ? nextBrace : semi);
      if (atWord.match(/^@(media|keyframes|supports)/)) {
        const open = css.indexOf("{", nextAt);
        let depth = 0;
        let j = open;
        for (; j < css.length; j++) {
          if (css[j] === "{") depth++;
          else if (css[j] === "}") {
            depth--;
            if (depth === 0) break;
          }
        }
        const header = css.slice(nextAt, open + 1);
        const inner = css.slice(open + 1, j);
        out += header + prefixCss(inner) + "}";
        i = j + 1;
        continue;
      }
    }

    const open = nextBrace;
    let depth = 0;
    let j = open;
    for (; j < css.length; j++) {
      if (css[j] === "{") depth++;
      else if (css[j] === "}") {
        depth--;
        if (depth === 0) break;
      }
    }
    const selectors = css.slice(i, open).trim();
    const inner = css.slice(open + 1, j);
    if (selectors.startsWith("@")) {
      out += css.slice(i, j + 1);
    } else if (selectors === ":root") {
      out += css.slice(i, j + 1);
    } else {
      const prefixed = selectors
        .split(",")
        .map((s) => {
          s = s.trim();
          if (!s) return s;
          return `.page-mason ${s}`;
        })
        .join(", ");
      out += `${prefixed} {${inner}}`;
    }
    i = j + 1;
  }
  return out;
}

const stripped = input
  .replace(/:root\s*\{[^}]*\}/s, "")
  .replace(/\*[\s\S]*?box-sizing: border-box;\s*\}/, "")
  .replace(/html\s*\{[^}]*\}/, "")
  .replace(/body\s*\{[^}]*\}/, "")
  .replace(/\.skip-link[\s\S]*?\.skip-link:focus\s*\{[^}]*\}/, "")
  .replace(/\.topbar[\s\S]*?\.header-cta:focus-visible\s*\{[^}]*\}/, "");

const masonCss =
  `/* Mason portfolio — scoped to .page-mason */\n.page-mason {\n  min-height: 100vh;\n}\n\n` +
  prefixCss(stripped);

fs.writeFileSync(path.join(root, "src/styles/mason.css"), masonCss);
console.log("Regenerated mason.css", masonCss.length, "bytes");
