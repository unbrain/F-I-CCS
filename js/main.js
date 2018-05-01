function writeCode(precode) {
    let Domcode = document.querySelectorAll('.code > pre')
    for(let i = 0; i < Domcode.length; i++){
        Domcode[i].innerHTML = Prism.highlight(precode[i], Prism.languages.css, 'css')
    }
}
   
let code = []
code[0] = `
.heart{
    height: 70px;
    width: 140px;
    background: rgba(255, 0, 0, 0.2);
    border-radius: 140px 0px 0px 140px;
    transform: translate(32%, 0%) rotate(45deg);
}
.heart:nth-child(2){
    transform: translate(-32%, 0%) rotate(135deg);
}`
code[1] = `
.heartShape {
    width: 100px;
    height: 100px;
    background: rgba(255, 0, 0, 0.2);
    transform: rotate(45deg);
}
.heartShape:before, 
.heartShape:after{
    content: '';
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(255, 0, 0, 0.2);
    transform: translate(-50%,0%);
    display: block;
}

.heartShape:after{
    transform: translate(0%,-150%);
}`

writeCode(code)