var newHey;
var start = "Der Kater Tobi mag essen: " ;
var finish = ["Fisch", "Butter", "Futter"];
finish.push("Sahne")
finish.unshift("Fleisch");
newHey = start + finish.join(", ").bold() + ".";

var whatEat;
var catMeal = 52;
var time = +prompt("What time is it?", 7);

if (catMeal > 0) {
  whatEat = "We have the food";
  if (time > 7) {
    whatEat += " — " + finish[0].bold();
  } else {
    whatEat += " — " + finish[finish.length - 1].bold();
  }
} else {
  whatEat = "We haven't the food";
}

out = document.getElementById("output")
out.innerHTML = newHey;
eat = document.getElementById("eat")
eat.innerHTML = whatEat;

var tobi = "Tobi ist cool, und du nicht."
// alert(tobi)
