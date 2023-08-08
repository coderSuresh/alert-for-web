const t = document.createElement("div");
t.setAttribute("class", "popup");
const p = document.createElement("img");
p.setAttribute("class", "popup__icon");
const s = document.createElement("h2");
s.setAttribute("class", "popup__title");
const n = document.createElement("p");
n.setAttribute("class", "popup__message");
const e = document.createElement("button");
e.setAttribute("class", "popup__close");
t.appendChild(p);
t.appendChild(s);
t.appendChild(n);
t.appendChild(e);
document.body.appendChild(t);
const i = (o, a, c, u) => {
  e.innerText = u, p.setAttribute("src", `/images/ic_${c}.png`), s.innerText = o, n.innerText = a, t.setAttribute("class", `popup popup--${c}`), t.setAttribute("class", "popup popup--show");
};
e.addEventListener("click", () => {
  t.setAttribute("class", "popup");
});
export {
  i as default
};
