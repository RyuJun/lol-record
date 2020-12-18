(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{163:function(t,e,n){"use strict";n.r(e);var o={name:"Index",components:{},data:function(){return{isPagesMenuOpen:!1,isProfileMenuOpen:!1,isNotificationsMenuOpen:!1}},computed:{getTheme:function(){return this.$store.state.common.theme}},created:function(){},methods:{togglePagesMenu:function(){this.isPagesMenuOpen=!this.isPagesMenuOpen},toggleProfileMenu:function(){this.isProfileMenuOpen=!this.isProfileMenuOpen},closeProfileMenu:function(){this.isProfileMenuOpen=!1},toggleNotificationsMenu:function(){this.isNotificationsMenuOpen=!this.isNotificationsMenuOpen},closeNotificationsMenu:function(){},toggleTheme:function(t){this.$store.commit("common/setTheme")}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"h-full overflow-y-auto"},[n("div",{staticClass:"container grid px-6 mx-auto"},[n("h2",{staticClass:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},[t._v("\n      Buttons\n    ")]),t._v(" "),n("a",{staticClass:"flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple",attrs:{href:"https://github.com/estevanmaito/windmill-dashboard"}},[n("div",{staticClass:"flex items-center"},[n("svg",{staticClass:"w-5 h-5 mr-2",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})]),t._v(" "),n("span",[t._v("Star this project on GitHub")])]),t._v(" "),n("span",[t._v("View more →")])]),t._v(" "),n("h4",{staticClass:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},[t._v("\n      Sizes\n    ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("h4",{staticClass:"mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300"},[t._v("\n      Icons\n    ")]),t._v(" "),n("div",{staticClass:"flex flex-col flex-wrap mb-8 space-y-4 md:flex-row md:items-end md:space-x-4"},[n("div",[n("button",{staticClass:"flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"},[n("span",[t._v("Icon right")]),t._v(" "),n("svg",{staticClass:"w-4 h-4 ml-2 -mr-1",attrs:{fill:"currentColor","aria-hidden":"true",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd","fill-rule":"evenodd"}})])])]),t._v(" "),n("div",[n("button",{staticClass:"flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"},[n("svg",{staticClass:"w-4 h-4 mr-2 -ml-1",attrs:{fill:"currentColor","aria-hidden":"true",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd","fill-rule":"evenodd"}})]),t._v(" "),n("span",[t._v("Icon left")])])]),t._v(" "),n("div",[n("button",{staticClass:"flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple",attrs:{"aria-label":"Like"}},[n("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clip-rule":"evenodd","fill-rule":"evenodd"}})])])]),t._v(" "),n("div",[n("button",{staticClass:"flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-full active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple",attrs:{"aria-label":"Edit"}},[n("svg",{staticClass:"w-5 h-5",attrs:{"aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"}})])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col flex-wrap mb-4 space-y-4 md:flex-row md:items-end md:space-x-4"},[n("div",[n("button",{staticClass:"px-10 py-4 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"},[t._v("\n          Larger button\n        ")])]),t._v(" "),n("div",[n("button",{staticClass:"px-5 py-3 font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"},[t._v("\n          Large button\n        ")])]),t._v(" "),n("div",[n("button",{staticClass:"px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"},[t._v("\n          Regular\n        ")])]),t._v(" "),n("div",[n("button",{staticClass:"px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg opacity-50 cursor-not-allowed focus:outline-none"},[t._v("\n          Disabled\n        ")])]),t._v(" "),n("div",[n("button",{staticClass:"px-3 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"},[t._v("\n          Small\n        ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-8 text-gray-700 dark:text-gray-400"},[this._v("\n      Apply\n      "),e("code",[this._v("w-full")]),this._v("\n      to any button to create a block level button.\n    ")])}],!1,null,null,null);e.default=component.exports}}]);