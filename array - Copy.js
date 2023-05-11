const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

for (let i = 0; i < 3; i++) {
  const index = i + 1;
  let suffix = "";
  
  if (index === 1) {
    suffix = o[1];
  } else if (index === 2) {
    suffix = o[2];
  } else if (index === 3) {
    suffix = o[3];
  } else {
    suffix = o[0];
  }
  
  console.log(`${index}${suffix} choice is ${colors[i]}.`);
}
