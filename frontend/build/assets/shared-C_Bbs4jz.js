import { a as e, n as t, t as n } from "./jsx-runtime-CjtlecKO.js";
import { N as r, ft as i, mt as a, q as o } from "./index-D6kauhrE.js";
import { r as s, t as c } from "./DateFilter-GHWGxUbN.js";
import "./Login-D-iZAkcp.js";
import { n as l } from "./Signup-4w5Q9Fs4.js";
import { i as u, r as d, t as f } from "./io5-BcyI83J0.js";
import "./EmployerProfile-CfJslF82.js";
import { n as p } from "./EmployeeProfile-CihXFVzL.js";
import "./ForgotPassword-nHVZElem.js";
import "./ResetPassword-DqWFRKxy.js";
import "./VerifyOtp-MtVGrPJY.js";
import "./Dashboard-0pBdMWD5.js";
var m = e(t()),
  h = (e, t) => {
    if (!e) return ``;
    let n = e.split(` `);
    return n.length <= t ? e : n.slice(0, t).join(` `) + `...`;
  },
  g = n(),
  _ = ({ data: e }) => {
    let t = a();
    return (0, g.jsx)(g.Fragment, {
      children: e?.map((e, n) =>
        (0, g.jsx)(
          `div`,
          {
            className: `w-full mb-4`,
            children: (0, g.jsxs)(`div`, {
              className: `bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center`,
              children: [
                (0, g.jsxs)(`div`, {
                  className: `flex gap-4 items-start flex-1`,
                  children: [
                    (0, g.jsx)(`div`, {
                      className: `w-14 h-14 bg-slate-50 rounded-xl border border-slate-100 p-1 flex items-center justify-center overflow-hidden flex-shrink-0`,
                      children: e?.profilePicture
                        ? (0, g.jsx)(`img`, {
                            src: e.profilePicture,
                            alt: `Company Logo`,
                            className: `max-h-full max-w-full object-contain`,
                          })
                        : (0, g.jsx)(`span`, {
                            className: `text-xs text-slate-300 font-bold uppercase`,
                            children: `CTG`,
                          }),
                    }),
                    (0, g.jsxs)(`div`, {
                      className: `space-y-1.5`,
                      children: [
                        (0, g.jsx)(`div`, {
                          className: `flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3`,
                          children: (0, g.jsx)(i, {
                            className: `no-underline text-slate-800 hover:text-[#2563EB] font-bold text-lg leading-tight transition-colors`,
                            to: `/view-jobs-detail/${e?.title}`,
                            children: h(e?.title || ``, 6),
                          }),
                        }),
                        e?.companyName &&
                          (0, g.jsx)(`p`, {
                            className: `text-sm font-medium text-slate-500 mb-0`,
                            children: e.companyName,
                          }),
                        (0, g.jsxs)(`div`, {
                          className: `flex flex-wrap items-center gap-3 pt-2`,
                          children: [
                            (0, g.jsxs)(`span`, {
                              className: `capitalize text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1`,
                              children: [
                                (0, g.jsx)(f, {
                                  size: 13,
                                  className: `text-slate-400`,
                                }),
                                e?.jobLocation,
                              ],
                            }),
                            (0, g.jsxs)(`span`, {
                              className: `capitalize text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1`,
                              children: [
                                (0, g.jsx)(r, {
                                  size: 12,
                                  className: `text-slate-400`,
                                }),
                                e?.experience,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, g.jsxs)(`div`, {
                  className: `flex md:flex-col items-end justify-between md:justify-center w-full md:w-auto gap-4 pt-4 md:pt-0 border-t border-slate-100 md:border-t-0 flex-row`,
                  children: [
                    (0, g.jsx)(`span`, {
                      className: `text-xs font-medium text-slate-400 order-1 md:order-none`,
                      children: c(e?.createdAt),
                    }),
                    (0, g.jsxs)(`div`, {
                      className: `flex items-center gap-2.5 order-2 md:order-none`,
                      children: [
                        (0, g.jsxs)(`button`, {
                          className: `flex justify-center items-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold text-sm rounded-lg border-0 transition-colors`,
                          children: [
                            `Share `,
                            (0, g.jsx)(u, { className: `ms-1` }),
                          ],
                        }),
                        (0, g.jsx)(`button`, {
                          onClick: () => t(`/view-jobs-detail/${e?.title}`),
                          className: `px-5 py-2 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm rounded-lg border-0 shadow-sm transition-colors`,
                          children: `Apply`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          },
          n,
        ),
      ),
    });
  };
(l(), p());
var v = ({ data: e }) => {
  let { getAdminsDetailsById: t } = o(),
    [n, c] = (0, m.useState)({}),
    l = a();
  return (
    (0, m.useEffect)(() => {
      e?.length &&
        (async () => {
          let n = {};
          try {
            for (let r of e)
              if (r?.sellerId && !n[r.sellerId]) {
                let e = await t(r?.sellerId, `Employer`);
                n[r?.sellerId] = e;
              }
          } catch (e) {
            console.error(`Failed to fetch company details:`, e);
          }
          c(n);
        })();
    }, [e]),
    (0, g.jsx)(g.Fragment, {
      children: e?.map((e, t) =>
        (0, g.jsx)(
          `div`,
          {
            className: `w-full mb-4`,
            children: (0, g.jsxs)(`div`, {
              className: `bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center`,
              children: [
                (0, g.jsxs)(`div`, {
                  className: `flex gap-4 items-start flex-1`,
                  children: [
                    (0, g.jsx)(`div`, {
                      className: `w-14 h-14 bg-slate-50 rounded-xl border border-slate-100 p-1 flex items-center justify-center overflow-hidden flex-shrink-0`,
                      children: e?.profilePicture
                        ? (0, g.jsx)(`img`, {
                            src: e.profilePicture,
                            alt: `Company Logo`,
                            className: `max-h-full max-w-full object-contain`,
                          })
                        : (0, g.jsx)(`span`, {
                            className: `text-xs text-slate-300 font-bold uppercase`,
                            children: `CTG`,
                          }),
                    }),
                    (0, g.jsxs)(`div`, {
                      className: `space-y-1.5`,
                      children: [
                        (0, g.jsx)(`div`, {
                          className: `flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3`,
                          children: (0, g.jsx)(i, {
                            className: `no-underline text-slate-800 hover:text-[#2563EB] font-bold text-lg leading-tight transition-colors`,
                            to: `/view-jobs-detail/${e?.title}`,
                            children: h(e?.title || ``, 6),
                          }),
                        }),
                        e?.companyName &&
                          (0, g.jsx)(`p`, {
                            className: `text-sm font-medium text-slate-500 mb-0`,
                            children: e.companyName,
                          }),
                        (0, g.jsxs)(`div`, {
                          className: `flex flex-wrap items-center gap-3 pt-2`,
                          children: [
                            (0, g.jsxs)(`span`, {
                              className: `capitalize text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1`,
                              children: [
                                (0, g.jsx)(f, {
                                  size: 13,
                                  className: `text-slate-400`,
                                }),
                                e?.jobLocation,
                              ],
                            }),
                            (0, g.jsxs)(`span`, {
                              className: `capitalize text-xs font-semibold text-slate-600 bg-slate-100 rounded-full px-3 py-1 flex items-center gap-1`,
                              children: [
                                (0, g.jsx)(r, {
                                  size: 12,
                                  className: `text-slate-400`,
                                }),
                                e?.experience,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, g.jsxs)(`div`, {
                  className: `flex md:flex-col items-end justify-between md:justify-center w-full md:w-auto gap-4 pt-4 md:pt-0 border-t border-slate-100 md:border-t-0 flex-row`,
                  children: [
                    (0, g.jsx)(`span`, {
                      className: `text-xs font-medium text-slate-400 order-1 md:order-none`,
                      children: s(e?.createdAt),
                    }),
                    (0, g.jsxs)(`div`, {
                      className: `flex items-center gap-2.5 order-2 md:order-none`,
                      children: [
                        (0, g.jsxs)(`button`, {
                          className: `flex justify-center items-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold text-sm rounded-lg border-0 transition-colors`,
                          children: [
                            `Share `,
                            (0, g.jsx)(d, { className: `ms-1` }),
                          ],
                        }),
                        (0, g.jsx)(`button`, {
                          onClick: () => l(`/view-jobs-detail/${e?.title}`),
                          className: `px-5 py-2 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm rounded-lg border-0 shadow-sm transition-colors`,
                          children: `Apply`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          },
          t,
        ),
      ),
    })
  );
};
export { _ as n, v as t };
