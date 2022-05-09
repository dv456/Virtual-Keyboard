const body= document.body;

textarea=document.createElement('textarea');
textarea.className='textarea';
body.append(textarea);

const container=document.createElement('div');
container.className='container';
body.append(container);

const keyboard_wrapp=document.createElement('div');
keyboard_wrapp.className='keyboard_wrapp';
container.append(keyboard_wrapp);

const keyboard_keys=document.createElement('div');
keyboard_keys.className='keyboard_keys';
keyboard_wrapp.append(keyboard_keys);

const row1 = document.createElement('div');
row1.className='row';
keyboard_keys.append(row1);

const row2 = document.createElement('div');
row2.className='row';
keyboard_keys.append(row2);

const row3 = document.createElement('div');
row3.className='row';
keyboard_keys.append(row3);

const row4 = document.createElement('div');
row4.className='row';
keyboard_keys.append(row4);

const row5 = document.createElement('div');
row5.className='row';
keyboard_keys.append(row5);

//////keys1
const a1 = document.createElement('div');
a1.className='keys';
a1.innerText='`';
row1.append(a1);

const a2 = document.createElement('div');
a2.className='keys';
a2.innerText='1';
row1.append(a2);

const a3 = document.createElement('div');
a3.className='keys';
a3.innerText='2';
row1.append(a3);

const a4 = document.createElement('div');
a4.className='keys';
a4.innerText='3';
row1.append(a4);

const a5 = document.createElement('div');
a5.className='keys';
a5.innerText='4';
row1.append(a5);

const a6 = document.createElement('div');
a6.className='keys';
a6.innerText='5';
row1.append(a6);

const a7 = document.createElement('div');
a7.className='keys';
a7.innerText='6';
row1.append(a7);

const a8 = document.createElement('div');
a8.className='keys';
a8.innerText='7';
row1.append(a8);

const a9= document.createElement('div');
a9.className='keys';
a9.innerText='8';
row1.append(a9);

const a10= document.createElement('div');
a10.className='keys';
a10.innerText='9';
row1.append(a10);

const a11= document.createElement('div');
a11.className='keys';
a11.innerText='0';
row1.append(a11);

const a12= document.createElement('div');
a12.className='keys';
a12.innerText='-';
row1.append(a12);

const a13= document.createElement('div');
a13.className='keys';
a13.innerText='=';
row1.append(a13);

const backspace= document.createElement('div');
backspace.className='keys backspace';
backspace.innerText='Backspace';
row1.append(backspace);

//////keys2
const tab= document.createElement('div');
tab.className='keys tab';
tab.innerText='Tab';
row2.append(tab);

const q= document.createElement('div');
q.className='keys';
q.innerText='Q';
row2.append(q);

const w= document.createElement('div');
w.className='keys';
w.innerText='W';
row2.append(w);

const e= document.createElement('div');
e.className='keys';
e.innerText='E';
row2.append(e);

const r= document.createElement('div');
r.className='keys';
r.innerText='R';
row2.append(r);

const t= document.createElement('div');
t.className='keys';
t.innerText='T';
row2.append(t);

const y= document.createElement('div');
y.className='keys';
y.innerText='Y';
row2.append(y);

const u= document.createElement('div');
u.className='keys';
u.innerText='U';
row2.append(u);

const i= document.createElement('div');
i.className='keys';
i.innerText='I';
row2.append(i);

const o= document.createElement('div');
o.className='keys';
o.innerText='O';
row2.append(o);

const p= document.createElement('div');
p.className='keys';
p.innerText='P';
row2.append(p);

const b1= document.createElement('div');
b1.className='keys';
b1.innerText='[';
row2.append(b1);

const b2= document.createElement('div');
b2.className='keys';
b2.innerText=']';
row2.append(b2);

const b3= document.createElement('div');
b3.className='keys';
b3.innerText='\\';
row2.append(b3);

// const del= document.createElement('div');
// del.className='keys del';
// del.innerText='Del';
// row2.append(del);

