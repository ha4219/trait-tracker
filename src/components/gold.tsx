interface IProps {
  x: number;
  style?: React.CSSProperties;
  className?: string;
}
export const Gold = ({ x, className, style }: IProps) => {
  return (
    <div className={className} style={style}>
      <img className="inline w-[14px] mr-0.5" src="/gold.png" />
      {x}
    </div>
  );
};
