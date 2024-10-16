const SvgIcon = ({ icon, width, height }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width={width} // Optional: Set a specific size
    height={height}
    fill="#AF0A13"
  >
    <path d={icon} />
  </svg>
);

export default SvgIcon;
