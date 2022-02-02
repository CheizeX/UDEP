"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ GlobalStyles)
});

// UNUSED EXPORTS: bodyStyles

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./src/components/shared/global/Reset.tsx

const Reset_reset = (0,external_styled_components_.css)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}*[hidden]{display:none;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}a{text-decoration:none;color:inherit;}button{border:none;margin:0;padding:0;width:auto;overflow:visible;background:transparent;color:inherit;font:inherit;text-align:inherit;outline:none;line-height:inherit;-webkit-appearance:none;}*,*:before,*:after{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}*,*:before,*:after{user-select:none;}p,h1,h2,h3,h4,h5,h6,blockquote,pre,ul,ol,li,table,tr,th,td,input,textarea{user-select:text;}"]);
;// CONCATENATED MODULE: ./src/components/shared/global/GlobalStyles.tsx


const bodyStyles = (0,external_styled_components_.css)(["font-family:'Poppins',sans-serif;min-height:100vh;"]);
const GlobalStyles = (0,external_styled_components_.createGlobalStyle)(["", " body,#__next{", "}"], Reset_reset, bodyStyles);

/***/ }),

/***/ 5427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ ShowToast)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/shared/molecules/Toast/useToast.tsx
var useToast = __webpack_require__(9713);
// EXTERNAL MODULE: ./src/components/shared/molecules/Toast/Toast.interface.ts
var Toast_interface = __webpack_require__(2025);
// EXTERNAL MODULE: ./src/components/shared/atoms/SVGIcon/SVGIcon.tsx
var SVGIcon = __webpack_require__(1195);
// EXTERNAL MODULE: ./src/components/shared/atoms/Text/Text.tsx
var Text = __webpack_require__(9847);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/shared/molecules/Toast/ToastContainer.styled.tsx


