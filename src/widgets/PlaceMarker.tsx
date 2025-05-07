interface Props {
  className?: string;
}

export default function ({className}: Props) {
  return (
    <span data-svg-wrapper className={className}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.80317 19.3518C5.38299 15.9316 5.38299 10.3781 8.80317 6.95801C12.2233 3.53784 17.7768 3.53784 21.1969 6.95801C24.6171 10.3782 24.6171 15.9316 21.1969 19.3518L15 25.609L8.80317 19.3518ZM15 9.46466C17.0364 9.46466 18.6901 11.1183 18.6901 13.1547C18.6901 15.1911 17.0364 16.8448 15 16.8448C12.9637 16.8448 11.31 15.1911 11.31 13.1547C11.31 11.1183 12.9637 9.46466 15 9.46466Z"
          fill="white"
        />
      </svg>
    </span>
  )
}
