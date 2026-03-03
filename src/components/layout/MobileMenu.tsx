import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import type { NavItem } from '@data/navigation';

interface Props {
  navigation: NavItem[];
}

export default function MobileMenu({ navigation }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => setMounted(true), []);

  // Lock scroll without breaking sticky — use class on <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.style.overflow = 'clip';
    } else {
      html.style.overflow = '';
    }
    return () => {
      html.style.overflow = '';
    };
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, close]);

  return (
    <div className="lg:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={toggle}
        className="relative z-[10000] flex h-10 w-10 items-center justify-center"
        aria-label={isOpen ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={isOpen}
      >
        <div className="flex h-[18px] w-6 flex-col justify-between">
          <span
            className="block h-[2px] w-6 rounded-full bg-steel-700 transition-all duration-300 origin-center"
            style={isOpen ? { transform: 'translateY(8px) rotate(45deg)' } : undefined}
          />
          <span
            className="block h-[2px] w-6 rounded-full bg-steel-700 transition-all duration-200"
            style={isOpen ? { opacity: 0, transform: 'scaleX(0)' } : undefined}
          />
          <span
            className="block h-[2px] w-6 rounded-full bg-steel-700 transition-all duration-300 origin-center"
            style={isOpen ? { transform: 'translateY(-8px) rotate(-45deg)' } : undefined}
          />
        </div>
      </button>

      {/* Fullscreen menu — portalled to body */}
      {mounted &&
        createPortal(
          <div
            className={`fixed top-0 left-0 z-[9999] overflow-hidden lg:hidden ${
              isOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
            style={{
              width: '100vw',
              height: '100dvh',
              visibility: isOpen ? 'visible' : 'hidden',
              opacity: isOpen ? 1 : 0,
              transition: 'opacity 0.25s ease, visibility 0.25s ease',
            }}
            aria-hidden={!isOpen}
          >
            <div className="flex h-full w-full flex-col bg-white">
              {/* Header row: logo + close */}
              <div className="flex shrink-0 items-center justify-between px-6 py-4">
                <a href="/" className="flex items-center">
                  <img
                    src="/images/logo/logo-aktechnic.png"
                    alt="AK Technic"
                    className="h-9 w-auto"
                  />
                </a>
                <button
                  type="button"
                  onClick={close}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-steel-500 hover:bg-steel-100 active:bg-steel-200 transition-colors"
                  aria-label="Zamknij menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div className="mx-6 shrink-0 border-t border-steel-100" />

              {/* Scrollable nav — min-h-0 is critical for flex shrink */}
              <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-4">
                <ul className="space-y-1">
                  {navigation.map((item, idx) => (
                    <li
                      key={item.label}
                      style={{
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? 'none' : 'translateY(12px)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                        transitionDelay: isOpen ? `${80 + idx * 50}ms` : '0ms',
                      }}
                    >
                      {item.children ? (
                        <Accordion item={item} />
                      ) : (
                        <a
                          href={item.href}
                          className="block rounded-lg px-4 py-3 text-base font-medium text-steel-800 active:bg-steel-50 transition-colors"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Bottom CTA — always visible, safe-area padding for notch phones */}
              <div
                className="shrink-0 border-t border-steel-100 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'none' : 'translateY(8px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  transitionDelay: isOpen ? '350ms' : '0ms',
                }}
              >
                <a
                  href="/kontakt/"
                  className="flex w-full items-center justify-center gap-2 bg-accent py-3.5 text-base font-semibold text-white active:bg-orange-700 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Skontaktuj się
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}

/* ── Accordion ── */

function Accordion({ item }: { item: NavItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((p) => !p)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-steel-800 active:bg-steel-50 transition-colors"
        aria-expanded={expanded}
      >
        <span>{item.label}</span>
        <svg
          className="h-5 w-5 text-steel-400 transition-transform duration-200"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: expanded ? '600px' : '0px' }}
      >
        <ul className="ml-4 border-l-2 border-steel-100 pl-4 py-1">
          <li>
            <a
              href={item.href}
              className="block rounded-lg px-4 py-2.5 text-[15px] font-medium text-accent active:bg-accent/5 transition-colors"
            >
              Wszystkie
            </a>
          </li>
          {item.children!.map((child) => (
            <li key={child.label}>
              {child.children ? (
                <SubAccordion child={child} />
              ) : (
                <a
                  href={child.href}
                  className="block rounded-lg px-4 py-2.5 text-[15px] text-steel-600 active:bg-steel-50 transition-colors"
                >
                  {child.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── SubAccordion ── */

function SubAccordion({ child }: { child: NavItem }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((p) => !p)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-[15px] text-steel-600 active:bg-steel-50 transition-colors"
        aria-expanded={expanded}
      >
        <span>{child.label}</span>
        <svg
          className="h-4 w-4 text-steel-400 transition-transform duration-200"
          style={{ transform: expanded ? 'rotate(180deg)' : 'none' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-[max-height] duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ maxHeight: expanded ? '300px' : '0px' }}
      >
        <ul className="py-1 pl-4">
          <li>
            <a
              href={child.href}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-accent active:bg-accent/5 transition-colors"
            >
              Wszystkie
            </a>
          </li>
          {child.children!.map((sub) => (
            <li key={sub.label}>
              <a
                href={sub.href}
                className="block rounded-lg px-4 py-2 text-sm text-steel-500 active:bg-steel-50 transition-colors"
              >
                {sub.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