const StyledToastsContainer = external_styled_components_default().div.withConfig({
  displayName: "ToastContainerstyled__StyledToastsContainer",
  componentId: "sc-dbn8vh-0"
})(["position:absolute;top:30px;left:30px;width:100vw;height:0px;z-index:3;display:flex;flex-direction:column;transition:all 2s ease-in-out;"]);
const fadeIn = (0,external_styled_components_.keyframes)(["from{left:100vw;}to{left:0px;}"]);
const StyledToast = external_styled_components_default().div.withConfig({
  displayName: "ToastContainerstyled__StyledToast",
  componentId: "sc-dbn8vh-1"
})(["width:352px;height:88px;display:flex;position:relative;", " ", " ", "   box-sizing:border-box;box-shadow:0 2px 5px rgba(0,0,0,0.25);border-radius:10px;margin-bottom:10px;padding:16px 0px 18px 22px;animation:", " 0.3s ease-in;& > button{width:10px;height:10px;cursor:pointer;padding-left:16px;div{width:10px;height:10px;padding:0px;div{width:10px;height:10px;padding:0px;}}}"], ({
  alert,
  theme
}) => alert === Toast_interface/* Toast.SUCCESS */.F.SUCCESS ? `background: ${theme.Colors.green[3]};` : null, ({
  alert,
  theme
}) => alert === Toast_interface/* Toast.WARNING */.F.WARNING ? `background: ${theme.Colors.orange[3]};` : null, ({
  alert,
  theme
}) => alert === Toast_interface/* Toast.ERROR */.F.ERROR ? `background: ${theme.Colors.orange[2]};` : null, fadeIn);
const Icon = external_styled_components_default().div.withConfig({
  displayName: "ToastContainerstyled__Icon",
  componentId: "sc-dbn8vh-2"
})(["padding:5px 0px 6px 0px;div{width:39px;height:39px;padding:0px;div{width:39px;height:39px;padding:0px;}}"]);
const Title = external_styled_components_default().div.withConfig({
  displayName: "ToastContainerstyled__Title",
  componentId: "sc-dbn8vh-3"
})(["padding:0px;height:16px;span{line-height:17px;}"]);
const Message = external_styled_components_default().div.withConfig({
  displayName: "ToastContainerstyled__Message",
  componentId: "sc-dbn8vh-4"
})(["padding:4px 0px 18px 0px;height:30px;width:244px;span{line-height:14px;}"]);
const Wraper = external_styled_components_default().div.withConfig({
  displayName: "ToastContainerstyled__Wraper",
  componentId: "sc-dbn8vh-5"
})(["display:inline;width:242px;padding:0 0 0 20px;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/shared/molecules/Toast/ToastContainer.tsx








const ShowToast = () => {
  const notification = (0,useToast/* useToastContext */.V)();
  return /*#__PURE__*/jsx_runtime_.jsx(StyledToastsContainer, {
    children: notification && notification.toasts.map((toast, id) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(StyledToast, {
      alert: toast.alert,
      children: [toast.alert === Toast_interface/* Toast.SUCCESS */.F.SUCCESS ? /*#__PURE__*/jsx_runtime_.jsx(Icon, {
        children: /*#__PURE__*/jsx_runtime_.jsx(SVGIcon/* SVGIcon */.q, {
          iconFile: "/icons/success.svg"
        })
      }) : null, toast.alert === Toast_interface/* Toast.WARNING */.F.WARNING ? /*#__PURE__*/jsx_runtime_.jsx(Icon, {
        children: /*#__PURE__*/jsx_runtime_.jsx(SVGIcon/* SVGIcon */.q, {
          iconFile: "/icons/warning.svg"
        })
      }) : null, toast.alert === Toast_interface/* Toast.ERROR */.F.ERROR ? /*#__PURE__*/jsx_runtime_.jsx(Icon, {
        children: /*#__PURE__*/jsx_runtime_.jsx(SVGIcon/* SVGIcon */.q, {
          iconFile: "/icons/danger.svg"
        })
      }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wraper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Text/* Text */.x, {
            size: "14px",
            children: toast.title
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Message, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Text/* Text */.x, {
            size: "12px",
            weight: "500",
            children: toast.message
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        onClick: () => notification === null || notification === void 0 ? void 0 : notification.clearToast(id),
        children: /*#__PURE__*/jsx_runtime_.jsx(SVGIcon/* SVGIcon */.q, {
          color: "#FFFF",
          iconFile: "/icons/times.svg"
        })
      })]
    }, toast.id))
  });
};

/***/ }),

/***/ 7600:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_shared_molecules_Toast_ToastContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7425);
/* harmony import */ var _components_shared_molecules_Toast_ToastContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5427);
/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8595);
/* harmony import */ var _themes_main_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(674);
/* harmony import */ var _components_shared_global_GlobalStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(265);
/* harmony import */ var _hooks_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7835);
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8512);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chat__WEBPACK_IMPORTED_MODULE_6__]);
_chat__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */















const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient();

const MyApp = ({
  Component,
  pageProps
}) => {
  (0,_hooks_auth__WEBPACK_IMPORTED_MODULE_9__/* .useAuth */ .a)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_chat__WEBPACK_IMPORTED_MODULE_6__/* .WebsocketProvider */ .V, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {
          store: _redux__WEBPACK_IMPORTED_MODULE_10__/* .store */ .h,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
            theme: _themes_main_theme__WEBPACK_IMPORTED_MODULE_7__/* .mainTheme */ .$,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_shared_molecules_Toast_ToastContext__WEBPACK_IMPORTED_MODULE_4__/* .ToastContextProvider */ .s, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_shared_molecules_Toast_ToastContainer__WEBPACK_IMPORTED_MODULE_5__/* .ShowToast */ .L, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_shared_global_GlobalStyles__WEBPACK_IMPORTED_MODULE_8__/* .GlobalStyles */ .n, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Component, _objectSpread({}, pageProps))]
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
});

/***/ }),

