const sentence = "hello there from lighthouse labs";
let delay = 0;

for (const index in sentence) {
  setTimeout(()=>{
    index === sentence.length - 1 ? console.log(sentence[index]) : process.stdout.write(sentence[index]);
  }, delay);
  delay += 50;
}

// const slowPrint = (info, i) => {
//   if (i === info.length) return process.stdout.write("\n");

//   setTimeout(() => {
//     process.stdout.write(info[i]);
//     slowPrint(info, i + 1);
//   }, 50);
// };

// slowPrint("hello there from lighthouse labs", 0);
