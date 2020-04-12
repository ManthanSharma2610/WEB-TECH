function zodiac(){
  var birthmonth = document.getElementById("month").value;
   var birthday = document.getElementById("day").value;
 var result = " Unknown because you didn't put a valid date.";


if (birthmonth == 1&& birthday >= 20 || birthmonth == 2 && birthday <= 18
    ){
        result = ("Aquarius");
    
    }

    if (birthmonth == 2&& birthday >= 19 || birthmonth == 3&& birthday <= 20){
       result = ("Pisces");
      
    }
   if (birthmonth == 3&& birthday >= 21 || birthmonth == 4 && birthday <= 19){
       result = ("Aries");
   }
  
    if (birthmonth == 4&& birthday >= 20|| birthmonth == 5 && birthday <= 20){
        result = ("Taurus");
      
    }
  
    if (birthmonth == 5&& birthday >= 21 || birthmonth == 6 && birthday <= 20
     ){
        result = ("Gemini");
     
    }
  
    if (birthmonth == 6&& birthday >= 21 || birthmonth == 7&& birthday <= 22){
        result = ("Cancer");
      
    }
    if (birthmonth == 7&& birthday >= 23 || birthmonth == 8 && birthday <= 22){
        result = ("Leo");
      
    }
    if (birthmonth == 8 && birthday >= 23 || birthmonth == 9 && birthday <= 22){
        result = ("Virgo");
    }
    if (birthmonth == 9&& birthday >= 23 || birthmonth == 10&& birthday <= 22){
      result = ("Libra");
    }
    if (birthmonth == 10 && birthday >= 23|| birthmonth == 11 && birthday <= 21){
       result = ("Scorpio");
    }
    if (birthmonth == 11 && birthday >= 22 || birthmonth == 12 && birthday <= 21){
        result = ("Sagittarius");
    }
  
  if(birthmonth == 12 && birthday >= 22 || birthmonth == 1 && birthday <= 19){
 
        result = ("Capricorn");
    }else if (birthmonth>12||birthday>31){
       alert("Please enter an accurate date ! ");
    }
 document.getElementById("output").innerHTML= result;
}
  


/*var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");

function validateForm(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  }else{
    countBmi();
  }
}
document.getElementById("submit").addEventListener("click", validateForm);*/

function countBmi(){
    var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
  form.reset();
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese';
     }else if(35<=bmi){
    result = 'Extremely obese';
     }

     document.getElementById("output2").innerHTML= result;
     document.getElementById("output1").innerHTML= bmi;
  
  /*var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");

  var t = document.createTextNode(result);
  var b = document.createTextNode('BMI: ');
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));
  
  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);
  
  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);*/
}
//document.getElementById("submit").addEventListener("click", countBmi);
