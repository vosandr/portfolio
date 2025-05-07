interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const defaultWidth = 3;
const defaultHeight = 50;

export default function({ className = '', width = defaultWidth, height = defaultHeight }: Props) {
  return (
    <div data-svg-wrapper className={`arrow-icon ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${defaultWidth} ${defaultHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="4" height="150" fill="#9D7060" />
      </svg>
    </div>
  );
}