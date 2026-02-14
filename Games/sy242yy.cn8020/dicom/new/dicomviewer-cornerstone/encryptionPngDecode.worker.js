self.encryptionPngDecode ? console.warn("Duplicate registration for encryptionPngDecode") : self.registerTaskHandler({
    taskType: "encryptionPngDecode",
    handler,
    initialize
});
const PNG = function() {
        const t = function() {
                function t() {
                    this.pos = 0, this.bufferLength = 0, this.eof = !1, this.buffer = null
                }
                return t.prototype = {
                    ensureBuffer: function(t) {
                        const e = this.buffer,
                            s = e ? e.byteLength : 0;
                        if (t < s) return e;
                        let i = 512;
                        for (; i < t;) i <<= 1;
                        let r = new Uint8Array(i);
                        for (let t = 0; t < s; ++t) r[t] = e[t];
                        return this.buffer = r
                    },
                    getByte: function() {
                        const t = this.pos;
                        for (; this.bufferLength <= t;) {
                            if (this.eof) return null;
                            this.readBlock()
                        }
                        return this.buffer[this.pos++]
                    },
                    getBytes: function(t) {
                        const e = this.pos;
                        let s;
                        if (t) {
                            for (this.ensureBuffer(e + t), s = e + t; !this.eof && this.bufferLength < s;) this.readBlock();
                            const i = this.bufferLength;
                            s > i && (s = i)
                        } else {
                            for (; !this.eof;) this.readBlock();
                            s = this.bufferLength
                        }
                        return this.pos = s, this.buffer.subarray(e, s)
                    },
                    lookChar: function() {
                        const t = this.pos;
                        for (; this.bufferLength <= t;) {
                            if (this.eof) return null;
                            this.readBlock()
                        }
                        return String.fromCharCode(this.buffer[this.pos])
                    },
                    getChar: function() {
                        const t = this.pos;
                        for (; this.bufferLength <= t;) {
                            if (this.eof) return null;
                            this.readBlock()
                        }
                        return String.fromCharCode(this.buffer[this.pos++])
                    },
                    skip: function(t) {
                        t || (t = 1), this.pos += t
                    },
                    reset: function() {
                        this.pos = 0
                    }
                }, t
            }(),
            e = function() {
                const e = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                    s = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]),
                    i = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]),
                    r = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9],
                    n = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];

                function a(t) {
                    throw new Error(t)
                }

                function o(e) {
                    let s = 0;
                    const i = e[s++],
                        r = e[s++]; - 1 != i && -1 != r || a("Invalid header in flate stream"), 8 != (15 & i) && a("Unknown compression method in flate stream"), ((i << 8) + r) % 31 != 0 && a("Bad FCHECK in flate stream"), 32 & r && a("FDICT bit set in flate stream"), this.bytes = e, this.bytesPos = 2, this.codeSize = 0, this.codeBuf = 0, t.call(this)
                }
                return o.prototype = Object.create(t.prototype), o.prototype.getBits = function(t) {
                    const e = this.bytes;
                    let s, i = this.codeSize,
                        r = this.codeBuf,
                        n = this.bytesPos;
                    for (; i < t;) void 0 === (s = e[n++]) && a("Bad encoding in flate stream"), r |= s << i, i += 8;
                    return s = r & (1 << t) - 1, this.codeBuf = r >> t, this.codeSize = i -= t, this.bytesPos = n, s
                }, o.prototype.getCode = function(t) {
                    const e = t[0],
                        s = t[1],
                        i = this.bytes;
                    let r = this.codeSize,
                        n = this.codeBuf,
                        o = this.bytesPos;
                    for (; r < s;) {
                        let t;
                        void 0 === (t = i[o++]) && a("Bad encoding in flate stream"), n |= t << r, r += 8
                    }
                    const h = e[n & (1 << s) - 1],
                        f = h >> 16,
                        c = 65535 & h;
                    return (0 == r || r < f || 0 == f) && a("Bad encoding in flate stream"), this.codeBuf = n >> f, this.codeSize = r - f, this.bytesPos = o, c
                }, o.prototype.generateHuffmanTable = function(t) {
                    const e = t.length;
                    let s = 0;
                    for (let i = 0; i < e; ++i) t[i] > s && (s = t[i]);
                    const i = 1 << s,
                        r = new Uint32Array(i);
                    for (let n = 1, a = 0, o = 2; n <= s; ++n, a <<= 1, o <<= 1)
                        for (let s = 0; s < e; ++s)
                            if (t[s] == n) {
                                let t = 0,
                                    e = a;
                                for (let s = 0; s < n; ++s) t = t << 1 | 1 & e, e >>= 1;
                                for (let e = t; e < i; e += o) r[e] = n << 16 | s;
                                ++a
                            }
                    return [r, s]
                }, o.prototype.readBlock = function() {
                    let t = 0;

                    function o(e, s, i, r, n) {
                        let a = e.getBits(i) + r;
                        for (; a-- > 0;) s[t++] = n
                    }
                    let h, f, c = this.getBits(3);
                    if (1 & c && (this.eof = !0), c >>= 1, 0 == c) {
                        const t = this.bytes;
                        let e, s = this.bytesPos;
                        void 0 === (e = t[s++]) && a("Bad block header in flate stream");
                        let i = e;
                        void 0 === (e = t[s++]) && a("Bad block header in flate stream"), i |= e << 8, void 0 === (e = t[s++]) && a("Bad block header in flate stream");
                        let r = e;
                        void 0 === (e = t[s++]) && a("Bad block header in flate stream"), r |= e << 8, r != (65535 & ~i) && a("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
                        const n = this.bufferLength,
                            o = this.ensureBuffer(n + i),
                            h = n + i;
                        this.bufferLength = h;
                        for (let i = n; i < h; ++i) {
                            if (void 0 === (e = t[s++])) {
                                this.eof = !0;
                                break
                            }
                            o[i] = e
                        }
                        return void(this.bytesPos = s)
                    }
                    if (1 == c) h = r, f = n;
                    else if (2 == c) {
                        const s = this.getBits(5) + 257,
                            i = this.getBits(5) + 1,
                            r = this.getBits(4) + 4,
                            n = Array(e.length);
                        for (t = 0; t < r;) n[e[t++]] = this.getBits(3);
                        const a = this.generateHuffmanTable(n);
                        let c = 0;
                        t = 0;
                        const l = s + i,
                            u = new Array(l);
                        for (; t < l;) {
                            const e = this.getCode(a);
                            16 == e ? o(this, u, 2, 3, c) : 17 == e ? o(this, u, 3, 3, c = 0) : 18 == e ? o(this, u, 7, 11, c = 0) : u[t++] = c = e
                        }
                        h = this.generateHuffmanTable(u.slice(0, s)), f = this.generateHuffmanTable(u.slice(s, l))
                    } else a("Unknown block type in flate stream");
                    let l = this.buffer,
                        u = l ? l.length : 0,
                        d = this.bufferLength;
                    for (;;) {
                        let t = this.getCode(h);
                        if (t < 256) {
                            d + 1 >= u && (l = this.ensureBuffer(d + 1), u = l.length), l[d++] = t;
                            continue
                        }
                        if (256 == t) return void(this.bufferLength = d);
                        t -= 257, t = s[t];
                        let e = t >> 16;
                        e > 0 && (e = this.getBits(e));
                        const r = (65535 & t) + e;
                        t = this.getCode(f), t = i[t], e = t >> 16, e > 0 && (e = this.getBits(e));
                        const n = (65535 & t) + e;
                        d + r >= u && (l = this.ensureBuffer(d + r), u = l.length);
                        for (let t = 0; t < r; ++t, ++d) l[d] = l[d - n]
                    }
                }, o
            }();
        return function() {
            function t() {}
            return t.prototype.Load = function(t, e) {
                let s, i, r, n, a, o, h, f, c, l, u, d, p, g;
                for (this.bPng = !0, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, a = null, this.data = t;;) {
                    switch (s = this.readUInt32(), c = function() {
                        let t, e = [];
                        for (o = t = 0; t < 4; o = ++t) e.push(String.fromCharCode(this.data[this.pos++]));
                        return e
                    }.call(this).join(""), c) {
                        case "IHDR":
                            this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++], this.colors = function() {
                                switch (this.colorType) {
                                    case 0:
                                    case 3:
                                    case 4:
                                        return 1;
                                    case 2:
                                    case 6:
                                        return 3
                                }
                            }.call(this), this.hasAlphaChannel = 4 === (g = this.colorType) || 6 === g, i = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * i, this.colorSpace = function() {
                                switch (this.colors) {
                                    case 1:
                                        return "DeviceGray";
                                    case 3:
                                        return "DeviceRGB"
                                }
                            }.call(this);
                            break;
                        case "acTL":
                            this.animation = {
                                numFrames: this.readUInt32(),
                                numPlays: this.readUInt32() || 1 / 0,
                                frames: []
                            };
                            break;
                        case "PLTE":
                            this.palette = this.read(s);
                            break;
                        case "fcTL":
                            a && this.animation.frames.push(a), this.pos += 4, a = {
                                width: this.readUInt32(),
                                height: this.readUInt32(),
                                xOffset: this.readUInt32(),
                                yOffset: this.readUInt32()
                            }, n = this.readUInt16(), r = this.readUInt16() || 100, a.delay = 1e3 * n / r, a.disposeOp = this.data[this.pos++], a.blendOp = this.data[this.pos++], a.data = [];
                            break;
                        case "IDAT":
                        case "fdAT":
                            for ("fdAT" === c && (this.pos += 4, s -= 4), t = (null != a ? a.data : void 0) || this.imgData, o = d = 0; 0 <= s ? d < s : d > s; o = 0 <= s ? ++d : --d) t.push(this.data[this.pos++]);
                            break;
                        case "tRNS":
                            switch (this.transparency = {}, this.colorType) {
                                case 3:
                                    if (this.transparency.indexed = this.read(s), l = 255 - this.transparency.indexed.length, l > 0)
                                        for (o = p = 0; 0 <= l ? p < l : p > l; o = 0 <= l ? ++p : --p) this.transparency.indexed.push(255);
                                    break;
                                case 0:
                                    this.transparency.grayscale = this.read(s)[0];
                                    break;
                                case 2:
                                    this.transparency.rgb = this.read(s)
                            }
                            break;
                        case "tEXt":
                            u = this.read(s), h = u.indexOf(0), f = String.fromCharCode.apply(String, u.slice(0, h)), this.text[f] = String.fromCharCode.apply(String, u.slice(h + 1));
                            break;
                        case "IEND":
                            return a && this.animation.frames.push(a), void(this.imgData = new Uint8Array(this.imgData));
                        default:
                            this.pos += s
                    }
                    if (this.pos += 4, this.pos > this.data.length) return void(this.bPng = !1);
                    if (!e(this)) return
                }
            }, t.prototype.read = function(t) {
                let e, s, i;
                for (i = [], e = s = 0; 0 <= t ? s < t : s > t; e = 0 <= t ? ++s : --s) i.push(this.data[this.pos++]);
                return i
            }, t.prototype.readUInt32 = function() {
                let t, e, s, i;
                return t = this.data[this.pos++] << 24, e = this.data[this.pos++] << 16, s = this.data[this.pos++] << 8, i = this.data[this.pos++], t | e | s | i
            }, t.prototype.readUInt16 = function() {
                let t, e;
                return t = this.data[this.pos++] << 8, e = this.data[this.pos++], t | e
            }, t.prototype.decodePixels = function(t) {
                let s, i, r, n, a, o, h, f, c, l, u, d, p, g, y, b, m, w, B, I, U, C, k;
                if (null != t && null != t || (t = this.imgData), 0 === t.length) return new Uint8Array(0);
                for (t = (t = new e(t)).getBytes(), d = this.pixelBitlength / 8, b = d * this.width, p = new Uint8Array(b * this.height), o = t.length, y = 0, g = 0, i = 0; g < o;) {
                    switch (t[g++]) {
                        case 0:
                            for (n = B = 0; B < b; n = B += 1) p[i++] = t[g++];
                            break;
                        case 1:
                            for (n = I = 0; I < b; n = I += 1) s = t[g++], a = n < d ? 0 : p[i - d], p[i++] = (s + a) % 256;
                            break;
                        case 2:
                            for (n = U = 0; U < b; n = U += 1) s = t[g++], r = (n - n % d) / d, m = y && p[(y - 1) * b + r * d + n % d], p[i++] = (m + s) % 256;
                            break;
                        case 3:
                            for (n = C = 0; C < b; n = C += 1) s = t[g++], r = (n - n % d) / d, a = n < d ? 0 : p[i - d], m = y && p[(y - 1) * b + r * d + n % d], p[i++] = (s + Math.floor((a + m) / 2)) % 256;
                            break;
                        case 4:
                            for (n = k = 0; k < b; n = k += 1) s = t[g++], r = (n - n % d) / d, a = n < d ? 0 : p[i - d], 0 === y ? m = w = 0 : (m = p[(y - 1) * b + r * d + n % d], w = r && p[(y - 1) * b + (r - 1) * d + n % d]), h = a + m - w, f = Math.abs(h - a), l = Math.abs(h - m), u = Math.abs(h - w), c = f <= l && f <= u ? a : l <= u ? m : w, p[i++] = (s + c) % 256;
                            break;
                        default:
                            throw new Error("Invalid filter algorithm: " + t[g - 1])
                    }
                    y++
                }
                return p
            }, t.prototype.Uint8_Uint16 = function(t) {
                if (t instanceof Uint8Array) return;
                const e = new Uint16Array(t.length >> 1);
                for (let s = 0; s < e.length; s++) {
                    const i = 2 * s,
                        r = t[i],
                        n = t[i + 1];
                    e[s] = n << 8 | r
                }
                return e
            }, t.prototype.getDecodeInt16 = function() {
                return new Int16Array(this.decodePixels().buffer)
            }, t.prototype.getDecodeInt8 = function() {
                return new Int8Array(this.decodePixels().buffer)
            }, t
        }()
    }(),
    isOffscreenCanvasSupported = function() {
        let t = !0;
        try {
            new OffscreenCanvas(0, 0)
        } catch (e) {
            t = !1
        }
        return t
    }();

