import { a as e, n as t, r as n, t as r } from "./jsx-runtime-CjtlecKO.js";
import { O as i, P as a, X as o, dt as s, ut as c } from "./index-D6kauhrE.js";
import { n as l } from "./io5-BcyI83J0.js";
import { t as u } from "./md-C_J9XHJg.js";
import { t as d } from "./fc-meeTsppn.js";
import { t as f } from "./fi-CmfDqhT6.js";
var p = n((e) => {
    function n(e) {
      if (!e || typeof window > `u`) return;
      let t = document.createElement(`style`);
      return (
        t.setAttribute(`type`, `text/css`),
        (t.innerHTML = e),
        document.head.appendChild(t),
        e
      );
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var r = t();
    function i(e) {
      return e && typeof e == `object` && `default` in e ? e : { default: e };
    }
    var a = i(r);
    (n(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`),
      (e.default = r.forwardRef(function (
        {
          style: e = {},
          className: t = ``,
          autoFill: n = !1,
          play: i = !0,
          pauseOnHover: o = !1,
          pauseOnClick: s = !1,
          direction: c = `left`,
          speed: l = 50,
          delay: u = 0,
          loop: d = 0,
          gradient: f = !1,
          gradientColor: p = `white`,
          gradientWidth: m = 200,
          onFinish: h,
          onCycleComplete: g,
          onMount: _,
          children: v,
        },
        y,
      ) {
        let [b, x] = r.useState(0),
          [S, C] = r.useState(0),
          [w, T] = r.useState(1),
          [E, D] = r.useState(!1),
          O = r.useRef(null),
          k = y || O,
          A = r.useRef(null),
          j = r.useCallback(() => {
            if (A.current && k.current) {
              let e = k.current.getBoundingClientRect(),
                t = A.current.getBoundingClientRect(),
                r = e.width,
                i = t.width;
              ((c === `up` || c === `down`) && ((r = e.height), (i = t.height)),
                T(n && r && i && i < r ? Math.ceil(r / i) : 1),
                x(r),
                C(i));
            }
          }, [n, k, c]);
        (r.useEffect(() => {
          if (E && (j(), A.current && k.current)) {
            let e = new ResizeObserver(() => j());
            return (
              e.observe(k.current),
              e.observe(A.current),
              () => {
                e && e.disconnect();
              }
            );
          }
        }, [j, k, E]),
          r.useEffect(() => {
            j();
          }, [j, v]),
          r.useEffect(() => {
            D(!0);
          }, []),
          r.useEffect(() => {
            typeof _ == `function` && _();
          }, []));
        let M = r.useMemo(
            () => (n ? (S * w) / l : S < b ? b / l : S / l),
            [n, b, S, w, l],
          ),
          N = r.useMemo(
            () =>
              Object.assign(Object.assign({}, e), {
                "--pause-on-hover": !i || o ? `paused` : `running`,
                "--pause-on-click": !i || (o && !s) || s ? `paused` : `running`,
                "--width": c === `up` || c === `down` ? `100vh` : `100%`,
                "--transform":
                  c === `up`
                    ? `rotate(-90deg)`
                    : c === `down`
                      ? `rotate(90deg)`
                      : `none`,
              }),
            [e, i, o, s, c],
          ),
          P = r.useMemo(
            () => ({
              "--gradient-color": p,
              "--gradient-width": typeof m == `number` ? `${m}px` : m,
            }),
            [p, m],
          ),
          F = r.useMemo(
            () => ({
              "--play": i ? `running` : `paused`,
              "--direction": c === `left` ? `normal` : `reverse`,
              "--duration": `${M}s`,
              "--delay": `${u}s`,
              "--iteration-count": d ? `${d}` : `infinite`,
              "--min-width": n ? `auto` : `100%`,
            }),
            [i, c, M, u, d, n],
          ),
          I = r.useMemo(
            () => ({
              "--transform":
                c === `up`
                  ? `rotate(90deg)`
                  : c === `down`
                    ? `rotate(-90deg)`
                    : `none`,
            }),
            [c],
          ),
          L = r.useCallback(
            (e) =>
              [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                a.default.createElement(
                  r.Fragment,
                  { key: t },
                  r.Children.map(v, (e) =>
                    a.default.createElement(
                      `div`,
                      { style: I, className: `rfm-child` },
                      e,
                    ),
                  ),
                ),
              ),
            [I, v],
          );
        return E
          ? a.default.createElement(
              `div`,
              { ref: k, style: N, className: `rfm-marquee-container ` + t },
              f &&
                a.default.createElement(`div`, {
                  style: P,
                  className: `rfm-overlay`,
                }),
              a.default.createElement(
                `div`,
                {
                  className: `rfm-marquee`,
                  style: F,
                  onAnimationIteration: g,
                  onAnimationEnd: h,
                },
                a.default.createElement(
                  `div`,
                  { className: `rfm-initial-child-container`, ref: A },
                  r.Children.map(v, (e) =>
                    a.default.createElement(
                      `div`,
                      { style: I, className: `rfm-child` },
                      e,
                    ),
                  ),
                ),
                L(w - 1),
              ),
              a.default.createElement(
                `div`,
                { className: `rfm-marquee`, style: F },
                L(w),
              ),
            )
          : null;
      })));
  }),
  m = e(t()),
  h = e(p());
function g(e) {
  return c({
    tag: `svg`,
    attr: { viewBox: `0 0 512 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M241.063 54.406c-2.31.008-4.61.032-6.907.094-1.805.05-3.61.106-5.406.188-8.814 1.567-12.884 5.426-15.094 9.843-2.435 4.87-2.34 11.423.375 17.25 2.717 5.83 7.7 10.596 14.657 12.376 6.958 1.78 16.536.86 29.125-7.187l10.063 15.75c-15.818 10.11-31.124 12.777-43.813 9.53-12.688-3.247-22.103-12.123-26.968-22.563-4.584-9.836-5.426-21.376-1.03-31.624-42.917 6.94-81.777 23.398-111.626 46.562-9.81 10.688-10.77 23.11-6.47 31.594 4.83 9.526 16.21 16.48 38.97 9.28l5.656 17.813c-28.58 9.04-52.137-.588-61.28-18.625-2.23-4.397-3.592-9.156-4.127-14.063-4.814 5.712-9.16 11.658-13 17.844l.126.06c-8.614 19.616-8.81 33.203-5.376 42.032 3.436 8.83 10.635 14.44 21.72 17.532 22.168 6.18 58.065-1.277 83.343-20.156 10.82-8.08 21.077-27.677 21.97-42.875.445-7.6-1.165-13.604-4.345-17.438-3.18-3.834-8.272-6.703-18.813-6.594l-.187-18.686c14.487-.15 26.25 4.754 33.375 13.344 7.124 8.59 9.26 19.652 8.625 30.468-1.27 21.633-12.595 44.172-29.438 56.75-29.876 22.314-69.336 31.606-99.53 23.188-13.988-3.9-26.37-12.386-32.75-25.53-9.546 45.446 4.323 87.66 30.718 116.874 3.45 3.82 7.122 7.43 10.97 10.78-2.754-7.887-4.016-16.1-3.72-24.093.53-14.325 6.082-28.346 17.22-38.03 9.134-7.946 21.752-12.53 36.843-12.5 1.006 0 2.034.018 3.062.06 2.35.1 4.763.304 7.22.626l-2.44 18.532c-15.588-2.048-25.705 1.522-32.436 7.375-6.73 5.854-10.443 14.614-10.813 24.625-.74 20.024 12.07 43.406 39.69 50.188l-.032.188c27.192 5.19 57.536.372 88-18.22.018-.012.043-.017.062-.03 6.34-4.45 9.755-8.808 11.438-12.563 1.985-4.432 1.943-8.292.53-12.438-2.824-8.29-12.94-16.812-22.218-19.187-15.002-3.84-24.532 1.436-29 7.72-4.468 6.28-4.74 12.45 2.156 17.81l-11.47 14.75c-14.187-11.033-15.092-30.487-5.905-43.405 6.892-9.688 18.985-16.326 33.564-16.75.607-.018 1.228-.036 1.844-.03 4.306.03 8.79.622 13.437 1.81 15.505 3.97 29.84 15.277 35.28 31.25 1.416 4.155 2.09 8.69 1.876 13.314 16.71-8.538 34.332-16.12 52.282-21.814 30.156-13.78 43.23-37.938 42.72-58.28-.515-20.493-13.187-37.74-42.376-40.626l1.844-18.594c36.666 3.626 58.462 29.848 59.188 58.75.422 16.84-5.754 34.363-18.188 49.28 16.072-1.8 32.044-1.495 47.53 1.627-3.152-6.472-4.68-13.478-4.467-20.438.677-22.036 19.42-42.593 48.875-42.906 1.963-.022 3.974.053 6.03.218l-1.5 18.625c-24.927-1.998-34.3 11.086-34.718 24.656-.412 13.42 8.545 28.442 34.22 30.436 28.3.25 48.588-15.098 58.53-37.906 13.31-30.536 6.997-76.317-34.844-118.188-.792-.793-1.578-1.593-2.375-2.375-.444 3.792-1.424 7.443-2.842 10.844-7.25 17.39-24.233 29.128-41.875 32.407-24.335 4.522-44.29-5.347-53.5-20.406-9.21-15.057-6.792-36.35 9.78-47.56l10.47 15.5c-8.913 6.028-9.28 14.19-4.313 22.31 4.967 8.122 16.17 15.156 34.156 11.814 11.306-2.102 23.896-11.33 28.03-21.25 2.07-4.96 2.47-9.862.408-15.47-1.675-4.555-5.187-9.764-11.72-15.25l-.187-.155c-27.316-20.587-56.338-35.393-85.75-45.157.018.032.045.06.063.093 6.684 12.22 7.18 26.082 3.063 38.344-8.233 24.525-34.07 43.848-66.032 42.78-6.948-.23-13.56 3.12-19.186 9.657-5.627 6.537-9.735 16.113-10.688 26.313-1.905 20.4 6.923 42.886 41.344 54L277 258.28c-41.083-13.264-56.83-45.546-54.22-73.5 1.307-13.975 6.706-26.962 15.157-36.78 8.452-9.818 20.475-16.603 33.97-16.156 24.04.802 42.323-14.084 47.687-30.063 2.682-7.988 2.335-15.937-1.75-23.405-3.968-7.252-11.83-14.423-25.906-19.656-17.114-2.967-34.16-4.367-50.875-4.314zM342.28 306.344c-41.915 3.41-87.366 23.4-125.28 46.562-55.98 34.198-114.89 26.733-156.688-4.28 16.444 58.844 74.712 70.788 135.5 55.905 6.083-2.285 12.06-6.538 17.157-12.03 7.057-7.607 12.17-17.47 13.78-25.625l18.344 3.625c-2.445 12.383-9.078 24.666-18.406 34.72-8.95 9.645-20.61 17.35-34.094 19.374-6.766 15.07-12.334 29.68-14.594 39.906-3.55 16.06 14.206 22.225 22.156 6.03 19.022-38.743 45.87-73.23 79.406-102.967 26.064-17.153 48.406-38.303 62.72-61.22z`,
        },
        child: [],
      },
    ],
  })(e);
}
function _(e) {
  return c({
    tag: `svg`,
    attr: { viewBox: `0 0 512 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M256.3 23.4c-7.8 18.13-16.2 30.32-21.2 40.66-6.4 13.47-8.5 23.95 1.3 48.24h39.9c10.4-24.38 8.3-34.69 1.7-48.15-5.1-10.33-13.8-22.55-21.7-40.75zM208 130.2l10 18h76l10-18h-96zM68.23 147.4c-4.47 9.2-8.9 16.1-11.51 21.5-3.89 8.1-5.04 14 .31 28h22.41c5.49-14 4.34-19.8.42-28-2.64-5.4-7.11-12.3-11.63-21.5zm375.47 0c-4.4 9.1-8.9 16-11.5 21.5-3.8 8.1-5 14 .3 28H455c5.4-14 4.3-19.8.4-28-2.7-5.4-7.1-12.3-11.7-21.5zM239.6 161c6.1 157.8-26.3 305.5-32.7 333h24c.7-5.1 1.8-12 3.3-19.1 1.5-6.9 3.3-13.9 6-19.9 1.3-2.9 2.8-5.7 5.1-8.3 2.3-2.5 6.1-5.2 10.9-5.2 5.1 0 8.6 3 10.7 5.5 2.1 2.5 3.4 5.2 4.7 8.1 2.5 5.9 4.4 12.8 6 19.6 1.7 7.4 2.9 14.1 3.7 19.3h24.2c-6.4-27.5-38.7-175.2-32.6-333h-33.3zM28.02 212.2l10 18h60l9.98-18H28.02zm377.98 0l10 18h60l10-18h-80zM60.11 245.1c3.39 99-15.63 190.6-21.38 215.9h44.01c2.5-9.2 4.97-22.4 6.88-40.8C82.34 378.3 74 313.5 76.34 245.1H60.11zm375.49 0c2.3 68.3-6 133-13.2 174.9 1.7 18.5 4.1 31.7 6.4 41h44.5c-5.8-25.3-24.8-116.9-21.4-215.9h-16.3zm-215.4 24.7c-22.3 5.2-56.4 10.1-109.2 13 .1 21.7-1.6 36-4.7 45.3h109.1c1.9-18.6 3.6-38.2 4.8-58.3zm72.1 0c1.2 20.1 2.9 39.7 4.8 58.3h110.7c-3.4-9.2-5.9-23.2-6.4-45.3-52.7-2.9-86.8-7.8-109.1-13zM111 348.2c-.5 69.8-6.6 106-13.34 125.5-.83 2.4-1.68 4.6-2.54 6.5h96.48c5.4-25.6 14.6-73.2 21.5-132H111zm188.3 0c7 58.8 16.1 106.4 21.5 132h95.4c-.8-2-1.6-4.2-2.4-6.6-6.4-19.5-12.1-55.7-12.6-125.4H299.3z`,
        },
        child: [],
      },
    ],
  })(e);
}
function v(e) {
  return c({
    tag: `svg`,
    attr: { viewBox: `0 0 512 512` },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M172 18c-.7 1.85-1.5 3.8-2.1 5.9-3.5 10.93-5.1 23.89-.5 33.29.5 1.02.8 1.28 1.2 2.07 4.9-4.07 13-9.15 24.8-8.79 9.8.29 17.9 6.02 22.6 13.13 4.7 7.11 6.9 15.56 7.3 24 .4 8.43-.9 16.9-4.5 24.3-3.6 7.4-10.3 14.2-19.5 15.5-15.1 2.2-26-6.1-31.5-9.7-.9-.5-1.3-.6-1.8-.9-.3.5-.4.5-.9 1.7-.5 1-.9 8.2 1.2 17.6.8 3.4 1.7 7.1 2.9 10.9 20.6-.5 40.8 1.1 55.3 6.7 7.4 2.8 12.6 5.3 16.2 10.5 3.6 5.2 2.7 12.1 1.2 16-2.9 7.8-6.5 12.2-5.4 22.2.5 3.8 1.6 5 4 6.3 2.4 1.3 6.5 2 10.9 1.3 8.8-1.2 16.9-7.2 17.8-13.4 1.3-8.9-.6-8.7-3.9-12.8-.8-1.1-2-2.4-2.9-4.9-.9-2.6-.7-6.8.8-9.5 2.9-5.4 6.5-6.9 12.1-9.9 8.8-4.8 18.6-3.8 29.3-2.1 7.5 1.2 15.6 3.1 23.8 5.2-2.3-9.1-4.4-18.1-5.7-26.5-1.7-11.3-2.4-21.7 2.7-30.9 1.8-3.1 3.2-5.48 5-7.56 1.7-2.08 3.8-4.37 7.9-5.24 4.1-.88 8.4 1.3 10.2 3.01 1.9 1.71 2.7 3.1 3.5 4.31 1.6 2.38 2.9 4.18 4.1 4.98 1.2.9 2.1 1.6 5.8 1 2.5-.3 4.9-2 7.1-5.6 2.3-3.56 3.9-8.87 4.2-14.02.2-5.15-.8-10.02-2.6-12.92-1.7-2.89-3.2-4.14-7.1-4.36-5.2-.3-7.3.68-8.5 1.45-1.2.76-1.7 1.5-2.7 3.21-.6.85-.7 2.09-3.9 4.31-1.6 1.11-4.9 2.13-7.6 1.55-2.8-.59-4.3-1.97-5.3-2.97-3.9-3.97-4.4-6.59-7.5-13.06-7.5-15.61-6.7-32.44-4-45.3zm173.1 0c-2.6 10.87-4.4 25.98 1.1 37.49.1.13.1.17.2.3.3-.21.5-.44.8-.64 4.7-3.01 11.2-4.79 19.3-4.32 9.5.54 17.4 6.12 21.6 13.14 4.2 7.01 5.5 15.14 5 23.1-.4 7.96-2.6 15.83-6.8 22.63-4.2 6.7-11 12.6-19.8 13.8-7.6 1.1-14.5-.9-19.1-4.2-1.9-1.4-3.3-2.9-4.6-4.4-1 2.9-1.6 9.6-.3 18.6 1.5 9.8 4.6 21.8 7.8 34 0 .1 0 .2.1.2 8.7 2.3 17.2 4.3 24.8 5.5 10.2 1.6 18.6 1.5 22.6 0 2-.7 2.7-1.2 3.5-1.7 0-.1 0-.1-.1-.2-3.9-5.5-14.1-16.9-12.9-33.9.7-9.7 7.4-17.6 15.1-20.8 3.9-1.6 8-2.4 12.1-2.6 4.2-.2 8.4.1 12.6.9 8.3 1.5 16.5 4.8 23.4 9.7 6.9 4.9 12.8 11.7 14.1 20.8 2 13.8-5.3 23.4-9.3 28.2l.2.2c5.9 2.8 19.2 1.4 30.6-2.3 2.4-.7 4.7-1.6 6.9-2.4V18zm73.3 114c-3.3 0-6.2.5-8.1 1.2-3 1.3-3.8 1.9-4 5.4-.7 9.6 4.5 15.1 9.6 22.3 1.3 1.8 2.6 3.7 3.6 6.2 1.1 2.6 1.7 6.4.6 10-2.4 7.3-8.5 10.2-16.1 13-9.6 3.6-20.2 2.7-31.7.9-5.5-.9-11.2-2.1-17-3.5 1.3 5.6 2.5 11.2 3.3 16.6 1.8 11.6 2.5 22.4-1.9 32-3.1 6.9-4.1 10.8-9.8 14.5-2.8 1.8-8.1 2.1-11 .8-2.8-1.3-3.9-2.7-5-3.8-4.2-4.3-5.1-7.4-15.4-6.8-3.7.2-4.8 1.2-6.3 4.2-1.5 2.9-2.3 8-1.8 13.3.6 5.4 2.4 10.8 4.7 14.2 2.2 3.5 4 4.3 5.3 4.3 7 .1 10.8-3.3 17.4-6.7 3.3-1.8 8.8-3.9 14.6-1.6 5.7 2.3 8.7 7 11.6 12.9 4.9 10.1 7 24.3 7.7 40.1.9-.1 1.9-.3 2.8-.5 11.2-1.9 21.6-2.8 31.2.7 3.8 1.4 6.7 2.7 9.4 4.5 2.6 1.8 5.5 4.6 6.4 8.7.9 4.2-.7 7.9-2.1 10.1-1.4 2.3-2.9 3.7-4.3 5.2-5.7 5.7-10.4 9.2-9.3 17.1.4 2.8 2.2 5.4 6.5 7.9 4.2 2.6 10.5 4.5 16.8 5 6.3.5 12.5-.4 16.5-2.1 3.9-1.7 5-3.1 5.3-5.2 1.1-7.3-3-11.5-8.1-18.3-2.5-3.4-6.1-7.8-5.5-14.7.6-6.9 5.9-11.9 12.5-15.7 14.9-8.4 32.3-4.9 45.7-.6.5.2 1 .3 1.5.5V188.2c-.5.2-.9.3-1.4.5-13.1 4.2-29.5 8.3-44 1.2-2.9-1.4-5.3-2.8-7.5-4.7-2.2-2-4.3-4.8-4.9-8.4-.5-3.6.7-6.8 1.8-8.8 1.2-2 2.4-3.4 3.4-4.7 4.4-5 7.6-7.3 6.4-15.3-.3-2.4-2.4-5.7-6.7-8.8-4.3-3-10.4-5.5-16.3-6.6-2.2-.4-4.4-.6-6.4-.6zm-241.1 33h-.6l1.3 4.1c3.7 12 7.5 24.3 9.6 35.7 2 11.4 2.9 22.1-2 31.7-1.7 3.4-3.3 6-5.3 8.4-2 2.3-5.1 4.9-9.6 5.1-4.4.2-7.7-2.2-9.5-4-1.7-1.7-2.8-3.2-3.8-4.7-2.2-3-4.1-5.6-6.2-7.1-2-1.6-3.8-2.5-8.2-2-3.1.4-5.5 2.1-8 6.2-2.4 4.2-4.1 10.4-4.5 16.7-.3 6.3.8 12.6 2.7 16.7 1.9 4.1 3.7 5.5 6.1 5.8 8 1.2 12.5-2.9 19.4-7.7 3.4-2.4 7.6-5.7 14.4-5.2 6.8.5 11.9 5.8 15.4 12.1 4.9 9 3.7 18.9 1.9 29.9-1.9 10.9-5.2 23.1-8.5 35.3-.2.7-.4 1.3-.6 2 17.5-1 33.9-4 41.8-7.9.1 0 .1 0 .1-.1-2.9-4.5-4.6-10.8-4.2-18.7.4-9.6 5.8-17.5 12.5-22.1 6.7-4.6 14.6-6.5 22.4-6.8 7.8-.3 15.5 1 22.1 4.6 6.7 3.6 12.7 10.5 12.9 19.3.2 10.3-3.8 17.7-5.9 21.1 1 .8 2.4 1.8 4.6 3 1.9 1.1 8.6 1.9 17.6.4 9-1.4 20.2-4.4 31.7-7.5 4.6-1.2 9.2-2.5 13.8-3.7-.7-16.3-3.2-30.8-5.9-36.3-.8-1.8-1.4-2.5-1.9-3.1-3.8 2-12.7 8.8-25.8 8.6-8.9-.1-15.8-5.9-20.1-12.4-4.2-6.5-6.7-14.3-7.5-22.2-.8-8-.1-16.2 3.7-23.5 3.8-7.3 11.7-13.3 21.3-13.9 11.6-.6 19.7 4.2 24.6 8.1.4-.9.8-1.2 1.3-2.3 1.5-3.4 2-11.6.4-21.8-1.1-7.3-3-15.7-5.2-24.3-11.6-3-22.7-5.9-31.8-7.3-9.3-1.5-16.3-.7-17.9.1-.9.5-1.1.8-1.8 1.2 2.9 4.6 6.4 12.4 4.9 22.7-2.5 17-18.3 26.6-33.1 28.7-7.4 1-15.2.3-22-3.4-6.8-3.7-12.3-11.1-13.3-20.1-1.7-15.5 5-26.6 6.4-30.5-.7-.5-2.5-1.7-6.9-3.4-8.9-3.4-25.4-5.4-42.8-5.5zm-19.3.8c-18.8 1.5-36.2 5.5-43 9.2-1.8 1-2.6 1.7-3.2 2.3 2.6 3.9 10.7 13.3 9.5 27.2-.7 8.7-7.1 15.4-14 18.4-6.9 3.1-14.59 3.7-22.28 2.8-7.68-1-15.4-3.6-21.94-8.2-6.54-4.7-11.98-12-13.11-21.1-1-8 .83-14.9 3.96-19.7 1.16-1.8 2.43-3.2 3.67-4.4-.15-.1-.16-.1-.32-.2-9.19-4.7-22.44-3.7-33.62-.6-2.01.5-3.87 1.1-5.66 1.7v166.3c1.77.6 3.62 1.2 5.61 1.7 11.14 3.1 24.39 4.2 33.75-.5 1.85-.9 2.57-1.5 3.56-2.2-3.68-4.6-10.31-14-8.81-28 1.01-9.3 6.82-16.7 13.8-20.9 6.98-4.2 15.06-5.8 23.03-5.8 7.96 0 15.86 1.7 22.76 5.6 6.8 3.8 12.9 10.5 14.1 19.3 1.7 13-5.2 22-8.9 26.4.6.4.7.6 1.8 1.2 6.4 3.6 24.6 7.1 43.9 7.8.7-2.3 1.3-4.5 1.9-6.8 3.3-12.2 6.5-24.1 8.1-33.6 1.6-9.6.9-16.8.1-18.2-.8-1.5-1.1-1.8-1.4-2.2-.5.3-1.2.6-2.3 1.4-5.7 3.9-16.7 13-32.3 10.7-9.4-1.3-16.2-8.4-19.8-16-3.6-7.7-4.8-16.5-4.3-25.2.4-8.7 2.5-17.5 6.9-24.9 4.4-7.5 11.9-13.9 21.6-15 8.5-.9 15.9 1.7 20.9 5.5 3.6 2.6 5.9 5.5 7.8 8 1.3-3.1 1.8-10.3 0-19.8-1.7-9.8-5.3-21.6-9-33.5-.9-2.9-1.9-5.8-2.8-8.7zm-69.15 136c-5.26 0-10.41 1.2-13.69 3.2-3.28 2-4.77 3.9-5.15 7.4-1.03 9.7 2.36 11.6 6.69 17.1 1.09 1.4 2.36 3 3.34 5.6.99 2.6 1.15 6.7-.27 9.9-2.82 6.3-7.52 8.4-14.37 11.9-15.82 7.8-33.29 5.3-46.58 1.7-.28-.1-.54-.2-.82-.3V494h136.3c-2.6-11.7-3.1-26.4 4.5-39.8 3.3-5.8 4.8-9.1 9.1-12.2 2.1-1.6 6.2-2.9 9.4-2.1 3.2.7 4.8 2.2 5.8 3.1 2 1.8 2.6 2.5 3.7 3s2.6 1.1 6.6.6c1.6-.2 4.1-1.7 6.5-6 2.5-4.2 4.4-10.5 4.9-16.7.5-6.1-.5-12.1-2.2-15.6-1.7-3.5-2.9-4.6-6.4-4.8-4.6-.3-6.6.8-8.6 2.4-2 1.6-3.7 4.2-5.3 7-.9 1.3-1.6 2.7-3.1 4.5-.7.9-1.7 2-3.6 3-1.8 1.1-5 1.7-7.6 1-5.3-1.3-6.6-4.5-7.9-6.8-1.3-2.4-2.4-5-3.8-8.6-3.6-9.7-2.6-20.5-.6-32.2.7-3.8 1.5-7.8 2.4-11.8-19-.7-36.4-3.4-48.2-9.9-6-3.4-10.72-6.3-12.42-12.9-.84-3.3-.1-6.9 1-9.1 1.08-2.3 2.32-3.7 3.32-5 4.3-5.1 7.1-6.6 6.1-14.1-.3-2.1-1.5-4-5-5.9-4.72-2.1-9.73-3.3-14.05-3.3zm378.75 35.6c-4.7 0-8.9.8-12 2.5-1.7 1-2.2 1.5-2.7 1.8.3.5.5 1.1 1.3 2.2 4.1 5.4 13.8 16.1 11.5 31.6-1.3 9.3-8.5 16-16.1 19.2-7.7 3.2-16.3 4.1-25 3.4-8.6-.7-17.2-3-24.6-7.4-7.3-4.4-13.8-11.6-15-21-2.1-15.2 7.3-25.2 12.7-30.6-.5-.2-.5-.2-1.2-.5-3.9-1.4-12.1-1.5-22 .2-1.8.3-3.7.6-5.6 1-.4 21.7-3 43.6-8.9 58.7-2.9 7.5-5.4 12.9-11.4 16.1-3.1 1.6-6.8 2-9.7 1.5-2.8-.6-4.9-1.6-6.8-2.6-7.5-4-12.5-8.5-23-8.1-3.7.1-4 .7-5.2 3.5-1.1 2.8-1.6 8.2-.5 13.8 1 5.6 3.4 11.4 6.2 15.2 2.7 3.8 5.2 4.9 6.3 5 6.7.1 7.1-2.2 12.1-6.4 1.2-1.1 2.8-2.5 5.6-3.4 2.8-.9 6.8-.5 9.5.9 5.5 2.9 7.5 6.8 11 13 8.3 14.7 6.2 31.9 3.2 45.3-.1.6-.3 1.1-.4 1.7H494V343.2c-2.2-.8-4.5-1.7-6.9-2.4-6.4-2.1-13.4-3.3-19.5-3.4z`,
        },
        child: [],
      },
    ],
  })(e);
}
var y = r(),
  b = () => {
    let { getCompanyList: e, getJobSingleDetail: t } = o(),
      [n, r] = (0, m.useState)([]),
      [c, p] = (0, m.useState)([]),
      b = async () => {
        try {
          let t = await e();
          r(t || []);
        } catch (e) {
          console.log(e);
        }
      },
      x = async () => {
        try {
          let e = await t();
          p(e?.data);
        } catch (e) {
          console.error(`Error fetching job locations:`, e);
        }
      };
    return (
      (0, m.useEffect)(() => {
        (b(), x());
      }, []),
      (0, y.jsxs)(`div`, {
        className: `bg-slate-50 min-h-screen text-slate-800 font-sans`,
        children: [
          (0, y.jsx)(`section`, {
            className: `py-20 md:py-28 bg-white border-b border-slate-100`,
            children: (0, y.jsxs)(`div`, {
              className: `max-w-4xl mx-auto px-4 text-center`,
              children: [
                (0, y.jsx)(`p`, {
                  className: `text-sm font-semibold text-[#2563EB] tracking-wider uppercase mb-3`,
                  children: `⭐ Find Jobs, Hire Talent, Succeed Together`,
                }),
                (0, y.jsxs)(`h1`, {
                  className: `text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight`,
                  children: [
                    `The Perfect Match for `,
                    (0, y.jsx)(`span`, {
                      className: `text-[#2563EB]`,
                      children: `Employers`,
                    }),
                    ` and `,
                    (0, y.jsx)(`span`, {
                      className: `text-[#2563EB]`,
                      children: `Job Seekers`,
                    }),
                  ],
                }),
                (0, y.jsx)(`p`, {
                  className: `text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed`,
                  children: `Welcome to Career tech guru, the ultimate destination for employers and job seekers. Whether you're looking to hire top talent or searching for your dream job, we provide a seamless and efficient platform to connect the right people with the right opportunities.`,
                }),
              ],
            }),
          }),
          (0, y.jsx)(`section`, {
            className: `py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: (0, y.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`,
              children: [
                (0, y.jsx)(`div`, {
                  className: `order-2 lg:order-1`,
                  children: (0, y.jsx)(`img`, {
                    src: `https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
                    alt: `What we do`,
                    className: `w-full h-[350px] object-cover rounded-2xl shadow-md border border-slate-100`,
                  }),
                }),
                (0, y.jsxs)(`div`, {
                  className: `order-1 lg:order-2 space-y-6`,
                  children: [
                    (0, y.jsx)(`h4`, {
                      className: `text-xs font-semibold text-[#2563EB] tracking-wider uppercase`,
                      children: `What we do`,
                    }),
                    (0, y.jsxs)(`h2`, {
                      className: `text-3xl md:text-4xl font-bold text-slate-900 leading-snug`,
                      children: [
                        `Career Techguru matches awesome people with `,
                        (0, y.jsx)(`span`, {
                          className: `text-[#2563EB]`,
                          children: `awesome jobs.`,
                        }),
                      ],
                    }),
                    (0, y.jsxs)(`ul`, {
                      className: `space-y-4 p-0 list-none`,
                      children: [
                        (0, y.jsxs)(`li`, {
                          className: `flex gap-3 items-start text-sm md:text-base text-slate-600`,
                          children: [
                            (0, y.jsx)(`span`, {
                              className: `mt-1 flex-shrink-0`,
                              children: (0, y.jsx)(d, { size: 18 }),
                            }),
                            (0, y.jsx)(`span`, {
                              children: `We find talented professionals around the world (7 million and counting).`,
                            }),
                          ],
                        }),
                        (0, y.jsxs)(`li`, {
                          className: `flex gap-3 items-start text-sm md:text-base text-slate-600`,
                          children: [
                            (0, y.jsx)(`span`, {
                              className: `mt-1 flex-shrink-0`,
                              children: (0, y.jsx)(d, { size: 18 }),
                            }),
                            (0, y.jsx)(`span`, {
                              children: `Empower them to prove their aptitude, abilities & attitude are world-class.`,
                            }),
                          ],
                        }),
                        (0, y.jsxs)(`li`, {
                          className: `flex gap-3 items-start text-sm md:text-base text-slate-600`,
                          children: [
                            (0, y.jsx)(`span`, {
                              className: `mt-1 flex-shrink-0`,
                              children: (0, y.jsx)(d, { size: 18 }),
                            }),
                            (0, y.jsx)(`span`, {
                              children: `Enable companies to recruit the best 1% for premium remote full-time jobs.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, y.jsx)(`section`, {
            className: `py-16 bg-[#2563EB] text-white my-8`,
            children: (0, y.jsxs)(`div`, {
              className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
              children: [
                (0, y.jsxs)(`div`, {
                  className: `flex justify-between items-center mb-10 pb-6 border-b border-white/20 flex-wrap gap-4`,
                  children: [
                    (0, y.jsx)(`span`, {
                      className: `text-xs font-bold tracking-widest uppercase text-blue-100`,
                      children: `What we do`,
                    }),
                    (0, y.jsx)(`span`, {
                      className: `text-xs font-bold tracking-widest uppercase text-blue-100`,
                      children: `our vision`,
                    }),
                  ],
                }),
                (0, y.jsx)(`h2`, {
                  className: `text-3xl md:text-5xl font-bold mb-12 text-white text-center md:text-left`,
                  children: `Recruitment sucks. So we’re fixing it.`,
                }),
                (0, y.jsxs)(`div`, {
                  className: `grid grid-cols-1 md:grid-cols-3 gap-8`,
                  children: [
                    (0, y.jsxs)(`div`, {
                      className: `bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 space-y-4`,
                      children: [
                        (0, y.jsxs)(`div`, {
                          className: `flex items-center gap-3 text-white`,
                          children: [
                            (0, y.jsx)(`span`, {
                              className: `text-2xl`,
                              children: (0, y.jsx)(l, {}),
                            }),
                            (0, y.jsx)(`h4`, {
                              className: `text-lg font-semibold`,
                              children: `The Olympics of work`,
                            }),
                          ],
                        }),
                        (0, y.jsx)(`p`, {
                          className: `text-sm text-blue-50 leading-relaxed`,
                          children: `It’s super hard to qualify—extreme quality standards ensure every single team member is at the top of their game.`,
                        }),
                      ],
                    }),
                    (0, y.jsxs)(`div`, {
                      className: `bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 space-y-4`,
                      children: [
                        (0, y.jsxs)(`div`, {
                          className: `flex items-center gap-3 text-white`,
                          children: [
                            (0, y.jsx)(`span`, {
                              className: `text-2xl`,
                              children: (0, y.jsx)(i, {}),
                            }),
                            (0, y.jsx)(`h4`, {
                              className: `text-lg font-semibold`,
                              children: `Premium pay for premium talent`,
                            }),
                          ],
                        }),
                        (0, y.jsx)(`p`, {
                          className: `text-sm text-blue-50 leading-relaxed`,
                          children: `Over 50% of new hires double or triple their previous pay. Why? Because that’s what the best person in the world is worth.`,
                        }),
                      ],
                    }),
                    (0, y.jsxs)(`div`, {
                      className: `bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 space-y-4`,
                      children: [
                        (0, y.jsxs)(`div`, {
                          className: `flex items-center gap-3 text-white`,
                          children: [
                            (0, y.jsx)(`span`, {
                              className: `text-2xl`,
                              children: (0, y.jsx)(l, {}),
                            }),
                            (0, y.jsx)(`h4`, {
                              className: `text-lg font-semibold`,
                              children: `Shortlist by skills, not bias`,
                            }),
                          ],
                        }),
                        (0, y.jsx)(`p`, {
                          className: `text-sm text-blue-50 leading-relaxed`,
                          children: `We don’t care where you went to school, what color your hair is, or whether we can pronounce your name. Just prove you’ve got the skills.`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          n &&
            n.length > 0 &&
            (0, y.jsxs)(`section`, {
              className: `py-20 bg-white`,
              children: [
                (0, y.jsxs)(`div`, {
                  className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center md:text-left`,
                  children: [
                    (0, y.jsx)(`h3`, {
                      className: `text-xs font-semibold text-[#2563EB] tracking-wider uppercase mb-2`,
                      children: `Top companies hiring from us`,
                    }),
                    (0, y.jsx)(`p`, {
                      className: `text-lg text-slate-500`,
                      children: `To find the best person in the world, not the best person in their zipcode.`,
                    }),
                  ],
                }),
                (0, y.jsx)(`div`, {
                  className: `py-4 border-y border-slate-100 bg-slate-50/50`,
                  children: (0, y.jsx)(h.default, {
                    speed: 40,
                    gradient: !1,
                    children: (0, y.jsx)(`div`, {
                      className: `flex gap-8 items-center py-2 px-4`,
                      children: n.map((e, t) =>
                        (0, y.jsx)(
                          `div`,
                          {
                            className: `bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-36 h-20 flex items-center justify-center`,
                            children: (0, y.jsx)(`img`, {
                              src: e?.profilePicture,
                              alt: `Company Logo`,
                              className: `max-h-full max-w-full object-contain`,
                            }),
                          },
                          e.id || t,
                        ),
                      ),
                    }),
                  }),
                }),
              ],
            }),
          (0, y.jsx)(`section`, {
            className: `py-20 bg-slate-900 text-white`,
            children: (0, y.jsxs)(`div`, {
              className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
              children: [
                (0, y.jsxs)(`div`, {
                  className: `space-y-4 mb-14 text-center md:text-left`,
                  children: [
                    (0, y.jsx)(`h4`, {
                      className: `text-xs font-semibold text-[#2563EB] tracking-wider uppercase`,
                      children: `How it works ?`,
                    }),
                    (0, y.jsx)(`h2`, {
                      className: `text-3xl md:text-4xl font-bold text-white`,
                      children: `Applying for a role? Here’s what to expect.`,
                    }),
                    (0, y.jsx)(`p`, {
                      className: `text-sm text-slate-400 max-w-2xl`,
                      children: `We’ve curated a series of steps that take the guesswork (and cognitive bias) out of recruiting the best person.`,
                    }),
                  ],
                }),
                (0, y.jsxs)(`div`, {
                  className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6`,
                  children: [
                    (0, y.jsxs)(`div`, {
                      className: `bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between`,
                      children: [
                        (0, y.jsx)(`div`, {
                          className: `text-3xl text-blue-400 mb-6`,
                          children: (0, y.jsx)(g, {}),
                        }),
                        (0, y.jsxs)(`div`, {
                          children: [
                            (0, y.jsx)(`p`, {
                              className: `text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1`,
                              children: `step 1`,
                            }),
                            (0, y.jsx)(`h5`, {
                              className: `text-sm font-semibold text-white`,
                              children: `Pass Cognitive Aptitude Test.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, y.jsxs)(`div`, {
                      className: `bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between`,
                      children: [
                        (0, y.jsx)(`div`, {
                          className: `text-3xl text-blue-400 mb-6`,
                          children: (0, y.jsx)(f, {}),
                        }),
                        (0, y.jsxs)(`div`, {
                          children: [
                            (0, y.jsx)(`p`, {
                              className: `text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1`,
                              children: `step 2`,
                            }),
                            (0, y.jsx)(`h5`, {
                              className: `text-sm font-semibold text-white`,
                              children: `Pass English Proficiency Test.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, y.jsxs)(`div`, {
                      className: `bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between`,
                      children: [
                        (0, y.jsx)(`div`, {
                          className: `text-3xl text-blue-400 mb-6`,
                          children: (0, y.jsx)(v, {}),
                        }),
                        (0, y.jsxs)(`div`, {
                          children: [
                            (0, y.jsx)(`p`, {
                              className: `text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1`,
                              children: `step 3`,
                            }),
                            (0, y.jsx)(`h5`, {
                              className: `text-sm font-semibold text-white`,
                              children: `Prove Real-World Job Skills.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, y.jsxs)(`div`, {
                      className: `bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between`,
                      children: [
                        (0, y.jsx)(`div`, {
                          className: `text-3xl text-blue-400 mb-6`,
                          children: (0, y.jsx)(a, {}),
                        }),
                        (0, y.jsxs)(`div`, {
                          children: [
                            (0, y.jsx)(`p`, {
                              className: `text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1`,
                              children: `step 4`,
                            }),
                            (0, y.jsx)(`h5`, {
                              className: `text-sm font-semibold text-white`,
                              children: `Ace An Interview Or Two.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, y.jsxs)(`div`, {
                      className: `bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between`,
                      children: [
                        (0, y.jsx)(`div`, {
                          className: `text-3xl text-blue-400 mb-6`,
                          children: (0, y.jsx)(_, {}),
                        }),
                        (0, y.jsxs)(`div`, {
                          children: [
                            (0, y.jsx)(`p`, {
                              className: `text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1`,
                              children: `step 5`,
                            }),
                            (0, y.jsx)(`h5`, {
                              className: `text-sm font-semibold text-white`,
                              children: `Accept Job Offer.`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, y.jsxs)(`div`, {
                      className: `bg-slate-800/50 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between`,
                      children: [
                        (0, y.jsx)(`div`, {
                          className: `text-3xl text-blue-400 mb-6`,
                          children: (0, y.jsx)(u, {}),
                        }),
                        (0, y.jsxs)(`div`, {
                          children: [
                            (0, y.jsx)(`p`, {
                              className: `text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1`,
                              children: `step 6`,
                            }),
                            (0, y.jsx)(`h5`, {
                              className: `text-sm font-semibold text-white`,
                              children: `Celebrate!`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          c &&
            c.length > 0 &&
            (0, y.jsxs)(`section`, {
              className: `py-20 bg-white`,
              children: [
                (0, y.jsxs)(`div`, {
                  className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center md:text-left`,
                  children: [
                    (0, y.jsx)(`h3`, {
                      className: `text-xs font-semibold text-[#2563EB] tracking-wider uppercase mb-2`,
                      children: `Find nearest jobs from you`,
                    }),
                    (0, y.jsx)(`p`, {
                      className: `text-lg text-slate-500`,
                      children: `To find the best location near to you.`,
                    }),
                  ],
                }),
                (0, y.jsx)(`div`, {
                  className: `py-2 border-y border-slate-100 bg-slate-50/50`,
                  children: (0, y.jsx)(h.default, {
                    speed: 30,
                    gradient: !1,
                    children: (0, y.jsx)(`div`, {
                      className: `flex gap-6 py-2 px-4`,
                      children: c.map((e, t) =>
                        (0, y.jsx)(
                          `div`,
                          {
                            className: `bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm w-44 text-center`,
                            children: (0, y.jsx)(`span`, {
                              className: `font-medium text-slate-700 capitalize text-sm`,
                              children: e,
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  }),
                }),
              ],
            }),
          (0, y.jsx)(`section`, {
            className: `py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-white`,
            children: (0, y.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`,
              children: [
                (0, y.jsx)(`div`, {
                  className: `flex justify-center`,
                  children: (0, y.jsx)(`img`, {
                    src: s,
                    alt: `About logo`,
                    className: `max-h-60 rounded-xl object-contain shadow-sm border border-slate-100 p-4`,
                  }),
                }),
                (0, y.jsxs)(`div`, {
                  className: `space-y-6`,
                  children: [
                    (0, y.jsx)(`h2`, {
                      className: `text-3xl font-bold text-slate-900`,
                      children: `About Career Techguru`,
                    }),
                    (0, y.jsx)(`p`, {
                      className: `text-slate-500 leading-relaxed text-sm md:text-base`,
                      children: `Career Techguru is a job seeker and job advertising tool created by the developer team at ESPS Pvt Ltd. CTG uses web scraping technology to actively interact with third-party job posting websites and apply to many jobs.`,
                    }),
                    (0, y.jsx)(`button`, {
                      className: `bg-[#2563EB] hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-lg transition-colors border-0 shadow-sm`,
                      children: `Explore more`,
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })
    );
  };
export { b as default };
