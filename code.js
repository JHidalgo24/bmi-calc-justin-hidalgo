$(document).ready(function () {
    $("form").on("submit",bmiCalculator)
});

function bmiCalculator(event) {
    event.preventDefault();

   let height = parseFloat($("input#height").val());
   let weight = parseFloat($("input#weight").val());

   let bmi = ((weight/(height**2))*703);

   $("h2#output").text(`Your BMI is ${bmi.toFixed(1)}`);

   if (bmi<=15){
       $("p#bmiRange").text("Your range is: Very severely underweight");
   }
   else if (bmi <=16){
       $("p#bmiRange").text("Your range is: Severely underweight");
   }
   else if (bmi <=18.5){
       $("p#bmiRange").text("Your range is: Underweight");
   }
   else if (bmi <=25){
       $("p#bmiRange").text("Your range is: Normal");
   }
   else if (bmi <=30){
       $("p#bmiRange").text("Your range is: Overweight");
   }
   else if (bmi <=35){
       $("p#bmiRange").text("Your range is: Obese Class 1");
   }
   else if (bmi <=40){
       $("p#bmiRange").text("Your range is: Obese Class 2");
   }
   else if(bmi > 40){
       $("p#bmiRange").text("Your range is: Obese Class 3");
   }
   else{
       $("p#bmiRange").text("You inputted an invalid value somehow ");
   }

}