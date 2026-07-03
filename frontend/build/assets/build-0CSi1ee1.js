import { n as e, r as t } from "./jsx-runtime-CjtlecKO.js";
var n = t((t, n) => {
  (function (r, i) {
    if (typeof t == `object` && typeof n == `object`) n.exports = i(e());
    else if (typeof define == `function` && define.amd) define([`react`], i);
    else {
      var a = i(typeof t == `object` ? e() : r.react);
      for (var o in a) (typeof t == `object` ? t : r)[o] = a[o];
    }
  })(window, function (e) {
    return (function (e) {
      var t = {};
      function n(r) {
        if (t[r]) return t[r].exports;
        var i = (t[r] = { i: r, l: !1, exports: {} });
        return (e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports);
      }
      return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
        }),
        (n.r = function (e) {
          (typeof Symbol < `u` &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: `Module` }),
            Object.defineProperty(e, "__esModule", { value: !0 }));
        }),
        (n.t = function (e, t) {
          if (
            (1 & t && (e = n(e)),
            8 & t || (4 & t && typeof e == `object` && e && e.__esModule))
          )
            return e;
          var r = Object.create(null);
          if (
            (n.r(r),
            Object.defineProperty(r, "default", { enumerable: !0, value: e }),
            2 & t && typeof e != `string`)
          )
            for (var i in e)
              n.d(
                r,
                i,
                function (t) {
                  return e[t];
                }.bind(null, i),
              );
          return r;
        }),
        (n.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return (n.d(t, `a`, t), t);
        }),
        (n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = `/otp-input-react/`),
        n((n.s = 1))
      );
    })([
      function (t, n) {
        t.exports = e;
      },
      function (e, t, n) {
        e.exports = n(2);
      },
      function (e, t, n) {
        function r(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t] == null ? {} : arguments[t],
              i = Object.keys(n);
            (typeof Object.getOwnPropertySymbols == `function` &&
              (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
              )),
              i.forEach(function (t) {
                r(e, t, n[t]);
              }));
          }
          return e;
        }
        function a(e, t) {
          if (e == null) return {};
          var n,
            r,
            i = (function (e, t) {
              if (e == null) return {};
              var n,
                r,
                i = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
              return i;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++)
              ((n = a[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (i[n] = e[n])));
          }
          return i;
        }
        n.r(t);
        var o = n(0),
          s = n.n(o);
        function c(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n = [],
                r = !0,
                i = !1,
                a = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(r = (o = s.next()).done) &&
                  (n.push(o.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                ((i = !0), (a = e));
              } finally {
                try {
                  r || s.return == null || s.return();
                } finally {
                  if (i) throw a;
                }
              }
              return n;
            })(e, t) ||
            (function () {
              throw TypeError(
                `Invalid attempt to destructure non-iterable instance`,
              );
            })()
          );
        }
        var l = function (e) {
          var t = e.maxTime,
            n = e.onTimerComplete,
            r = e.timeInterval,
            i = e.onResendClick,
            a = (0, o.useRef)(),
            s = c((0, o.useState)(t), 2),
            l = s[0],
            u = s[1];
          return (
            (0, o.useEffect)(
              function () {
                return (
                  a.current && l === 0
                    ? (clearTimeout(a.current), n && n())
                    : (a.current = setTimeout(function () {
                        u(function (e) {
                          return e - 1;
                        });
                      }, r)),
                  function () {
                    clearTimeout(a.current);
                  }
                );
              },
              [n, l, r],
            ),
            {
              handelResendClick: function () {
                (i && i(l === 0), u(t));
              },
              remainingTime: l,
            }
          );
        };
        function u(e) {
          var t = e.renderTime,
            n = e.renderButton,
            r = e.style,
            o = e.className,
            c = l(a(e, [`renderTime`, `renderButton`, `style`, `className`])),
            u = c.remainingTime,
            d = c.handelResendClick;
          return s.a.createElement(
            `div`,
            {
              className: o || ``,
              "data-testid": `otp-resend-root`,
              style: i({ display: `flex`, justifyContent: `space-between` }, r),
            },
            t ? t(u) : s.a.createElement(`span`, null, u, ` sec`),
            n
              ? n({ disabled: u !== 0, onClick: d, remainingTime: u })
              : s.a.createElement(
                  `button`,
                  { disabled: u !== 0, onClick: d, type: `button` },
                  `Resend OTP`,
                ),
          );
        }
        u.defaultProps = { maxTime: 60, timeInterval: 1e3, style: {} };
        var d = u,
          f = { width: 32, height: 32, textAlign: `center`, marginRight: 20 },
          p = s.a.memo(function (e) {
            var t = e.focus,
              n = e.autoFocus,
              r = e.disabled,
              c = e.value,
              l = e.onInputFocus,
              u = e.index,
              d = e.secure,
              p = e.inputStyles,
              m = e.otpType,
              h = a(e, [
                `focus`,
                `autoFocus`,
                `disabled`,
                `value`,
                `onInputFocus`,
                `index`,
                `secure`,
                `inputStyles`,
                `otpType`,
              ]),
              g = (0, o.useRef)(null),
              _ = (0, o.useRef)(!1);
            ((0, o.useEffect)(function () {
              n && t && g.current.focus();
            }, []),
              (0, o.useEffect)(
                function () {
                  (_.current && t && g.current.focus(), (_.current = !0));
                },
                [t],
              ));
            var v = `text`;
            return (
              d ? (v = `password`) : m === `number` && (v = `tel`),
              s.a.createElement(
                `input`,
                Object.assign(
                  {
                    style: i({}, f, p),
                    type: v,
                    maxLength: `1`,
                    ref: g,
                    disabled: r,
                    onFocus: function (e) {
                      return l(u, e);
                    },
                    value: c || ``,
                  },
                  h,
                ),
              )
            );
          }),
          m = function (e) {
            var t = e.autoFocus,
              n = e.value,
              r = e.otpType,
              i = e.onChange,
              a = e.OTPLength,
              s = c((0, o.useState)(t ? 0 : -1), 2),
              l = s[0],
              u = s[1],
              d = function () {
                return n ? n.toString().split(``) : [];
              },
              f = function (e) {
                i(e.join(``));
              },
              p = function () {
                (function (e) {
                  u(Math.max(Math.min(a - 1, e), 0));
                })(
                  (arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : `next`) === `next`
                    ? l + 1
                    : l - 1,
                );
              },
              m = function (e) {
                var t = c(e, 1)[0],
                  n = d();
                ((n[l] = t), f(n));
              },
              h = function (e) {
                switch (r) {
                  case `number`:
                    return !(e.charCodeAt(0) > 57 || e.charCodeAt(0) < 48);
                  case `alpha`:
                    return !(e.charCodeAt(0) > 122 || e.charCodeAt(0) < 65);
                  case `alphanumeric`:
                    return !(e.charCodeAt(0) > 122 || e.charCodeAt(0) < 48);
                  default:
                    return !0;
                }
              };
            return {
              activeInput: l,
              getOtpValue: d,
              handleOnChange: function (e) {
                h(e.target.value) && (m(e.target.value), p(`next`));
              },
              handleOnKeyDown: function (e) {
                switch (e.key) {
                  case `Backspace`:
                    (e.preventDefault(), m(``), p(`prev`));
                    break;
                  case `Delete`:
                    (e.preventDefault(), m(``));
                    break;
                  case `ArrowLeft`:
                    (e.preventDefault(), p(`prev`));
                    break;
                  case `ArrowRight`:
                    (e.preventDefault(), p(`next`));
                }
              },
              handelOnInput: function (e) {
                e.target.value.length > 1 && (e.preventDefault(), p(`next`));
              },
              handleOnPaste: function (e, t) {
                e.preventDefault();
                for (
                  var n = d(),
                    r = e.clipboardData
                      .getData(`text/plain`)
                      .slice(0, a - l)
                      .split(``),
                    i = 0;
                  i < a;
                  ++i
                )
                  i >= l && r.length > 0 && (n[i] = r.shift());
                for (var o = [n.length], s = 0, c = 0; c < n.length; ++c)
                  h(n[c]) && ((o[s] = n[c]), s++);
                f(o);
              },
              onInputFocus: function (e, t) {
                (u(e), t.target.select());
              },
            };
          },
          h = function (e) {
            var t = e.OTPLength,
              n = e.disabled,
              r = e.autoFocus,
              a = e.value,
              c = a === void 0 ? `` : a,
              l = e.onChange,
              u = e.otpType,
              d = e.secure,
              f = e.className,
              h = e.inputClassName,
              g = e.inputStyles,
              _ = e.style,
              v = e.placeholder,
              y = m({
                autoFocus: r,
                value: c,
                otpType: u,
                onChange: l,
                OTPLength: t,
              }),
              b = y.activeInput,
              x = y.getOtpValue,
              S = y.handleOnChange,
              C = y.handleOnKeyDown,
              w = y.handelOnInput,
              T = y.handleOnPaste,
              E = y.onInputFocus,
              D = (0, o.useMemo)(
                function () {
                  for (var e = x(), i = [], a = 0; a < t; a++)
                    i.push(
                      s.a.createElement(p, {
                        className: h,
                        inputStyles: g,
                        key: a,
                        focus: b === a,
                        value: e[a],
                        onChange: S,
                        onKeyDown: C,
                        onInput: w,
                        onPaste: T,
                        onInputFocus: E,
                        index: a,
                        disabled: n,
                        autoFocus: r,
                        secure: d,
                        "data-testid": `input`,
                        otpType: u,
                        placeholder: v && v[a],
                      }),
                    );
                  return i;
                },
                [x, t, h, g, b, S, C, w, T, E, n, r, d, u, v],
              );
            return s.a.createElement(
              `div`,
              {
                style: i({ display: `flex` }, _),
                className: `${f}`,
                "data-testid": `otp-input-root`,
              },
              D,
            );
          };
        h.defaultProps = {
          className: ``,
          inputClassName: ``,
          OTPLength: 4,
          onChange: function () {},
          disabled: !1,
          secure: !1,
          autoFocus: !1,
          value: ``,
          otpType: `any`,
          inputStyles: {},
          style: {},
          placeholder: void 0,
        };
        var g = h;
        (n.d(t, `ResendOTP`, function () {
          return d;
        }),
          n.d(t, `default`, function () {
            return g;
          }));
      },
    ]);
  });
});
export { n as t };
