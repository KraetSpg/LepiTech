import { useTheme } from "./theme-provider";

export function ThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <button 
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border rounded"
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  )
}