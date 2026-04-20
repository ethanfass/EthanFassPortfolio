import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  cacheDir: join(tmpdir(), 'portfolio-website-vite-cache'),
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
