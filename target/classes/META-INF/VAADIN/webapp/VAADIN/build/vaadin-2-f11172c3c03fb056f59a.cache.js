(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}a.d(t,"a",(function(){return i}))},,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a(17);function r(e){Object(i.a)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},,,,,,,,,,function(e,t,a){"use strict";function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}a.d(t,"a",(function(){return i}))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const i=class{toString(){return""}}},function(e,t,a){"use strict";
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
function i(e){let t=e.getDay();0===t&&(t=7);const a=4-t,i=new Date(e.getTime()+24*a*3600*1e3),r=new Date(0,0);r.setFullYear(i.getFullYear());const n=i.getTime()-r.getTime(),o=Math.round(n/864e5);return Math.floor(o/7+1)}function r(e,t){return e instanceof Date&&t instanceof Date&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function n(e,t,a){return(!t||e>=t)&&(!a||e<=a)}function o(e,t){return t.filter(e=>void 0!==e).reduce((t,a)=>{if(!a)return t;if(!t)return a;return Math.abs(e.getTime()-a.getTime())<Math.abs(t.getTime()-e.getTime())?a:t})}function s(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}a.d(t,"e",(function(){return i})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return s}))},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a(21),r=a(17),n=a(31);function o(e,t){Object(r.a)(1,arguments);var a=t||{},o=a.locale,s=o&&o.options&&o.options.weekStartsOn,l=null==s?0:Object(n.a)(s),d=null==a.weekStartsOn?l:Object(n.a)(a.weekStartsOn);if(!(d>=0&&d<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=Object(i.a)(e),u=c.getUTCDay(),h=(u<d?7:0)+u-d;return c.setUTCDate(c.getUTCDate()-h),c.setUTCHours(0,0,0,0),c}},function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(21),r=a(17);function n(e){Object(r.a)(1,arguments);var t=1,a=Object(i.a)(e),n=a.getUTCDay(),o=(n<t?7:0)+n-t;return a.setUTCDate(a.getUTCDate()-o),a.setUTCHours(0,0,0,0),a}},,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(203);var i=a(8),r=a(11),n=a(28),o=a(7);
/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class s extends(Object(n.a)(Object(r.a)(Object(o.a)(i.a)))){static get template(){return i.b`
      <style>
        :host {
          display: inline-block;
          flex: none;
          border-radius: 50%;
          overflow: hidden;
          height: var(--vaadin-avatar-size);
          width: var(--vaadin-avatar-size);
          border: var(--vaadin-avatar-outline-width) solid transparent;
          margin: calc(var(--vaadin-avatar-outline-width) * -1);
          background-clip: content-box;
          --vaadin-avatar-outline-width: 2px;
          --vaadin-avatar-size: 64px;
        }

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        [part='icon'] {
          font-size: 5.6em;
        }

        [part='abbr'] {
          font-size: 2.2em;
        }

        [part='icon'] > text {
          font-family: 'vaadin-avatar-icons';
        }

        :host([hidden]) {
          display: none !important;
        }

        svg[hidden] {
          display: none !important;
        }

        :host([has-color-index]) {
          position: relative;
          background-color: var(--vaadin-avatar-user-color);
        }

        :host([has-color-index])::before {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px var(--vaadin-avatar-user-color);
        }
      </style>
      <img hidden$="[[!__imgVisible]]" src$="[[img]]" aria-hidden="true" on-error="__onImageLoadError" />
      <svg
        part="icon"
        hidden$="[[!__iconVisible]]"
        id="avatar-icon"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle"></text>
      </svg>
      <svg
        part="abbr"
        hidden$="[[!__abbrVisible]]"
        id="avatar-abbr"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <text dy=".35em" text-anchor="middle">[[abbr]]</text>
      </svg>
    `}static get is(){return"vaadin-avatar"}static get properties(){return{img:{type:String,reflectToAttribute:!0,observer:"__imgChanged"},abbr:{type:String,reflectToAttribute:!0},name:{type:String,reflectToAttribute:!0},colorIndex:{type:Number,observer:"__colorIndexChanged"},i18n:{type:Object,value:()=>({anonymous:"anonymous"})},__imgVisible:Boolean,__iconVisible:Boolean,__abbrVisible:Boolean}}static get observers(){return["__imgOrAbbrOrNameChanged(img, abbr, name)","__i18nChanged(i18n.*)"]}ready(){super.ready(),this.__updateVisibility(),this.name||this.abbr||this.__setTitle(this.name),this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}__colorIndexChanged(e){if(null!=e){const t="--vaadin-user-color-"+e;Boolean(getComputedStyle(document.documentElement).getPropertyValue(t))?(this.setAttribute("has-color-index",""),this.style.setProperty("--vaadin-avatar-user-color",`var(${t})`)):(this.removeAttribute("has-color-index"),console.warn(`The CSS property --vaadin-user-color-${e} is not defined`))}else this.removeAttribute("has-color-index")}__imgChanged(){this.__imgFailedToLoad=!1}__imgOrAbbrOrNameChanged(e,t,a){this.__updateVisibility(),t&&t!==this.__generatedAbbr?this.__setTitle(a?`${a} (${t})`:t):(this.abbr=a?this.__generatedAbbr=a.split(" ").map(e=>e.charAt(0)).join(""):void 0,this.__setTitle(a))}__i18nChanged(e){e.base&&e.base.anonymous&&(this.__oldAnonymous&&this.getAttribute("title")===this.__oldAnonymous&&this.__setTitle(),this.__oldAnonymous=e.base.anonymous)}__updateVisibility(){this.__imgVisible=!!this.img&&!this.__imgFailedToLoad,this.__abbrVisible=!this.__imgVisible&&!!this.abbr,this.__iconVisible=!this.__imgVisible&&!this.abbr}__setTitle(e){e?this.setAttribute("title",e):this.setAttribute("title",this.i18n.anonymous)}__onImageLoadError(){this.img&&(console.warn("<vaadin-avatar> The specified image could not be loaded: "+this.img),this.__imgFailedToLoad=!0,this.__updateVisibility())}}customElements.define(s.is,s)},function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a(21),r=a(17),n=a(87),o=a(31);function s(e,t){Object(r.a)(1,arguments);var a=Object(i.a)(e),s=a.getUTCFullYear(),l=t||{},d=l.locale,c=d&&d.options&&d.options.firstWeekContainsDate,u=null==c?1:Object(o.a)(c),h=null==l.firstWeekContainsDate?u:Object(o.a)(l.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(s+1,0,h),m.setUTCHours(0,0,0,0);var p=Object(n.a)(m,t),v=new Date(0);v.setUTCFullYear(s,0,h),v.setUTCHours(0,0,0,0);var g=Object(n.a)(v,t);return a.getTime()>=p.getTime()?s+1:a.getTime()>=g.getTime()?s:s-1}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(10),a(18),a(13),a(9),a(12),a(14);var i=a(7);const r=i.c`
  :host {
    margin: var(--lumo-space-xs) 0;
    outline: none;
  }

  [part='summary'] {
    display: flex;
    align-items: center;
    width: 100%;
    outline: none;
    padding: var(--lumo-space-s) 0;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-secondary-text-color);
    background-color: inherit;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([focus-ring]) [part='summary'] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='toggle'] {
    display: block;
    width: 1em;
    height: 1em;
    margin-left: calc(var(--lumo-space-xs) * -1);
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-s);
    line-height: 1;
    color: var(--lumo-contrast-60pct);
    font-family: 'lumo-icons';
    cursor: var(--lumo-clickable-cursor);
  }

  :host([disabled]) [part='summary'],
  :host([disabled]) [part='toggle'] {
    color: var(--lumo-disabled-text-color);
    cursor: default;
  }

  @media (hover: hover) {
    :host(:not([disabled])) [part='summary']:hover,
    :host(:not([disabled])) [part='summary']:hover [part='toggle'] {
      color: var(--lumo-contrast-80pct);
    }
  }

  [part='toggle']::before {
    content: var(--lumo-icons-angle-right);
  }

  :host([opened]) [part='toggle'] {
    transform: rotate(90deg);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) 0 var(--lumo-space-s);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
  }

  :host([theme~='filled']) {
    background-color: var(--lumo-contrast-5pct);
    border-radius: var(--lumo-border-radius-m);
  }

  :host([theme~='filled']) [part='summary'] {
    padding: var(--lumo-space-s) calc(var(--lumo-space-s) + var(--lumo-space-xs) / 2);
  }

  :host([theme~='filled']) [part='content'] {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }

  :host([theme~='small']) [part='summary'] {
    padding-top: var(--lumo-space-xs);
    padding-bottom: var(--lumo-space-xs);
  }

  :host([theme~='small']) [part='toggle'] {
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='small']) [part\$='content'] {
    font-size: var(--lumo-font-size-s);
  }

  :host([theme~='reverse']) [part='summary'] {
    justify-content: space-between;
  }

  :host([theme~='reverse']) [part='toggle'] {
    order: 1;
    margin-right: 0;
  }

  :host([theme~='reverse'][theme~='filled']) [part='summary'] {
    padding-left: var(--lumo-space-m);
  }

  /* RTL specific styles */
  :host([dir='rtl']) [part='toggle'] {
    margin-left: var(--lumo-space-xs);
    margin-right: calc(var(--lumo-space-xs) * -1);
  }

  :host([dir='rtl']) [part='toggle']::before {
    content: var(--lumo-icons-angle-left);
  }

  :host([opened][dir='rtl']) [part='toggle'] {
    transform: rotate(-90deg);
  }

  :host([theme~='small'][dir='rtl']) [part='toggle'] {
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='reverse'][dir='rtl']) [part='toggle'] {
    margin-left: 0;
  }

  :host([theme~='reverse'][theme~='filled'][dir='rtl']) [part='summary'] {
    padding-right: var(--lumo-space-m);
  }
`;Object(i.d)("vaadin-details",r,{moduleId:"lumo-details"})},function(e,t,a){"use strict";a(146),a(104)},function(e,t,a){"use strict";a(10),a(13),a(9),a(12),a(14),a(80);var i=a(7);Object(i.d)("vaadin-avatar",i.c`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
      color: var(--lumo-secondary-text-color);
      background-color: var(--lumo-contrast-10pct);
      border-radius: 50%;
      outline: none;
      cursor: default;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([has-color-index]) {
      color: var(--lumo-base-color);
    }

    :host([focus-ring]) {
      border-color: var(--lumo-primary-color-50pct);
    }

    [part='icon'],
    [part='abbr'] {
      fill: currentColor;
    }

    [part='abbr'] {
      font-family: var(--lumo-font-family);
      font-size: 2.4375em;
      font-weight: 500;
    }

    :host([theme~='xlarge']) [part='abbr'] {
      font-size: 2.5em;
    }

    :host([theme~='large']) [part='abbr'] {
      font-size: 2.375em;
    }

    :host([theme~='small']) [part='abbr'] {
      font-size: 2.75em;
    }

    :host([theme~='xsmall']) [part='abbr'] {
      font-size: 3em;
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar"})},function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a(20),r=a(27);
/**
 * @license
 * Copyright (c) 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=document.createElement("div");let o;function s(e,t={}){const a=t.mode||"polite",s=void 0===t.timeout?150:t.timeout;"alert"===a?(n.removeAttribute("aria-live"),n.removeAttribute("role"),o=r.a.debounce(o,i.a,()=>{n.setAttribute("role","alert")})):(o&&o.cancel(),n.removeAttribute("role"),n.setAttribute("aria-live",a)),n.textContent="",setTimeout(()=>{n.textContent=e},s)}n.style.position="fixed",n.style.clip="rect(0px, 0px, 0px, 0px)",n.setAttribute("aria-live","polite"),document.body.appendChild(n)},function(e,t,a){"use strict";a(10),a(9),a(12),a(49);var i=a(40),r=a(41),n=a(7);const o=n.c`
  [part='content'] {
    padding: 0;
  }

  :host {
    --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
    --_vaadin-combo-box-items-container-border-style: solid;
    --_vaadin-combo-box-items-container-border-color: transparent;
  }

  /* Loading state */

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  :host([loading]) [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    position: absolute;
    z-index: 1;
    left: var(--lumo-space-s);
    right: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-left: auto;
    margin-inline-start: auto;
    margin-inline-end: 0;
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-50pct) var(--lumo-primary-color-50pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    animation: 1s linear infinite lumo-combo-box-loader-rotate, 0.3s 0.1s lumo-combo-box-loader-fade-in both;
    pointer-events: none;
  }

  @keyframes lumo-combo-box-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-combo-box-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  /* RTL specific styles */

  :host([loading][dir='rtl']) [part~='loader'] {
    left: auto;
    margin-left: 0;
    margin-right: auto;
    margin-inline-start: 0;
    margin-inline-end: auto;
  }
`;Object(n.d)("vaadin-combo-box-overlay",[r.a,i.b,o],{moduleId:"lumo-combo-box-overlay"})},function(e,t,a){"use strict";a(10),a(9),a(12);var i=a(127),r=a(7);const n=r.c`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
  }

  @media (any-hover: hover) {
    :host([focused]:not([disabled])) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  }
`;Object(r.d)("vaadin-combo-box-item",[i.a,n],{moduleId:"lumo-combo-box-item"})},function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(151),a(152),a(153);var i=a(8);
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class r extends i.a{static get is(){return"vaadin-combo-box-dropdown"}static get template(){return i.b`
      <vaadin-combo-box-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
        restore-focus-on-close="[[restoreFocusOnClose]]"
        restore-focus-node="[[restoreFocusNode]]"
      ></vaadin-combo-box-overlay>
    `}static get properties(){return{opened:Boolean,positionTarget:{type:Object},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0},theme:String,_selectedItem:{type:Object},_items:{type:Array},_focusedIndex:{type:Number,value:-1},focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_scroller:Object,_itemIdPath:String,_overlayOpened:{type:Boolean,observer:"_openedChanged"}}}static get observers(){return["_openedOrItemsChanged(opened, _items, loading)","__updateScroller(_scroller, _items, opened, loading, _selectedItem, _itemIdPath, _focusedIndex, renderer, theme)"]}constructor(){super();const e=r._uniqueId=1+r._uniqueId||0;this.scrollerId=`${this.localName}-scroller-${e}`}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-dropdown","");const e=this.$.overlay,t=this.__hostTagName+"-scroller";e.renderer=e=>{if(!e.firstChild){const a=document.createElement(t);e.appendChild(a)}},e.requestContentUpdate(),this._scroller=e.content.querySelector(t),this._scroller.id=this.scrollerId,this._scroller.getItemLabel=this.getItemLabel.bind(this),this._scroller.comboBox=this.getRootNode().host,this._scroller.addEventListener("selection-changed",e=>this._forwardScrollerEvent(e)),this._scroller.addEventListener("index-requested",e=>this._forwardScrollerEvent(e)),e.addEventListener("touchend",e=>this._fireTouchAction(e)),e.addEventListener("touchmove",e=>this._fireTouchAction(e)),e.addEventListener("mousedown",e=>e.preventDefault()),e.addEventListener("vaadin-overlay-outside-click",e=>{e.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this._overlayOpened=!1}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_forwardScrollerEvent(e){this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}_openedChanged(e,t){e?(this._scroller.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this.__hostTagName}-overlay-max-height`)||"65vh",this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):t&&!this.__emptyItems&&this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))}_openedOrItemsChanged(e,t,a){const i=t&&t.length;i||(this.__emptyItems=!0),this._overlayOpened=!(!e||!a&&!i),this.__emptyItems=!1}_getFocusedItem(e){if(e>=0)return this._items[e]}indexOfLabel(e){if(this._items&&e)for(let t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}getItemLabel(e,t){t=t||this._itemLabelPath;let a=e&&t?this.get(t,e):void 0;return null==a&&(a=e?e.toString():""),a}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}__updateScroller(e,t,a,i,r,n,o,s,l){e&&e.setProperties({items:a?t:[],opened:a,loading:i,selectedItem:r,itemIdPath:n,focusedIndex:o,renderer:s,theme:l})}_isOverlayHidden(){return!(this.loading||this._items&&this._items.length)}}customElements.define(r.is,r)},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a(8),r=a(33),n=a(7);
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class o extends(Object(n.a)(Object(r.a)(i.a))){static get template(){return i.b`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,_oldRenderer:Function}}static get observers(){return["__rendererOrItemChanged(renderer, index, item.*, selected, focused)","__updateLabel(label, renderer)"]}connectedCallback(){super.connectedCallback(),this._comboBox=this.parentNode.comboBox;const e=this._comboBox.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._comboBox,e)}__rendererOrItemChanged(e,t,a){void 0!==a&&void 0!==t&&(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}}customElements.define(o.is,o)},function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a(42),r=a(69),n=a(7);let o;
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(n.d)("vaadin-combo-box-overlay",n.c`
    #overlay {
      width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
    }

    [part='content'] {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  `,{moduleId:"vaadin-combo-box-overlay-styles"});class s extends(Object(r.a)(i.a)){static get is(){return"vaadin-combo-box-overlay"}static get template(){return o||(o=super.template.cloneNode(!0),o.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),o}static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}connectedCallback(){super.connectedCallback();const e=this.__dataHost,t=e&&e.getRootNode().host;this._comboBox=t;const a=t&&t.getAttribute("dir");a&&this.setAttribute("dir",a)}ready(){super.ready();const e=document.createElement("div");e.setAttribute("part","loader");const t=this.shadowRoot.querySelector('[part~="content"]');t.parentNode.insertBefore(e,t)}_outsideClickListener(e){const t=e.composedPath();t.includes(this.positionTarget)||t.includes(this)||this.close()}_setOverlayWidth(e,t){if(e&&t){const t=this.localName;this.style.setProperty(`--_${t}-default-width`,e.clientWidth+"px");const a=getComputedStyle(this._comboBox).getPropertyValue(`--${t}-width`);""===a?this.style.removeProperty(`--${t}-width`):this.style.setProperty(`--${t}-width`,a),this._updatePosition()}}}customElements.define(s.is,s)},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a(8),r=a(107),n=a(85);
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class o extends i.a{static get is(){return"vaadin-combo-box-scroller"}static get template(){return i.b`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color);
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}static get properties(){return{items:{type:Array,observer:"__itemsChanged"},focusedIndex:{type:Number,observer:"__focusedIndexChanged"},loading:{type:Boolean,observer:"__loadingChanged"},opened:{type:Boolean,observer:"__openedChanged"},selectedItem:{type:Object},itemIdPath:{type:String},comboBox:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}__openedChanged(e){e&&this.requestContentUpdate()}ready(){super.ready(),this.__hostTagName=this.constructor.is.replace("-scroller",""),this.setAttribute("role","listbox"),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling(),this.__virtualizer=new r.a({createElements:this.__createElements.bind(this),updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector})}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}scrollIntoView(e){if(!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let a=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),a=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(a=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,a));const i=[...this.children].find(e=>!e.hidden&&e.index===this.__virtualizer.lastVisibleIndex);if(!i||e!==i.index)return;const r=i.getBoundingClientRect(),n=this.getBoundingClientRect(),o=r.bottom-n.bottom+this._viewportTotalPaddingBottom;o>0&&(this.scrollTop+=o)}__getAriaRole(e){return void 0!==e&&"option"}__getAriaSelected(e,t){return this.__isItemFocused(e,t).toString()}__isItemFocused(e,t){return e===t}__isItemSelected(e,t,a){return!(e instanceof n.a)&&(a&&void 0!==e&&void 0!==t?this.get(a,e)===this.get(a,t):e===t)}__itemsChanged(e){this.__virtualizer&&e&&(this.__virtualizer.size=e.length,this.__virtualizer.flush(),this.setAttribute("aria-setsize",e.length),this.requestContentUpdate())}__loadingChanged(e){this.__virtualizer&&!e&&setTimeout(()=>this.requestContentUpdate())}__focusedIndexChanged(e,t){this.__virtualizer&&(e!==t&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e))}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map(()=>{const e=document.createElement(this.__hostTagName+"-item");return e.addEventListener("click",this.__boundOnItemClick),e.tabIndex="-1",e.style.width="100%",e})}__updateElement(e,t){const a=this.items[t],i=this.focusedIndex;e.setProperties({item:a,index:this.__requestItemByIndex(a,t),label:this.getItemLabel(a),selected:this.__isItemSelected(a,this.selectedItem,this.itemIdPath),renderer:this.renderer,focused:this.__isItemFocused(i,t)}),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",this.__getAriaRole(t)),e.setAttribute("aria-selected",this.__getAriaSelected(i,t)),e.setAttribute("aria-posinset",t+1),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme")}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{const t=0===this.scrollTop,a=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||a&&e.deltaY>0)&&e.preventDefault()})}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,t)=>e+t)}return this._cachedViewportTotalPaddingBottom}__requestItemByIndex(e,t){return e instanceof n.a&&void 0!==t&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}})),t}_visibleItemsCount(){this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex);return this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}}customElements.define(o.is,o)},function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var i=a(23),r=a(30),n=a(37),o=a(54),s=a(43),l=a(76),d=a(155),c=a(85);
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const u=e=>class extends(Object(r.a)(Object(o.a)(Object(l.a)(Object(n.a)(e))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_loadingChanged"},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,_toggleElement:{type:Object,observer:"_toggleElementChanged"},_closeOnBlurIsPrevented:Boolean,__restoreFocusOnClose:Boolean}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems)","_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _inputElementValue(){return this.inputElement?this.inputElement[this._propertyForValue]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.autocapitalize="off",e.setAttribute("role","combobox"),e.setAttribute("aria-autocomplete","list"),e.setAttribute("aria-expanded",!!this.opened),e.setAttribute("spellcheck","false"),e.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,this.$.dropdown.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("click",this._boundOnClick),this.$.dropdown.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this.$.dropdown.$.overlay.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),Object(s.a)(this),this.addController(new d.a(this))}requestContentUpdate(){this.$.dropdown._scroller&&(this.$.dropdown._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_focusedIndexChanged(e,t){void 0!==t&&this._updateActiveDescendant(e)}_updateActiveDescendant(e){const t=this.inputElement;if(!t)return;const a=this._getItemElements().find(t=>t.index===e);a?t.setAttribute("aria-activedescendant",a.id):t.removeAttribute("aria-activedescendant")}_openedChanged(e,t){if(void 0===t)return;e?(this._openedWithFocusRing=this.hasAttribute("focus-ring"),this.hasAttribute("focused")||i.f||this.focus(),this.__restoreFocusOnClose=!0):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.setAttribute("focus-ring",""));const a=this.inputElement;a&&(a.setAttribute("aria-expanded",!!e),e?a.setAttribute("aria-controls",this.$.dropdown.scrollerId):a.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_handleClearButtonClick(e){e.preventDefault(),this._clear(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._closeOnBlurIsPrevented=!0;const t=e.composedPath();this._isClearButton(e)?this._handleClearButtonClick(e):t.indexOf(this._toggleElement)>-1?this._onToggleButtonClick(e):this._onHostClick(e),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){super._onKeyDown(e),"Tab"===e.key?this.__restoreFocusOnClose=!1:"ArrowDown"===e.key?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):"ArrowUp"===e.key&&(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault())}_getItemLabel(e){return this.$.dropdown.getItemLabel(e)}_getItemValue(e){let t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){if(this.opened){const e=this._getOverlayItems();e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._getOverlayItems();e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue=this._getItemLabel(this.$.dropdown.focusedItem),this._markAllSelectionRange())}_setSelectionRange(e,t){this.hasAttribute("focused")&&this.inputElement.setSelectionRange(e,t)}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){this.opened||this.loading?this.close():this._commitValue()}_onEnter(e){if(!this.allowCustomValue&&""!==this._inputElementValue&&this._focusedIndex<0)return e.preventDefault(),void e.stopPropagation();this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_onEscape(e){this.autoOpenDisabled?this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.clearButtonVisible&&!this.opened&&this.value&&(e.stopPropagation(),this._clear()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._clear())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",e=>e.preventDefault()),e.addEventListener("click",()=>{i.f&&!this.hasAttribute("focused")&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){requestAnimationFrame(()=>{this.$.dropdown.adjustScrollPosition(),this._updateActiveDescendant(this._focusedIndex)}),this._lastCommittedValue=this.value}_onClosed(){this.loading&&!this.allowCustomValue||this._commitValue()}_commitValue(){const e=this._getOverlayItems();if(e&&this._focusedIndex>-1){const t=e[this._focusedIndex];this.selectedItem!==t&&(this.selectedItem=t),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=e=>e&&e.toLowerCase&&e.toLowerCase(),t=[...this.filteredItems||[],this.selectedItem].find(t=>e(this._getItemLabel(t))===e(this._inputElementValue));if(this.allowCustomValue&&!t){const e=this._inputElementValue;this._lastCustomValue=e;const t=new CustomEvent("custom-value-set",{detail:e,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(t),t.defaultPrevented||(this._selectItemForValue(e),this.value=e)}else this.allowCustomValue||this.opened||!t?this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||"":this.value=this._getItemValue(t)}this._detectAndDispatchChange(),this._clearSelectionRange(),this.filter=""}get _propertyForValue(){return"value"}_onInput(e){this.opened||this._isClearButton(e)||this.autoOpenDisabled||this.open();const t=this._inputElementValue;this.filter===t?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=t}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,a){void 0!==e&&(this.$.dropdown._scrollIntoView(0),this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(""!==this.value),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}this.$.dropdown._selectedItem=e;const t=this._getOverlayItems();this.filteredItems&&t&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){""===e&&void 0===t||(this._isValidValue(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(""!==this.value)):this.selectedItem=null,this.filter="",this._lastCommittedValue=void 0)}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t}),e?this.filteredItems=e.slice(0):this.__previousItems&&(this.filteredItems=null);const a=this._indexOfValue(this.value,e);this._focusedIndex=a;const i=a>-1&&e[a];i&&(this.selectedItem=i),this.__previousItems=e}_filteredItemsChanged(e,t,a){this._setOverlayItems(e);const i=this._indexOfValue(this.value,e);null===this.selectedItem&&i>=0&&this._selectItemForValue(this.value);const r=this._inputElementValue;void 0===r||r===this._getItemLabel(this.selectedItem)?this._focusedIndex=this.$.dropdown.indexOfLabel(this._getItemLabel(this.selectedItem)):this._focusedIndex=this.$.dropdown.indexOfLabel(this.filter)}_filterItems(e,t){if(!e)return e;return e.filter(e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1))}_selectItemForValue(e){const t=this._indexOfValue(e,this.filteredItems),a=this.selectedItem;t>=0?this.selectedItem=this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?this.selectedItem=void 0:this.selectedItem=null,null===this.selectedItem&&null===a&&this._selectedItemChanged(this.selectedItem)}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-combo-box-item"))}_getOverlayItems(){return this.$.dropdown._items}_setOverlayItems(e){this.$.dropdown.set("_items",e)}_indexOfValue(e,t){return t&&this._isValidValue(e)?t.findIndex(t=>!(t instanceof c.a)&&this._getItemValue(t)===e):-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof c.a||(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onFocusout(e){if(e.relatedTarget!==this.$.dropdown.$.overlay){if(!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue)return void delete this._lastCustomValue;this._closeOrCommit()}}else e.composedPath()[0].focus()}_onTouchend(e){this.clearElement&&e.composedPath()[0]===this.clearElement&&(e.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){return super.checkValidity?super.checkValidity():!this.required||!!this.value}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class i{constructor(e){this.host=e,e.addEventListener("opened-changed",()=>{e.opened||this.__setVirtualKeyboardEnabled(!1)}),e.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),e.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(e){this.host.inputElement&&(this.host.inputElement.inputMode=e?"":"none")}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(10),a(13),a(9),a(14);var i=a(66),r=a(39),n=a(7);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=n.c`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    /* align with text-field height + vertical paddings */
    line-height: calc(var(--lumo-text-field-size) + 2 * var(--lumo-space-xs));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }

  :host::before {
    margin-top: var(--lumo-space-xs);
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  /* align with text-field label */
  :host([has-label]) [part='label'] {
    padding-bottom: calc(0.5em - var(--lumo-space-xs));
  }

  :host(:not([has-label])) [part='label'],
  :host(:not([has-label]))::before {
    display: none;
  }

  /* align with text-field error message */
  :host([has-error-message]) [part='error-message']::before {
    height: calc(0.4em - var(--lumo-space-xs));
  }

  :host([focused]:not([readonly]):not([disabled])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'],
  :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([disabled]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }

  /* Disabled */
  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small'][has-label]) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small'][has-label]) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* When custom-field is used with components without outer margin */
  :host([theme~='whitespace'][has-label]) [part='label'] {
    padding-bottom: 0.5em;
  }
