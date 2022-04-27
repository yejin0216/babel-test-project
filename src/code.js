const element = <div style='font-weight:bold'>babel test</div>;
const text = `element type is ${element.type}...`;
const add = (a, b) => a + b;

// const element = /*#__PURE__*/ React.createElement(
//   'div',
//   {
//     style: 'font-weight:bold',
//   },
//   'babel test',
// );
// const text = 'element type is '.concat(element.type, '...');

// const add = function (a, b) {
//   return a + b;
// }; // after compilation
