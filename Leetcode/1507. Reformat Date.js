var reformatDate = function (date) {
  let [datee, month, year] = date.split(" ");
  let dt = datee.match(/[0-9]+/g);
  let months = [
    { month: "Jan", key: "01" },
    { month: "Feb", key: "02" },
    { month: "Mar", key: "03" },
    { month: "Apr", key: "04" },
    { month: "May", key: "05" },
    { month: "Jun", key: "06" },
    { month: "Jul", key: "07" },
    { month: "Aug", key: "08" },
    { month: "Sep", key: "09" },
    { month: "Oct", key: "10" },
    { month: "Nov", key: "11" },
    { month: "Dec", key: "12" },
  ];

  let key = months.find((item, index) => {
    if (item.month === month) {
      return item;
    }
  });

  let k = key.key;
  return [year, "-", k, "-", dt <= 9 ? "0" + dt : dt].join("");
};
