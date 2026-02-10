import { useState, useRef, useEffect } from "react";
import { RiArrowRightSLine, RiCloseLargeFill, RiMenuFill } from "react-icons/ri";

type PopOverProps = {
  options: string[];
  links: string[];
  maxVisibleItems?: number; // Número máximo de itens visíveis antes de scroll
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
};

export default function PopOver({ 
  options, 
  links, 
  maxVisibleItems = 7,
  position = "bottom-right"
}: PopOverProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});
  const [needsScroll, setNeedsScroll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(maxVisibleItems);
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isMenuOpen || !buttonRef.current) return;

    const calculateMenuPosition = () => {
      const buttonRect = buttonRef.current!.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      
      const menuHeight = Math.min(options.length * 48, maxVisibleItems * 48 + 16);
      const menuWidth = 240;
      
      let top = buttonRect.bottom + 8;
      let left = buttonRect.left;
      let transformOrigin = "top left";

      switch (position) {
        case "bottom-right":
          left = buttonRect.right - menuWidth;
          transformOrigin = "top right";
          break;
        case "top-left":
          top = buttonRect.top - menuHeight - 8;
          transformOrigin = "bottom left";
          break;
        case "top-right":
          top = buttonRect.top - menuHeight - 8;
          left = buttonRect.right - menuWidth;
          transformOrigin = "bottom right";
          break;
      }


      if (top + menuHeight > viewportHeight && position.includes("bottom")) {
        top = buttonRect.top - menuHeight - 8;
        transformOrigin = transformOrigin.replace("top", "bottom");
      }
      
      if (top < 0 && position.includes("top")) {
        top = buttonRect.bottom + 8;
        transformOrigin = transformOrigin.replace("bottom", "top");
      }


      if (left + menuWidth > viewportWidth) {
        left = viewportWidth - menuWidth - 16;
      }
      
      if (left < 16) {
        left = 16;
      }


      const totalHeight = options.length * 48;
      const maxHeight = maxVisibleItems * 48;
      setNeedsScroll(totalHeight > maxHeight);

      const availableSpace = position.includes("bottom") 
        ? viewportHeight - buttonRect.bottom - 24
        : buttonRect.top - 24;
      
      const maxItemsBySpace = Math.floor(availableSpace / 48);
      const actualVisible = Math.min(maxVisibleItems, maxItemsBySpace, options.length);
      
      setVisibleCount(Math.max(3, actualVisible)); // Mínimo de 3 itens visíveis

      setMenuStyle({
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        width: `${menuWidth}px`,
        transformOrigin,
        zIndex: 50,
      });
    };

    calculateMenuPosition();
    window.addEventListener("resize", calculateMenuPosition);
    window.addEventListener("scroll", calculateMenuPosition);

    return () => {
      window.removeEventListener("resize", calculateMenuPosition);
      window.removeEventListener("scroll", calculateMenuPosition);
    };
  }, [isMenuOpen, options.length, maxVisibleItems, position]);

  const menuClasses = `
    bg-white dark:bg-gray-800 
    rounded-lg shadow-lg 
    border border-gray-200 dark:border-gray-700
    overflow-hidden
    transition-all duration-200 ease-out
    ${isMenuOpen 
      ? "opacity-100 scale-100 translate-y-0" 
      : "opacity-0 scale-95 translate-y-2 pointer-events-none"
    }
  `;

  return (
    <div className="relative inline-block">
      {/* Botão do menu */}
      <button
        ref={buttonRef}
        onClick={handleMenuToggle}
        className={`
          flex items-center justify-center 
          p-2 rounded-lg
          bg-gray-100 dark:bg-gray-800
          hover:bg-gray-200 dark:hover:bg-gray-700
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500
          ${isMenuOpen ? "ring-2 ring-blue-500" : ""}
        `}
        aria-expanded={isMenuOpen}
        aria-haspopup="true"
      >
        {isMenuOpen ? (
          <RiCloseLargeFill/>
        ) : (
          <RiMenuFill/>
        )}
        <span className="sr-only">Menu</span>
      </button>

      {/* Menu pop-over */}
      <div
        ref={menuRef}
        style={menuStyle}
        className={menuClasses}
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        <div 
          className={`
            py-2
            ${needsScroll ? "overflow-y-auto" : ""}
          `}
          style={{
            maxHeight: needsScroll ? `${visibleCount * 48}px` : "none"
          }}
        >
          {options.map((option, index) => (
            <a
              key={index}
              href={links[index]}
              className={`
                flex items-center justify-between
                px-4 py-3
                text-sm text-gray-700 dark:text-gray-300
                hover:bg-gray-100 dark:hover:bg-gray-700
                transition-colors duration-150
                border-b border-gray-100 dark:border-gray-700 last:border-b-0
              `}
              role="menuitem"
              onClick={handleCloseMenu}
            >
              <span>{option}</span>
              <RiArrowRightSLine/>
            </a>
          ))}
        </div>

        {/*Scroll*/}
        {needsScroll && (
          <div className="flex justify-center py-1 border-t border-gray-100 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 px-4 py-1">
              {options.length} itens • Role para ver mais
            </div>
          </div>
        )}
      </div>
    </div>
  );
}