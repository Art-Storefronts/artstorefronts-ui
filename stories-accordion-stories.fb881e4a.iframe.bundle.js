/*! For license information please see stories-accordion-stories.fb881e4a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkartstorefronts_ui=self.webpackChunkartstorefronts_ui||[]).push([[463],{"./src/stories/accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Multiple:()=>Multiple,NonCollapsible:()=>NonCollapsible,Single:()=>Single,__namedExportsOrder:()=>__namedExportsOrder,default:()=>accordion_stories});var react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react.createContext(defaultContext),index=defaultContexts.length;function Provider(props){const{scope,children,...context}=props,Context=scope?.[scopeName][index]||BaseContext,value=react.useMemo((()=>context),Object.values(context));return(0,jsx_runtime.jsx)(Context.Provider,{value,children})}return defaultContexts=[...defaultContexts,defaultContext],Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName][index]||BaseContext,context=react.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}var dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_slot_dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs");function composeEventHandlers(originalEventHandler,ourEventHandler,{checkForDefaultPrevented=!0}={}){return function handleEvent(event){if(originalEventHandler?.(event),!1===checkForDefaultPrevented||!event.defaultPrevented)return ourEventHandler?.(event)}}function useCallbackRef(callback){const callbackRef=react.useRef(callback);return react.useEffect((()=>{callbackRef.current=callback})),react.useMemo((()=>(...args)=>callbackRef.current?.(...args)),[])}function useControllableState({prop,defaultProp,onChange=()=>{}}){const[uncontrolledProp,setUncontrolledProp]=function useUncontrolledState({defaultProp,onChange}){const uncontrolledState=react.useState(defaultProp),[value]=uncontrolledState,prevValueRef=react.useRef(value),handleChange=useCallbackRef(onChange);return react.useEffect((()=>{prevValueRef.current!==value&&(handleChange(value),prevValueRef.current=value)}),[value,prevValueRef,handleChange]),uncontrolledState}({defaultProp,onChange}),isControlled=void 0!==prop,value=isControlled?prop:uncontrolledProp,handleChange=useCallbackRef(onChange);return[value,react.useCallback((nextValue=>{if(isControlled){const value2="function"==typeof nextValue?nextValue(prop):nextValue;value2!==prop&&handleChange(value2)}else setUncontrolledProp(nextValue)}),[isControlled,prop,setUncontrolledProp,handleChange])]}var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?react_slot_dist.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,jsx_runtime.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});var useLayoutEffect2=Boolean(globalThis?.document)?react.useLayoutEffect:()=>{};var Presence=props=>{const{present,children}=props,presence=function usePresence(present){const[node,setNode]=react.useState(),stylesRef=react.useRef({}),prevPresentRef=react.useRef(present),prevAnimationNameRef=react.useRef("none"),initialState=present?"mounted":"unmounted",[state,send]=function useStateMachine(initialState,machine){return react.useReducer(((state,event)=>machine[state][event]??state),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return react.useEffect((()=>{const currentAnimationName=getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),useLayoutEffect2((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===styles?.display)send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),useLayoutEffect2((()=>{if(node){const handleAnimationEnd=event=>{const isCurrentAnimation=getAnimationName(stylesRef.current).includes(event.animationName);event.target===node&&isCurrentAnimation&&react_dom.flushSync((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node&&(prevAnimationNameRef.current=getAnimationName(stylesRef.current))};return node.addEventListener("animationstart",handleAnimationStart),node.addEventListener("animationcancel",handleAnimationEnd),node.addEventListener("animationend",handleAnimationEnd),()=>{node.removeEventListener("animationstart",handleAnimationStart),node.removeEventListener("animationcancel",handleAnimationEnd),node.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:react.useCallback((node2=>{node2&&(stylesRef.current=getComputedStyle(node2)),setNode(node2)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react.Children.only(children),ref=(0,dist.s)(presence.ref,function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(child));return"function"==typeof children||presence.isPresent?react.cloneElement(child,{ref}):null};function getAnimationName(styles){return styles?.animationName||"none"}Presence.displayName="Presence";var useReactId=react_namespaceObject["useId".toString()]||(()=>{}),count=0;function useId(deterministicId){const[id,setId]=react.useState(useReactId());return useLayoutEffect2((()=>{deterministicId||setId((reactId=>reactId??String(count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}var[createCollapsibleContext,createCollapsibleScope]=createContextScope("Collapsible"),[CollapsibleProvider,useCollapsibleContext]=createCollapsibleContext("Collapsible"),Collapsible=react.forwardRef(((props,forwardedRef)=>{const{__scopeCollapsible,open:openProp,defaultOpen,disabled,onOpenChange,...collapsibleProps}=props,[open=!1,setOpen]=useControllableState({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,jsx_runtime.jsx)(CollapsibleProvider,{scope:__scopeCollapsible,disabled,contentId:useId(),open,onOpenToggle:react.useCallback((()=>setOpen((prevOpen=>!prevOpen))),[setOpen]),children:(0,jsx_runtime.jsx)(Primitive.div,{"data-state":getState(open),"data-disabled":disabled?"":void 0,...collapsibleProps,ref:forwardedRef})})}));Collapsible.displayName="Collapsible";var CollapsibleTrigger=react.forwardRef(((props,forwardedRef)=>{const{__scopeCollapsible,...triggerProps}=props,context=useCollapsibleContext("CollapsibleTrigger",__scopeCollapsible);return(0,jsx_runtime.jsx)(Primitive.button,{type:"button","aria-controls":context.contentId,"aria-expanded":context.open||!1,"data-state":getState(context.open),"data-disabled":context.disabled?"":void 0,disabled:context.disabled,...triggerProps,ref:forwardedRef,onClick:composeEventHandlers(props.onClick,context.onOpenToggle)})}));CollapsibleTrigger.displayName="CollapsibleTrigger";var CollapsibleContent=react.forwardRef(((props,forwardedRef)=>{const{forceMount,...contentProps}=props,context=useCollapsibleContext("CollapsibleContent",props.__scopeCollapsible);return(0,jsx_runtime.jsx)(Presence,{present:forceMount||context.open,children:({present})=>(0,jsx_runtime.jsx)(CollapsibleContentImpl,{...contentProps,ref:forwardedRef,present})})}));CollapsibleContent.displayName="CollapsibleContent";var CollapsibleContentImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeCollapsible,present,children,...contentProps}=props,context=useCollapsibleContext("CollapsibleContent",__scopeCollapsible),[isPresent,setIsPresent]=react.useState(present),ref=react.useRef(null),composedRefs=(0,dist.s)(forwardedRef,ref),heightRef=react.useRef(0),height=heightRef.current,widthRef=react.useRef(0),width=widthRef.current,isOpen=context.open||isPresent,isMountAnimationPreventedRef=react.useRef(isOpen),originalStylesRef=react.useRef();return react.useEffect((()=>{const rAF=requestAnimationFrame((()=>isMountAnimationPreventedRef.current=!1));return()=>cancelAnimationFrame(rAF)}),[]),useLayoutEffect2((()=>{const node=ref.current;if(node){originalStylesRef.current=originalStylesRef.current||{transitionDuration:node.style.transitionDuration,animationName:node.style.animationName},node.style.transitionDuration="0s",node.style.animationName="none";const rect=node.getBoundingClientRect();heightRef.current=rect.height,widthRef.current=rect.width,isMountAnimationPreventedRef.current||(node.style.transitionDuration=originalStylesRef.current.transitionDuration,node.style.animationName=originalStylesRef.current.animationName),setIsPresent(present)}}),[context.open,present]),(0,jsx_runtime.jsx)(Primitive.div,{"data-state":getState(context.open),"data-disabled":context.disabled?"":void 0,id:context.contentId,hidden:!isOpen,...contentProps,ref:composedRefs,style:{"--radix-collapsible-content-height":height?`${height}px`:void 0,"--radix-collapsible-content-width":width?`${width}px`:void 0,...props.style},children:isOpen&&children})}));function getState(open){return open?"open":"closed"}var dist_Root=Collapsible,Trigger=CollapsibleTrigger,Content=CollapsibleContent,DirectionContext=react.createContext(void 0);var ACCORDION_KEYS=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Collection,useCollection,createCollectionScope]=function createCollection(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=createContextScope(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react.useRef(null),itemMap=react.useRef(new Map).current;return(0,jsx_runtime.jsx)(CollectionProviderImpl,{scope,itemMap,collectionRef:ref,children})};CollectionProvider.displayName=PROVIDER_NAME;const COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,dist.s)(forwardedRef,context.collectionRef);return(0,jsx_runtime.jsx)(react_slot_dist.DX,{ref:composedRefs,children})}));CollectionSlot.displayName=COLLECTION_SLOT_NAME;const ITEM_SLOT_NAME=name+"CollectionItemSlot",ITEM_DATA_ATTR="data-radix-collection-item",CollectionItemSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react.useRef(null),composedRefs=(0,dist.s)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),(0,jsx_runtime.jsx)(react_slot_dist.DX,{[ITEM_DATA_ATTR]:"",ref:composedRefs,children})}));return CollectionItemSlot.displayName=ITEM_SLOT_NAME,[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}("Accordion"),[createAccordionContext,createAccordionScope]=createContextScope("Accordion",[createCollectionScope,createCollapsibleScope]),useCollapsibleScope=createCollapsibleScope(),Accordion=react.forwardRef(((props,forwardedRef)=>{const{type,...accordionProps}=props,singleProps=accordionProps,multipleProps=accordionProps;return(0,jsx_runtime.jsx)(Collection.Provider,{scope:props.__scopeAccordion,children:"multiple"===type?(0,jsx_runtime.jsx)(AccordionImplMultiple,{...multipleProps,ref:forwardedRef}):(0,jsx_runtime.jsx)(AccordionImplSingle,{...singleProps,ref:forwardedRef})})}));Accordion.displayName="Accordion";var[AccordionValueProvider,useAccordionValueContext]=createAccordionContext("Accordion"),[AccordionCollapsibleProvider,useAccordionCollapsibleContext]=createAccordionContext("Accordion",{collapsible:!1}),AccordionImplSingle=react.forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},collapsible=!1,...accordionSingleProps}=props,[value,setValue]=useControllableState({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange});return(0,jsx_runtime.jsx)(AccordionValueProvider,{scope:props.__scopeAccordion,value:value?[value]:[],onItemOpen:setValue,onItemClose:react.useCallback((()=>collapsible&&setValue("")),[collapsible,setValue]),children:(0,jsx_runtime.jsx)(AccordionCollapsibleProvider,{scope:props.__scopeAccordion,collapsible,children:(0,jsx_runtime.jsx)(AccordionImpl,{...accordionSingleProps,ref:forwardedRef})})})})),AccordionImplMultiple=react.forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},...accordionMultipleProps}=props,[value=[],setValue]=useControllableState({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange}),handleItemOpen=react.useCallback((itemValue=>setValue(((prevValue=[])=>[...prevValue,itemValue]))),[setValue]),handleItemClose=react.useCallback((itemValue=>setValue(((prevValue=[])=>prevValue.filter((value2=>value2!==itemValue))))),[setValue]);return(0,jsx_runtime.jsx)(AccordionValueProvider,{scope:props.__scopeAccordion,value,onItemOpen:handleItemOpen,onItemClose:handleItemClose,children:(0,jsx_runtime.jsx)(AccordionCollapsibleProvider,{scope:props.__scopeAccordion,collapsible:!0,children:(0,jsx_runtime.jsx)(AccordionImpl,{...accordionMultipleProps,ref:forwardedRef})})})})),[AccordionImplProvider,useAccordionContext]=createAccordionContext("Accordion"),AccordionImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,disabled,dir,orientation="vertical",...accordionProps}=props,accordionRef=react.useRef(null),composedRefs=(0,dist.s)(accordionRef,forwardedRef),getItems=useCollection(__scopeAccordion),isDirectionLTR="ltr"===function useDirection(localDir){const globalDir=react.useContext(DirectionContext);return localDir||globalDir||"ltr"}(dir),handleKeyDown=composeEventHandlers(props.onKeyDown,(event=>{if(!ACCORDION_KEYS.includes(event.key))return;const target=event.target,triggerCollection=getItems().filter((item=>!item.ref.current?.disabled)),triggerIndex=triggerCollection.findIndex((item=>item.ref.current===target)),triggerCount=triggerCollection.length;if(-1===triggerIndex)return;event.preventDefault();let nextIndex=triggerIndex;const endIndex=triggerCount-1,moveNext=()=>{nextIndex=triggerIndex+1,nextIndex>endIndex&&(nextIndex=0)},movePrev=()=>{nextIndex=triggerIndex-1,nextIndex<0&&(nextIndex=endIndex)};switch(event.key){case"Home":nextIndex=0;break;case"End":nextIndex=endIndex;break;case"ArrowRight":"horizontal"===orientation&&(isDirectionLTR?moveNext():movePrev());break;case"ArrowDown":"vertical"===orientation&&moveNext();break;case"ArrowLeft":"horizontal"===orientation&&(isDirectionLTR?movePrev():moveNext());break;case"ArrowUp":"vertical"===orientation&&movePrev()}const clampedIndex=nextIndex%triggerCount;triggerCollection[clampedIndex].ref.current?.focus()}));return(0,jsx_runtime.jsx)(AccordionImplProvider,{scope:__scopeAccordion,disabled,direction:dir,orientation,children:(0,jsx_runtime.jsx)(Collection.Slot,{scope:__scopeAccordion,children:(0,jsx_runtime.jsx)(Primitive.div,{...accordionProps,"data-orientation":orientation,ref:composedRefs,onKeyDown:disabled?void 0:handleKeyDown})})})})),[AccordionItemProvider,useAccordionItemContext]=createAccordionContext("AccordionItem"),AccordionItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,value,...accordionItemProps}=props,accordionContext=useAccordionContext("AccordionItem",__scopeAccordion),valueContext=useAccordionValueContext("AccordionItem",__scopeAccordion),collapsibleScope=useCollapsibleScope(__scopeAccordion),triggerId=useId(),open=value&&valueContext.value.includes(value)||!1,disabled=accordionContext.disabled||props.disabled;return(0,jsx_runtime.jsx)(AccordionItemProvider,{scope:__scopeAccordion,open,disabled,triggerId,children:(0,jsx_runtime.jsx)(dist_Root,{"data-orientation":accordionContext.orientation,"data-state":dist_getState(open),...collapsibleScope,...accordionItemProps,ref:forwardedRef,disabled,open,onOpenChange:open2=>{open2?valueContext.onItemOpen(value):valueContext.onItemClose(value)}})})}));AccordionItem.displayName="AccordionItem";var AccordionHeader=react.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...headerProps}=props,accordionContext=useAccordionContext("Accordion",__scopeAccordion),itemContext=useAccordionItemContext("AccordionHeader",__scopeAccordion);return(0,jsx_runtime.jsx)(Primitive.h3,{"data-orientation":accordionContext.orientation,"data-state":dist_getState(itemContext.open),"data-disabled":itemContext.disabled?"":void 0,...headerProps,ref:forwardedRef})}));AccordionHeader.displayName="AccordionHeader";var AccordionTrigger=react.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...triggerProps}=props,accordionContext=useAccordionContext("Accordion",__scopeAccordion),itemContext=useAccordionItemContext("AccordionTrigger",__scopeAccordion),collapsibleContext=useAccordionCollapsibleContext("AccordionTrigger",__scopeAccordion),collapsibleScope=useCollapsibleScope(__scopeAccordion);return(0,jsx_runtime.jsx)(Collection.ItemSlot,{scope:__scopeAccordion,children:(0,jsx_runtime.jsx)(Trigger,{"aria-disabled":itemContext.open&&!collapsibleContext.collapsible||void 0,"data-orientation":accordionContext.orientation,id:itemContext.triggerId,...collapsibleScope,...triggerProps,ref:forwardedRef})})}));AccordionTrigger.displayName="AccordionTrigger";var AccordionContent=react.forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...contentProps}=props,accordionContext=useAccordionContext("Accordion",__scopeAccordion),itemContext=useAccordionItemContext("AccordionContent",__scopeAccordion),collapsibleScope=useCollapsibleScope(__scopeAccordion);return(0,jsx_runtime.jsx)(Content,{role:"region","aria-labelledby":itemContext.triggerId,"data-orientation":accordionContext.orientation,...collapsibleScope,...contentProps,ref:forwardedRef,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...props.style}})}));function dist_getState(open){return open?"open":"closed"}AccordionContent.displayName="AccordionContent";var Root2=Accordion,Item=AccordionItem,Header=AccordionHeader,Trigger2=AccordionTrigger,Content2=AccordionContent;const ChevronDown=(0,__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js").A)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);var utils=__webpack_require__("./src/lib/utils.ts");const accordion_Accordion=Root2,accordion_AccordionItem=react.forwardRef(((_ref,ref)=>{let{className,...props}=_ref;return(0,jsx_runtime.jsx)(Item,{ref,className:(0,utils.cn)("border-b",className),...props})}));accordion_AccordionItem.displayName="AccordionItem";const accordion_AccordionTrigger=react.forwardRef(((_ref2,ref)=>{let{className,children,...props}=_ref2;return(0,jsx_runtime.jsx)(Header,{className:"flex",children:(0,jsx_runtime.jsxs)(Trigger2,{ref,className:(0,utils.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",className),...props,children:[children,(0,jsx_runtime.jsx)(ChevronDown,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})})}));accordion_AccordionTrigger.displayName=Trigger2.displayName;const accordion_AccordionContent=react.forwardRef(((_ref3,ref)=>{let{className,children,...props}=_ref3;return(0,jsx_runtime.jsx)(Content2,{ref,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...props,children:(0,jsx_runtime.jsx)("div",{className:(0,utils.cn)("pb-4 pt-0",className),children})})}));accordion_AccordionContent.displayName=Content2.displayName,accordion_AccordionItem.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"},accordion_AccordionTrigger.__docgenInfo={description:"",methods:[]},accordion_AccordionContent.__docgenInfo={description:"",methods:[]};const accordion_stories={title:"Components/Accordion",component:accordion_Accordion,subcomponents:{AccordionItem:accordion_AccordionItem,AccordionTrigger:accordion_AccordionTrigger,AccordionContent:accordion_AccordionContent},argTypes:{type:{control:{type:"select"},options:["single","multiple"]},collapsible:{control:"boolean"}}};function StoryWrapper(_ref){let{children}=_ref;return(0,jsx_runtime.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,jsx_runtime.jsx)("div",{className:"w-[40rem]",children})})}function Template(args){return(0,jsx_runtime.jsx)(StoryWrapper,{children:(0,jsx_runtime.jsxs)(accordion_Accordion,{...args,children:[(0,jsx_runtime.jsxs)(accordion_AccordionItem,{value:"item-1",children:[(0,jsx_runtime.jsx)(accordion_AccordionTrigger,{children:"Item 1"}),(0,jsx_runtime.jsx)(accordion_AccordionContent,{children:"Content for item 1. This is an example of how you can use the accordion component."})]}),(0,jsx_runtime.jsxs)(accordion_AccordionItem,{value:"item-2",children:[(0,jsx_runtime.jsx)(accordion_AccordionTrigger,{children:"Item 2"}),(0,jsx_runtime.jsx)(accordion_AccordionContent,{children:"Content for item 2. This is an example of how you can use the accordion component."})]}),(0,jsx_runtime.jsxs)(accordion_AccordionItem,{value:"item-3",children:[(0,jsx_runtime.jsx)(accordion_AccordionTrigger,{children:"Item 3"}),(0,jsx_runtime.jsx)(accordion_AccordionContent,{children:"Content for item 3. This is an example of how you can use the accordion component."})]})]})})}const Single=Template.bind({});Single.args={type:"single",collapsible:!0};const Multiple=Template.bind({});Multiple.args={type:"multiple",collapsible:!0};const NonCollapsible=Template.bind({});NonCollapsible.args={type:"single",collapsible:!1};const __namedExportsOrder=["Single","Multiple","NonCollapsible"]},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);