interface Props {
  setMinOrMaxFilterAmtVal: (val: number) => void;
  maxMin: {
    max: number;
    min: number;
  };
}

const Range = ({ maxMin, setMinOrMaxFilterAmtVal }: Props) => {
  return (
    <>
      <input
        type="range"
        max={maxMin.max + 100}
        min={maxMin.min}
        onChange={(e) => {
          setMinOrMaxFilterAmtVal(parseInt(e.target.value));
        }}
      />
    </>
  );
};

export default Range;
