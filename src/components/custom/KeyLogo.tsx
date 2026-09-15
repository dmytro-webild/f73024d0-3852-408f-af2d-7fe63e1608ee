import { cls } from "@/lib/utils";

interface KeyLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export default function KeyLogo({ className, showSubtitle = true }: KeyLogoProps) {
  return (
    <div className={cls("inline-flex flex-col items-start leading-none select-none", className)}>
      <div className="flex items-baseline text-2xl md:text-3xl font-bold text-foreground font-sans">
        <svg viewBox="0 0 34 38" className="h-[0.88em] w-auto mr-[0.5px] fill-current align-baseline inline-block">
          {/* Vertical stem */}
          <rect x="0" y="3" width="9.5" height="33" rx="0.5" fill="currentColor" />
          {/* Lower diagonal leg */}
          <polygon points="9.5,20 28,36 18.5,36 2,22" fill="currentColor" />
          {/* Upper purple diagonal leg */}
          <polygon points="8.5,19 23,3.5 32.5,3.5 15,20.5" fill="#8b5cf6" />
        </svg>
        <span className="font-bold tracking-tight">ey</span>
      </div>
      {showSubtitle && (
        <span className="text-[0.5rem] md:text-[0.55rem] font-medium tracking-[0.28em] text-foreground/80 uppercase mt-0.5 pl-0.5 font-sans">
          AI KURSI
        </span>
      )}
    </div>
  );
}
