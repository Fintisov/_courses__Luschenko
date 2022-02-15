const box = document.querySelector(".box");

const myList = new List(["one", "two", "three", "four"]);
box.append(myList.render());

//------------------------------------------

const myList2 = new List2(
    ["one", "two", "three", "four"],
    "styleList",
);
box.append(myList2.render());

//------------------------------------------

let myList3 = new List3(
    ["one", "two", "three", "four"],
    ['text-center', 'bold', 'text-red'],
)

box.append(myList3.render());
