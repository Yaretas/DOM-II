// Your code goes here
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
    double.addEventListener('mouseleave', (e) => {
        double.classList.remove('dbimg');
    })
})





