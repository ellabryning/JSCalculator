//Set up DOM so content is viewable within the console & browser and runs passed in 'init' fun. 
window.addEventListener('DOMContentLoaded', init);

//Calculator Values
const opts = ['*', '/', '+', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']; //All keys
const spec = ['*', '/', '+', '-']; //Special function keys

function addOutput () {
    
}

function init () {

    document.title = "JS Calculator"
    console.log('ready')

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

    opts.forEach(function(val) {
        console.log(val);
        btnMaker(val, addOutput);
    });

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

};

