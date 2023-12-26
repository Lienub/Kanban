import {
  calculateWorkDays,
  calculateBusinessDays,
  getCurrentDate,
} from "../dateUtils";

describe("Test Date Utils functions", () => {
  describe("calculateWorkDays", () => {
    test("calculates work days between two dates", () => {
      const startDate = "2023-01-01";
      const endDate = "2023-01-10";

      const result = calculateWorkDays(startDate, endDate);
      // Expecting 7 workdays between Jan 1 and Jan 10, excluding Sunday
      expect(result).toBe(8);
    });
  });

  describe("calculateBusinessDays", () => {
    test("calculates business days between two dates excluding weekends and holidays", () => {
      const startDate = "2023-04-08";
      const endDate = "2023-04-18";

      const result = calculateBusinessDays(startDate, endDate);
      // Expecting 6 business days between Ap 08 and Ap 18, excluding weekends and holidays
      expect(result).toBe(6);
    });

    test("calculates business days considering the provided start and end dates", () => {
      const startDate = "2023-01-01";
      const endDate = "2023-01-31";

      const result = calculateBusinessDays(startDate, endDate);

      // Expecting 22 business days between Jan 1 and Jan 31, excluding weekends and holidays
      expect(result).toBe(22);
    });
  });

  describe("getCurrentDate", () => {
    test('returns the current date in "YYYY-MM-DD" format', () => {
      // Create a fake timer and set it to '2023-01-01'
      jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));
      const result = getCurrentDate();

      // Mocked date is '2023-01-01'
      expect(result).toBe("2023-01-01");
    });
  });
});
