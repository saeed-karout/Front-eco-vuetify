import{a as f,b as a}from"./VTextField-e5ce5bd7.js";import{p as I,I as V,l as v,y as c,c as l,a8 as b,m as k,A as x}from"./index-d93c72e8.js";import{b as h}from"./VBtn-c7de2009.js";const C=I({indeterminate:Boolean,indeterminateIcon:{type:V,default:"$checkboxIndeterminate"},...f({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),B=v()({name:"VCheckboxBtn",props:C(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,r){let{slots:s}=r;const t=c(e,"indeterminate"),n=c(e,"modelValue");function u(o){t.value&&(t.value=!1)}const m=l(()=>t.value?e.indeterminateIcon:e.falseIcon),i=l(()=>t.value?e.indeterminateIcon:e.trueIcon);return h(()=>{const o=b(a.filterProps(e),["modelValue"]);return k(a,x(o,{modelValue:n.value,"onUpdate:modelValue":[d=>n.value=d,u],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:m.value,trueIcon:i.value,"aria-checked":t.value?"mixed":void 0}),s)}),{}}});export{B as V,C as m};
