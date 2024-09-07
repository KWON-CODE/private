
/* for each는 배열에 활용하려 만든 문법 */
// map함수 (메서드) vs foreach 차이
const arr = [1, 2, 3, 4, 5]


    //콜백함수가 하는 일
    // 객체(또는 배열)에서 요소를 하나 꺼낸 다음
    //매개변수로 그 요소를 전달하여 호출되는, 불리는 콜백함수
   const foreachArr = arr.forEach(function(a, b, c) {
        //매개변수 순서  첫번째(a): 데이터 두번째 (b): 인덱스 마지막 매개변수(c) : 객체 통째로
        // 매개변수는 총 3개 기본적으로 위치에 따라 넣어준다.   
      return a * 2
        
});
 console.log(arr)

 const mapArr = arr.map(function(a, b, c) {
    return a * 2

    });
    console.log(arr)

    console.log(`foreach로 return하면 ${foreachArr}
    map으로 return하면 ${mapArr}`)

    // Map과 foreach의 만남

/*let map = new Map()
map.set(7, "seven")
map.set(9, "nine")
map.set(8, "eight")

map.forEach(function(a, b, c) {
    console.log(`a : ${a}, b : ${b} c :${c}`)

}) */
