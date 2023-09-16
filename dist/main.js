const e = document.createElement("div");
e.setAttribute("class", "popup");
const o = document.createElement("img");
o.setAttribute("class", "popup__icon");
const p = document.createElement("h2");
p.setAttribute("class", "popup__title");
const r = document.createElement("p");
r.setAttribute("class", "popup__message");
const s = document.createElement("button");
s.setAttribute("class", "popup__close-btn");
e.appendChild(o);
e.appendChild(p);
e.appendChild(r);
e.appendChild(s);
document.body.appendChild(e);
const i = (a) => {
  let { title: c, message: l, level: t, button: n } = a;
  if (!c || !l || !t || !n)
    throw new Error("title, message, level, button are required");
  t !== "success" && t !== "warning" && t !== "error" && (t = "success"), s.innerText = n || "Close", o.setAttribute("src", `/images/ic_${t.toLowerCase()}.png`), p.innerText = c, r.innerText = l, e.setAttribute("class", `popup popup--${t.toLowerCase()} popup--show`);
};
s.addEventListener("click", () => {
  e.setAttribute("class", "popup");
});
export {
  i as default
};
