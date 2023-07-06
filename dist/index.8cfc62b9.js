// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gAoaA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var _modelJs = require("./model.js");
"use strict";
const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
const sortDivider = document.querySelector(".sort__devider");
const showSortBtns = document.querySelector(".show__sort__btns");
const validationMsg = document.querySelector(".validation__msg");
const clearAllBtn = document.querySelector(".clr__all__btn");
const overviewBtn = document.querySelector(".overview__btn");
const confMsg = document.querySelector(".confirmation__msg");
const yesBtn = document.querySelector(".yes__button");
const noBtn = document.querySelector(".no__button");
const sortContainer = document.querySelector(".sort__buttons__container");
class Workout {
    id = Math.random() + "";
    constructor(coords, distance, duration, date){
        this.coords = coords; // [lat,lng]
        this.distance = distance; //in km
        this.duration = duration; // in min
        this.date = date;
    }
    _setDescription() {
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
        const date = new Date(this.date); // convert date string stored in miliseconds to object so to extract month and day
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[date.getMonth()]}-${date.getDate()}-${date.getFullYear() % 100}`;
    }
}
class Running extends Workout {
    type = "running";
    constructor(coords, distance, duration, date, cadence){
        super(coords, distance, duration, date);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription();
    }
    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace;
    }
}
class Cycling extends Workout {
    type = "cycling";
    constructor(coords, distance, duration, date, elevationGain){
        super(coords, distance, duration, date);
        this.elevationGain = elevationGain;
        this.calcSpeed();
        this._setDescription();
    }
    calcSpeed() {
        //km/h
        this.speed = this.distance / (this.duration / 60);
    }
}
/////////////////////////////////////////////////////////////////
// APP ARCHITECTURE
class App {
    #map;
    #mapEvent;
    #workouts = [];
    #markers = [];
    constructor(){
        this._getPosition();
        form.addEventListener("submit", this._newWorkout.bind(this));
        inputType.addEventListener("change", this._toggleElevationField);
        //listener for remove button and set in to view (click event)
        containerWorkouts.addEventListener("click", this._handleWorkoutClick.bind(this));
        //listener for input changes (user edits) - change event
        containerWorkouts.addEventListener("change", this._updateWorkoutInfo.bind(this));
        this._checkStorageAndLoad();
        showSortBtns.addEventListener("click", this._toggleSortBtns.bind(this));
        //sort event listener
        sortContainer.addEventListener("click", this._sortAndRender.bind(this));
        //clear workouts listeners
        clearAllBtn.addEventListener("click", this._showDeleteMsg);
        yesBtn.addEventListener("click", this._clearAll);
        noBtn.addEventListener("click", function() {
            confMsg.classList.add("msg__hidden");
        });
    }
    _handleWorkoutClick(e) {
        // find info about workout that was clicked
        const [id, foundWorkout, workoutIndex, element] = this._getId(e);
        // if no info, return
        if (!id) return;
        // 2. if remove__btn is clicked then remove item
        if (e.target.classList.contains("remove__btn")) {
            this._removeWorkout(element, workoutIndex);
            // 4. update local storage
            this._saveWorkouts();
            return;
        }
        // 3. if an input field was clicked do nothing
        if (e.target.classList.contains("workout__value")) return;
        // 4. otherwise center item on map
        this._setIntoView(foundWorkout);
    }
    _sortAndRender(e) {
        const element = e.target.closest(".sort__button");
        let currentDirection = "descending"; //default
        if (!element) return;
        const arrow = element.querySelector(".arrow");
        const type = element.dataset.type;
        // set all arrows to default state (down)
        sortContainer.querySelectorAll(".arrow").forEach((e)=>e.classList.remove("arrow__up"));
        // get which direction to sort
        const typeValues = this.#workouts.map((workout)=>{
            return workout[type];
        });
        const sortedAscending = typeValues.slice().sort(function(a, b) {
            return a - b;
        }).join("");
        const sortedDescending = typeValues.slice().sort(function(a, b) {
            return b - a;
        }).join("");
        // compare sortedAscending array with values from #workout array to check how are they sorted
        // 1. case 1 ascending
        if (typeValues.join("") === sortedAscending) {
            currentDirection = "ascending";
            arrow.classList.add("arrow__up");
        }
        // 2. case 2 descending
        if (typeValues.join("") === sortedDescending) {
            currentDirection = "descending";
            arrow.classList.remove("arrow__up");
        }
        // sort main workouts array
        this._sortArray(this.#workouts, currentDirection, type);
        ///////// RE-RENDER ////////
        // clear rendered workouts from DOM
        containerWorkouts.querySelectorAll(".workout").forEach((workout)=>workout.remove());
        // clear workouts from map(to prevent bug in array order when deleting a single workout)
        this.#markers.forEach((marker)=>marker.remove());
        //clear array
        this.#markers = [];
        // render list all again sorted
        this.#workouts.forEach((workout)=>{
            this._renderWorkout(workout, _modelJs.getGeoCode(workout), _modelJs.getWeatherData(workout));
            // create new markers and render them on map
            this._renderWorkoutMarker(workout);
        });
        // center map on the last item in array (this will be 1st workout on the list in the UI)
        const lastWorkout = this.#workouts[this.#workouts.length - 1];
        this._setIntoView(lastWorkout);
    }
    _sortArray(array, currentDirection, type) {
        // sort opposite to the currentDirection
        if (currentDirection === "ascending") array.sort(function(a, b) {
            return b[type] - a[type];
        });
        if (currentDirection === "descending") array.sort(function(a, b) {
            return a[type] - b[type];
        });
    }
    _toggleSortBtns() {
        sortContainer.classList.toggle("zero__height");
    }
    _showDeleteMsg() {
        confMsg.classList.remove("msg__hidden");
    }
    _checkStorageAndLoad() {
        const workouts = localStorage.getItem("workouts");
        if (!workouts) return;
        // Rebuild objects based on storage
        const tempWorkouts = JSON.parse(workouts);
        tempWorkouts.forEach((workout)=>{
            const typeOfWorkout = workout.type;
            let newWorkout;
            // create workout object
            if (typeOfWorkout === "running") newWorkout = new Running(workout.coords, workout.distance, workout.duration, workout.date, workout.cadence);
            if (typeOfWorkout === "cycling") newWorkout = new Cycling(workout.coords, workout.distance, workout.duration, workout.date, workout.elevationGain);
            //push the created workout object in the array
            this.#workouts.push(newWorkout);
        });
        //Once all objects are created and stored in array #workouts
        // render workouts in a list
        this.#workouts.forEach((workout)=>this._renderWorkout(workout, _modelJs.getGeoCode(workout), _modelJs.getWeatherData(workout)));
    // map markers will load after map is loaded
    }
    _saveWorkouts() {
        const workoutString = JSON.stringify(this.#workouts);
        window.localStorage.setItem("workouts", workoutString);
    }
    _getPosition() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function() {
            alert("Could not get your position");
        });
    }
    _loadMap(position) {
        const { latitude, longitude } = position.coords;
        const myCoordinates = [
            latitude,
            longitude
        ];
        this.#map = L.map("map").setView(myCoordinates, 13);
        L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        //show form when clicking on map
        this.#map.on("click", this._showForm.bind(this));
        // google tile
        // http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}
        // original tile
        // https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png
        if (!this.#workouts) return;
        this.#workouts.forEach((workout)=>this._renderWorkoutMarker(workout));
        // overview button listener
        overviewBtn.addEventListener("click", this._overview.bind(this));
    }
    _showForm(mapE) {
        //exporting mapevent to private variable so we can use it outside  event listener
        this.#mapEvent = mapE;
        form.classList.remove("hidden");
        inputDistance.focus();
    }
    _clearInputFields() {
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";
    }
    _hideForm() {
        this._clearInputFields();
        form.style.display = "none";
        form.classList.add("hidden");
        setTimeout(()=>{
            form.style.display = "grid";
        }, 1000);
    }
    _toggleElevationField() {
        inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
        inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
    }
    _newWorkout(e) {
        ///////// HELPER FUNCTIONS
        // check if type is number
        const validInputs = (...inputs)=>inputs.every((inp)=>Number.isFinite(inp));
        // check if number is positive
        const allPositive = (...inputs)=>inputs.every((inp)=>inp > 0);
        // function to display msg if inputs don't pass validation
        const display = function() {
            //display and hide msg after 3 sec
            validationMsg.classList.add("msg__show");
            setTimeout(()=>{
                validationMsg.classList.remove("msg__show");
            }, 3000);
            //clear fields
            this._clearInputFields();
        };
        const displayValidationMsg = display.bind(this);
        e.preventDefault();
        // Get data from form
        const type = inputType.value;
        const distance = +inputDistance.value; //converting to number with +
        const duration = +inputDuration.value; //converting to number with +
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;
        const date = Date.now(); // number in miliseconds. This way we can easily restore date object later(when it converts back from JSON upon storage load) and use its methods
        // If workout is running create running object
        if (type === "running") {
            const cadence = +inputCadence.value;
            // Check if data is valid
            if (!validInputs(distance, duration, cadence) || !allPositive(distance, duration, cadence)) return displayValidationMsg();
            workout = new Running([
                lat,
                lng
            ], distance, duration, date, cadence);
        }
        // If workout is cycling create cycling object
        if (type === "cycling") {
            const elevation = +inputElevation.value;
            // Check if data is valid
            if (!validInputs(distance, duration, elevation) || !allPositive(distance, duration)) return displayValidationMsg();
            // create new workout object
            workout = new Cycling([
                lat,
                lng
            ], distance, duration, date, elevation);
        }
        this._renderWorkoutMarker(workout);
        // Add workout object to workout array
        this.#workouts.push(workout);
        // Render workout
        this._renderWorkout(workout, _modelJs.getGeoCode(workout), _modelJs.getWeatherData(workout));
        //hide form
        this._hideForm();
    }
    _renderWorkoutMarker(workout) {
        // custom icon
        // const maptyIcon = L.icon({
        //   iconUrl: 'icon.png',
        //   iconSize: [50, 55],
        //   iconAnchor: [24, 3],
        // });
        // create marker
        const layer = L.marker(workout.coords).addTo(this.#map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`
        })).setPopupContent(`${workout.type === "running" ? "\uD83C\uDFC3‍♂️" : "\uD83D\uDEB4‍♀️"} ${workout.description}`).openPopup();
        // put the marker inside markers array
        this.#markers.push(layer);
    }
    async _renderWorkout(workout, geoData, weatherData) {
        const geo = await geoData;
        const weather = await weatherData;
        let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}${geo ? "," : ""}
    ${geo ?? ""} <img class="workout__weather" src="${weather}"/>
    </h2>
    <div class="workout__details">
          <span class="workout__icon">${workout.type === "running" ? "\uD83C\uDFC3‍♂️" : "\uD83D\uDEB4‍♀️"}</span>
          <input class="workout__value" value="${workout.distance}" data-type="distance" required size="1">
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <input class="workout__value" value="${workout.duration}" data-type="duration" required size="1">
          <span class="workout__unit">min</span>
        </div>`;
        if (workout.type === "running") html += ` 
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <input class="workout__value" value="${workout.pace.toFixed(1)}" data-type="pace" disabled required size="1">
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <input class="workout__value" value="${workout.cadence}" data-type="cadence" required size="1">
            <span class="workout__unit">spm</span>
          </div>
          <button class="remove__btn">×</button>
        </li>`;
        if (workout.type === "cycling") html += `
            <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <input class="workout__value" value="${workout.speed.toFixed(1)}" data-type="speed" disabled required size="2">
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <input class="workout__value" value="${workout.elevationGain}" data-type="elevationGain" required size="2">
            <span class="workout__unit">m</span>
          </div>
          <button class="remove__btn">×</button>
        </li>`;
        sortDivider.insertAdjacentHTML("afterend", html);
        // save workouts in local storage
        this._saveWorkouts();
    }
    _removeWorkout(element, workoutIndex) {
        // 1. remove from list
        element.remove();
        // 2. remove from array
        this.#workouts.splice(workoutIndex, 1);
        // 3. remove from map
        this.#markers[workoutIndex].remove();
        // 4. remove from marker array
        this.#markers.splice(workoutIndex, 1);
    }
    _clearAll() {
        localStorage.clear();
        location.reload();
        confMsg.classList.add("msg__hidden");
    }
    _getId(e) {
        // detect workout element on click
        const element = e.target.closest(".workout");
        if (element) {
            // get info about the workout that was clicked on
            const id = element.dataset.id;
            const foundWorkout = this.#workouts.find((elem)=>elem.id === id);
            const workoutIndex = this.#workouts.indexOf(foundWorkout);
            return [
                id,
                foundWorkout,
                workoutIndex,
                element
            ];
        }
        return [];
    }
    _updateWorkoutInfo(e) {
        // find info about workout that was clicked
        const [id, foundWorkout, _, element] = this._getId(e);
        // if no info, return
        if (!id) return;
        // get type of input and value
        const typeOfInput = e.target.dataset.type;
        const newInputValue = +e.target.value;
        let type;
        // update workout object with the new value from the input field
        foundWorkout[typeOfInput] = newInputValue;
        // recalculate pace or speed
        if (foundWorkout.type === "running") {
            foundWorkout.calcPace();
            type = "pace";
        }
        if (foundWorkout.type === "cycling") {
            foundWorkout.calcSpeed();
            type = "speed";
        }
        //update calculation in UI in the appropriate input field
        element.querySelector(`input[data-type ="${type}"`).value = foundWorkout[type].toFixed(1);
        // save in local storage (update)
        this._saveWorkouts();
    }
    _setIntoView(foundWorkout) {
        this.#map.setView(foundWorkout.coords, 13);
    }
    _overview() {
        // if there are no workouts return
        if (this.#workouts.length === 0) return;
        // find lowest and highest lat and long to make map bounds that fit all markers
        const latitudes = this.#workouts.map((w)=>{
            return w.coords[0];
        });
        const longitudes = this.#workouts.map((w)=>{
            return w.coords[1];
        });
        const minLat = Math.min(...latitudes);
        const maxLat = Math.max(...latitudes);
        const minLong = Math.min(...longitudes);
        const maxLong = Math.max(...longitudes);
        // fit bounds with coordinates
        this.#map.fitBounds([
            [
                maxLat,
                minLong
            ],
            [
                minLat,
                maxLong
            ]
        ], {
            padding: [
                70,
                70
            ]
        });
    }
}
const app = new App(); // check validation message

},{"./model.js":"4mRaZ"}],"4mRaZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGeoCode", ()=>getGeoCode);
parcelHelpers.export(exports, "getWeatherData", ()=>getWeatherData);
var _helperJs = require("./helper.js");
const getGeoCode = async function(workout) {
    try {
        const [lat, lng] = workout.coords;
        const data = await (0, _helperJs.AJAX)(`https://geocode.xyz/${lat},${lng}?geoit=json`, "Please try to reload the page again. Unfortunately, this api what I am using now can not read all datas at once and I am not willing to pay for the API. Error occurs from this reason.");
        // console.log(data.osmtags);
        return data.osmtags.name;
    } catch (err) {
        console.error(err);
        return "";
    }
};
const getWeatherData = async function(workout) {
    try {
        const myKey = "5c04291f0b2520cd23ea484f5b1e34e2";
        const [lat, lng] = workout.coords;
        const data = await (0, _helperJs.AJAX)(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${myKey}`, "Failed to load data from API");
        const { icon } = data.weather[0];
        return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    } catch (err) {
        console.error(err);
        return "";
    }
};

},{"./helper.js":"8C2B8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8C2B8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
const AJAX = async function(url, errMsg) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error(errMsg);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["gAoaA","6rimH"], "6rimH", "parcelRequire8112")

//# sourceMappingURL=index.8cfc62b9.js.map
