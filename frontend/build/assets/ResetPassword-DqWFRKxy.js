import { a as e, i as t, n, t as r } from "./jsx-runtime-CjtlecKO.js";
import { J as i, S as a, mt as o } from "./index-D6kauhrE.js";
var s = t({ default: () => u }),
  c = e(n()),
  l = r(),
  u = () => {
    let { resetPassword: e } = i(),
      t = sessionStorage.getItem(`reset-email`),
      [n, r] = (0, c.useState)(``),
      [s, u] = (0, c.useState)(``),
      [d, f] = (0, c.useState)(!1),
      p = o();
    return (0, l.jsx)(`div`, {
      className: `container-fluid`,
      children: (0, l.jsx)(`div`, {
        className: `container-sm`,
        children: (0, l.jsx)(`div`, {
          className: `row justify-center items-center min-h-[100vh]`,
          children: (0, l.jsxs)(`div`, {
            className: `col-lg-6 bg-light shadow py-6`,
            children: [
              (0, l.jsx)(`h3`, {
                className: `h2 text-prime`,
                children: `Enter new password`,
              }),
              (0, l.jsxs)(`div`, {
                className: `bg-slate-100 p-2`,
                children: [
                  (0, l.jsxs)(`div`, {
                    className: `form-group mb-3`,
                    children: [
                      (0, l.jsxs)(`label`, {
                        htmlFor: `newPassword`,
                        className: `h6 mb-1`,
                        children: [
                          `New Password `,
                          (0, l.jsx)(`sup`, {
                            className: `text-danger`,
                            children: `*`,
                          }),
                        ],
                      }),
                      (0, l.jsx)(a, {
                        type: d ? `text` : `password`,
                        className: `form-control`,
                        name: `newPassword`,
                        value: n,
                        onChange: (e) => r(e.target.value),
                        placeholder: `New Password`,
                      }),
                    ],
                  }),
                  (0, l.jsxs)(`div`, {
                    className: `form-group mb-3`,
                    children: [
                      (0, l.jsxs)(`label`, {
                        htmlFor: `confirmPassword`,
                        className: `h6 mb-1`,
                        children: [
                          `Confirm New Password `,
                          (0, l.jsx)(`sup`, {
                            className: `text-danger`,
                            children: `*`,
                          }),
                        ],
                      }),
                      (0, l.jsx)(a, {
                        type: d ? `text` : `password`,
                        className: `form-control`,
                        name: `confirmPassword`,
                        value: s,
                        onChange: (e) => u(e.target.value),
                        placeholder: `Confirm New Password`,
                      }),
                      (0, l.jsxs)(`div`, {
                        className: `form-group mt-2 flex items-center gap-2`,
                        children: [
                          (0, l.jsx)(`input`, {
                            className: `border`,
                            type: `checkbox`,
                            checked: d,
                            onChange: () => {
                              f(!d);
                            },
                            id: `toggleConfirmPassword`,
                          }),
                          (0, l.jsx)(`label`, {
                            htmlFor: `toggleConfirmPassword`,
                            children: `Show password`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)(`div`, {
                    className: `form-group mb-3`,
                    children: (0, l.jsx)(`button`, {
                      className: `btn bg-prime text-light`,
                      onClick: async () => {
                        if (n !== s) {
                          alert(`Passwords do not match`);
                          return;
                        }
                        try {
                          (console.log(`this is email`, t, n),
                            await e(t, n),
                            sessionStorage.clear(`reset-email`),
                            p(`/login`));
                        } catch (e) {
                          console.error(`Error resetting password:`, e);
                        }
                      },
                      children: `Reset Password`,
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  };
export { s as t };