function getPixelsDataType(t, e, s) {
    return 32 === s ? new Float32Array(t) : 16 === s ? 0 === e ? new Uint16Array(t) : new Int16Array(t) : new Uint8Array(t)
}

function getMaxMinGray(t) {
    let e, s = t[0],
        i = t[0],
        r = t.length;
    for (let n = 1; n < r; n++) e = t[n], s = Math.min(s, e), i = Math.max(i, e);
    return {
        minGray: s,
        maxGray: i
    }
}

function generateCGLUT(t, e, s, i, r, n, a) {
    "use strict";
    const o = [],
        h = i,
        f = s,
        c = r,
        l = n,
        u = t,
        d = e;
    let p, g, y, b, m = 0;
    if (f < 0 && (m = f), a)
        for (b = f; b <= h; b++) p = parseInt(b * c + l), g = 255 * ((p + -d) / u + .5), y = Math.min(Math.max(g, 0), 255), o[b + -m] = Math.round(255 - y);
    else
        for (b = f; b <= h; b++) p = parseFloat(b * c + l), g = 255 * ((p + -d) / u + .5), y = Math.min(Math.max(g, 0), 255), o[b + -m] = Math.round(y);
    return {
        r: o,
        g: o,
        b: o
    }
}

function generateGrayImage(t, e, s) {
    "use strict";
    const i = t,
        r = s;
    let n = 0,
        a = 0;
    const o = i.length,
        h = i,
        f = new Uint8ClampedArray(4 * o),
        c = e.r,
        l = e.g,
        u = e.b,
        d = f;
    let p;
    if (r < 0)
        for (; a < o;) p = h[a++] + -r, d[n++] = c[p], d[n++] = l[p], d[n++] = u[p], d[n++] = 255;
    else
        for (; a < o;) p = h[a++], d[n++] = c[p], d[n++] = l[p], d[n++] = u[p], d[n++] = 255;
    return d
}