`;Object(n.d)("vaadin-custom-field",[r.a,i.a,o],{moduleId:"lumo-custom-field"})},function(e,t,a){"use strict";function i(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}a.d(t,"a",(function(){return i}))},function(e,t,a){"use strict";function i(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function r(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var n={p:r,P:function(e,t){var a,n=e.match(/(P+)(p+)?/)||[],o=n[1],s=n[2];if(!s)return i(e,t);switch(o){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;case"PPPP":default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",i(o,t)).replace("{{time}}",r(s,t))}};t.a=n},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a(21),r=a(17),n=a(88);function o(e){Object(r.a)(1,arguments);var t=Object(i.a)(e),a=t.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var s=Object(n.a)(o),l=new Date(0);l.setUTCFullYear(a,0,4),l.setUTCHours(0,0,0,0);var d=Object(n.a)(l);return t.getTime()>=s.getTime()?a+1:t.getTime()>=d.getTime()?a:a-1}},function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s}));var i=["D","DD"],r=["YY","YYYY"];function n(e){return-1!==i.indexOf(e)}function o(e){return-1!==r.indexOf(e)}function s(e,t,a){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://git.io/fxCyr"))}},function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a(44);var i=a(8),r=a(11),n=a(48),o=a(102),s=a(38),l=a(138),d=a(51),c=a(7);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(c.d)("vaadin-number-field",d.a,{moduleId:"vaadin-number-field-styles"});class u extends(Object(o.a)(Object(l.a)(Object(c.a)(Object(r.a)(i.a))))){static get is(){return"vaadin-number-field"}static get template(){return i.b`
      <style>
        :host([readonly]) [part$='button'] {
          pointer-events: none;
        }

        [part='decrease-button']::before {
          content: '−';
        }

        [part='increase-button']::before {
          content: '+';
        }

        [part='decrease-button'],
        [part='increase-button'] {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_allowed(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_decreaseValue"
            on-touchend="_decreaseButtonTouchend"
            hidden$="[[!hasControls]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_allowed(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_increaseValue"
            on-touchend="_increaseButtonTouchend"
            hidden$="[[!hasControls]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number,observer:"_minChanged"},max:{type:Number,observer:"_maxChanged"},step:{type:Number,value:1,observer:"_stepChanged"}}}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number")}get slotStyles(){const e=this.localName;return[`\n        ${e} input[type="number"]::-webkit-outer-spin-button,\n        ${e} input[type="number"]::-webkit-inner-spin-button {\n          -webkit-appearance: none;\n          margin: 0;\n        }\n\n        ${e} input[type="number"] {\n          -moz-appearance: textfield;\n        }\n\n        ${e}[dir='rtl'] input[type="number"]::placeholder {\n          direction: rtl;\n        }\n\n        ${e}[dir='rtl']:not([has-controls]) input[type="number"]::placeholder {\n          text-align: left;\n        }\n      `]}get clearElement(){return this.$.clearButton}connectedCallback(){super.connectedCallback(),this.inputElement&&(this.inputElement.min=this.min,this.inputElement.max=this.max,this.__applyStep(this.step))}ready(){super.ready(),this.addController(new n.a(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new s.a(this.inputElement,this._labelController))}_decreaseButtonTouchend(e){e.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(e){e.preventDefault(),this._increaseValue()}_constraintsChanged(e,t,a,i){if(!this.invalid)return;const r=e=>!e&&0!==e;r(t)&&r(a)?e||(this.invalid=!1):this.validate()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(this.disabled||this.readonly)return;let t=parseFloat(this.value);this.value?t<this.min?(e=0,t=this.min):t>this.max&&(e=0,t=this.max):0===this.min&&e<0||0===this.max&&e>0||0===this.max&&0===this.min?(e=0,t=0):(null==this.max||this.max>=0)&&(null==this.min||this.min<=0)?t=0:this.min>0?(t=this.min,this.max<0&&e<0&&(t=this.max),e=0):this.max<0&&(t=this.max,e<0?e=0:this._getIncrement(1,t-this.step)>this.max?t-=2*this.step:t-=this.step);const a=this._getIncrement(e,t);this.value&&0!==e&&!this._incrementIsInsideTheLimits(e,t)||this._setValue(a)}_setValue(e){this.value=this.inputElement.value=String(parseFloat(e)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(e,t){let a=this.step||1,i=this.min||0;const r=Math.max(this._getMultiplier(t),this._getMultiplier(a),this._getMultiplier(i));a*=r,i*=r;const n=((t=Math.round(t*r))-i)%a;return e>0?(t-n+a)/r:e<0?(t-(n||a))/r:t/r}_getDecimalCount(e){const t=String(e),a=t.indexOf(".");return-1===a?1:t.length-a-1}_getMultiplier(e){if(!isNaN(e))return 10**this._getDecimalCount(e)}_incrementIsInsideTheLimits(e,t){return e<0?null==this.min||this._getIncrement(e,t)>=this.min:e>0?null==this.max||this._getIncrement(e,t)<=this.max:this._getIncrement(e,t)<=this.max&&this._getIncrement(e,t)>=this.min}_allowed(e){const t=e*(this.step||1),a=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(t,a)}__applyStep(e){this.inputElement&&(this.inputElement.step=this.__validateByStep?e:"any")}_stepChanged(e){this.__validateByStep=this.__stepChangedCalled||null!==this.getAttribute("step"),this.__applyStep(e),this.__stepChangedCalled=!0,this.setAttribute("step",e)}_minChanged(e){this.inputElement&&(this.inputElement.min=e)}_maxChanged(e){this.inputElement&&(this.inputElement.max=e)}_valueChanged(e,t){e&&isNaN(parseFloat(e))?this.value="":"string"!=typeof this.value&&(this.value=String(this.value)),super._valueChanged(this.value,t)}_onKeyDown(e){"ArrowUp"===e.key?(e.preventDefault(),this._increaseValue()):"ArrowDown"===e.key&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}checkValidity(){return this.inputElement&&(this.required||void 0!==this.min||void 0!==this.max||this.__validateByStep)?this.inputElement.checkValidity():!this.invalid}}customElements.define(u.is,u)},function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var i=a(8),r=a(75),n=a(30),o=a(11),s=a(122),l=a(56),d=a(48),c=a(109),u=a(38),h=a(124),m=a(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class p extends(Object(c.a)(Object(s.a)(Object(l.a)(Object(r.a)(Object(o.a)(Object(m.a)(Object(n.a)(i.a)))))))){static get is(){return"vaadin-radio-button"}static get template(){return i.b`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([disabled]) {
          -webkit-tap-highlight-color: transparent;
        }

        .vaadin-radio-button-container {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: baseline;
        }

        .vaadin-radio-button-wrapper {
          position: relative;
          height: 100%;
        }

        /* visually hidden */
        ::slotted(input) {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: inherit;
          margin: 0;
        }
      </style>
      <div class="vaadin-radio-button-container">
        <div class="vaadin-radio-button-wrapper">
          <div part="radio"></div>
          <slot name="input"></slot>
        </div>

        <slot name="label"></slot>

        <div style="display: none !important">
          <slot id="noop"></slot>
        </div>
      </div>
    `}static get properties(){return{name:{type:String,value:""}}}static get delegateAttrs(){return[...super.delegateAttrs,"name"]}constructor(){super(),this._setType("radio"),this.value="on"}connectedCallback(){super.connectedCallback(),this._inputController||(this._inputController=new d.a(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e}),this.addController(this._inputController),this.addController(new u.a(this.inputElement,this._labelController)),this.addController(new h.a(this.$.noop,()=>this._labelController.node,()=>this.__warnDeprecated())))}__warnDeprecated(){console.warn('WARNING: Since Vaadin 22, placing the label as a direct child of a <vaadin-radio-button> is deprecated.\n  Please use <label slot="label"> wrapper or the label property instead.')}}customElements.define(p.is,p)},function(e,t,a){"use strict";var i=a(8),r=a(11),n=a(128),o=a(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class s extends(Object(r.a)(Object(o.a)(Object(n.a)(i.a)))){static get template(){return i.b`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-tab"}ready(){super.ready(),this.setAttribute("role","tab")}_onKeyUp(e){const t=this.hasAttribute("active");if(super._onKeyUp(e),t){const e=this.querySelector("a");e&&e.click()}}}customElements.define(s.is,s)},function(e,t,a){"use strict";a(190),a(165);var i=a(8),r=a(28),n=a(7);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class o extends(Object(r.a)(Object(n.a)(i.a))){static get template(){return i.b`
      <style>
        :host {
          display: block;
        }

        [hidden] {
          display: none;
        }

        [part='row'] {
          list-style-type: none;
        }

        button {
          background: transparent;
          padding: 0;
          border: none;
          box-shadow: none;
        }
      </style>

      <div part="row">
        <div part="info">
          <div part="done-icon" hidden$="[[!file.complete]]" aria-hidden="true"></div>
          <div part="warning-icon" hidden$="[[!file.error]]" aria-hidden="true"></div>

          <div part="meta">
            <div part="name" id="name">[[file.name]]</div>
            <div part="status" hidden$="[[!file.status]]" id="status">[[file.status]]</div>
            <div part="error" id="error" hidden$="[[!file.error]]">[[file.error]]</div>
          </div>
        </div>
        <div part="commands">
          <button
            type="button"
            part="start-button"
            file-event="file-start"
            on-click="_fireFileEvent"
            hidden$="[[!file.held]]"
            aria-label$="[[i18n.file.start]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="retry-button"
            file-event="file-retry"
            on-click="_fireFileEvent"
            hidden$="[[!file.error]]"
            aria-label$="[[i18n.file.retry]]"
            aria-describedby="name"
          ></button>
          <button
            type="button"
            part="remove-button"
            file-event="file-abort"
            on-click="_fireFileEvent"
            aria-label$="[[i18n.file.remove]]"
            aria-describedby="name"
          ></button>
        </div>
      </div>

      <vaadin-progress-bar
        part="progress"
        id="progress"
        value$="[[_formatProgressValue(file.progress)]]"
        error$="[[file.error]]"
        indeterminate$="[[file.indeterminate]]"
        uploading$="[[file.uploading]]"
        complete$="[[file.complete]]"
      ></vaadin-progress-bar>
    `}static get is(){return"vaadin-upload-file"}static get properties(){return{file:Object,i18n:Object,tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["_fileAborted(file.abort)",'_toggleHostAttribute(file.error, "error")','_toggleHostAttribute(file.indeterminate, "indeterminate")','_toggleHostAttribute(file.uploading, "uploading")','_toggleHostAttribute(file.complete, "complete")']}ready(){super.ready(),this.shadowRoot.addEventListener("focusin",e=>{e.composedPath()[0].getAttribute("part").endsWith("button")&&this._setFocused(!1)}),this.shadowRoot.addEventListener("focusout",e=>{e.relatedTarget===this&&this._setFocused(!0)})}_shouldSetFocus(e){return e.composedPath()[0]===this}_fileAborted(e){e&&this._remove()}_remove(){this.dispatchEvent(new CustomEvent("file-remove",{detail:{file:this.file},bubbles:!0,composed:!0}))}_formatProgressValue(e){return e/100}_fireFileEvent(e){return e.preventDefault(),this.dispatchEvent(new CustomEvent(e.target.getAttribute("file-event"),{detail:{file:this.file},bubbles:!0,composed:!0}))}_toggleHostAttribute(e,t){const a=Boolean(e);this.hasAttribute(t)!==a&&(a?this.setAttribute(t,""):this.removeAttribute(t))}}customElements.define(o.is,o)},function(e,t){
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=document.createElement("template");a.innerHTML="\n  <style>\n    @font-face {\n      font-family: 'vaadin-upload-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAasAAsAAAAABmAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIF5mNtYXAAAAFoAAAAVAAAAFQXVtKMZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfQAAAH0bBJxYWhlYWQAAAO4AAAANgAAADYPD267aGhlYQAAA/AAAAAkAAAAJAfCA8tobXR4AAAEFAAAACgAAAAoHgAAx2xvY2EAAAQ8AAAAFgAAABYCSgHsbWF4cAAABFQAAAAgAAAAIAAOADVuYW1lAAAEdAAAAhYAAAIWmmcHf3Bvc3QAAAaMAAAAIAAAACAAAwAAAAMDtwGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QUDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkF//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAgAA/8AEAAPAABkAMgAAEz4DMzIeAhczLgMjIg4CBycRIScFIRcOAyMiLgInIx4DMzI+AjcXphZGWmo6SH9kQwyADFiGrmJIhXJbIEYBAFoDWv76YBZGXGw8Rn5lRQyADFmIrWBIhHReIkYCWjJVPSIyVnVDXqN5RiVEYTxG/wBa2loyVT0iMlZ1Q16jeUYnRWE5RgAAAAABAIAAAAOAA4AAAgAAExEBgAMAA4D8gAHAAAAAAwAAAAAEAAOAAAIADgASAAAJASElIiY1NDYzMhYVFAYnETMRAgD+AAQA/gAdIyMdHSMjXYADgPyAgCMdHSMjHR0jwAEA/wAAAQANADMD5gNaAAUAACUBNwUBFwHT/jptATMBppMzAU2a4AIgdAAAAAEAOv/6A8YDhgALAAABJwkBBwkBFwkBNwEDxoz+xv7GjAFA/sCMAToBOoz+wAL6jP7AAUCM/sb+xowBQP7AjAE6AAAAAwAA/8AEAAPAAAcACwASAAABFSE1IREhEQEjNTMJAjMRIRECwP6A/sAEAP0AgIACQP7A/sDAAQABQICA/oABgP8AgAHAAUD+wP6AAYAAAAABAAAAAQAAdhiEdV8PPPUACwQAAAAAANX4FR8AAAAA1fgVHwAA/8AEAAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAAAAgAAAAQAAAAEAACABAAAAAQAAA0EAAA6BAAAAAAAAAAACgAUAB4AagB4AJwAsADSAPoAAAABAAAACgAzAAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEAEwAAAAEAAAAAAAIABwDMAAEAAAAAAAMAEwBaAAEAAAAAAAQAEwDhAAEAAAAAAAUACwA5AAEAAAAAAAYAEwCTAAEAAAAAAAoAGgEaAAMAAQQJAAEAJgATAAMAAQQJAAIADgDTAAMAAQQJAAMAJgBtAAMAAQQJAAQAJgD0AAMAAQQJAAUAFgBEAAMAAQQJAAYAJgCmAAMAAQQJAAoANAE0dmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzdmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQBydmFhZGluLXVwbG9hZC1pY29ucwB2AGEAYQBkAGkAbgAtAHUAcABsAG8AYQBkAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(a.content)},,,,function(e,t,a){"use strict";var i={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},r=function(e,t,a){var r,n=i[e];return r="string"==typeof n?n:1===t?n.one:n.other.replace("{{count}}",t.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r};function n(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,i=e.formats[a]||e.formats[e.defaultWidth];return i}}var o={date:n({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:n({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:n({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},s={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function l(e){return function(t,a){var i,r=a||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):n;i=e.formattingValues[o]||e.formattingValues[n]}else{var s=e.defaultWidth,l=r.width?String(r.width):e.defaultWidth;i=e.values[l]||e.values[s]}return i[e.argumentCallback?e.argumentCallback(t):t]}}function d(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],n=t.match(r);if(!n)return null;var o,s=n[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(l)?u(l,(function(e){return e.test(s)})):c(l,(function(e){return e.test(s)}));o=e.valueCallback?e.valueCallback(d):d,o=a.valueCallback?a.valueCallback(o):o;var h=t.slice(s.length);return{value:o,rest:h}}}function c(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function u(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}var h,m={code:"en-US",formatDistance:r,formatLong:o,formatRelative:function(e,t,a,i){return s[e]},localize:{ordinalNumber:function(e,t){var a=Number(e),i=a%100;if(i>20||i<10)switch(i%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:l({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:l({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:l({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:l({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:l({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(h={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.match(h.matchPattern);if(!a)return null;var i=a[0],r=e.match(h.parsePattern);if(!r)return null;var n=h.valueCallback?h.valueCallback(r[0]):r[0];n=t.valueCallback?t.valueCallback(n):n;var o=e.slice(i.length);return{value:n,rest:o}}),era:d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};t.a=m},function(e,t,a){"use strict";a.d(t,"a",(function(){return F}));a(44);var i=a(115),r=a(42),n=a(69),o=a(7);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=o.c`
  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='value']::placeholder {
    direction: rtl;
    text-align: left;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`,l=o.c`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }
`;let d;
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(o.d)("vaadin-date-picker-overlay",l,{moduleId:"vaadin-date-picker-overlay-styles"});class c extends(Object(i.a)(Object(n.a)(r.a))){static get is(){return"vaadin-date-picker-overlay"}static get template(){return d||(d=super.template.cloneNode(!0),d.content.querySelector('[part~="overlay"]').removeAttribute("tabindex")),d}}customElements.define(c.is,c);a(36),a(65);var u=a(8),h=a(28),m=a(34),p=a(86);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class v extends(Object(h.a)(Object(o.a)(u.a))){static get template(){return u.b`
      <style>
        :host {
          display: block;
        }

        #monthGrid {
          width: 100%;
          border-collapse: collapse;
        }

        #days-container tr,
        #weekdays-container tr {
          display: flex;
        }

        [part='date'] {
          outline: none;
        }

        [part='week-number'][hidden],
        [part='weekday'][hidden] {
          display: none;
        }

        [part='weekday'],
        [part='date'] {
          width: calc(100% / 7);
          padding: 0;
          font-weight: normal;
        }

        [part='weekday']:empty,
        [part='week-number'] {
          width: 12.5%;
          flex-shrink: 0;
          padding: 0;
        }

        :host([week-numbers]) [part='weekday']:not(:empty),
        :host([week-numbers]) [part='date'] {
          width: 12.5%;
        }
      </style>

      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n.monthNames)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th
              part="weekday"
              aria-hidden="true"
              hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
            ></th>
            <template
              is="dom-repeat"
              items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]"
            >
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]">[[item.weekDayShort]]</th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td
                part="week-number"
                aria-hidden="true"
                hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]"
              >
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part="date"
                  date="[[item]]"
                  today$="[[_isToday(item)]]"
                  focused$="[[__isDayFocused(item, focusedDate)]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  selected$="[[__isDaySelected(item, selectedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)","__focusedDateChanged(focusedDate, _days)"]}ready(){super.ready(),Object(m.a)(this.$.monthGrid,"tap",this._handleTap.bind(this))}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part=date]")].find(e=>Object(p.b)(e.date,this.focusedDate))}_isDisabled(e,t,a){const i=new Date(0,0);i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);const r=new Date(0,0);return r.setFullYear(e.getFullYear()),r.setMonth(e.getMonth()+1),r.setDate(0),!(t&&a&&t.getMonth()===a.getMonth()&&t.getMonth()===e.getMonth()&&a.getDate()-t.getDate()>=0)&&(!Object(p.a)(i,t,a)&&!Object(p.a)(r,t,a))}_getTitle(e,t){if(void 0!==e&&void 0!==t)return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(void 0!==e&&void 0!==t)return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,a,i){if(void 0!==e&&void 0!==t&&void 0!==a&&void 0!==i)return e=this._applyFirstDayOfWeek(e,i),t=this._applyFirstDayOfWeek(t,i),e=e.map((e,a)=>({weekDay:e,weekDayShort:t[a]}))}__focusedDateChanged(e,t){t.some(t=>Object(p.b)(t,e))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&1===t?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&1===t}_isToday(e){return Object(p.b)(new Date,e)}_getDays(e,t){if(void 0===e||void 0===t)return;const a=new Date(0,0);for(a.setFullYear(e.getFullYear()),a.setMonth(e.getMonth()),a.setDate(1);a.getDay()!==t;)this._dateAdd(a,-1);const i=[],r=a.getMonth(),n=e.getMonth();for(;a.getMonth()===n||a.getMonth()===r;)i.push(a.getMonth()===n?new Date(a.getTime()):null),this._dateAdd(a,1);return i}_getWeeks(e){return e.reduce((e,t,a)=>(a%7==0&&e.push([]),e[e.length-1].push(t),e),[])}_handleTap(e){this.ignoreTaps||this._notTapping||!e.target.date||e.target.hasAttribute("disabled")||(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:e.target.date},bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}__getWeekNumber(e){const t=e.reduce((e,t)=>!e&&t?t:e);return Object(p.e)(t)}__isDayFocused(e,t){return Object(p.b)(e,t)}__isDaySelected(e,t){return Object(p.b)(e,t)}__getDayAriaSelected(e,t){if(this.__isDaySelected(e,t))return"true"}__isDayDisabled(e,t,a){return!Object(p.a)(e,t,a)}__getDayAriaDisabled(e,t,a){if(void 0!==e&&void 0!==t&&void 0!==a)return this.__isDayDisabled(e,t,a)?"true":void 0}__getDayAriaLabel(e){if(!e)return"";let t=`${this._getDate(e)} ${this.i18n.monthNames[e.getMonth()]} ${e.getFullYear()}, ${this.i18n.weekdays[e.getDay()]}`;return this._isToday(e)&&(t+=", "+this.i18n.today),t}__getDayTabindex(e,t){return this.__isDayFocused(e,t)?"0":"-1"}__getWeekNumbers(e){return e.map(t=>this.__getWeekNumber(t,e)).filter((e,t,a)=>a.indexOf(e)===t)}}customElements.define(v.is,v);var g=a(46),_=a(47),f=a(20),b=a(23),y=a(27);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class A extends u.a{static get template(){return u.b`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 500px;
        }

        #scroller {
          position: relative;
          height: 100%;
          overflow: auto;
          outline: none;
          margin-right: -40px;
          -webkit-overflow-scrolling: touch;
          overflow-x: hidden;
        }

        #scroller.notouchscroll {
          -webkit-overflow-scrolling: auto;
        }

        #scroller::-webkit-scrollbar {
          display: none;
        }

        .buffer {
          position: absolute;
          width: var(--vaadin-infinite-scroller-buffer-width, 100%);
          box-sizing: border-box;
          padding-right: 40px;
          top: var(--vaadin-infinite-scroller-buffer-offset, 0);
          animation: fadein 0.2s;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      </style>

      <div id="scroller" on-scroll="_scroll">
        <div class="buffer"></div>
        <div class="buffer"></div>
        <div id="fullHeight"></div>
      </div>
    `}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=2*this._initialScroll+"px";const e=this.querySelector("template");this._TemplateClass=Object(_.c)(e,this,{forwardHostProp(e,t){"index"!==e&&this._buffers.forEach(a=>{[].forEach.call(a.children,a=>{a._itemWrapper.instance[e]=t})})}}),b.c&&(this.$.scroller.tabIndex=-1)}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(e=>{[].forEach.call(e.children,e=>this._ensureStampedInstance(e._itemWrapper))},this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){const t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform=`translate3d(0, ${this._buffers[t].translateY}px, 0)`,this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>2*this._initialScroll-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const t=this.itemHeight+this.bufferOffset,a=e>this._buffers[1].translateY+t,i=e<this._buffers[0].translateY+t;(a||i)&&(this._translateBuffer(i),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=y.a.debounce(this._debouncerScrollFinish,f.d.after(200),()=>{const e=this.$.scroller.getBoundingClientRect();this._isVisible(this._buffers[0],e)||this._isVisible(this._buffers[1],e)||(this.position=this.position)})}get bufferOffset(){return this._buffers[0].offsetTop}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+2*this.bufferSize?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get itemHeight(){if(!this._itemHeightVal){const e=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),t="background-position";this.$.fullHeight.style.setProperty(t,e);const a=getComputedStyle(this.$.fullHeight).getPropertyValue(t);this.$.fullHeight.style.removeProperty(t),this._itemHeightVal=parseFloat(a)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(e=>{e.style.transform=`translate3d(0, ${e.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=y.a.debounce(this._debouncerUpdateClones,f.d.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const e=this.getBoundingClientRect();this._buffers.forEach(t=>{for(let a=0;a<this.bufferSize;a++){const a=document.createElement("div");a.style.height=this.itemHeight+"px",a.instance={};const i="vaadin-infinite-scroller-item-content-"+(A._contentIndex=A._contentIndex+1||0),r=document.createElement("slot");r.setAttribute("name",i),r._itemWrapper=a,t.appendChild(r),a.setAttribute("slot",i),this.appendChild(a),setTimeout(()=>{this._isVisible(a,e)&&this._ensureStampedInstance(a)},1)}},this),setTimeout(()=>{Object(g.a)(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(e){if(e.firstElementChild)return;const t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach(a=>{e.instance.set(a,t[a])})}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((a,i)=>{if(!a.updated){const r=this._firstIndex+this.bufferSize*i;[].forEach.call(a.children,(a,i)=>{const n=a._itemWrapper;e&&!this._isVisible(n,t)||(n.instance.index=r+i)}),a.updated=!0}},this)}_isVisible(e,t){const a=e.getBoundingClientRect();return a.bottom>t.top&&a.top<t.bottom}}customElements.define(A.is,A);var w=a(30),x=a(33),k=a(79);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class C extends(Object(w.a)(Object(o.a)(Object(x.a)(u.a)))){static get template(){return u.b`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          outline: none;
          background: #fff;
        }

        [part='overlay-header'] {
          display: flex;
          flex-shrink: 0;
          flex-wrap: nowrap;
          align-items: center;
        }

        :host(:not([fullscreen])) [part='overlay-header'] {
          display: none;
        }

        [part='label'] {
          flex-grow: 1;
        }

        [part='clear-button']:not([showclear]) {
          display: none;
        }

        [part='years-toggle-button'] {
          display: flex;
        }

        [part='years-toggle-button'][desktop] {
          display: none;
        }

        :host(:not([years-visible])) [part='years-toggle-button']::before {
          transform: rotate(180deg);
        }

        #scrollers {
          display: flex;
          height: 100%;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        [part='months'],
        [part='years'] {
          height: 100%;
        }

        [part='months'] {
          --vaadin-infinite-scroller-item-height: 270px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        #scrollers[desktop] [part='months'] {
          right: 50px;
          transform: none !important;
        }

        [part='years'] {
          --vaadin-infinite-scroller-item-height: 80px;
          width: 50px;
          position: absolute;
          right: 0;
          transform: translateX(100%);
          -webkit-tap-highlight-color: transparent;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          /* Center the year scroller position. */
          --vaadin-infinite-scroller-buffer-offset: 50%;
        }

        #scrollers[desktop] [part='years'] {
          position: absolute;
          transform: none !important;
        }

        [part='years']::before {
          content: '';
          display: block;
          background: transparent;
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px;
          border-style: solid;
          border-color: transparent;
          border-left-color: #000;
        }

        :host(.animate) [part='months'],
        :host(.animate) [part='years'] {
          transition: all 200ms;
        }

        [part='toolbar'] {
          display: flex;
          justify-content: space-between;
          z-index: 2;
          flex-shrink: 0;
        }

        [part~='overlay-header']:not([desktop]) {
          padding-bottom: 40px;
        }

        [part~='years-toggle-button'] {
          position: absolute;
          top: auto;
          right: 8px;
          bottom: 0;
          z-index: 1;
          padding: 8px;
        }
      </style>

      <div part="overlay-header" on-touchend="_preventDefault" desktop$="[[_desktopMode]]" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
        <div part="clear-button" showclear$="[[_showClear(selectedDate)]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" desktop$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers" desktop$="[[_desktopMode]]">
        <vaadin-infinite-scroller
          id="monthScroller"
          on-custom-scroll="_onMonthScroll"
          on-touchstart="_onMonthScrollTouchStart"
          buffer-size="3"
          active="[[initialPosition]]"
          part="months"
        >
          <template>
            <vaadin-month-calendar
              i18n="[[i18n]]"
              month="[[_dateAfterXMonths(index)]]"
              selected-date="{{selectedDate}}"
              focused-date="[[focusedDate]]"
              ignore-taps="[[_ignoreTaps]]"
              show-week-numbers="[[showWeekNumbers]]"
              min-date="[[minDate]]"
              max-date="[[maxDate]]"
              part="month"
              theme$="[[_theme]]"
              on-keydown="__onMonthCalendarKeyDown"
            >
            </vaadin-month-calendar>
          </template>
        </vaadin-infinite-scroller>
        <vaadin-infinite-scroller
          id="yearScroller"
          on-custom-scroll="_onYearScroll"
          on-touchstart="_onYearScrollTouchStart"
          buffer-size="12"
          active="[[initialPosition]]"
          part="years"
          aria-hidden="true"
        >
          <template>
            <div
              part="year-number"
              current$="[[_isCurrentYear(index)]]"
              selected$="[[_isSelectedYear(index, selectedDate)]]"
            >
              [[_yearAfterXYears(index)]]
            </div>
            <div part="year-separator" aria-hidden="true"></div>
          </template>
        </vaadin-infinite-scroller>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <vaadin-button
          id="todayButton"
          part="today-button"
          theme="tertiary"
          disabled="[[!_isTodayAllowed(minDate, maxDate)]]"
          on-keydown="__onTodayButtonKeyDown"
        >
          [[i18n.today]]
        </vaadin-button>
        <vaadin-button id="cancelButton" part="cancel-button" theme="tertiary" on-keydown="__onCancelButtonKeyDown">
          [[i18n.cancel]]
        </vaadin-button>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Date},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,label:String}}get __isRTL(){return"rtl"===this.getAttribute("dir")}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("vaadin-month-calendar")].map(e=>e.focusableDateElement).find(Boolean)}ready(){super.ready(),this.setAttribute("role","dialog"),Object(m.a)(this,"tap",this._stopPropagation),Object(m.a)(this.$.scrollers,"track",this._track.bind(this)),Object(m.a)(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),Object(m.a)(this.shadowRoot.querySelector('[part="today-button"]'),"tap",this._onTodayTap.bind(this)),Object(m.a)(this.shadowRoot.querySelector('[part="cancel-button"]'),"tap",this._cancel.bind(this)),Object(m.a)(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),Object(m.a)(this.shadowRoot.querySelector('[part="years"]'),"tap",this._onYearTap.bind(this)),Object(m.a)(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this)),this.addController(new k.a(this._desktopMediaQuery,e=>{this._desktopMode=e}))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),Object(m.f)(this.$.scrollers,"pan-y")}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){this._scrollToPosition(this._differenceInMonths(e,this._originDate),t)}_selectDate(e){this.selectedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e},bubbles:!0,composed:!0}))}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return 0===e}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e,t=!0){if(e){const a=this._differenceInMonths(e,this._originDate),i=this.$.monthScroller.position>a,r=Math.max(this.$.monthScroller.itemHeight,this.$.monthScroller.clientHeight-2*this.$.monthScroller.bufferOffset)/this.$.monthScroller.itemHeight,n=this.$.monthScroller.position+r-1<a;i?this._scrollToPosition(a,t):n&&this._scrollToPosition(a-r+1,t)}}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=y.a.debounce(this._debouncer,f.d.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(e,t,a){return e?t(Object(p.c)(e)):a}_onTodayTap(){const e=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this._selectDate(e),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(e){return!!e}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){const t=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*t,!0)}}_scrollToPosition(e,t){if(void 0!==this._targetPosition)return void(this._targetPosition=e);if(!t)return this.$.monthScroller.position=e,this._targetPosition=void 0,this._repositionYearScroller(),void this.__tryFocusDate();this._targetPosition=e;let a=0;const i=this.$.monthScroller.position,r=e=>{a=a||e;const t=e-a;if(t<this.scrollDuration){const e=(n=t,o=i,s=this._targetPosition-i,l=this.scrollDuration,(n/=l/2)<1?s/2*n*n+o:-s/2*((n-=1)*(n-2)-1)+o);this.$.monthScroller.position=e,window.requestAnimationFrame(r)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:i}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0,this.__tryFocusDate();var n,o,s,l;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(r)}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)return;Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller()}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform=`translateX(${e-this._yearScrollerWidth}px)`,this.$.yearScroller.style.transform=`translateX(${e}px)`)}_yearAfterXYears(e){const t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){const t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return 12*(e.getFullYear()-t.getFullYear())-t.getMonth()+e.getMonth()}_differenceInYears(e,t){return this._differenceInMonths(e,t)/12}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}__toggleDate(e){Object(p.b)(e,this.selectedDate)?(this._clear(),this.focusedDate=e):this._selectDate(e)}__onMonthCalendarKeyDown(e){let t=!1;switch(e.key){case"ArrowDown":this._moveFocusByDays(7),t=!0;break;case"ArrowUp":this._moveFocusByDays(-7),t=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),t=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),t=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),t=!0;break;case" ":this.__toggleDate(this.focusedDate),t=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),t=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),t=!0;break;case"PageDown":this._moveFocusByMonths(e.shiftKey?12:1),t=!0;break;case"PageUp":this._moveFocusByMonths(e.shiftKey?-12:-1),t=!0;break;case"Tab":this._onTabKeyDown(e,"calendar")}t&&(e.preventDefault(),e.stopPropagation())}_onTabKeyDown(e,t){switch(e.stopPropagation(),t){case"calendar":e.shiftKey&&(e.preventDefault(),this.__focusInput());break;case"today":e.shiftKey&&setTimeout(()=>this.revealDate(this.focusedDate),1);break;case"cancel":e.shiftKey||(e.preventDefault(),this.__focusInput())}}__onTodayButtonKeyDown(e){this.hasAttribute("fullscreen")?"Escape"!==e.key&&e.stopPropagation():"Tab"===e.key&&this._onTabKeyDown(e,"today")}__onCancelButtonKeyDown(e){this.hasAttribute("fullscreen")?"Escape"!==e.key&&e.stopPropagation():"Tab"===e.key&&this._onTabKeyDown(e,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const e=this.focusableDateElement;e&&Object(p.b)(e.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,e.focus())}}async focusDate(e,t){const a=e||this.selectedDate||this.initialPosition||new Date;this.focusedDate=a,t||(this._focusedMonthDate=a.getDate()),await this.focusDateElement()}async focusDateElement(){this.__pendingDateFocus=this.focusedDate,await new Promise(e=>{requestAnimationFrame(e)}),this.__tryFocusDate()}_focusClosestDate(e){this.focusDate(Object(p.d)(e,[this.minDate,this.maxDate]))}_moveFocusByDays(e){const t=this.focusedDate,a=new Date(0,0);a.setFullYear(t.getFullYear()),a.setMonth(t.getMonth()),a.setDate(t.getDate()+e),this._dateAllowed(a,this.minDate,this.maxDate)?this.focusDate(a):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusByMonths(e){const t=this.focusedDate,a=new Date(0,0);a.setFullYear(t.getFullYear()),a.setMonth(t.getMonth()+e);const i=a.getMonth();a.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),a.getMonth()!==i&&a.setDate(0),this._dateAllowed(a,this.minDate,this.maxDate)?this.focusDate(a,!0):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusInsideMonth(e,t){const a=new Date(0,0);a.setFullYear(e.getFullYear()),"minDate"===t?(a.setMonth(e.getMonth()),a.setDate(1)):(a.setMonth(e.getMonth()+1),a.setDate(0)),this._dateAllowed(a,this.minDate,this.maxDate)?this.focusDate(a):this._dateAllowed(e,this.minDate,this.maxDate)?this.focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t,a){return(!t||e>=t)&&(!a||e<=a)}_isTodayAllowed(e,t){const a=new Date,i=new Date(0,0);return i.setFullYear(a.getFullYear()),i.setMonth(a.getMonth()),i.setDate(a.getDate()),this._dateAllowed(i,e,t)}_stopPropagation(e){e.stopPropagation()}}customElements.define(C.is,C);var D=a(11),E=a(83),O=a(48),I=a(38),T=a(51),S=a(54),B=a(56),P=a(76),M=a(155);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const j=e=>class extends(Object(w.a)(Object(B.a)(Object(P.a)(Object(S.a)(e))))){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{type:Boolean,value:!1},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",today:"Today",cancel:"Cancel",formatDate:e=>{const t=String(e.year).replace(/\d+/,e=>"0000".substr(e.length)+e);return[e.month+1,e.day,t].join("/")},parseDate:e=>{const t=e.split("/"),a=new Date;let i,r=a.getMonth(),n=a.getFullYear();if(3===t.length?(n=parseInt(t[2]),t[2].length<3&&n>=0&&(n+=n<50?2e3:1900),r=parseInt(t[0])-1,i=parseInt(t[1])):2===t.length?(r=parseInt(t[0])-1,i=parseInt(t[1])):1===t.length&&(i=parseInt(t[0])),void 0!==i)return{day:i,month:r,year:n}},formatTitle:(e,t)=>`${e} ${t}`})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:b.d},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)"]}get clearElement(){return null}get _inputValue(){return this.inputElement?this.inputElement.value:void 0}set _inputValue(e){this.inputElement&&(this.inputElement.value=e)}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this)}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){if(super._onBlur(e),!this.opened){if(this.autoOpenDisabled){const e=this._getParsedDate();this._isValidDate(e)&&this._selectDate(e)}""===this.inputElement.value&&this.__dispatchChange?(this.validate(),this.value="",this.__dispatchChange=!1):this.validate()}}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new k.a(this._fullscreenMediaQuery,e=>{this._fullscreen=e})),this.addController(new M.a(this))}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_propertiesChanged(e,t,a){super._propertiesChanged(e,t,a),"value"in t&&this.__dispatchChange&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChange=!1)}open(){this.disabled||this.readonly||(this.opened=!0)}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",e=>this.opened=e.detail.value),this.$.overlay.addEventListener("vaadin-overlay-escape-press",()=>{this._focusedDate=this._selectedDate,this._close()}),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this._overlayContent.addEventListener("date-tap",e=>{this.__userConfirmedDate=!0,this._selectDate(e.detail.date),this._close(e)}),this._overlayContent.addEventListener("date-selected",e=>{this.__userConfirmedDate=!0,this._selectDate(e.detail.date)}),this._overlayContent.addEventListener("focusin",()=>{this._setFocused(!0)}),this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){const e=!this._inputValue||this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),t=!this._selectedDate||Object(p.a)(this._selectedDate,this._minDate,this._maxDate);let a=!0;return this.inputElement&&(this.inputElement.checkValidity?a=this.inputElement.checkValidity():this.inputElement.validate&&(a=this.inputElement.validate())),e&&t&&a}_selectDate(e){const t=this._formatISO(e);this.value!==t&&(this.__dispatchChange=!0),this._selectedDate=e}_close(e){e&&e.stopPropagation(),this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_parseDate(e){const t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(!t)return;const a=new Date(0,0);return a.setFullYear(parseInt(t[1],10)),a.setMonth(parseInt(t[2],10)-1),a.setDate(parseInt(t[3],10)),a}_isNoInput(e,t,a,i,r,n){return!e||t&&(!n||r)||a&&r||!i.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const t=(e,t="00")=>(t+e).substr((t+e).length-t.length);let a="",i="0000",r=e.getFullYear();r<0?(r=-r,a="-",i="000000"):e.getFullYear()>=1e4&&(a="+",i="000000");return[a+t(r,i),t(e.getMonth()+1),t(e.getDate())].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,t){if(void 0===e||void 0===t)return;const a=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),a!==this.value&&(this.validate(),this.value=a),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}_focusedDateChanged(e,t){void 0!==e&&void 0!==t&&(this._ignoreFocusedDateChange||this._noInput||this._applyInputValue(e))}__getOverlayTheme(e,t){if(t)return e}_handleDateChange(e,t,a){if(!t)return void(this[e]="");const i=this._parseDate(t);i?Object(p.b)(this[e],i)||(this[e]=i,this.value&&this.validate()):this.value=a}_valueChanged(e,t){this._handleDateChange("_selectedDate",e,t),this._toggleHasValue(!!e)}_minChanged(e,t){this._handleDateChange("_minDate",e,t)}_maxChanged(e,t){this._handleDateChange("_maxDate",e,t)}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring");const e=this._parseDate(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||Object(p.a)(t,this._minDate,this._maxDate)?this._overlayContent.initialPosition=t:this._overlayContent.initialPosition=Object(p.d)(t,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._webkitOverflowScroll&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&(this.focusElement.blur(),this._overlayContent.focusDateElement())}_preventWebkitOverflowScrollingTouch(e){const t=[];for(;e;){if("touch"===window.getComputedStyle(e).webkitOverflowScrolling){const a=e.style.webkitOverflowScrolling;e.style.webkitOverflowScrolling="auto",t.push({element:e,oldInlineValue:a})}e=e.parentElement}return t}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputValue||"",t=this._getParsedDate(e);this._isValidDate(t)?this._selectDate(t):(this.__keepInputValue=!0,this._selectDate(null),this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&this._selectDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){window.removeEventListener("scroll",this._boundOnScroll,!0),this._touchPrevented&&(this._touchPrevented.forEach(e=>e.element.style.webkitOverflowScrolling=e.oldInlineValue),this._touchPrevented=[]),this.__userConfirmedDate?this.__userConfirmedDate=!1:this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate(),this.getRootNode().activeElement!==this.inputElement&&this._setFocused(!1)}_onScroll(e){e.target!==window&&this._overlayContent.contains(e.target)||this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(e){this._inputValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,t){return e(Object(p.c)(t))}_setSelectionRange(e,t){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,t)}_isValidDate(e){return e&&!isNaN(e.getTime())}_onChange(e){""!==this.inputElement.value||e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.__fromClearButton||(this.__dispatchChange=!0),e.stopPropagation()}_onClick(e){this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){this.autoOpenDisabled&&!this._noInput||(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this.value="",this._inputValue="",this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_onKeyDown(e){if(super._onKeyDown(e),this._noInput){-1===[9].indexOf(e.keyCode)&&e.preventDefault()}switch(e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDate(this._focusedDate))}}_onEnter(e){const t=this._getParsedDate(),a=this._isValidDate(t);if(this.opened)this._overlayInitialized&&this._overlayContent.focusedDate&&a&&this._selectDate(this._overlayContent.focusedDate),this.close();else if(a||""===this.inputElement.value){const e=this.value;this._selectParsedOrFocusedDate(),e===this.value&&this.validate()}else this.validate()}_onEscape(e){if(!this.opened)return this.clearButtonVisible&&this.value?(e.stopPropagation(),void this._onClearButtonClick(e)):void(this.autoOpenDisabled?(""===this.inputElement.value&&this._selectDate(null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate()))}_getParsedDate(e=this._inputValue){const t=this.i18n.parseDate&&this.i18n.parseDate(e);return t&&this._parseDate(`${t.year}-${t.month+1}-${t.day}`)}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){this.opened||!this.inputElement.value||this.autoOpenDisabled||this.open(),this._userInputValueChanged()}_userInputValueChanged(){if(this.opened&&this._inputValue){const e=this._getParsedDate();this._isValidDate(e)&&(this._ignoreFocusedDateChange=!0,Object(p.b)(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}}
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;Object(o.d)("vaadin-date-picker",[T.a,s],{moduleId:"vaadin-date-picker-styles"});class F extends(j(Object(E.a)(Object(o.a)(Object(D.a)(u.a))))){static get is(){return"vaadin-date-picker"}static get template(){return u.b`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-close="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
        disable-upgrade
      >
        <template>
          <vaadin-date-picker-overlay-content
            id="overlay-content"
            i18n="[[i18n]]"
            fullscreen$="[[_fullscreen]]"
            label="[[label]]"
            selected-date="[[_selectedDate]]"
            focused-date="{{_focusedDate}}"
            show-week-numbers="[[showWeekNumbers]]"
            min-date="[[_minDate]]"
            max-date="[[_maxDate]]"
            part="overlay-content"
            theme$="[[__getOverlayTheme(_theme, _overlayInitialized)]]"
          ></vaadin-date-picker-overlay-content>
        </template>
      </vaadin-date-picker-overlay>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new O.a(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new I.a(this.inputElement,this._labelController));this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",e=>e.preventDefault())}_initOverlay(){super._initOverlay(),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(e){this._openedWithFocusRing&&this.hasAttribute("focused")?this.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.blur(),e.detail.sourceEvent&&e.detail.sourceEvent.composedPath().includes(this)&&e.preventDefault()}_toggle(e){e.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_openedChanged(e){super._openedChanged(e),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}customElements.define(F.is,F)},function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));a(44);var i=a(151);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class r extends i.a{static get is(){return"vaadin-time-picker-item"}}customElements.define(r.is,r);var n=a(152),o=a(7);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(o.d)("vaadin-time-picker-overlay",o.c`
    #overlay {
      width: var(--vaadin-time-picker-overlay-width, var(--_vaadin-time-picker-overlay-default-width, auto));
    }
  `,{moduleId:"vaadin-time-picker-overlay-styles"});class s extends n.a{static get is(){return"vaadin-time-picker-overlay"}}customElements.define(s.is,s);var l=a(153);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class d extends l.a{static get is(){return"vaadin-time-picker-scroller"}}customElements.define(d.is,d);var c=a(29),u=a(150);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class h extends u.a{static get is(){return"vaadin-time-picker-dropdown"}static get template(){return c.a`
      <vaadin-time-picker-overlay
        id="overlay"
        hidden$="[[_isOverlayHidden(_items.*, loading)]]"
        loading$="[[loading]]"
        opened="{{_overlayOpened}}"
        theme$="[[_theme]]"
        position-target="[[positionTarget]]"
        no-vertical-overlap
      ></vaadin-time-picker-overlay>
    `}}customElements.define(h.is,h);var m=a(8),p=a(154);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class v extends(Object(p.a)(Object(o.a)(m.a))){static get is(){return"vaadin-time-picker-combo-box"}static get template(){return m.b`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-time-picker-dropdown
        id="dropdown"
        opened="[[opened]]"
        position-target="[[positionTarget]]"
        renderer="[[renderer]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[_theme]]"
      ></vaadin-time-picker-dropdown>
    `}static get properties(){return{positionTarget:{type:Object}}}get clearElement(){return this.querySelector('[part="clear-button"]')}_getItemElements(){return Array.from(this.$.dropdown._scroller.querySelectorAll("vaadin-time-picker-item"))}ready(){super.ready(),this.allowCustomValue=!0,this._toggleElement=this.querySelector(".toggle-button"),this.setAttribute("dir","ltr")}}customElements.define(v.is,v);var g=a(11),_=a(83),f=a(48),b=a(38),y=a(84),A=a(51);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(o.d)("vaadin-time-picker",A.a,{moduleId:"vaadin-time-picker-styles"});class w extends(Object(y.a)(Object(_.a)(Object(o.a)(Object(g.a)(m.a))))){static get is(){return"vaadin-time-picker"}static get template(){return m.b`
      <style>
        /* See https://github.com/vaadin/vaadin-time-picker/issues/145 */
        :host([dir='rtl']) [part='input-field'] {
          direction: ltr;
        }

        :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
          direction: rtl;
          text-align: left;
        }

        [part~='toggle-button'] {
          cursor: pointer;
        }
      </style>

      <div class="vaadin-time-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-time-picker-combo-box
          id="comboBox"
          filtered-items="[[__dropdownItems]]"
          value="{{_comboBoxValue}}"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          clear-button-visible="[[clearButtonVisible]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          position-target="[[_inputContainer]]"
          theme$="[[_theme]]"
          on-change="__onChange"
        >
          <vaadin-input-container
            part="input-field"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="prefix" slot="prefix"></slot>
            <slot name="input"></slot>
            <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-input-container>
        </vaadin-time-picker-combo-box>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,value:""},min:{type:String,value:"00:00:00.000"},max:{type:String,value:"23:59:59.999"},step:{type:Number},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:e=>{if(!e)return;const t=(e=0,t="00")=>(t+e).substr((t+e).length-t.length);let a=`${t(e.hours)}:${t(e.minutes)}`;return void 0!==e.seconds&&(a+=":"+t(e.seconds)),void 0!==e.milliseconds&&(a+="."+t(e.milliseconds,"000")),a},parseTime:e=>{const t=new RegExp("^(\\d|[0-1]\\d|2[0-3])(?::(\\d|[0-5]\\d)(?::(\\d|[0-5]\\d)(?:\\.(\\d{1,3}))?)?)?$").exec(e);if(t){if(t[4])for(;t[4].length<3;)t[4]+="0";return{hours:t[1],minutes:t[2],seconds:t[3],milliseconds:t[4]}}}})},_comboBoxValue:{type:String,observer:"__comboBoxValueChanged"},_inputContainer:Object}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new f.a(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new b.a(this.inputElement,this._labelController)),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]')}_inputElementChanged(e){super._inputElementChanged(e),e&&this.$.comboBox._setInputElement(e)}checkValidity(){return!(!this.inputElement.checkValidity()||this.value&&!this._timeAllowed(this.i18n.parseTime(this.value))||this._comboBoxValue&&!this.i18n.parseTime(this._comboBoxValue))}_setFocused(e){super._setFocused(e),e||this.validate()}__validDayDivisor(e){return!e||86400%e==0||e<1&&e%1*1e3%1==0}_onKeyDown(e){if(super._onKeyDown(e),this.readonly||this.disabled||this.__dropdownItems.length)return;const t=this.__validDayDivisor(this.step)&&this.step||60;40===e.keyCode?this.__onArrowPressWithStep(-t):38===e.keyCode&&this.__onArrowPressWithStep(t)}_onEscape(){}__onArrowPressWithStep(e){const t=this.__addStep(this.__getMsec(this.__memoValue),e,!0);this.__memoValue=t,this.inputElement.value=this.i18n.formatTime(this.__validateTime(t)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(e){let t=60*(e&&e.hours||0)*60*1e3;return t+=60*(e&&e.minutes||0)*1e3,t+=1e3*(e&&e.seconds||0),t+=e&&parseInt(e.milliseconds)||0,t}__getSec(e){let t=60*(e&&e.hours||0)*60;return t+=60*(e&&e.minutes||0),t+=e&&e.seconds||0,t+=e&&e.milliseconds/1e3||0,t}__addStep(e,t,a){0===e&&t<0&&(e=864e5);const i=1e3*t,r=e%i;i<0&&r&&a?e-=r:i>0&&r&&a?e-=r-i:e+=i;const n=Math.floor(e/1e3/60/60);e-=1e3*n*60*60;const o=Math.floor(e/1e3/60);e-=1e3*o*60;const s=Math.floor(e/1e3);return{hours:n<24?n:0,minutes:o,seconds:s,milliseconds:e-=1e3*s}}__updateDropdownItems(e,t,a,i){const r=this.__validateTime(this.__parseISO(t)),n=this.__getSec(r),o=this.__validateTime(this.__parseISO(a)),s=this.__getSec(o);if(this.__adjustValue(n,s,r,o),this.__dropdownItems=this.__generateDropdownList(n,s,i),i!==this.__oldStep){this.__oldStep=i;const e=this.__validateTime(this.__parseISO(this.value));this.__updateValue(e)}this.value&&(this._comboBoxValue=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(e,t,a){if(a<900||!this.__validDayDivisor(a))return[];const i=[];let r=-(a=a||3600)+e;for(;r+a>=e&&r+a<=t;){const e=this.__validateTime(this.__addStep(1e3*r,a));r+=a;const t=this.i18n.formatTime(e);i.push({label:t,value:t})}return i}__adjustValue(e,t,a,i){if(!this.__memoValue)return;const r=this.__getSec(this.__memoValue);r<e?this.__updateValue(a):r>t&&this.__updateValue(i)}_valueChanged(e,t){const a=this.__memoValue=this.__parseISO(e),i=this.__formatISO(a)||"";""===this.value||null===this.value||a?this.value!==i?this.value=i:this.__updateInputValue(a):this.value=t,this._toggleHasValue(!!this.value)}__comboBoxValueChanged(e,t){if(""===e&&void 0===t)return;const a=this.i18n.parseTime(e),i=this.i18n.formatTime(a)||"";a?e!==i?this._comboBoxValue=i:this.__updateValue(a):this.value=""}__onChange(e){e.stopPropagation(),this.validate(),this.__dispatchChange()}__updateValue(e){const t=this.__formatISO(this.__validateTime(e))||"";this.value=t}__updateInputValue(e){const t=this.i18n.formatTime(this.__validateTime(e))||"";this._comboBoxValue=t}__validateTime(e){return e&&(e.hours=parseInt(e.hours),e.minutes=parseInt(e.minutes||0),e.seconds=this.__stepSegment<3?void 0:parseInt(e.seconds||0),e.milliseconds=this.__stepSegment<4?void 0:parseInt(e.milliseconds||0)),e}get __stepSegment(){return this.step%3600==0?1:this.step%60!=0&&this.step?this.step%1==0?3:this.step<1?4:void 0:2}__formatISO(e){return w.properties.i18n.value().formatTime(e)}__parseISO(e){return w.properties.i18n.value().parseTime(e)}_timeAllowed(e){const t=this.i18n.parseTime(this.min),a=this.i18n.parseTime(this.max);return(!this.__getMsec(t)||this.__getMsec(e)>=this.__getMsec(t))&&(!this.__getMsec(a)||this.__getMsec(e)<=this.__getMsec(a))}_onClearButtonClick(){}_onChange(){}_onInput(){this._checkInputValue()}}customElements.define(w.is,w)},function(e,t,a){"use strict";a(50),a(13),a(9),a(49);var i=a(40),r=a(7);const n=r.c`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;Object(r.d)("vaadin-date-picker-overlay",[i.a,n],{moduleId:"lumo-date-picker-overlay"});a(10),a(12),a(14),a(55);Object(r.d)("vaadin-date-picker-overlay-content",r.c`
    :host {
      position: relative;
      background-color: transparent;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    /* Month scroller */

    [part='months'] {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 20%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    /* Year scroller */
    [part='years'] {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    [part='year-number']:not([current]),
    [part='year-separator'] {
      opacity: 0.7;
      transition: 0.2s opacity;
    }

    [part='years']:hover [part='year-number'],
    [part='years']:hover [part='year-separator'] {
      opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
    #scrollers[desktop] [part='months'] {
      right: auto;
    }

    /* Year scroller position indicator */
    [part='years']::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='years'] [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '•';
    }

    /* Current year */

    [part='years'] [part='year-number'][current] {
      color: var(--lumo-primary-text-color);
    }

    /* Toolbar (footer) */

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
      [part='toolbar'] {
        box-shadow: none;
      }
    }

    /* Today and Cancel buttons */

    [part='toolbar'] [part\$='button'] {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      position: relative;
      right: auto;
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    [part='years-toggle-button']::before {
      content: none;
    }

    /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='years'] {
        background-color: var(--lumo-shade-5pct);
      }

      [part='toolbar'],
      [part='months'] {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      [part='years'] {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
      }

      :host([years-visible]) [part='months'] {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"}),Object(r.d)("vaadin-month-calendar",r.c`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part='date'] {
      transition: color 0.1s;
    }

    [part='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part='date'][today] {
      color: var(--lumo-primary-text-color);
    }

    /* Focused date */

    [part='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part='date'][focused]::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host(:not([focused])) [part='date'][focused]::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px transparent;
      }
    }

    [part='date']:not(:empty):not([disabled]):not([selected]):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part='date'][selected] {
      color: var(--lumo-primary-contrast-color);
    }

    [part='date'][selected]::before {
      background-color: var(--lumo-primary-color);
    }

    [part='date'][disabled] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part='date']:hover:not([selected])::before,
      [part='date'][focused]:not([selected])::before {
        display: none;
      }

      [part='date']:not(:empty):not([disabled]):active::before {
        display: block;
      }

      [part='date'][selected]::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const o=document.createElement("template");o.innerHTML="\n  <style>\n    @keyframes vaadin-date-picker-month-calendar-focus-date {\n      50% {\n        box-shadow: 0 0 0 2px transparent;\n      }\n    }\n  </style>\n",document.head.appendChild(o.content);a(18);var s=a(35);const l=r.c`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;Object(r.d)("vaadin-date-picker",[s.a,l],{moduleId:"lumo-date-picker"});a(170)},,,,,,function(e,t,a){"use strict";a(148),a(149),a(50),a(18);var i=a(35),r=a(7);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r.c`
  [part~='toggle-button']::before {
    content: var(--lumo-icons-clock);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;Object(r.d)("vaadin-time-picker",[i.a,n],{moduleId:"lumo-time-picker"});a(171);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */},function(e,t,a){"use strict";a(50),a(13);var i=a(60),r=a(35),n=a(7);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=n.c`
  :host {
    width: 8em;
  }

  :host([has-controls]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([has-controls]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;Object(n.d)("vaadin-number-field",[r.a,i.a,o],{moduleId:"lumo-number-field"});a(161);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */},function(e,t,a){"use strict";a(50),a(10),a(13),a(14);var i=a(35),r=a(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r.c`
  [part='input-field'],
  [part='input-field'] ::slotted(textarea) {
    height: auto;
    box-sizing: border-box;
  }

  [part='input-field'] {
    /* Equal to the implicit padding in vaadin-text-field */
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part='input-field']::after {
    display: none;
  }

  :host([readonly]) [part='input-field'] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part='input-field']::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused]):not([invalid])) [part='input-field'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field'] {
      background-color: var(--lumo-contrast-20pct);
    }
  }

  [part='input-field'] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  /* Vertically align icon prefix/suffix with the first line of text */
  [part='input-field'] ::slotted(iron-icon),
  [part='input-field'] ::slotted(vaadin-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }
