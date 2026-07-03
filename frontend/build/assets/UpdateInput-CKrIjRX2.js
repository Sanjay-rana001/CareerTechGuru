import { a as e, n as t, t as n } from "./jsx-runtime-CjtlecKO.js";
import { K as r, Y as i } from "./index-D6kauhrE.js";
var a = e(t()),
  o = e(r()),
  s = n(),
  c = ({ title: e, field: t, onUpdate: n }) => {
    let { updateEmployeeDetails: r } = i(),
      [o, c] = (0, a.useState)(e);
    return (0, s.jsxs)(`div`, {
      className: `col-lg-12 justify-center items-center bg-white rounded py-7`,
      children: [
        (0, s.jsx)(`h2`, { className: `h3 text-prime`, children: `Update` }),
        (0, s.jsxs)(`form`, {
          className: `form-group`,
          onSubmit: async (e) => {
            e.preventDefault();
            let i = JSON.parse(sessionStorage.getItem(`data`));
            if (!i?.email) {
              console.error(`User email is not available`);
              return;
            }
            let a = { key: t, value: o };
            try {
              (await r(i.email, a), n(a));
            } catch (e) {
              console.error(`Error updating employee details`, e);
            }
          },
          children: [
            (0, s.jsx)(`label`, {
              htmlFor: `updateTitle`,
              className: `form-label`,
              children: `Title`,
            }),
            (0, s.jsx)(`input`, {
              type: `text`,
              id: `updateTitle`,
              value: o,
              onChange: (e) => {
                c(e.target.value);
              },
              className: `form-control`,
              "aria-label": `Title`,
            }),
            (0, s.jsx)(`button`, {
              type: `submit`,
              className: `btn justify-center w-28 mt-3 text-light`,
              style: { backgroundColor: `#0F79AF` },
              children: `Update`,
            }),
          ],
        }),
      ],
    });
  };
((c.propTypes = {
  title: o.default.string,
  field: o.default.string.isRequired,
  onUpdate: o.default.func.isRequired,
}),
  (c.defaultProps = { title: `` }));
export { c as t };
