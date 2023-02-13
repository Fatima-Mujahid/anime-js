import anime from "animejs";

const squares = document.getElementsByClassName("square");
const allElements = document.querySelectorAll("div");

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

anime({
  targets: allElements,
  left: 300,
});

anime({
  targets: squares,
  borderRadius: 50,
});

anime({
  targets: ".circle",
  borderRadius: 0,
});