/***/ 8512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ store)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/redux/slices/users/user-management.ts
var user_management = __webpack_require__(1023);
// EXTERNAL MODULE: ./src/redux/slices/tags/tag-management.ts
var tag_management = __webpack_require__(1842);
// EXTERNAL MODULE: ./src/redux/slices/tags/tag-seleted-edit.ts
var tag_seleted_edit = __webpack_require__(8333);
// EXTERNAL MODULE: ./src/redux/slices/tags/tag-seleted-delete.ts
var tag_seleted_delete = __webpack_require__(8698);
// EXTERNAL MODULE: ./src/redux/slices/live-chat/pending-chats.ts
var pending_chats = __webpack_require__(708);
// EXTERNAL MODULE: ./src/redux/slices/live-chat/on-conversation-chats.ts
var on_conversation_chats = __webpack_require__(8177);
// EXTERNAL MODULE: ./src/redux/slices/live-chat/chat-selected-to-send-id.ts
var chat_selected_to_send_id = __webpack_require__(4278);
// EXTERNAL MODULE: ./src/redux/slices/live-chat/chat-selected-to-transfer-by-id.ts
var chat_selected_to_transfer_by_id = __webpack_require__(1340);
// EXTERNAL MODULE: ./src/redux/slices/live-chat/user-selected-to-transfer-by-id.ts
var user_selected_to_transfer_by_id = __webpack_require__(5774);
// EXTERNAL MODULE: ./src/redux/slices/auth/user-credentials.ts
var user_credentials = __webpack_require__(6175);
// EXTERNAL MODULE: ./src/redux/slices/users/user-seleted-name.ts
var user_seleted_name = __webpack_require__(5887);
;// CONCATENATED MODULE: ./src/redux/slices/users/user-container-tags.ts
/* eslint-disable no-param-reassign */

const initialState = {
  usersContainerTag: [],
  isLoanding: false,
  error: null
};
const userContainerTagStore = (0,toolkit_.createSlice)({
  name: 'userContainerTagState',
  initialState,
  reducers: {
    setLoanding: (state, {
      payload
    }) => {
      state.isLoanding = payload;
    },
    setDataInfoTag: (state, action) => {
      state.usersContainerTag = action.payload;
    }
  }
});
const {
  setDataInfoTag,
  setLoanding
} = userContainerTagStore.actions;
/* harmony default export */ const user_container_tags = (userContainerTagStore.reducer);
// EXTERNAL MODULE: ./src/redux/slices/users/user-seleted-email.ts
var user_seleted_email = __webpack_require__(3911);
// EXTERNAL MODULE: ./src/redux/slices/users/user-seleted-role.ts
var user_seleted_role = __webpack_require__(9826);
// EXTERNAL MODULE: ./src/redux/slices/users/user-seleted-edit.ts
var user_seleted_edit = __webpack_require__(6978);
// EXTERNAL MODULE: ./src/redux/slices/users/user-seleted-delete.ts
var user_seleted_delete = __webpack_require__(1008);
// EXTERNAL MODULE: ./src/redux/slices/onboarding/onboarding.ts
var onboarding = __webpack_require__(2085);
// EXTERNAL MODULE: ./src/redux/slices/onboarding/onboarding-create-account.ts
var onboarding_create_account = __webpack_require__(9441);
// EXTERNAL MODULE: ./src/redux/slices/users/user-update-container-tags.ts
var user_update_container_tags = __webpack_require__(3534);
// EXTERNAL MODULE: ./src/redux/slices/monitor/monitor-chats.ts
var monitor_chats = __webpack_require__(874);
// EXTERNAL MODULE: ./src/redux/slices/monitor/monitor-agents-not-available.ts
var monitor_agents_not_available = __webpack_require__(8940);
// EXTERNAL MODULE: ./src/redux/slices/monitor/monitor-agents-available.ts
var monitor_agents_available = __webpack_require__(5310);
// EXTERNAL MODULE: ./src/redux/slices/monitor/monitor-info-by-agent.ts
var monitor_info_by_agent = __webpack_require__(7479);
// EXTERNAL MODULE: ./src/redux/slices/dashboard/dashboard-chats-filter.ts
var dashboard_chats_filter = __webpack_require__(9715);
// EXTERNAL MODULE: ./src/redux/slices/monitor/monitor-all-agents.ts
var monitor_all_agents = __webpack_require__(7307);
// EXTERNAL MODULE: ./src/redux/slices/active-tab/active-tab.ts
var active_tab = __webpack_require__(390);
// EXTERNAL MODULE: ./src/redux/slices/live-chat/options-to-filter.ts
var options_to_filter = __webpack_require__(3596);
// EXTERNAL MODULE: ./src/redux/slices/reports/reports-management.ts
var reports_management = __webpack_require__(7349);
// EXTERNAL MODULE: ./src/redux/slices/reports/reports-data-agents.ts
var reports_data_agents = __webpack_require__(4429);
// EXTERNAL MODULE: ./src/redux/slices/dashboard/dashboard-review.ts
var dashboard_review = __webpack_require__(9619);
// EXTERNAL MODULE: ./src/redux/slices/monitor/count-agent.ts
var count_agent = __webpack_require__(8896);
// EXTERNAL MODULE: ./src/redux/slices/live-chat/chatset-on-conversation.ts
var chatset_on_conversation = __webpack_require__(2849);
// EXTERNAL MODULE: ./src/redux/slices/channels/auth-facebook.ts
var auth_facebook = __webpack_require__(6178);
// EXTERNAL MODULE: ./src/redux/slices/channels/integration-with-qr.ts
var integration_with_qr = __webpack_require__(9724);
// EXTERNAL MODULE: ./src/redux/slices/channels/list-channel.ts
var list_channel = __webpack_require__(8663);
// EXTERNAL MODULE: ./src/redux/slices/live-chat/chat-history.ts
var chat_history = __webpack_require__(2925);
// EXTERNAL MODULE: ./src/redux/slices/live-chat/chat-transfer.ts
var chat_transfer = __webpack_require__(1150);
;// CONCATENATED MODULE: ./src/redux/index.ts






































