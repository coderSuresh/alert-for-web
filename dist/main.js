const t = document.createElement("div");
t.setAttribute("class", "popup");
const s = document.createElement("img");
s.setAttribute("class", "popup__icon");
const n = document.createElement("h2");
n.setAttribute("class", "popup__title");
const p = document.createElement("p");
p.setAttribute("class", "popup__message");
const e = document.createElement("button");
e.setAttribute("class", "popup__close-btn");
t.appendChild(s);
t.appendChild(n);
t.appendChild(p);
t.appendChild(e);
document.body.appendChild(t);
const u = (c) => {
  const { title: l, message: a, level: o, button: i } = c;
  e.innerText = i, s.setAttribute("src", `/images/ic_${o}.png`), n.innerText = l, p.innerText = a, t.setAttribute("class", `popup popup--${o} popup--show`);
};
e.addEventListener("click", () => {
  t.setAttribute("class", "popup");
});
export {
  u as default
};
