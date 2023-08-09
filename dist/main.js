const e = document.createElement("div");
e.setAttribute("class", "popup");
const n = document.createElement("img");
n.setAttribute("class", "popup__icon");
const p = document.createElement("h2");
p.setAttribute("class", "popup__title");
const r = document.createElement("p");
r.setAttribute("class", "popup__message");
const s = document.createElement("button");
s.setAttribute("class", "popup__close-btn");
e.appendChild(n);
e.appendChild(p);
e.appendChild(r);
e.appendChild(s);
document.body.appendChild(e);
const i = (a) => {
  let { title: l, message: c, level: t, button: o } = a;
  if (!l || !c || !t || !o)
    throw new Error("title, message, level, button are required");
  t !== "success" && t !== "warning" && t !== "error" && (t = "success"), s.innerText = o || "Close", n.setAttribute("src", `./node_modules/alert-for-web/dist/images/ic_${t.toLowerCase()}.png`), p.innerText = l, r.innerText = c, e.setAttribute("class", `popup popup--${t.toLowerCase()} popup--show`);
};
s.addEventListener("click", () => {
  e.setAttribute("class", "popup");
});
export {
  i as default
};