const liveChat = (0,toolkit_.combineReducers)({
  chatsPendings: pending_chats/* default */.ZP,
  chatsOnConversation: on_conversation_chats/* default */.ZP,
  chatSelectedToSendId: chat_selected_to_send_id/* default */.ZP,
  chatSelectedToTransferById: chat_selected_to_transfer_by_id/* default */.ZP,
  userSelectedToTransferById: user_selected_to_transfer_by_id/* default */.ZP,
  chatToSetOnConversationIdToState: chatset_on_conversation/* default */.ZP,
  chatsHistoryState: chat_history/* default */.ZP,
  chatsTodayTransferState: chat_transfer/* default */.ZP
});
const users = (0,toolkit_.combineReducers)({
  useQueryState: user_management/* default */.ZP,
  userByIdEditState: user_seleted_edit/* default */.ZP,
  userByInfoEmailState: user_seleted_email/* default */.ZP,
  currentByUserFirstNameState: user_seleted_name/* default */.ZP,
  userByIdDeleteState: user_seleted_delete/* default */.ZP,
  currentByUserRoleState: user_seleted_role/* default */.ZP,
  updateContainerTagState: user_update_container_tags/* default */.ZP,
  userContainerTagState: user_container_tags
});
const tags = (0,toolkit_.combineReducers)({
  tagsQueryState: tag_management/* default */.ZP,
  tagEditByIdState: tag_seleted_edit/* default */.ZP,
  tagDeleteByIdState: tag_seleted_delete/* default */.ZP
});
const redux_onboarding = (0,toolkit_.combineReducers)({
  onboardingState: onboarding/* default */.ZP,
  createAccountState: onboarding_create_account/* default */.ZP
});
const monitor = (0,toolkit_.combineReducers)({
  monitorTodayChatState: monitor_chats/* default */.ZP,
  monitorAgentsNotAvailableState: monitor_agents_not_available/* default */.ZP,
  monitorAgentsAvailableState: monitor_agents_available/* default */.ZP,
  monitorAllUserState: monitor_all_agents/* default */.ZP,
  monitorCountAgentsAvailableState: count_agent/* default */.ZP,
  infoByAgentState: monitor_info_by_agent/* default */.ZP
});
const reports = (0,toolkit_.combineReducers)({
  reportsQueryState: reports_management/* default */.ZP,
  reportsAgentsQueryState: reports_data_agents/* default */.ZP
});
const review = (0,toolkit_.combineReducers)({
  chatContainerReviewState: dashboard_review/* default */.ZP
});
const channel = (0,toolkit_.combineReducers)({
  chatContainerAuthFacebookState: auth_facebook/* default */.ZP,
  chatIntegrationQRState: integration_with_qr/* default */.ZP,
  listChannelState: list_channel/* default */.ZP
});
const store = (0,toolkit_.configureStore)({
  reducer: {
    liveChat,
    userAuthCredentials: user_credentials/* default */.ZP,
    users,
    tags,
    onboarding: redux_onboarding,
    reports,
    monitor,
    chatsPendings: pending_chats/* default */.ZP,
    chatSelectedToSendId: chat_selected_to_send_id/* default */.ZP,
    chatSelectedToTransferById: chat_selected_to_transfer_by_id/* default */.ZP,
    userSelectedToTransferById: user_selected_to_transfer_by_id/* default */.ZP,
    dashboardFilterChatsByDate: dashboard_chats_filter/* default */.ZP,
    review,
    activeTab: active_tab/* default */.ZP,
    optionsToFilterChats: options_to_filter/* default */.ZP,
    channel
  }
}); // Infer the `RootState` and `AppDispatch` types from the store itself

