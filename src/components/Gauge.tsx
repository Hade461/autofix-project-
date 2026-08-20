interface GaugeProps {
  /** needle angle in degrees, -90 (far left) to 90 (far right) */
  needleAngle: number
  statusLabel: string
}

export default function Gauge({ needleAngle, statusLabel }: GaugeProps) {
  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 120" className="w-64 h-40 sm:w-80 sm:h-48">
        {/* zone arcs: closed / busy / open, drawn right-to-left for RTL reading */}
        <path
          d="M 20 100 A 80 80 0 0 1 62 27"
          fill="none"
          stroke="#4b1d14"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 66 24 A 80 80 0 0 1 134 24"
          fill="none"
          stroke="#7a3a12"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M 138 27 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#1f5c3d"
          strokeWidth="14"
          strokeLinecap="round"
        />
        {/* needle */}
        <g
          style={{ transform: `rotate(${needleAngle}deg)`, transformOrigin: '100px 100px' }}
          className="transition-transform duration-1000 ease-out motion-reduce:transition-none"
        >
          <line x1="100" y1="100" x2="100" y2="35" stroke="#F2EEE6" strokeWidth="3" />
          <circle cx="100" cy="100" r="7" fill="#FF5A1F" />
        </g>
      </svg>
      <p className="font-mono text-torque text-sm tracking-widest mt-1">{statusLabel}</p>
    </div>
  )
}
