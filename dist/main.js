const C = document.createElement("div");
C.setAttribute("class", "popup__overlay");
const s = document.createElement("div");
s.setAttribute("class", "popup");
C.appendChild(s);
const c = document.createElement("div");
c.setAttribute("class", "popup__icon");
const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
t.setAttribute("width", "100");
t.setAttribute("height", "120");
t.setAttribute("viewBox", "0 0 200 179");
t.setAttribute("fill", "none");
const i = document.createElementNS("http://www.w3.org/2000/svg", "circle");
i.setAttribute("cx", "90");
i.setAttribute("cy", "90");
i.setAttribute("r", "80");
i.setAttribute("fill", "#FFFFFF");
window.addEventListener("resize", () => {
  b();
});
const b = () => {
  window.innerWidth < 768 ? (t.setAttribute("width", "80"), t.setAttribute("height", "100")) : (t.setAttribute("width", "100"), t.setAttribute("height", "120"));
};
b();
const e = document.createElementNS("http://www.w3.org/2000/svg", "path");
e.setAttribute("d", "M100 0C126.522 0 151.957 10.5357 170.711 29.2893C189.464 48.043 200 73.4784 200 100C200 126.522 189.464 151.957 170.711 170.711C151.957 189.464 126.522 200 100 200C73.4784 200 48.043 189.464 29.2893 170.711C10.5357 151.957 0 126.522 0 100C0 73.4784 10.5357 48.043 29.2893 29.2893C48.043 10.5357 73.4784 0 100 0ZM87.5429 119.729L65.3286 97.5C64.5322 96.7036 63.5868 96.0719 62.5463 95.6409C61.5057 95.2099 60.3905 94.9881 59.2643 94.9881C58.138 94.9881 57.0228 95.2099 55.9823 95.6409C54.9418 96.0719 53.9964 96.7036 53.2 97.5C51.5917 99.1083 50.6881 101.29 50.6881 103.564C50.6881 105.839 51.5917 108.02 53.2 109.629L81.4857 137.914C82.2798 138.715 83.2246 139.35 84.2654 139.783C85.3062 140.217 86.4225 140.44 87.55 140.44C88.6775 140.44 89.7938 140.217 90.8346 139.783C91.8754 139.35 92.8202 138.715 93.6143 137.914L152.186 79.3286C152.993 78.5355 153.635 77.5905 154.075 76.5481C154.515 75.5056 154.744 74.3864 154.749 73.2549C154.754 72.1235 154.536 71.0022 154.105 69.9557C153.675 68.9092 153.042 67.9583 152.242 67.1577C151.443 66.3572 150.493 65.7229 149.447 65.2914C148.401 64.8599 147.28 64.6398 146.148 64.6437C145.017 64.6476 143.897 64.8755 142.854 65.3143C141.811 65.753 140.865 66.3939 140.071 67.2L87.5429 119.729Z");
e.setAttribute("fill", "#3CE43C");
t.appendChild(i);
t.appendChild(e);
c.appendChild(t);
const l = document.createElement("h2");
l.setAttribute("class", "popup__title");
const o = document.createElement("p");
o.setAttribute("class", "popup__message");
const n = document.createElement("button");
n.setAttribute("class", "popup__close-btn");
s.appendChild(c);
s.appendChild(l);
s.appendChild(o);
s.appendChild(n);
document.body.appendChild(C);
const h = (u) => {
  let { title: a, message: p, level: r, button: d } = u;
  if (!a || !p)
    throw new Error("title, message, level, button are required");
  switch (r !== "success" && r !== "warning" && r !== "error" && (r = "success"), r) {
    case "error":
      e.setAttribute("d", "M100 0C44.8 0 0 44.8 0 100C0 155.2 44.8 200 100 200C155.2 200 200 155.2 200 100C200 44.8 155.2 0 100 0ZM100 110C94.5 110 90 105.5 90 100V60C90 54.5 94.5 50 100 50C105.5 50 110 54.5 110 60V100C110 105.5 105.5 110 100 110ZM110 150H90V130H110V150Z"), e.setAttribute("fill", "#F24E1E");
      break;
    case "warning":
      i.setAttribute("r", "40"), e.setAttribute("d", "M20.998 178.437h158.004c16.157 0 26.229-17.521 18.151-31.475L118.151 10.465c-8.079-13.953-28.223-13.953-36.302 0L2.847 146.962c-8.078 13.954 1.994 31.475 18.15 31.475ZM100 104.995c-5.77 0-10.492-4.721-10.492-10.491V73.52c0-5.77 4.722-10.491 10.492-10.491 5.77 0 10.492 4.721 10.492 10.491v20.984c0 5.77-4.722 10.491-10.492 10.491Zm10.492 41.967H89.508v-20.983h20.984v20.983Z"), e.setAttribute("fill", "#D39E00");
      break;
    default:
      i.setAttribute("r", "80"), e.setAttribute("d", "M100 0C126.522 0 151.957 10.5357 170.711 29.2893C189.464 48.043 200 73.4784 200 100C200 126.522 189.464 151.957 170.711 170.711C151.957 189.464 126.522 200 100 200C73.4784 200 48.043 189.464 29.2893 170.711C10.5357 151.957 0 126.522 0 100C0 73.4784 10.5357 48.043 29.2893 29.2893C48.043 10.5357 73.4784 0 100 0ZM87.5429 119.729L65.3286 97.5C64.5322 96.7036 63.5868 96.0719 62.5463 95.6409C61.5057 95.2099 60.3905 94.9881 59.2643 94.9881C58.138 94.9881 57.0228 95.2099 55.9823 95.6409C54.9418 96.0719 53.9964 96.7036 53.2 97.5C51.5917 99.1083 50.6881 101.29 50.6881 103.564C50.6881 105.839 51.5917 108.02 53.2 109.629L81.4857 137.914C82.2798 138.715 83.2246 139.35 84.2654 139.783C85.3062 140.217 86.4225 140.44 87.55 140.44C88.6775 140.44 89.7938 140.217 90.8346 139.783C91.8754 139.35 92.8202 138.715 93.6143 137.914L152.186 79.3286C152.993 78.5355 153.635 77.5905 154.075 76.5481C154.515 75.5056 154.744 74.3864 154.749 73.2549C154.754 72.1235 154.536 71.0022 154.105 69.9557C153.675 68.9092 153.042 67.9583 152.242 67.1577C151.443 66.3572 150.493 65.7229 149.447 65.2914C148.401 64.8599 147.28 64.6398 146.148 64.6437C145.017 64.6476 143.897 64.8755 142.854 65.3143C141.811 65.753 140.865 66.3939 140.071 67.2L87.5429 119.729Z"), e.setAttribute("fill", "#3CE43C");
  }
  n.innerText = d || "Close", l.innerText = a, o.innerText = p, s.setAttribute("class", `popup popup--${r.toLowerCase()} popup--show`), C.classList.add("visible");
};
n.addEventListener("click", () => {
  s.setAttribute("class", "popup"), C.classList.remove("visible");
});
export {
  h as default
};
