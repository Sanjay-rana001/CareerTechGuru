import { a as e, i as t, n, r, t as i } from "./jsx-runtime-CjtlecKO.js";
import {
  J as a,
  S as o,
  at as s,
  b as c,
  dt as l,
  ft as u,
  it as d,
  mt as f,
  nt as p,
  rt as m,
  x as h,
} from "./index-D6kauhrE.js";
import { t as g } from "./build-0CSi1ee1.js";
var _ = e(n()),
  v = i(),
  y = ({ nextStep: e, handleInputChange: t, formData: n }) => {
    let [r, i] = (0, _.useState)({
        role: ``,
        email: ``,
        username: ``,
        password: ``,
        confirmPassword: ``,
      }),
      [a, s] = (0, _.useState)(``),
      [c, l] = (0, _.useState)(!1),
      u = () => {
        let e = !0,
          t = {};
        return (
          n.email.trim() || ((t.email = `Email is required`), (e = !1)),
          n.username.trim() ||
            ((t.username = `Username is required`), (e = !1)),
          n.role || ((t.role = `Please select an option`), (e = !1)),
          n.password.trim()
            ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(
                n.password,
              ) ||
              ((t.password = `Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character`),
              (e = !1))
            : ((t.password = `Password is required`), (e = !1)),
          n.password !== a &&
            ((t.confirmPassword = `Passwords do not match`), (e = !1)),
          i(t),
          e
        );
      };
    return (0, v.jsxs)(`form`, {
      className: `space-y-4`,
      children: [
        (0, v.jsxs)(`div`, {
          className: `flex flex-col gap-1.5`,
          children: [
            (0, v.jsx)(`label`, {
              htmlFor: `role`,
              className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
              children: `What are you looking for`,
            }),
            (0, v.jsx)(h, {
              options: [
                { value: `user`, label: `Looking for job` },
                { value: `admin`, label: `Hire employees` },
              ],
              value: n.role,
              onChange: t(`role`),
            }),
            r.role &&
              (0, v.jsx)(`p`, {
                className: `text-red-500 text-xs font-medium mb-0`,
                children: r.role,
              }),
          ],
        }),
        (0, v.jsxs)(`div`, {
          className: `flex flex-col gap-1.5`,
          children: [
            (0, v.jsx)(`label`, {
              htmlFor: `username`,
              className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
              children: `Username`,
            }),
            (0, v.jsx)(o, {
              type: `text`,
              placeholder: `Enter your username`,
              name: `username`,
              value: n.username,
              onChange: t(`username`),
            }),
            r.username &&
              (0, v.jsx)(`p`, {
                className: `text-red-500 text-xs font-medium mb-0`,
                children: r.username,
              }),
          ],
        }),
        (0, v.jsxs)(`div`, {
          className: `flex flex-col gap-1.5`,
          children: [
            (0, v.jsxs)(`label`, {
              htmlFor: `email`,
              className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
              children: [
                `Email `,
                (0, v.jsx)(`sup`, { className: `text-red-500`, children: `*` }),
              ],
            }),
            (0, v.jsx)(o, {
              type: `text`,
              placeholder: `e.g. abc@example.com`,
              name: `email`,
              value: n.email,
              onChange: t(`email`),
            }),
            r.email &&
              (0, v.jsx)(`p`, {
                className: `text-red-500 text-xs font-medium mb-0`,
                children: r.email,
              }),
          ],
        }),
        (0, v.jsxs)(`div`, {
          className: `flex flex-col gap-1.5`,
          children: [
            (0, v.jsxs)(`label`, {
              htmlFor: `password`,
              className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
              children: [
                `Password `,
                (0, v.jsx)(`sup`, { className: `text-red-500`, children: `*` }),
              ],
            }),
            (0, v.jsx)(o, {
              type: c ? `text` : `password`,
              placeholder: `Enter password`,
              name: `password`,
              value: n.password,
              onChange: t(`password`),
            }),
            r.password &&
              (0, v.jsx)(`p`, {
                className: `text-red-500 text-xs font-medium mb-0`,
                children: r.password,
              }),
          ],
        }),
        (0, v.jsxs)(`div`, {
          className: `flex flex-col gap-1.5`,
          children: [
            (0, v.jsxs)(`label`, {
              htmlFor: `confirmPassword`,
              className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
              children: [
                `Confirm Password `,
                (0, v.jsx)(`sup`, { className: `text-red-500`, children: `*` }),
              ],
            }),
            (0, v.jsx)(o, {
              type: c ? `text` : `password`,
              placeholder: `Confirm password`,
              name: `confirmPassword`,
              value: a,
              onChange: (e) => s(e.target.value),
            }),
            r.confirmPassword &&
              (0, v.jsx)(`p`, {
                className: `text-red-500 text-xs font-medium mb-0`,
                children: r.confirmPassword,
              }),
          ],
        }),
        (0, v.jsxs)(`div`, {
          className: `flex items-center gap-2 pt-1`,
          children: [
            (0, v.jsx)(`input`, {
              type: `checkbox`,
              checked: c,
              onChange: () => {
                l(!c);
              },
              id: `flexCheckDefault`,
              className: `rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]`,
            }),
            (0, v.jsx)(`label`, {
              className: `text-xs font-medium text-slate-500 cursor-pointer select-none`,
              htmlFor: `flexCheckDefault`,
              children: `Show password`,
            }),
          ],
        }),
        (0, v.jsx)(`div`, {
          className: `pt-3`,
          children: (0, v.jsx)(`button`, {
            onClick: (t) => {
              (t.preventDefault(), u() && e());
            },
            className: `w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg border-0 shadow-sm transition-colors text-sm`,
            children: `Continue`,
          }),
        }),
      ],
    });
  },
  b = r((e, t) => {
    (function (r, i) {
      typeof e == `object` && t !== void 0
        ? i(e, n())
        : typeof define == `function` && define.amd
          ? define([`exports`, `react`], i)
          : i(
              ((r =
                typeof globalThis < `u`
                  ? globalThis
                  : r || self).ReactCountryStateCity = {}),
              r.React,
            );
    })(e, function (e, t) {
      function n(e, t, n, r) {
        return new (n ||= Promise)(function (i, a) {
          function o(e) {
            try {
              c(r.next(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(o, s);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function r(e, t) {
        var n,
          r,
          i,
          a,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (a = { next: s(0), throw: s(1), return: s(2) }),
          typeof Symbol == `function` &&
            (a[Symbol.iterator] = function () {
              return this;
            }),
          a
        );
        function s(s) {
          return function (c) {
            return (function (s) {
              if (n) throw TypeError(`Generator is already executing.`);
              for (; a && ((a = 0), s[0] && (o = 0)), o;)
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & s[0]
                          ? r.return
                          : s[0]
                            ? r.throw || ((i = r.return) && i.call(r), 0)
                            : r.next) &&
                      !(i = i.call(r, s[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return (o.label++, { value: s[1], done: !1 });
                    case 5:
                      (o.label++, (r = s[1]), (s = [0]));
                      continue;
                    case 7:
                      ((s = o.ops.pop()), o.trys.pop());
                      continue;
                    default:
                      if (
                        ((i = o.trys),
                        !(
                          (i = i.length > 0 && i[i.length - 1]) ||
                          (s[0] !== 6 && s[0] !== 2)
                        ))
                      ) {
                        o = 0;
                        continue;
                      }
                      if (s[0] === 3 && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        o.label = s[1];
                        break;
                      }
                      if (s[0] === 6 && o.label < i[1]) {
                        ((o.label = i[1]), (i = s));
                        break;
                      }
                      if (i && o.label < i[2]) {
                        ((o.label = i[2]), o.ops.push(s));
                        break;
                      }
                      (i[2] && o.ops.pop(), o.trys.pop());
                      continue;
                  }
                  s = t.call(e, o);
                } catch (e) {
                  ((s = [6, e]), (r = 0));
                } finally {
                  n = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, c]);
          };
        }
      }
      var i = function () {
          return n(void 0, void 0, void 0, function () {
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    fetch(
                      `https://venkatmcajj.github.io/react-country-state-city/data/countriesminified.json`,
                    ).then(function (e) {
                      return e.json();
                    }),
                  ];
                case 1:
                  return [2, e.sent()];
              }
            });
          });
        },
        a = function () {
          return n(void 0, void 0, void 0, function () {
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    fetch(
                      `https://venkatmcajj.github.io/react-country-state-city/data/languagesminified.json`,
                    ).then(function (e) {
                      return e.json();
                    }),
                  ];
                case 1:
                  return [2, e.sent()];
              }
            });
          });
        },
        o = function (e) {
          return n(void 0, void 0, void 0, function () {
            var t, n;
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  return [
                    4,
                    fetch(
                      `https://venkatmcajj.github.io/react-country-state-city/data/statesminified.json`,
                    ).then(function (e) {
                      return e.json();
                    }),
                  ];
                case 1:
                  return (
                    (t = r.sent()),
                    (n = t.find(function (t) {
                      return t.id === e;
                    })),
                    [2, n && n.states ? n.states : []]
                  );
              }
            });
          });
        },
        s = function (e, t) {
          return n(void 0, void 0, void 0, function () {
            var n, i, a, o;
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  return [
                    4,
                    fetch(
                      `https://venkatmcajj.github.io/react-country-state-city/data/citiesminified.json`,
                    ).then(function (e) {
                      return e.json();
                    }),
                  ];
                case 1:
                  return (
                    (n = r.sent()),
                    (i = n.find(function (t) {
                      return t.id === e;
                    }))
                      ? ((a = i && i.states ? i.states : []),
                        [
                          2,
                          (o = a.find(function (e) {
                            return e.id === t;
                          })) && o.cities
                            ? o.cities
                            : [],
                        ])
                      : [2, []]
                  );
              }
            });
          });
        },
        c = function () {
          return t.createElement(
            `svg`,
            { height: `20`, width: `20`, viewBox: `0 0 20 20` },
            t.createElement(`path`, {
              d: `M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z`,
            }),
          );
        },
        l = function (e) {
          var n = e.placeHolder,
            r = e.options,
            i = e.onChange,
            a = e.inputClassName,
            o = e.onTextChange,
            s = e.defaultValue,
            l = e.showFlag,
            u = l === void 0 || l,
            d = t.useState(!1),
            f = d[0],
            p = d[1],
            m = t.useState(),
            h = m[0],
            g = m[1],
            _ = t.useState(``),
            v = _[0],
            y = _[1],
            b = t.useRef(null),
            x = t.useRef(null);
          (t.useEffect(
            function () {
              s && g(s);
            },
            [s],
          ),
            t.useEffect(
              function () {
                (y(``), f && b.current && b.current.focus());
              },
              [f],
            ),
            t.useEffect(function () {
              var e = function (e) {
                x.current && !x.current.contains(e.target) && p(!1);
              };
              return (
                window.addEventListener(`click`, e),
                function () {
                  window.removeEventListener(`click`, e);
                }
              );
            }));
          var S = function (e) {
            return !!h && h.id === e.id;
          };
          return t.createElement(
            `div`,
            { className: `stdropdown-container` },
            t.createElement(
              `div`,
              {
                ref: x,
                onClick: function () {
                  p(!0);
                },
                className: `stdropdown-input stsearch-box`,
              },
              t.createElement(`input`, {
                className: a,
                onChange: function (e) {
                  (y(e.target.value), g(void 0), o && o(e));
                },
                value: h
                  ? `${u && `emoji` in h ? h.emoji : ``} ${h.name}`
                  : v || ``,
                placeholder: n,
                ref: b,
              }),
              t.createElement(
                `div`,
                { className: `stdropdown-tools` },
                t.createElement(
                  `div`,
                  { className: `stdropdown-tool` },
                  t.createElement(c, null),
                ),
              ),
            ),
            f &&
              t.createElement(
                `div`,
                { className: `stdropdown-menu` },
                (v
                  ? r.filter(function (e) {
                      return e.name.toLowerCase().indexOf(v.toLowerCase()) >= 0;
                    })
                  : r
                ).map(function (e) {
                  return t.createElement(
                    `div`,
                    {
                      onClick: function () {
                        return (function (e) {
                          (g(e), i(e));
                        })(e);
                      },
                      key: e.id,
                      className: `stdropdown-item ${S(e) && `selected`}`,
                    },
                    u &&
                      t.createElement(
                        `span`,
                        null,
                        `emoji` in e ? e.emoji : ``,
                      ),
                    ` `,
                    e.name,
                  );
                }),
              ),
          );
        },
        u = function () {
          return t.createElement(
            `svg`,
            { height: `20`, width: `20`, viewBox: `0 0 20 20` },
            t.createElement(`path`, {
              d: `M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z`,
            }),
          );
        },
        d = function (e) {
          var n = e.placeHolder,
            r = e.options,
            i = e.onChange,
            a = e.inputClassName,
            o = e.onTextChange,
            s = e.defaultValue,
            c = e.displayNative,
            l = t.useState(!1),
            d = l[0],
            f = l[1],
            p = t.useState(),
            m = p[0],
            h = p[1],
            g = t.useState(``),
            _ = g[0],
            v = g[1],
            y = t.useRef(null),
            b = t.useRef(null);
          (t.useEffect(
            function () {
              s && h(s);
            },
            [s],
          ),
            t.useEffect(
              function () {
                (v(``), d && y.current && y.current.focus());
              },
              [d],
            ),
            t.useEffect(function () {
              var e = function (e) {
                b.current && !b.current.contains(e.target) && f(!1);
              };
              return (
                window.addEventListener(`click`, e),
                function () {
                  window.removeEventListener(`click`, e);
                }
              );
            }));
          var x = function (e) {
            return !!m && m.code === e.code;
          };
          return t.createElement(
            `div`,
            { className: `stdropdown-container` },
            t.createElement(
              `div`,
              {
                ref: b,
                onClick: function () {
                  f(!0);
                },
                className: `stdropdown-input stsearch-box`,
              },
              t.createElement(`input`, {
                className: a,
                onChange: function (e) {
                  (v(e.target.value), h(void 0), o && o(e));
                },
                value: m ? `${c ? m.native : m.name}` : _ || ``,
                placeholder: n,
                ref: y,
              }),
              t.createElement(
                `div`,
                { className: `stdropdown-tools` },
                t.createElement(
                  `div`,
                  { className: `stdropdown-tool` },
                  t.createElement(u, null),
                ),
              ),
            ),
            d &&
              t.createElement(
                `div`,
                { className: `stdropdown-menu` },
                (_
                  ? r.filter(function (e) {
                      return e.name.toLowerCase().indexOf(_.toLowerCase()) >= 0;
                    })
                  : r
                ).map(function (e) {
                  return t.createElement(
                    `div`,
                    {
                      onClick: function () {
                        return (function (e) {
                          (h(e), i(e));
                        })(e);
                      },
                      key: e.code,
                      className: `stdropdown-item ${x(e) && `selected`}`,
                    },
                    c ? e.native : e.name,
                  );
                }),
              ),
          );
        };
      ((e.CitySelect = function (e) {
        var n = e.containerClassName,
          r = e.inputClassName,
          i = e.onTextChange,
          a = e.defaultValue,
          o = e.onChange,
          c = e.countryid,
          u = e.stateid,
          d = e.placeHolder,
          f = t.useState([]),
          p = f[0],
          m = f[1];
        return (
          t.useEffect(
            function () {
              c &&
                s(c, u).then(function (e) {
                  m(e);
                });
            },
            [c, u],
          ),
          t.createElement(
            t.Fragment,
            null,
            t.createElement(
              `div`,
              { className: n, style: { position: `relative` } },
              t.createElement(l, {
                placeHolder: d,
                options: p,
                onChange: function (e) {
                  o && o(e);
                },
                onTextChange: i,
                defaultValue: a,
                inputClassName: r,
              }),
            ),
          )
        );
      }),
        (e.CountrySelect = function (e) {
          var n = e.containerClassName,
            r = e.inputClassName,
            a = e.onTextChange,
            o = e.defaultValue,
            s = e.onChange,
            c = e.placeHolder,
            u = e.showFlag,
            d = t.useState([]),
            f = d[0],
            p = d[1];
          return (
            t.useEffect(function () {
              i().then(function (e) {
                p(e);
              });
            }, []),
            t.createElement(
              t.Fragment,
              null,
              t.createElement(
                `div`,
                { className: n, style: { position: `relative` } },
                t.createElement(l, {
                  placeHolder: c,
                  options: f,
                  onChange: function (e) {
                    s && s(e);
                  },
                  showFlag: u,
                  onTextChange: a,
                  defaultValue: o,
                  inputClassName: r,
                }),
              ),
            )
          );
        }),
        (e.GetCity = s),
        (e.GetCountries = i),
        (e.GetLanguages = a),
        (e.GetState = o),
        (e.LanguageSelect = function (e) {
          var n = e.containerClassName,
            r = e.inputClassName,
            i = e.onTextChange,
            o = e.defaultValue,
            s = e.onChange,
            c = e.placeHolder,
            l = e.displayNative,
            u = t.useState([]),
            f = u[0],
            p = u[1];
          return (
            t.useEffect(function () {
              a().then(function (e) {
                p(e);
              });
            }, []),
            t.createElement(
              t.Fragment,
              null,
              t.createElement(
                `div`,
                { className: n, style: { position: `relative` } },
                t.createElement(d, {
                  placeHolder: c,
                  options: f,
                  onChange: function (e) {
                    s && s(e);
                  },
                  displayNative: l,
                  onTextChange: i,
                  defaultValue: o,
                  inputClassName: r,
                }),
              ),
            )
          );
        }),
        (e.StateSelect = function (e) {
          var n = e.containerClassName,
            r = e.inputClassName,
            i = e.onTextChange,
            a = e.defaultValue,
            s = e.onChange,
            c = e.countryid,
            u = e.placeHolder,
            d = t.useState([]),
            f = d[0],
            p = d[1];
          return (
            t.useEffect(
              function () {
                c &&
                  o(c).then(function (e) {
                    p(e);
                  });
              },
              [c],
            ),
            t.createElement(
              t.Fragment,
              null,
              t.createElement(
                `div`,
                { className: n, style: { position: `relative` } },
                t.createElement(l, {
                  placeHolder: u,
                  options: f,
                  onChange: function (e) {
                    s && s(e);
                  },
                  onTextChange: i,
                  defaultValue: a,
                  inputClassName: r,
                }),
              ),
            )
          );
        }));
    });
  }),
  x = b(),
  S = ({
    nextStep: e,
    prevStep: t,
    handleInputChange: n,
    formData: r,
    handleSubmit: i,
  }) => {
    let { loading: c } = a(),
      [l, u] = (0, _.useState)({ firstName: ``, lastName: ``, mobile: `` }),
      [f, g] = (0, _.useState)([]),
      [y, b] = (0, _.useState)(``),
      [S, C] = (0, _.useState)(``),
      [w, T] = (0, _.useState)(null),
      E = (0, _.useRef)(null);
    (0, _.useEffect)(() => {
      (async () => {
        try {
          let e = (await (0, x.GetCountries)()).map((e) => ({
            value: e.isoCode,
            label: e.name,
          }));
          g(e);
        } catch (e) {
          console.error(`Failed to fetch countries:`, e);
        }
      })();
    }, []);
    let D = () => {
      let e = !0,
        t = {};
      return (
        r.firstName.trim() ||
          ((t.firstName = `First Name is required`), (e = !1)),
        r.lastName.trim() || ((t.lastName = `Last Name is required`), (e = !1)),
        r.mobile.trim()
          ? /^\d{10}$/.test(r.mobile) ||
            ((t.mobile = `Mobile number must be 10 digits and no alphabets`),
            (e = !1))
          : ((t.mobile = `Mobile number is required`), (e = !1)),
        u(t),
        e
      );
    };
    return (0, v.jsxs)(`form`, {
      className: `space-y-5`,
      children: [
        (0, v.jsxs)(`div`, {
          className: `flex flex-col gap-1.5`,
          children: [
            (0, v.jsx)(`label`, {
              htmlFor: `country`,
              className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
              children: `Country`,
            }),
            (0, v.jsx)(h, {
              options: f,
              value: r.country,
              onChange: n(`country`),
            }),
            l.country &&
              (0, v.jsx)(`p`, {
                className: `text-red-500 text-xs font-medium mb-0`,
                children: l.country,
              }),
          ],
        }),
        (0, v.jsxs)(`div`, {
          className: `flex flex-col gap-1.5`,
          children: [
            (0, v.jsxs)(`label`, {
              htmlFor: `firstName`,
              className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
              children: [
                `First Name `,
                (0, v.jsx)(`sup`, { className: `text-red-500`, children: `*` }),
              ],
            }),
            (0, v.jsx)(o, {
              type: `text`,
              placeholder: `Enter First Name`,
              name: `firstName`,
              value: r.firstName,
              onChange: n(`firstName`),
            }),
            l.firstName &&
              (0, v.jsx)(`p`, {
                className: `text-red-500 text-xs font-medium mb-0`,
                children: l.firstName,
              }),
          ],
        }),
        (0, v.jsxs)(`div`, {
          className: `flex flex-col gap-1.5`,
          children: [
            (0, v.jsxs)(`label`, {
              htmlFor: `lastName`,
              className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
              children: [
                `Last Name `,
                (0, v.jsx)(`sup`, { className: `text-red-500`, children: `*` }),
              ],
            }),
            (0, v.jsx)(o, {
              type: `text`,
              placeholder: `Enter Last Name`,
              name: `lastName`,
              value: r.lastName,
              onChange: n(`lastName`),
            }),
            l.lastName &&
              (0, v.jsx)(`p`, {
                className: `text-red-500 text-xs font-medium mb-0`,
                children: l.lastName,
              }),
          ],
        }),
        (0, v.jsxs)(`div`, {
          className: `flex flex-col gap-1.5`,
          children: [
            (0, v.jsxs)(`label`, {
              htmlFor: `mobile`,
              className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
              children: [
                `Mobile Number `,
                (0, v.jsx)(`sup`, { className: `text-red-500`, children: `*` }),
              ],
            }),
            (0, v.jsx)(o, {
              type: `text`,
              placeholder: `Enter 10-digit mobile number`,
              name: `mobile`,
              value: r.mobile,
              onChange: n(`mobile`),
            }),
            l.mobile &&
              (0, v.jsx)(`p`, {
                className: `text-red-500 text-xs font-medium mb-0`,
                children: l.mobile,
              }),
          ],
        }),
        (0, v.jsxs)(`div`, {
          className: `bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3`,
          children: [
            (0, v.jsx)(`span`, {
              className: `text-xs font-bold text-slate-700 block`,
              children: `Upload Resume`,
            }),
            (0, v.jsx)(`input`, {
              type: `file`,
              name: `file`,
              className: `w-full bg-white border border-slate-300 rounded-lg text-xs p-2 focus:outline-none`,
              ref: E,
              onChange: (e) => {
                T(e.target.files[0]);
              },
            }),
            (0, v.jsxs)(`div`, {
              className: `flex items-center justify-between gap-4 flex-wrap`,
              children: [
                (0, v.jsx)(`span`, {
                  className: `text-xs font-semibold text-slate-400`,
                  children: `Supported formats: .doc, .docx, .pdf`,
                }),
                (0, v.jsx)(`button`, {
                  type: `button`,
                  onClick: async (e) => {
                    if ((e.preventDefault(), b(``), C(``), !w)) {
                      b(`Please select a file to upload.`);
                      return;
                    }
                    try {
                      if (!r.email) {
                        b(`Please enter your email in Step 1 first.`);
                        return;
                      }
                      let e = await m(
                        (await s(d(p, `resumes/${r.email}/${w.name}`), w)).ref,
                      );
                      (n(`resumeUrl`)({ target: { value: e } }),
                        C(`File uploaded successfully.`));
                    } catch (e) {
                      (console.error(
                        `Error uploading file to Firebase Storage:`,
                        e,
                      ),
                        b(`Error in setting up the request: ` + e.message));
                    }
                  },
                  className: `px-4 py-1.5 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-lg border-0 transition-colors cursor-pointer`,
                  children: `Upload`,
                }),
              ],
            }),
            y &&
              (0, v.jsx)(`p`, {
                className: `text-xs font-medium text-red-500 mb-0`,
                children: y,
              }),
            S &&
              (0, v.jsx)(`p`, {
                className: `text-xs font-medium text-emerald-500 mb-0`,
                children: S,
              }),
          ],
        }),
        (0, v.jsxs)(`div`, {
          className: `flex gap-3 pt-4 border-t border-slate-100`,
          children: [
            (0, v.jsx)(`button`, {
              type: `button`,
              onClick: t,
              className: `flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-lg border-0 transition-colors text-sm`,
              children: `Back`,
            }),
            (0, v.jsx)(`button`, {
              onClick: (e) => {
                (e.preventDefault(), D() && i());
              },
              className: `flex-1 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg border-0 shadow-sm transition-colors text-sm`,
              disabled: c,
              children: c ? `Registering...` : `Submit`,
            }),
          ],
        }),
      ],
    });
  },
  C = e(g()),
  w = () => {
    let { verifyUserEmail: e } = a(),
      [t, n] = (0, _.useState)(``),
      r = f();
    return (0, v.jsxs)(`div`, {
      className: `bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col items-center gap-5 my-4`,
      children: [
        (0, v.jsx)(`h2`, {
          className: `font-bold text-lg text-slate-800 text-center mb-1`,
          children: `Verify OTP received on email`,
        }),
        (0, v.jsx)(`div`, {
          className: `flex justify-center otp-container`,
          children: (0, v.jsx)(C.default, {
            value: t,
            OTPLength: 6,
            onChange: (e) => {
              n(e);
            },
            autoFocus: !0,
            otpType: `number`,
            disabled: !1,
            className: `otp-input-fields`,
          }),
        }),
        (0, v.jsx)(`button`, {
          className: `w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg border-0 shadow-sm transition-colors text-sm cursor-pointer`,
          onClick: async () => {
            try {
              let n = await e(t);
              (console.log(`Verification result:`, n),
                n.token
                  ? r(`/`)
                  : console.error(`Verification failed:`, n.message));
            } catch (e) {
              console.error(`Error verifying email:`, e);
            }
          },
          children: `Verify`,
        }),
        (0, v.jsx)(`div`, {
          className: `text-xs font-semibold text-slate-500 pt-2`,
          children: (0, v.jsx)(C.ResendOTP, {
            autoFocus: !0,
            otpType: `number`,
            onResendClick: () => console.log(`Resend clicked`),
            disabled: !1,
            secure: !0,
          }),
        }),
      ],
    });
  },
  T = t({ default: () => E }),
  E = () => {
    let [e, t] = (0, _.useState)(1),
      { RegisterUser: n, loading: r } = a(),
      [i, o] = (0, _.useState)({
        firstName: ``,
        lastName: ``,
        email: ``,
        mobile: ``,
        username: ``,
        country: ``,
        password: ``,
        role: ``,
        resumeUrl: ``,
      });
    f();
    let s = () => t((e) => e + 1),
      d = () => t((e) => e - 1),
      p = (e) => (t) => {
        let { value: n } = t.target;
        o((t) => ({ ...t, [e]: n }));
      },
      m = async () => {
        try {
          (await n(i))
            ? s()
            : console.error(
                `Registration failed: Unexpected response from server`,
              );
        } catch (e) {
          console.error(`Error during registration:`, e);
        }
      };
    return r
      ? (0, v.jsx)(c, {})
      : (0, v.jsx)(`div`, {
          className: `bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans`,
          children: (0, v.jsxs)(`div`, {
            className: `max-w-xl w-full space-y-8`,
            children: [
              (0, v.jsxs)(`div`, {
                className: `bg-white border border-slate-200 rounded-2xl shadow-md p-8`,
                children: [
                  (0, v.jsxs)(`div`, {
                    className: `flex flex-col items-center justify-center mb-6`,
                    children: [
                      (0, v.jsx)(`img`, {
                        src: l,
                        alt: `Logo`,
                        className: `w-16 h-16 rounded-xl object-cover mb-4 border border-slate-100 shadow-sm`,
                      }),
                      (0, v.jsx)(`h2`, {
                        className: `text-center text-2xl font-bold text-slate-800`,
                        children: `Register your account`,
                      }),
                      (0, v.jsxs)(`p`, {
                        className: `text-xs text-slate-500 mt-2`,
                        children: [
                          `Already have an account?`,
                          ` `,
                          (0, v.jsx)(u, {
                            to: `/login`,
                            className: `text-[#2563EB] font-bold no-underline hover:underline`,
                            children: `Login here`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsxs)(`div`, {
                    className: `mt-4`,
                    children: [
                      e === 1 &&
                        (0, v.jsx)(y, {
                          nextStep: s,
                          handleInputChange: p,
                          formData: i,
                          handleSubmit: m,
                        }),
                      e === 2 &&
                        (0, v.jsx)(S, {
                          nextStep: s,
                          prevStep: d,
                          handleInputChange: p,
                          handleSubmit: m,
                          formData: i,
                        }),
                      e === 3 &&
                        (0, v.jsx)(w, {
                          nextStep: s,
                          prevStep: d,
                          handleInputChange: p,
                          handleSubmit: m,
                          formData: i,
                        }),
                    ],
                  }),
                ],
              }),
              (0, v.jsx)(`div`, {
                className: `text-center text-xs text-slate-400`,
                children: (0, v.jsx)(`p`, {
                  children: `All rights reserved by © Career Techguru™`,
                }),
              }),
            ],
          }),
        });
  };
export { b as n, T as t };
