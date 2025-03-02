'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface MenuBarProps {
  className?: string
}

const menuItems = [
  { 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}><title>home</title><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor"><path d="M2.25,6.54138l6.75-4.5l6.75,4.5"></path><path d="M15.75,6.75v7.5c0,.82843-.67157,1.5-1.5,1.5h-10.5c-.82843,0-1.5-.67157-1.5-1.5v-7.5"></path></g></svg>
    ), 
    label: "Home",
    href: "/"
  },
  { 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}><title>user</title><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor"><circle cx="9" cy="4.75" r="3"></circle><path d="M1.75,15.25c0-2.76142,2.23858-5,5-5h4.5c2.76142,0,5,2.23858,5,5"></path></g></svg>
    ), 
    label: "About", 
    href: "/about"
  },
  { 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}><title>code</title><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor"><polyline points="11.75 1.75 16.25 6.25 11.75 10.75"></polyline><polyline points="6.25 7.25 1.75 11.75 6.25 16.25"></polyline><line x1="9.75" y1="3.75" x2="8.25" y2="14.25"></line></g></svg>
    ), 
    label: "Projects", 
    href: "/projects"
  },
  { 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}><title>envelope</title><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor"><path d="M1.75,5.75l6.767,3.733c.301,.166,.665,.166,.966,0l6.767-3.733"></path><rect x="1.75" y="3.25" width="14.5" height="11.5" rx="2" ry="2" transform="translate(18 18) rotate(180)"></rect></g></svg>
    ), 
    label: "Contact", 
    href: "/contact"
  },
  { 
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...props}><title>hashtag</title><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor"><line x1="3.75" y1="6.25" x2="15.25" y2="6.25"></line><line x1="2.75" y1="11.75" x2="14.25" y2="11.75"></line><line x1="7.633" y1="2.75" x2="5.289" y2="15.25"></line><line x1="12.711" y1="2.75" x2="10.367" y2="15.25"></line></g></svg>
    ), 
    label: "Blog", 
    href: "/blog"
  }
]

export function MenuBar({ className }: MenuBarProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, width: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (activeIndex !== null && menuRef.current && tooltipRef.current) {
      const menuItem = menuRef.current.children[activeIndex] as HTMLElement;
      const menuRect = menuRef.current.getBoundingClientRect();
      const itemRect = menuItem.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
      const left = itemRect.left - menuRect.left + (itemRect.width - tooltipRect.width) / 2;
    
      setTooltipPosition({
        left: Math.max(0, Math.min(left, menuRect.width - tooltipRect.width)),
        width: tooltipRect.width
      });
    }
  }, [activeIndex]);

  return (
    <div className={`fixed top-20 z-50 left-1/2 transform -translate-x-1/2 ${className}`}>
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0"
            style={{ 
              top: '-35px',
              pointerEvents: 'none',
              zIndex: 50
            }}
          >
            <motion.div
              ref={tooltipRef}
              className="h-8 px-4 bg-[#131316] rounded-lg shadow-[0px_32px_64px_-16px_rgba(0,0,0,0.20)] shadow-[0px_16px_32px_-8px_rgba(0,0,0,0.20)] shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.24)] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.24)] shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.24)] shadow-[0px_0px_0px_1px_rgba(0,0,0,1.00)] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.05)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.12)] justify-center items-center inline-flex overflow-hidden"
              initial={{ x: tooltipPosition.left }}
              animate={{ x: tooltipPosition.left }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ width: 'auto' }}
            >
              <p className="text-white/80 text-[14px] font-medium font-['Geist'] leading-tight whitespace-nowrap">
                {menuItems[activeIndex].label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div 
        ref={menuRef}
        className="h-12 px-2 bg-[#131316] rounded-[99px] shadow-[0px_32px_64px_-16px_rgba(0,0,0,0.20)] shadow-[0px_16px_32px_-8px_rgba(0,0,0,0.20)] shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.24)] shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.24)] shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.24)] shadow-[0px_0px_0px_1px_rgba(0,0,0,1.00)] shadow-[inset_0px_0px_0px_1px_rgba(255,255,255,0.08)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.20)] justify-center items-center gap-[4px] inline-flex overflow-hidden z-10"
      >
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={index}
              href={item.href}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`w-10 h-10 px-3 py-1 rounded-[99px] justify-center items-center gap-2 flex transition-colors ${
                isActive 
                  ? "bg-[hsla(0,0%,100%,0.12)]" 
                  : "hover:bg-[hsla(0,0%,100%,0.08)]"
              }`}
            >
              <div className="justify-center items-center flex">
                <div className="w-[20px] h-[20px] flex justify-center items-center overflow-hidden">
                  <item.icon className={`w-full h-full ${isActive ? "text-white" : "text-[#fafafb]"}`} />
                </div>
              </div>
              <span className="sr-only">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
    );
}
