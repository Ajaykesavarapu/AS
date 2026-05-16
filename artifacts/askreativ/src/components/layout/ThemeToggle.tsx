import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <div className="theme-toggle-wrap">
      <label className="theme-switch" title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggle}
          aria-label="Toggle dark mode"
          data-testid="toggle-theme"
        />
        <span className="theme-slider">
          {theme === "dark" ? "🌙" : "☀️"}
        </span>
      </label>
    </div>
  );
}
