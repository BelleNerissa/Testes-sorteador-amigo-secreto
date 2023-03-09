import { divide } from "./Calculadora";

describe("divida 6 por 3", () => {
  const opt = divide(6, 3);
  test("dividing 6 by 3 equals 2", () => {
    expect(opt).toBe(2);
  });
});
