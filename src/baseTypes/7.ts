enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: WeekDays): boolean => {
  return day === WeekDays.Saturday || day === WeekDays.Sunday;
};

isWeekend(WeekDays.Monday);
isWeekend(WeekDays.Sunday);
