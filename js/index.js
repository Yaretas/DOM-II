// Your code goes here
// show an alert when page is fully leaded
window.addEventListener('load', e =>{
    alert(`Page has loaded`);
    console.log(`window is selected`);
})

// Fun Bus Logo hover effect
const logo = document.querySelector('h1');

logo.addEventListener('mouseenter', (e) => {
    logo.classList.add('aLogo');
})
logo.addEventListener('mouseleave', (e) => {
    logo.classList.remove('aLogo');
})

// a tags click effect and alert showing
const a = document.querySelectorAll('.nav a');
console.log(a);
a.forEach(anchor => {
    anchor.addEventListener('mouseover', (e) => {
        // console.log(a);
        anchor.classList.add('aNav');
    })

    anchor.addEventListener('mouseleave', (e) => {
        anchor.classList.remove('aNav');
    })

    anchor.addEventListener('click', (e) => {
        alert(`Sorry, page is missing :(`);
    })
    
    anchor.addEventListener('click', e => e.preventDefault());
})

// add shadow to images when dbclick...
const imgdb = document.querySelectorAll('img');

imgdb.forEach(double =>{
    double.addEventListener('dblclick', (e) => {
        double.classList.add('dbimg');
    })
    double.addEventListener('click', (e) => {
        double.classList.remove('dbimg');
    })
})

// rotating text
const rotateP = document.querySelectorAll('.content-pick p');

rotateP.forEach(element =>{
    element.addEventListener('mouseup', (e) => {
        element.classList.add('pSelect');
    })
    console.log(`this element is being selected`);
    element.addEventListener('mousedown', (e) =>{
        element.classList.remove('pSelect');
    })
})


// drag btn
const btn = document.querySelectorAll('.btn');

btn.forEach(button => {
    button.addEventListener('drag', (e =>{
        e.target.style.background = '#EE6055';
        e.target.style.color = '#FFD97D';
    }))
})

// change color on keydown
const press = document.querySelectorAll('p');
press.forEach(key =>{
    key.addEventListener('keypress', (e) =>{
        key.target.style.color = '#FFD97D';
    })
})

