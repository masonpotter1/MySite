import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  focusable: false,
};

export function TechIconReact(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path
        d="M12 6.5c2.2 0 4 1.4 4 3.1 0 .9-.5 1.7-1.3 2.3 1.7.7 2.8 2 2.8 3.4 0 2.2-2.7 4-6 4s-6-1.8-6-4c0-1.4 1.1-2.7 2.8-3.4-.8-.6-1.3-1.4-1.3-2.3 0-1.7 1.8-3.1 4-3.1Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <ellipse cx="12" cy="12" rx="2.2" ry="6.2" stroke="currentColor" strokeWidth="1.35" />
    </svg>
  );
}

export function TechIconPhp(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M7.5 16.5h2.2c1.9 0 3.3-1 3.3-3.4 0-2.1-1.1-3.6-3.6-3.6H5.2L4 19.8h2.4l.5-3.3Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M14.8 9.5h2.1c2.4 0 3.8 1.3 3.8 3.6 0 2.6-1.6 4.4-4.2 4.4h-2.5L12.4 19.8H15l2.2-10.3Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TechIconCSharp(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M13.2 6.2 8.4 9c-.6.35-1 1-1 1.72v2.56c0 .72.4 1.37 1 1.72l4.8 2.8c.62.36 1.4.14 1.76-.48a1.35 1.35 0 0 0 .24-.75V7.45c0-.75-.6-1.35-1.35-1.35-.27 0-.53.08-.75.24Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        d="M17.2 9.2v1.1h1.1v1.4h-1.1v1.1h-1.4v-1.1h-1.1v-1.4h1.1V9.2h1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TechIconSql(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="6.5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5 6.5v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5 10.5v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

export function TechIconDocker(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M4.5 11.5h2v2h-2v-2Zm3 0h2v2h-2v-2Zm3 0h2v2h-2v-2Zm3 0h2v2h-2v-2Zm-9-3h2v2h-2v-2Zm3 0h2v2h-2v-2Zm3 0h2v2h-2v-2Zm3 0h2v2h-2v-2Zm3 0h2v2h-2v-2Zm-6-3h2v2h-2v-2Zm3 0h2v2h-2v-2Zm3 0h2v2h-2v-2Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 9.5c.8 0 1.5.7 1.5 1.5v1.5h-2"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TechIconK8s(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M12 4.2 6.5 7.4v9.2L12 19.8l5.5-3.2V7.4L12 4.2Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M12 4.2v15.6M6.5 7.4 17.5 16.6M17.5 7.4 6.5 16.6" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="12" cy="12" r="2.1" fill="currentColor" />
    </svg>
  );
}

export function TechIconDatadog(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        d="M6.5 7.5c2.8-1.2 5.8-.4 7.8 1.8 1.6 1.7 2.4 4 2.1 6.4-.2 1.6-.9 3-1.9 4.1"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M6.2 8.2v9.1c0 .9.7 1.6 1.6 1.6h3.2l1.8-3.2 1.8 3.2h2.9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <circle cx="8.8" cy="11.2" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function TechIconSelenium(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="6" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M17 15.5h2.2l-1.1 2.3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TechIconVercel(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5 20 18H4L12 5Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    </svg>
  );
}

const icons = {
  react: TechIconReact,
  php: TechIconPhp,
  csharp: TechIconCSharp,
  sql: TechIconSql,
  docker: TechIconDocker,
  k8s: TechIconK8s,
  datadog: TechIconDatadog,
  selenium: TechIconSelenium,
  vercel: TechIconVercel,
} as const;

export type TechStackIconId = keyof typeof icons;

export function TechStackGlyph({ id, className }: { id: TechStackIconId; className?: string }) {
  const Cmp = icons[id];
  return <Cmp className={className} />;
}
