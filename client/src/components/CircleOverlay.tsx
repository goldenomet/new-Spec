import React from "react";

interface CircleOverlayProps {
  className?: string;
  size: string;
  color: string;
  opacity: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}

const CircleOverlay: React.FC<CircleOverlayProps> = ({
  className = "",
  size,
  color,
  opacity,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <div
      className={`circle-overlay ${className} ${size} bg-${color} bg-opacity-${opacity}`}
      style={{
        top: top,
        right: right,
        bottom: bottom,
        left: left,
      }}
    />
  );
};

export default CircleOverlay;
