import { useState, useRef, useEffect, useCallback } from 'react';
import type { NavItem } from '@data/navigation';

interface Props {
  item: NavItem;
}

export default function DesktopDropdown({ item }: Props) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const handleOpen = useCallback(() => {
    clearCloseTimer();
    setOpen(true);
  }, [clearCloseTimer]);

  const handleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setOpen(false);
      closeTimer.current = null;
    }, 150);
  }, [clearCloseTimer]);

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) {
        window.clearTimeout(closeTimer.current);
      }
    };
  }, []);

  if (!item.children) {
    return (
      <a
        href={item.href}
        className="px-3 py-2 text-sm font-medium text-steel-700 transition-colors hover:text-accent"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-steel-700 transition-colors hover:text-accent"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <svg
          className="h-4 w-4 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        style={{
          position: 'absolute',
          left: 0,
          top: '100%',
          zIndex: 50,
          width: '18rem',
          paddingTop: '0.5rem',
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          transform: open ? 'translateY(0)' : 'translateY(-4px)',
          transition: 'opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            border: '1px solid #e9ecef',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ padding: '0.5rem 0' }}>
            <a
              href={item.href}
              className="block px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-steel-50"
            >
              Wszystkie {item.label.toLowerCase()}
            </a>
            <div style={{ height: '1px', backgroundColor: '#e9ecef', margin: '0.25rem 0' }} />
            {item.children.map((child) => (
              <div key={child.label}>
                {child.children ? (
                  <SubmenuGroup child={child} />
                ) : (
                  <a
                    href={child.href}
                    className="block px-5 py-2.5 text-sm text-steel-700 transition-colors hover:bg-steel-50 hover:text-accent"
                  >
                    {child.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SubmenuGroup({ child }: { child: NavItem }) {
  const [expanded, setExpanded] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const handleOpen = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setExpanded(true);
  };

  const handleClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
    }
    closeTimer.current = window.setTimeout(() => {
      setExpanded(false);
      closeTimer.current = null;
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current !== null) {
        window.clearTimeout(closeTimer.current);
      }
    };
  }, []);

  return (
    <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
      <a
        href={child.href}
        className="flex items-center justify-between px-5 py-2.5 text-sm font-medium text-steel-800 transition-colors hover:bg-steel-50 hover:text-accent"
      >
        {child.label}
        <svg
          className="h-3 w-3 text-steel-400 transition-transform duration-200"
          style={{ transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
      <div
        style={{
          overflow: 'hidden',
          maxHeight: expanded ? '15rem' : '0',
          transition: 'max-height 0.25s ease',
        }}
      >
        <div
          style={{
            marginLeft: '1.25rem',
            borderLeft: '2px solid rgba(240, 131, 18, 0.2)',
            paddingBottom: '0.25rem',
          }}
        >
          {child.children!.map((subChild) => (
            <a
              key={subChild.label}
              href={subChild.href}
              className="block px-4 py-1.5 text-sm text-steel-600 transition-colors hover:text-accent"
            >
              {subChild.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