//////keys3
const caps= document.createElement('div');
caps.className='keys caps';
caps.innerText='CapsLk';
row3.append(caps);

const a= document.createElement('div');
a.className='keys';
a.innerText='A';
row3.append(a);

const s= document.createElement('div');
s.className='keys';
s.innerText='S';
row3.append(s);

const d= document.createElement('div');
d.className='keys';
d.innerText='D';
row3.append(d);

const f= document.createElement('div');
f.className='keys';
f.innerText='F';
row3.append(f);

const g= document.createElement('div');
g.className='keys';
g.innerText='G';
row3.append(g);

const h= document.createElement('div');
h.className='keys';
h.innerText='H';
row3.append(h);

const j= document.createElement('div');
j.className='keys';
j.innerText='J';
row3.append(j);

const k= document.createElement('div');
k.className='keys';
k.innerText='K';
row3.append(k);

const l= document.createElement('div');
l.className='keys';
l.innerText='L';
row3.append(l);

const c1= document.createElement('div');
c1.className='keys';
c1.innerText=';';
row3.append(c1);

const c2= document.createElement('div');
c2.className='keys';
c2.innerText=' \' ';
row3.append(c2);

const enter= document.createElement('div');
enter.className='keys enter_key';
enter.innerText='Enter';
row3.append(enter);

//////keys4
const leftShift= document.createElement('div');
leftShift.className='keys shift_key shift_left';
leftShift.innerText='Shift';
row4.append(leftShift);

const z= document.createElement('div');
z.className='keys';
z.innerText='Z';
row4.append(z);

const x= document.createElement('div');
x.className='keys';
x.innerText='X';
row4.append(x);

const c= document.createElement('div');
c.className='keys';
c.innerText='C';
row4.append(c);

const v= document.createElement('div');
v.className='keys';
v.innerText='V';
row4.append(v);

const b= document.createElement('div');
b.className='keys';
b.innerText='B';
row4.append(b);

const n= document.createElement('div');
n.className='keys';
n.innerText='N';
row4.append(n);

const m= document.createElement('div');
m.className='keys';
m.innerText='M';
row4.append(m);

const d1= document.createElement('div');
d1.className='keys';
d1.innerText=',';
row4.append(d1);

const d2= document.createElement('div');
d2.className='keys';
d2.innerText='.';
row4.append(d2);

const d3= document.createElement('div');
d3.className='keys';
d3.innerText='/';
row4.append(d3);

const arrowUp= document.createElement('div');
arrowUp.className='keys arrowup_keys';
arrowUp.innerHTML='&#8593';
row4.append(arrowUp);

const rightShift= document.createElement('div');
rightShift.className='keys shift_key shift_right';
rightShift.innerText='Shift';
row4.append(rightShift);

//////keys5
const lCtrl= document.createElement('div');
lCtrl.className='keys ctrl_key';
lCtrl.innerText='Ctrl';
row5.append(lCtrl);

const Win= document.createElement('div');
Win.className='keys';
Win.innerText='Win';
row5.append(Win);

const leftAlt= document.createElement('div');
leftAlt.className='keys alt_key';
leftAlt.innerText='Alt';
row5.append(leftAlt);

const Space= document.createElement('div');
Space.className='keys space_key';
Space.innerText='';
row5.append(Space);

const rightAlt= document.createElement('div');
rightAlt.className='keys alt_key';
rightAlt.innerText='Alt';
row5.append(rightAlt);

const arrowLeft= document.createElement('div');
arrowLeft.className='keys arrowleft_key';
arrowLeft.innerHTML='&#8592';
row5.append(arrowLeft);

const arrowDown= document.createElement('div');
arrowDown.className='keys arrowdown_key';
arrowDown.innerHTML='&#8595';
row5.append(arrowDown);

const arrowRight= document.createElement('div');
arrowRight.className='keys arrowright_key';
arrowRight.innerHTML='&#8594';
row5.append(arrowRight);

const rCtrl= document.createElement('div');
rCtrl.className='keys ctrl_key';
rCtrl.innerText='Ctrl';
row5.append(rCtrl);



