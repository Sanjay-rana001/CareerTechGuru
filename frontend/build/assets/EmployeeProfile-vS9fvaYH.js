import { a as __toESM, i as __exportAll, n as require_react, r as __commonJSMin, t as require_jsx_runtime } from "./jsx-runtime-B5ErqjvK.js";
import { a as uploadBytes, i as ref, n as getDownloadURL } from "./index.esm-CYbMinJH.js";
import { i as storage, m as setDoc, n as db, t as auth, y as doc } from "./firebase-t_zXV7oF.js";
import { A as FaLinkedin, C as ModalBox, D as FaGithub, K as useSectionContext, T as FaBook, U as useEmployeeContext, b as CircularLoader, ot as GenIcon, ut as useNavigate } from "./index-bM5YXtog.js";
import { n as convertTimeIntoMMYYYY } from "./DateFilter-D2bJKq2G.js";
import { t as UpdateInput } from "./UpdateInput-nfae8MLa.js";
import { t as VscLinkExternal } from "./vsc-CJobk1CA.js";
//#region node_modules/multiselect-react-dropdown/dist/multiselect-react-dropdown.cjs.production.min.js
var require_multiselect_react_dropdown_cjs_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: !0 });
	var e, t = require_react(), i = (e = t) && "object" == typeof e && "default" in e ? e.default : e;
	function n(e, t) {
		return (n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
			return e.__proto__ = t, e;
		})(e, t);
	}
	function s(e) {
		if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return e;
	}
	(function(e, t) {
		void 0 === t && (t = {});
		var i = t.insertAt;
		if ("undefined" != typeof document) {
			var n = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
			s.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e));
		}
	})(".multiSelectContainer,.multiSelectContainer *,.multiSelectContainer :after,.multiSelectContainer :before{box-sizing:border-box}.multiSelectContainer{position:relative;text-align:left;width:100%}.disable_ms{opacity:.5;pointer-events:none}.display-none{display:none}.searchWrapper{border:1px solid #ccc;border-radius:4px;min-height:22px;padding:5px;position:relative}.multiSelectContainer input{background:transparent;border:none;margin-top:3px}.multiSelectContainer input:focus{outline:none}.chip{align-items:center;background:#0096fb;border-radius:11px;color:#fff;display:inline-flex;font-size:13px;line-height:19px;margin-bottom:5px;margin-right:5px;padding:4px 10px}.chip,.singleChip{white-space:nowrap}.singleChip{background:none;border-radius:none;color:inherit}.singleChip i{display:none}.closeIcon{cursor:pointer;float:right;height:13px;margin-left:5px;width:13px}.optionListContainer{background:#fff;border-radius:4px;margin-top:1px;position:absolute;width:100%;z-index:2}.multiSelectContainer ul{border:1px solid #ccc;border-radius:4px;display:block;margin:0;max-height:250px;overflow-y:auto;padding:0}.multiSelectContainer li{padding:10px}.multiSelectContainer li:hover{background:#0096fb;color:#fff;cursor:pointer}.checkbox{margin-right:10px}.disableSelection{opacity:.5;pointer-events:none}.highlightOption{background:#0096fb;color:#fff}.displayBlock{display:block}.displayNone{display:none}.notFound{display:block;padding:10px}.singleSelect{padding-right:20px}li.groupHeading{color:#908e8e;padding:5px 15px;pointer-events:none}li.groupChildEle{padding-left:30px}.icon_down_dir{position:absolute;right:10px;top:50%;transform:translateY(-50%);width:14px}.icon_down_dir:before{content:\"\\e803\"}.custom-close{display:flex}");
	var o = {
		circle: "data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M256%2C33C132.3%2C33%2C32%2C133.3%2C32%2C257c0%2C123.7%2C100.3%2C224%2C224%2C224c123.7%2C0%2C224-100.3%2C224-224C480%2C133.3%2C379.7%2C33%2C256%2C33z%20%20%20%20M364.3%2C332.5c1.5%2C1.5%2C2.3%2C3.5%2C2.3%2C5.6c0%2C2.1-0.8%2C4.2-2.3%2C5.6l-21.6%2C21.7c-1.6%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3L256%2C289.8%20%20%20l-75.4%2C75.7c-1.5%2C1.6-3.6%2C2.3-5.6%2C2.3c-2%2C0-4.1-0.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6c0-2.1%2C0.8-4.2%2C2.3-5.6l75.7-76%20%20%20l-75.9-75c-3.1-3.1-3.1-8.2%2C0-11.3l21.6-21.7c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l75.7%2C74.7l75.7-74.7%20%20%20c1.5-1.5%2C3.5-2.3%2C5.6-2.3c2.1%2C0%2C4.1%2C0.8%2C5.6%2C2.3l21.6%2C21.7c3.1%2C3.1%2C3.1%2C8.2%2C0%2C11.3l-75.9%2C75L364.3%2C332.5z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",
		circle2: "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2096%2096%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M48%2C0A48%2C48%2C0%2C1%2C0%2C96%2C48%2C48.0512%2C48.0512%2C0%2C0%2C0%2C48%2C0Zm0%2C84A36%2C36%2C0%2C1%2C1%2C84%2C48%2C36.0393%2C36.0393%2C0%2C0%2C1%2C48%2C84Z%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M64.2422%2C31.7578a5.9979%2C5.9979%2C0%2C0%2C0-8.4844%2C0L48%2C39.5156l-7.7578-7.7578a5.9994%2C5.9994%2C0%2C0%2C0-8.4844%2C8.4844L39.5156%2C48l-7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C1%2C0%2C8.4844%2C8.4844L48%2C56.4844l7.7578%2C7.7578a5.9994%2C5.9994%2C0%2C0%2C0%2C8.4844-8.4844L56.4844%2C48l7.7578-7.7578A5.9979%2C5.9979%2C0%2C0%2C0%2C64.2422%2C31.7578Z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",
		close: "data:image/svg+xml,%3Csvg%20height%3D%22135.467mm%22%20style%3D%22shape-rendering%3AgeometricPrecision%3B%20text-rendering%3AgeometricPrecision%3B%20image-rendering%3AoptimizeQuality%3B%20fill-rule%3Aevenodd%3B%20clip-rule%3Aevenodd%22%20viewBox%3D%220%200%2013547%2013547%22%20width%3D%22135.467mm%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20%20%20%20%20.fil0%20%7Bfill%3Anone%7D%20%20%20%20%20%20%20%20%20%20%20%20.fil1%20%7Bfill%3A%23fff%7D%20%20%20%20%20%20%20%20%3C%2Fstyle%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20id%3D%22Ebene_x0020_1%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20class%3D%22fil0%22%20points%3D%220%2C0%2013547%2C0%2013547%2C13547%200%2C13547%20%22%2F%3E%20%20%20%20%20%20%20%20%3Cpath%20class%3D%22fil1%22%20d%3D%22M714%2012832l12118%200%200%20-12117%20-12118%200%200%2012117zm4188%20-2990l1871%20-1871%201871%201871%201197%20-1197%20-1871%20-1871%201871%20-1871%20-1197%20-1197%20-1871%201871%20-1871%20-1871%20-1197%201197%201871%201871%20-1871%201871%201197%201197z%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",
		cancel: "data:image/svg+xml,%3Csvg%20height%3D%22512px%22%20id%3D%22Layer_1%22%20style%3D%22enable-background%3Anew%200%200%20512%20512%3B%22%20version%3D%221.1%22%20viewBox%3D%220%200%20512%20512%22%20width%3D%22512px%22%20xml%3Aspace%3D%22preserve%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20%20%20%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%20%20%20%20%3Cstyle%20type%3D%22text%2Fcss%22%3E%20%20%20%20%20%20%20%20.st0%7B%20%20%20%20%20%20%20%20%20%20%20%20fill%3A%23fff%3B%20%20%20%20%20%20%20%20%7D%20%3C%2Fstyle%3E%20%20%20%20%3Cpath%20class%3D%22st0%22%20d%3D%22M443.6%2C387.1L312.4%2C255.4l131.5-130c5.4-5.4%2C5.4-14.2%2C0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4%20%20L256%2C197.8L124.9%2C68.3c-2.6-2.6-6.1-4-9.8-4c-3.7%2C0-7.2%2C1.5-9.8%2C4L68%2C105.9c-5.4%2C5.4-5.4%2C14.2%2C0%2C19.6l131.5%2C130L68.4%2C387.1%20%20c-2.6%2C2.6-4.1%2C6.1-4.1%2C9.8c0%2C3.7%2C1.4%2C7.2%2C4.1%2C9.8l37.4%2C37.6c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1L256%2C313.1l130.7%2C131.1%20%20c2.7%2C2.7%2C6.2%2C4.1%2C9.8%2C4.1c3.5%2C0%2C7.1-1.3%2C9.8-4.1l37.4-37.6c2.6-2.6%2C4.1-6.1%2C4.1-9.8C447.7%2C393.2%2C446.2%2C389.7%2C443.6%2C387.1z%22%2F%3E%3C%2Fsvg%3E"
	};
	function l(e) {
		var n, s, o = t.useRef(null);
		return s = e.outsideClick, t.useEffect((function() {
			function e(e) {
				n.current && !n.current.contains(e.target) && s();
			}
			return document.addEventListener("mousedown", e), function() {
				document.removeEventListener("mousedown", e);
			};
		}), [n = o]), i.createElement("div", { ref: o }, e.children);
	}
	var r = function(e) {
		var t, r;
		function c(t) {
			var n;
			return (n = e.call(this, t) || this).state = {
				inputValue: "",
				options: t.options,
				filteredOptions: t.options,
				unfilteredOptions: t.options,
				selectedValues: Object.assign([], t.selectedValues),
				preSelectedValues: Object.assign([], t.selectedValues),
				toggleOptionsList: !1,
				highlightOption: t.avoidHighlightFirstOption ? -1 : 0,
				showCheckbox: t.showCheckbox,
				keepSearchTerm: t.keepSearchTerm,
				groupedObject: [],
				closeIconType: o[t.closeIcon] || o.circle
			}, n.optionTimeout = null, n.searchWrapper = i.createRef(), n.searchBox = i.createRef(), n.onChange = n.onChange.bind(s(n)), n.onKeyPress = n.onKeyPress.bind(s(n)), n.onFocus = n.onFocus.bind(s(n)), n.onBlur = n.onBlur.bind(s(n)), n.renderMultiselectContainer = n.renderMultiselectContainer.bind(s(n)), n.renderSelectedList = n.renderSelectedList.bind(s(n)), n.onRemoveSelectedItem = n.onRemoveSelectedItem.bind(s(n)), n.toggelOptionList = n.toggelOptionList.bind(s(n)), n.onArrowKeyNavigation = n.onArrowKeyNavigation.bind(s(n)), n.onSelectItem = n.onSelectItem.bind(s(n)), n.filterOptionsByInput = n.filterOptionsByInput.bind(s(n)), n.removeSelectedValuesFromOptions = n.removeSelectedValuesFromOptions.bind(s(n)), n.isSelectedValue = n.isSelectedValue.bind(s(n)), n.fadeOutSelection = n.fadeOutSelection.bind(s(n)), n.isDisablePreSelectedValues = n.isDisablePreSelectedValues.bind(s(n)), n.renderGroupByOptions = n.renderGroupByOptions.bind(s(n)), n.renderNormalOption = n.renderNormalOption.bind(s(n)), n.listenerCallback = n.listenerCallback.bind(s(n)), n.resetSelectedValues = n.resetSelectedValues.bind(s(n)), n.getSelectedItems = n.getSelectedItems.bind(s(n)), n.getSelectedItemsCount = n.getSelectedItemsCount.bind(s(n)), n.hideOnClickOutside = n.hideOnClickOutside.bind(s(n)), n.onCloseOptionList = n.onCloseOptionList.bind(s(n)), n.isVisible = n.isVisible.bind(s(n)), n;
		}
		r = e, (t = c).prototype = Object.create(r.prototype), t.prototype.constructor = t, n(t, r);
		var a = c.prototype;
		return a.initialSetValue = function() {
			var e = this.props, t = e.groupBy, i = this.state.options;
			e.showCheckbox || e.singleSelect || this.removeSelectedValuesFromOptions(!1), t && this.groupByOptions(i);
		}, a.resetSelectedValues = function() {
			var e = this, t = this.state.unfilteredOptions;
			return new Promise((function(i) {
				e.setState({
					selectedValues: [],
					preSelectedValues: [],
					options: t,
					filteredOptions: t
				}, (function() {
					i(), e.initialSetValue();
				}));
			}));
		}, a.getSelectedItems = function() {
			return this.state.selectedValues;
		}, a.getSelectedItemsCount = function() {
			return this.state.selectedValues.length;
		}, a.componentDidMount = function() {
			this.initialSetValue(), this.searchWrapper.current.addEventListener("click", this.listenerCallback);
		}, a.componentDidUpdate = function(e) {
			var t = this.props, i = t.options, n = t.selectedValues, s = e.selectedValues;
			JSON.stringify(e.options) !== JSON.stringify(i) && this.setState({
				options: i,
				filteredOptions: i,
				unfilteredOptions: i
			}, this.initialSetValue), JSON.stringify(s) !== JSON.stringify(n) && this.setState({
				selectedValues: Object.assign([], n),
				preSelectedValues: Object.assign([], n)
			}, this.initialSetValue);
		}, a.listenerCallback = function() {
			this.searchBox.current.focus();
		}, a.componentWillUnmount = function() {
			this.optionTimeout && clearTimeout(this.optionTimeout), this.searchWrapper.current.removeEventListener("click", this.listenerCallback);
		}, a.removeSelectedValuesFromOptions = function(e) {
			var t = this.props, i = t.isObject, n = t.displayValue, s = t.groupBy, o = this.state, l = o.selectedValues, r = void 0 === l ? [] : l, c = o.unfilteredOptions;
			if (!e && s && this.groupByOptions(o.options), r.length || e) {
				if (i) {
					var a = c.filter((function(e) {
						return -1 === r.findIndex((function(t) {
							return t[n] === e[n];
						}));
					}));
					s && this.groupByOptions(a), this.setState({
						options: a,
						filteredOptions: a
					}, this.filterOptionsByInput);
					return;
				}
				var p = c.filter((function(e) {
					return -1 === r.indexOf(e);
				}));
				this.setState({
					options: p,
					filteredOptions: p
				}, this.filterOptionsByInput);
			}
		}, a.groupByOptions = function(e) {
			var t = this.props.groupBy, i = e.reduce((function(e, i) {
				var n = i[t] || "Others";
				return e[n] = e[n] || [], e[n].push(i), e;
			}), Object.create({}));
			this.setState({ groupedObject: i });
		}, a.onChange = function(e) {
			var t = this.props.onSearch;
			this.setState({ inputValue: e.target.value }, this.filterOptionsByInput), t && t(e.target.value);
		}, a.onKeyPress = function(e) {
			var t = this.props.onKeyPressFn;
			t && t(e, e.target.value);
		}, a.filterOptionsByInput = function() {
			var e, t = this, i = this.state, n = i.inputValue, s = this.props, o = s.displayValue;
			e = i.filteredOptions.filter(s.isObject ? function(e) {
				return t.matchValues(e[o], n);
			} : function(e) {
				return t.matchValues(e, n);
			}), this.groupByOptions(e), this.setState({ options: e });
		}, a.matchValues = function(e, t) {
			return this.props.caseSensitiveSearch ? e.indexOf(t) > -1 : e.toLowerCase ? e.toLowerCase().indexOf(t.toLowerCase()) > -1 : e.toString().indexOf(t) > -1;
		}, a.onArrowKeyNavigation = function(e) {
			var t = this.state, i = t.options, n = t.highlightOption, s = t.toggleOptionsList, o = t.selectedValues;
			if (8 !== e.keyCode || t.inputValue || this.props.disablePreSelectedValues || !o.length || this.onRemoveSelectedItem(o.length - 1), i.length) {
				if (38 === e.keyCode) this.setState(n > 0 ? function(e) {
					return { highlightOption: e.highlightOption - 1 };
				} : { highlightOption: i.length - 1 });
				else if (40 === e.keyCode) this.setState(n < i.length - 1 ? function(e) {
					return { highlightOption: e.highlightOption + 1 };
				} : { highlightOption: 0 });
				else if ("Enter" === e.key && i.length && s) {
					if (-1 === n) return;
					this.onSelectItem(i[n]);
				}
			}
		}, a.onRemoveSelectedItem = function(e) {
			var t, i = this, n = this.state.selectedValues, s = this.props, o = s.onRemove, l = s.showCheckbox, r = s.displayValue;
			t = s.isObject ? n.findIndex((function(t) {
				return t[r] === e[r];
			})) : n.indexOf(e), n.splice(t, 1), o(n, e), this.setState({ selectedValues: n }, (function() {
				l || i.removeSelectedValuesFromOptions(!0);
			})), this.props.closeOnSelect || this.searchBox.current.focus();
		}, a.onSelectItem = function(e) {
			var t = this, i = this.state.selectedValues, n = this.props, s = n.selectionLimit, o = n.onSelect, l = n.singleSelect, r = n.showCheckbox;
			if (this.state.keepSearchTerm || this.setState({ inputValue: "" }), l) return this.onSingleSelect(e), void o([e], e);
			this.isSelectedValue(e) ? this.onRemoveSelectedItem(e) : s != i.length && (i.push(e), o(i, e), this.setState({ selectedValues: i }, (function() {
				r ? t.filterOptionsByInput() : t.removeSelectedValuesFromOptions(!0);
			})), this.props.closeOnSelect || this.searchBox.current.focus());
		}, a.onSingleSelect = function(e) {
			this.setState({
				selectedValues: [e],
				toggleOptionsList: !1
			});
		}, a.isSelectedValue = function(e) {
			var t = this.props, i = t.displayValue, n = this.state.selectedValues;
			return t.isObject ? n.filter((function(t) {
				return t[i] === e[i];
			})).length > 0 : n.filter((function(t) {
				return t === e;
			})).length > 0;
		}, a.renderOptionList = function() {
			var e = this.props, t = e.groupBy, n = e.style, s = e.emptyRecordMsg, o = e.loadingMessage, l = void 0 === o ? "loading..." : o, r = this.state.options;
			return e.loading ? i.createElement("ul", {
				className: "optionContainer",
				style: n.optionContainer
			}, "string" == typeof l && i.createElement("span", {
				style: n.loadingMessage,
				className: "notFound"
			}, l), "string" != typeof l && l) : i.createElement("ul", {
				className: "optionContainer",
				style: n.optionContainer
			}, 0 === r.length && i.createElement("span", {
				style: n.notFound,
				className: "notFound"
			}, s), t ? this.renderGroupByOptions() : this.renderNormalOption());
		}, a.renderGroupByOptions = function() {
			var e = this, t = this.props, n = t.isObject, s = void 0 !== n && n, o = t.displayValue, l = t.showCheckbox, r = t.style, c = t.singleSelect, a = this.state.groupedObject;
			return Object.keys(a).map((function(t) {
				return i.createElement(i.Fragment, { key: t }, i.createElement("li", {
					className: "groupHeading",
					style: r.groupHeading
				}, t), a[t].map((function(t, n) {
					var a = e.isSelectedValue(t);
					return i.createElement("li", {
						key: "option" + n,
						style: r.option,
						className: "groupChildEle option " + (a ? "selected" : "") + " " + (e.fadeOutSelection(t) ? "disableSelection" : "") + " " + (e.isDisablePreSelectedValues(t) ? "disableSelection" : ""),
						onClick: function() {
							return e.onSelectItem(t);
						}
					}, l && !c && i.createElement("input", {
						type: "checkbox",
						className: "checkbox",
						readOnly: !0,
						checked: a
					}), e.props.optionValueDecorator(s ? t[o] : (t || "").toString(), t));
				})));
			}));
		}, a.renderNormalOption = function() {
			var e = this, t = this.props, n = t.isObject, s = void 0 !== n && n, o = t.displayValue, l = t.showCheckbox, r = t.style, c = t.singleSelect, a = this.state.highlightOption;
			return this.state.options.map((function(t, n) {
				var p = e.isSelectedValue(t);
				return i.createElement("li", {
					key: "option" + n,
					style: r.option,
					className: "option " + (p ? "selected" : "") + " " + (a === n ? "highlightOption highlight" : "") + " " + (e.fadeOutSelection(t) ? "disableSelection" : "") + " " + (e.isDisablePreSelectedValues(t) ? "disableSelection" : ""),
					onClick: function() {
						return e.onSelectItem(t);
					}
				}, l && !c && i.createElement("input", {
					type: "checkbox",
					readOnly: !0,
					className: "checkbox",
					checked: p
				}), e.props.optionValueDecorator(s ? t[o] : (t || "").toString(), t));
			}));
		}, a.renderSelectedList = function() {
			var e = this, t = this.props, n = t.isObject, s = void 0 !== n && n, o = t.displayValue, l = t.style, r = t.singleSelect, c = t.customCloseIcon, a = this.state, p = a.closeIconType;
			return a.selectedValues.map((function(t, n) {
				return i.createElement("span", {
					className: "chip  " + (r && "singleChip") + " " + (e.isDisablePreSelectedValues(t) && "disableSelection"),
					key: n,
					style: l.chips
				}, e.props.selectedValueDecorator(s ? t[o] : (t || "").toString(), t), !e.isDisablePreSelectedValues(t) && (c ? i.createElement("i", {
					className: "custom-close",
					onClick: function() {
						return e.onRemoveSelectedItem(t);
					}
				}, c) : i.createElement("img", {
					className: "icon_cancel closeIcon",
					src: p,
					onClick: function() {
						return e.onRemoveSelectedItem(t);
					}
				})));
			}));
		}, a.isDisablePreSelectedValues = function(e) {
			var t = this.props, i = t.displayValue, n = this.state.preSelectedValues;
			return !(!t.disablePreSelectedValues || !n.length) && (t.isObject ? n.filter((function(t) {
				return t[i] === e[i];
			})).length > 0 : n.filter((function(t) {
				return t === e;
			})).length > 0);
		}, a.fadeOutSelection = function(e) {
			var t = this.props, i = t.selectionLimit;
			if (!t.singleSelect) {
				var n = this.state.selectedValues;
				return -1 != i && i == n.length && (i == n.length ? !t.showCheckbox || !this.isSelectedValue(e) : void 0);
			}
		}, a.toggelOptionList = function() {
			this.setState({
				toggleOptionsList: !this.state.toggleOptionsList,
				highlightOption: this.props.avoidHighlightFirstOption ? -1 : 0
			});
		}, a.onCloseOptionList = function() {
			this.setState({
				toggleOptionsList: !1,
				highlightOption: this.props.avoidHighlightFirstOption ? -1 : 0,
				inputValue: ""
			});
		}, a.onFocus = function() {
			this.state.toggleOptionsList ? clearTimeout(this.optionTimeout) : this.toggelOptionList();
		}, a.onBlur = function() {
			this.setState({ inputValue: "" }, this.filterOptionsByInput), this.optionTimeout = setTimeout(this.onCloseOptionList, 250);
		}, a.isVisible = function(e) {
			return !!e && !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
		}, a.hideOnClickOutside = function() {
			var e = this, t = document.getElementsByClassName("multiselect-container")[0];
			document.addEventListener("click", (function(i) {
				t && !t.contains(i.target) && e.isVisible(t) && e.toggelOptionList();
			}));
		}, a.renderMultiselectContainer = function() {
			var e = this.state, t = e.inputValue, n = e.toggleOptionsList, s = e.selectedValues, o = this.props, l = o.placeholder, r = o.style, c = o.singleSelect, a = o.id, p = o.name, u = o.hidePlaceholder, d = o.disable, h = o.showArrow, C = o.customArrow;
			return i.createElement("div", {
				className: "multiselect-container multiSelectContainer " + (d ? "disable_ms" : "") + " " + (o.className || ""),
				id: a || "multiselectContainerReact",
				style: r.multiselectContainer
			}, i.createElement("div", {
				className: "search-wrapper searchWrapper " + (c ? "singleSelect" : ""),
				ref: this.searchWrapper,
				style: r.searchBox,
				onClick: c ? this.toggelOptionList : function() {}
			}, !o.hideSelectedList && this.renderSelectedList(), i.createElement("input", {
				type: "text",
				ref: this.searchBox,
				className: "searchBox " + (c && s.length ? "display-none" : ""),
				id: (a || "search") + "_input",
				name: (p || "search_name") + "_input",
				onChange: this.onChange,
				onKeyPress: this.onKeyPress,
				value: t,
				onFocus: this.onFocus,
				onBlur: this.onBlur,
				placeholder: c && s.length || u && s.length ? "" : l,
				onKeyDown: this.onArrowKeyNavigation,
				style: r.inputField,
				autoComplete: "off",
				disabled: c || d
			}), (c || h) && i.createElement(i.Fragment, null, C ? i.createElement("span", { className: "icon_down_dir" }, C) : i.createElement("img", {
				src: "data:image/svg+xml,%3Csvg%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20width%3D%2232%22%20%20%20%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%20%20%20%20%3Cg%20id%3D%22background%22%3E%20%20%20%20%20%20%20%20%3Crect%20fill%3D%22none%22%20height%3D%2232%22%20width%3D%2232%22%2F%3E%20%20%20%20%3C%2Fg%3E%20%20%20%20%3Cg%20id%3D%22arrow_x5F_down%22%3E%20%20%20%20%20%20%20%20%3Cpolygon%20points%3D%222.002%2C10%2016.001%2C24%2030.002%2C10%20%20%22%2F%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E",
				className: "icon_cancel icon_down_dir"
			}))), i.createElement("div", {
				className: "optionListContainer " + (n ? "displayBlock" : "displayNone"),
				onMouseDown: function(e) {
					e.preventDefault();
				}
			}, this.renderOptionList()));
		}, a.render = function() {
			return i.createElement(l, { outsideClick: this.onCloseOptionList }, this.renderMultiselectContainer());
		}, c;
	}(i.Component);
	r.defaultProps = {
		options: [],
		disablePreSelectedValues: !1,
		selectedValues: [],
		isObject: !0,
		displayValue: "model",
		showCheckbox: !1,
		selectionLimit: -1,
		placeholder: "Select",
		groupBy: "",
		style: {},
		emptyRecordMsg: "No Options Available",
		onSelect: function() {},
		onRemove: function() {},
		onKeyPressFn: function() {},
		closeIcon: "circle2",
		singleSelect: !1,
		caseSensitiveSearch: !1,
		id: "",
		name: "",
		closeOnSelect: !0,
		avoidHighlightFirstOption: !1,
		hidePlaceholder: !1,
		showArrow: !1,
		keepSearchTerm: !1,
		customCloseIcon: "",
		className: "",
		customArrow: void 0,
		selectedValueDecorator: function(e) {
			return e;
		},
		optionValueDecorator: function(e) {
			return e;
		}
	}, exports.Multiselect = r, exports.default = r;
}));
//#endregion
//#region node_modules/multiselect-react-dropdown/dist/index.js
var require_dist = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_multiselect_react_dropdown_cjs_production_min();
}));
//#endregion
//#region node_modules/react-icons/fa6/index.mjs
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_dist = /* @__PURE__ */ __toESM(require_dist());
function FaXTwitter(props) {
	return GenIcon({
		"tag": "svg",
		"attr": { "viewBox": "0 0 512 512" },
		"child": [{
			"tag": "path",
			"attr": { "d": "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" },
			"child": []
		}]
	})(props);
}
//#endregion
//#region src/testData/StaticData.jsx
var import_jsx_runtime = require_jsx_runtime();
var jobType = [
	{
		id: 1,
		title: "Work from home"
	},
	{
		id: 2,
		title: "Work from office"
	},
	{
		id: 3,
		title: "Hybrid"
	}
];
var locations = [
	{ title: "Delhi/NCR" },
	{ title: "Noida" },
	{ title: "Faridabad" },
	{ title: "Gurgaon" },
	{ title: "Pune" },
	{ title: "Banglore" }
];
//#endregion
//#region src/shared/employee/components/EmployeeProfileForm.jsx
var EmployeeProfileForm = () => {
	const { createUserProfile, updateEmployeeDetails } = useEmployeeContext();
	const { getAllSections } = useSectionContext();
	const [sectionData, setSectionData] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const userData = JSON.parse(sessionStorage.getItem("data"));
	const [values, setValues] = (0, import_react.useState)({
		firstName: userData?.firstName || "",
		lastName: userData?.lastName || "",
		email: userData?.email || "",
		mobile: userData?.mobile || "",
		gender: "",
		dateOfBirth: "",
		bio: "",
		experienceInYear: 0,
		alternateNumber: "",
		resumeUrl: "",
		address: {
			street: "",
			city: "",
			state: "",
			zip: "",
			country: "",
			isPermanent: false
		},
		links: {
			website: "",
			linkedin: "",
			github: "",
			twitter: "",
			portfolio: ""
		},
		experiences: [{
			title: "",
			company: "",
			startDate: "",
			endDate: null,
			description: "",
			isActive: false
		}],
		education: [{
			title: "",
			university: "",
			startDate: "",
			endDate: null,
			marks: "",
			isActive: false
		}],
		interests: {
			category: [],
			location: [],
			jobType: []
		}
	});
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const [successMessage, setSuccessMessage] = (0, import_react.useState)("");
	const [file, setFile] = (0, import_react.useState)(null);
	const fileInput = (0, import_react.useRef)(null);
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		const [section, key] = name.split(".");
		if (key) setValues((prevValues) => ({
			...prevValues,
			[section]: {
				...prevValues[section],
				[key]: type === "checkbox" ? checked : value
			}
		}));
		else setValues((prevValues) => ({
			...prevValues,
			[name]: type === "checkbox" ? checked : value
		}));
	};
	const handleExperienceChange = (index, e) => {
		const { name, value, type, checked } = e.target;
		const newExperiences = values.experiences.map((experience, i) => {
			if (i === index) return {
				...experience,
				[name]: type === "checkbox" ? checked : value
			};
			return experience;
		});
		setValues((prevValues) => ({
			...prevValues,
			experiences: newExperiences
		}));
	};
	const handleEducationChange = (index, e) => {
		const { name, value, type, checked } = e.target;
		const newEducation = values.education.map((education, i) => {
			if (i === index) return {
				...education,
				[name]: type === "checkbox" ? checked : value
			};
			return education;
		});
		setValues((prevValues) => ({
			...prevValues,
			education: newEducation
		}));
	};
	const addExperience = () => {
		setValues((prevValues) => ({
			...prevValues,
			experiences: [...prevValues.experiences, {
				title: "",
				company: "",
				startDate: "",
				endDate: "",
				description: "",
				isActive: false
			}]
		}));
	};
	const addEducation = () => {
		setValues((prevValues) => ({
			...prevValues,
			education: [...prevValues.education, {
				title: "",
				university: "",
				startDate: "",
				endDate: "",
				marks: "",
				isActive: false
			}]
		}));
	};
	const getAllJobCategories = async () => {
		setLoading(true);
		try {
			const data = await getAllSections();
			if (data && data?.data.length > 0) setSectionData(data?.data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		getAllJobCategories();
	}, []);
	const handleSelect = (selectedList, selectedItem, type) => {
		if (type === "category" && selectedList.length > 5) return;
		setValues((prevValues) => ({
			...prevValues,
			interests: {
				...prevValues.interests,
				[type]: selectedList.map((item) => item.title)
			}
		}));
	};
	const handleRemove = (selectedList, removedItem, type) => {
		setValues((prevValues) => ({
			...prevValues,
			interests: {
				...prevValues.interests,
				[type]: selectedList.map((item) => item.title)
			}
		}));
	};
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMessage("");
		setSuccessMessage("");
		try {
			if (!file) {
				if (await createUserProfile(values)) {
					setSuccessMessage("Profile uploaded successfully.");
					navigate("/");
				}
			} else {
				const result = await createUserProfile(values);
				if (result) {
					console.log("User profile created successfully", result);
					const downloadURL = await getDownloadURL((await uploadBytes(ref(storage, `resumes/${values.email}/${file.name}`), file)).ref);
					await updateEmployeeDetails(values.email, { resumeUrl: downloadURL });
					console.log("Profile updated with resume URL", downloadURL);
					setSuccessMessage("Profile and resume uploaded successfully.");
					navigate("/");
				}
			}
		} catch (error) {
			console.error("Error uploading profile/resume:", error);
			setErrorMessage("Error in setting up the request: " + error.message);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-slate-50 min-h-screen py-10 font-sans",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-6 mb-6 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold text-slate-800",
					children: "Complete your profile"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4",
								children: "Personal Information"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "First Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											className: "w-full px-4 py-2.5 bg-slate-100 border border-slate-300 rounded-lg text-sm text-slate-600 cursor-not-allowed",
											value: values.firstName,
											disabled: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "Last Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											className: "w-full px-4 py-2.5 bg-slate-100 border border-slate-300 rounded-lg text-sm text-slate-600 cursor-not-allowed",
											value: values.lastName,
											disabled: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "email",
											className: "w-full px-4 py-2.5 bg-slate-100 border border-slate-300 rounded-lg text-sm text-slate-600 cursor-not-allowed",
											value: values.email,
											disabled: true
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "Mobile Number"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											className: "w-full px-4 py-2.5 bg-slate-100 border border-slate-300 rounded-lg text-sm text-slate-600 cursor-not-allowed",
											value: values.mobile,
											disabled: true
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
									children: "Bio"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors",
									rows: 3,
									name: "bio",
									value: values.bio,
									onChange: handleChange,
									placeholder: "Tell us about yourself..."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "Gender"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors cursor-pointer",
										name: "gender",
										value: values.gender,
										onChange: handleChange,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Choose options"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "male",
												children: "Male"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "female",
												children: "Female"
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "Date of Birth"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "date",
										name: "dateOfBirth",
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors",
										value: values.dateOfBirth,
										onChange: handleChange
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "Alternate Number"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										name: "alternateNumber",
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors",
										value: values.alternateNumber,
										onChange: handleChange,
										placeholder: "Alternate contact number"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "Total Experience (in years)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "number",
										name: "experienceInYear",
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors",
										value: values.experienceInYear,
										onChange: handleChange,
										placeholder: "Total experience"
									})]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4",
								children: "Address Information"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "Street"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "address.street",
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors",
										value: values.address.street,
										onChange: handleChange,
										placeholder: "Street details"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "City"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "address.city",
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors",
										value: values.address.city,
										onChange: handleChange,
										placeholder: "City"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-3 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "State"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "address.state",
											className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors",
											value: values.address.state,
											onChange: handleChange,
											placeholder: "State"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "ZIP Code"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "address.zip",
											className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors",
											value: values.address.zip,
											onChange: handleChange,
											placeholder: "ZIP code"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "Country"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "address.country",
											className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors",
											value: values.address.country,
											onChange: handleChange,
											placeholder: "Country"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "address.isPermanent",
									checked: values.address.isPermanent,
									onChange: handleChange,
									id: "isPermanentAddress",
									className: "rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-slate-500 cursor-pointer select-none",
									htmlFor: "isPermanentAddress",
									children: "Is Permanent Address"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-2",
								children: "Education Information"
							}),
							values.education.map((edu, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-4 relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "Degree"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "title",
											className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
											value: edu.title,
											onChange: (e) => handleEducationChange(index, e),
											placeholder: "e.g. B.Tech / B.Sc / MBA"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "University Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "university",
											className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
											value: edu.university,
											onChange: (e) => handleEducationChange(index, e),
											placeholder: "University or Board Name"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 md:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
												children: "Start Date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												name: "startDate",
												className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
												value: edu.startDate,
												onChange: (e) => handleEducationChange(index, e)
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
												children: "End Date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												name: "endDate",
												className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
												value: edu.endDate,
												onChange: (e) => handleEducationChange(index, e)
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "Marks (GPA / Percentage)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "marks",
											className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
											value: edu.marks,
											onChange: (e) => handleEducationChange(index, e),
											placeholder: "Marks scored"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											name: "isActive",
											checked: edu.isActive,
											onChange: (e) => handleEducationChange(index, e),
											id: `edu-active-${index}`,
											className: "rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-medium text-slate-500 cursor-pointer select-none",
											htmlFor: `edu-active-${index}`,
											children: "Currently pursuing"
										})]
									})
								]
							}, index)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: addEducation,
									className: "px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg border-0 transition-colors cursor-pointer",
									children: "Add new education"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-2",
								children: "Experience Information"
							}),
							values.experiences.map((exp, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-4 relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "Job Title"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "title",
											className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
											value: exp.title,
											onChange: (e) => handleExperienceChange(index, e),
											placeholder: "e.g. Software Engineer / Consultant"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "Company Name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "company",
											className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
											value: exp.company,
											onChange: (e) => handleExperienceChange(index, e),
											placeholder: "Company Name"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-1 md:grid-cols-2 gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
												children: "Start Date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												name: "startDate",
												className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
												value: exp.startDate,
												onChange: (e) => handleExperienceChange(index, e)
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
												children: "End Date"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "date",
												name: "endDate",
												className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
												value: exp.endDate,
												onChange: (e) => handleExperienceChange(index, e)
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
											children: "Description"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											name: "description",
											className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
											value: exp.description,
											onChange: (e) => handleExperienceChange(index, e),
											placeholder: "Briefly describe your responsibilities..."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 pt-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											name: "isActive",
											checked: exp.isActive,
											onChange: (e) => handleExperienceChange(index, e),
											id: `exp-active-${index}`,
											className: "rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-medium text-slate-500 cursor-pointer select-none",
											htmlFor: `exp-active-${index}`,
											children: "Currently working here"
										})]
									})
								]
							}, index)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: addExperience,
									className: "px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-lg border-0 transition-colors cursor-pointer",
									children: "Add new experience"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-4",
							children: "Social Links"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "Website"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "links.website",
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
										value: values.links.website,
										onChange: handleChange,
										placeholder: "https://example.com"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "LinkedIn Profile URL"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "links.linkedin",
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
										value: values.links.linkedin,
										onChange: handleChange,
										placeholder: "LinkedIn link"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "Github"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "links.github",
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
										value: values.links.github,
										onChange: handleChange,
										placeholder: "Github profile URL"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "Twitter"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "links.twitter",
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
										value: values.links.twitter,
										onChange: handleChange,
										placeholder: "Twitter profile URL"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1.5 md:col-span-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
										children: "Portfolio"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										name: "links.portfolio",
										className: "w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-[#2563EB]",
										value: values.links.portfolio,
										onChange: handleChange,
										placeholder: "Portfolio website link"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-slate-900 pb-2 border-b border-slate-100 mb-2",
								children: "Preferences & Resume"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
									children: "Preferred Category"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dist.Multiselect, {
									options: sectionData,
									selectedValues: sectionData.filter((item) => values.interests.category.includes(item.title)),
									onSelect: (selectedList, selectedItem) => handleSelect(selectedList, selectedItem, "category"),
									onRemove: (selectedList, removedItem) => handleRemove(selectedList, removedItem, "category"),
									displayValue: "title",
									loading,
									disablePreSelectedValues: true,
									style: {
										chips: {
											background: "#2563EB",
											fontSize: "12px"
										},
										searchBox: {
											border: "1px solid #CBD5E1",
											borderRadius: "8px",
											padding: "6px 12px"
										}
									}
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
									children: "Preferred Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dist.Multiselect, {
									options: locations,
									selectedValues: locations.filter((item) => values.interests.location.includes(item.title)),
									onSelect: (selectedList, selectedItem) => handleSelect(selectedList, selectedItem, "location"),
									onRemove: (selectedList, removedItem) => handleRemove(selectedList, removedItem, "location"),
									displayValue: "title",
									loading,
									style: {
										chips: {
											background: "#2563EB",
											fontSize: "12px"
										},
										searchBox: {
											border: "1px solid #CBD5E1",
											borderRadius: "8px",
											padding: "6px 12px"
										}
									}
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold text-slate-500 uppercase tracking-wider",
									children: "Preferred Job Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dist.Multiselect, {
									options: jobType,
									selectedValues: jobType.filter((item) => values.interests.jobType.includes(item.title)),
									onSelect: (selectedList, selectedItem) => handleSelect(selectedList, selectedItem, "jobType"),
									onRemove: (selectedList, removedItem) => handleRemove(selectedList, removedItem, "jobType"),
									displayValue: "title",
									loading,
									style: {
										chips: {
											background: "#2563EB",
											fontSize: "12px"
										},
										searchBox: {
											border: "1px solid #CBD5E1",
											borderRadius: "8px",
											padding: "6px 12px"
										}
									}
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "hr bg-slate-100 my-6" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-slate-700 block uppercase tracking-wider",
										children: "Upload Resume"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "file",
										name: "file",
										className: "w-full bg-white border border-slate-300 rounded-lg text-xs p-2.5 focus:outline-none",
										ref: fileInput,
										onChange: handleFileChange
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-slate-400 block",
										children: "Supported formats: .doc, .docx, .pdf"
									}),
									errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-red-50 text-red-600 text-xs font-medium p-3 rounded-lg border border-red-100",
										children: errorMessage
									}),
									successMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-emerald-50 text-emerald-600 text-xs font-medium p-3 rounded-lg border border-emerald-100",
										children: successMessage
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center pt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "px-8 py-3 bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm rounded-lg border-0 transition-colors shadow-sm cursor-pointer",
							children: "Submit Profile Details"
						})
					})
				]
			})]
		})
	});
};
//#endregion
//#region node_modules/react-icons/tb/index.mjs
function TbWorldWww(props) {
	return GenIcon({
		"tag": "svg",
		"attr": {
			"viewBox": "0 0 24 24",
			"fill": "none",
			"stroke": "currentColor",
			"strokeWidth": "2",
			"strokeLinecap": "round",
			"strokeLinejoin": "round"
		},
		"child": [
			{
				"tag": "path",
				"attr": { "d": "M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M11.5 3a16.989 16.989 0 0 0 -1.826 4" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M12.5 3a16.989 16.989 0 0 1 1.828 4" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M11.5 21a16.989 16.989 0 0 1 -1.826 -4" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M12.5 21a16.989 16.989 0 0 0 1.828 -4" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M2 10l1 4l1.5 -4l1.5 4l1 -4" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M17 10l1 4l1.5 -4l1.5 4l1 -4" },
				"child": []
			},
			{
				"tag": "path",
				"attr": { "d": "M9.5 10l1 4l1.5 -4l1.5 4l1 -4" },
				"child": []
			}
		]
	})(props);
}
//#endregion
//#region src/shared/employee/components/ProfilePage.jsx
var ProfilePage = ({ data }) => {
	const [openModal, setOpenModal] = (0, import_react.useState)(false);
	const [currentField, setCurrentField] = (0, import_react.useState)("");
	const [currentValue, setCurrentValue] = (0, import_react.useState)("");
	const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
	const [successMessage, setSuccessMessage] = (0, import_react.useState)("");
	const [file, setFile] = (0, import_react.useState)(null);
	const fileInput = (0, import_react.useRef)(null);
	const profilePicInput = (0, import_react.useRef)(null);
	const [uploadingPic, setUploadingPic] = (0, import_react.useState)(false);
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMessage("");
		setSuccessMessage("");
		if (!file) {
			setErrorMessage("Please select a file to upload.");
			return;
		}
		try {
			const currentUser = auth.currentUser;
			const userEmail = data?.email || (currentUser ? currentUser.email : null);
			if (!userEmail) {
				setErrorMessage("User email not found. Please log in again.");
				return;
			}
			const downloadURL = await getDownloadURL((await uploadBytes(ref(storage, `resumes/${userEmail}/${file.name}`), file)).ref);
			await setDoc(doc(db, "profiles", userEmail), { resumeUrl: downloadURL }, { merge: true });
			setSuccessMessage("File uploaded successfully.");
			alert("File uploaded successfully.");
			window.location.reload();
		} catch (error) {
			console.error("Error uploading resume:", error);
			setErrorMessage("Error in setting up the request: " + error.message);
		}
	};
	const handleProfilePicChange = async (e) => {
		const picFile = e.target.files[0];
		if (!picFile) return;
		setUploadingPic(true);
		try {
			const currentUser = auth.currentUser;
			const userEmail = data?.email || (currentUser ? currentUser.email : null);
			if (!userEmail) throw new Error("User email not found");
			const downloadURL = await getDownloadURL((await uploadBytes(ref(storage, `profile_pictures/${userEmail}/${picFile.name}`), picFile)).ref);
			await setDoc(doc(db, "profiles", userEmail), { profilePictureUrl: downloadURL }, { merge: true });
			if (currentUser?.uid) await setDoc(doc(db, "users", currentUser.uid), { profilePictureUrl: downloadURL }, { merge: true });
			alert("Profile picture updated successfully!");
			window.location.reload();
		} catch (error) {
			console.error("Error uploading profile picture:", error);
			alert("Failed to upload profile picture: " + error.message);
		} finally {
			setUploadingPic(false);
		}
	};
	const handleUpdate = (updatedData) => {
		console.log(`Updated ${updatedData.key}: ${updatedData.value}`);
		setOpenModal(false);
		window.location.reload();
	};
	const closeModal = () => {
		setOpenModal(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-slate-50 min-h-screen py-10 font-sans",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8 mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row gap-6 justify-between items-center text-center md:text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-24 h-24 rounded-full overflow-hidden border-4 border-slate-50 shadow-sm cursor-pointer group",
							onClick: () => profilePicInput.current?.click(),
							title: "Click to upload profile picture",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: data?.profilePictureUrl || "https://i.pravatar.cc/300",
									alt: "Profile",
									className: `w-full h-full object-cover ${uploadingPic ? "opacity-50" : ""}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition-all",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white text-xs font-bold opacity-0 group-hover:opacity-100",
										children: uploadingPic ? "UPLOADING..." : "UPLOAD"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									ref: profilePicInput,
									onChange: handleProfilePicChange,
									className: "hidden",
									accept: "image/png, image/jpeg, image/jpg"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "text-3xl font-bold text-slate-800 tracking-tight",
								children: [
									data?.firstName,
									" ",
									data?.lastName
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-medium text-slate-500 mb-0 flex flex-wrap justify-center md:justify-start gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: data?.email }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-300",
										children: "|"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: data?.mobile }),
									data?.experienceInYear > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-slate-300",
										children: "|"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [data?.experienceInYear, " years of experience"] })] })
								]
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [
							data?.links?.website && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: data.links.website,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-slate-400 hover:text-[#2563EB] transition-colors flex flex-col items-center gap-1 no-underline",
								title: "Website",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TbWorldWww, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-wider text-slate-400",
									children: "Web"
								})]
							}),
							data?.links?.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: data.links.github,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-slate-400 hover:text-[#2563EB] transition-colors flex flex-col items-center gap-1 no-underline",
								title: "GitHub",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGithub, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-wider text-slate-400",
									children: "Git"
								})]
							}),
							data?.links?.linkedin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: data.links.linkedin,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-slate-400 hover:text-[#2563EB] transition-colors flex flex-col items-center gap-1 no-underline",
								title: "LinkedIn",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaLinkedin, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-wider text-slate-400",
									children: "In"
								})]
							}),
							data?.links?.twitter && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: data.links.twitter,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-slate-400 hover:text-[#2563EB] transition-colors flex flex-col items-center gap-1 no-underline",
								title: "Twitter",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaXTwitter, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-wider text-slate-400",
									children: "X"
								})]
							}),
							data?.links?.portfolio && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: data.links.portfolio,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-slate-400 hover:text-[#2563EB] transition-colors flex flex-col items-center gap-1 no-underline",
								title: "Portfolio",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaBook, { size: 24 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-semibold uppercase tracking-wider text-slate-400",
									children: "Port"
								})]
							})
						]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					data?.experiences && data.experiences.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold text-slate-800 pb-2 border-b border-slate-100 mb-6",
							children: "Work Experience"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6",
							children: data.experiences.map((exp, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col md:flex-row gap-4 justify-between items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-base font-bold text-slate-800 mb-0",
											children: exp?.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-slate-500 mb-0",
											children: exp?.company
										}),
										exp?.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-slate-600 mt-2 leading-relaxed whitespace-pre-line",
											children: exp.description
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-semibold text-slate-400 whitespace-nowrap bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg",
									children: [
										convertTimeIntoMMYYYY(exp?.startDate),
										" —",
										" ",
										exp?.isActive ? "Present" : convertTimeIntoMMYYYY(exp?.endDate)
									]
								})]
							}, idx))
						})]
					}),
					data?.education && data.education.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-lg font-bold text-slate-800 pb-2 border-b border-slate-100 mb-6",
							children: "Education Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-6",
							children: data.education.map((edu, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col md:flex-row gap-4 justify-between items-start",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-base font-bold text-slate-800 mb-0",
											children: edu?.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-slate-500 mb-0",
											children: edu?.university
										}),
										edu?.marks && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs font-semibold text-slate-600 mt-2",
											children: ["Score: ", edu.marks]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs font-semibold text-slate-400 whitespace-nowrap bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg",
									children: [
										convertTimeIntoMMYYYY(edu?.startDate),
										" —",
										" ",
										edu?.isActive ? "Present" : convertTimeIntoMMYYYY(edu?.endDate)
									]
								})]
							}, idx))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white border border-slate-200 rounded-2xl shadow-sm p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-slate-800 pb-2 border-b border-slate-100 mb-4",
								children: "Resume"
							}),
							data?.resumeUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-slate-50 border border-slate-100 p-4 rounded-xl mb-4 text-sm text-slate-600 space-y-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mb-0",
									children: [
										"Your current resume:",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											className: "text-[#2563EB] font-bold no-underline hover:underline inline-flex items-center gap-1",
											href: data.resumeUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											children: ["View / Download Resume ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VscLinkExternal, { size: 12 })]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-slate-400 mb-0",
									children: "If you want to upload a different resume, select a new file below."
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-slate-50 border border-slate-100 p-4 rounded-xl mb-4 text-sm text-slate-600",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-0 text-xs text-slate-400",
									children: "No resume uploaded yet. Please upload your resume below."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									name: "file",
									className: "w-full max-w-md bg-white border border-slate-300 rounded-lg text-xs p-2.5 focus:outline-none",
									ref: fileInput,
									onChange: handleFileChange
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 flex-wrap justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-slate-400",
										children: "Supported formats: .doc, .docx, .pdf"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										className: "px-6 py-2 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-bold rounded-lg border-0 transition-colors cursor-pointer shadow-sm",
										children: "Upload Resume"
									})]
								})]
							}),
							errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-red-50 text-red-600 text-xs font-medium p-3 rounded-lg border border-red-100 mt-4",
								children: errorMessage
							}),
							successMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-emerald-50 text-emerald-600 text-xs font-medium p-3 rounded-lg border border-emerald-100 mt-4",
								children: successMessage
							})
						]
					})
				]
			})]
		}), openModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalBox, {
			closeModal,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UpdateInput, {
				title: currentField,
				field: currentField,
				onUpdate: handleUpdate
			})
		})]
	});
};
//#endregion
//#region src/shared/employee/components/EmployeeProfile.jsx
var EmployeeProfile_exports = /* @__PURE__ */ __exportAll({ default: () => EmployeeProfile });
var EmployeeProfile = () => {
	const user = JSON.parse(sessionStorage.getItem("data"));
	const { getEmployeeProfile } = useEmployeeContext();
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const fetchUserProfileDetail = async () => {
		try {
			const result = await getEmployeeProfile(user?.email);
			setData(result?.data?.data);
		} catch (error) {
			console.error("Error fetching user profile:", error);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		fetchUserProfileDetail();
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircularLoader, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: data ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfilePage, { data }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmployeeProfileForm, {}) });
};
//#endregion
export { require_dist as n, EmployeeProfile_exports as t };
