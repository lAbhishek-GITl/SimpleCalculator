let string = "";    // To store the current input string
let memory = 0;     // To store the memory value

// Select all elements with class 'button'
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;   // Get the innerHTML of the clicked button

        if (value === "=") {
            try {
                string = eval(string).toString();
                document.querySelector('.input').value = string;
            } catch {
                document.querySelector('.input').value = "Error";
                string = "";
            }
        } else if (value === "C") {
            string = "";
            document.querySelector('.input').value = string;
        } else if (value === ".") {
            if (!string.includes('.')) {
                string += value;
                document.querySelector('.input').value = string;
            }
        } else if (value === "M+") {
            if (string !== "") {
                memory += parseFloat(string);
                string = "";
                document.querySelector('.input').value = "";
                alert(`Memory: ${memory}`);
            }
        } else if (value === "M-") {
            if (string !== "") {
                memory -= parseFloat(string);
                string = "";
                document.querySelector('.input').value = "";
                alert(`Memory: ${memory}`);
            }
        } else {
            string += value;
            document.querySelector('.input').value = string;
        }
    });
});
