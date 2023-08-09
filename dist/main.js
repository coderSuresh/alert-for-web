const e = document.createElement("div");
e.setAttribute("class", "popup");
const n = document.createElement("img");
n.setAttribute("class", "popup__icon");
const o = document.createElement("h2");
o.setAttribute("class", "popup__title");
const p = document.createElement("p");
p.setAttribute("class", "popup__message");
const s = document.createElement("button");
s.setAttribute("class", "popup__close-btn");
e.appendChild(n);
e.appendChild(o);
e.appendChild(p);
e.appendChild(s);
document.body.appendChild(e);
const i = (a) => {
  let { title: r, message: c, level: t, button: l } = a;
  if (!r || !c || !t || !l)
    throw new Error("title, message, level, button are required");
  t !== "success" && t !== "warning" && t !== "error" && (t = "success"), s.innerText = l, n.setAttribute("src", `/images/ic_${t.toLowerCase()}.png`), o.innerText = r, p.innerText = c, e.setAttribute("class", `popup popup--${t.toLowerCase()} popup--show`);
};
s.addEventListener("click", () => {
  e.setAttribute("class", "popup");
});
export {
  i as default
};
