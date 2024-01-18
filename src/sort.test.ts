import { RESULT_TYPES, sort} from "./sort";

describe("Thoughtful Exercise Tests", () => {
  it("Returns STANDARD if package is not heavy or bulky", () => {
    const result = sort(10, 10, 10, 10);
    expect(result).toEqual(RESULT_TYPES.STANDARD);
  });

  it("Returns SPECIAL if package is heavy but not bulky", () => {
    const result = sort(10, 10, 10, 160);
    expect(result).toEqual(RESULT_TYPES.SPECIAL);
  });

  it("Returns SPECIAL if package is bulky (one side greater than 150cm) but not heavy", () => {
    const result = sort(160, 10, 10, 10);
    expect(result).toEqual(RESULT_TYPES.SPECIAL);
  });

  it("Returns SPECIAL if package is bulky (volume >= 1,000,000 cm³) but not heavy", () => {
    const result = sort(100, 100, 100, 10);
    expect(result).toEqual(RESULT_TYPES.SPECIAL);
  });

  it("Returns REJECTED if package is bulky and heavy", () => {
    const result = sort(160, 10, 10, 200);
    expect(result).toEqual(RESULT_TYPES.REJECTED);
  });
})
