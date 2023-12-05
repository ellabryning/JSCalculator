window.addEventListener('DOMContentLoaded', init);

//Values
const opts = ['*', '/', '+', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; //All keys
const spec = ['*', '/', '+', '-']; //Special function keys


function init () {

    document.title = "JS Calculator"
    let dec = false; 
    let eva = false; 

    //Document Styling
    const container = document.createElement('div');
    container.classList.add('container');

    const styleContainer = container.style;
    styleContainer.maxWidth = '600px';
    styleContainer.margin = 'auto';

    document.body.appendChild(container);

    const output = document.createElement('input');
    output.setAttribute('type', 'text');
    output.classList.add('output');

    const styleOutput = output.style;
    styleOutput.maxWidth = '100%';
    styleOutput.margin = '1%';
    styleOutput.lineHeight = '50px';
    styleOutput.fontSize = '3em';
    styleOutput.textAlign = 'right';

    container.appendChild(output);

    const main = document.createElement('div');
    main.classList.add('main');
    const styleMain = main.style;
    styleMain.width = '100%';
    container.appendChild(main);

    //Create Keys & Functionality 
    opts.forEach(function(val) {
        //console.log(val);
        btnMaker(val, addOutput);
    });

    btnMaker('=', evalOutput);
    btnMaker('C', clearOutput);

    function colourOutput (v) {
        styleOutput.border = v + '1px solid';
        styleOutput.color = v;
    };

    function evalOutput () {
        colourOutput('black');
        console.log('=');

        if(output.value==="") {
            colourOutput('red');
        } else if(eva) {
            colourOutput('red');
        } else {
            output.value = eval(output.value);
        }
        dec = output.value.includes('.');
    };

    function clearOutput () {
        colourOutput('black');
        output.value = "";
    };

    function btnMaker (txt, myFunction) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
    
        const styleBtn = btn.style;
        styleBtn.width = '23%';
        styleBtn.lineHeight = '250%';
        styleBtn.margin = '1%';
        styleBtn.fontSize = '2em';
    
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);
    
        main.appendChild(btn);
    };

    function addOutput (e) {
        colourOutput('black');
        let char = e.target.val;

        if(char == ".") {
            if(dec) {
                char = "";
                colourOutput('red');
            } else {
               dec = true;
            }
        };

        eva = spec.includes(char);
        if(eva) {
            dec = false;
        };

        output.value += char;
    };
};

