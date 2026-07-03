import { a as e, n as t, t as n } from "./jsx-runtime-CjtlecKO.js";
import { Q as r, X as i, mt as a } from "./index-D6kauhrE.js";
import { t as o } from "./esm-D4W-GGgw.js";
import { n as s, t as c } from "./esm-Dvl3qeZn.js";
var l = e(t()),
  u = e(s()),
  d = n(),
  f = ({
    nextStep: e,
    handleChange: t,
    handleShortDescriptionChange: n,
    handleDescriptionChange: i,
    values: a,
    selected: s,
    setSelected: f,
    setValues: p,
    setTags: m,
    tags: h,
  }) => {
    let { getAllSections: g } = r(),
      _ = (0, l.useRef)(null),
      [v, y] = (0, l.useState)([]),
      [b, x] = (0, l.useState)(!0),
      [S, C] = (0, l.useState)({
        title: ``,
        basicTitle: ``,
        category: ``,
        subCategory: ``,
        shortDescription: ``,
        description: ``,
        tags: ``,
      }),
      w = async () => {
        try {
          let e = await g();
          (e && e?.data.length > 0 && y(e?.data), x(!1));
        } catch (e) {
          console.error(e);
        }
      };
    (0, l.useEffect)(() => {
      w();
    }, []);
    let T = () => {
      let e = {},
        t = !0;
      return (
        a.title.trim() || ((e.title = `Job title is required`), (t = !1)),
        a.basicTitle.trim() ||
          ((e.basicTitle = `Job basic title is required`), (t = !1)),
        a.category.trim() ||
          ((e.category = `Job category is required`), (t = !1)),
        s.length === 0 &&
          ((e.subCategory = `At least one skill is required`), (t = !1)),
        a.description.trim() ||
          ((e.description = `Description is required`), (t = !1)),
        h.length === 0 && ((e.tags = `At least one tag is required`), (t = !1)),
        C(e),
        t
      );
    };
    return (0, d.jsx)(d.Fragment, {
      children: (0, d.jsx)(`div`, {
        className: `container-fluid`,
        children: (0, d.jsxs)(`div`, {
          className: `container-sm`,
          children: [
            (0, d.jsx)(`h4`, {
              className: `text-primary h3`,
              style: { marginTop: `20px` },
              children: `Add job basic details`,
            }),
            (0, d.jsx)(`div`, {
              className: `row py-3`,
              children: (0, d.jsxs)(`div`, {
                className: `col-lg-11`,
                children: [
                  (0, d.jsxs)(`div`, {
                    className: `row items-start justify-start mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          className: `text-[14px]`,
                          htmlFor: `title`,
                          children: [
                            `Job title `,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsxs)(`div`, {
                        className: `col`,
                        children: [
                          (0, d.jsx)(`input`, {
                            type: `text`,
                            name: `title`,
                            onChange: t(`title`),
                            className: `form-input w-100 text-[14px] rounded-sm`,
                            placeholder: `enter job title`,
                          }),
                          S.title &&
                            (0, d.jsx)(`p`, {
                              className: `text-danger text-sm`,
                              children: S.title,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `basicTitle`,
                          className: `text-[14px]`,
                          children: [
                            `Job basic title `,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsxs)(`div`, {
                        className: `col`,
                        children: [
                          (0, d.jsx)(`input`, {
                            type: `text`,
                            name: `basicTitle`,
                            onChange: t(`basicTitle`),
                            className: `form-input w-100 text-[14px] rounded-sm`,
                            placeholder: `enter job basic title`,
                          }),
                          S.basicTitle &&
                            (0, d.jsx)(`p`, {
                              className: `text-danger text-sm`,
                              children: S.basicTitle,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `category`,
                          className: `text-[14px]`,
                          children: [
                            `Job category `,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsxs)(`div`, {
                        className: `col`,
                        children: [
                          (0, d.jsxs)(`select`, {
                            className: `form-input rounded`,
                            onChange: t(`category`),
                            children: [
                              (0, d.jsx)(`option`, {
                                defaultValue: `choose an option`,
                                children: `choose category`,
                              }),
                              v?.map((e, t) =>
                                (0, d.jsx)(
                                  `option`,
                                  { value: e._id, children: e.title },
                                  t,
                                ),
                              ),
                            ],
                          }),
                          S.category &&
                            (0, d.jsx)(`p`, {
                              className: `text-danger text-sm`,
                              children: S.category,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `subCategory`,
                          className: `text-[14px]`,
                          children: [
                            `Required skills `,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsxs)(`div`, {
                        className: `col`,
                        children: [
                          (0, d.jsx)(o, {
                            value: s,
                            onChange: (e) => {
                              (f(e), p((t) => ({ ...t, subCategory: e })));
                            },
                            name: `subCategory`,
                            placeHolder: `press enter to add tags`,
                          }),
                          S.subCategory &&
                            (0, d.jsx)(`p`, {
                              className: `text-danger text-sm`,
                              children: S.subCategory,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `tags`,
                          className: `text-[14px]`,
                          children: [
                            `Tags `,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsxs)(`div`, {
                        className: `col`,
                        children: [
                          (0, d.jsx)(o, {
                            value: h,
                            onChange: (e) => {
                              (m(e), p((t) => ({ ...t, tags: e })));
                            },
                            name: `tags`,
                            placeHolder: `press enter to add tags`,
                          }),
                          S.tags &&
                            (0, d.jsx)(`p`, {
                              className: `text-danger text-sm`,
                              children: S.tags,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `shortDescription`,
                          className: `text-[14px]`,
                          children: [
                            `Job short description `,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsxs)(`div`, {
                        className: `col mb-1`,
                        children: [
                          (0, d.jsx)(`textarea`, {
                            className: `form-input rounded`,
                            rows: 6,
                            name: `shortDescription`,
                            value: a.shortDescription,
                            onChange: t(`shortDescription`),
                          }),
                          S.shortDescription &&
                            (0, d.jsx)(`p`, {
                              className: `text-danger text-sm`,
                              children: S.shortDescription,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, d.jsx)(`p`, {
                    class: `character`,
                    children: `Not more than 0 - 300 characters`,
                  }),
                  (0, d.jsx)(`br`, {}),
                  (0, d.jsxs)(c, {
                    query: `(min-width: 787px)`,
                    children: [
                      (0, d.jsxs)(`div`, {
                        className: `row mb-3`,
                        children: [
                          (0, d.jsx)(`div`, {
                            className: `col-3`,
                            children: (0, d.jsxs)(`label`, {
                              htmlFor: `description`,
                              className: `text-[14px]`,
                              children: [
                                `Job description `,
                                (0, d.jsx)(`sup`, {
                                  className: `text-danger`,
                                  children: `*`,
                                }),
                              ],
                            }),
                          }),
                          (0, d.jsxs)(`div`, {
                            className: `col mb-16 mt-8`,
                            children: [
                              (0, d.jsx)(u.default, {
                                id: `description`,
                                name: `description`,
                                className: `description rounded w-100`,
                                theme: `snow`,
                                modules: {
                                  toolbar: [
                                    [`bold`, `italic`, `underline`],
                                    [{ list: `ordered` }, { list: `bullet` }],
                                  ],
                                },
                                ref: (e) => {
                                  _.current = e;
                                  let t = _.current?.getEditor();
                                  t?.on(`text-change`, () => {
                                    t.getLength() > 15e3 &&
                                      t.deleteText(15e3, t.getLength());
                                  });
                                },
                                style: {
                                  height: `200px`,
                                  width: `758px`,
                                  borderRadius: `20px`,
                                },
                                onChange: i,
                              }),
                              S.description &&
                                (0, d.jsx)(`p`, {
                                  className: `text-danger text-sm`,
                                  children: S.description,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, d.jsx)(`p`, {
                        class: `character1`,
                        children: `Not more than 0 - 5000 characters`,
                      }),
                    ],
                  }),
                  (0, d.jsxs)(c, {
                    query: `(max-width: 786px)`,
                    children: [
                      (0, d.jsxs)(`div`, {
                        className: `row mb-3`,
                        children: [
                          (0, d.jsx)(`div`, {
                            className: `col-3`,
                            children: (0, d.jsxs)(`label`, {
                              htmlFor: `description`,
                              className: `text-[14px]`,
                              children: [
                                `Job description `,
                                (0, d.jsx)(`sup`, {
                                  className: `text-danger`,
                                  children: `*`,
                                }),
                              ],
                            }),
                          }),
                          (0, d.jsxs)(`div`, {
                            className: `col mb-16 mt-8`,
                            children: [
                              (0, d.jsx)(u.default, {
                                id: `description`,
                                name: `description`,
                                className: `description w-100`,
                                theme: `snow`,
                                modules: {
                                  toolbar: [
                                    [`bold`, `italic`, `underline`],
                                    [{ list: `ordered` }, { list: `bullet` }],
                                  ],
                                },
                                ref: (e) => {
                                  _.current = e;
                                  let t = _.current?.getEditor();
                                  t?.on(`text-change`, () => {
                                    t.getLength() > 15e3 &&
                                      t.deleteText(15e3, t.getLength());
                                  });
                                },
                                style: {
                                  height: `200px`,
                                  width: `758px`,
                                  borderRadius: `20px`,
                                },
                                onChange: i,
                              }),
                              S.description &&
                                (0, d.jsx)(`p`, {
                                  className: `text-danger text-sm`,
                                  children: S.description,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, d.jsx)(`p`, {
                        class: `character1`,
                        children: `Not more than 0 - 5000 characters`,
                      }),
                    ],
                  }),
                  (0, d.jsx)(`div`, {
                    className: `form-group flex justify-center mt-10`,
                    children: (0, d.jsx)(`button`, {
                      onClick: (t) => {
                        (t.preventDefault(), T() && e());
                      },
                      className: `btn justify-center items-center bg-prime text-light`,
                      children: `Submit`,
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  p = ({
    nextStep: e,
    prevStep: t,
    handleSubmit: n,
    handleChange: r,
    values: i,
  }) => {
    let [a, o] = (0, l.useState)(i.isReferenceJob);
    (0, l.useEffect)(() => {
      o(i.isReferenceJob);
    }, [i.isReferenceJob]);
    let s = (e) => {
      let t = e.target.value === `yes`;
      (o(t), r(`isReferenceJob`)({ target: { value: t } }));
    };
    return (0, d.jsx)(d.Fragment, {
      children: (0, d.jsx)(`div`, {
        className: `container-fluid`,
        children: (0, d.jsxs)(`div`, {
          className: `container-sm py-3`,
          children: [
            (0, d.jsx)(`h4`, {
              className: `text-primary`,
              children: `Add company basic detail`,
            }),
            (0, d.jsx)(`div`, {
              className: `row py-3`,
              children: (0, d.jsxs)(`div`, {
                className: `col-lg-11`,
                children: [
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `profilePicture`,
                          className: `text-[14px]`,
                          children: [
                            `Company logo`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)(`div`, {
                        className: `col`,
                        children: (0, d.jsx)(`input`, {
                          type: `text`,
                          name: `profilePicture`,
                          onChange: r(`profilePicture`),
                          value: i.profilePicture,
                          placeholder: `company logo or profile image`,
                          className: `form-input`,
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `openings`,
                          className: `text-[14px]`,
                          children: [
                            `Total openings`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)(`div`, {
                        className: `col`,
                        children: (0, d.jsx)(`input`, {
                          type: `number`,
                          name: `openings`,
                          onChange: r(`openings`),
                          value: i.openings,
                          className: `form-input`,
                          placeholder: `number of openings`,
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `experience`,
                          className: `text-[14px]`,
                          children: [
                            `Min experience`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)(`div`, {
                        className: `col`,
                        children: (0, d.jsxs)(`select`, {
                          className: `form-input`,
                          onChange: r(`experience`),
                          value: i.experience,
                          children: [
                            (0, d.jsx)(`option`, {
                              value: ``,
                              children: `choose min experience`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Fresher`,
                              children: `Fresher`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `1 - 2 years`,
                              children: `1 - 2 years`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `2 - 3 years`,
                              children: `2 - 3 years`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `4 - 6 years`,
                              children: `4 - 6 years`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `7 - 8 years`,
                              children: `7 - 8 years`,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `salaryRange`,
                          className: `text-[14px]`,
                          children: [
                            `Salary range`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)(`div`, {
                        className: `col`,
                        children: (0, d.jsxs)(`select`, {
                          className: `form-input`,
                          onChange: r(`salaryRange`),
                          value: i.salaryRange,
                          children: [
                            (0, d.jsx)(`option`, {
                              value: ``,
                              children: `choose salary range`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `5k - 10k`,
                              children: `5k - 10k`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `15k - 25k`,
                              children: `15k - 25k`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `4 lpa - 6 lpa`,
                              children: `4 lpa - 6 lpa`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `8 lpa - 10 lpa`,
                              children: `8 lpa - 10 lpa`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Not disclosed`,
                              children: `Not disclosed`,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `jobType`,
                          className: `text-[14px]`,
                          children: [
                            `Job type`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)(`div`, {
                        className: `col`,
                        children: (0, d.jsxs)(`select`, {
                          className: `form-input`,
                          onChange: r(`jobType`),
                          value: i.jobType,
                          children: [
                            (0, d.jsx)(`option`, {
                              value: ``,
                              children: `choose job type`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Work from home`,
                              children: `Work from home`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Work from office`,
                              children: `Work from office`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Hybrid`,
                              children: `Hybrid`,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `workType`,
                          className: `text-[14px]`,
                          children: [
                            `Work type`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)(`div`, {
                        className: `col`,
                        children: (0, d.jsxs)(`select`, {
                          className: `form-input`,
                          onChange: r(`workType`),
                          value: i.workType,
                          children: [
                            (0, d.jsx)(`option`, {
                              value: ``,
                              children: `choose work type`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Full-time`,
                              children: `Full-time`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Part-time`,
                              children: `Part-time`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Internship`,
                              children: `Internship`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Contractual`,
                              children: `Contractual`,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `qualification`,
                          className: `text-[14px]`,
                          children: [
                            `Minimum qualification`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)(`div`, {
                        className: `col`,
                        children: (0, d.jsxs)(`select`, {
                          className: `form-input`,
                          onChange: r(`qualification`),
                          value: i.qualification,
                          children: [
                            (0, d.jsx)(`option`, {
                              value: ``,
                              children: `choose min qualification`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Post-graduation`,
                              children: `Post-graduation`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Graduation`,
                              children: `Graduation`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Diploma`,
                              children: `Diploma`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `10th/12th Passed`,
                              children: `10th/12th Passed`,
                            }),
                            (0, d.jsx)(`option`, {
                              value: `Any`,
                              children: `Any`,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `companyName`,
                          className: `text-[14px]`,
                          children: [
                            `Company Name`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)(`div`, {
                        className: `col`,
                        children: (0, d.jsx)(`input`, {
                          type: `text`,
                          name: `companyName`,
                          onChange: r(`companyName`),
                          value: i.companyName,
                          placeholder: `Company name`,
                          className: `form-input`,
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `companyWebsite`,
                          className: `text-[14px]`,
                          children: [
                            `Company Website`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)(`div`, {
                        className: `col`,
                        children: (0, d.jsx)(`input`, {
                          type: `text`,
                          name: `companyWebsite`,
                          onChange: r(`companyWebsite`),
                          value: i.companyWebsite,
                          placeholder: `Company website`,
                          className: `form-input`,
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `jobLocation`,
                          className: `text-[14px]`,
                          children: [
                            `Location`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsx)(`div`, {
                        className: `col`,
                        children: (0, d.jsx)(`input`, {
                          type: `text`,
                          name: `jobLocation`,
                          onChange: r(`jobLocation`),
                          value: i.jobLocation,
                          placeholder: `Company website`,
                          className: `form-input`,
                        }),
                      }),
                    ],
                  }),
                  (0, d.jsxs)(`div`, {
                    className: `row mb-3`,
                    children: [
                      (0, d.jsx)(`div`, {
                        className: `col-3`,
                        children: (0, d.jsxs)(`label`, {
                          htmlFor: `isReferenceJob`,
                          className: `text-[14px]`,
                          children: [
                            `Is a reference job?`,
                            (0, d.jsx)(`sup`, {
                              className: `text-danger`,
                              children: `*`,
                            }),
                          ],
                        }),
                      }),
                      (0, d.jsxs)(`div`, {
                        className: `col d-flex align-items-center gap-2`,
                        children: [
                          (0, d.jsx)(`input`, {
                            type: `radio`,
                            value: `yes`,
                            checked: a,
                            onChange: s,
                            name: `isReferenceJob`,
                            id: `isReferenceJobYes`,
                          }),
                          (0, d.jsx)(`label`, {
                            htmlFor: `isReferenceJobYes`,
                            children: `Yes`,
                          }),
                          (0, d.jsx)(`input`, {
                            type: `radio`,
                            value: `no`,
                            checked: !a,
                            onChange: s,
                            name: `isReferenceJob`,
                            id: `isReferenceJobNo`,
                          }),
                          (0, d.jsx)(`label`, {
                            htmlFor: `isReferenceJobNo`,
                            children: `No`,
                          }),
                        ],
                      }),
                    ],
                  }),
                  a &&
                    (0, d.jsx)(d.Fragment, {
                      children: (0, d.jsxs)(`div`, {
                        className: `row mb-3`,
                        children: [
                          (0, d.jsx)(`div`, {
                            className: `col-3`,
                            children: (0, d.jsxs)(`label`, {
                              htmlFor: `jobUrl`,
                              className: `text-[14px]`,
                              children: [
                                `Job URL`,
                                (0, d.jsx)(`sup`, {
                                  className: `text-danger`,
                                  children: `*`,
                                }),
                              ],
                            }),
                          }),
                          (0, d.jsx)(`div`, {
                            className: `col`,
                            children: (0, d.jsx)(`input`, {
                              type: `text`,
                              name: `jobUrl`,
                              onChange: r(`jobUrl`),
                              value: i.jobUrl,
                              placeholder: `Job URL`,
                              className: `form-input`,
                            }),
                          }),
                        ],
                      }),
                    }),
                  (0, d.jsx)(`div`, {
                    className: `form-group mt-4 d-flex gap-3 py-3`,
                    style: { marginTop: `10px` },
                    children: (0, d.jsx)(`button`, {
                      onClick: n,
                      className: `btn bg-prime text-light`,
                      children: `Submit`,
                    }),
                  }),
                  (0, d.jsx)(`button`, {
                    onClick: t,
                    className: `btn`,
                    children: `Back`,
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  m = () => {
    let { addJobData: e } = i(),
      t = JSON.parse(sessionStorage.getItem(`data`)),
      [n, r] = (0, l.useState)([]),
      [o, s] = (0, l.useState)([]),
      c = a(),
      [u, m] = (0, l.useState)({
        adminId: t.id || ``,
        email: t.email || ``,
        title: ``,
        basicTitle: ``,
        category: ``,
        subCategory: [],
        shortDescription: ``,
        description: ``,
        tags: [],
        profilePicture: ``,
        openings: ``,
        jobType: ``,
        workType: ``,
        qualification: ``,
        experience: ``,
        salaryRange: ``,
        companyName: ``,
        companyWebsite: ``,
        jobLocation: ``,
        jobUrl: ``,
        isReferenceJob: !1,
      }),
      [h, g] = (0, l.useState)(1),
      _ = () => g(h + 1),
      v = () => g(h - 1),
      y = (e) => (t) => {
        m({ ...u, [e]: t.target.value });
      },
      b = (e, t) => {
        m((n) => ({ ...n, [e]: t }));
      },
      x = async (t) => {
        t.preventDefault();
        try {
          (console.log(`this is job dat`, u),
            await e(u),
            c(`/view-my-applications`));
        } catch (e) {
          console.error(`Error adding job:`, e);
        }
      },
      S = (e) => b(`description`, e),
      C = (e) => {
        e.length <= 10 && m((t) => ({ ...t, shortDescription: e }));
      };
    switch (h) {
      case 1:
        return (0, d.jsx)(f, {
          nextStep: _,
          handleChange: y,
          selected: n,
          setSelected: r,
          values: u,
          setValues: m,
          setTags: s,
          tags: o,
          handleDescriptionChange: S,
          handleShortDescriptionChange: C,
        });
      case 2:
        return (0, d.jsx)(p, {
          nextStep: _,
          prevStep: v,
          values: u,
          handleChange: y,
          handleSubmit: x,
        });
      default:
        return (0, d.jsx)(f, {});
    }
  };
export { m as default };