let keys=document.querySelectorAll('.keys');

for(let i=0; i<keys.length; i++){
  keys[i].setAttribute('keyname', keys[i].innerText.toLowerCase());
  keys[i].setAttribute('lowerCaseName', keys[i].innerText);
} 

window.addEventListener('keydown', function(e){
  textarea.focus();
  for(let i=0; i<keys.length; i++){
    if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')){
      keys[i].classList.add('active')
    }
    if(e.code == 'Space'){
      Space.classList.add('active');
    }
    if(e.code == 'ShiftLeft')
    {
      rightShift.classList.remove('active')
    }
    if(e.code == 'ShiftRight')
    {
      leftShift.classList.remove('active')
    }
    if(e.code == 'AltLeft')
    {
      rightAlt.classList.remove('active')
    }
    if(e.code == 'AltRight')
    {
      leftAlt.classList.remove('active')
    }
    if(e.code == 'ControlLeft')
    {
      lCtrl.classList.add('active')
    }
    if(e.code == 'ControlRight')
    {
      rCtrl.classList.add('active')
    }
    if(e.code == 'CapsLock'){
      caps.classList.toggle('active')
    }
    if(e.code == 'ArrowUp')
    {
      arrowUp.classList.add('active');
    }
    if(e.code == 'ArrowRight')
    {
      arrowRight.classList.add('active');
    }
    if(e.code == 'ArrowDown')
    {
      arrowDown.classList.add('active');
    }
    if(e.code == 'ArrowLeft')
    {
      arrowLeft.classList.add('active');
    }
 
  }
})

window.addEventListener('keyup', function(e){
  for(let i=0; i<keys.length; i++){
    if(e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')){
      keys[i].classList.remove('active')
    }
    if(e.code == 'Space'){
      Space.classList.remove('active');
      Space.classList.add('remove');
    }
    if(e.code == 'ArrowUp')
    {
      arrowUp.classList.remove('active');
    }
    if(e.code == 'ArrowRight')
    {
      arrowRight.classList.remove('active');
    }
    if(e.code == 'ArrowDown')
    {
      arrowDown.classList.remove('active');
    }
    if(e.code == 'ArrowLeft')
    {
      arrowLeft.classList.remove('active');
    }
    if(e.code == 'ControlLeft')
    {
      lCtrl.classList.remove('active')
    }
    if(e.code == 'ControlRight')
    {
      rCtrl.classList.remove('active')
    }
  }
})

for(let i=0; i<keys.length; i++){
  if(i==13){
    keys[13].addEventListener('mousedown', backspace)
    function backspace(){
      textarea.value=textarea.value.substring(0, textarea.value.length - 1);
      keys[13].classList.add('active')
    }    
  }else if(i==14){
    keys[14].addEventListener('mousedown', tabfun)
    function tabfun(){
      textarea.value+='\t';
      keys[14].classList.add('active')
    }       
  }else if(i==40){
    keys[40].addEventListener('mousedown', enterfun)
    function enterfun(){
      textarea.value+='\n';
      keys[40].classList.add('active')
    }  
  }else if(i==41 || i==53 || i==54 || i==55 || i==56 || i==58 || i==62 ){
    keys[i].addEventListener('mousedown', nothing)
    function nothing(){
      textarea.value+='';
      keys[i].classList.add('active')
    }
  }
  else if(i==57){
    keys[i].addEventListener('mousedown', spacefun)
    function spacefun(){
      textarea.value+=` `;
      keys[i].classList.add('active')
    }  
  }
  else{
    keys[i].addEventListener('mousedown', clicker)
    function clicker(){
      if(caps.classList.contains('active')){
        textarea.value+=keys[i].getAttribute('lowerCaseName')
        keys[i].classList.add('active')
      }else{
        textarea.value+=keys[i].getAttribute('keyname')
        keys[i].classList.add('active')
      }            
    }
  }
  keys[i].addEventListener('mouseup', clicker2)
    function clicker2(){
      keys[i].classList.remove('active')
    }    
}  

