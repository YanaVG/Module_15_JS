/*Создать две кнопки в HTML: start и stop.
Создать класс Timer с полями startTime, stopTime и interval. Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.
Для класса Timer создать методы start и stop, getTime.
Создать экземпляр класса Timer, пусть он называется stopwatch.
При нажатии на кнопку start, метод stopwatch.start сохраняет момент нажатия в свойство startTime.
При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval. А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.
Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года. */
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const controls = document.querySelector('.lang-ctrls__body');
const buttons = Array.from(document.querySelectorAll('button'));

class Timer{
	constructor(startTime = 0, stopTime = 0, interval = 0){
     this.startTime = startTime;
     this.stopTime = stopTime;
     this.interval = interval;
	}
	show(){
		console.log(`startTime: ${this.startTime}, stopTime: ${this.stopTime}, Interval: ${this.interval}`);
	}
	start(){
     this.startTime = new Date();
	}
	stop(){
     this.stopTime = new Date();
     this.interval = this.stopTime - this.startTime;
	}
	getTime(){
    return console.log(`Interval: ${this.interval} ms`);
	}
	static timeToNY(){
		let today = new Date();
		let endFullYear = today.getFullYear();
		let endYear = new Date(endFullYear, 11, 31, 23, 59, 59, 999);
		let msTime = endYear.getTime() - today.getTime();
		let days = parseInt(msTime / (1000 * 60 * 60 *24));
    console.log(`До Нового Року залишилось ${days} днів`);
	}
};

Timer.timeToNY();


let timer1 = new Timer(100, 150, 50);
timer1.show();
let timer2 = new Timer(30, 50, 20);
timer2.show();

let stopwatch = new Timer();

function startTime() {
	if(!startBtn.classList.contains("lang-ctrls__btn--active")){
    stopwatch.start();
	}
};

function stopTime(){
   if(!stopBtn.classList.contains("lang-ctrls__btn--active")){
    stopwatch.stop();
    stopwatch.getTime();
	}
};

function setActiveBtn(e){
  buttons.map(elem => elem.classList.remove("lang-ctrls__btn--active"));
  let elem = e.target;
  if(e.target.classList.contains("material-icons")){
   elem =  elem.parentNode;
  }
  if(!elem.classList.contains("lang-ctrls__btn")){
    return false;
  }
  elem.classList.add("lang-ctrls__btn--active");
  };
  
startBtn.addEventListener('click', startTime);
stopBtn.addEventListener('click', stopTime);
controls.addEventListener('click', setActiveBtn);