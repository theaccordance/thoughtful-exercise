export const RESULT_TYPES = {
  REJECTED: "REJECTED",
  SPECIAL: "SPECIAL",
  STANDARD: "STANDARD"
};

/**
 *
 * @param width - package dimension, measured in centimeters (cm)
 * @param height - package dimension, measured in centimeters (cm)
 * @param length - package dimension, measured in centimeters (cm)
 * @param mass - package weight, measured in kilograms (kg)
 * @returns stack - which stack the package belongs in, STANDARD, SPECIAL, or REJECTED
 *
 */
export function sort(width: number, height: number, length: number, mass: number) {
  const MAX_VOLUME = 1000000; // 1,000,000 cm³

  const isBulky = [width, height, length].some((side) => side > 150) || (width * height * length >= MAX_VOLUME);
  const isHeavy = mass >= 20;

  if (isHeavy && isBulky) {
    return RESULT_TYPES.REJECTED;
  }

  if (isHeavy || isBulky) {
    return RESULT_TYPES.SPECIAL;
  }

  return RESULT_TYPES.STANDARD;
}
