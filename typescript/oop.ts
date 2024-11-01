//일반적인 직원 정보
//멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드


class Employee { // private 이름 앞에는 언더바를 붙히는 규칙
       // 프로퍼티에 대한 선언부
        // private _empName : string;
        // private _age : number;
        // private _empJob : string;

        //생성자 메소드 규칙 - 클래스와 같은이름 - 그러나 타입스크립트에서는
        // constructor라는 메소드 사용
        // 선택적 매개변수의 주의할점 옵셔널이 시작되는 부분부터 그이하는 전부다 옵셔녈이 되어야한다.
       constructor(
        private _empName : string,
        private _age : number,
        private _empJob : string
        ){

        //프로퍼티에 대한 초기화 하는부분
        // this._empName = empName;
        // this._age = age;
        // this._empJob = empJob;
       }

       // get / set : 존재하는 이유 데이터들을 직접적으로 접근하지않고 특정메소드를 통해 출입
       // 쌍으로 만들어 줘서 출입을 하게 해준다.
       get empName(){
            return this._empName;
       }

       set empName(val : string){
            this._empName = val;
       }

    printEmp = () : void =>{
        //  console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
          console.log(this._empName + '의 나이는' + this._age + '이고, 직업은'+ this._empJob + '입니다.');
      }
      
}

//접근지정자 :public private protected 데이터접근을 제한하기위해


let employee1 = new Employee('kim', 20, '개발자');
employee1.empName = 'lee';
employee1.printEmp();



//printEmp('kim', 20, 'developer');