/***/ }),

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ mainTheme)
/* harmony export */ });
const mainTheme = {
  // font: `'Montserrat', sans-serif`,
  font: `'Poppins', sans-serif`,
  Colors: {
    grays: {
      1: '#2A2A2A',
      // TITLES | HEADERS | INPUT LABELS | INPUT TEXT | POPOVER AND MODAL QUESTIONS TEXT | DATES | AGENT NAMES
      2: '#454545',
      3: '#5C5C5C',
      4: '#707070',
      5: '#878787',
      6: '#B2B2B2',
      7: '#C4C4C4',
      8: '#DCDCDC',
      9: '#F5F5F5',
      10: '#FFFFFF'
    },
    purples: {
      1: '#8520D0',
      // SIDEBAR | CONFIRM RIGHT BUTTONS | + AND ? BUTTONS | AVAILABLE CHANNEL SELECTED | ASIGNED AGENT BACKGROUND | SELECTED FILTER TAG | CHECKBOXES | CHAT HISTORIAL SLECTED | AGENT CHAT SELECTED | BACKGRUND SEND BUTTON | SELECTED FILTER ICON|
      2: '#876CD0',
      3: '#8769FF',
      // CHATS ICON | BELL ICON | POPOVER OPEN ICON| CHIP TIMER | CHIP NUMBER ONLY | POPOVER LEFT BUTTONS | CONFIRM LEFT TEXT | MODAL LEFT BUTTON | PRIVATE CHATS + BUTTON | PRIVATE CHATS | PRIVATE CHATS CONNECTED SELECTED | CHAT ACTIVE AGENT BACKGROUND & SEND BUTTON & MORE BUTTON
      4: '#C155F0',
      5: '#D03AC9'
    },
    blue: {
      1: '#3AA4FF',
      2: '#4D5ECA'
    },
    green: {
      1: '#24C3A7',
      2: '#8BDFD0',
      3: '#23A236',
      4: '#1EC143',
      5: '#439152'
    },
    orange: {
      1: '#E6476F',
      2: '#FF6641',
      3: '#F78F28',
      4: '#FA5F5F',
      5: '#EB502A',
      6: '#ee964b'
    }
  },
  fontSize: {
    8: '0.5rem',
    10: '0.625rem',
    12: '0.75rem',
    14: '0.875rem',
    16: '1rem',
    18: '1.125rem',
    20: '1.25rem',
    22: '1.375rem',
    24: '1.5rem',
    26: '1.625rem',
    28: '1.75rem',
    30: '1.875rem',
    32: '2rem'
  },
  fontWeight: {
    100: '100',
    200: '200',
    300: '300',
    400: '400',
    500: '500',
    600: '600',
    700: '700',
    800: '800',
    900: '900'
  },
  iconButtonSizes: {
    small: '32px',
    medium: '40px',
    large: '48px'
  }
};

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6619:
/***/ ((module) => {

module.exports = require("consola");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 7128:
/***/ ((module) => {

module.exports = require("react-svg");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 4612:
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [463,340,302,252,369,391,889,390], () => (__webpack_exec__(7600)));
module.exports = __webpack_exports__;

})();