interface IProps {
  x: number;
  style?: React.CSSProperties;
  className?: string;
  size?: number;
}
export const Gold = ({ x, className, style, size = 14 }: IProps) => {
  return (
    <div className={className} style={style}>
      <img
        className="inline  mr-0.5"
        src="gold.png"
        width={size}
        alt="gold-img"
      />
      {x}
    </div>
  );
};
