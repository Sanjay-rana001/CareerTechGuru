import { n as e, t } from "./jsx-runtime-CjtlecKO.js";
import { mt as n } from "./index-D6kauhrE.js";
e();
var r = t(),
  i = () => {
    let e = n();
    return (0, r.jsx)(`div`, {
      className: `row justify-center items-center min-h-[100vh]`,
      children: (0, r.jsxs)(`div`, {
        className: `col-lg-6`,
        children: [
          (0, r.jsx)(`h3`, {
            className: `display-4 text-center mb-2 capitalize text-primary`,
            children: `We lost this page`,
          }),
          (0, r.jsxs)(`p`, {
            className: `text-center mb-3`,
            children: [
              `We searched high and low but couldn't find what you are looking for. Let's find a better place for you to go`,
              (0, r.jsx)(`div`, {
                className: `my-3`,
                children: (0, r.jsx)(`button`, {
                  onClick: () => e(`/`),
                  className: `btn btn-primary rounded-0 w-25`,
                  children: `Back to home`,
                }),
              }),
            ],
          }),
        ],
      }),
    });
  };
export { i as default };
