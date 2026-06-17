import { INDICATORS } from "../../constants/indicators";

export default function IndicatorSelect({ selectedCode, onSelect }) {
  return (
    <select
      className="form-select"
      value={selectedCode}
      onChange={(e) => onSelect(e.target.value)}
    >
      {INDICATORS.map((ind) => (
        <option key={ind.code} value={ind.code}>
          {ind.label}
        </option>
      ))}
    </select>
  );
}