function storeImageData(t, e, s, i, r, n) {
    const {
        minGray: a,
        maxGray: o
    } = getMaxMinGray(t);
    return generateGrayImage(t, generateCGLUT(e, s, a, o, r, n, i), a)
}
async function imageDataToArraybuffer(t, e) {
    try {
        const s = t.getContext("2d");
        t.height = e.height, t.width = e.width, s ? .putImageData(e, 0, 0);
        const i = await t[t.convertToBlob ? "convertToBlob" : "toBlob"](),
            r = (new FileReaderSync).readAsArrayBuffer(i);
        return Promise.resolve(r)
    } catch (t) {
        return Promise.reject(t)
    }
}

function initialize(t) {
    self.decodingoldPlatformImagesConfig = t, self.encryptionPngDecode = !0
}
async function handler(t, e) {
    const s = t.data.buffer,
        {
            bitsAllocated: i,
            windowWidth: r,
            windowCenter: n,
            rows: a,
            columns: o,
            rescaleSlope: h,
            rescaleIntercept: f,
            photometricInterpretation: c,
            pixelRepresentation: l,
            transferSyntaxUID: u,
            isIM: d
        } = t.data.info;
    if ("1.2.840.10008.1.2.2" === u) {
        const t = {
                data: s,
                isPng: !0,
                isImageData: !1
            },
            i = [s];
        return e ? .(t, i), {
            result: t,
            transferList: i
        }
    }
    const p = new PNG,
        g = new Uint8Array(s);
    let y = g;
    p.Load(g, (t => "DeviceGray" === t.colorSpace));
    const {
        bPng: b,
        colorSpace: m,
        width: w,
        height: B
    } = p;
    if (!b || "DeviceGray" !== m) {
        const t = {
                data: s,
                isPng: !0,
                isImageData: !1
            },
            i = [s];
        return e ? .(t, i), {
            result: t,
            transferList: i
        }
    }
    y = p.decodePixels();
    const I = getPixelsDataType(y.buffer, l, i);
    if (d) {
        const t = {
                data: I,
                isPng: !1,
                isImageData: !1,
                width: w,
                height: B
            },
            i = [s];
        return e ? .(t, i), {
            result: t,
            transferList: i
        }
    }
    const U = new ImageData(storeImageData(I, r, n, "MONOCHROME1" === c, h, f), o, a),
        C = isOffscreenCanvasSupported ? await imageDataToArraybuffer(new OffscreenCanvas(o, a), U) : U,
        k = {
            data: C,
            isPng: !1,
            isImageData: !isOffscreenCanvasSupported
        },
        D = isOffscreenCanvasSupported ? [C] : C;
    return e ? .(k, D), {
        result: k,
        transferList: D
    }
}