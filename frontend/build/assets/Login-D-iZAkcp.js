import { a as e, i as t, n, t as r } from "./jsx-runtime-CjtlecKO.js";
import { J as i, S as a, dt as o, ft as s, mt as c } from "./index-D6kauhrE.js";
var l = t({ default: () => f }),
  u = e(n()),
  d = r(),
  f = () => {
    let { AuthenticateUser: e, loading: t } = i(),
      n = c(),
      [r, l] = (0, u.useState)({ email: ``, password: `` }),
      [f, p] = (0, u.useState)({ email: !1, password: !1 }),
      [m, h] = (0, u.useState)(``),
      [g, _] = (0, u.useState)(!1),
      v = () => {
        let e = {};
        return (
          r.email.trim() || (e.email = !0),
          r.password.trim() || (e.password = !0),
          p(e),
          Object.keys(e).length === 0
        );
      },
      y = () => {
        _(!g);
      },
      b = (e) => {
        l({ ...r, [e.target.name]: e.target.value });
      };
    return (0, d.jsx)(`div`, {
      className: `bg-slate-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans`,
      children: (0, d.jsxs)(`div`, {
        className: `max-w-md w-full space-y-8`,
        children: [
          (0, d.jsxs)(`div`, {
            className: `bg-white border border-slate-200 rounded-2xl shadow-md p-8`,
            children: [
              (0, d.jsxs)(`div`, {
                className: `flex flex-col items-center justify-center mb-6`,
                children: [
                  (0, d.jsx)(`img`, {
                    src: o,
                    alt: `Logo`,
                    className: `w-16 h-16 rounded-xl object-cover mb-4 border border-slate-100 shadow-sm`,
                  }),
                  (0, d.jsx)(`h2`, {
                    className: `text-center text-2xl font-bold text-slate-800`,
                    children: `Login here`,
                  }),
                ],
              }),
              m &&
                (0, d.jsx)(`div`, {
                  className: `bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg border border-red-100 mb-4`,
                  children: m,
                }),
              (0, d.jsxs)(`form`, {
                onSubmit: async (t) => {
                  if ((t.preventDefault(), v()))
                    try {
                      (await e(r), n(`/`));
                    } catch (e) {
                      (h(e.message),
                        setTimeout(() => {
                          h(``);
                        }, 3e3));
                    }
                },
                className: `space-y-5`,
                children: [
                  (0, d.jsxs)(`div`, {
                    className: `flex flex-col gap-1.5`,
                    children: [
                      (0, d.jsxs)(`label`, {
                        className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
                        children: [
                          `Username or Email `,
                          (0, d.jsx)(`sup`, {
                            className: `text-red-500`,
                            children: `*`,
                          }),
                        ],
                      }),
                      (0, d.jsx)(a, {
                        type: `text`,
                        name: `email`,
                        value: r.email,
                        onChange: b,
                        placeholder: `Enter Username or Email`,
                        className: `w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors`,
                      }),
                      f.email &&
                        (0, d.jsx)(`span`, {
                          className: `text-xs font-medium text-red-500`,
                          children: `Username or Email is required`,
                        }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `flex flex-col gap-1.5`,
                    children: [
                      (0, d.jsxs)(`label`, {
                        className: `text-xs font-semibold text-slate-500 uppercase tracking-wider`,
                        children: [
                          `Password `,
                          (0, d.jsx)(`sup`, {
                            className: `text-red-500`,
                            children: `*`,
                          }),
                        ],
                      }),
                      (0, d.jsx)(a, {
                        type: g ? `text` : `password`,
                        name: `password`,
                        value: r.password,
                        onChange: b,
                        placeholder: `Enter Password`,
                        className: `w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors`,
                      }),
                      f.password &&
                        (0, d.jsx)(`span`, {
                          className: `text-xs font-medium text-red-500`,
                          children: `Password is required`,
                        }),
                      (0, d.jsxs)(`div`, {
                        className: `flex items-center gap-2 mt-1`,
                        children: [
                          (0, d.jsx)(`input`, {
                            type: `checkbox`,
                            checked: g,
                            onChange: y,
                            id: `flexCheckDefault`,
                            className: `rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]`,
                          }),
                          (0, d.jsx)(`label`, {
                            className: `text-xs font-medium text-slate-500 cursor-pointer select-none`,
                            htmlFor: `flexCheckDefault`,
                            children: `show password`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `flex flex-col gap-3 pt-2`,
                    children: [
                      (0, d.jsx)(`button`, {
                        type: `submit`,
                        className: `w-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg border-0 shadow-sm transition-colors text-sm`,
                        disabled: t,
                        children: t ? `Please wait...` : `Login`,
                      }),
                      (0, d.jsx)(`button`, {
                        type: `button`,
                        onClick: () => n(`/`),
                        className: `w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-lg border-0 transition-colors text-xs`,
                        children: `Back to home`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.jsxs)(`div`, {
                className: `mt-6 pt-6 border-t border-slate-100 space-y-2.5 text-xs text-center`,
                children: [
                  (0, d.jsx)(`p`, {
                    className: `mb-0 text-slate-500`,
                    children: (0, d.jsx)(s, {
                      to: `/forgot-password`,
                      className: `text-[#2563EB] font-medium no-underline hover:underline`,
                      children: `Forgot Password?`,
                    }),
                  }),
                  (0, d.jsxs)(`p`, {
                    className: `mb-0 text-slate-500`,
                    children: [
                      `Don't have an account?`,
                      ` `,
                      (0, d.jsx)(s, {
                        to: `/register`,
                        className: `text-[#2563EB] font-bold no-underline hover:underline`,
                        children: `Create an account`,
                      }),
                    ],
                  }),
                  (0, d.jsx)(`p`, {
                    className: `mb-0`,
                    children: (0, d.jsx)(s, {
                      to: `/contact-us`,
                      className: `text-slate-400 no-underline hover:underline`,
                      children: `Need help signing in?`,
                    }),
                  }),
                ],
              }),
            ],
          }),
          (0, d.jsx)(`div`, {
            className: `text-center text-xs text-slate-400`,
            children: (0, d.jsx)(`p`, {
              children: `All rights reserved by © Career Techguru™`,
            }),
          }),
        ],
      }),
    });
  };
export { l as t };
