import Range from "./Range";

interface Props {
  maxMin: {
    max: number;
    min: number;
  };
  setMinFilterAmtVal: (val: number) => void;
  setMaxFilterAmtVal: (val: number) => void;
  minFilterAmtVal: number;
  maxFilterAmtVal: number;
}

const RangeInput = ({
  maxFilterAmtVal,
  maxMin,
  minFilterAmtVal,
  setMaxFilterAmtVal,
  setMinFilterAmtVal,
}: Props) => {
  const setMaxFilterAmtValWithMinimum = (val: number) => {
    if (val >= minFilterAmtVal) {
      setMaxFilterAmtVal(val);
    }
  };

  return (
    <>
      {maxMin.min !== 0 && maxMin.min}
      <div className="flex flex-col items-center">
        <Range maxMin={maxMin} setMinOrMaxFilterAmtVal={setMinFilterAmtVal} />
        <p>{minFilterAmtVal}</p>
      </div>
      <div className="flex flex-col items-center">
        <Range
          maxMin={maxMin}
          setMinOrMaxFilterAmtVal={setMaxFilterAmtValWithMinimum}
        />
        <p>{maxFilterAmtVal}</p>
      </div>
      {maxMin.max !== 0 && maxMin.max}
    </>
  );
};

export default RangeInput;
