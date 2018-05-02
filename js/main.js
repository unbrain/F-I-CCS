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

code[2] = `
@keyframes bouncing-loader {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0.1;
    transform: translateY(-1rem);
  }
}
.bouncing-loader{
    display: flex;
}
.bouncing-loader > div{
    width: 1rem;
    height: 1rem;
    margin: 3rem 0.2rem;
    background: rgba(255, 0, 0, 0.2);;
    border-radius: 50%;
    animation: bouncing-loader 0.6s infinite alternate;
}

.bouncing-loader > div:nth-child(2){
    animation-delay: 0.2s;
}
.bouncing-loader > div:nth-child(3){
    animation-delay: 0.4s;
}`
code[3]=`
.alphabetc {
    width: 100px;
    height: 140px;
    border-radius: 50%; 
    border: 1em solid rgba(255, 0, 0, 0.2);
}
.alphabetc::after {
    content: '';
    width: 100px;
    height: 100px;
    transform: translate(60%, 0%) rotate(45deg);
    background: #fff;
    display: block;
}`

writeCode(code)