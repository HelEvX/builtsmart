"use client";
import Link from "next/link";
import { useState } from "react";

// 1. Define a MenuItem type for type safety
type MenuItem = {
  label: string;
  url?: string;
  children?: MenuItem[];
};

// 2. Your menu structure
const menu: MenuItem[] = [
  {
    label: "Over Builtsmart",
    children: [
      {
        label: "Missie & Visie",
        url: "/over-builtsmart/missie-visie",
      },
      {
        label: "Team",
        url: "/over-builtsmart/team",
      },
      {
        label: "Partners",
        url: "/over-builtsmart/partners",
      },
    ],
  },
  {
    label: "Materialen Database",
    children: [
      {
        label: "Categorieën Overzicht",
        url: "/materialen-database/categorieen",
      },
      {
        label: "Zoek & Filter",
        url: "/materialen-database/zoek-filter",
      },
    ],
  },
  {
    label: "Kennis & Community",
    children: [
      {
        label: "Voor Studenten",
        children: [
          {
            label: "Educatieve Bronnen",
            url: "/kennis-community/voor-studenten/educatieve-bronnen",
          },
          {
            label: "Studentenregistratie",
            url: "/kennis-community/voor-studenten/studentenregistratie",
          },
        ],
      },
      {
        label: "Voor Professionals",
        children: [
          {
            label: "Voordelen Lidmaatschap",
            url: "/kennis-community/voor-professionals/voordelen-lidmaatschap",
          },
        ],
      },
      {
        label: "Nieuws & Updates",
        url: "/kennis-community/nieuws-updates",
      },
    ],
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

// 3. Recursive dropdown component for multi-level menus
function RecursiveDropdown({
  items,
  depth = 0,
}: {
  items: MenuItem[];
  depth?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className={`dropdown-menu ${depth === 0 ? "top" : "nested"}`}>
      {items.map((item, idx) => (
        <li
          key={item.label}
          className="relative group"
          onMouseEnter={() => setOpenIndex(idx)}
          onMouseLeave={() => setOpenIndex(null)}
        >
          {item.children ? (
            <>
              <button
                className={`dropdown-item has-children`}
                aria-haspopup="true"
                aria-expanded={openIndex === idx}
                tabIndex={0}
              >
                {item.label}
              </button>
              {openIndex === idx && (
                <RecursiveDropdown items={item.children} depth={depth + 1} />
              )}
            </>
          ) : (
            <Link href={item.url!} className="dropdown-item">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

// 4. Mobile dropdown component (for mobile nav)
function MobileDropdown({
  item,
  setMobileOpen,
}: {
  item: MenuItem;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        className="w-full flex justify-between items-center px-4 py-2 text-[var(--white)] hover:text-[var(--accent)] transition"
        onClick={() => setOpen((prev) => !prev)}
      >
        {item.label}
        <span>{open ? "▲" : "▼"}</span>
      </button>
      {open && item.children && (
        <ul className="pl-6">
          {item.children.map((child) =>
            child.children ? (
              <MobileDropdown
                key={child.label}
                item={child}
                setMobileOpen={setMobileOpen}
              />
            ) : (
              <li key={child.label}>
                <Link
                  href={child.url!}
                  className="block px-4 py-2 text-[var(--white)] hover:text-[var(--accent)] transition"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
}

// 5. Main navigation component
export default function PublicNav() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-[var(--secondary)] font-heading">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 360 60"
            className="w-32 h-10 text-[var(--accent)]"
            aria-label="BuiltSmart logo"
          >
            <path
              d="M16.49,38.44H5v20h11.49v-20ZM16.49,1.56H5v34.22h11.49V1.56ZM28.61,1.56h-9.46v11.47h5.48v11.22h-5.48v11.47h5.48v11.22h-5.48v11.47h9.46c1.03-1.03,1.94-1.94,2.74-2.73,1.41-1.38,3-2.97,4.77-4.76v-15.16c-.78-.8-1.48-1.5-2.12-2.11-1.08-1.08-2.29-2.31-3.66-3.69,1.08-1.08,2.04-2.03,2.89-2.88.84-.84,1.81-1.8,2.89-2.88v-15.19c-1.77-1.77-3.36-3.36-4.77-4.76-.81-.8-1.72-1.7-2.74-2.7ZM54.79,1.56h-11.49v49.37c1.03,1.03,1.94,1.94,2.74,2.73,1.38,1.41,2.97,3,4.77,4.76h6.91v-11.47h-2.94V1.56M74.41,1.56h-11.49v45.39h-2.54v11.47h6.52c1.03-1.03,1.94-1.94,2.74-2.73,1.41-1.38,3-2.97,4.77-4.76V1.56ZM93.09,30.48h-11.49v27.95h11.49v-27.95ZM93.09,1.56h-11.49v26.27h11.49V1.56ZM126.62,46.96h-12.08v11.47h12.08v-11.47ZM111.76,46.89h-11.49v11.54h11.61v-11.47h-.12v-.07ZM111.76,1.56h-11.49v42.68h11.49V1.56ZM146.7,15.69h-11.49v42.74h11.49V15.69ZM154.67,1.56h-27.38v11.47h27.38V1.56ZM190.89,38.41h-11.49v8.56h-8.13v-4.06h-11.49v8.03c1.03,1.03,1.94,1.94,2.74,2.73,1.38,1.41,2.97,3,4.77,4.76h16.09c1.03-1.03,1.94-1.94,2.74-2.73,1.41-1.38,3-2.97,4.77-4.76v-12.52M173.56,1.56h-6.27c-1.8,1.77-3.39,3.36-4.77,4.76-.81.8-1.72,1.7-2.74,2.7v19.22c1.03,1.03,1.94,1.94,2.74,2.73,1.38,1.38,2.97,2.97,4.77,4.76h12.11v.03h11.49v-4.04c-1.77-1.77-3.36-3.36-4.77-4.76-.81-.8-1.72-1.7-2.74-2.7h-12.11v-11.22h2.29V1.56M183.39,1.56h-7.17v11.47h3.19v4.72h11.49v-8.74c-1.77-1.77-3.36-3.36-4.77-4.76-.81-.8-1.72-1.7-2.74-2.7M243.25,4.53l-11.49,32v21.9h11.49V4.53ZM198.08,4.52v53.91h11.49v-21.91l-11.49-32ZM241.5,1.56h-12.19l-8.67,24.07-8.67-24.07h-12.14l14.96,41.67h11.74l.34-.92L241.5,1.56ZM283.95,46.98h-11.26l2.06,11.45h11.24l-2.04-11.45M275.87,1.56h-16.63l-5.08,28.56h11.25l2.17-12.94,2.58,15.57h-2.58v.02h-13.89l-4.57,25.67h11.29l2.49-14.08h5.24v-.02h15.35l-7.61-42.78ZM303.26,38.37h-11.49v20.06h11.49v-20.06ZM303.31,1.56h-11.55v34.15h11.55v-11.45h-.06v-11.22h.06V1.56ZM315.37,1.56h-9.4v11.47h5.42v11.22h-5.42v11.45h3.74v.02h1.67v22.7h11.49v-22.66c-1.38-1.38-2.61-2.61-3.69-3.69-.61-.64-1.3-1.34-2.07-2.11l5.76-5.75v-15.19c-1.03-.99-1.94-1.89-2.74-2.7-1.38-1.41-2.97-3-4.77-4.76ZM347.03,15.69h-11.49v42.74h11.49V15.69ZM355,1.56h-27.38v11.47h27.38V1.56Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Hamburger button - mobile only */}
        <button
          className="block md:hidden text-[var(--white)]"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect y="4" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
            <rect y="18" width="24" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-2">
          <li>
            <Link
              href="/"
              className="px-4 py-2 text-[var(--white)] hover:text-[var(--accent)] transition"
            >
              Home
            </Link>
          </li>
          {menu.map((item, idx) =>
            item.children ? (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(idx)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="px-4 py-2 font-heading text-[var(--white)] hover:text-[var(--accent)] transition"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === idx}
                >
                  {item.label}
                </button>
                {openDropdown === idx && (
                  <div className="absolute left-0 top-full z-20">
                    <RecursiveDropdown items={item.children} depth={0} />
                  </div>
                )}
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.url!}
                  className="px-4 py-2 text-[var(--white)] hover:text-[var(--accent)] transition"
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
        {/* Desktop Call to Action Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="bg-[var(--accent)] text-[var(--primary)] font-bold px-4 py-2 rounded hover:bg-[var(--brand-400)] transition"
          >
            Lid worden
          </a>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-[var(--secondary)] px-4 pb-4 overflow-y-auto"
          style={{ minHeight: "100vh" }}
        >
          <button
            className="absolute top-4 right-4 z-50 text-[var(--white)] md:hidden"
            aria-label={mobileOpen ? "Sluit menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            type="button"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              {/* Top line */}
              <rect
                width="24"
                height="2"
                rx="1"
                fill="currentColor"
                y="4"
                className={`transition-all duration-300 origin-center ${
                  mobileOpen
                    ? "translate-y-[3.5px] translate-x-[-5px] rotate-45"
                    : ""
                }`}
              />
              {/* Middle line */}
              <rect
                width="24"
                height="2"
                rx="1"
                fill="currentColor"
                y="11"
                className={`transition-all duration-300 origin-center ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              {/* Bottom line */}
              <rect
                width="24"
                height="2"
                rx="1"
                fill="currentColor"
                y="18"
                className={`transition-all duration-300 origin-center ${
                  mobileOpen
                    ? "-translate-y-[7px] translate-x-[-5px] -rotate-45"
                    : ""
                }`}
              />
            </svg>
          </button>

          <ul className="flex flex-col gap-2 pt-4">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-[var(--white)] hover:text-[var(--accent)] transition"
                onClick={() => {
                  console.log("Home link clicked");
                  setMobileOpen(false);
                }}
              >
                Home
              </Link>
            </li>
            {menu.map((item) =>
              item.children ? (
                <MobileDropdown
                  key={item.label}
                  item={item}
                  setMobileOpen={setMobileOpen}
                />
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.url!}
                    className="block px-4 py-2 text-[var(--white)] hover:text-[var(--accent)] transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <a
                href="#"
                className="block bg-[var(--accent)] text-[var(--primary)] font-bold px-4 py-2 rounded hover:bg-[var(--brand-400)] transition mt-2"
                onClick={() => setMobileOpen(false)}
              >
                Lid worden
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
