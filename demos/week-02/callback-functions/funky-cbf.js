function theThingToDo() {
  console.log("Something done.");
}

function anotherThingToDo() {
  console.log("Another thing done.");
}

function doSomething(myCBF) {
  console.log("Doing something...");
  myCBF();
}

doSomething(theThingToDo);
doSomething(anotherThingToDo);
