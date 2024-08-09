"use strict";(self.webpackChunkartstorefronts_ui=self.webpackChunkartstorefronts_ui||[]).push([[219],{"./node_modules/@radix-ui/primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function composeEventHandlers(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(originalEventHandler?.(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return ourEventHandler?.(event)}}__webpack_require__.d(__webpack_exports__,{m:()=>composeEventHandlers})},"./node_modules/@radix-ui/react-collection/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>createCollection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createCollection(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),itemMap=react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map).current;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CollectionProviderImpl,{scope,itemMap,collectionRef:ref,children})};CollectionProvider.displayName=PROVIDER_NAME;const COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(forwardedRef,context.collectionRef);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.DX,{ref:composedRefs,children})}));CollectionSlot.displayName=COLLECTION_SLOT_NAME;const ITEM_SLOT_NAME=name+"CollectionItemSlot",ITEM_DATA_ATTR="data-radix-collection-item",CollectionItemSlot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_3__.s)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.DX,{[ITEM_DATA_ATTR]:"",ref:composedRefs,children})}));return CollectionItemSlot.displayName=ITEM_SLOT_NAME,[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}},"./node_modules/@radix-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createContextScope});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=scope?.[scopeName][index]||BaseContext,value=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>context),Object.values(context));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value,children})}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName][index]||BaseContext,context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}},"./node_modules/@radix-ui/react-direction/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jH:()=>useDirection});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),DirectionContext=(__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0));function useDirection(localDir){const globalDir=react__WEBPACK_IMPORTED_MODULE_0__.useContext(DirectionContext);return localDir||globalDir||"ltr"}},"./node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{B:()=>useId});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{}),count=0;function useId(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState(useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{deterministicId||setId((reactId=>reactId??String(count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"./node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hO:()=>dispatchDiscreteCustomEvent,sG:()=>Primitive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function dispatchDiscreteCustomEvent(target,event){target&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>target.dispatchEvent(event)))}},"./node_modules/@radix-ui/react-roving-focus/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RG:()=>createRovingFocusGroupScope,bL:()=>Root,q7:()=>Item});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-collection/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),ENTRY_FOCUS="rovingFocusGroup.onEntryFocus",EVENT_OPTIONS={bubbles:!1,cancelable:!0},GROUP_NAME="RovingFocusGroup",[Collection,useCollection,createCollectionScope]=(0,_radix_ui_react_collection__WEBPACK_IMPORTED_MODULE_2__.N)(GROUP_NAME),[createRovingFocusGroupContext,createRovingFocusGroupScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_3__.A)(GROUP_NAME,[createCollectionScope]),[RovingFocusProvider,useRovingFocusContext]=createRovingFocusGroupContext(GROUP_NAME),RovingFocusGroup=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Provider,{scope:props.__scopeRovingFocusGroup,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.Slot,{scope:props.__scopeRovingFocusGroup,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RovingFocusGroupImpl,{...props,ref:forwardedRef})})})));RovingFocusGroup.displayName=GROUP_NAME;var RovingFocusGroupImpl=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,orientation,loop=!1,dir,currentTabStopId:currentTabStopIdProp,defaultCurrentTabStopId,onCurrentTabStopIdChange,onEntryFocus,preventScrollOnEntryFocus=!1,...groupProps}=props,ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_4__.s)(forwardedRef,ref),direction=(0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_5__.jH)(dir),[currentTabStopId=null,setCurrentTabStopId]=(0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_6__.i)({prop:currentTabStopIdProp,defaultProp:defaultCurrentTabStopId,onChange:onCurrentTabStopIdChange}),[isTabbingBackOut,setIsTabbingBackOut]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),handleEntryFocus=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_7__.c)(onEntryFocus),getItems=useCollection(__scopeRovingFocusGroup),isClickFocusRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),[focusableItemsCount,setFocusableItemsCount]=react__WEBPACK_IMPORTED_MODULE_0__.useState(0);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const node=ref.current;if(node)return node.addEventListener(ENTRY_FOCUS,handleEntryFocus),()=>node.removeEventListener(ENTRY_FOCUS,handleEntryFocus)}),[handleEntryFocus]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RovingFocusProvider,{scope:__scopeRovingFocusGroup,orientation,dir:direction,loop,currentTabStopId,onItemFocus:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((tabStopId=>setCurrentTabStopId(tabStopId)),[setCurrentTabStopId]),onItemShiftTab:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>setIsTabbingBackOut(!0)),[]),onFocusableItemAdd:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>setFocusableItemsCount((prevCount=>prevCount+1))),[]),onFocusableItemRemove:react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>setFocusableItemsCount((prevCount=>prevCount-1))),[]),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.sG.div,{tabIndex:isTabbingBackOut||0===focusableItemsCount?-1:0,"data-orientation":orientation,...groupProps,ref:composedRefs,style:{outline:"none",...props.style},onMouseDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(props.onMouseDown,(()=>{isClickFocusRef.current=!0})),onFocus:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(props.onFocus,(event=>{const isKeyboardFocus=!isClickFocusRef.current;if(event.target===event.currentTarget&&isKeyboardFocus&&!isTabbingBackOut){const entryFocusEvent=new CustomEvent(ENTRY_FOCUS,EVENT_OPTIONS);if(event.currentTarget.dispatchEvent(entryFocusEvent),!entryFocusEvent.defaultPrevented){const items=getItems().filter((item=>item.focusable));focusFirst([items.find((item=>item.active)),items.find((item=>item.id===currentTabStopId)),...items].filter(Boolean).map((item=>item.ref.current)),preventScrollOnEntryFocus)}}isClickFocusRef.current=!1})),onBlur:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(props.onBlur,(()=>setIsTabbingBackOut(!1)))})})})),RovingFocusGroupItem=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,focusable=!0,active=!1,tabStopId,...itemProps}=props,autoId=(0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_10__.B)(),id=tabStopId||autoId,context=useRovingFocusContext("RovingFocusGroupItem",__scopeRovingFocusGroup),isCurrentTabStop=context.currentTabStopId===id,getItems=useCollection(__scopeRovingFocusGroup),{onFocusableItemAdd,onFocusableItemRemove}=context;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(focusable)return onFocusableItemAdd(),()=>onFocusableItemRemove()}),[focusable,onFocusableItemAdd,onFocusableItemRemove]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Collection.ItemSlot,{scope:__scopeRovingFocusGroup,id,focusable,active,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_8__.sG.span,{tabIndex:isCurrentTabStop?0:-1,"data-orientation":context.orientation,...itemProps,ref:forwardedRef,onMouseDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(props.onMouseDown,(event=>{focusable?context.onItemFocus(id):event.preventDefault()})),onFocus:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(props.onFocus,(()=>context.onItemFocus(id))),onKeyDown:(0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_9__.m)(props.onKeyDown,(event=>{if("Tab"===event.key&&event.shiftKey)return void context.onItemShiftTab();if(event.target!==event.currentTarget)return;const focusIntent=function getFocusIntent(event,orientation,dir){const key=function getDirectionAwareKey(key,dir){return"rtl"!==dir?key:"ArrowLeft"===key?"ArrowRight":"ArrowRight"===key?"ArrowLeft":key}(event.key,dir);return"vertical"===orientation&&["ArrowLeft","ArrowRight"].includes(key)||"horizontal"===orientation&&["ArrowUp","ArrowDown"].includes(key)?void 0:MAP_KEY_TO_FOCUS_INTENT[key]}(event,context.orientation,context.dir);if(void 0!==focusIntent){if(event.metaKey||event.ctrlKey||event.altKey||event.shiftKey)return;event.preventDefault();let candidateNodes=getItems().filter((item=>item.focusable)).map((item=>item.ref.current));if("last"===focusIntent)candidateNodes.reverse();else if("prev"===focusIntent||"next"===focusIntent){"prev"===focusIntent&&candidateNodes.reverse();const currentIndex=candidateNodes.indexOf(event.currentTarget);candidateNodes=context.loop?function wrapArray(array,startIndex){return array.map(((_,index)=>array[(startIndex+index)%array.length]))}(candidateNodes,currentIndex+1):candidateNodes.slice(currentIndex+1)}setTimeout((()=>focusFirst(candidateNodes)))}}))})})}));RovingFocusGroupItem.displayName="RovingFocusGroupItem";var MAP_KEY_TO_FOCUS_INTENT={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function focusFirst(candidates,preventScroll=!1){const PREVIOUSLY_FOCUSED_ELEMENT=document.activeElement;for(const candidate of candidates){if(candidate===PREVIOUSLY_FOCUSED_ELEMENT)return;if(candidate.focus({preventScroll}),document.activeElement!==PREVIOUSLY_FOCUSED_ELEMENT)return}}var Root=RovingFocusGroup,Item=RovingFocusGroupItem},"./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useCallbackRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useCallbackRef(callback){const callbackRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{callbackRef.current=callback})),react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(...args)=>callbackRef.current?.(...args)),[])}},"./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>useControllableState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");function useControllableState({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function useUncontrolledState({defaultProp,onChange}){const uncontrolledState=react__WEBPACK_IMPORTED_MODULE_0__.useState(defaultProp),[value]=uncontrolledState,prevValueRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value),handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value=isControlled?prop:uncontrolledProp,handleChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.c)(onChange);return[value,react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextValue=>{if(isControlled){const value2="function"==typeof nextValue?nextValue(prop):nextValue;value2!==prop&&handleChange(value2)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}},"./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useLayoutEffect2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useLayoutEffect2=Boolean(globalThis?.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}}}]);