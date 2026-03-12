"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/blog", label: "BLOG" },
  { href: "/diary", label: "DIARY" },
  { href: "/reviews", label: "REVIEWS" },
  { href: "/currently", label: "CURRENTLY" },
  { href: "/music", label: "MUSIC" },
  { href: "/about", label: "ABOUT" },
];

function LiveStatus() {
  const [date, setDate] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      setDate(
        now
          .toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
          .toUpperCase(),
      );
    }
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 shrink-0">
      <span className="status-dot" aria-hidden="true" />
      <span
        style={{
          fontFamily: "var(--font-terminal)",
          color: "var(--mint)",
          fontSize: "1rem",
          letterSpacing: "0.06em",
          whiteSpace: "nowrap",
        }}
      >
        ONLINE{date ? ` · ${date}` : ""}
      </span>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    const id = setTimeout(() => setMenuOpen(false), 0)
    return () => clearTimeout(id)
  }, [pathname]);

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: "linear-gradient(90deg, var(--deep), var(--mid), var(--deep))",
        borderBottom: "2px solid var(--bright)",
        boxShadow: "0 0 20px rgba(30,94,255,0.4), inset 0 -1px 0 var(--cyan)",
      }}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3 gap-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="shrink-0 leading-none"
          aria-label="shanaol home"
          style={{
            fontFamily: "var(--font-pixel)",
            color: "var(--cyan)",
            fontSize: "clamp(0.75rem, 2vw, 1.1rem)",
            textShadow: "0 0 10px var(--cyan), 0 0 20px rgba(0,229,255,0.4)",
            letterSpacing: "0.04em",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              display:    "inline-block",
              lineHeight: 1,
              marginTop:  "-0.1em",
            }}
          >
            ✦
          </span>
          shanaol
        </Link>

        <ul className="hidden md:flex items-center gap-1 list-none" role="list">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: "var(--font-terminal)",
                    fontSize: "1.25rem",
                    letterSpacing: "0.06em",
                    color: active ? "var(--cyan)" : "var(--sky)",
                    textShadow: active ? "0 0 8px var(--cyan)" : "none",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "4px",
                    transition: "color 0.2s, text-shadow 0.2s, background 0.2s",
                    background: active ? "rgba(0,229,255,0.07)" : "transparent",
                    textDecoration: "none",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--glow)";
                      el.style.textShadow = "0 0 8px var(--glow)";
                      el.style.background = "rgba(77,240,255,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.color = "var(--sky)";
                      el.style.textShadow = "none";
                      el.style.background = "transparent";
                    }
                  }}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <LiveStatus />

          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{ background: "none", border: "none" }}
          >
            <span
              className="block h-px w-5 transition-all duration-200"
              style={{
                background: "var(--sky)",
                transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-200"
              style={{
                background: "var(--sky)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-5 transition-all duration-200"
              style={{
                background: "var(--sky)",
                transform: menuOpen
                  ? "translateY(-5px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul
          className="md:hidden list-none px-4 pb-4 flex flex-col gap-1"
          role="list"
          style={{ borderTop: "1px solid var(--blue)" }}
        >
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: "var(--font-terminal)",
                    fontSize: "1.4rem",
                    letterSpacing: "0.08em",
                    color: active ? "var(--cyan)" : "var(--sky)",
                    textShadow: active ? "0 0 8px var(--cyan)" : "none",
                    display: "block",
                    padding: "0.4rem 0.5rem",
                    textDecoration: "none",
                  }}
                  aria-current={active ? "page" : undefined}
                >
                  {active ? "▸ " : "  "}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
