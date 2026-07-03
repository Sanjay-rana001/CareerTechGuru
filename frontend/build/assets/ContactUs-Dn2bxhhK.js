import { a as e, n as t, t as n } from "./jsx-runtime-CjtlecKO.js";
import { S as r, ct as i, ot as a, tt as o } from "./index-D6kauhrE.js";
var s = e(t()),
  c = `/assets/phone-call-C6fnnsXb.png`,
  l = `/assets/domain-FdmvGC8N.png`,
  u = `/assets/email-1YVGnmYf.png`,
  d = `/assets/location-D-OVHcDm.png`,
  f = n(),
  p = () => {
    let e = `https://spsolutions.org.nz`,
      t = `info@espssolution.org.nz`,
      [n, p] = (0, s.useState)({
        name: ``,
        phoneNumber: ``,
        email: ``,
        description: ``,
      }),
      m = (e) => {
        p({ ...n, [e.target.name]: e.target.value });
      };
    return (0, f.jsxs)(`div`, {
      className: `page-wrapper`,
      children: [
        (0, f.jsxs)(`div`, {
          className: `cn`,
          children: [
            (0, f.jsx)(`br`, {}),
            (0, f.jsx)(`h2`, {
              className: `text-center h1 text-prime`,
              children: (0, f.jsx)(`b`, { children: `Contact Us` }),
            }),
          ],
        }),
        (0, f.jsx)(`div`, {
          className: `contact-us-page`,
          children: (0, f.jsxs)(`div`, {
            className: `form-container`,
            children: [
              (0, f.jsx)(`div`, {
                className: `description-form`,
                children: (0, f.jsx)(`form`, {
                  onSubmit: async (e) => {
                    if ((e.preventDefault(), !n.name)) {
                      alert(`Please enter your name.`);
                      return;
                    }
                    if (!n.phoneNumber) {
                      alert(`Please enter your phone number.`);
                      return;
                    }
                    if (!n.email) {
                      alert(`Please enter your email.`);
                      return;
                    }
                    if (!n.description) {
                      alert(`Please enter a description of your query.`);
                      return;
                    }
                    try {
                      (await a(i(o, `contact_queries`), {
                        ...n,
                        submittedAt: new Date().toISOString(),
                      }),
                        alert(`Your query has been submitted successfully.`),
                        p({
                          name: ``,
                          phoneNumber: ``,
                          email: ``,
                          description: ``,
                        }));
                    } catch (e) {
                      (console.error(`Error submitting query to Firestore:`, e),
                        alert(`There was an error submitting the form!`));
                    }
                  },
                  className: `form`,
                  children: (0, f.jsx)(`table`, {
                    style: { width: `100%`, borderCollapse: `collapse` },
                    children: (0, f.jsxs)(`tbody`, {
                      children: [
                        (0, f.jsx)(`tr`, {
                          children: (0, f.jsx)(`td`, {
                            style: { padding: `10px`, border: `transparent` },
                            children: (0, f.jsxs)(`label`, {
                              children: [
                                `Name:`,
                                (0, f.jsx)(`sup`, {
                                  className: `text-danger`,
                                  children: `*`,
                                }),
                                (0, f.jsx)(r, {
                                  type: `text`,
                                  name: `name`,
                                  value: n.name,
                                  onChange: m,
                                  placeholder: `Name`,
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, f.jsx)(`tr`, {
                          children: (0, f.jsx)(`td`, {
                            style: { padding: `10px`, border: `transparent` },
                            children: (0, f.jsxs)(`label`, {
                              children: [
                                `Phone Number:`,
                                (0, f.jsx)(`sup`, {
                                  className: `text-danger`,
                                  children: `*`,
                                }),
                                (0, f.jsx)(r, {
                                  type: `text`,
                                  name: `phoneNumber`,
                                  value: n.phoneNumber,
                                  onChange: m,
                                  placeholder: `Phone Number`,
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, f.jsx)(`tr`, {
                          children: (0, f.jsx)(`td`, {
                            style: { padding: `10px`, border: `transparent` },
                            children: (0, f.jsxs)(`label`, {
                              children: [
                                `Email:`,
                                (0, f.jsx)(`sup`, {
                                  className: `text-danger`,
                                  children: `*`,
                                }),
                                (0, f.jsx)(r, {
                                  type: `email`,
                                  name: `email`,
                                  value: n.email,
                                  onChange: m,
                                  placeholder: `Email`,
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, f.jsx)(`tr`, {
                          children: (0, f.jsx)(`td`, {
                            style: { padding: `10px`, border: `transparent` },
                            children: (0, f.jsxs)(`label`, {
                              children: [
                                `Description:`,
                                (0, f.jsx)(`sup`, {
                                  className: `text-danger`,
                                  children: `*`,
                                }),
                                (0, f.jsx)(`textarea`, {
                                  type: `textarea`,
                                  name: `description`,
                                  value: n.description,
                                  onChange: m,
                                  placeholder: `Description/Queries`,
                                  className: `form-control`,
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, f.jsx)(`tr`, {
                          children: (0, f.jsx)(`td`, {
                            style: {
                              border: `transparent`,
                              textAlign: `center`,
                            },
                            children: (0, f.jsx)(`button`, {
                              className: `btn bg-prime text-light`,
                              children: `Submit`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, f.jsxs)(`div`, {
                className: `contact-info`,
                children: [
                  (0, f.jsxs)(`div`, {
                    className: `contact-item`,
                    children: [
                      (0, f.jsx)(`img`, {
                        src: c,
                        height: `30px`,
                        width: `25px`,
                        className: `Image`,
                        alt: `Phone`,
                      }),
                      (0, f.jsx)(`h3`, { children: `9871729030` }),
                      (0, f.jsxs)(`p`, {
                        children: [
                          (0, f.jsx)(`strong`, { children: `Company Name:` }),
                          ` `,
                          `ESPS Solutions`,
                        ],
                      }),
                    ],
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `contact-item`,
                    children: [
                      (0, f.jsx)(`img`, {
                        src: d,
                        height: `30px`,
                        width: `25px`,
                        className: `Image`,
                        alt: `Address`,
                      }),
                      (0, f.jsx)(`p`, {
                        children: `Achievers Centre Point Mall, Sector-49, Office No. 15/19 First Floor Faridabad, Haryana, 121001 INDIA`,
                      }),
                    ],
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `contact-item`,
                    children: [
                      (0, f.jsx)(`img`, {
                        src: l,
                        height: `30px`,
                        width: `25px`,
                        className: `Image`,
                        alt: `Website`,
                      }),
                      (0, f.jsx)(`a`, {
                        href: e,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        children: e,
                      }),
                    ],
                  }),
                  (0, f.jsxs)(`div`, {
                    className: `contact-item`,
                    children: [
                      (0, f.jsx)(`img`, {
                        src: u,
                        height: `30px`,
                        width: `25px`,
                        className: `Image`,
                        alt: `Email`,
                      }),
                      (0, f.jsx)(`a`, {
                        href: `mailto:${t}`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        children: t,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
export { p as default };
