export function Arrow({ width = "50px", height = "28px", ...props }) {
  return (
    <span {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 50 28"
        fill="none"
      >
        <g filter="url(#filter0_d_101_80)">
          <path
            d="M27.1642 18.6077C25.846 19.4557 24.154 19.4557 22.8358 18.6077L6.13573 7.86399C2.7789 5.70443 4.3084 0.499999 8.29989 0.499999L41.7001 0.500002C45.6916 0.500003 47.2211 5.70443 43.8643 7.86399L27.1642 18.6077Z"
            fill="#B9973E"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_101_80"
            x="0.292664"
            y="0.5"
            width="49.4147"
            height="26.7437"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.725 0 0 0 0 0.590513 0 0 0 0 0.244687 0 0 0 0.32 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_101_80"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_101_80"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </span>
  );
}