`;Object(r.d)("vaadin-text-area",[i.a,n],{moduleId:"lumo-text-area"});a(189);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */},function(e,t,a){"use strict";a(10),a(13),a(9),a(12);var i=a(7);Object(i.d)("vaadin-progress-bar",i.c`
    :host {
      height: calc(var(--lumo-size-l) / 10);
      margin: var(--lumo-space-s) 0;
    }

    [part='bar'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-contrast-10pct);
    }

    [part='value'] {
      border-radius: var(--lumo-border-radius-m);
      background-color: var(--lumo-primary-color);
      /* Use width instead of transform to preserve border radius */
      transform: none;
      width: calc(var(--vaadin-progress-value) * 100%);
      will-change: width;
      transition: 0.1s width linear;
    }

    /* Indeterminate mode */
    :host([indeterminate]) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      width: 100%;
      background-color: transparent !important;
      background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      opacity: 0.75;
      will-change: transform;
      animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-indeterminate {
      0% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    :host(:not([aria-valuenow])) [part='value']::before,
    :host([indeterminate]) [part='value']::before {
      content: '';
      display: block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--lumo-primary-color);
      will-change: opacity;
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    @keyframes vaadin-progress-pulse3 {
      0% {
        opacity: 1;
      }

      10% {
        opacity: 0;
      }

      40% {
        opacity: 0;
      }

      50% {
        opacity: 1;
      }

      50.1% {
        opacity: 1;
      }

      60% {
        opacity: 0;
      }

      90% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    /* Contrast color */
    :host([theme~='contrast']) [part='value'],
    :host([theme~='contrast']) [part='value']::before {
      background-color: var(--lumo-contrast-80pct);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error']) [part='value'],
    :host([theme~='error']) [part='value']::before {
      background-color: var(--lumo-error-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success']) [part='value'],
    :host([theme~='success']) [part='value']::before {
      background-color: var(--lumo-success-color);
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }

    /* RTL specific styles */
    :host([indeterminate][dir='rtl']) [part='value'] {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-primary-color-10pct) 10%,
        var(--lumo-primary-color)
      );
      animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    :host(:not([aria-valuenow])[dir='rtl']) [part='value']::before,
    :host([indeterminate][dir='rtl']) [part='value']::before {
      animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(0.355, 0.045, 0.645, 1);
    }

    @keyframes vaadin-progress-indeterminate-rtl {
      0% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
      }

      25% {
        transform: scaleX(0.4);
      }

      50% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
      }

      50.1% {
        transform: scaleX(0.015);
        transform-origin: 0% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }

      75% {
        transform: scaleX(0.4);
      }

      100% {
        transform: scaleX(0.015);
        transform-origin: 100% 0%;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
      }
    }

    /* Contrast color */
    :host([theme~='contrast'][dir='rtl']) [part='value'],
    :host([theme~='contrast'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-80pct)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-contrast-5pct) 10%,
        var(--lumo-contrast-60pct)
      );
    }

    /* Error color */
    :host([theme~='error'][dir='rtl']) [part='value'],
    :host([theme~='error'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-error-color-10pct) 10%,
        var(--lumo-error-color)
      );
    }

    /* Primary color */
    :host([theme~='success'][dir='rtl']) [part='value'],
    :host([theme~='success'][dir='rtl']) [part='value']::before {
      --lumo-progress-indeterminate-progress-bar-background: linear-gradient(
        to left,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
      --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(
        to right,
        var(--lumo-success-color-10pct) 10%,
        var(--lumo-success-color)
      );
    }
  `,{moduleId:"lumo-progress-bar"});const r=document.createElement("template");r.innerHTML="\n  <style>\n    @keyframes vaadin-progress-pulse3 {\n      0% { opacity: 1; }\n      10% { opacity: 0; }\n      40% { opacity: 0; }\n      50% { opacity: 1; }\n      50.1% { opacity: 1; }\n      60% { opacity: 0; }\n      90% { opacity: 0; }\n      100% { opacity: 1; }\n    }\n  </style>\n",document.head.appendChild(r.content);a(190)},function(e,t,a){"use strict";a(10),a(13),a(9),a(12),a(14);var i=a(7);Object(i.d)("vaadin-radio-button",i.c`
    :host {
      color: var(--lumo-body-text-color);
      font-size: var(--lumo-font-size-m);
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    }

    [part='radio'] {
      width: calc(var(--lumo-size-m) / 2);
      height: calc(var(--lumo-size-m) / 2);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: 50%;
      background-color: var(--lumo-contrast-20pct);
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      will-change: transform;
      line-height: 1.2;
      cursor: var(--lumo-clickable-cursor);
    }

    /* Used for activation "halo" */
    [part='radio']::before {
      /* Needed to align the radio-button nicely on the baseline */
      content: '\\2003';
      pointer-events: none;
      color: transparent;
      display: inline-block;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
      will-change: transform, opacity;
    }

    /* Used for the dot */
    [part='radio']::after {
      content: '';
      pointer-events: none;
      width: 0;
      height: 0;
      border: 3px solid var(--lumo-primary-contrast-color);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: 0.25s transform;
      will-change: transform;
      background-clip: content-box;
    }

    :host([checked]) [part='radio'] {
      background-color: var(--lumo-primary-color);
    }

    :host([checked]) [part='radio']::after {
      transform: translate(-50%, -50%) scale(1);
    }

    :host(:not([checked]):not([disabled]):hover) [part='radio'] {
      background-color: var(--lumo-contrast-30pct);
    }

    :host([active]) [part='radio'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='radio'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='radio']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    :host([focus-ring]) [part='radio'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
    }

    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='radio'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='radio']::after {
      border-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }
  `,{moduleId:"lumo-radio-button"});a(162)},function(e,t,a){"use strict";a(10),a(13),a(12),a(14);var i=a(7);Object(i.d)("vaadin-tab",i.c`
    :host {
      box-sizing: border-box;
      padding: 0.5rem 0.75rem;
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-xs);
      font-weight: 500;
      opacity: 1;
      color: var(--lumo-secondary-text-color);
      transition: 0.15s color, 0.2s transform;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      position: relative;
      cursor: var(--lumo-clickable-cursor);
      transform-origin: 50% 100%;
      outline: none;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overflow: hidden;
      min-width: var(--lumo-size-m);
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }

    :host(:not([orientation='vertical'])) {
      text-align: center;
    }

    :host([orientation='vertical']) {
      transform-origin: 0% 50%;
      padding: 0.25rem 1rem;
      min-height: var(--lumo-size-m);
      min-width: 0;
    }

    :host(:hover),
    :host([focus-ring]) {
      color: var(--lumo-body-text-color);
    }

    :host([selected]) {
      color: var(--lumo-primary-text-color);
      transition: 0.6s color;
    }

    :host([active]:not([selected])) {
      color: var(--lumo-primary-text-color);
      transition-duration: 0.1s;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      display: var(--_lumo-tab-marker-display, block);
      bottom: 0;
      left: 50%;
      width: var(--lumo-size-s);
      height: 2px;
      background-color: var(--lumo-contrast-60pct);
      border-radius: var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0 0;
      transform: translateX(-50%) scale(0);
      transform-origin: 50% 100%;
      transition: 0.14s transform cubic-bezier(0.12, 0.32, 0.54, 1);
      will-change: transform;
    }

    :host([selected])::before,
    :host([selected])::after {
      background-color: var(--lumo-primary-color);
    }

    :host([orientation='vertical'])::before,
    :host([orientation='vertical'])::after {
      left: 0;
      bottom: 50%;
      transform: translateY(50%) scale(0);
      width: 2px;
      height: var(--lumo-size-xs);
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      transform-origin: 100% 50%;
    }

    :host::after {
      box-shadow: 0 0 0 4px var(--lumo-primary-color);
      opacity: 0.15;
      transition: 0.15s 0.02s transform, 0.8s 0.17s opacity;
    }

    :host([selected])::before,
    :host([selected])::after {
      transform: translateX(-50%) scale(1);
      transition-timing-function: cubic-bezier(0.12, 0.32, 0.54, 1.5);
    }

    :host([orientation='vertical'][selected])::before,
    :host([orientation='vertical'][selected])::after {
      transform: translateY(50%) scale(1);
    }

    :host([selected]:not([active]))::after {
      opacity: 0;
    }

    :host(:not([orientation='vertical'])) ::slotted(a[href]) {
      justify-content: center;
    }

    :host ::slotted(a) {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      margin: -0.5rem -0.75rem;
      padding: 0.5rem 0.75rem;
      outline: none;

      /*
          Override the CSS inherited from \`lumo-color\` and \`lumo-typography\`.
          Note: \`!important\` is needed because of the \`:slotted\` specificity.
        */
      text-decoration: none !important;
      color: inherit !important;
    }

    :host ::slotted(vaadin-icon),
    :host ::slotted(iron-icon) {
      margin: 0 4px;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    :host ::slotted(vaadin-icon[icon^='vaadin:']),
    :host ::slotted(iron-icon[icon^='vaadin:']) {
      padding: 0.25rem;
      box-sizing: border-box !important;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:first-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:first-child) {
      margin-left: 0;
    }

    :host(:not([dir='rtl'])) ::slotted(vaadin-icon:last-child),
    :host(:not([dir='rtl'])) ::slotted(iron-icon:last-child) {
      margin-right: 0;
    }

    :host([theme~='icon-on-top']) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      padding-bottom: 0.5rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(a) {
      flex-direction: column;
      align-items: center;
      margin-top: -0.25rem;
      padding-top: 0.25rem;
    }

    :host([theme~='icon-on-top']) ::slotted(vaadin-icon),
    :host([theme~='icon-on-top']) ::slotted(iron-icon) {
      margin: 0;
    }

    /* Disabled */

    :host([disabled]) {
      pointer-events: none;
      opacity: 1;
      color: var(--lumo-disabled-text-color);
    }

    /* Focus-ring */

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      border-radius: var(--lumo-border-radius-m);
    }

    /* RTL specific styles */

    :host([dir='rtl'])::before,
    :host([dir='rtl'])::after {
      left: auto;
      right: 50%;
      transform: translateX(50%) scale(0);
    }

    :host([dir='rtl'][selected]:not([orientation='vertical']))::before,
    :host([dir='rtl'][selected]:not([orientation='vertical']))::after {
      transform: translateX(50%) scale(1);
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:first-child),
    :host([dir='rtl']) ::slotted(iron-icon:first-child) {
      margin-right: 0;
    }

    :host([dir='rtl']) ::slotted(vaadin-icon:last-child),
    :host([dir='rtl']) ::slotted(iron-icon:last-child) {
      margin-left: 0;
    }

    :host([orientation='vertical'][dir='rtl']) {
      transform-origin: 100% 50%;
    }

    :host([dir='rtl'][orientation='vertical'])::before,
    :host([dir='rtl'][orientation='vertical'])::after {
      left: auto;
      right: 0;
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      transform-origin: 0% 50%;
    }
  `,{moduleId:"lumo-tab"});a(163)},,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var i=a(8),r=a(11),n=a(54),o=a(56);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=e=>class extends(Object(o.a)(Object(n.a)(e))){static get properties(){return{tabindex:{type:Number,value:0}}}_onKeyDown(e){super._onKeyDown(e),!e.defaultPrevented&&9===e.keyCode&&e.shiftKey&&HTMLElement.prototype.focus.apply(this)}_shouldSetFocus(e){if(!this.disabled&&this.focusElement){const t=e.composedPath();if(t[0]===this&&this._keyboardActive&&this.focusElement.focus(),t[0]===this||t.includes(this.focusElement))return!0}return!1}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&e&&(-1!==e&&(this._lastTabIndex=e),this.tabindex=void 0)}};var l=a(7);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class d extends(s(Object(r.a)(Object(l.a)(i.a)))){static get template(){return i.b`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: none;
          overflow: hidden;
        }

        [part='summary'][disabled] {
          pointer-events: none;
        }

        :host([opened]) [part='content'] {
          display: block;
          overflow: visible;
        }
      </style>
      <div role="heading">
        <div
          role="button"
          part="summary"
          on-click="_onToggleClick"
          on-keydown="_onToggleKeyDown"
          disabled$="[[disabled]]"
          aria-expanded$="[[_getAriaExpanded(opened)]]"
          aria-controls$="[[_contentId]]"
        >
          <span part="toggle" aria-hidden="true"></span>
          <span part="summary-content"><slot name="summary"></slot></span>
        </div>
      </div>
      <section id$="[[_contentId]]" part="content" aria-hidden$="[[_getAriaHidden(opened)]]">
        <slot></slot>
      </section>
    `}static get is(){return"vaadin-details"}static get properties(){return{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"}}}get _collapsible(){return this.shadowRoot.querySelector('[part="content"]')}get focusElement(){return this.shadowRoot.querySelector('[part="summary"]')}ready(){super.ready();const e=d._uniqueId=1+d._uniqueId||0;this._contentId=`${this.constructor.is}-content-${e}`,this._collapsible.addEventListener("keydown",e=>{e.shiftKey&&9===e.keyCode&&e.stopPropagation()})}_getAriaExpanded(e){return e?"true":"false"}_getAriaHidden(e){return e?"false":"true"}_openedChanged(e){this._collapsible.style.maxHeight=e?"":"0px"}_onToggleClick(){this.opened=!this.opened}_onToggleKeyDown(e){[13,32].indexOf(e.keyCode)>-1&&(e.preventDefault(),this.opened=!this.opened)}}customElements.define(d.is,d)},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a(17);function r(e){return Object(i.a)(1,arguments),e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)}var n=a(21);function o(e){if(Object(i.a)(1,arguments),!r(e)&&"number"!=typeof e)return!1;var t=Object(n.a)(e);return!isNaN(Number(t))}},function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a(44);var i=a(8),r=a(11),n=a(59),o=a(102),s=a(38),l=a(84),d=a(51),c=a(57);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class u extends c.a{constructor(e,t){super(e,"textarea",()=>document.createElement("textarea"),(e,a)=>{const i=e.getAttribute("value");i&&(a.value=i);const r=e.getAttribute("name");r&&a.setAttribute("name",r);const n=u._uniqueTextAreaId=1+u._uniqueTextAreaId||0;e._textareaId=`${e.localName}-${n}`,a.id=e._textareaId,"function"==typeof t&&t(a)})}}var h=a(7);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Object(h.d)("vaadin-text-area",d.a,{moduleId:"vaadin-text-area-styles"});class m extends(Object(n.a)(Object(l.a)(Object(o.a)(Object(h.a)(Object(r.a)(i.a)))))){static get is(){return"vaadin-text-area"}static get template(){return i.b`
      <style>
        :host {
          animation: 1ms vaadin-text-area-appear;
        }

        .vaadin-text-area-container {
          flex: auto;
        }

        /* The label, helper text and the error message should neither grow nor shrink. */
        [part='label'],
        [part='helper-text'],
        [part='error-message'] {
          flex: none;
        }

        [part='input-field'] {
          flex: auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        ::slotted(textarea) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          resize: none;
          margin: 0;
          padding: 0 0.25em;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          font-size: 1em;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        /* Override styles from <vaadin-input-container> */
        [part='input-field'] ::slotted(textarea) {
          align-self: stretch;
          white-space: pre-wrap;
        }

        [part='input-field'] ::slotted(:not(textarea)) {
          align-self: flex-start;
        }

        /* Workaround https://bugzilla.mozilla.org/show_bug.cgi?id=1739079 */
        :host([disabled]) ::slotted(textarea) {
          user-select: none;
        }

        @keyframes vaadin-text-area-appear {
          to {
            opacity: 1;
          }
        }
      </style>

      <div class="vaadin-text-area-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-scroll="__scrollPositionUpdated"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="textarea"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}get clearElement(){return this.$.clearButton}connectedCallback(){super.connectedCallback(),this._inputField=this.shadowRoot.querySelector("[part=input-field]"),this._inputField.addEventListener("wheel",e=>{const t=this._inputField.scrollTop;this._inputField.scrollTop+=e.deltaY,t!==this._inputField.scrollTop&&(e.preventDefault(),this.__scrollPositionUpdated())}),this._updateHeight(),this.__scrollPositionUpdated()}_onResize(){this.__scrollPositionUpdated()}ready(){super.ready(),this.addController(new u(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new s.a(this.inputElement,this._labelController)),this.addEventListener("animationend",this._onAnimationEnd)}__scrollPositionUpdated(){this._inputField.style.setProperty("--_text-area-vertical-scroll-position","0px"),this._inputField.style.setProperty("--_text-area-vertical-scroll-position",this._inputField.scrollTop+"px")}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-text-area-appear")&&this._updateHeight()}_valueChanged(e,t){super._valueChanged(e,t),this._updateHeight()}_updateHeight(){const e=this.inputElement,t=this._inputField;if(!e||!t)return;const a=t.scrollTop,i=this.value?this.value.length:0;if(this._oldValueLength>=i){const a=getComputedStyle(t).height,i=getComputedStyle(e).width;t.style.display="block",t.style.height=a,e.style.maxWidth=i,e.style.height="auto"}this._oldValueLength=i;const r=e.scrollHeight;r>e.clientHeight&&(e.style.height=r+"px"),e.style.removeProperty("max-width"),t.style.removeProperty("display"),t.style.removeProperty("height"),t.scrollTop=a}checkValidity(){if(!super.checkValidity())return!1;if(!this.pattern||!this.inputElement.value)return!0;try{const e=this.inputElement.value.match(this.pattern);return!!e&&e[0]===e.input}catch(e){return!0}}}customElements.define(m.is,m)},function(e,t,a){"use strict";var i=a(8),r=a(11),n=a(7);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const o=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,a){const i=this._normalizeValue(e,t,a);this.style.setProperty("--vaadin-progress-value",i)}_valueChanged(e){this.setAttribute("aria-valuenow",e)}_minChanged(e){this.setAttribute("aria-valuemin",e)}_maxChanged(e){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,a){let i;return e||0===e?t>=a?i=1:(i=(e-t)/(a-t),i=Math.min(Math.max(i,0),1)):i=0,i}}
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class s extends(Object(r.a)(Object(n.a)(o(i.a)))){static get template(){return i.b`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          height: 8px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='bar'] {
          height: 100%;
        }

        [part='value'] {
          height: 100%;
          transform-origin: 0 50%;
          transform: scaleX(var(--vaadin-progress-value));
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='value'] {
          transform-origin: 100% 50%;
        }
      </style>

      <div part="bar">
        <div part="value"></div>
      </div>
    `}static get is(){return"vaadin-progress-bar"}}customElements.define(s.is,s)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var i=a(31),r=a(21),n=a(17);function o(e,t){Object(n.a)(2,arguments);var a=Object(r.a)(e).getTime(),o=Object(i.a)(t);return new Date(a+o)}function s(e,t){Object(n.a)(2,arguments);var a=Object(i.a)(t);return o(e,-a)}},function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var i=a(21),r=a(87),n=a(105),o=a(17),s=a(31);function l(e,t){Object(o.a)(1,arguments);var a=t||{},i=a.locale,l=i&&i.options&&i.options.firstWeekContainsDate,d=null==l?1:Object(s.a)(l),c=null==a.firstWeekContainsDate?d:Object(s.a)(a.firstWeekContainsDate),u=Object(n.a)(e,t),h=new Date(0);h.setUTCFullYear(u,0,c),h.setUTCHours(0,0,0,0);var m=Object(r.a)(h,t);return m}function d(e,t){Object(o.a)(1,arguments);var a=Object(i.a)(e),n=Object(r.a)(a,t).getTime()-l(a,t).getTime();return Math.round(n/6048e5)+1}},function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a(21),r=a(88),n=a(159),o=a(17);function s(e){Object(o.a)(1,arguments);var t=Object(n.a)(e),a=new Date(0);a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0);var i=Object(r.a)(a);return i}function l(e){Object(o.a)(1,arguments);var t=Object(i.a)(e),a=Object(r.a)(t).getTime()-s(t).getTime();return Math.round(a/6048e5)+1}},,,,,,,,,function(e,t){
/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const a=document.createElement("template");a.innerHTML="\n  <style>\n    @font-face {\n      font-family: 'vaadin-avatar-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQAAAsAAAAABnwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUmEY21hcAAAAYgAAABLAAABcOspwa1nbHlmAAAB1AAAAEUAAABMYO4o1WhlYWQAAAIcAAAALgAAADYYaAmGaGhlYQAAAkwAAAAdAAAAJAZsA1VobXR4AAACbAAAAAgAAAAIA+gAAGxvY2EAAAJ0AAAABgAAAAYAJgAAbWF4cAAAAnwAAAAeAAAAIAEOACFuYW1lAAACnAAAAUIAAAKavFDYrHBvc3QAAAPgAAAAHQAAAC52hGZ4eJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGT8wjiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+YmQO+p/FEMUcxDANKMwIkgMADiUMJQB4nGNgYGBlYGBgBmIdIGZhYGAMYWBkAAE/oCgjWJyZgQsszsKgBFbDAhJ/xfj/P4wE8lnAJAMjG8Mo4AGTMlAeOKwgmIERADU0CX0AeJxjYGIAAmYJpkgGHgYRBgZGJT1GEztGIzlGET5GKEuU8YuSpZKSpQuI+LfLv21emz9jHJQPJP7dsUywsEiwBACG8g9CAAAAeJxjYGRgYADicIOnh+P5bb4ycDO/AIow3JZ4rIJMM0swRQIpDgYmEA8AKwgJOwAAeJxjYGRgYA76nwUkXzAAAbMEAyMDKmACAE2GAskAAAAAAAAAA+gAAAAAAAAAJgAAeJxjYGRgYGBiEAViBjCLgYELCBkY/oP5DAAKuwEwAAB4nI2Qu07DMBSG//SGaCWEhMSAGDx1QU0vYyemdmDrUDEhuamTpkriyHEj9RF4B56Bh2Bg5mmY+8d4Qh3qo9jf+c45thQAt/hGgGYFuHN7s1q4YvbHbdKD5w555LmLAZ499+hfPPfxhDfPA/p33hB0rmmG+PDcwg2+PLfpfzx3yL+eu7gPHj33MAxmnvtYB6+eB/SftZTbtBjJWlppRmmki2qlkkMmzZnKGbVWpkp1Iabh5Ex1qQplpFVbsTmKqk5m1sYiNjoXC11YlWValEbvVWTDnbXlfDyOvQ8jnaOGZGyRouCfky63/AyzFBE0fYUVFBIckLnKZTOXda15s+GZulxgihCTC2eXnC3cfFNV7BfY4Mi9eT3BjNYiZh6zRyMnLdxs050xNE3panuaiD7Ezk2VmGPMiP/1h+71/ATcWYAhAAB4nGNgYoAALgbsgImRiZGZgaW0OLWIgQEACl4B2QAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(a.content)},function(e,t,a){"use strict";a(144),a(187)},,,,,function(e,t,a){"use strict";var i=a(74),r=a(7);const n=r.c`
  :host {
    margin: calc(var(--lumo-space-xs) / 2);
    margin-left: 0;
    border-radius: 0;
  }

  [part='label'] {
    width: 100%;
  }

  /* NOTE(web-padawan): avoid using shorthand padding property for IE11 */
  [part='label'] ::slotted(vaadin-context-menu-item) {
    justify-content: center;
    background-color: transparent;
    height: var(--lumo-button-size);
    margin: 0 calc((var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='small']) [part='label'] ::slotted(vaadin-context-menu-item) {
    min-height: var(--lumo-size-s);
    margin: 0 calc((var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2) * -1);
    padding-left: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
    padding-right: calc(var(--lumo-size-s) / 3 + var(--lumo-border-radius-m) / 2);
  }

  :host([theme~='tertiary']) [part='label'] ::slotted(vaadin-context-menu-item) {
    margin: 0 calc((var(--lumo-button-size) / 6) * -1);
    padding-left: calc(var(--lumo-button-size) / 6);
    padding-right: calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline']) {
    margin-top: calc(var(--lumo-space-xs) / 2);
    margin-bottom: calc(var(--lumo-space-xs) / 2);
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([theme~='tertiary-inline']) [part='label'] ::slotted(vaadin-context-menu-item) {
    margin: 0;
    padding: 0;
  }

  :host(:first-of-type) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);

    /* Needed to retain the focus-ring with border-radius */
    margin-left: calc(var(--lumo-space-xs) / 2);
  }

  :host(:nth-last-of-type(2)),
  :host([part='overflow-button']) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
  }

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    border-radius: var(--lumo-border-radius-m);
  }

  :host([part='overflow-button']) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([part='overflow-button']) ::slotted(*) {
    font-size: var(--lumo-font-size-xl);
  }

  :host([part='overflow-button']) [part='prefix'],
  :host([part='overflow-button']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL styles */
  :host([dir='rtl']) {
    margin-left: calc(var(--lumo-space-xs) / 2);
    margin-right: 0;
    border-radius: 0;
  }

  :host([dir='rtl']:first-of-type) {
    border-radius: 0 var(--lumo-border-radius-m) var(--lumo-border-radius-m) 0;
    margin-right: calc(var(--lumo-space-xs) / 2);
  }

  :host([dir='rtl']:nth-last-of-type(2)),
  :host([dir='rtl'][part='overflow-button']) {
    border-radius: var(--lumo-border-radius-m) 0 0 var(--lumo-border-radius-m);
  }
`;Object(r.d)("vaadin-menu-bar-button",[i.a,n],{moduleId:"lumo-menu-bar-button"});var o=a(36);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Object(r.d)("vaadin-menu-bar-button",r.c`
    [part='label'] ::slotted(vaadin-context-menu-item) {
      position: relative;
      z-index: 1;
    }
  `,{moduleId:"vaadin-menu-bar-button-styles"});class s extends o.a{static get is(){return"vaadin-menu-bar-button"}}customElements.define(s.is,s);a(13),a(9);Object(r.d)("vaadin-context-menu-item",r.c`
    :host([theme='menu-bar-item']) [part='content'] {
      display: flex;
      /* tweak to inherit centering from menu bar button */
      align-items: inherit;
      justify-content: inherit;
    }

    :host([theme='menu-bar-item']) [part='content'] ::slotted(vaadin-icon),
    :host([theme='menu-bar-item']) [part='content'] ::slotted(iron-icon) {
      display: inline-block;
      width: var(--lumo-icon-size-m);
      height: var(--lumo-icon-size-m);
    }

    :host([theme='menu-bar-item']) [part='content'] ::slotted(vaadin-icon[icon^='vaadin:']),
    :host([theme='menu-bar-item']) [part='content'] ::slotted(iron-icon[icon^='vaadin:']) {
      padding: var(--lumo-space-xs);
      box-sizing: border-box !important;
    }
  `,{moduleId:"lumo-menu-bar-item"}),Object(r.d)("vaadin-context-menu-overlay",r.c`
    :host(:first-of-type) {
      padding-top: var(--lumo-space-xs);
    }
  `,{moduleId:"lumo-menu-bar-overlay"});a(175);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */var l=a(89);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
l.a;
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class d extends l.a{static get is(){return"vaadin-menu-bar-submenu"}constructor(){super(),this.openOn="opensubmenu"}_openedChanged(e){this.$.overlay.opened=e}close(){super.close(),this.hasAttribute("is-root")&&this.getRootNode().host._close()}}customElements.define(d.is,d);var c=a(8),u=a(37),h=a(11),m=a(59);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const p=e=>class extends(Object(m.a)(e)){static get properties(){return{_hasOverflow:{type:Boolean,value:!1}}}static get observers(){return["_menuItemsChanged(items, items.splices)"]}get _observeParent(){return!0}ready(){super.ready(),this.setAttribute("role","menubar")}connectedCallback(){super.connectedCallback(),this._initButtonAttrs(this._overflow)}get _buttons(){return Array.from(this.shadowRoot.querySelectorAll('[part$="button"]'))}get _container(){return this.shadowRoot.querySelector('[part="container"]')}get _overflow(){return this.shadowRoot.querySelector('[part="overflow-button"]')}_menuItemsChanged(e){e!==this._oldItems&&(this._oldItems=e,this.__renderButtons(e))}__getOverflowCount(e){return e.item&&e.item.children&&e.item.children.length||0}__restoreButtons(e){for(let t=0;t<e.length;t++){const a=e[t];a.disabled=a.item&&a.item.disabled||this.disabled,a.style.visibility="",a.style.position="";const i=a.item&&a.item.component;i instanceof HTMLElement&&i.classList.contains("vaadin-menu-item")&&(a.appendChild(i),i.classList.remove("vaadin-menu-item"))}this.__updateOverflow([])}__updateOverflow(e){this._overflow.item={children:e},this._hasOverflow=e.length>0}__setOverflowItems(e,t){const a=this._container;if(a.offsetWidth<a.scrollWidth){this._hasOverflow=!0;const i="rtl"===this.getAttribute("dir");let r;for(r=e.length;r>0;r--){const n=e[r-1],o=getComputedStyle(n);if(!i&&n.offsetLeft+n.offsetWidth<a.offsetWidth-t.offsetWidth||i&&n.offsetLeft>=t.offsetWidth)break;n.disabled=!0,n.style.visibility="hidden",n.style.position="absolute",n.style.width=o.width}const n=e.filter((e,t)=>t>=r).map(e=>e.item);this.__updateOverflow(n)}}__detectOverflow(){const e=this._overflow,t=this._buttons.filter(t=>t!==e),a=this.__getOverflowCount(e);this.__restoreButtons(t),this.__setOverflowItems(t,e);a!==this.__getOverflowCount(e)&&this._subMenu.opened&&this._subMenu.close()}_removeButtons(){const e=this._container;for(;e.children.length>1;)e.removeChild(e.firstElementChild)}_initButton(e){const t=document.createElement("vaadin-menu-bar-button");t.setAttribute("part","menu-bar-button");const a={...e};if(t.item=a,e.component){const e=this.__getComponent(a);a.component=e,e.item=a,t.appendChild(e)}else e.text&&(t.textContent=e.text);return t}_initButtonAttrs(e){e.setAttribute("role","menuitem"),(e===this._overflow||e.item&&e.item.children)&&(e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded","false"))}_setButtonDisabled(e,t){e.disabled=t,e.setAttribute("tabindex",t?"-1":"0")}_setButtonTheme(e,t){let a=t;const i=e.item&&e.item.theme;null!=i&&(a=Array.isArray(i)?i.join(" "):i),a?e.setAttribute("theme",a):e.removeAttribute("theme")}_appendButton(e){this._container.insertBefore(e,this._overflow)}__getComponent(e){const t=e.component;let a;const i=t instanceof HTMLElement;if(i&&"vaadin-context-menu-item"===t.localName?a=t:(a=document.createElement("vaadin-context-menu-item"),a.appendChild(i?t:document.createElement(t))),e.text){(a.firstChild||a).textContent=e.text}return a.setAttribute("theme","menu-bar-item"),a}__renderButtons(e=[]){this._removeButtons(),0!==e.length&&(e.forEach(e=>{const t=this._initButton(e);this._appendButton(t),this._setButtonDisabled(t,e.disabled),this._initButtonAttrs(t),this._setButtonTheme(t,this._theme)}),this.__detectOverflow())}_onResize(){this.__detectOverflow()}}
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */,v=e=>class extends e{static get properties(){return{openOnHover:{type:Boolean}}}constructor(){super(),this.__boundOnContextMenuKeydown=this.__onContextMenuKeydown.bind(this)}static get observers(){return["_itemsChanged(items, items.splices)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("focusin",e=>this._onFocusin(e)),this._subMenu.addEventListener("item-selected",this.__onItemSelected.bind(this)),this._subMenu.addEventListener("close-all-menus",this.__onEscapeClose.bind(this));const e=this._subMenu.$.overlay;e.addEventListener("keydown",this.__boundOnContextMenuKeydown),e.addEventListener("vaadin-overlay-open",this.__alignOverlayPosition.bind(this));const t=this._container;t.addEventListener("click",this.__onButtonClick.bind(this)),t.addEventListener("mouseover",e=>this._onMouseOver(e))}get __isRTL(){return"rtl"===this.getAttribute("dir")}_setExpanded(e,t){e.toggleAttribute("expanded",t),e.toggleAttribute("active",t),e.setAttribute("aria-expanded",t?"true":"false")}_setTabindex(e,t){e.setAttribute("tabindex",t?"0":"-1")}_focusButton(e){e.focus(),e.setAttribute("focus-ring",""),this._buttons.forEach(t=>{this._setTabindex(t,t===e)})}_getButtonFromEvent(e){return Array.from(e.composedPath()).filter(e=>"vaadin-menu-bar-button"===e.localName)[0]}_getCurrentButton(){return this.shadowRoot.activeElement||this._expandedButton}_onFocusin(){const e=this.shadowRoot.querySelector('[part$="button"][tabindex="0"]');e&&this._buttons.forEach(t=>{this._setTabindex(t,t===e)})}_onKeydown(e){const t=this._getButtonFromEvent(e);t&&(40===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusFirstItem():this.__openSubMenu(t,e)):38===e.keyCode?(e.preventDefault(),t===this._expandedButton?this._focusLastItem():this.__openSubMenu(t,e,{focusLast:!0})):27===e.keyCode&&t===this._expandedButton?this._close(!0):this._navigateByKey(e))}_navigateByKey(e){const t=e.key.replace(/^Arrow/,""),a=this._buttons,i=this._getCurrentButton(),r=a.indexOf(i);let n,o;const s=this.__isRTL?-1:1;switch(t){case"Left":o=-s,n=r-s;break;case"Right":o=s,n=r+s;break;case"Home":o=1,n=0;break;case"End":o=-1,n=a.length-1}if(n=this._getAvailableIndex(n,o,a),n>=0){e.preventDefault();const t=a[n],r=i===this._expandedButton;r&&this._close(),this._focusButton(t),r&&t.item&&t.item.children&&this.__openSubMenu(t,e,{keepFocus:!0})}}_getAvailableIndex(e,t,a){const i=a.length;let r=e;for(let e=0;"number"==typeof r&&e<i;e++,r+=t||1){r<0?r=i-1:r>=i&&(r=0);const e=a[r];if(!e.disabled&&!e.hasAttribute("hidden"))return r}return-1}get _subMenu(){return this.shadowRoot.querySelector("vaadin-menu-bar-submenu")}__alignOverlayPosition(e){if(!this._expandedButton)return;const t=e.target,{width:a,height:i,left:r}=this._expandedButton.getBoundingClientRect();t.hasAttribute("bottom-aligned")&&(t.style.bottom=parseInt(getComputedStyle(t).bottom)+i+"px");t.hasAttribute("end-aligned")&&(this.__isRTL?t.style.left=r+"px":t.style.right=parseInt(getComputedStyle(t).right)-a+"px")}_itemsChanged(){const e=this._subMenu;e&&e.opened&&e.close()}_onMouseOver(e){const t=this._getButtonFromEvent(e);if(t&&t!==this._expandedButton){const a=this._subMenu.opened;t.item.children&&(this.openOnHover||a)?this.__openSubMenu(t,e):a&&this._close()}}__onContextMenuKeydown(e){const t=Array.from(e.composedPath()).filter(e=>e._item)[0];if(t){const a=t.parentNode;if(38===e.keyCode&&t===a.items[0]&&this._close(!0),37===e.keyCode||39===e.keyCode&&!t._item.children){e.stopImmediatePropagation(),this._navigateByKey(e);const t=this.shadowRoot.activeElement;t&&t.item&&t.item.children&&this.__openSubMenu(t,e,{keepFocus:!0})}}}__fireItemSelected(e){this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:e}}))}__onButtonClick(e){e.stopPropagation();const t=this._getButtonFromEvent(e);t&&this.__openSubMenu(t,e)}__openSubMenu(e,t,a={}){const i=this._subMenu,r=e.item;if(i.opened&&(this._close(),i.listenOn===e))return;const n=r&&r.children;if(!n||0===n.length)return void this.__fireItemSelected(r);i.items=n,i.listenOn=e;const o=i.$.overlay;o.positionTarget=e,o.noVerticalOverlap=!0,this._expandedButton=e,requestAnimationFrame(()=>{e.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:n}})),this._setExpanded(e,!0)}),a.focusLast&&this.__onceOpened(()=>this._focusLastItem()),a.keepFocus&&this.__onceOpened(()=>{this._focusButton(this._expandedButton)}),this.__onceOpened(()=>{"keydown"!==t.type&&i.$.overlay.$.overlay.focus(),o._updatePosition()})}_focusFirstItem(){this._subMenu.$.overlay.firstElementChild.focus()}_focusLastItem(){const e=this._subMenu.$.overlay.firstElementChild,t=e.items[e.items.length-1];t&&t.focus()}__onceOpened(e){this.style.pointerEvents="auto";const t=this._subMenu.$.overlay,a=()=>{e(),t.removeEventListener("vaadin-overlay-open",a)};t.addEventListener("vaadin-overlay-open",a)}__onItemSelected(e){e.stopPropagation(),this._close(),this.__fireItemSelected(e.detail.value)}__onEscapeClose(){this.__deactivateButton(!0)}__deactivateButton(e){const t=this._expandedButton;t&&t.hasAttribute("expanded")&&(this._setExpanded(t,!1),e&&this._focusButton(t),this._expandedButton=null)}_close(e){this.style.pointerEvents="",this.__deactivateButton(e),this._subMenu.opened&&this._subMenu.close()}}
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */;class g extends(p(Object(u.a)(v(Object(h.a)(Object(r.a)(c.a)))))){static get template(){return c.b`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          position: relative;
          display: flex;
          width: 100%;
          flex-wrap: nowrap;
          overflow: hidden;
        }

        [part$='button'] {
          flex-shrink: 0;
        }

        [part='overflow-button'] {
          margin-right: 0;
        }

        .dots::before {
          display: block;
          content: '\\00B7\\00B7\\00B7';
          font-size: inherit;
          line-height: inherit;
        }
      </style>

      <div part="container">
        <vaadin-menu-bar-button part="overflow-button" hidden$="[[!_hasOverflow]]" aria-label$="[[i18n.moreOptions]]">
          <div class="dots"></div>
        </vaadin-menu-bar-button>
      </div>
      <vaadin-menu-bar-submenu is-root=""></vaadin-menu-bar-submenu>
    `}static get is(){return"vaadin-menu-bar"}static get properties(){return{items:{type:Array,value:()=>[]},i18n:{type:Object,value:()=>({moreOptions:"More options"})}}}static get observers(){return["_themeChanged(_theme)"]}_disabledChanged(e,t){super._disabledChanged(e,t),t!==e&&this.__updateButtonsDisabled(e)}_themeChanged(e){this.shadowRoot&&(this._buttons.forEach(t=>this._setButtonTheme(t,e)),this.__detectOverflow()),e?this._subMenu.setAttribute("theme",e):this._subMenu.removeAttribute("theme")}__updateButtonsDisabled(e){this._buttons.forEach(t=>{t.disabled=e||t.item&&t.item.disabled})}}customElements.define(g.is,g)},function(e,t,a){"use strict";a(10),a(13),a(9),a(12);var i=a(7);Object(i.d)("vaadin-message-input",i.c`
    :host {
      padding: var(--lumo-space-s) var(--lumo-space-m);
    }
  `,{moduleId:"lumo-message-input"});a(180);Object(i.d)("vaadin-message-input-text-area",i.c`
    :host {
      margin: 0 var(--lumo-space-s) 0 0;
    }

    :host([dir='rtl']) {
      margin: 0 0 0 var(--lumo-space-s);
    }
  `,{moduleId:"lumo-message-input-text-area"});var r=a(189);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Object(i.d)("vaadin-message-input-text-area",i.c`
    :host {
      align-self: stretch;
      flex-grow: 1;
    }

    .textarea-wrapper {
      min-height: 0;
    }
  `,{moduleId:"vaadin-message-input-text-area-styles"});class n extends r.a{static get is(){return"vaadin-message-input-text-area"}static get properties(){return{ariaLabel:{type:String,observer:"__ariaLabelChanged"}}}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.removeAttribute("aria-labelledby"),e.setAttribute("rows",1),e.style.minHeight="0",this.__updateAriaLabel(this.ariaLabel))}_onKeyDown(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("enter"))),super._onKeyDown(e)}__updateAriaLabel(e){e?this.inputElement.setAttribute("aria-label",e):this.inputElement.removeAttribute("aria-label")}__ariaLabelChanged(e){this.inputElement&&this.__updateAriaLabel(e)}}customElements.define(n.is,n);a(55);var o=a(36);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(i.d)("vaadin-message-input-button",i.c`
    :host {
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-input-button-styles"});class s extends o.a{static get is(){return"vaadin-message-input-button"}}customElements.define(s.is,s);var l=a(8),d=a(11);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class c extends(Object(d.a)(Object(i.a)(l.a))){static get properties(){return{value:{type:String},i18n:{type:Object,value:()=>({send:"Send",message:"Message"})},disabled:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get template(){return l.b`
      <style>
        :host {
          align-items: flex-start;
          box-sizing: border-box;
          display: flex;
          max-height: 50vh;
          overflow: hidden;
          flex-shrink: 0;
        }
      </style>
      <vaadin-message-input-text-area
        disabled="[[disabled]]"
        value="{{value}}"
        placeholder="[[i18n.message]]"
        aria-label="[[i18n.message]]"
        on-enter="__submit"
      ></vaadin-message-input-text-area>
      <vaadin-message-input-button disabled="[[disabled]]" theme="primary contained" on-click="__submit"
        >[[i18n.send]]</vaadin-message-input-button
      >
    `}static get is(){return"vaadin-message-input"}__submit(){""!==this.value&&(this.dispatchEvent(new CustomEvent("submit",{detail:{value:this.value}})),this.value=""),this.shadowRoot.querySelector("vaadin-message-input-text-area").focus()}}customElements.define(c.is,c)},,function(e,t,a){"use strict";a(10),a(13),a(9),a(12),a(14),a(146);var i=a(7);Object(i.d)("vaadin-message-avatar",i.c`
    :host {
      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));
    }

    :host([dir='rtl']) {
      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);
    }
  `,{moduleId:"lumo-message-avatar"}),Object(i.d)("vaadin-message",i.c`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }
  `,{moduleId:"lumo-message"}),Object(i.d)("vaadin-message-list",i.c``,{moduleId:"lumo-message-list"});a(65);var r=a(8),n=a(20),o=a(11),s=a(104);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(i.d)("vaadin-message-avatar",i.c`
    :host {
      --vaadin-avatar-outline-width: 0px; /* stylelint-disable-line length-zero-no-unit */
      flex-shrink: 0;
    }
  `,{moduleId:"vaadin-message-avatar-styles"});class l extends s.a{static get is(){return"vaadin-message-avatar"}}customElements.define(l.is,l);var d=a(28);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class c extends(Object(d.a)(Object(o.a)(Object(i.a)(r.a)))){static get properties(){return{time:{type:String},userName:{type:String},userAbbr:{type:String},userImg:{type:String},userColorIndex:{type:Number}}}static get template(){return r.b`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          outline: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          align-items: baseline;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        [part='name'] {
          font-weight: 500;
        }

        [part='message'] {
          white-space: pre-wrap;
        }
      </style>
      <vaadin-message-avatar
        part="avatar"
        name="[[userName]]"
        abbr="[[userAbbr]]"
        img="[[userImg]]"
        color-index="[[userColorIndex]]"
        tabindex="-1"
        aria-hidden="true"
      ></vaadin-message-avatar>
      <div part="content">
        <div part="header">
          <span part="name">[[userName]]</span>
          <span part="time">[[time]]</span>
        </div>
        <div part="message"><slot></slot></div>
      </div>
    `}static get is(){return"vaadin-message"}}customElements.define(c.is,c);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class u extends(Object(o.a)(Object(i.a)(r.a))){static get is(){return"vaadin-message-list"}static get properties(){return{items:{type:Array,value:()=>[],observer:"_itemsChanged"}}}static get template(){return r.b`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <div part="list" role="list">
        <template is="dom-repeat" items="[[items]]">
          <vaadin-message
            time="[[item.time]]"
            user-name="[[item.userName]]"
            user-abbr="[[item.userAbbr]]"
            user-img="[[item.userImg]]"
            user-color-index="[[item.userColorIndex]]"
            theme$="[[item.theme]]"
            role="listitem"
            on-focusin="_handleFocusEvent"
            >[[item.text]]</vaadin-message
          >
        </template>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-relevant","additions"),this.setAttribute("role","log"),this.addEventListener("keydown",e=>this._onKeydown(e))}get _messages(){return Array.from(this.shadowRoot.querySelectorAll("vaadin-message"))}_itemsChanged(e,t){const a=this._getIndexOfFocusableElement();if(e&&e.length){const i=!t||e.length>t.length,r=this.scrollHeight<this.clientHeight+this.scrollTop+50;n.c.run(()=>{this._setTabIndexesByIndex(a),i&&r&&this._scrollToLastMessage()})}}_scrollToLastMessage(){this.items.length>0&&(this.scrollTop=this.scrollHeight-this.clientHeight)}_onKeydown(e){if(e.metaKey||e.ctrlKey)return;const t=e.composedPath()[0];let a=this._messages.indexOf(t);switch(e.key){case"ArrowUp":a-=1;break;case"ArrowDown":a+=1;break;case"Home":a=0;break;case"End":a=this._messages.length-1;break;default:return}a<0&&(a=this._messages.length-1),a>this._messages.length-1&&(a=0),this._focus(a),e.preventDefault()}_focus(e){this._messages[e].focus()}_handleFocusEvent(e){const t=e.composedPath().find(e=>e instanceof c);this._setTabIndexesByMessage(t)}_setTabIndexesByIndex(e){const t=this._messages[e]||this._messages[0];this._setTabIndexesByMessage(t)}_setTabIndexesByMessage(e){this._messages.forEach(t=>t.tabIndex=t===e?0:-1)}_getIndexOfFocusableElement(){const e=this._messages.findIndex(e=>0===e.tabIndex);return-1!==e?e:0}}customElements.define(u.is,u)},function(e,t,a){"use strict";a.d(t,"a",(function(){return ne}));var i=a(169),r=a(192),n=a(21);function o(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t=t||{})Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}var s=a(158),l=a(157),d=a(160),c=a(31),u=a(105),h=a(17);function m(e,t,a){Object(h.a)(2,arguments);var i=a||{},r=i.locale,o=r&&r.options&&r.options.weekStartsOn,s=null==o?0:Object(c.a)(o),l=null==i.weekStartsOn?s:Object(c.a)(i.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=Object(n.a)(e),u=Object(c.a)(t),m=d.getUTCDay(),p=u%7,v=(p+7)%7,g=(v<l?7:0)+u-m;return d.setUTCDate(d.getUTCDate()+g),d}var p=a(194);var v=a(193);var g=a(88),_=a(87),f=/^(1[0-2]|0?\d)/,b=/^(3[0-1]|[0-2]?\d)/,y=/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,A=/^(5[0-3]|[0-4]?\d)/,w=/^(2[0-3]|[0-1]?\d)/,x=/^(2[0-4]|[0-1]?\d)/,k=/^(1[0-1]|0?\d)/,C=/^(1[0-2]|0?\d)/,D=/^[0-5]?\d/,E=/^[0-5]?\d/,O=/^\d/,I=/^\d{1,2}/,T=/^\d{1,3}/,S=/^\d{1,4}/,B=/^-?\d+/,P=/^-?\d/,M=/^-?\d{1,2}/,j=/^-?\d{1,3}/,F=/^-?\d{1,4}/,z=/^([+-])(\d{2})(\d{2})?|Z/,V=/^([+-])(\d{2})(\d{2})|Z/,L=/^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,R=/^([+-])(\d{2}):(\d{2})|Z/,$=/^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/;function N(e,t,a){var i=t.match(e);if(!i)return null;var r=parseInt(i[0],10);return{value:a?a(r):r,rest:t.slice(i[0].length)}}function Y(e,t){var a=t.match(e);return a?"Z"===a[0]?{value:0,rest:t.slice(1)}:{value:("+"===a[1]?1:-1)*(36e5*(a[2]?parseInt(a[2],10):0)+6e4*(a[3]?parseInt(a[3],10):0)+1e3*(a[5]?parseInt(a[5],10):0)),rest:t.slice(a[0].length)}:null}function U(e,t){return N(B,e,t)}function H(e,t,a){switch(e){case 1:return N(O,t,a);case 2:return N(I,t,a);case 3:return N(T,t,a);case 4:return N(S,t,a);default:return N(new RegExp("^\\d{1,"+e+"}"),t,a)}}function q(e,t,a){switch(e){case 1:return N(P,t,a);case 2:return N(M,t,a);case 3:return N(j,t,a);case 4:return N(F,t,a);default:return N(new RegExp("^-?\\d{1,"+e+"}"),t,a)}}function W(e){switch(e){case"morning":return 4;case"evening":return 17;case"pm":case"noon":case"afternoon":return 12;case"am":case"midnight":case"night":default:return 0}}function G(e,t){var a,i=t>0,r=i?t:1-t;if(r<=50)a=e||100;else{var n=r+50;a=e+100*Math.floor(n/100)-(e>=n%100?100:0)}return i?a:1-a}var Q=[31,28,31,30,31,30,31,31,30,31,30,31],X=[31,29,31,30,31,30,31,31,30,31,30,31];function K(e){return e%400==0||e%4==0&&e%100!=0}var Z={G:{priority:140,parse:function(e,t,a,i){switch(t){case"G":case"GG":case"GGG":return a.era(e,{width:"abbreviated"})||a.era(e,{width:"narrow"});case"GGGGG":return a.era(e,{width:"narrow"});case"GGGG":default:return a.era(e,{width:"wide"})||a.era(e,{width:"abbreviated"})||a.era(e,{width:"narrow"})}},set:function(e,t,a,i){return t.era=a,e.setUTCFullYear(a,0,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["R","u","t","T"]},y:{priority:130,parse:function(e,t,a,i){var r=function(e){return{year:e,isTwoDigitYear:"yy"===t}};switch(t){case"y":return H(4,e,r);case"yo":return a.ordinalNumber(e,{unit:"year",valueCallback:r});default:return H(t.length,e,r)}},validate:function(e,t,a){return t.isTwoDigitYear||t.year>0},set:function(e,t,a,i){var r=e.getUTCFullYear();if(a.isTwoDigitYear){var n=G(a.year,r);return e.setUTCFullYear(n,0,1),e.setUTCHours(0,0,0,0),e}var o="era"in t&&1!==t.era?1-a.year:a.year;return e.setUTCFullYear(o,0,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","u","w","I","i","e","c","t","T"]},Y:{priority:130,parse:function(e,t,a,i){var r=function(e){return{year:e,isTwoDigitYear:"YY"===t}};switch(t){case"Y":return H(4,e,r);case"Yo":return a.ordinalNumber(e,{unit:"year",valueCallback:r});default:return H(t.length,e,r)}},validate:function(e,t,a){return t.isTwoDigitYear||t.year>0},set:function(e,t,a,i){var r=Object(u.a)(e,i);if(a.isTwoDigitYear){var n=G(a.year,r);return e.setUTCFullYear(n,0,i.firstWeekContainsDate),e.setUTCHours(0,0,0,0),Object(_.a)(e,i)}var o="era"in t&&1!==t.era?1-a.year:a.year;return e.setUTCFullYear(o,0,i.firstWeekContainsDate),e.setUTCHours(0,0,0,0),Object(_.a)(e,i)},incompatibleTokens:["y","R","u","Q","q","M","L","I","d","D","i","t","T"]},R:{priority:130,parse:function(e,t,a,i){return q("R"===t?4:t.length,e)},set:function(e,t,a,i){var r=new Date(0);return r.setUTCFullYear(a,0,4),r.setUTCHours(0,0,0,0),Object(g.a)(r)},incompatibleTokens:["G","y","Y","u","Q","q","M","L","w","d","D","e","c","t","T"]},u:{priority:130,parse:function(e,t,a,i){return q("u"===t?4:t.length,e)},set:function(e,t,a,i){return e.setUTCFullYear(a,0,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["G","y","Y","R","w","I","i","e","c","t","T"]},Q:{priority:120,parse:function(e,t,a,i){switch(t){case"Q":case"QQ":return H(t.length,e);case"Qo":return a.ordinalNumber(e,{unit:"quarter"});case"QQQ":return a.quarter(e,{width:"abbreviated",context:"formatting"})||a.quarter(e,{width:"narrow",context:"formatting"});case"QQQQQ":return a.quarter(e,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(e,{width:"wide",context:"formatting"})||a.quarter(e,{width:"abbreviated",context:"formatting"})||a.quarter(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,a){return t>=1&&t<=4},set:function(e,t,a,i){return e.setUTCMonth(3*(a-1),1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","M","L","w","I","d","D","i","e","c","t","T"]},q:{priority:120,parse:function(e,t,a,i){switch(t){case"q":case"qq":return H(t.length,e);case"qo":return a.ordinalNumber(e,{unit:"quarter"});case"qqq":return a.quarter(e,{width:"abbreviated",context:"standalone"})||a.quarter(e,{width:"narrow",context:"standalone"});case"qqqqq":return a.quarter(e,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(e,{width:"wide",context:"standalone"})||a.quarter(e,{width:"abbreviated",context:"standalone"})||a.quarter(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,a){return t>=1&&t<=4},set:function(e,t,a,i){return e.setUTCMonth(3*(a-1),1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","Q","M","L","w","I","d","D","i","e","c","t","T"]},M:{priority:110,parse:function(e,t,a,i){var r=function(e){return e-1};switch(t){case"M":return N(f,e,r);case"MM":return H(2,e,r);case"Mo":return a.ordinalNumber(e,{unit:"month",valueCallback:r});case"MMM":return a.month(e,{width:"abbreviated",context:"formatting"})||a.month(e,{width:"narrow",context:"formatting"});case"MMMMM":return a.month(e,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(e,{width:"wide",context:"formatting"})||a.month(e,{width:"abbreviated",context:"formatting"})||a.month(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,a){return t>=0&&t<=11},set:function(e,t,a,i){return e.setUTCMonth(a,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","L","w","I","D","i","e","c","t","T"]},L:{priority:110,parse:function(e,t,a,i){var r=function(e){return e-1};switch(t){case"L":return N(f,e,r);case"LL":return H(2,e,r);case"Lo":return a.ordinalNumber(e,{unit:"month",valueCallback:r});case"LLL":return a.month(e,{width:"abbreviated",context:"standalone"})||a.month(e,{width:"narrow",context:"standalone"});case"LLLLL":return a.month(e,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(e,{width:"wide",context:"standalone"})||a.month(e,{width:"abbreviated",context:"standalone"})||a.month(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,a){return t>=0&&t<=11},set:function(e,t,a,i){return e.setUTCMonth(a,1),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","M","w","I","D","i","e","c","t","T"]},w:{priority:100,parse:function(e,t,a,i){switch(t){case"w":return N(A,e);case"wo":return a.ordinalNumber(e,{unit:"week"});default:return H(t.length,e)}},validate:function(e,t,a){return t>=1&&t<=53},set:function(e,t,a,i){return Object(_.a)(function(e,t,a){Object(h.a)(2,arguments);var i=Object(n.a)(e),r=Object(c.a)(t),o=Object(v.a)(i,a)-r;return i.setUTCDate(i.getUTCDate()-7*o),i}(e,a,i),i)},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","i","t","T"]},I:{priority:100,parse:function(e,t,a,i){switch(t){case"I":return N(A,e);case"Io":return a.ordinalNumber(e,{unit:"week"});default:return H(t.length,e)}},validate:function(e,t,a){return t>=1&&t<=53},set:function(e,t,a,i){return Object(g.a)(function(e,t){Object(h.a)(2,arguments);var a=Object(n.a)(e),i=Object(c.a)(t),r=Object(p.a)(a)-i;return a.setUTCDate(a.getUTCDate()-7*r),a}(e,a,i),i)},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","e","c","t","T"]},d:{priority:90,subPriority:1,parse:function(e,t,a,i){switch(t){case"d":return N(b,e);case"do":return a.ordinalNumber(e,{unit:"date"});default:return H(t.length,e)}},validate:function(e,t,a){var i=K(e.getUTCFullYear()),r=e.getUTCMonth();return i?t>=1&&t<=X[r]:t>=1&&t<=Q[r]},set:function(e,t,a,i){return e.setUTCDate(a),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","w","I","D","i","e","c","t","T"]},D:{priority:90,subPriority:1,parse:function(e,t,a,i){switch(t){case"D":case"DD":return N(y,e);case"Do":return a.ordinalNumber(e,{unit:"date"});default:return H(t.length,e)}},validate:function(e,t,a){return K(e.getUTCFullYear())?t>=1&&t<=366:t>=1&&t<=365},set:function(e,t,a,i){return e.setUTCMonth(0,a),e.setUTCHours(0,0,0,0),e},incompatibleTokens:["Y","R","q","Q","M","L","w","I","d","E","i","e","c","t","T"]},E:{priority:90,parse:function(e,t,a,i){switch(t){case"E":case"EE":case"EEE":return a.day(e,{width:"abbreviated",context:"formatting"})||a.day(e,{width:"short",context:"formatting"})||a.day(e,{width:"narrow",context:"formatting"});case"EEEEE":return a.day(e,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(e,{width:"short",context:"formatting"})||a.day(e,{width:"narrow",context:"formatting"});case"EEEE":default:return a.day(e,{width:"wide",context:"formatting"})||a.day(e,{width:"abbreviated",context:"formatting"})||a.day(e,{width:"short",context:"formatting"})||a.day(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,a){return t>=0&&t<=6},set:function(e,t,a,i){return(e=m(e,a,i)).setUTCHours(0,0,0,0),e},incompatibleTokens:["D","i","e","c","t","T"]},e:{priority:90,parse:function(e,t,a,i){var r=function(e){var t=7*Math.floor((e-1)/7);return(e+i.weekStartsOn+6)%7+t};switch(t){case"e":case"ee":return H(t.length,e,r);case"eo":return a.ordinalNumber(e,{unit:"day",valueCallback:r});case"eee":return a.day(e,{width:"abbreviated",context:"formatting"})||a.day(e,{width:"short",context:"formatting"})||a.day(e,{width:"narrow",context:"formatting"});case"eeeee":return a.day(e,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(e,{width:"short",context:"formatting"})||a.day(e,{width:"narrow",context:"formatting"});case"eeee":default:return a.day(e,{width:"wide",context:"formatting"})||a.day(e,{width:"abbreviated",context:"formatting"})||a.day(e,{width:"short",context:"formatting"})||a.day(e,{width:"narrow",context:"formatting"})}},validate:function(e,t,a){return t>=0&&t<=6},set:function(e,t,a,i){return(e=m(e,a,i)).setUTCHours(0,0,0,0),e},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","c","t","T"]},c:{priority:90,parse:function(e,t,a,i){var r=function(e){var t=7*Math.floor((e-1)/7);return(e+i.weekStartsOn+6)%7+t};switch(t){case"c":case"cc":return H(t.length,e,r);case"co":return a.ordinalNumber(e,{unit:"day",valueCallback:r});case"ccc":return a.day(e,{width:"abbreviated",context:"standalone"})||a.day(e,{width:"short",context:"standalone"})||a.day(e,{width:"narrow",context:"standalone"});case"ccccc":return a.day(e,{width:"narrow",context:"standalone"});case"cccccc":return a.day(e,{width:"short",context:"standalone"})||a.day(e,{width:"narrow",context:"standalone"});case"cccc":default:return a.day(e,{width:"wide",context:"standalone"})||a.day(e,{width:"abbreviated",context:"standalone"})||a.day(e,{width:"short",context:"standalone"})||a.day(e,{width:"narrow",context:"standalone"})}},validate:function(e,t,a){return t>=0&&t<=6},set:function(e,t,a,i){return(e=m(e,a,i)).setUTCHours(0,0,0,0),e},incompatibleTokens:["y","R","u","q","Q","M","L","I","d","D","E","i","e","t","T"]},i:{priority:90,parse:function(e,t,a,i){var r=function(e){return 0===e?7:e};switch(t){case"i":case"ii":return H(t.length,e);case"io":return a.ordinalNumber(e,{unit:"day"});case"iii":return a.day(e,{width:"abbreviated",context:"formatting",valueCallback:r})||a.day(e,{width:"short",context:"formatting",valueCallback:r})||a.day(e,{width:"narrow",context:"formatting",valueCallback:r});case"iiiii":return a.day(e,{width:"narrow",context:"formatting",valueCallback:r});case"iiiiii":return a.day(e,{width:"short",context:"formatting",valueCallback:r})||a.day(e,{width:"narrow",context:"formatting",valueCallback:r});case"iiii":default:return a.day(e,{width:"wide",context:"formatting",valueCallback:r})||a.day(e,{width:"abbreviated",context:"formatting",valueCallback:r})||a.day(e,{width:"short",context:"formatting",valueCallback:r})||a.day(e,{width:"narrow",context:"formatting",valueCallback:r})}},validate:function(e,t,a){return t>=1&&t<=7},set:function(e,t,a,i){return(e=function(e,t){Object(h.a)(2,arguments);var a=Object(c.a)(t);a%7==0&&(a-=7);var i=1,r=Object(n.a)(e),o=r.getUTCDay(),s=a%7,l=(s+7)%7,d=(l<i?7:0)+a-o;return r.setUTCDate(r.getUTCDate()+d),r}(e,a,i)).setUTCHours(0,0,0,0),e},incompatibleTokens:["y","Y","u","q","Q","M","L","w","d","D","E","e","c","t","T"]},a:{priority:80,parse:function(e,t,a,i){switch(t){case"a":case"aa":case"aaa":return a.dayPeriod(e,{width:"abbreviated",context:"formatting"})||a.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaaa":return a.dayPeriod(e,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(e,{width:"wide",context:"formatting"})||a.dayPeriod(e,{width:"abbreviated",context:"formatting"})||a.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,a,i){return e.setUTCHours(W(a),0,0,0),e},incompatibleTokens:["b","B","H","k","t","T"]},b:{priority:80,parse:function(e,t,a,i){switch(t){case"b":case"bb":case"bbb":return a.dayPeriod(e,{width:"abbreviated",context:"formatting"})||a.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbbb":return a.dayPeriod(e,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(e,{width:"wide",context:"formatting"})||a.dayPeriod(e,{width:"abbreviated",context:"formatting"})||a.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,a,i){return e.setUTCHours(W(a),0,0,0),e},incompatibleTokens:["a","B","H","k","t","T"]},B:{priority:80,parse:function(e,t,a,i){switch(t){case"B":case"BB":case"BBB":return a.dayPeriod(e,{width:"abbreviated",context:"formatting"})||a.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBBB":return a.dayPeriod(e,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(e,{width:"wide",context:"formatting"})||a.dayPeriod(e,{width:"abbreviated",context:"formatting"})||a.dayPeriod(e,{width:"narrow",context:"formatting"})}},set:function(e,t,a,i){return e.setUTCHours(W(a),0,0,0),e},incompatibleTokens:["a","b","t","T"]},h:{priority:70,parse:function(e,t,a,i){switch(t){case"h":return N(C,e);case"ho":return a.ordinalNumber(e,{unit:"hour"});default:return H(t.length,e)}},validate:function(e,t,a){return t>=1&&t<=12},set:function(e,t,a,i){var r=e.getUTCHours()>=12;return r&&a<12?e.setUTCHours(a+12,0,0,0):r||12!==a?e.setUTCHours(a,0,0,0):e.setUTCHours(0,0,0,0),e},incompatibleTokens:["H","K","k","t","T"]},H:{priority:70,parse:function(e,t,a,i){switch(t){case"H":return N(w,e);case"Ho":return a.ordinalNumber(e,{unit:"hour"});default:return H(t.length,e)}},validate:function(e,t,a){return t>=0&&t<=23},set:function(e,t,a,i){return e.setUTCHours(a,0,0,0),e},incompatibleTokens:["a","b","h","K","k","t","T"]},K:{priority:70,parse:function(e,t,a,i){switch(t){case"K":return N(k,e);case"Ko":return a.ordinalNumber(e,{unit:"hour"});default:return H(t.length,e)}},validate:function(e,t,a){return t>=0&&t<=11},set:function(e,t,a,i){return e.getUTCHours()>=12&&a<12?e.setUTCHours(a+12,0,0,0):e.setUTCHours(a,0,0,0),e},incompatibleTokens:["h","H","k","t","T"]},k:{priority:70,parse:function(e,t,a,i){switch(t){case"k":return N(x,e);case"ko":return a.ordinalNumber(e,{unit:"hour"});default:return H(t.length,e)}},validate:function(e,t,a){return t>=1&&t<=24},set:function(e,t,a,i){var r=a<=24?a%24:a;return e.setUTCHours(r,0,0,0),e},incompatibleTokens:["a","b","h","H","K","t","T"]},m:{priority:60,parse:function(e,t,a,i){switch(t){case"m":return N(D,e);case"mo":return a.ordinalNumber(e,{unit:"minute"});default:return H(t.length,e)}},validate:function(e,t,a){return t>=0&&t<=59},set:function(e,t,a,i){return e.setUTCMinutes(a,0,0),e},incompatibleTokens:["t","T"]},s:{priority:50,parse:function(e,t,a,i){switch(t){case"s":return N(E,e);case"so":return a.ordinalNumber(e,{unit:"second"});default:return H(t.length,e)}},validate:function(e,t,a){return t>=0&&t<=59},set:function(e,t,a,i){return e.setUTCSeconds(a,0),e},incompatibleTokens:["t","T"]},S:{priority:30,parse:function(e,t,a,i){return H(t.length,e,(function(e){return Math.floor(e*Math.pow(10,3-t.length))}))},set:function(e,t,a,i){return e.setUTCMilliseconds(a),e},incompatibleTokens:["t","T"]},X:{priority:10,parse:function(e,t,a,i){switch(t){case"X":return Y(z,e);case"XX":return Y(V,e);case"XXXX":return Y(L,e);case"XXXXX":return Y($,e);case"XXX":default:return Y(R,e)}},set:function(e,t,a,i){return t.timestampIsSet?e:new Date(e.getTime()-a)},incompatibleTokens:["t","T","x"]},x:{priority:10,parse:function(e,t,a,i){switch(t){case"x":return Y(z,e);case"xx":return Y(V,e);case"xxxx":return Y(L,e);case"xxxxx":return Y($,e);case"xxx":default:return Y(R,e)}},set:function(e,t,a,i){return t.timestampIsSet?e:new Date(e.getTime()-a)},incompatibleTokens:["t","T","X"]},t:{priority:40,parse:function(e,t,a,i){return U(e)},set:function(e,t,a,i){return[new Date(1e3*a),{timestampIsSet:!0}]},incompatibleTokens:"*"},T:{priority:20,parse:function(e,t,a,i){return U(e)},set:function(e,t,a,i){return[new Date(a),{timestampIsSet:!0}]},incompatibleTokens:"*"}},J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ee=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,te=/^'([^]*?)'?$/,ae=/''/g,ie=/\S/,re=/[a-zA-Z]/;function ne(e,t,a,u){Object(h.a)(3,arguments);var m=String(e),p=String(t),v=u||{},g=v.locale||i.a;if(!g.match)throw new RangeError("locale must contain match property");var _=g.options&&g.options.firstWeekContainsDate,f=null==_?1:Object(c.a)(_),b=null==v.firstWeekContainsDate?f:Object(c.a)(v.firstWeekContainsDate);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=g.options&&g.options.weekStartsOn,A=null==y?0:Object(c.a)(y),w=null==v.weekStartsOn?A:Object(c.a)(v.weekStartsOn);if(!(w>=0&&w<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(""===p)return""===m?Object(n.a)(a):new Date(NaN);var x,k={firstWeekContainsDate:b,weekStartsOn:w,locale:g},C=[{priority:10,subPriority:-1,set:oe,index:0}],D=p.match(ee).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,s.a[t])(e,g.formatLong,k):e})).join("").match(J),E=[];for(x=0;x<D.length;x++){var O=D[x];!v.useAdditionalWeekYearTokens&&Object(d.b)(O)&&Object(d.c)(O,p,e),!v.useAdditionalDayOfYearTokens&&Object(d.a)(O)&&Object(d.c)(O,p,e);var I=O[0],T=Z[I];if(T){var S=T.incompatibleTokens;if(Array.isArray(S)){for(var B=void 0,P=0;P<E.length;P++){var M=E[P].token;if(-1!==S.indexOf(M)||M===I){B=E[P];break}}if(B)throw new RangeError("The format string mustn't contain `".concat(B.fullToken,"` and `").concat(O,"` at the same time"))}else if("*"===T.incompatibleTokens&&E.length)throw new RangeError("The format string mustn't contain `".concat(O,"` and any other token at the same time"));E.push({token:I,fullToken:O});var j=T.parse(m,O,g.match,k);if(!j)return new Date(NaN);C.push({priority:T.priority,subPriority:T.subPriority||0,set:T.set,validate:T.validate,value:j.value,index:C.length}),m=j.rest}else{if(I.match(re))throw new RangeError("Format string contains an unescaped latin alphabet character `"+I+"`");if("''"===O?O="'":"'"===I&&(O=se(O)),0!==m.indexOf(O))return new Date(NaN);m=m.slice(O.length)}}if(m.length>0&&ie.test(m))return new Date(NaN);var F=C.map((function(e){return e.priority})).sort((function(e,t){return t-e})).filter((function(e,t,a){return a.indexOf(e)===t})).map((function(e){return C.filter((function(t){return t.priority===e})).sort((function(e,t){return t.subPriority-e.subPriority}))})).map((function(e){return e[0]})),z=Object(n.a)(a);if(isNaN(z))return new Date(NaN);var V=Object(r.a)(z,Object(l.a)(z)),L={};for(x=0;x<F.length;x++){var R=F[x];if(R.validate&&!R.validate(V,R.value,k))return new Date(NaN);var $=R.set(V,L,R.value,k);$[0]?(V=$[0],o(L,$[1])):V=$}return V}function oe(e,t){if(t.timestampIsSet)return e;var a=new Date(0);return a.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),a.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),a}function se(e){return e.match(te)[1].replace(ae,"'")}},,function(e,t,a){"use strict";a(10),a(9);var i=a(144),r=a(7);const n=r.c`
  :host {
    margin: 0;
    border-bottom: solid 1px var(--lumo-contrast-10pct);
  }

  :host(:last-child) {
    border-bottom: none;
  }

  :host([theme~='filled']) {
    border-bottom: none;
  }

  :host([theme~='filled']:not(:last-child)) {
    margin-bottom: 2px;
  }
`;Object(r.d)("vaadin-accordion-panel",[i.a,n],{moduleId:"lumo-accordion-panel"});var o=a(187);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class s extends o.a{static get is(){return"vaadin-accordion-panel"}}customElements.define(s.is,s);var l=a(19),d=a(8),c=a(11);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class u extends(Object(r.a)(Object(c.a)(d.a))){static get template(){return d.b`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <slot></slot>
    `}static get is(){return"vaadin-accordion"}static get properties(){return{opened:{type:Number,value:0,notify:!0,reflectToAttribute:!0},items:{type:Array,readOnly:!0,notify:!0}}}static get observers(){return["_updateItems(items, opened)"]}constructor(){super(),this._boundUpdateOpened=this._updateOpened.bind(this)}get focused(){return this.getRootNode().activeElement}focus(){if(this._observer&&this._observer.flush(),Array.isArray(this.items)){const e=this._getAvailableIndex(0);e>=0&&this.items[e].focus()}}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this._observer=new l.a(this,e=>{this._setItems(this._filterItems(Array.from(this.children))),this._filterItems(e.addedNodes).forEach(e=>{e.addEventListener("opened-changed",this._boundUpdateOpened)})})}_filterItems(e){return e.filter(e=>e instanceof s)}_updateItems(e,t){if(e){const a=e[t];e.forEach(e=>{e.opened=e===a})}}_onKeydown(e){const t=e.composedPath()[0];if(!this.items.some(e=>e.focusElement===t))return;const a=this.items.indexOf(this.focused);let i,r;switch(e.key){case"ArrowUp":r=-1,i=a-1;break;case"ArrowDown":r=1,i=a+1;break;case"Home":r=1,i=0;break;case"End":r=-1,i=this.items.length-1}i=this._getAvailableIndex(i,r),i>=0&&(this.items[i].focus(),this.items[i].setAttribute("focus-ring",""),e.preventDefault())}_getAvailableIndex(e,t){const a=this.items.length;let i=e;for(let e=0;"number"==typeof i&&e<a;e++,i+=t||1){i<0?i=a-1:i>=a&&(i=0);if(!this.items[i].disabled)return i}return-1}_updateOpened(e){const t=this._filterItems(e.composedPath())[0],a=this.items.indexOf(t);if(e.detail.value){if(t.disabled||-1===a)return;this.opened=a}else this.items.some(e=>e.opened)||(this.opened=null)}}customElements.define(u.is,u)},function(e,t,a){"use strict";a(145),a(77),a(91),a(49),a(10),a(13),a(9);var i=a(40),r=a(41),n=a(7);Object(n.d)("vaadin-avatar-group",n.c`
    :host {
      --vaadin-avatar-size: var(--lumo-size-m);
    }

    :host([theme~='small']) {
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-size: var(--lumo-size-xs);
    }

    :host([theme~='xlarge']) {
      --vaadin-avatar-group-overlap: 12px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-xl);
    }

    :host([theme~='large']) {
      --vaadin-avatar-group-overlap: 10px;
      --vaadin-avatar-group-overlap-border: 3px;
      --vaadin-avatar-size: var(--lumo-size-l);
    }

    :host([theme~='small']) {
      --vaadin-avatar-group-overlap: 6px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-s);
    }

    :host([theme~='xsmall']) {
      --vaadin-avatar-group-overlap: 4px;
      --vaadin-avatar-group-overlap-border: 2px;
      --vaadin-avatar-size: var(--lumo-size-xs);
    }
  `,{moduleId:"lumo-avatar-group"});const o=n.c`
  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;Object(n.d)("vaadin-avatar-group-overlay",[r.a,i.b,o],{moduleId:"lumo-avatar-group-overlay"}),Object(n.d)("vaadin-avatar-group-list-box",n.c`
    [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-right: var(--lumo-space-m);
    }

    :host([dir='rtl']) [part='items'] ::slotted(vaadin-item[theme='avatar-group-item']) {
      padding: var(--lumo-space-xs);
      padding-left: var(--lumo-space-m);
    }
  `,{moduleId:"lumo-avatar-group-list-box"}),Object(n.d)("vaadin-item",n.c`
    :host([theme='avatar-group-item']) [part='content'] {
      display: flex;
      align-items: center;
    }

    :host([theme='avatar-group-item']) ::slotted(vaadin-avatar) {
      width: var(--lumo-size-xs);
      height: var(--lumo-size-xs);
    }

    :host([theme='avatar-group-item']:not([dir='rtl'])) ::slotted(vaadin-avatar) {
      margin-right: var(--lumo-space-s);
    }

    :host([theme='avatar-group-item'][dir='rtl']) ::slotted(vaadin-avatar) {
      margin-left: var(--lumo-space-s);
    }
  `,{moduleId:"lumo-avatar-group-item"});a(65),a(104),a(78);var s=a(92);
/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class l extends s.a{static get is(){return"vaadin-avatar-group-list-box"}}customElements.define(l.is,l);var d=a(42),c=a(69);
/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class u extends(Object(c.a)(d.a)){static get is(){return"vaadin-avatar-group-overlay"}}customElements.define(u.is,u);var h=a(98),m=a(46),p=a(8),v=a(147),g=a(11),_=a(59);class f extends(Object(_.a)(Object(g.a)(Object(n.a)(p.a)))){static get template(){return p.b`
      <style>
        :host {
          display: block;
          width: 100%; /* prevent collapsing inside non-stretching column flex */
          --vaadin-avatar-group-overlap: 8px;
          --vaadin-avatar-group-overlap-border: 2px;
          --vaadin-avatar-size: 64px;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='container'] {
          display: flex;
          position: relative;
          width: 100%;
          flex-wrap: nowrap;
        }

        [part='avatar']:not(:first-child) {
          -webkit-mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          mask-image: url('data:image/svg+xml;utf8,<svg viewBox=%220 0 300 300%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22><path fill-rule=%22evenodd%22 clip-rule=%22evenodd%22 d=%22M300 0H0V300H300V0ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z%22 fill=%22black%22/></svg>');
          -webkit-mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
          mask-size: calc(
            300% + var(--vaadin-avatar-group-overlap-border) * 6 - var(--vaadin-avatar-outline-width) * 6
          );
        }

        [part='avatar']:not([dir='rtl']):not(:first-child) {
          margin-left: calc(var(--vaadin-avatar-group-overlap) * -1 - var(--vaadin-avatar-outline-width));
          -webkit-mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
          mask-position: calc(50% - var(--vaadin-avatar-size) + var(--vaadin-avatar-group-overlap));
        }

        [part='avatar'][dir='rtl']:not(:first-child) {
          margin-right: calc(var(--vaadin-avatar-group-overlap) * -1);
          -webkit-mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
          mask-position: calc(
            50% + var(--vaadin-avatar-size) - var(--vaadin-avatar-group-overlap) + var(--vaadin-avatar-outline-width)
          );
        }
      </style>
      <div id="container" part="container">
        <template id="items" is="dom-repeat" items="[[__computeItems(items.*, __itemsInView, maxItemsVisible)]]">
          <vaadin-avatar
            name="[[item.name]]"
            abbr="[[item.abbr]]"
            img="[[item.img]]"
            part="avatar"
            theme$="[[_theme]]"
            i18n="[[i18n]]"
            color-index="[[item.colorIndex]]"
          ></vaadin-avatar>
        </template>
        <vaadin-avatar
          id="overflow"
          part="avatar"
          hidden$="[[__computeMoreHidden(items.length, __itemsInView, __maxReached)]]"
          abbr="[[__computeMore(items.length, __itemsInView, maxItemsVisible)]]"
          theme$="[[_theme]]"
          on-click="_onOverflowClick"
          on-keydown="_onOverflowKeyDown"
          aria-haspopup="listbox"
        ></vaadin-avatar>
      </div>
      <vaadin-avatar-group-overlay
        id="overlay"
        opened="{{_opened}}"
        no-vertical-overlap
        on-vaadin-overlay-close="_onVaadinOverlayClose"
      >
        <template>
          <vaadin-avatar-group-list-box on-keydown="_onListKeyDown">
            <template is="dom-repeat" items="[[__computeExtraItems(items.*, __itemsInView, maxItemsVisible)]]">
              <vaadin-item theme="avatar-group-item" role="option">
                <vaadin-avatar
                  name="[[item.name]]"
                  abbr="[[item.abbr]]"
                  img="[[item.img]]"
                  i18n="[[i18n]]"
                  part="avatar"
                  theme$="[[_theme]]"
                  color-index="[[item.colorIndex]]"
                  tabindex="-1"
                  aria-hidden="true"
                ></vaadin-avatar>
                [[item.name]]
              </vaadin-item>
            </template>
          </vaadin-avatar-group-list-box>
        </template>
      </vaadin-avatar-group-overlay>
    `}static get is(){return"vaadin-avatar-group"}static get properties(){return{items:{type:Array},maxItemsVisible:{type:Number},i18n:{type:Object,value:()=>({anonymous:"anonymous",activeUsers:{one:"Currently one active user",many:"Currently {count} active users"},joined:"{user} joined",left:"{user} left"})},__maxReached:{type:Boolean,computed:"__computeMaxReached(items.length, maxItemsVisible)"},__itemsInView:{type:Number,value:null},_opened:{type:Boolean,observer:"__openedChanged",value:!1}}}static get observers(){return["__computeMoreTitle(items.length, __itemsInView, maxItemsVisible)","__itemsChanged(items.splices, items.*)","__i18nItemsChanged(i18n.*, items.length)"]}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-avatar-group-overlay"),this._overlayElement.positionTarget=this.$.overflow,Object(m.a)(this,()=>{this.__setItemsInView()})}get _avatars(){return this.shadowRoot.querySelectorAll("vaadin-avatar")}__getMessage(e,t){return t.replace("{user}",e.name||e.abbr||this.i18n.anonymous)}_onOverflowClick(e){e.stopPropagation(),this._opened?this.$.overlay.close():e.defaultPrevented||(this._opened=!0)}_onOverflowKeyDown(e){this._opened||/^(Enter|SpaceBar|\s)$/.test(e.key)&&(e.preventDefault(),this._opened=!0)}_onListKeyDown(e){("Escape"===e.key||"Esc"===e.key||/^(Tab)$/.test(e.key))&&(this._opened=!1)}_onResize(){this.__setItemsInView()}_onVaadinOverlayClose(e){e.detail.sourceEvent&&e.detail.sourceEvent.composedPath().includes(this)&&e.preventDefault()}__computeItems(e,t,a){const i=e.base||[],r=this.__getLimit(i.length,t,a);return r?i.slice(0,r):i}__computeExtraItems(e,t,a){const i=e.base||[],r=this.__getLimit(i.length,t,a);return r?i.slice(r):i}__computeMaxReached(e,t){return null!=t&&e>this.__getMax(t)}__computeMore(e,t,a){return"+"+(e-this.__getLimit(e,t,a))}__computeMoreHidden(e,t,a){return!(a||t&&t<e)}__computeMoreTitle(e,t,a){const i=this.__getLimit(e,t,a);if(null==i)return;const r=[];for(let t=i;t<e;t++){const e=this.items[t];e&&r.push(e.name||e.abbr||"anonymous")}this.$.overflow.setAttribute("title",r.join("\n"))}__getLimit(e,t,a){let i=null;const r=this.__getMax(a);return null!=a&&r<e?i=r-1:t&&t<e&&(i=t),Math.min(i,this.__calculateAvatarsFitWidth())}__getMax(e){return Math.max(e,2)}__itemsChanged(e,t){const a=t.base;if(this.$.items.render(),this.__setItemsInView(),e&&Array.isArray(e.indexSplices))e.indexSplices.forEach(e=>{this.__announceItemsChange(a,e)});else if(Array.isArray(a)&&Array.isArray(this.__oldItems)){Object(h.a)(a,this.__oldItems).forEach(e=>{this.__announceItemsChange(a,e)})}this.__oldItems=a}__announceItemsChange(e,t){const{addedCount:a,index:i,removed:r}=t;let n=[],o=[];a&&(n=e.slice(i,i+a).map(e=>this.__getMessage(e,this.i18n.joined||"{user} joined"))),r&&(o=r.map(e=>this.__getMessage(e,this.i18n.left||"{user} left")));const s=o.concat(n);s.length>0&&Object(v.a)(s.join(", "))}__i18nItemsChanged(e,t){const{base:a}=e;if(a&&a.activeUsers){const e=1===t?"one":"many";a.activeUsers[e]&&this.setAttribute("aria-label",a.activeUsers[e].replace("{count}",t||0))}}__openedChanged(e,t){if(e){this._menuElement||(this._menuElement=this._overlayElement.content.querySelector("vaadin-avatar-group-list-box"),this._menuElement.setAttribute("role","listbox")),this._openedWithFocusRing=this.$.overflow.hasAttribute("focus-ring");this._menuElement.querySelectorAll("vaadin-avatar").forEach(e=>e.removeAttribute("title")),this._menuElement.focus()}else t&&(this.$.overflow.focus(),this._openedWithFocusRing&&this.$.overflow.setAttribute("focus-ring",""));this.$.overflow.setAttribute("aria-expanded",!0===e)}__setItemsInView(){const e=this._avatars,t=this.items;if(!t||!e||e.length<3)return;let a=this.__calculateAvatarsFitWidth();a===t.length-1&&(a=t.length),a>=t.length&&this._opened&&(this.$.overlay.close(),this.$.overlay._flushAnimation("closing")),this.__itemsInView=a}__calculateAvatarsFitWidth(){if(!this.shadowRoot||this._avatars.length<2)return 2;const e=this._avatars,t=e[0].clientWidth,{marginLeft:a,marginRight:i}=getComputedStyle(e[1]),r="rtl"===this.getAttribute("dir")?parseInt(i,0)-parseInt(a,0):parseInt(a,0)-parseInt(i,0);return Math.floor((this.$.container.offsetWidth-t)/(t+r))}}customElements.define(f.is,f)},function(e,t,a){"use strict";a(172),a(178);var i=a(156),r=a(66),n=a(39),o=a(7);Object(o.d)("vaadin-date-time-picker",[n.a,r.a,i.a],{moduleId:"lumo-date-time-picker"}),Object(o.d)("vaadin-date-time-picker-date-picker",o.c`
    :host {
      margin-right: 2px;
    }

    /* RTL specific styles */
    :host([dir='rtl']) {
      margin-right: auto;
      margin-left: 2px;
    }

    [part~='input-field'] {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-date-picker"}),Object(o.d)("vaadin-date-time-picker-time-picker",o.c`
    [part~='input-field'] {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part~='input-field'] {
      border-radius: var(--lumo-border-radius-m);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  `,{moduleId:"lumo-date-time-picker-time-picker"});var s=a(170);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class l extends s.a{static get is(){return"vaadin-date-time-picker-date-picker"}}customElements.define(l.is,l);var d=a(171);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class c extends d.a{static get is(){return"vaadin-date-time-picker-time-picker"}}customElements.define(c.is,c);var u=a(19),h=a(8),m=a(37),p=a(11),v=a(28),g=a(142),_=a(86),f=a(62),b=a(51);function y(e,t){for(;e;){if(e.properties&&e.properties[t])return e.properties[t];e=Object.getPrototypeOf(e)}}
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
Object(o.d)("vaadin-date-time-picker",b.a,{moduleId:"vaadin-date-time-picker"});const A=customElements.get("vaadin-date-time-picker-date-picker"),w=customElements.get("vaadin-date-time-picker-time-picker"),x=y(A,"i18n").value(),k=y(w,"i18n").value(),C=Object.keys(x),D=Object.keys(k);class E extends(Object(f.a)(Object(g.a)(Object(m.a)(Object(v.a)(Object(o.a)(Object(p.a)(h.a))))))){static get template(){return h.b`
      <style>
        .vaadin-date-time-picker-container {
          --vaadin-field-default-width: auto;
        }

        .slots {
          display: flex;
          --vaadin-field-default-width: 12em;
        }

        [part='date'],
        .slots ::slotted([slot='date-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1 auto;
        }

        [part='time'],
        .slots ::slotted([slot='time-picker']) {
          pointer-events: all;
          min-width: 0;
          flex: 1 1.65 auto;
        }
      </style>

      <div class="vaadin-date-time-picker-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="slots">
          <slot name="date-picker" id="dateSlot"></slot>
          <slot name="time-picker" id="timeSlot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-date-time-picker"}static get properties(){return{name:{type:String},value:{type:String,notify:!0,value:"",observer:"__valueChanged"},min:{type:String,observer:"__minChanged"},max:{type:String,observer:"__maxChanged"},__minDateTime:{type:Date,value:""},__maxDateTime:{type:Date,value:""},datePlaceholder:{type:String},timePlaceholder:{type:String},step:{type:Number},initialPosition:String,showWeekNumbers:{type:Boolean},autoOpenDisabled:Boolean,readonly:{type:Boolean,value:!1,reflectToAttribute:!0},autofocus:{type:Boolean},__selectedDateTime:{type:Date},i18n:{type:Object,value:()=>({...x,...k})},__datePicker:{type:HTMLElement,observer:"__datePickerChanged"},__timePicker:{type:HTMLElement,observer:"__timePickerChanged"}}}static get observers(){return["__selectedDateTimeChanged(__selectedDateTime)","__datePlaceholderChanged(datePlaceholder)","__timePlaceholderChanged(timePlaceholder)","__stepChanged(step)","__initialPositionChanged(initialPosition)","__showWeekNumbersChanged(showWeekNumbers)","__requiredChanged(required)","__invalidChanged(invalid)","__disabledChanged(disabled)","__readonlyChanged(readonly)","__i18nChanged(i18n.*)","__autoOpenDisabledChanged(autoOpenDisabled)","__themeChanged(_theme, __datePicker, __timePicker)","__pickersChanged(__datePicker, __timePicker)"]}get slots(){return{...super.slots,"date-picker":()=>{const e=document.createElement("vaadin-date-time-picker-date-picker");return e.__defaultPicker=!0,e},"time-picker":()=>{const e=document.createElement("vaadin-date-time-picker-time-picker");return e.__defaultPicker=!0,e}}}constructor(){super(),this.__defaultDateMinMaxValue=void 0,this.__defaultTimeMinValue="00:00:00.000",this.__defaultTimeMaxValue="23:59:59.999",this.__changeEventHandler=this.__changeEventHandler.bind(this),this.__valueChangedEventHandler=this.__valueChangedEventHandler.bind(this),this._observer=new u.a(this,e=>{this.__onDomChange(e.addedNodes)})}ready(){super.ready(),this.addEventListener("focusout",e=>{e.relatedTarget!==this.__datePicker.$.overlay&&this.validate()}),this.__datePicker=this._getDirectSlotChild("date-picker"),this.__timePicker=this._getDirectSlotChild("time-picker"),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>this.focus()),this.setAttribute("role","group"),this.ariaTarget=this}__filterElements(e){return e.nodeType===Node.ELEMENT_NODE}focus(){this.__datePicker.focus()}_shouldRemoveFocus(e){const t=e.relatedTarget;return!this.__datePicker.contains(t)&&!this.__timePicker.contains(t)&&t!==this.__datePicker.$.overlay}__syncI18n(e,t,a){(a=a||Object.keys(t.i18n)).forEach(a=>{t.i18n&&t.i18n.hasOwnProperty(a)&&e.set("i18n."+a,t.i18n[a])})}__changeEventHandler(e){e.stopPropagation(),this.__dispatchChangeForValue===this.value&&(this.__dispatchChange(),this.validate()),this.__dispatchChangeForValue=void 0}__addInputListeners(e){e.addEventListener("change",this.__changeEventHandler),e.addEventListener("value-changed",this.__valueChangedEventHandler)}__removeInputListeners(e){e.removeEventListener("change",this.__changeEventHandler),e.removeEventListener("value-changed",this.__valueChangedEventHandler)}__onDomChange(e){e.filter(e=>e.nodeType===Node.ELEMENT_NODE).forEach(e=>{const t=e.getAttribute("slot");"date-picker"===t?this.__datePicker=e:"time-picker"===t&&(this.__timePicker=e)})}__datePickerChanged(e,t){e&&(t&&(this.__removeInputListeners(t),t.remove()),this.__addInputListeners(e),e.__defaultPicker?(e.placeholder=this.datePlaceholder,e.invalid=this.invalid,e.initialPosition=this.initialPosition,e.showWeekNumbers=this.showWeekNumbers,this.__syncI18n(e,this,C)):(this.datePlaceholder=e.placeholder,this.initialPosition=e.initialPosition,this.showWeekNumbers=e.showWeekNumbers,this.__syncI18n(this,e,C)),e.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue),e.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue),e.required=this.required,e.disabled=this.disabled,e.readonly=this.readonly,e.autoOpenDisabled=this.autoOpenDisabled,e.validate=()=>{},e._validateInput=()=>{})}__timePickerChanged(e,t){e&&(t&&(this.__removeInputListeners(t),t.remove()),this.__addInputListeners(e),e.__defaultPicker?(e.placeholder=this.timePlaceholder,e.step=this.step,e.invalid=this.invalid,this.__syncI18n(e,this,D)):(this.timePlaceholder=e.placeholder,this.step=e.step,this.__syncI18n(this,e,D)),this.__updateTimePickerMinMax(),e.required=this.required,e.disabled=this.disabled,e.readonly=this.readonly,e.autoOpenDisabled=this.autoOpenDisabled,e.validate=()=>{})}__updateTimePickerMinMax(){if(this.__timePicker&&this.__datePicker){const e=this.__parseDate(this.__datePicker.value),t=Object(_.b)(this.__minDateTime,this.__maxDateTime),a=this.__timePicker.value;this.__minDateTime&&Object(_.b)(e,this.__minDateTime)||t?this.__timePicker.min=this.__dateToIsoTimeString(this.__minDateTime):this.__timePicker.min=this.__defaultTimeMinValue,this.__maxDateTime&&Object(_.b)(e,this.__maxDateTime)||t?this.__timePicker.max=this.__dateToIsoTimeString(this.__maxDateTime):this.__timePicker.max=this.__defaultTimeMaxValue,this.__timePicker.value!==a&&(this.__timePicker.value=a)}}__i18nChanged(e){this.__datePicker&&this.__datePicker.set(e.path,e.value),this.__timePicker&&this.__timePicker.set(e.path,e.value)}__datePlaceholderChanged(e){this.__datePicker&&(this.__datePicker.placeholder=e)}__timePlaceholderChanged(e){this.__timePicker&&(this.__timePicker.placeholder=e)}__stepChanged(e){this.__timePicker&&this.__timePicker.step!==e&&(this.__timePicker.step=e)}__initialPositionChanged(e){this.__datePicker&&(this.__datePicker.initialPosition=e)}__showWeekNumbersChanged(e){this.__datePicker&&(this.__datePicker.showWeekNumbers=e)}__invalidChanged(e){this.__datePicker&&(this.__datePicker.invalid=e),this.__timePicker&&(this.__timePicker.invalid=e)}__requiredChanged(e){this.__datePicker&&(this.__datePicker.required=e),this.__timePicker&&(this.__timePicker.required=e)}__disabledChanged(e){this.__datePicker&&(this.__datePicker.disabled=e),this.__timePicker&&(this.__timePicker.disabled=e)}__readonlyChanged(e){this.__datePicker&&(this.__datePicker.readonly=e),this.__timePicker&&(this.__timePicker.readonly=e)}__parseDate(e){return A.prototype._parseDate(e)}__formatDateISO(e,t){return e?A.prototype._formatISO(e):t}__formatTimeISO(e){return k.formatTime(e)}__parseTimeISO(e){return k.parseTime(e)}__parseDateTime(e){const[t,a]=e.split("T");if(!t||!a)return;const i=this.__parseDate(t);if(!i)return;const r=this.__parseTimeISO(a);return r?(i.setHours(parseInt(r.hours)),i.setMinutes(parseInt(r.minutes||0)),i.setSeconds(parseInt(r.seconds||0)),i.setMilliseconds(parseInt(r.milliseconds||0)),i):void 0}__formatDateTime(e){if(!e)return"";return`${this.__formatDateISO(e,"")}T${this.__dateToIsoTimeString(e)}`}__dateToIsoTimeString(e){return this.__formatTimeISO(this.__validateTime({hours:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds(),milliseconds:e.getMilliseconds()}))}__validateTime(e){return e&&(e.seconds=this.__stepSegment<3?void 0:e.seconds,e.milliseconds=this.__stepSegment<4?void 0:e.milliseconds),e}get __inputs(){return[this.__datePicker,this.__timePicker]}checkValidity(){const e=this.__inputs.some(e=>!e.checkValidity()),t=this.required&&this.__inputs.some(e=>!e.value);return!e&&!t}get __stepSegment(){const e=null==this.step?60:parseFloat(this.step);return e%3600==0?1:e%60!=0&&e?e%1==0?3:e<1?4:void 0:2}__dateTimeEquals(e,t){return!!Object(_.b)(e,t)&&(e.getHours()===t.getHours()&&e.getMinutes()===t.getMinutes()&&e.getSeconds()===t.getSeconds()&&e.getMilliseconds()===t.getMilliseconds())}__handleDateTimeChange(e,t,a,i){if(!a)return this[e]="",void(this[t]="");const r=this.__parseDateTime(a);r?this.__dateTimeEquals(this[t],r)||(this[t]=r):this[e]=i}__valueChanged(e,t){this.__handleDateTimeChange("value","__selectedDateTime",e,t),void 0!==t&&(this.__dispatchChangeForValue=e),this.toggleAttribute("has-value",!!e),this.__updateTimePickerMinMax()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__minChanged(e,t){this.__handleDateTimeChange("min","__minDateTime",e,t),this.__datePicker&&(this.__datePicker.min=this.__formatDateISO(this.__minDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__maxChanged(e,t){this.__handleDateTimeChange("max","__maxDateTime",e,t),this.__datePicker&&(this.__datePicker.max=this.__formatDateISO(this.__maxDateTime,this.__defaultDateMinMaxValue)),this.__updateTimePickerMinMax()}__selectedDateTimeChanged(e){const t=this.__formatDateTime(e);this.value!==t&&(this.value=t);if(Boolean(this.__datePicker&&this.__datePicker.$)&&!this.__ignoreInputValueChange){this.__ignoreInputValueChange=!0;const[e,t]=this.value.split("T");this.__datePicker.value=e||"",this.__timePicker.value=t||"",this.__ignoreInputValueChange=!1}}get __formattedValue(){const e=this.__datePicker.value,t=this.__timePicker.value;return e&&t?[e,t].join("T"):""}__valueChangedEventHandler(){if(this.__ignoreInputValueChange)return;const e=this.__formattedValue,[t,a]=e.split("T");this.__ignoreInputValueChange=!0,this.__updateTimePickerMinMax(),t&&a?e!==this.value&&(this.value=e):this.value="",this.__ignoreInputValueChange=!1}__autoOpenDisabledChanged(e){this.__datePicker&&(this.__datePicker.autoOpenDisabled=e),this.__timePicker&&(this.__timePicker.autoOpenDisabled=e)}__themeChanged(e,t,a){t&&a&&[t,a].forEach(t=>{e?t.setAttribute("theme",e):t.removeAttribute("theme")})}__pickersChanged(e,t){e&&t&&e.__defaultPicker===t.__defaultPicker&&(e.value?this.__valueChangedEventHandler():this.value&&this.__selectedDateTimeChanged(this.__selectedDateTime))}}customElements.define(E.is,E)},function(e,t,a){"use strict";a.d(t,"a",(function(){return P}));var i=a(188),r=a(169),n=a(192),o=a(21),s=a(17);var l=a(194),d=a(159),c=a(193),u=a(105);function h(e,t){for(var a=e<0?"-":"",i=Math.abs(e).toString();i.length<t;)i="0"+i;return a+i}var m={y:function(e,t){var a=e.getUTCFullYear(),i=a>0?a:1-a;return h("yy"===t?i%100:i,t.length)},M:function(e,t){var a=e.getUTCMonth();return"M"===t?String(a+1):h(a+1,2)},d:function(e,t){return h(e.getUTCDate(),t.length)},a:function(e,t){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return"am"===a?"a.m.":"p.m."}},h:function(e,t){return h(e.getUTCHours()%12||12,t.length)},H:function(e,t){return h(e.getUTCHours(),t.length)},m:function(e,t){return h(e.getUTCMinutes(),t.length)},s:function(e,t){return h(e.getUTCSeconds(),t.length)},S:function(e,t){var a=t.length,i=e.getUTCMilliseconds();return h(Math.floor(i*Math.pow(10,a-3)),t.length)}},p="midnight",v="noon",g="morning",_="afternoon",f="evening",b="night";function y(e,t){var a=e>0?"-":"+",i=Math.abs(e),r=Math.floor(i/60),n=i%60;if(0===n)return a+String(r);var o=t||"";return a+String(r)+o+h(n,2)}function A(e,t){return e%60==0?(e>0?"-":"+")+h(Math.abs(e)/60,2):w(e,t)}function w(e,t){var a=t||"",i=e>0?"-":"+",r=Math.abs(e);return i+h(Math.floor(r/60),2)+a+h(r%60,2)}var x={G:function(e,t,a){var i=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(i,{width:"abbreviated"});case"GGGGG":return a.era(i,{width:"narrow"});case"GGGG":default:return a.era(i,{width:"wide"})}},y:function(e,t,a){if("yo"===t){var i=e.getUTCFullYear(),r=i>0?i:1-i;return a.ordinalNumber(r,{unit:"year"})}return m.y(e,t)},Y:function(e,t,a,i){var r=Object(u.a)(e,i),n=r>0?r:1-r;return"YY"===t?h(n%100,2):"Yo"===t?a.ordinalNumber(n,{unit:"year"}):h(n,t.length)},R:function(e,t){return h(Object(d.a)(e),t.length)},u:function(e,t){return h(e.getUTCFullYear(),t.length)},Q:function(e,t,a){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return h(i,2);case"Qo":return a.ordinalNumber(i,{unit:"quarter"});case"QQQ":return a.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,a){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return h(i,2);case"qo":return a.ordinalNumber(i,{unit:"quarter"});case"qqq":return a.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,a){var i=e.getUTCMonth();switch(t){case"M":case"MM":return m.M(e,t);case"Mo":return a.ordinalNumber(i+1,{unit:"month"});case"MMM":return a.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,a){var i=e.getUTCMonth();switch(t){case"L":return String(i+1);case"LL":return h(i+1,2);case"Lo":return a.ordinalNumber(i+1,{unit:"month"});case"LLL":return a.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,a,i){var r=Object(c.a)(e,i);return"wo"===t?a.ordinalNumber(r,{unit:"week"}):h(r,t.length)},I:function(e,t,a){var i=Object(l.a)(e);return"Io"===t?a.ordinalNumber(i,{unit:"week"}):h(i,t.length)},d:function(e,t,a){return"do"===t?a.ordinalNumber(e.getUTCDate(),{unit:"date"}):m.d(e,t)},D:function(e,t,a){var i=function(e){Object(s.a)(1,arguments);var t=Object(o.a)(e),a=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),r=a-i;return Math.floor(r/864e5)+1}(e);return"Do"===t?a.ordinalNumber(i,{unit:"dayOfYear"}):h(i,t.length)},E:function(e,t,a){var i=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return a.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(i,{width:"short",context:"formatting"});case"EEEE":default:return a.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,a,i){var r=e.getUTCDay(),n=(r-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(n);case"ee":return h(n,2);case"eo":return a.ordinalNumber(n,{unit:"day"});case"eee":return a.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(r,{width:"short",context:"formatting"});case"eeee":default:return a.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,a,i){var r=e.getUTCDay(),n=(r-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(n);case"cc":return h(n,t.length);case"co":return a.ordinalNumber(n,{unit:"day"});case"ccc":return a.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(r,{width:"narrow",context:"standalone"});case"cccccc":return a.day(r,{width:"short",context:"standalone"});case"cccc":default:return a.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,a){var i=e.getUTCDay(),r=0===i?7:i;switch(t){case"i":return String(r);case"ii":return h(r,t.length);case"io":return a.ordinalNumber(r,{unit:"day"});case"iii":return a.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(i,{width:"short",context:"formatting"});case"iiii":default:return a.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,a){var i=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,a){var i,r=e.getUTCHours();switch(i=12===r?v:0===r?p:r/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,a){var i,r=e.getUTCHours();switch(i=r>=17?f:r>=12?_:r>=4?g:b,t){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,a){if("ho"===t){var i=e.getUTCHours()%12;return 0===i&&(i=12),a.ordinalNumber(i,{unit:"hour"})}return m.h(e,t)},H:function(e,t,a){return"Ho"===t?a.ordinalNumber(e.getUTCHours(),{unit:"hour"}):m.H(e,t)},K:function(e,t,a){var i=e.getUTCHours()%12;return"Ko"===t?a.ordinalNumber(i,{unit:"hour"}):h(i,t.length)},k:function(e,t,a){var i=e.getUTCHours();return 0===i&&(i=24),"ko"===t?a.ordinalNumber(i,{unit:"hour"}):h(i,t.length)},m:function(e,t,a){return"mo"===t?a.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):m.m(e,t)},s:function(e,t,a){return"so"===t?a.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):m.s(e,t)},S:function(e,t){return m.S(e,t)},X:function(e,t,a,i){var r=(i._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return A(r);case"XXXX":case"XX":return w(r);case"XXXXX":case"XXX":default:return w(r,":")}},x:function(e,t,a,i){var r=(i._originalDate||e).getTimezoneOffset();switch(t){case"x":return A(r);case"xxxx":case"xx":return w(r);case"xxxxx":case"xxx":default:return w(r,":")}},O:function(e,t,a,i){var r=(i._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+y(r,":");case"OOOO":default:return"GMT"+w(r,":")}},z:function(e,t,a,i){var r=(i._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+y(r,":");case"zzzz":default:return"GMT"+w(r,":")}},t:function(e,t,a,i){var r=i._originalDate||e;return h(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,a,i){return h((i._originalDate||e).getTime(),t.length)}},k=a(158),C=a(157),D=a(160),E=a(31),O=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,T=/^'([^]*?)'?$/,S=/''/g,B=/[a-zA-Z]/;function P(e,t,a){Object(s.a)(2,arguments);var l=String(t),d=a||{},c=d.locale||r.a,u=c.options&&c.options.firstWeekContainsDate,h=null==u?1:Object(E.a)(u),m=null==d.firstWeekContainsDate?h:Object(E.a)(d.firstWeekContainsDate);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var p=c.options&&c.options.weekStartsOn,v=null==p?0:Object(E.a)(p),g=null==d.weekStartsOn?v:Object(E.a)(d.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!c.localize)throw new RangeError("locale must contain localize property");if(!c.formatLong)throw new RangeError("locale must contain formatLong property");var _=Object(o.a)(e);if(!Object(i.a)(_))throw new RangeError("Invalid time value");var f=Object(C.a)(_),b=Object(n.a)(_,f),y={firstWeekContainsDate:m,weekStartsOn:g,locale:c,_originalDate:_},A=l.match(I).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,k.a[t])(e,c.formatLong,y):e})).join("").match(O).map((function(a){if("''"===a)return"'";var i=a[0];if("'"===i)return M(a);var r=x[i];if(r)return!d.useAdditionalWeekYearTokens&&Object(D.b)(a)&&Object(D.c)(a,t,e),!d.useAdditionalDayOfYearTokens&&Object(D.a)(a)&&Object(D.c)(a,t,e),r(b,a,c.localize,y);if(i.match(B))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return a})).join("");return A}function M(e){return e.match(T)[1].replace(S,"'")}},,,,function(e,t,a){"use strict";a(50),a(148),a(149),a(18);var i=a(35),r=a(7);const n=r.c`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;Object(r.d)("vaadin-combo-box",[i.a,n],{moduleId:"lumo-combo-box"});a(44),a(150);var o=a(8),s=a(11),l=a(83),d=a(48),c=a(38),u=a(84),h=a(51),m=a(85);
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const p=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new m.a},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}ready(){super.ready(),this.$.dropdown.addEventListener("index-requested",e=>{const t=e.detail.index,a=e.detail.currentScrollerPos,i=Math.floor(1.5*this.pageSize);if(!this._shouldSkipIndex(t,i,a)&&void 0!==t){const e=this._getPageForIndex(t);this._shouldLoadPage(e)&&this._loadPage(e)}})}_dataProviderFilterChanged(e){void 0!==this.__previousDataProviderFilter||""!==e?this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this._pendingRequests={},this.loading=this._shouldFetchData(),this.size=void 0,this.clearCache()):this.__previousDataProviderFilter=e}_shouldFetchData(){return!!this.dataProvider&&(this.opened||this.filter&&this.filter.length)}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,a){return 0!==a&&e>=a-t&&e<=a+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;const t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof m.a:void 0===this.size}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;const t={page:e,pageSize:this.pageSize,filter:this.filter},a=(i,r)=>{if(this._pendingRequests[e]===a){const a=this.filteredItems?[...this.filteredItems]:[];a.splice(t.page*t.pageSize,i.length,...i),this.filteredItems=a,this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.opened||this.hasAttribute("focused")||this._commitValue(),this.size=r,delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1)}};this._pendingRequests[e]||(this._pendingRequests[e]=a,this.dataProvider(t,a))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(!this.dataProvider)return;this._pendingRequests={};const e=[];for(let t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?(this._forceNextRequest=!1,this._loadPage(0)):this._forceNextRequest=!0}_sizeChanged(e=0){const t=(this.filteredItems||[]).slice(0,e);for(let a=0;a<e;a++)t[a]=void 0!==t[a]?t[a]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t}),this.clearCache()}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){const e=this._indexOfValue(t,this.filteredItems);(e<0||!this._getItemLabel(this.filteredItems[e]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests){const t=Math.ceil(e/this.pageSize),a=Object.keys(this._pendingRequests);for(let i=0;i<a.length;i++){const r=parseInt(a[i]);r>=t&&this._pendingRequests[r]([],e)}}}};var v=a(154);
/**
 * @license
 * Copyright (c) 2015 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Object(r.d)("vaadin-combo-box",h.a,{moduleId:"vaadin-combo-box-styles"});class g extends(p(Object(v.a)(Object(u.a)(Object(l.a)(Object(r.a)(Object(s.a)(o.a))))))){static get is(){return"vaadin-combo-box"}static get template(){return o.b`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-dropdown
        id="dropdown"
        opened="[[opened]]"
        renderer="[[renderer]]"
        position-target="[[_positionTarget]]"
        restore-focus-on-close="[[__restoreFocusOnClose]]"
        restore-focus-node="[[inputElement]]"
        _focused-index="[[_focusedIndex]]"
        _item-id-path="[[itemIdPath]]"
        _item-label-path="[[itemLabelPath]]"
        loading="[[loading]]"
        theme="[[_theme]]"
      ></vaadin-combo-box-dropdown>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new d.a(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new c.a(this.inputElement,this._labelController)),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){return e.relatedTarget!==this.$.dropdown.$.overlay||(e.composedPath()[0].focus(),!1)}_onClearButtonClick(e){e.stopPropagation(),this._handleClearButtonClick(e)}_onHostClick(e){const t=e.composedPath();(t.includes(this._labelNode)||t.includes(this._positionTarget))&&super._onHostClick(e)}}customElements.define(g.is,g)},function(e,t,a){"use strict";a(67),a(106),a(55),a(49),a(174),a(9),a(139);var i=a(10),r=a(14),n=a(7);const o=n.c`
  :host {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  [part='backdrop'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
  }

  [part='content'] {
    padding: 0;
  }

  [part='overlay'] {
    background: none;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
    height: 100%;
  }

  [part='card'] {
    width: calc(var(--lumo-size-m) * 10);
    background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
  }

  [part='brand'] {
    padding: var(--lumo-space-l) var(--lumo-space-xl) var(--lumo-space-l) var(--lumo-space-l);
    background-color: var(--lumo-primary-color);
    color: var(--lumo-primary-contrast-color);
    min-height: calc(var(--lumo-size-m) * 5);
  }

  [part='description'] {
    line-height: var(--lumo-line-height-s);
    color: var(--lumo-tint-70pct);
    margin-bottom: 0;
  }

  [part='content'] {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [part='card'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: var(--lumo-box-shadow-s);
    margin: var(--lumo-space-s);
    height: auto;
  }

  /* Small screen */
  @media only screen and (max-width: 500px) {
    [part='overlay'],
    [part='content'] {
      height: 100%;
    }

    [part='content'] {
      min-height: 100%;
      background: var(--lumo-base-color);
      align-items: flex-start;
    }

    [part='card'],
    [part='overlay'] {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }

    /* RTL styles */
    :host([dir='rtl']) [part='brand'] {
      padding: var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-l) var(--lumo-space-xl);
    }
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='card'] {
      flex-direction: row;
      align-items: stretch;
      max-width: calc(var(--lumo-size-m) * 16);
      width: 100%;
    }

    [part='brand'],
    [part='form'] {
      flex: auto;
      flex-basis: 0;
      box-sizing: border-box;
    }

    [part='brand'] {
      justify-content: flex-start;
    }

    [part='form'] {
      padding: var(--lumo-space-l);
      overflow: auto;
    }
  }

  /* Landscape really small screen */
  @media only screen and (max-height: 500px) and (min-width: 600px) and (orientation: landscape),
    only screen and (max-width: 600px) and (min-width: 600px) and (orientation: landscape) {
    [part='content'] {
      height: 100vh;
    }

    [part='card'] {
      margin: 0;
      width: 100%;
      max-width: none;
      height: 100%;
      flex: auto;
      border-radius: 0;
      box-shadow: none;
    }

    [part='form'] {
      height: 100%;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  /* Handle iPhone X notch */
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    [part='card'] {
      padding-right: constant(safe-area-inset-right);
      padding-right: env(safe-area-inset-right);

      padding-left: constant(safe-area-inset-left);
      padding-left: env(safe-area-inset-left);
    }

    [part='brand'] {
      margin-left: calc(constant(safe-area-inset-left) * -1);
      margin-left: calc(env(safe-area-inset-left) * -1);

      padding-left: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-left: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }

    /* RTL styles */
    :host([dir='rtl']) [part='card'] {
      padding-left: constant(safe-area-inset-right);
      padding-left: env(safe-area-inset-right);
      padding-right: constant(safe-area-inset-left);
      padding-right: env(safe-area-inset-left);
    }

    :host([dir='rtl']) [part='brand'] {
      margin-right: calc(constant(safe-area-inset-left) * -1);
      margin-right: calc(env(safe-area-inset-left) * -1);
      padding-right: calc(var(--lumo-space-l) + constant(safe-area-inset-left));
      padding-right: calc(var(--lumo-space-l) + env(safe-area-inset-left));
    }
  }
`;Object(n.d)("vaadin-login-overlay-wrapper",[i.a,r.a,o],{moduleId:"vaadin-login-overlay-wrapper-lumo-styles"});const s=n.c`
  :host([theme~='with-overlay']) {
    min-height: 100%;
    display: flex;
    justify-content: center;
    max-width: 100%;
  }

  /* Landscape small screen */
  @media only screen and (max-height: 600px) and (min-width: 600px) and (orientation: landscape) {
    :host([theme~='with-overlay']) [part='form'] {
      height: 100%;
      -webkit-overflow-scrolling: touch;
      flex: 1;
      padding: 2px;
    }
  }
`;Object(n.d)("vaadin-login-form-wrapper",[i.a,r.a,s],{moduleId:"lumo-login-overlay"});a(141);var l=a(72),d=a(42);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const c=document.createElement("template");let u;c.innerHTML='<dom-module id="vaadin-login-overlay-wrapper-template">\n  <template>\n    <style>\n      [part="overlay"] {\n        outline: none;\n      }\n\n      [part="card"] {\n        max-width: 100%;\n        box-sizing: border-box;\n        overflow: hidden;\n        display: flex;\n        flex-direction: column;\n      }\n\n      [part="brand"] {\n        box-sizing: border-box;\n        overflow: hidden;\n        flex-grow: 1;\n        flex-shrink: 0;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-end;\n      }\n\n      [part="brand"] h1 {\n        color: inherit;\n        margin: 0;\n      }\n    </style>\n    <section part="card">\n      <div part="brand">\n        <slot name="title">\n          <h1 part="title">[[title]]</h1>\n        </slot>\n        <p part="description">[[description]]</p>\n      </div>\n      <div part="form">\n        <slot></slot>\n      </div>\n    </section>\n  </template>\n</dom-module>',document.head.appendChild(c.content);class h extends d.a{static get is(){return"vaadin-login-overlay-wrapper"}static get properties(){return{title:{type:String},description:{type:String}}}static get template(){if(!u){u=super.template.cloneNode(!0);const e=l.a.import(this.is+"-template","template"),t=e.content.querySelector("[part=card]"),a=e.content.querySelector("style"),i=u.content.querySelector("#content");i.replaceChild(t,i.children[0]),i.appendChild(a)}return u}}customElements.define(h.is,h);var m=a(8),p=a(11),v=a(103);
/**
 * @license
 * Copyright (c) 2018 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class g extends(Object(v.a)(Object(p.a)(Object(n.a)(m.a)))){static get template(){return m.b`
      <vaadin-login-overlay-wrapper
        id="vaadinLoginOverlayWrapper"
        opened="{{opened}}"
        focus-trap
        with-backdrop
        title="[[title]]"
        description="[[description]]"
        theme$="[[_theme]]"
      >
        <vaadin-login-form
          theme="with-overlay"
          id="vaadinLoginForm"
          action="{{action}}"
          disabled="{{disabled}}"
          error="{{error}}"
          no-autofocus="[[noAutofocus]]"
          no-forgot-password="{{noForgotPassword}}"
          i18n="{{i18n}}"
          on-login="_retargetEvent"
          on-forgot-password="_retargetEvent"
        ></vaadin-login-form>
      </vaadin-login-overlay-wrapper>
    `}static get is(){return"vaadin-login-overlay"}static get properties(){return{description:{type:String,value:"Application description",notify:!0},opened:{type:Boolean,value:!1,observer:"_onOpenedChange"},title:{type:String,value:"App name"}}}static get observers(){return["__i18nChanged(i18n.header.*)"]}ready(){super.ready(),this._preventClosingLogin=this._preventClosingLogin.bind(this)}connectedCallback(){super.connectedCallback(),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.addEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.__restoreOpened&&(this.$.vaadinLoginOverlayWrapper.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-outside-click",this._preventClosingLogin),this.$.vaadinLoginOverlayWrapper.removeEventListener("vaadin-overlay-escape-press",this._preventClosingLogin),this.__restoreOpened=this.$.vaadinLoginOverlayWrapper.opened,this.$.vaadinLoginOverlayWrapper.opened=!1}__i18nChanged(e){const t=e.base;t&&(this.title=t.title,this.description=t.description)}_preventClosingLogin(e){e.preventDefault()}_onOpenedChange(){this.opened?(this._undoTeleport=this._teleport(this._getElementsToTeleport()),document.body.style.pointerEvents=this.$.vaadinLoginOverlayWrapper._previousDocumentPointerEvents):(this.$.vaadinLoginForm.$.vaadinLoginUsername.value="",this.$.vaadinLoginForm.$.vaadinLoginPassword.value="",this.disabled=!1,this._undoTeleport&&this._undoTeleport())}_teleport(e){const t=Array.from(e).map(e=>this.$.vaadinLoginOverlayWrapper.appendChild(e));return()=>{for(;t.length>0;)this.appendChild(t.shift())}}_getElementsToTeleport(){return this.querySelectorAll("[slot=title]")}}customElements.define(g.is,g)},function(e,t,a){"use strict";a(10);var i=a(7);const r=i.c`
  :host {
    outline: none;
  }

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }
`;Object(i.d)("vaadin-scroller",r,{moduleId:"lumo-scroller"});var n=a(8),o=a(11),s=a(28);
/**
 * @license
 * Copyright (c) 2020 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class l extends(Object(s.a)(Object(o.a)(Object(i.a)(n.a)))){static get template(){return n.b`
      <style>
        :host([hidden]) {
          display: none !important;
        }

        :host {
          display: block;
          overflow: auto;
        }

        :host([scroll-direction='vertical']) {
          overflow-x: hidden;
        }

        :host([scroll-direction='horizontal']) {
          overflow-y: hidden;
        }

        :host([scroll-direction='none']) {
          overflow: hidden;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-scroller"}static get properties(){return{scrollDirection:{type:String,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}_shouldSetFocus(e){return e.target===this}}customElements.define(l.is,l)},,,,,,,,function(e,t,a){"use strict";a(67);var i=a(35),r=a(7);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const n=r.c`
  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;Object(r.d)("vaadin-email-field",[i.a,n],{moduleId:"lumo-email-field"});var o=a(82);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Object(r.d)("vaadin-email-field",r.c`
    :host([dir='rtl']) [part='input-field'] {
      direction: ltr;
    }

    :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
      direction: rtl;
      text-align: left;
    }
  `,{moduleId:"vaadin-email-field-styles"});class s extends o.a{static get is(){return"vaadin-email-field"}constructor(){super(),this._setType("email")}connectedCallback(){super.connectedCallback(),this.inputElement&&(this.inputElement.autocapitalize="off")}_createConstraintsObserver(){this.pattern=this.pattern||"^([a-zA-Z0-9_\\.\\-+])+@[a-zA-Z0-9-.]+\\.[a-zA-Z0-9-]{2,}$",super._createConstraintsObserver()}}customElements.define("vaadin-email-field",s)},function(e,t,a){"use strict";a(10),a(9),a(12),a(14);var i=a(7);Object(i.d)("vaadin-form-item",i.c`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '•');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});var r=a(8),n=a(125);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class o extends(Object(i.a)(r.a)){static get template(){return r.b`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(e){return e.ariaTarget||e}__linkLabelToField(e){Object(n.a)(this._getFieldAriaTarget(e),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(e){Object(n.b)(this._getFieldAriaTarget(e),"aria-labelledby",this.__labelId)}__onLabelClick(){const e=this.__fieldNode;e&&(e.focus(),e.click())}__getValidateFunction(e){return e.validate||e.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const e=this.$.labelSlot.assignedElements()[0];if(e){if(this.__labelNode=e,this.__labelNode.id)this.__labelId=this.__labelNode.id;else{const e=o._uniqueLabelId=1+o._uniqueLabelId||0;this.__labelId=`label-${this.localName}-${e}`,this.__labelNode.id=this.__labelId}this.__fieldNode&&this.__linkLabelToField(this.__fieldNode)}}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const e=this.$.contentSlot.assignedElements();e.length>1&&console.warn("WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.\nPlease wrap fields with a <vaadin-custom-field> instead.");const t=e.find(e=>!!this.__getValidateFunction(e));t&&(this.__fieldNode=t,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(e){e?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const e=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",!1===e)}}customElements.define(o.is,o)},function(e,t,a){"use strict";a(9);var i=a(7);Object(i.d)("vaadin-form-layout",i.c`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});var r=a(19),n=a(8),o=a(11),s=a(59);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class l extends(Object(s.a)(Object(o.a)(Object(i.a)(n.a)))){static get template(){return n.b`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value:()=>[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}],observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const e={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(e=>{"attributes"!==e.type||"colspan"!==e.attributeName&&"hidden"!==e.attributeName||this._updateLayout()})}),this.__childObserver=new r.a(this,t=>{const a=this._getObservableNodes(t.addedNodes),i=this._getObservableNodes(t.removedNodes);a.forEach(t=>{this.__mutationObserver.observe(t,e)}),(a.length>0||i.length>0)&&this._updateLayout()})}_getObservableNodes(e){const t=["template","style","dom-repeat","dom-if"];return Array.from(e).filter(e=>e.nodeType===Node.ELEMENT_NODE&&-1===t.indexOf(e.localName.toLowerCase()))}_naturalNumberOrOne(e){return"number"==typeof e&&e>=1&&e<1/0?Math.floor(e):1}_isValidCSSLength(e){return"inherit"!==e&&"normal"!==e&&(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${e}; }`,!this._styleElement.sheet||["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0)}_responsiveStepsChanged(e,t){try{if(!Array.isArray(e))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(e.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');e.forEach(e=>{if(this._naturalNumberOrOne(e.columns)!==e.columns)throw new Error(`Invalid 'columns' value of ${e.columns}, a natural number is required.`);if(void 0!==e.minWidth&&!this._isValidCSSLength(e.minWidth))throw new Error(`Invalid 'minWidth' value of ${e.minWidth}, a valid CSS length required.`);if(void 0!==e.labelsPosition&&-1===["aside","top"].indexOf(e.labelsPosition))throw new Error(`Invalid 'labelsPosition' value of ${e.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(a){t&&t!==e?(console.warn(a.message+" Using previously set 'responsiveSteps' instead."),this.responsiveSteps=t):(console.warn(a.message+" Using default 'responsiveSteps' instead."),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(e){0===e.animationName.indexOf("vaadin-form-layout-appear")&&this._selectResponsiveStep()}_selectResponsiveStep(){let e;this.responsiveSteps.forEach(t=>{this.$.layout.style.setProperty("background-position",t.minWidth);parseFloat(getComputedStyle(this.$.layout).getPropertyValue("background-position"))<=this.offsetWidth&&(e=t)}),this.$.layout.style.removeProperty("background-position"),e&&(this._columnCount=e.columns,this._labelsOnTop="top"===e.labelsPosition)}_invokeUpdateLayout(){this._updateLayout()}updateStyles(e={}){console.warn("WARNING: Since Vaadin 23, updateStyles() is deprecated. Use the native element.style.setProperty API to set custom CSS property values."),Object.entries(e).forEach(([e,t])=>{this.style.setProperty(e,t)}),this._updateLayout()}_updateLayout(){const e=getComputedStyle(this),t=e.getPropertyValue("--vaadin-form-layout-column-spacing"),a=e.direction,i="margin-"+("ltr"===a?"left":"right"),r="margin-"+("ltr"===a?"right":"left"),n=this.offsetWidth;let o=0;Array.from(this.children).filter(e=>"br"===e.localName||"none"!==getComputedStyle(e).display).forEach((e,a,s)=>{if("br"===e.localName)return void(o=0);let l;l=this._naturalNumberOrOne(parseFloat(e.getAttribute("colspan"))),l=Math.min(l,this._columnCount);const d=l/this._columnCount;e.style.width=`calc(${99.9*d}% - ${1-d} * ${t})`,o+l>this._columnCount&&(o=0),0===o?e.style.setProperty(i,"0px"):e.style.removeProperty(i);const c=a+1,u=c<s.length&&"br"===s[c].localName;if(o+l===this._columnCount)e.style.setProperty(r,"0px");else if(u){const a=(this._columnCount-o-l)/this._columnCount;e.style.setProperty(r,`calc(${a*n}px + ${a} * ${t})`)}else e.style.removeProperty(r);o=(o+l)%this._columnCount,"vaadin-form-item"===e.localName&&(this._labelsOnTop?e.setAttribute("label-position","top"):e.removeAttribute("label-position"))})}_onResize(){this._selectResponsiveStep()}}customElements.define(l.is,l)},function(e,t,a){"use strict";a(10),a(9),a(12);var i=a(7);Object(i.d)("vaadin-grid-tree-toggle",i.c`
    :host {
      --vaadin-grid-tree-toggle-level-offset: 2em;
      align-items: center;
      vertical-align: middle;
      margin-left: calc(var(--lumo-space-s) * -1);
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([leaf])) {
      cursor: default;
    }

    [part='toggle'] {
      display: inline-block;
      font-size: 1.5em;
      line-height: 1;
      width: 1em;
      height: 1em;
      text-align: center;
      color: var(--lumo-contrast-50pct);
      cursor: var(--lumo-clickable-cursor);
      /* Increase touch target area */
      padding: calc(1em / 3);
      margin: calc(1em / -3);
    }

    :host(:not([dir='rtl'])) [part='toggle'] {
      margin-right: 0;
    }

    @media (hover: hover) {
      :host(:hover) [part='toggle'] {
        color: var(--lumo-contrast-80pct);
      }
    }

    [part='toggle']::before {
      font-family: 'lumo-icons';
      display: inline-block;
      height: 100%;
    }

    :host(:not([expanded])) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
    }

    :host([expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-right);
      transform: rotate(90deg);
    }

    /* Experimental support for hierarchy connectors, using an unsupported selector */
    :host([theme~='connectors']) #level-spacer {
      position: relative;
      z-index: -1;
      font-size: 1em;
      height: 1.5em;
    }

    :host([theme~='connectors']) #level-spacer::before {
      display: block;
      content: '';
      margin-top: calc(var(--lumo-space-m) * -1);
      height: calc(var(--lumo-space-m) + 3em);
      background-image: linear-gradient(
        to right,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-size: var(--vaadin-grid-tree-toggle-level-offset) var(--vaadin-grid-tree-toggle-level-offset);
      background-position: calc(var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px) 0;
    }

    /* RTL specific styles */

    :host([dir='rtl']) {
      margin-left: 0;
      margin-right: calc(var(--lumo-space-s) * -1);
    }

    :host([dir='rtl']) [part='toggle'] {
      margin-left: 0;
    }

    :host([dir='rtl'][expanded]) [part='toggle']::before {
      transform: rotate(-90deg);
    }

    :host([dir='rtl'][theme~='connectors']) #level-spacer::before {
      background-image: linear-gradient(
        to left,
        transparent calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px),
        var(--lumo-contrast-10pct) calc(var(--vaadin-grid-tree-toggle-level-offset) - 1px)
      );
      background-position: calc(100% - (var(--vaadin-grid-tree-toggle-level-offset) / 2 - 2px)) 0;
    }

    :host([dir='rtl']:not([expanded])) [part='toggle']::before,
    :host([dir='rtl'][expanded]) [part='toggle']::before {
      content: var(--lumo-icons-angle-left);
    }
  `,{moduleId:"lumo-grid-tree-toggle"});var r=a(8),n=a(33),o=a(101);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const s=document.createElement("template");s.innerHTML="\n  <style>\n    @font-face {\n      font-family: \"vaadin-grid-tree-icons\";\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQkAA0AAAAABrwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAECAAAABoAAAAcgHwa6EdERUYAAAPsAAAAHAAAAB4AJwAOT1MvMgAAAZQAAAA/AAAAYA8TBIJjbWFwAAAB8AAAAFUAAAFeGJvXWmdhc3AAAAPkAAAACAAAAAgAAAAQZ2x5ZgAAAlwAAABLAAAAhIrPOhFoZWFkAAABMAAAACsAAAA2DsJI02hoZWEAAAFcAAAAHQAAACQHAgPHaG10eAAAAdQAAAAZAAAAHAxVAgBsb2NhAAACSAAAABIAAAASAIAAVG1heHAAAAF8AAAAGAAAACAACgAFbmFtZQAAAqgAAAECAAACTwflzbdwb3N0AAADrAAAADYAAABZQ7Ajh3icY2BkYGAA4twv3Vfi+W2+MnCzMIDANSOmbGSa2YEZRHEwMIEoAAoiB6sAeJxjYGRgYD7w/wADAwsDCDA7MDAyoAI2AFEEAtIAAAB4nGNgZGBg4GBgZgDRDAxMDGgAAAGbABB4nGNgZp7JOIGBlYGBaSbTGQYGhn4IzfiawZiRkwEVMAqgCTA4MDA+38d84P8BBgdmIAapQZJVYGAEAGc/C54AeJxjYYAAxlAIzQTELAwMBxgZGB0ACy0BYwAAAHicY2BgYGaAYBkGRgYQiADyGMF8FgYbIM3FwMHABISMDArP9/3/+/8/WJXC8z0Q9v8nEp5gHVwMMMAIMo+RDYiZoQJMQIKJARUA7WBhGN4AACFKDtoAAAAAAAAAAAgACAAQABgAJgA0AEIAAHichYvBEYBADAKBVHBjBT4swl9KS2k05o0XHd/yW1hAfBFwCv9sIlJu3nZaNS3PXAaXXHI8Lge7DlzF7C1RgXc7xkK6+gvcD2URmQB4nK2RQWoCMRiFX3RUqtCli65yADModOMBLLgQSqHddRFnQghIAnEUvEA3vUUP0LP0Fj1G+yb8R5iEhO9/ef/7FwFwj28o9EthiVp4hBlehcfUP4Ur8o/wBAv8CU+xVFvhOR7UB7tUdUdlVRJ6HnHWTnhM/V24In8JT5j/KzzFSi2E53hUz7jCcrcIiDDwyKSW1JEct2HdIPH1DFytbUM0PofWdNk5E5oUqb/Q6HHBiVGZpfOXkyUMEj5IyBuNmYZQjBobfsuassvnkKLe1OuBBj0VQ8cRni2xjLWsHaM0jrjx3peYA0/vrdmUYqe9iy7bzrX6eNP7Jh1SijX+AaUVbB8AAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSruZMzlHaB0q4A76kLlwAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKxJigiD6mhFTNowGACmcA/8AAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n",document.head.appendChild(s.content);class l extends(Object(i.a)(Object(n.a)(r.a))){static get template(){return r.b`
      <style>
        :host {
          display: inline-flex;
          align-items: baseline;
          max-width: 100%;

          /* CSS API for :host */
          --vaadin-grid-tree-toggle-level-offset: 1em;
          --_collapsed-icon: '\\e7be\\00a0';
        }

        :host([dir='rtl']) {
          --_collapsed-icon: '\\e7bd\\00a0';
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([leaf])) {
          cursor: pointer;
        }

        #level-spacer,
        [part='toggle'] {
          flex: none;
        }

        #level-spacer {
          display: inline-block;
          width: calc(var(---level, '0') * var(--vaadin-grid-tree-toggle-level-offset));
        }

        [part='toggle']::before {
          font-family: 'vaadin-grid-tree-icons';
          line-height: 1em; /* make icon font metrics not affect baseline */
        }

        :host(:not([expanded])) [part='toggle']::before {
          content: var(--_collapsed-icon);
        }

        :host([expanded]) [part='toggle']::before {
          content: '\\e7bc\\00a0'; /* icon glyph + single non-breaking space */
        }

        :host([leaf]) [part='toggle'] {
          visibility: hidden;
        }

        slot {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>

      <span id="level-spacer"></span>
      <span part="toggle"></span>
      <slot></slot>
    `}static get is(){return"vaadin-grid-tree-toggle"}static get properties(){return{level:{type:Number,value:0,observer:"_levelChanged"},leaf:{type:Boolean,value:!1,reflectToAttribute:!0},expanded:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}}}ready(){super.ready(),this.addEventListener("click",e=>this._onClick(e))}_onClick(e){this.leaf||Object(o.b)(e.target)||(e.preventDefault(),this.expanded=!this.expanded)}_levelChanged(e){const t=Number(e).toString();this.style.setProperty("---level",t)}}customElements.define(l.is,l)},function(e,t,a){"use strict";a(182),a(10),a(13),a(9),a(12),a(14);var i=a(66),r=a(39),n=a(7);const o=n.c`
  :host {
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    /* Effective height of vaadin-radio-button */
    height: var(--lumo-size-s);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([theme~='vertical']) [part='group-field'] {
    display: flex;
    flex-direction: column;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--lumo-primary-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'],
  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--lumo-secondary-text-color);
    }
  }
`;Object(n.d)("vaadin-radio-group",[r.a,i.a,o],{moduleId:"lumo-radio-group"});var s=a(19),l=a(8),d=a(37),c=a(11),u=a(28),h=a(54),m=a(62),p=a(162);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class v extends(Object(m.a)(Object(u.a)(Object(d.a)(Object(h.a)(Object(c.a)(Object(n.a)(l.a))))))){static get is(){return"vaadin-radio-group"}static get template(){return l.b`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-group-field-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        :host(:not([has-label])) [part='label'] {
          display: none;
        }
      </style>
      <div class="vaadin-group-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div part="group-field">
          <slot></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{value:{type:String,notify:!0,observer:"__valueChanged"},readonly:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__readonlyChanged"},_fieldName:{type:String}}}constructor(){super(),this.__registerRadioButton=this.__registerRadioButton.bind(this),this.__unregisterRadioButton=this.__unregisterRadioButton.bind(this),this.__onRadioButtonCheckedChange=this.__onRadioButtonCheckedChange.bind(this)}ready(){super.ready(),this.ariaTarget=this,this.setAttribute("role","radiogroup");const e=v._uniqueRadioGroupId=1+v._uniqueRadioGroupId||0;this._fieldName=`${this.localName}-${e}`,this._observer=new s.a(this,({addedNodes:e,removedNodes:t})=>{this.__filterRadioButtons(e).reverse().forEach(this.__registerRadioButton),this.__filterRadioButtons(t).forEach(this.__unregisterRadioButton)})}__filterRadioButtons(e){return e.filter(e=>e instanceof p.a)}get __radioButtons(){return this.__filterRadioButtons([...this.children])}get __selectedRadioButton(){return this.__radioButtons.find(e=>e.checked)}get isHorizontalRTL(){return"rtl"===this.getAttribute("dir")&&"vertical"!==this._theme}_onKeyDown(e){super._onKeyDown(e);const t=e.composedPath().find(e=>e instanceof p.a);["ArrowLeft","ArrowUp"].includes(e.key)&&(e.preventDefault(),this.__selectNextRadioButton(t)),["ArrowRight","ArrowDown"].includes(e.key)&&(e.preventDefault(),this.__selectPrevRadioButton(t))}__selectNextRadioButton(e){const t=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(t,this.isHorizontalRTL?1:-1)}__selectPrevRadioButton(e){const t=this.__radioButtons.indexOf(e);this.__selectIncRadioButton(t,this.isHorizontalRTL?-1:1)}__selectIncRadioButton(e,t){const a=(this.__radioButtons.length+e+t)%this.__radioButtons.length,i=this.__radioButtons[a];i.disabled?this.__selectIncRadioButton(a,t):(i.focusElement.focus(),i.focusElement.click())}__registerRadioButton(e){e.name=this._fieldName,e.addEventListener("checked-changed",this.__onRadioButtonCheckedChange),(this.disabled||this.readonly)&&(e.disabled=!0),e.checked&&this.__selectRadioButton(e)}__unregisterRadioButton(e){e.removeEventListener("checked-changed",this.__onRadioButtonCheckedChange),e.value===this.value&&this.__selectRadioButton(null)}__onRadioButtonCheckedChange(e){e.target.checked&&this.__selectRadioButton(e.target)}__valueChanged(e,t){if(!t&&!e)return;if(t&&!e)return this.__selectRadioButton(null),void this.removeAttribute("has-value");const a=this.__radioButtons.find(t=>t.value===e);a?(this.__selectRadioButton(a),this.toggleAttribute("has-value",!0)):console.warn(`The radio button with the value "${e}" was not found.`)}__readonlyChanged(e,t){(e||void 0!==t)&&t!==e&&this.__updateRadioButtonsDisabledProperty()}_disabledChanged(e,t){super._disabledChanged(e,t),(e||void 0!==t)&&t!==e&&this.__updateRadioButtonsDisabledProperty()}_shouldRemoveFocus(e){return!this.contains(e.relatedTarget)}_setFocused(e){super._setFocused(e),e||this.validate()}__selectRadioButton(e){this.value=e?e.value:"",this.__radioButtons.forEach(t=>{t.checked=t===e}),this.validate(),this.readonly&&this.__updateRadioButtonsDisabledProperty()}__updateRadioButtonsDisabledProperty(){this.__radioButtons.forEach(e=>{this.readonly?e.disabled=e!==this.__selectedRadioButton:e.disabled=this.disabled})}}customElements.define(v.is,v)},function(e,t,a){"use strict";a(10),a(13),a(9),a(12);var i=a(7);Object(i.d)("vaadin-split-layout",i.c`
    [part='splitter'] {
      min-width: var(--lumo-space-s);
      min-height: var(--lumo-space-s);
      background-color: var(--lumo-contrast-5pct);
      transition: 0.1s background-color;
    }

    [part='handle'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--lumo-size-m);
      height: var(--lumo-size-m);
    }

    [part='handle']::after {
      content: '';
      display: block;
      width: 4px;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      border-radius: var(--lumo-border-radius-s);
      background-color: var(--lumo-contrast-30pct);
      transition: 0.1s opacity, 0.1s background-color;
    }

    :host([orientation='vertical']) [part='handle']::after {
      width: 100%;
      height: 4px;
    }

    /* Hover style */
    [part='splitter']:hover [part='handle']::after {
      background-color: var(--lumo-contrast-40pct);
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      [part='splitter']:hover [part='handle']::after {
        background-color: var(--lumo-contrast-30pct);
      }
    }

    /* Active style */
    [part='splitter']:active [part='handle']::after {
      background-color: var(--lumo-contrast-50pct);
    }

    /* Small/minimal */
    :host([theme~='small']) > [part='splitter'] {
      border-left: 1px solid var(--lumo-contrast-10pct);
      border-top: 1px solid var(--lumo-contrast-10pct);
    }

    :host([theme~='small']) > [part='splitter'],
    :host([theme~='minimal']) > [part='splitter'] {
      min-width: 0;
      min-height: 0;
      background-color: transparent;
    }

    :host([theme~='small']) > [part='splitter']::after,
    :host([theme~='minimal']) > [part='splitter']::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      bottom: -4px;
      left: -4px;
    }

    :host([theme~='small']) > [part='splitter'] > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter'] > [part='handle']::after {
      opacity: 0;
    }

    :host([theme~='small']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='small']) > [part='splitter']:active > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:hover > [part='handle']::after,
    :host([theme~='minimal']) > [part='splitter']:active > [part='handle']::after {
      opacity: 1;
    }

    /* RTL specific styles */
    :host([theme~='small'][dir='rtl']) > [part='splitter'] {
      border-left: auto;
      border-right: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-split-layout"});var r=a(19),n=a(8),o=a(11),s=a(34);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class l extends(Object(o.a)(Object(i.a)(n.a))){static get template(){return n.b`
      <style>
        :host {
          display: flex;
          overflow: hidden !important;
          transform: translateZ(0);
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          flex-direction: column;
        }

        :host ::slotted(*) {
          flex: 1 1 auto;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='splitter'] {
          flex: none;
          position: relative;
          z-index: 1;
          overflow: visible;
          min-width: 8px;
          min-height: 8px;
        }

        :host(:not([orientation='vertical'])) > [part='splitter'] {
          cursor: ew-resize;
        }

        :host([orientation='vertical']) > [part='splitter'] {
          cursor: ns-resize;
        }

        [part='handle'] {
          width: 40px;
          height: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      </style>
      <slot id="primary" name="primary"></slot>
      <div part="splitter" id="splitter">
        <div part="handle"></div>
      </div>
      <slot id="secondary" name="secondary"></slot>
    `}static get is(){return"vaadin-split-layout"}static get properties(){return{orientation:{type:String,reflectToAttribute:!0,value:"horizontal"},_previousPrimaryPointerEvents:String,_previousSecondaryPointerEvents:String}}ready(){super.ready(),this.__observer=new r.a(this,e=>{this._cleanupNodes(e.removedNodes),this._processChildren()});const e=this.$.splitter;Object(s.a)(e,"track",this._onHandleTrack.bind(this)),Object(s.a)(e,"down",this._setPointerEventsNone.bind(this)),Object(s.a)(e,"up",this._restorePointerEvents.bind(this))}_cleanupNodes(e){e.forEach(e=>{e.removeAttribute("slot")})}_processChildren(){[...this.children].forEach((e,t)=>{0===t?(this._primaryChild=e,e.setAttribute("slot","primary")):1===t?(this._secondaryChild=e,e.setAttribute("slot","secondary")):e.removeAttribute("slot")})}_setFlexBasis(e,t,a){0===(t=Math.max(0,Math.min(t,a)))&&(t=1e-6),e.style.flex=`1 1 ${t}px`}_setPointerEventsNone(e){this._primaryChild&&this._secondaryChild&&(this._previousPrimaryPointerEvents=this._primaryChild.style.pointerEvents,this._previousSecondaryPointerEvents=this._secondaryChild.style.pointerEvents,this._primaryChild.style.pointerEvents="none",this._secondaryChild.style.pointerEvents="none",e.preventDefault())}_restorePointerEvents(){this._primaryChild&&this._secondaryChild&&(this._primaryChild.style.pointerEvents=this._previousPrimaryPointerEvents,this._secondaryChild.style.pointerEvents=this._previousSecondaryPointerEvents)}_onHandleTrack(e){if(!this._primaryChild||!this._secondaryChild)return;const t="vertical"===this.orientation?"height":"width";if("start"===e.detail.state)return void(this._startSize={container:this.getBoundingClientRect()[t]-this.$.splitter.getBoundingClientRect()[t],primary:this._primaryChild.getBoundingClientRect()[t],secondary:this._secondaryChild.getBoundingClientRect()[t]});const a="vertical"===this.orientation?e.detail.dy:e.detail.dx,i="vertical"!==this.orientation&&"rtl"===this.getAttribute("dir")?-a:a;this._setFlexBasis(this._primaryChild,this._startSize.primary+i,this._startSize.container),this._setFlexBasis(this._secondaryChild,this._startSize.secondary-i,this._startSize.container),"end"===e.detail.state&&(this.dispatchEvent(new CustomEvent("splitter-dragend")),delete this._startSize)}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(l.is,l)},function(e,t,a){"use strict";a(183),a(18),a(10),a(13),a(9),a(12),a(14);var i=a(7);Object(i.d)("vaadin-tabs",i.c`
    :host {
      -webkit-tap-highlight-color: transparent;
    }

    :host(:not([orientation='vertical'])) {
      box-shadow: inset 0 -1px 0 0 var(--lumo-contrast-10pct);
      position: relative;
      min-height: var(--lumo-size-l);
    }

    :host([orientation='horizontal']) [part='tabs'] ::slotted(vaadin-tab:not([theme~='icon-on-top'])) {
      justify-content: center;
    }

    :host([orientation='vertical']) {
      box-shadow: -1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([orientation='horizontal']) [part='tabs'] {
      margin: 0 0.75rem;
    }

    :host([orientation='vertical']) [part='tabs'] {
      width: 100%;
      margin: 0.5rem 0;
    }

    [part='forward-button'],
    [part='back-button'] {
      position: absolute;
      z-index: 1;
      font-family: lumo-icons;
      color: var(--lumo-tertiary-text-color);
      font-size: var(--lumo-icon-size-m);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 100%;
      transition: 0.2s opacity;
      top: 0;
    }

    [part='forward-button']:hover,
    [part='back-button']:hover {
      color: inherit;
    }

    :host(:not([dir='rtl'])) [part='forward-button'] {
      right: 0;
    }

    [part='forward-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    [part='back-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    /* Tabs overflow */

    [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: none;
      -webkit-mask-image: var(--_lumo-tabs-overflow-mask-image);
      mask-image: var(--_lumo-tabs-overflow-mask-image);
    }

    /* Horizontal tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent 2em, #000 4em);
    }

    /* Vertical tabs overflow */

    /* Both ends overflowing */
    :host([overflow~='start'][overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em, #000 calc(100% - 2em), transparent);
    }

    /* End overflowing */
    :host([overflow~='end'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(#000 calc(100% - 2em), transparent);
    }

    /* Start overflowing */
    :host([overflow~='start'][orientation='vertical']) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(transparent, #000 2em);
    }

    :host [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: var(--lumo-space-m);
    }

    /* Centered */

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:first-of-type) {
      margin-inline-start: auto;
    }

    :host([theme~='centered'][orientation='horizontal']) ::slotted(vaadin-tab:last-of-type) {
      margin-inline-end: auto;
    }

    /* Small */

    :host([theme~='small']),
    :host([theme~='small']) [part='tabs'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='small']) [part='tabs'] ::slotted(vaadin-tab) {
      font-size: var(--lumo-font-size-s);
    }

    /* Minimal */

    :host([theme~='minimal']) {
      box-shadow: none;
      --_lumo-tab-marker-display: none;
    }

    /* Hide-scroll-buttons */

    :host([theme~='hide-scroll-buttons']) [part='back-button'],
    :host([theme~='hide-scroll-buttons']) [part='forward-button'] {
      display: none;
    }

    /* prettier-ignore */
    :host([theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(90deg, transparent, #000 2em);
    }

    /* Equal-width tabs */
    :host([theme~='equal-width-tabs']) {
      flex: auto;
    }

    :host([theme~='equal-width-tabs']) [part='tabs'] ::slotted(vaadin-tab) {
      flex: 1 0 0%;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='forward-button']::after {
      content: var(--lumo-icons-angle-left);
    }

    :host([dir='rtl']) [part='back-button']::after {
      content: var(--lumo-icons-angle-right);
    }

    :host([orientation='vertical'][dir='rtl']) {
      box-shadow: 1px 0 0 0 var(--lumo-contrast-10pct);
    }

    :host([dir='rtl']) [part='forward-button'] {
      left: 0;
    }

    :host([dir='rtl']) [part='tabs'] ::slotted(:not(vaadin-tab)) {
      margin-left: 0;
      margin-right: var(--lumo-space-m);
    }

    /* Both ends overflowing */
    :host([dir='rtl'][overflow~='start'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent 2em,
        #000 4em,
        #000 calc(100% - 4em),
        transparent calc(100% - 2em)
      );
    }

    /* End overflowing */
    :host([dir='rtl'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 4em), transparent calc(100% - 2em));
    }

    /* Start overflowing */
    :host([dir='rtl'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent 2em, #000 4em);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start'][overflow~='end']:not([orientation='vertical']))
      [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(
        -90deg,
        transparent,
        #000 2em,
        #000 calc(100% - 2em),
        transparent 100%
      );
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='end']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, #000 calc(100% - 2em), transparent 100%);
    }

    :host([dir='rtl'][theme~='hide-scroll-buttons'][overflow~='start']:not([orientation='vertical'])) [part='tabs'] {
      --_lumo-tabs-overflow-mask-image: linear-gradient(-90deg, transparent, #000 2em);
    }
  `,{moduleId:"lumo-tabs"});a(163);var r=a(46),n=a(8),o=a(11),s=a(59),l=a(129);
/**
 * @license
 * Copyright (c) 2017 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class d extends(Object(s.a)(Object(o.a)(Object(l.a)(Object(i.a)(n.a))))){static get template(){return n.b`
      <style>
        :host {
          display: flex;
          align-items: center;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([orientation='vertical']) {
          display: block;
        }

        :host([orientation='horizontal']) [part='tabs'] {
          flex-grow: 1;
          display: flex;
          align-self: stretch;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }

        /* This seems more future-proof than \`overflow: -moz-scrollbars-none\` which is marked obsolete
         and is no longer guaranteed to work:
         https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#Mozilla_Extensions */
        @-moz-document url-prefix() {
          :host([orientation='horizontal']) [part='tabs'] {
            overflow: hidden;
          }
        }

        :host([orientation='horizontal']) [part='tabs']::-webkit-scrollbar {
          display: none;
        }

        :host([orientation='vertical']) [part='tabs'] {
          height: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        [part='back-button'],
        [part='forward-button'] {
          pointer-events: none;
          opacity: 0;
          cursor: default;
        }

        :host([overflow~='start']) [part='back-button'],
        :host([overflow~='end']) [part='forward-button'] {
          pointer-events: auto;
          opacity: 1;
        }

        [part='back-button']::after {
          content: '◀';
        }

        [part='forward-button']::after {
          content: '▶';
        }

        :host([orientation='vertical']) [part='back-button'],
        :host([orientation='vertical']) [part='forward-button'] {
          display: none;
        }

        /* RTL specific styles */

        :host([dir='rtl']) [part='back-button']::after {
          content: '▶';
        }

        :host([dir='rtl']) [part='forward-button']::after {
          content: '◀';
        }
      </style>
      <div on-click="_scrollBack" part="back-button" aria-hidden="true"></div>

      <div id="scroll" part="tabs">
        <slot></slot>
      </div>

      <div on-click="_scrollForward" part="forward-button" aria-hidden="true"></div>
    `}static get is(){return"vaadin-tabs"}static get properties(){return{orientation:{value:"horizontal",type:String},selected:{value:0,type:Number}}}static get observers(){return["__tabsItemsChanged(items, items.*)"]}constructor(){super(),this.__itemsResizeObserver=new ResizeObserver(()=>{setTimeout(()=>this._updateOverflow())})}ready(){super.ready(),this._scrollerElement.addEventListener("scroll",()=>this._updateOverflow()),this.setAttribute("role","tablist"),Object(r.a)(this,()=>{this._updateOverflow()})}_onResize(){this._updateOverflow()}__tabsItemsChanged(e){this.__itemsResizeObserver.disconnect(),(e||[]).forEach(e=>{this.__itemsResizeObserver.observe(e)}),this._updateOverflow()}_scrollForward(){this._scroll(-this.__direction*this._scrollOffset)}_scrollBack(){this._scroll(this.__direction*this._scrollOffset)}get _scrollOffset(){return this._vertical?this._scrollerElement.offsetHeight:this._scrollerElement.offsetWidth}get _scrollerElement(){return this.$.scroll}get __direction(){return this._vertical||"rtl"!==this.getAttribute("dir")?-1:1}_updateOverflow(){const e=this._vertical?this._scrollerElement.scrollTop:this.__getNormalizedScrollLeft(this._scrollerElement),t=this._vertical?this._scrollerElement.scrollHeight:this._scrollerElement.scrollWidth;let a=e>0?"start":"";a+=e+this._scrollOffset<t?" end":"",1===this.__direction&&(a=a.replace(/start|end/gi,e=>"start"===e?"end":"start")),a?this.setAttribute("overflow",a.trim()):this.removeAttribute("overflow")}}customElements.define(d.is,d)},function(e,t,a){"use strict";a(18),a(10),a(13),a(9),a(12),a(14),a(55),a(181);var i=a(60),r=a(7);Object(r.d)("vaadin-upload",r.c`
    :host {
      line-height: var(--lumo-line-height-m);
    }

    :host(:not([nodrop])) {
      overflow: hidden;
      border: 1px dashed var(--lumo-contrast-20pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-m);
      transition: background-color 0.6s, border-color 0.6s;
    }

    [part='primary-buttons'] > * {
      display: inline-block;
      white-space: nowrap;
    }

    [part='drop-label'] {
      display: inline-block;
      white-space: normal;
      padding: 0 var(--lumo-space-s);
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
    }

    :host([dragover-valid]) {
      border-color: var(--lumo-primary-color-50pct);
      background: var(--lumo-primary-color-10pct);
      transition: background-color 0.1s, border-color 0.1s;
    }

    :host([dragover-valid]) [part='drop-label'] {
      color: var(--lumo-primary-text-color);
    }

    :host([max-files-reached]) [part='drop-label'] {
      color: var(--lumo-disabled-text-color);
    }

    [part='drop-label-icon'] {
      display: inline-block;
    }

    [part='drop-label-icon']::before {
      content: var(--lumo-icons-upload);
      font-family: lumo-icons;
      font-size: var(--lumo-icon-size-m);
      line-height: 1;
      vertical-align: -0.25em;
    }

    [part='file-list'] > *:not(:first-child) > * {
      border-top: 1px solid var(--lumo-contrast-10pct);
    }
  `,{moduleId:"lumo-upload"});const n=r.c`
  :host {
    padding: var(--lumo-space-s) 0;
    outline: none;
  }

  :host([focus-ring]) [part='row'] {
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part='row'] {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  [part='status'],
  [part='error'] {
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-s);
  }

  [part='info'] {
    display: flex;
    align-items: baseline;
    flex: auto;
  }

  [part='meta'] {
    width: 0.001px;
    flex: 1 1 auto;
  }

  [part='name'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [part='commands'] {
    display: flex;
    align-items: baseline;
    flex: none;
  }

  [part$='icon'] {
    margin-right: var(--lumo-space-xs);
    font-size: var(--lumo-icon-size-m);
    font-family: 'lumo-icons';
    line-height: 1;
  }

  /* When both icons are hidden, let us keep space for one */
  [part='done-icon'][hidden] + [part='warning-icon'][hidden] {
    display: block !important;
    visibility: hidden;
  }

  [part$='button'] {
    flex: none;
    margin-left: var(--lumo-space-xs);
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:focus {
    outline: none;
    border-radius: var(--lumo-border-radius-s);
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  [part$='icon']::before,
  [part$='button']::before {
    vertical-align: -0.25em;
  }

  [part='done-icon']::before {
    content: var(--lumo-icons-checkmark);
    color: var(--lumo-primary-text-color);
  }

  [part='warning-icon']::before {
    content: var(--lumo-icons-error);
    color: var(--lumo-error-text-color);
  }

  [part='start-button']::before {
    content: var(--lumo-icons-play);
  }

  [part='retry-button']::before {
    content: var(--lumo-icons-reload);
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  [part='error'] {
    color: var(--lumo-error-text-color);
  }

  [part='progress'] {
    width: auto;
    margin-left: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
    margin-right: calc(var(--lumo-icon-size-m) + var(--lumo-space-xs));
  }

  [part='progress'][complete],
  [part='progress'][error] {
    display: none;
  }
`;Object(r.d)("vaadin-upload-file",[i.a,n],{moduleId:"lumo-upload-file"});a(65),a(36),a(165),a(164);var o=a(8),s=a(147),l=a(23),d=a(11);
/**
 * @license
 * Copyright (c) 2016 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class c extends(Object(d.a)(Object(r.a)(o.a))){static get template(){return o.b`
      <style>
        :host {
          display: block;
          position: relative;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        [hidden] {
          display: none !important;
        }

        [part='file-list'] {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      </style>

      <div part="primary-buttons">
        <div id="addFiles" on-touchend="_onAddFilesTouchEnd" on-click="_onAddFilesClick">
          <slot name="add-button">
            <vaadin-button part="upload-button" id="addButton" disabled="[[maxFilesReached]]">
              [[_i18nPlural(maxFiles, i18n.addFiles, i18n.addFiles.*)]]
            </vaadin-button>
          </slot>
        </div>
        <div part="drop-label" hidden$="[[nodrop]]" id="dropLabelContainer" aria-hidden="true">
          <slot name="drop-label-icon">
            <div part="drop-label-icon"></div>
          </slot>
          <slot name="drop-label" id="dropLabel"> [[_i18nPlural(maxFiles, i18n.dropFiles, i18n.dropFiles.*)]] </slot>
        </div>
      </div>
      <slot name="file-list">
        <ul id="fileList" part="file-list">
          <template is="dom-repeat" items="[[files]]" as="file">
            <li>
              <vaadin-upload-file file="[[file]]" i18n="[[i18n]]"></vaadin-upload-file>
            </li>
          </template>
        </ul>
      </slot>
      <slot></slot>
      <input
        type="file"
        id="fileInput"
        hidden
        on-change="_onFileInputChange"
        accept$="{{accept}}"
        multiple$="[[_isMultiple(maxFiles)]]"
        capture$="[[capture]]"
      />
    `}static get is(){return"vaadin-upload"}static get properties(){return{nodrop:{type:Boolean,reflectToAttribute:!0,value:l.f},target:{type:String,value:""},method:{type:String,value:"POST"},headers:{type:Object,value:{}},timeout:{type:Number,value:0},_dragover:{type:Boolean,value:!1,observer:"_dragoverChanged"},files:{type:Array,notify:!0,value:()=>[]},maxFiles:{type:Number,value:1/0},maxFilesReached:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0,computed:"_maxFilesAdded(maxFiles, files.length)"},accept:{type:String,value:""},maxFileSize:{type:Number,value:1/0},_dragoverValid:{type:Boolean,value:!1,observer:"_dragoverValidChanged"},formDataName:{type:String,value:"file"},noAuto:{type:Boolean,value:!1},withCredentials:{type:Boolean,value:!1},capture:String,i18n:{type:Object,value:()=>({dropFiles:{one:"Drop file here",many:"Drop files here"},addFiles:{one:"Upload File...",many:"Upload Files..."},error:{tooManyFiles:"Too Many Files.",fileIsTooBig:"File is Too Big.",incorrectFileType:"Incorrect File Type."},uploading:{status:{connecting:"Connecting...",stalled:"Stalled",processing:"Processing File...",held:"Queued"},remainingTime:{prefix:"remaining time: ",unknown:"unknown remaining time"},error:{serverUnavailable:"Upload failed, please try again later",unexpectedServerError:"Upload failed due to server error",forbidden:"Upload forbidden"}},file:{retry:"Retry",start:"Start",remove:"Remove"},units:{size:["B","kB","MB","GB","TB","PB","EB","ZB","YB"]}})}}}ready(){super.ready(),this.addEventListener("dragover",this._onDragover.bind(this)),this.addEventListener("dragleave",this._onDragleave.bind(this)),this.addEventListener("drop",this._onDrop.bind(this)),this.addEventListener("file-retry",this._onFileRetry.bind(this)),this.addEventListener("file-abort",this._onFileAbort.bind(this)),this.addEventListener("file-remove",this._onFileRemove.bind(this)),this.addEventListener("file-start",this._onFileStart.bind(this)),this.addEventListener("file-reject",this._onFileReject.bind(this)),this.addEventListener("upload-start",this._onUploadStart.bind(this)),this.addEventListener("upload-success",this._onUploadSuccess.bind(this)),this.addEventListener("upload-error",this._onUploadError.bind(this))}_formatSize(e){if("function"==typeof this.i18n.formatSize)return this.i18n.formatSize(e);const t=this.i18n.units.sizeBase||1e3,a=~~(Math.log(e)/Math.log(t)),i=Math.max(0,Math.min(3,a-1));return`${parseFloat((e/t**a).toFixed(i))} ${this.i18n.units.size[a]}`}_splitTimeByUnits(e){const t=[60,60,24,1/0],a=[0];for(let i=0;i<t.length&&e>0;i++)a[i]=e%t[i],e=Math.floor(e/t[i]);return a}_formatTime(e,t){if("function"==typeof this.i18n.formatTime)return this.i18n.formatTime(e,t);for(;t.length<3;)t.push(0);return t.reverse().map(e=>(e<10?"0":"")+e).join(":")}_formatFileProgress(e){const t=e.loaded>0?this.i18n.uploading.remainingTime.prefix+e.remainingStr:this.i18n.uploading.remainingTime.unknown;return`${e.totalStr}: ${e.progress}% (${t})`}_maxFilesAdded(e,t){return e>=0&&t>=e}_onDragover(e){e.preventDefault(),this.nodrop||this._dragover||(this._dragoverValid=!this.maxFilesReached,this._dragover=!0),e.dataTransfer.dropEffect=!this._dragoverValid||this.nodrop?"none":"copy"}_onDragleave(e){e.preventDefault(),this._dragover&&!this.nodrop&&(this._dragover=this._dragoverValid=!1)}_onDrop(e){this.nodrop||(e.preventDefault(),this._dragover=this._dragoverValid=!1,this._addFiles(e.dataTransfer.files))}_createXhr(){return new XMLHttpRequest}_configureXhr(e){if("string"==typeof this.headers)try{this.headers=JSON.parse(this.headers)}catch(e){this.headers=void 0}for(const t in this.headers)e.setRequestHeader(t,this.headers[t]);this.timeout&&(e.timeout=this.timeout),e.withCredentials=this.withCredentials}_setStatus(e,t,a,i){e.elapsed=i,e.elapsedStr=this._formatTime(e.elapsed,this._splitTimeByUnits(e.elapsed)),e.remaining=Math.ceil(i*(t/a-1)),e.remainingStr=this._formatTime(e.remaining,this._splitTimeByUnits(e.remaining)),e.speed=~~(t/i/1024),e.totalStr=this._formatSize(t),e.loadedStr=this._formatSize(a),e.status=this._formatFileProgress(e)}uploadFiles(e){e&&!Array.isArray(e)&&(e=[e]),e=(e=e||this.files).filter(e=>!e.complete),Array.prototype.forEach.call(e,this._uploadFile.bind(this))}_uploadFile(e){if(e.uploading)return;const t=Date.now(),a=e.xhr=this._createXhr();let i,r;a.upload.onprogress=n=>{clearTimeout(i),r=Date.now();const o=(r-t)/1e3,s=n.loaded,l=n.total,d=~~(s/l*100);e.loaded=s,e.progress=d,e.indeterminate=s<=0||s>=l,e.error?e.indeterminate=e.status=void 0:e.abort||(d<100?(this._setStatus(e,l,s,o),i=setTimeout(()=>{e.status=this.i18n.uploading.status.stalled,this._notifyFileChanges(e)},2e3)):(e.loadedStr=e.totalStr,e.status=this.i18n.uploading.status.processing)),this._notifyFileChanges(e),this.dispatchEvent(new CustomEvent("upload-progress",{detail:{file:e,xhr:a}}))},a.onreadystatechange=()=>{if(4===a.readyState){if(clearTimeout(i),e.indeterminate=e.uploading=!1,e.abort)return void this._notifyFileChanges(e);e.status="";if(!this.dispatchEvent(new CustomEvent("upload-response",{detail:{file:e,xhr:a},cancelable:!0})))return;0===a.status?e.error=this.i18n.uploading.error.serverUnavailable:a.status>=500?e.error=this.i18n.uploading.error.unexpectedServerError:a.status>=400&&(e.error=this.i18n.uploading.error.forbidden),e.complete=!e.error,this.dispatchEvent(new CustomEvent("upload-"+(e.error?"error":"success"),{detail:{file:e,xhr:a}})),this._notifyFileChanges(e)}};const n=new FormData;e.uploadTarget=e.uploadTarget||this.target||"",e.formDataName=this.formDataName;if(!this.dispatchEvent(new CustomEvent("upload-before",{detail:{file:e,xhr:a},cancelable:!0})))return;n.append(e.formDataName,e,e.name),a.open(this.method,e.uploadTarget,!0),this._configureXhr(a),e.status=this.i18n.uploading.status.connecting,e.uploading=e.indeterminate=!0,e.complete=e.abort=e.error=e.held=!1,a.upload.onloadstart=()=>{this.dispatchEvent(new CustomEvent("upload-start",{detail:{file:e,xhr:a}})),this._notifyFileChanges(e)};this.dispatchEvent(new CustomEvent("upload-request",{detail:{file:e,xhr:a,formData:n},cancelable:!0}))&&a.send(n)}_retryFileUpload(e){this.dispatchEvent(new CustomEvent("upload-retry",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&this._uploadFile(e)}_abortFileUpload(e){this.dispatchEvent(new CustomEvent("upload-abort",{detail:{file:e,xhr:e.xhr},cancelable:!0}))&&(e.abort=!0,e.xhr&&e.xhr.abort(),this._notifyFileChanges(e))}_notifyFileChanges(e){const t=`files.${this.files.indexOf(e)}.`;for(const a in e)e.hasOwnProperty(a)&&this.notifyPath(t+a,e[a])}_addFiles(e){Array.prototype.forEach.call(e,this._addFile.bind(this))}_addFile(e){if(this.maxFilesReached)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.tooManyFiles}}));if(this.maxFileSize>=0&&e.size>this.maxFileSize)return void this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.fileIsTooBig}}));const t=e.name.match(/\.[^.]*$|$/)[0],a=new RegExp(`^(${this.accept.replace(/[, ]+/g,"|").replace(/\/\*/g,"/.*")})$`,"i");!this.accept||a.test(e.type)||a.test(t)?(e.loaded=0,e.held=!0,e.status=this.i18n.uploading.status.held,this.files=[e,...this.files],this.noAuto||this._uploadFile(e)):this.dispatchEvent(new CustomEvent("file-reject",{detail:{file:e,error:this.i18n.error.incorrectFileType}}))}_removeFile(e){this.files.indexOf(e)>-1&&(this.files=this.files.filter(t=>t!==e))}_onAddFilesTouchEnd(e){e.preventDefault(),this._onAddFilesClick(e)}_onAddFilesClick(e){this.maxFilesReached||(e.stopPropagation(),this.$.fileInput.value="",this.$.fileInput.click())}_onFileInputChange(e){this._addFiles(e.target.files)}_onFileStart(e){this._uploadFile(e.detail.file)}_onFileRetry(e){this._retryFileUpload(e.detail.file)}_onFileAbort(e){this._abortFileUpload(e.detail.file)}_onFileRemove(e){this._removeFile(e.detail.file)}_onFileReject(e){Object(s.a)(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_onUploadStart(e){Object(s.a)(e.detail.file.name+": 0%",{mode:"alert"})}_onUploadSuccess(e){Object(s.a)(e.detail.file.name+": 100%",{mode:"alert"})}_onUploadError(e){Object(s.a)(`${e.detail.file.name}: ${e.detail.file.error}`,{mode:"alert"})}_dragoverChanged(e){e?this.setAttribute("dragover",e):this.removeAttribute("dragover")}_dragoverValidChanged(e){e?this.setAttribute("dragover-valid",e):this.removeAttribute("dragover-valid")}_i18nPlural(e,t){return 1===e?t.one:t.many}_isMultiple(e){return 1!==e}}customElements.define(c.is,c)},function(e,t,a){"use strict";var i=a(8),r=a(11),n=a(43),o=a(107),s=a(7);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class l extends(Object(r.a)(Object(s.a)(i.a))){static get template(){return i.b`
      <style>
        :host {
          display: block;
          height: 400px;
          overflow: auto;
          flex: auto;
          align-self: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host(:not([grid])) #items > ::slotted(*) {
          width: 100%;
        }
      </style>

      <div id="items">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-virtual-list"}static get properties(){return{items:{type:Array},renderer:Function,__virtualizer:Object}}static get observers(){return["__itemsOrRendererChanged(items, renderer, __virtualizer)"]}ready(){super.ready(),this.__virtualizer=new o.a({createElements:this.__createElements,updateElement:this.__updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.shadowRoot.querySelector("#items")}),Object(n.a)(this)}scrollToIndex(e){this.__virtualizer.scrollToIndex(e)}__createElements(e){return[...Array(e)].map(()=>document.createElement("div"))}__updateElement(e,t){e.__renderer!==this.renderer&&(e.__renderer=this.renderer,this.__clearRenderTargetContent(e)),this.renderer&&this.renderer(e,this,{item:this.items[t],index:t})}__clearRenderTargetContent(e){e.innerHTML="",delete e._$litPart$}__itemsOrRendererChanged(e,t,a){const i=this.childElementCount>0;(t||i)&&a&&(a.size=(e||[]).length,a.update())}get firstVisibleIndex(){return this.__virtualizer.firstVisibleIndex}get lastVisibleIndex(){return this.__virtualizer.lastVisibleIndex}requestContentUpdate(){this.__virtualizer&&this.__virtualizer.update()}}customElements.define(l.is,l)},,,,function(e,t,a){"use strict";a(156);var i=a(19),r=a(8),n=a(23),o=a(11),s=a(28),l=a(62),d=a(7);
/**
 * @license
 * Copyright (c) 2019 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class c extends(Object(l.a)(Object(s.a)(Object(d.a)(Object(o.a)(r.a))))){static get is(){return"vaadin-custom-field"}static get template(){return r.b`
      <style>
        :host {
          display: inline-flex;
        }

        :host::before {
          content: '\\2003';
          width: 0;
          display: inline-block;
          /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
        }

        :host([hidden]) {
          display: none !important;
        }

        .vaadin-custom-field-container {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .inputs-wrapper {
          flex: none;
        }
      </style>

      <div class="vaadin-custom-field-container">
        <div part="label" on-click="focus">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true"></span>
        </div>

        <div class="inputs-wrapper" on-change="__onInputChange">
          <slot id="slot"></slot>
        </div>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
    `}static get properties(){return{name:String,value:{type:String,observer:"__valueChanged",notify:!0},inputs:{type:Array,readOnly:!0},i18n:{type:Object,value:()=>({parseValue:e=>e.split("\t"),formatValue:e=>e.join("\t")})}}}connectedCallback(){super.connectedCallback(),this.__observer&&this.__observer.connect()}disconnectedCallback(){super.disconnectedCallback(),this.__observer&&this.__observer.disconnect()}ready(){super.ready(),this.setAttribute("role","group"),this.ariaTarget=this,this.__setInputsFromSlot(),this.__observer=new i.a(this.$.slot,()=>{this.__setInputsFromSlot()}),this.__fixChromeFocus()}focus(){this.inputs&&this.inputs[0]&&this.inputs[0].focus()}_setFocused(e){super._setFocused(e),e||this.validate()}_shouldRemoveFocus(e){const{relatedTarget:t}=e;return!this.inputs.some(e=>t===(e.focusElement||e))}checkValidity(){return!(this.inputs.filter(e=>!(e.validate||e.checkValidity).call(e)).length||this.required&&!this.value.trim())}__fixChromeFocus(){this.addEventListener("keydown",e=>{if(9===e.keyCode){if("slot"===e.target.parentElement.localName&&!e.defaultPrevented&&n.b){const t=e.target.parentElement;t.setAttribute("tabindex",-1),setTimeout(()=>t.removeAttribute("tabindex"))}this.inputs.indexOf(e.target)<this.inputs.length-1&&!e.shiftKey||this.inputs.indexOf(e.target)>0&&e.shiftKey?this.dispatchEvent(new CustomEvent("internal-tab")):this.__setValue()}})}__onInputChange(e){e.stopPropagation(),this.__setValue(),this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1,detail:{value:this.value}}))}__setValue(){this.__settingValue=!0,this.value=this.i18n.formatValue.apply(this,[this.inputs.map(e=>e.value)]),this.__settingValue=!1}__queryAllAssignedElements(e){const t=[];let a;return"SLOT"===e.tagName?a=e.assignedElements({flatten:!0}):(t.push(e),a=Array.from(e.children)),a.forEach(e=>t.push(...this.__queryAllAssignedElements(e))),t}__isInput(e){return!("input"===e.getAttribute("slot")||"textarea"===e.getAttribute("slot"))&&(e.validate||e.checkValidity)}__getInputsFromSlot(){return this.__queryAllAssignedElements(this.$.slot).filter(e=>this.__isInput(e))}__setInputsFromSlot(){this._setInputs(this.__getInputsFromSlot()),this.__setValue()}__toggleHasValue(e){this.toggleAttribute("has-value",null!==e&&""!==e.trim())}__valueChanged(e,t){if(this.__settingValue||!this.inputs)return;this.__toggleHasValue(e);const a=this.i18n.parseValue(e);a&&0!==a.length?(this.inputs.forEach((e,t)=>e.value=a[t]),void 0!==t&&this.validate()):console.warn("Value parser has not provided values array")}}customElements.define(c.is,c)},function(e,t,a){"use strict";a(179);var i=a(161);
/**
 * @license
 * Copyright (c) 2021 - 2022 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class r extends i.a{static get is(){return"vaadin-integer-field"}static get properties(){return{_enabledCharPattern:{value:"[-+\\d]"}}}_valueChanged(e,t){if(""!==e&&!this.__isInteger(e))return console.warn(`Trying to set non-integer value "${e}" to <vaadin-integer-field>. Clearing the value.`),void(this.value="");super._valueChanged(e,t)}_stepChanged(e,t){if(!this.__hasOnlyDigits(e))return console.warn(`Trying to set invalid step size "${e}", which is not a positive integer, to <vaadin-integer-field>. Resetting the default value 1.`),void(this.step=1);super._stepChanged(e,t)}__isInteger(e){return/^(-\d)?\d*$/.test(String(e))}__hasOnlyDigits(e){return/^\d*$/.test(String(e))}}customElements.define(r.is,r)}]]);