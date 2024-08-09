"use strict";(self.webpackChunkartstorefronts_ui=self.webpackChunkartstorefronts_ui||[]).push([[605],{"./src/stories/textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,WithButton:()=>WithButton,WithLabel:()=>WithLabel,WithText:()=>WithText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>textarea_stories});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./src/lib/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Textarea=react.forwardRef(((_ref,ref)=>{let{className,...props}=_ref;return(0,jsx_runtime.jsx)("textarea",{className:(0,utils.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",className),ref,...props})}));Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"",methods:[],displayName:"Textarea"};var ui_button=__webpack_require__("./src/components/ui/button.tsx");const textarea_stories={title:"Components/Textarea",component:Textarea,args:{placeholder:"Type your message here."},argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"}}};function Template(_ref){let{placeholder,disabled}=_ref;return(0,jsx_runtime.jsx)(Textarea,{placeholder,disabled})}const Default=Template.bind({});Default.args={};const Disabled=Template.bind({});Disabled.args={disabled:!0};const WithLabel=function LabelTemplate(_ref2){let{placeholder,disabled}=_ref2;return(0,jsx_runtime.jsxs)("div",{className:"grid w-full gap-1.5",children:[(0,jsx_runtime.jsx)("label",{className:"text-sm",htmlFor:"message",children:"Your message"}),(0,jsx_runtime.jsx)(Textarea,{placeholder,disabled,id:"message"})]})}.bind({});WithLabel.args={};const WithText=function TextTemplate(_ref3){let{placeholder,disabled}=_ref3;return(0,jsx_runtime.jsxs)("div",{className:"grid w-full gap-1.5",children:[(0,jsx_runtime.jsx)("label",{className:"text-sm",htmlFor:"message2",children:"Your message"}),(0,jsx_runtime.jsx)(Textarea,{placeholder,disabled,id:"message2"}),(0,jsx_runtime.jsx)("p",{className:"text-sm text-muted-foreground",children:"Your message will be copied to the support team."})]})}.bind({});WithText.args={};const WithButton=function ButtonTemplate(_ref4){let{placeholder,disabled}=_ref4;return(0,jsx_runtime.jsxs)("div",{className:"grid w-full gap-1.5",children:[(0,jsx_runtime.jsx)(Textarea,{placeholder,disabled}),(0,jsx_runtime.jsx)(ui_button.$,{children:"Send message"})]})}.bind({});WithButton.args={};const __namedExportsOrder=["Default","Disabled","WithLabel","WithText","WithButton"]},"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((_ref,ref)=>{let{className,variant,size,asChild=!1,...props}=_ref;const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Comp,{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({variant,size,className})),ref,...props})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=clsx,cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);