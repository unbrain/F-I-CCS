function writeCode(precode) {
    let Domcode = document.querySelectorAll('.code > pre')
    for (let i = 0; i < Domcode.length; i++) {
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
code[3] = `
.alphabetc {
    width: 100px;
    height: 140px;
    border-radius: 50%; 
    border: 1em solid rgba(255, 0, 0, 0.2);
}
.alphabetc::after {
    content: '';
    width: 100px;
    height: 50px;
    transform: translate(60%, 59%);
    background: #fff;
    display: block;
}`
code[4] = `
.scalediv{
    width: 140px;
    height: 140px;
    background:rgba(255, 0, 0, 0.2);
    animation: scale 1s infinite ease-in-out;
}
@keyframes scale {
  0% {
            transform: scale(1);
    opacity: 1; }
  45% {
            transform: scale(0.1);
    opacity: 0.7; }
  80% {
            transform: scale(1);
    opacity: 1; } 
}`
code[5] = `
@keyframes scale {
  0% {
    transform: scale(1);
    opacity: 1; }
  45% {
    transform: scale(0.1);
    opacity: 0.7; }
  80% {
    transform: scale(1);
    opacity: 1; } }

.ball-pulse > div:nth-child(0) {
  animation: scale 0.75s -0.36s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.ball-pulse > div:nth-child(1) {
  animation: scale 0.75s -0.24s infinite }

.ball-pulse > div:nth-child(2) {
  animation: scale 0.75s -0.12s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.ball-pulse > div:nth-child(3) {
  animation: scale 0.75s 0s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08); }

.ball-pulse > div {
  background-color: rgba(255, 0, 0, 0.2);
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 0.5em;
  animation-fill-mode: both;
  display: inline-block; }`
code[6] = `
@keyframes square-spin {
  25% {
    transform: perspective(100px) rotateX(180deg) rotateY(0);
  }
  50% {
    transform: perspective(100px) rotateX(180deg) rotateY(180deg);
  }
  75% {
    transform: perspective(100px) rotateX(0) rotateY(180deg);
  }
  100% {
    transform: perspective(100px) rotateX(0) rotateY(0);
  }
}

.square-spin {
    width: 100px;
    height: 100px;
    background: rgba(255, 0, 0, 0.2);
    animation: square-spin 3s 0s cubic-bezier(.09,.57,.49,.9) infinite;
}`
writeCode(code)