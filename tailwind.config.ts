// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0D0D0D', // Un gris muy oscuro, casi negro
        'card': '#1A1A1A',      // Un gris ligeramente más claro para las tarjetas
        'primary': '#10B981',    // ¡Nuestro verde profesional! (Es el 'emerald-500' de Tailwind)
        'text-primary': '#F5F5F5', // Un blanco ligeramente más suave
        'text-secondary': '#A3A3A3', // Un gris más claro para texto secundario
      },
      boxShadow: {
        'primary': '0 0 30px 5px rgba(16, 185, 129, 0.3)', // Una sombra de color verde
      }
    },
  },
  plugins: [],
}
export default config