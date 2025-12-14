import { useState, useEffect, useRef } from 'react';
import { FiCheck } from 'react-icons/fi';
import { colorThemes, getThemeByValue } from '../data/color-themes';

export default function ColorPicker() {
  const [selectedTheme, setSelectedTheme] = useState('green');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load saved theme preference
    const savedTheme = localStorage.getItem('color-theme') || 'green';
    setSelectedTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const applyTheme = (themeValue: string) => {
    const theme = getThemeByValue(themeValue);
    const root = document.documentElement;

    // Update CSS custom properties
    root.style.setProperty('--primary', theme.primaryHsl);

    // Update primary color classes in Tailwind
    Object.entries(theme.colors).forEach(([shade, color]) => {
      root.style.setProperty(`--primary-${shade}`, color);
    });
  };

  const handleThemeChange = (themeValue: string) => {
    setSelectedTheme(themeValue);
    localStorage.setItem('color-theme', themeValue);
    applyTheme(themeValue);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 rounded-lg bg-secondary hover:bg-accent transition-all duration-200 hover:scale-110"
        aria-label="Choose color theme"
        aria-expanded={isOpen}
      >
        <img
          src="/wisteria.webp"
          alt="Color theme picker"
          className="w-8 h-8 object-contain"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg border bg-popover shadow-lg z-50 animate-slide-up">
          <div className="p-2">
            <div className="px-2 py-1.5 text-sm font-semibold text-foreground mb-1">
              Breathing Technique
            </div>
            <div className="space-y-1">
              {colorThemes.map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => handleThemeChange(theme.value)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent transition-colors text-left group"
                >
                  <div
                    className="w-5 h-5 rounded-full border-2 border-border group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: theme.primary }}
                  />
                  <span className="flex-1 text-sm font-medium text-foreground">
                    {theme.name}
                  </span>
                  {selectedTheme === theme.value && (
                    <FiCheck className="w-4 h-4 text-foreground" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
