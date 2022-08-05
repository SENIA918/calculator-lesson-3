let wrapper = document.createElement('div');
	wrapper.className ='wrapper'
	document.body.appendChild(wrapper);

let divWindow = document.createElement('div');
	divWindow.className ='divWindow'
	wrapper.prepend(divWindow);
	
let windowsWrapper = document.createElement('div');
	windowsWrapper.className ='windowsWrapper'
	wrapper.prepend(windowsWrapper);

let inputWindowRes = document.createElement('div');
	inputWindowRes.className ='inputWindowRes'
	windowsWrapper.append(inputWindowRes);

let inputWindow = document.createElement('div');
	inputWindow.className ='inputWindow'
	windowsWrapper.append(inputWindow);

let firstNumber = '';
let secondNumber = '';
let sign = '';

let arr = ['AC','DEL','/', '1', '2', '3', '*', '4', '5', '6', '+', '7', '8', '9', '-', '.', '0', '=' ];
	for (let i = 0; i < arr.length; i++) {
		let button = document.createElement('button');

	button.innerHTML = arr[i]
	divWindow.append(button); 

	button.addEventListener('click', () => {
		 operate(arr[i]);

	})
}

function operate(value) {
	if (value === 'DEL') {
		inputWindow.innerHTML = '';
		inputWindowRes.innerHTML = '';
		firstNumber = '';
		secondNumber = '';
		sign = '';
		return;
	}
	if(value === 'AC'){
		inputWindow.innerText = inputWindow.innerHTML.slice(0, -1);
		return;
	}
	if (value === '1'|| value === '2'|| value === '3'|| value === '4'|| value === '5' || value === '6'|| value === '7'|| value === '8'|| value === '9'|| value === '0'|| value === '.'){
		if(sign === '-'){
			inputWindow.innerText += value;
			firstNumber = inputWindow.innerText;
			console.log(firstNumber);	
		return;
		}
		else if(sign === ''&& secondNumber ===''){
			inputWindow.innerText += value;
			firstNumber = inputWindow.innerText;
			console.log(firstNumber);	
		return;
		}
		else if(firstNumber!==''&& sign!==''){
			inputWindow.innerText = value;
			secondNumber += inputWindow.innerText;
			console.log(secondNumber);	
			
	 }
	}
		 if(value === '+'||value === '-'||value === '*'||value === '/'){
			if(secondNumber ===''){
				inputWindow.innerText = value;
				sign = inputWindow.innerText;
				console.log(sign);	
	 		}
		}
		 if(value==='='){
			
			switch (sign){
				case'+':
					firstNumber = Number(firstNumber) + Number(secondNumber);
					secondNumber='';
					sign='';
					inputWindowRes.innerHTML=firstNumber;
					console.log(firstNumber);
					console.log(sign);
					console.log(secondNumber);
					break;
				case '-':
					firstNumber = Number(firstNumber) - Number(secondNumber);
					secondNumber='';
					sign='';
					inputWindowRes.innerHTML=firstNumber;
					break;
				case '*':
					firstNumber = Number(firstNumber) * Number(secondNumber);
					secondNumber='';
					sign='';
					inputWindowRes.innerHTML=firstNumber;
					break;
				case '/':
					if(secondNumber === '0') {

					inputWindowRes.innerHTML = 'Ошибка';
					firstNumber = '';
					secondNumber = '';
					sign = '';
					return;
					}
					firstNumber = Number(firstNumber) / Number(secondNumber);
					secondNumber='';
					sign='';
					inputWindowRes.innerHTML=firstNumber;
					break;
				}	
			}
		}
	
	 	
	

		
				
			

















		



/*let firstNumber = '';//first number
let secondNumber = '';//second number
let sign = '';//знак операции
let finish = 'false';
const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const action = ['+','-','*','/'];

//экран
const out = document.querySelector('.calc-screen p');

function clearAll () {
	firstNumber = '';//first number and result
	secondNumber = '';//second number
	sign = '';//знак
	inputWindow.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;



document.querySelector('.buttons').onclick = (event)=>{
	//нажата не кнопка
	if(!event.target.classList.contains('btn'))return;
	//нажата кнопка clearAll ac
	if(event.target.classList.contains('ac'))return;
}
inputWindow.textContent = '';
	const key = event.target.textContent;

	//если нажата клавиша 0-9или .
	if(digit.includes(key)){
		if(secondNumber ==='' && sign === ''){
			firstNumber+=key;
			inputWindow.textContent = firstNumber;
		}
		else if(firstNumber!=='' && secondNumber!=='' && finish){
			secondNumber = key;
			finish = false;
			inputWindow.textContent = secondNumber; 
	}
	else {
		secondNumber += key;
		inputWindow.textContent = secondNumber;
		return;
	}
	
	//если нажата кдавиша   +,-,*,
	if (action.includes(key)){
		sign = key;
		inputWindow.textContent = sign;
		return;
}
if(key === '='){
	if(secondNumber === ''){
		secondNumber = firstNumber;
	}
	switch (sign){
			case'+':
			firstNumber = (+firstNumber) + (+secondNumber);
				break;
			case '-':
				firstNumber = (+firstNumber) - (+secondNumber);
				break;
			case '*':
				firstNumber = (+firstNumber) * (+secondNumber);
				break;
			case '/':
				if(secondNumber === '0') {
					out.content = 'Ошибка';
					firstNumber = '';
					secondNumber = '';
					sign = '';
					return;
				}

				firstNumber = (+firstNumber) / (+secondNumber);
				break;
	}
	finish = true;
	inputWindow.textContent = firstNumber;
}
	}
*/









