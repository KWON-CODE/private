var figlet = require("figlet");

figlet("KWON", function (err, data) {
 // 익명의 함수를 쓰는 이유 = 이삼수를 쓸 일이 다른데는 없어서
 // figlet 만든 사람이, 매개변수로 함수를 받기로 해서.  
  
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});