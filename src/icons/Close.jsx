export function CloseButton({ width = "50px", height = "50px", ...props }) {
  return (
    <span {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 50 50"
        fill="none"
      >
        <circle cx="25" cy="25" r="25" fill="#B9973E" />
        <rect
          x="11"
          y="34"
          width="32"
          height="8"
          rx="4"
          transform="rotate(-45 11 34)"
          fill="white"
        />
        <rect
          x="17"
          y="11"
          width="32"
          height="8"
          rx="4"
          transform="rotate(45 17 11)"
          fill="white"
        />
      </svg>
    </span>
  );
}
