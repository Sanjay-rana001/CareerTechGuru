import { a as e, n as t, r as n, t as r } from "./jsx-runtime-CjtlecKO.js";
import {
  K as i,
  X as a,
  _ as o,
  a as s,
  b as c,
  c as l,
  d as u,
  f as d,
  g as f,
  h as p,
  ht as m,
  i as ee,
  l as h,
  m as g,
  mt as te,
  n as _,
  o as v,
  p as y,
  r as b,
  s as x,
  t as S,
  u as C,
} from "./index-D6kauhrE.js";
import { i as w } from "./io5-BcyI83J0.js";
import { t as T } from "./vsc-BoyV5Cs0.js";
var E = class extends f {
  constructor(e, t) {
    (super(),
      (this.options = t),
      (this.#e = e),
      (this.#s = null),
      (this.#o = ee()),
      this.bindMethods(),
      this.setOptions(t));
  }
  #e;
  #t = void 0;
  #n = void 0;
  #r = void 0;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f;
  #p;
  #m = new Set();
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 &&
      (this.#t.addObserver(this),
      re(this.#t, this.options) ? this.#h() : this.updateResult(),
      this.#y());
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return D(this.#t, this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return D(this.#t, this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    ((this.listeners = new Set()),
      this.#b(),
      this.#x(),
      this.#t.removeObserver(this));
  }
  setOptions(e) {
    let t = this.options,
      n = this.#t;
    if (
      ((this.options = this.#e.defaultQueryOptions(e)),
      this.options.enabled !== void 0 &&
        typeof this.options.enabled != `boolean` &&
        typeof this.options.enabled != `function` &&
        typeof h(this.options.enabled, this.#t) != `boolean`)
    )
      throw Error(
        `Expected enabled to be a boolean or a callback that returns a boolean`,
      );
    (this.#S(),
      this.#t.setOptions(this.options),
      t._defaulted &&
        !u(this.options, t) &&
        this.#e
          .getQueryCache()
          .notify({
            type: `observerOptionsUpdated`,
            query: this.#t,
            observer: this,
          }));
    let r = this.hasListeners();
    (r && ie(this.#t, n, this.options, t) && this.#h(),
      this.updateResult(),
      r &&
        (this.#t !== n ||
          h(this.options.enabled, this.#t) !== h(t.enabled, this.#t) ||
          C(this.options.staleTime, this.#t) !== C(t.staleTime, this.#t)) &&
        this.#g());
    let i = this.#_();
    r &&
      (this.#t !== n ||
        h(this.options.enabled, this.#t) !== h(t.enabled, this.#t) ||
        i !== this.#p) &&
      this.#v(i);
  }
  getOptimisticResult(e) {
    let t = this.#e.getQueryCache().build(this.#e, e),
      n = this.createResult(t, e);
    return (
      ae(this, n) &&
        ((this.#r = n), (this.#a = this.options), (this.#i = this.#t.state)),
      n
    );
  }
  getCurrentResult() {
    return this.#r;
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (e, n) => (
        this.trackProp(n),
        t?.(n),
        n === `promise` &&
          (this.trackProp(`data`),
          !this.options.experimental_prefetchInRender &&
            this.#o.status === `pending` &&
            this.#o.reject(
              Error(
                `experimental_prefetchInRender feature flag is not enabled`,
              ),
            )),
        Reflect.get(e, n)
      ),
    });
  }
  trackProp(e) {
    this.#m.add(e);
  }
  getCurrentQuery() {
    return this.#t;
  }
  refetch({ ...e } = {}) {
    return this.fetch({ ...e });
  }
  fetchOptimistic(e) {
    let t = this.#e.defaultQueryOptions(e),
      n = this.#e.getQueryCache().build(this.#e, t);
    return n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e) {
    return this.#h({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
      () => (this.updateResult(), this.#r),
    );
  }
  #h(e) {
    this.#S();
    let t = this.#t.fetch(this.options, e);
    return (e?.throwOnError || (t = t.catch(x)), t);
  }
  #g() {
    this.#b();
    let e = C(this.options.staleTime, this.#t);
    if (s.isServer() || this.#r.isStale || !v(e)) return;
    let t = y(this.#r.dataUpdatedAt, e) + 1;
    this.#d = g.setTimeout(() => {
      this.#r.isStale || this.updateResult();
    }, t);
  }
  #_() {
    return (
      (typeof this.options.refetchInterval == `function`
        ? this.options.refetchInterval(this.#t)
        : this.options.refetchInterval) ?? !1
    );
  }
  #v(e) {
    (this.#x(),
      (this.#p = e),
      !(
        s.isServer() ||
        h(this.options.enabled, this.#t) === !1 ||
        !v(this.#p) ||
        this.#p === 0
      ) &&
        (this.#f = g.setInterval(() => {
          (this.options.refetchIntervalInBackground || p.isFocused()) &&
            this.#h();
        }, this.#p)));
  }
  #y() {
    (this.#g(), this.#v(this.#_()));
  }
  #b() {
    this.#d !== void 0 && (g.clearTimeout(this.#d), (this.#d = void 0));
  }
  #x() {
    this.#f !== void 0 && (g.clearInterval(this.#f), (this.#f = void 0));
  }
  createResult(e, t) {
    let n = this.#t,
      r = this.options,
      i = this.#r,
      a = this.#i,
      o = this.#a,
      s = e === n ? this.#n : e.state,
      { state: c } = e,
      u = { ...c },
      d = !1,
      f;
    if (t._optimisticResults) {
      let i = this.hasListeners(),
        a = !i && re(e, t),
        o = i && ie(e, n, t, r);
      ((a || o) && (u = { ...u, ..._(c.data, e.options) }),
        t._optimisticResults === `isRestoring` && (u.fetchStatus = `idle`));
    }
    let { error: p, errorUpdatedAt: m, status: g } = u;
    f = u.data;
    let te = !1;
    if (t.placeholderData !== void 0 && f === void 0 && g === `pending`) {
      let e;
      (i?.isPlaceholderData && t.placeholderData === o?.placeholderData
        ? ((e = i.data), (te = !0))
        : (e =
            typeof t.placeholderData == `function`
              ? t.placeholderData(this.#u?.state.data, this.#u)
              : t.placeholderData),
        e !== void 0 && ((g = `success`), (f = l(i?.data, e, t)), (d = !0)));
    }
    if (t.select && f !== void 0 && !te)
      if (i && f === a?.data && t.select === this.#c) f = this.#l;
      else
        try {
          ((this.#c = t.select),
            (f = t.select(f)),
            (f = l(i?.data, f, t)),
            (this.#l = f),
            (this.#s = null));
        } catch (e) {
          this.#s = e;
        }
    this.#s && ((p = this.#s), (f = this.#l), (m = Date.now()), (g = `error`));
    let v = u.fetchStatus === `fetching`,
      y = g === `pending`,
      b = g === `error`,
      x = y && v,
      S = f !== void 0,
      C = {
        status: g,
        fetchStatus: u.fetchStatus,
        isPending: y,
        isSuccess: g === `success`,
        isError: b,
        isInitialLoading: x,
        isLoading: x,
        data: f,
        dataUpdatedAt: u.dataUpdatedAt,
        error: p,
        errorUpdatedAt: m,
        failureCount: u.fetchFailureCount,
        failureReason: u.fetchFailureReason,
        errorUpdateCount: u.errorUpdateCount,
        isFetched: e.isFetched(),
        isFetchedAfterMount:
          u.dataUpdateCount > s.dataUpdateCount ||
          u.errorUpdateCount > s.errorUpdateCount,
        isFetching: v,
        isRefetching: v && !y,
        isLoadingError: b && !S,
        isPaused: u.fetchStatus === `paused`,
        isPlaceholderData: d,
        isRefetchError: b && S,
        isStale: O(e, t),
        refetch: this.refetch,
        promise: this.#o,
        isEnabled: h(t.enabled, e) !== !1,
      };
    if (this.options.experimental_prefetchInRender) {
      let t = C.data !== void 0,
        r = C.status === `error` && !t,
        i = (e) => {
          r ? e.reject(C.error) : t && e.resolve(C.data);
        },
        a = () => {
          let e = (this.#o = C.promise = ee());
          i(e);
        },
        o = this.#o;
      switch (o.status) {
        case `pending`:
          e.queryHash === n.queryHash && i(o);
          break;
        case `fulfilled`:
          (r || C.data !== o.value) && a();
          break;
        case `rejected`:
          (!r || C.error !== o.reason) && a();
          break;
      }
    }
    return C;
  }
  updateResult() {
    let e = this.#r,
      t = this.createResult(this.#t, this.options);
    ((this.#i = this.#t.state),
      (this.#a = this.options),
      this.#i.data !== void 0 && (this.#u = this.#t),
      !u(t, e) &&
        ((this.#r = t),
        this.#C({
          listeners: (() => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              n = typeof t == `function` ? t() : t;
            if (n === `all` || (!n && !this.#m.size)) return !0;
            let r = new Set(n ?? this.#m);
            return (
              this.options.throwOnError && r.add(`error`),
              Object.keys(this.#r).some((t) => {
                let n = t;
                return this.#r[n] !== e[n] && r.has(n);
              })
            );
          })(),
        })));
  }
  #S() {
    let e = this.#e.getQueryCache().build(this.#e, this.options);
    if (e === this.#t) return;
    let t = this.#t;
    ((this.#t = e),
      (this.#n = e.state),
      this.hasListeners() && (t?.removeObserver(this), e.addObserver(this)));
  }
  onQueryUpdate() {
    (this.updateResult(), this.hasListeners() && this.#y());
  }
  #C(e) {
    b.batch(() => {
      (e.listeners &&
        this.listeners.forEach((e) => {
          e(this.#r);
        }),
        this.#e
          .getQueryCache()
          .notify({ query: this.#t, type: `observerResultsUpdated` }));
    });
  }
};
function ne(e, t) {
  return (
    h(t.enabled, e) !== !1 &&
    e.state.data === void 0 &&
    !(e.state.status === `error` && h(t.retryOnMount, e) === !1)
  );
}
function re(e, t) {
  return ne(e, t) || (e.state.data !== void 0 && D(e, t, t.refetchOnMount));
}
function D(e, t, n) {
  if (h(t.enabled, e) !== !1 && C(t.staleTime, e) !== `static`) {
    let r = typeof n == `function` ? n(e) : n;
    return r === `always` || (r !== !1 && O(e, t));
  }
  return !1;
}
function ie(e, t, n, r) {
  return (
    (e !== t || h(r.enabled, e) === !1) &&
    (!n.suspense || e.state.status !== `error`) &&
    O(e, n)
  );
}
function O(e, t) {
  return h(t.enabled, e) !== !1 && e.isStaleByTime(C(t.staleTime, e));
}
function ae(e, t) {
  return !u(e.getCurrentResult(), t);
}
var k = e(t(), 1),
  oe = k.createContext(!1),
  se = () => k.useContext(oe);
oe.Provider;
var A = r();
function ce() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e,
  };
}
var le = k.createContext(ce()),
  ue = () => k.useContext(le),
  de = (e, t, n) => {
    let r =
      n?.state.error && typeof e.throwOnError == `function`
        ? d(e.throwOnError, [n.state.error, n])
        : e.throwOnError;
    (e.suspense || e.experimental_prefetchInRender || r) &&
      (t.isReset() || (e.retryOnMount = !1));
  },
  j = (e) => {
    k.useEffect(() => {
      e.clearReset();
    }, [e]);
  },
  M = ({
    result: e,
    errorResetBoundary: t,
    throwOnError: n,
    query: r,
    suspense: i,
  }) =>
    e.isError &&
    !t.isReset() &&
    !e.isFetching &&
    r &&
    ((i && e.data === void 0) || d(n, [e.error, r])),
  fe = (e) => {
    if (e.suspense) {
      let t = 1e3,
        n = (e) => (e === `static` ? e : Math.max(e ?? t, t)),
        r = e.staleTime;
      ((e.staleTime = typeof r == `function` ? (...e) => n(r(...e)) : n(r)),
        typeof e.gcTime == `number` && (e.gcTime = Math.max(e.gcTime, t)));
    }
  },
  pe = (e, t) => e.isLoading && e.isFetching && !t,
  me = (e, t) => e?.suspense && t.isPending,
  he = (e, t, n) =>
    t.fetchOptimistic(e).catch(() => {
      n.clearReset();
    });
function ge(e, t, n) {
  let r = se(),
    i = ue(),
    a = S(n),
    o = a.defaultQueryOptions(e);
  a.getDefaultOptions().queries?._experimental_beforeQuery?.(o);
  let c = a.getQueryCache().get(o.queryHash),
    l = e.subscribed !== !1;
  ((o._optimisticResults = r ? `isRestoring` : l ? `optimistic` : void 0),
    fe(o),
    de(o, i, c),
    j(i));
  let u = !a.getQueryCache().get(o.queryHash),
    [d] = k.useState(() => new t(a, o)),
    f = d.getOptimisticResult(o),
    p = !r && l;
  if (
    (k.useSyncExternalStore(
      k.useCallback(
        (e) => {
          let t = p ? d.subscribe(b.batchCalls(e)) : x;
          return (d.updateResult(), t);
        },
        [d, p],
      ),
      () => d.getCurrentResult(),
      () => d.getCurrentResult(),
    ),
    k.useEffect(() => {
      d.setOptions(o);
    }, [o, d]),
    me(o, f))
  )
    throw he(o, d, i);
  if (
    M({
      result: f,
      errorResetBoundary: i,
      throwOnError: o.throwOnError,
      query: c,
      suspense: o.suspense,
    })
  )
    throw f.error;
  return (
    a.getDefaultOptions().queries?._experimental_afterQuery?.(o, f),
    o.experimental_prefetchInRender &&
      !s.isServer() &&
      pe(f, r) &&
      (u ? he(o, d, i) : c?.promise)?.catch(x).finally(() => {
        d.updateResult();
      }),
    o.notifyOnChangeProps ? f : d.trackResult(f)
  );
}
function _e(e, t) {
  return ge(e, E, t);
}
var N = e(
    n((e, t) => {
      (function (n, r) {
        typeof e == `object` && t !== void 0
          ? (t.exports = r())
          : typeof define == `function` && define.amd
            ? define(r)
            : ((n = typeof globalThis < `u` ? globalThis : n || self),
              (n.DOMPurify = r()));
      })(e, function () {
        let {
            entries: e,
            setPrototypeOf: t,
            isFrozen: n,
            getPrototypeOf: r,
            getOwnPropertyDescriptor: i,
          } = Object,
          { freeze: a, seal: o, create: s } = Object,
          { apply: c, construct: l } = typeof Reflect < `u` && Reflect;
        ((a ||= function (e) {
          return e;
        }),
          (o ||= function (e) {
            return e;
          }),
          (c ||= function (e, t, n) {
            return e.apply(t, n);
          }),
          (l ||= function (e, t) {
            return new e(...t);
          }));
        let u = x(Array.prototype.forEach),
          d = x(Array.prototype.pop),
          f = x(Array.prototype.push),
          p = x(String.prototype.toLowerCase),
          m = x(String.prototype.toString),
          ee = x(String.prototype.match),
          h = x(String.prototype.replace),
          g = x(String.prototype.indexOf),
          te = x(String.prototype.trim),
          _ = x(Object.prototype.hasOwnProperty),
          v = x(RegExp.prototype.test),
          y = S(TypeError),
          b = x(Number.isNaN);
        function x(e) {
          return function (t) {
            var n = [...arguments].slice(1);
            return c(e, t, n);
          };
        }
        function S(e) {
          return function () {
            return l(e, [...arguments]);
          };
        }
        function C(e, r) {
          let i =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : p;
          t && t(e, null);
          let a = r.length;
          for (; a--;) {
            let t = r[a];
            if (typeof t == `string`) {
              let e = i(t);
              e !== t && (n(r) || (r[a] = e), (t = e));
            }
            e[t] = !0;
          }
          return e;
        }
        function w(e) {
          for (let t = 0; t < e.length; t++) _(e, t) || (e[t] = null);
          return e;
        }
        function T(t) {
          let n = s(null);
          for (let [r, i] of e(t))
            _(t, r) &&
              (Array.isArray(i)
                ? (n[r] = w(i))
                : i && typeof i == `object` && i.constructor === Object
                  ? (n[r] = T(i))
                  : (n[r] = i));
          return n;
        }
        function E(e, t) {
          for (; e !== null;) {
            let n = i(e, t);
            if (n) {
              if (n.get) return x(n.get);
              if (typeof n.value == `function`) return x(n.value);
            }
            e = r(e);
          }
          function n() {
            return null;
          }
          return n;
        }
        let ne = a(
            `a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.section.select.shadow.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(
              `.`,
            ),
          ),
          re = a(
            `svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.filter.font.g.glyph.glyphref.hkern.image.line.lineargradient.marker.mask.metadata.mpath.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(
              `.`,
            ),
          ),
          D = a([
            `feBlend`,
            `feColorMatrix`,
            `feComponentTransfer`,
            `feComposite`,
            `feConvolveMatrix`,
            `feDiffuseLighting`,
            `feDisplacementMap`,
            `feDistantLight`,
            `feDropShadow`,
            `feFlood`,
            `feFuncA`,
            `feFuncB`,
            `feFuncG`,
            `feFuncR`,
            `feGaussianBlur`,
            `feImage`,
            `feMerge`,
            `feMergeNode`,
            `feMorphology`,
            `feOffset`,
            `fePointLight`,
            `feSpecularLighting`,
            `feSpotLight`,
            `feTile`,
            `feTurbulence`,
          ]),
          ie = a([
            `animate`,
            `color-profile`,
            `cursor`,
            `discard`,
            `font-face`,
            `font-face-format`,
            `font-face-name`,
            `font-face-src`,
            `font-face-uri`,
            `foreignobject`,
            `hatch`,
            `hatchpath`,
            `mesh`,
            `meshgradient`,
            `meshpatch`,
            `meshrow`,
            `missing-glyph`,
            `script`,
            `set`,
            `solidcolor`,
            `unknown`,
            `use`,
          ]),
          O = a(
            `math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(
              `.`,
            ),
          ),
          ae = a([
            `maction`,
            `maligngroup`,
            `malignmark`,
            `mlongdiv`,
            `mscarries`,
            `mscarry`,
            `msgroup`,
            `mstack`,
            `msline`,
            `msrow`,
            `semantics`,
            `annotation`,
            `annotation-xml`,
            `mprescripts`,
            `none`,
          ]),
          k = a([`#text`]),
          oe = a(
            `accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.face.for.headers.height.hidden.high.href.hreflang.id.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.pattern.placeholder.playsinline.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns.slot`.split(
              `.`,
            ),
          ),
          se = a(
            `accent-height.accumulate.additive.alignment-baseline.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(
              `.`,
            ),
          ),
          A = a(
            `accent.accentunder.align.bevelled.close.columnsalign.columnlines.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lspace.lquote.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(
              `.`,
            ),
          ),
          ce = a([
            `xlink:href`,
            `xml:id`,
            `xlink:title`,
            `xml:space`,
            `xmlns:xlink`,
          ]),
          le = o(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          ue = o(/<%[\w\W]*|[\w\W]*%>/gm),
          de = o(/\${[\w\W]*}/gm),
          j = o(/^data-[\-\w.\u00B7-\uFFFF]/),
          M = o(/^aria-[\-\w]+$/),
          fe = o(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
          ),
          pe = o(/^(?:\w+script|data):/i),
          me = o(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          he = o(/^html$/i),
          ge = o(/^[a-z][.\w]*(-[.\w]+)+$/i);
        var _e = Object.freeze({
          __proto__: null,
          MUSTACHE_EXPR: le,
          ERB_EXPR: ue,
          TMPLIT_EXPR: de,
          DATA_ATTR: j,
          ARIA_ATTR: M,
          IS_ALLOWED_URI: fe,
          IS_SCRIPT_OR_DATA: pe,
          ATTR_WHITESPACE: me,
          DOCTYPE_NAME: he,
          CUSTOM_ELEMENT: ge,
        });
        let N = {
            element: 1,
            attribute: 2,
            text: 3,
            cdataSection: 4,
            entityReference: 5,
            entityNode: 6,
            progressingInstruction: 7,
            comment: 8,
            document: 9,
            documentType: 10,
            documentFragment: 11,
            notation: 12,
          },
          ve = function () {
            return typeof window > `u` ? null : window;
          },
          ye = function (e, t) {
            if (typeof e != `object` || typeof e.createPolicy != `function`)
              return null;
            let n = null,
              r = `data-tt-policy-suffix`;
            t && t.hasAttribute(r) && (n = t.getAttribute(r));
            let i = `dompurify` + (n ? `#` + n : ``);
            try {
              return e.createPolicy(i, {
                createHTML(e) {
                  return e;
                },
                createScriptURL(e) {
                  return e;
                },
              });
            } catch {
              return (
                console.warn(
                  `TrustedTypes policy ` + i + ` could not be created.`,
                ),
                null
              );
            }
          };
        function be() {
          let t =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : ve(),
            n = (e) => be(e);
          if (
            ((n.version = `3.1.3`),
            (n.removed = []),
            !t || !t.document || t.document.nodeType !== N.document)
          )
            return ((n.isSupported = !1), n);
          let { document: r } = t,
            i = r,
            o = i.currentScript,
            {
              DocumentFragment: c,
              HTMLTemplateElement: l,
              Node: x,
              Element: S,
              NodeFilter: w,
              NamedNodeMap: le = t.NamedNodeMap || t.MozNamedAttrMap,
              HTMLFormElement: ue,
              DOMParser: de,
              trustedTypes: j,
            } = t,
            M = S.prototype,
            pe = E(M, `cloneNode`),
            me = E(M, `nextSibling`),
            ge = E(M, `childNodes`),
            P = E(M, `parentNode`);
          if (typeof l == `function`) {
            let e = r.createElement(`template`);
            e.content &&
              e.content.ownerDocument &&
              (r = e.content.ownerDocument);
          }
          let F,
            I = ``,
            {
              implementation: xe,
              createNodeIterator: Se,
              createDocumentFragment: Ce,
              getElementsByTagName: we,
            } = r,
            { importNode: Te } = i,
            L = {};
          n.isSupported =
            typeof e == `function` &&
            typeof P == `function` &&
            xe &&
            xe.createHTMLDocument !== void 0;
          let {
              MUSTACHE_EXPR: Ee,
              ERB_EXPR: De,
              TMPLIT_EXPR: Oe,
              DATA_ATTR: ke,
              ARIA_ATTR: Ae,
              IS_SCRIPT_OR_DATA: je,
              ATTR_WHITESPACE: Me,
              CUSTOM_ELEMENT: Ne,
            } = _e,
            { IS_ALLOWED_URI: Pe } = _e,
            R = null,
            Fe = C({}, [...ne, ...re, ...D, ...O, ...k]),
            z = null,
            Ie = C({}, [...oe, ...se, ...A, ...ce]),
            B = Object.seal(
              s(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              }),
            ),
            V = null,
            Le = null,
            Re = !0,
            ze = !0,
            Be = !1,
            Ve = !0,
            H = !1,
            He = !0,
            U = !1,
            Ue = !1,
            We = !1,
            W = !1,
            Ge = !1,
            Ke = !1,
            qe = !0,
            Je = !1,
            Ye = !0,
            G = !1,
            K = {},
            q = null,
            Xe = C({}, [
              `annotation-xml`,
              `audio`,
              `colgroup`,
              `desc`,
              `foreignobject`,
              `head`,
              `iframe`,
              `math`,
              `mi`,
              `mn`,
              `mo`,
              `ms`,
              `mtext`,
              `noembed`,
              `noframes`,
              `noscript`,
              `plaintext`,
              `script`,
              `style`,
              `svg`,
              `template`,
              `thead`,
              `title`,
              `video`,
              `xmp`,
            ]),
            Ze = null,
            Qe = C({}, [`audio`, `video`, `img`, `source`, `image`, `track`]),
            $e = null,
            et = C({}, [
              `alt`,
              `class`,
              `for`,
              `id`,
              `label`,
              `name`,
              `pattern`,
              `placeholder`,
              `role`,
              `summary`,
              `title`,
              `value`,
              `style`,
              `xmlns`,
            ]),
            tt = `http://www.w3.org/1998/Math/MathML`,
            nt = `http://www.w3.org/2000/svg`,
            J = `http://www.w3.org/1999/xhtml`,
            Y = J,
            rt = !1,
            it = null,
            at = C({}, [tt, nt, J], m),
            ot = null,
            st = [`application/xhtml+xml`, `text/html`],
            X = null,
            Z = null,
            ct = r.createElement(`form`),
            lt = function (e) {
              return e instanceof RegExp || e instanceof Function;
            },
            ut = function () {
              let e =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {};
              if (!(Z && Z === e)) {
                if (
                  ((!e || typeof e != `object`) && (e = {}),
                  (e = T(e)),
                  (ot =
                    st.indexOf(e.PARSER_MEDIA_TYPE) === -1
                      ? `text/html`
                      : e.PARSER_MEDIA_TYPE),
                  (X = ot === `application/xhtml+xml` ? m : p),
                  (R = _(e, `ALLOWED_TAGS`) ? C({}, e.ALLOWED_TAGS, X) : Fe),
                  (z = _(e, `ALLOWED_ATTR`) ? C({}, e.ALLOWED_ATTR, X) : Ie),
                  (it = _(e, `ALLOWED_NAMESPACES`)
                    ? C({}, e.ALLOWED_NAMESPACES, m)
                    : at),
                  ($e = _(e, `ADD_URI_SAFE_ATTR`)
                    ? C(T(et), e.ADD_URI_SAFE_ATTR, X)
                    : et),
                  (Ze = _(e, `ADD_DATA_URI_TAGS`)
                    ? C(T(Qe), e.ADD_DATA_URI_TAGS, X)
                    : Qe),
                  (q = _(e, `FORBID_CONTENTS`)
                    ? C({}, e.FORBID_CONTENTS, X)
                    : Xe),
                  (V = _(e, `FORBID_TAGS`) ? C({}, e.FORBID_TAGS, X) : {}),
                  (Le = _(e, `FORBID_ATTR`) ? C({}, e.FORBID_ATTR, X) : {}),
                  (K = _(e, `USE_PROFILES`) ? e.USE_PROFILES : !1),
                  (Re = e.ALLOW_ARIA_ATTR !== !1),
                  (ze = e.ALLOW_DATA_ATTR !== !1),
                  (Be = e.ALLOW_UNKNOWN_PROTOCOLS || !1),
                  (Ve = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1),
                  (H = e.SAFE_FOR_TEMPLATES || !1),
                  (He = e.SAFE_FOR_XML !== !1),
                  (U = e.WHOLE_DOCUMENT || !1),
                  (W = e.RETURN_DOM || !1),
                  (Ge = e.RETURN_DOM_FRAGMENT || !1),
                  (Ke = e.RETURN_TRUSTED_TYPE || !1),
                  (We = e.FORCE_BODY || !1),
                  (qe = e.SANITIZE_DOM !== !1),
                  (Je = e.SANITIZE_NAMED_PROPS || !1),
                  (Ye = e.KEEP_CONTENT !== !1),
                  (G = e.IN_PLACE || !1),
                  (Pe = e.ALLOWED_URI_REGEXP || fe),
                  (Y = e.NAMESPACE || J),
                  (B = e.CUSTOM_ELEMENT_HANDLING || {}),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    lt(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                    (B.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    lt(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                    (B.attributeNameCheck =
                      e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                  e.CUSTOM_ELEMENT_HANDLING &&
                    typeof e.CUSTOM_ELEMENT_HANDLING
                      .allowCustomizedBuiltInElements == `boolean` &&
                    (B.allowCustomizedBuiltInElements =
                      e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                  H && (ze = !1),
                  Ge && (W = !0),
                  K &&
                    ((R = C({}, k)),
                    (z = []),
                    K.html === !0 && (C(R, ne), C(z, oe)),
                    K.svg === !0 && (C(R, re), C(z, se), C(z, ce)),
                    K.svgFilters === !0 && (C(R, D), C(z, se), C(z, ce)),
                    K.mathMl === !0 && (C(R, O), C(z, A), C(z, ce))),
                  e.ADD_TAGS && (R === Fe && (R = T(R)), C(R, e.ADD_TAGS, X)),
                  e.ADD_ATTR && (z === Ie && (z = T(z)), C(z, e.ADD_ATTR, X)),
                  e.ADD_URI_SAFE_ATTR && C($e, e.ADD_URI_SAFE_ATTR, X),
                  e.FORBID_CONTENTS &&
                    (q === Xe && (q = T(q)), C(q, e.FORBID_CONTENTS, X)),
                  Ye && (R[`#text`] = !0),
                  U && C(R, [`html`, `head`, `body`]),
                  R.table && (C(R, [`tbody`]), delete V.tbody),
                  e.TRUSTED_TYPES_POLICY)
                ) {
                  if (typeof e.TRUSTED_TYPES_POLICY.createHTML != `function`)
                    throw y(
                      `TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`,
                    );
                  if (
                    typeof e.TRUSTED_TYPES_POLICY.createScriptURL != `function`
                  )
                    throw y(
                      `TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`,
                    );
                  ((F = e.TRUSTED_TYPES_POLICY), (I = F.createHTML(``)));
                } else
                  (F === void 0 && (F = ye(j, o)),
                    F !== null &&
                      typeof I == `string` &&
                      (I = F.createHTML(``)));
                (a && a(e), (Z = e));
              }
            },
            dt = C({}, [`mi`, `mo`, `mn`, `ms`, `mtext`]),
            ft = C({}, [`foreignobject`, `annotation-xml`]),
            pt = C({}, [`title`, `style`, `font`, `a`, `script`]),
            mt = C({}, [...re, ...D, ...ie]),
            ht = C({}, [...O, ...ae]),
            gt = function (e) {
              let t = P(e);
              (!t || !t.tagName) &&
                (t = { namespaceURI: Y, tagName: `template` });
              let n = p(e.tagName),
                r = p(t.tagName);
              return it[e.namespaceURI]
                ? e.namespaceURI === nt
                  ? t.namespaceURI === J
                    ? n === `svg`
                    : t.namespaceURI === tt
                      ? n === `svg` && (r === `annotation-xml` || dt[r])
                      : !!mt[n]
                  : e.namespaceURI === tt
                    ? t.namespaceURI === J
                      ? n === `math`
                      : t.namespaceURI === nt
                        ? n === `math` && ft[r]
                        : !!ht[n]
                    : e.namespaceURI === J
                      ? (t.namespaceURI === nt && !ft[r]) ||
                        (t.namespaceURI === tt && !dt[r])
                        ? !1
                        : !ht[n] && (pt[n] || !mt[n])
                      : !!(ot === `application/xhtml+xml` && it[e.namespaceURI])
                : !1;
            },
            Q = function (e) {
              f(n.removed, { element: e });
              try {
                e.parentNode.removeChild(e);
              } catch {
                e.remove();
              }
            },
            _t = function (e, t) {
              try {
                f(n.removed, { attribute: t.getAttributeNode(e), from: t });
              } catch {
                f(n.removed, { attribute: null, from: t });
              }
              if ((t.removeAttribute(e), e === `is` && !z[e]))
                if (W || Ge)
                  try {
                    Q(t);
                  } catch {}
                else
                  try {
                    t.setAttribute(e, ``);
                  } catch {}
            },
            vt = function (e) {
              let t = null,
                n = null;
              if (We) e = `<remove></remove>` + e;
              else {
                let t = ee(e, /^[\r\n\t ]+/);
                n = t && t[0];
              }
              ot === `application/xhtml+xml` &&
                Y === J &&
                (e =
                  `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>` +
                  e +
                  `</body></html>`);
              let i = F ? F.createHTML(e) : e;
              if (Y === J)
                try {
                  t = new de().parseFromString(i, ot);
                } catch {}
              if (!t || !t.documentElement) {
                t = xe.createDocument(Y, `template`, null);
                try {
                  t.documentElement.innerHTML = rt ? I : i;
                } catch {}
              }
              let a = t.body || t.documentElement;
              return (
                e &&
                  n &&
                  a.insertBefore(r.createTextNode(n), a.childNodes[0] || null),
                Y === J
                  ? we.call(t, U ? `html` : `body`)[0]
                  : U
                    ? t.documentElement
                    : a
              );
            },
            yt = function (e) {
              return Se.call(
                e.ownerDocument || e,
                e,
                w.SHOW_ELEMENT |
                  w.SHOW_COMMENT |
                  w.SHOW_TEXT |
                  w.SHOW_PROCESSING_INSTRUCTION |
                  w.SHOW_CDATA_SECTION,
                null,
              );
            },
            bt = function (e) {
              return (
                e instanceof ue &&
                ((e.__depth !== void 0 && typeof e.__depth != `number`) ||
                  (e.__removalCount !== void 0 &&
                    typeof e.__removalCount != `number`) ||
                  typeof e.nodeName != `string` ||
                  typeof e.textContent != `string` ||
                  typeof e.removeChild != `function` ||
                  !(e.attributes instanceof le) ||
                  typeof e.removeAttribute != `function` ||
                  typeof e.setAttribute != `function` ||
                  typeof e.namespaceURI != `string` ||
                  typeof e.insertBefore != `function` ||
                  typeof e.hasChildNodes != `function`)
              );
            },
            xt = function (e) {
              return typeof x == `function` && e instanceof x;
            },
            $ = function (e, t, r) {
              L[e] &&
                u(L[e], (e) => {
                  e.call(n, t, r, Z);
                });
            },
            St = function (e) {
              let t = null;
              if (($(`beforeSanitizeElements`, e, null), bt(e)))
                return (Q(e), !0);
              let r = X(e.nodeName);
              if (
                ($(`uponSanitizeElement`, e, { tagName: r, allowedTags: R }),
                (e.hasChildNodes() &&
                  !xt(e.firstElementChild) &&
                  v(/<[/\w]/g, e.innerHTML) &&
                  v(/<[/\w]/g, e.textContent)) ||
                  e.nodeType === N.progressingInstruction ||
                  (He && e.nodeType === N.comment && v(/<[/\w]/g, e.data)))
              )
                return (Q(e), !0);
              if (!R[r] || V[r]) {
                if (
                  !V[r] &&
                  wt(r) &&
                  ((B.tagNameCheck instanceof RegExp && v(B.tagNameCheck, r)) ||
                    (B.tagNameCheck instanceof Function && B.tagNameCheck(r)))
                )
                  return !1;
                if (Ye && !q[r]) {
                  let t = P(e) || e.parentNode,
                    n = ge(e) || e.childNodes;
                  if (n && t) {
                    let r = n.length;
                    for (let i = r - 1; i >= 0; --i) {
                      let r = pe(n[i], !0);
                      ((r.__removalCount = (e.__removalCount || 0) + 1),
                        t.insertBefore(r, me(e)));
                    }
                  }
                }
                return (Q(e), !0);
              }
              return (e instanceof S && !gt(e)) ||
                ((r === `noscript` || r === `noembed` || r === `noframes`) &&
                  v(/<\/no(script|embed|frames)/i, e.innerHTML))
                ? (Q(e), !0)
                : (H &&
                    e.nodeType === N.text &&
                    ((t = e.textContent),
                    u([Ee, De, Oe], (e) => {
                      t = h(t, e, ` `);
                    }),
                    e.textContent !== t &&
                      (f(n.removed, { element: e.cloneNode() }),
                      (e.textContent = t))),
                  $(`afterSanitizeElements`, e, null),
                  !1);
            },
            Ct = function (e, t, n) {
              if (
                qe &&
                (t === `id` || t === `name`) &&
                (n in r || n in ct || n === `__depth` || n === `__removalCount`)
              )
                return !1;
              if (!(ze && !Le[t] && v(ke, t)) && !(Re && v(Ae, t))) {
                if (!z[t] || Le[t]) {
                  if (!(
                    (wt(e) &&
                      ((B.tagNameCheck instanceof RegExp &&
                        v(B.tagNameCheck, e)) ||
                        (B.tagNameCheck instanceof Function &&
                          B.tagNameCheck(e))) &&
                      ((B.attributeNameCheck instanceof RegExp &&
                        v(B.attributeNameCheck, t)) ||
                        (B.attributeNameCheck instanceof Function &&
                          B.attributeNameCheck(t)))) ||
                    (t === `is` &&
                      B.allowCustomizedBuiltInElements &&
                      ((B.tagNameCheck instanceof RegExp &&
                        v(B.tagNameCheck, n)) ||
                        (B.tagNameCheck instanceof Function &&
                          B.tagNameCheck(n))))
                  ))
                    return !1;
                } else if (
                  !$e[t] &&
                  !v(Pe, h(n, Me, ``)) &&
                  !(
                    (t === `src` || t === `xlink:href` || t === `href`) &&
                    e !== `script` &&
                    g(n, `data:`) === 0 &&
                    Ze[e]
                  ) &&
                  !(Be && !v(je, h(n, Me, ``))) &&
                  n
                )
                  return !1;
              }
              return !0;
            },
            wt = function (e) {
              return e !== `annotation-xml` && ee(e, Ne);
            },
            Tt = function (e) {
              $(`beforeSanitizeAttributes`, e, null);
              let { attributes: t } = e;
              if (!t) return;
              let r = {
                  attrName: ``,
                  attrValue: ``,
                  keepAttr: !0,
                  allowedAttributes: z,
                },
                i = t.length;
              for (; i--;) {
                let { name: a, namespaceURI: o, value: s } = t[i],
                  c = X(a),
                  l = a === `value` ? s : te(s);
                if (
                  ((r.attrName = c),
                  (r.attrValue = l),
                  (r.keepAttr = !0),
                  (r.forceKeepAttr = void 0),
                  $(`uponSanitizeAttribute`, e, r),
                  (l = r.attrValue),
                  r.forceKeepAttr || (_t(a, e), !r.keepAttr))
                )
                  continue;
                if (!Ve && v(/\/>/i, l)) {
                  _t(a, e);
                  continue;
                }
                if (He && v(/((--!?|])>)|<\/(style|title)/i, l)) {
                  _t(a, e);
                  continue;
                }
                H &&
                  u([Ee, De, Oe], (e) => {
                    l = h(l, e, ` `);
                  });
                let f = X(e.nodeName);
                if (Ct(f, c, l)) {
                  if (
                    (Je &&
                      (c === `id` || c === `name`) &&
                      (_t(a, e), (l = `user-content-` + l)),
                    F &&
                      typeof j == `object` &&
                      typeof j.getAttributeType == `function` &&
                      !o)
                  )
                    switch (j.getAttributeType(f, c)) {
                      case `TrustedHTML`:
                        l = F.createHTML(l);
                        break;
                      case `TrustedScriptURL`:
                        l = F.createScriptURL(l);
                        break;
                    }
                  try {
                    (o ? e.setAttributeNS(o, a, l) : e.setAttribute(a, l),
                      bt(e) ? Q(e) : d(n.removed));
                  } catch {}
                }
              }
              $(`afterSanitizeAttributes`, e, null);
            },
            Et = function e(t) {
              let n = null,
                r = yt(t);
              for ($(`beforeSanitizeShadowDOM`, t, null); (n = r.nextNode());) {
                if (($(`uponSanitizeShadowNode`, n, null), St(n))) continue;
                let t = P(n);
                (n.nodeType === N.element &&
                  (t && t.__depth
                    ? (n.__depth = (n.__removalCount || 0) + t.__depth + 1)
                    : (n.__depth = 1)),
                  (n.__depth >= 255 || n.__depth < 0 || b(n.__depth)) && Q(n),
                  n.content instanceof c &&
                    ((n.content.__depth = n.__depth), e(n.content)),
                  Tt(n));
              }
              $(`afterSanitizeShadowDOM`, t, null);
            };
          return (
            (n.sanitize = function (e) {
              let t =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                r = null,
                a = null,
                o = null,
                s = null;
              if (
                ((rt = !e), rt && (e = `<!-->`), typeof e != `string` && !xt(e))
              )
                if (typeof e.toString == `function`) {
                  if (((e = e.toString()), typeof e != `string`))
                    throw y(`dirty is not a string, aborting`);
                } else throw y(`toString is not a function`);
              if (!n.isSupported) return e;
              if (
                (Ue || ut(t),
                (n.removed = []),
                typeof e == `string` && (G = !1),
                G)
              ) {
                if (e.nodeName) {
                  let t = X(e.nodeName);
                  if (!R[t] || V[t])
                    throw y(
                      `root node is forbidden and cannot be sanitized in-place`,
                    );
                }
              } else if (e instanceof x)
                ((r = vt(`<!---->`)),
                  (a = r.ownerDocument.importNode(e, !0)),
                  (a.nodeType === N.element && a.nodeName === `BODY`) ||
                  a.nodeName === `HTML`
                    ? (r = a)
                    : r.appendChild(a));
              else {
                if (!W && !H && !U && e.indexOf(`<`) === -1)
                  return F && Ke ? F.createHTML(e) : e;
                if (((r = vt(e)), !r)) return W ? null : Ke ? I : ``;
              }
              r && We && Q(r.firstChild);
              let l = yt(G ? e : r);
              for (; (o = l.nextNode());) {
                if (St(o)) continue;
                let e = P(o);
                (o.nodeType === N.element &&
                  (e && e.__depth
                    ? (o.__depth = (o.__removalCount || 0) + e.__depth + 1)
                    : (o.__depth = 1)),
                  (o.__depth >= 255 || o.__depth < 0 || b(o.__depth)) && Q(o),
                  o.content instanceof c &&
                    ((o.content.__depth = o.__depth), Et(o.content)),
                  Tt(o));
              }
              if (G) return e;
              if (W) {
                if (Ge)
                  for (s = Ce.call(r.ownerDocument); r.firstChild;)
                    s.appendChild(r.firstChild);
                else s = r;
                return (
                  (z.shadowroot || z.shadowrootmode) && (s = Te.call(i, s, !0)),
                  s
                );
              }
              let d = U ? r.outerHTML : r.innerHTML;
              return (
                U &&
                  R[`!doctype`] &&
                  r.ownerDocument &&
                  r.ownerDocument.doctype &&
                  r.ownerDocument.doctype.name &&
                  v(he, r.ownerDocument.doctype.name) &&
                  (d =
                    `<!DOCTYPE ` +
                    r.ownerDocument.doctype.name +
                    `>
` +
                    d),
                H &&
                  u([Ee, De, Oe], (e) => {
                    d = h(d, e, ` `);
                  }),
                F && Ke ? F.createHTML(d) : d
              );
            }),
            (n.setConfig = function () {
              let e =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {};
              (ut(e), (Ue = !0));
            }),
            (n.clearConfig = function () {
              ((Z = null), (Ue = !1));
            }),
            (n.isValidAttribute = function (e, t, n) {
              Z || ut({});
              let r = X(e),
                i = X(t);
              return Ct(r, i, n);
            }),
            (n.addHook = function (e, t) {
              typeof t == `function` && ((L[e] = L[e] || []), f(L[e], t));
            }),
            (n.removeHook = function (e) {
              if (L[e]) return d(L[e]);
            }),
            (n.removeHooks = function (e) {
              L[e] && (L[e] = []);
            }),
            (n.removeAllHooks = function () {
              L = {};
            }),
            n
          );
        }
        return be();
      });
    })(),
  ),
  ve = e(i()),
  ye = ({ message: e, onConfirm: t, onCancel: n }) =>
    (0, A.jsx)(`div`, {
      className: `confirm-box-overlay`,
      children: (0, A.jsxs)(`div`, {
        className: `confirm-box col-lg`,
        children: [
          (0, A.jsx)(`p`, {
            className: `h2 font-semibold text-[#0B51B6]`,
            children: e,
          }),
          (0, A.jsxs)(`div`, {
            className: `confirm-box-actions mt-4`,
            children: [
              (0, A.jsx)(`button`, {
                className: `btn bg-prime text-light`,
                onClick: t,
                children: `Confirm`,
              }),
              (0, A.jsx)(`button`, {
                className: `btn text-danger`,
                onClick: n,
                children: `Cancel`,
              }),
            ],
          }),
        ],
      }),
    });
ye.propTypes = {
  message: ve.default.string.isRequired,
  onConfirm: ve.default.func.isRequired,
  onCancel: ve.default.func.isRequired,
};
var be = () => {
  let { getApplicationsByJobId: e, getAllApplications: t } = a(),
    { title: n } = m(),
    r = te(),
    [i, s] = (0, k.useState)(!1),
    { data: l, isLoading: u } = _e({
      queryKey: [`allApplications`],
      queryFn: async () => (await t()).data,
    }),
    d = l?.find((e) => e.title === n),
    { data: f, isLoading: p } = _e({
      queryKey: [`jobDetails`, d?._id],
      queryFn: async () => (await e(d._id)).data,
      enabled: !!d?._id,
    });
  return u || (d && p)
    ? (0, A.jsx)(c, {})
    : f
      ? (0, A.jsxs)(`div`, {
          className: `bg-slate-50 min-h-screen py-10`,
          children: [
            (0, A.jsxs)(o, {
              children: [
                (0, A.jsxs)(`title`, {
                  children: [f?.title, ` | CareerTechGuru`],
                }),
                (0, A.jsx)(`meta`, {
                  name: `description`,
                  content:
                    f?.shortDescription ||
                    `View job details on CareerTechGuru.`,
                }),
                (0, A.jsx)(`meta`, {
                  property: `og:title`,
                  content: `${f?.title} at ${f?.companyName}`,
                }),
                (0, A.jsx)(`meta`, {
                  property: `og:description`,
                  content:
                    f?.shortDescription ||
                    `View job details on CareerTechGuru.`,
                }),
                (0, A.jsx)(`meta`, { property: `og:type`, content: `website` }),
                (0, A.jsx)(`meta`, {
                  property: `og:image`,
                  content:
                    f?.profilePicture ||
                    `https://career-tech-guru.vercel.app/logo.jpeg`,
                }),
                (0, A.jsx)(`meta`, {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                }),
              ],
            }),
            i &&
              (0, A.jsx)(ye, {
                message: `You will be redirected to ${f?.companyName} careers. Are you sure you want to continue?`,
                onConfirm: () => {
                  (window.open(f?.jobUrl, `_blank`, `noopener,noreferrer`),
                    s(!1));
                },
                onCancel: () => s(!1),
              }),
            (0, A.jsxs)(`div`, {
              className: `max-w-4xl mx-auto px-4`,
              children: [
                (0, A.jsx)(`button`, {
                  onClick: () => r(-1),
                  className: `mb-6 flex items-center gap-1.5 text-slate-500 hover:text-slate-800 font-semibold text-sm bg-transparent border-0 cursor-pointer transition-colors`,
                  children: `← Back to Listings`,
                }),
                (0, A.jsxs)(`div`, {
                  className: `bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6`,
                  children: [
                    (0, A.jsxs)(`div`, {
                      className: `flex flex-col sm:flex-row justify-between items-start gap-6 mb-6`,
                      children: [
                        (0, A.jsxs)(`div`, {
                          className: `flex gap-4 items-start`,
                          children: [
                            (0, A.jsx)(`div`, {
                              className: `w-16 h-16 bg-slate-50 rounded-xl border border-slate-100 p-1 flex items-center justify-center overflow-hidden flex-shrink-0`,
                              children: f?.profilePicture
                                ? (0, A.jsx)(`img`, {
                                    src: f.profilePicture,
                                    alt: `Company Logo`,
                                    className: `max-h-full max-w-full object-contain`,
                                  })
                                : (0, A.jsx)(`span`, {
                                    className: `text-xs text-slate-300 font-bold uppercase`,
                                    children: `CTG`,
                                  }),
                            }),
                            (0, A.jsxs)(`div`, {
                              className: `space-y-1`,
                              children: [
                                (0, A.jsx)(`h1`, {
                                  className: `text-2xl font-bold text-slate-900 leading-snug`,
                                  children: f?.title,
                                }),
                                (0, A.jsxs)(`p`, {
                                  className: `flex items-center gap-2 text-sm font-medium text-slate-500 mb-0`,
                                  children: [
                                    (0, A.jsx)(`span`, {
                                      children: f?.companyName,
                                    }),
                                    f?.companyWebsite &&
                                      (0, A.jsx)(`a`, {
                                        href: f.companyWebsite,
                                        className: `text-slate-400 hover:text-[#2563EB] transition-colors`,
                                        target: `_blank`,
                                        rel: `noopener noreferrer`,
                                        children: (0, A.jsx)(T, { size: 14 }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          className: `flex flex-wrap gap-2`,
                          children: [
                            (0, A.jsx)(`span`, {
                              className: `bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full`,
                              children: f?.jobType,
                            }),
                            (0, A.jsx)(`span`, {
                              className: `bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full`,
                              children: f?.workType,
                            }),
                            (0, A.jsxs)(`span`, {
                              className: `bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full`,
                              children: [f?.openings, ` Openings`],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, A.jsx)(`p`, { className: `hr bg-slate-100 my-6` }),
                    (0, A.jsxs)(`div`, {
                      className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8`,
                      children: [
                        (0, A.jsxs)(`div`, {
                          children: [
                            (0, A.jsx)(`span`, {
                              className: `text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1`,
                              children: `Experience`,
                            }),
                            (0, A.jsx)(`span`, {
                              className: `text-sm font-semibold text-slate-700 capitalize`,
                              children: f?.experience,
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          children: [
                            (0, A.jsx)(`span`, {
                              className: `text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1`,
                              children: `Location`,
                            }),
                            (0, A.jsx)(`span`, {
                              className: `text-sm font-semibold text-slate-700 capitalize`,
                              children: f?.jobLocation,
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          children: [
                            (0, A.jsx)(`span`, {
                              className: `text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1`,
                              children: `Salary Range`,
                            }),
                            (0, A.jsx)(`span`, {
                              className: `text-sm font-semibold text-slate-700`,
                              children: f?.salaryRange,
                            }),
                          ],
                        }),
                        (0, A.jsxs)(`div`, {
                          children: [
                            (0, A.jsx)(`span`, {
                              className: `text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1`,
                              children: `Min-Qualification`,
                            }),
                            (0, A.jsx)(`span`, {
                              className: `text-sm font-semibold text-slate-700 capitalize`,
                              children: f?.qualification,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, A.jsxs)(`div`, {
                      className: `flex justify-between items-center bg-slate-50 rounded-xl p-4 border border-slate-100`,
                      children: [
                        (0, A.jsxs)(`button`, {
                          className: `flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors`,
                          children: [
                            (0, A.jsx)(w, { size: 14 }),
                            (0, A.jsx)(`span`, { children: `Share Job` }),
                          ],
                        }),
                        (0, A.jsx)(`div`, {
                          children: f?.isReferenceJob
                            ? (0, A.jsx)(`button`, {
                                onClick: () => s(!0),
                                className: `px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm rounded-lg border-0 transition-colors shadow-sm`,
                                children: `Apply on Company Site`,
                              })
                            : (0, A.jsx)(`button`, {
                                className: `px-6 py-2.5 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm rounded-lg border-0 transition-colors shadow-sm`,
                                children: `Apply now`,
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, A.jsxs)(`div`, {
                  className: `space-y-6`,
                  children: [
                    f?.shortDescription &&
                      (0, A.jsxs)(`div`, {
                        className: `bg-white border border-slate-200 rounded-2xl shadow-sm p-8`,
                        children: [
                          (0, A.jsx)(`h3`, {
                            className: `text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100`,
                            children: `Job Highlights`,
                          }),
                          (0, A.jsx)(`p`, {
                            className: `text-sm text-slate-600 leading-relaxed whitespace-pre-line`,
                            children: f.shortDescription,
                          }),
                        ],
                      }),
                    (0, A.jsxs)(`div`, {
                      className: `bg-white border border-slate-200 rounded-2xl shadow-sm p-8`,
                      children: [
                        (0, A.jsx)(`h3`, {
                          className: `text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100`,
                          children: `Job Description`,
                        }),
                        (0, A.jsx)(`div`, {
                          className: `text-sm text-slate-600 leading-relaxed text-justify space-y-4`,
                          dangerouslySetInnerHTML: {
                            __html: N.default.sanitize(f?.description),
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : (0, A.jsx)(`div`, {
          className: `min-h-[70vh] flex flex-col justify-center items-center bg-slate-50`,
          children: (0, A.jsxs)(`div`, {
            className: `bg-white border border-slate-200 p-8 rounded-2xl text-center shadow-sm max-w-md`,
            children: [
              (0, A.jsx)(`h3`, {
                className: `text-xl font-bold text-slate-800 mb-2`,
                children: `Job Not Found`,
              }),
              (0, A.jsx)(`p`, {
                className: `text-slate-500 mb-6 text-sm`,
                children: `We couldn't retrieve the details for this job listing. It may have been closed or removed.`,
              }),
              (0, A.jsx)(`button`, {
                onClick: () => r(`/view-jobs`),
                className: `px-6 py-2 bg-[#2563EB] hover:bg-blue-700 text-white font-medium rounded-lg border-0 transition-colors shadow-sm`,
                children: `Back to Jobs`,
              }),
            ],
          }),
        });
};
export { be as default };
