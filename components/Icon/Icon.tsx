import { iconPaths, type IconName } from './paths';

type IconProps = {
  name: IconName;
  /** Rendered size in px. Figma uses 14, 16, 18 and 20. */
  size?: number;
  className?: string;
};

/** Decorative by default: pair it with visible text or an aria-label on the parent. */
export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {iconPaths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
