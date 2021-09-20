const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(l1, l2) {
  const combined = [];
  for (let i = 0; i < list1.length; i++) {
    combined.push(l1[i], l2[i]);
  }
  return combined;
}
console.log(zipList(list1, list2));

function zipListTheSimpleWay(l1, l2) {
  return _.flatten(_.zip(l1, l2));
}
console.log(zipListTheSimpleWay(list1, list2));
