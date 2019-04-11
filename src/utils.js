import moment from "moment";

export const getMonthsData = () => {
  return Array.from({ length: 12 }, (v, i) => {
    const monthNumber = i + 1;
    const startingDayOfWeek = parseInt(
      moment(`${monthNumber}-1-2019`)
        .startOf("month")
        .format("e")
    );
    const numberOfDays = moment(`${monthNumber}-1-2019`).daysInMonth();
    const numberOfItems = startingDayOfWeek + numberOfDays > 35 ? 42 : 35;
    const days = Array.from({ length: numberOfItems }, (v, i) => {
      const number = i - startingDayOfWeek + 1;
      return {
        counter: 0,
        id: `${monthNumber}-${number}`,
        number: number > 0 && number <= numberOfDays ? number : 0,
        reminders: [],
      };
    });
    return {
      number: monthNumber,
      name: moment(`${monthNumber}-1-2019`).format("MMMM"),
      days
    };
  });
};
