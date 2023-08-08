const t = document.createElement("div");
t.setAttribute("class", "popup");
const s = document.createElement("img");
s.setAttribute("class", "popup__icon");
const p = document.createElement("h2");
p.setAttribute("class", "popup__title");
const n = document.createElement("p");
n.setAttribute("class", "popup__message");
const e = document.createElement("button");
e.setAttribute("class", "popup__close");
t.appendChild(s);
t.appendChild(p);
t.appendChild(n);
t.appendChild(e);
document.body.appendChild(t);
const i = (c) => {
  const { title: l, message: a, level: o, button: u } = c;
  e.innerText = u, s.setAttribute("src", `/images/ic_${o}.png`), p.innerText = l, n.innerText = a, t.setAttribute("class", `popup popup--${o}`), t.setAttribute("class", "popup popup--show");
};
e.addEventListener("click", () => {
  t.setAttribute("class", "popup");
});
export {
  i as default
};
