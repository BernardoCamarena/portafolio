import type { NextConfig } from 'next'

// Unity WebGL build (Brotli pre-compressed). The browser needs Content-Encoding: br
// plus the real content type to decompress and stream-compile the files.
const UNITY_BUILD = '/play/royale-defense/Build'
const unityHeaders = (contentType: string) => [
  { key: 'Content-Encoding', value: 'br' },
  { key: 'Content-Type', value: contentType },
  { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
]

const nextConfig: NextConfig = {
  turbopack: {},
  allowedDevOrigins: ['192.168.1.67'],
  async headers() {
    return [
      { source: `${UNITY_BUILD}/royale.wasm.br`, headers: unityHeaders('application/wasm') },
      { source: `${UNITY_BUILD}/royale.framework.js.br`, headers: unityHeaders('application/javascript') },
      { source: `${UNITY_BUILD}/royale.data.br`, headers: unityHeaders('application/octet-stream') },
    ]
  },
}

export default nextConfig
