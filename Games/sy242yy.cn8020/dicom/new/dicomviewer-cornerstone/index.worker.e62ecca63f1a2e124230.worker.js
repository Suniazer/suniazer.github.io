(() => {
    var t, e, r = {
            37: (t, e, r) => {
                var n, o = (n = (n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0) || "/index.js", function(t) {
                    var e, o, i = void 0 !== (t = t || {}) ? t : {};
                    i.ready = new Promise((function(t, r) {
                        e = t, o = r
                    }));
                    var a, s, u, c = Object.assign({}, i),
                        l = [],
                        f = "object" == typeof window,
                        p = "function" == typeof importScripts,
                        d = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
                        h = "";
                    if (d) {
                        var y = r(716),
                            v = r(401);
                        h = p ? v.dirname(h) + "/" : "//", a = (t, e) => (t = N(t) ? new URL(t) : v.normalize(t), y.readFileSync(t, e ? void 0 : "utf8")), u = t => {
                            var e = a(t, !0);
                            return e.buffer || (e = new Uint8Array(e)), e
                        }, s = (t, e, r) => {
                            t = N(t) ? new URL(t) : v.normalize(t), y.readFile(t, (function(t, n) {
                                t ? r(t) : e(n.buffer)
                            }))
                        }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), l = process.argv.slice(2), process.on("uncaughtException", (function(t) {
                            if (!(t instanceof G)) throw t
                        })), process.on("unhandledRejection", (function(t) {
                            throw t
                        })), i.inspect = function() {
                            return "[Emscripten Module object]"
                        }
                    } else(f || p) && (p ? h = self.location.href : "undefined" != typeof document && document.currentScript && (h = document.currentScript.src), n && (h = n), h = 0 !== h.indexOf("blob:") ? h.substr(0, h.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", a = t => {
                        var e = new XMLHttpRequest;
                        return e.open("GET", t, !1), e.send(null), e.responseText
                    }, p && (u = t => {
                        var e = new XMLHttpRequest;
                        return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response)
                    }), s = (t, e, r) => {
                        var n = new XMLHttpRequest;
                        n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = () => {
                            200 == n.status || 0 == n.status && n.response ? e(n.response) : r()
                        }, n.onerror = r, n.send(null)
                    });
                    i.print || console.log.bind(console);
                    var g, m, w = i.printErr || console.warn.bind(console);
                    Object.assign(i, c), c = null, i.arguments && (l = i.arguments), i.thisProgram && i.thisProgram, i.quit && i.quit, i.wasmBinary && (g = i.wasmBinary), i.noExitRuntime, "object" != typeof WebAssembly && B("no native wasm support detected");
                    var b, T, P, C, $, _, A, k, S, x = !1,
                        E = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                    function O(t, e) {
                        return t ? function(t, e, r) {
                            for (var n = e + r, o = e; t[o] && !(o >= n);) ++o;
                            if (o - e > 16 && t.buffer && E) return E.decode(t.subarray(e, o));
                            for (var i = ""; e < o;) {
                                var a = t[e++];
                                if (128 & a) {
                                    var s = 63 & t[e++];
                                    if (192 != (224 & a)) {
                                        var u = 63 & t[e++];
                                        if ((a = 224 == (240 & a) ? (15 & a) << 12 | s << 6 | u : (7 & a) << 18 | s << 12 | u << 6 | 63 & t[e++]) < 65536) i += String.fromCharCode(a);
                                        else {
                                            var c = a - 65536;
                                            i += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                                        }
                                    } else i += String.fromCharCode((31 & a) << 6 | s)
                                } else i += String.fromCharCode(a)
                            }
                            return i
                        }(P, t, e) : ""
                    }

                    function R(t, e, r) {
                        return function(t, e, r, n) {
                            if (!(n > 0)) return 0;
                            for (var o = r, i = r + n - 1, a = 0; a < t.length; ++a) {
                                var s = t.charCodeAt(a);
                                if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & t.charCodeAt(++a)), s <= 127) {
                                    if (r >= i) break;
                                    e[r++] = s
                                } else if (s <= 2047) {
                                    if (r + 1 >= i) break;
                                    e[r++] = 192 | s >> 6, e[r++] = 128 | 63 & s
                                } else if (s <= 65535) {
                                    if (r + 2 >= i) break;
                                    e[r++] = 224 | s >> 12, e[r++] = 128 | s >> 6 & 63, e[r++] = 128 | 63 & s
                                } else {
                                    if (r + 3 >= i) break;
                                    e[r++] = 240 | s >> 18, e[r++] = 128 | s >> 12 & 63, e[r++] = 128 | s >> 6 & 63, e[r++] = 128 | 63 & s
                                }
                            }
                            return e[r] = 0, r - o
                        }(t, P, e, r)
                    }

                    function F(t) {
                        b = t, i.HEAP8 = T = new Int8Array(t), i.HEAP16 = C = new Int16Array(t), i.HEAP32 = _ = new Int32Array(t), i.HEAPU8 = P = new Uint8Array(t), i.HEAPU16 = $ = new Uint16Array(t), i.HEAPU32 = A = new Uint32Array(t), i.HEAPF32 = k = new Float32Array(t), i.HEAPF64 = S = new Float64Array(t)
                    }
                    i.INITIAL_MEMORY;
                    var W, j = [],
                        D = [],
                        I = [],
                        U = 0,
                        H = null,
                        L = null;

                    function B(t) {
                        i.onAbort && i.onAbort(t), w(t = "Aborted(" + t + ")"), x = !0, t += ". Build with -sASSERTIONS for more info.";
                        var e = new WebAssembly.RuntimeError(t);
                        throw o(e), e
                    }
                    var M, V;

                    function z(t) {
                        return t.startsWith("data:application/octet-stream;base64,")
                    }

                    function N(t) {
                        return t.startsWith("file://")
                    }

                    function q(t) {
                        try {
                            if (t == M && g) return new Uint8Array(g);
                            if (u) return u(t);
                            throw "both async and sync fetching of the wasm failed"
                        } catch (t) {
                            B(t)
                        }
                    }

                    function G(t) {
                        this.name = "ExitStatus", this.message = "Program terminated with exit(" + t + ")", this.status = t
                    }

                    function J(t) {
                        for (; t.length > 0;) t.shift()(i)
                    }

                    function X(t) {
                        this.excPtr = t, this.ptr = t - 24, this.set_type = function(t) {
                            A[this.ptr + 4 >> 2] = t
                        }, this.get_type = function() {
                            return A[this.ptr + 4 >> 2]
                        }, this.set_destructor = function(t) {
                            A[this.ptr + 8 >> 2] = t
                        }, this.get_destructor = function() {
                            return A[this.ptr + 8 >> 2]
                        }, this.set_refcount = function(t) {
                            _[this.ptr >> 2] = t
                        }, this.set_caught = function(t) {
                            t = t ? 1 : 0, T[this.ptr + 12 | 0] = t
                        }, this.get_caught = function() {
                            return 0 != T[this.ptr + 12 | 0]
                        }, this.set_rethrown = function(t) {
                            t = t ? 1 : 0, T[this.ptr + 13 | 0] = t
                        }, this.get_rethrown = function() {
                            return 0 != T[this.ptr + 13 | 0]
                        }, this.init = function(t, e) {
                            this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(e), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
                        }, this.add_ref = function() {
                            var t = _[this.ptr >> 2];
                            _[this.ptr >> 2] = t + 1
                        }, this.release_ref = function() {
                            var t = _[this.ptr >> 2];
                            return _[this.ptr >> 2] = t - 1, 1 === t
                        }, this.set_adjusted_ptr = function(t) {
                            A[this.ptr + 16 >> 2] = t
                        }, this.get_adjusted_ptr = function() {
                            return A[this.ptr + 16 >> 2]
                        }, this.get_exception_ptr = function() {
                            if (me(this.get_type())) return A[this.excPtr >> 2];
                            var t = this.get_adjusted_ptr();
                            return 0 !== t ? t : this.excPtr
                        }
                    }
                    z(M = "charlswasm_decode.wasm") || (V = M, M = i.locateFile ? i.locateFile(V, h) : h + V);
                    var Y = {};

                    function K(t) {
                        for (; t.length;) {
                            var e = t.pop();
                            t.pop()(e)
                        }
                    }

                    function Z(t) {
                        return this.fromWireType(_[t >> 2])
                    }
                    var Q = {},
                        tt = {},
                        et = {};

                    function rt(t) {
                        if (void 0 === t) return "_unknown";
                        var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                        return e >= 48 && e <= 57 ? "_" + t : t
                    }

                    function nt(t, e) {
                        return t = rt(t), new Function("body", "return function " + t + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)
                    }

                    function ot(t, e) {
                        var r = nt(e, (function(t) {
                            this.name = e, this.message = t;
                            var r = new Error(t).stack;
                            void 0 !== r && (this.stack = this.toString() + "\n" + r.replace(/^Error(:[^\n]*)?\n/, ""))
                        }));
                        return r.prototype = Object.create(t.prototype), r.prototype.constructor = r, r.prototype.toString = function() {
                            return void 0 === this.message ? this.name : this.name + ": " + this.message
                        }, r
                    }
                    var it = void 0;

                    function at(t) {
                        throw new it(t)
                    }

                    function st(t, e, r) {
                        function n(e) {
                            var n = r(e);
                            n.length !== t.length && at("Mismatched type converter count");
                            for (var o = 0; o < t.length; ++o) dt(t[o], n[o])
                        }
                        t.forEach((function(t) {
                            et[t] = e
                        }));
                        var o = new Array(e.length),
                            i = [],
                            a = 0;
                        e.forEach(((t, e) => {
                            tt.hasOwnProperty(t) ? o[e] = tt[t] : (i.push(t), Q.hasOwnProperty(t) || (Q[t] = []), Q[t].push((() => {
                                o[e] = tt[t], ++a === i.length && n(o)
                            })))
                        })), 0 === i.length && n(o)
                    }

                    function ut(t) {
                        switch (t) {
                            case 1:
                                return 0;
                            case 2:
                                return 1;
                            case 4:
                                return 2;
                            case 8:
                                return 3;
                            default:
                                throw new TypeError("Unknown type size: " + t)
                        }
                    }
                    var ct = void 0;

                    function lt(t) {
                        for (var e = "", r = t; P[r];) e += ct[P[r++]];
                        return e
                    }
                    var ft = void 0;

                    function pt(t) {
                        throw new ft(t)
                    }

                    function dt(t, e, r = {}) {
                        if (!("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                        var n = e.name;
                        if (t || pt('type "' + n + '" must have a positive integer typeid pointer'), tt.hasOwnProperty(t)) {
                            if (r.ignoreDuplicateRegistrations) return;
                            pt("Cannot register type '" + n + "' twice")
                        }
                        if (tt[t] = e, delete et[t], Q.hasOwnProperty(t)) {
                            var o = Q[t];
                            delete Q[t], o.forEach((t => t()))
                        }
                    }

                    function ht(t) {
                        pt(t.$$.ptrType.registeredClass.name + " instance already deleted")
                    }
                    var yt = !1;

                    function vt(t) {}

                    function gt(t) {
                        t.count.value -= 1, 0 === t.count.value && function(t) {
                            t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr)
                        }(t)
                    }

                    function mt(t, e, r) {
                        if (e === r) return t;
                        if (void 0 === r.baseClass) return null;
                        var n = mt(t, e, r.baseClass);
                        return null === n ? null : r.downcast(n)
                    }
                    var wt = {};
                    var bt = [];

                    function Tt() {
                        for (; bt.length;) {
                            var t = bt.pop();
                            t.$$.deleteScheduled = !1, t.delete()
                        }
                    }
                    var Pt = void 0;
                    var Ct = {};

                    function $t(t, e) {
                        return e.ptrType && e.ptr || at("makeClassHandle requires ptr and ptrType"), !!e.smartPtrType != !!e.smartPtr && at("Both smartPtrType and smartPtr must be specified"), e.count = {
                            value: 1
                        }, _t(Object.create(t, {
                            $$: {
                                value: e
                            }
                        }))
                    }

                    function _t(t) {
                        return "undefined" == typeof FinalizationRegistry ? (_t = t => t, t) : (yt = new FinalizationRegistry((t => {
                            gt(t.$$)
                        })), _t = t => {
                            var e = t.$$;
                            if (e.smartPtr) {
                                var r = {
                                    $$: e
                                };
                                yt.register(t, r, t)
                            }
                            return t
                        }, vt = t => yt.unregister(t), _t(t))
                    }

                    function At() {}

                    function kt(t, e, r) {
                        if (void 0 === t[e].overloadTable) {
                            var n = t[e];
                            t[e] = function() {
                                return t[e].overloadTable.hasOwnProperty(arguments.length) || pt("Function '" + r + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + t[e].overloadTable + ")!"), t[e].overloadTable[arguments.length].apply(this, arguments)
                            }, t[e].overloadTable = [], t[e].overloadTable[n.argCount] = n
                        }
                    }

                    function St(t, e, r) {
                        i.hasOwnProperty(t) ? ((void 0 === r || void 0 !== i[t].overloadTable && void 0 !== i[t].overloadTable[r]) && pt("Cannot register public name '" + t + "' twice"), kt(i, t, t), i.hasOwnProperty(r) && pt("Cannot register multiple overloads of a function with the same number of arguments (" + r + ")!"), i[t].overloadTable[r] = e) : (i[t] = e, void 0 !== r && (i[t].numArguments = r))
                    }

                    function xt(t, e, r, n, o, i, a, s) {
                        this.name = t, this.constructor = e, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = o, this.getActualType = i, this.upcast = a, this.downcast = s, this.pureVirtualFunctions = []
                    }

                    function Et(t, e, r) {
                        for (; e !== r;) e.upcast || pt("Expected null or instance of " + r.name + ", got an instance of " + e.name), t = e.upcast(t), e = e.baseClass;
                        return t
                    }

                    function Ot(t, e) {
                        if (null === e) return this.isReference && pt("null is not a valid " + this.name), 0;
                        e.$$ || pt('Cannot pass "' + Xt(e) + '" as a ' + this.name), e.$$.ptr || pt("Cannot pass deleted object as a pointer of type " + this.name);
                        var r = e.$$.ptrType.registeredClass;
                        return Et(e.$$.ptr, r, this.registeredClass)
                    }

                    function Rt(t, e) {
                        var r;
                        if (null === e) return this.isReference && pt("null is not a valid " + this.name), this.isSmartPointer ? (r = this.rawConstructor(), null !== t && t.push(this.rawDestructor, r), r) : 0;
                        e.$$ || pt('Cannot pass "' + Xt(e) + '" as a ' + this.name), e.$$.ptr || pt("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && e.$$.ptrType.isConst && pt("Cannot convert argument of type " + (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) + " to parameter type " + this.name);
                        var n = e.$$.ptrType.registeredClass;
                        if (r = Et(e.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (void 0 === e.$$.smartPtr && pt("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
                            case 0:
                                e.$$.smartPtrType === this ? r = e.$$.smartPtr : pt("Cannot convert argument of type " + (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) + " to parameter type " + this.name);
                                break;
                            case 1:
                                r = e.$$.smartPtr;
                                break;
                            case 2:
                                if (e.$$.smartPtrType === this) r = e.$$.smartPtr;
                                else {
                                    var o = e.clone();
                                    r = this.rawShare(r, Jt.toHandle((function() {
                                        o.delete()
                                    }))), null !== t && t.push(this.rawDestructor, r)
                                }
                                break;
                            default:
                                pt("Unsupporting sharing policy")
                        }
                        return r
                    }

                    function Ft(t, e) {
                        if (null === e) return this.isReference && pt("null is not a valid " + this.name), 0;
                        e.$$ || pt('Cannot pass "' + Xt(e) + '" as a ' + this.name), e.$$.ptr || pt("Cannot pass deleted object as a pointer of type " + this.name), e.$$.ptrType.isConst && pt("Cannot convert argument of type " + e.$$.ptrType.name + " to parameter type " + this.name);
                        var r = e.$$.ptrType.registeredClass;
                        return Et(e.$$.ptr, r, this.registeredClass)
                    }

                    function Wt(t, e, r, n, o, i, a, s, u, c, l) {
                        this.name = t, this.registeredClass = e, this.isReference = r, this.isConst = n, this.isSmartPointer = o, this.pointeeType = i, this.sharingPolicy = a, this.rawGetPointee = s, this.rawConstructor = u, this.rawShare = c, this.rawDestructor = l, o || void 0 !== e.baseClass ? this.toWireType = Rt : n ? (this.toWireType = Ot, this.destructorFunction = null) : (this.toWireType = Ft, this.destructorFunction = null)
                    }

                    function jt(t, e, r) {
                        i.hasOwnProperty(t) || at("Replacing nonexistant public symbol"), void 0 !== i[t].overloadTable && void 0 !== r ? i[t].overloadTable[r] = e : (i[t] = e, i[t].argCount = r)
                    }
                    var Dt = [];

                    function It(t) {
                        var e = Dt[t];
                        return e || (t >= Dt.length && (Dt.length = t + 1), Dt[t] = e = W.get(t)), e
                    }

                    function Ut(t, e, r) {
                        return t.includes("j") ? function(t, e, r) {
                            var n = i["dynCall_" + t];
                            return r && r.length ? n.apply(null, [e].concat(r)) : n.call(null, e)
                        }(t, e, r) : It(e).apply(null, r)
                    }

                    function Ht(t, e) {
                        var r, n, o, i = (t = lt(t)).includes("j") ? (r = t, n = e, o = [], function() {
                            return o.length = 0, Object.assign(o, arguments), Ut(r, n, o)
                        }) : It(e);
                        return "function" != typeof i && pt("unknown function pointer with signature " + t + ": " + e), i
                    }
                    var Lt = void 0;

                    function Bt(t) {
                        var e = de(t),
                            r = lt(e);
                        return he(e), r
                    }

                    function Mt(t, e) {
                        var r = [],
                            n = {};
                        throw e.forEach((function t(e) {
                            n[e] || tt[e] || (et[e] ? et[e].forEach(t) : (r.push(e), n[e] = !0))
                        })), new Lt(t + ": " + r.map(Bt).join([", "]))
                    }

                    function Vt(t, e) {
                        for (var r = [], n = 0; n < t; n++) r.push(A[e + 4 * n >> 2]);
                        return r
                    }

                    function zt(t, e, r, n, o) {
                        var i = e.length;
                        i < 2 && pt("argTypes array size mismatch! Must at least get return value and 'this' types!");
                        for (var a = null !== e[1] && null !== r, s = !1, u = 1; u < e.length; ++u)
                            if (null !== e[u] && void 0 === e[u].destructorFunction) {
                                s = !0;
                                break
                            }
                        var c = "void" !== e[0].name,
                            l = "",
                            f = "";
                        for (u = 0; u < i - 2; ++u) l += (0 !== u ? ", " : "") + "arg" + u, f += (0 !== u ? ", " : "") + "arg" + u + "Wired";
                        var p = "return function " + rt(t) + "(" + l + ") {\nif (arguments.length !== " + (i - 2) + ") {\nthrowBindingError('function " + t + " called with ' + arguments.length + ' arguments, expected " + (i - 2) + " args!');\n}\n";
                        s && (p += "var destructors = [];\n");
                        var d = s ? "destructors" : "null",
                            h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                            y = [pt, n, o, K, e[0], e[1]];
                        for (a && (p += "var thisWired = classParam.toWireType(" + d + ", this);\n"), u = 0; u < i - 2; ++u) p += "var arg" + u + "Wired = argType" + u + ".toWireType(" + d + ", arg" + u + "); // " + e[u + 2].name + "\n", h.push("argType" + u), y.push(e[u + 2]);
                        if (a && (f = "thisWired" + (f.length > 0 ? ", " : "") + f), p += (c ? "var rv = " : "") + "invoker(fn" + (f.length > 0 ? ", " : "") + f + ");\n", s) p += "runDestructors(destructors);\n";
                        else
                            for (u = a ? 1 : 2; u < e.length; ++u) {
                                var v = 1 === u ? "thisWired" : "arg" + (u - 2) + "Wired";
                                null !== e[u].destructorFunction && (p += v + "_dtor(" + v + "); // " + e[u].name + "\n", h.push(v + "_dtor"), y.push(e[u].destructorFunction))
                            }
                        return c && (p += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p += "}\n", h.push(p),
                            function(t, e) {
                                if (!(t instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof t + " which is not a function");
                                var r = nt(t.name || "unknownFunctionName", (function() {}));
                                r.prototype = t.prototype;
                                var n = new r,
                                    o = t.apply(n, e);
                                return o instanceof Object ? o : n
                            }(Function, h).apply(null, y)
                    }
                    var Nt = [],
                        qt = [{}, {
                            value: void 0
                        }, {
                            value: null
                        }, {
                            value: !0
                        }, {
                            value: !1
                        }];

                    function Gt(t) {
                        t > 4 && 0 == --qt[t].refcount && (qt[t] = void 0, Nt.push(t))
                    }
                    var Jt = {
                        toValue: t => (t || pt("Cannot use deleted val. handle = " + t), qt[t].value),
                        toHandle: t => {
                            switch (t) {
                                case void 0:
                                    return 1;
                                case null:
                                    return 2;
                                case !0:
                                    return 3;
                                case !1:
                                    return 4;
                                default:
                                    var e = Nt.length ? Nt.pop() : qt.length;
                                    return qt[e] = {
                                        refcount: 1,
                                        value: t
                                    }, e
                            }
                        }
                    };

                    function Xt(t) {
                        if (null === t) return "null";
                        var e = typeof t;
                        return "object" === e || "array" === e || "function" === e ? t.toString() : "" + t
                    }

                    function Yt(t, e) {
                        switch (e) {
                            case 2:
                                return function(t) {
                                    return this.fromWireType(k[t >> 2])
                                };
                            case 3:
                                return function(t) {
                                    return this.fromWireType(S[t >> 3])
                                };
                            default:
                                throw new TypeError("Unknown float type: " + t)
                        }
                    }

                    function Kt(t, e, r) {
                        switch (e) {
                            case 0:
                                return r ? function(t) {
                                    return T[t]
                                } : function(t) {
                                    return P[t]
                                };
                            case 1:
                                return r ? function(t) {
                                    return C[t >> 1]
                                } : function(t) {
                                    return $[t >> 1]
                                };
                            case 2:
                                return r ? function(t) {
                                    return _[t >> 2]
                                } : function(t) {
                                    return A[t >> 2]
                                };
                            default:
                                throw new TypeError("Unknown integer type: " + t)
                        }
                    }
                    var Zt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

                    function Qt(t, e) {
                        for (var r = t, n = r >> 1, o = n + e / 2; !(n >= o) && $[n];) ++n;
                        if ((r = n << 1) - t > 32 && Zt) return Zt.decode(P.subarray(t, r));
                        for (var i = "", a = 0; !(a >= e / 2); ++a) {
                            var s = C[t + 2 * a >> 1];
                            if (0 == s) break;
                            i += String.fromCharCode(s)
                        }
                        return i
                    }

                    function te(t, e, r) {
                        if (void 0 === r && (r = 2147483647), r < 2) return 0;
                        for (var n = e, o = (r -= 2) < 2 * t.length ? r / 2 : t.length, i = 0; i < o; ++i) {
                            var a = t.charCodeAt(i);
                            C[e >> 1] = a, e += 2
                        }
                        return C[e >> 1] = 0, e - n
                    }

                    function ee(t) {
                        return 2 * t.length
                    }

                    function re(t, e) {
                        for (var r = 0, n = ""; !(r >= e / 4);) {
                            var o = _[t + 4 * r >> 2];
                            if (0 == o) break;
                            if (++r, o >= 65536) {
                                var i = o - 65536;
                                n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                            } else n += String.fromCharCode(o)
                        }
                        return n
                    }

                    function ne(t, e, r) {
                        if (void 0 === r && (r = 2147483647), r < 4) return 0;
                        for (var n = e, o = n + r - 4, i = 0; i < t.length; ++i) {
                            var a = t.charCodeAt(i);
                            if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & t.charCodeAt(++i)), _[e >> 2] = a, (e += 4) + 4 > o) break
                        }
                        return _[e >> 2] = 0, e - n
                    }

                    function oe(t) {
                        for (var e = 0, r = 0; r < t.length; ++r) {
                            var n = t.charCodeAt(r);
                            n >= 55296 && n <= 57343 && ++r, e += 4
                        }
                        return e
                    }
                    var ie = {};

                    function ae() {
                        return "object" == typeof globalThis ? globalThis : Function("return this")()
                    }

                    function se(t, e) {
                        var r = tt[t];
                        return void 0 === r && pt(e + " has unknown type " + Bt(t)), r
                    }
                    var ue = {};

                    function ce(t) {
                        try {
                            return m.grow(t - b.byteLength + 65535 >>> 16), F(m.buffer), 1
                        } catch (t) {}
                    }
                    it = i.InternalError = ot(Error, "InternalError"),
                        function() {
                            for (var t = new Array(256), e = 0; e < 256; ++e) t[e] = String.fromCharCode(e);
                            ct = t
                        }(), ft = i.BindingError = ot(Error, "BindingError"), At.prototype.isAliasOf = function(t) {
                            if (!(this instanceof At)) return !1;
                            if (!(t instanceof At)) return !1;
                            for (var e = this.$$.ptrType.registeredClass, r = this.$$.ptr, n = t.$$.ptrType.registeredClass, o = t.$$.ptr; e.baseClass;) r = e.upcast(r), e = e.baseClass;
                            for (; n.baseClass;) o = n.upcast(o), n = n.baseClass;
                            return e === n && r === o
                        }, At.prototype.clone = function() {
                            if (this.$$.ptr || ht(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                            var t, e = _t(Object.create(Object.getPrototypeOf(this), {
                                $$: {
                                    value: (t = this.$$, {
                                        count: t.count,
                                        deleteScheduled: t.deleteScheduled,
                                        preservePointerOnDelete: t.preservePointerOnDelete,
                                        ptr: t.ptr,
                                        ptrType: t.ptrType,
                                        smartPtr: t.smartPtr,
                                        smartPtrType: t.smartPtrType
                                    })
                                }
                            }));
                            return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e
                        }, At.prototype.delete = function() {
                            this.$$.ptr || ht(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && pt("Object already scheduled for deletion"), vt(this), gt(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0)
                        }, At.prototype.isDeleted = function() {
                            return !this.$$.ptr
                        }, At.prototype.deleteLater = function() {
                            return this.$$.ptr || ht(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && pt("Object already scheduled for deletion"), bt.push(this), 1 === bt.length && Pt && Pt(Tt), this.$$.deleteScheduled = !0, this
                        }, i.getInheritedInstanceCount = function() {
                            return Object.keys(Ct).length
                        }, i.getLiveInheritedInstances = function() {
                            var t = [];
                            for (var e in Ct) Ct.hasOwnProperty(e) && t.push(Ct[e]);
                            return t
                        }, i.flushPendingDeletes = Tt, i.setDelayFunction = function(t) {
                            Pt = t, bt.length && Pt && Pt(Tt)
                        }, Wt.prototype.getPointee = function(t) {
                            return this.rawGetPointee && (t = this.rawGetPointee(t)), t
                        }, Wt.prototype.destructor = function(t) {
                            this.rawDestructor && this.rawDestructor(t)
                        }, Wt.prototype.argPackAdvance = 8, Wt.prototype.readValueFromPointer = Z, Wt.prototype.deleteObject = function(t) {
                            null !== t && t.delete()
                        }, Wt.prototype.fromWireType = function(t) {
                            var e = this.getPointee(t);
                            if (!e) return this.destructor(t), null;
                            var r = function(t, e) {
                                return e = function(t, e) {
                                    for (void 0 === e && pt("ptr should not be undefined"); t.baseClass;) e = t.upcast(e), t = t.baseClass;
                                    return e
                                }(t, e), Ct[e]
                            }(this.registeredClass, e);
                            if (void 0 !== r) {
                                if (0 === r.$$.count.value) return r.$$.ptr = e, r.$$.smartPtr = t, r.clone();
                                var n = r.clone();
                                return this.destructor(t), n
                            }

                            function o() {
                                return this.isSmartPointer ? $t(this.registeredClass.instancePrototype, {
                                    ptrType: this.pointeeType,
                                    ptr: e,
                                    smartPtrType: this,
                                    smartPtr: t
                                }) : $t(this.registeredClass.instancePrototype, {
                                    ptrType: this,
                                    ptr: t
                                })
                            }
                            var i, a = this.registeredClass.getActualType(e),
                                s = wt[a];
                            if (!s) return o.call(this);
                            i = this.isConst ? s.constPointerType : s.pointerType;
                            var u = mt(e, this.registeredClass, i.registeredClass);
                            return null === u ? o.call(this) : this.isSmartPointer ? $t(i.registeredClass.instancePrototype, {
                                ptrType: i,
                                ptr: u,
                                smartPtrType: this,
                                smartPtr: t
                            }) : $t(i.registeredClass.instancePrototype, {
                                ptrType: i,
                                ptr: u
                            })
                        }, Lt = i.UnboundTypeError = ot(Error, "UnboundTypeError"), i.count_emval_handles = function() {
                            for (var t = 0, e = 5; e < qt.length; ++e) void 0 !== qt[e] && ++t;
                            return t
                        }, i.get_first_emval = function() {
                            for (var t = 5; t < qt.length; ++t)
                                if (void 0 !== qt[t]) return qt[t];
                            return null
                        };
                    var le, fe = {
                            h: function(t, e, r) {
                                throw new X(t).init(e, r), t
                            },
                            q: function(t) {
                                var e = Y[t];
                                delete Y[t];
                                var r = e.rawConstructor,
                                    n = e.rawDestructor,
                                    o = e.fields;
                                st([t], o.map((t => t.getterReturnType)).concat(o.map((t => t.setterArgumentType))), (t => {
                                    var i = {};
                                    return o.forEach(((e, r) => {
                                        var n = e.fieldName,
                                            a = t[r],
                                            s = e.getter,
                                            u = e.getterContext,
                                            c = t[r + o.length],
                                            l = e.setter,
                                            f = e.setterContext;
                                        i[n] = {
                                            read: t => a.fromWireType(s(u, t)),
                                            write: (t, e) => {
                                                var r = [];
                                                l(f, t, c.toWireType(r, e)), K(r)
                                            }
                                        }
                                    })), [{
                                        name: e.name,
                                        fromWireType: function(t) {
                                            var e = {};
                                            for (var r in i) e[r] = i[r].read(t);
                                            return n(t), e
                                        },
                                        toWireType: function(t, e) {
                                            for (var o in i)
                                                if (!(o in e)) throw new TypeError('Missing field:  "' + o + '"');
                                            var a = r();
                                            for (o in i) i[o].write(a, e[o]);
                                            return null !== t && t.push(n, a), a
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: Z,
                                        destructorFunction: n
                                    }]
                                }))
                            },
                            r: function(t, e, r, n, o) {},
                            w: function(t, e, r, n, o) {
                                var i = ut(r);
                                dt(t, {
                                    name: e = lt(e),
                                    fromWireType: function(t) {
                                        return !!t
                                    },
                                    toWireType: function(t, e) {
                                        return e ? n : o
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: function(t) {
                                        var n;
                                        if (1 === r) n = T;
                                        else if (2 === r) n = C;
                                        else {
                                            if (4 !== r) throw new TypeError("Unknown boolean type size: " + e);
                                            n = _
                                        }
                                        return this.fromWireType(n[t >> i])
                                    },
                                    destructorFunction: null
                                })
                            },
                            p: function(t, e, r, n, o, i, a, s, u, c, l, f, p) {
                                l = lt(l), i = Ht(o, i), s && (s = Ht(a, s)), c && (c = Ht(u, c)), p = Ht(f, p);
                                var d = rt(l);
                                St(d, (function() {
                                    Mt("Cannot construct " + l + " due to unbound types", [n])
                                })), st([t, e, r], n ? [n] : [], (function(e) {
                                    var r, o;
                                    e = e[0], o = n ? (r = e.registeredClass).instancePrototype : At.prototype;
                                    var a = nt(d, (function() {
                                            if (Object.getPrototypeOf(this) !== u) throw new ft("Use 'new' to construct " + l);
                                            if (void 0 === f.constructor_body) throw new ft(l + " has no accessible constructor");
                                            var t = f.constructor_body[arguments.length];
                                            if (void 0 === t) throw new ft("Tried to invoke ctor of " + l + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(f.constructor_body).toString() + ") parameters instead!");
                                            return t.apply(this, arguments)
                                        })),
                                        u = Object.create(o, {
                                            constructor: {
                                                value: a
                                            }
                                        });
                                    a.prototype = u;
                                    var f = new xt(l, a, u, p, r, i, s, c),
                                        h = new Wt(l, f, !0, !1, !1),
                                        y = new Wt(l + "*", f, !1, !1, !1),
                                        v = new Wt(l + " const*", f, !1, !0, !1);
                                    return wt[t] = {
                                        pointerType: y,
                                        constPointerType: v
                                    }, jt(d, a), [h, y, v]
                                }))
                            },
                            o: function(t, e, r, n, o, i) {
                                e > 0 || B(undefined);
                                var a = Vt(e, r);
                                o = Ht(n, o), st([], [t], (function(t) {
                                    var r = "constructor " + (t = t[0]).name;
                                    if (void 0 === t.registeredClass.constructor_body && (t.registeredClass.constructor_body = []), void 0 !== t.registeredClass.constructor_body[e - 1]) throw new ft("Cannot register multiple constructors with identical number of parameters (" + (e - 1) + ") for class '" + t.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                                    return t.registeredClass.constructor_body[e - 1] = () => {
                                        Mt("Cannot construct " + t.name + " due to unbound types", a)
                                    }, st([], a, (function(n) {
                                        return n.splice(1, 0, null), t.registeredClass.constructor_body[e - 1] = zt(r, n, null, o, i), []
                                    })), []
                                }))
                            },
                            c: function(t, e, r, n, o, i, a, s) {
                                var u = Vt(r, n);
                                e = lt(e), i = Ht(o, i), st([], [t], (function(t) {
                                    var n = (t = t[0]).name + "." + e;

                                    function o() {
                                        Mt("Cannot call " + n + " due to unbound types", u)
                                    }
                                    e.startsWith("@@") && (e = Symbol[e.substring(2)]), s && t.registeredClass.pureVirtualFunctions.push(e);
                                    var c = t.registeredClass.instancePrototype,
                                        l = c[e];
                                    return void 0 === l || void 0 === l.overloadTable && l.className !== t.name && l.argCount === r - 2 ? (o.argCount = r - 2, o.className = t.name, c[e] = o) : (kt(c, e, n), c[e].overloadTable[r - 2] = o), st([], u, (function(o) {
                                        var s = zt(n, o, t, i, a);
                                        return void 0 === c[e].overloadTable ? (s.argCount = r - 2, c[e] = s) : c[e].overloadTable[r - 2] = s, []
                                    })), []
                                }))
                            },
                            v: function(t, e) {
                                dt(t, {
                                    name: e = lt(e),
                                    fromWireType: function(t) {
                                        var e = Jt.toValue(t);
                                        return Gt(t), e
                                    },
                                    toWireType: function(t, e) {
                                        return Jt.toHandle(e)
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Z,
                                    destructorFunction: null
                                })
                            },
                            k: function(t, e, r) {
                                var n = ut(r);
                                dt(t, {
                                    name: e = lt(e),
                                    fromWireType: function(t) {
                                        return t
                                    },
                                    toWireType: function(t, e) {
                                        return e
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Yt(e, n),
                                    destructorFunction: null
                                })
                            },
                            e: function(t, e, r, n, o, i) {
                                var a = Vt(e, r);
                                t = lt(t), o = Ht(n, o), St(t, (function() {
                                    Mt("Cannot call " + t + " due to unbound types", a)
                                }), e - 1), st([], a, (function(r) {
                                    var n = [r[0], null].concat(r.slice(1));
                                    return jt(t, zt(t, n, null, o, i), e - 1), []
                                }))
                            },
                            b: function(t, e, r, n, o) {
                                e = lt(e), -1 === o && (o = 4294967295);
                                var i = ut(r),
                                    a = t => t;
                                if (0 === n) {
                                    var s = 32 - 8 * r;
                                    a = t => t << s >>> s
                                }
                                var u = e.includes("unsigned");
                                dt(t, {
                                    name: e,
                                    fromWireType: a,
                                    toWireType: u ? function(t, e) {
                                        return this.name, e >>> 0
                                    } : function(t, e) {
                                        return this.name, e
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Kt(e, i, 0 !== n),
                                    destructorFunction: null
                                })
                            },
                            a: function(t, e, r) {
                                var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];

                                function o(t) {
                                    var e = A,
                                        r = e[t >>= 2],
                                        o = e[t + 1];
                                    return new n(b, o, r)
                                }
                                dt(t, {
                                    name: r = lt(r),
                                    fromWireType: o,
                                    argPackAdvance: 8,
                                    readValueFromPointer: o
                                }, {
                                    ignoreDuplicateRegistrations: !0
                                })
                            },
                            j: function(t, e) {
                                var r = "std::string" === (e = lt(e));
                                dt(t, {
                                    name: e,
                                    fromWireType: function(t) {
                                        var e, n = A[t >> 2],
                                            o = t + 4;
                                        if (r)
                                            for (var i = o, a = 0; a <= n; ++a) {
                                                var s = o + a;
                                                if (a == n || 0 == P[s]) {
                                                    var u = O(i, s - i);
                                                    void 0 === e ? e = u : (e += String.fromCharCode(0), e += u), i = s + 1
                                                }
                                            } else {
                                                var c = new Array(n);
                                                for (a = 0; a < n; ++a) c[a] = String.fromCharCode(P[o + a]);
                                                e = c.join("")
                                            }
                                        return he(t), e
                                    },
                                    toWireType: function(t, e) {
                                        var n;
                                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                        var o = "string" == typeof e;
                                        o || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || pt("Cannot pass non-string to std::string"), n = r && o ? function(t) {
                                            for (var e = 0, r = 0; r < t.length; ++r) {
                                                var n = t.charCodeAt(r);
                                                n <= 127 ? e++ : n <= 2047 ? e += 2 : n >= 55296 && n <= 57343 ? (e += 4, ++r) : e += 3
                                            }
                                            return e
                                        }(e) : e.length;
                                        var i = pe(4 + n + 1),
                                            a = i + 4;
                                        if (A[i >> 2] = n, r && o) R(e, a, n + 1);
                                        else if (o)
                                            for (var s = 0; s < n; ++s) {
                                                var u = e.charCodeAt(s);
                                                u > 255 && (he(a), pt("String has UTF-16 code units that do not fit in 8 bits")), P[a + s] = u
                                            } else
                                                for (s = 0; s < n; ++s) P[a + s] = e[s];
                                        return null !== t && t.push(he, i), i
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Z,
                                    destructorFunction: function(t) {
                                        he(t)
                                    }
                                })
                            },
                            g: function(t, e, r) {
                                var n, o, i, a, s;
                                r = lt(r), 2 === e ? (n = Qt, o = te, a = ee, i = () => $, s = 1) : 4 === e && (n = re, o = ne, a = oe, i = () => A, s = 2), dt(t, {
                                    name: r,
                                    fromWireType: function(t) {
                                        for (var r, o = A[t >> 2], a = i(), u = t + 4, c = 0; c <= o; ++c) {
                                            var l = t + 4 + c * e;
                                            if (c == o || 0 == a[l >> s]) {
                                                var f = n(u, l - u);
                                                void 0 === r ? r = f : (r += String.fromCharCode(0), r += f), u = l + e
                                            }
                                        }
                                        return he(t), r
                                    },
                                    toWireType: function(t, n) {
                                        "string" != typeof n && pt("Cannot pass non-string to C++ string type " + r);
                                        var i = a(n),
                                            u = pe(4 + i + e);
                                        return A[u >> 2] = i >> s, o(n, u + 4, i + e), null !== t && t.push(he, u), u
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Z,
                                    destructorFunction: function(t) {
                                        he(t)
                                    }
                                })
                            },
                            u: function(t, e, r, n, o, i) {
                                Y[t] = {
                                    name: lt(e),
                                    rawConstructor: Ht(r, n),
                                    rawDestructor: Ht(o, i),
                                    fields: []
                                }
                            },
                            d: function(t, e, r, n, o, i, a, s, u, c) {
                                Y[t].fields.push({
                                    fieldName: lt(e),
                                    getterReturnType: r,
                                    getter: Ht(n, o),
                                    getterContext: i,
                                    setterArgumentType: a,
                                    setter: Ht(s, u),
                                    setterContext: c
                                })
                            },
                            x: function(t, e) {
                                dt(t, {
                                    isVoid: !0,
                                    name: e = lt(e),
                                    argPackAdvance: 0,
                                    fromWireType: function() {},
                                    toWireType: function(t, e) {}
                                })
                            },
                            i: Gt,
                            m: function(t) {
                                return 0 === t ? Jt.toHandle(ae()) : (t = void 0 === (r = ie[e = t]) ? lt(e) : r, Jt.toHandle(ae()[t]));
                                var e, r
                            },
                            l: function(t) {
                                t > 4 && (qt[t].refcount += 1)
                            },
                            y: function(t, e, r, n) {
                                t = Jt.toValue(t);
                                var o = ue[e];
                                return o || (o = function(t) {
                                    for (var e = "", r = 0; r < t; ++r) e += (0 !== r ? ", " : "") + "arg" + r;
                                    var n = "return function emval_allocator_" + t + "(constructor, argTypes, args) {\n  var HEAPU32 = getMemory();\n";
                                    for (r = 0; r < t; ++r) n += "var argType" + r + " = requireRegisteredType(HEAPU32[((argTypes)>>2)], 'parameter " + r + "');\nvar arg" + r + " = argType" + r + ".readValueFromPointer(args);\nargs += argType" + r + "['argPackAdvance'];\nargTypes += 4;\n";
                                    return n += "var obj = new constructor(" + e + ");\nreturn valueToHandle(obj);\n}\n", new Function("requireRegisteredType", "Module", "valueToHandle", "getMemory", n)(se, i, Jt.toHandle, (() => A))
                                }(e), ue[e] = o), o(t, r, n)
                            },
                            n: function(t, e) {
                                var r = (t = se(t, "_emval_take_value")).readValueFromPointer(e);
                                return Jt.toHandle(r)
                            },
                            f: function() {
                                B("")
                            },
                            t: function(t, e, r) {
                                P.copyWithin(t, e, e + r)
                            },
                            s: function(t) {
                                var e, r = P.length,
                                    n = 2147483648;
                                if ((t >>>= 0) > n) return !1;
                                for (var o = 1; o <= 4; o *= 2) {
                                    var i = r * (1 + .2 / o);
                                    if (i = Math.min(i, t + 100663296), ce(Math.min(n, (e = Math.max(t, i)) + (65536 - e % 65536) % 65536))) return !0
                                }
                                return !1
                            }
                        },
                        pe = (function() {
                            var t = {
                                a: fe
                            };

                            function e(t, e) {
                                var r, n = t.exports;
                                i.asm = n, F((m = i.asm.z).buffer), W = i.asm.C, r = i.asm.A, D.unshift(r),
                                    function() {
                                        if (U--, i.monitorRunDependencies && i.monitorRunDependencies(U), 0 == U && (null !== H && (clearInterval(H), H = null), L)) {
                                            var t = L;
                                            L = null, t()
                                        }
                                    }()
                            }

                            function r(t) {
                                e(t.instance)
                            }

                            function n(e) {
                                return function() {
                                    if (!g && (f || p)) {
                                        if ("function" == typeof fetch && !N(M)) return fetch(M, {
                                            credentials: "same-origin"
                                        }).then((function(t) {
                                            if (!t.ok) throw "failed to load wasm binary file at '" + M + "'";
                                            return t.arrayBuffer()
                                        })).catch((function() {
                                            return q(M)
                                        }));
                                        if (s) return new Promise((function(t, e) {
                                            s(M, (function(e) {
                                                t(new Uint8Array(e))
                                            }), e)
                                        }))
                                    }
                                    return Promise.resolve().then((function() {
                                        return q(M)
                                    }))
                                }().then((function(e) {
                                    return WebAssembly.instantiate(e, t)
                                })).then((function(t) {
                                    return t
                                })).then(e, (function(t) {
                                    w("failed to asynchronously prepare wasm: " + t), B(t)
                                }))
                            }
                            if (U++, i.monitorRunDependencies && i.monitorRunDependencies(U), i.instantiateWasm) try {
                                return i.instantiateWasm(t, e)
                            } catch (t) {
                                w("Module.instantiateWasm callback failed with error: " + t), o(t)
                            }(g || "function" != typeof WebAssembly.instantiateStreaming || z(M) || N(M) || d || "function" != typeof fetch ? n(r) : fetch(M, {
                                credentials: "same-origin"
                            }).then((function(e) {
                                return WebAssembly.instantiateStreaming(e, t).then(r, (function(t) {
                                    return w("wasm streaming compile failed: " + t), w("falling back to ArrayBuffer instantiation"), n(r)
                                }))
                            }))).catch(o)
                        }(), i.___wasm_call_ctors = function() {
                            return (i.___wasm_call_ctors = i.asm.A).apply(null, arguments)
                        }, i._malloc = function() {
                            return (pe = i._malloc = i.asm.B).apply(null, arguments)
                        }),
                        de = i.___getTypeName = function() {
                            return (de = i.___getTypeName = i.asm.D).apply(null, arguments)
                        },
                        he = (i.__embind_initialize_bindings = function() {
                            return (i.__embind_initialize_bindings = i.asm.E).apply(null, arguments)
                        }, i._free = function() {
                            return (he = i._free = i.asm.F).apply(null, arguments)
                        }),
                        ye = i.stackSave = function() {
                            return (ye = i.stackSave = i.asm.G).apply(null, arguments)
                        },
                        ve = i.stackRestore = function() {
                            return (ve = i.stackRestore = i.asm.H).apply(null, arguments)
                        },
                        ge = i.stackAlloc = function() {
                            return (ge = i.stackAlloc = i.asm.I).apply(null, arguments)
                        },
                        me = i.___cxa_is_pointer_type = function() {
                            return (me = i.___cxa_is_pointer_type = i.asm.J).apply(null, arguments)
                        };

                    function we(t) {
                        function r() {
                            le || (le = !0, i.calledRun = !0, x || (J(D), e(i), i.onRuntimeInitialized && i.onRuntimeInitialized(), function() {
                                if (i.postRun)
                                    for ("function" == typeof i.postRun && (i.postRun = [i.postRun]); i.postRun.length;) t = i.postRun.shift(), I.unshift(t);
                                var t;
                                J(I)
                            }()))
                        }
                        t = t || l, U > 0 || (function() {
                            if (i.preRun)
                                for ("function" == typeof i.preRun && (i.preRun = [i.preRun]); i.preRun.length;) t = i.preRun.shift(), j.unshift(t);
                            var t;
                            J(j)
                        }(), U > 0 || (i.setStatus ? (i.setStatus("Running..."), setTimeout((function() {
                            setTimeout((function() {
                                i.setStatus("")
                            }), 1), r()
                        }), 1)) : r()))
                    }
                    if (i.ccall = function(t, e, r, n, o) {
                            var a = {
                                    string: t => {
                                        var e = 0;
                                        if (null != t && 0 !== t) {
                                            var r = 1 + (t.length << 2);
                                            R(t, e = ge(r), r)
                                        }
                                        return e
                                    },
                                    array: t => {
                                        var e = ge(t.length);
                                        return function(t, e) {
                                            T.set(t, e)
                                        }(t, e), e
                                    }
                                },
                                s = function(t) {
                                    return i["_" + t]
                                }(t),
                                u = [],
                                c = 0;
                            if (n)
                                for (var l = 0; l < n.length; l++) {
                                    var f = a[r[l]];
                                    f ? (0 === c && (c = ye()), u[l] = f(n[l])) : u[l] = n[l]
                                }
                            var p = s.apply(null, u);
                            return function(t) {
                                return 0 !== c && ve(c),
                                    function(t) {
                                        return "string" === e ? O(t) : "boolean" === e ? Boolean(t) : t
                                    }(t)
                            }(p)
                        }, L = function t() {
                            le || we(), le || (L = t)
                        }, i.preInit)
                        for ("function" == typeof i.preInit && (i.preInit = [i.preInit]); i.preInit.length > 0;) i.preInit.pop()();
                    return we(), t.ready
                });
                t.exports = o
            },
            851: (t, e, r) => {
                var n, o = (n = (n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0) || "/index.js", function(t) {
                    var e, o, i = void 0 !== (t = t || {}) ? t : {};
                    i.ready = new Promise((function(t, r) {
                        e = t, o = r
                    }));
                    var a, s, u, c = Object.assign({}, i),
                        l = [],
                        f = "./this.program",
                        p = (t, e) => {
                            throw e
                        },
                        d = "object" == typeof window,
                        h = "function" == typeof importScripts,
                        y = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
                        v = "";
                    if (y) {
                        var g = r(491),
                            m = r(33);
                        v = h ? m.dirname(v) + "/" : "//", a = (t, e) => (t = K(t) ? new URL(t) : m.normalize(t), g.readFileSync(t, e ? void 0 : "utf8")), u = t => {
                            var e = a(t, !0);
                            return e.buffer || (e = new Uint8Array(e)), e
                        }, s = (t, e, r) => {
                            t = K(t) ? new URL(t) : m.normalize(t), g.readFile(t, (function(t, n) {
                                t ? r(t) : e(n.buffer)
                            }))
                        }, process.argv.length > 1 && (f = process.argv[1].replace(/\\/g, "/")), l = process.argv.slice(2), process.on("uncaughtException", (function(t) {
                            if (!(t instanceof Q)) throw t
                        })), process.on("unhandledRejection", (function(t) {
                            throw t
                        })), p = (t, e) => {
                            if (V()) throw process.exitCode = t, e;
                            var r;
                            (r = e) instanceof Q || T("exiting due to exception: " + r), process.exit(t)
                        }, i.inspect = function() {
                            return "[Emscripten Module object]"
                        }
                    } else(d || h) && (h ? v = self.location.href : "undefined" != typeof document && document.currentScript && (v = document.currentScript.src), n && (v = n), v = 0 !== v.indexOf("blob:") ? v.substr(0, v.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", a = t => {
                        var e = new XMLHttpRequest;
                        return e.open("GET", t, !1), e.send(null), e.responseText
                    }, h && (u = t => {
                        var e = new XMLHttpRequest;
                        return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response)
                    }), s = (t, e, r) => {
                        var n = new XMLHttpRequest;
                        n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = () => {
                            200 == n.status || 0 == n.status && n.response ? e(n.response) : r()
                        }, n.onerror = r, n.send(null)
                    });
                    var w, b = i.print || console.log.bind(console),
                        T = i.printErr || console.warn.bind(console);
                    Object.assign(i, c), c = null, i.arguments && (l = i.arguments), i.thisProgram && (f = i.thisProgram), i.quit && (p = i.quit), i.wasmBinary && (w = i.wasmBinary);
                    var P, C = i.noExitRuntime || !0;
                    "object" != typeof WebAssembly && G("no native wasm support detected");
                    var $, _, A, k, S, x, E, O, R, F = !1,
                        W = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                    function j(t, e, r) {
                        for (var n = e + r, o = e; t[o] && !(o >= n);) ++o;
                        if (o - e > 16 && t.buffer && W) return W.decode(t.subarray(e, o));
                        for (var i = ""; e < o;) {
                            var a = t[e++];
                            if (128 & a) {
                                var s = 63 & t[e++];
                                if (192 != (224 & a)) {
                                    var u = 63 & t[e++];
                                    if ((a = 224 == (240 & a) ? (15 & a) << 12 | s << 6 | u : (7 & a) << 18 | s << 12 | u << 6 | 63 & t[e++]) < 65536) i += String.fromCharCode(a);
                                    else {
                                        var c = a - 65536;
                                        i += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                                    }
                                } else i += String.fromCharCode((31 & a) << 6 | s)
                            } else i += String.fromCharCode(a)
                        }
                        return i
                    }

                    function D(t, e) {
                        return t ? j(A, t, e) : ""
                    }

                    function I(t, e, r) {
                        return function(t, e, r, n) {
                            if (!(n > 0)) return 0;
                            for (var o = r, i = r + n - 1, a = 0; a < t.length; ++a) {
                                var s = t.charCodeAt(a);
                                if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & t.charCodeAt(++a)), s <= 127) {
                                    if (r >= i) break;
                                    e[r++] = s
                                } else if (s <= 2047) {
                                    if (r + 1 >= i) break;
                                    e[r++] = 192 | s >> 6, e[r++] = 128 | 63 & s
                                } else if (s <= 65535) {
                                    if (r + 2 >= i) break;
                                    e[r++] = 224 | s >> 12, e[r++] = 128 | s >> 6 & 63, e[r++] = 128 | 63 & s
                                } else {
                                    if (r + 3 >= i) break;
                                    e[r++] = 240 | s >> 18, e[r++] = 128 | s >> 12 & 63, e[r++] = 128 | s >> 6 & 63, e[r++] = 128 | 63 & s
                                }
                            }
                            return e[r] = 0, r - o
                        }(t, A, e, r)
                    }

                    function U(t) {
                        $ = t, i.HEAP8 = _ = new Int8Array(t), i.HEAP16 = k = new Int16Array(t), i.HEAP32 = x = new Int32Array(t), i.HEAPU8 = A = new Uint8Array(t), i.HEAPU16 = S = new Uint16Array(t), i.HEAPU32 = E = new Uint32Array(t), i.HEAPF32 = O = new Float32Array(t), i.HEAPF64 = R = new Float64Array(t)
                    }
                    i.INITIAL_MEMORY;
                    var H, L = [],
                        B = [],
                        M = [];

                    function V() {
                        return C
                    }
                    var z = 0,
                        N = null,
                        q = null;

                    function G(t) {
                        i.onAbort && i.onAbort(t), T(t = "Aborted(" + t + ")"), F = !0, t += ". Build with -sASSERTIONS for more info.";
                        var e = new WebAssembly.RuntimeError(t);
                        throw o(e), e
                    }
                    var J, X;

                    function Y(t) {
                        return t.startsWith("data:application/octet-stream;base64,")
                    }

                    function K(t) {
                        return t.startsWith("file://")
                    }

                    function Z(t) {
                        try {
                            if (t == J && w) return new Uint8Array(w);
                            if (u) return u(t);
                            throw "both async and sync fetching of the wasm failed"
                        } catch (t) {
                            G(t)
                        }
                    }

                    function Q(t) {
                        this.name = "ExitStatus", this.message = "Program terminated with exit(" + t + ")", this.status = t
                    }

                    function tt(t) {
                        for (; t.length > 0;) t.shift()(i)
                    }

                    function et(t) {
                        this.excPtr = t, this.ptr = t - 24, this.set_type = function(t) {
                            E[this.ptr + 4 >> 2] = t
                        }, this.get_type = function() {
                            return E[this.ptr + 4 >> 2]
                        }, this.set_destructor = function(t) {
                            E[this.ptr + 8 >> 2] = t
                        }, this.get_destructor = function() {
                            return E[this.ptr + 8 >> 2]
                        }, this.set_refcount = function(t) {
                            x[this.ptr >> 2] = t
                        }, this.set_caught = function(t) {
                            t = t ? 1 : 0, _[this.ptr + 12 | 0] = t
                        }, this.get_caught = function() {
                            return 0 != _[this.ptr + 12 | 0]
                        }, this.set_rethrown = function(t) {
                            t = t ? 1 : 0, _[this.ptr + 13 | 0] = t
                        }, this.get_rethrown = function() {
                            return 0 != _[this.ptr + 13 | 0]
                        }, this.init = function(t, e) {
                            this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(e), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
                        }, this.add_ref = function() {
                            var t = x[this.ptr >> 2];
                            x[this.ptr >> 2] = t + 1
                        }, this.release_ref = function() {
                            var t = x[this.ptr >> 2];
                            return x[this.ptr >> 2] = t - 1, 1 === t
                        }, this.set_adjusted_ptr = function(t) {
                            E[this.ptr + 16 >> 2] = t
                        }, this.get_adjusted_ptr = function() {
                            return E[this.ptr + 16 >> 2]
                        }, this.get_exception_ptr = function() {
                            if (ke(this.get_type())) return E[this.excPtr >> 2];
                            var t = this.get_adjusted_ptr();
                            return 0 !== t ? t : this.excPtr
                        }
                    }
                    Y(J = "libjpegturbowasm_decode.wasm") || (X = J, J = i.locateFile ? i.locateFile(X, v) : v + X);
                    var rt = {};

                    function nt(t) {
                        for (; t.length;) {
                            var e = t.pop();
                            t.pop()(e)
                        }
                    }

                    function ot(t) {
                        return this.fromWireType(x[t >> 2])
                    }
                    var it = {},
                        at = {},
                        st = {};

                    function ut(t) {
                        if (void 0 === t) return "_unknown";
                        var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                        return e >= 48 && e <= 57 ? "_" + t : t
                    }

                    function ct(t, e) {
                        return t = ut(t), new Function("body", "return function " + t + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)
                    }

                    function lt(t, e) {
                        var r = ct(e, (function(t) {
                            this.name = e, this.message = t;
                            var r = new Error(t).stack;
                            void 0 !== r && (this.stack = this.toString() + "\n" + r.replace(/^Error(:[^\n]*)?\n/, ""))
                        }));
                        return r.prototype = Object.create(t.prototype), r.prototype.constructor = r, r.prototype.toString = function() {
                            return void 0 === this.message ? this.name : this.name + ": " + this.message
                        }, r
                    }
                    var ft = void 0;

                    function pt(t) {
                        throw new ft(t)
                    }

                    function dt(t, e, r) {
                        function n(e) {
                            var n = r(e);
                            n.length !== t.length && pt("Mismatched type converter count");
                            for (var o = 0; o < t.length; ++o) wt(t[o], n[o])
                        }
                        t.forEach((function(t) {
                            st[t] = e
                        }));
                        var o = new Array(e.length),
                            i = [],
                            a = 0;
                        e.forEach(((t, e) => {
                            at.hasOwnProperty(t) ? o[e] = at[t] : (i.push(t), it.hasOwnProperty(t) || (it[t] = []), it[t].push((() => {
                                o[e] = at[t], ++a === i.length && n(o)
                            })))
                        })), 0 === i.length && n(o)
                    }

                    function ht(t) {
                        switch (t) {
                            case 1:
                                return 0;
                            case 2:
                                return 1;
                            case 4:
                                return 2;
                            case 8:
                                return 3;
                            default:
                                throw new TypeError("Unknown type size: " + t)
                        }
                    }
                    var yt = void 0;

                    function vt(t) {
                        for (var e = "", r = t; A[r];) e += yt[A[r++]];
                        return e
                    }
                    var gt = void 0;

                    function mt(t) {
                        throw new gt(t)
                    }

                    function wt(t, e, r = {}) {
                        if (!("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                        var n = e.name;
                        if (t || mt('type "' + n + '" must have a positive integer typeid pointer'), at.hasOwnProperty(t)) {
                            if (r.ignoreDuplicateRegistrations) return;
                            mt("Cannot register type '" + n + "' twice")
                        }
                        if (at[t] = e, delete st[t], it.hasOwnProperty(t)) {
                            var o = it[t];
                            delete it[t], o.forEach((t => t()))
                        }
                    }

                    function bt(t) {
                        mt(t.$$.ptrType.registeredClass.name + " instance already deleted")
                    }
                    var Tt = !1;

                    function Pt(t) {}

                    function Ct(t) {
                        t.count.value -= 1, 0 === t.count.value && function(t) {
                            t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr)
                        }(t)
                    }

                    function $t(t, e, r) {
                        if (e === r) return t;
                        if (void 0 === r.baseClass) return null;
                        var n = $t(t, e, r.baseClass);
                        return null === n ? null : r.downcast(n)
                    }
                    var _t = {};
                    var At = [];

                    function kt() {
                        for (; At.length;) {
                            var t = At.pop();
                            t.$$.deleteScheduled = !1, t.delete()
                        }
                    }
                    var St = void 0;
                    var xt = {};

                    function Et(t, e) {
                        return e.ptrType && e.ptr || pt("makeClassHandle requires ptr and ptrType"), !!e.smartPtrType != !!e.smartPtr && pt("Both smartPtrType and smartPtr must be specified"), e.count = {
                            value: 1
                        }, Ot(Object.create(t, {
                            $$: {
                                value: e
                            }
                        }))
                    }

                    function Ot(t) {
                        return "undefined" == typeof FinalizationRegistry ? (Ot = t => t, t) : (Tt = new FinalizationRegistry((t => {
                            Ct(t.$$)
                        })), Ot = t => {
                            var e = t.$$;
                            if (e.smartPtr) {
                                var r = {
                                    $$: e
                                };
                                Tt.register(t, r, t)
                            }
                            return t
                        }, Pt = t => Tt.unregister(t), Ot(t))
                    }

                    function Rt() {}

                    function Ft(t, e, r) {
                        if (void 0 === t[e].overloadTable) {
                            var n = t[e];
                            t[e] = function() {
                                return t[e].overloadTable.hasOwnProperty(arguments.length) || mt("Function '" + r + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + t[e].overloadTable + ")!"), t[e].overloadTable[arguments.length].apply(this, arguments)
                            }, t[e].overloadTable = [], t[e].overloadTable[n.argCount] = n
                        }
                    }

                    function Wt(t, e, r, n, o, i, a, s) {
                        this.name = t, this.constructor = e, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = o, this.getActualType = i, this.upcast = a, this.downcast = s, this.pureVirtualFunctions = []
                    }

                    function jt(t, e, r) {
                        for (; e !== r;) e.upcast || mt("Expected null or instance of " + r.name + ", got an instance of " + e.name), t = e.upcast(t), e = e.baseClass;
                        return t
                    }

                    function Dt(t, e) {
                        if (null === e) return this.isReference && mt("null is not a valid " + this.name), 0;
                        e.$$ || mt('Cannot pass "' + Qt(e) + '" as a ' + this.name), e.$$.ptr || mt("Cannot pass deleted object as a pointer of type " + this.name);
                        var r = e.$$.ptrType.registeredClass;
                        return jt(e.$$.ptr, r, this.registeredClass)
                    }

                    function It(t, e) {
                        var r;
                        if (null === e) return this.isReference && mt("null is not a valid " + this.name), this.isSmartPointer ? (r = this.rawConstructor(), null !== t && t.push(this.rawDestructor, r), r) : 0;
                        e.$$ || mt('Cannot pass "' + Qt(e) + '" as a ' + this.name), e.$$.ptr || mt("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && e.$$.ptrType.isConst && mt("Cannot convert argument of type " + (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) + " to parameter type " + this.name);
                        var n = e.$$.ptrType.registeredClass;
                        if (r = jt(e.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (void 0 === e.$$.smartPtr && mt("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
                            case 0:
                                e.$$.smartPtrType === this ? r = e.$$.smartPtr : mt("Cannot convert argument of type " + (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) + " to parameter type " + this.name);
                                break;
                            case 1:
                                r = e.$$.smartPtr;
                                break;
                            case 2:
                                if (e.$$.smartPtrType === this) r = e.$$.smartPtr;
                                else {
                                    var o = e.clone();
                                    r = this.rawShare(r, Zt.toHandle((function() {
                                        o.delete()
                                    }))), null !== t && t.push(this.rawDestructor, r)
                                }
                                break;
                            default:
                                mt("Unsupporting sharing policy")
                        }
                        return r
                    }

                    function Ut(t, e) {
                        if (null === e) return this.isReference && mt("null is not a valid " + this.name), 0;
                        e.$$ || mt('Cannot pass "' + Qt(e) + '" as a ' + this.name), e.$$.ptr || mt("Cannot pass deleted object as a pointer of type " + this.name), e.$$.ptrType.isConst && mt("Cannot convert argument of type " + e.$$.ptrType.name + " to parameter type " + this.name);
                        var r = e.$$.ptrType.registeredClass;
                        return jt(e.$$.ptr, r, this.registeredClass)
                    }

                    function Ht(t, e, r, n, o, i, a, s, u, c, l) {
                        this.name = t, this.registeredClass = e, this.isReference = r, this.isConst = n, this.isSmartPointer = o, this.pointeeType = i, this.sharingPolicy = a, this.rawGetPointee = s, this.rawConstructor = u, this.rawShare = c, this.rawDestructor = l, o || void 0 !== e.baseClass ? this.toWireType = It : n ? (this.toWireType = Dt, this.destructorFunction = null) : (this.toWireType = Ut, this.destructorFunction = null)
                    }
                    var Lt = [];

                    function Bt(t) {
                        var e = Lt[t];
                        return e || (t >= Lt.length && (Lt.length = t + 1), Lt[t] = e = H.get(t)), e
                    }

                    function Mt(t, e, r) {
                        return t.includes("j") ? function(t, e, r) {
                            var n = i["dynCall_" + t];
                            return r && r.length ? n.apply(null, [e].concat(r)) : n.call(null, e)
                        }(t, e, r) : Bt(e).apply(null, r)
                    }

                    function Vt(t, e) {
                        var r, n, o, i = (t = vt(t)).includes("j") ? (r = t, n = e, o = [], function() {
                            return o.length = 0, Object.assign(o, arguments), Mt(r, n, o)
                        }) : Bt(e);
                        return "function" != typeof i && mt("unknown function pointer with signature " + t + ": " + e), i
                    }
                    var zt = void 0;

                    function Nt(t) {
                        var e = Pe(t),
                            r = vt(e);
                        return Te(e), r
                    }

                    function qt(t, e) {
                        var r = [],
                            n = {};
                        throw e.forEach((function t(e) {
                            n[e] || at[e] || (st[e] ? st[e].forEach(t) : (r.push(e), n[e] = !0))
                        })), new zt(t + ": " + r.map(Nt).join([", "]))
                    }

                    function Gt(t, e) {
                        for (var r = [], n = 0; n < t; n++) r.push(E[e + 4 * n >> 2]);
                        return r
                    }

                    function Jt(t, e, r, n, o) {
                        var i = e.length;
                        i < 2 && mt("argTypes array size mismatch! Must at least get return value and 'this' types!");
                        for (var a = null !== e[1] && null !== r, s = !1, u = 1; u < e.length; ++u)
                            if (null !== e[u] && void 0 === e[u].destructorFunction) {
                                s = !0;
                                break
                            }
                        var c = "void" !== e[0].name,
                            l = "",
                            f = "";
                        for (u = 0; u < i - 2; ++u) l += (0 !== u ? ", " : "") + "arg" + u, f += (0 !== u ? ", " : "") + "arg" + u + "Wired";
                        var p = "return function " + ut(t) + "(" + l + ") {\nif (arguments.length !== " + (i - 2) + ") {\nthrowBindingError('function " + t + " called with ' + arguments.length + ' arguments, expected " + (i - 2) + " args!');\n}\n";
                        s && (p += "var destructors = [];\n");
                        var d = s ? "destructors" : "null",
                            h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                            y = [mt, n, o, nt, e[0], e[1]];
                        for (a && (p += "var thisWired = classParam.toWireType(" + d + ", this);\n"), u = 0; u < i - 2; ++u) p += "var arg" + u + "Wired = argType" + u + ".toWireType(" + d + ", arg" + u + "); // " + e[u + 2].name + "\n", h.push("argType" + u), y.push(e[u + 2]);
                        if (a && (f = "thisWired" + (f.length > 0 ? ", " : "") + f), p += (c ? "var rv = " : "") + "invoker(fn" + (f.length > 0 ? ", " : "") + f + ");\n", s) p += "runDestructors(destructors);\n";
                        else
                            for (u = a ? 1 : 2; u < e.length; ++u) {
                                var v = 1 === u ? "thisWired" : "arg" + (u - 2) + "Wired";
                                null !== e[u].destructorFunction && (p += v + "_dtor(" + v + "); // " + e[u].name + "\n", h.push(v + "_dtor"), y.push(e[u].destructorFunction))
                            }
                        return c && (p += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p += "}\n", h.push(p),
                            function(t, e) {
                                if (!(t instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof t + " which is not a function");
                                var r = ct(t.name || "unknownFunctionName", (function() {}));
                                r.prototype = t.prototype;
                                var n = new r,
                                    o = t.apply(n, e);
                                return o instanceof Object ? o : n
                            }(Function, h).apply(null, y)
                    }
                    var Xt = [],
                        Yt = [{}, {
                            value: void 0
                        }, {
                            value: null
                        }, {
                            value: !0
                        }, {
                            value: !1
                        }];

                    function Kt(t) {
                        t > 4 && 0 == --Yt[t].refcount && (Yt[t] = void 0, Xt.push(t))
                    }
                    var Zt = {
                        toValue: t => (t || mt("Cannot use deleted val. handle = " + t), Yt[t].value),
                        toHandle: t => {
                            switch (t) {
                                case void 0:
                                    return 1;
                                case null:
                                    return 2;
                                case !0:
                                    return 3;
                                case !1:
                                    return 4;
                                default:
                                    var e = Xt.length ? Xt.pop() : Yt.length;
                                    return Yt[e] = {
                                        refcount: 1,
                                        value: t
                                    }, e
                            }
                        }
                    };

                    function Qt(t) {
                        if (null === t) return "null";
                        var e = typeof t;
                        return "object" === e || "array" === e || "function" === e ? t.toString() : "" + t
                    }

                    function te(t, e) {
                        switch (e) {
                            case 2:
                                return function(t) {
                                    return this.fromWireType(O[t >> 2])
                                };
                            case 3:
                                return function(t) {
                                    return this.fromWireType(R[t >> 3])
                                };
                            default:
                                throw new TypeError("Unknown float type: " + t)
                        }
                    }

                    function ee(t, e, r) {
                        switch (e) {
                            case 0:
                                return r ? function(t) {
                                    return _[t]
                                } : function(t) {
                                    return A[t]
                                };
                            case 1:
                                return r ? function(t) {
                                    return k[t >> 1]
                                } : function(t) {
                                    return S[t >> 1]
                                };
                            case 2:
                                return r ? function(t) {
                                    return x[t >> 2]
                                } : function(t) {
                                    return E[t >> 2]
                                };
                            default:
                                throw new TypeError("Unknown integer type: " + t)
                        }
                    }
                    var re = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

                    function ne(t, e) {
                        for (var r = t, n = r >> 1, o = n + e / 2; !(n >= o) && S[n];) ++n;
                        if ((r = n << 1) - t > 32 && re) return re.decode(A.subarray(t, r));
                        for (var i = "", a = 0; !(a >= e / 2); ++a) {
                            var s = k[t + 2 * a >> 1];
                            if (0 == s) break;
                            i += String.fromCharCode(s)
                        }
                        return i
                    }

                    function oe(t, e, r) {
                        if (void 0 === r && (r = 2147483647), r < 2) return 0;
                        for (var n = e, o = (r -= 2) < 2 * t.length ? r / 2 : t.length, i = 0; i < o; ++i) {
                            var a = t.charCodeAt(i);
                            k[e >> 1] = a, e += 2
                        }
                        return k[e >> 1] = 0, e - n
                    }

                    function ie(t) {
                        return 2 * t.length
                    }

                    function ae(t, e) {
                        for (var r = 0, n = ""; !(r >= e / 4);) {
                            var o = x[t + 4 * r >> 2];
                            if (0 == o) break;
                            if (++r, o >= 65536) {
                                var i = o - 65536;
                                n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                            } else n += String.fromCharCode(o)
                        }
                        return n
                    }

                    function se(t, e, r) {
                        if (void 0 === r && (r = 2147483647), r < 4) return 0;
                        for (var n = e, o = n + r - 4, i = 0; i < t.length; ++i) {
                            var a = t.charCodeAt(i);
                            if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & t.charCodeAt(++i)), x[e >> 2] = a, (e += 4) + 4 > o) break
                        }
                        return x[e >> 2] = 0, e - n
                    }

                    function ue(t) {
                        for (var e = 0, r = 0; r < t.length; ++r) {
                            var n = t.charCodeAt(r);
                            n >= 55296 && n <= 57343 && ++r, e += 4
                        }
                        return e
                    }
                    var ce = {};

                    function le() {
                        return "object" == typeof globalThis ? globalThis : Function("return this")()
                    }

                    function fe(t, e) {
                        var r = at[t];
                        return void 0 === r && mt(e + " has unknown type " + Nt(t)), r
                    }
                    var pe = {};

                    function de(t) {
                        try {
                            return P.grow(t - $.byteLength + 65535 >>> 16), U(P.buffer), 1
                        } catch (t) {}
                    }
                    var he = {};

                    function ye() {
                        if (!ye.strings) {
                            var t = {
                                USER: "web_user",
                                LOGNAME: "web_user",
                                PATH: "/",
                                PWD: "/",
                                HOME: "/home/web_user",
                                LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                                _: f || "./this.program"
                            };
                            for (var e in he) void 0 === he[e] ? delete t[e] : t[e] = he[e];
                            var r = [];
                            for (var e in t) r.push(e + "=" + t[e]);
                            ye.strings = r
                        }
                        return ye.strings
                    }
                    var ve = [null, [],
                        []
                    ];

                    function ge(t, e) {
                        var r = ve[t];
                        0 === e || 10 === e ? ((1 === t ? b : T)(j(r, 0)), r.length = 0) : r.push(e)
                    }
                    ft = i.InternalError = lt(Error, "InternalError"),
                        function() {
                            for (var t = new Array(256), e = 0; e < 256; ++e) t[e] = String.fromCharCode(e);
                            yt = t
                        }(), gt = i.BindingError = lt(Error, "BindingError"), Rt.prototype.isAliasOf = function(t) {
                            if (!(this instanceof Rt)) return !1;
                            if (!(t instanceof Rt)) return !1;
                            for (var e = this.$$.ptrType.registeredClass, r = this.$$.ptr, n = t.$$.ptrType.registeredClass, o = t.$$.ptr; e.baseClass;) r = e.upcast(r), e = e.baseClass;
                            for (; n.baseClass;) o = n.upcast(o), n = n.baseClass;
                            return e === n && r === o
                        }, Rt.prototype.clone = function() {
                            if (this.$$.ptr || bt(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                            var t, e = Ot(Object.create(Object.getPrototypeOf(this), {
                                $$: {
                                    value: (t = this.$$, {
                                        count: t.count,
                                        deleteScheduled: t.deleteScheduled,
                                        preservePointerOnDelete: t.preservePointerOnDelete,
                                        ptr: t.ptr,
                                        ptrType: t.ptrType,
                                        smartPtr: t.smartPtr,
                                        smartPtrType: t.smartPtrType
                                    })
                                }
                            }));
                            return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e
                        }, Rt.prototype.delete = function() {
                            this.$$.ptr || bt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && mt("Object already scheduled for deletion"), Pt(this), Ct(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0)
                        }, Rt.prototype.isDeleted = function() {
                            return !this.$$.ptr
                        }, Rt.prototype.deleteLater = function() {
                            return this.$$.ptr || bt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && mt("Object already scheduled for deletion"), At.push(this), 1 === At.length && St && St(kt), this.$$.deleteScheduled = !0, this
                        }, i.getInheritedInstanceCount = function() {
                            return Object.keys(xt).length
                        }, i.getLiveInheritedInstances = function() {
                            var t = [];
                            for (var e in xt) xt.hasOwnProperty(e) && t.push(xt[e]);
                            return t
                        }, i.flushPendingDeletes = kt, i.setDelayFunction = function(t) {
                            St = t, At.length && St && St(kt)
                        }, Ht.prototype.getPointee = function(t) {
                            return this.rawGetPointee && (t = this.rawGetPointee(t)), t
                        }, Ht.prototype.destructor = function(t) {
                            this.rawDestructor && this.rawDestructor(t)
                        }, Ht.prototype.argPackAdvance = 8, Ht.prototype.readValueFromPointer = ot, Ht.prototype.deleteObject = function(t) {
                            null !== t && t.delete()
                        }, Ht.prototype.fromWireType = function(t) {
                            var e = this.getPointee(t);
                            if (!e) return this.destructor(t), null;
                            var r = function(t, e) {
                                return e = function(t, e) {
                                    for (void 0 === e && mt("ptr should not be undefined"); t.baseClass;) e = t.upcast(e), t = t.baseClass;
                                    return e
                                }(t, e), xt[e]
                            }(this.registeredClass, e);
                            if (void 0 !== r) {
                                if (0 === r.$$.count.value) return r.$$.ptr = e, r.$$.smartPtr = t, r.clone();
                                var n = r.clone();
                                return this.destructor(t), n
                            }

                            function o() {
                                return this.isSmartPointer ? Et(this.registeredClass.instancePrototype, {
                                    ptrType: this.pointeeType,
                                    ptr: e,
                                    smartPtrType: this,
                                    smartPtr: t
                                }) : Et(this.registeredClass.instancePrototype, {
                                    ptrType: this,
                                    ptr: t
                                })
                            }
                            var i, a = this.registeredClass.getActualType(e),
                                s = _t[a];
                            if (!s) return o.call(this);
                            i = this.isConst ? s.constPointerType : s.pointerType;
                            var u = $t(e, this.registeredClass, i.registeredClass);
                            return null === u ? o.call(this) : this.isSmartPointer ? Et(i.registeredClass.instancePrototype, {
                                ptrType: i,
                                ptr: u,
                                smartPtrType: this,
                                smartPtr: t
                            }) : Et(i.registeredClass.instancePrototype, {
                                ptrType: i,
                                ptr: u
                            })
                        }, zt = i.UnboundTypeError = lt(Error, "UnboundTypeError"), i.count_emval_handles = function() {
                            for (var t = 0, e = 5; e < Yt.length; ++e) void 0 !== Yt[e] && ++t;
                            return t
                        }, i.get_first_emval = function() {
                            for (var t = 5; t < Yt.length; ++t)
                                if (void 0 !== Yt[t]) return Yt[t];
                            return null
                        };
                    var me, we = {
                            g: function(t, e, r) {
                                throw new et(t).init(e, r), t
                            },
                            A: function(t) {
                                var e = rt[t];
                                delete rt[t];
                                var r = e.rawConstructor,
                                    n = e.rawDestructor,
                                    o = e.fields;
                                dt([t], o.map((t => t.getterReturnType)).concat(o.map((t => t.setterArgumentType))), (t => {
                                    var i = {};
                                    return o.forEach(((e, r) => {
                                        var n = e.fieldName,
                                            a = t[r],
                                            s = e.getter,
                                            u = e.getterContext,
                                            c = t[r + o.length],
                                            l = e.setter,
                                            f = e.setterContext;
                                        i[n] = {
                                            read: t => a.fromWireType(s(u, t)),
                                            write: (t, e) => {
                                                var r = [];
                                                l(f, t, c.toWireType(r, e)), nt(r)
                                            }
                                        }
                                    })), [{
                                        name: e.name,
                                        fromWireType: function(t) {
                                            var e = {};
                                            for (var r in i) e[r] = i[r].read(t);
                                            return n(t), e
                                        },
                                        toWireType: function(t, e) {
                                            for (var o in i)
                                                if (!(o in e)) throw new TypeError('Missing field:  "' + o + '"');
                                            var a = r();
                                            for (o in i) i[o].write(a, e[o]);
                                            return null !== t && t.push(n, a), a
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: ot,
                                        destructorFunction: n
                                    }]
                                }))
                            },
                            w: function(t, e, r, n, o) {},
                            F: function(t, e, r, n, o) {
                                var i = ht(r);
                                wt(t, {
                                    name: e = vt(e),
                                    fromWireType: function(t) {
                                        return !!t
                                    },
                                    toWireType: function(t, e) {
                                        return e ? n : o
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: function(t) {
                                        var n;
                                        if (1 === r) n = _;
                                        else if (2 === r) n = k;
                                        else {
                                            if (4 !== r) throw new TypeError("Unknown boolean type size: " + e);
                                            n = x
                                        }
                                        return this.fromWireType(n[t >> i])
                                    },
                                    destructorFunction: null
                                })
                            },
                            u: function(t, e, r, n, o, a, s, u, c, l, f, p, d) {
                                f = vt(f), a = Vt(o, a), u && (u = Vt(s, u)), l && (l = Vt(c, l)), d = Vt(p, d);
                                var h = ut(f);
                                ! function(t, e, r) {
                                    i.hasOwnProperty(t) ? (mt("Cannot register public name '" + t + "' twice"), Ft(i, t, t), i.hasOwnProperty(r) && mt("Cannot register multiple overloads of a function with the same number of arguments (" + r + ")!"), i[t].overloadTable[r] = e) : i[t] = e
                                }(h, (function() {
                                    qt("Cannot construct " + f + " due to unbound types", [n])
                                })), dt([t, e, r], n ? [n] : [], (function(e) {
                                    var r, o;
                                    e = e[0], o = n ? (r = e.registeredClass).instancePrototype : Rt.prototype;
                                    var s = ct(h, (function() {
                                            if (Object.getPrototypeOf(this) !== c) throw new gt("Use 'new' to construct " + f);
                                            if (void 0 === p.constructor_body) throw new gt(f + " has no accessible constructor");
                                            var t = p.constructor_body[arguments.length];
                                            if (void 0 === t) throw new gt("Tried to invoke ctor of " + f + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(p.constructor_body).toString() + ") parameters instead!");
                                            return t.apply(this, arguments)
                                        })),
                                        c = Object.create(o, {
                                            constructor: {
                                                value: s
                                            }
                                        });
                                    s.prototype = c;
                                    var p = new Wt(f, s, c, d, r, a, u, l),
                                        y = new Ht(f, p, !0, !1, !1),
                                        v = new Ht(f + "*", p, !1, !1, !1),
                                        g = new Ht(f + " const*", p, !1, !0, !1);
                                    return _t[t] = {
                                            pointerType: v,
                                            constPointerType: g
                                        },
                                        function(t, e, r) {
                                            i.hasOwnProperty(t) || pt("Replacing nonexistant public symbol"), i[t].overloadTable, i[t] = e, i[t].argCount = r
                                        }(h, s), [y, v, g]
                                }))
                            },
                            t: function(t, e, r, n, o, i) {
                                e > 0 || G(undefined);
                                var a = Gt(e, r);
                                o = Vt(n, o), dt([], [t], (function(t) {
                                    var r = "constructor " + (t = t[0]).name;
                                    if (void 0 === t.registeredClass.constructor_body && (t.registeredClass.constructor_body = []), void 0 !== t.registeredClass.constructor_body[e - 1]) throw new gt("Cannot register multiple constructors with identical number of parameters (" + (e - 1) + ") for class '" + t.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                                    return t.registeredClass.constructor_body[e - 1] = () => {
                                        qt("Cannot construct " + t.name + " due to unbound types", a)
                                    }, dt([], a, (function(n) {
                                        return n.splice(1, 0, null), t.registeredClass.constructor_body[e - 1] = Jt(r, n, null, o, i), []
                                    })), []
                                }))
                            },
                            c: function(t, e, r, n, o, i, a, s) {
                                var u = Gt(r, n);
                                e = vt(e), i = Vt(o, i), dt([], [t], (function(t) {
                                    var n = (t = t[0]).name + "." + e;

                                    function o() {
                                        qt("Cannot call " + n + " due to unbound types", u)
                                    }
                                    e.startsWith("@@") && (e = Symbol[e.substring(2)]), s && t.registeredClass.pureVirtualFunctions.push(e);
                                    var c = t.registeredClass.instancePrototype,
                                        l = c[e];
                                    return void 0 === l || void 0 === l.overloadTable && l.className !== t.name && l.argCount === r - 2 ? (o.argCount = r - 2, o.className = t.name, c[e] = o) : (Ft(c, e, n), c[e].overloadTable[r - 2] = o), dt([], u, (function(o) {
                                        var s = Jt(n, o, t, i, a);
                                        return void 0 === c[e].overloadTable ? (s.argCount = r - 2, c[e] = s) : c[e].overloadTable[r - 2] = s, []
                                    })), []
                                }))
                            },
                            E: function(t, e) {
                                wt(t, {
                                    name: e = vt(e),
                                    fromWireType: function(t) {
                                        var e = Zt.toValue(t);
                                        return Kt(t), e
                                    },
                                    toWireType: function(t, e) {
                                        return Zt.toHandle(e)
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: ot,
                                    destructorFunction: null
                                })
                            },
                            m: function(t, e, r) {
                                var n = ht(r);
                                wt(t, {
                                    name: e = vt(e),
                                    fromWireType: function(t) {
                                        return t
                                    },
                                    toWireType: function(t, e) {
                                        return e
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: te(e, n),
                                    destructorFunction: null
                                })
                            },
                            b: function(t, e, r, n, o) {
                                e = vt(e), -1 === o && (o = 4294967295);
                                var i = ht(r),
                                    a = t => t;
                                if (0 === n) {
                                    var s = 32 - 8 * r;
                                    a = t => t << s >>> s
                                }
                                var u = e.includes("unsigned");
                                wt(t, {
                                    name: e,
                                    fromWireType: a,
                                    toWireType: u ? function(t, e) {
                                        return this.name, e >>> 0
                                    } : function(t, e) {
                                        return this.name, e
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: ee(e, i, 0 !== n),
                                    destructorFunction: null
                                })
                            },
                            a: function(t, e, r) {
                                var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];

                                function o(t) {
                                    var e = E,
                                        r = e[t >>= 2],
                                        o = e[t + 1];
                                    return new n($, o, r)
                                }
                                wt(t, {
                                    name: r = vt(r),
                                    fromWireType: o,
                                    argPackAdvance: 8,
                                    readValueFromPointer: o
                                }, {
                                    ignoreDuplicateRegistrations: !0
                                })
                            },
                            l: function(t, e) {
                                var r = "std::string" === (e = vt(e));
                                wt(t, {
                                    name: e,
                                    fromWireType: function(t) {
                                        var e, n = E[t >> 2],
                                            o = t + 4;
                                        if (r)
                                            for (var i = o, a = 0; a <= n; ++a) {
                                                var s = o + a;
                                                if (a == n || 0 == A[s]) {
                                                    var u = D(i, s - i);
                                                    void 0 === e ? e = u : (e += String.fromCharCode(0), e += u), i = s + 1
                                                }
                                            } else {
                                                var c = new Array(n);
                                                for (a = 0; a < n; ++a) c[a] = String.fromCharCode(A[o + a]);
                                                e = c.join("")
                                            }
                                        return Te(t), e
                                    },
                                    toWireType: function(t, e) {
                                        var n;
                                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                        var o = "string" == typeof e;
                                        o || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || mt("Cannot pass non-string to std::string"), n = r && o ? function(t) {
                                            for (var e = 0, r = 0; r < t.length; ++r) {
                                                var n = t.charCodeAt(r);
                                                n <= 127 ? e++ : n <= 2047 ? e += 2 : n >= 55296 && n <= 57343 ? (e += 4, ++r) : e += 3
                                            }
                                            return e
                                        }(e) : e.length;
                                        var i = be(4 + n + 1),
                                            a = i + 4;
                                        if (E[i >> 2] = n, r && o) I(e, a, n + 1);
                                        else if (o)
                                            for (var s = 0; s < n; ++s) {
                                                var u = e.charCodeAt(s);
                                                u > 255 && (Te(a), mt("String has UTF-16 code units that do not fit in 8 bits")), A[a + s] = u
                                            } else
                                                for (s = 0; s < n; ++s) A[a + s] = e[s];
                                        return null !== t && t.push(Te, i), i
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: ot,
                                    destructorFunction: function(t) {
                                        Te(t)
                                    }
                                })
                            },
                            h: function(t, e, r) {
                                var n, o, i, a, s;
                                r = vt(r), 2 === e ? (n = ne, o = oe, a = ie, i = () => S, s = 1) : 4 === e && (n = ae, o = se, a = ue, i = () => E, s = 2), wt(t, {
                                    name: r,
                                    fromWireType: function(t) {
                                        for (var r, o = E[t >> 2], a = i(), u = t + 4, c = 0; c <= o; ++c) {
                                            var l = t + 4 + c * e;
                                            if (c == o || 0 == a[l >> s]) {
                                                var f = n(u, l - u);
                                                void 0 === r ? r = f : (r += String.fromCharCode(0), r += f), u = l + e
                                            }
                                        }
                                        return Te(t), r
                                    },
                                    toWireType: function(t, n) {
                                        "string" != typeof n && mt("Cannot pass non-string to C++ string type " + r);
                                        var i = a(n),
                                            u = be(4 + i + e);
                                        return E[u >> 2] = i >> s, o(n, u + 4, i + e), null !== t && t.push(Te, u), u
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: ot,
                                    destructorFunction: function(t) {
                                        Te(t)
                                    }
                                })
                            },
                            J: function(t, e, r, n, o, i) {
                                rt[t] = {
                                    name: vt(e),
                                    rawConstructor: Vt(r, n),
                                    rawDestructor: Vt(o, i),
                                    fields: []
                                }
                            },
                            d: function(t, e, r, n, o, i, a, s, u, c) {
                                rt[t].fields.push({
                                    fieldName: vt(e),
                                    getterReturnType: r,
                                    getter: Vt(n, o),
                                    getterContext: i,
                                    setterArgumentType: a,
                                    setter: Vt(s, u),
                                    setterContext: c
                                })
                            },
                            G: function(t, e) {
                                wt(t, {
                                    isVoid: !0,
                                    name: e = vt(e),
                                    argPackAdvance: 0,
                                    fromWireType: function() {},
                                    toWireType: function(t, e) {}
                                })
                            },
                            x: function() {
                                throw 1 / 0
                            },
                            i: Kt,
                            r: function(t) {
                                return 0 === t ? Zt.toHandle(le()) : (t = void 0 === (r = ce[e = t]) ? vt(e) : r, Zt.toHandle(le()[t]));
                                var e, r
                            },
                            p: function(t) {
                                t > 4 && (Yt[t].refcount += 1)
                            },
                            q: function(t, e, r, n) {
                                t = Zt.toValue(t);
                                var o = pe[e];
                                return o || (o = function(t) {
                                    for (var e = "", r = 0; r < t; ++r) e += (0 !== r ? ", " : "") + "arg" + r;
                                    var n = "return function emval_allocator_" + t + "(constructor, argTypes, args) {\n  var HEAPU32 = getMemory();\n";
                                    for (r = 0; r < t; ++r) n += "var argType" + r + " = requireRegisteredType(HEAPU32[((argTypes)>>2)], 'parameter " + r + "');\nvar arg" + r + " = argType" + r + ".readValueFromPointer(args);\nargs += argType" + r + "['argPackAdvance'];\nargTypes += 4;\n";
                                    return n += "var obj = new constructor(" + e + ");\nreturn valueToHandle(obj);\n}\n", new Function("requireRegisteredType", "Module", "valueToHandle", "getMemory", n)(fe, i, Zt.toHandle, (() => E))
                                }(e), pe[e] = o), o(t, r, n)
                            },
                            s: function(t, e) {
                                var r = (t = fe(t, "_emval_take_value")).readValueFromPointer(e);
                                return Zt.toHandle(r)
                            },
                            j: function() {
                                G("")
                            },
                            D: function(t, e, r) {
                                A.copyWithin(t, e, e + r)
                            },
                            y: function(t) {
                                var e, r = A.length,
                                    n = 2147483648;
                                if ((t >>>= 0) > n) return !1;
                                for (var o = 1; o <= 4; o *= 2) {
                                    var i = r * (1 + .2 / o);
                                    if (i = Math.min(i, t + 100663296), de(Math.min(n, (e = Math.max(t, i)) + (65536 - e % 65536) % 65536))) return !0
                                }
                                return !1
                            },
                            z: function(t, e) {
                                var r = 0;
                                return ye().forEach((function(n, o) {
                                    var i = e + r;
                                    E[t + 4 * o >> 2] = i,
                                        function(t, e) {
                                            for (var r = 0; r < t.length; ++r) _[e++ | 0] = t.charCodeAt(r);
                                            _[e | 0] = 0
                                        }(n, i), r += n.length + 1
                                })), 0
                            },
                            B: function(t, e) {
                                var r = ye();
                                E[t >> 2] = r.length;
                                var n = 0;
                                return r.forEach((function(t) {
                                    n += t.length + 1
                                })), E[e >> 2] = n, 0
                            },
                            I: function(t, e) {
                                var r;
                                r = t, V() || (i.onExit && i.onExit(r), F = !0), p(r, new Q(r))
                            },
                            C: function(t) {
                                return 52
                            },
                            v: function(t, e, r, n, o) {
                                return 70
                            },
                            k: function(t, e, r, n) {
                                for (var o = 0, i = 0; i < r; i++) {
                                    var a = E[e >> 2],
                                        s = E[e + 4 >> 2];
                                    e += 8;
                                    for (var u = 0; u < s; u++) ge(t, A[a + u]);
                                    o += s
                                }
                                return E[n >> 2] = o, 0
                            },
                            o: function(t, e) {
                                var r = $e();
                                try {
                                    return Bt(t)(e)
                                } catch (t) {
                                    if (_e(r), t !== t + 0) throw t;
                                    Ce(1, 0)
                                }
                            },
                            n: function(t, e, r) {
                                var n = $e();
                                try {
                                    return Bt(t)(e, r)
                                } catch (t) {
                                    if (_e(n), t !== t + 0) throw t;
                                    Ce(1, 0)
                                }
                            },
                            H: function(t, e, r, n) {
                                var o = $e();
                                try {
                                    return Bt(t)(e, r, n)
                                } catch (t) {
                                    if (_e(o), t !== t + 0) throw t;
                                    Ce(1, 0)
                                }
                            },
                            f: function(t, e) {
                                var r = $e();
                                try {
                                    Bt(t)(e)
                                } catch (t) {
                                    if (_e(r), t !== t + 0) throw t;
                                    Ce(1, 0)
                                }
                            },
                            e: function(t, e, r, n) {
                                var o = $e();
                                try {
                                    Bt(t)(e, r, n)
                                } catch (t) {
                                    if (_e(o), t !== t + 0) throw t;
                                    Ce(1, 0)
                                }
                            }
                        },
                        be = (function() {
                            var t = {
                                a: we
                            };

                            function e(t, e) {
                                var r, n = t.exports;
                                i.asm = n, U((P = i.asm.K).buffer), H = i.asm.M, r = i.asm.L, B.unshift(r),
                                    function() {
                                        if (z--, i.monitorRunDependencies && i.monitorRunDependencies(z), 0 == z && (null !== N && (clearInterval(N), N = null), q)) {
                                            var t = q;
                                            q = null, t()
                                        }
                                    }()
                            }

                            function r(t) {
                                e(t.instance)
                            }

                            function n(e) {
                                return function() {
                                    if (!w && (d || h)) {
                                        if ("function" == typeof fetch && !K(J)) return fetch(J, {
                                            credentials: "same-origin"
                                        }).then((function(t) {
                                            if (!t.ok) throw "failed to load wasm binary file at '" + J + "'";
                                            return t.arrayBuffer()
                                        })).catch((function() {
                                            return Z(J)
                                        }));
                                        if (s) return new Promise((function(t, e) {
                                            s(J, (function(e) {
                                                t(new Uint8Array(e))
                                            }), e)
                                        }))
                                    }
                                    return Promise.resolve().then((function() {
                                        return Z(J)
                                    }))
                                }().then((function(e) {
                                    return WebAssembly.instantiate(e, t)
                                })).then((function(t) {
                                    return t
                                })).then(e, (function(t) {
                                    T("failed to asynchronously prepare wasm: " + t), G(t)
                                }))
                            }
                            if (z++, i.monitorRunDependencies && i.monitorRunDependencies(z), i.instantiateWasm) try {
                                return i.instantiateWasm(t, e)
                            } catch (t) {
                                T("Module.instantiateWasm callback failed with error: " + t), o(t)
                            }(w || "function" != typeof WebAssembly.instantiateStreaming || Y(J) || K(J) || y || "function" != typeof fetch ? n(r) : fetch(J, {
                                credentials: "same-origin"
                            }).then((function(e) {
                                return WebAssembly.instantiateStreaming(e, t).then(r, (function(t) {
                                    return T("wasm streaming compile failed: " + t), T("falling back to ArrayBuffer instantiation"), n(r)
                                }))
                            }))).catch(o)
                        }(), i.___wasm_call_ctors = function() {
                            return (i.___wasm_call_ctors = i.asm.L).apply(null, arguments)
                        }, i._malloc = function() {
                            return (be = i._malloc = i.asm.N).apply(null, arguments)
                        }),
                        Te = i._free = function() {
                            return (Te = i._free = i.asm.O).apply(null, arguments)
                        },
                        Pe = i.___getTypeName = function() {
                            return (Pe = i.___getTypeName = i.asm.P).apply(null, arguments)
                        },
                        Ce = (i.__embind_initialize_bindings = function() {
                            return (i.__embind_initialize_bindings = i.asm.Q).apply(null, arguments)
                        }, i._setThrew = function() {
                            return (Ce = i._setThrew = i.asm.R).apply(null, arguments)
                        }),
                        $e = i.stackSave = function() {
                            return ($e = i.stackSave = i.asm.S).apply(null, arguments)
                        },
                        _e = i.stackRestore = function() {
                            return (_e = i.stackRestore = i.asm.T).apply(null, arguments)
                        },
                        Ae = i.stackAlloc = function() {
                            return (Ae = i.stackAlloc = i.asm.U).apply(null, arguments)
                        },
                        ke = i.___cxa_is_pointer_type = function() {
                            return (ke = i.___cxa_is_pointer_type = i.asm.V).apply(null, arguments)
                        };

                    function Se(t) {
                        function r() {
                            me || (me = !0, i.calledRun = !0, F || (tt(B), e(i), i.onRuntimeInitialized && i.onRuntimeInitialized(), function() {
                                if (i.postRun)
                                    for ("function" == typeof i.postRun && (i.postRun = [i.postRun]); i.postRun.length;) t = i.postRun.shift(), M.unshift(t);
                                var t;
                                tt(M)
                            }()))
                        }
                        t = t || l, z > 0 || (function() {
                            if (i.preRun)
                                for ("function" == typeof i.preRun && (i.preRun = [i.preRun]); i.preRun.length;) t = i.preRun.shift(), L.unshift(t);
                            var t;
                            tt(L)
                        }(), z > 0 || (i.setStatus ? (i.setStatus("Running..."), setTimeout((function() {
                            setTimeout((function() {
                                i.setStatus("")
                            }), 1), r()
                        }), 1)) : r()))
                    }
                    if (i.dynCall_jiji = function() {
                            return (i.dynCall_jiji = i.asm.W).apply(null, arguments)
                        }, i.ccall = function(t, e, r, n, o) {
                            var a = {
                                    string: t => {
                                        var e = 0;
                                        if (null != t && 0 !== t) {
                                            var r = 1 + (t.length << 2);
                                            I(t, e = Ae(r), r)
                                        }
                                        return e
                                    },
                                    array: t => {
                                        var e = Ae(t.length);
                                        return function(t, e) {
                                            _.set(t, e)
                                        }(t, e), e
                                    }
                                },
                                s = function(t) {
                                    return i["_" + t]
                                }(t),
                                u = [],
                                c = 0;
                            if (n)
                                for (var l = 0; l < n.length; l++) {
                                    var f = a[r[l]];
                                    f ? (0 === c && (c = $e()), u[l] = f(n[l])) : u[l] = n[l]
                                }
                            var p = s.apply(null, u);
                            return function(t) {
                                return 0 !== c && _e(c),
                                    function(t) {
                                        return "string" === e ? D(t) : "boolean" === e ? Boolean(t) : t
                                    }(t)
                            }(p)
                        }, q = function t() {
                            me || Se(), me || (q = t)
                        }, i.preInit)
                        for ("function" == typeof i.preInit && (i.preInit = [i.preInit]); i.preInit.length > 0;) i.preInit.pop()();
                    return Se(), t.ready
                });
                t.exports = o
            },
            272: (t, e, r) => {
                var n, o = (n = (n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0) || "/index.js", function(t) {
                    var e, o, i = void 0 !== (t = t || {}) ? t : {};
                    i.ready = new Promise((function(t, r) {
                        e = t, o = r
                    }));
                    var a, s, u, c = Object.assign({}, i),
                        l = [],
                        f = "./this.program",
                        p = "object" == typeof window,
                        d = "function" == typeof importScripts,
                        h = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
                        y = "";
                    if (h) {
                        var v = r(261),
                            g = r(926);
                        y = d ? g.dirname(y) + "/" : "//", a = (t, e) => (t = J(t) ? new URL(t) : g.normalize(t), v.readFileSync(t, e ? void 0 : "utf8")), u = t => {
                            var e = a(t, !0);
                            return e.buffer || (e = new Uint8Array(e)), e
                        }, s = (t, e, r) => {
                            t = J(t) ? new URL(t) : g.normalize(t), v.readFile(t, (function(t, n) {
                                t ? r(t) : e(n.buffer)
                            }))
                        }, process.argv.length > 1 && (f = process.argv[1].replace(/\\/g, "/")), l = process.argv.slice(2), process.on("uncaughtException", (function(t) {
                            if (!(t instanceof Y)) throw t
                        })), process.on("unhandledRejection", (function(t) {
                            throw t
                        })), i.inspect = function() {
                            return "[Emscripten Module object]"
                        }
                    } else(p || d) && (d ? y = self.location.href : "undefined" != typeof document && document.currentScript && (y = document.currentScript.src), n && (y = n), y = 0 !== y.indexOf("blob:") ? y.substr(0, y.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", a = t => {
                        var e = new XMLHttpRequest;
                        return e.open("GET", t, !1), e.send(null), e.responseText
                    }, d && (u = t => {
                        var e = new XMLHttpRequest;
                        return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response)
                    }), s = (t, e, r) => {
                        var n = new XMLHttpRequest;
                        n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = () => {
                            200 == n.status || 0 == n.status && n.response ? e(n.response) : r()
                        }, n.onerror = r, n.send(null)
                    });
                    var m, w, b = i.print || console.log.bind(console),
                        T = i.printErr || console.warn.bind(console);
                    Object.assign(i, c), c = null, i.arguments && (l = i.arguments), i.thisProgram && (f = i.thisProgram), i.quit && i.quit, i.wasmBinary && (m = i.wasmBinary), i.noExitRuntime, "object" != typeof WebAssembly && z("no native wasm support detected");
                    var P, C, $, _, A, k, S, x, E, O = !1,
                        R = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                    function F(t, e, r) {
                        for (var n = e + r, o = e; t[o] && !(o >= n);) ++o;
                        if (o - e > 16 && t.buffer && R) return R.decode(t.subarray(e, o));
                        for (var i = ""; e < o;) {
                            var a = t[e++];
                            if (128 & a) {
                                var s = 63 & t[e++];
                                if (192 != (224 & a)) {
                                    var u = 63 & t[e++];
                                    if ((a = 224 == (240 & a) ? (15 & a) << 12 | s << 6 | u : (7 & a) << 18 | s << 12 | u << 6 | 63 & t[e++]) < 65536) i += String.fromCharCode(a);
                                    else {
                                        var c = a - 65536;
                                        i += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                                    }
                                } else i += String.fromCharCode((31 & a) << 6 | s)
                            } else i += String.fromCharCode(a)
                        }
                        return i
                    }

                    function W(t, e) {
                        return t ? F($, t, e) : ""
                    }

                    function j(t, e, r) {
                        return function(t, e, r, n) {
                            if (!(n > 0)) return 0;
                            for (var o = r, i = r + n - 1, a = 0; a < t.length; ++a) {
                                var s = t.charCodeAt(a);
                                if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & t.charCodeAt(++a)), s <= 127) {
                                    if (r >= i) break;
                                    e[r++] = s
                                } else if (s <= 2047) {
                                    if (r + 1 >= i) break;
                                    e[r++] = 192 | s >> 6, e[r++] = 128 | 63 & s
                                } else if (s <= 65535) {
                                    if (r + 2 >= i) break;
                                    e[r++] = 224 | s >> 12, e[r++] = 128 | s >> 6 & 63, e[r++] = 128 | 63 & s
                                } else {
                                    if (r + 3 >= i) break;
                                    e[r++] = 240 | s >> 18, e[r++] = 128 | s >> 12 & 63, e[r++] = 128 | s >> 6 & 63, e[r++] = 128 | 63 & s
                                }
                            }
                            return e[r] = 0, r - o
                        }(t, $, e, r)
                    }

                    function D(t) {
                        P = t, i.HEAP8 = C = new Int8Array(t), i.HEAP16 = _ = new Int16Array(t), i.HEAP32 = k = new Int32Array(t), i.HEAPU8 = $ = new Uint8Array(t), i.HEAPU16 = A = new Uint16Array(t), i.HEAPU32 = S = new Uint32Array(t), i.HEAPF32 = x = new Float32Array(t), i.HEAPF64 = E = new Float64Array(t)
                    }
                    i.INITIAL_MEMORY;
                    var I, U = [],
                        H = [],
                        L = [],
                        B = 0,
                        M = null,
                        V = null;

                    function z(t) {
                        i.onAbort && i.onAbort(t), T(t = "Aborted(" + t + ")"), O = !0, t += ". Build with -sASSERTIONS for more info.";
                        var e = new WebAssembly.RuntimeError(t);
                        throw o(e), e
                    }
                    var N, q;

                    function G(t) {
                        return t.startsWith("data:application/octet-stream;base64,")
                    }

                    function J(t) {
                        return t.startsWith("file://")
                    }

                    function X(t) {
                        try {
                            if (t == N && m) return new Uint8Array(m);
                            if (u) return u(t);
                            throw "both async and sync fetching of the wasm failed"
                        } catch (t) {
                            z(t)
                        }
                    }

                    function Y(t) {
                        this.name = "ExitStatus", this.message = "Program terminated with exit(" + t + ")", this.status = t
                    }

                    function K(t) {
                        for (; t.length > 0;) t.shift()(i)
                    }

                    function Z(t) {
                        this.excPtr = t, this.ptr = t - 24, this.set_type = function(t) {
                            S[this.ptr + 4 >> 2] = t
                        }, this.get_type = function() {
                            return S[this.ptr + 4 >> 2]
                        }, this.set_destructor = function(t) {
                            S[this.ptr + 8 >> 2] = t
                        }, this.get_destructor = function() {
                            return S[this.ptr + 8 >> 2]
                        }, this.set_refcount = function(t) {
                            k[this.ptr >> 2] = t
                        }, this.set_caught = function(t) {
                            t = t ? 1 : 0, C[this.ptr + 12 | 0] = t
                        }, this.get_caught = function() {
                            return 0 != C[this.ptr + 12 | 0]
                        }, this.set_rethrown = function(t) {
                            t = t ? 1 : 0, C[this.ptr + 13 | 0] = t
                        }, this.get_rethrown = function() {
                            return 0 != C[this.ptr + 13 | 0]
                        }, this.init = function(t, e) {
                            this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(e), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
                        }, this.add_ref = function() {
                            var t = k[this.ptr >> 2];
                            k[this.ptr >> 2] = t + 1
                        }, this.release_ref = function() {
                            var t = k[this.ptr >> 2];
                            return k[this.ptr >> 2] = t - 1, 1 === t
                        }, this.set_adjusted_ptr = function(t) {
                            S[this.ptr + 16 >> 2] = t
                        }, this.get_adjusted_ptr = function() {
                            return S[this.ptr + 16 >> 2]
                        }, this.get_exception_ptr = function() {
                            if (Ce(this.get_type())) return S[this.excPtr >> 2];
                            var t = this.get_adjusted_ptr();
                            return 0 !== t ? t : this.excPtr
                        }
                    }
                    G(N = "openjpegwasm_decode.wasm") || (q = N, N = i.locateFile ? i.locateFile(q, y) : y + q);
                    var Q = {};

                    function tt(t) {
                        for (; t.length;) {
                            var e = t.pop();
                            t.pop()(e)
                        }
                    }

                    function et(t) {
                        return this.fromWireType(k[t >> 2])
                    }
                    var rt = {},
                        nt = {},
                        ot = {};

                    function it(t) {
                        if (void 0 === t) return "_unknown";
                        var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                        return e >= 48 && e <= 57 ? "_" + t : t
                    }

                    function at(t, e) {
                        return t = it(t), new Function("body", "return function " + t + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)
                    }

                    function st(t, e) {
                        var r = at(e, (function(t) {
                            this.name = e, this.message = t;
                            var r = new Error(t).stack;
                            void 0 !== r && (this.stack = this.toString() + "\n" + r.replace(/^Error(:[^\n]*)?\n/, ""))
                        }));
                        return r.prototype = Object.create(t.prototype), r.prototype.constructor = r, r.prototype.toString = function() {
                            return void 0 === this.message ? this.name : this.name + ": " + this.message
                        }, r
                    }
                    var ut = void 0;

                    function ct(t) {
                        throw new ut(t)
                    }

                    function lt(t, e, r) {
                        function n(e) {
                            var n = r(e);
                            n.length !== t.length && ct("Mismatched type converter count");
                            for (var o = 0; o < t.length; ++o) vt(t[o], n[o])
                        }
                        t.forEach((function(t) {
                            ot[t] = e
                        }));
                        var o = new Array(e.length),
                            i = [],
                            a = 0;
                        e.forEach(((t, e) => {
                            nt.hasOwnProperty(t) ? o[e] = nt[t] : (i.push(t), rt.hasOwnProperty(t) || (rt[t] = []), rt[t].push((() => {
                                o[e] = nt[t], ++a === i.length && n(o)
                            })))
                        })), 0 === i.length && n(o)
                    }

                    function ft(t) {
                        switch (t) {
                            case 1:
                                return 0;
                            case 2:
                                return 1;
                            case 4:
                                return 2;
                            case 8:
                                return 3;
                            default:
                                throw new TypeError("Unknown type size: " + t)
                        }
                    }
                    var pt = void 0;

                    function dt(t) {
                        for (var e = "", r = t; $[r];) e += pt[$[r++]];
                        return e
                    }
                    var ht = void 0;

                    function yt(t) {
                        throw new ht(t)
                    }

                    function vt(t, e, r = {}) {
                        if (!("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                        var n = e.name;
                        if (t || yt('type "' + n + '" must have a positive integer typeid pointer'), nt.hasOwnProperty(t)) {
                            if (r.ignoreDuplicateRegistrations) return;
                            yt("Cannot register type '" + n + "' twice")
                        }
                        if (nt[t] = e, delete ot[t], rt.hasOwnProperty(t)) {
                            var o = rt[t];
                            delete rt[t], o.forEach((t => t()))
                        }
                    }

                    function gt(t) {
                        yt(t.$$.ptrType.registeredClass.name + " instance already deleted")
                    }
                    var mt = !1;

                    function wt(t) {}

                    function bt(t) {
                        t.count.value -= 1, 0 === t.count.value && function(t) {
                            t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr)
                        }(t)
                    }

                    function Tt(t, e, r) {
                        if (e === r) return t;
                        if (void 0 === r.baseClass) return null;
                        var n = Tt(t, e, r.baseClass);
                        return null === n ? null : r.downcast(n)
                    }
                    var Pt = {};
                    var Ct = [];

                    function $t() {
                        for (; Ct.length;) {
                            var t = Ct.pop();
                            t.$$.deleteScheduled = !1, t.delete()
                        }
                    }
                    var _t = void 0;
                    var At = {};

                    function kt(t, e) {
                        return e.ptrType && e.ptr || ct("makeClassHandle requires ptr and ptrType"), !!e.smartPtrType != !!e.smartPtr && ct("Both smartPtrType and smartPtr must be specified"), e.count = {
                            value: 1
                        }, St(Object.create(t, {
                            $$: {
                                value: e
                            }
                        }))
                    }

                    function St(t) {
                        return "undefined" == typeof FinalizationRegistry ? (St = t => t, t) : (mt = new FinalizationRegistry((t => {
                            bt(t.$$)
                        })), St = t => {
                            var e = t.$$;
                            if (e.smartPtr) {
                                var r = {
                                    $$: e
                                };
                                mt.register(t, r, t)
                            }
                            return t
                        }, wt = t => mt.unregister(t), St(t))
                    }

                    function xt() {}

                    function Et(t, e, r) {
                        if (void 0 === t[e].overloadTable) {
                            var n = t[e];
                            t[e] = function() {
                                return t[e].overloadTable.hasOwnProperty(arguments.length) || yt("Function '" + r + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + t[e].overloadTable + ")!"), t[e].overloadTable[arguments.length].apply(this, arguments)
                            }, t[e].overloadTable = [], t[e].overloadTable[n.argCount] = n
                        }
                    }

                    function Ot(t, e, r, n, o, i, a, s) {
                        this.name = t, this.constructor = e, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = o, this.getActualType = i, this.upcast = a, this.downcast = s, this.pureVirtualFunctions = []
                    }

                    function Rt(t, e, r) {
                        for (; e !== r;) e.upcast || yt("Expected null or instance of " + r.name + ", got an instance of " + e.name), t = e.upcast(t), e = e.baseClass;
                        return t
                    }

                    function Ft(t, e) {
                        if (null === e) return this.isReference && yt("null is not a valid " + this.name), 0;
                        e.$$ || yt('Cannot pass "' + Yt(e) + '" as a ' + this.name), e.$$.ptr || yt("Cannot pass deleted object as a pointer of type " + this.name);
                        var r = e.$$.ptrType.registeredClass;
                        return Rt(e.$$.ptr, r, this.registeredClass)
                    }

                    function Wt(t, e) {
                        var r;
                        if (null === e) return this.isReference && yt("null is not a valid " + this.name), this.isSmartPointer ? (r = this.rawConstructor(), null !== t && t.push(this.rawDestructor, r), r) : 0;
                        e.$$ || yt('Cannot pass "' + Yt(e) + '" as a ' + this.name), e.$$.ptr || yt("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && e.$$.ptrType.isConst && yt("Cannot convert argument of type " + (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) + " to parameter type " + this.name);
                        var n = e.$$.ptrType.registeredClass;
                        if (r = Rt(e.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (void 0 === e.$$.smartPtr && yt("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
                            case 0:
                                e.$$.smartPtrType === this ? r = e.$$.smartPtr : yt("Cannot convert argument of type " + (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) + " to parameter type " + this.name);
                                break;
                            case 1:
                                r = e.$$.smartPtr;
                                break;
                            case 2:
                                if (e.$$.smartPtrType === this) r = e.$$.smartPtr;
                                else {
                                    var o = e.clone();
                                    r = this.rawShare(r, Xt.toHandle((function() {
                                        o.delete()
                                    }))), null !== t && t.push(this.rawDestructor, r)
                                }
                                break;
                            default:
                                yt("Unsupporting sharing policy")
                        }
                        return r
                    }

                    function jt(t, e) {
                        if (null === e) return this.isReference && yt("null is not a valid " + this.name), 0;
                        e.$$ || yt('Cannot pass "' + Yt(e) + '" as a ' + this.name), e.$$.ptr || yt("Cannot pass deleted object as a pointer of type " + this.name), e.$$.ptrType.isConst && yt("Cannot convert argument of type " + e.$$.ptrType.name + " to parameter type " + this.name);
                        var r = e.$$.ptrType.registeredClass;
                        return Rt(e.$$.ptr, r, this.registeredClass)
                    }

                    function Dt(t, e, r, n, o, i, a, s, u, c, l) {
                        this.name = t, this.registeredClass = e, this.isReference = r, this.isConst = n, this.isSmartPointer = o, this.pointeeType = i, this.sharingPolicy = a, this.rawGetPointee = s, this.rawConstructor = u, this.rawShare = c, this.rawDestructor = l, o || void 0 !== e.baseClass ? this.toWireType = Wt : n ? (this.toWireType = Ft, this.destructorFunction = null) : (this.toWireType = jt, this.destructorFunction = null)
                    }
                    var It = [];

                    function Ut(t) {
                        var e = It[t];
                        return e || (t >= It.length && (It.length = t + 1), It[t] = e = I.get(t)), e
                    }

                    function Ht(t, e, r) {
                        return t.includes("j") ? function(t, e, r) {
                            var n = i["dynCall_" + t];
                            return r && r.length ? n.apply(null, [e].concat(r)) : n.call(null, e)
                        }(t, e, r) : Ut(e).apply(null, r)
                    }

                    function Lt(t, e) {
                        var r, n, o, i = (t = dt(t)).includes("j") ? (r = t, n = e, o = [], function() {
                            return o.length = 0, Object.assign(o, arguments), Ht(r, n, o)
                        }) : Ut(e);
                        return "function" != typeof i && yt("unknown function pointer with signature " + t + ": " + e), i
                    }
                    var Bt = void 0;

                    function Mt(t) {
                        var e = we(t),
                            r = dt(e);
                        return me(e), r
                    }

                    function Vt(t, e) {
                        var r = [],
                            n = {};
                        throw e.forEach((function t(e) {
                            n[e] || nt[e] || (ot[e] ? ot[e].forEach(t) : (r.push(e), n[e] = !0))
                        })), new Bt(t + ": " + r.map(Mt).join([", "]))
                    }

                    function zt(t, e) {
                        for (var r = [], n = 0; n < t; n++) r.push(S[e + 4 * n >> 2]);
                        return r
                    }

                    function Nt(t, e, r, n, o) {
                        var i = e.length;
                        i < 2 && yt("argTypes array size mismatch! Must at least get return value and 'this' types!");
                        for (var a = null !== e[1] && null !== r, s = !1, u = 1; u < e.length; ++u)
                            if (null !== e[u] && void 0 === e[u].destructorFunction) {
                                s = !0;
                                break
                            }
                        var c = "void" !== e[0].name,
                            l = "",
                            f = "";
                        for (u = 0; u < i - 2; ++u) l += (0 !== u ? ", " : "") + "arg" + u, f += (0 !== u ? ", " : "") + "arg" + u + "Wired";
                        var p = "return function " + it(t) + "(" + l + ") {\nif (arguments.length !== " + (i - 2) + ") {\nthrowBindingError('function " + t + " called with ' + arguments.length + ' arguments, expected " + (i - 2) + " args!');\n}\n";
                        s && (p += "var destructors = [];\n");
                        var d = s ? "destructors" : "null",
                            h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                            y = [yt, n, o, tt, e[0], e[1]];
                        for (a && (p += "var thisWired = classParam.toWireType(" + d + ", this);\n"), u = 0; u < i - 2; ++u) p += "var arg" + u + "Wired = argType" + u + ".toWireType(" + d + ", arg" + u + "); // " + e[u + 2].name + "\n", h.push("argType" + u), y.push(e[u + 2]);
                        if (a && (f = "thisWired" + (f.length > 0 ? ", " : "") + f), p += (c ? "var rv = " : "") + "invoker(fn" + (f.length > 0 ? ", " : "") + f + ");\n", s) p += "runDestructors(destructors);\n";
                        else
                            for (u = a ? 1 : 2; u < e.length; ++u) {
                                var v = 1 === u ? "thisWired" : "arg" + (u - 2) + "Wired";
                                null !== e[u].destructorFunction && (p += v + "_dtor(" + v + "); // " + e[u].name + "\n", h.push(v + "_dtor"), y.push(e[u].destructorFunction))
                            }
                        return c && (p += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p += "}\n", h.push(p),
                            function(t, e) {
                                if (!(t instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof t + " which is not a function");
                                var r = at(t.name || "unknownFunctionName", (function() {}));
                                r.prototype = t.prototype;
                                var n = new r,
                                    o = t.apply(n, e);
                                return o instanceof Object ? o : n
                            }(Function, h).apply(null, y)
                    }
                    var qt = [],
                        Gt = [{}, {
                            value: void 0
                        }, {
                            value: null
                        }, {
                            value: !0
                        }, {
                            value: !1
                        }];

                    function Jt(t) {
                        t > 4 && 0 == --Gt[t].refcount && (Gt[t] = void 0, qt.push(t))
                    }
                    var Xt = {
                        toValue: t => (t || yt("Cannot use deleted val. handle = " + t), Gt[t].value),
                        toHandle: t => {
                            switch (t) {
                                case void 0:
                                    return 1;
                                case null:
                                    return 2;
                                case !0:
                                    return 3;
                                case !1:
                                    return 4;
                                default:
                                    var e = qt.length ? qt.pop() : Gt.length;
                                    return Gt[e] = {
                                        refcount: 1,
                                        value: t
                                    }, e
                            }
                        }
                    };

                    function Yt(t) {
                        if (null === t) return "null";
                        var e = typeof t;
                        return "object" === e || "array" === e || "function" === e ? t.toString() : "" + t
                    }

                    function Kt(t, e) {
                        switch (e) {
                            case 2:
                                return function(t) {
                                    return this.fromWireType(x[t >> 2])
                                };
                            case 3:
                                return function(t) {
                                    return this.fromWireType(E[t >> 3])
                                };
                            default:
                                throw new TypeError("Unknown float type: " + t)
                        }
                    }

                    function Zt(t, e, r) {
                        switch (e) {
                            case 0:
                                return r ? function(t) {
                                    return C[t]
                                } : function(t) {
                                    return $[t]
                                };
                            case 1:
                                return r ? function(t) {
                                    return _[t >> 1]
                                } : function(t) {
                                    return A[t >> 1]
                                };
                            case 2:
                                return r ? function(t) {
                                    return k[t >> 2]
                                } : function(t) {
                                    return S[t >> 2]
                                };
                            default:
                                throw new TypeError("Unknown integer type: " + t)
                        }
                    }
                    var Qt = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

                    function te(t, e) {
                        for (var r = t, n = r >> 1, o = n + e / 2; !(n >= o) && A[n];) ++n;
                        if ((r = n << 1) - t > 32 && Qt) return Qt.decode($.subarray(t, r));
                        for (var i = "", a = 0; !(a >= e / 2); ++a) {
                            var s = _[t + 2 * a >> 1];
                            if (0 == s) break;
                            i += String.fromCharCode(s)
                        }
                        return i
                    }

                    function ee(t, e, r) {
                        if (void 0 === r && (r = 2147483647), r < 2) return 0;
                        for (var n = e, o = (r -= 2) < 2 * t.length ? r / 2 : t.length, i = 0; i < o; ++i) {
                            var a = t.charCodeAt(i);
                            _[e >> 1] = a, e += 2
                        }
                        return _[e >> 1] = 0, e - n
                    }

                    function re(t) {
                        return 2 * t.length
                    }

                    function ne(t, e) {
                        for (var r = 0, n = ""; !(r >= e / 4);) {
                            var o = k[t + 4 * r >> 2];
                            if (0 == o) break;
                            if (++r, o >= 65536) {
                                var i = o - 65536;
                                n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                            } else n += String.fromCharCode(o)
                        }
                        return n
                    }

                    function oe(t, e, r) {
                        if (void 0 === r && (r = 2147483647), r < 4) return 0;
                        for (var n = e, o = n + r - 4, i = 0; i < t.length; ++i) {
                            var a = t.charCodeAt(i);
                            if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & t.charCodeAt(++i)), k[e >> 2] = a, (e += 4) + 4 > o) break
                        }
                        return k[e >> 2] = 0, e - n
                    }

                    function ie(t) {
                        for (var e = 0, r = 0; r < t.length; ++r) {
                            var n = t.charCodeAt(r);
                            n >= 55296 && n <= 57343 && ++r, e += 4
                        }
                        return e
                    }
                    var ae = {};

                    function se() {
                        return "object" == typeof globalThis ? globalThis : Function("return this")()
                    }

                    function ue(t, e) {
                        var r = nt[t];
                        return void 0 === r && yt(e + " has unknown type " + Mt(t)), r
                    }
                    var ce = {};

                    function le(t) {
                        try {
                            return w.grow(t - P.byteLength + 65535 >>> 16), D(w.buffer), 1
                        } catch (t) {}
                    }
                    var fe = {};

                    function pe() {
                        if (!pe.strings) {
                            var t = {
                                USER: "web_user",
                                LOGNAME: "web_user",
                                PATH: "/",
                                PWD: "/",
                                HOME: "/home/web_user",
                                LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                                _: f || "./this.program"
                            };
                            for (var e in fe) void 0 === fe[e] ? delete t[e] : t[e] = fe[e];
                            var r = [];
                            for (var e in t) r.push(e + "=" + t[e]);
                            pe.strings = r
                        }
                        return pe.strings
                    }
                    var de = [null, [],
                        []
                    ];

                    function he(t, e) {
                        var r = de[t];
                        0 === e || 10 === e ? ((1 === t ? b : T)(F(r, 0)), r.length = 0) : r.push(e)
                    }
                    ut = i.InternalError = st(Error, "InternalError"),
                        function() {
                            for (var t = new Array(256), e = 0; e < 256; ++e) t[e] = String.fromCharCode(e);
                            pt = t
                        }(), ht = i.BindingError = st(Error, "BindingError"), xt.prototype.isAliasOf = function(t) {
                            if (!(this instanceof xt)) return !1;
                            if (!(t instanceof xt)) return !1;
                            for (var e = this.$$.ptrType.registeredClass, r = this.$$.ptr, n = t.$$.ptrType.registeredClass, o = t.$$.ptr; e.baseClass;) r = e.upcast(r), e = e.baseClass;
                            for (; n.baseClass;) o = n.upcast(o), n = n.baseClass;
                            return e === n && r === o
                        }, xt.prototype.clone = function() {
                            if (this.$$.ptr || gt(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                            var t, e = St(Object.create(Object.getPrototypeOf(this), {
                                $$: {
                                    value: (t = this.$$, {
                                        count: t.count,
                                        deleteScheduled: t.deleteScheduled,
                                        preservePointerOnDelete: t.preservePointerOnDelete,
                                        ptr: t.ptr,
                                        ptrType: t.ptrType,
                                        smartPtr: t.smartPtr,
                                        smartPtrType: t.smartPtrType
                                    })
                                }
                            }));
                            return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e
                        }, xt.prototype.delete = function() {
                            this.$$.ptr || gt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && yt("Object already scheduled for deletion"), wt(this), bt(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0)
                        }, xt.prototype.isDeleted = function() {
                            return !this.$$.ptr
                        }, xt.prototype.deleteLater = function() {
                            return this.$$.ptr || gt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && yt("Object already scheduled for deletion"), Ct.push(this), 1 === Ct.length && _t && _t($t), this.$$.deleteScheduled = !0, this
                        }, i.getInheritedInstanceCount = function() {
                            return Object.keys(At).length
                        }, i.getLiveInheritedInstances = function() {
                            var t = [];
                            for (var e in At) At.hasOwnProperty(e) && t.push(At[e]);
                            return t
                        }, i.flushPendingDeletes = $t, i.setDelayFunction = function(t) {
                            _t = t, Ct.length && _t && _t($t)
                        }, Dt.prototype.getPointee = function(t) {
                            return this.rawGetPointee && (t = this.rawGetPointee(t)), t
                        }, Dt.prototype.destructor = function(t) {
                            this.rawDestructor && this.rawDestructor(t)
                        }, Dt.prototype.argPackAdvance = 8, Dt.prototype.readValueFromPointer = et, Dt.prototype.deleteObject = function(t) {
                            null !== t && t.delete()
                        }, Dt.prototype.fromWireType = function(t) {
                            var e = this.getPointee(t);
                            if (!e) return this.destructor(t), null;
                            var r = function(t, e) {
                                return e = function(t, e) {
                                    for (void 0 === e && yt("ptr should not be undefined"); t.baseClass;) e = t.upcast(e), t = t.baseClass;
                                    return e
                                }(t, e), At[e]
                            }(this.registeredClass, e);
                            if (void 0 !== r) {
                                if (0 === r.$$.count.value) return r.$$.ptr = e, r.$$.smartPtr = t, r.clone();
                                var n = r.clone();
                                return this.destructor(t), n
                            }

                            function o() {
                                return this.isSmartPointer ? kt(this.registeredClass.instancePrototype, {
                                    ptrType: this.pointeeType,
                                    ptr: e,
                                    smartPtrType: this,
                                    smartPtr: t
                                }) : kt(this.registeredClass.instancePrototype, {
                                    ptrType: this,
                                    ptr: t
                                })
                            }
                            var i, a = this.registeredClass.getActualType(e),
                                s = Pt[a];
                            if (!s) return o.call(this);
                            i = this.isConst ? s.constPointerType : s.pointerType;
                            var u = Tt(e, this.registeredClass, i.registeredClass);
                            return null === u ? o.call(this) : this.isSmartPointer ? kt(i.registeredClass.instancePrototype, {
                                ptrType: i,
                                ptr: u,
                                smartPtrType: this,
                                smartPtr: t
                            }) : kt(i.registeredClass.instancePrototype, {
                                ptrType: i,
                                ptr: u
                            })
                        }, Bt = i.UnboundTypeError = st(Error, "UnboundTypeError"), i.count_emval_handles = function() {
                            for (var t = 0, e = 5; e < Gt.length; ++e) void 0 !== Gt[e] && ++t;
                            return t
                        }, i.get_first_emval = function() {
                            for (var t = 5; t < Gt.length; ++t)
                                if (void 0 !== Gt[t]) return Gt[t];
                            return null
                        };
                    var ye, ve = {
                            D: function(t, e, r) {
                                throw new Z(t).init(e, r), t
                            },
                            e: function(t) {
                                var e = Q[t];
                                delete Q[t];
                                var r = e.rawConstructor,
                                    n = e.rawDestructor,
                                    o = e.fields;
                                lt([t], o.map((t => t.getterReturnType)).concat(o.map((t => t.setterArgumentType))), (t => {
                                    var i = {};
                                    return o.forEach(((e, r) => {
                                        var n = e.fieldName,
                                            a = t[r],
                                            s = e.getter,
                                            u = e.getterContext,
                                            c = t[r + o.length],
                                            l = e.setter,
                                            f = e.setterContext;
                                        i[n] = {
                                            read: t => a.fromWireType(s(u, t)),
                                            write: (t, e) => {
                                                var r = [];
                                                l(f, t, c.toWireType(r, e)), tt(r)
                                            }
                                        }
                                    })), [{
                                        name: e.name,
                                        fromWireType: function(t) {
                                            var e = {};
                                            for (var r in i) e[r] = i[r].read(t);
                                            return n(t), e
                                        },
                                        toWireType: function(t, e) {
                                            for (var o in i)
                                                if (!(o in e)) throw new TypeError('Missing field:  "' + o + '"');
                                            var a = r();
                                            for (o in i) i[o].write(a, e[o]);
                                            return null !== t && t.push(n, a), a
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: et,
                                        destructorFunction: n
                                    }]
                                }))
                            },
                            t: function(t, e, r, n, o) {},
                            B: function(t, e, r, n, o) {
                                var i = ft(r);
                                vt(t, {
                                    name: e = dt(e),
                                    fromWireType: function(t) {
                                        return !!t
                                    },
                                    toWireType: function(t, e) {
                                        return e ? n : o
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: function(t) {
                                        var n;
                                        if (1 === r) n = C;
                                        else if (2 === r) n = _;
                                        else {
                                            if (4 !== r) throw new TypeError("Unknown boolean type size: " + e);
                                            n = k
                                        }
                                        return this.fromWireType(n[t >> i])
                                    },
                                    destructorFunction: null
                                })
                            },
                            r: function(t, e, r, n, o, a, s, u, c, l, f, p, d) {
                                f = dt(f), a = Lt(o, a), u && (u = Lt(s, u)), l && (l = Lt(c, l)), d = Lt(p, d);
                                var h = it(f);
                                ! function(t, e, r) {
                                    i.hasOwnProperty(t) ? (yt("Cannot register public name '" + t + "' twice"), Et(i, t, t), i.hasOwnProperty(r) && yt("Cannot register multiple overloads of a function with the same number of arguments (" + r + ")!"), i[t].overloadTable[r] = e) : i[t] = e
                                }(h, (function() {
                                    Vt("Cannot construct " + f + " due to unbound types", [n])
                                })), lt([t, e, r], n ? [n] : [], (function(e) {
                                    var r, o;
                                    e = e[0], o = n ? (r = e.registeredClass).instancePrototype : xt.prototype;
                                    var s = at(h, (function() {
                                            if (Object.getPrototypeOf(this) !== c) throw new ht("Use 'new' to construct " + f);
                                            if (void 0 === p.constructor_body) throw new ht(f + " has no accessible constructor");
                                            var t = p.constructor_body[arguments.length];
                                            if (void 0 === t) throw new ht("Tried to invoke ctor of " + f + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(p.constructor_body).toString() + ") parameters instead!");
                                            return t.apply(this, arguments)
                                        })),
                                        c = Object.create(o, {
                                            constructor: {
                                                value: s
                                            }
                                        });
                                    s.prototype = c;
                                    var p = new Ot(f, s, c, d, r, a, u, l),
                                        y = new Dt(f, p, !0, !1, !1),
                                        v = new Dt(f + "*", p, !1, !1, !1),
                                        g = new Dt(f + " const*", p, !1, !0, !1);
                                    return Pt[t] = {
                                            pointerType: v,
                                            constPointerType: g
                                        },
                                        function(t, e, r) {
                                            i.hasOwnProperty(t) || ct("Replacing nonexistant public symbol"), i[t].overloadTable, i[t] = e, i[t].argCount = r
                                        }(h, s), [y, v, g]
                                }))
                            },
                            q: function(t, e, r, n, o, i) {
                                e > 0 || z(undefined);
                                var a = zt(e, r);
                                o = Lt(n, o), lt([], [t], (function(t) {
                                    var r = "constructor " + (t = t[0]).name;
                                    if (void 0 === t.registeredClass.constructor_body && (t.registeredClass.constructor_body = []), void 0 !== t.registeredClass.constructor_body[e - 1]) throw new ht("Cannot register multiple constructors with identical number of parameters (" + (e - 1) + ") for class '" + t.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                                    return t.registeredClass.constructor_body[e - 1] = () => {
                                        Vt("Cannot construct " + t.name + " due to unbound types", a)
                                    }, lt([], a, (function(n) {
                                        return n.splice(1, 0, null), t.registeredClass.constructor_body[e - 1] = Nt(r, n, null, o, i), []
                                    })), []
                                }))
                            },
                            b: function(t, e, r, n, o, i, a, s) {
                                var u = zt(r, n);
                                e = dt(e), i = Lt(o, i), lt([], [t], (function(t) {
                                    var n = (t = t[0]).name + "." + e;

                                    function o() {
                                        Vt("Cannot call " + n + " due to unbound types", u)
                                    }
                                    e.startsWith("@@") && (e = Symbol[e.substring(2)]), s && t.registeredClass.pureVirtualFunctions.push(e);
                                    var c = t.registeredClass.instancePrototype,
                                        l = c[e];
                                    return void 0 === l || void 0 === l.overloadTable && l.className !== t.name && l.argCount === r - 2 ? (o.argCount = r - 2, o.className = t.name, c[e] = o) : (Et(c, e, n), c[e].overloadTable[r - 2] = o), lt([], u, (function(o) {
                                        var s = Nt(n, o, t, i, a);
                                        return void 0 === c[e].overloadTable ? (s.argCount = r - 2, c[e] = s) : c[e].overloadTable[r - 2] = s, []
                                    })), []
                                }))
                            },
                            A: function(t, e) {
                                vt(t, {
                                    name: e = dt(e),
                                    fromWireType: function(t) {
                                        var e = Xt.toValue(t);
                                        return Jt(t), e
                                    },
                                    toWireType: function(t, e) {
                                        return Xt.toHandle(e)
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: et,
                                    destructorFunction: null
                                })
                            },
                            l: function(t, e, r) {
                                var n = ft(r);
                                vt(t, {
                                    name: e = dt(e),
                                    fromWireType: function(t) {
                                        return t
                                    },
                                    toWireType: function(t, e) {
                                        return e
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Kt(e, n),
                                    destructorFunction: null
                                })
                            },
                            d: function(t, e, r, n, o) {
                                e = dt(e), -1 === o && (o = 4294967295);
                                var i = ft(r),
                                    a = t => t;
                                if (0 === n) {
                                    var s = 32 - 8 * r;
                                    a = t => t << s >>> s
                                }
                                var u = e.includes("unsigned");
                                vt(t, {
                                    name: e,
                                    fromWireType: a,
                                    toWireType: u ? function(t, e) {
                                        return this.name, e >>> 0
                                    } : function(t, e) {
                                        return this.name, e
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Zt(e, i, 0 !== n),
                                    destructorFunction: null
                                })
                            },
                            a: function(t, e, r) {
                                var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];

                                function o(t) {
                                    var e = S,
                                        r = e[t >>= 2],
                                        o = e[t + 1];
                                    return new n(P, o, r)
                                }
                                vt(t, {
                                    name: r = dt(r),
                                    fromWireType: o,
                                    argPackAdvance: 8,
                                    readValueFromPointer: o
                                }, {
                                    ignoreDuplicateRegistrations: !0
                                })
                            },
                            k: function(t, e) {
                                var r = "std::string" === (e = dt(e));
                                vt(t, {
                                    name: e,
                                    fromWireType: function(t) {
                                        var e, n = S[t >> 2],
                                            o = t + 4;
                                        if (r)
                                            for (var i = o, a = 0; a <= n; ++a) {
                                                var s = o + a;
                                                if (a == n || 0 == $[s]) {
                                                    var u = W(i, s - i);
                                                    void 0 === e ? e = u : (e += String.fromCharCode(0), e += u), i = s + 1
                                                }
                                            } else {
                                                var c = new Array(n);
                                                for (a = 0; a < n; ++a) c[a] = String.fromCharCode($[o + a]);
                                                e = c.join("")
                                            }
                                        return me(t), e
                                    },
                                    toWireType: function(t, e) {
                                        var n;
                                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                        var o = "string" == typeof e;
                                        o || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || yt("Cannot pass non-string to std::string"), n = r && o ? function(t) {
                                            for (var e = 0, r = 0; r < t.length; ++r) {
                                                var n = t.charCodeAt(r);
                                                n <= 127 ? e++ : n <= 2047 ? e += 2 : n >= 55296 && n <= 57343 ? (e += 4, ++r) : e += 3
                                            }
                                            return e
                                        }(e) : e.length;
                                        var i = ge(4 + n + 1),
                                            a = i + 4;
                                        if (S[i >> 2] = n, r && o) j(e, a, n + 1);
                                        else if (o)
                                            for (var s = 0; s < n; ++s) {
                                                var u = e.charCodeAt(s);
                                                u > 255 && (me(a), yt("String has UTF-16 code units that do not fit in 8 bits")), $[a + s] = u
                                            } else
                                                for (s = 0; s < n; ++s) $[a + s] = e[s];
                                        return null !== t && t.push(me, i), i
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: et,
                                    destructorFunction: function(t) {
                                        me(t)
                                    }
                                })
                            },
                            f: function(t, e, r) {
                                var n, o, i, a, s;
                                r = dt(r), 2 === e ? (n = te, o = ee, a = re, i = () => A, s = 1) : 4 === e && (n = ne, o = oe, a = ie, i = () => S, s = 2), vt(t, {
                                    name: r,
                                    fromWireType: function(t) {
                                        for (var r, o = S[t >> 2], a = i(), u = t + 4, c = 0; c <= o; ++c) {
                                            var l = t + 4 + c * e;
                                            if (c == o || 0 == a[l >> s]) {
                                                var f = n(u, l - u);
                                                void 0 === r ? r = f : (r += String.fromCharCode(0), r += f), u = l + e
                                            }
                                        }
                                        return me(t), r
                                    },
                                    toWireType: function(t, n) {
                                        "string" != typeof n && yt("Cannot pass non-string to C++ string type " + r);
                                        var i = a(n),
                                            u = ge(4 + i + e);
                                        return S[u >> 2] = i >> s, o(n, u + 4, i + e), null !== t && t.push(me, u), u
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: et,
                                    destructorFunction: function(t) {
                                        me(t)
                                    }
                                })
                            },
                            g: function(t, e, r, n, o, i) {
                                Q[t] = {
                                    name: dt(e),
                                    rawConstructor: Lt(r, n),
                                    rawDestructor: Lt(o, i),
                                    fields: []
                                }
                            },
                            c: function(t, e, r, n, o, i, a, s, u, c) {
                                Q[t].fields.push({
                                    fieldName: dt(e),
                                    getterReturnType: r,
                                    getter: Lt(n, o),
                                    getterContext: i,
                                    setterArgumentType: a,
                                    setter: Lt(s, u),
                                    setterContext: c
                                })
                            },
                            C: function(t, e) {
                                vt(t, {
                                    isVoid: !0,
                                    name: e = dt(e),
                                    argPackAdvance: 0,
                                    fromWireType: function() {},
                                    toWireType: function(t, e) {}
                                })
                            },
                            h: Jt,
                            o: function(t) {
                                return 0 === t ? Xt.toHandle(se()) : (t = void 0 === (r = ae[e = t]) ? dt(e) : r, Xt.toHandle(se()[t]));
                                var e, r
                            },
                            m: function(t) {
                                t > 4 && (Gt[t].refcount += 1)
                            },
                            n: function(t, e, r, n) {
                                t = Xt.toValue(t);
                                var o = ce[e];
                                return o || (o = function(t) {
                                    for (var e = "", r = 0; r < t; ++r) e += (0 !== r ? ", " : "") + "arg" + r;
                                    var n = "return function emval_allocator_" + t + "(constructor, argTypes, args) {\n  var HEAPU32 = getMemory();\n";
                                    for (r = 0; r < t; ++r) n += "var argType" + r + " = requireRegisteredType(HEAPU32[((argTypes)>>2)], 'parameter " + r + "');\nvar arg" + r + " = argType" + r + ".readValueFromPointer(args);\nargs += argType" + r + "['argPackAdvance'];\nargTypes += 4;\n";
                                    return n += "var obj = new constructor(" + e + ");\nreturn valueToHandle(obj);\n}\n", new Function("requireRegisteredType", "Module", "valueToHandle", "getMemory", n)(ue, i, Xt.toHandle, (() => S))
                                }(e), ce[e] = o), o(t, r, n)
                            },
                            p: function(t, e) {
                                var r = (t = ue(t, "_emval_take_value")).readValueFromPointer(e);
                                return Xt.toHandle(r)
                            },
                            i: function() {
                                z("")
                            },
                            v: function() {
                                return 2147483648
                            },
                            z: function(t, e, r) {
                                $.copyWithin(t, e, e + r)
                            },
                            u: function(t) {
                                var e, r = $.length,
                                    n = 2147483648;
                                if ((t >>>= 0) > n) return !1;
                                for (var o = 1; o <= 4; o *= 2) {
                                    var i = r * (1 + .2 / o);
                                    if (i = Math.min(i, t + 100663296), le(Math.min(n, (e = Math.max(t, i)) + (65536 - e % 65536) % 65536))) return !0
                                }
                                return !1
                            },
                            w: function(t, e) {
                                var r = 0;
                                return pe().forEach((function(n, o) {
                                    var i = e + r;
                                    S[t + 4 * o >> 2] = i,
                                        function(t, e) {
                                            for (var r = 0; r < t.length; ++r) C[e++ | 0] = t.charCodeAt(r);
                                            C[e | 0] = 0
                                        }(n, i), r += n.length + 1
                                })), 0
                            },
                            x: function(t, e) {
                                var r = pe();
                                S[t >> 2] = r.length;
                                var n = 0;
                                return r.forEach((function(t) {
                                    n += t.length + 1
                                })), S[e >> 2] = n, 0
                            },
                            y: function(t) {
                                return 52
                            },
                            s: function(t, e, r, n, o) {
                                return 70
                            },
                            j: function(t, e, r, n) {
                                for (var o = 0, i = 0; i < r; i++) {
                                    var a = S[e >> 2],
                                        s = S[e + 4 >> 2];
                                    e += 8;
                                    for (var u = 0; u < s; u++) he(t, $[a + u]);
                                    o += s
                                }
                                return S[n >> 2] = o, 0
                            }
                        },
                        ge = (function() {
                            var t = {
                                a: ve
                            };

                            function e(t, e) {
                                var r, n = t.exports;
                                i.asm = n, D((w = i.asm.E).buffer), I = i.asm.G, r = i.asm.F, H.unshift(r),
                                    function() {
                                        if (B--, i.monitorRunDependencies && i.monitorRunDependencies(B), 0 == B && (null !== M && (clearInterval(M), M = null), V)) {
                                            var t = V;
                                            V = null, t()
                                        }
                                    }()
                            }

                            function r(t) {
                                e(t.instance)
                            }

                            function n(e) {
                                return function() {
                                    if (!m && (p || d)) {
                                        if ("function" == typeof fetch && !J(N)) return fetch(N, {
                                            credentials: "same-origin"
                                        }).then((function(t) {
                                            if (!t.ok) throw "failed to load wasm binary file at '" + N + "'";
                                            return t.arrayBuffer()
                                        })).catch((function() {
                                            return X(N)
                                        }));
                                        if (s) return new Promise((function(t, e) {
                                            s(N, (function(e) {
                                                t(new Uint8Array(e))
                                            }), e)
                                        }))
                                    }
                                    return Promise.resolve().then((function() {
                                        return X(N)
                                    }))
                                }().then((function(e) {
                                    return WebAssembly.instantiate(e, t)
                                })).then((function(t) {
                                    return t
                                })).then(e, (function(t) {
                                    T("failed to asynchronously prepare wasm: " + t), z(t)
                                }))
                            }
                            if (B++, i.monitorRunDependencies && i.monitorRunDependencies(B), i.instantiateWasm) try {
                                return i.instantiateWasm(t, e)
                            } catch (t) {
                                T("Module.instantiateWasm callback failed with error: " + t), o(t)
                            }(m || "function" != typeof WebAssembly.instantiateStreaming || G(N) || J(N) || h || "function" != typeof fetch ? n(r) : fetch(N, {
                                credentials: "same-origin"
                            }).then((function(e) {
                                return WebAssembly.instantiateStreaming(e, t).then(r, (function(t) {
                                    return T("wasm streaming compile failed: " + t), T("falling back to ArrayBuffer instantiation"), n(r)
                                }))
                            }))).catch(o)
                        }(), i.___wasm_call_ctors = function() {
                            return (i.___wasm_call_ctors = i.asm.F).apply(null, arguments)
                        }, i._malloc = function() {
                            return (ge = i._malloc = i.asm.H).apply(null, arguments)
                        }),
                        me = i._free = function() {
                            return (me = i._free = i.asm.I).apply(null, arguments)
                        },
                        we = i.___getTypeName = function() {
                            return (we = i.___getTypeName = i.asm.J).apply(null, arguments)
                        },
                        be = (i.__embind_initialize_bindings = function() {
                            return (i.__embind_initialize_bindings = i.asm.K).apply(null, arguments)
                        }, i.stackSave = function() {
                            return (be = i.stackSave = i.asm.L).apply(null, arguments)
                        }),
                        Te = i.stackRestore = function() {
                            return (Te = i.stackRestore = i.asm.M).apply(null, arguments)
                        },
                        Pe = i.stackAlloc = function() {
                            return (Pe = i.stackAlloc = i.asm.N).apply(null, arguments)
                        },
                        Ce = i.___cxa_is_pointer_type = function() {
                            return (Ce = i.___cxa_is_pointer_type = i.asm.O).apply(null, arguments)
                        };

                    function $e(t) {
                        function r() {
                            ye || (ye = !0, i.calledRun = !0, O || (K(H), e(i), i.onRuntimeInitialized && i.onRuntimeInitialized(), function() {
                                if (i.postRun)
                                    for ("function" == typeof i.postRun && (i.postRun = [i.postRun]); i.postRun.length;) t = i.postRun.shift(), L.unshift(t);
                                var t;
                                K(L)
                            }()))
                        }
                        t = t || l, B > 0 || (function() {
                            if (i.preRun)
                                for ("function" == typeof i.preRun && (i.preRun = [i.preRun]); i.preRun.length;) t = i.preRun.shift(), U.unshift(t);
                            var t;
                            K(U)
                        }(), B > 0 || (i.setStatus ? (i.setStatus("Running..."), setTimeout((function() {
                            setTimeout((function() {
                                i.setStatus("")
                            }), 1), r()
                        }), 1)) : r()))
                    }
                    if (i.dynCall_iji = function() {
                            return (i.dynCall_iji = i.asm.P).apply(null, arguments)
                        }, i.dynCall_jji = function() {
                            return (i.dynCall_jji = i.asm.Q).apply(null, arguments)
                        }, i.dynCall_iiji = function() {
                            return (i.dynCall_iiji = i.asm.R).apply(null, arguments)
                        }, i.dynCall_jiji = function() {
                            return (i.dynCall_jiji = i.asm.S).apply(null, arguments)
                        }, i.ccall = function(t, e, r, n, o) {
                            var a = {
                                    string: t => {
                                        var e = 0;
                                        if (null != t && 0 !== t) {
                                            var r = 1 + (t.length << 2);
                                            j(t, e = Pe(r), r)
                                        }
                                        return e
                                    },
                                    array: t => {
                                        var e = Pe(t.length);
                                        return function(t, e) {
                                            C.set(t, e)
                                        }(t, e), e
                                    }
                                },
                                s = function(t) {
                                    return i["_" + t]
                                }(t),
                                u = [],
                                c = 0;
                            if (n)
                                for (var l = 0; l < n.length; l++) {
                                    var f = a[r[l]];
                                    f ? (0 === c && (c = be()), u[l] = f(n[l])) : u[l] = n[l]
                                }
                            var p = s.apply(null, u);
                            return function(t) {
                                return 0 !== c && Te(c),
                                    function(t) {
                                        return "string" === e ? W(t) : "boolean" === e ? Boolean(t) : t
                                    }(t)
                            }(p)
                        }, V = function t() {
                            ye || $e(), ye || (V = t)
                        }, i.preInit)
                        for ("function" == typeof i.preInit && (i.preInit = [i.preInit]); i.preInit.length > 0;) i.preInit.pop()();
                    return $e(), t.ready
                });
                t.exports = o
            },
            430: (t, e, r) => {
                var n, o = (n = (n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0) || "/index.js", function(t) {
                    var e, o;
                    (t = void 0 !== (t = t || {}) ? t : {}).ready = new Promise((function(t, r) {
                        e = t, o = r
                    }));
                    var i, a, s, u = Object.assign({}, t),
                        c = [],
                        l = "object" == typeof window,
                        f = "function" == typeof importScripts,
                        p = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
                        d = "";
                    if (p) {
                        var h = r(280),
                            y = r(103);
                        d = f ? y.dirname(d) + "/" : "//", i = (t, e) => (t = q(t) ? new URL(t) : y.normalize(t), h.readFileSync(t, e ? void 0 : "utf8")), s = t => {
                            var e = i(t, !0);
                            return e.buffer || (e = new Uint8Array(e)), e
                        }, a = (t, e, r) => {
                            t = q(t) ? new URL(t) : y.normalize(t), h.readFile(t, (function(t, n) {
                                t ? r(t) : e(n.buffer)
                            }))
                        }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), c = process.argv.slice(2), process.on("uncaughtException", (function(t) {
                            if (!(t instanceof J)) throw t
                        })), process.on("unhandledRejection", (function(t) {
                            throw t
                        })), t.inspect = function() {
                            return "[Emscripten Module object]"
                        }
                    } else(l || f) && (f ? d = self.location.href : "undefined" != typeof document && document.currentScript && (d = document.currentScript.src), n && (d = n), d = 0 !== d.indexOf("blob:") ? d.substr(0, d.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", i = t => {
                        var e = new XMLHttpRequest;
                        return e.open("GET", t, !1), e.send(null), e.responseText
                    }, f && (s = t => {
                        var e = new XMLHttpRequest;
                        return e.open("GET", t, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response)
                    }), a = (t, e, r) => {
                        var n = new XMLHttpRequest;
                        n.open("GET", t, !0), n.responseType = "arraybuffer", n.onload = () => {
                            200 == n.status || 0 == n.status && n.response ? e(n.response) : r()
                        }, n.onerror = r, n.send(null)
                    });
                    var v, g, m = t.print || console.log.bind(console),
                        w = t.printErr || console.warn.bind(console);
                    Object.assign(t, u), u = null, t.arguments && (c = t.arguments), t.thisProgram && t.thisProgram, t.quit && t.quit, t.wasmBinary && (v = t.wasmBinary), t.noExitRuntime, "object" != typeof WebAssembly && M("no native wasm support detected");
                    var b, T, P, C, $, _, A, k, S, x = !1,
                        E = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;

                    function O(t, e, r) {
                        for (var n = e + r, o = e; t[o] && !(o >= n);) ++o;
                        if (o - e > 16 && t.buffer && E) return E.decode(t.subarray(e, o));
                        for (var i = ""; e < o;) {
                            var a = t[e++];
                            if (128 & a) {
                                var s = 63 & t[e++];
                                if (192 != (224 & a)) {
                                    var u = 63 & t[e++];
                                    if ((a = 224 == (240 & a) ? (15 & a) << 12 | s << 6 | u : (7 & a) << 18 | s << 12 | u << 6 | 63 & t[e++]) < 65536) i += String.fromCharCode(a);
                                    else {
                                        var c = a - 65536;
                                        i += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                                    }
                                } else i += String.fromCharCode((31 & a) << 6 | s)
                            } else i += String.fromCharCode(a)
                        }
                        return i
                    }

                    function R(t, e) {
                        return t ? O(P, t, e) : ""
                    }

                    function F(t, e, r) {
                        return function(t, e, r, n) {
                            if (!(n > 0)) return 0;
                            for (var o = r, i = r + n - 1, a = 0; a < t.length; ++a) {
                                var s = t.charCodeAt(a);
                                if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & t.charCodeAt(++a)), s <= 127) {
                                    if (r >= i) break;
                                    e[r++] = s
                                } else if (s <= 2047) {
                                    if (r + 1 >= i) break;
                                    e[r++] = 192 | s >> 6, e[r++] = 128 | 63 & s
                                } else if (s <= 65535) {
                                    if (r + 2 >= i) break;
                                    e[r++] = 224 | s >> 12, e[r++] = 128 | s >> 6 & 63, e[r++] = 128 | 63 & s
                                } else {
                                    if (r + 3 >= i) break;
                                    e[r++] = 240 | s >> 18, e[r++] = 128 | s >> 12 & 63, e[r++] = 128 | s >> 6 & 63, e[r++] = 128 | 63 & s
                                }
                            }
                            return e[r] = 0, r - o
                        }(t, P, e, r)
                    }

                    function W(e) {
                        b = e, t.HEAP8 = T = new Int8Array(e), t.HEAP16 = C = new Int16Array(e), t.HEAP32 = _ = new Int32Array(e), t.HEAPU8 = P = new Uint8Array(e), t.HEAPU16 = $ = new Uint16Array(e), t.HEAPU32 = A = new Uint32Array(e), t.HEAPF32 = k = new Float32Array(e), t.HEAPF64 = S = new Float64Array(e)
                    }
                    t.INITIAL_MEMORY;
                    var j, D = [],
                        I = [],
                        U = [],
                        H = 0,
                        L = null,
                        B = null;

                    function M(e) {
                        t.onAbort && t.onAbort(e), w(e = "Aborted(" + e + ")"), x = !0, e += ". Build with -sASSERTIONS for more info.";
                        var r = new WebAssembly.RuntimeError(e);
                        throw o(r), r
                    }
                    var V, z;

                    function N(t) {
                        return t.startsWith("data:application/octet-stream;base64,")
                    }

                    function q(t) {
                        return t.startsWith("file://")
                    }

                    function G(t) {
                        try {
                            if (t == V && v) return new Uint8Array(v);
                            if (s) return s(t);
                            throw "both async and sync fetching of the wasm failed"
                        } catch (t) {
                            M(t)
                        }
                    }

                    function J(t) {
                        this.name = "ExitStatus", this.message = "Program terminated with exit(" + t + ")", this.status = t
                    }

                    function X(e) {
                        for (; e.length > 0;) e.shift()(t)
                    }
                    N(V = "openjphjs.wasm") || (z = V, V = t.locateFile ? t.locateFile(z, d) : d + z);
                    var Y = [],
                        K = 0,
                        Z = [];

                    function Q(t) {
                        var e = Z[t];
                        return e || (t >= Z.length && (Z.length = t + 1), Z[t] = e = j.get(t)), e
                    }

                    function tt(t) {
                        this.excPtr = t, this.ptr = t - 24, this.set_type = function(t) {
                            A[this.ptr + 4 >> 2] = t
                        }, this.get_type = function() {
                            return A[this.ptr + 4 >> 2]
                        }, this.set_destructor = function(t) {
                            A[this.ptr + 8 >> 2] = t
                        }, this.get_destructor = function() {
                            return A[this.ptr + 8 >> 2]
                        }, this.set_refcount = function(t) {
                            _[this.ptr >> 2] = t
                        }, this.set_caught = function(t) {
                            t = t ? 1 : 0, T[this.ptr + 12 | 0] = t
                        }, this.get_caught = function() {
                            return 0 != T[this.ptr + 12 | 0]
                        }, this.set_rethrown = function(t) {
                            t = t ? 1 : 0, T[this.ptr + 13 | 0] = t
                        }, this.get_rethrown = function() {
                            return 0 != T[this.ptr + 13 | 0]
                        }, this.init = function(t, e) {
                            this.set_adjusted_ptr(0), this.set_type(t), this.set_destructor(e), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
                        }, this.add_ref = function() {
                            var t = _[this.ptr >> 2];
                            _[this.ptr >> 2] = t + 1
                        }, this.release_ref = function() {
                            var t = _[this.ptr >> 2];
                            return _[this.ptr >> 2] = t - 1, 1 === t
                        }, this.set_adjusted_ptr = function(t) {
                            A[this.ptr + 16 >> 2] = t
                        }, this.get_adjusted_ptr = function() {
                            return A[this.ptr + 16 >> 2]
                        }, this.get_exception_ptr = function() {
                            if (Pe(this.get_type())) return A[this.excPtr >> 2];
                            var t = this.get_adjusted_ptr();
                            return 0 !== t ? t : this.excPtr
                        }
                    }
                    var et = {};

                    function rt(t) {
                        for (; t.length;) {
                            var e = t.pop();
                            t.pop()(e)
                        }
                    }

                    function nt(t) {
                        return this.fromWireType(_[t >> 2])
                    }
                    var ot = {},
                        it = {},
                        at = {};

                    function st(t) {
                        if (void 0 === t) return "_unknown";
                        var e = (t = t.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                        return e >= 48 && e <= 57 ? "_" + t : t
                    }

                    function ut(t, e) {
                        return t = st(t), new Function("body", "return function " + t + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)
                    }

                    function ct(t, e) {
                        var r = ut(e, (function(t) {
                            this.name = e, this.message = t;
                            var r = new Error(t).stack;
                            void 0 !== r && (this.stack = this.toString() + "\n" + r.replace(/^Error(:[^\n]*)?\n/, ""))
                        }));
                        return r.prototype = Object.create(t.prototype), r.prototype.constructor = r, r.prototype.toString = function() {
                            return void 0 === this.message ? this.name : this.name + ": " + this.message
                        }, r
                    }
                    var lt = void 0;

                    function ft(t) {
                        throw new lt(t)
                    }

                    function pt(t, e, r) {
                        function n(e) {
                            var n = r(e);
                            n.length !== t.length && ft("Mismatched type converter count");
                            for (var o = 0; o < t.length; ++o) mt(t[o], n[o])
                        }
                        t.forEach((function(t) {
                            at[t] = e
                        }));
                        var o = new Array(e.length),
                            i = [],
                            a = 0;
                        e.forEach(((t, e) => {
                            it.hasOwnProperty(t) ? o[e] = it[t] : (i.push(t), ot.hasOwnProperty(t) || (ot[t] = []), ot[t].push((() => {
                                o[e] = it[t], ++a === i.length && n(o)
                            })))
                        })), 0 === i.length && n(o)
                    }

                    function dt(t) {
                        switch (t) {
                            case 1:
                                return 0;
                            case 2:
                                return 1;
                            case 4:
                                return 2;
                            case 8:
                                return 3;
                            default:
                                throw new TypeError("Unknown type size: " + t)
                        }
                    }
                    var ht = void 0;

                    function yt(t) {
                        for (var e = "", r = t; P[r];) e += ht[P[r++]];
                        return e
                    }
                    var vt = void 0;

                    function gt(t) {
                        throw new vt(t)
                    }

                    function mt(t, e, r = {}) {
                        if (!("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                        var n = e.name;
                        if (t || gt('type "' + n + '" must have a positive integer typeid pointer'), it.hasOwnProperty(t)) {
                            if (r.ignoreDuplicateRegistrations) return;
                            gt("Cannot register type '" + n + "' twice")
                        }
                        if (it[t] = e, delete at[t], ot.hasOwnProperty(t)) {
                            var o = ot[t];
                            delete ot[t], o.forEach((t => t()))
                        }
                    }

                    function wt(t) {
                        gt(t.$$.ptrType.registeredClass.name + " instance already deleted")
                    }
                    var bt = !1;

                    function Tt(t) {}

                    function Pt(t) {
                        t.count.value -= 1, 0 === t.count.value && function(t) {
                            t.smartPtr ? t.smartPtrType.rawDestructor(t.smartPtr) : t.ptrType.registeredClass.rawDestructor(t.ptr)
                        }(t)
                    }

                    function Ct(t, e, r) {
                        if (e === r) return t;
                        if (void 0 === r.baseClass) return null;
                        var n = Ct(t, e, r.baseClass);
                        return null === n ? null : r.downcast(n)
                    }
                    var $t = {};
                    var _t = [];

                    function At() {
                        for (; _t.length;) {
                            var t = _t.pop();
                            t.$$.deleteScheduled = !1, t.delete()
                        }
                    }
                    var kt = void 0;
                    var St = {};

                    function xt(t, e) {
                        return e.ptrType && e.ptr || ft("makeClassHandle requires ptr and ptrType"), !!e.smartPtrType != !!e.smartPtr && ft("Both smartPtrType and smartPtr must be specified"), e.count = {
                            value: 1
                        }, Et(Object.create(t, {
                            $$: {
                                value: e
                            }
                        }))
                    }

                    function Et(t) {
                        return "undefined" == typeof FinalizationRegistry ? (Et = t => t, t) : (bt = new FinalizationRegistry((t => {
                            Pt(t.$$)
                        })), Et = t => {
                            var e = t.$$;
                            if (e.smartPtr) {
                                var r = {
                                    $$: e
                                };
                                bt.register(t, r, t)
                            }
                            return t
                        }, Tt = t => bt.unregister(t), Et(t))
                    }

                    function Ot() {}

                    function Rt(t, e, r) {
                        if (void 0 === t[e].overloadTable) {
                            var n = t[e];
                            t[e] = function() {
                                return t[e].overloadTable.hasOwnProperty(arguments.length) || gt("Function '" + r + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + t[e].overloadTable + ")!"), t[e].overloadTable[arguments.length].apply(this, arguments)
                            }, t[e].overloadTable = [], t[e].overloadTable[n.argCount] = n
                        }
                    }

                    function Ft(e, r, n) {
                        t.hasOwnProperty(e) ? ((void 0 === n || void 0 !== t[e].overloadTable && void 0 !== t[e].overloadTable[n]) && gt("Cannot register public name '" + e + "' twice"), Rt(t, e, e), t.hasOwnProperty(n) && gt("Cannot register multiple overloads of a function with the same number of arguments (" + n + ")!"), t[e].overloadTable[n] = r) : (t[e] = r, void 0 !== n && (t[e].numArguments = n))
                    }

                    function Wt(t, e, r, n, o, i, a, s) {
                        this.name = t, this.constructor = e, this.instancePrototype = r, this.rawDestructor = n, this.baseClass = o, this.getActualType = i, this.upcast = a, this.downcast = s, this.pureVirtualFunctions = []
                    }

                    function jt(t, e, r) {
                        for (; e !== r;) e.upcast || gt("Expected null or instance of " + r.name + ", got an instance of " + e.name), t = e.upcast(t), e = e.baseClass;
                        return t
                    }

                    function Dt(t, e) {
                        if (null === e) return this.isReference && gt("null is not a valid " + this.name), 0;
                        e.$$ || gt('Cannot pass "' + Zt(e) + '" as a ' + this.name), e.$$.ptr || gt("Cannot pass deleted object as a pointer of type " + this.name);
                        var r = e.$$.ptrType.registeredClass;
                        return jt(e.$$.ptr, r, this.registeredClass)
                    }

                    function It(t, e) {
                        var r;
                        if (null === e) return this.isReference && gt("null is not a valid " + this.name), this.isSmartPointer ? (r = this.rawConstructor(), null !== t && t.push(this.rawDestructor, r), r) : 0;
                        e.$$ || gt('Cannot pass "' + Zt(e) + '" as a ' + this.name), e.$$.ptr || gt("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && e.$$.ptrType.isConst && gt("Cannot convert argument of type " + (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) + " to parameter type " + this.name);
                        var n = e.$$.ptrType.registeredClass;
                        if (r = jt(e.$$.ptr, n, this.registeredClass), this.isSmartPointer) switch (void 0 === e.$$.smartPtr && gt("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
                            case 0:
                                e.$$.smartPtrType === this ? r = e.$$.smartPtr : gt("Cannot convert argument of type " + (e.$$.smartPtrType ? e.$$.smartPtrType.name : e.$$.ptrType.name) + " to parameter type " + this.name);
                                break;
                            case 1:
                                r = e.$$.smartPtr;
                                break;
                            case 2:
                                if (e.$$.smartPtrType === this) r = e.$$.smartPtr;
                                else {
                                    var o = e.clone();
                                    r = this.rawShare(r, Kt.toHandle((function() {
                                        o.delete()
                                    }))), null !== t && t.push(this.rawDestructor, r)
                                }
                                break;
                            default:
                                gt("Unsupporting sharing policy")
                        }
                        return r
                    }

                    function Ut(t, e) {
                        if (null === e) return this.isReference && gt("null is not a valid " + this.name), 0;
                        e.$$ || gt('Cannot pass "' + Zt(e) + '" as a ' + this.name), e.$$.ptr || gt("Cannot pass deleted object as a pointer of type " + this.name), e.$$.ptrType.isConst && gt("Cannot convert argument of type " + e.$$.ptrType.name + " to parameter type " + this.name);
                        var r = e.$$.ptrType.registeredClass;
                        return jt(e.$$.ptr, r, this.registeredClass)
                    }

                    function Ht(t, e, r, n, o, i, a, s, u, c, l) {
                        this.name = t, this.registeredClass = e, this.isReference = r, this.isConst = n, this.isSmartPointer = o, this.pointeeType = i, this.sharingPolicy = a, this.rawGetPointee = s, this.rawConstructor = u, this.rawShare = c, this.rawDestructor = l, o || void 0 !== e.baseClass ? this.toWireType = It : n ? (this.toWireType = Dt, this.destructorFunction = null) : (this.toWireType = Ut, this.destructorFunction = null)
                    }

                    function Lt(e, r, n) {
                        t.hasOwnProperty(e) || ft("Replacing nonexistant public symbol"), void 0 !== t[e].overloadTable && void 0 !== n ? t[e].overloadTable[n] = r : (t[e] = r, t[e].argCount = n)
                    }

                    function Bt(e, r, n) {
                        return e.includes("j") ? function(e, r, n) {
                            var o = t["dynCall_" + e];
                            return n && n.length ? o.apply(null, [r].concat(n)) : o.call(null, r)
                        }(e, r, n) : Q(r).apply(null, n)
                    }

                    function Mt(t, e) {
                        var r, n, o, i = (t = yt(t)).includes("j") ? (r = t, n = e, o = [], function() {
                            return o.length = 0, Object.assign(o, arguments), Bt(r, n, o)
                        }) : Q(e);
                        return "function" != typeof i && gt("unknown function pointer with signature " + t + ": " + e), i
                    }
                    var Vt = void 0;

                    function zt(t) {
                        var e = ve(t),
                            r = yt(e);
                        return ye(e), r
                    }

                    function Nt(t, e) {
                        var r = [],
                            n = {};
                        throw e.forEach((function t(e) {
                            n[e] || it[e] || (at[e] ? at[e].forEach(t) : (r.push(e), n[e] = !0))
                        })), new Vt(t + ": " + r.map(zt).join([", "]))
                    }

                    function qt(t, e) {
                        for (var r = [], n = 0; n < t; n++) r.push(A[e + 4 * n >> 2]);
                        return r
                    }

                    function Gt(t, e, r, n, o) {
                        var i = e.length;
                        i < 2 && gt("argTypes array size mismatch! Must at least get return value and 'this' types!");
                        for (var a = null !== e[1] && null !== r, s = !1, u = 1; u < e.length; ++u)
                            if (null !== e[u] && void 0 === e[u].destructorFunction) {
                                s = !0;
                                break
                            }
                        var c = "void" !== e[0].name,
                            l = "",
                            f = "";
                        for (u = 0; u < i - 2; ++u) l += (0 !== u ? ", " : "") + "arg" + u, f += (0 !== u ? ", " : "") + "arg" + u + "Wired";
                        var p = "return function " + st(t) + "(" + l + ") {\nif (arguments.length !== " + (i - 2) + ") {\nthrowBindingError('function " + t + " called with ' + arguments.length + ' arguments, expected " + (i - 2) + " args!');\n}\n";
                        s && (p += "var destructors = [];\n");
                        var d = s ? "destructors" : "null",
                            h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                            y = [gt, n, o, rt, e[0], e[1]];
                        for (a && (p += "var thisWired = classParam.toWireType(" + d + ", this);\n"), u = 0; u < i - 2; ++u) p += "var arg" + u + "Wired = argType" + u + ".toWireType(" + d + ", arg" + u + "); // " + e[u + 2].name + "\n", h.push("argType" + u), y.push(e[u + 2]);
                        if (a && (f = "thisWired" + (f.length > 0 ? ", " : "") + f), p += (c ? "var rv = " : "") + "invoker(fn" + (f.length > 0 ? ", " : "") + f + ");\n", s) p += "runDestructors(destructors);\n";
                        else
                            for (u = a ? 1 : 2; u < e.length; ++u) {
                                var v = 1 === u ? "thisWired" : "arg" + (u - 2) + "Wired";
                                null !== e[u].destructorFunction && (p += v + "_dtor(" + v + "); // " + e[u].name + "\n", h.push(v + "_dtor"), y.push(e[u].destructorFunction))
                            }
                        return c && (p += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p += "}\n", h.push(p),
                            function(t, e) {
                                if (!(t instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof t + " which is not a function");
                                var r = ut(t.name || "unknownFunctionName", (function() {}));
                                r.prototype = t.prototype;
                                var n = new r,
                                    o = t.apply(n, e);
                                return o instanceof Object ? o : n
                            }(Function, h).apply(null, y)
                    }
                    var Jt = [],
                        Xt = [{}, {
                            value: void 0
                        }, {
                            value: null
                        }, {
                            value: !0
                        }, {
                            value: !1
                        }];

                    function Yt(t) {
                        t > 4 && 0 == --Xt[t].refcount && (Xt[t] = void 0, Jt.push(t))
                    }
                    var Kt = {
                        toValue: t => (t || gt("Cannot use deleted val. handle = " + t), Xt[t].value),
                        toHandle: t => {
                            switch (t) {
                                case void 0:
                                    return 1;
                                case null:
                                    return 2;
                                case !0:
                                    return 3;
                                case !1:
                                    return 4;
                                default:
                                    var e = Jt.length ? Jt.pop() : Xt.length;
                                    return Xt[e] = {
                                        refcount: 1,
                                        value: t
                                    }, e
                            }
                        }
                    };

                    function Zt(t) {
                        if (null === t) return "null";
                        var e = typeof t;
                        return "object" === e || "array" === e || "function" === e ? t.toString() : "" + t
                    }

                    function Qt(t, e) {
                        switch (e) {
                            case 2:
                                return function(t) {
                                    return this.fromWireType(k[t >> 2])
                                };
                            case 3:
                                return function(t) {
                                    return this.fromWireType(S[t >> 3])
                                };
                            default:
                                throw new TypeError("Unknown float type: " + t)
                        }
                    }

                    function te(t, e, r) {
                        switch (e) {
                            case 0:
                                return r ? function(t) {
                                    return T[t]
                                } : function(t) {
                                    return P[t]
                                };
                            case 1:
                                return r ? function(t) {
                                    return C[t >> 1]
                                } : function(t) {
                                    return $[t >> 1]
                                };
                            case 2:
                                return r ? function(t) {
                                    return _[t >> 2]
                                } : function(t) {
                                    return A[t >> 2]
                                };
                            default:
                                throw new TypeError("Unknown integer type: " + t)
                        }
                    }
                    var ee = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;

                    function re(t, e) {
                        for (var r = t, n = r >> 1, o = n + e / 2; !(n >= o) && $[n];) ++n;
                        if ((r = n << 1) - t > 32 && ee) return ee.decode(P.subarray(t, r));
                        for (var i = "", a = 0; !(a >= e / 2); ++a) {
                            var s = C[t + 2 * a >> 1];
                            if (0 == s) break;
                            i += String.fromCharCode(s)
                        }
                        return i
                    }

                    function ne(t, e, r) {
                        if (void 0 === r && (r = 2147483647), r < 2) return 0;
                        for (var n = e, o = (r -= 2) < 2 * t.length ? r / 2 : t.length, i = 0; i < o; ++i) {
                            var a = t.charCodeAt(i);
                            C[e >> 1] = a, e += 2
                        }
                        return C[e >> 1] = 0, e - n
                    }

                    function oe(t) {
                        return 2 * t.length
                    }

                    function ie(t, e) {
                        for (var r = 0, n = ""; !(r >= e / 4);) {
                            var o = _[t + 4 * r >> 2];
                            if (0 == o) break;
                            if (++r, o >= 65536) {
                                var i = o - 65536;
                                n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                            } else n += String.fromCharCode(o)
                        }
                        return n
                    }

                    function ae(t, e, r) {
                        if (void 0 === r && (r = 2147483647), r < 4) return 0;
                        for (var n = e, o = n + r - 4, i = 0; i < t.length; ++i) {
                            var a = t.charCodeAt(i);
                            if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & t.charCodeAt(++i)), _[e >> 2] = a, (e += 4) + 4 > o) break
                        }
                        return _[e >> 2] = 0, e - n
                    }

                    function se(t) {
                        for (var e = 0, r = 0; r < t.length; ++r) {
                            var n = t.charCodeAt(r);
                            n >= 55296 && n <= 57343 && ++r, e += 4
                        }
                        return e
                    }

                    function ue(t) {
                        try {
                            return g.grow(t - b.byteLength + 65535 >>> 16), W(g.buffer), 1
                        } catch (t) {}
                    }
                    var ce = [null, [],
                        []
                    ];

                    function le(t, e) {
                        var r = ce[t];
                        0 === e || 10 === e ? ((1 === t ? m : w)(O(r, 0)), r.length = 0) : r.push(e)
                    }
                    lt = t.InternalError = ct(Error, "InternalError"),
                        function() {
                            for (var t = new Array(256), e = 0; e < 256; ++e) t[e] = String.fromCharCode(e);
                            ht = t
                        }(), vt = t.BindingError = ct(Error, "BindingError"), Ot.prototype.isAliasOf = function(t) {
                            if (!(this instanceof Ot)) return !1;
                            if (!(t instanceof Ot)) return !1;
                            for (var e = this.$$.ptrType.registeredClass, r = this.$$.ptr, n = t.$$.ptrType.registeredClass, o = t.$$.ptr; e.baseClass;) r = e.upcast(r), e = e.baseClass;
                            for (; n.baseClass;) o = n.upcast(o), n = n.baseClass;
                            return e === n && r === o
                        }, Ot.prototype.clone = function() {
                            if (this.$$.ptr || wt(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
                            var t, e = Et(Object.create(Object.getPrototypeOf(this), {
                                $$: {
                                    value: (t = this.$$, {
                                        count: t.count,
                                        deleteScheduled: t.deleteScheduled,
                                        preservePointerOnDelete: t.preservePointerOnDelete,
                                        ptr: t.ptr,
                                        ptrType: t.ptrType,
                                        smartPtr: t.smartPtr,
                                        smartPtrType: t.smartPtrType
                                    })
                                }
                            }));
                            return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e
                        }, Ot.prototype.delete = function() {
                            this.$$.ptr || wt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && gt("Object already scheduled for deletion"), Tt(this), Pt(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0)
                        }, Ot.prototype.isDeleted = function() {
                            return !this.$$.ptr
                        }, Ot.prototype.deleteLater = function() {
                            return this.$$.ptr || wt(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && gt("Object already scheduled for deletion"), _t.push(this), 1 === _t.length && kt && kt(At), this.$$.deleteScheduled = !0, this
                        }, t.getInheritedInstanceCount = function() {
                            return Object.keys(St).length
                        }, t.getLiveInheritedInstances = function() {
                            var t = [];
                            for (var e in St) St.hasOwnProperty(e) && t.push(St[e]);
                            return t
                        }, t.flushPendingDeletes = At, t.setDelayFunction = function(t) {
                            kt = t, _t.length && kt && kt(At)
                        }, Ht.prototype.getPointee = function(t) {
                            return this.rawGetPointee && (t = this.rawGetPointee(t)), t
                        }, Ht.prototype.destructor = function(t) {
                            this.rawDestructor && this.rawDestructor(t)
                        }, Ht.prototype.argPackAdvance = 8, Ht.prototype.readValueFromPointer = nt, Ht.prototype.deleteObject = function(t) {
                            null !== t && t.delete()
                        }, Ht.prototype.fromWireType = function(t) {
                            var e = this.getPointee(t);
                            if (!e) return this.destructor(t), null;
                            var r = function(t, e) {
                                return e = function(t, e) {
                                    for (void 0 === e && gt("ptr should not be undefined"); t.baseClass;) e = t.upcast(e), t = t.baseClass;
                                    return e
                                }(t, e), St[e]
                            }(this.registeredClass, e);
                            if (void 0 !== r) {
                                if (0 === r.$$.count.value) return r.$$.ptr = e, r.$$.smartPtr = t, r.clone();
                                var n = r.clone();
                                return this.destructor(t), n
                            }

                            function o() {
                                return this.isSmartPointer ? xt(this.registeredClass.instancePrototype, {
                                    ptrType: this.pointeeType,
                                    ptr: e,
                                    smartPtrType: this,
                                    smartPtr: t
                                }) : xt(this.registeredClass.instancePrototype, {
                                    ptrType: this,
                                    ptr: t
                                })
                            }
                            var i, a = this.registeredClass.getActualType(e),
                                s = $t[a];
                            if (!s) return o.call(this);
                            i = this.isConst ? s.constPointerType : s.pointerType;
                            var u = Ct(e, this.registeredClass, i.registeredClass);
                            return null === u ? o.call(this) : this.isSmartPointer ? xt(i.registeredClass.instancePrototype, {
                                ptrType: i,
                                ptr: u,
                                smartPtrType: this,
                                smartPtr: t
                            }) : xt(i.registeredClass.instancePrototype, {
                                ptrType: i,
                                ptr: u
                            })
                        }, Vt = t.UnboundTypeError = ct(Error, "UnboundTypeError"), t.count_emval_handles = function() {
                            for (var t = 0, e = 5; e < Xt.length; ++e) void 0 !== Xt[e] && ++t;
                            return t
                        }, t.get_first_emval = function() {
                            for (var t = 5; t < Xt.length; ++t)
                                if (void 0 !== Xt[t]) return Xt[t];
                            return null
                        };
                    var fe, pe = {
                            M: function(t) {
                                var e = new tt(t);
                                return e.get_caught() || e.set_caught(!0), e.set_rethrown(!1), Y.push(e),
                                    function(t) {
                                        t.add_ref()
                                    }(e), e.get_exception_ptr()
                            },
                            v: function() {
                                _setThrew(0),
                                    function(t) {
                                        if (t.release_ref() && !t.get_rethrown()) {
                                            var e = t.get_destructor();
                                            e && Q(e)(t.excPtr), he(t.excPtr)
                                        }
                                    }(Y.pop()), K = 0
                            },
                            c: function() {
                                var t = K;
                                if (!t) return ge(0), 0;
                                var e = new tt(t);
                                e.set_adjusted_ptr(t);
                                var r = e.get_type();
                                if (!r) return ge(0), t;
                                for (var n = 0; n < arguments.length; n++) {
                                    var o = arguments[n];
                                    if (0 === o || o === r) break;
                                    var i = e.ptr + 16;
                                    if (Te(o, r, i)) return ge(o), t
                                }
                                return ge(r), t
                            },
                            j: function() {
                                var t = K;
                                if (!t) return ge(0), 0;
                                var e = new tt(t);
                                e.set_adjusted_ptr(t);
                                var r = e.get_type();
                                if (!r) return ge(0), t;
                                for (var n = 0; n < arguments.length; n++) {
                                    var o = arguments[n];
                                    if (0 === o || o === r) break;
                                    var i = e.ptr + 16;
                                    if (Te(o, r, i)) return ge(o), t
                                }
                                return ge(r), t
                            },
                            i: function(t, e, r) {
                                throw new tt(t).init(e, r), K = t, t
                            },
                            f: function(t) {
                                throw K || (K = t), t
                            },
                            B: function(t) {
                                var e = et[t];
                                delete et[t];
                                var r = e.rawConstructor,
                                    n = e.rawDestructor,
                                    o = e.fields;
                                pt([t], o.map((t => t.getterReturnType)).concat(o.map((t => t.setterArgumentType))), (t => {
                                    var i = {};
                                    return o.forEach(((e, r) => {
                                        var n = e.fieldName,
                                            a = t[r],
                                            s = e.getter,
                                            u = e.getterContext,
                                            c = t[r + o.length],
                                            l = e.setter,
                                            f = e.setterContext;
                                        i[n] = {
                                            read: t => a.fromWireType(s(u, t)),
                                            write: (t, e) => {
                                                var r = [];
                                                l(f, t, c.toWireType(r, e)), rt(r)
                                            }
                                        }
                                    })), [{
                                        name: e.name,
                                        fromWireType: function(t) {
                                            var e = {};
                                            for (var r in i) e[r] = i[r].read(t);
                                            return n(t), e
                                        },
                                        toWireType: function(t, e) {
                                            for (var o in i)
                                                if (!(o in e)) throw new TypeError('Missing field:  "' + o + '"');
                                            var a = r();
                                            for (o in i) i[o].write(a, e[o]);
                                            return null !== t && t.push(n, a), a
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: nt,
                                        destructorFunction: n
                                    }]
                                }))
                            },
                            E: function(t, e, r, n, o) {},
                            J: function(t, e, r, n, o) {
                                var i = dt(r);
                                mt(t, {
                                    name: e = yt(e),
                                    fromWireType: function(t) {
                                        return !!t
                                    },
                                    toWireType: function(t, e) {
                                        return e ? n : o
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: function(t) {
                                        var n;
                                        if (1 === r) n = T;
                                        else if (2 === r) n = C;
                                        else {
                                            if (4 !== r) throw new TypeError("Unknown boolean type size: " + e);
                                            n = _
                                        }
                                        return this.fromWireType(n[t >> i])
                                    },
                                    destructorFunction: null
                                })
                            },
                            z: function(t, e, r, n, o, i, a, s, u, c, l, f, p) {
                                l = yt(l), i = Mt(o, i), s && (s = Mt(a, s)), c && (c = Mt(u, c)), p = Mt(f, p);
                                var d = st(l);
                                Ft(d, (function() {
                                    Nt("Cannot construct " + l + " due to unbound types", [n])
                                })), pt([t, e, r], n ? [n] : [], (function(e) {
                                    var r, o;
                                    e = e[0], o = n ? (r = e.registeredClass).instancePrototype : Ot.prototype;
                                    var a = ut(d, (function() {
                                            if (Object.getPrototypeOf(this) !== u) throw new vt("Use 'new' to construct " + l);
                                            if (void 0 === f.constructor_body) throw new vt(l + " has no accessible constructor");
                                            var t = f.constructor_body[arguments.length];
                                            if (void 0 === t) throw new vt("Tried to invoke ctor of " + l + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(f.constructor_body).toString() + ") parameters instead!");
                                            return t.apply(this, arguments)
                                        })),
                                        u = Object.create(o, {
                                            constructor: {
                                                value: a
                                            }
                                        });
                                    a.prototype = u;
                                    var f = new Wt(l, a, u, p, r, i, s, c),
                                        h = new Ht(l, f, !0, !1, !1),
                                        y = new Ht(l + "*", f, !1, !1, !1),
                                        v = new Ht(l + " const*", f, !1, !0, !1);
                                    return $t[t] = {
                                        pointerType: y,
                                        constPointerType: v
                                    }, Lt(d, a), [h, y, v]
                                }))
                            },
                            y: function(t, e, r, n, o, i) {
                                e > 0 || M(undefined);
                                var a = qt(e, r);
                                o = Mt(n, o), pt([], [t], (function(t) {
                                    var r = "constructor " + (t = t[0]).name;
                                    if (void 0 === t.registeredClass.constructor_body && (t.registeredClass.constructor_body = []), void 0 !== t.registeredClass.constructor_body[e - 1]) throw new vt("Cannot register multiple constructors with identical number of parameters (" + (e - 1) + ") for class '" + t.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
                                    return t.registeredClass.constructor_body[e - 1] = () => {
                                        Nt("Cannot construct " + t.name + " due to unbound types", a)
                                    }, pt([], a, (function(n) {
                                        return n.splice(1, 0, null), t.registeredClass.constructor_body[e - 1] = Gt(r, n, null, o, i), []
                                    })), []
                                }))
                            },
                            a: function(t, e, r, n, o, i, a, s) {
                                var u = qt(r, n);
                                e = yt(e), i = Mt(o, i), pt([], [t], (function(t) {
                                    var n = (t = t[0]).name + "." + e;

                                    function o() {
                                        Nt("Cannot call " + n + " due to unbound types", u)
                                    }
                                    e.startsWith("@@") && (e = Symbol[e.substring(2)]), s && t.registeredClass.pureVirtualFunctions.push(e);
                                    var c = t.registeredClass.instancePrototype,
                                        l = c[e];
                                    return void 0 === l || void 0 === l.overloadTable && l.className !== t.name && l.argCount === r - 2 ? (o.argCount = r - 2, o.className = t.name, c[e] = o) : (Rt(c, e, n), c[e].overloadTable[r - 2] = o), pt([], u, (function(o) {
                                        var s = Gt(n, o, t, i, a);
                                        return void 0 === c[e].overloadTable ? (s.argCount = r - 2, c[e] = s) : c[e].overloadTable[r - 2] = s, []
                                    })), []
                                }))
                            },
                            I: function(t, e) {
                                mt(t, {
                                    name: e = yt(e),
                                    fromWireType: function(t) {
                                        var e = Kt.toValue(t);
                                        return Yt(t), e
                                    },
                                    toWireType: function(t, e) {
                                        return Kt.toHandle(e)
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: nt,
                                    destructorFunction: null
                                })
                            },
                            u: function(t, e, r) {
                                var n = dt(r);
                                mt(t, {
                                    name: e = yt(e),
                                    fromWireType: function(t) {
                                        return t
                                    },
                                    toWireType: function(t, e) {
                                        return e
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: Qt(e, n),
                                    destructorFunction: null
                                })
                            },
                            o: function(t, e, r, n, o, i) {
                                var a = qt(e, r);
                                t = yt(t), o = Mt(n, o), Ft(t, (function() {
                                    Nt("Cannot call " + t + " due to unbound types", a)
                                }), e - 1), pt([], a, (function(r) {
                                    var n = [r[0], null].concat(r.slice(1));
                                    return Lt(t, Gt(t, n, null, o, i), e - 1), []
                                }))
                            },
                            h: function(t, e, r, n, o) {
                                e = yt(e), -1 === o && (o = 4294967295);
                                var i = dt(r),
                                    a = t => t;
                                if (0 === n) {
                                    var s = 32 - 8 * r;
                                    a = t => t << s >>> s
                                }
                                var u = e.includes("unsigned");
                                mt(t, {
                                    name: e,
                                    fromWireType: a,
                                    toWireType: u ? function(t, e) {
                                        return this.name, e >>> 0
                                    } : function(t, e) {
                                        return this.name, e
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: te(e, i, 0 !== n),
                                    destructorFunction: null
                                })
                            },
                            d: function(t, e, r) {
                                var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];

                                function o(t) {
                                    var e = A,
                                        r = e[t >>= 2],
                                        o = e[t + 1];
                                    return new n(b, o, r)
                                }
                                mt(t, {
                                    name: r = yt(r),
                                    fromWireType: o,
                                    argPackAdvance: 8,
                                    readValueFromPointer: o
                                }, {
                                    ignoreDuplicateRegistrations: !0
                                })
                            },
                            t: function(t, e) {
                                var r = "std::string" === (e = yt(e));
                                mt(t, {
                                    name: e,
                                    fromWireType: function(t) {
                                        var e, n = A[t >> 2],
                                            o = t + 4;
                                        if (r)
                                            for (var i = o, a = 0; a <= n; ++a) {
                                                var s = o + a;
                                                if (a == n || 0 == P[s]) {
                                                    var u = R(i, s - i);
                                                    void 0 === e ? e = u : (e += String.fromCharCode(0), e += u), i = s + 1
                                                }
                                            } else {
                                                var c = new Array(n);
                                                for (a = 0; a < n; ++a) c[a] = String.fromCharCode(P[o + a]);
                                                e = c.join("")
                                            }
                                        return ye(t), e
                                    },
                                    toWireType: function(t, e) {
                                        var n;
                                        e instanceof ArrayBuffer && (e = new Uint8Array(e));
                                        var o = "string" == typeof e;
                                        o || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || gt("Cannot pass non-string to std::string"), n = r && o ? function(t) {
                                            for (var e = 0, r = 0; r < t.length; ++r) {
                                                var n = t.charCodeAt(r);
                                                n <= 127 ? e++ : n <= 2047 ? e += 2 : n >= 55296 && n <= 57343 ? (e += 4, ++r) : e += 3
                                            }
                                            return e
                                        }(e) : e.length;
                                        var i = de(4 + n + 1),
                                            a = i + 4;
                                        if (A[i >> 2] = n, r && o) F(e, a, n + 1);
                                        else if (o)
                                            for (var s = 0; s < n; ++s) {
                                                var u = e.charCodeAt(s);
                                                u > 255 && (ye(a), gt("String has UTF-16 code units that do not fit in 8 bits")), P[a + s] = u
                                            } else
                                                for (s = 0; s < n; ++s) P[a + s] = e[s];
                                        return null !== t && t.push(ye, i), i
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: nt,
                                    destructorFunction: function(t) {
                                        ye(t)
                                    }
                                })
                            },
                            q: function(t, e, r) {
                                var n, o, i, a, s;
                                r = yt(r), 2 === e ? (n = re, o = ne, a = oe, i = () => $, s = 1) : 4 === e && (n = ie, o = ae, a = se, i = () => A, s = 2), mt(t, {
                                    name: r,
                                    fromWireType: function(t) {
                                        for (var r, o = A[t >> 2], a = i(), u = t + 4, c = 0; c <= o; ++c) {
                                            var l = t + 4 + c * e;
                                            if (c == o || 0 == a[l >> s]) {
                                                var f = n(u, l - u);
                                                void 0 === r ? r = f : (r += String.fromCharCode(0), r += f), u = l + e
                                            }
                                        }
                                        return ye(t), r
                                    },
                                    toWireType: function(t, n) {
                                        "string" != typeof n && gt("Cannot pass non-string to C++ string type " + r);
                                        var i = a(n),
                                            u = de(4 + i + e);
                                        return A[u >> 2] = i >> s, o(n, u + 4, i + e), null !== t && t.push(ye, u), u
                                    },
                                    argPackAdvance: 8,
                                    readValueFromPointer: nt,
                                    destructorFunction: function(t) {
                                        ye(t)
                                    }
                                })
                            },
                            p: function(t, e, r, n, o, i) {
                                et[t] = {
                                    name: yt(e),
                                    rawConstructor: Mt(r, n),
                                    rawDestructor: Mt(o, i),
                                    fields: []
                                }
                            },
                            C: function(t, e, r, n, o, i, a, s, u, c) {
                                et[t].fields.push({
                                    fieldName: yt(e),
                                    getterReturnType: r,
                                    getter: Mt(n, o),
                                    getterContext: i,
                                    setterArgumentType: a,
                                    setter: Mt(s, u),
                                    setterContext: c
                                })
                            },
                            K: function(t, e) {
                                mt(t, {
                                    isVoid: !0,
                                    name: e = yt(e),
                                    argPackAdvance: 0,
                                    fromWireType: function() {},
                                    toWireType: function(t, e) {}
                                })
                            },
                            O: Yt,
                            P: function(t) {
                                t > 4 && (Xt[t].refcount += 1)
                            },
                            n: function(t, e) {
                                var r, n;
                                void 0 === (n = it[r = t]) && gt("_emval_take_value has unknown type " + zt(r));
                                var o = (t = n).readValueFromPointer(e);
                                return Kt.toHandle(o)
                            },
                            r: function() {
                                M("")
                            },
                            H: function(t, e, r) {
                                P.copyWithin(t, e, e + r)
                            },
                            F: function(t) {
                                var e, r = P.length,
                                    n = 2147483648;
                                if ((t >>>= 0) > n) return !1;
                                for (var o = 1; o <= 4; o *= 2) {
                                    var i = r * (1 + .2 / o);
                                    if (i = Math.min(i, t + 100663296), ue(Math.min(n, (e = Math.max(t, i)) + (65536 - e % 65536) % 65536))) return !0
                                }
                                return !1
                            },
                            G: function(t) {
                                return 52
                            },
                            D: function(t, e, r, n, o) {
                                return 70
                            },
                            s: function(t, e, r, n) {
                                for (var o = 0, i = 0; i < r; i++) {
                                    var a = A[e >> 2],
                                        s = A[e + 4 >> 2];
                                    e += 8;
                                    for (var u = 0; u < s; u++) le(t, P[a + u]);
                                    o += s
                                }
                                return A[n >> 2] = o, 0
                            },
                            b: function(t, e) {
                                var r = me();
                                try {
                                    return Q(t)(e)
                                } catch (t) {
                                    if (we(r), t !== t + 0) throw t;
                                    _setThrew(1, 0)
                                }
                            },
                            A: function(t, e, r) {
                                var n = me();
                                try {
                                    return Q(t)(e, r)
                                } catch (t) {
                                    if (we(n), t !== t + 0) throw t;
                                    _setThrew(1, 0)
                                }
                            },
                            w: function(t, e, r, n) {
                                var o = me();
                                try {
                                    return Q(t)(e, r, n)
                                } catch (t) {
                                    if (we(o), t !== t + 0) throw t;
                                    _setThrew(1, 0)
                                }
                            },
                            e: function(t, e) {
                                var r = me();
                                try {
                                    Q(t)(e)
                                } catch (t) {
                                    if (we(r), t !== t + 0) throw t;
                                    _setThrew(1, 0)
                                }
                            },
                            k: function(t, e, r) {
                                var n = me();
                                try {
                                    Q(t)(e, r)
                                } catch (t) {
                                    if (we(n), t !== t + 0) throw t;
                                    _setThrew(1, 0)
                                }
                            },
                            l: function(t, e, r, n) {
                                var o = me();
                                try {
                                    Q(t)(e, r, n)
                                } catch (t) {
                                    if (we(o), t !== t + 0) throw t;
                                    _setThrew(1, 0)
                                }
                            },
                            x: function(t, e, r, n, o) {
                                var i = me();
                                try {
                                    Q(t)(e, r, n, o)
                                } catch (t) {
                                    if (we(i), t !== t + 0) throw t;
                                    _setThrew(1, 0)
                                }
                            },
                            L: function(t, e, r, n, o, i, a) {
                                var s = me();
                                try {
                                    Q(t)(e, r, n, o, i, a)
                                } catch (t) {
                                    if (we(s), t !== t + 0) throw t;
                                    _setThrew(1, 0)
                                }
                            },
                            m: function(t, e, r, n, o, i, a, s) {
                                var u = me();
                                try {
                                    Q(t)(e, r, n, o, i, a, s)
                                } catch (t) {
                                    if (we(u), t !== t + 0) throw t;
                                    _setThrew(1, 0)
                                }
                            },
                            g: function(t, e, r, n, o, i, a, s, u, c, l) {
                                var f = me();
                                try {
                                    Q(t)(e, r, n, o, i, a, s, u, c, l)
                                } catch (t) {
                                    if (we(f), t !== t + 0) throw t;
                                    _setThrew(1, 0)
                                }
                            },
                            N: function(t) {
                                return t
                            }
                        },
                        de = (function() {
                            var e = {
                                a: pe
                            };

                            function r(e, r) {
                                var n, o = e.exports;
                                t.asm = o, W((g = t.asm.Q).buffer), j = t.asm.U, n = t.asm.R, I.unshift(n),
                                    function() {
                                        if (H--, t.monitorRunDependencies && t.monitorRunDependencies(H), 0 == H && (null !== L && (clearInterval(L), L = null), B)) {
                                            var e = B;
                                            B = null, e()
                                        }
                                    }()
                            }

                            function n(t) {
                                r(t.instance)
                            }

                            function i(t) {
                                return function() {
                                    if (!v && (l || f)) {
                                        if ("function" == typeof fetch && !q(V)) return fetch(V, {
                                            credentials: "same-origin"
                                        }).then((function(t) {
                                            if (!t.ok) throw "failed to load wasm binary file at '" + V + "'";
                                            return t.arrayBuffer()
                                        })).catch((function() {
                                            return G(V)
                                        }));
                                        if (a) return new Promise((function(t, e) {
                                            a(V, (function(e) {
                                                t(new Uint8Array(e))
                                            }), e)
                                        }))
                                    }
                                    return Promise.resolve().then((function() {
                                        return G(V)
                                    }))
                                }().then((function(t) {
                                    return WebAssembly.instantiate(t, e)
                                })).then((function(t) {
                                    return t
                                })).then(t, (function(t) {
                                    w("failed to asynchronously prepare wasm: " + t), M(t)
                                }))
                            }
                            if (H++, t.monitorRunDependencies && t.monitorRunDependencies(H), t.instantiateWasm) try {
                                return t.instantiateWasm(e, r)
                            } catch (t) {
                                w("Module.instantiateWasm callback failed with error: " + t), o(t)
                            }(v || "function" != typeof WebAssembly.instantiateStreaming || N(V) || q(V) || p || "function" != typeof fetch ? i(n) : fetch(V, {
                                credentials: "same-origin"
                            }).then((function(t) {
                                return WebAssembly.instantiateStreaming(t, e).then(n, (function(t) {
                                    return w("wasm streaming compile failed: " + t), w("falling back to ArrayBuffer instantiation"), i(n)
                                }))
                            }))).catch(o)
                        }(), t.___wasm_call_ctors = function() {
                            return (t.___wasm_call_ctors = t.asm.R).apply(null, arguments)
                        }, t._malloc = function() {
                            return (de = t._malloc = t.asm.S).apply(null, arguments)
                        }),
                        he = t.___cxa_free_exception = function() {
                            return (he = t.___cxa_free_exception = t.asm.T).apply(null, arguments)
                        },
                        ye = t._free = function() {
                            return (ye = t._free = t.asm.V).apply(null, arguments)
                        },
                        ve = t.___getTypeName = function() {
                            return (ve = t.___getTypeName = t.asm.W).apply(null, arguments)
                        },
                        ge = (t.__embind_initialize_bindings = function() {
                            return (t.__embind_initialize_bindings = t.asm.X).apply(null, arguments)
                        }, t.setTempRet0 = function() {
                            return (ge = t.setTempRet0 = t.asm.Y).apply(null, arguments)
                        }),
                        me = t.stackSave = function() {
                            return (me = t.stackSave = t.asm.Z).apply(null, arguments)
                        },
                        we = t.stackRestore = function() {
                            return (we = t.stackRestore = t.asm._).apply(null, arguments)
                        },
                        be = t.stackAlloc = function() {
                            return (be = t.stackAlloc = t.asm.$).apply(null, arguments)
                        },
                        Te = t.___cxa_can_catch = function() {
                            return (Te = t.___cxa_can_catch = t.asm.aa).apply(null, arguments)
                        },
                        Pe = t.___cxa_is_pointer_type = function() {
                            return (Pe = t.___cxa_is_pointer_type = t.asm.ba).apply(null, arguments)
                        };

                    function Ce(r) {
                        function n() {
                            fe || (fe = !0, t.calledRun = !0, x || (X(I), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), function() {
                                if (t.postRun)
                                    for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length;) e = t.postRun.shift(), U.unshift(e);
                                var e;
                                X(U)
                            }()))
                        }
                        r = r || c, H > 0 || (function() {
                            if (t.preRun)
                                for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length;) e = t.preRun.shift(), D.unshift(e);
                            var e;
                            X(D)
                        }(), H > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout((function() {
                            setTimeout((function() {
                                t.setStatus("")
                            }), 1), n()
                        }), 1)) : n()))
                    }
                    if (t.dynCall_ji = function() {
                            return (t.dynCall_ji = t.asm.ca).apply(null, arguments)
                        }, t.dynCall_iiji = function() {
                            return (t.dynCall_iiji = t.asm.da).apply(null, arguments)
                        }, t.dynCall_jiji = function() {
                            return (t.dynCall_jiji = t.asm.ea).apply(null, arguments)
                        }, t.ccall = function(e, r, n, o, i) {
                            var a = {
                                    string: t => {
                                        var e = 0;
                                        if (null != t && 0 !== t) {
                                            var r = 1 + (t.length << 2);
                                            F(t, e = be(r), r)
                                        }
                                        return e
                                    },
                                    array: t => {
                                        var e = be(t.length);
                                        return function(t, e) {
                                            T.set(t, e)
                                        }(t, e), e
                                    }
                                },
                                s = function(e) {
                                    return t["_" + e]
                                }(e),
                                u = [],
                                c = 0;
                            if (o)
                                for (var l = 0; l < o.length; l++) {
                                    var f = a[n[l]];
                                    f ? (0 === c && (c = me()), u[l] = f(o[l])) : u[l] = o[l]
                                }
                            var p = s.apply(null, u);
                            return function(t) {
                                return 0 !== c && we(c),
                                    function(t) {
                                        return "string" === r ? R(t) : "boolean" === r ? Boolean(t) : t
                                    }(t)
                            }(p)
                        }, B = function t() {
                            fe || Ce(), fe || (B = t)
                        }, t.preInit)
                        for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0;) t.preInit.pop()();
                    return Ce(), t.ready
                });
                t.exports = o
            },
            716: () => {},
            401: () => {},
            491: () => {},
            33: () => {},
            261: () => {},
            926: () => {},
            280: () => {},
            103: () => {}
        },
        n = {};

    function o(t) {
        var e = n[t];
        if (void 0 !== e) return e.exports;
        var i = n[t] = {
            exports: {}
        };
        return r[t].call(i.exports, i, i.exports, o), i.exports
    }
    o.m = r, o.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return o.d(e, {
            a: e
        }), e
    }, e = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__, o.t = function(r, n) {
        if (1 & n && (r = this(r)), 8 & n) return r;
        if ("object" == typeof r && r) {
            if (4 & n && r.__esModule) return r;
            if (16 & n && "function" == typeof r.then) return r
        }
        var i = Object.create(null);
        o.r(i);
        var a = {};
        t = t || [null, e({}), e([]), e(e)];
        for (var s = 2 & n && r;
            "object" == typeof s && !~t.indexOf(s); s = e(s)) Object.getOwnPropertyNames(s).forEach((t => a[t] = () => r[t]));
        return a.default = () => r, o.d(i, a), i
    }, o.d = (t, e) => {
        for (var r in e) o.o(e, r) && !o.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, o.f = {}, o.e = t => Promise.all(Object.keys(o.f).reduce(((e, r) => (o.f[r](t, e), e)), [])), o.u = t => t + ".min.worker.js", o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), o.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, (() => {
        var t;
        o.g.importScripts && (t = o.g.location + "");
        var e = o.g.document;
        if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
            var r = e.getElementsByTagName("script");
            if (r.length)
                for (var n = r.length - 1; n > -1 && !t;) t = r[n--].src
        }
        if (!t) throw new Error("Automatic publicPath is not supported in this browser");
        t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = t
    })(), (() => {
        var t = {
            362: 1
        };
        o.f.i = (e, r) => {
            t[e] || importScripts(o.p + o.u(e))
        };
        var e = self.webpackChunk = self.webpackChunk || [],
            r = e.push.bind(e);
        e.push = e => {
            var [n, i, a] = e;
            for (var s in i) o.o(i, s) && (o.m[s] = i[s]);
            for (a && a(o); n.length;) t[n.pop()] = 1;
            r(e)
        }
    })(), (() => {
        "use strict";
        const t = {};
        let e, r = !1;

        function n(n) {
            if (t[n.taskType]) return console.log('attempt to register duplicate task handler "', n.taskType, '"'), !1;
            t[n.taskType] = n, r && n.initialize(e.taskConfiguration)
        }
        self.onmessage = async function(o) {
            if (o.data.taskType)
                if ("initialize" !== o.data.taskType) {
                    if ("loadWebWorkerTask" === o.data.taskType) return i = o.data, e = i.config, void self.importScripts(i.sourcePath);
                    var i;
                    if (t[o.data.taskType]) try {
                        t[o.data.taskType].handler(o.data, (function(t, e) {
                            self.postMessage({
                                taskType: o.data.taskType,
                                status: "success",
                                result: t,
                                workerIndex: o.data.workerIndex
                            }, e)
                        }))
                    } catch (t) {
                        console.log(`task ${o.data.taskType} failed - ${t.message}`, t), self.postMessage({
                            taskType: o.data.taskType,
                            status: "failed",
                            result: t.message,
                            workerIndex: o.data.workerIndex
                        })
                    } else console.log("no task handler for ", o.data.taskType), console.log(t), self.postMessage({
                        taskType: o.data.taskType,
                        status: "failed - no task handler registered",
                        workerIndex: o.data.workerIndex
                    })
                } else ! function(o) {
                    if (!r) {
                        if (e = o.config, self.registerTaskHandler = n, o.config.webWorkerTaskPaths)
                            for (let t = 0; t < o.config.webWorkerTaskPaths.length; t++) self.importScripts(o.config.webWorkerTaskPaths[t]);
                        Object.keys(t).forEach((function(r) {
                            t[r].initialize(e.taskConfiguration)
                        })), self.postMessage({
                            taskType: "initialize",
                            status: "success",
                            result: {},
                            workerIndex: o.workerIndex
                        }), r = !0
                    }
                }(o.data);
            else console.log(o.data)
        };
        var i = o(272),
            a = o.n(i);
        const s = o.p + "65916ef3def695744bda.wasm",
            u = {
                codec: void 0,
                decoder: void 0,
                decodeConfig: {}
            };

        function c(t) {
            if (u.decodeConfig = t, u.codec) return Promise.resolve();
            const e = a()({
                locateFile: t => t.endsWith(".wasm") ? s.toString() : t
            });
            return new Promise(((t, r) => {
                e.then((e => {
                    u.codec = e, u.decoder = new e.J2KDecoder, t()
                }), r)
            }))
        }
        const l = async function(t, e) {
            await c();
            const r = u.decoder,
                n = r.getEncodedBuffer(t.length);
            n.set(t), r.decode();
            const o = r.getFrameInfo(),
                i = r.getDecodedBuffer();
            new Uint8Array(i.length).set(i);
            const a = `x: ${r.getImageOffset().x}, y: ${r.getImageOffset().y}`,
                s = r.getNumDecompositions(),
                l = r.getNumLayers(),
                f = ["unknown", "LRCP", "RLCP", "RPCL", "PCRL", "CPRL"][r.getProgressionOrder() + 1],
                p = r.getIsReversible(),
                d = `${r.getBlockDimensions().width} x ${r.getBlockDimensions().height}`,
                h = `${r.getTileSize().width} x ${r.getTileSize().height}`,
                y = `${r.getTileOffset().x}, ${r.getTileOffset().y}`,
                v = r.getColorSpace(),
                g = `${i.length.toLocaleString()} bytes`,
                m = `${(i.length/n.length).toFixed(2)}:1`,
                w = {
                    columns: o.width,
                    rows: o.height,
                    bitsPerPixel: o.bitsPerSample,
                    signed: o.isSigned,
                    bytesPerPixel: e.bytesPerPixel,
                    componentsPerPixel: o.componentCount
                },
                b = function(t, e) {
                    return t.bitsPerSample > 8 ? t.isSigned ? new Int16Array(e.buffer, e.byteOffset, e.byteLength / 2) : new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2) : t.isSigned ? new Int8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                }(o, i),
                T = {
                    imageOffset: a,
                    numDecompositions: s,
                    numLayers: l,
                    progessionOrder: f,
                    reversible: p,
                    blockDimensions: d,
                    tileSize: h,
                    tileOffset: y,
                    colorTransform: v,
                    decodedSize: g,
                    compressionRatio: m
                };
            return { ...e,
                pixelData: b,
                imageInfo: w,
                encodeOptions: T,
                ...T,
                ...w
            }
        };
        var f = o(37),
            p = o.n(f);
        const d = o.p + "5004fdc02f329ce53b69.wasm",
            h = {
                codec: void 0,
                decoder: void 0,
                decodeConfig: {}
            };

        function y(t) {
            if (h.decodeConfig = t, h.codec) return Promise.resolve();
            const e = p()({
                locateFile: t => t.endsWith(".wasm") ? d.toString() : t
            });
            return new Promise(((t, r) => {
                e.then((e => {
                    h.codec = e, h.decoder = new e.JpegLSDecoder, t()
                }), r)
            }))
        }
        const v = function(t) {
            let e, r = t[0],
                n = t[0];
            const o = t.length;
            for (let i = 1; i < o; i++) e = t[i], r = Math.min(r, e), n = Math.max(n, e);
            return {
                min: r,
                max: n
            }
        };

        function g(t) {
            return "number" == typeof t
        }
        var m = o(851),
            w = o.n(m);
        const b = o.p + "c22b37c3488e1d6c3aa4.wasm",
            T = {
                codec: void 0,
                decoder: void 0
            },
            P = {
                JpegImage: void 0,
                decodeConfig: {}
            },
            C = async function(t, e) {
                if (await (P.decodeConfig = void 0, P.JpegImage ? Promise.resolve() : new Promise(((t, e) => {
                        o.e(945).then(o.t.bind(o, 945, 23)).then((e => {
                            let {
                                JpegImage: r
                            } = e;
                            P.JpegImage = r, t()
                        }), e)
                    }))), void 0 === P.JpegImage) throw new Error("No JPEG Baseline decoder loaded");
                const r = new P.JpegImage;
                return r.parse(e), r.colorTransform = !1, 8 === t.bitsAllocated ? (t.pixelData = r.getData(t.columns, t.rows), t) : 16 === t.bitsAllocated ? (t.pixelData = r.getData16(t.columns, t.rows), t) : void 0
            },
            $ = {
                jpeg: void 0,
                decodeConfig: {}
            },
            _ = async function(t, e) {
                if (await ($.decodeConfig = void 0, $.jpeg ? Promise.resolve() : new Promise(((t, e) => {
                        o.e(610).then(o.t.bind(o, 610, 23)).then((e => {
                            $.jpeg = e, t()
                        }), e)
                    }))), void 0 === $.jpeg || void 0 === $.jpeg.lossless || void 0 === $.jpeg.lossless.Decoder) throw new Error("No JPEG Lossless decoder loaded");
                const r = t.bitsAllocated <= 8 ? 1 : 2,
                    n = e.buffer,
                    i = (new $.jpeg.lossless.Decoder).decode(n, e.byteOffset, e.length, r);
                return 0 === t.pixelRepresentation ? 16 === t.bitsAllocated ? (t.pixelData = new Uint16Array(i.buffer), t) : (t.pixelData = new Uint8Array(i.buffer), t) : (t.pixelData = new Int16Array(i.buffer), t)
            };
        var A = o(430),
            k = o.n(A);
        const S = o.p + "75788f12450d4c5ed494.wasm",
            x = {
                codec: void 0,
                decoder: void 0,
                decodeConfig: {}
            };

        function E(t, e, r) {
            const n = function(t, e) {
                    let r;
                    return Number.isInteger(t) && Number.isInteger(e) ? t >= 0 ? e <= 255 ? r = Uint8Array : e <= 65535 && (r = Uint16Array) : t >= -128 && e <= 127 ? r = Int8Array : t >= -32768 && e <= 32767 && (r = Int16Array) : r = Float32Array, r
                }(t, e),
                o = new n(r.pixelData.length);
            return o.set(r.pixelData, 0), o
        }

        function O(t) {
            if (!t) throw new Error("options.preScale.scalingParameters must be defined if preScale.enabled is true, and scalingParameters cannot be derived from the metadata providers.")
        }
        const R = async function(t, e, r, n, o, i) {
            const a = (new Date).getTime();
            let s, u = null;
            switch (e) {
                case "1.2.840.10008.1.2":
                case "1.2.840.10008.1.2.1":
                case "1.2.840.10008.1.2.1.99":
                    u = async function(t, e) {
                        let r = e.buffer,
                            n = e.byteOffset;
                        const o = e.length;
                        return 16 === t.bitsAllocated ? (n % 2 && (r = r.slice(n), n = 0), 0 === t.pixelRepresentation ? t.pixelData = new Uint16Array(r, n, o / 2) : t.pixelData = new Int16Array(r, n, o / 2)) : 8 === t.bitsAllocated || 1 === t.bitsAllocated ? t.pixelData = e : 32 === t.bitsAllocated && (n % 2 && (r = r.slice(n), n = 0), t.pixelData = new Float32Array(r, n, o / 4)), t
                    }(t, r);
                    break;
                case "1.2.840.10008.1.2.2":
                    u = async function(t, e) {
                        if (16 === t.bitsAllocated) {
                            let n = e.buffer,
                                o = e.byteOffset;
                            const i = e.length;
                            o % 2 && (n = n.slice(o), o = 0), 0 === t.pixelRepresentation ? t.pixelData = new Uint16Array(n, o, i / 2) : t.pixelData = new Int16Array(n, o, i / 2);
                            for (let e = 0; e < t.pixelData.length; e++) t.pixelData[e] = (255 & (r = t.pixelData[e])) << 8 | r >> 8 & 255
                        } else 8 === t.bitsAllocated && (t.pixelData = e);
                        var r;
                        return t
                    }(t, r);
                    break;
                case "1.2.840.10008.1.2.5":
                    u = async function(t, e) {
                        if (8 === t.bitsAllocated) return t.planarConfiguration ? function(t, e) {
                            const r = e,
                                n = t.rows * t.columns,
                                o = new ArrayBuffer(n * t.samplesPerPixel),
                                i = new DataView(r.buffer, r.byteOffset),
                                a = new Int8Array(r.buffer, r.byteOffset),
                                s = new Int8Array(o);
                            let u = 0;
                            const c = i.getInt32(0, !0);
                            for (let t = 0; t < c; ++t) {
                                u = t * n;
                                let e = i.getInt32(4 * (t + 1), !0),
                                    o = i.getInt32(4 * (t + 2), !0);
                                0 === o && (o = r.length);
                                const l = n * c;
                                for (; e < o;) {
                                    const t = a[e++];
                                    if (t >= 0 && t <= 127)
                                        for (let r = 0; r < t + 1 && u < l; ++r) s[u] = a[e++], u++;
                                    else if (t <= -1 && t >= -127) {
                                        const r = a[e++];
                                        for (let e = 0; e < 1 - t && u < l; ++e) s[u] = r, u++
                                    }
                                }
                            }
                            return t.pixelData = new Uint8Array(o), t
                        }(t, e) : function(t, e) {
                            const r = e,
                                n = t.rows * t.columns,
                                o = new ArrayBuffer(n * t.samplesPerPixel),
                                i = new DataView(r.buffer, r.byteOffset),
                                a = new Int8Array(r.buffer, r.byteOffset),
                                s = new Int8Array(o);
                            let u = 0;
                            const c = i.getInt32(0, !0);
                            for (let e = 0; e < c; ++e) {
                                u = e;
                                let o = i.getInt32(4 * (e + 1), !0),
                                    l = i.getInt32(4 * (e + 2), !0);
                                0 === l && (l = r.length);
                                const f = n * c;
                                for (; o < l;) {
                                    const e = a[o++];
                                    if (e >= 0 && e <= 127)
                                        for (let r = 0; r < e + 1 && u < f; ++r) s[u] = a[o++], u += t.samplesPerPixel;
                                    else if (e <= -1 && e >= -127) {
                                        const r = a[o++];
                                        for (let n = 0; n < 1 - e && u < f; ++n) s[u] = r, u += t.samplesPerPixel
                                    }
                                }
                            }
                            return t.pixelData = new Uint8Array(o), t
                        }(t, e);
                        if (16 === t.bitsAllocated) return function(t, e) {
                            const r = e,
                                n = t.rows * t.columns,
                                o = new ArrayBuffer(n * t.samplesPerPixel * 2),
                                i = new DataView(r.buffer, r.byteOffset),
                                a = new Int8Array(r.buffer, r.byteOffset),
                                s = new Int8Array(o),
                                u = i.getInt32(0, !0);
                            for (let t = 0; t < u; ++t) {
                                let e = 0;
                                const o = 0 === t ? 1 : 0;
                                let u = i.getInt32(4 * (t + 1), !0),
                                    c = i.getInt32(4 * (t + 2), !0);
                                for (0 === c && (c = r.length); u < c;) {
                                    const t = a[u++];
                                    if (t >= 0 && t <= 127)
                                        for (let r = 0; r < t + 1 && e < n; ++r) s[2 * e + o] = a[u++], e++;
                                    else if (t <= -1 && t >= -127) {
                                        const r = a[u++];
                                        for (let i = 0; i < 1 - t && e < n; ++i) s[2 * e + o] = r, e++
                                    }
                                }
                            }
                            return 0 === t.pixelRepresentation ? t.pixelData = new Uint16Array(o) : t.pixelData = new Int16Array(o), t
                        }(t, e);
                        throw new Error("unsupported pixel format for RLE")
                    }(t, r);
                    break;
                case "1.2.840.10008.1.2.4.50":
                    s = { ...t
                    }, u = async function(t, e) {
                        await
                        function() {
                            if (T.codec) return Promise.resolve();
                            const t = w()({
                                locateFile: t => t.endsWith(".wasm") ? b.toString() : t
                            });
                            return new Promise(((e, r) => {
                                t.then((t => {
                                    T.codec = t, T.decoder = new t.JPEGDecoder, e()
                                }), r)
                            }))
                        }();
                        const r = T.decoder;
                        r.getEncodedBuffer(t.length).set(t), r.decode();
                        const n = r.getFrameInfo(),
                            o = r.getDecodedBuffer(),
                            i = {
                                columns: n.width,
                                rows: n.height,
                                bitsPerPixel: n.bitsPerSample,
                                signed: e.signed,
                                bytesPerPixel: e.bytesPerPixel,
                                componentsPerPixel: n.componentCount
                            },
                            a = function(t, e) {
                                return t.isSigned ? new Int8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                            }(n, o),
                            s = {
                                frameInfo: n
                            };
                        return { ...e,
                            pixelData: a,
                            imageInfo: i,
                            encodeOptions: s,
                            ...s,
                            ...i
                        }
                    }(r, s);
                    break;
                case "1.2.840.10008.1.2.4.51":
                    u = C(t, r);
                    break;
                case "1.2.840.10008.1.2.4.57":
                case "1.2.840.10008.1.2.4.70":
                    u = _(t, r);
                    break;
                case "1.2.840.10008.1.2.4.80":
                case "1.2.840.10008.1.2.4.81":
                    s = {
                        signed: 1 === t.pixelRepresentation,
                        bytesPerPixel: t.bitsAllocated <= 8 ? 1 : 2,
                        ...t
                    }, u = async function(t, e) {
                        try {
                            await y();
                            const r = h.decoder;
                            r.getEncodedBuffer(t.length).set(t), r.decode();
                            const n = r.getFrameInfo(),
                                o = r.getInterleaveMode(),
                                i = r.getNearLossless(),
                                a = r.getDecodedBuffer(),
                                s = {
                                    columns: n.width,
                                    rows: n.height,
                                    bitsPerPixel: n.bitsPerSample,
                                    signed: e.signed,
                                    bytesPerPixel: e.bytesPerPixel,
                                    componentsPerPixel: n.componentCount
                                },
                                u = function(t, e, r) {
                                    return t.bitsPerSample > 8 ? r ? new Int16Array(e.buffer, e.byteOffset, e.byteLength / 2) : new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2) : r ? new Int8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                                }(n, a, e.signed),
                                c = {
                                    nearLossless: i,
                                    interleaveMode: o,
                                    frameInfo: n
                                };
                            return { ...e,
                                pixelData: u,
                                imageInfo: s,
                                encodeOptions: c,
                                ...c,
                                ...s
                            }
                        } catch (t) {
                            throw "number" == typeof(r = t) ? h.codec.getExceptionMessage(r) : r
                        }
                        var r
                    }(r, s);
                    break;
                case "1.2.840.10008.1.2.4.90":
                case "1.2.840.10008.1.2.4.91":
                    s = { ...t
                    }, u = l(r, s);
                    break;
                case "3.2.840.10008.1.2.4.96":
                    s = { ...t
                    }, u = async function(t, e) {
                        await
                        function() {
                            if (x.decodeConfig = void 0, x.codec) return Promise.resolve();
                            const t = k()({
                                locateFile: t => t.endsWith(".wasm") ? S : t
                            });
                            return new Promise(((e, r) => {
                                t.then((t => {
                                    x.codec = t, x.decoder = new t.HTJ2KDecoder, e()
                                }), r)
                            }))
                        }();
                        const r = x.decoder,
                            n = r.getEncodedBuffer(t.length);
                        n.set(t), r.decode();
                        const o = r.getFrameInfo(),
                            i = r.getDecodedBuffer();
                        new Uint8Array(i.length).set(i);
                        const a = `x: ${r.getImageOffset().x}, y: ${r.getImageOffset().y}`,
                            s = r.getNumDecompositions(),
                            u = r.getNumLayers(),
                            c = ["unknown", "LRCP", "RLCP", "RPCL", "PCRL", "CPRL"][r.getProgressionOrder() + 1],
                            l = r.getIsReversible(),
                            f = `${r.getBlockDimensions().width} x ${r.getBlockDimensions().height}`,
                            p = `${r.getTileSize().width} x ${r.getTileSize().height}`,
                            d = `${r.getTileOffset().x}, ${r.getTileOffset().y}`,
                            h = `${i.length.toLocaleString()} bytes`,
                            y = `${(i.length/n.length).toFixed(2)}:1`,
                            v = {
                                columns: o.width,
                                rows: o.height,
                                bitsPerPixel: o.bitsPerSample,
                                signed: o.isSigned,
                                bytesPerPixel: e.bytesPerPixel,
                                componentsPerPixel: o.componentCount
                            };
                        let g = function(t, e) {
                            return t.bitsPerSample > 8 ? t.isSigned ? new Int16Array(e.buffer, e.byteOffset, e.byteLength / 2) : new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2) : t.isSigned ? new Int8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                        }(o, i);
                        const {
                            buffer: m,
                            byteOffset: w,
                            byteLength: b
                        } = g, T = m.slice(w, w + b);
                        g = new g.constructor(T);
                        const P = {
                            imageOffset: a,
                            numDecompositions: s,
                            numLayers: u,
                            progessionOrder: c,
                            reversible: l,
                            blockDimensions: f,
                            tileSize: p,
                            tileOffset: d,
                            decodedSize: h,
                            compressionRatio: y
                        };
                        return { ...e,
                            pixelData: g,
                            imageInfo: v,
                            encodeOptions: P,
                            ...P,
                            ...v
                        }
                    }(r, s);
                    break;
                default:
                    throw new Error(`no decoder for transfer syntax ${e}`)
            }
            if (!u) throw new Error("decodePromise not defined");
            const c = function(t, e, r, n) {
                const {
                    use16BitDataType: o
                } = n || {}, i = void 0 !== t.pixelRepresentation && 1 === t.pixelRepresentation, a = i && void 0 !== t.bitsStored ? 32 - t.bitsStored : void 0;
                if (i && void 0 !== a)
                    for (let e = 0; e < t.pixelData.length; e++) t.pixelData[e] = t.pixelData[e] << a >> a;
                let s = t.pixelData;
                t.pixelDataLength = t.pixelData.length;
                const {
                    min: u,
                    max: c
                } = v(t.pixelData), l = {
                    Uint8Array,
                    Uint16Array: o ? Uint16Array : void 0,
                    Int16Array: o ? Int16Array : void 0,
                    Float32Array
                }, f = e.targetBuffer ? .type, p = !("RGB" !== (d = t.photometricInterpretation) && "PALETTE COLOR" !== d && "YBR_FULL" !== d && "YBR_FULL_422" !== d && "YBR_PARTIAL_422" !== d && "YBR_PARTIAL_420" !== d && "YBR_RCT" !== d && "YBR_ICT" !== d || void 0 !== e.targetBuffer ? .offset);
                var d;
                s = f && !p ? function(t, e, r) {
                    const {
                        arrayBuffer: n,
                        type: o,
                        offset: i = 0,
                        length: a
                    } = t.targetBuffer, s = e.pixelDataLength, u = i, c = null != a ? a : s - u, l = r[o];
                    if (!l) throw new Error(`target array ${o} is not supported`);
                    const f = e.pixelData;
                    if (c !== f.length) throw new Error(`target array for image does not have the same length (${c}) as the decoded image length (${f.length}).`);
                    const p = n ? new l(n, u, c) : new l(c);
                    return p.set(f, 0), p
                }(e, t, l) : e.preScale.enabled ? function(t, e, r, n) {
                    const o = t.preScale.scalingParameters;
                    O(o);
                    const {
                        rescaleSlope: i,
                        rescaleIntercept: a
                    } = o;
                    let s = e,
                        u = r;
                    return "number" == typeof i && "number" == typeof a && (s = i * e + a, u = i * r + a), E(s, u, n)
                }(e, u, c, t) : E(u, c, t);
                let h = u,
                    y = c;
                if (e.preScale.enabled) {
                    const r = e.preScale.scalingParameters;
                    O(r);
                    const {
                        rescaleSlope: n,
                        rescaleIntercept: o,
                        suvbw: i
                    } = r;
                    if ("number" == typeof n && "number" == typeof o) {
                        ! function(t, e) {
                            const r = t.length,
                                {
                                    rescaleSlope: n,
                                    rescaleIntercept: o,
                                    suvbw: i
                                } = e;
                            if ("PT" === e.modality && "number" == typeof i)
                                for (let e = 0; e < r; e++) t[e] = i * (t[e] * n + o);
                            else
                                for (let e = 0; e < r; e++) t[e] = t[e] * n + o
                        }(s, r), t.preScale = { ...e.preScale,
                            scaled: !0
                        };
                        const {
                            rescaleIntercept: n,
                            rescaleSlope: o,
                            suvbw: i
                        } = r;
                        h = o * u + n, y = o * c + n, i && (h *= i, y *= i)
                    }
                }
                void 0 !== e.targetBuffer && e.isSharedArrayBuffer || (t.pixelData = s), t.minAfterScale = h, t.maxAfterScale = y;
                const g = (new Date).getTime();
                return t.decodeTimeInMS = g - r, t
            }(await u, o, a, n);
            return i ? .(c), c
        };
        let F;

        function W(t) {
            t.decodeTask.initializeCodecsOnStartup && (c(t.decodeTask), y(t.decodeTask))
        }
        const j = {
            taskType: "decodeTask",
            handler: async function(t, e) {
                W(F);
                const r = F && F.decodeTask && F.decodeTask.strict,
                    n = new Uint8Array(t.data.pixelData),
                    o = await R(t.data.imageFrame, t.data.transferSyntax, n, Object.assign(F.decodeTask, t.data.decodeConfig), t.data.options);
                if (!o.pixelData) throw new Error("decodeTask: imageFrame.pixelData is undefined after decoding");
                return function(t) {
                    let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    const r = void 0 !== t.minAfterScale || void 0 !== t.maxAfterScale ? {
                            min: t.minAfterScale,
                            max: t.maxAfterScale
                        } : v(t.pixelData),
                        n = !(g(t.smallestPixelValue) && g(t.largestPixelValue));
                    !0 !== e || n ? (t.smallestPixelValue = r.min, t.largestPixelValue = r.max) : (t.smallestPixelValue !== r.min && console.warn("Image smallestPixelValue tag is incorrect. Rendering performance will suffer considerably."), t.largestPixelValue !== r.max && console.warn("Image largestPixelValue tag is incorrect. Rendering performance will suffer considerably."))
                }(o, r), o.pixelData = o.pixelData.buffer, e ? .(o, [o.pixelData]), {
                    result: o,
                    transferList: [o.pixelData]
                }
            },
            initialize: function(t) {
                F = t, W(t)
            }
        };
        n(j)
    })()
})();