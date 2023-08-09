const e = document.createElement("div");
e.setAttribute("class", "popup");
const o = document.createElement("img");
o.setAttribute("class", "popup__icon");
const r = document.createElement("h2");
r.setAttribute("class", "popup__title");
const p = document.createElement("p");
p.setAttribute("class", "popup__message");
const s = document.createElement("button");
s.setAttribute("class", "popup__close-btn");
e.appendChild(o);
e.appendChild(r);
e.appendChild(p);
e.appendChild(s);
document.body.appendChild(e);
const i = (a) => {
  let { title: c, message: l, level: t, button: n } = a;
  if (!c || !l || !t || !n)
    throw new Error("title, message, level, button are required");
  t !== "success" && t !== "warning" && t !== "error" && (t = "success"), s.innerText = n || "Close", o.setAttribute("src", `https://raw.githubusercontent.com/coderSuresh/web-alert/main/public/images/ic_${t.toLowerCase()}.png`), r.innerText = c, p.innerText = l, e.setAttribute("class", `popup popup--${t.toLowerCase()} popup--show`);
};
s.addEventListener("click", () => {
  e.setAttribute("class", "popup");
});
export {
  i as default
};
