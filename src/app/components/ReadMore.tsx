import { useState, useRef, useEffect, useCallback } from 'react';

const LG_BREAKPOINT = 1024;

interface ReadMoreProps {
  children: React.ReactNode;
  lines?: number;
  dark?: boolean;
}

export function ReadMore({ children, lines = 4, dark = false }: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    const mobile = window.innerWidth < LG_BREAKPOINT;
    setIsMobile(mobile);

    const el = contentRef.current;
    if (!el) return;

    if (mobile && !expanded) {
      setOverflows(el.scrollHeight > el.clientHeight + 2);
    } else {
      setOverflows(false);
    }
  }, [expanded]);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const shouldClamp = isMobile && !expanded;

  const btnClass = dark
    ? 'mt-2 text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors'
    : 'mt-2 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition-colors';

  return (
    <div>
      <div
        ref={contentRef}
        style={
          shouldClamp
            ? {
                display: '-webkit-box',
                WebkitLineClamp: lines,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }
            : undefined
        }
      >
        {children}
      </div>
      {overflows && !expanded && (
        <button onClick={() => setExpanded(true)} className={btnClass}>
          Read more...
        </button>
      )}
      {isMobile && expanded && (
        <button onClick={() => setExpanded(false)} className={btnClass}>
          Show less
        </button>
      )}
    </div>
  );
}
