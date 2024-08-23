interface CeroProps {
  value: "X" | "O" | null | string;
  onCuboClick: () => void;
}

function Cero({ value, onCuboClick }: CeroProps) {
  return (
    <>
      <button type="button" className="cero" onClick={onCuboClick}>
        {value}
      </button>
    </>
  );
}
export default Cero;
