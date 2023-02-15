const squares = document.getElementsByClassName("square");
const allElements = document.querySelectorAll("div");
const squareStats = document.querySelector("#stats");
const squareDistance = {
  distance: 0,
  progress: "0%",
};

// anime({
//   targets: squareDistance,
//   distance: 300,
//   progress: "100%",
//   update: function () {
//     squareStats.innerHTML = JSON.stringify(squareDistance);
//   },
//   round: 1,
//   easing: "linear",
// });

// anime({
//   targets: ".square",
//   left: 300,
// });

anime({
  targets: "input",
  value: [0, 5, 0],
  round: 1,
  easing: "linear",
  duration: 3000,
});

// export function animation(element) {
//     anime({
//         targets: element,
//         left: 300
//     })
// }

// anime({
//   targets: allElements,
//   left: 300,
//   opacity: 0.5,
//   height: 50,
//   borderRadius: 0,
// });

// anime({
//   targets: allElements,
//   left: 300,
//   rotate: 50,
//   scale: 0.5,
//   translateY: 100,
//   opacity: 0.5,
// });

// allElements.forEach((element, index) => {
//   anime({
//     targets: element,
//     left: 300 + index * 50,
//   });
// });

// anime({
//   targets: allElements,
//   left: 300,
// });

// anime({
//   targets: squares,
//   borderRadius: 50,
// });

// anime({
//   targets: ".circle",
//   borderRadius: 0,
// });
