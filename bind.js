let target = document.querySelector("#target");
let users = [
  {
    name: "Coding Kim",
    skill: "JavaScript"
  },
  {
    name: "Hacker Park",
    skill: "Singing"
  },
  {
    name: "Noob Choi",
    skill: "Challenging"
  }
];

users.forEach((user) => {
  let btn = document.createElement("button");
  btn.textContent = user.name;
  // btn.onclick = handleClick;            //- Wrong
  // btn.onclick = () => handleClick(user) //- Right
btn.onclick = handleClick.bind(null, user) //- Right
  target.appendChild(btn);
});

function handleClick(user) {
  alert(`${user.name}'s skill is ${user.skill}`);
}