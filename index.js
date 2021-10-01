
let btn=document.getElementById('button5'); 
let btn1=document.getElementById('button10');
let btn2=document.getElementById('button15');
let btn3=document.getElementById('button25');
let btn4=document.getElementById('button50');
let btnfive=document.getElementById('buttonreset');
let btn6=document.getElementById('buttoncustom');


button5.addEventListener('click', function(){
    let billAmount=document.getElementById('bill_amount').value;
    let NumPeople=document.getElementById('num_of_people').value;

  // to see if its correct console.log(billAmount);

  var tipAmount=parseFloat(billAmount)*parseFloat(0.05);
  document.getElementById('tipamountperperson').value=(parseFloat(billAmount) + parseFloat(tipAmount))/parseFloat(NumPeople);
document.getElementById('totalperperson').value=parseFloat(tipAmount)/parseFloat(NumPeople); //parsefloat guarantees that it is math and not a string

})

button10.addEventListener('click', function(){
    let billAmount=document.getElementById('bill_amount').value;
    let NumPeople=document.getElementById('num_of_people').value;


  var tipAmount=parseFloat(billAmount)*parseFloat(0.1);
  document.getElementById('tipamountperperson').value=(parseFloat(billAmount) + parseFloat(tipAmount))/parseFloat(NumPeople);
document.getElementById('totalperperson').value=parseFloat(tipAmount)/parseFloat(NumPeople); 


})


button15.addEventListener('click', function(){
    let billAmount=document.getElementById('bill_amount').value;
    let NumPeople=document.getElementById('num_of_people').value;


  var tipAmount=parseFloat(billAmount)*parseFloat(0.15);
  document.getElementById('tipamountperperson').value=(parseFloat(billAmount) + parseFloat(tipAmount))/parseFloat(NumPeople);
document.getElementById('totalperperson').value=parseFloat(tipAmount)/parseFloat(NumPeople); 

  


})

button25.addEventListener('click', function(){
    let billAmount=document.getElementById('bill_amount').value;
    let NumPeople=document.getElementById('num_of_people').value;


  var tipAmount=parseFloat(billAmount)*parseFloat(0.25);
  document.getElementById('tipamountperperson').value=(parseFloat(billAmount) + parseFloat(tipAmount))/parseFloat(NumPeople);
document.getElementById('totalperperson').value=parseFloat(tipAmount)/parseFloat(NumPeople);
})

button50.addEventListener('click', function(){
    let billAmount=document.getElementById('bill_amount').value;
    let NumPeople=document.getElementById('num_of_people').value;


  var tipAmount=parseFloat(billAmount)*parseFloat(0.5);
  document.getElementById('tipamountperperson').value=(parseFloat(billAmount) + parseFloat(tipAmount))/parseFloat(NumPeople); 
document.getElementById('totalperperson').value=parseFloat(tipAmount)/parseFloat(NumPeople);


})


buttonreset.addEventListener('click', function(){
    var billAmount=document.getElementById('bill_amount').value="";
    var NumPeople=document.getElementById('num_of_people').value="";
    var tperp=document.getElementById('totalperperson').value="";
    var taperp=document.getElementById('tipamountperperson').value="";
    var bcustom=document.getElementById('buttoncustom').value="";

})

buttoncustom.addEventListener('click', function(){
    let billAmount=document.getElementById('bill_amount').value;
    let NumPeople=document.getElementById('num_of_people').value;
    let custom=document.getElementById('buttoncustom').value;
    var customb=custom;


  var tipAmount=parseFloat(billAmount)*parseFloat(custom);
  document.getElementById('tipamountperperson').value=parseFloat(tipAmount)/parseFloat(NumPeople);
document.getElementById('totalperperson').value=(parseFloat(billAmount) + parseFloat(tipAmount))/parseFloat(NumPeople); //parsefloat guarantees that it is math and not a string

})
