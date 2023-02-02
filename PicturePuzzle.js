!(function (t) {
  var e = {};
  function i(n) {
    if (e[n]) return e[n].exports;
    var s = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
  }
  (i.m = t),
    (i.c = e),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          i.d(
            n,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = ""),
    i((i.s = 0));
})([
  function (t, e, i) {
    "use strict";
    function n(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    i.r(e);
    var s = (function () {
      function t(e, i) {
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.isEmpty = !1),
          (this.index = i),
          (this.puzzle = e),
          (this.width = this.puzzle.width / this.puzzle.dimmension),
          (this.height = this.puzzle.height / this.puzzle.dimmension),
          (this.el = this.createDiv()),
          e.el.appendChild(this.el),
          this.index !== this.puzzle.dimmension * this.puzzle.dimmension - 1
            ? (this.setImage(), this.setPosition(this.index))
            : (this.isEmpty = !0);
      }
      var e, i, s;
      var z=1;
      return (
        (e = t),
        (i = [
          {
            key: "createDiv",
            value: function () {
              var t = this,
                e = document.createElement("div");
              return (
                (e.style.backgroundSize = ""
                  .concat(this.puzzle.width, "px ")
                  .concat(this.puzzle.height, "px")),
                (e.style.border = "1px solid #FFF"),
                (e.className = "puzzleDiv"),
                (e.style.position = "absolute"),
                (e.style.color = "red"),
                (e.innerText = z++),
                (e.onclick = function () {
                  var e = t.puzzle.findPosition(t.index),
                    i = t.puzzle.findEmpty(),
                    n = t.getXY(e),
                    s = n.x,
                    l = n.y,
                    o = t.getXY(i),
                    r = o.x,
                    h = o.y;
                  (s !== r && l !== h) ||
                    (1 !== Math.abs(s - r) && 1 !== Math.abs(l - h)) ||
                    (t.puzzle.numberOfMovements++,
                    t.puzzle.onSwap &&
                      "function" == typeof t.puzzle.onSwap &&
                      t.puzzle.onSwap(t.puzzle.numberOfMovements),
                    t.puzzle.swapCells(e, i, !0));
                }),
                e
              );
            },
          },
          {
            key: "setImage",
            value: function () {
              var t = this.getXY(this.index),
                e = t.x,
                i = t.y,
                n = this.width * e,
                s = this.height * i;
              (this.el.style.width = "".concat(this.width, "px")),
                (this.el.style.height = "".concat(this.height, "px")),
                (this.el.style.backgroundImage = "url(".concat(
                  this.puzzle.imageSrc,
                  ")"
                )),
                (this.el.style.backgroundPosition = "-"
                  .concat(n, "px -")
                  .concat(s, "px"));
            },
          },
          {
            key: "setPosition",
            value: function (t, e, i) {
              var n = this.getPositionFromIndex(t),
                s = n.left,
                l = n.top,
                o = this.getPositionFromIndex(i),
                r = o.left,
                h = o.top;
              e
                ? s !== r
                  ? this.animate("left", r, s)
                  : l !== h && this.animate("top", h, l)
                : ((this.el.style.left = "".concat(s, "px")),
                  (this.el.style.top = "".concat(l, "px")));
            },
          },
          {
            key: "animate",
            value: function (t, e, i) {
              var n = this,
                s = (10 * Math.abs(i - e)) / 250,
                l = setInterval(function () {
                  e < i
                    ? (e = Math.min(i, e + s)) >= i && clearInterval(l)
                    : (e = Math.max(i, e - s)) <= i && clearInterval(l),
                    (n.el.style[t] = e + "px");
                }, 10);
            },
          },
          {
            key: "getPositionFromIndex",
            value: function (t) {
              var e = this.getXY(t),
                i = e.x,
                n = e.y;
              return { left: this.width * i, top: this.height * n };
            },
          },
          {
            key: "getXY",
            value: function (t) {
              return {
                x: t % this.puzzle.dimmension,
                y: Math.floor(t / this.puzzle.dimmension),
              };
            },
          },
        ]) && n(e.prototype, i),
        s && n(e, s),
        t
      );
    })();
    function l(t, e) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    i.d(e, "default", function () {
      return o;
    });
    var o = (function () {
      function t(e, i, n) {
        var s = this,
          l =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 3;
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.parentEl = e),
          (this.dimmension = l),
          (this.imageSrc = i),
          (this.width = n),
          (this.cells = []),
          (this.shuffling = !1),
          (this.numberOfMovements = 0),
          (this.onFinished = function () {
            alert("Congratsss!!!");
          }),
          (this.onSwap = function () {}),
          this.init();
        var o = new Image();
        (o.onload = function () {
          console.log(o.width, o.height),
            (s.height = (o.height * s.width) / o.width),
            (s.el.style.width = "".concat(s.width, "px")),
            (s.el.style.height = "".concat(s.height, "px")),
            s.setup();
        }),
          (o.src = this.imageSrc);
      }
      var e, i, n;
      return (
        (e = t),
        (i = [
          {
            key: "init",
            value: function () {
              (this.el = this.createWrapper()),
                this.parentEl.appendChild(this.el);
            },
          },
          {
            key: "createWrapper",
            value: function () {
              var t = document.createElement("div");
              return (
                (t.style.position = "relative"), (t.style.margin = " 0 auto"), t
              );
            },
          },
          {
            key: "setup",
            value: function () {
              for (var t = 0; t < this.dimmension * this.dimmension; t++)
                this.cells.push(new s(this, t));
              this.shuffle();
            },
          },
          {
            key: "shuffle",
            value: function () {
              this.shuffling = !0;
              for (var t = this.cells.length - 1; t > 0; t--) {
                var e = Math.floor(Math.random() * (t + 1));
                this.swapCells(t, e);
              }
              this.shuffling = !1;
            },
          },
          {
            key: "swapCells",
            value: function (t, e, i) {
              this.cells[t].setPosition(e, i, t), this.cells[e].setPosition(t);
              var n = [this.cells[e], this.cells[t]];
              (this.cells[t] = n[0]),
                (this.cells[e] = n[1]),
                this.cells[t].el.onanimationend=()=>{
                  !this.shuffling &&
                  this.isAssembled() &&
                  this.onFinished &&
                  "function" == typeof this.onFinished &&
                  this.onFinished.call(this);
                }
            },
          },
          {
            key: "isAssembled",
            value: function () {
              for (var t = 0; t < this.cells.length; t++)
                if (t !== this.cells[t].index)
                  if(t<=14)
                  return 0;
              return !0;
            },
          },
          {
            key: "findPosition",
            value: function (t) {
              return this.cells.findIndex(function (e) {
                return e.index === t;
              });
            },
          },
          {
            key: "findEmpty",
            value: function () {
              return this.cells.findIndex(function (t) {
                return t.isEmpty;
              });
            },
          },
        ]) && l(e.prototype, i),
        n && l(e, n),
        t
      );
    })();
    window.PicturePuzzle = window.PicturePuzzle || o;
  },
]);
const htmlDomElement = document.getElementById("puzzle");
const imageSourceUrl = "/assets/dino.jpg";
const canvasWidth = "450";
puzzle = new PicturePuzzle(
  htmlDomElement,
  imageSourceUrl,
  canvasWidth,
  (dimmension = 4)
);
