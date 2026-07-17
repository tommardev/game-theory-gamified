import React from "react";

export interface IconProps {
  color?: string;
  size?: number | string;
  className?: string;
}

export const KitchenIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 48,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    <path d="M12 4v10" />
    <path d="M8 8l4-4 4 4" />
    <circle cx="12" cy="18" r="1" />
  </svg>
);

export const BillIcon: React.FC<IconProps> = ({ color = "currentColor", size = 48, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 14h6" />
    <path d="M9 10h6" />
    <path d="M9 6h6" />
    <path d="M5 2h14l-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2 2-14 0 2-2-2-2 2-2-2-2 2-2-2-2 2-2z" />
  </svg>
);

export const SnackIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 48,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <path
      d="M8 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"
      strokeDasharray="2 2"
    />
  </svg>
);

export const TrafficIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 48,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="5" y="8" width="14" height="10" rx="3" ry="3" />
    <circle cx="8" cy="18" r="2" />
    <circle cx="16" cy="18" r="2" />
    <path d="M10 8V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
    <path d="M6 12h12" />
  </svg>
);

export const ProjectIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 48,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <path d="M4 10h16" />
    <path d="M10 4v16" />
    <circle cx="15" cy="15" r="2" />
  </svg>
);

export const PriceTagIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 48,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

export const DateIcon: React.FC<IconProps> = ({ color = "currentColor", size = 48, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

export const HandshakeIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 48,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 11l-3 3-4-4 4-4 3 3" />
    <path d="M15 11l3 3 4-4-4-4-3 3" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 14v6" />
    <path d="M9 20h6" />
  </svg>
);

export const TicketIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 48,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
    <circle cx="3" cy="12" r="3" fill="none" />
    <circle cx="21" cy="12" r="3" fill="none" />
    <line x1="12" y1="4" x2="12" y2="20" strokeDasharray="4 4" />
  </svg>
);

export const CarIcon: React.FC<IconProps> = ({ color = "currentColor", size = 48, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H9.3a2 2 0 0 0-1.6.8L5 11l-5.16.86a1 1 0 0 0-.84.99V16h3" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
  </svg>
);

export const GymIcon: React.FC<IconProps> = ({ color = "currentColor", size = 48, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 5h12" />
    <path d="M6 19h12" />
    <rect x="8" y="5" width="8" height="14" rx="2" ry="2" />
    <path d="M4 8v8" />
    <path d="M20 8v8" />
  </svg>
);

export const GavelIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 48,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M14 13l7 7" />
    <rect x="7" y="7" width="10" height="6" transform="rotate(-45 12 10)" />
    <path d="M3 20h6" />
    <path d="M6 17v3" />
  </svg>
);

export const TipJarIcon: React.FC<IconProps> = ({
  color = "currentColor",
  size = 48,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 4h8M9 4v2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2V4" />
    <circle cx="12" cy="14" r="3" />
    <path d="M12 11v6" />
  </svg>
);

export const getIconByName = (name: string) => {
  const icons: Record<string, React.FC<IconProps>> = {
    KitchenIcon,
    BillIcon,
    SnackIcon,
    TrafficIcon,
    ProjectIcon,
    PriceTagIcon,
    DateIcon,
    HandshakeIcon,
    TicketIcon,
    CarIcon,
    GymIcon,
    GavelIcon,
    TipJarIcon,
  };
  return icons[name] || KitchenIcon;
};
