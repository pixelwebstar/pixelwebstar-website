export const designSystem = {
    colors: {
        themes: {
            nebula: {
                background: "#0a0a0a",
                foreground: "#ffffff",
                accent: "#7000ff", // Deep Electric Purple
                secondary: "#00f0ff", // Cyan
                surface: "rgba(255, 255, 255, 0.05)",
            },
            quantum: {
                background: "#050b14",
                foreground: "#e0e6ed",
                accent: "#ff2a6d", // Razor Pink
                secondary: "#05d9e8", // Electric Blue
                surface: "rgba(5, 217, 232, 0.05)",
            },
            cyber: {
                background: "#000000",
                foreground: "#f0f0f0",
                accent: "#fcee0a", // Cyber Yellow
                secondary: "#ff003c", // Glitch Red
                surface: "rgba(255, 255, 255, 0.1)",
            },
        },
    },
    typography: {
        fontFamily: {
            sans: "var(--font-geist-sans), sans-serif",
            mono: "var(--font-geist-mono), monospace",
        },
        fluid: {
            // Fluid typography using clamp for perfect scaling
            h1: "clamp(3.5rem, 8vw + 1rem, 10rem)",
            h2: "clamp(2.5rem, 5vw + 1rem, 6rem)",
            h3: "clamp(1.75rem, 3vw + 1rem, 4rem)",
            body: "clamp(1rem, 1vw + 0.5rem, 1.25rem)",
        },
    },
    motion: {
        easings: {
            premium: [0.22, 1, 0.36, 1], // The "Awwwards" cubic-bezier
            bounce: [0.34, 1.56, 0.64, 1],
        },
        durations: {
            fast: 0.4,
            medium: 0.8,
            slow: 1.5, // For dramatic entrances
        },
    },
};
