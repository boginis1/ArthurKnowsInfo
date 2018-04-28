let todayArray = [];
let weekArray = [];
class CalendarActivities {

  today = (arr) => {
    todayArray = arr;
  }

  week = (arr) => {
    weekArray = arr;
  }

  getToday = () => {
    return todayArray;
  }

  getWeek = () => {
    return weekArray;
  }
}

export default new CalendarActivities();