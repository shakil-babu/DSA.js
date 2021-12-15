var countMatches = function (items, ruleKey, ruleValue) {
  let anst = [],
    ansc = [],
    ans = [];
  for (let item of items) {
    if (ruleKey === "type" && item[0] === ruleValue) {
      anst.push(item);
    } else if (ruleKey === "color" && item[1] === ruleValue) {
      ansc.push(item);
    } else if (ruleKey === "name" && item[2] === ruleValue) {
      ans.push(item);
    }
  }

  return ruleKey === "type"
    ? anst.length
    : ruleKey === "color"
    ? ansc.length
    : ans.length;
};
