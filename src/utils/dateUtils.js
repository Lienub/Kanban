const publicHolidays = [
  { name: "New Year's Day", date: "2023-01-01" },
  { name: "Easter Monday", date: "2023-04-10" },
  { name: "Labour Day", date: "2023-05-01" },
  { name: "Victory in Europe Day", date: "2023-05-08" },
  { name: "Ascension Day", date: "2023-05-25" },
  { name: "Whit Monday", date: "2023-06-05" },
  { name: "Bastille Day", date: "2023-07-14" },
  { name: "Assumption of Mary", date: "2023-08-15" },
  { name: "All Saints' Day", date: "2023-11-01" },
  { name: "Armistice Day", date: "2023-11-11" },
  { name: "Christmas Day", date: "2023-12-25" },
];
/**
 * This function to calculate working days between two dates
 *
 * @param {string} startDate
 * @param {string} endDate
 * @returns {number}
 */
export function calculateWorkDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let count = 0;

  while (start <= end) {
    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeek = start.getDay();
    // Check if the day is a weekday (Monday to Friday)
    if (dayOfWeek >= 1 && dayOfWeek <= 6) {
      count++;
    }

    start.setDate(start.getDate() + 1);
  }

  return count;
}

/**
 * This function calculates the number of days between two business
 * day dates (excluding weekends and punlic holidays)
 *
 * @param {string} startDate
 * @param {string} endDate
 *
 * @returns {number}
 */
export function calculateBusinessDays(startDate, endDate) {
  startDate = (startDate == "") ? getCurrentDate() : startDate;
  endDate = (endDate == "") ? getCurrentDate() : endDate;
  const start = new Date(startDate);
  const end = new Date(endDate);
  let count = 0;

  while (start <= end) {
    const dayOfWeek = start.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const holidays = publicHolidays.map((holiday) => holiday.date);
    const isHoliday = holidays.includes(formatDate(start));

    if (!isWeekend && !isHoliday) {
      count++;
    }

    start.setDate(start.getDate() + 1);
  }

  return count;
}
/**
 * This function formats a date as "YYYY-MM-DD".
 *
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date.
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
/** 
 * This function returns the current date as "YYYY-MM-DD"
 * 
 * @returns {string}
 */
export function getCurrentDate() {
  var today = new Date();
  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);

  // Format the date as YYYY-MM-DD
  var formattedDate = year + '-' + month + '-' + day;
  return formattedDate;
}
