const sentence = "hello there from lighthouse labs";

let t = 0;
for (const char of sentence.split("")) {
  setTimeout(() => process.stdout.write(char), t);
  t += 50;
}
