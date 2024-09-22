export const getRandomInt = (min: number, max: number) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

export const getPastDate = (minPastHours: number, maxPastHours: number) => {
  const date = new Date();
  const randomInt = getRandomInt(minPastHours, maxPastHours);
  date.setHours(date.getHours() - randomInt);
  return date;
};

export const formatDate = (inputDate: Date) => {
  const date = new Date(inputDate);
  const today = new Date();

  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.floor((today.getTime() - date.getTime()) / oneDay);

  const timeString = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  if (diffDays === 0) {
    return timeString;
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays === 2) {
    return "Two days ago";
  } else {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
};
