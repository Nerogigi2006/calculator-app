
const keys = document.querySelectorAll('.key');
const display_input = document.querySelector('.display .input');
const display_output = document.querySelector('.display .output');

let input = "";

for (let key of keys) {
	const value = key.dataset.key;

	key.addEventListener('click', () => {
		if (value == "clear") {
			input = "";
			display_input.innerHTML = "";
			display_output.innerHTML = "";
		} else if (value == "backspace") {
			input = input.slice(0, -1);
			display_input.innerHTML = CleanInput(input);
		} else if (value == "=") {
			let result = eval(PerpareInput(input));

			display_output.innerHTML = CleanOutput(result);
		} else if (value == "brackets") {  //checking if the left parenthesis should be added
			if (
				input.indexOf("(") == -1 || //does not contain left parenthesis
				input.indexOf("(") != -1 && //dis contains left parenthesis
				input.indexOf(")") != -1 && 
				input.lastIndexOf("(") < input.lastIndexOf(")") // checking if the left parenthesis appears before the right parenthesis.
			) {
				input += "(";
			} else if ( //checking if the right parenthesis should be added
				input.indexOf("(") != -1 && //dis contains left parenthesis
				input.indexOf(")") == -1 || //does not contain right parenthesis
				input.indexOf("(") != -1 && //dis contains left parenthesis
				input.indexOf(")") != -1 && //dis contains right parenthesis
				input.lastIndexOf("(") > input.lastIndexOf(")")  // checking if the left parenthesis appears before the right parenthesis.
			) {
				input += ")";
			}

			display_input.innerHTML = CleanInput(input);
		} else {
			if (ValidateInput(value)) {
				input += value;
				display_input.innerHTML = CleanInput(input);
			}
		}
	})
}

function CleanInput(input) {
	let input_array = input.split("");
	let input_array_length = input_array.length;
// looping through the array if the character mathes a certain condition it turn to a html element given below
	for (let i = 0; i < input_array_length; i++) {
		if (input_array[i] == "*") {
			input_array[i] = ` <span class="operator">x</span> `;
		} else if (input_array[i] == "/") {
			input_array[i] = ` <span class="operator">÷</span> `;
		} else if (input_array[i] == "+") {
			input_array[i] = ` <span class="operator">+</span> `;
		} else if (input_array[i] == "-") {
			input_array[i] = ` <span class="operator">-</span> `;
		} else if (input_array[i] == "(") {
			input_array[i] = `<span class="brackets">(</span>`;
		} else if (input_array[i] == ")") {
			input_array[i] = `<span class="brackets">)</span>`;
		} else if (input_array[i] == "%") {
			input_array[i] = `<span class="percent">%</span>`;
		}
	}

	return input_array.join(""); // convert back to string 
}

function CleanOutput (output) {
	let output_string = output.toString();
	let decimal = output_string.split(".")[1];
	output_string = output_string.split(".")[0];

	let output_array = output_string.split("");

	if (output_array.length > 3) {
		for (let i = output_array.length - 3; i > 0; i -= 3) {
			output_array.splice(i, 0, ",");
		}
	}

	if (decimal) {
		output_array.push(".");
		output_array.push(decimal);
	}

	return output_array.join("");
}

function ValidateInput (value) {
	let last_input = input.slice(-1); 
	let operators = ["+", "-", "*", "/"];

	if (value == "." && last_input == ".") {
		return false; // checking if the person puts two decimal point
	}

	if (operators.includes(value)) { // checks if the last input is an opeerator
		if (operators.includes(last_input)) {
			return false;
		} else {
			return true;
		} 
	}

	return true;
}

function PerpareInput (input) {
	let input_array = input.split(""); //this splits the input 

	for (let i = 0; i < input_array.length; i++) {  //this find if % is there 
		if (input_array[i] == "%") {
			input_array[i] = "/100"; // should be divide by 100
		}
	}

	return input_array.join(""); // turns it back to a string
}


const sentence = "The quick brown fox jumps over the lazy dog";
const index = sentence.indexOf("fox");
console.log(index); // Output: 16

const myArray = [1, 2, 3, 4, 5];
const newArray = myArray.slice(2, 4); // returns [3, 4]
const anotherArray = myArray.slice(-1); // returns [4, 5]
console.log(anotherArray);




