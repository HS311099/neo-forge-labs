import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Cyberpunk Color System
        cyber: {
          violet: "hsl(var(--cyber-violet))",
          cyan: "hsl(var(--cyber-cyan))",
          pink: "hsl(var(--cyber-pink))",
          green: "hsl(var(--cyber-green))",
          orange: "hsl(var(--cyber-orange))",
        },
        neon: {
          primary: "hsl(var(--neon-primary))",
          secondary: "hsl(var(--neon-secondary))",
          accent: "hsl(var(--neon-accent))",
        },
        glass: {
          bg: "hsl(var(--glass-bg))",
          border: "hsl(var(--glass-border))",
          shadow: "hsl(var(--glass-shadow))",
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, hsl(var(--cyber-violet)), hsl(var(--cyber-cyan)))',
        'cyber-gradient-r': 'linear-gradient(135deg, hsl(var(--cyber-cyan)), hsl(var(--cyber-violet)))',
        'glass-gradient': 'linear-gradient(135deg, hsl(var(--glass-bg)), hsl(var(--glass-border)))',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px hsl(var(--neon-primary))" },
          "50%": { boxShadow: "0 0 20px hsl(var(--neon-primary)), 0 0 30px hsl(var(--neon-primary))" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "cyber-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "typing": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "particles": {
          "0%": { transform: "translateY(100vh) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) rotate(360deg)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "cyber-spin": "cyber-spin 8s linear infinite",
        "typing": "typing 2s steps(40, end)",
        "particles": "particles 15s linear infinite",
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'neon': '0 0 5px hsl(var(--neon-primary)), 0 0 10px hsl(var(--neon-primary)), 0 0 15px hsl(var(--neon-primary))',
        'neon-lg': '0 0 10px hsl(var(--neon-primary)), 0 0 20px hsl(var(--neon-primary)), 0 0 40px hsl(var(--neon-primary))',
        'glass': '0 8px 32px hsl(var(--glass-shadow))',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
