interface ByMiLogoProps {
  className?: string
  width?: number
  height?: number
}

export function ByMiLogo({ className = "", width = 120, height = 50 }: ByMiLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cursive connected "byMi" - single continuous handwritten stroke */}
      <path
        d="M6 6 
           C6 6 10 6 10 14 
           L10 24 
           C10 24 10 32 18 32 
           C24 32 24 26 24 26 
           C24 22 20 20 16 22 
           C12 24 10 28 10 28
           L12 34
           C14 32 18 30 22 34
           C26 38 30 20 30 20
           C30 20 34 34 38 34
           C42 34 46 20 46 20
           C44 30 42 42 36 46
           C32 48 30 44 30 44
           M52 34
           L58 14
           C60 22 66 28 66 28
           C66 28 72 22 74 14
           L80 34
           M92 12
           C94 10 96 12 94 14
           C92 16 90 14 92 12
           M90 22
           C92 28 94 34 96 38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}
