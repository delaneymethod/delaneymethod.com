"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */(function(global,factory){"use strict";if((typeof module==="undefined"?"undefined":_typeof(module))==="object"&&_typeof(module.exports)==="object"){// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}return factory(w);};}else{factory(global);}// Pass this if window is not defined yet
})(typeof window!=="undefined"?window:undefined,function(window,noGlobal){// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var _slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};function DOMEval(code,doc){doc=doc||document;var script=doc.createElement("script");script.text=code;doc.head.appendChild(script).parentNode.removeChild(script);}/* global Symbol */// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module
var version="3.1.1",// Define a local copy of jQuery
jQuery=function jQuery(selector,context){// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new jQuery.fn.init(selector,context);},// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,// Matches dashed string for camelizing
rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g,// Used by jQuery.camelCase as callback to replace()
fcamelCase=function fcamelCase(all,letter){return letter.toUpperCase();};jQuery.fn=jQuery.prototype={// The current version of jQuery being used
jquery:version,constructor:jQuery,// The default length of a jQuery object is 0
length:0,toArray:function toArray(){return _slice.call(this);},// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function get(num){// Return all the elements in a clean array
if(num==null){return _slice.call(this);}// Return just the one element from the set
return num<0?this[num+this.length]:this[num];},// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function pushStack(elems){// Build a new jQuery matched element set
var ret=jQuery.merge(this.constructor(),elems);// Add the old object onto the stack (as a reference)
ret.prevObject=this;// Return the newly-formed element set
return ret;},// Execute a callback for every element in the matched set.
each:function each(callback){return jQuery.each(this,callback);},map:function map(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function slice(){return this.pushStack(_slice.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function end(){return this.prevObject||this.constructor();},// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;// Handle a deep copy situation
if(typeof target==="boolean"){deep=target;// Skip the boolean and the target
target=arguments[i]||{};i++;}// Handle case when target is a string or something (possible in deep copy)
if((typeof target==="undefined"?"undefined":_typeof(target))!=="object"&&!jQuery.isFunction(target)){target={};}// Extend jQuery itself if only one argument is passed
if(i===length){target=this;i--;}for(;i<length;i++){// Only deal with non-null/undefined values
if((options=arguments[i])!=null){// Extend the base object
for(name in options){src=target[name];copy=options[name];// Prevent never-ending loop
if(target===copy){continue;}// Recurse if we're merging plain objects or arrays
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}// Never move original objects, clone them
target[name]=jQuery.extend(deep,clone,copy);// Don't bring in undefined values
}else if(copy!==undefined){target[name]=copy;}}}}// Return the modified object
return target;};jQuery.extend({// Unique for each copy of jQuery on the page
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),// Assume jQuery is ready without the ready module
isReady:true,error:function error(msg){throw new Error(msg);},noop:function noop(){},isFunction:function isFunction(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray,isWindow:function isWindow(obj){return obj!=null&&obj===obj.window;},isNumeric:function isNumeric(obj){// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var type=jQuery.type(obj);return(type==="number"||type==="string")&&// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
!isNaN(obj-parseFloat(obj));},isPlainObject:function isPlainObject(obj){var proto,Ctor;// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
if(!obj||toString.call(obj)!=="[object Object]"){return false;}proto=getProto(obj);// Objects with no prototype (e.g., `Object.create( null )`) are plain
if(!proto){return true;}// Objects with prototype are plain iff they were constructed by a global Object function
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function isEmptyObject(obj){/* eslint-disable no-unused-vars */// See https://github.com/eslint/eslint/issues/6125
var name;for(name in obj){return false;}return true;},type:function type(obj){if(obj==null){return obj+"";}// Support: Android <=2.3 only (functionish RegExp)
return(typeof obj==="undefined"?"undefined":_typeof(obj))==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj==="undefined"?"undefined":_typeof(obj);},// Evaluates a script in a global context
globalEval:function globalEval(code){DOMEval(code);},// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function each(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}return obj;},// Support: Android <=4.0 only
trim:function trim(text){return text==null?"":(text+"").replace(rtrim,"");},// results is for internal usage only
makeArray:function makeArray(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}return ret;},inArray:function inArray(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function merge(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}first.length=i;return first;},grep:function grep(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;// Go through the array, only saving the items
// that pass the validator function
for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}return matches;},// arg is for internal usage only
map:function map(elems,callback,arg){var length,value,i=0,ret=[];// Go through the array, translating each of the items to their new values
if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}// Go through every key on the object,
}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}// Flatten any nested arrays
return concat.apply([],ret);},// A global GUID counter for objects
guid:1,// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function proxy(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if(!jQuery.isFunction(fn)){return undefined;}// Simulated bind
args=_slice.call(arguments,2);proxy=function proxy(){return fn.apply(context||this,args.concat(_slice.call(arguments)));};// Set the guid of unique handler to the same of original handler, so it can be removed
proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},now:Date.now,// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var length=!!obj&&"length"in obj&&obj.length,type=jQuery.type(obj);if(type==="function"||jQuery.isWindow(obj)){return false;}return type==="array"||length===0||typeof length==="number"&&length>0&&length-1 in obj;}var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,// Local document vars
setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,// Instance-specific data
expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function sortOrder(a,b){if(a===b){hasDuplicate=true;}return 0;},// Instance methods
hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
indexOf=function indexOf(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
whitespace="[\\x20\\t\\r\\n\\f]",// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+// Operator (capture 2)
"*([*^$|!~]?=)"+whitespace+// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+"*\\]",pseudos=":("+identifier+")(?:\\(("+// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
// 1. quoted (capture 3; capture 4 or capture 5)
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+// 2. simple (capture 6)
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+// 3. anything else (capture 2)
".*"+")\\)|)",// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),// For use in libraries implementing .is()
// We use this for POS matching in `select`
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,// Easily-parseable/retrievable ID or TAG or CLASS selectors
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function funescape(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
return high!==high||escapedWhitespace?escaped:high<0?// BMP codepoint
String.fromCharCode(high+0x10000):// Supplemental Plane codepoint (surrogate pair)
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function fcssescape(ch,asCodePoint){if(asCodePoint){// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
if(ch==="\0"){return"\uFFFD";}// Control characters and (dependent upon position) numbers get escaped as code points
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}// Other potentially-special ASCII characters get backslash-escaped
return"\\"+ch;},// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
unloadHandler=function unloadHandler(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true&&("form"in elem||"label"in elem);},{dir:"parentNode",next:"legend"});// Optimize for push.apply( _, NodeList )
try{push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);// Support: Android<4.0
// Detect silently failing push.apply
arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?// Leverage slice if possible
function(target,els){push_native.apply(target,slice.call(els));}:// Support: IE<9
// Otherwise append directly
function(target,els){var j=target.length,i=0;// Can't trust NodeList.length
while(target[j++]=els[i++]){}target.length=j-1;}};}function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,// nodeType defaults to 9, since context defaults to document
nodeType=context?context.nodeType:9;results=results||[];// Return early from calls with invalid selector or context
if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}context=context||document;if(documentIsHTML){// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(nodeType!==11&&(match=rquickExpr.exec(selector))){// ID selector
if(m=match[1]){// Document context
if(nodeType===9){if(elem=context.getElementById(m)){// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(elem.id===m){results.push(elem);return results;}}else{return results;}// Element context
}else{// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}// Type selector
}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;// Class selector
}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}// Take advantage of querySelectorAll
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;// qSA looks outside Element context, which is not what we want
// Thanks to Andrew Dupont for this workaround technique
// Support: IE <=8
// Exclude object elements
}else if(context.nodeName.toLowerCase()!=="object"){// Capture the context ID, setting it first if necessary
if(nid=context.getAttribute("id")){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",nid=expando);}// Prefix every selector in the list
groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}newSelector=groups.join(",");// Expand context for sibling selectors
newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}// All others
return select(selector.replace(rtrim,"$1"),context,results,seed);}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */function createCache(){var keys=[];function cache(key,value){// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
if(keys.push(key+" ")>Expr.cacheLength){// Only keep the most recent entries
delete cache[keys.shift()];}return cache[key+" "]=value;}return cache;}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */function markFunction(fn){fn[expando]=true;return fn;}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{// Remove from its parent by default
if(el.parentNode){el.parentNode.removeChild(el);}// release memory in IE
el=null;}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;// Use IE sourceIndex if available on both nodes
if(diff){return diff;}// Check if b follows a
if(cur){while(cur=cur.nextSibling){if(cur===b){return-1;}}}return a?1:-1;}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */function createDisabledPseudo(disabled){// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(elem){// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
if("form"in elem){// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
if(elem.parentNode&&elem.disabled===false){// Option elements defer to a parent optgroup if present
if("label"in elem){if("label"in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}// Support: IE 6 - 11
// Use the isDisabled shortcut property to check for disabled fieldset ancestors
return elem.isDisabled===disabled||// Where there is no isDisabled, check manually
/* jshint -W018 */elem.isDisabled!==!disabled&&disabledAncestor(elem)===disabled;}return elem.disabled===disabled;// Try to winnow out elements that can't be disabled before trusting the disabled property.
// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
// even exist on them, let alone have a boolean value.
}else if("label"in elem){return elem.disabled===disabled;}// Remaining elements are neither :enabled nor :disabled
return false;};}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;// Match elements found at the specified indexes
while(i--){if(seed[j=matchIndexes[i]]){seed[j]=!(matches[j]=seed[j]);}}});});}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}// Expose support vars for convenience
support=Sizzle.support={};/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */isXML=Sizzle.isXML=function(elem){// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;// Return early if doc is invalid or already selected
if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}// Update global variables
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){// Support: IE 11, Edge
if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);// Support: IE 9 - 10 only
}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}/* Attributes
	---------------------------------------------------------------------- */// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});/* getElement(s)By*
	---------------------------------------------------------------------- */// Check if getElementsByTagName("*") returns only elements
support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});// Support: IE<9
support.getElementsByClassName=rnative.test(document.getElementsByClassName);// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});// ID filter and find
if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){// Verify the id attribute
node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}// Fall back on getElementsByName
elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}return[];}};}// Tag
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);// DocumentFragment nodes don't have gEBTN
}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
results=context.getElementsByTagName(tag);// Filter out possible comments
if(tag==="*"){while(elem=results[i++]){if(elem.nodeType===1){tmp.push(elem);}}return tmp;}return results;};// Class
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};/* QSA/matchesSelector
	---------------------------------------------------------------------- */// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
rbuggyMatches=[];// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){// Build QSA regex
// Regex strategy adopted from Diego Perini
assert(function(el){// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+"<select id='"+expando+"-\r\\' msallowcapture=''>"+"<option selected=''></option></select>";// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}// Support: IE8
// Boolean attributes and "value" are not treated correctly
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+"<select disabled='disabled'><option/></select>";// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");// Support: IE8
// Enforce case-sensitivity of name attribute
if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}// Opera 10-11 does not throw on post-comma invalid pseudos
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){assert(function(el){// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
support.disconnectedMatch=matches.call(el,"*");// This should fail with an exception
// Gecko does not error, returns false instead
matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));/* Contains
	---------------------------------------------------------------------- */hasCompare=rnative.test(docElem.compareDocumentPosition);// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while(b=b.parentNode){if(b===a){return true;}}}return false;};/* Sorting
	---------------------------------------------------------------------- */// Document order sorting
sortOrder=hasCompare?function(a,b){// Flag for duplicate removal
if(a===b){hasDuplicate=true;return 0;}// Sort on method existence if only one input has compareDocumentPosition
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}// Calculate position if both inputs belong to the same document
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):// Otherwise we know they are disconnected
1;// Disconnected nodes
if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){// Choose the first element that is related to our preferred document
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}// Maintain original order
return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;}return compare&4?-1:1;}:function(a,b){// Exit early if the nodes are identical
if(a===b){hasDuplicate=true;return 0;}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];// Parentless nodes are either documents or disconnected
if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;// If the nodes are siblings, we can do a quick check
}else if(aup===bup){return siblingCheck(a,b);}// Otherwise we need full lists of their ancestors for comparison
cur=a;while(cur=cur.parentNode){ap.unshift(cur);}cur=b;while(cur=cur.parentNode){bp.unshift(cur);}// Walk down the tree looking for a discrepancy
while(ap[i]===bp[i]){i++;}return i?// Do a sibling check if the nodes have a common ancestor
siblingCheck(ap[i],bp[i]):// Otherwise nodes in our document sort first
ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}// Make sure that attribute selectors are quoted
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);// IE 9's matchesSelector returns false on disconnected nodes
if(ret||support.disconnectedMatch||// As well, disconnected nodes are said to be in a document
// fragment in IE 9
elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){// Set document vars if needed
if((context.ownerDocument||context)!==document){setDocument(context);}return contains(context,elem);};Sizzle.attr=function(elem,name){// Set document vars if needed
if((elem.ownerDocument||elem)!==document){setDocument(elem);}var fn=Expr.attrHandle[name.toLowerCase()],// Don't get fooled by Object.prototype properties (jQuery #13807)
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;// Unless we *know* we can detect duplicates, assume their presence
hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while(elem=results[i++]){if(elem===results[i]){j=duplicates.push(i);}}while(j--){results.splice(duplicates[j],1);}}// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
sortInput=null;return results;};/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){// If no nodeType, this is expected to be an array
while(node=elem[i++]){// Do not traverse comment nodes
ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if(typeof elem.textContent==="string"){return elem.textContent;}else{// Traverse its children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}// Do not include comment or processing instruction nodes
return ret;};Expr=Sizzle.selectors={// Can be adjusted by the user
cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function ATTR(match){match[1]=match[1].replace(runescape,funescape);// Move the given value to match[3] whether quoted or unquoted
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}return match.slice(0,4);},"CHILD":function CHILD(match){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){// nth-* requires argument
if(!match[3]){Sizzle.error(match[0]);}// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+(match[7]+match[8]||match[3]==="odd");// other types prohibit arguments
}else if(match[3]){Sizzle.error(match[0]);}return match;},"PSEUDO":function PSEUDO(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}// Accept quoted arguments as-is
if(match[3]){match[2]=match[4]||match[5]||"";// Strip excess characters from unquoted arguments
}else if(unquoted&&rpseudo.test(unquoted)&&(// Get excess from tokenize (recursively)
excess=tokenize(unquoted,true))&&(// advance to the next closing parenthesis
excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){// excess is a negative index
match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}// Return only captures needed by the pseudo filter method (type and argument)
return match.slice(0,3);}},filter:{"TAG":function TAG(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function CLASS(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function ATTR(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}if(!operator){return true;}result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function CHILD(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?// Shortcut for :nth-*(n)
function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){// :(first|last|only)-(child|of-type)
if(simple){while(dir){node=elem;while(node=node[dir]){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}// Reverse direction for :only-* (if we haven't yet done so)
start=dir=type==="only"&&!start&&"nextSibling";}return true;}start=[forward?parent.firstChild:parent.lastChild];// non-xml :nth-child(...) stores cache data on `parent`
if(forward&&useCache){// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
node=parent;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(// Fallback to seeking `elem` from the start
diff=nodeIndex=0)||start.pop()){// When found, cache indexes on `parent` and break
if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{// Use previously-cached element index if available
if(useCache){// ...in a gzip-friendly way
node=elem;outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(diff===false){// Use the same loop as above to seek `elem` from the start
while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){// Cache the index of each encountered element
if(useCache){outerCache=node[expando]||(node[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}if(node===elem){break;}}}}}// Incorporate the offset, then check against cycle size
diff-=last;return diff===first||diff%first===0&&diff/first>=0;}};},"PSEUDO":function PSEUDO(pseudo,argument){// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
if(fn[expando]){return fn(argument);}// But maintain support for old signatures
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}return fn;}},pseudos:{// Potentially complex pseudos
"not":markFunction(function(selector){// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;// Match elements unmatched by `matcher`
while(i--){if(elem=unmatched[i]){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);// Don't keep the element (issue #299)
input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
"lang":markFunction(function(lang){// lang value must be a valid identifier
if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if(elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang")){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),// Miscellaneous
"target":function target(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function root(elem){return elem===docElem;},"focus":function focus(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},// Boolean properties
"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function checked(elem){// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var nodeName=elem.nodeName.toLowerCase();return nodeName==="input"&&!!elem.checked||nodeName==="option"&&!!elem.selected;},"selected":function selected(elem){// Accessing this property makes selected-by-default
// options in Safari work properly
if(elem.parentNode){elem.parentNode.selectedIndex;}return elem.selected===true;},// Contents
"empty":function empty(elem){// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}return true;},"parent":function parent(elem){return!Expr.pseudos["empty"](elem);},// Element/input types
"header":function header(elem){return rheader.test(elem.nodeName);},"input":function input(elem){return rinputs.test(elem.nodeName);},"button":function button(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function text(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&(// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
(attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},// Position-in-collection
"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];// Add button/input type pseudos
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}// Easy API for creating new setFilters
function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){// Comma and first run
if(!matched||(match=rcomma.exec(soFar))){if(match){// Don't consume trailing commas as valid
soFar=soFar.slice(match[0].length)||soFar;}groups.push(tokens=[]);}matched=false;// Combinators
if(match=rcombinators.exec(soFar)){matched=match.shift();tokens.push({value:matched,// Cast descendant combinators to space
type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}// Filters
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}if(!matched){break;}}// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
return parseOnly?soFar.length:soFar?Sizzle.error(selector):// Cache the tokens
tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}return selector;}function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?// Check against closest ancestor/preceding element
function(elem,context,xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}return false;}:// Check against all ancestor/preceding elements
function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(xml){while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while(elem=elem[dir]){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){// Assign to newCache so results back-propagate to previous elements
return newCache[2]=oldCache[2];}else{// Reuse newcache so results back-propagate to previous elements
uniqueCache[key]=newCache;// A match means we're done; a fail means we have to keep checking
if(newCache[2]=matcher(elem,context,xml)){return true;}}}}}return false;};}function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}return true;}:matchers[0];}function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}return results;}function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if(elem=unmatched[i]){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}return newUnmatched;}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,// Get initial elements from seed or context
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),// Prefilter to get matcher input, preserving a map for seed-results synchronization
matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
postFinder||(seed?preFilter:preexisting||postFilter)?// ...intermediate processing is necessary
[]:// ...otherwise use results directly
results:matcherIn;// Find primary matches
if(matcher){matcher(matcherIn,matcherOut,context,xml);}// Apply postFilter
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);// Un-match failing elements by moving them back to matcherIn
i=temp.length;while(i--){if(elem=temp[i]){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}if(seed){if(postFinder||preFilter){if(postFinder){// Get the final matcherOut by condensing this intermediate into postFinder contexts
temp=[];i=matcherOut.length;while(i--){if(elem=matcherOut[i]){// Restore matcherIn since elem is not yet a final match
temp.push(matcherIn[i]=elem);}}postFinder(null,matcherOut=[],temp,xml);}// Move matched elements from seed to results to keep them synchronized
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}// Add elements to results, through postFinder if defined
}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,// The foundational matcher ensures that elements are reachable from top-level context(s)
matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));// Avoid hanging onto element (issue #299)
checkContext=null;return ret;}];for(;i<len;i++){if(matcher=Expr.relative[tokens[i].type]){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);// Return special upon seeing a positional matcher
if(matcher[expando]){// Find the next relative operator (if any) for proper handling
j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));}matchers.push(matcher);}}return elementMatcher(matchers);}function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function superMatcher(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,// We must always have either seed elements or outermost context
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),// Use integer dirruns iff this is the outermost matcher
dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||0.1,len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}while(matcher=elementMatchers[j++]){if(matcher(elem,context||document,xml)){results.push(elem);break;}}if(outermost){dirruns=dirrunsUnique;}}// Track unmatched elements for set filters
if(bySet){// They will have gone through all possible matchers
if(elem=!matcher&&elem){matchedCount--;}// Lengthen the array for every element, matched or not
if(seed){unmatched.push(elem);}}}// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
matchedCount+=i;// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(bySet&&i!==matchedCount){j=0;while(matcher=setMatchers[j++]){matcher(unmatched,setMatched,context,xml);}if(seed){// Reintegrate element matches to eliminate the need for sorting
if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}// Discard index placeholder values to get only actual matches
setMatched=condense(setMatched);}// Add matches to results
push.apply(results,setMatched);// Seedless set matches succeeding multiple successful matchers stipulate sorting
if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){Sizzle.uniqueSort(results);}}// Override manipulation of globals by nested matchers
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}compile=Sizzle.compile=function(selector,match/* Internal Use Only */){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){// Generate a function of recursive functions that can be used to check each element
if(!match){match=tokenize(selector);}i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}// Cache the compiled function
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));// Save selector and tokenization
cached.selector=selector;}return cached;};/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(match.length===1){// Reduce context if the leading compound selector is an ID
tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;// Precompiled matchers will still verify ancestry, so step up a level
}else if(compiled){context=context.parentNode;}selector=selector.slice(tokens.shift().value.length);}// Fetch a seed set for right-to-left matching
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];// Abort if we hit a combinator
if(Expr.relative[type=token.type]){break;}if(find=Expr.find[type]){// Search, expanding context for leading sibling combinators
if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){// If seed is empty or no tokens remain, we can return early
tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}break;}}}}// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};// One-time assignments
// Sort stability
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates=!!hasDuplicate;// Initialize against the default document
setDocument();// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached=assert(function(el){// Should return 1, but returns 4 (following)
return el.compareDocumentPosition(document.createElement("fieldset"))&1;});// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}return Sizzle;}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;// Deprecated
jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function dir(elem,_dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[_dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}matched.push(elem);}}return matched;};var _siblings=function _siblings(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}return matched;};var rneedsContext=jQuery.expr.match.needsContext;var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;var risSimple=/^.[^:#\[\.,]*$/;// Implement the identical functionality for filter and not
function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}// Single element
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return elem===qualifier!==not;});}// Arraylike of elements (jQuery, arguments, Array)
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not;});}// Simple selector that can be filtered directly, removing non-Elements
if(risSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}// Complex selector, compare the two sets, removing non-Elements
qualifier=jQuery.filter(qualifier,elements);return jQuery.grep(elements,function(elem){return indexOf.call(qualifier,elem)>-1!==not&&elem.nodeType===1;});}jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function find(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}return len>1?jQuery.uniqueSort(ret):ret;},filter:function filter(selector){return this.pushStack(winnow(this,selector||[],false));},not:function not(selector){return this.pushStack(winnow(this,selector||[],true));},is:function is(selector){return!!winnow(this,// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});// Initialize a jQuery object
// A central reference to the root jQuery(document)
var rootjQuery,// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;// HANDLE: $(""), $(null), $(undefined), $(false)
if(!selector){return this;}// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
root=root||rootjQuery;// Handle HTML strings
if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){// Assume that strings that start and end with <> are HTML and skip the regex check
match=[null,selector,null];}else{match=rquickExpr.exec(selector);}// Match html or make sure no context is specified for #id
if(match&&(match[1]||!context)){// HANDLE: $(html) -> $(array)
if(match[1]){context=context instanceof jQuery?context[0]:context;// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));// HANDLE: $(html, props)
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){// Properties of context are called as methods if possible
if(jQuery.isFunction(this[match])){this[match](context[match]);// ...and otherwise set as attributes
}else{this.attr(match,context[match]);}}}return this;// HANDLE: $(#id)
}else{elem=document.getElementById(match[2]);if(elem){// Inject the element directly into the jQuery object
this[0]=elem;this.length=1;}return this;}// HANDLE: $(expr, $(...))
}else if(!context||context.jquery){return(context||root).find(selector);// HANDLE: $(expr, context)
// (which is just equivalent to: $(context).find(expr)
}else{return this.constructor(context).find(selector);}// HANDLE: $(DOMElement)
}else if(selector.nodeType){this[0]=selector;this.length=1;return this;// HANDLE: $(function)
// Shortcut for document ready
}else if(jQuery.isFunction(selector)){return root.ready!==undefined?root.ready(selector):// Execute immediately if ready is not present
selector(jQuery);}return jQuery.makeArray(selector,this);};// Give the init function the jQuery prototype for later instantiation
init.prototype=jQuery.fn;// Initialize central reference
rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,// Methods guaranteed to produce a unique set when starting from a unique set
guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function has(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function closest(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);// Positional selectors never match, since there's no _selection_ context
if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){// Always skip document fragments
if(cur.nodeType<11&&(targets?targets.index(cur)>-1:// Don't pass non-elements to Sizzle
cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},// Determine the position of an element within the set
index:function index(elem){// No argument, return index in parent
if(!elem){return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;}// Index in selector
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}// Locate the position of the desired element
return indexOf.call(this,// If it receives a jQuery object, the first element is used
elem.jquery?elem[0]:elem);},add:function add(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function addBack(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}return cur;}jQuery.each({parent:function parent(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function parents(elem){return dir(elem,"parentNode");},parentsUntil:function parentsUntil(elem,i,until){return dir(elem,"parentNode",until);},next:function next(elem){return sibling(elem,"nextSibling");},prev:function prev(elem){return sibling(elem,"previousSibling");},nextAll:function nextAll(elem){return dir(elem,"nextSibling");},prevAll:function prevAll(elem){return dir(elem,"previousSibling");},nextUntil:function nextUntil(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function prevUntil(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function siblings(elem){return _siblings((elem.parentNode||{}).firstChild,elem);},children:function children(elem){return _siblings(elem.firstChild);},contents:function contents(elem){return elem.contentDocument||jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}if(this.length>1){// Remove duplicates
if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}// Reverse order for parents* and prev-derivatives
if(rparentsprev.test(name)){matched.reverse();}}return this.pushStack(matched);};});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;// Convert String-formatted options into Object-formatted ones
function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */jQuery.Callbacks=function(options){// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var// Flag to know if list is currently firing
firing,// Last fire value for non-forgettable lists
memory,// Flag to know if list was already fired
_fired,// Flag to prevent firing
_locked,// Actual callback list
list=[],// Queue of execution data for repeatable lists
queue=[],// Index of currently firing callback (modified by add/remove as needed)
firingIndex=-1,// Fire callbacks
fire=function fire(){// Enforce single-firing
_locked=options.once;// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
_fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){// Run callback and check for early termination
if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){// Jump to end and forget the data so .add doesn't re-fire
firingIndex=list.length;memory=false;}}}// Forget the data if we're done with it
if(!options.memory){memory=false;}firing=false;// Clean up if we're done firing for good
if(_locked){// Keep an empty list if we have data for future add calls
if(memory){list=[];// Otherwise, this object is spent
}else{list="";}}},// Actual Callbacks object
self={// Add a callback or a collection of callbacks to the list
add:function add(){if(list){// If we have memory from a past run, we should fire after adding
if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}(function add(args){jQuery.each(args,function(_,arg){if(jQuery.isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&jQuery.type(arg)!=="string"){// Inspect recursively
add(arg);}});})(arguments);if(memory&&!firing){fire();}}return this;},// Remove a callback from the list
remove:function remove(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);// Handle firing indexes
if(index<=firingIndex){firingIndex--;}}});return this;},// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function has(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},// Remove all callbacks from the list
empty:function empty(){if(list){list=[];}return this;},// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function disable(){_locked=queue=[];list=memory="";return this;},disabled:function disabled(){return!list;},// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function lock(){_locked=queue=[];if(!memory&&!firing){list=memory="";}return this;},locked:function locked(){return!!_locked;},// Call all callbacks with the given context and arguments
fireWith:function fireWith(context,args){if(!_locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}return this;},// Call all the callbacks with the given arguments
fire:function fire(){self.fireWith(this,arguments);return this;},// To know if the callbacks have already been called at least once
fired:function fired(){return!!_fired;}};return self;};function Identity(v){return v;}function Thrower(ex){throw ex;}function adoptValue(value,resolve,reject){var method;try{// Check for promise aspect first to privilege synchronous behavior
if(value&&jQuery.isFunction(method=value.promise)){method.call(value).done(resolve).fail(reject);// Other thenables
}else if(value&&jQuery.isFunction(method=value.then)){method.call(value,resolve,reject);// Other non-thenables
}else{// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
resolve.call(undefined,value);}// For Promises/A+, convert exceptions into rejections
// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
// Deferred#then to conditionally suppress rejection.
}catch(value){// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
reject.call(undefined,value);}}jQuery.extend({Deferred:function Deferred(func){var tuples=[// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],_state="pending",_promise={state:function state(){return _state;},always:function always(){deferred.done(arguments).fail(arguments);return this;},"catch":function _catch(fn){return _promise.then(null,fn);},// Keep pipe for back-compat
pipe:function pipe()/* fnDone, fnFail, fnProgress */{var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var fn=jQuery.isFunction(fns[tuple[4]])&&fns[tuple[4]];// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function then(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function mightThrow(){var returned,then;// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(depth<maxDepth){return;}returned=handler.apply(that,args);// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
then=returned&&(// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
(typeof returned==="undefined"?"undefined":_typeof(returned))==="object"||typeof returned==="function")&&returned.then;// Handle a returned thenable
if(jQuery.isFunction(then)){// Special processors (notify) just wait for resolution
if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));// Normal processors (resolve) also hook into progress
}else{// ...and disregard older resolution values
maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}// Handle all other returned values
}else{// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Identity){that=undefined;args=[returned];}// Process the value(s)
// Default process is resolve
(special||deferred.resolveWith)(that,args);}},// Only normal processors (resolve) catch and reject exceptions
process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
if(depth+1>=maxDepth){// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
if(handler!==Thrower){that=undefined;args=[e];}deferred.rejectWith(that,args);}}};// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
if(depth){process();}else{// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}window.setTimeout(process);}};}return jQuery.Deferred(function(newDefer){// progress_handlers.add( ... )
tuples[0][3].add(resolve(0,newDefer,jQuery.isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));// fulfilled_handlers.add( ... )
tuples[1][3].add(resolve(0,newDefer,jQuery.isFunction(onFulfilled)?onFulfilled:Identity));// rejected_handlers.add( ... )
tuples[2][3].add(resolve(0,newDefer,jQuery.isFunction(onRejected)?onRejected:Thrower));}).promise();},// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function promise(obj){return obj!=null?jQuery.extend(obj,_promise):_promise;}},deferred={};// Add list-specific methods
jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
_promise[tuple[1]]=list.add;// Handle state
if(stateString){list.add(function(){// state = "resolved" (i.e., fulfilled)
// state = "rejected"
_state=stateString;},// rejected_callbacks.disable
// fulfilled_callbacks.disable
tuples[3-i][2].disable,// progress_callbacks.lock
tuples[0][2].lock);}// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
list.add(tuple[3].fire);// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
deferred[tuple[0]+"With"]=list.fireWith;});// Make the deferred a promise
_promise.promise(deferred);// Call given func if any
if(func){func.call(deferred,deferred);}// All done!
return deferred;},// Deferred helper
when:function when(singleValue){var// count of uncompleted subordinates
remaining=arguments.length,// count of unprocessed arguments
i=remaining,// subordinate fulfillment data
resolveContexts=Array(i),resolveValues=_slice.call(arguments),// the master Deferred
master=jQuery.Deferred(),// subordinate callback factory
updateFunc=function updateFunc(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?_slice.call(arguments):value;if(! --remaining){master.resolveWith(resolveContexts,resolveValues);}};};// Single- and empty arguments are adopted like Promise.resolve
if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject);// Use .then() to unwrap secondary thenables (cf. gh-3000)
if(master.state()==="pending"||jQuery.isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}// Multiple arguments are aggregated like Promise.all array elements
while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}return master.promise();}});// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};// The deferred used on DOM ready
var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
// happens at the time of error handling instead of callback
// registration.
.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({// Is the DOM ready to be used? Set to true once it occurs.
isReady:false,// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,// Hold (or release) the ready event
holdReady:function holdReady(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},// Handle when the DOM is ready
ready:function ready(wait){// Abort if there are pending holds or we're already ready
if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}// Remember that the DOM is ready
jQuery.isReady=true;// If a normal DOM Ready event fired, decrement, and wait if need be
if(wait!==true&&--jQuery.readyWait>0){return;}// If there are functions bound, to execute
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;// The ready event handler and self cleanup method
function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if(document.readyState==="complete"||document.readyState!=="loading"&&!document.documentElement.doScroll){// Handle it asynchronously to allow scripts the opportunity to delay ready
window.setTimeout(jQuery.ready);}else{// Use the handy event callback
document.addEventListener("DOMContentLoaded",completed);// A fallback to window.onload, that will always work
window.addEventListener("load",completed);}// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access=function access(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;// Sets many values
if(jQuery.type(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}// Sets one value
}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}if(bulk){// Bulk operations run against the entire set
if(raw){fn.call(elems,value);fn=null;// ...except when executing function values
}else{bulk=fn;fn=function fn(elem,key,value){return bulk.call(jQuery(elem),value);};}}if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}if(chainable){return elems;}// Gets
if(bulk){return fn.call(elems);}return len?fn(elems[0],key):emptyGet;};var acceptData=function acceptData(owner){// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;};function Data(){this.expando=jQuery.expando+Data.uid++;}Data.uid=1;Data.prototype={cache:function cache(owner){// Check if the owner object already has a cache
var value=owner[this.expando];// If not, create one
if(!value){value={};// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
if(acceptData(owner)){// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
if(owner.nodeType){owner[this.expando]=value;// Otherwise secure it in a non-enumerable property
// configurable must be true to allow the property to be
// deleted when data is removed
}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}return value;},set:function set(owner,data,value){var prop,cache=this.cache(owner);// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if(typeof data==="string"){cache[jQuery.camelCase(data)]=value;// Handle: [ owner, { properties } ] args
}else{// Copy the properties one-by-one to the cache object
for(prop in data){cache[jQuery.camelCase(prop)]=data[prop];}}return cache;},get:function get(owner,key){return key===undefined?this.cache(owner):// Always use camelCase key (gh-2257)
owner[this.expando]&&owner[this.expando][jQuery.camelCase(key)];},access:function access(owner,key,value){// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
if(key===undefined||key&&typeof key==="string"&&value===undefined){return this.get(owner,key);}// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
this.set(owner,key,value);// Since the "set" path can have two possible entry points
// return the expected data based on which path was taken[*]
return value!==undefined?value:key;},remove:function remove(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}if(key!==undefined){// Support array or space separated string of keys
if(jQuery.isArray(key)){// If key is an array of keys...
// We always set camelCase keys, so remove that.
key=key.map(jQuery.camelCase);}else{key=jQuery.camelCase(key);// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
key=key in cache?[key]:key.match(rnothtmlwhite)||[];}i=key.length;while(i--){delete cache[key[i]];}}// Remove the expando if there's no more data
if(key===undefined||jQuery.isEmptyObject(cache)){// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function hasData(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}if(data==="false"){return false;}if(data==="null"){return null;}// Only convert to a number if it doesn't change the string
if(data===+data+""){return+data;}if(rbrace.test(data)){return JSON.parse(data);}return data;}function dataAttr(elem,key,data){var name;// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}// Make sure we set the data so it isn't changed later
dataUser.set(elem,key,data);}else{data=undefined;}}return data;}jQuery.extend({hasData:function hasData(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function data(elem,name,_data){return dataUser.access(elem,name,_data);},removeData:function removeData(elem,name){dataUser.remove(elem,name);},// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function _data(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function _removeData(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function data(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;// Gets all values
if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){// Support: IE 11 only
// The attrs elements can be null (#14894)
if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}dataPriv.set(elem,"hasDataAttrs",true);}}return data;}// Sets multiple values
if((typeof key==="undefined"?"undefined":_typeof(key))==="object"){return this.each(function(){dataUser.set(this,key);});}return access(this,function(value){var data;// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(elem&&value===undefined){// Attempt to get data from the cache
// The key will always be camelCased in Data
data=dataUser.get(elem,key);if(data!==undefined){return data;}// Attempt to "discover" the data in
// HTML5 custom data-* attrs
data=dataAttr(elem,key);if(data!==undefined){return data;}// We tried really hard, but the data doesn't exist.
return;}// Set the data...
this.each(function(){// We always store the camelCased key
dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function removeData(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function queue(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);// Speed up dequeue by getting out quickly if this is just a lookup
if(data){if(!queue||jQuery.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}return queue||[];}},dequeue:function dequeue(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function next(){jQuery.dequeue(elem,type);};// If the fx queue is dequeued, always remove the progress sentinel
if(fn==="inprogress"){fn=queue.shift();startLength--;}if(fn){// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
if(type==="fx"){queue.unshift("inprogress");}// Clear up the last queue stop function
delete hooks.stop;fn.call(elem,next,hooks);}if(!startLength&&hooks){hooks.empty.fire();}},// Not public - generate a queueHooks object, or return the current one
_queueHooks:function _queueHooks(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function queue(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}if(arguments.length<setter){return jQuery.queue(this[0],type);}return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);// Ensure a hooks for this queue
jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function dequeue(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function clearQueue(type){return this.queue(type||"fx",[]);},// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function promise(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function resolve(){if(! --count){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}resolve();return defer.promise(obj);}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function isHiddenWithinTree(elem,el){// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
elem=el||elem;// Inline style trumps all
return elem.style.display==="none"||elem.style.display===""&&// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function swap(elem,options,callback,args){var ret,name,old={};// Remember the old values, and insert the new ones
for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}ret=callback.apply(elem,args||[]);// Revert the old values
for(name in options){elem.style[name]=old[name];}return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale=1,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),// Starting value computation is required for potential unit mismatches
initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){// Trust units reported by jQuery.css
unit=unit||initialInUnit[3];// Make sure we update the tween properties later on
valueParts=valueParts||[];// Iteratively approximate from a nonzero starting point
initialInUnit=+initial||1;do{// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
scale=scale||".5";// Adjust and apply
initialInUnit=initialInUnit/scale;jQuery.style(elem,prop,initialInUnit+unit);// Update scale, tolerating zero or NaN from tween.cur()
// Break the loop if scale is unchanged or perfect, or if we've just had enough.
}while(scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations);}if(valueParts){initialInUnit=+initialInUnit||+initial||0;// Apply relative offset (+=/-=) if specified
adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}return adjusted;}var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}defaultDisplayMap[nodeName]=display;return display;}function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;// Determine new display value for elements that need to change
for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}display=elem.style.display;if(show){// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";// Remember what we're overwriting
dataPriv.set(elem,"display",display);}}}// Set the display of the elements in a second loop to avoid constant reflow
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}return elements;}jQuery.fn.extend({show:function show(){return showHide(this,true);},hide:function hide(){return showHide(this);},toggle:function toggle(state){if(typeof state==="boolean"){return state?this.show():this.hide();}return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i;var rscriptType=/^$|\/(?:java|ecma)script/i;// We have to close these tags to support XHTML (#13200)
var wrapMap={// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};// Support: IE <=9 only
wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}if(tag===undefined||tag&&jQuery.nodeName(context,tag)){return jQuery.merge([context],ret);}return ret;}// Mark scripts as having already been evaluated
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){// Add nodes directly
if(jQuery.type(elem)==="object"){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,elem.nodeType?[elem]:elem);// Convert non-html into a text node
}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));// Convert html into DOM nodes
}else{tmp=tmp||fragment.appendChild(context.createElement("div"));// Deserialize a standard representation
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];// Descend through wrappers to the right content
j=wrap[0];while(j--){tmp=tmp.lastChild;}// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(nodes,tmp.childNodes);// Remember the top-level container
tmp=fragment.firstChild;// Ensure the created nodes are orphaned (#12392)
tmp.textContent="";}}}// Remove wrapper from fragment
fragment.textContent="";i=0;while(elem=nodes[i++]){// Skip elements already in the context collection (trac-4087)
if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}continue;}contains=jQuery.contains(elem.ownerDocument,elem);// Append to fragment
tmp=getAll(fragment.appendChild(elem),"script");// Preserve script evaluation history
if(contains){setGlobalEval(tmp);}// Capture executables
if(scripts){j=0;while(elem=tmp[j++]){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}return fragment;}(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}function returnFalse(){return false;}// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement(){try{return document.activeElement;}catch(err){}}function _on(elem,types,selector,data,fn,one){var origFn,type;// Types can be a map of types/handlers
if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-Object, selector, data )
if(typeof selector!=="string"){// ( types-Object, data )
data=data||selector;selector=undefined;}for(type in types){_on(elem,type,selector,data,types[type],one);}return elem;}if(data==null&&fn==null){// ( types, fn )
fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){// ( types, selector, fn )
fn=data;data=undefined;}else{// ( types, data, fn )
fn=data;data=selector;selector=undefined;}}if(fn===false){fn=returnFalse;}else if(!fn){return elem;}if(one===1){origFn=fn;fn=function fn(event){// Can use an empty set, since event contains the info
jQuery().off(event);return origFn.apply(this,arguments);};// Use same guid so caller can remove using origFn
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */jQuery.event={global:{},add:function add(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(!elemData){return;}// Caller can pass in an object of custom data in lieu of the handler
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
if(selector){jQuery.find.matchesSelector(documentElement,selector);}// Make sure that the handler has a unique ID, used to find/remove it later
if(!handler.guid){handler.guid=jQuery.guid++;}// Init the element's event structure and main handler, if this is the first
if(!(events=elemData.events)){events=elemData.events={};}if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}// Handle multiple events separated by a space
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// There *must* be a type, no attaching namespace-only handlers
if(!type){continue;}// If event changes its type, use the special event handlers for the changed type
special=jQuery.event.special[type]||{};// If selector defined, determine special event api type, otherwise given type
type=(selector?special.delegateType:special.bindType)||type;// Update special based on newly reset type
special=jQuery.event.special[type]||{};// handleObj is passed to all event handlers
handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);// Init the event handler queue if we're the first
if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;// Only use addEventListener if the special events handler returns false
if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}// Add to the element's handler list, delegates in front
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}// Keep track of which events have ever been used, for event optimization
jQuery.event.global[type]=true;}},// Detach an event or set of events from an element
remove:function remove(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}// Once for each type.namespace in types; type may be omitted
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();// Unbind all events (on this namespace, if provided) for the element
if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}continue;}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");// Remove matching events
origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}if(special.remove){special.remove.call(elem,handleObj);}}}// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}delete events[type];}}// Remove data and the expando if it's no longer used
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function dispatch(nativeEvent){// Make a writable jQuery.Event from the native event object
var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};// Use the fix-ed jQuery.Event rather than the (read-only) native event
args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}event.delegateTarget=this;// Call the preDispatch hook for the mapped type, and let it bail if desired
if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}// Determine handlers
handlerQueue=jQuery.event.handlers.call(this,event,handlers);// Run delegates first; they may want to stop propagation beneath us
i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}// Call the postDispatch hook for the mapped type
if(special.postDispatch){special.postDispatch.call(this,event);}return event.result;},handlers:function handlers(event,_handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=_handlers.delegateCount,cur=event.target;// Find delegate handlers
if(delegateCount&&// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
cur.nodeType&&// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=_handlers[i];// Don't conflict with Object.prototype properties (#13203)
sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}// Add the remaining (directly-bound) handlers
cur=this;if(delegateCount<_handlers.length){handlerQueue.push({elem:cur,handlers:_handlers.slice(delegateCount)});}return handlerQueue;},addProp:function addProp(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:jQuery.isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function set(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function fix(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{// Prevent triggered image.load events from bubbling to window.load
noBubble:true},focus:{// Fire native event if possible so blur/focus sequence is correct
trigger:function trigger(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{// For checkbox, fire native event so checked state will be right
trigger:function trigger(){if(this.type==="checkbox"&&this.click&&jQuery.nodeName(this,"input")){this.click();return false;}},// For cross-browser consistency, don't fire native .click() on links
_default:function _default(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function postDispatch(event){// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){// This "if" is needed for plain objects
if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){// Allow instantiation without the 'new' keyword
if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}// Event object
if(src&&src.type){this.originalEvent=src;this.type=src.type;// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&// Support: Android <=2.3 only
src.returnValue===false?returnTrue:returnFalse;// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;// Event type
}else{this.type=src;}// Put explicitly provided properties onto the event object
if(props){jQuery.extend(this,props);}// Create a timestamp if incoming event doesn't have one
this.timeStamp=src&&src.timeStamp||jQuery.now();// Mark it as fixed
this[jQuery.expando]=true;};// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function preventDefault(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function stopPropagation(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function stopImmediatePropagation(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}this.stopPropagation();}};// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function which(event){var button=event.button;// Add which for key events
if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}// Add which for click: 1 === left; 2 === middle; 3 === right
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}if(button&2){return 3;}if(button&4){return 2;}return 0;}return event.which;}},jQuery.event.addProp);// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function handle(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
if(!related||related!==target&&!jQuery.contains(target,related)){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}return ret;}};});jQuery.fn.extend({on:function on(types,selector,data,fn){return _on(this,types,selector,data,fn);},one:function one(types,selector,data,fn){return _on(this,types,selector,data,fn,1);},off:function off(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){// ( event )  dispatched jQuery.Event
handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}if((typeof types==="undefined"?"undefined":_typeof(types))==="object"){// ( types-object [, selector] )
for(type in types){this.off(type,selector,types[type]);}return this;}if(selector===false||typeof selector==="function"){// ( types [, fn] )
fn=selector;selector=undefined;}if(fn===false){fn=returnFalse;}return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var/* eslint-disable max-len */// See https://github.com/eslint/eslint/issues/3229
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
rnoInnerhtml=/<script|<style|<link/i,// checked="checked" or checked
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return elem.getElementsByTagName("tbody")[0]||elem;}return elem;}// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}return elem;}function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}// 1. Copy private data: events, handlers, etc.
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}// 2. Copy user data
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}// Fix IE bugs, see support tests
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();// Fails to persist the checked state of a cloned checkbox or radio button.
if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;// Fails to return the selected option to the default selected state when cloning options
}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}function domManip(collection,args,callback,ignored){// Flatten any nested arrays
args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);// We can't cloneNode fragments that contain checked, in WebKit
if(isFunction||l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value)){return collection.each(function(index){var self=collection.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}domManip(self,args,callback,ignored);});}if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}// Require either new content or an interest in ignored elements to invoke the callback
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);// Keep references to cloned scripts for later restoration
if(hasScripts){// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
jQuery.merge(scripts,getAll(node,"script"));}}callback.call(collection[i],node,i);}if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;// Reenable scripts
jQuery.map(scripts,restoreScript);// Evaluate executable scripts on first document insertion
for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){// Optional AJAX dependency, but won't run scripts if not present
if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc);}}}}}}return collection;}function _remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}node.parentNode.removeChild(node);}}return elem;}jQuery.extend({htmlPrefilter:function htmlPrefilter(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function clone(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);// Fix IE cloning issues
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}// Copy the events from the original to the clone
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}// Preserve script evaluation history
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}// Return the cloned set
return clone;},cleanData:function cleanData(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if(data=elem[dataPriv.expando]){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);// This is a shortcut to avoid jQuery.event.remove's overhead
}else{jQuery.removeEvent(elem,type,data.handle);}}}// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataPriv.expando]=undefined;}if(elem[dataUser.expando]){// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function detach(selector){return _remove(this,selector,true);},remove:function remove(selector){return _remove(this,selector);},text:function text(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function append(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function prepend(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function before(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function after(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function empty(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){// Prevent memory leaks
jQuery.cleanData(getAll(elem,false));// Remove any remaining nodes
elem.textContent="";}}return this;},clone:function clone(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function html(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}// See if we can take a shortcut and just use innerHTML
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};// Remove element nodes and prevent memory leaks
if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}elem=0;// If using innerHTML throws an exception, use the fallback method
}catch(e){}}if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function replaceWith(){var ignored=[];// Make the changes, replacing each non-ignored context element with the new content
return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}// Force callback invocation
},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
push.apply(ret,elems.get());}return this.pushStack(ret);};});var rmargin=/^margin/;var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function getStyles(elem){// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}return view.getComputedStyle(elem);};(function(){// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function computeStyleTests(){// This is a singleton, we need to execute it only once
if(!div){return;}div.style.cssText="box-sizing:border-box;"+"position:relative;display:block;"+"margin:auto;border:1px;padding:1px;"+"top:1%;width:50%";div.innerHTML="";documentElement.appendChild(container);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
reliableMarginLeftVal=divStyle.marginLeft==="2px";boxSizingReliableVal=divStyle.width==="4px";// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
div.style.marginRight="50%";pixelMarginRightVal=divStyle.marginRight==="4px";documentElement.removeChild(container);// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
div=null;}var pixelPositionVal,boxSizingReliableVal,pixelMarginRightVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");// Finish early in limited (non-browser) environments
if(!div.style){return;}// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+"padding:0;margin-top:1px;position:absolute";container.appendChild(div);jQuery.extend(support,{pixelPosition:function pixelPosition(){computeStyleTests();return pixelPositionVal;},boxSizingReliable:function boxSizingReliable(){computeStyleTests();return boxSizingReliableVal;},pixelMarginRight:function pixelMarginRight(){computeStyleTests();return pixelMarginRightVal;},reliableMarginLeft:function reliableMarginLeft(){computeStyleTests();return reliableMarginLeftVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);// Support: IE <=9 only
// getPropertyValue is only needed for .css('filter') (#12537)
if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){// Remember the original values
width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;// Put in the new values to get a computed value out
style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;// Revert the changed values
style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}return ret!==undefined?// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
ret+"":ret;}function addGetHookIf(conditionFn,hookFn){// Define the hook, we'll check on the first run if it's really needed.
return{get:function get(){if(conditionFn()){// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
delete this.get;return;}// Hook needed; redefine it so that the support test is not executed again.
return(this.get=hookFn).apply(this,arguments);}};}var// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
rdisplayswap=/^(none|table(?!-c[ea]).+)/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName(name){// Shortcut for names that are not vendor prefixed
if(name in emptyStyle){return name;}// Check for vendor prefixed names
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}function setPositiveNumber(elem,value,subtract){// Any relative (+/-) values have already been
// normalized at this point
var matches=rcssNum.exec(value);return matches?// Guard against undefined "subtract", e.g., when used as in cssHooks
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i,val=0;// If we already have the right measurement, avoid augmentation
if(extra===(isBorderBox?"border":"content")){i=4;// Otherwise initialize for horizontal or vertical properties
}else{i=name==="width"?1:0;}for(;i<4;i+=2){// Both box models exclude margin, so add it if we want it
if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}if(isBorderBox){// border-box includes padding, so remove it if we want content
if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}// At this point, extra isn't border nor margin, so remove border
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{// At this point, extra isn't content, so add padding
val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);// At this point, extra isn't content nor padding, so add border
if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}return val;}function getWidthOrHeight(elem,name,extra){// Start with offset property, which is equivalent to the border-box value
var val,valueIsBorderBox=true,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
if(elem.getClientRects().length){val=elem.getBoundingClientRect()[name];}// Some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(val<=0||val==null){// Fall back to computed then uncomputed css if necessary
val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}// Computed unit is not pixels. Stop here and return.
if(rnumnonpx.test(val)){return val;}// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
valueIsBorderBox=isBorderBox&&(support.boxSizingReliable()||val===elem.style[name]);// Normalize "", auto, and prepare for extra
val=parseFloat(val)||0;}// Use the active box-sizing model to add/subtract irrelevant styles
return val+augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles)+"px";}jQuery.extend({// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function get(elem,computed){if(computed){// We should always get a number back from opacity
var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{"float":"cssFloat"},// Get and set the style property on a DOM Node
style:function style(elem,name,value,extra){// Don't set styles on text and comment nodes
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}// Make sure that we're working with the right name
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Gets hook for the prefixed version, then unprefixed version
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// Check if we're setting a value
if(value!==undefined){type=typeof value==="undefined"?"undefined":_typeof(value);// Convert "+=" or "-=" to relative numbers (#7345)
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);// Fixes bug #9237
type="number";}// Make sure that null and NaN values aren't set (#7116)
if(value==null||value!==value){return;}// If a number was passed in, add the unit (except for certain CSS properties)
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}// background-* props affect original clone's values
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}// If a hook was provided, use that value, otherwise just set the specified value
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){style[name]=value;}}else{// If a hook was provided get the non-computed value from there
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}// Otherwise just get the value from the style object
return style[name];}},css:function css(elem,name,extra,styles){var val,num,hooks,origName=jQuery.camelCase(name);// Make sure that we're working with the right name
name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(origName)||origName);// Try prefixed name followed by the unprefixed name
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];// If a hook was provided get the computed value from there
if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}// Otherwise, if a way to get the computed value exists, use that
if(val===undefined){val=curCSS(elem,name,styles);}// Convert "normal" to computed value
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}// Make numeric if forced or a qualifier was provided and val looks numeric
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}return val;}});jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function get(elem,computed,extra){if(computed){// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
return rdisplayswap.test(jQuery.css(elem,"display"))&&(// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function set(elem,value,extra){var matches,styles=extra&&getStyles(elem),subtract=extra&&augmentWidthOrHeight(elem,name,extra,jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles);// Convert to pixels if value adjustment is needed
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[name]=value;value=jQuery.css(elem,name);}return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});// These hooks are used by animate to expand properties
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function expand(value){var i=0,expanded={},// Assumes a single number if not a string
parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function css(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}return map;}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function init(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function cur(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function run(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function get(tween){var result;// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
result=jQuery.css(tween.elem,tween.prop,"");// Empty strings, null, undefined and "auto" are converted to 0.
return!result||result==="auto"?0:result;},set:function set(tween){// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function set(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function linear(p){return p;},swing:function swing(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;// Back compat <1.8 extension point
jQuery.fx.step={};var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function raf(){if(timerId){window.requestAnimationFrame(raf);jQuery.fx.tick();}}// Animations created synchronously will run synchronously
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return fxNow=jQuery.now();}// Generate parameters to create a standard animation
function genFx(type,includeWidth){var which,i=0,attrs={height:type};// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}if(includeWidth){attrs.opacity=attrs.width=type;}return attrs;}function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(tween=collection[index].call(animation,prop,value)){// We're done with this property
return tween;}}}function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width"in props||"height"in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");// Queue-skipping animations hijack the fx hooks
if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}hooks.unqueued++;anim.always(function(){// Ensure the complete handler is called before this completes
anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}// Detect show/hide animations
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;// Ignore all other no-op show/hide data
}else{continue;}}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}// Bail out if this is a no-op like .hide().hide()
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}// Restrict "overflow" and "display" styles during box animations
if(isBox&&elem.nodeType===1){// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
opts.overflow=[style.overflow,style.overflowX,style.overflowY];// Identify a display type, preferring old show/hide data over the CSS cascade
restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{// Get nonempty value(s) by temporarily forcing visibility
showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}// Animate inline elements as inline-block
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){// Restore the original display value at the end of pure show/hide animations
if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}style.display="inline-block";}}}if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}// Implement show/hide animations
propTween=false;for(prop in orig){// General show/hide setup for this element animation
if(!propTween){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
if(toggle){dataShow.hidden=!hidden;}// Show elements before animating them
if(hidden){showHide([elem],true);}/* eslint-disable no-loop-func */anim.done(function(){/* eslint-enable no-loop-func */// The final step of a "hide" animation is actually hiding the element
if(!hidden){showHide([elem]);}dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}// Per-property setup
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}function propFilter(props,specialEasing){var index,name,easing,value,hooks;// camelCase, specialEasing and expand cssHook pass
for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}if(index!==name){props[name]=value;delete props[index];}hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){// Don't match elem in the :animated selector
delete tick.elem;}),tick=function tick(){if(stopped){return false;}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function createTween(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function stop(gotoEnd){var index=0,// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}// Resolve when we played the last frame; otherwise, reject
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(jQuery.isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=jQuery.proxy(result.stop,result);}return result;}}jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));// attach callbacks from options
return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function tweener(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function prefilter(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&(typeof speed==="undefined"?"undefined":_typeof(speed))==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};// Go to the end state if fx are off or if document is hidden
if(jQuery.fx.off||document.hidden){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}// Normalize opt.queue - true/undefined/null -> "fx"
if(opt.queue==null||opt.queue===true){opt.queue="fx";}// Queueing
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function fadeTo(speed,to,easing,callback){// Show any hidden elements after setting opacity to 0
return this.filter(isHiddenWithinTree).css("opacity",0).show()// Animate to the value specified
.end().animate({opacity:to},speed,easing,callback);},animate:function animate(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function doAnimation(){// Operate on a copy of prop so per-property easing won't be lost
var anim=Animation(this,jQuery.extend({},prop),optall);// Empty animations, or finishing resolves immediately
if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function stop(type,clearQueue,gotoEnd){var stopQueue=function stopQueue(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}if(clearQueue&&type!==false){this.queue(type||"fx",[]);}return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function finish(type){if(type!==false){type=type||"fx";}return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;// Enable finishing flag on private data
data.finish=true;// Empty the queue first
jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}// Look for any active animations, and finish them
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}// Look for any animations in the old queue and finish them
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}// Turn off finishing flag
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});// Generate shortcuts for custom animations
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];// Checks the timer has not already been removed
if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}if(!timers.length){jQuery.fx.stop();}fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);if(timer()){jQuery.fx.start();}else{jQuery.timers.pop();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=window.requestAnimationFrame?window.requestAnimationFrame(raf):window.setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){if(window.cancelAnimationFrame){window.cancelAnimationFrame(timerId);}else{window.clearInterval(timerId);}timerId=null;};jQuery.fx.speeds={slow:600,fast:200,// Default speed
_default:400};// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
support.checkOn=input.value!=="";// Support: IE <=11 only
// Must access selectedIndex to make default options select
support.optSelected=opt.selected;// Support: IE <=11 only
// An input loses its value after becoming a radio
input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function attr(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function removeAttr(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function attr(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set attributes on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}// Fallback to prop when attributes are not supported
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}elem.setAttribute(name,value+"");return value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}ret=jQuery.find.attr(elem,name);// Non-existent attributes return null, we normalize to undefined
return ret==null?undefined:ret;},attrHooks:{type:{set:function set(elem,value){if(!support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}return value;}}}},removeAttr:function removeAttr(elem,value){var name,i=0,// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while(name=attrNames[i++]){elem.removeAttribute(name);}}}});// Hooks for boolean attributes
boolHook={set:function set(elem,value,name){if(value===false){// Remove boolean attributes when set to false
jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){// Avoid an infinite loop by temporarily removing this function from the getter
handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function prop(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function removeProp(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function prop(elem,name,value){var ret,hooks,nType=elem.nodeType;// Don't get/set properties on text, comment and attribute nodes
if(nType===3||nType===8||nType===2){return;}if(nType!==1||!jQuery.isXMLDoc(elem)){// Fix name and attach hooks
name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}return elem[name]=value;}if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}return elem[name];},propHooks:{tabIndex:{get:function get(elem){// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}return-1;}}},propFix:{"for":"htmlFor","class":"className"}});// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if(!support.optSelected){jQuery.propHooks.selected={get:function get(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}return null;},set:function set(elem){/* eslint no-unused-expressions: "off" */var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});// Strip and collapse whitespace according to HTML spec
// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}jQuery.fn.extend({addClass:function addClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},removeClass:function removeClass(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}if(!arguments.length){return this.attr("class","");}if(typeof value==="string"&&value){classes=value.match(rnothtmlwhite)||[];while(elem=this[i++]){curValue=getClass(elem);// This expression is here for better compressibility (see addClass)
cur=elem.nodeType===1&&" "+stripAndCollapse(curValue)+" ";if(cur){j=0;while(clazz=classes[j++]){// Remove *all* instances
while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}// Only assign if different to avoid unneeded rendering.
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}return this;},toggleClass:function toggleClass(value,stateVal){var type=typeof value==="undefined"?"undefined":_typeof(value);if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}return this.each(function(){var className,i,self,classNames;if(type==="string"){// Toggle individual class names
i=0;self=jQuery(this);classNames=value.match(rnothtmlwhite)||[];while(className=classNames[i++]){// Check each className given, space separated list
if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}// Toggle whole class name
}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){// Store className if set
dataPriv.set(this,"__className__",className);}// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function hasClass(selector){var className,elem,i=0;className=" "+selector+" ";while(elem=this[i++]){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function val(value){var hooks,ret,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}ret=elem.value;// Handle most common string cases
if(typeof ret==="string"){return ret.replace(rreturn,"");}// Handle cases where value is null/undef or number
return ret==null?"":ret;}return;}isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}// Treat null/undefined as ""; convert numbers to string
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];// If set returns undefined, fall back to normal setting
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function get(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
stripAndCollapse(jQuery.text(elem));}},select:{get:function get(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}// Loop through all the selected options
for(;i<max;i++){option=options[i];// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if((option.selected||i===index)&&// Don't return options that are disabled or in a disabled optgroup
!option.disabled&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){// Get the specific value for the option
value=jQuery(option).val();// We don't need an array for one selects
if(one){return value;}// Multi-Selects return an array
values.push(value);}}return values;},set:function set(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];/* eslint-disable no-cond-assign */if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}/* eslint-enable no-cond-assign */}// Force browsers to behave consistently when non-matching value is set
if(!optionSet){elem.selectedIndex=-1;}return values;}}}});// Radios and checkboxes getter/setter
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function set(elem,value){if(jQuery.isArray(value)){return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});// Return jQuery for attributes-only inclusion
var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/;jQuery.extend(jQuery.event,{trigger:function trigger(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;// Don't do events on text and comment nodes
if(elem.nodeType===3||elem.nodeType===8){return;}// focus/blur morphs to focusin/out; ensure we're not firing them right now
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}if(type.indexOf(".")>-1){// Namespaced trigger; create a regexp to match event type in handle()
namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}ontype=type.indexOf(":")<0&&"on"+type;// Caller can pass in a jQuery.Event object, Object, or just an event type string
event=event[jQuery.expando]?event:new jQuery.Event(type,(typeof event==="undefined"?"undefined":_typeof(event))==="object"&&event);// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;// Clean up the event in case it is being reused
event.result=undefined;if(!event.target){event.target=elem;}// Clone any incoming data and prepend the event, creating the handler arg list
data=data==null?[event]:jQuery.makeArray(data,[event]);// Allow special events to draw outside the lines
special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}// Only add window if we got to document (e.g., not plain obj or detached DOM)
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}// Fire handlers on the event path
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;// jQuery handler
handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}// Native handler
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}event.type=type;// If nobody prevented the default action, do it now
if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
if(ontype&&jQuery.isFunction(elem[type])&&!jQuery.isWindow(elem)){// Don't re-trigger an onFOO event when we call its FOO() method
tmp=elem[ontype];if(tmp){elem[ontype]=null;}// Prevent re-triggering of the same event, since we already bubbled it above
jQuery.event.triggered=type;elem[type]();jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}return event.result;},// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function simulate(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function trigger(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function triggerHandler(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){// Handle event binding
jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function hover(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});support.focusin="onfocusin"in window;// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){// Attach a single capturing handler on the document while someone wants focusin/focusout
var handler=function handler(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function setup(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function teardown(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}var location=window.location;var nonce=jQuery.now();var rquery=/\?/;// Cross-browser xml parsing
jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{xml=new window.DOMParser().parseFromString(data,"text/xml");}catch(e){xml=undefined;}if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}return xml;};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){// Serialize array item.
jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){// Treat each array item as a scalar.
add(prefix,v);}else{// Item is non-scalar (array or object), encode its numeric index.
buildParams(prefix+"["+((typeof v==="undefined"?"undefined":_typeof(v))==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){// Serialize object item.
for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{// Serialize scalar item.
add(prefix,obj);}}// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param=function(a,traditional){var prefix,s=[],add=function add(key,valueOrFunction){// If value is a function, invoke it and use its return value
var value=jQuery.isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value==null?"":value);};// If an array was passed in, assume that it is an array of form elements.
if(jQuery.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){// Serialize the form elements
jQuery.each(a,function(){add(this.name,this.value);});}else{// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}// Return the resulting serialization
return s.join("&");};jQuery.fn.extend({serialize:function serialize(){return jQuery.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){// Can add propHook for "elements" to filter or add form elements
var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}if(jQuery.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,// #7653, #8125, #8152: local protocol detection
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */prefilters={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */transports={},// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
allTypes="*/".concat("*"),// Anchor tag for parsing the document origin
originAnchor=document.createElement("a");originAnchor.href=location.href;// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports(structure){// dataTypeExpression is optional and defaults to "*"
return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(jQuery.isFunction(func)){// For each dataType in the dataTypeExpression
while(dataType=dataTypes[i++]){// Prepend if requested
if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);// Otherwise append
}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=structure===transports;function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:deep||(deep={}))[key]=src[key];}}if(deep){jQuery.extend(true,target,deep);}return target;}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;// Remove auto dataType and get content-type in the process
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}// Check if we're dealing with a known content-type
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}// Check to see if we have a response for the expected dataType
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{// Try convertible dataTypes
for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}if(!firstDataType){firstDataType=type;}}// Or just use first one
finalDataType=finalDataType||firstDataType;}// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}return responses[finalDataType];}}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},// Work with a copy of dataTypes in case we need to modify it for conversion
dataTypes=s.dataTypes.slice();// Create converters map with lowercased keys
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}current=dataTypes.shift();// Convert to each sequential dataType
while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}// Apply the dataFilter if provided
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}prev=current;current=dataTypes.shift();if(current){// There's only work to do if current dataType is non-auto
if(current==="*"){current=prev;// Convert response if prev dataType is non-auto and differs from current
}else if(prev!=="*"&&prev!==current){// Seek a direct converter
conv=converters[prev+" "+current]||converters["* "+current];// If none found, seek a pair
if(!conv){for(conv2 in converters){// If conv2 outputs current
tmp=conv2.split(" ");if(tmp[1]===current){// If prev can be converted to accepted input
conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){// Condense equivalence converters
if(conv===true){conv=converters[conv2];// Otherwise, insert the intermediate dataType
}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}break;}}}}// Apply converter (if not an equivalence)
if(conv!==true){// Unless errors are allowed to bubble, catch and return them
if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}return{state:"success",data:response};}jQuery.extend({// Counter for holding the number of active queries
active:0,// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{// Convert anything to text
"* text":String,// Text to html (true = no transformation)
"text html":true,// Evaluate text as a json expression
"text json":JSON.parse,// Parse text as xml
"text xml":jQuery.parseXML},// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:true,context:true}},// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function ajaxSetup(target,settings){return settings?// Building a settings object
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):// Extending ajaxSettings
ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),// Main method
ajax:function ajax(url,options){// If url is an object, simulate pre-1.5 signature
if((typeof url==="undefined"?"undefined":_typeof(url))==="object"){options=url;url=undefined;}// Force options to be an object
options=options||{};var transport,// URL without anti-cache param
cacheURL,// Response headers
responseHeadersString,responseHeaders,// timeout handle
timeoutTimer,// Url cleanup var
urlAnchor,// Request state (becomes false upon send and true upon completion)
completed,// To know if global events are to be dispatched
fireGlobals,// Loop variable
i,// uncached part of the url
uncached,// Create the final options object
s=jQuery.ajaxSetup({},options),// Callbacks context
callbackContext=s.context||s,// Context for global events is callbackContext if it is a DOM node or jQuery collection
globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,// Deferreds
deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),// Status-dependent callbacks
_statusCode=s.statusCode||{},// Headers (they are sent all at once)
requestHeaders={},requestHeadersNames={},// Default abort message
strAbort="canceled",// Fake xhr
jqXHR={readyState:0,// Builds headers hashtable if needed
getResponseHeader:function getResponseHeader(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while(match=rheaders.exec(responseHeadersString)){responseHeaders[match[1].toLowerCase()]=match[2];}}match=responseHeaders[key.toLowerCase()];}return match==null?null:match;},// Raw string
getAllResponseHeaders:function getAllResponseHeaders(){return completed?responseHeadersString:null;},// Caches the header
setRequestHeader:function setRequestHeader(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}return this;},// Overrides response content-type header
overrideMimeType:function overrideMimeType(type){if(completed==null){s.mimeType=type;}return this;},// Status-dependent callbacks
statusCode:function statusCode(map){var code;if(map){if(completed){// Execute the appropriate callbacks
jqXHR.always(map[jqXHR.status]);}else{// Lazy-add the new callbacks in a way that preserves old ones
for(code in map){_statusCode[code]=[_statusCode[code],map[code]];}}}return this;},// Cancel the request
abort:function abort(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}done(0,finalText);return this;}};// Attach deferreds
deferred.promise(jqXHR);// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
s.url=((url||s.url||location.href)+"").replace(rprotocol,location.protocol+"//");// Alias method option to type as per ticket #12004
s.type=options.method||options.type||s.method||s.type;// Extract dataTypes list
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];// A cross-domain request is in order when the origin doesn't match the current origin.
if(s.crossDomain==null){urlAnchor=document.createElement("a");// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{urlAnchor.href=s.url;// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
s.crossDomain=true;}}// Convert data if not already a string
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}// Apply prefilters
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);// If request was aborted inside a prefilter, stop there
if(completed){return jqXHR;}// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
fireGlobals=jQuery.event&&s.global;// Watch for a new set of requests
if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}// Uppercase the type
s.type=s.type.toUpperCase();// Determine if request has content
s.hasContent=!rnoContent.test(s.type);// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
cacheURL=s.url.replace(rhash,"");// More options handling for requests with no content
if(!s.hasContent){// Remember the hash so we can put it back
uncached=s.url.slice(cacheURL.length);// If data is available, append data to url
if(s.data){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;// #9682: remove data so that it's not used in an eventual retry
delete s.data;}// Add or update anti-cache param if needed
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+nonce++ +uncached;}// Put hash and anti-cache on the URL that will be requested (gh-1732)
s.url=cacheURL+uncached;// Change '%20' to '+' if this is encoded form body content (gh-2658)
}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}// Set the correct header, if data is being sent
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}// Set the Accepts header for the server, depending on the dataType
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);// Check for headers option
for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}// Allow custom headers/mimetypes and early abort
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){// Abort if not done already and return
return jqXHR.abort();}// Aborting is no longer a cancellation
strAbort="abort";// Install callbacks on deferreds
completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);// Get transport
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);// If no transport, we auto-abort
if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;// Send global event
if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}// If request was aborted inside ajaxSend, stop there
if(completed){return jqXHR;}// Timeout
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}try{completed=false;transport.send(requestHeaders,done);}catch(e){// Rethrow post-completion exceptions
if(completed){throw e;}// Propagate others as results
done(-1,e);}}// Callback for when everything is done
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;// Ignore repeat invocations
if(completed){return;}completed=true;// Clear timeout if it exists
if(timeoutTimer){window.clearTimeout(timeoutTimer);}// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
transport=undefined;// Cache response headers
responseHeadersString=headers||"";// Set readyState
jqXHR.readyState=status>0?4:0;// Determine if successful
isSuccess=status>=200&&status<300||status===304;// Get response data
if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}// Convert no matter what (that way responseXXX fields are always set)
response=ajaxConvert(s,response,jqXHR,isSuccess);// If successful, handle type chaining
if(isSuccess){// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}// if no content
if(status===204||s.type==="HEAD"){statusText="nocontent";// if not modified
}else if(status===304){statusText="notmodified";// If we have data, let's convert it
}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{// Extract error from statusText and normalize for non-aborts
error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}// Set data for the fake xhr object
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";// Success/Error
if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}// Status-dependent callbacks
jqXHR.statusCode(_statusCode);_statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}// Complete
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);// Handle the global AJAX counter
if(! --jQuery.active){jQuery.event.trigger("ajaxStop");}}}return jqXHR;},getJSON:function getJSON(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function getScript(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){// Shift arguments if data argument was omitted
if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}// The url can be an options object (which then must have .url)
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function wrapAll(html){var wrap;if(this[0]){if(jQuery.isFunction(html)){html=html.call(this[0]);}// The elements to wrap the target around
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}return elem;}).append(this);}return this;},wrapInner:function wrapInner(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function wrap(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function unwrap(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={// File protocol always yields status code 0, assume 200
0:200,// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&"withCredentials"in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var _callback,errorCallback;// Cross domain only allowed if supported through XMLHttpRequest
if(support.cors||xhrSupported&&!options.crossDomain){return{send:function send(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);// Apply custom fields if provided
if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}// Override mime type if needed
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}// Set headers
for(i in headers){xhr.setRequestHeader(i,headers[i]);}// Callback
_callback=function callback(type){return function(){if(_callback){_callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(// File: protocol always yields status 0; see #8605, #14207
xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};// Listen to events
xhr.onload=_callback();errorCallback=xhr.onerror=_callback("error");// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){// Check readyState before timeout as it changes
if(xhr.readyState===4){// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
window.setTimeout(function(){if(_callback){errorCallback();}});}};}// Create the abort callback
_callback=_callback("abort");try{// Do send the request (this may raise an exception)
xhr.send(options.hasContent&&options.data||null);}catch(e){// #14683: Only rethrow if this hasn't been notified as an error yet
if(_callback){throw e;}}},abort:function abort(){if(_callback){_callback();}}};}});// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});// Install script dataType
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(text){jQuery.globalEval(text);return text;}}});// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}if(s.crossDomain){s.type="GET";}});// Bind script tag hack transport
jQuery.ajaxTransport("script",function(s){// This transport only deals with cross domain requests
if(s.crossDomain){var script,_callback2;return{send:function send(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",_callback2=function callback(evt){script.remove();_callback2=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});// Use native DOM manipulation to avoid our domManip AJAX trickery
document.head.appendChild(script[0]);},abort:function abort(){if(_callback2){_callback2();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;// Default jsonp settings
jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var callback=oldCallbacks.pop()||jQuery.expando+"_"+nonce++;this[callback]=true;return callback;}});// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(jsonProp||s.dataTypes[0]==="jsonp"){// Get callback name, remembering preexisting value associated with it
callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;// Insert callback into url or form data
if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}// Use data converter to retrieve json after script execution
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}return responseContainer[0];};// Force json dataType
s.dataTypes[0]="json";// Install callback
overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};// Clean-up function (fires after converters)
jqXHR.always(function(){// If previous value didn't exist - remove it
if(overwritten===undefined){jQuery(window).removeProp(callbackName);// Otherwise restore preexisting value
}else{window[callbackName]=overwritten;}// Save back as free
if(s[callbackName]){// Make sure that re-using the options doesn't screw things around
s.jsonpCallback=originalSettings.jsonpCallback;// Save the callback name for future use
oldCallbacks.push(callbackName);}// Call if it was a function and we have a response
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}responseContainer=overwritten=undefined;});// Delegate to script
return"script";}});// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument=function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;}();// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}if(typeof context==="boolean"){keepScripts=context;context=false;}var base,parsed,scripts;if(!context){// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];// Single tag
if(parsed){return[context.createElement(parsed[1])];}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}return jQuery.merge([],parsed.childNodes);};/**
 * Load a url into a page
 */jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}// If it's a function
if(jQuery.isFunction(params)){// We assume that it's the callback
callback=params;params=undefined;// Otherwise, build a param string
}else if(params&&(typeof params==="undefined"?"undefined":_typeof(params))==="object"){type="POST";}// If we have elements to modify, make the request
if(self.length>0){jQuery.ajax({url:url,// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:type||"GET",dataType:"html",data:params}).done(function(responseText){// Save response for use in complete callback
response=arguments;self.html(selector?// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):// Otherwise use the full result
responseText);// If the request succeeds, this function gets "data", "status", "jqXHR"
// but they are ignored because response was set above.
// If it fails, this function gets "jqXHR", "status", "error"
}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}return this;};// Attach a bunch of functions for handling common AJAX events
jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};/**
 * Gets a window from an element
 */function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9&&elem.defaultView;}jQuery.offset={setOffset:function setOffset(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};// Set position first, in-case top/left are set even on static elem
if(position==="static"){elem.style.position="relative";}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}if(jQuery.isFunction(options)){// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
options=options.call(elem,i,jQuery.extend({},curOffset));}if(options.top!=null){props.top=options.top-curOffset.top+curTop;}if(options.left!=null){props.left=options.left-curOffset.left+curLeft;}if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function offset(options){// Preserve chaining for setter
if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}var docElem,win,rect,doc,elem=this[0];if(!elem){return;}// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
if(!elem.getClientRects().length){return{top:0,left:0};}rect=elem.getBoundingClientRect();// Make sure element is not hidden (display: none)
if(rect.width||rect.height){doc=elem.ownerDocument;win=getWindow(doc);docElem=doc.documentElement;return{top:rect.top+win.pageYOffset-docElem.clientTop,left:rect.left+win.pageXOffset-docElem.clientLeft};}// Return zeros for disconnected and hidden elements (gh-2310)
return rect;},position:function position(){if(!this[0]){return;}var offsetParent,offset,elem=this[0],parentOffset={top:0,left:0};// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
if(jQuery.css(elem,"position")==="fixed"){// Assume getBoundingClientRect is there when computed position is fixed
offset=elem.getBoundingClientRect();}else{// Get *real* offsetParent
offsetParent=this.offsetParent();// Get correct offsets
offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}// Add offsetParent borders
parentOffset={top:parentOffset.top+jQuery.css(offsetParent[0],"borderTopWidth",true),left:parentOffset.left+jQuery.css(offsetParent[0],"borderLeftWidth",true)};}// Subtract parent offsets and element margins
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function offsetParent(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}return offsetParent||documentElement;});}});// Create scrollLeft and scrollTop methods
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?win[prop]:elem[method];}if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);// If curCSS returns percentage, fallback to offset
return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){// Margin is only for outerHeight, outerWidth
jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}// Get document width or height
if(elem.nodeType===9){doc=elem.documentElement;// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
// whichever is greatest
return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}return value===undefined?// Get width or height on the element, requesting but not forcing parseFloat
jQuery.css(elem,type,extra):// Set width or height on the element
jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.fn.extend({bind:function bind(types,data,fn){return this.on(types,null,data,fn);},unbind:function unbind(types,fn){return this.off(types,null,fn);},delegate:function delegate(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function undelegate(selector,types,fn){// ( namespace ) or ( selector, types [, fn] )
return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.parseJSON=JSON.parse;// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}var// Map over jQuery in case of overwrite
_jQuery=window.jQuery,// Map over the $ in case of overwrite
_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}return jQuery;};// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if(!noGlobal){window.jQuery=window.$=jQuery;}return jQuery;});
'use strict';

// Check for jQuery.
if (typeof jQuery === 'undefined') {
  var jQuery;
  // Check if require is a defined function.
  if (typeof require === 'function') {
    jQuery = $ = require('jquery');
    // Else use the dollar sign alias.
  } else {
    jQuery = $;
  }
}
'use strict';

// Required for Meteor package, the use of window prevents export by Meteor
(function (window) {
  if (window.Package) {
    Materialize = {};
  } else {
    window.Materialize = {};
  }
})(window);

/*
 * raf.js
 * https://github.com/ngryman/raf.js
 *
 * original requestAnimationFrame polyfill by Erik Möller
 * inspired from paul_irish gist and post
 *
 * Copyright (c) 2013 ngryman
 * Licensed under the MIT license.
 */
(function (window) {
  var lastTime = 0,
      vendors = ['webkit', 'moz'],
      requestAnimationFrame = window.requestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame,
      i = vendors.length;

  // try to un-prefix existing raf
  while (--i >= 0 && !requestAnimationFrame) {
    requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
    cancelAnimationFrame = window[vendors[i] + 'CancelRequestAnimationFrame'];
  }

  // polyfill with setTimeout fallback
  // heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function requestAnimationFrame(callback) {
      var now = +Date.now(),
          nextTime = Math.max(lastTime + 16, now);
      return setTimeout(function () {
        callback(lastTime = nextTime);
      }, nextTime - now);
    };

    cancelAnimationFrame = clearTimeout;
  }

  // export to window
  window.requestAnimationFrame = requestAnimationFrame;
  window.cancelAnimationFrame = cancelAnimationFrame;
})(window);

// Unique ID
Materialize.guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return function () {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };
}();

/**
 * Escapes hash from special characters
 * @param {string} hash  String returned from this.hash
 * @returns {string}
 */
Materialize.escapeHash = function (hash) {
  return hash.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
};

Materialize.elementOrParentIsFixed = function (element) {
  var $element = $(element);
  var $checkElements = $element.add($element.parents());
  var isFixed = false;
  $checkElements.each(function () {
    if ($(this).css("position") === "fixed") {
      isFixed = true;
      return false;
    }
  });
  return isFixed;
};

// Velocity has conflicts when loaded with jQuery, this will check for it
// First, check if in noConflict mode
var Vel;
if (jQuery) {
  Vel = jQuery.Velocity;
} else if ($) {
  Vel = $.Velocity;
} else {
  Vel = Velocity;
}
"use strict";

// Custom Easing
jQuery.extend(jQuery.easing, {
  easeInOutMaterial: function easeInOutMaterial(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return c / 4 * ((t -= 2) * t * t + 2) + b;
  }
});
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function ($) {
  // Image transition function
  Materialize.fadeInImage = function (selectorOrEl) {
    var element;
    if (typeof selectorOrEl === 'string') {
      element = $(selectorOrEl);
    } else if ((typeof selectorOrEl === 'undefined' ? 'undefined' : _typeof(selectorOrEl)) === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    element.css({ opacity: 0 });
    $(element).velocity({ opacity: 1 }, {
      duration: 650,
      queue: false,
      easing: 'easeOutSine'
    });
    $(element).velocity({ opacity: 1 }, {
      duration: 1300,
      queue: false,
      easing: 'swing',
      step: function step(now, fx) {
        fx.start = 100;
        var grayscale_setting = now / 100;
        var brightness_setting = 150 - (100 - now) / 1.75;

        if (brightness_setting < 100) {
          brightness_setting = 100;
        }
        if (now >= 0) {
          $(this).css({
            "-webkit-filter": "grayscale(" + grayscale_setting + ")" + "brightness(" + brightness_setting + "%)",
            "filter": "grayscale(" + grayscale_setting + ")" + "brightness(" + brightness_setting + "%)"
          });
        }
      }
    });
  };

  // Horizontal staggered list
  Materialize.showStaggeredList = function (selectorOrEl) {
    var element;
    if (typeof selectorOrEl === 'string') {
      element = $(selectorOrEl);
    } else if ((typeof selectorOrEl === 'undefined' ? 'undefined' : _typeof(selectorOrEl)) === 'object') {
      element = selectorOrEl;
    } else {
      return;
    }
    var time = 0;
    element.find('li').velocity({ translateX: "-100px" }, { duration: 0 });

    element.find('li').each(function () {
      $(this).velocity({ opacity: "1", translateX: "0" }, { duration: 800, delay: time, easing: [60, 10] });
      time += 120;
    });
  };

  $(document).ready(function () {
    // Hardcoded .staggered-list scrollFire
    // var staggeredListOptions = [];
    // $('ul.staggered-list').each(function (i) {

    //   var label = 'scrollFire-' + i;
    //   $(this).addClass(label);
    //   staggeredListOptions.push(
    //     {selector: 'ul.staggered-list.' + label,
    //      offset: 200,
    //      callback: 'showStaggeredList("ul.staggered-list.' + label + '")'});
    // });
    // scrollFire(staggeredListOptions);

    // HammerJS, Swipe navigation

    // Touch Event
    var swipeLeft = false;
    var swipeRight = false;

    // Dismissible Collections
    $('.dismissable').each(function () {
      $(this).hammer({
        prevent_default: false
      }).bind('pan', function (e) {
        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          var direction = e.gesture.direction;
          var x = e.gesture.deltaX;
          var velocityX = e.gesture.velocityX;

          $this.velocity({ translateX: x
          }, { duration: 50, queue: false, easing: 'easeOutQuad' });

          // Swipe Left
          if (direction === 4 && (x > $this.innerWidth() / 2 || velocityX < -0.75)) {
            swipeLeft = true;
          }

          // Swipe Right
          if (direction === 2 && (x < -1 * $this.innerWidth() / 2 || velocityX > 0.75)) {
            swipeRight = true;
          }
        }
      }).bind('panend', function (e) {
        // Reset if collection is moved back into original position
        if (Math.abs(e.gesture.deltaX) < $(this).innerWidth() / 2) {
          swipeRight = false;
          swipeLeft = false;
        }

        if (e.gesture.pointerType === "touch") {
          var $this = $(this);
          if (swipeLeft || swipeRight) {
            var fullWidth;
            if (swipeLeft) {
              fullWidth = $this.innerWidth();
            } else {
              fullWidth = -1 * $this.innerWidth();
            }

            $this.velocity({ translateX: fullWidth
            }, { duration: 100, queue: false, easing: 'easeOutQuad', complete: function complete() {
                $this.css('border', 'none');
                $this.velocity({ height: 0, padding: 0
                }, { duration: 200, queue: false, easing: 'easeOutQuad', complete: function complete() {
                    $this.remove();
                  }
                });
              }
            });
          } else {
            $this.velocity({ translateX: 0
            }, { duration: 100, queue: false, easing: 'easeOutQuad' });
          }
          swipeLeft = false;
          swipeRight = false;
        }
      });
    });

    // time = 0
    // // Vertical Staggered list
    // $('ul.staggered-list.vertical li').velocity(
    //     { translateY: "100px"},
    //     { duration: 0 });

    // $('ul.staggered-list.vertical li').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", translateY: "0"},
    //     { duration: 800, delay: time, easing: [60, 25] });
    //   time += 120;
    // });

    // // Fade in and Scale
    // $('.fade-in.scale').velocity(
    //     { scaleX: .4, scaleY: .4, translateX: -600},
    //     { duration: 0});
    // $('.fade-in').each(function() {
    //   $(this).velocity(
    //     { opacity: "1", scaleX: 1, scaleY: 1, translateX: 0},
    //     { duration: 800, easing: [60, 10] });
    // });
  });
})(jQuery);
"use strict";

(function ($) {

  $.fn.parallax = function () {
    var window_width = $(window).width();
    // Parallax Scripts
    return this.each(function (i) {
      var $this = $(this);
      $this.addClass('parallax');

      function updateParallax(initial) {
        var container_height;
        if (window_width < 601) {
          container_height = $this.height() > 0 ? $this.height() : $this.children("img").height();
        } else {
          container_height = $this.height() > 0 ? $this.height() : 500;
        }
        var $img = $this.children("img").first();
        var img_height = $img.height();
        var parallax_dist = img_height - container_height;
        var bottom = $this.offset().top + container_height;
        var top = $this.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = window.innerHeight;
        var windowBottom = scrollTop + windowHeight;
        var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
        var parallax = Math.round(parallax_dist * percentScrolled);

        if (initial) {
          $img.css('display', 'block');
        }
        if (bottom > scrollTop && top < scrollTop + windowHeight) {
          $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
        }
      }

      // Wait for image load
      $this.children("img").one("load", function () {
        updateParallax(true);
      }).each(function () {
        if (this.complete) $(this).trigger("load");
      });

      $(window).scroll(function () {
        window_width = $(window).width();
        updateParallax(false);
      });

      $(window).resize(function () {
        window_width = $(window).width();
        updateParallax(false);
      });
    });
  };
})(jQuery);
'use strict';

(function ($) {
  $(document).ready(function () {

    // Function to update labels of text fields
    Materialize.updateTextFields = function () {
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(input_selector).each(function (index, element) {
        if ($(element).val().length > 0 || element.autofocus || $(this).attr('placeholder') !== undefined || $(element)[0].validity.badInput === true) {
          $(this).siblings('label').addClass('active');
        } else {
          $(this).siblings('label').removeClass('active');
        }
      });
    };

    // Text based inputs
    var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';

    // Add active if form auto complete
    $(document).on('change', input_selector, function () {
      if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active');
      }
      validate_field($(this));
    });

    // Add active if input element has been pre-populated on document ready
    $(document).ready(function () {
      Materialize.updateTextFields();
    });

    // HTML DOM FORM RESET handling
    $(document).on('reset', function (e) {
      var formReset = $(e.target);
      if (formReset.is('form')) {
        formReset.find(input_selector).removeClass('valid').removeClass('invalid');
        formReset.find(input_selector).each(function () {
          if ($(this).attr('value') === '') {
            $(this).siblings('label').removeClass('active');
          }
        });

        // Reset select
        formReset.find('select.initialized').each(function () {
          var reset_text = formReset.find('option[selected]').text();
          formReset.siblings('input.select-dropdown').val(reset_text);
        });
      }
    });

    // Add active when element has focus
    $(document).on('focus', input_selector, function () {
      $(this).siblings('label, .prefix').addClass('active');
    });

    $(document).on('blur', input_selector, function () {
      var $inputElement = $(this);
      var selector = ".prefix";

      if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
        selector += ", label";
      }

      $inputElement.siblings(selector).removeClass('active');

      validate_field($inputElement);
    });

    window.validate_field = function (object) {
      var hasLength = object.attr('length') !== undefined;
      var lenAttr = parseInt(object.attr('length'));
      var len = object.val().length;

      if (object.val().length === 0 && object[0].validity.badInput === false) {
        if (object.hasClass('validate')) {
          object.removeClass('valid');
          object.removeClass('invalid');
        }
      } else {
        if (object.hasClass('validate')) {
          // Check for character counter attributes
          if (object.is(':valid') && hasLength && len <= lenAttr || object.is(':valid') && !hasLength) {
            object.removeClass('invalid');
            object.addClass('valid');
          } else {
            object.removeClass('valid');
            object.addClass('invalid');
          }
        }
      }
    };

    // Radio and Checkbox focus class
    var radio_checkbox = 'input[type=radio], input[type=checkbox]';
    $(document).on('keyup.radio', radio_checkbox, function (e) {
      // TAB, check if tabbing to radio or checkbox.
      if (e.which === 9) {
        $(this).addClass('tabbed');
        var $this = $(this);
        $this.one('blur', function (e) {

          $(this).removeClass('tabbed');
        });
        return;
      }
    });

    // Textarea Auto Resize
    var hiddenDiv = $('.hiddendiv').first();
    if (!hiddenDiv.length) {
      hiddenDiv = $('<div class="hiddendiv common"></div>');
      $('body').append(hiddenDiv);
    }
    var text_area_selector = '.materialize-textarea';

    function textareaAutoResize($textarea) {
      // Set font properties of hiddenDiv

      var fontFamily = $textarea.css('font-family');
      var fontSize = $textarea.css('font-size');
      var lineHeight = $textarea.css('line-height');

      if (fontSize) {
        hiddenDiv.css('font-size', fontSize);
      }
      if (fontFamily) {
        hiddenDiv.css('font-family', fontFamily);
      }
      if (lineHeight) {
        hiddenDiv.css('line-height', lineHeight);
      }

      if ($textarea.attr('wrap') === "off") {
        hiddenDiv.css('overflow-wrap', "normal").css('white-space', "pre");
      }

      hiddenDiv.text($textarea.val() + '\n');
      var content = hiddenDiv.html().replace(/\n/g, '<br>');
      hiddenDiv.html(content);

      // When textarea is hidden, width goes crazy.
      // Approximate with half of window size

      if ($textarea.is(':visible')) {
        hiddenDiv.css('width', $textarea.width());
      } else {
        hiddenDiv.css('width', $(window).width() / 2);
      }

      $textarea.css('height', hiddenDiv.height());
    }

    $(text_area_selector).each(function () {
      var $textarea = $(this);
      if ($textarea.val().length) {
        textareaAutoResize($textarea);
      }
    });

    $('body').on('keyup keydown autoresize', text_area_selector, function () {
      textareaAutoResize($(this));
    });

    // File Input Path
    $(document).on('change', '.file-field input[type="file"]', function () {
      var file_field = $(this).closest('.file-field');
      var path_input = file_field.find('input.file-path');
      var files = $(this)[0].files;
      var file_names = [];
      for (var i = 0; i < files.length; i++) {
        file_names.push(files[i].name);
      }
      path_input.val(file_names.join(", "));
      path_input.trigger('change');
    });

    /****************
    *  Range Input  *
    ****************/

    var range_type = 'input[type=range]';
    var range_mousedown = false;
    var left;

    $(range_type).each(function () {
      var thumb = $('<span class="thumb"><span class="value"></span></span>');
      $(this).after(thumb);
    });

    var range_wrapper = '.range-field';
    $(document).on('change', range_type, function (e) {
      var thumb = $(this).siblings('.thumb');
      thumb.find('.value').html($(this).val());
    });

    $(document).on('input mousedown touchstart', range_type, function (e) {
      var thumb = $(this).siblings('.thumb');
      var width = $(this).outerWidth();

      // If thumb indicator does not exist yet, create it
      if (thumb.length <= 0) {
        thumb = $('<span class="thumb"><span class="value"></span></span>');
        $(this).after(thumb);
      }

      // Set indicator value
      thumb.find('.value').html($(this).val());

      range_mousedown = true;
      $(this).addClass('active');

      if (!thumb.hasClass('active')) {
        thumb.velocity({ height: "30px", width: "30px", top: "-20px", marginLeft: "-15px" }, { duration: 300, easing: 'easeOutExpo' });
      }

      if (e.type !== 'input') {
        if (e.pageX === undefined || e.pageX === null) {
          //mobile
          left = e.originalEvent.touches[0].pageX - $(this).offset().left;
        } else {
          // desktop
          left = e.pageX - $(this).offset().left;
        }
        if (left < 0) {
          left = 0;
        } else if (left > width) {
          left = width;
        }
        thumb.addClass('active').css('left', left);
      }

      thumb.find('.value').html($(this).val());
    });

    $(document).on('mouseup touchend', range_wrapper, function () {
      range_mousedown = false;
      $(this).removeClass('active');
    });

    $(document).on('mousemove touchmove', range_wrapper, function (e) {
      var thumb = $(this).children('.thumb');
      var left;
      if (range_mousedown) {
        if (!thumb.hasClass('active')) {
          thumb.velocity({ height: '30px', width: '30px', top: '-20px', marginLeft: '-15px' }, { duration: 300, easing: 'easeOutExpo' });
        }
        if (e.pageX === undefined || e.pageX === null) {
          //mobile
          left = e.originalEvent.touches[0].pageX - $(this).offset().left;
        } else {
          // desktop
          left = e.pageX - $(this).offset().left;
        }
        var width = $(this).outerWidth();

        if (left < 0) {
          left = 0;
        } else if (left > width) {
          left = width;
        }
        thumb.addClass('active').css('left', left);
        thumb.find('.value').html(thumb.siblings(range_type).val());
      }
    });

    $(document).on('mouseout touchleave', range_wrapper, function () {
      if (!range_mousedown) {

        var thumb = $(this).children('.thumb');

        if (thumb.hasClass('active')) {
          thumb.velocity({ height: '0', width: '0', top: '10px', marginLeft: '-6px' }, { duration: 100 });
        }
        thumb.removeClass('active');
      }
    });

    /**************************
     * Auto complete plugin  *
     *************************/
    $.fn.autocomplete = function (options) {
      // Defaults
      var defaults = {
        data: {}
      };

      options = $.extend(defaults, options);

      return this.each(function () {
        var $input = $(this);
        var data = options.data,
            $inputDiv = $input.closest('.input-field'); // Div to append on

        // Check if data isn't empty
        if (!$.isEmptyObject(data)) {
          // Create autocomplete element
          var $autocomplete = $('<ul class="autocomplete-content dropdown-content"></ul>');

          // Append autocomplete element
          if ($inputDiv.length) {
            $inputDiv.append($autocomplete); // Set ul in body
          } else {
            $input.after($autocomplete);
          }

          var highlight = function highlight(string, $el) {
            var img = $el.find('img');
            var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase() + ""),
                matchEnd = matchStart + string.length - 1,
                beforeMatch = $el.text().slice(0, matchStart),
                matchText = $el.text().slice(matchStart, matchEnd + 1),
                afterMatch = $el.text().slice(matchEnd + 1);
            $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
            if (img.length) {
              $el.prepend(img);
            }
          };

          // Perform search
          $input.on('keyup', function (e) {
            // Capture Enter
            if (e.which === 13) {
              $autocomplete.find('li').first().click();
              return;
            }

            var val = $input.val().toLowerCase();
            $autocomplete.empty();

            // Check if the input isn't empty
            if (val !== '') {
              for (var key in data) {
                if (data.hasOwnProperty(key) && key.toLowerCase().indexOf(val) !== -1 && key.toLowerCase() !== val) {
                  var autocompleteOption = $('<li></li>');
                  if (!!data[key]) {
                    autocompleteOption.append('<img src="' + data[key] + '" class="right circle"><span>' + key + '</span>');
                  } else {
                    autocompleteOption.append('<span>' + key + '</span>');
                  }
                  $autocomplete.append(autocompleteOption);

                  highlight(val, autocompleteOption);
                }
              }
            }
          });

          // Set input value
          $autocomplete.on('click', 'li', function () {
            $input.val($(this).text().trim());
            $input.trigger('change');
            $autocomplete.empty();
          });
        }
      });
    };
  }); // End of $(document).ready

  /*******************
   *  Select Plugin  *
   ******************/
  $.fn.material_select = function (callback) {
    $(this).each(function () {
      var $select = $(this);

      if ($select.hasClass('browser-default')) {
        return; // Continue to next (return false breaks out of entire loop)
      }

      var multiple = $select.attr('multiple') ? true : false,
          lastID = $select.data('select-id'); // Tear down structure if Select needs to be rebuilt

      if (lastID) {
        $select.parent().find('span.caret').remove();
        $select.parent().find('input').remove();

        $select.unwrap();
        $('ul#select-options-' + lastID).remove();
      }

      // If destroying the select, remove the selelct-id and reset it to it's uninitialized state.
      if (callback === 'destroy') {
        $select.data('select-id', null).removeClass('initialized');
        return;
      }

      var uniqueID = Materialize.guid();
      $select.data('select-id', uniqueID);
      var wrapper = $('<div class="select-wrapper"></div>');
      wrapper.addClass($select.attr('class'));
      var options = $('<ul id="select-options-' + uniqueID + '" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
          selectChildren = $select.children('option, optgroup'),
          valuesSelected = [],
          optionsHover = false;

      var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";

      // Function that renders and appends the option taking into
      // account type and possible image icon.
      var appendOptionWithIcon = function appendOptionWithIcon(select, option, type) {
        // Add disabled attr if disabled
        var disabledClass = option.is(':disabled') ? 'disabled ' : '';
        var optgroupClass = type === 'optgroup-option' ? 'optgroup-option ' : '';

        // add icons
        var icon_url = option.data('icon');
        var classes = option.attr('class');
        if (!!icon_url) {
          var classString = '';
          if (!!classes) classString = ' class="' + classes + '"';

          // Check for multiple type.
          if (type === 'multiple') {
            options.append($('<li class="' + disabledClass + '"><img alt="" src="' + icon_url + '"' + classString + '><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
          } else {
            options.append($('<li class="' + disabledClass + optgroupClass + '"><img alt="" src="' + icon_url + '"' + classString + '><span>' + option.html() + '</span></li>'));
          }
          return true;
        }

        // Check for multiple type.
        if (type === 'multiple') {
          options.append($('<li class="' + disabledClass + '"><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
        } else {
          options.append($('<li class="' + disabledClass + optgroupClass + '"><span>' + option.html() + '</span></li>'));
        }
      };

      /* Create dropdown structure. */
      if (selectChildren.length) {
        selectChildren.each(function () {
          if ($(this).is('option')) {
            // Direct descendant option.
            if (multiple) {
              appendOptionWithIcon($select, $(this), 'multiple');
            } else {
              appendOptionWithIcon($select, $(this));
            }
          } else if ($(this).is('optgroup')) {
            // Optgroup.
            var selectOptions = $(this).children('option');
            options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));

            selectOptions.each(function () {
              appendOptionWithIcon($select, $(this), 'optgroup-option');
            });
          }
        });
      }

      options.find('li:not(.optgroup)').each(function (i) {
        $(this).click(function (e) {
          // Check if option element is disabled
          if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
            var selected = true;

            if (multiple) {
              $('input[type="checkbox"]', this).prop('checked', function (i, v) {
                return !v;
              });
              selected = toggleEntryFromArray(valuesSelected, $(this).index(), $select);
              $newSelect.trigger('focus');
            } else {
              options.find('li').removeClass('active');
              $(this).toggleClass('active');
              $newSelect.val($(this).text());
            }

            activateOption(options, $(this));
            $select.find('option').eq(i).prop('selected', selected);
            // Trigger onchange() event
            $select.trigger('change');
            if (typeof callback !== 'undefined') callback();
          }

          e.stopPropagation();
        });
      });

      // Wrap Elements
      $select.wrap(wrapper);
      // Add Select Display Element
      var dropdownIcon = $('<span class="caret">&#9660;</span>');
      if ($select.is(':disabled')) dropdownIcon.addClass('disabled');

      // escape double quotes
      var sanitizedLabelHtml = label.replace(/"/g, '&quot;');

      var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + ($select.is(':disabled') ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID + '" value="' + sanitizedLabelHtml + '"/>');
      $select.before($newSelect);
      $newSelect.before(dropdownIcon);

      $newSelect.after(options);
      // Check if section element is disabled
      if (!$select.is(':disabled')) {
        $newSelect.dropdown({ 'hover': false, 'closeOnClick': false });
      }

      // Copy tabindex
      if ($select.attr('tabindex')) {
        $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
      }

      $select.addClass('initialized');

      $newSelect.on({
        'focus': function focus() {
          if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
            $('input.select-dropdown').trigger('close');
          }
          if (!options.is(':visible')) {
            $(this).trigger('open', ['focus']);
            var label = $(this).val();
            var selectedOption = options.find('li').filter(function () {
              return $(this).text().toLowerCase() === label.toLowerCase();
            })[0];
            activateOption(options, selectedOption);
          }
        },
        'click': function click(e) {
          e.stopPropagation();
        }
      });

      $newSelect.on('blur', function () {
        if (!multiple) {
          $(this).trigger('close');
        }
        options.find('li.selected').removeClass('selected');
      });

      options.hover(function () {
        optionsHover = true;
      }, function () {
        optionsHover = false;
      });

      $(window).on({
        'click': function click() {
          multiple && (optionsHover || $newSelect.trigger('close'));
        }
      });

      // Add initial multiple selections.
      if (multiple) {
        $select.find("option:selected:not(:disabled)").each(function () {
          var index = $(this).index();

          toggleEntryFromArray(valuesSelected, index, $select);
          options.find("li").eq(index).find(":checkbox").prop("checked", true);
        });
      }

      // Make option as selected and scroll to selected position
      var activateOption = function activateOption(collection, newOption) {
        if (newOption) {
          collection.find('li.selected').removeClass('selected');
          var option = $(newOption);
          option.addClass('selected');
          options.scrollTo(option);
        }
      };

      // Allow user to search by typing
      // this array is cleared after 1 second
      var filterQuery = [],
          onKeyDown = function onKeyDown(e) {
        // TAB - switch to another input
        if (e.which == 9) {
          $newSelect.trigger('close');
          return;
        }

        // ARROW DOWN WHEN SELECT IS CLOSED - open select options
        if (e.which == 40 && !options.is(':visible')) {
          $newSelect.trigger('open');
          return;
        }

        // ENTER WHEN SELECT IS CLOSED - submit form
        if (e.which == 13 && !options.is(':visible')) {
          return;
        }

        e.preventDefault();

        // CASE WHEN USER TYPE LETTERS
        var letter = String.fromCharCode(e.which).toLowerCase(),
            nonLetters = [9, 13, 27, 38, 40];
        if (letter && nonLetters.indexOf(e.which) === -1) {
          filterQuery.push(letter);

          var string = filterQuery.join(''),
              newOption = options.find('li').filter(function () {
            return $(this).text().toLowerCase().indexOf(string) === 0;
          })[0];

          if (newOption) {
            activateOption(options, newOption);
          }
        }

        // ENTER - select option and close when select options are opened
        if (e.which == 13) {
          var activeOption = options.find('li.selected:not(.disabled)')[0];
          if (activeOption) {
            $(activeOption).trigger('click');
            if (!multiple) {
              $newSelect.trigger('close');
            }
          }
        }

        // ARROW DOWN - move to next not disabled option
        if (e.which == 40) {
          if (options.find('li.selected').length) {
            newOption = options.find('li.selected').next('li:not(.disabled)')[0];
          } else {
            newOption = options.find('li:not(.disabled)')[0];
          }
          activateOption(options, newOption);
        }

        // ESC - close options
        if (e.which == 27) {
          $newSelect.trigger('close');
        }

        // ARROW UP - move to previous not disabled option
        if (e.which == 38) {
          newOption = options.find('li.selected').prev('li:not(.disabled)')[0];
          if (newOption) activateOption(options, newOption);
        }

        // Automaticaly clean filter query so user can search again by starting letters
        setTimeout(function () {
          filterQuery = [];
        }, 1000);
      };

      $newSelect.on('keydown', onKeyDown);
    });

    function toggleEntryFromArray(entriesArray, entryIndex, select) {
      var index = entriesArray.indexOf(entryIndex),
          notAdded = index === -1;

      if (notAdded) {
        entriesArray.push(entryIndex);
      } else {
        entriesArray.splice(index, 1);
      }

      select.siblings('ul.dropdown-content').find('li').eq(entryIndex).toggleClass('active');

      // use notAdded instead of true (to detect if the option is selected or not)
      select.find('option').eq(entryIndex).prop('selected', notAdded);
      setValueToInput(entriesArray, select);

      return notAdded;
    }

    function setValueToInput(entriesArray, select) {
      var value = '';

      for (var i = 0, count = entriesArray.length; i < count; i++) {
        var text = select.find('option').eq(entriesArray[i]).text();

        i === 0 ? value += text : value += ', ' + text;
      }

      if (value === '') {
        value = select.find('option:disabled').eq(0).text();
      }

      select.siblings('input.select-dropdown').val(value);
    }
  };
})(jQuery);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function ($) {
  var _stack = 0,
      _lastID = 0,
      _generateID = function _generateID() {
    _lastID++;
    return 'materialize-modal-overlay-' + _lastID;
  };

  var methods = {
    init: function init(options) {
      var defaults = {
        opacity: 0.5,
        in_duration: 350,
        out_duration: 250,
        ready: undefined,
        complete: undefined,
        dismissible: true,
        starting_top: '4%',
        ending_top: '10%'
      };

      // Override defaults
      options = $.extend(defaults, options);

      return this.each(function () {
        var $modal = $(this);
        var modal_id = $(this).attr("id") || '#' + $(this).data('target');

        var closeModal = function closeModal() {
          var overlayID = $modal.data('overlay-id');
          var $overlay = $('#' + overlayID);
          $modal.removeClass('open');

          // Enable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          $modal.find('.modal-close').off('click.close');
          $(document).off('keyup.modal' + overlayID);

          $overlay.velocity({ opacity: 0 }, { duration: options.out_duration, queue: false, ease: "easeOutQuart" });

          // Define Bottom Sheet animation
          var exitVelocityOptions = {
            duration: options.out_duration,
            queue: false,
            ease: "easeOutCubic",
            // Handle modal ready callback
            complete: function complete() {
              $(this).css({ display: "none" });

              // Call complete callback
              if (typeof options.complete === "function") {
                options.complete.call(this, $modal);
              }
              $overlay.remove();
              _stack--;
            }
          };
          if ($modal.hasClass('bottom-sheet')) {
            $modal.velocity({ bottom: "-100%", opacity: 0 }, exitVelocityOptions);
          } else {
            $modal.velocity({ top: options.starting_top, opacity: 0, scaleX: 0.7 }, exitVelocityOptions);
          }
        };

        var openModal = function openModal($trigger) {
          var $body = $('body');
          var oldWidth = $body.innerWidth();
          $body.css('overflow', 'hidden');
          $body.width(oldWidth);

          if ($modal.hasClass('open')) {
            return;
          }

          var overlayID = _generateID();
          var $overlay = $('<div class="modal-overlay"></div>');
          var lStack = ++_stack;

          // Store a reference of the overlay
          $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
          $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);
          $modal.addClass('open');

          $("body").append($overlay);

          if (options.dismissible) {
            $overlay.click(function () {
              closeModal();
            });
            // Return on ESC
            $(document).on('keyup.modal' + overlayID, function (e) {
              if (e.keyCode === 27) {
                // ESC key
                closeModal();
              }
            });
          }

          $modal.find(".modal-close").on('click.close', function (e) {
            closeModal();
          });

          $overlay.css({ display: "block", opacity: 0 });

          $modal.css({
            display: "block",
            opacity: 0
          });

          $overlay.velocity({ opacity: options.opacity }, { duration: options.in_duration, queue: false, ease: "easeOutCubic" });
          $modal.data('associated-overlay', $overlay[0]);

          // Define Bottom Sheet animation
          var enterVelocityOptions = {
            duration: options.in_duration,
            queue: false,
            ease: "easeOutCubic",
            // Handle modal ready callback
            complete: function complete() {
              if (typeof options.ready === "function") {
                options.ready.call(this, $modal, $trigger);
              }
            }
          };
          if ($modal.hasClass('bottom-sheet')) {
            $modal.velocity({ bottom: "0", opacity: 1 }, enterVelocityOptions);
          } else {
            $.Velocity.hook($modal, "scaleX", 0.7);
            $modal.css({ top: options.starting_top });
            $modal.velocity({ top: options.ending_top, opacity: 1, scaleX: '1' }, enterVelocityOptions);
          }
        };

        // Reset handlers
        $(document).off('click.modalTrigger', 'a[href="#' + modal_id + '"], [data-target="' + modal_id + '"]');
        $(this).off('openModal');
        $(this).off('closeModal');

        // Close Handlers
        $(document).on('click.modalTrigger', 'a[href="#' + modal_id + '"], [data-target="' + modal_id + '"]', function (e) {
          options.starting_top = ($(this).offset().top - $(window).scrollTop()) / 1.15;
          openModal($(this));
          e.preventDefault();
        }); // done set on click

        $(this).on('openModal', function () {
          var modal_id = $(this).attr("href") || '#' + $(this).data('target');
          openModal();
        });

        $(this).on('closeModal', function () {
          closeModal();
        });
      }); // done return
    },
    open: function open() {
      $(this).trigger('openModal');
    },
    close: function close() {
      $(this).trigger('closeModal');
    }
  };

  $.fn.modal = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if ((typeof methodOrOptions === 'undefined' ? 'undefined' : _typeof(methodOrOptions)) === 'object' || !methodOrOptions) {
      // Default to "init"
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.modal');
    }
  };
})(jQuery);
'use strict';

(function ($) {
  $.fn.tooltip = function (options) {
    var timeout = null,
        margin = 5;

    // Defaults
    var defaults = {
      delay: 350,
      tooltip: '',
      position: 'bottom',
      html: false
    };

    // Remove tooltip from the activator
    if (options === "remove") {
      this.each(function () {
        $('#' + $(this).attr('data-tooltip-id')).remove();
        $(this).off('mouseenter.tooltip mouseleave.tooltip');
      });
      return false;
    }

    options = $.extend(defaults, options);

    return this.each(function () {
      var tooltipId = Materialize.guid();
      var origin = $(this);

      // Destroy old tooltip
      if (origin.attr('data-tooltip-id')) {
        $('#' + origin.attr('data-tooltip-id')).remove();
      }

      origin.attr('data-tooltip-id', tooltipId);

      // Get attributes.
      var allowHtml, tooltipDelay, tooltipPosition, tooltipText, tooltipEl, backdrop;
      var setAttributes = function setAttributes() {
        allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;
        tooltipDelay = origin.attr('data-delay');
        tooltipDelay = tooltipDelay === undefined || tooltipDelay === '' ? options.delay : tooltipDelay;
        tooltipPosition = origin.attr('data-position');
        tooltipPosition = tooltipPosition === undefined || tooltipPosition === '' ? options.position : tooltipPosition;
        tooltipText = origin.attr('data-tooltip');
        tooltipText = tooltipText === undefined || tooltipText === '' ? options.tooltip : tooltipText;
      };
      setAttributes();

      var renderTooltipEl = function renderTooltipEl() {
        var tooltip = $('<div class="material-tooltip"></div>');

        // Create Text span
        if (allowHtml) {
          tooltipText = $('<span></span>').html(tooltipText);
        } else {
          tooltipText = $('<span></span>').text(tooltipText);
        }

        // Create tooltip
        tooltip.append(tooltipText).appendTo($('body')).attr('id', tooltipId);

        // Create backdrop
        backdrop = $('<div class="backdrop"></div>');
        backdrop.appendTo(tooltip);
        return tooltip;
      };
      tooltipEl = renderTooltipEl();

      // Destroy previously binded events
      origin.off('mouseenter.tooltip mouseleave.tooltip');
      // Mouse In
      var started = false,
          timeoutRef;
      origin.on({ 'mouseenter.tooltip': function mouseenterTooltip(e) {
          var showTooltip = function showTooltip() {
            setAttributes();
            started = true;
            tooltipEl.velocity('stop');
            backdrop.velocity('stop');
            tooltipEl.css({ display: 'block', left: '0px', top: '0px' });

            // Tooltip positioning
            var originWidth = origin.outerWidth();
            var originHeight = origin.outerHeight();

            var tooltipHeight = tooltipEl.outerHeight();
            var tooltipWidth = tooltipEl.outerWidth();
            var tooltipVerticalMovement = '0px';
            var tooltipHorizontalMovement = '0px';
            var scaleXFactor = 8;
            var scaleYFactor = 8;
            var targetTop, targetLeft, newCoordinates;

            if (tooltipPosition === "top") {
              // Top Position
              targetTop = origin.offset().top - tooltipHeight - margin;
              targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
              newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

              tooltipVerticalMovement = '-10px';
              backdrop.css({
                bottom: 0,
                left: 0,
                borderRadius: '14px 14px 0 0',
                transformOrigin: '50% 100%',
                marginTop: tooltipHeight,
                marginLeft: tooltipWidth / 2 - backdrop.width() / 2
              });
            }
            // Left Position
            else if (tooltipPosition === "left") {
                targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
                targetLeft = origin.offset().left - tooltipWidth - margin;
                newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

                tooltipHorizontalMovement = '-10px';
                backdrop.css({
                  top: '-7px',
                  right: 0,
                  width: '14px',
                  height: '14px',
                  borderRadius: '14px 0 0 14px',
                  transformOrigin: '95% 50%',
                  marginTop: tooltipHeight / 2,
                  marginLeft: tooltipWidth
                });
              }
              // Right Position
              else if (tooltipPosition === "right") {
                  targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
                  targetLeft = origin.offset().left + originWidth + margin;
                  newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);

                  tooltipHorizontalMovement = '+10px';
                  backdrop.css({
                    top: '-7px',
                    left: 0,
                    width: '14px',
                    height: '14px',
                    borderRadius: '0 14px 14px 0',
                    transformOrigin: '5% 50%',
                    marginTop: tooltipHeight / 2,
                    marginLeft: '0px'
                  });
                } else {
                  // Bottom Position
                  targetTop = origin.offset().top + origin.outerHeight() + margin;
                  targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
                  newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
                  tooltipVerticalMovement = '+10px';
                  backdrop.css({
                    top: 0,
                    left: 0,
                    marginLeft: tooltipWidth / 2 - backdrop.width() / 2
                  });
                }

            // Set tooptip css placement
            tooltipEl.css({
              top: newCoordinates.y,
              left: newCoordinates.x
            });

            // Calculate Scale to fill
            scaleXFactor = Math.SQRT2 * tooltipWidth / parseInt(backdrop.css('width'));
            scaleYFactor = Math.SQRT2 * tooltipHeight / parseInt(backdrop.css('height'));

            tooltipEl.velocity({ marginTop: tooltipVerticalMovement, marginLeft: tooltipHorizontalMovement }, { duration: 350, queue: false }).velocity({ opacity: 1 }, { duration: 300, delay: 50, queue: false });
            backdrop.css({ display: 'block' }).velocity({ opacity: 1 }, { duration: 55, delay: 0, queue: false }).velocity({ scaleX: scaleXFactor, scaleY: scaleYFactor }, { duration: 300, delay: 0, queue: false, easing: 'easeInOutQuad' });
          };

          timeoutRef = setTimeout(showTooltip, tooltipDelay); // End Interval

          // Mouse Out
        },
        'mouseleave.tooltip': function mouseleaveTooltip() {
          // Reset State
          started = false;
          clearTimeout(timeoutRef);

          // Animate back
          setTimeout(function () {
            if (started !== true) {
              tooltipEl.velocity({
                opacity: 0, marginTop: 0, marginLeft: 0 }, { duration: 225, queue: false });
              backdrop.velocity({ opacity: 0, scaleX: 1, scaleY: 1 }, {
                duration: 225,
                queue: false,
                complete: function complete() {
                  backdrop.css('display', 'none');
                  tooltipEl.css('display', 'none');
                  started = false;
                }
              });
            }
          }, 225);
        }
      });
    });
  };

  var repositionWithinScreen = function repositionWithinScreen(x, y, width, height) {
    var newX = x;
    var newY = y;

    if (newX < 0) {
      newX = 4;
    } else if (newX + width > window.innerWidth) {
      newX -= newX + width - window.innerWidth;
    }

    if (newY < 0) {
      newY = 4;
    } else if (newY + height > window.innerHeight + $(window).scrollTop) {
      newY -= newY + height - window.innerHeight;
    }

    return { x: newX, y: newY };
  };

  $(document).ready(function () {
    $('.tooltipped').tooltip();
  });
})(jQuery);
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function ($) {

  var methods = {
    init: function init(options) {
      var defaults = {
        menuWidth: 300,
        edge: 'left',
        closeOnClick: false,
        draggable: true
      };
      options = $.extend(defaults, options);

      $(this).each(function () {
        var $this = $(this);
        var menu_id = $("#" + $this.attr('data-activates'));

        // Set to width
        if (options.menuWidth != 300) {
          menu_id.css('width', options.menuWidth);
        }

        // Add Touch Area
        var $dragTarget;
        if (options.draggable) {
          $dragTarget = $('<div class="drag-target"></div>').attr('data-sidenav', $this.attr('data-activates'));
          $('body').append($dragTarget);
        } else {
          $dragTarget = $();
        }

        if (options.edge == 'left') {
          menu_id.css('transform', 'translateX(-100%)');
          $dragTarget.css({ 'left': 0 }); // Add Touch Area
        } else {
          menu_id.addClass('right-aligned') // Change text-alignment to right
          .css('transform', 'translateX(100%)');
          $dragTarget.css({ 'right': 0 }); // Add Touch Area
        }

        // If fixed sidenav, bring menu out
        if (menu_id.hasClass('fixed')) {
          if (window.innerWidth > 992) {
            menu_id.css('transform', 'translateX(0)');
          }
        }

        // Window resize to reset on large screens fixed
        if (menu_id.hasClass('fixed')) {
          $(window).resize(function () {
            if (window.innerWidth > 992) {
              // Close menu if window is resized bigger than 992 and user has fixed sidenav
              if ($('#sidenav-overlay').length !== 0 && menuOut) {
                removeMenu(true);
              } else {
                // menu_id.removeAttr('style');
                menu_id.css('transform', 'translateX(0%)');
                // menu_id.css('width', options.menuWidth);
              }
            } else if (menuOut === false) {
              if (options.edge === 'left') {
                menu_id.css('transform', 'translateX(-100%)');
              } else {
                menu_id.css('transform', 'translateX(100%)');
              }
            }
          });
        }

        // if closeOnClick, then add close event for all a tags in side sideNav
        if (options.closeOnClick === true) {
          menu_id.on("click.itemclick", "a:not(.collapsible-header)", function () {
            removeMenu();
          });
        }

        var removeMenu = function removeMenu(restoreNav) {
          panning = false;
          menuOut = false;
          // Reenable scrolling
          $('body').css({
            overflow: '',
            width: ''
          });

          $('#sidenav-overlay').velocity({ opacity: 0 }, { duration: 200,
            queue: false, easing: 'easeOutQuad',
            complete: function complete() {
              $(this).remove();
            } });
          if (options.edge === 'left') {
            // Reset phantom div
            $dragTarget.css({ width: '', right: '', left: '0' });
            menu_id.velocity({ 'translateX': '-100%' }, { duration: 200,
              queue: false,
              easing: 'easeOutCubic',
              complete: function complete() {
                if (restoreNav === true) {
                  // Restore Fixed sidenav
                  menu_id.removeAttr('style');
                  menu_id.css('width', options.menuWidth);
                }
              }

            });
          } else {
            // Reset phantom div
            $dragTarget.css({ width: '', right: '0', left: '' });
            menu_id.velocity({ 'translateX': '100%' }, { duration: 200,
              queue: false,
              easing: 'easeOutCubic',
              complete: function complete() {
                if (restoreNav === true) {
                  // Restore Fixed sidenav
                  menu_id.removeAttr('style');
                  menu_id.css('width', options.menuWidth);
                }
              }
            });
          }
        };

        // Touch Event
        var panning = false;
        var menuOut = false;

        if (options.draggable) {
          $dragTarget.on('click', function () {
            if (menuOut) {
              removeMenu();
            }
          });

          $dragTarget.hammer({
            prevent_default: false
          }).bind('pan', function (e) {

            if (e.gesture.pointerType == "touch") {

              var direction = e.gesture.direction;
              var x = e.gesture.center.x;
              var y = e.gesture.center.y;
              var velocityX = e.gesture.velocityX;

              // Disable Scrolling
              var $body = $('body');
              var $overlay = $('#sidenav-overlay');
              var oldWidth = $body.innerWidth();
              $body.css('overflow', 'hidden');
              $body.width(oldWidth);

              // If overlay does not exist, create one and if it is clicked, close menu
              if ($overlay.length === 0) {
                $overlay = $('<div id="sidenav-overlay"></div>');
                $overlay.css('opacity', 0).click(function () {
                  removeMenu();
                });
                $('body').append($overlay);
              }

              // Keep within boundaries
              if (options.edge === 'left') {
                if (x > options.menuWidth) {
                  x = options.menuWidth;
                } else if (x < 0) {
                  x = 0;
                }
              }

              if (options.edge === 'left') {
                // Left Direction
                if (x < options.menuWidth / 2) {
                  menuOut = false;
                }
                // Right Direction
                else if (x >= options.menuWidth / 2) {
                    menuOut = true;
                  }
                menu_id.css('transform', 'translateX(' + (x - options.menuWidth) + 'px)');
              } else {
                // Left Direction
                if (x < window.innerWidth - options.menuWidth / 2) {
                  menuOut = true;
                }
                // Right Direction
                else if (x >= window.innerWidth - options.menuWidth / 2) {
                    menuOut = false;
                  }
                var rightPos = x - options.menuWidth / 2;
                if (rightPos < 0) {
                  rightPos = 0;
                }

                menu_id.css('transform', 'translateX(' + rightPos + 'px)');
              }

              // Percentage overlay
              var overlayPerc;
              if (options.edge === 'left') {
                overlayPerc = x / options.menuWidth;
                $overlay.velocity({ opacity: overlayPerc }, { duration: 10, queue: false, easing: 'easeOutQuad' });
              } else {
                overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
                $overlay.velocity({ opacity: overlayPerc }, { duration: 10, queue: false, easing: 'easeOutQuad' });
              }
            }
          }).bind('panend', function (e) {

            if (e.gesture.pointerType == "touch") {
              var $overlay = $('<div id="sidenav-overlay"></div>');
              var velocityX = e.gesture.velocityX;
              var x = e.gesture.center.x;
              var leftPos = x - options.menuWidth;
              var rightPos = x - options.menuWidth / 2;
              if (leftPos > 0) {
                leftPos = 0;
              }
              if (rightPos < 0) {
                rightPos = 0;
              }
              panning = false;

              if (options.edge === 'left') {
                // If velocityX <= 0.3 then the user is flinging the menu closed so ignore menuOut
                if (menuOut && velocityX <= 0.3 || velocityX < -0.5) {
                  // Return menu to open
                  if (leftPos !== 0) {
                    menu_id.velocity({ 'translateX': [0, leftPos] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
                  }

                  $overlay.velocity({ opacity: 1 }, { duration: 50, queue: false, easing: 'easeOutQuad' });
                  $dragTarget.css({ width: '50%', right: 0, left: '' });
                  menuOut = true;
                } else if (!menuOut || velocityX > 0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });
                  // Slide menu closed
                  menu_id.velocity({ 'translateX': [-1 * options.menuWidth - 10, leftPos] }, { duration: 200, queue: false, easing: 'easeOutQuad' });
                  $overlay.velocity({ opacity: 0 }, { duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function complete() {
                      $(this).remove();
                    } });
                  $dragTarget.css({ width: '10px', right: '', left: 0 });
                }
              } else {
                if (menuOut && velocityX >= -0.3 || velocityX > 0.5) {
                  // Return menu to open
                  if (rightPos !== 0) {
                    menu_id.velocity({ 'translateX': [0, rightPos] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
                  }

                  $overlay.velocity({ opacity: 1 }, { duration: 50, queue: false, easing: 'easeOutQuad' });
                  $dragTarget.css({ width: '50%', right: '', left: 0 });
                  menuOut = true;
                } else if (!menuOut || velocityX < -0.3) {
                  // Enable Scrolling
                  $('body').css({
                    overflow: '',
                    width: ''
                  });

                  // Slide menu closed
                  menu_id.velocity({ 'translateX': [options.menuWidth + 10, rightPos] }, { duration: 200, queue: false, easing: 'easeOutQuad' });
                  $overlay.velocity({ opacity: 0 }, { duration: 200, queue: false, easing: 'easeOutQuad',
                    complete: function complete() {
                      $(this).remove();
                    } });
                  $dragTarget.css({ width: '10px', right: 0, left: '' });
                }
              }
            }
          });
        }

        $this.click(function () {
          if (menuOut === true) {
            menuOut = false;
            panning = false;
            removeMenu();
          } else {

            // Disable Scrolling
            var $body = $('body');
            var $overlay = $('<div id="sidenav-overlay"></div>');
            var oldWidth = $body.innerWidth();
            $body.css('overflow', 'hidden');
            $body.width(oldWidth);

            // Push current drag target on top of DOM tree
            $('body').append($dragTarget);

            if (options.edge === 'left') {
              $dragTarget.css({ width: '50%', right: 0, left: '' });
              menu_id.velocity({ 'translateX': [0, -1 * options.menuWidth] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
            } else {
              $dragTarget.css({ width: '50%', right: '', left: 0 });
              menu_id.velocity({ 'translateX': [0, options.menuWidth] }, { duration: 300, queue: false, easing: 'easeOutQuad' });
            }

            $overlay.css('opacity', 0).click(function () {
              menuOut = false;
              panning = false;
              removeMenu();
              $overlay.velocity({ opacity: 0 }, { duration: 300, queue: false, easing: 'easeOutQuad',
                complete: function complete() {
                  $(this).remove();
                } });
            });
            $('body').append($overlay);
            $overlay.velocity({ opacity: 1 }, { duration: 300, queue: false, easing: 'easeOutQuad',
              complete: function complete() {
                menuOut = true;
                panning = false;
              }
            });
          }

          return false;
        });
      });
    },
    destroy: function destroy() {
      var $overlay = $('#sidenav-overlay');
      var $dragTarget = $('.drag-target[data-sidenav="' + $(this).attr('data-activates') + '"]');
      $overlay.trigger('click');
      $dragTarget.remove();
      $(this).off('click');
      $overlay.remove();
    },
    show: function show() {
      this.trigger('click');
    },
    hide: function hide() {
      $('#sidenav-overlay').trigger('click');
    }
  };

  $.fn.sideNav = function (methodOrOptions) {
    if (methods[methodOrOptions]) {
      return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if ((typeof methodOrOptions === 'undefined' ? 'undefined' : _typeof(methodOrOptions)) === 'object' || !methodOrOptions) {
      // Default to "init"
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + methodOrOptions + ' does not exist on jQuery.sideNav');
    }
  }; // Plugin end
})(jQuery);
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (a, b, c, d) {
  "use strict";
  function k(a, b, c) {
    return setTimeout(q(a, c), b);
  }function l(a, b, c) {
    return Array.isArray(a) ? (m(a, c[b], c), !0) : !1;
  }function m(a, b, c) {
    var e;if (a) if (a.forEach) a.forEach(b, c);else if (a.length !== d) for (e = 0; e < a.length;) {
      b.call(c, a[e], e, a), e++;
    } else for (e in a) {
      a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
  }function n(a, b, c) {
    for (var e = Object.keys(b), f = 0; f < e.length;) {
      (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
    }return a;
  }function o(a, b) {
    return n(a, b, !0);
  }function p(a, b, c) {
    var e,
        d = b.prototype;e = a.prototype = Object.create(d), e.constructor = a, e._super = d, c && n(e, c);
  }function q(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }function r(a, b) {
    return (typeof a === "undefined" ? "undefined" : _typeof(a)) == g ? a.apply(b ? b[0] || d : d, b) : a;
  }function s(a, b) {
    return a === d ? b : a;
  }function t(a, b, c) {
    m(x(b), function (b) {
      a.addEventListener(b, c, !1);
    });
  }function u(a, b, c) {
    m(x(b), function (b) {
      a.removeEventListener(b, c, !1);
    });
  }function v(a, b) {
    for (; a;) {
      if (a == b) return !0;a = a.parentNode;
    }return !1;
  }function w(a, b) {
    return a.indexOf(b) > -1;
  }function x(a) {
    return a.trim().split(/\s+/g);
  }function y(a, b, c) {
    if (a.indexOf && !c) return a.indexOf(b);for (var d = 0; d < a.length;) {
      if (c && a[d][c] == b || !c && a[d] === b) return d;d++;
    }return -1;
  }function z(a) {
    return Array.prototype.slice.call(a, 0);
  }function A(a, b, c) {
    for (var d = [], e = [], f = 0; f < a.length;) {
      var g = b ? a[f][b] : a[f];y(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
    }return c && (d = b ? d.sort(function (a, c) {
      return a[b] > c[b];
    }) : d.sort()), d;
  }function B(a, b) {
    for (var c, f, g = b[0].toUpperCase() + b.slice(1), h = 0; h < e.length;) {
      if (c = e[h], f = c ? c + g : b, f in a) return f;h++;
    }return d;
  }function D() {
    return C++;
  }function E(a) {
    var b = a.ownerDocument;return b.defaultView || b.parentWindow;
  }function ab(a, b) {
    var c = this;this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
      r(a.options.enable, [a]) && c.handler(b);
    }, this.init();
  }function bb(a) {
    var b,
        c = a.options.inputClass;return b = c ? c : H ? wb : I ? Eb : G ? Gb : rb, new b(a, cb);
  }function cb(a, b, c) {
    var d = c.pointers.length,
        e = c.changedPointers.length,
        f = b & O && 0 === d - e,
        g = b & (Q | R) && 0 === d - e;c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, db(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
  }function db(a, b) {
    var c = a.session,
        d = b.pointers,
        e = d.length;c.firstInput || (c.firstInput = gb(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = gb(b) : 1 === e && (c.firstMultiple = !1);var f = c.firstInput,
        g = c.firstMultiple,
        h = g ? g.center : f.center,
        i = b.center = hb(d);b.timeStamp = j(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = lb(h, i), b.distance = kb(h, i), eb(c, b), b.offsetDirection = jb(b.deltaX, b.deltaY), b.scale = g ? nb(g.pointers, d) : 1, b.rotation = g ? mb(g.pointers, d) : 0, fb(c, b);var k = a.element;v(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
  }function eb(a, b) {
    var c = b.center,
        d = a.offsetDelta || {},
        e = a.prevDelta || {},
        f = a.prevInput || {};(b.eventType === O || f.eventType === Q) && (e = a.prevDelta = { x: f.deltaX || 0, y: f.deltaY || 0 }, d = a.offsetDelta = { x: c.x, y: c.y }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
  }function fb(a, b) {
    var f,
        g,
        h,
        j,
        c = a.lastInterval || b,
        e = b.timeStamp - c.timeStamp;if (b.eventType != R && (e > N || c.velocity === d)) {
      var k = c.deltaX - b.deltaX,
          l = c.deltaY - b.deltaY,
          m = ib(e, k, l);g = m.x, h = m.y, f = i(m.x) > i(m.y) ? m.x : m.y, j = jb(k, l), a.lastInterval = b;
    } else f = c.velocity, g = c.velocityX, h = c.velocityY, j = c.direction;b.velocity = f, b.velocityX = g, b.velocityY = h, b.direction = j;
  }function gb(a) {
    for (var b = [], c = 0; c < a.pointers.length;) {
      b[c] = { clientX: h(a.pointers[c].clientX), clientY: h(a.pointers[c].clientY) }, c++;
    }return { timeStamp: j(), pointers: b, center: hb(b), deltaX: a.deltaX, deltaY: a.deltaY };
  }function hb(a) {
    var b = a.length;if (1 === b) return { x: h(a[0].clientX), y: h(a[0].clientY) };for (var c = 0, d = 0, e = 0; b > e;) {
      c += a[e].clientX, d += a[e].clientY, e++;
    }return { x: h(c / b), y: h(d / b) };
  }function ib(a, b, c) {
    return { x: b / a || 0, y: c / a || 0 };
  }function jb(a, b) {
    return a === b ? S : i(a) >= i(b) ? a > 0 ? T : U : b > 0 ? V : W;
  }function kb(a, b, c) {
    c || (c = $);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return Math.sqrt(d * d + e * e);
  }function lb(a, b, c) {
    c || (c = $);var d = b[c[0]] - a[c[0]],
        e = b[c[1]] - a[c[1]];return 180 * Math.atan2(e, d) / Math.PI;
  }function mb(a, b) {
    return lb(b[1], b[0], _) - lb(a[1], a[0], _);
  }function nb(a, b) {
    return kb(b[0], b[1], _) / kb(a[0], a[1], _);
  }function rb() {
    this.evEl = pb, this.evWin = qb, this.allow = !0, this.pressed = !1, ab.apply(this, arguments);
  }function wb() {
    this.evEl = ub, this.evWin = vb, ab.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }function Ab() {
    this.evTarget = yb, this.evWin = zb, this.started = !1, ab.apply(this, arguments);
  }function Bb(a, b) {
    var c = z(a.touches),
        d = z(a.changedTouches);return b & (Q | R) && (c = A(c.concat(d), "identifier", !0)), [c, d];
  }function Eb() {
    this.evTarget = Db, this.targetIds = {}, ab.apply(this, arguments);
  }function Fb(a, b) {
    var c = z(a.touches),
        d = this.targetIds;if (b & (O | P) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];var e,
        f,
        g = z(a.changedTouches),
        h = [],
        i = this.target;if (f = c.filter(function (a) {
      return v(a.target, i);
    }), b === O) for (e = 0; e < f.length;) {
      d[f[e].identifier] = !0, e++;
    }for (e = 0; e < g.length;) {
      d[g[e].identifier] && h.push(g[e]), b & (Q | R) && delete d[g[e].identifier], e++;
    }return h.length ? [A(f.concat(h), "identifier", !0), h] : void 0;
  }function Gb() {
    ab.apply(this, arguments);var a = q(this.handler, this);this.touch = new Eb(this.manager, a), this.mouse = new rb(this.manager, a);
  }function Pb(a, b) {
    this.manager = a, this.set(b);
  }function Qb(a) {
    if (w(a, Mb)) return Mb;var b = w(a, Nb),
        c = w(a, Ob);return b && c ? Nb + " " + Ob : b || c ? b ? Nb : Ob : w(a, Lb) ? Lb : Kb;
  }function Yb(a) {
    this.id = D(), this.manager = null, this.options = o(a || {}, this.defaults), this.options.enable = s(this.options.enable, !0), this.state = Rb, this.simultaneous = {}, this.requireFail = [];
  }function Zb(a) {
    return a & Wb ? "cancel" : a & Ub ? "end" : a & Tb ? "move" : a & Sb ? "start" : "";
  }function $b(a) {
    return a == W ? "down" : a == V ? "up" : a == T ? "left" : a == U ? "right" : "";
  }function _b(a, b) {
    var c = b.manager;return c ? c.get(a) : a;
  }function ac() {
    Yb.apply(this, arguments);
  }function bc() {
    ac.apply(this, arguments), this.pX = null, this.pY = null;
  }function cc() {
    ac.apply(this, arguments);
  }function dc() {
    Yb.apply(this, arguments), this._timer = null, this._input = null;
  }function ec() {
    ac.apply(this, arguments);
  }function fc() {
    ac.apply(this, arguments);
  }function gc() {
    Yb.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }function hc(a, b) {
    return b = b || {}, b.recognizers = s(b.recognizers, hc.defaults.preset), new kc(a, b);
  }function kc(a, b) {
    b = b || {}, this.options = o(b, hc.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = bb(this), this.touchAction = new Pb(this, this.options.touchAction), lc(this, !0), m(b.recognizers, function (a) {
      var b = this.add(new a[0](a[1]));a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
    }, this);
  }function lc(a, b) {
    var c = a.element;m(a.options.cssProps, function (a, d) {
      c.style[B(c.style, d)] = b ? a : "";
    });
  }function mc(a, c) {
    var d = b.createEvent("Event");d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
  }var e = ["", "webkit", "moz", "MS", "ms", "o"],
      f = b.createElement("div"),
      g = "function",
      h = Math.round,
      i = Math.abs,
      j = Date.now,
      C = 1,
      F = /mobile|tablet|ip(ad|hone|od)|android/i,
      G = "ontouchstart" in a,
      H = B(a, "PointerEvent") !== d,
      I = G && F.test(navigator.userAgent),
      J = "touch",
      K = "pen",
      L = "mouse",
      M = "kinect",
      N = 25,
      O = 1,
      P = 2,
      Q = 4,
      R = 8,
      S = 1,
      T = 2,
      U = 4,
      V = 8,
      W = 16,
      X = T | U,
      Y = V | W,
      Z = X | Y,
      $ = ["x", "y"],
      _ = ["clientX", "clientY"];ab.prototype = { handler: function handler() {}, init: function init() {
      this.evEl && t(this.element, this.evEl, this.domHandler), this.evTarget && t(this.target, this.evTarget, this.domHandler), this.evWin && t(E(this.element), this.evWin, this.domHandler);
    }, destroy: function destroy() {
      this.evEl && u(this.element, this.evEl, this.domHandler), this.evTarget && u(this.target, this.evTarget, this.domHandler), this.evWin && u(E(this.element), this.evWin, this.domHandler);
    } };var ob = { mousedown: O, mousemove: P, mouseup: Q },
      pb = "mousedown",
      qb = "mousemove mouseup";p(rb, ab, { handler: function handler(a) {
      var b = ob[a.type];b & O && 0 === a.button && (this.pressed = !0), b & P && 1 !== a.which && (b = Q), this.pressed && this.allow && (b & Q && (this.pressed = !1), this.callback(this.manager, b, { pointers: [a], changedPointers: [a], pointerType: L, srcEvent: a }));
    } });var sb = { pointerdown: O, pointermove: P, pointerup: Q, pointercancel: R, pointerout: R },
      tb = { 2: J, 3: K, 4: L, 5: M },
      ub = "pointerdown",
      vb = "pointermove pointerup pointercancel";a.MSPointerEvent && (ub = "MSPointerDown", vb = "MSPointerMove MSPointerUp MSPointerCancel"), p(wb, ab, { handler: function handler(a) {
      var b = this.store,
          c = !1,
          d = a.type.toLowerCase().replace("ms", ""),
          e = sb[d],
          f = tb[a.pointerType] || a.pointerType,
          g = f == J,
          h = y(b, a.pointerId, "pointerId");e & O && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Q | R) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, { pointers: b, changedPointers: [a], pointerType: f, srcEvent: a }), c && b.splice(h, 1));
    } });var xb = { touchstart: O, touchmove: P, touchend: Q, touchcancel: R },
      yb = "touchstart",
      zb = "touchstart touchmove touchend touchcancel";p(Ab, ab, { handler: function handler(a) {
      var b = xb[a.type];if (b === O && (this.started = !0), this.started) {
        var c = Bb.call(this, a, b);b & (Q | R) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: J, srcEvent: a });
      }
    } });var Cb = { touchstart: O, touchmove: P, touchend: Q, touchcancel: R },
      Db = "touchstart touchmove touchend touchcancel";p(Eb, ab, { handler: function handler(a) {
      var b = Cb[a.type],
          c = Fb.call(this, a, b);c && this.callback(this.manager, b, { pointers: c[0], changedPointers: c[1], pointerType: J, srcEvent: a });
    } }), p(Gb, ab, { handler: function handler(a, b, c) {
      var d = c.pointerType == J,
          e = c.pointerType == L;if (d) this.mouse.allow = !1;else if (e && !this.mouse.allow) return;b & (Q | R) && (this.mouse.allow = !0), this.callback(a, b, c);
    }, destroy: function destroy() {
      this.touch.destroy(), this.mouse.destroy();
    } });var Hb = B(f.style, "touchAction"),
      Ib = Hb !== d,
      Jb = "compute",
      Kb = "auto",
      Lb = "manipulation",
      Mb = "none",
      Nb = "pan-x",
      Ob = "pan-y";Pb.prototype = { set: function set(a) {
      a == Jb && (a = this.compute()), Ib && (this.manager.element.style[Hb] = a), this.actions = a.toLowerCase().trim();
    }, update: function update() {
      this.set(this.manager.options.touchAction);
    }, compute: function compute() {
      var a = [];return m(this.manager.recognizers, function (b) {
        r(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
      }), Qb(a.join(" "));
    }, preventDefaults: function preventDefaults(a) {
      if (!Ib) {
        var b = a.srcEvent,
            c = a.offsetDirection;if (this.manager.session.prevented) return b.preventDefault(), void 0;var d = this.actions,
            e = w(d, Mb),
            f = w(d, Ob),
            g = w(d, Nb);return e || f && c & X || g && c & Y ? this.preventSrc(b) : void 0;
      }
    }, preventSrc: function preventSrc(a) {
      this.manager.session.prevented = !0, a.preventDefault();
    } };var Rb = 1,
      Sb = 2,
      Tb = 4,
      Ub = 8,
      Vb = Ub,
      Wb = 16,
      Xb = 32;Yb.prototype = { defaults: {}, set: function set(a) {
      return n(this.options, a), this.manager && this.manager.touchAction.update(), this;
    }, recognizeWith: function recognizeWith(a) {
      if (l(a, "recognizeWith", this)) return this;var b = this.simultaneous;return a = _b(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
    }, dropRecognizeWith: function dropRecognizeWith(a) {
      return l(a, "dropRecognizeWith", this) ? this : (a = _b(a, this), delete this.simultaneous[a.id], this);
    }, requireFailure: function requireFailure(a) {
      if (l(a, "requireFailure", this)) return this;var b = this.requireFail;return a = _b(a, this), -1 === y(b, a) && (b.push(a), a.requireFailure(this)), this;
    }, dropRequireFailure: function dropRequireFailure(a) {
      if (l(a, "dropRequireFailure", this)) return this;a = _b(a, this);var b = y(this.requireFail, a);return b > -1 && this.requireFail.splice(b, 1), this;
    }, hasRequireFailures: function hasRequireFailures() {
      return this.requireFail.length > 0;
    }, canRecognizeWith: function canRecognizeWith(a) {
      return !!this.simultaneous[a.id];
    }, emit: function emit(a) {
      function d(d) {
        b.manager.emit(b.options.event + (d ? Zb(c) : ""), a);
      }var b = this,
          c = this.state;Ub > c && d(!0), d(), c >= Ub && d(!0);
    }, tryEmit: function tryEmit(a) {
      return this.canEmit() ? this.emit(a) : (this.state = Xb, void 0);
    }, canEmit: function canEmit() {
      for (var a = 0; a < this.requireFail.length;) {
        if (!(this.requireFail[a].state & (Xb | Rb))) return !1;a++;
      }return !0;
    }, recognize: function recognize(a) {
      var b = n({}, a);return r(this.options.enable, [this, b]) ? (this.state & (Vb | Wb | Xb) && (this.state = Rb), this.state = this.process(b), this.state & (Sb | Tb | Ub | Wb) && this.tryEmit(b), void 0) : (this.reset(), this.state = Xb, void 0);
    }, process: function process() {}, getTouchAction: function getTouchAction() {}, reset: function reset() {} }, p(ac, Yb, { defaults: { pointers: 1 }, attrTest: function attrTest(a) {
      var b = this.options.pointers;return 0 === b || a.pointers.length === b;
    }, process: function process(a) {
      var b = this.state,
          c = a.eventType,
          d = b & (Sb | Tb),
          e = this.attrTest(a);return d && (c & R || !e) ? b | Wb : d || e ? c & Q ? b | Ub : b & Sb ? b | Tb : Sb : Xb;
    } }), p(bc, ac, { defaults: { event: "pan", threshold: 10, pointers: 1, direction: Z }, getTouchAction: function getTouchAction() {
      var a = this.options.direction,
          b = [];return a & X && b.push(Ob), a & Y && b.push(Nb), b;
    }, directionTest: function directionTest(a) {
      var b = this.options,
          c = !0,
          d = a.distance,
          e = a.direction,
          f = a.deltaX,
          g = a.deltaY;return e & b.direction || (b.direction & X ? (e = 0 === f ? S : 0 > f ? T : U, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? S : 0 > g ? V : W, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
    }, attrTest: function attrTest(a) {
      return ac.prototype.attrTest.call(this, a) && (this.state & Sb || !(this.state & Sb) && this.directionTest(a));
    }, emit: function emit(a) {
      this.pX = a.deltaX, this.pY = a.deltaY;var b = $b(a.direction);b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a);
    } }), p(cc, ac, { defaults: { event: "pinch", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [Mb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & Sb);
    }, emit: function emit(a) {
      if (this._super.emit.call(this, a), 1 !== a.scale) {
        var b = a.scale < 1 ? "in" : "out";this.manager.emit(this.options.event + b, a);
      }
    } }), p(dc, Yb, { defaults: { event: "press", pointers: 1, time: 500, threshold: 5 }, getTouchAction: function getTouchAction() {
      return [Kb];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          e = a.deltaTime > b.time;if (this._input = a, !d || !c || a.eventType & (Q | R) && !e) this.reset();else if (a.eventType & O) this.reset(), this._timer = k(function () {
        this.state = Vb, this.tryEmit();
      }, b.time, this);else if (a.eventType & Q) return Vb;return Xb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit(a) {
      this.state === Vb && (a && a.eventType & Q ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = j(), this.manager.emit(this.options.event, this._input)));
    } }), p(ec, ac, { defaults: { event: "rotate", threshold: 0, pointers: 2 }, getTouchAction: function getTouchAction() {
      return [Mb];
    }, attrTest: function attrTest(a) {
      return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & Sb);
    } }), p(fc, ac, { defaults: { event: "swipe", threshold: 10, velocity: .65, direction: X | Y, pointers: 1 }, getTouchAction: function getTouchAction() {
      return bc.prototype.getTouchAction.call(this);
    }, attrTest: function attrTest(a) {
      var c,
          b = this.options.direction;return b & (X | Y) ? c = a.velocity : b & X ? c = a.velocityX : b & Y && (c = a.velocityY), this._super.attrTest.call(this, a) && b & a.direction && a.distance > this.options.threshold && i(c) > this.options.velocity && a.eventType & Q;
    }, emit: function emit(a) {
      var b = $b(a.direction);b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
    } }), p(gc, Yb, { defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 2, posThreshold: 10 }, getTouchAction: function getTouchAction() {
      return [Lb];
    }, process: function process(a) {
      var b = this.options,
          c = a.pointers.length === b.pointers,
          d = a.distance < b.threshold,
          e = a.deltaTime < b.time;if (this.reset(), a.eventType & O && 0 === this.count) return this.failTimeout();if (d && e && c) {
        if (a.eventType != Q) return this.failTimeout();var f = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
            g = !this.pCenter || kb(this.pCenter, a.center) < b.posThreshold;this.pTime = a.timeStamp, this.pCenter = a.center, g && f ? this.count += 1 : this.count = 1, this._input = a;var h = this.count % b.taps;if (0 === h) return this.hasRequireFailures() ? (this._timer = k(function () {
          this.state = Vb, this.tryEmit();
        }, b.interval, this), Sb) : Vb;
      }return Xb;
    }, failTimeout: function failTimeout() {
      return this._timer = k(function () {
        this.state = Xb;
      }, this.options.interval, this), Xb;
    }, reset: function reset() {
      clearTimeout(this._timer);
    }, emit: function emit() {
      this.state == Vb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    } }), hc.VERSION = "2.0.4", hc.defaults = { domEvents: !1, touchAction: Jb, enable: !0, inputTarget: null, inputClass: null, preset: [[ec, { enable: !1 }], [cc, { enable: !1 }, ["rotate"]], [fc, { direction: X }], [bc, { direction: X }, ["swipe"]], [gc], [gc, { event: "doubletap", taps: 2 }, ["tap"]], [dc]], cssProps: { userSelect: "default", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" } };var ic = 1,
      jc = 2;kc.prototype = { set: function set(a) {
      return n(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
    }, stop: function stop(a) {
      this.session.stopped = a ? jc : ic;
    }, recognize: function recognize(a) {
      var b = this.session;if (!b.stopped) {
        this.touchAction.preventDefaults(a);var c,
            d = this.recognizers,
            e = b.curRecognizer;(!e || e && e.state & Vb) && (e = b.curRecognizer = null);for (var f = 0; f < d.length;) {
          c = d[f], b.stopped === jc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (Sb | Tb | Ub) && (e = b.curRecognizer = c), f++;
        }
      }
    }, get: function get(a) {
      if (a instanceof Yb) return a;for (var b = this.recognizers, c = 0; c < b.length; c++) {
        if (b[c].options.event == a) return b[c];
      }return null;
    }, add: function add(a) {
      if (l(a, "add", this)) return this;var b = this.get(a.options.event);return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
    }, remove: function remove(a) {
      if (l(a, "remove", this)) return this;var b = this.recognizers;return a = this.get(a), b.splice(y(b, a), 1), this.touchAction.update(), this;
    }, on: function on(a, b) {
      var c = this.handlers;return m(x(a), function (a) {
        c[a] = c[a] || [], c[a].push(b);
      }), this;
    }, off: function off(a, b) {
      var c = this.handlers;return m(x(a), function (a) {
        b ? c[a].splice(y(c[a], b), 1) : delete c[a];
      }), this;
    }, emit: function emit(a, b) {
      this.options.domEvents && mc(a, b);var c = this.handlers[a] && this.handlers[a].slice();if (c && c.length) {
        b.type = a, b.preventDefault = function () {
          b.srcEvent.preventDefault();
        };for (var d = 0; d < c.length;) {
          c[d](b), d++;
        }
      }
    }, destroy: function destroy() {
      this.element && lc(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    } }, n(hc, { INPUT_START: O, INPUT_MOVE: P, INPUT_END: Q, INPUT_CANCEL: R, STATE_POSSIBLE: Rb, STATE_BEGAN: Sb, STATE_CHANGED: Tb, STATE_ENDED: Ub, STATE_RECOGNIZED: Vb, STATE_CANCELLED: Wb, STATE_FAILED: Xb, DIRECTION_NONE: S, DIRECTION_LEFT: T, DIRECTION_RIGHT: U, DIRECTION_UP: V, DIRECTION_DOWN: W, DIRECTION_HORIZONTAL: X, DIRECTION_VERTICAL: Y, DIRECTION_ALL: Z, Manager: kc, Input: ab, TouchAction: Pb, TouchInput: Eb, MouseInput: rb, PointerEventInput: wb, TouchMouseInput: Gb, SingleTouchInput: Ab, Recognizer: Yb, AttrRecognizer: ac, Tap: gc, Pan: bc, Swipe: fc, Pinch: cc, Rotate: ec, Press: dc, on: t, off: u, each: m, merge: o, extend: n, inherit: p, bindFn: q, prefixed: B }), (typeof define === "undefined" ? "undefined" : _typeof(define)) == g && define.amd ? define(function () {
    return hc;
  }) : "undefined" != typeof module && module.exports ? module.exports = hc : a[c] = hc;
}(window, document, "Hammer");
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery', 'hammerjs'], factory);
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        factory(require('jquery'), require('hammerjs'));
    } else {
        factory(jQuery, Hammer);
    }
})(function ($, Hammer) {
    function hammerify(el, options) {
        var $el = $(el);
        if (!$el.data("hammer")) {
            $el.data("hammer", new Hammer($el[0], options));
        }
    }

    $.fn.hammer = function (options) {
        return this.each(function () {
            hammerify(this, options);
        });
    };

    // extend the emit method to also trigger jQuery events
    Hammer.Manager.prototype.emit = function (originalEmit) {
        return function (type, data) {
            originalEmit.call(this, type, data);
            $(this.element).trigger({
                type: type,
                gesture: data
            });
        };
    }(Hammer.Manager.prototype.emit);
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/*! Note that this has been modified by Materialize to confirm that Velocity is not already being imported. */
jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function (e) {
  function t(e) {
    var t = e.length,
        a = r.type(e);return "function" === a || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
  }if (!e.jQuery) {
    var r = function r(e, t) {
      return new r.fn.init(e, t);
    };r.isWindow = function (e) {
      return null != e && e == e.window;
    }, r.type = function (e) {
      return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? n[i.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
    }, r.isArray = Array.isArray || function (e) {
      return "array" === r.type(e);
    }, r.isPlainObject = function (e) {
      var t;if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e)) return !1;try {
        if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (a) {
        return !1;
      }for (t in e) {}return void 0 === t || o.call(e, t);
    }, r.each = function (e, r, a) {
      var n,
          o = 0,
          i = e.length,
          s = t(e);if (a) {
        if (s) for (; i > o && (n = r.apply(e[o], a), n !== !1); o++) {} else for (o in e) {
          if (n = r.apply(e[o], a), n === !1) break;
        }
      } else if (s) for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++) {} else for (o in e) {
        if (n = r.call(e[o], o, e[o]), n === !1) break;
      }return e;
    }, r.data = function (e, t, n) {
      if (void 0 === n) {
        var o = e[r.expando],
            i = o && a[o];if (void 0 === t) return i;if (i && t in i) return i[t];
      } else if (void 0 !== t) {
        var o = e[r.expando] || (e[r.expando] = ++r.uuid);return a[o] = a[o] || {}, a[o][t] = n, n;
      }
    }, r.removeData = function (e, t) {
      var n = e[r.expando],
          o = n && a[n];o && r.each(t, function (e, t) {
        delete o[t];
      });
    }, r.extend = function () {
      var e,
          t,
          a,
          n,
          o,
          i,
          s = arguments[0] || {},
          l = 1,
          u = arguments.length,
          c = !1;for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != (typeof s === "undefined" ? "undefined" : _typeof(s)) && "function" !== r.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++) {
        if (null != (o = arguments[l])) for (n in o) {
          e = s[n], a = o[n], s !== a && (c && a && (r.isPlainObject(a) || (t = r.isArray(a))) ? (t ? (t = !1, i = e && r.isArray(e) ? e : []) : i = e && r.isPlainObject(e) ? e : {}, s[n] = r.extend(c, i, a)) : void 0 !== a && (s[n] = a));
        }
      }return s;
    }, r.queue = function (e, a, n) {
      function o(e, r) {
        var a = r || [];return null != e && (t(Object(e)) ? !function (e, t) {
          for (var r = +t.length, a = 0, n = e.length; r > a;) {
            e[n++] = t[a++];
          }if (r !== r) for (; void 0 !== t[a];) {
            e[n++] = t[a++];
          }return e.length = n, e;
        }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a;
      }if (e) {
        a = (a || "fx") + "queue";var i = r.data(e, a);return n ? (!i || r.isArray(n) ? i = r.data(e, a, o(n)) : i.push(n), i) : i || [];
      }
    }, r.dequeue = function (e, t) {
      r.each(e.nodeType ? [e] : e, function (e, a) {
        t = t || "fx";var n = r.queue(a, t),
            o = n.shift();"inprogress" === o && (o = n.shift()), o && ("fx" === t && n.unshift("inprogress"), o.call(a, function () {
          r.dequeue(a, t);
        }));
      });
    }, r.fn = r.prototype = { init: function init(e) {
        if (e.nodeType) return this[0] = e, this;throw new Error("Not a DOM node.");
      }, offset: function offset() {
        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
      }, position: function position() {
        function e() {
          for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) {
            e = e.offsetParent;
          }return e || document;
        }var t = this[0],
            e = e.apply(t),
            a = this.offset(),
            n = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : r(e).offset();return a.top -= parseFloat(t.style.marginTop) || 0, a.left -= parseFloat(t.style.marginLeft) || 0, e.style && (n.top += parseFloat(e.style.borderTopWidth) || 0, n.left += parseFloat(e.style.borderLeftWidth) || 0), { top: a.top - n.top, left: a.left - n.left };
      } };var a = {};r.expando = "velocity" + new Date().getTime(), r.uuid = 0;for (var n = {}, o = n.hasOwnProperty, i = n.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) {
      n["[object " + s[l] + "]"] = s[l].toLowerCase();
    }r.fn.init.prototype = r.fn, e.Velocity = { Utilities: r };
  }
}(window), function (e) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
}(function () {
  return function (e, t, r, a) {
    function n(e) {
      for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
        var n = e[t];n && a.push(n);
      }return a;
    }function o(e) {
      return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e;
    }function i(e) {
      var t = f.data(e, "velocity");return null === t ? a : t;
    }function s(e) {
      return function (t) {
        return Math.round(t * e) * (1 / e);
      };
    }function l(e, r, a, n) {
      function o(e, t) {
        return 1 - 3 * t + 3 * e;
      }function i(e, t) {
        return 3 * t - 6 * e;
      }function s(e) {
        return 3 * e;
      }function l(e, t, r) {
        return ((o(t, r) * e + i(t, r)) * e + s(t)) * e;
      }function u(e, t, r) {
        return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t);
      }function c(t, r) {
        for (var n = 0; m > n; ++n) {
          var o = u(r, e, a);if (0 === o) return r;var i = l(r, e, a) - t;r -= i / o;
        }return r;
      }function p() {
        for (var t = 0; b > t; ++t) {
          w[t] = l(t * x, e, a);
        }
      }function f(t, r, n) {
        var o,
            i,
            s = 0;do {
          i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i;
        } while (Math.abs(o) > h && ++s < v);return i;
      }function d(t) {
        for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) {
          r += x;
        }--n;var i = (t - w[n]) / (w[n + 1] - w[n]),
            s = r + i * x,
            l = u(s, e, a);return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x);
      }function g() {
        V = !0, (e != r || a != n) && p();
      }var m = 4,
          y = .001,
          h = 1e-7,
          v = 10,
          b = 11,
          x = 1 / (b - 1),
          S = "Float32Array" in t;if (4 !== arguments.length) return !1;for (var P = 0; 4 > P; ++P) {
        if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
      }e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);var w = S ? new Float32Array(b) : new Array(b),
          V = !1,
          C = function C(t) {
        return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n);
      };C.getControlPoints = function () {
        return [{ x: e, y: r }, { x: a, y: n }];
      };var T = "generateBezier(" + [e, r, a, n] + ")";return C.toString = function () {
        return T;
      }, C;
    }function u(e, t) {
      var r = e;return m.isString(e) ? b.Easings[e] || (r = !1) : r = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : m.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = b.Easings[b.defaults.easing] ? b.defaults.easing : v), r;
    }function c(e) {
      if (e) {
        var t = new Date().getTime(),
            r = b.State.calls.length;r > 1e4 && (b.State.calls = n(b.State.calls));for (var o = 0; r > o; o++) {
          if (b.State.calls[o]) {
            var s = b.State.calls[o],
                l = s[0],
                u = s[2],
                d = s[3],
                g = !!d,
                y = null;d || (d = b.State.calls[o][3] = t - 16);for (var h = Math.min((t - d) / u.duration, 1), v = 0, x = l.length; x > v; v++) {
              var P = l[v],
                  V = P.element;if (i(V)) {
                var C = !1;if (u.display !== a && null !== u.display && "none" !== u.display) {
                  if ("flex" === u.display) {
                    var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];f.each(T, function (e, t) {
                      S.setPropertyValue(V, "display", t);
                    });
                  }S.setPropertyValue(V, "display", u.display);
                }u.visibility !== a && "hidden" !== u.visibility && S.setPropertyValue(V, "visibility", u.visibility);for (var k in P) {
                  if ("element" !== k) {
                    var A,
                        F = P[k],
                        j = m.isString(F.easing) ? b.Easings[F.easing] : F.easing;if (1 === h) A = F.endValue;else {
                      var E = F.endValue - F.startValue;if (A = F.startValue + E * j(h, u, E), !g && A === F.currentValue) continue;
                    }if (F.currentValue = A, "tween" === k) y = A;else {
                      if (S.Hooks.registered[k]) {
                        var H = S.Hooks.getRoot(k),
                            N = i(V).rootPropertyValueCache[H];N && (F.rootPropertyValue = N);
                      }var L = S.setPropertyValue(V, k, F.currentValue + (0 === parseFloat(A) ? "" : F.unitType), F.rootPropertyValue, F.scrollData);S.Hooks.registered[k] && (i(V).rootPropertyValueCache[H] = S.Normalizations.registered[H] ? S.Normalizations.registered[H]("extract", null, L[1]) : L[1]), "transform" === L[0] && (C = !0);
                    }
                  }
                }u.mobileHA && i(V).transformCache.translate3d === a && (i(V).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && S.flushTransformCache(V);
              }
            }u.display !== a && "none" !== u.display && (b.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (b.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], h, Math.max(0, d + u.duration - t), d, y), 1 === h && p(o);
          }
        }
      }b.State.isTicking && w(c);
    }function p(e, t) {
      if (!b.State.calls[e]) return !1;for (var r = b.State.calls[e][0], n = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
        var p = r[u].element;if (t || o.loop || ("none" === o.display && S.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && S.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && (f.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test(f.queue(p)[1])) && i(p)) {
          i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};var d = !1;f.each(S.Lists.transforms3D, function (e, t) {
            var r = /^scale/.test(t) ? 1 : 0,
                n = i(p).transformCache[t];i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (d = !0, delete i(p).transformCache[t]);
          }), o.mobileHA && (d = !0, delete i(p).transformCache.translate3d), d && S.flushTransformCache(p), S.Values.removeClass(p, "velocity-animating");
        }if (!t && o.complete && !o.loop && u === c - 1) try {
          o.complete.call(n, n);
        } catch (g) {
          setTimeout(function () {
            throw g;
          }, 1);
        }s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && (f.each(i(p).tweensContainer, function (e, t) {
          /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100);
        }), b(p, "reverse", { loop: !0, delay: o.delay })), o.queue !== !1 && f.dequeue(p, o.queue);
      }b.State.calls[e] = !1;for (var m = 0, y = b.State.calls.length; y > m; m++) {
        if (b.State.calls[m] !== !1) {
          l = !0;break;
        }
      }l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []);
    }var f,
        d = function () {
      if (r.documentMode) return r.documentMode;for (var e = 7; e > 4; e--) {
        var t = r.createElement("div");if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e;
      }return a;
    }(),
        g = function () {
      var e = 0;return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
        var r,
            a = new Date().getTime();return r = Math.max(0, 16 - (a - e)), e = a + r, setTimeout(function () {
          t(a + r);
        }, r);
      };
    }(),
        m = { isString: function isString(e) {
        return "string" == typeof e;
      }, isArray: Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e);
      }, isFunction: function isFunction(e) {
        return "[object Function]" === Object.prototype.toString.call(e);
      }, isNode: function isNode(e) {
        return e && e.nodeType;
      }, isNodeList: function isNodeList(e) {
        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == _typeof(e[0]) && e[0].nodeType > 0);
      }, isWrapped: function isWrapped(e) {
        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
      }, isSVG: function isSVG(e) {
        return t.SVGElement && e instanceof t.SVGElement;
      }, isEmptyObject: function isEmptyObject(e) {
        for (var t in e) {
          return !1;
        }return !0;
      } },
        y = !1;if (e.fn && e.fn.jquery ? (f = e, y = !0) : f = t.Velocity.Utilities, 8 >= d && !y) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (7 >= d) return void (jQuery.fn.velocity = jQuery.fn.animate);var h = 400,
        v = "swing",
        b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: t.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: r.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: f, Redirects: {}, Easings: {}, Promise: t.Promise, defaults: { queue: "", duration: h, easing: v, begin: a, complete: a, progress: a, display: a, visibility: a, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function init(e) {
        f.data(e, "velocity", { isSVG: m.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
      }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };t.pageYOffset !== a ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");var x = function () {
      function e(e) {
        return -e.tension * e.x - e.friction * e.v;
      }function t(t, r, a) {
        var n = { x: t.x + a.dx * r, v: t.v + a.dv * r, tension: t.tension, friction: t.friction };return { dx: n.v, dv: e(n) };
      }function r(r, a) {
        var n = { dx: r.v, dv: e(r) },
            o = t(r, .5 * a, n),
            i = t(r, .5 * a, o),
            s = t(r, a, i),
            l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
            u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);return r.x = r.x + l * a, r.v = r.v + u * a, r;
      }return function a(e, t, n) {
        var o,
            i,
            s,
            l = { x: -1, v: 0, tension: null, friction: null },
            u = [0],
            c = 0,
            p = 1e-4,
            f = .016;for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, l.tension = e, l.friction = t, o = null !== n, o ? (c = a(e, t), i = c / n * f) : i = f; s = r(s || l, i), u.push(1 + s.x), c += 16, Math.abs(s.x) > p && Math.abs(s.v) > p;) {}return o ? function (e) {
          return u[e * (u.length - 1) | 0];
        } : c;
      };
    }();b.Easings = { linear: function linear(e) {
        return e;
      }, swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      }, spring: function spring(e) {
        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
      } }, f.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
      b.Easings[t[0]] = l.apply(null, t[1]);
    });var S = b.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function register() {
          for (var e = 0; e < S.Lists.colors.length; e++) {
            var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t];
          }var r, a, n;if (d) for (r in S.Hooks.templates) {
            a = S.Hooks.templates[r], n = a[0].split(" ");var o = a[1].match(S.RegEx.valueSplit);"Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), S.Hooks.templates[r] = [n.join(" "), o.join(" ")]);
          }for (r in S.Hooks.templates) {
            a = S.Hooks.templates[r], n = a[0].split(" ");for (var e in n) {
              var i = r + n[e],
                  s = e;S.Hooks.registered[i] = [r, s];
            }
          }
        }, getRoot: function getRoot(e) {
          var t = S.Hooks.registered[e];return t ? t[0] : e;
        }, cleanRootPropertyValue: function cleanRootPropertyValue(e, t) {
          return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t;
        }, extractValue: function extractValue(e, t) {
          var r = S.Hooks.registered[e];if (r) {
            var a = r[0],
                n = r[1];return t = S.Hooks.cleanRootPropertyValue(a, t), t.toString().match(S.RegEx.valueSplit)[n];
          }return t;
        }, injectValue: function injectValue(e, t, r) {
          var a = S.Hooks.registered[e];if (a) {
            var n,
                o,
                i = a[0],
                s = a[1];return r = S.Hooks.cleanRootPropertyValue(i, r), n = r.toString().match(S.RegEx.valueSplit), n[s] = t, o = n.join(" ");
          }return r;
        } }, Normalizations: { registered: { clip: function clip(e, t, r) {
            switch (e) {case "name":
                return "clip";case "extract":
                var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(S.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;case "inject":
                return "rect(" + r + ")";}
          }, blur: function blur(e, t, r) {
            switch (e) {case "name":
                return b.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
                var a = parseFloat(r);if (!a && 0 !== a) {
                  var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a = n ? n[1] : 0;
                }return a;case "inject":
                return parseFloat(r) ? "blur(" + r + ")" : "none";}
          }, opacity: function opacity(e, t, r) {
            if (8 >= d) switch (e) {case "name":
                return "filter";case "extract":
                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);return r = a ? a[1] / 100 : 1;case "inject":
                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";} else switch (e) {case "name":
                return "opacity";case "extract":
                return r;case "inject":
                return r;}
          } }, register: function register() {
          9 >= d || b.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));for (var e = 0; e < S.Lists.transformsBase.length; e++) {
            !function () {
              var t = S.Lists.transformsBase[e];S.Normalizations.registered[t] = function (e, r, n) {
                switch (e) {case "name":
                    return "transform";case "extract":
                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");case "inject":
                    var o = !1;switch (t.substr(0, t.length - 1)) {case "translate":
                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case "scal":case "scale":
                        b.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);break;case "skew":
                        o = !/(deg|\d)$/i.test(n);break;case "rotate":
                        o = !/(deg|\d)$/i.test(n);}return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t];}
              };
            }();
          }for (var e = 0; e < S.Lists.colors.length; e++) {
            !function () {
              var t = S.Lists.colors[e];S.Normalizations.registered[t] = function (e, r, n) {
                switch (e) {case "name":
                    return t;case "extract":
                    var o;if (S.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;else {
                      var i,
                          s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : S.RegEx.isHex.test(n) ? i = "rgb(" + S.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                    }return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;case "inject":
                    return 8 >= d ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
              };
            }();
          }
        } }, Names: { camelCase: function camelCase(e) {
          return e.replace(/-(\w)/g, function (e, t) {
            return t.toUpperCase();
          });
        }, SVGAttribute: function SVGAttribute(e) {
          var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (d || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
        }, prefixCheck: function prefixCheck(e) {
          if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
            var n;if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
              return e.toUpperCase();
            }), m.isString(b.State.prefixElement.style[n])) return b.State.prefixMatches[e] = n, [n, !0];
          }return [e, !1];
        } }, Values: { hexToRgb: function hexToRgb(e) {
          var t,
              r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
              a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e = e.replace(r, function (e, t, r, a) {
            return t + t + r + r + a + a;
          }), t = a.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0];
        }, isCSSNullValue: function isCSSNullValue(e) {
          return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
        }, getUnitType: function getUnitType(e) {
          return (/^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
          );
        }, getDisplayType: function getDisplayType(e) {
          var t = e && e.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
          );
        }, addClass: function addClass(e, t) {
          e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
        }, removeClass: function removeClass(e, t) {
          e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
        } }, getPropertyValue: function getPropertyValue(e, r, n, o) {
        function s(e, r) {
          function n() {
            u && S.setPropertyValue(e, "display", "none");
          }var l = 0;if (8 >= d) l = f.css(e, r);else {
            var u = !1;if (/^(width|height)$/.test(r) && 0 === S.getPropertyValue(e, "display") && (u = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e))), !o) {
              if ("height" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var c = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);return n(), c;
              }if ("width" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                var p = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);return n(), p;
              }
            }var g;g = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === d && "filter" === r ? g.getPropertyValue(r) : g[r], ("" === l || null === l) && (l = e.style[r]), n();
          }if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
            var m = s(e, "position");("fixed" === m || "absolute" === m && /top|left/i.test(r)) && (l = f(e).position()[r] + "px");
          }return l;
        }var l;if (S.Hooks.registered[r]) {
          var u = r,
              c = S.Hooks.getRoot(u);n === a && (n = S.getPropertyValue(e, S.Names.prefixCheck(c)[0])), S.Normalizations.registered[c] && (n = S.Normalizations.registered[c]("extract", e, n)), l = S.Hooks.extractValue(u, n);
        } else if (S.Normalizations.registered[r]) {
          var p, g;p = S.Normalizations.registered[r]("name", e), "transform" !== p && (g = s(e, S.Names.prefixCheck(p)[0]), S.Values.isCSSNullValue(g) && S.Hooks.templates[r] && (g = S.Hooks.templates[r][1])), l = S.Normalizations.registered[r]("extract", e, g);
        }if (!/^[\d-]/.test(l)) if (i(e) && i(e).isSVG && S.Names.SVGAttribute(r)) {
          if (/^(height|width)$/i.test(r)) try {
            l = e.getBBox()[r];
          } catch (m) {
            l = 0;
          } else l = e.getAttribute(r);
        } else l = s(e, S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + r + ": " + l), l;
      }, setPropertyValue: function setPropertyValue(e, r, a, n, o) {
        var s = r;if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);else if (S.Normalizations.registered[r] && "transform" === S.Normalizations.registered[r]("name", e)) S.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];else {
          if (S.Hooks.registered[r]) {
            var l = r,
                u = S.Hooks.getRoot(r);n = n || S.getPropertyValue(e, u), a = S.Hooks.injectValue(l, a, n), r = u;
          }if (S.Normalizations.registered[r] && (a = S.Normalizations.registered[r]("inject", e, a), r = S.Normalizations.registered[r]("name", e)), s = S.Names.prefixCheck(r)[0], 8 >= d) try {
            e.style[s] = a;
          } catch (c) {
            b.debug && console.log("Browser does not support [" + a + "] for [" + s + "]");
          } else i(e) && i(e).isSVG && S.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;b.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a);
        }return [s, a];
      }, flushTransformCache: function flushTransformCache(e) {
        function t(t) {
          return parseFloat(S.getPropertyValue(e, t));
        }var r = "";if ((d || b.State.isAndroid && !b.State.isChrome) && i(e).isSVG) {
          var a = { translate: [t("translateX"), t("translateY")], skewX: [t("skewX")], skewY: [t("skewY")], scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")], rotate: [t("rotateZ"), 0, 0] };f.each(i(e).transformCache, function (e) {
            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e]);
          });
        } else {
          var n, o;f.each(i(e).transformCache, function (t) {
            return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void (r += t + n + " "));
          }), o && (r = "perspective" + o + " " + r);
        }S.setPropertyValue(e, "transform", r);
      } };S.Hooks.register(), S.Normalizations.register(), b.hook = function (e, t, r) {
      var n = a;return e = o(e), f.each(e, function (e, o) {
        if (i(o) === a && b.init(o), r === a) n === a && (n = b.CSS.getPropertyValue(o, t));else {
          var s = b.CSS.setPropertyValue(o, t, r);"transform" === s[0] && b.CSS.flushTransformCache(o), n = s;
        }
      }), n;
    };var P = function P() {
      function e() {
        return s ? k.promise || null : l;
      }function n() {
        function e(e) {
          function p(e, t) {
            var r = a,
                n = a,
                i = a;return m.isArray(e) ? (r = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || S.RegEx.isHex.test(e[1]) ? i = e[1] : (m.isString(e[1]) && !S.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), m.isFunction(r) && (r = r.call(o, V, w)), m.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i];
          }function d(e, t) {
            var r, a;return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
              return r = e, "";
            }), r || (r = S.Values.getUnitType(e)), [a, r];
          }function h() {
            var e = { myParent: o.parentNode || r.body, position: S.getPropertyValue(o, "position"), fontSize: S.getPropertyValue(o, "fontSize") },
                a = e.position === L.lastPosition && e.myParent === L.lastParent,
                n = e.fontSize === L.lastFontSize;L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;var s = 100,
                l = {};if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;else {
              var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                b.CSS.setPropertyValue(u, t, "hidden");
              }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                b.CSS.setPropertyValue(u, t, s + "%");
              }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(S.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u);
            }return null === L.remToPx && (L.remToPx = parseFloat(S.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l;
          }if (s.begin && 0 === V) try {
            s.begin.call(g, g);
          } catch (x) {
            setTimeout(function () {
              throw x;
            }, 1);
          }if ("scroll" === A) {
            var P,
                C,
                T,
                F = /^x$/i.test(s.axis) ? "Left" : "Top",
                j = parseFloat(s.offset) || 0;s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, P = s.container["scroll" + F], T = P + f(o).position()[F.toLowerCase()] + j) : s.container = null : (P = b.State.scrollAnchor[b.State["scrollProperty" + F]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === F ? "Top" : "Left")]], T = f(o).offset()[F.toLowerCase()] + j), l = { scroll: { rootPropertyValue: !1, startValue: P, currentValue: P, endValue: T, unitType: "", easing: s.easing, scrollData: { container: s.container, direction: F, alternateValue: C } }, element: o }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o);
          } else if ("reverse" === A) {
            if (!i(o).tweensContainer) return void f.dequeue(o, s.queue);"none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, v.easing || delete s.easing, v.duration || delete s.duration, s = f.extend({}, i(o).opts, s);var E = f.extend(!0, {}, i(o).tweensContainer);for (var H in E) {
              if ("element" !== H) {
                var N = E[H].startValue;E[H].startValue = E[H].currentValue = E[H].endValue, E[H].endValue = N, m.isEmptyObject(v) || (E[H].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(E[H]), o);
              }
            }l = E;
          } else if ("start" === A) {
            var E;i(o).tweensContainer && i(o).isAnimating === !0 && (E = i(o).tweensContainer), f.each(y, function (e, t) {
              if (RegExp("^" + S.Lists.colors.join("$|^") + "$").test(e)) {
                var r = p(t, !0),
                    n = r[0],
                    o = r[1],
                    i = r[2];if (S.RegEx.isHex.test(n)) {
                  for (var s = ["Red", "Green", "Blue"], l = S.Values.hexToRgb(n), u = i ? S.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
                    var f = [l[c]];o && f.push(o), u !== a && f.push(u[c]), y[e + s[c]] = f;
                  }delete y[e];
                }
              }
            });for (var z in y) {
              var O = p(y[z]),
                  q = O[0],
                  $ = O[1],
                  M = O[2];z = S.Names.camelCase(z);var I = S.Hooks.getRoot(z),
                  B = !1;if (i(o).isSVG || "tween" === I || S.Names.prefixCheck(I)[1] !== !1 || S.Normalizations.registered[I] !== a) {
                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(z) && !M && 0 !== q && (M = 0), s._cacheValues && E && E[z] ? (M === a && (M = E[z].endValue + E[z].unitType), B = i(o).rootPropertyValueCache[I]) : S.Hooks.registered[z] ? M === a ? (B = S.getPropertyValue(o, I), M = S.getPropertyValue(o, z, B)) : B = S.Hooks.templates[I][1] : M === a && (M = S.getPropertyValue(o, z));var W,
                    G,
                    Y,
                    D = !1;if (W = d(z, M), M = W[0], Y = W[1], W = d(z, q), q = W[0].replace(/^([+-\/*])=/, function (e, t) {
                  return D = t, "";
                }), G = W[1], M = parseFloat(M) || 0, q = parseFloat(q) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(z) ? (q /= 100, G = "em") : /^scale/.test(z) ? (q /= 100, G = "") : /(Red|Green|Blue)$/i.test(z) && (q = q / 100 * 255, G = "")), /[\/*]/.test(D)) G = Y;else if (Y !== G && 0 !== M) if (0 === q) G = Y;else {
                  n = n || h();var Q = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";switch (Y) {case "%":
                      M *= "x" === Q ? n.percentToPxWidth : n.percentToPxHeight;break;case "px":
                      break;default:
                      M *= n[Y + "ToPx"];}switch (G) {case "%":
                      M *= 1 / ("x" === Q ? n.percentToPxWidth : n.percentToPxHeight);break;case "px":
                      break;default:
                      M *= 1 / n[G + "ToPx"];}
                }switch (D) {case "+":
                    q = M + q;break;case "-":
                    q = M - q;break;case "*":
                    q = M * q;break;case "/":
                    q = M / q;}l[z] = { rootPropertyValue: B, startValue: M, currentValue: M, endValue: q, unitType: G, easing: $ }, b.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), o);
              } else b.debug && console.log("Skipping [" + I + "] due to a lack of browser support.");
            }l.element = o;
          }l.element && (S.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (b.State.calls.push([R, g, s, null, k.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : V++);
        }var n,
            o = this,
            s = f.extend({}, b.defaults, v),
            l = {};switch (i(o) === a && b.init(o), parseFloat(s.delay) && s.queue !== !1 && f.queue(o, s.queue, function (e) {
          b.velocityQueueEntryFlag = !0, i(o).delayTimer = { setTimeout: setTimeout(e, parseFloat(s.delay)), next: e };
        }), s.duration.toString().toLowerCase()) {case "fast":
            s.duration = 200;break;case "normal":
            s.duration = h;break;case "slow":
            s.duration = 600;break;default:
            s.duration = parseFloat(s.duration) || 1;}b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(o, s.queue, function (t, r) {
          return r === !0 ? (k.promise && k.resolver(g), !0) : (b.velocityQueueEntryFlag = !0, void e(t));
        }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o);
      }var s,
          l,
          d,
          g,
          y,
          v,
          x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));if (m.isWrapped(this) ? (s = !1, d = 0, g = this, l = this) : (s = !0, d = 1, g = x ? arguments[0].elements || arguments[0].e : arguments[0]), g = o(g)) {
        x ? (y = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (y = arguments[d], v = arguments[d + 1]);var w = g.length,
            V = 0;if (!/^(stop|finish)$/i.test(y) && !f.isPlainObject(v)) {
          var C = d + 1;v = {};for (var T = C; T < arguments.length; T++) {
            m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? v.easing = arguments[T] : m.isFunction(arguments[T]) && (v.complete = arguments[T]) : v.duration = arguments[T];
          }
        }var k = { promise: null, resolver: null, rejecter: null };s && b.Promise && (k.promise = new b.Promise(function (e, t) {
          k.resolver = e, k.rejecter = t;
        }));var A;switch (y) {case "scroll":
            A = "scroll";break;case "reverse":
            A = "reverse";break;case "finish":case "stop":
            f.each(g, function (e, t) {
              i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer);
            });var F = [];return f.each(b.State.calls, function (e, t) {
              t && f.each(t[1], function (r, n) {
                var o = v === a ? "" : v;return o === !0 || t[2].queue === o || v === a && t[2].queue === !1 ? void f.each(g, function (r, a) {
                  a === n && ((v === !0 || m.isString(v)) && (f.each(f.queue(a, m.isString(v) ? v : ""), function (e, t) {
                    m.isFunction(t) && t(null, !0);
                  }), f.queue(a, m.isString(v) ? v : "", [])), "stop" === y ? (i(a) && i(a).tweensContainer && o !== !1 && f.each(i(a).tweensContainer, function (e, t) {
                    t.endValue = t.currentValue;
                  }), F.push(e)) : "finish" === y && (t[2].duration = 1));
                }) : !0;
              });
            }), "stop" === y && (f.each(F, function (e, t) {
              p(t, !0);
            }), k.promise && k.resolver(g)), e();default:
            if (!f.isPlainObject(y) || m.isEmptyObject(y)) {
              if (m.isString(y) && b.Redirects[y]) {
                var j = f.extend({}, v),
                    E = j.duration,
                    H = j.delay || 0;return j.backwards === !0 && (g = f.extend(!0, [], g).reverse()), f.each(g, function (e, t) {
                  parseFloat(j.stagger) ? j.delay = H + parseFloat(j.stagger) * e : m.isFunction(j.stagger) && (j.delay = H + j.stagger.call(t, e, w)), j.drag && (j.duration = parseFloat(E) || (/^(callout|transition)/.test(y) ? 1e3 : h), j.duration = Math.max(j.duration * (j.backwards ? 1 - e / w : (e + 1) / w), .75 * j.duration, 200)), b.Redirects[y].call(t, t, j || {}, e, w, g, k.promise ? k : a);
                }), e();
              }var N = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise ? k.rejecter(new Error(N)) : console.log(N), e();
            }A = "start";}var L = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
            R = [];f.each(g, function (e, t) {
          m.isNode(t) && n.call(t);
        });var z,
            j = f.extend({}, b.defaults, v);if (j.loop = parseInt(j.loop), z = 2 * j.loop - 1, j.loop) for (var O = 0; z > O; O++) {
          var q = { delay: j.delay, progress: j.progress };O === z - 1 && (q.display = j.display, q.visibility = j.visibility, q.complete = j.complete), P(g, "reverse", q);
        }return e();
      }
    };b = f.extend(P, b), b.animate = P;var w = t.requestAnimationFrame || g;return b.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function () {
      r.hidden ? (w = function w(e) {
        return setTimeout(function () {
          e(!0);
        }, 16);
      }, c()) : w = t.requestAnimationFrame || g;
    }), e.Velocity = b, e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function (e, t) {
      b.Redirects["slide" + t] = function (e, r, n, o, i, s) {
        var l = f.extend({}, r),
            u = l.begin,
            c = l.complete,
            p = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
            d = {};l.display === a && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
          u && u.call(i, i);for (var r in p) {
            d[r] = e.style[r];var a = b.CSS.getPropertyValue(e, r);p[r] = "Down" === t ? [a, 0] : [0, a];
          }d.overflow = e.style.overflow, e.style.overflow = "hidden";
        }, l.complete = function () {
          for (var t in d) {
            e.style[t] = d[t];
          }c && c.call(i, i), s && s.resolver(i);
        }, b(e, p, l);
      };
    }), f.each(["In", "Out"], function (e, t) {
      b.Redirects["fade" + t] = function (e, r, n, o, i, s) {
        var l = f.extend({}, r),
            u = { opacity: "In" === t ? 1 : 0 },
            c = l.complete;l.complete = n !== o - 1 ? l.begin = null : function () {
          c && c.call(i, i), s && s.resolver(i);
        }, l.display === a && (l.display = "In" === t ? "auto" : "none"), b(this, u, l);
      };
    }), b;
  }(window.jQuery || window.Zepto || window, window, document);
}));
/**
 *
 * @author		Sean Delaney
 * @company		DelaneyMethod
 */

'use strict';

let DelaneyMethod;

const $ = this.jQuery.noConflict();

if (DelaneyMethod === undefined) {
	DelaneyMethod = {};
}

DelaneyMethod = {
	Page: {
		segments: [],
		init: function () {
			Materialize.fadeInImage('#intro');

			$('.modal').modal({
				dismissible: false
			});

			$('.parallax').parallax();

			$('.button-collapse').sideNav({
				menuWidth: 210,
				edge: 'right',
				closeOnClick: true,
				draggable: true
			});

			$('a, button').on('click', function () {
				if ($(this).data('scroll-to')) {
					const id = '#' + $(this).data('scroll-to');
					$('html, body').animate({
						scrollTop: ($(id).first().offset().top - 60)
					}, 500);
				}
			});
		}
	}
};

$(window).on('load', function () {
	DelaneyMethod.Page.init();
});

$(window).bind('orientationchange', function () {
	$('.button-collapse').sideNav('hide');
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5qcyIsImluaXRpYWwuanMiLCJnbG9iYWwuanMiLCJhbmltYXRpb24uanMiLCJ0cmFuc2l0aW9ucy5qcyIsInBhcmFsbGF4LmpzIiwiZm9ybXMuanMiLCJtb2RhbC5qcyIsInRvb2x0aXAuanMiLCJzaWRlTmF2LmpzIiwiaGFtbWVyLm1pbi5qcyIsImpxdWVyeS5oYW1tZXIuanMiLCJ2ZWxvY2l0eS5taW4uanMiLCJhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1bURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeHFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDak9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM2FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7dmFyIF90eXBlb2Y9dHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09PVwic3ltYm9sXCI/ZnVuY3Rpb24ob2JqKXtyZXR1cm4gdHlwZW9mIG9iajt9OmZ1bmN0aW9uKG9iail7cmV0dXJuIG9iaiYmdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmb2JqLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZvYmohPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIG9iajt9Oy8qIVxuICogalF1ZXJ5IEphdmFTY3JpcHQgTGlicmFyeSB2My4xLjFcbiAqIGh0dHBzOi8vanF1ZXJ5LmNvbS9cbiAqXG4gKiBJbmNsdWRlcyBTaXp6bGUuanNcbiAqIGh0dHBzOi8vc2l6emxlanMuY29tL1xuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogRGF0ZTogMjAxNi0wOS0yMlQyMjozMFpcbiAqLyhmdW5jdGlvbihnbG9iYWwsZmFjdG9yeSl7XCJ1c2Ugc3RyaWN0XCI7aWYoKHR5cGVvZiBtb2R1bGU9PT1cInVuZGVmaW5lZFwiP1widW5kZWZpbmVkXCI6X3R5cGVvZihtb2R1bGUpKT09PVwib2JqZWN0XCImJl90eXBlb2YobW9kdWxlLmV4cG9ydHMpPT09XCJvYmplY3RcIil7Ly8gRm9yIENvbW1vbkpTIGFuZCBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB3aGVyZSBhIHByb3BlciBgd2luZG93YFxuLy8gaXMgcHJlc2VudCwgZXhlY3V0ZSB0aGUgZmFjdG9yeSBhbmQgZ2V0IGpRdWVyeS5cbi8vIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3QgaGF2ZSBhIGB3aW5kb3dgIHdpdGggYSBgZG9jdW1lbnRgXG4vLyAoc3VjaCBhcyBOb2RlLmpzKSwgZXhwb3NlIGEgZmFjdG9yeSBhcyBtb2R1bGUuZXhwb3J0cy5cbi8vIFRoaXMgYWNjZW50dWF0ZXMgdGhlIG5lZWQgZm9yIHRoZSBjcmVhdGlvbiBvZiBhIHJlYWwgYHdpbmRvd2AuXG4vLyBlLmcuIHZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpKHdpbmRvdyk7XG4vLyBTZWUgdGlja2V0ICMxNDU0OSBmb3IgbW9yZSBpbmZvLlxubW9kdWxlLmV4cG9ydHM9Z2xvYmFsLmRvY3VtZW50P2ZhY3RvcnkoZ2xvYmFsLHRydWUpOmZ1bmN0aW9uKHcpe2lmKCF3LmRvY3VtZW50KXt0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO31yZXR1cm4gZmFjdG9yeSh3KTt9O31lbHNle2ZhY3RvcnkoZ2xvYmFsKTt9Ly8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcbn0pKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiP3dpbmRvdzp1bmRlZmluZWQsZnVuY3Rpb24od2luZG93LG5vR2xvYmFsKXsvLyBFZGdlIDw9IDEyIC0gMTMrLCBGaXJlZm94IDw9MTggLSA0NSssIElFIDEwIC0gMTEsIFNhZmFyaSA1LjEgLSA5KywgaU9TIDYgLSA5LjFcbi8vIHRocm93IGV4Y2VwdGlvbnMgd2hlbiBub24tc3RyaWN0IGNvZGUgKGUuZy4sIEFTUC5ORVQgNC41KSBhY2Nlc3NlcyBzdHJpY3QgbW9kZVxuLy8gYXJndW1lbnRzLmNhbGxlZS5jYWxsZXIgKHRyYWMtMTMzMzUpLiBCdXQgYXMgb2YgalF1ZXJ5IDMuMCAoMjAxNiksIHN0cmljdCBtb2RlIHNob3VsZCBiZSBjb21tb25cbi8vIGVub3VnaCB0aGF0IGFsbCBzdWNoIGF0dGVtcHRzIGFyZSBndWFyZGVkIGluIGEgdHJ5IGJsb2NrLlxuXCJ1c2Ugc3RyaWN0XCI7dmFyIGFycj1bXTt2YXIgZG9jdW1lbnQ9d2luZG93LmRvY3VtZW50O3ZhciBnZXRQcm90bz1PYmplY3QuZ2V0UHJvdG90eXBlT2Y7dmFyIF9zbGljZT1hcnIuc2xpY2U7dmFyIGNvbmNhdD1hcnIuY29uY2F0O3ZhciBwdXNoPWFyci5wdXNoO3ZhciBpbmRleE9mPWFyci5pbmRleE9mO3ZhciBjbGFzczJ0eXBlPXt9O3ZhciB0b1N0cmluZz1jbGFzczJ0eXBlLnRvU3RyaW5nO3ZhciBoYXNPd249Y2xhc3MydHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgZm5Ub1N0cmluZz1oYXNPd24udG9TdHJpbmc7dmFyIE9iamVjdEZ1bmN0aW9uU3RyaW5nPWZuVG9TdHJpbmcuY2FsbChPYmplY3QpO3ZhciBzdXBwb3J0PXt9O2Z1bmN0aW9uIERPTUV2YWwoY29kZSxkb2Mpe2RvYz1kb2N8fGRvY3VtZW50O3ZhciBzY3JpcHQ9ZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7c2NyaXB0LnRleHQ9Y29kZTtkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTt9LyogZ2xvYmFsIFN5bWJvbCAqLy8vIERlZmluaW5nIHRoaXMgZ2xvYmFsIGluIC5lc2xpbnRyYy5qc29uIHdvdWxkIGNyZWF0ZSBhIGRhbmdlciBvZiB1c2luZyB0aGUgZ2xvYmFsXG4vLyB1bmd1YXJkZWQgaW4gYW5vdGhlciBwbGFjZSwgaXQgc2VlbXMgc2FmZXIgdG8gZGVmaW5lIGdsb2JhbCBvbmx5IGZvciB0aGlzIG1vZHVsZVxudmFyIHZlcnNpb249XCIzLjEuMVwiLC8vIERlZmluZSBhIGxvY2FsIGNvcHkgb2YgalF1ZXJ5XG5qUXVlcnk9ZnVuY3Rpb24galF1ZXJ5KHNlbGVjdG9yLGNvbnRleHQpey8vIFRoZSBqUXVlcnkgb2JqZWN0IGlzIGFjdHVhbGx5IGp1c3QgdGhlIGluaXQgY29uc3RydWN0b3IgJ2VuaGFuY2VkJ1xuLy8gTmVlZCBpbml0IGlmIGpRdWVyeSBpcyBjYWxsZWQgKGp1c3QgYWxsb3cgZXJyb3IgdG8gYmUgdGhyb3duIGlmIG5vdCBpbmNsdWRlZClcbnJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoc2VsZWN0b3IsY29udGV4dCk7fSwvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHlcbi8vIE1ha2Ugc3VyZSB3ZSB0cmltIEJPTSBhbmQgTkJTUFxucnRyaW09L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLC8vIE1hdGNoZXMgZGFzaGVkIHN0cmluZyBmb3IgY2FtZWxpemluZ1xucm1zUHJlZml4PS9eLW1zLS8scmRhc2hBbHBoYT0vLShbYS16XSkvZywvLyBVc2VkIGJ5IGpRdWVyeS5jYW1lbENhc2UgYXMgY2FsbGJhY2sgdG8gcmVwbGFjZSgpXG5mY2FtZWxDYXNlPWZ1bmN0aW9uIGZjYW1lbENhc2UoYWxsLGxldHRlcil7cmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO307alF1ZXJ5LmZuPWpRdWVyeS5wcm90b3R5cGU9ey8vIFRoZSBjdXJyZW50IHZlcnNpb24gb2YgalF1ZXJ5IGJlaW5nIHVzZWRcbmpxdWVyeTp2ZXJzaW9uLGNvbnN0cnVjdG9yOmpRdWVyeSwvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcbmxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24gdG9BcnJheSgpe3JldHVybiBfc2xpY2UuY2FsbCh0aGlzKTt9LC8vIEdldCB0aGUgTnRoIGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgZWxlbWVudCBzZXQgT1Jcbi8vIEdldCB0aGUgd2hvbGUgbWF0Y2hlZCBlbGVtZW50IHNldCBhcyBhIGNsZWFuIGFycmF5XG5nZXQ6ZnVuY3Rpb24gZ2V0KG51bSl7Ly8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgaW4gYSBjbGVhbiBhcnJheVxuaWYobnVtPT1udWxsKXtyZXR1cm4gX3NsaWNlLmNhbGwodGhpcyk7fS8vIFJldHVybiBqdXN0IHRoZSBvbmUgZWxlbWVudCBmcm9tIHRoZSBzZXRcbnJldHVybiBudW08MD90aGlzW251bSt0aGlzLmxlbmd0aF06dGhpc1tudW1dO30sLy8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBhbmQgcHVzaCBpdCBvbnRvIHRoZSBzdGFja1xuLy8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG5wdXNoU3RhY2s6ZnVuY3Rpb24gcHVzaFN0YWNrKGVsZW1zKXsvLyBCdWlsZCBhIG5ldyBqUXVlcnkgbWF0Y2hlZCBlbGVtZW50IHNldFxudmFyIHJldD1qUXVlcnkubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGVsZW1zKTsvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxucmV0LnByZXZPYmplY3Q9dGhpczsvLyBSZXR1cm4gdGhlIG5ld2x5LWZvcm1lZCBlbGVtZW50IHNldFxucmV0dXJuIHJldDt9LC8vIEV4ZWN1dGUgYSBjYWxsYmFjayBmb3IgZXZlcnkgZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBzZXQuXG5lYWNoOmZ1bmN0aW9uIGVhY2goY2FsbGJhY2spe3JldHVybiBqUXVlcnkuZWFjaCh0aGlzLGNhbGxiYWNrKTt9LG1hcDpmdW5jdGlvbiBtYXAoY2FsbGJhY2spe3JldHVybiB0aGlzLnB1c2hTdGFjayhqUXVlcnkubWFwKHRoaXMsZnVuY3Rpb24oZWxlbSxpKXtyZXR1cm4gY2FsbGJhY2suY2FsbChlbGVtLGksZWxlbSk7fSkpO30sc2xpY2U6ZnVuY3Rpb24gc2xpY2UoKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soX3NsaWNlLmFwcGx5KHRoaXMsYXJndW1lbnRzKSk7fSxmaXJzdDpmdW5jdGlvbiBmaXJzdCgpe3JldHVybiB0aGlzLmVxKDApO30sbGFzdDpmdW5jdGlvbiBsYXN0KCl7cmV0dXJuIHRoaXMuZXEoLTEpO30sZXE6ZnVuY3Rpb24gZXEoaSl7dmFyIGxlbj10aGlzLmxlbmd0aCxqPStpKyhpPDA/bGVuOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhqPj0wJiZqPGxlbj9bdGhpc1tqXV06W10pO30sZW5kOmZ1bmN0aW9uIGVuZCgpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKTt9LC8vIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cbi8vIEJlaGF2ZXMgbGlrZSBhbiBBcnJheSdzIG1ldGhvZCwgbm90IGxpa2UgYSBqUXVlcnkgbWV0aG9kLlxucHVzaDpwdXNoLHNvcnQ6YXJyLnNvcnQsc3BsaWNlOmFyci5zcGxpY2V9O2pRdWVyeS5leHRlbmQ9alF1ZXJ5LmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBvcHRpb25zLG5hbWUsc3JjLGNvcHksY29weUlzQXJyYXksY2xvbmUsdGFyZ2V0PWFyZ3VtZW50c1swXXx8e30saT0xLGxlbmd0aD1hcmd1bWVudHMubGVuZ3RoLGRlZXA9ZmFsc2U7Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuaWYodHlwZW9mIHRhcmdldD09PVwiYm9vbGVhblwiKXtkZWVwPXRhcmdldDsvLyBTa2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG50YXJnZXQ9YXJndW1lbnRzW2ldfHx7fTtpKys7fS8vIEhhbmRsZSBjYXNlIHdoZW4gdGFyZ2V0IGlzIGEgc3RyaW5nIG9yIHNvbWV0aGluZyAocG9zc2libGUgaW4gZGVlcCBjb3B5KVxuaWYoKHR5cGVvZiB0YXJnZXQ9PT1cInVuZGVmaW5lZFwiP1widW5kZWZpbmVkXCI6X3R5cGVvZih0YXJnZXQpKSE9PVwib2JqZWN0XCImJiFqUXVlcnkuaXNGdW5jdGlvbih0YXJnZXQpKXt0YXJnZXQ9e307fS8vIEV4dGVuZCBqUXVlcnkgaXRzZWxmIGlmIG9ubHkgb25lIGFyZ3VtZW50IGlzIHBhc3NlZFxuaWYoaT09PWxlbmd0aCl7dGFyZ2V0PXRoaXM7aS0tO31mb3IoO2k8bGVuZ3RoO2krKyl7Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuaWYoKG9wdGlvbnM9YXJndW1lbnRzW2ldKSE9bnVsbCl7Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuZm9yKG5hbWUgaW4gb3B0aW9ucyl7c3JjPXRhcmdldFtuYW1lXTtjb3B5PW9wdGlvbnNbbmFtZV07Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuaWYodGFyZ2V0PT09Y29weSl7Y29udGludWU7fS8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuaWYoZGVlcCYmY29weSYmKGpRdWVyeS5pc1BsYWluT2JqZWN0KGNvcHkpfHwoY29weUlzQXJyYXk9alF1ZXJ5LmlzQXJyYXkoY29weSkpKSl7aWYoY29weUlzQXJyYXkpe2NvcHlJc0FycmF5PWZhbHNlO2Nsb25lPXNyYyYmalF1ZXJ5LmlzQXJyYXkoc3JjKT9zcmM6W107fWVsc2V7Y2xvbmU9c3JjJiZqUXVlcnkuaXNQbGFpbk9iamVjdChzcmMpP3NyYzp7fTt9Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG50YXJnZXRbbmFtZV09alF1ZXJ5LmV4dGVuZChkZWVwLGNsb25lLGNvcHkpOy8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcbn1lbHNlIGlmKGNvcHkhPT11bmRlZmluZWQpe3RhcmdldFtuYW1lXT1jb3B5O319fX0vLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxucmV0dXJuIHRhcmdldDt9O2pRdWVyeS5leHRlbmQoey8vIFVuaXF1ZSBmb3IgZWFjaCBjb3B5IG9mIGpRdWVyeSBvbiB0aGUgcGFnZVxuZXhwYW5kbzpcImpRdWVyeVwiKyh2ZXJzaW9uK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLC8vIEFzc3VtZSBqUXVlcnkgaXMgcmVhZHkgd2l0aG91dCB0aGUgcmVhZHkgbW9kdWxlXG5pc1JlYWR5OnRydWUsZXJyb3I6ZnVuY3Rpb24gZXJyb3IobXNnKXt0aHJvdyBuZXcgRXJyb3IobXNnKTt9LG5vb3A6ZnVuY3Rpb24gbm9vcCgpe30saXNGdW5jdGlvbjpmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iail7cmV0dXJuIGpRdWVyeS50eXBlKG9iaik9PT1cImZ1bmN0aW9uXCI7fSxpc0FycmF5OkFycmF5LmlzQXJyYXksaXNXaW5kb3c6ZnVuY3Rpb24gaXNXaW5kb3cob2JqKXtyZXR1cm4gb2JqIT1udWxsJiZvYmo9PT1vYmoud2luZG93O30saXNOdW1lcmljOmZ1bmN0aW9uIGlzTnVtZXJpYyhvYmopey8vIEFzIG9mIGpRdWVyeSAzLjAsIGlzTnVtZXJpYyBpcyBsaW1pdGVkIHRvXG4vLyBzdHJpbmdzIGFuZCBudW1iZXJzIChwcmltaXRpdmVzIG9yIG9iamVjdHMpXG4vLyB0aGF0IGNhbiBiZSBjb2VyY2VkIHRvIGZpbml0ZSBudW1iZXJzIChnaC0yNjYyKVxudmFyIHR5cGU9alF1ZXJ5LnR5cGUob2JqKTtyZXR1cm4odHlwZT09PVwibnVtYmVyXCJ8fHR5cGU9PT1cInN0cmluZ1wiKSYmLy8gcGFyc2VGbG9hdCBOYU5zIG51bWVyaWMtY2FzdCBmYWxzZSBwb3NpdGl2ZXMgKFwiXCIpXG4vLyAuLi5idXQgbWlzaW50ZXJwcmV0cyBsZWFkaW5nLW51bWJlciBzdHJpbmdzLCBwYXJ0aWN1bGFybHkgaGV4IGxpdGVyYWxzIChcIjB4Li4uXCIpXG4vLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cbiFpc05hTihvYmotcGFyc2VGbG9hdChvYmopKTt9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmope3ZhciBwcm90byxDdG9yOy8vIERldGVjdCBvYnZpb3VzIG5lZ2F0aXZlc1xuLy8gVXNlIHRvU3RyaW5nIGluc3RlYWQgb2YgalF1ZXJ5LnR5cGUgdG8gY2F0Y2ggaG9zdCBvYmplY3RzXG5pZighb2JqfHx0b1N0cmluZy5jYWxsKG9iaikhPT1cIltvYmplY3QgT2JqZWN0XVwiKXtyZXR1cm4gZmFsc2U7fXByb3RvPWdldFByb3RvKG9iaik7Ly8gT2JqZWN0cyB3aXRoIG5vIHByb3RvdHlwZSAoZS5nLiwgYE9iamVjdC5jcmVhdGUoIG51bGwgKWApIGFyZSBwbGFpblxuaWYoIXByb3RvKXtyZXR1cm4gdHJ1ZTt9Ly8gT2JqZWN0cyB3aXRoIHByb3RvdHlwZSBhcmUgcGxhaW4gaWZmIHRoZXkgd2VyZSBjb25zdHJ1Y3RlZCBieSBhIGdsb2JhbCBPYmplY3QgZnVuY3Rpb25cbkN0b3I9aGFzT3duLmNhbGwocHJvdG8sXCJjb25zdHJ1Y3RvclwiKSYmcHJvdG8uY29uc3RydWN0b3I7cmV0dXJuIHR5cGVvZiBDdG9yPT09XCJmdW5jdGlvblwiJiZmblRvU3RyaW5nLmNhbGwoQ3Rvcik9PT1PYmplY3RGdW5jdGlvblN0cmluZzt9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24gaXNFbXB0eU9iamVjdChvYmopey8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy82MTI1XG52YXIgbmFtZTtmb3IobmFtZSBpbiBvYmope3JldHVybiBmYWxzZTt9cmV0dXJuIHRydWU7fSx0eXBlOmZ1bmN0aW9uIHR5cGUob2JqKXtpZihvYmo9PW51bGwpe3JldHVybiBvYmorXCJcIjt9Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTIuMyBvbmx5IChmdW5jdGlvbmlzaCBSZWdFeHApXG5yZXR1cm4odHlwZW9mIG9iaj09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKG9iaikpPT09XCJvYmplY3RcInx8dHlwZW9mIG9iaj09PVwiZnVuY3Rpb25cIj9jbGFzczJ0eXBlW3RvU3RyaW5nLmNhbGwob2JqKV18fFwib2JqZWN0XCI6dHlwZW9mIG9iaj09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKG9iaik7fSwvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBnbG9iYWwgY29udGV4dFxuZ2xvYmFsRXZhbDpmdW5jdGlvbiBnbG9iYWxFdmFsKGNvZGUpe0RPTUV2YWwoY29kZSk7fSwvLyBDb252ZXJ0IGRhc2hlZCB0byBjYW1lbENhc2U7IHVzZWQgYnkgdGhlIGNzcyBhbmQgZGF0YSBtb2R1bGVzXG4vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDEzXG4vLyBNaWNyb3NvZnQgZm9yZ290IHRvIGh1bXAgdGhlaXIgdmVuZG9yIHByZWZpeCAoIzk1NzIpXG5jYW1lbENhc2U6ZnVuY3Rpb24gY2FtZWxDYXNlKHN0cmluZyl7cmV0dXJuIHN0cmluZy5yZXBsYWNlKHJtc1ByZWZpeCxcIm1zLVwiKS5yZXBsYWNlKHJkYXNoQWxwaGEsZmNhbWVsQ2FzZSk7fSxub2RlTmFtZTpmdW5jdGlvbiBub2RlTmFtZShlbGVtLG5hbWUpe3JldHVybiBlbGVtLm5vZGVOYW1lJiZlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1uYW1lLnRvTG93ZXJDYXNlKCk7fSxlYWNoOmZ1bmN0aW9uIGVhY2gob2JqLGNhbGxiYWNrKXt2YXIgbGVuZ3RoLGk9MDtpZihpc0FycmF5TGlrZShvYmopKXtsZW5ndGg9b2JqLmxlbmd0aDtmb3IoO2k8bGVuZ3RoO2krKyl7aWYoY2FsbGJhY2suY2FsbChvYmpbaV0saSxvYmpbaV0pPT09ZmFsc2Upe2JyZWFrO319fWVsc2V7Zm9yKGkgaW4gb2JqKXtpZihjYWxsYmFjay5jYWxsKG9ialtpXSxpLG9ialtpXSk9PT1mYWxzZSl7YnJlYWs7fX19cmV0dXJuIG9iajt9LC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxudHJpbTpmdW5jdGlvbiB0cmltKHRleHQpe3JldHVybiB0ZXh0PT1udWxsP1wiXCI6KHRleHQrXCJcIikucmVwbGFjZShydHJpbSxcIlwiKTt9LC8vIHJlc3VsdHMgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcbm1ha2VBcnJheTpmdW5jdGlvbiBtYWtlQXJyYXkoYXJyLHJlc3VsdHMpe3ZhciByZXQ9cmVzdWx0c3x8W107aWYoYXJyIT1udWxsKXtpZihpc0FycmF5TGlrZShPYmplY3QoYXJyKSkpe2pRdWVyeS5tZXJnZShyZXQsdHlwZW9mIGFycj09PVwic3RyaW5nXCI/W2Fycl06YXJyKTt9ZWxzZXtwdXNoLmNhbGwocmV0LGFycik7fX1yZXR1cm4gcmV0O30saW5BcnJheTpmdW5jdGlvbiBpbkFycmF5KGVsZW0sYXJyLGkpe3JldHVybiBhcnI9PW51bGw/LTE6aW5kZXhPZi5jYWxsKGFycixlbGVtLGkpO30sLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG4vLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5tZXJnZTpmdW5jdGlvbiBtZXJnZShmaXJzdCxzZWNvbmQpe3ZhciBsZW49K3NlY29uZC5sZW5ndGgsaj0wLGk9Zmlyc3QubGVuZ3RoO2Zvcig7ajxsZW47aisrKXtmaXJzdFtpKytdPXNlY29uZFtqXTt9Zmlyc3QubGVuZ3RoPWk7cmV0dXJuIGZpcnN0O30sZ3JlcDpmdW5jdGlvbiBncmVwKGVsZW1zLGNhbGxiYWNrLGludmVydCl7dmFyIGNhbGxiYWNrSW52ZXJzZSxtYXRjaGVzPVtdLGk9MCxsZW5ndGg9ZWxlbXMubGVuZ3RoLGNhbGxiYWNrRXhwZWN0PSFpbnZlcnQ7Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIG9ubHkgc2F2aW5nIHRoZSBpdGVtc1xuLy8gdGhhdCBwYXNzIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb25cbmZvcig7aTxsZW5ndGg7aSsrKXtjYWxsYmFja0ludmVyc2U9IWNhbGxiYWNrKGVsZW1zW2ldLGkpO2lmKGNhbGxiYWNrSW52ZXJzZSE9PWNhbGxiYWNrRXhwZWN0KXttYXRjaGVzLnB1c2goZWxlbXNbaV0pO319cmV0dXJuIG1hdGNoZXM7fSwvLyBhcmcgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcbm1hcDpmdW5jdGlvbiBtYXAoZWxlbXMsY2FsbGJhY2ssYXJnKXt2YXIgbGVuZ3RoLHZhbHVlLGk9MCxyZXQ9W107Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIHRyYW5zbGF0aW5nIGVhY2ggb2YgdGhlIGl0ZW1zIHRvIHRoZWlyIG5ldyB2YWx1ZXNcbmlmKGlzQXJyYXlMaWtlKGVsZW1zKSl7bGVuZ3RoPWVsZW1zLmxlbmd0aDtmb3IoO2k8bGVuZ3RoO2krKyl7dmFsdWU9Y2FsbGJhY2soZWxlbXNbaV0saSxhcmcpO2lmKHZhbHVlIT1udWxsKXtyZXQucHVzaCh2YWx1ZSk7fX0vLyBHbyB0aHJvdWdoIGV2ZXJ5IGtleSBvbiB0aGUgb2JqZWN0LFxufWVsc2V7Zm9yKGkgaW4gZWxlbXMpe3ZhbHVlPWNhbGxiYWNrKGVsZW1zW2ldLGksYXJnKTtpZih2YWx1ZSE9bnVsbCl7cmV0LnB1c2godmFsdWUpO319fS8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcbnJldHVybiBjb25jYXQuYXBwbHkoW10scmV0KTt9LC8vIEEgZ2xvYmFsIEdVSUQgY291bnRlciBmb3Igb2JqZWN0c1xuZ3VpZDoxLC8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQsIG9wdGlvbmFsbHkgcGFydGlhbGx5IGFwcGx5aW5nIGFueVxuLy8gYXJndW1lbnRzLlxucHJveHk6ZnVuY3Rpb24gcHJveHkoZm4sY29udGV4dCl7dmFyIHRtcCxhcmdzLHByb3h5O2lmKHR5cGVvZiBjb250ZXh0PT09XCJzdHJpbmdcIil7dG1wPWZuW2NvbnRleHRdO2NvbnRleHQ9Zm47Zm49dG1wO30vLyBRdWljayBjaGVjayB0byBkZXRlcm1pbmUgaWYgdGFyZ2V0IGlzIGNhbGxhYmxlLCBpbiB0aGUgc3BlY1xuLy8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cbmlmKCFqUXVlcnkuaXNGdW5jdGlvbihmbikpe3JldHVybiB1bmRlZmluZWQ7fS8vIFNpbXVsYXRlZCBiaW5kXG5hcmdzPV9zbGljZS5jYWxsKGFyZ3VtZW50cywyKTtwcm94eT1mdW5jdGlvbiBwcm94eSgpe3JldHVybiBmbi5hcHBseShjb250ZXh0fHx0aGlzLGFyZ3MuY29uY2F0KF9zbGljZS5jYWxsKGFyZ3VtZW50cykpKTt9Oy8vIFNldCB0aGUgZ3VpZCBvZiB1bmlxdWUgaGFuZGxlciB0byB0aGUgc2FtZSBvZiBvcmlnaW5hbCBoYW5kbGVyLCBzbyBpdCBjYW4gYmUgcmVtb3ZlZFxucHJveHkuZ3VpZD1mbi5ndWlkPWZuLmd1aWR8fGpRdWVyeS5ndWlkKys7cmV0dXJuIHByb3h5O30sbm93OkRhdGUubm93LC8vIGpRdWVyeS5zdXBwb3J0IGlzIG5vdCB1c2VkIGluIENvcmUgYnV0IG90aGVyIHByb2plY3RzIGF0dGFjaCB0aGVpclxuLy8gcHJvcGVydGllcyB0byBpdCBzbyBpdCBuZWVkcyB0byBleGlzdC5cbnN1cHBvcnQ6c3VwcG9ydH0pO2lmKHR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCIpe2pRdWVyeS5mbltTeW1ib2wuaXRlcmF0b3JdPWFycltTeW1ib2wuaXRlcmF0b3JdO30vLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcbmpRdWVyeS5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oaSxuYW1lKXtjbGFzczJ0eXBlW1wiW29iamVjdCBcIituYW1lK1wiXVwiXT1uYW1lLnRvTG93ZXJDYXNlKCk7fSk7ZnVuY3Rpb24gaXNBcnJheUxpa2Uob2JqKXsvLyBTdXBwb3J0OiByZWFsIGlPUyA4LjIgb25seSAobm90IHJlcHJvZHVjaWJsZSBpbiBzaW11bGF0b3IpXG4vLyBgaW5gIGNoZWNrIHVzZWQgdG8gcHJldmVudCBKSVQgZXJyb3IgKGdoLTIxNDUpXG4vLyBoYXNPd24gaXNuJ3QgdXNlZCBoZXJlIGR1ZSB0byBmYWxzZSBuZWdhdGl2ZXNcbi8vIHJlZ2FyZGluZyBOb2RlbGlzdCBsZW5ndGggaW4gSUVcbnZhciBsZW5ndGg9ISFvYmomJlwibGVuZ3RoXCJpbiBvYmomJm9iai5sZW5ndGgsdHlwZT1qUXVlcnkudHlwZShvYmopO2lmKHR5cGU9PT1cImZ1bmN0aW9uXCJ8fGpRdWVyeS5pc1dpbmRvdyhvYmopKXtyZXR1cm4gZmFsc2U7fXJldHVybiB0eXBlPT09XCJhcnJheVwifHxsZW5ndGg9PT0wfHx0eXBlb2YgbGVuZ3RoPT09XCJudW1iZXJcIiYmbGVuZ3RoPjAmJmxlbmd0aC0xIGluIG9iajt9dmFyIFNpenpsZT0vKiFcbiAqIFNpenpsZSBDU1MgU2VsZWN0b3IgRW5naW5lIHYyLjMuM1xuICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTYtMDgtMDhcbiAqL2Z1bmN0aW9uKHdpbmRvdyl7dmFyIGksc3VwcG9ydCxFeHByLGdldFRleHQsaXNYTUwsdG9rZW5pemUsY29tcGlsZSxzZWxlY3Qsb3V0ZXJtb3N0Q29udGV4dCxzb3J0SW5wdXQsaGFzRHVwbGljYXRlLC8vIExvY2FsIGRvY3VtZW50IHZhcnNcbnNldERvY3VtZW50LGRvY3VtZW50LGRvY0VsZW0sZG9jdW1lbnRJc0hUTUwscmJ1Z2d5UVNBLHJidWdneU1hdGNoZXMsbWF0Y2hlcyxjb250YWlucywvLyBJbnN0YW5jZS1zcGVjaWZpYyBkYXRhXG5leHBhbmRvPVwic2l6emxlXCIrMSpuZXcgRGF0ZSgpLHByZWZlcnJlZERvYz13aW5kb3cuZG9jdW1lbnQsZGlycnVucz0wLGRvbmU9MCxjbGFzc0NhY2hlPWNyZWF0ZUNhY2hlKCksdG9rZW5DYWNoZT1jcmVhdGVDYWNoZSgpLGNvbXBpbGVyQ2FjaGU9Y3JlYXRlQ2FjaGUoKSxzb3J0T3JkZXI9ZnVuY3Rpb24gc29ydE9yZGVyKGEsYil7aWYoYT09PWIpe2hhc0R1cGxpY2F0ZT10cnVlO31yZXR1cm4gMDt9LC8vIEluc3RhbmNlIG1ldGhvZHNcbmhhc093bj17fS5oYXNPd25Qcm9wZXJ0eSxhcnI9W10scG9wPWFyci5wb3AscHVzaF9uYXRpdmU9YXJyLnB1c2gscHVzaD1hcnIucHVzaCxzbGljZT1hcnIuc2xpY2UsLy8gVXNlIGEgc3RyaXBwZWQtZG93biBpbmRleE9mIGFzIGl0J3MgZmFzdGVyIHRoYW4gbmF0aXZlXG4vLyBodHRwczovL2pzcGVyZi5jb20vdGhvci1pbmRleG9mLXZzLWZvci81XG5pbmRleE9mPWZ1bmN0aW9uIGluZGV4T2YobGlzdCxlbGVtKXt2YXIgaT0wLGxlbj1saXN0Lmxlbmd0aDtmb3IoO2k8bGVuO2krKyl7aWYobGlzdFtpXT09PWVsZW0pe3JldHVybiBpO319cmV0dXJuLTE7fSxib29sZWFucz1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsLy8gUmVndWxhciBleHByZXNzaW9uc1xuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zZWxlY3RvcnMvI3doaXRlc3BhY2VcbndoaXRlc3BhY2U9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCN2YWx1ZS1kZWYtaWRlbnRpZmllclxuaWRlbnRpZmllcj1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsLy8gQXR0cmlidXRlIHNlbGVjdG9yczogaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXG5hdHRyaWJ1dGVzPVwiXFxcXFtcIit3aGl0ZXNwYWNlK1wiKihcIitpZGVudGlmaWVyK1wiKSg/OlwiK3doaXRlc3BhY2UrLy8gT3BlcmF0b3IgKGNhcHR1cmUgMilcblwiKihbKl4kfCF+XT89KVwiK3doaXRlc3BhY2UrLy8gXCJBdHRyaWJ1dGUgdmFsdWVzIG11c3QgYmUgQ1NTIGlkZW50aWZpZXJzIFtjYXB0dXJlIDVdIG9yIHN0cmluZ3MgW2NhcHR1cmUgMyBvciBjYXB0dXJlIDRdXCJcblwiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIraWRlbnRpZmllcitcIikpfClcIit3aGl0ZXNwYWNlK1wiKlxcXFxdXCIscHNldWRvcz1cIjooXCIraWRlbnRpZmllcitcIikoPzpcXFxcKChcIisvLyBUbyByZWR1Y2UgdGhlIG51bWJlciBvZiBzZWxlY3RvcnMgbmVlZGluZyB0b2tlbml6ZSBpbiB0aGUgcHJlRmlsdGVyLCBwcmVmZXIgYXJndW1lbnRzOlxuLy8gMS4gcXVvdGVkIChjYXB0dXJlIDM7IGNhcHR1cmUgNCBvciBjYXB0dXJlIDUpXG5cIignKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfFwiKy8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxuXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIrYXR0cmlidXRlcytcIikqKXxcIisvLyAzLiBhbnl0aGluZyBlbHNlIChjYXB0dXJlIDIpXG5cIi4qXCIrXCIpXFxcXCl8KVwiLC8vIExlYWRpbmcgYW5kIG5vbi1lc2NhcGVkIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGNhcHR1cmluZyBzb21lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgcHJlY2VkaW5nIHRoZSBsYXR0ZXJcbnJ3aGl0ZXNwYWNlPW5ldyBSZWdFeHAod2hpdGVzcGFjZStcIitcIixcImdcIikscnRyaW09bmV3IFJlZ0V4cChcIl5cIit3aGl0ZXNwYWNlK1wiK3woKD86XnxbXlxcXFxcXFxcXSkoPzpcXFxcXFxcXC4pKilcIit3aGl0ZXNwYWNlK1wiKyRcIixcImdcIikscmNvbW1hPW5ldyBSZWdFeHAoXCJeXCIrd2hpdGVzcGFjZStcIiosXCIrd2hpdGVzcGFjZStcIipcIikscmNvbWJpbmF0b3JzPW5ldyBSZWdFeHAoXCJeXCIrd2hpdGVzcGFjZStcIiooWz4rfl18XCIrd2hpdGVzcGFjZStcIilcIit3aGl0ZXNwYWNlK1wiKlwiKSxyYXR0cmlidXRlUXVvdGVzPW5ldyBSZWdFeHAoXCI9XCIrd2hpdGVzcGFjZStcIiooW15cXFxcXSdcXFwiXSo/KVwiK3doaXRlc3BhY2UrXCIqXFxcXF1cIixcImdcIikscnBzZXVkbz1uZXcgUmVnRXhwKHBzZXVkb3MpLHJpZGVudGlmaWVyPW5ldyBSZWdFeHAoXCJeXCIraWRlbnRpZmllcitcIiRcIiksbWF0Y2hFeHByPXtcIklEXCI6bmV3IFJlZ0V4cChcIl4jKFwiK2lkZW50aWZpZXIrXCIpXCIpLFwiQ0xBU1NcIjpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK2lkZW50aWZpZXIrXCIpXCIpLFwiVEFHXCI6bmV3IFJlZ0V4cChcIl4oXCIraWRlbnRpZmllcitcInxbKl0pXCIpLFwiQVRUUlwiOm5ldyBSZWdFeHAoXCJeXCIrYXR0cmlidXRlcyksXCJQU0VVRE9cIjpuZXcgUmVnRXhwKFwiXlwiK3BzZXVkb3MpLFwiQ0hJTERcIjpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIit3aGl0ZXNwYWNlK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrd2hpdGVzcGFjZStcIiooPzooWystXXwpXCIrd2hpdGVzcGFjZStcIiooXFxcXGQrKXwpKVwiK3doaXRlc3BhY2UrXCIqXFxcXCl8KVwiLFwiaVwiKSxcImJvb2xcIjpuZXcgUmVnRXhwKFwiXig/OlwiK2Jvb2xlYW5zK1wiKSRcIixcImlcIiksLy8gRm9yIHVzZSBpbiBsaWJyYXJpZXMgaW1wbGVtZW50aW5nIC5pcygpXG4vLyBXZSB1c2UgdGhpcyBmb3IgUE9TIG1hdGNoaW5nIGluIGBzZWxlY3RgXG5cIm5lZWRzQ29udGV4dFwiOm5ldyBSZWdFeHAoXCJeXCIrd2hpdGVzcGFjZStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrd2hpdGVzcGFjZStcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrd2hpdGVzcGFjZStcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0scmlucHV0cz0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLHJoZWFkZXI9L15oXFxkJC9pLHJuYXRpdmU9L15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LywvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcbnJxdWlja0V4cHI9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8scnNpYmxpbmc9L1srfl0vLC8vIENTUyBlc2NhcGVzXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjZXNjYXBlZC1jaGFyYWN0ZXJzXG5ydW5lc2NhcGU9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK3doaXRlc3BhY2UrXCI/fChcIit3aGl0ZXNwYWNlK1wiKXwuKVwiLFwiaWdcIiksZnVuZXNjYXBlPWZ1bmN0aW9uIGZ1bmVzY2FwZShfLGVzY2FwZWQsZXNjYXBlZFdoaXRlc3BhY2Upe3ZhciBoaWdoPVwiMHhcIitlc2NhcGVkLTB4MTAwMDA7Ly8gTmFOIG1lYW5zIG5vbi1jb2RlcG9pbnRcbi8vIFN1cHBvcnQ6IEZpcmVmb3g8MjRcbi8vIFdvcmthcm91bmQgZXJyb25lb3VzIG51bWVyaWMgaW50ZXJwcmV0YXRpb24gb2YgK1wiMHhcIlxucmV0dXJuIGhpZ2ghPT1oaWdofHxlc2NhcGVkV2hpdGVzcGFjZT9lc2NhcGVkOmhpZ2g8MD8vLyBCTVAgY29kZXBvaW50XG5TdHJpbmcuZnJvbUNoYXJDb2RlKGhpZ2grMHgxMDAwMCk6Ly8gU3VwcGxlbWVudGFsIFBsYW5lIGNvZGVwb2ludCAoc3Vycm9nYXRlIHBhaXIpXG5TdHJpbmcuZnJvbUNoYXJDb2RlKGhpZ2g+PjEwfDB4RDgwMCxoaWdoJjB4M0ZGfDB4REMwMCk7fSwvLyBDU1Mgc3RyaW5nL2lkZW50aWZpZXIgc2VyaWFsaXphdGlvblxuLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNjb21tb24tc2VyaWFsaXppbmctaWRpb21zXG5yY3NzZXNjYXBlPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGZjc3Nlc2NhcGU9ZnVuY3Rpb24gZmNzc2VzY2FwZShjaCxhc0NvZGVQb2ludCl7aWYoYXNDb2RlUG9pbnQpey8vIFUrMDAwMCBOVUxMIGJlY29tZXMgVStGRkZEIFJFUExBQ0VNRU5UIENIQVJBQ1RFUlxuaWYoY2g9PT1cIlxcMFwiKXtyZXR1cm5cIlxcdUZGRkRcIjt9Ly8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCAoZGVwZW5kZW50IHVwb24gcG9zaXRpb24pIG51bWJlcnMgZ2V0IGVzY2FwZWQgYXMgY29kZSBwb2ludHNcbnJldHVybiBjaC5zbGljZSgwLC0xKStcIlxcXFxcIitjaC5jaGFyQ29kZUF0KGNoLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI7fS8vIE90aGVyIHBvdGVudGlhbGx5LXNwZWNpYWwgQVNDSUkgY2hhcmFjdGVycyBnZXQgYmFja3NsYXNoLWVzY2FwZWRcbnJldHVyblwiXFxcXFwiK2NoO30sLy8gVXNlZCBmb3IgaWZyYW1lc1xuLy8gU2VlIHNldERvY3VtZW50KClcbi8vIFJlbW92aW5nIHRoZSBmdW5jdGlvbiB3cmFwcGVyIGNhdXNlcyBhIFwiUGVybWlzc2lvbiBEZW5pZWRcIlxuLy8gZXJyb3IgaW4gSUVcbnVubG9hZEhhbmRsZXI9ZnVuY3Rpb24gdW5sb2FkSGFuZGxlcigpe3NldERvY3VtZW50KCk7fSxkaXNhYmxlZEFuY2VzdG9yPWFkZENvbWJpbmF0b3IoZnVuY3Rpb24oZWxlbSl7cmV0dXJuIGVsZW0uZGlzYWJsZWQ9PT10cnVlJiYoXCJmb3JtXCJpbiBlbGVtfHxcImxhYmVsXCJpbiBlbGVtKTt9LHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7Ly8gT3B0aW1pemUgZm9yIHB1c2guYXBwbHkoIF8sIE5vZGVMaXN0IClcbnRyeXtwdXNoLmFwcGx5KGFycj1zbGljZS5jYWxsKHByZWZlcnJlZERvYy5jaGlsZE5vZGVzKSxwcmVmZXJyZWREb2MuY2hpbGROb2Rlcyk7Ly8gU3VwcG9ydDogQW5kcm9pZDw0LjBcbi8vIERldGVjdCBzaWxlbnRseSBmYWlsaW5nIHB1c2guYXBwbHlcbmFycltwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlO31jYXRjaChlKXtwdXNoPXthcHBseTphcnIubGVuZ3RoPy8vIExldmVyYWdlIHNsaWNlIGlmIHBvc3NpYmxlXG5mdW5jdGlvbih0YXJnZXQsZWxzKXtwdXNoX25hdGl2ZS5hcHBseSh0YXJnZXQsc2xpY2UuY2FsbChlbHMpKTt9Oi8vIFN1cHBvcnQ6IElFPDlcbi8vIE90aGVyd2lzZSBhcHBlbmQgZGlyZWN0bHlcbmZ1bmN0aW9uKHRhcmdldCxlbHMpe3ZhciBqPXRhcmdldC5sZW5ndGgsaT0wOy8vIENhbid0IHRydXN0IE5vZGVMaXN0Lmxlbmd0aFxud2hpbGUodGFyZ2V0W2orK109ZWxzW2krK10pe310YXJnZXQubGVuZ3RoPWotMTt9fTt9ZnVuY3Rpb24gU2l6emxlKHNlbGVjdG9yLGNvbnRleHQscmVzdWx0cyxzZWVkKXt2YXIgbSxpLGVsZW0sbmlkLG1hdGNoLGdyb3VwcyxuZXdTZWxlY3RvcixuZXdDb250ZXh0PWNvbnRleHQmJmNvbnRleHQub3duZXJEb2N1bWVudCwvLyBub2RlVHlwZSBkZWZhdWx0cyB0byA5LCBzaW5jZSBjb250ZXh0IGRlZmF1bHRzIHRvIGRvY3VtZW50XG5ub2RlVHlwZT1jb250ZXh0P2NvbnRleHQubm9kZVR5cGU6OTtyZXN1bHRzPXJlc3VsdHN8fFtdOy8vIFJldHVybiBlYXJseSBmcm9tIGNhbGxzIHdpdGggaW52YWxpZCBzZWxlY3RvciBvciBjb250ZXh0XG5pZih0eXBlb2Ygc2VsZWN0b3IhPT1cInN0cmluZ1wifHwhc2VsZWN0b3J8fG5vZGVUeXBlIT09MSYmbm9kZVR5cGUhPT05JiZub2RlVHlwZSE9PTExKXtyZXR1cm4gcmVzdWx0czt9Ly8gVHJ5IHRvIHNob3J0Y3V0IGZpbmQgb3BlcmF0aW9ucyAoYXMgb3Bwb3NlZCB0byBmaWx0ZXJzKSBpbiBIVE1MIGRvY3VtZW50c1xuaWYoIXNlZWQpe2lmKChjb250ZXh0P2NvbnRleHQub3duZXJEb2N1bWVudHx8Y29udGV4dDpwcmVmZXJyZWREb2MpIT09ZG9jdW1lbnQpe3NldERvY3VtZW50KGNvbnRleHQpO31jb250ZXh0PWNvbnRleHR8fGRvY3VtZW50O2lmKGRvY3VtZW50SXNIVE1MKXsvLyBJZiB0aGUgc2VsZWN0b3IgaXMgc3VmZmljaWVudGx5IHNpbXBsZSwgdHJ5IHVzaW5nIGEgXCJnZXQqQnkqXCIgRE9NIG1ldGhvZFxuLy8gKGV4Y2VwdGluZyBEb2N1bWVudEZyYWdtZW50IGNvbnRleHQsIHdoZXJlIHRoZSBtZXRob2RzIGRvbid0IGV4aXN0KVxuaWYobm9kZVR5cGUhPT0xMSYmKG1hdGNoPXJxdWlja0V4cHIuZXhlYyhzZWxlY3RvcikpKXsvLyBJRCBzZWxlY3RvclxuaWYobT1tYXRjaFsxXSl7Ly8gRG9jdW1lbnQgY29udGV4dFxuaWYobm9kZVR5cGU9PT05KXtpZihlbGVtPWNvbnRleHQuZ2V0RWxlbWVudEJ5SWQobSkpey8vIFN1cHBvcnQ6IElFLCBPcGVyYSwgV2Via2l0XG4vLyBUT0RPOiBpZGVudGlmeSB2ZXJzaW9uc1xuLy8gZ2V0RWxlbWVudEJ5SWQgY2FuIG1hdGNoIGVsZW1lbnRzIGJ5IG5hbWUgaW5zdGVhZCBvZiBJRFxuaWYoZWxlbS5pZD09PW0pe3Jlc3VsdHMucHVzaChlbGVtKTtyZXR1cm4gcmVzdWx0czt9fWVsc2V7cmV0dXJuIHJlc3VsdHM7fS8vIEVsZW1lbnQgY29udGV4dFxufWVsc2V7Ly8gU3VwcG9ydDogSUUsIE9wZXJhLCBXZWJraXRcbi8vIFRPRE86IGlkZW50aWZ5IHZlcnNpb25zXG4vLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG5pZihuZXdDb250ZXh0JiYoZWxlbT1uZXdDb250ZXh0LmdldEVsZW1lbnRCeUlkKG0pKSYmY29udGFpbnMoY29udGV4dCxlbGVtKSYmZWxlbS5pZD09PW0pe3Jlc3VsdHMucHVzaChlbGVtKTtyZXR1cm4gcmVzdWx0czt9fS8vIFR5cGUgc2VsZWN0b3Jcbn1lbHNlIGlmKG1hdGNoWzJdKXtwdXNoLmFwcGx5KHJlc3VsdHMsY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcikpO3JldHVybiByZXN1bHRzOy8vIENsYXNzIHNlbGVjdG9yXG59ZWxzZSBpZigobT1tYXRjaFszXSkmJnN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXtwdXNoLmFwcGx5KHJlc3VsdHMsY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG0pKTtyZXR1cm4gcmVzdWx0czt9fS8vIFRha2UgYWR2YW50YWdlIG9mIHF1ZXJ5U2VsZWN0b3JBbGxcbmlmKHN1cHBvcnQucXNhJiYhY29tcGlsZXJDYWNoZVtzZWxlY3RvcitcIiBcIl0mJighcmJ1Z2d5UVNBfHwhcmJ1Z2d5UVNBLnRlc3Qoc2VsZWN0b3IpKSl7aWYobm9kZVR5cGUhPT0xKXtuZXdDb250ZXh0PWNvbnRleHQ7bmV3U2VsZWN0b3I9c2VsZWN0b3I7Ly8gcVNBIGxvb2tzIG91dHNpZGUgRWxlbWVudCBjb250ZXh0LCB3aGljaCBpcyBub3Qgd2hhdCB3ZSB3YW50XG4vLyBUaGFua3MgdG8gQW5kcmV3IER1cG9udCBmb3IgdGhpcyB3b3JrYXJvdW5kIHRlY2huaXF1ZVxuLy8gU3VwcG9ydDogSUUgPD04XG4vLyBFeGNsdWRlIG9iamVjdCBlbGVtZW50c1xufWVsc2UgaWYoY29udGV4dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIT09XCJvYmplY3RcIil7Ly8gQ2FwdHVyZSB0aGUgY29udGV4dCBJRCwgc2V0dGluZyBpdCBmaXJzdCBpZiBuZWNlc3NhcnlcbmlmKG5pZD1jb250ZXh0LmdldEF0dHJpYnV0ZShcImlkXCIpKXtuaWQ9bmlkLnJlcGxhY2UocmNzc2VzY2FwZSxmY3NzZXNjYXBlKTt9ZWxzZXtjb250ZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsbmlkPWV4cGFuZG8pO30vLyBQcmVmaXggZXZlcnkgc2VsZWN0b3IgaW4gdGhlIGxpc3Rcbmdyb3Vwcz10b2tlbml6ZShzZWxlY3Rvcik7aT1ncm91cHMubGVuZ3RoO3doaWxlKGktLSl7Z3JvdXBzW2ldPVwiI1wiK25pZCtcIiBcIit0b1NlbGVjdG9yKGdyb3Vwc1tpXSk7fW5ld1NlbGVjdG9yPWdyb3Vwcy5qb2luKFwiLFwiKTsvLyBFeHBhbmQgY29udGV4dCBmb3Igc2libGluZyBzZWxlY3RvcnNcbm5ld0NvbnRleHQ9cnNpYmxpbmcudGVzdChzZWxlY3RvcikmJnRlc3RDb250ZXh0KGNvbnRleHQucGFyZW50Tm9kZSl8fGNvbnRleHQ7fWlmKG5ld1NlbGVjdG9yKXt0cnl7cHVzaC5hcHBseShyZXN1bHRzLG5ld0NvbnRleHQucXVlcnlTZWxlY3RvckFsbChuZXdTZWxlY3RvcikpO3JldHVybiByZXN1bHRzO31jYXRjaChxc2FFcnJvcil7fWZpbmFsbHl7aWYobmlkPT09ZXhwYW5kbyl7Y29udGV4dC5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKTt9fX19fX0vLyBBbGwgb3RoZXJzXG5yZXR1cm4gc2VsZWN0KHNlbGVjdG9yLnJlcGxhY2UocnRyaW0sXCIkMVwiKSxjb250ZXh0LHJlc3VsdHMsc2VlZCk7fS8qKlxuICogQ3JlYXRlIGtleS12YWx1ZSBjYWNoZXMgb2YgbGltaXRlZCBzaXplXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oc3RyaW5nLCBvYmplY3QpfSBSZXR1cm5zIHRoZSBPYmplY3QgZGF0YSBhZnRlciBzdG9yaW5nIGl0IG9uIGl0c2VsZiB3aXRoXG4gKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcbiAqXHRkZWxldGluZyB0aGUgb2xkZXN0IGVudHJ5XG4gKi9mdW5jdGlvbiBjcmVhdGVDYWNoZSgpe3ZhciBrZXlzPVtdO2Z1bmN0aW9uIGNhY2hlKGtleSx2YWx1ZSl7Ly8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChzZWUgSXNzdWUgIzE1NylcbmlmKGtleXMucHVzaChrZXkrXCIgXCIpPkV4cHIuY2FjaGVMZW5ndGgpey8vIE9ubHkga2VlcCB0aGUgbW9zdCByZWNlbnQgZW50cmllc1xuZGVsZXRlIGNhY2hlW2tleXMuc2hpZnQoKV07fXJldHVybiBjYWNoZVtrZXkrXCIgXCJdPXZhbHVlO31yZXR1cm4gY2FjaGU7fS8qKlxuICogTWFyayBhIGZ1bmN0aW9uIGZvciBzcGVjaWFsIHVzZSBieSBTaXp6bGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtYXJrXG4gKi9mdW5jdGlvbiBtYXJrRnVuY3Rpb24oZm4pe2ZuW2V4cGFuZG9dPXRydWU7cmV0dXJuIGZuO30vKipcbiAqIFN1cHBvcnQgdGVzdGluZyB1c2luZyBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBQYXNzZWQgdGhlIGNyZWF0ZWQgZWxlbWVudCBhbmQgcmV0dXJucyBhIGJvb2xlYW4gcmVzdWx0XG4gKi9mdW5jdGlvbiBhc3NlcnQoZm4pe3ZhciBlbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhZm4oZWwpO31jYXRjaChlKXtyZXR1cm4gZmFsc2U7fWZpbmFsbHl7Ly8gUmVtb3ZlIGZyb20gaXRzIHBhcmVudCBieSBkZWZhdWx0XG5pZihlbC5wYXJlbnROb2RlKXtlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTt9Ly8gcmVsZWFzZSBtZW1vcnkgaW4gSUVcbmVsPW51bGw7fX0vKipcbiAqIEFkZHMgdGhlIHNhbWUgaGFuZGxlciBmb3IgYWxsIG9mIHRoZSBzcGVjaWZpZWQgYXR0cnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRycyBQaXBlLXNlcGFyYXRlZCBsaXN0IG9mIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIG1ldGhvZCB0aGF0IHdpbGwgYmUgYXBwbGllZFxuICovZnVuY3Rpb24gYWRkSGFuZGxlKGF0dHJzLGhhbmRsZXIpe3ZhciBhcnI9YXR0cnMuc3BsaXQoXCJ8XCIpLGk9YXJyLmxlbmd0aDt3aGlsZShpLS0pe0V4cHIuYXR0ckhhbmRsZVthcnJbaV1dPWhhbmRsZXI7fX0vKipcbiAqIENoZWNrcyBkb2N1bWVudCBvcmRlciBvZiB0d28gc2libGluZ3NcbiAqIEBwYXJhbSB7RWxlbWVudH0gYVxuICogQHBhcmFtIHtFbGVtZW50fSBiXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIGxlc3MgdGhhbiAwIGlmIGEgcHJlY2VkZXMgYiwgZ3JlYXRlciB0aGFuIDAgaWYgYSBmb2xsb3dzIGJcbiAqL2Z1bmN0aW9uIHNpYmxpbmdDaGVjayhhLGIpe3ZhciBjdXI9YiYmYSxkaWZmPWN1ciYmYS5ub2RlVHlwZT09PTEmJmIubm9kZVR5cGU9PT0xJiZhLnNvdXJjZUluZGV4LWIuc291cmNlSW5kZXg7Ly8gVXNlIElFIHNvdXJjZUluZGV4IGlmIGF2YWlsYWJsZSBvbiBib3RoIG5vZGVzXG5pZihkaWZmKXtyZXR1cm4gZGlmZjt9Ly8gQ2hlY2sgaWYgYiBmb2xsb3dzIGFcbmlmKGN1cil7d2hpbGUoY3VyPWN1ci5uZXh0U2libGluZyl7aWYoY3VyPT09Yil7cmV0dXJuLTE7fX19cmV0dXJuIGE/MTotMTt9LyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGlucHV0IHR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8odHlwZSl7cmV0dXJuIGZ1bmN0aW9uKGVsZW0pe3ZhciBuYW1lPWVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbmFtZT09PVwiaW5wdXRcIiYmZWxlbS50eXBlPT09dHlwZTt9O30vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgYnV0dG9uc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL2Z1bmN0aW9uIGNyZWF0ZUJ1dHRvblBzZXVkbyh0eXBlKXtyZXR1cm4gZnVuY3Rpb24oZWxlbSl7dmFyIG5hbWU9ZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihuYW1lPT09XCJpbnB1dFwifHxuYW1lPT09XCJidXR0b25cIikmJmVsZW0udHlwZT09PXR5cGU7fTt9LyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIDplbmFibGVkLzpkaXNhYmxlZFxuICogQHBhcmFtIHtCb29sZWFufSBkaXNhYmxlZCB0cnVlIGZvciA6ZGlzYWJsZWQ7IGZhbHNlIGZvciA6ZW5hYmxlZFxuICovZnVuY3Rpb24gY3JlYXRlRGlzYWJsZWRQc2V1ZG8oZGlzYWJsZWQpey8vIEtub3duIDpkaXNhYmxlZCBmYWxzZSBwb3NpdGl2ZXM6IGZpZWxkc2V0W2Rpc2FibGVkXSA+IGxlZ2VuZDpudGgtb2YtdHlwZShuKzIpIDpjYW4tZGlzYWJsZVxucmV0dXJuIGZ1bmN0aW9uKGVsZW0pey8vIE9ubHkgY2VydGFpbiBlbGVtZW50cyBjYW4gbWF0Y2ggOmVuYWJsZWQgb3IgOmRpc2FibGVkXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1lbmFibGVkXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1kaXNhYmxlZFxuaWYoXCJmb3JtXCJpbiBlbGVtKXsvLyBDaGVjayBmb3IgaW5oZXJpdGVkIGRpc2FibGVkbmVzcyBvbiByZWxldmFudCBub24tZGlzYWJsZWQgZWxlbWVudHM6XG4vLyAqIGxpc3RlZCBmb3JtLWFzc29jaWF0ZWQgZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBmaWVsZHNldFxuLy8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuLy8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtZmUtZGlzYWJsZWRcbi8vICogb3B0aW9uIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcbi8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuLy8gQWxsIHN1Y2ggZWxlbWVudHMgaGF2ZSBhIFwiZm9ybVwiIHByb3BlcnR5LlxuaWYoZWxlbS5wYXJlbnROb2RlJiZlbGVtLmRpc2FibGVkPT09ZmFsc2Upey8vIE9wdGlvbiBlbGVtZW50cyBkZWZlciB0byBhIHBhcmVudCBvcHRncm91cCBpZiBwcmVzZW50XG5pZihcImxhYmVsXCJpbiBlbGVtKXtpZihcImxhYmVsXCJpbiBlbGVtLnBhcmVudE5vZGUpe3JldHVybiBlbGVtLnBhcmVudE5vZGUuZGlzYWJsZWQ9PT1kaXNhYmxlZDt9ZWxzZXtyZXR1cm4gZWxlbS5kaXNhYmxlZD09PWRpc2FibGVkO319Ly8gU3VwcG9ydDogSUUgNiAtIDExXG4vLyBVc2UgdGhlIGlzRGlzYWJsZWQgc2hvcnRjdXQgcHJvcGVydHkgdG8gY2hlY2sgZm9yIGRpc2FibGVkIGZpZWxkc2V0IGFuY2VzdG9yc1xucmV0dXJuIGVsZW0uaXNEaXNhYmxlZD09PWRpc2FibGVkfHwvLyBXaGVyZSB0aGVyZSBpcyBubyBpc0Rpc2FibGVkLCBjaGVjayBtYW51YWxseVxuLyoganNoaW50IC1XMDE4ICovZWxlbS5pc0Rpc2FibGVkIT09IWRpc2FibGVkJiZkaXNhYmxlZEFuY2VzdG9yKGVsZW0pPT09ZGlzYWJsZWQ7fXJldHVybiBlbGVtLmRpc2FibGVkPT09ZGlzYWJsZWQ7Ly8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuLy8gU29tZSB2aWN0aW1zIGdldCBjYXVnaHQgaW4gb3VyIG5ldCAobGFiZWwsIGxlZ2VuZCwgbWVudSwgdHJhY2spLCBidXQgaXQgc2hvdWxkbid0XG4vLyBldmVuIGV4aXN0IG9uIHRoZW0sIGxldCBhbG9uZSBoYXZlIGEgYm9vbGVhbiB2YWx1ZS5cbn1lbHNlIGlmKFwibGFiZWxcImluIGVsZW0pe3JldHVybiBlbGVtLmRpc2FibGVkPT09ZGlzYWJsZWQ7fS8vIFJlbWFpbmluZyBlbGVtZW50cyBhcmUgbmVpdGhlciA6ZW5hYmxlZCBub3IgOmRpc2FibGVkXG5yZXR1cm4gZmFsc2U7fTt9LyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIHBvc2l0aW9uYWxzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovZnVuY3Rpb24gY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmbil7cmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbihhcmd1bWVudCl7YXJndW1lbnQ9K2FyZ3VtZW50O3JldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oc2VlZCxtYXRjaGVzKXt2YXIgaixtYXRjaEluZGV4ZXM9Zm4oW10sc2VlZC5sZW5ndGgsYXJndW1lbnQpLGk9bWF0Y2hJbmRleGVzLmxlbmd0aDsvLyBNYXRjaCBlbGVtZW50cyBmb3VuZCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4ZXNcbndoaWxlKGktLSl7aWYoc2VlZFtqPW1hdGNoSW5kZXhlc1tpXV0pe3NlZWRbal09IShtYXRjaGVzW2pdPXNlZWRbal0pO319fSk7fSk7fS8qKlxuICogQ2hlY2tzIGEgbm9kZSBmb3IgdmFsaWRpdHkgYXMgYSBTaXp6bGUgY29udGV4dFxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdD19IGNvbnRleHRcbiAqIEByZXR1cm5zIHtFbGVtZW50fE9iamVjdHxCb29sZWFufSBUaGUgaW5wdXQgbm9kZSBpZiBhY2NlcHRhYmxlLCBvdGhlcndpc2UgYSBmYWxzeSB2YWx1ZVxuICovZnVuY3Rpb24gdGVzdENvbnRleHQoY29udGV4dCl7cmV0dXJuIGNvbnRleHQmJnR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lIT09XCJ1bmRlZmluZWRcIiYmY29udGV4dDt9Ly8gRXhwb3NlIHN1cHBvcnQgdmFycyBmb3IgY29udmVuaWVuY2VcbnN1cHBvcnQ9U2l6emxlLnN1cHBvcnQ9e307LyoqXG4gKiBEZXRlY3RzIFhNTCBub2Rlc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxlbSBBbiBlbGVtZW50IG9yIGEgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmZiBlbGVtIGlzIGEgbm9uLUhUTUwgWE1MIG5vZGVcbiAqL2lzWE1MPVNpenpsZS5pc1hNTD1mdW5jdGlvbihlbGVtKXsvLyBkb2N1bWVudEVsZW1lbnQgaXMgdmVyaWZpZWQgZm9yIGNhc2VzIHdoZXJlIGl0IGRvZXNuJ3QgeWV0IGV4aXN0XG4vLyAoc3VjaCBhcyBsb2FkaW5nIGlmcmFtZXMgaW4gSUUgLSAjNDgzMylcbnZhciBkb2N1bWVudEVsZW1lbnQ9ZWxlbSYmKGVsZW0ub3duZXJEb2N1bWVudHx8ZWxlbSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBkb2N1bWVudEVsZW1lbnQ/ZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lIT09XCJIVE1MXCI6ZmFsc2U7fTsvKipcbiAqIFNldHMgZG9jdW1lbnQtcmVsYXRlZCB2YXJpYWJsZXMgb25jZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkb2N1bWVudFxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gW2RvY10gQW4gZWxlbWVudCBvciBkb2N1bWVudCBvYmplY3QgdG8gdXNlIHRvIHNldCB0aGUgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqL3NldERvY3VtZW50PVNpenpsZS5zZXREb2N1bWVudD1mdW5jdGlvbihub2RlKXt2YXIgaGFzQ29tcGFyZSxzdWJXaW5kb3csZG9jPW5vZGU/bm9kZS5vd25lckRvY3VtZW50fHxub2RlOnByZWZlcnJlZERvYzsvLyBSZXR1cm4gZWFybHkgaWYgZG9jIGlzIGludmFsaWQgb3IgYWxyZWFkeSBzZWxlY3RlZFxuaWYoZG9jPT09ZG9jdW1lbnR8fGRvYy5ub2RlVHlwZSE9PTl8fCFkb2MuZG9jdW1lbnRFbGVtZW50KXtyZXR1cm4gZG9jdW1lbnQ7fS8vIFVwZGF0ZSBnbG9iYWwgdmFyaWFibGVzXG5kb2N1bWVudD1kb2M7ZG9jRWxlbT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ZG9jdW1lbnRJc0hUTUw9IWlzWE1MKGRvY3VtZW50KTsvLyBTdXBwb3J0OiBJRSA5LTExLCBFZGdlXG4vLyBBY2Nlc3NpbmcgaWZyYW1lIGRvY3VtZW50cyBhZnRlciB1bmxvYWQgdGhyb3dzIFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvcnMgKGpRdWVyeSAjMTM5MzYpXG5pZihwcmVmZXJyZWREb2MhPT1kb2N1bWVudCYmKHN1YldpbmRvdz1kb2N1bWVudC5kZWZhdWx0VmlldykmJnN1YldpbmRvdy50b3AhPT1zdWJXaW5kb3cpey8vIFN1cHBvcnQ6IElFIDExLCBFZGdlXG5pZihzdWJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcil7c3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIix1bmxvYWRIYW5kbGVyLGZhbHNlKTsvLyBTdXBwb3J0OiBJRSA5IC0gMTAgb25seVxufWVsc2UgaWYoc3ViV2luZG93LmF0dGFjaEV2ZW50KXtzdWJXaW5kb3cuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLHVubG9hZEhhbmRsZXIpO319LyogQXR0cmlidXRlc1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovLy8gU3VwcG9ydDogSUU8OFxuLy8gVmVyaWZ5IHRoYXQgZ2V0QXR0cmlidXRlIHJlYWxseSByZXR1cm5zIGF0dHJpYnV0ZXMgYW5kIG5vdCBwcm9wZXJ0aWVzXG4vLyAoZXhjZXB0aW5nIElFOCBib29sZWFucylcbnN1cHBvcnQuYXR0cmlidXRlcz1hc3NlcnQoZnVuY3Rpb24oZWwpe2VsLmNsYXNzTmFtZT1cImlcIjtyZXR1cm4hZWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpO30pOy8qIGdldEVsZW1lbnQocylCeSpcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqLy8vIENoZWNrIGlmIGdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKSByZXR1cm5zIG9ubHkgZWxlbWVudHNcbnN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWU9YXNzZXJ0KGZ1bmN0aW9uKGVsKXtlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiXCIpKTtyZXR1cm4hZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aDt9KTsvLyBTdXBwb3J0OiBJRTw5XG5zdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWU9cm5hdGl2ZS50ZXN0KGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpOy8vIFN1cHBvcnQ6IElFPDEwXG4vLyBDaGVjayBpZiBnZXRFbGVtZW50QnlJZCByZXR1cm5zIGVsZW1lbnRzIGJ5IG5hbWVcbi8vIFRoZSBicm9rZW4gZ2V0RWxlbWVudEJ5SWQgbWV0aG9kcyBkb24ndCBwaWNrIHVwIHByb2dyYW1tYXRpY2FsbHktc2V0IG5hbWVzLFxuLy8gc28gdXNlIGEgcm91bmRhYm91dCBnZXRFbGVtZW50c0J5TmFtZSB0ZXN0XG5zdXBwb3J0LmdldEJ5SWQ9YXNzZXJ0KGZ1bmN0aW9uKGVsKXtkb2NFbGVtLmFwcGVuZENoaWxkKGVsKS5pZD1leHBhbmRvO3JldHVybiFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZXx8IWRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGV4cGFuZG8pLmxlbmd0aDt9KTsvLyBJRCBmaWx0ZXIgYW5kIGZpbmRcbmlmKHN1cHBvcnQuZ2V0QnlJZCl7RXhwci5maWx0ZXJbXCJJRFwiXT1mdW5jdGlvbihpZCl7dmFyIGF0dHJJZD1pZC5yZXBsYWNlKHJ1bmVzY2FwZSxmdW5lc2NhcGUpO3JldHVybiBmdW5jdGlvbihlbGVtKXtyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWF0dHJJZDt9O307RXhwci5maW5kW1wiSURcIl09ZnVuY3Rpb24oaWQsY29udGV4dCl7aWYodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQhPT1cInVuZGVmaW5lZFwiJiZkb2N1bWVudElzSFRNTCl7dmFyIGVsZW09Y29udGV4dC5nZXRFbGVtZW50QnlJZChpZCk7cmV0dXJuIGVsZW0/W2VsZW1dOltdO319O31lbHNle0V4cHIuZmlsdGVyW1wiSURcIl09ZnVuY3Rpb24oaWQpe3ZhciBhdHRySWQ9aWQucmVwbGFjZShydW5lc2NhcGUsZnVuZXNjYXBlKTtyZXR1cm4gZnVuY3Rpb24oZWxlbSl7dmFyIG5vZGU9dHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlTm9kZSE9PVwidW5kZWZpbmVkXCImJmVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBub2RlJiZub2RlLnZhbHVlPT09YXR0cklkO307fTsvLyBTdXBwb3J0OiBJRSA2IC0gNyBvbmx5XG4vLyBnZXRFbGVtZW50QnlJZCBpcyBub3QgcmVsaWFibGUgYXMgYSBmaW5kIHNob3J0Y3V0XG5FeHByLmZpbmRbXCJJRFwiXT1mdW5jdGlvbihpZCxjb250ZXh0KXtpZih0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCE9PVwidW5kZWZpbmVkXCImJmRvY3VtZW50SXNIVE1MKXt2YXIgbm9kZSxpLGVsZW1zLGVsZW09Y29udGV4dC5nZXRFbGVtZW50QnlJZChpZCk7aWYoZWxlbSl7Ly8gVmVyaWZ5IHRoZSBpZCBhdHRyaWJ1dGVcbm5vZGU9ZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7aWYobm9kZSYmbm9kZS52YWx1ZT09PWlkKXtyZXR1cm5bZWxlbV07fS8vIEZhbGwgYmFjayBvbiBnZXRFbGVtZW50c0J5TmFtZVxuZWxlbXM9Y29udGV4dC5nZXRFbGVtZW50c0J5TmFtZShpZCk7aT0wO3doaWxlKGVsZW09ZWxlbXNbaSsrXSl7bm9kZT1lbGVtLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtpZihub2RlJiZub2RlLnZhbHVlPT09aWQpe3JldHVybltlbGVtXTt9fX1yZXR1cm5bXTt9fTt9Ly8gVGFnXG5FeHByLmZpbmRbXCJUQUdcIl09c3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbih0YWcsY29udGV4dCl7aWYodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUhPT1cInVuZGVmaW5lZFwiKXtyZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpOy8vIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgZG9uJ3QgaGF2ZSBnRUJUTlxufWVsc2UgaWYoc3VwcG9ydC5xc2Epe3JldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwodGFnKTt9fTpmdW5jdGlvbih0YWcsY29udGV4dCl7dmFyIGVsZW0sdG1wPVtdLGk9MCwvLyBCeSBoYXBweSBjb2luY2lkZW5jZSwgYSAoYnJva2VuKSBnRUJUTiBhcHBlYXJzIG9uIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgdG9vXG5yZXN1bHRzPWNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTsvLyBGaWx0ZXIgb3V0IHBvc3NpYmxlIGNvbW1lbnRzXG5pZih0YWc9PT1cIipcIil7d2hpbGUoZWxlbT1yZXN1bHRzW2krK10pe2lmKGVsZW0ubm9kZVR5cGU9PT0xKXt0bXAucHVzaChlbGVtKTt9fXJldHVybiB0bXA7fXJldHVybiByZXN1bHRzO307Ly8gQ2xhc3NcbkV4cHIuZmluZFtcIkNMQVNTXCJdPXN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oY2xhc3NOYW1lLGNvbnRleHQpe2lmKHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUhPT1cInVuZGVmaW5lZFwiJiZkb2N1bWVudElzSFRNTCl7cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO319Oy8qIFFTQS9tYXRjaGVzU2VsZWN0b3Jcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqLy8vIFFTQSBhbmQgbWF0Y2hlc1NlbGVjdG9yIHN1cHBvcnRcbi8vIG1hdGNoZXNTZWxlY3Rvcig6YWN0aXZlKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoSUU5L09wZXJhIDExLjUpXG5yYnVnZ3lNYXRjaGVzPVtdOy8vIHFTYSg6Zm9jdXMpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChDaHJvbWUgMjEpXG4vLyBXZSBhbGxvdyB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4gSUU4LzkgdGhhdCB0aHJvd3MgYW4gZXJyb3Jcbi8vIHdoZW5ldmVyIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBhY2Nlc3NlZCBvbiBhbiBpZnJhbWVcbi8vIFNvLCB3ZSBhbGxvdyA6Zm9jdXMgdG8gcGFzcyB0aHJvdWdoIFFTQSBhbGwgdGhlIHRpbWUgdG8gYXZvaWQgdGhlIElFIGVycm9yXG4vLyBTZWUgaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEzMzc4XG5yYnVnZ3lRU0E9W107aWYoc3VwcG9ydC5xc2E9cm5hdGl2ZS50ZXN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpKXsvLyBCdWlsZCBRU0EgcmVnZXhcbi8vIFJlZ2V4IHN0cmF0ZWd5IGFkb3B0ZWQgZnJvbSBEaWVnbyBQZXJpbmlcbmFzc2VydChmdW5jdGlvbihlbCl7Ly8gU2VsZWN0IGlzIHNldCB0byBlbXB0eSBzdHJpbmcgb24gcHVycG9zZVxuLy8gVGhpcyBpcyB0byB0ZXN0IElFJ3MgdHJlYXRtZW50IG9mIG5vdCBleHBsaWNpdGx5XG4vLyBzZXR0aW5nIGEgYm9vbGVhbiBjb250ZW50IGF0dHJpYnV0ZSxcbi8vIHNpbmNlIGl0cyBwcmVzZW5jZSBzaG91bGQgYmUgZW5vdWdoXG4vLyBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTIzNTlcbmRvY0VsZW0uYXBwZW5kQ2hpbGQoZWwpLmlubmVySFRNTD1cIjxhIGlkPSdcIitleHBhbmRvK1wiJz48L2E+XCIrXCI8c2VsZWN0IGlkPSdcIitleHBhbmRvK1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPlwiK1wiPG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIjsvLyBTdXBwb3J0OiBJRTgsIE9wZXJhIDExLTEyLjE2XG4vLyBOb3RoaW5nIHNob3VsZCBiZSBzZWxlY3RlZCB3aGVuIGVtcHR5IHN0cmluZ3MgZm9sbG93IF49IG9yICQ9IG9yICo9XG4vLyBUaGUgdGVzdCBhdHRyaWJ1dGUgbXVzdCBiZSB1bmtub3duIGluIE9wZXJhIGJ1dCBcInNhZmVcIiBmb3IgV2luUlRcbi8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvaGg0NjUzODguYXNweCNhdHRyaWJ1dGVfc2VjdGlvblxuaWYoZWwucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCl7cmJ1Z2d5UVNBLnB1c2goXCJbKl4kXT1cIit3aGl0ZXNwYWNlK1wiKig/OicnfFxcXCJcXFwiKVwiKTt9Ly8gU3VwcG9ydDogSUU4XG4vLyBCb29sZWFuIGF0dHJpYnV0ZXMgYW5kIFwidmFsdWVcIiBhcmUgbm90IHRyZWF0ZWQgY29ycmVjdGx5XG5pZighZWwucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RoKXtyYnVnZ3lRU0EucHVzaChcIlxcXFxbXCIrd2hpdGVzcGFjZStcIiooPzp2YWx1ZXxcIitib29sZWFucytcIilcIik7fS8vIFN1cHBvcnQ6IENocm9tZTwyOSwgQW5kcm9pZDw0LjQsIFNhZmFyaTw3LjArLCBpT1M8Ny4wKywgUGhhbnRvbUpTPDEuOS44K1xuaWYoIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbaWR+PVwiK2V4cGFuZG8rXCItXVwiKS5sZW5ndGgpe3JidWdneVFTQS5wdXNoKFwifj1cIik7fS8vIFdlYmtpdC9PcGVyYSAtIDpjaGVja2VkIHNob3VsZCByZXR1cm4gc2VsZWN0ZWQgb3B0aW9uIGVsZW1lbnRzXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuLy8gSUU4IHRocm93cyBlcnJvciBoZXJlIGFuZCB3aWxsIG5vdCBzZWUgbGF0ZXIgdGVzdHNcbmlmKCFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RoKXtyYnVnZ3lRU0EucHVzaChcIjpjaGVja2VkXCIpO30vLyBTdXBwb3J0OiBTYWZhcmkgOCssIGlPUyA4K1xuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNjg1MVxuLy8gSW4tcGFnZSBgc2VsZWN0b3IjaWQgc2libGluZy1jb21iaW5hdG9yIHNlbGVjdG9yYCBmYWlsc1xuaWYoIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK2V4cGFuZG8rXCIrKlwiKS5sZW5ndGgpe3JidWdneVFTQS5wdXNoKFwiLiMuK1srfl1cIik7fX0pO2Fzc2VydChmdW5jdGlvbihlbCl7ZWwuaW5uZXJIVE1MPVwiPGEgaHJlZj0nJyBkaXNhYmxlZD0nZGlzYWJsZWQnPjwvYT5cIitcIjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjsvLyBTdXBwb3J0OiBXaW5kb3dzIDggTmF0aXZlIEFwcHNcbi8vIFRoZSB0eXBlIGFuZCBuYW1lIGF0dHJpYnV0ZXMgYXJlIHJlc3RyaWN0ZWQgZHVyaW5nIC5pbm5lckhUTUwgYXNzaWdubWVudFxudmFyIGlucHV0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIik7ZWwuYXBwZW5kQ2hpbGQoaW5wdXQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIik7Ly8gU3VwcG9ydDogSUU4XG4vLyBFbmZvcmNlIGNhc2Utc2Vuc2l0aXZpdHkgb2YgbmFtZSBhdHRyaWJ1dGVcbmlmKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1kXVwiKS5sZW5ndGgpe3JidWdneVFTQS5wdXNoKFwibmFtZVwiK3doaXRlc3BhY2UrXCIqWypeJHwhfl0/PVwiKTt9Ly8gRkYgMy41IC0gOmVuYWJsZWQvOmRpc2FibGVkIGFuZCBoaWRkZW4gZWxlbWVudHMgKGhpZGRlbiBlbGVtZW50cyBhcmUgc3RpbGwgZW5hYmxlZClcbi8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5pZihlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoIT09Mil7cmJ1Z2d5UVNBLnB1c2goXCI6ZW5hYmxlZFwiLFwiOmRpc2FibGVkXCIpO30vLyBTdXBwb3J0OiBJRTktMTErXG4vLyBJRSdzIDpkaXNhYmxlZCBzZWxlY3RvciBkb2VzIG5vdCBwaWNrIHVwIHRoZSBjaGlsZHJlbiBvZiBkaXNhYmxlZCBmaWVsZHNldHNcbmRvY0VsZW0uYXBwZW5kQ2hpbGQoZWwpLmRpc2FibGVkPXRydWU7aWYoZWwucXVlcnlTZWxlY3RvckFsbChcIjpkaXNhYmxlZFwiKS5sZW5ndGghPT0yKXtyYnVnZ3lRU0EucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIik7fS8vIE9wZXJhIDEwLTExIGRvZXMgbm90IHRocm93IG9uIHBvc3QtY29tbWEgaW52YWxpZCBwc2V1ZG9zXG5lbC5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKTtyYnVnZ3lRU0EucHVzaChcIiwuKjpcIik7fSk7fWlmKHN1cHBvcnQubWF0Y2hlc1NlbGVjdG9yPXJuYXRpdmUudGVzdChtYXRjaGVzPWRvY0VsZW0ubWF0Y2hlc3x8ZG9jRWxlbS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGRvY0VsZW0ubW96TWF0Y2hlc1NlbGVjdG9yfHxkb2NFbGVtLm9NYXRjaGVzU2VsZWN0b3J8fGRvY0VsZW0ubXNNYXRjaGVzU2VsZWN0b3IpKXthc3NlcnQoZnVuY3Rpb24oZWwpey8vIENoZWNrIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIGRvIG1hdGNoZXNTZWxlY3RvclxuLy8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZSAoSUUgOSlcbnN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2g9bWF0Y2hlcy5jYWxsKGVsLFwiKlwiKTsvLyBUaGlzIHNob3VsZCBmYWlsIHdpdGggYW4gZXhjZXB0aW9uXG4vLyBHZWNrbyBkb2VzIG5vdCBlcnJvciwgcmV0dXJucyBmYWxzZSBpbnN0ZWFkXG5tYXRjaGVzLmNhbGwoZWwsXCJbcyE9JyddOnhcIik7cmJ1Z2d5TWF0Y2hlcy5wdXNoKFwiIT1cIixwc2V1ZG9zKTt9KTt9cmJ1Z2d5UVNBPXJidWdneVFTQS5sZW5ndGgmJm5ldyBSZWdFeHAocmJ1Z2d5UVNBLmpvaW4oXCJ8XCIpKTtyYnVnZ3lNYXRjaGVzPXJidWdneU1hdGNoZXMubGVuZ3RoJiZuZXcgUmVnRXhwKHJidWdneU1hdGNoZXMuam9pbihcInxcIikpOy8qIENvbnRhaW5zXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9oYXNDb21wYXJlPXJuYXRpdmUudGVzdChkb2NFbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKTsvLyBFbGVtZW50IGNvbnRhaW5zIGFub3RoZXJcbi8vIFB1cnBvc2VmdWxseSBzZWxmLWV4Y2x1c2l2ZVxuLy8gQXMgaW4sIGFuIGVsZW1lbnQgZG9lcyBub3QgY29udGFpbiBpdHNlbGZcbmNvbnRhaW5zPWhhc0NvbXBhcmV8fHJuYXRpdmUudGVzdChkb2NFbGVtLmNvbnRhaW5zKT9mdW5jdGlvbihhLGIpe3ZhciBhZG93bj1hLm5vZGVUeXBlPT09OT9hLmRvY3VtZW50RWxlbWVudDphLGJ1cD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1idXB8fCEhKGJ1cCYmYnVwLm5vZGVUeXBlPT09MSYmKGFkb3duLmNvbnRhaW5zP2Fkb3duLmNvbnRhaW5zKGJ1cCk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihidXApJjE2KSk7fTpmdW5jdGlvbihhLGIpe2lmKGIpe3doaWxlKGI9Yi5wYXJlbnROb2RlKXtpZihiPT09YSl7cmV0dXJuIHRydWU7fX19cmV0dXJuIGZhbHNlO307LyogU29ydGluZ1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovLy8gRG9jdW1lbnQgb3JkZXIgc29ydGluZ1xuc29ydE9yZGVyPWhhc0NvbXBhcmU/ZnVuY3Rpb24oYSxiKXsvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxuaWYoYT09PWIpe2hhc0R1cGxpY2F0ZT10cnVlO3JldHVybiAwO30vLyBTb3J0IG9uIG1ldGhvZCBleGlzdGVuY2UgaWYgb25seSBvbmUgaW5wdXQgaGFzIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uXG52YXIgY29tcGFyZT0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtpZihjb21wYXJlKXtyZXR1cm4gY29tcGFyZTt9Ly8gQ2FsY3VsYXRlIHBvc2l0aW9uIGlmIGJvdGggaW5wdXRzIGJlbG9uZyB0byB0aGUgc2FtZSBkb2N1bWVudFxuY29tcGFyZT0oYS5vd25lckRvY3VtZW50fHxhKT09PShiLm93bmVyRG9jdW1lbnR8fGIpP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik6Ly8gT3RoZXJ3aXNlIHdlIGtub3cgdGhleSBhcmUgZGlzY29ubmVjdGVkXG4xOy8vIERpc2Nvbm5lY3RlZCBub2Rlc1xuaWYoY29tcGFyZSYxfHwhc3VwcG9ydC5zb3J0RGV0YWNoZWQmJmIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSk9PT1jb21wYXJlKXsvLyBDaG9vc2UgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBpcyByZWxhdGVkIHRvIG91ciBwcmVmZXJyZWQgZG9jdW1lbnRcbmlmKGE9PT1kb2N1bWVudHx8YS5vd25lckRvY3VtZW50PT09cHJlZmVycmVkRG9jJiZjb250YWlucyhwcmVmZXJyZWREb2MsYSkpe3JldHVybi0xO31pZihiPT09ZG9jdW1lbnR8fGIub3duZXJEb2N1bWVudD09PXByZWZlcnJlZERvYyYmY29udGFpbnMocHJlZmVycmVkRG9jLGIpKXtyZXR1cm4gMTt9Ly8gTWFpbnRhaW4gb3JpZ2luYWwgb3JkZXJcbnJldHVybiBzb3J0SW5wdXQ/aW5kZXhPZihzb3J0SW5wdXQsYSktaW5kZXhPZihzb3J0SW5wdXQsYik6MDt9cmV0dXJuIGNvbXBhcmUmND8tMToxO306ZnVuY3Rpb24oYSxiKXsvLyBFeGl0IGVhcmx5IGlmIHRoZSBub2RlcyBhcmUgaWRlbnRpY2FsXG5pZihhPT09Yil7aGFzRHVwbGljYXRlPXRydWU7cmV0dXJuIDA7fXZhciBjdXIsaT0wLGF1cD1hLnBhcmVudE5vZGUsYnVwPWIucGFyZW50Tm9kZSxhcD1bYV0sYnA9W2JdOy8vIFBhcmVudGxlc3Mgbm9kZXMgYXJlIGVpdGhlciBkb2N1bWVudHMgb3IgZGlzY29ubmVjdGVkXG5pZighYXVwfHwhYnVwKXtyZXR1cm4gYT09PWRvY3VtZW50Py0xOmI9PT1kb2N1bWVudD8xOmF1cD8tMTpidXA/MTpzb3J0SW5wdXQ/aW5kZXhPZihzb3J0SW5wdXQsYSktaW5kZXhPZihzb3J0SW5wdXQsYik6MDsvLyBJZiB0aGUgbm9kZXMgYXJlIHNpYmxpbmdzLCB3ZSBjYW4gZG8gYSBxdWljayBjaGVja1xufWVsc2UgaWYoYXVwPT09YnVwKXtyZXR1cm4gc2libGluZ0NoZWNrKGEsYik7fS8vIE90aGVyd2lzZSB3ZSBuZWVkIGZ1bGwgbGlzdHMgb2YgdGhlaXIgYW5jZXN0b3JzIGZvciBjb21wYXJpc29uXG5jdXI9YTt3aGlsZShjdXI9Y3VyLnBhcmVudE5vZGUpe2FwLnVuc2hpZnQoY3VyKTt9Y3VyPWI7d2hpbGUoY3VyPWN1ci5wYXJlbnROb2RlKXticC51bnNoaWZ0KGN1cik7fS8vIFdhbGsgZG93biB0aGUgdHJlZSBsb29raW5nIGZvciBhIGRpc2NyZXBhbmN5XG53aGlsZShhcFtpXT09PWJwW2ldKXtpKys7fXJldHVybiBpPy8vIERvIGEgc2libGluZyBjaGVjayBpZiB0aGUgbm9kZXMgaGF2ZSBhIGNvbW1vbiBhbmNlc3Rvclxuc2libGluZ0NoZWNrKGFwW2ldLGJwW2ldKTovLyBPdGhlcndpc2Ugbm9kZXMgaW4gb3VyIGRvY3VtZW50IHNvcnQgZmlyc3RcbmFwW2ldPT09cHJlZmVycmVkRG9jPy0xOmJwW2ldPT09cHJlZmVycmVkRG9jPzE6MDt9O3JldHVybiBkb2N1bWVudDt9O1NpenpsZS5tYXRjaGVzPWZ1bmN0aW9uKGV4cHIsZWxlbWVudHMpe3JldHVybiBTaXp6bGUoZXhwcixudWxsLG51bGwsZWxlbWVudHMpO307U2l6emxlLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihlbGVtLGV4cHIpey8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuaWYoKGVsZW0ub3duZXJEb2N1bWVudHx8ZWxlbSkhPT1kb2N1bWVudCl7c2V0RG9jdW1lbnQoZWxlbSk7fS8vIE1ha2Ugc3VyZSB0aGF0IGF0dHJpYnV0ZSBzZWxlY3RvcnMgYXJlIHF1b3RlZFxuZXhwcj1leHByLnJlcGxhY2UocmF0dHJpYnV0ZVF1b3RlcyxcIj0nJDEnXVwiKTtpZihzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciYmZG9jdW1lbnRJc0hUTUwmJiFjb21waWxlckNhY2hlW2V4cHIrXCIgXCJdJiYoIXJidWdneU1hdGNoZXN8fCFyYnVnZ3lNYXRjaGVzLnRlc3QoZXhwcikpJiYoIXJidWdneVFTQXx8IXJidWdneVFTQS50ZXN0KGV4cHIpKSl7dHJ5e3ZhciByZXQ9bWF0Y2hlcy5jYWxsKGVsZW0sZXhwcik7Ly8gSUUgOSdzIG1hdGNoZXNTZWxlY3RvciByZXR1cm5zIGZhbHNlIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuaWYocmV0fHxzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNofHwvLyBBcyB3ZWxsLCBkaXNjb25uZWN0ZWQgbm9kZXMgYXJlIHNhaWQgdG8gYmUgaW4gYSBkb2N1bWVudFxuLy8gZnJhZ21lbnQgaW4gSUUgOVxuZWxlbS5kb2N1bWVudCYmZWxlbS5kb2N1bWVudC5ub2RlVHlwZSE9PTExKXtyZXR1cm4gcmV0O319Y2F0Y2goZSl7fX1yZXR1cm4gU2l6emxlKGV4cHIsZG9jdW1lbnQsbnVsbCxbZWxlbV0pLmxlbmd0aD4wO307U2l6emxlLmNvbnRhaW5zPWZ1bmN0aW9uKGNvbnRleHQsZWxlbSl7Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5pZigoY29udGV4dC5vd25lckRvY3VtZW50fHxjb250ZXh0KSE9PWRvY3VtZW50KXtzZXREb2N1bWVudChjb250ZXh0KTt9cmV0dXJuIGNvbnRhaW5zKGNvbnRleHQsZWxlbSk7fTtTaXp6bGUuYXR0cj1mdW5jdGlvbihlbGVtLG5hbWUpey8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuaWYoKGVsZW0ub3duZXJEb2N1bWVudHx8ZWxlbSkhPT1kb2N1bWVudCl7c2V0RG9jdW1lbnQoZWxlbSk7fXZhciBmbj1FeHByLmF0dHJIYW5kbGVbbmFtZS50b0xvd2VyQ2FzZSgpXSwvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoalF1ZXJ5ICMxMzgwNylcbnZhbD1mbiYmaGFzT3duLmNhbGwoRXhwci5hdHRySGFuZGxlLG5hbWUudG9Mb3dlckNhc2UoKSk/Zm4oZWxlbSxuYW1lLCFkb2N1bWVudElzSFRNTCk6dW5kZWZpbmVkO3JldHVybiB2YWwhPT11bmRlZmluZWQ/dmFsOnN1cHBvcnQuYXR0cmlidXRlc3x8IWRvY3VtZW50SXNIVE1MP2VsZW0uZ2V0QXR0cmlidXRlKG5hbWUpOih2YWw9ZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpKSYmdmFsLnNwZWNpZmllZD92YWwudmFsdWU6bnVsbDt9O1NpenpsZS5lc2NhcGU9ZnVuY3Rpb24oc2VsKXtyZXR1cm4oc2VsK1wiXCIpLnJlcGxhY2UocmNzc2VzY2FwZSxmY3NzZXNjYXBlKTt9O1NpenpsZS5lcnJvcj1mdW5jdGlvbihtc2cpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK21zZyk7fTsvKipcbiAqIERvY3VtZW50IHNvcnRpbmcgYW5kIHJlbW92aW5nIGR1cGxpY2F0ZXNcbiAqIEBwYXJhbSB7QXJyYXlMaWtlfSByZXN1bHRzXG4gKi9TaXp6bGUudW5pcXVlU29ydD1mdW5jdGlvbihyZXN1bHRzKXt2YXIgZWxlbSxkdXBsaWNhdGVzPVtdLGo9MCxpPTA7Ly8gVW5sZXNzIHdlICprbm93KiB3ZSBjYW4gZGV0ZWN0IGR1cGxpY2F0ZXMsIGFzc3VtZSB0aGVpciBwcmVzZW5jZVxuaGFzRHVwbGljYXRlPSFzdXBwb3J0LmRldGVjdER1cGxpY2F0ZXM7c29ydElucHV0PSFzdXBwb3J0LnNvcnRTdGFibGUmJnJlc3VsdHMuc2xpY2UoMCk7cmVzdWx0cy5zb3J0KHNvcnRPcmRlcik7aWYoaGFzRHVwbGljYXRlKXt3aGlsZShlbGVtPXJlc3VsdHNbaSsrXSl7aWYoZWxlbT09PXJlc3VsdHNbaV0pe2o9ZHVwbGljYXRlcy5wdXNoKGkpO319d2hpbGUoai0tKXtyZXN1bHRzLnNwbGljZShkdXBsaWNhdGVzW2pdLDEpO319Ly8gQ2xlYXIgaW5wdXQgYWZ0ZXIgc29ydGluZyB0byByZWxlYXNlIG9iamVjdHNcbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9wdWxsLzIyNVxuc29ydElucHV0PW51bGw7cmV0dXJuIHJlc3VsdHM7fTsvKipcbiAqIFV0aWxpdHkgZnVuY3Rpb24gZm9yIHJldHJpZXZpbmcgdGhlIHRleHQgdmFsdWUgb2YgYW4gYXJyYXkgb2YgRE9NIG5vZGVzXG4gKiBAcGFyYW0ge0FycmF5fEVsZW1lbnR9IGVsZW1cbiAqL2dldFRleHQ9U2l6emxlLmdldFRleHQ9ZnVuY3Rpb24oZWxlbSl7dmFyIG5vZGUscmV0PVwiXCIsaT0wLG5vZGVUeXBlPWVsZW0ubm9kZVR5cGU7aWYoIW5vZGVUeXBlKXsvLyBJZiBubyBub2RlVHlwZSwgdGhpcyBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheVxud2hpbGUobm9kZT1lbGVtW2krK10pey8vIERvIG5vdCB0cmF2ZXJzZSBjb21tZW50IG5vZGVzXG5yZXQrPWdldFRleHQobm9kZSk7fX1lbHNlIGlmKG5vZGVUeXBlPT09MXx8bm9kZVR5cGU9PT05fHxub2RlVHlwZT09PTExKXsvLyBVc2UgdGV4dENvbnRlbnQgZm9yIGVsZW1lbnRzXG4vLyBpbm5lclRleHQgdXNhZ2UgcmVtb3ZlZCBmb3IgY29uc2lzdGVuY3kgb2YgbmV3IGxpbmVzIChqUXVlcnkgIzExMTUzKVxuaWYodHlwZW9mIGVsZW0udGV4dENvbnRlbnQ9PT1cInN0cmluZ1wiKXtyZXR1cm4gZWxlbS50ZXh0Q29udGVudDt9ZWxzZXsvLyBUcmF2ZXJzZSBpdHMgY2hpbGRyZW5cbmZvcihlbGVtPWVsZW0uZmlyc3RDaGlsZDtlbGVtO2VsZW09ZWxlbS5uZXh0U2libGluZyl7cmV0Kz1nZXRUZXh0KGVsZW0pO319fWVsc2UgaWYobm9kZVR5cGU9PT0zfHxub2RlVHlwZT09PTQpe3JldHVybiBlbGVtLm5vZGVWYWx1ZTt9Ly8gRG8gbm90IGluY2x1ZGUgY29tbWVudCBvciBwcm9jZXNzaW5nIGluc3RydWN0aW9uIG5vZGVzXG5yZXR1cm4gcmV0O307RXhwcj1TaXp6bGUuc2VsZWN0b3JzPXsvLyBDYW4gYmUgYWRqdXN0ZWQgYnkgdGhlIHVzZXJcbmNhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzptYXJrRnVuY3Rpb24sbWF0Y2g6bWF0Y2hFeHByLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDp0cnVlfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6dHJ1ZX0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntcIkFUVFJcIjpmdW5jdGlvbiBBVFRSKG1hdGNoKXttYXRjaFsxXT1tYXRjaFsxXS5yZXBsYWNlKHJ1bmVzY2FwZSxmdW5lc2NhcGUpOy8vIE1vdmUgdGhlIGdpdmVuIHZhbHVlIHRvIG1hdGNoWzNdIHdoZXRoZXIgcXVvdGVkIG9yIHVucXVvdGVkXG5tYXRjaFszXT0obWF0Y2hbM118fG1hdGNoWzRdfHxtYXRjaFs1XXx8XCJcIikucmVwbGFjZShydW5lc2NhcGUsZnVuZXNjYXBlKTtpZihtYXRjaFsyXT09PVwifj1cIil7bWF0Y2hbM109XCIgXCIrbWF0Y2hbM10rXCIgXCI7fXJldHVybiBtYXRjaC5zbGljZSgwLDQpO30sXCJDSElMRFwiOmZ1bmN0aW9uIENISUxEKG1hdGNoKXsvKiBtYXRjaGVzIGZyb20gbWF0Y2hFeHByW1wiQ0hJTERcIl1cblx0XHRcdFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXG5cdFx0XHRcdDIgd2hhdCAoY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0MyBhcmd1bWVudCAoZXZlbnxvZGR8XFxkKnxcXGQqbihbKy1dXFxkKyk/fC4uLilcblx0XHRcdFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXG5cdFx0XHRcdDUgc2lnbiBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NiB4IG9mIHhuLWNvbXBvbmVudFxuXHRcdFx0XHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcblx0XHRcdFx0OCB5IG9mIHktY29tcG9uZW50XG5cdFx0XHQqL21hdGNoWzFdPW1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7aWYobWF0Y2hbMV0uc2xpY2UoMCwzKT09PVwibnRoXCIpey8vIG50aC0qIHJlcXVpcmVzIGFyZ3VtZW50XG5pZighbWF0Y2hbM10pe1NpenpsZS5lcnJvcihtYXRjaFswXSk7fS8vIG51bWVyaWMgeCBhbmQgeSBwYXJhbWV0ZXJzIGZvciBFeHByLmZpbHRlci5DSElMRFxuLy8gcmVtZW1iZXIgdGhhdCBmYWxzZS90cnVlIGNhc3QgcmVzcGVjdGl2ZWx5IHRvIDAvMVxubWF0Y2hbNF09KyhtYXRjaFs0XT9tYXRjaFs1XSsobWF0Y2hbNl18fDEpOjIqKG1hdGNoWzNdPT09XCJldmVuXCJ8fG1hdGNoWzNdPT09XCJvZGRcIikpO21hdGNoWzVdPSsobWF0Y2hbN10rbWF0Y2hbOF18fG1hdGNoWzNdPT09XCJvZGRcIik7Ly8gb3RoZXIgdHlwZXMgcHJvaGliaXQgYXJndW1lbnRzXG59ZWxzZSBpZihtYXRjaFszXSl7U2l6emxlLmVycm9yKG1hdGNoWzBdKTt9cmV0dXJuIG1hdGNoO30sXCJQU0VVRE9cIjpmdW5jdGlvbiBQU0VVRE8obWF0Y2gpe3ZhciBleGNlc3MsdW5xdW90ZWQ9IW1hdGNoWzZdJiZtYXRjaFsyXTtpZihtYXRjaEV4cHJbXCJDSElMRFwiXS50ZXN0KG1hdGNoWzBdKSl7cmV0dXJuIG51bGw7fS8vIEFjY2VwdCBxdW90ZWQgYXJndW1lbnRzIGFzLWlzXG5pZihtYXRjaFszXSl7bWF0Y2hbMl09bWF0Y2hbNF18fG1hdGNoWzVdfHxcIlwiOy8vIFN0cmlwIGV4Y2VzcyBjaGFyYWN0ZXJzIGZyb20gdW5xdW90ZWQgYXJndW1lbnRzXG59ZWxzZSBpZih1bnF1b3RlZCYmcnBzZXVkby50ZXN0KHVucXVvdGVkKSYmKC8vIEdldCBleGNlc3MgZnJvbSB0b2tlbml6ZSAocmVjdXJzaXZlbHkpXG5leGNlc3M9dG9rZW5pemUodW5xdW90ZWQsdHJ1ZSkpJiYoLy8gYWR2YW5jZSB0byB0aGUgbmV4dCBjbG9zaW5nIHBhcmVudGhlc2lzXG5leGNlc3M9dW5xdW90ZWQuaW5kZXhPZihcIilcIix1bnF1b3RlZC5sZW5ndGgtZXhjZXNzKS11bnF1b3RlZC5sZW5ndGgpKXsvLyBleGNlc3MgaXMgYSBuZWdhdGl2ZSBpbmRleFxubWF0Y2hbMF09bWF0Y2hbMF0uc2xpY2UoMCxleGNlc3MpO21hdGNoWzJdPXVucXVvdGVkLnNsaWNlKDAsZXhjZXNzKTt9Ly8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXG5yZXR1cm4gbWF0Y2guc2xpY2UoMCwzKTt9fSxmaWx0ZXI6e1wiVEFHXCI6ZnVuY3Rpb24gVEFHKG5vZGVOYW1lU2VsZWN0b3Ipe3ZhciBub2RlTmFtZT1ub2RlTmFtZVNlbGVjdG9yLnJlcGxhY2UocnVuZXNjYXBlLGZ1bmVzY2FwZSkudG9Mb3dlckNhc2UoKTtyZXR1cm4gbm9kZU5hbWVTZWxlY3Rvcj09PVwiKlwiP2Z1bmN0aW9uKCl7cmV0dXJuIHRydWU7fTpmdW5jdGlvbihlbGVtKXtyZXR1cm4gZWxlbS5ub2RlTmFtZSYmZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09bm9kZU5hbWU7fTt9LFwiQ0xBU1NcIjpmdW5jdGlvbiBDTEFTUyhjbGFzc05hbWUpe3ZhciBwYXR0ZXJuPWNsYXNzQ2FjaGVbY2xhc3NOYW1lK1wiIFwiXTtyZXR1cm4gcGF0dGVybnx8KHBhdHRlcm49bmV3IFJlZ0V4cChcIihefFwiK3doaXRlc3BhY2UrXCIpXCIrY2xhc3NOYW1lK1wiKFwiK3doaXRlc3BhY2UrXCJ8JClcIikpJiZjbGFzc0NhY2hlKGNsYXNzTmFtZSxmdW5jdGlvbihlbGVtKXtyZXR1cm4gcGF0dGVybi50ZXN0KHR5cGVvZiBlbGVtLmNsYXNzTmFtZT09PVwic3RyaW5nXCImJmVsZW0uY2xhc3NOYW1lfHx0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUhPT1cInVuZGVmaW5lZFwiJiZlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKTt9KTt9LFwiQVRUUlwiOmZ1bmN0aW9uIEFUVFIobmFtZSxvcGVyYXRvcixjaGVjayl7cmV0dXJuIGZ1bmN0aW9uKGVsZW0pe3ZhciByZXN1bHQ9U2l6emxlLmF0dHIoZWxlbSxuYW1lKTtpZihyZXN1bHQ9PW51bGwpe3JldHVybiBvcGVyYXRvcj09PVwiIT1cIjt9aWYoIW9wZXJhdG9yKXtyZXR1cm4gdHJ1ZTt9cmVzdWx0Kz1cIlwiO3JldHVybiBvcGVyYXRvcj09PVwiPVwiP3Jlc3VsdD09PWNoZWNrOm9wZXJhdG9yPT09XCIhPVwiP3Jlc3VsdCE9PWNoZWNrOm9wZXJhdG9yPT09XCJePVwiP2NoZWNrJiZyZXN1bHQuaW5kZXhPZihjaGVjayk9PT0wOm9wZXJhdG9yPT09XCIqPVwiP2NoZWNrJiZyZXN1bHQuaW5kZXhPZihjaGVjayk+LTE6b3BlcmF0b3I9PT1cIiQ9XCI/Y2hlY2smJnJlc3VsdC5zbGljZSgtY2hlY2subGVuZ3RoKT09PWNoZWNrOm9wZXJhdG9yPT09XCJ+PVwiPyhcIiBcIityZXN1bHQucmVwbGFjZShyd2hpdGVzcGFjZSxcIiBcIikrXCIgXCIpLmluZGV4T2YoY2hlY2spPi0xOm9wZXJhdG9yPT09XCJ8PVwiP3Jlc3VsdD09PWNoZWNrfHxyZXN1bHQuc2xpY2UoMCxjaGVjay5sZW5ndGgrMSk9PT1jaGVjaytcIi1cIjpmYWxzZTt9O30sXCJDSElMRFwiOmZ1bmN0aW9uIENISUxEKHR5cGUsd2hhdCxhcmd1bWVudCxmaXJzdCxsYXN0KXt2YXIgc2ltcGxlPXR5cGUuc2xpY2UoMCwzKSE9PVwibnRoXCIsZm9yd2FyZD10eXBlLnNsaWNlKC00KSE9PVwibGFzdFwiLG9mVHlwZT13aGF0PT09XCJvZi10eXBlXCI7cmV0dXJuIGZpcnN0PT09MSYmbGFzdD09PTA/Ly8gU2hvcnRjdXQgZm9yIDpudGgtKihuKVxuZnVuY3Rpb24oZWxlbSl7cmV0dXJuISFlbGVtLnBhcmVudE5vZGU7fTpmdW5jdGlvbihlbGVtLGNvbnRleHQseG1sKXt2YXIgY2FjaGUsdW5pcXVlQ2FjaGUsb3V0ZXJDYWNoZSxub2RlLG5vZGVJbmRleCxzdGFydCxkaXI9c2ltcGxlIT09Zm9yd2FyZD9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixwYXJlbnQ9ZWxlbS5wYXJlbnROb2RlLG5hbWU9b2ZUeXBlJiZlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksdXNlQ2FjaGU9IXhtbCYmIW9mVHlwZSxkaWZmPWZhbHNlO2lmKHBhcmVudCl7Ly8gOihmaXJzdHxsYXN0fG9ubHkpLShjaGlsZHxvZi10eXBlKVxuaWYoc2ltcGxlKXt3aGlsZShkaXIpe25vZGU9ZWxlbTt3aGlsZShub2RlPW5vZGVbZGlyXSl7aWYob2ZUeXBlP25vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PW5hbWU6bm9kZS5ub2RlVHlwZT09PTEpe3JldHVybiBmYWxzZTt9fS8vIFJldmVyc2UgZGlyZWN0aW9uIGZvciA6b25seS0qIChpZiB3ZSBoYXZlbid0IHlldCBkb25lIHNvKVxuc3RhcnQ9ZGlyPXR5cGU9PT1cIm9ubHlcIiYmIXN0YXJ0JiZcIm5leHRTaWJsaW5nXCI7fXJldHVybiB0cnVlO31zdGFydD1bZm9yd2FyZD9wYXJlbnQuZmlyc3RDaGlsZDpwYXJlbnQubGFzdENoaWxkXTsvLyBub24teG1sIDpudGgtY2hpbGQoLi4uKSBzdG9yZXMgY2FjaGUgZGF0YSBvbiBgcGFyZW50YFxuaWYoZm9yd2FyZCYmdXNlQ2FjaGUpey8vIFNlZWsgYGVsZW1gIGZyb20gYSBwcmV2aW91c2x5LWNhY2hlZCBpbmRleFxuLy8gLi4uaW4gYSBnemlwLWZyaWVuZGx5IHdheVxubm9kZT1wYXJlbnQ7b3V0ZXJDYWNoZT1ub2RlW2V4cGFuZG9dfHwobm9kZVtleHBhbmRvXT17fSk7Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuLy8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG51bmlxdWVDYWNoZT1vdXRlckNhY2hlW25vZGUudW5pcXVlSURdfHwob3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXT17fSk7Y2FjaGU9dW5pcXVlQ2FjaGVbdHlwZV18fFtdO25vZGVJbmRleD1jYWNoZVswXT09PWRpcnJ1bnMmJmNhY2hlWzFdO2RpZmY9bm9kZUluZGV4JiZjYWNoZVsyXTtub2RlPW5vZGVJbmRleCYmcGFyZW50LmNoaWxkTm9kZXNbbm9kZUluZGV4XTt3aGlsZShub2RlPSsrbm9kZUluZGV4JiZub2RlJiZub2RlW2Rpcl18fCgvLyBGYWxsYmFjayB0byBzZWVraW5nIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuZGlmZj1ub2RlSW5kZXg9MCl8fHN0YXJ0LnBvcCgpKXsvLyBXaGVuIGZvdW5kLCBjYWNoZSBpbmRleGVzIG9uIGBwYXJlbnRgIGFuZCBicmVha1xuaWYobm9kZS5ub2RlVHlwZT09PTEmJisrZGlmZiYmbm9kZT09PWVsZW0pe3VuaXF1ZUNhY2hlW3R5cGVdPVtkaXJydW5zLG5vZGVJbmRleCxkaWZmXTticmVhazt9fX1lbHNley8vIFVzZSBwcmV2aW91c2x5LWNhY2hlZCBlbGVtZW50IGluZGV4IGlmIGF2YWlsYWJsZVxuaWYodXNlQ2FjaGUpey8vIC4uLmluIGEgZ3ppcC1mcmllbmRseSB3YXlcbm5vZGU9ZWxlbTtvdXRlckNhY2hlPW5vZGVbZXhwYW5kb118fChub2RlW2V4cGFuZG9dPXt9KTsvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG4vLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcbnVuaXF1ZUNhY2hlPW91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF18fChvdXRlckNhY2hlW25vZGUudW5pcXVlSURdPXt9KTtjYWNoZT11bmlxdWVDYWNoZVt0eXBlXXx8W107bm9kZUluZGV4PWNhY2hlWzBdPT09ZGlycnVucyYmY2FjaGVbMV07ZGlmZj1ub2RlSW5kZXg7fS8vIHhtbCA6bnRoLWNoaWxkKC4uLilcbi8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcbmlmKGRpZmY9PT1mYWxzZSl7Ly8gVXNlIHRoZSBzYW1lIGxvb3AgYXMgYWJvdmUgdG8gc2VlayBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcbndoaWxlKG5vZGU9Kytub2RlSW5kZXgmJm5vZGUmJm5vZGVbZGlyXXx8KGRpZmY9bm9kZUluZGV4PTApfHxzdGFydC5wb3AoKSl7aWYoKG9mVHlwZT9ub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1uYW1lOm5vZGUubm9kZVR5cGU9PT0xKSYmKytkaWZmKXsvLyBDYWNoZSB0aGUgaW5kZXggb2YgZWFjaCBlbmNvdW50ZXJlZCBlbGVtZW50XG5pZih1c2VDYWNoZSl7b3V0ZXJDYWNoZT1ub2RlW2V4cGFuZG9dfHwobm9kZVtleHBhbmRvXT17fSk7Ly8gU3VwcG9ydDogSUUgPDkgb25seVxuLy8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG51bmlxdWVDYWNoZT1vdXRlckNhY2hlW25vZGUudW5pcXVlSURdfHwob3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXT17fSk7dW5pcXVlQ2FjaGVbdHlwZV09W2RpcnJ1bnMsZGlmZl07fWlmKG5vZGU9PT1lbGVtKXticmVhazt9fX19fS8vIEluY29ycG9yYXRlIHRoZSBvZmZzZXQsIHRoZW4gY2hlY2sgYWdhaW5zdCBjeWNsZSBzaXplXG5kaWZmLT1sYXN0O3JldHVybiBkaWZmPT09Zmlyc3R8fGRpZmYlZmlyc3Q9PT0wJiZkaWZmL2ZpcnN0Pj0wO319O30sXCJQU0VVRE9cIjpmdW5jdGlvbiBQU0VVRE8ocHNldWRvLGFyZ3VtZW50KXsvLyBwc2V1ZG8tY2xhc3MgbmFtZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmVcbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jcHNldWRvLWNsYXNzZXNcbi8vIFByaW9yaXRpemUgYnkgY2FzZSBzZW5zaXRpdml0eSBpbiBjYXNlIGN1c3RvbSBwc2V1ZG9zIGFyZSBhZGRlZCB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJzXG4vLyBSZW1lbWJlciB0aGF0IHNldEZpbHRlcnMgaW5oZXJpdHMgZnJvbSBwc2V1ZG9zXG52YXIgYXJncyxmbj1FeHByLnBzZXVkb3NbcHNldWRvXXx8RXhwci5zZXRGaWx0ZXJzW3BzZXVkby50b0xvd2VyQ2FzZSgpXXx8U2l6emxlLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIitwc2V1ZG8pOy8vIFRoZSB1c2VyIG1heSB1c2UgY3JlYXRlUHNldWRvIHRvIGluZGljYXRlIHRoYXRcbi8vIGFyZ3VtZW50cyBhcmUgbmVlZGVkIHRvIGNyZWF0ZSB0aGUgZmlsdGVyIGZ1bmN0aW9uXG4vLyBqdXN0IGFzIFNpenpsZSBkb2VzXG5pZihmbltleHBhbmRvXSl7cmV0dXJuIGZuKGFyZ3VtZW50KTt9Ly8gQnV0IG1haW50YWluIHN1cHBvcnQgZm9yIG9sZCBzaWduYXR1cmVzXG5pZihmbi5sZW5ndGg+MSl7YXJncz1bcHNldWRvLHBzZXVkbyxcIlwiLGFyZ3VtZW50XTtyZXR1cm4gRXhwci5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KHBzZXVkby50b0xvd2VyQ2FzZSgpKT9tYXJrRnVuY3Rpb24oZnVuY3Rpb24oc2VlZCxtYXRjaGVzKXt2YXIgaWR4LG1hdGNoZWQ9Zm4oc2VlZCxhcmd1bWVudCksaT1tYXRjaGVkLmxlbmd0aDt3aGlsZShpLS0pe2lkeD1pbmRleE9mKHNlZWQsbWF0Y2hlZFtpXSk7c2VlZFtpZHhdPSEobWF0Y2hlc1tpZHhdPW1hdGNoZWRbaV0pO319KTpmdW5jdGlvbihlbGVtKXtyZXR1cm4gZm4oZWxlbSwwLGFyZ3MpO307fXJldHVybiBmbjt9fSxwc2V1ZG9zOnsvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3Ncblwibm90XCI6bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKHNlbGVjdG9yKXsvLyBUcmltIHRoZSBzZWxlY3RvciBwYXNzZWQgdG8gY29tcGlsZVxuLy8gdG8gYXZvaWQgdHJlYXRpbmcgbGVhZGluZyBhbmQgdHJhaWxpbmdcbi8vIHNwYWNlcyBhcyBjb21iaW5hdG9yc1xudmFyIGlucHV0PVtdLHJlc3VsdHM9W10sbWF0Y2hlcj1jb21waWxlKHNlbGVjdG9yLnJlcGxhY2UocnRyaW0sXCIkMVwiKSk7cmV0dXJuIG1hdGNoZXJbZXhwYW5kb10/bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKHNlZWQsbWF0Y2hlcyxjb250ZXh0LHhtbCl7dmFyIGVsZW0sdW5tYXRjaGVkPW1hdGNoZXIoc2VlZCxudWxsLHhtbCxbXSksaT1zZWVkLmxlbmd0aDsvLyBNYXRjaCBlbGVtZW50cyB1bm1hdGNoZWQgYnkgYG1hdGNoZXJgXG53aGlsZShpLS0pe2lmKGVsZW09dW5tYXRjaGVkW2ldKXtzZWVkW2ldPSEobWF0Y2hlc1tpXT1lbGVtKTt9fX0pOmZ1bmN0aW9uKGVsZW0sY29udGV4dCx4bWwpe2lucHV0WzBdPWVsZW07bWF0Y2hlcihpbnB1dCxudWxsLHhtbCxyZXN1bHRzKTsvLyBEb24ndCBrZWVwIHRoZSBlbGVtZW50IChpc3N1ZSAjMjk5KVxuaW5wdXRbMF09bnVsbDtyZXR1cm4hcmVzdWx0cy5wb3AoKTt9O30pLFwiaGFzXCI6bWFya0Z1bmN0aW9uKGZ1bmN0aW9uKHNlbGVjdG9yKXtyZXR1cm4gZnVuY3Rpb24oZWxlbSl7cmV0dXJuIFNpenpsZShzZWxlY3RvcixlbGVtKS5sZW5ndGg+MDt9O30pLFwiY29udGFpbnNcIjptYXJrRnVuY3Rpb24oZnVuY3Rpb24odGV4dCl7dGV4dD10ZXh0LnJlcGxhY2UocnVuZXNjYXBlLGZ1bmVzY2FwZSk7cmV0dXJuIGZ1bmN0aW9uKGVsZW0pe3JldHVybihlbGVtLnRleHRDb250ZW50fHxlbGVtLmlubmVyVGV4dHx8Z2V0VGV4dChlbGVtKSkuaW5kZXhPZih0ZXh0KT4tMTt9O30pLC8vIFwiV2hldGhlciBhbiBlbGVtZW50IGlzIHJlcHJlc2VudGVkIGJ5IGEgOmxhbmcoKSBzZWxlY3RvclxuLy8gaXMgYmFzZWQgc29sZWx5IG9uIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWVcbi8vIGJlaW5nIGVxdWFsIHRvIHRoZSBpZGVudGlmaWVyIEMsXG4vLyBvciBiZWdpbm5pbmcgd2l0aCB0aGUgaWRlbnRpZmllciBDIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IFwiLVwiLlxuLy8gVGhlIG1hdGNoaW5nIG9mIEMgYWdhaW5zdCB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlIGlzIHBlcmZvcm1lZCBjYXNlLWluc2Vuc2l0aXZlbHkuXG4vLyBUaGUgaWRlbnRpZmllciBDIGRvZXMgbm90IGhhdmUgdG8gYmUgYSB2YWxpZCBsYW5ndWFnZSBuYW1lLlwiXG4vLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2xhbmctcHNldWRvXG5cImxhbmdcIjptYXJrRnVuY3Rpb24oZnVuY3Rpb24obGFuZyl7Ly8gbGFuZyB2YWx1ZSBtdXN0IGJlIGEgdmFsaWQgaWRlbnRpZmllclxuaWYoIXJpZGVudGlmaWVyLnRlc3QobGFuZ3x8XCJcIikpe1NpenpsZS5lcnJvcihcInVuc3VwcG9ydGVkIGxhbmc6IFwiK2xhbmcpO31sYW5nPWxhbmcucmVwbGFjZShydW5lc2NhcGUsZnVuZXNjYXBlKS50b0xvd2VyQ2FzZSgpO3JldHVybiBmdW5jdGlvbihlbGVtKXt2YXIgZWxlbUxhbmc7ZG97aWYoZWxlbUxhbmc9ZG9jdW1lbnRJc0hUTUw/ZWxlbS5sYW5nOmVsZW0uZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGVsZW0uZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSl7ZWxlbUxhbmc9ZWxlbUxhbmcudG9Mb3dlckNhc2UoKTtyZXR1cm4gZWxlbUxhbmc9PT1sYW5nfHxlbGVtTGFuZy5pbmRleE9mKGxhbmcrXCItXCIpPT09MDt9fXdoaWxlKChlbGVtPWVsZW0ucGFyZW50Tm9kZSkmJmVsZW0ubm9kZVR5cGU9PT0xKTtyZXR1cm4gZmFsc2U7fTt9KSwvLyBNaXNjZWxsYW5lb3VzXG5cInRhcmdldFwiOmZ1bmN0aW9uIHRhcmdldChlbGVtKXt2YXIgaGFzaD13aW5kb3cubG9jYXRpb24mJndpbmRvdy5sb2NhdGlvbi5oYXNoO3JldHVybiBoYXNoJiZoYXNoLnNsaWNlKDEpPT09ZWxlbS5pZDt9LFwicm9vdFwiOmZ1bmN0aW9uIHJvb3QoZWxlbSl7cmV0dXJuIGVsZW09PT1kb2NFbGVtO30sXCJmb2N1c1wiOmZ1bmN0aW9uIGZvY3VzKGVsZW0pe3JldHVybiBlbGVtPT09ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCYmKCFkb2N1bWVudC5oYXNGb2N1c3x8ZG9jdW1lbnQuaGFzRm9jdXMoKSkmJiEhKGVsZW0udHlwZXx8ZWxlbS5ocmVmfHx+ZWxlbS50YWJJbmRleCk7fSwvLyBCb29sZWFuIHByb3BlcnRpZXNcblwiZW5hYmxlZFwiOmNyZWF0ZURpc2FibGVkUHNldWRvKGZhbHNlKSxcImRpc2FibGVkXCI6Y3JlYXRlRGlzYWJsZWRQc2V1ZG8odHJ1ZSksXCJjaGVja2VkXCI6ZnVuY3Rpb24gY2hlY2tlZChlbGVtKXsvLyBJbiBDU1MzLCA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIGJvdGggY2hlY2tlZCBhbmQgc2VsZWN0ZWQgZWxlbWVudHNcbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXG52YXIgbm9kZU5hbWU9ZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBub2RlTmFtZT09PVwiaW5wdXRcIiYmISFlbGVtLmNoZWNrZWR8fG5vZGVOYW1lPT09XCJvcHRpb25cIiYmISFlbGVtLnNlbGVjdGVkO30sXCJzZWxlY3RlZFwiOmZ1bmN0aW9uIHNlbGVjdGVkKGVsZW0pey8vIEFjY2Vzc2luZyB0aGlzIHByb3BlcnR5IG1ha2VzIHNlbGVjdGVkLWJ5LWRlZmF1bHRcbi8vIG9wdGlvbnMgaW4gU2FmYXJpIHdvcmsgcHJvcGVybHlcbmlmKGVsZW0ucGFyZW50Tm9kZSl7ZWxlbS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7fXJldHVybiBlbGVtLnNlbGVjdGVkPT09dHJ1ZTt9LC8vIENvbnRlbnRzXG5cImVtcHR5XCI6ZnVuY3Rpb24gZW1wdHkoZWxlbSl7Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNlbXB0eS1wc2V1ZG9cbi8vIDplbXB0eSBpcyBuZWdhdGVkIGJ5IGVsZW1lbnQgKDEpIG9yIGNvbnRlbnQgbm9kZXMgKHRleHQ6IDM7IGNkYXRhOiA0OyBlbnRpdHkgcmVmOiA1KSxcbi8vICAgYnV0IG5vdCBieSBvdGhlcnMgKGNvbW1lbnQ6IDg7IHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb246IDc7IGV0Yy4pXG4vLyBub2RlVHlwZSA8IDYgd29ya3MgYmVjYXVzZSBhdHRyaWJ1dGVzICgyKSBkbyBub3QgYXBwZWFyIGFzIGNoaWxkcmVuXG5mb3IoZWxlbT1lbGVtLmZpcnN0Q2hpbGQ7ZWxlbTtlbGVtPWVsZW0ubmV4dFNpYmxpbmcpe2lmKGVsZW0ubm9kZVR5cGU8Nil7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fSxcInBhcmVudFwiOmZ1bmN0aW9uIHBhcmVudChlbGVtKXtyZXR1cm4hRXhwci5wc2V1ZG9zW1wiZW1wdHlcIl0oZWxlbSk7fSwvLyBFbGVtZW50L2lucHV0IHR5cGVzXG5cImhlYWRlclwiOmZ1bmN0aW9uIGhlYWRlcihlbGVtKXtyZXR1cm4gcmhlYWRlci50ZXN0KGVsZW0ubm9kZU5hbWUpO30sXCJpbnB1dFwiOmZ1bmN0aW9uIGlucHV0KGVsZW0pe3JldHVybiByaW5wdXRzLnRlc3QoZWxlbS5ub2RlTmFtZSk7fSxcImJ1dHRvblwiOmZ1bmN0aW9uIGJ1dHRvbihlbGVtKXt2YXIgbmFtZT1lbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIG5hbWU9PT1cImlucHV0XCImJmVsZW0udHlwZT09PVwiYnV0dG9uXCJ8fG5hbWU9PT1cImJ1dHRvblwiO30sXCJ0ZXh0XCI6ZnVuY3Rpb24gdGV4dChlbGVtKXt2YXIgYXR0cjtyZXR1cm4gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09XCJpbnB1dFwiJiZlbGVtLnR5cGU9PT1cInRleHRcIiYmKC8vIFN1cHBvcnQ6IElFPDhcbi8vIE5ldyBIVE1MNSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuLCBcInNlYXJjaFwiKSBhcHBlYXIgd2l0aCBlbGVtLnR5cGUgPT09IFwidGV4dFwiXG4oYXR0cj1lbGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikpPT1udWxsfHxhdHRyLnRvTG93ZXJDYXNlKCk9PT1cInRleHRcIik7fSwvLyBQb3NpdGlvbi1pbi1jb2xsZWN0aW9uXG5cImZpcnN0XCI6Y3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbigpe3JldHVyblswXTt9KSxcImxhc3RcIjpjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKG1hdGNoSW5kZXhlcyxsZW5ndGgpe3JldHVybltsZW5ndGgtMV07fSksXCJlcVwiOmNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24obWF0Y2hJbmRleGVzLGxlbmd0aCxhcmd1bWVudCl7cmV0dXJuW2FyZ3VtZW50PDA/YXJndW1lbnQrbGVuZ3RoOmFyZ3VtZW50XTt9KSxcImV2ZW5cIjpjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKG1hdGNoSW5kZXhlcyxsZW5ndGgpe3ZhciBpPTA7Zm9yKDtpPGxlbmd0aDtpKz0yKXttYXRjaEluZGV4ZXMucHVzaChpKTt9cmV0dXJuIG1hdGNoSW5kZXhlczt9KSxcIm9kZFwiOmNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24obWF0Y2hJbmRleGVzLGxlbmd0aCl7dmFyIGk9MTtmb3IoO2k8bGVuZ3RoO2krPTIpe21hdGNoSW5kZXhlcy5wdXNoKGkpO31yZXR1cm4gbWF0Y2hJbmRleGVzO30pLFwibHRcIjpjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKG1hdGNoSW5kZXhlcyxsZW5ndGgsYXJndW1lbnQpe3ZhciBpPWFyZ3VtZW50PDA/YXJndW1lbnQrbGVuZ3RoOmFyZ3VtZW50O2Zvcig7LS1pPj0wOyl7bWF0Y2hJbmRleGVzLnB1c2goaSk7fXJldHVybiBtYXRjaEluZGV4ZXM7fSksXCJndFwiOmNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24obWF0Y2hJbmRleGVzLGxlbmd0aCxhcmd1bWVudCl7dmFyIGk9YXJndW1lbnQ8MD9hcmd1bWVudCtsZW5ndGg6YXJndW1lbnQ7Zm9yKDsrK2k8bGVuZ3RoOyl7bWF0Y2hJbmRleGVzLnB1c2goaSk7fXJldHVybiBtYXRjaEluZGV4ZXM7fSl9fTtFeHByLnBzZXVkb3NbXCJudGhcIl09RXhwci5wc2V1ZG9zW1wiZXFcIl07Ly8gQWRkIGJ1dHRvbi9pbnB1dCB0eXBlIHBzZXVkb3NcbmZvcihpIGlue3JhZGlvOnRydWUsY2hlY2tib3g6dHJ1ZSxmaWxlOnRydWUscGFzc3dvcmQ6dHJ1ZSxpbWFnZTp0cnVlfSl7RXhwci5wc2V1ZG9zW2ldPWNyZWF0ZUlucHV0UHNldWRvKGkpO31mb3IoaSBpbntzdWJtaXQ6dHJ1ZSxyZXNldDp0cnVlfSl7RXhwci5wc2V1ZG9zW2ldPWNyZWF0ZUJ1dHRvblBzZXVkbyhpKTt9Ly8gRWFzeSBBUEkgZm9yIGNyZWF0aW5nIG5ldyBzZXRGaWx0ZXJzXG5mdW5jdGlvbiBzZXRGaWx0ZXJzKCl7fXNldEZpbHRlcnMucHJvdG90eXBlPUV4cHIuZmlsdGVycz1FeHByLnBzZXVkb3M7RXhwci5zZXRGaWx0ZXJzPW5ldyBzZXRGaWx0ZXJzKCk7dG9rZW5pemU9U2l6emxlLnRva2VuaXplPWZ1bmN0aW9uKHNlbGVjdG9yLHBhcnNlT25seSl7dmFyIG1hdGNoZWQsbWF0Y2gsdG9rZW5zLHR5cGUsc29GYXIsZ3JvdXBzLHByZUZpbHRlcnMsY2FjaGVkPXRva2VuQ2FjaGVbc2VsZWN0b3IrXCIgXCJdO2lmKGNhY2hlZCl7cmV0dXJuIHBhcnNlT25seT8wOmNhY2hlZC5zbGljZSgwKTt9c29GYXI9c2VsZWN0b3I7Z3JvdXBzPVtdO3ByZUZpbHRlcnM9RXhwci5wcmVGaWx0ZXI7d2hpbGUoc29GYXIpey8vIENvbW1hIGFuZCBmaXJzdCBydW5cbmlmKCFtYXRjaGVkfHwobWF0Y2g9cmNvbW1hLmV4ZWMoc29GYXIpKSl7aWYobWF0Y2gpey8vIERvbid0IGNvbnN1bWUgdHJhaWxpbmcgY29tbWFzIGFzIHZhbGlkXG5zb0Zhcj1zb0Zhci5zbGljZShtYXRjaFswXS5sZW5ndGgpfHxzb0Zhcjt9Z3JvdXBzLnB1c2godG9rZW5zPVtdKTt9bWF0Y2hlZD1mYWxzZTsvLyBDb21iaW5hdG9yc1xuaWYobWF0Y2g9cmNvbWJpbmF0b3JzLmV4ZWMoc29GYXIpKXttYXRjaGVkPW1hdGNoLnNoaWZ0KCk7dG9rZW5zLnB1c2goe3ZhbHVlOm1hdGNoZWQsLy8gQ2FzdCBkZXNjZW5kYW50IGNvbWJpbmF0b3JzIHRvIHNwYWNlXG50eXBlOm1hdGNoWzBdLnJlcGxhY2UocnRyaW0sXCIgXCIpfSk7c29GYXI9c29GYXIuc2xpY2UobWF0Y2hlZC5sZW5ndGgpO30vLyBGaWx0ZXJzXG5mb3IodHlwZSBpbiBFeHByLmZpbHRlcil7aWYoKG1hdGNoPW1hdGNoRXhwclt0eXBlXS5leGVjKHNvRmFyKSkmJighcHJlRmlsdGVyc1t0eXBlXXx8KG1hdGNoPXByZUZpbHRlcnNbdHlwZV0obWF0Y2gpKSkpe21hdGNoZWQ9bWF0Y2guc2hpZnQoKTt0b2tlbnMucHVzaCh7dmFsdWU6bWF0Y2hlZCx0eXBlOnR5cGUsbWF0Y2hlczptYXRjaH0pO3NvRmFyPXNvRmFyLnNsaWNlKG1hdGNoZWQubGVuZ3RoKTt9fWlmKCFtYXRjaGVkKXticmVhazt9fS8vIFJldHVybiB0aGUgbGVuZ3RoIG9mIHRoZSBpbnZhbGlkIGV4Y2Vzc1xuLy8gaWYgd2UncmUganVzdCBwYXJzaW5nXG4vLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yIG9yIHJldHVybiB0b2tlbnNcbnJldHVybiBwYXJzZU9ubHk/c29GYXIubGVuZ3RoOnNvRmFyP1NpenpsZS5lcnJvcihzZWxlY3Rvcik6Ly8gQ2FjaGUgdGhlIHRva2Vuc1xudG9rZW5DYWNoZShzZWxlY3Rvcixncm91cHMpLnNsaWNlKDApO307ZnVuY3Rpb24gdG9TZWxlY3Rvcih0b2tlbnMpe3ZhciBpPTAsbGVuPXRva2Vucy5sZW5ndGgsc2VsZWN0b3I9XCJcIjtmb3IoO2k8bGVuO2krKyl7c2VsZWN0b3IrPXRva2Vuc1tpXS52YWx1ZTt9cmV0dXJuIHNlbGVjdG9yO31mdW5jdGlvbiBhZGRDb21iaW5hdG9yKG1hdGNoZXIsY29tYmluYXRvcixiYXNlKXt2YXIgZGlyPWNvbWJpbmF0b3IuZGlyLHNraXA9Y29tYmluYXRvci5uZXh0LGtleT1za2lwfHxkaXIsY2hlY2tOb25FbGVtZW50cz1iYXNlJiZrZXk9PT1cInBhcmVudE5vZGVcIixkb25lTmFtZT1kb25lKys7cmV0dXJuIGNvbWJpbmF0b3IuZmlyc3Q/Ly8gQ2hlY2sgYWdhaW5zdCBjbG9zZXN0IGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50XG5mdW5jdGlvbihlbGVtLGNvbnRleHQseG1sKXt3aGlsZShlbGVtPWVsZW1bZGlyXSl7aWYoZWxlbS5ub2RlVHlwZT09PTF8fGNoZWNrTm9uRWxlbWVudHMpe3JldHVybiBtYXRjaGVyKGVsZW0sY29udGV4dCx4bWwpO319cmV0dXJuIGZhbHNlO306Ly8gQ2hlY2sgYWdhaW5zdCBhbGwgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRzXG5mdW5jdGlvbihlbGVtLGNvbnRleHQseG1sKXt2YXIgb2xkQ2FjaGUsdW5pcXVlQ2FjaGUsb3V0ZXJDYWNoZSxuZXdDYWNoZT1bZGlycnVucyxkb25lTmFtZV07Ly8gV2UgY2FuJ3Qgc2V0IGFyYml0cmFyeSBkYXRhIG9uIFhNTCBub2Rlcywgc28gdGhleSBkb24ndCBiZW5lZml0IGZyb20gY29tYmluYXRvciBjYWNoaW5nXG5pZih4bWwpe3doaWxlKGVsZW09ZWxlbVtkaXJdKXtpZihlbGVtLm5vZGVUeXBlPT09MXx8Y2hlY2tOb25FbGVtZW50cyl7aWYobWF0Y2hlcihlbGVtLGNvbnRleHQseG1sKSl7cmV0dXJuIHRydWU7fX19fWVsc2V7d2hpbGUoZWxlbT1lbGVtW2Rpcl0pe2lmKGVsZW0ubm9kZVR5cGU9PT0xfHxjaGVja05vbkVsZW1lbnRzKXtvdXRlckNhY2hlPWVsZW1bZXhwYW5kb118fChlbGVtW2V4cGFuZG9dPXt9KTsvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG4vLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcbnVuaXF1ZUNhY2hlPW91dGVyQ2FjaGVbZWxlbS51bmlxdWVJRF18fChvdXRlckNhY2hlW2VsZW0udW5pcXVlSURdPXt9KTtpZihza2lwJiZza2lwPT09ZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXtlbGVtPWVsZW1bZGlyXXx8ZWxlbTt9ZWxzZSBpZigob2xkQ2FjaGU9dW5pcXVlQ2FjaGVba2V5XSkmJm9sZENhY2hlWzBdPT09ZGlycnVucyYmb2xkQ2FjaGVbMV09PT1kb25lTmFtZSl7Ly8gQXNzaWduIHRvIG5ld0NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcbnJldHVybiBuZXdDYWNoZVsyXT1vbGRDYWNoZVsyXTt9ZWxzZXsvLyBSZXVzZSBuZXdjYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG51bmlxdWVDYWNoZVtrZXldPW5ld0NhY2hlOy8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuaWYobmV3Q2FjaGVbMl09bWF0Y2hlcihlbGVtLGNvbnRleHQseG1sKSl7cmV0dXJuIHRydWU7fX19fX1yZXR1cm4gZmFsc2U7fTt9ZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpe3JldHVybiBtYXRjaGVycy5sZW5ndGg+MT9mdW5jdGlvbihlbGVtLGNvbnRleHQseG1sKXt2YXIgaT1tYXRjaGVycy5sZW5ndGg7d2hpbGUoaS0tKXtpZighbWF0Y2hlcnNbaV0oZWxlbSxjb250ZXh0LHhtbCkpe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO306bWF0Y2hlcnNbMF07fWZ1bmN0aW9uIG11bHRpcGxlQ29udGV4dHMoc2VsZWN0b3IsY29udGV4dHMscmVzdWx0cyl7dmFyIGk9MCxsZW49Y29udGV4dHMubGVuZ3RoO2Zvcig7aTxsZW47aSsrKXtTaXp6bGUoc2VsZWN0b3IsY29udGV4dHNbaV0scmVzdWx0cyk7fXJldHVybiByZXN1bHRzO31mdW5jdGlvbiBjb25kZW5zZSh1bm1hdGNoZWQsbWFwLGZpbHRlcixjb250ZXh0LHhtbCl7dmFyIGVsZW0sbmV3VW5tYXRjaGVkPVtdLGk9MCxsZW49dW5tYXRjaGVkLmxlbmd0aCxtYXBwZWQ9bWFwIT1udWxsO2Zvcig7aTxsZW47aSsrKXtpZihlbGVtPXVubWF0Y2hlZFtpXSl7aWYoIWZpbHRlcnx8ZmlsdGVyKGVsZW0sY29udGV4dCx4bWwpKXtuZXdVbm1hdGNoZWQucHVzaChlbGVtKTtpZihtYXBwZWQpe21hcC5wdXNoKGkpO319fX1yZXR1cm4gbmV3VW5tYXRjaGVkO31mdW5jdGlvbiBzZXRNYXRjaGVyKHByZUZpbHRlcixzZWxlY3RvcixtYXRjaGVyLHBvc3RGaWx0ZXIscG9zdEZpbmRlcixwb3N0U2VsZWN0b3Ipe2lmKHBvc3RGaWx0ZXImJiFwb3N0RmlsdGVyW2V4cGFuZG9dKXtwb3N0RmlsdGVyPXNldE1hdGNoZXIocG9zdEZpbHRlcik7fWlmKHBvc3RGaW5kZXImJiFwb3N0RmluZGVyW2V4cGFuZG9dKXtwb3N0RmluZGVyPXNldE1hdGNoZXIocG9zdEZpbmRlcixwb3N0U2VsZWN0b3IpO31yZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKHNlZWQscmVzdWx0cyxjb250ZXh0LHhtbCl7dmFyIHRlbXAsaSxlbGVtLHByZU1hcD1bXSxwb3N0TWFwPVtdLHByZWV4aXN0aW5nPXJlc3VsdHMubGVuZ3RoLC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG5lbGVtcz1zZWVkfHxtdWx0aXBsZUNvbnRleHRzKHNlbGVjdG9yfHxcIipcIixjb250ZXh0Lm5vZGVUeXBlP1tjb250ZXh0XTpjb250ZXh0LFtdKSwvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cbm1hdGNoZXJJbj1wcmVGaWx0ZXImJihzZWVkfHwhc2VsZWN0b3IpP2NvbmRlbnNlKGVsZW1zLHByZU1hcCxwcmVGaWx0ZXIsY29udGV4dCx4bWwpOmVsZW1zLG1hdGNoZXJPdXQ9bWF0Y2hlcj8vLyBJZiB3ZSBoYXZlIGEgcG9zdEZpbmRlciwgb3IgZmlsdGVyZWQgc2VlZCwgb3Igbm9uLXNlZWQgcG9zdEZpbHRlciBvciBwcmVleGlzdGluZyByZXN1bHRzLFxucG9zdEZpbmRlcnx8KHNlZWQ/cHJlRmlsdGVyOnByZWV4aXN0aW5nfHxwb3N0RmlsdGVyKT8vLyAuLi5pbnRlcm1lZGlhdGUgcHJvY2Vzc2luZyBpcyBuZWNlc3NhcnlcbltdOi8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxucmVzdWx0czptYXRjaGVySW47Ly8gRmluZCBwcmltYXJ5IG1hdGNoZXNcbmlmKG1hdGNoZXIpe21hdGNoZXIobWF0Y2hlckluLG1hdGNoZXJPdXQsY29udGV4dCx4bWwpO30vLyBBcHBseSBwb3N0RmlsdGVyXG5pZihwb3N0RmlsdGVyKXt0ZW1wPWNvbmRlbnNlKG1hdGNoZXJPdXQscG9zdE1hcCk7cG9zdEZpbHRlcih0ZW1wLFtdLGNvbnRleHQseG1sKTsvLyBVbi1tYXRjaCBmYWlsaW5nIGVsZW1lbnRzIGJ5IG1vdmluZyB0aGVtIGJhY2sgdG8gbWF0Y2hlckluXG5pPXRlbXAubGVuZ3RoO3doaWxlKGktLSl7aWYoZWxlbT10ZW1wW2ldKXttYXRjaGVyT3V0W3Bvc3RNYXBbaV1dPSEobWF0Y2hlckluW3Bvc3RNYXBbaV1dPWVsZW0pO319fWlmKHNlZWQpe2lmKHBvc3RGaW5kZXJ8fHByZUZpbHRlcil7aWYocG9zdEZpbmRlcil7Ly8gR2V0IHRoZSBmaW5hbCBtYXRjaGVyT3V0IGJ5IGNvbmRlbnNpbmcgdGhpcyBpbnRlcm1lZGlhdGUgaW50byBwb3N0RmluZGVyIGNvbnRleHRzXG50ZW1wPVtdO2k9bWF0Y2hlck91dC5sZW5ndGg7d2hpbGUoaS0tKXtpZihlbGVtPW1hdGNoZXJPdXRbaV0pey8vIFJlc3RvcmUgbWF0Y2hlckluIHNpbmNlIGVsZW0gaXMgbm90IHlldCBhIGZpbmFsIG1hdGNoXG50ZW1wLnB1c2gobWF0Y2hlckluW2ldPWVsZW0pO319cG9zdEZpbmRlcihudWxsLG1hdGNoZXJPdXQ9W10sdGVtcCx4bWwpO30vLyBNb3ZlIG1hdGNoZWQgZWxlbWVudHMgZnJvbSBzZWVkIHRvIHJlc3VsdHMgdG8ga2VlcCB0aGVtIHN5bmNocm9uaXplZFxuaT1tYXRjaGVyT3V0Lmxlbmd0aDt3aGlsZShpLS0pe2lmKChlbGVtPW1hdGNoZXJPdXRbaV0pJiYodGVtcD1wb3N0RmluZGVyP2luZGV4T2Yoc2VlZCxlbGVtKTpwcmVNYXBbaV0pPi0xKXtzZWVkW3RlbXBdPSEocmVzdWx0c1t0ZW1wXT1lbGVtKTt9fX0vLyBBZGQgZWxlbWVudHMgdG8gcmVzdWx0cywgdGhyb3VnaCBwb3N0RmluZGVyIGlmIGRlZmluZWRcbn1lbHNle21hdGNoZXJPdXQ9Y29uZGVuc2UobWF0Y2hlck91dD09PXJlc3VsdHM/bWF0Y2hlck91dC5zcGxpY2UocHJlZXhpc3RpbmcsbWF0Y2hlck91dC5sZW5ndGgpOm1hdGNoZXJPdXQpO2lmKHBvc3RGaW5kZXIpe3Bvc3RGaW5kZXIobnVsbCxyZXN1bHRzLG1hdGNoZXJPdXQseG1sKTt9ZWxzZXtwdXNoLmFwcGx5KHJlc3VsdHMsbWF0Y2hlck91dCk7fX19KTt9ZnVuY3Rpb24gbWF0Y2hlckZyb21Ub2tlbnModG9rZW5zKXt2YXIgY2hlY2tDb250ZXh0LG1hdGNoZXIsaixsZW49dG9rZW5zLmxlbmd0aCxsZWFkaW5nUmVsYXRpdmU9RXhwci5yZWxhdGl2ZVt0b2tlbnNbMF0udHlwZV0saW1wbGljaXRSZWxhdGl2ZT1sZWFkaW5nUmVsYXRpdmV8fEV4cHIucmVsYXRpdmVbXCIgXCJdLGk9bGVhZGluZ1JlbGF0aXZlPzE6MCwvLyBUaGUgZm91bmRhdGlvbmFsIG1hdGNoZXIgZW5zdXJlcyB0aGF0IGVsZW1lbnRzIGFyZSByZWFjaGFibGUgZnJvbSB0b3AtbGV2ZWwgY29udGV4dChzKVxubWF0Y2hDb250ZXh0PWFkZENvbWJpbmF0b3IoZnVuY3Rpb24oZWxlbSl7cmV0dXJuIGVsZW09PT1jaGVja0NvbnRleHQ7fSxpbXBsaWNpdFJlbGF0aXZlLHRydWUpLG1hdGNoQW55Q29udGV4dD1hZGRDb21iaW5hdG9yKGZ1bmN0aW9uKGVsZW0pe3JldHVybiBpbmRleE9mKGNoZWNrQ29udGV4dCxlbGVtKT4tMTt9LGltcGxpY2l0UmVsYXRpdmUsdHJ1ZSksbWF0Y2hlcnM9W2Z1bmN0aW9uKGVsZW0sY29udGV4dCx4bWwpe3ZhciByZXQ9IWxlYWRpbmdSZWxhdGl2ZSYmKHhtbHx8Y29udGV4dCE9PW91dGVybW9zdENvbnRleHQpfHwoKGNoZWNrQ29udGV4dD1jb250ZXh0KS5ub2RlVHlwZT9tYXRjaENvbnRleHQoZWxlbSxjb250ZXh0LHhtbCk6bWF0Y2hBbnlDb250ZXh0KGVsZW0sY29udGV4dCx4bWwpKTsvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudCAoaXNzdWUgIzI5OSlcbmNoZWNrQ29udGV4dD1udWxsO3JldHVybiByZXQ7fV07Zm9yKDtpPGxlbjtpKyspe2lmKG1hdGNoZXI9RXhwci5yZWxhdGl2ZVt0b2tlbnNbaV0udHlwZV0pe21hdGNoZXJzPVthZGRDb21iaW5hdG9yKGVsZW1lbnRNYXRjaGVyKG1hdGNoZXJzKSxtYXRjaGVyKV07fWVsc2V7bWF0Y2hlcj1FeHByLmZpbHRlclt0b2tlbnNbaV0udHlwZV0uYXBwbHkobnVsbCx0b2tlbnNbaV0ubWF0Y2hlcyk7Ly8gUmV0dXJuIHNwZWNpYWwgdXBvbiBzZWVpbmcgYSBwb3NpdGlvbmFsIG1hdGNoZXJcbmlmKG1hdGNoZXJbZXhwYW5kb10pey8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuaj0rK2k7Zm9yKDtqPGxlbjtqKyspe2lmKEV4cHIucmVsYXRpdmVbdG9rZW5zW2pdLnR5cGVdKXticmVhazt9fXJldHVybiBzZXRNYXRjaGVyKGk+MSYmZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpLGk+MSYmdG9TZWxlY3RvcigvLyBJZiB0aGUgcHJlY2VkaW5nIHRva2VuIHdhcyBhIGRlc2NlbmRhbnQgY29tYmluYXRvciwgaW5zZXJ0IGFuIGltcGxpY2l0IGFueS1lbGVtZW50IGAqYFxudG9rZW5zLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOnRva2Vuc1tpLTJdLnR5cGU9PT1cIiBcIj9cIipcIjpcIlwifSkpLnJlcGxhY2UocnRyaW0sXCIkMVwiKSxtYXRjaGVyLGk8aiYmbWF0Y2hlckZyb21Ub2tlbnModG9rZW5zLnNsaWNlKGksaikpLGo8bGVuJiZtYXRjaGVyRnJvbVRva2Vucyh0b2tlbnM9dG9rZW5zLnNsaWNlKGopKSxqPGxlbiYmdG9TZWxlY3Rvcih0b2tlbnMpKTt9bWF0Y2hlcnMucHVzaChtYXRjaGVyKTt9fXJldHVybiBlbGVtZW50TWF0Y2hlcihtYXRjaGVycyk7fWZ1bmN0aW9uIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyhlbGVtZW50TWF0Y2hlcnMsc2V0TWF0Y2hlcnMpe3ZhciBieVNldD1zZXRNYXRjaGVycy5sZW5ndGg+MCxieUVsZW1lbnQ9ZWxlbWVudE1hdGNoZXJzLmxlbmd0aD4wLHN1cGVyTWF0Y2hlcj1mdW5jdGlvbiBzdXBlck1hdGNoZXIoc2VlZCxjb250ZXh0LHhtbCxyZXN1bHRzLG91dGVybW9zdCl7dmFyIGVsZW0saixtYXRjaGVyLG1hdGNoZWRDb3VudD0wLGk9XCIwXCIsdW5tYXRjaGVkPXNlZWQmJltdLHNldE1hdGNoZWQ9W10sY29udGV4dEJhY2t1cD1vdXRlcm1vc3RDb250ZXh0LC8vIFdlIG11c3QgYWx3YXlzIGhhdmUgZWl0aGVyIHNlZWQgZWxlbWVudHMgb3Igb3V0ZXJtb3N0IGNvbnRleHRcbmVsZW1zPXNlZWR8fGJ5RWxlbWVudCYmRXhwci5maW5kW1wiVEFHXCJdKFwiKlwiLG91dGVybW9zdCksLy8gVXNlIGludGVnZXIgZGlycnVucyBpZmYgdGhpcyBpcyB0aGUgb3V0ZXJtb3N0IG1hdGNoZXJcbmRpcnJ1bnNVbmlxdWU9ZGlycnVucys9Y29udGV4dEJhY2t1cD09bnVsbD8xOk1hdGgucmFuZG9tKCl8fDAuMSxsZW49ZWxlbXMubGVuZ3RoO2lmKG91dGVybW9zdCl7b3V0ZXJtb3N0Q29udGV4dD1jb250ZXh0PT09ZG9jdW1lbnR8fGNvbnRleHR8fG91dGVybW9zdDt9Ly8gQWRkIGVsZW1lbnRzIHBhc3NpbmcgZWxlbWVudE1hdGNoZXJzIGRpcmVjdGx5IHRvIHJlc3VsdHNcbi8vIFN1cHBvcnQ6IElFPDksIFNhZmFyaVxuLy8gVG9sZXJhdGUgTm9kZUxpc3QgcHJvcGVydGllcyAoSUU6IFwibGVuZ3RoXCI7IFNhZmFyaTogPG51bWJlcj4pIG1hdGNoaW5nIGVsZW1lbnRzIGJ5IGlkXG5mb3IoO2khPT1sZW4mJihlbGVtPWVsZW1zW2ldKSE9bnVsbDtpKyspe2lmKGJ5RWxlbWVudCYmZWxlbSl7aj0wO2lmKCFjb250ZXh0JiZlbGVtLm93bmVyRG9jdW1lbnQhPT1kb2N1bWVudCl7c2V0RG9jdW1lbnQoZWxlbSk7eG1sPSFkb2N1bWVudElzSFRNTDt9d2hpbGUobWF0Y2hlcj1lbGVtZW50TWF0Y2hlcnNbaisrXSl7aWYobWF0Y2hlcihlbGVtLGNvbnRleHR8fGRvY3VtZW50LHhtbCkpe3Jlc3VsdHMucHVzaChlbGVtKTticmVhazt9fWlmKG91dGVybW9zdCl7ZGlycnVucz1kaXJydW5zVW5pcXVlO319Ly8gVHJhY2sgdW5tYXRjaGVkIGVsZW1lbnRzIGZvciBzZXQgZmlsdGVyc1xuaWYoYnlTZXQpey8vIFRoZXkgd2lsbCBoYXZlIGdvbmUgdGhyb3VnaCBhbGwgcG9zc2libGUgbWF0Y2hlcnNcbmlmKGVsZW09IW1hdGNoZXImJmVsZW0pe21hdGNoZWRDb3VudC0tO30vLyBMZW5ndGhlbiB0aGUgYXJyYXkgZm9yIGV2ZXJ5IGVsZW1lbnQsIG1hdGNoZWQgb3Igbm90XG5pZihzZWVkKXt1bm1hdGNoZWQucHVzaChlbGVtKTt9fX0vLyBgaWAgaXMgbm93IHRoZSBjb3VudCBvZiBlbGVtZW50cyB2aXNpdGVkIGFib3ZlLCBhbmQgYWRkaW5nIGl0IHRvIGBtYXRjaGVkQ291bnRgXG4vLyBtYWtlcyB0aGUgbGF0dGVyIG5vbm5lZ2F0aXZlLlxubWF0Y2hlZENvdW50Kz1pOy8vIEFwcGx5IHNldCBmaWx0ZXJzIHRvIHVubWF0Y2hlZCBlbGVtZW50c1xuLy8gTk9URTogVGhpcyBjYW4gYmUgc2tpcHBlZCBpZiB0aGVyZSBhcmUgbm8gdW5tYXRjaGVkIGVsZW1lbnRzIChpLmUuLCBgbWF0Y2hlZENvdW50YFxuLy8gZXF1YWxzIGBpYCksIHVubGVzcyB3ZSBkaWRuJ3QgdmlzaXQgX2FueV8gZWxlbWVudHMgaW4gdGhlIGFib3ZlIGxvb3AgYmVjYXVzZSB3ZSBoYXZlXG4vLyBubyBlbGVtZW50IG1hdGNoZXJzIGFuZCBubyBzZWVkLlxuLy8gSW5jcmVtZW50aW5nIGFuIGluaXRpYWxseS1zdHJpbmcgXCIwXCIgYGlgIGFsbG93cyBgaWAgdG8gcmVtYWluIGEgc3RyaW5nIG9ubHkgaW4gdGhhdFxuLy8gY2FzZSwgd2hpY2ggd2lsbCByZXN1bHQgaW4gYSBcIjAwXCIgYG1hdGNoZWRDb3VudGAgdGhhdCBkaWZmZXJzIGZyb20gYGlgIGJ1dCBpcyBhbHNvXG4vLyBudW1lcmljYWxseSB6ZXJvLlxuaWYoYnlTZXQmJmkhPT1tYXRjaGVkQ291bnQpe2o9MDt3aGlsZShtYXRjaGVyPXNldE1hdGNoZXJzW2orK10pe21hdGNoZXIodW5tYXRjaGVkLHNldE1hdGNoZWQsY29udGV4dCx4bWwpO31pZihzZWVkKXsvLyBSZWludGVncmF0ZSBlbGVtZW50IG1hdGNoZXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciBzb3J0aW5nXG5pZihtYXRjaGVkQ291bnQ+MCl7d2hpbGUoaS0tKXtpZighKHVubWF0Y2hlZFtpXXx8c2V0TWF0Y2hlZFtpXSkpe3NldE1hdGNoZWRbaV09cG9wLmNhbGwocmVzdWx0cyk7fX19Ly8gRGlzY2FyZCBpbmRleCBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gZ2V0IG9ubHkgYWN0dWFsIG1hdGNoZXNcbnNldE1hdGNoZWQ9Y29uZGVuc2Uoc2V0TWF0Y2hlZCk7fS8vIEFkZCBtYXRjaGVzIHRvIHJlc3VsdHNcbnB1c2guYXBwbHkocmVzdWx0cyxzZXRNYXRjaGVkKTsvLyBTZWVkbGVzcyBzZXQgbWF0Y2hlcyBzdWNjZWVkaW5nIG11bHRpcGxlIHN1Y2Nlc3NmdWwgbWF0Y2hlcnMgc3RpcHVsYXRlIHNvcnRpbmdcbmlmKG91dGVybW9zdCYmIXNlZWQmJnNldE1hdGNoZWQubGVuZ3RoPjAmJm1hdGNoZWRDb3VudCtzZXRNYXRjaGVycy5sZW5ndGg+MSl7U2l6emxlLnVuaXF1ZVNvcnQocmVzdWx0cyk7fX0vLyBPdmVycmlkZSBtYW5pcHVsYXRpb24gb2YgZ2xvYmFscyBieSBuZXN0ZWQgbWF0Y2hlcnNcbmlmKG91dGVybW9zdCl7ZGlycnVucz1kaXJydW5zVW5pcXVlO291dGVybW9zdENvbnRleHQ9Y29udGV4dEJhY2t1cDt9cmV0dXJuIHVubWF0Y2hlZDt9O3JldHVybiBieVNldD9tYXJrRnVuY3Rpb24oc3VwZXJNYXRjaGVyKTpzdXBlck1hdGNoZXI7fWNvbXBpbGU9U2l6emxlLmNvbXBpbGU9ZnVuY3Rpb24oc2VsZWN0b3IsbWF0Y2gvKiBJbnRlcm5hbCBVc2UgT25seSAqLyl7dmFyIGksc2V0TWF0Y2hlcnM9W10sZWxlbWVudE1hdGNoZXJzPVtdLGNhY2hlZD1jb21waWxlckNhY2hlW3NlbGVjdG9yK1wiIFwiXTtpZighY2FjaGVkKXsvLyBHZW5lcmF0ZSBhIGZ1bmN0aW9uIG9mIHJlY3Vyc2l2ZSBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBjaGVjayBlYWNoIGVsZW1lbnRcbmlmKCFtYXRjaCl7bWF0Y2g9dG9rZW5pemUoc2VsZWN0b3IpO31pPW1hdGNoLmxlbmd0aDt3aGlsZShpLS0pe2NhY2hlZD1tYXRjaGVyRnJvbVRva2VucyhtYXRjaFtpXSk7aWYoY2FjaGVkW2V4cGFuZG9dKXtzZXRNYXRjaGVycy5wdXNoKGNhY2hlZCk7fWVsc2V7ZWxlbWVudE1hdGNoZXJzLnB1c2goY2FjaGVkKTt9fS8vIENhY2hlIHRoZSBjb21waWxlZCBmdW5jdGlvblxuY2FjaGVkPWNvbXBpbGVyQ2FjaGUoc2VsZWN0b3IsbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKGVsZW1lbnRNYXRjaGVycyxzZXRNYXRjaGVycykpOy8vIFNhdmUgc2VsZWN0b3IgYW5kIHRva2VuaXphdGlvblxuY2FjaGVkLnNlbGVjdG9yPXNlbGVjdG9yO31yZXR1cm4gY2FjaGVkO307LyoqXG4gKiBBIGxvdy1sZXZlbCBzZWxlY3Rpb24gZnVuY3Rpb24gdGhhdCB3b3JrcyB3aXRoIFNpenpsZSdzIGNvbXBpbGVkXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgQSBzZWxlY3RvciBvciBhIHByZS1jb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uIGJ1aWx0IHdpdGggU2l6emxlLmNvbXBpbGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdHNdXG4gKiBAcGFyYW0ge0FycmF5fSBbc2VlZF0gQSBzZXQgb2YgZWxlbWVudHMgdG8gbWF0Y2ggYWdhaW5zdFxuICovc2VsZWN0PVNpenpsZS5zZWxlY3Q9ZnVuY3Rpb24oc2VsZWN0b3IsY29udGV4dCxyZXN1bHRzLHNlZWQpe3ZhciBpLHRva2Vucyx0b2tlbix0eXBlLGZpbmQsY29tcGlsZWQ9dHlwZW9mIHNlbGVjdG9yPT09XCJmdW5jdGlvblwiJiZzZWxlY3RvcixtYXRjaD0hc2VlZCYmdG9rZW5pemUoc2VsZWN0b3I9Y29tcGlsZWQuc2VsZWN0b3J8fHNlbGVjdG9yKTtyZXN1bHRzPXJlc3VsdHN8fFtdOy8vIFRyeSB0byBtaW5pbWl6ZSBvcGVyYXRpb25zIGlmIHRoZXJlIGlzIG9ubHkgb25lIHNlbGVjdG9yIGluIHRoZSBsaXN0IGFuZCBubyBzZWVkXG4vLyAodGhlIGxhdHRlciBvZiB3aGljaCBndWFyYW50ZWVzIHVzIGNvbnRleHQpXG5pZihtYXRjaC5sZW5ndGg9PT0xKXsvLyBSZWR1Y2UgY29udGV4dCBpZiB0aGUgbGVhZGluZyBjb21wb3VuZCBzZWxlY3RvciBpcyBhbiBJRFxudG9rZW5zPW1hdGNoWzBdPW1hdGNoWzBdLnNsaWNlKDApO2lmKHRva2Vucy5sZW5ndGg+MiYmKHRva2VuPXRva2Vuc1swXSkudHlwZT09PVwiSURcIiYmY29udGV4dC5ub2RlVHlwZT09PTkmJmRvY3VtZW50SXNIVE1MJiZFeHByLnJlbGF0aXZlW3Rva2Vuc1sxXS50eXBlXSl7Y29udGV4dD0oRXhwci5maW5kW1wiSURcIl0odG9rZW4ubWF0Y2hlc1swXS5yZXBsYWNlKHJ1bmVzY2FwZSxmdW5lc2NhcGUpLGNvbnRleHQpfHxbXSlbMF07aWYoIWNvbnRleHQpe3JldHVybiByZXN1bHRzOy8vIFByZWNvbXBpbGVkIG1hdGNoZXJzIHdpbGwgc3RpbGwgdmVyaWZ5IGFuY2VzdHJ5LCBzbyBzdGVwIHVwIGEgbGV2ZWxcbn1lbHNlIGlmKGNvbXBpbGVkKXtjb250ZXh0PWNvbnRleHQucGFyZW50Tm9kZTt9c2VsZWN0b3I9c2VsZWN0b3Iuc2xpY2UodG9rZW5zLnNoaWZ0KCkudmFsdWUubGVuZ3RoKTt9Ly8gRmV0Y2ggYSBzZWVkIHNldCBmb3IgcmlnaHQtdG8tbGVmdCBtYXRjaGluZ1xuaT1tYXRjaEV4cHJbXCJuZWVkc0NvbnRleHRcIl0udGVzdChzZWxlY3Rvcik/MDp0b2tlbnMubGVuZ3RoO3doaWxlKGktLSl7dG9rZW49dG9rZW5zW2ldOy8vIEFib3J0IGlmIHdlIGhpdCBhIGNvbWJpbmF0b3JcbmlmKEV4cHIucmVsYXRpdmVbdHlwZT10b2tlbi50eXBlXSl7YnJlYWs7fWlmKGZpbmQ9RXhwci5maW5kW3R5cGVdKXsvLyBTZWFyY2gsIGV4cGFuZGluZyBjb250ZXh0IGZvciBsZWFkaW5nIHNpYmxpbmcgY29tYmluYXRvcnNcbmlmKHNlZWQ9ZmluZCh0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UocnVuZXNjYXBlLGZ1bmVzY2FwZSkscnNpYmxpbmcudGVzdCh0b2tlbnNbMF0udHlwZSkmJnRlc3RDb250ZXh0KGNvbnRleHQucGFyZW50Tm9kZSl8fGNvbnRleHQpKXsvLyBJZiBzZWVkIGlzIGVtcHR5IG9yIG5vIHRva2VucyByZW1haW4sIHdlIGNhbiByZXR1cm4gZWFybHlcbnRva2Vucy5zcGxpY2UoaSwxKTtzZWxlY3Rvcj1zZWVkLmxlbmd0aCYmdG9TZWxlY3Rvcih0b2tlbnMpO2lmKCFzZWxlY3Rvcil7cHVzaC5hcHBseShyZXN1bHRzLHNlZWQpO3JldHVybiByZXN1bHRzO31icmVhazt9fX19Ly8gQ29tcGlsZSBhbmQgZXhlY3V0ZSBhIGZpbHRlcmluZyBmdW5jdGlvbiBpZiBvbmUgaXMgbm90IHByb3ZpZGVkXG4vLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG4oY29tcGlsZWR8fGNvbXBpbGUoc2VsZWN0b3IsbWF0Y2gpKShzZWVkLGNvbnRleHQsIWRvY3VtZW50SXNIVE1MLHJlc3VsdHMsIWNvbnRleHR8fHJzaWJsaW5nLnRlc3Qoc2VsZWN0b3IpJiZ0ZXN0Q29udGV4dChjb250ZXh0LnBhcmVudE5vZGUpfHxjb250ZXh0KTtyZXR1cm4gcmVzdWx0czt9Oy8vIE9uZS10aW1lIGFzc2lnbm1lbnRzXG4vLyBTb3J0IHN0YWJpbGl0eVxuc3VwcG9ydC5zb3J0U3RhYmxlPWV4cGFuZG8uc3BsaXQoXCJcIikuc29ydChzb3J0T3JkZXIpLmpvaW4oXCJcIik9PT1leHBhbmRvOy8vIFN1cHBvcnQ6IENocm9tZSAxNC0zNStcbi8vIEFsd2F5cyBhc3N1bWUgZHVwbGljYXRlcyBpZiB0aGV5IGFyZW4ndCBwYXNzZWQgdG8gdGhlIGNvbXBhcmlzb24gZnVuY3Rpb25cbnN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcz0hIWhhc0R1cGxpY2F0ZTsvLyBJbml0aWFsaXplIGFnYWluc3QgdGhlIGRlZmF1bHQgZG9jdW1lbnRcbnNldERvY3VtZW50KCk7Ly8gU3VwcG9ydDogV2Via2l0PDUzNy4zMiAtIFNhZmFyaSA2LjAuMy9DaHJvbWUgMjUgKGZpeGVkIGluIENocm9tZSAyNylcbi8vIERldGFjaGVkIG5vZGVzIGNvbmZvdW5kaW5nbHkgZm9sbG93ICplYWNoIG90aGVyKlxuc3VwcG9ydC5zb3J0RGV0YWNoZWQ9YXNzZXJ0KGZ1bmN0aW9uKGVsKXsvLyBTaG91bGQgcmV0dXJuIDEsIGJ1dCByZXR1cm5zIDQgKGZvbGxvd2luZylcbnJldHVybiBlbC5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIikpJjE7fSk7Ly8gU3VwcG9ydDogSUU8OFxuLy8gUHJldmVudCBhdHRyaWJ1dGUvcHJvcGVydHkgXCJpbnRlcnBvbGF0aW9uXCJcbi8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzY0MjklMjhWUy44NSUyOS5hc3B4XG5pZighYXNzZXJ0KGZ1bmN0aW9uKGVsKXtlbC5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCI7cmV0dXJuIGVsLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKT09PVwiI1wiO30pKXthZGRIYW5kbGUoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oZWxlbSxuYW1lLGlzWE1MKXtpZighaXNYTUwpe3JldHVybiBlbGVtLmdldEF0dHJpYnV0ZShuYW1lLG5hbWUudG9Mb3dlckNhc2UoKT09PVwidHlwZVwiPzE6Mik7fX0pO30vLyBTdXBwb3J0OiBJRTw5XG4vLyBVc2UgZGVmYXVsdFZhbHVlIGluIHBsYWNlIG9mIGdldEF0dHJpYnV0ZShcInZhbHVlXCIpXG5pZighc3VwcG9ydC5hdHRyaWJ1dGVzfHwhYXNzZXJ0KGZ1bmN0aW9uKGVsKXtlbC5pbm5lckhUTUw9XCI8aW5wdXQvPlwiO2VsLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKTtyZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT09PVwiXCI7fSkpe2FkZEhhbmRsZShcInZhbHVlXCIsZnVuY3Rpb24oZWxlbSxuYW1lLGlzWE1MKXtpZighaXNYTUwmJmVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PVwiaW5wdXRcIil7cmV0dXJuIGVsZW0uZGVmYXVsdFZhbHVlO319KTt9Ly8gU3VwcG9ydDogSUU8OVxuLy8gVXNlIGdldEF0dHJpYnV0ZU5vZGUgdG8gZmV0Y2ggYm9vbGVhbnMgd2hlbiBnZXRBdHRyaWJ1dGUgbGllc1xuaWYoIWFzc2VydChmdW5jdGlvbihlbCl7cmV0dXJuIGVsLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpPT1udWxsO30pKXthZGRIYW5kbGUoYm9vbGVhbnMsZnVuY3Rpb24oZWxlbSxuYW1lLGlzWE1MKXt2YXIgdmFsO2lmKCFpc1hNTCl7cmV0dXJuIGVsZW1bbmFtZV09PT10cnVlP25hbWUudG9Mb3dlckNhc2UoKToodmFsPWVsZW0uZ2V0QXR0cmlidXRlTm9kZShuYW1lKSkmJnZhbC5zcGVjaWZpZWQ/dmFsLnZhbHVlOm51bGw7fX0pO31yZXR1cm4gU2l6emxlO30od2luZG93KTtqUXVlcnkuZmluZD1TaXp6bGU7alF1ZXJ5LmV4cHI9U2l6emxlLnNlbGVjdG9yczsvLyBEZXByZWNhdGVkXG5qUXVlcnkuZXhwcltcIjpcIl09alF1ZXJ5LmV4cHIucHNldWRvcztqUXVlcnkudW5pcXVlU29ydD1qUXVlcnkudW5pcXVlPVNpenpsZS51bmlxdWVTb3J0O2pRdWVyeS50ZXh0PVNpenpsZS5nZXRUZXh0O2pRdWVyeS5pc1hNTERvYz1TaXp6bGUuaXNYTUw7alF1ZXJ5LmNvbnRhaW5zPVNpenpsZS5jb250YWlucztqUXVlcnkuZXNjYXBlU2VsZWN0b3I9U2l6emxlLmVzY2FwZTt2YXIgZGlyPWZ1bmN0aW9uIGRpcihlbGVtLF9kaXIsdW50aWwpe3ZhciBtYXRjaGVkPVtdLHRydW5jYXRlPXVudGlsIT09dW5kZWZpbmVkO3doaWxlKChlbGVtPWVsZW1bX2Rpcl0pJiZlbGVtLm5vZGVUeXBlIT09OSl7aWYoZWxlbS5ub2RlVHlwZT09PTEpe2lmKHRydW5jYXRlJiZqUXVlcnkoZWxlbSkuaXModW50aWwpKXticmVhazt9bWF0Y2hlZC5wdXNoKGVsZW0pO319cmV0dXJuIG1hdGNoZWQ7fTt2YXIgX3NpYmxpbmdzPWZ1bmN0aW9uIF9zaWJsaW5ncyhuLGVsZW0pe3ZhciBtYXRjaGVkPVtdO2Zvcig7bjtuPW4ubmV4dFNpYmxpbmcpe2lmKG4ubm9kZVR5cGU9PT0xJiZuIT09ZWxlbSl7bWF0Y2hlZC5wdXNoKG4pO319cmV0dXJuIG1hdGNoZWQ7fTt2YXIgcm5lZWRzQ29udGV4dD1qUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7dmFyIHJzaW5nbGVUYWc9L148KFthLXpdW15cXC9cXDA+OlxceDIwXFx0XFxyXFxuXFxmXSopW1xceDIwXFx0XFxyXFxuXFxmXSpcXC8/Pig/OjxcXC9cXDE+fCkkL2k7dmFyIHJpc1NpbXBsZT0vXi5bXjojXFxbXFwuLF0qJC87Ly8gSW1wbGVtZW50IHRoZSBpZGVudGljYWwgZnVuY3Rpb25hbGl0eSBmb3IgZmlsdGVyIGFuZCBub3RcbmZ1bmN0aW9uIHdpbm5vdyhlbGVtZW50cyxxdWFsaWZpZXIsbm90KXtpZihqUXVlcnkuaXNGdW5jdGlvbihxdWFsaWZpZXIpKXtyZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsZnVuY3Rpb24oZWxlbSxpKXtyZXR1cm4hIXF1YWxpZmllci5jYWxsKGVsZW0saSxlbGVtKSE9PW5vdDt9KTt9Ly8gU2luZ2xlIGVsZW1lbnRcbmlmKHF1YWxpZmllci5ub2RlVHlwZSl7cmV0dXJuIGpRdWVyeS5ncmVwKGVsZW1lbnRzLGZ1bmN0aW9uKGVsZW0pe3JldHVybiBlbGVtPT09cXVhbGlmaWVyIT09bm90O30pO30vLyBBcnJheWxpa2Ugb2YgZWxlbWVudHMgKGpRdWVyeSwgYXJndW1lbnRzLCBBcnJheSlcbmlmKHR5cGVvZiBxdWFsaWZpZXIhPT1cInN0cmluZ1wiKXtyZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsZnVuY3Rpb24oZWxlbSl7cmV0dXJuIGluZGV4T2YuY2FsbChxdWFsaWZpZXIsZWxlbSk+LTEhPT1ub3Q7fSk7fS8vIFNpbXBsZSBzZWxlY3RvciB0aGF0IGNhbiBiZSBmaWx0ZXJlZCBkaXJlY3RseSwgcmVtb3Zpbmcgbm9uLUVsZW1lbnRzXG5pZihyaXNTaW1wbGUudGVzdChxdWFsaWZpZXIpKXtyZXR1cm4galF1ZXJ5LmZpbHRlcihxdWFsaWZpZXIsZWxlbWVudHMsbm90KTt9Ly8gQ29tcGxleCBzZWxlY3RvciwgY29tcGFyZSB0aGUgdHdvIHNldHMsIHJlbW92aW5nIG5vbi1FbGVtZW50c1xucXVhbGlmaWVyPWpRdWVyeS5maWx0ZXIocXVhbGlmaWVyLGVsZW1lbnRzKTtyZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsZnVuY3Rpb24oZWxlbSl7cmV0dXJuIGluZGV4T2YuY2FsbChxdWFsaWZpZXIsZWxlbSk+LTEhPT1ub3QmJmVsZW0ubm9kZVR5cGU9PT0xO30pO31qUXVlcnkuZmlsdGVyPWZ1bmN0aW9uKGV4cHIsZWxlbXMsbm90KXt2YXIgZWxlbT1lbGVtc1swXTtpZihub3Qpe2V4cHI9XCI6bm90KFwiK2V4cHIrXCIpXCI7fWlmKGVsZW1zLmxlbmd0aD09PTEmJmVsZW0ubm9kZVR5cGU9PT0xKXtyZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKGVsZW0sZXhwcik/W2VsZW1dOltdO31yZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlcyhleHByLGpRdWVyeS5ncmVwKGVsZW1zLGZ1bmN0aW9uKGVsZW0pe3JldHVybiBlbGVtLm5vZGVUeXBlPT09MTt9KSk7fTtqUXVlcnkuZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uIGZpbmQoc2VsZWN0b3Ipe3ZhciBpLHJldCxsZW49dGhpcy5sZW5ndGgsc2VsZj10aGlzO2lmKHR5cGVvZiBzZWxlY3RvciE9PVwic3RyaW5nXCIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhqUXVlcnkoc2VsZWN0b3IpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihpPTA7aTxsZW47aSsrKXtpZihqUXVlcnkuY29udGFpbnMoc2VsZltpXSx0aGlzKSl7cmV0dXJuIHRydWU7fX19KSk7fXJldD10aGlzLnB1c2hTdGFjayhbXSk7Zm9yKGk9MDtpPGxlbjtpKyspe2pRdWVyeS5maW5kKHNlbGVjdG9yLHNlbGZbaV0scmV0KTt9cmV0dXJuIGxlbj4xP2pRdWVyeS51bmlxdWVTb3J0KHJldCk6cmV0O30sZmlsdGVyOmZ1bmN0aW9uIGZpbHRlcihzZWxlY3Rvcil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHdpbm5vdyh0aGlzLHNlbGVjdG9yfHxbXSxmYWxzZSkpO30sbm90OmZ1bmN0aW9uIG5vdChzZWxlY3Rvcil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHdpbm5vdyh0aGlzLHNlbGVjdG9yfHxbXSx0cnVlKSk7fSxpczpmdW5jdGlvbiBpcyhzZWxlY3Rvcil7cmV0dXJuISF3aW5ub3codGhpcywvLyBJZiB0aGlzIGlzIGEgcG9zaXRpb25hbC9yZWxhdGl2ZSBzZWxlY3RvciwgY2hlY2sgbWVtYmVyc2hpcCBpbiB0aGUgcmV0dXJuZWQgc2V0XG4vLyBzbyAkKFwicDpmaXJzdFwiKS5pcyhcInA6bGFzdFwiKSB3b24ndCByZXR1cm4gdHJ1ZSBmb3IgYSBkb2Mgd2l0aCB0d28gXCJwXCIuXG50eXBlb2Ygc2VsZWN0b3I9PT1cInN0cmluZ1wiJiZybmVlZHNDb250ZXh0LnRlc3Qoc2VsZWN0b3IpP2pRdWVyeShzZWxlY3Rvcik6c2VsZWN0b3J8fFtdLGZhbHNlKS5sZW5ndGg7fX0pOy8vIEluaXRpYWxpemUgYSBqUXVlcnkgb2JqZWN0XG4vLyBBIGNlbnRyYWwgcmVmZXJlbmNlIHRvIHRoZSByb290IGpRdWVyeShkb2N1bWVudClcbnZhciByb290alF1ZXJ5LC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4vLyBQcmlvcml0aXplICNpZCBvdmVyIDx0YWc+IHRvIGF2b2lkIFhTUyB2aWEgbG9jYXRpb24uaGFzaCAoIzk1MjEpXG4vLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAoIzExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcbi8vIFNob3J0Y3V0IHNpbXBsZSAjaWQgY2FzZSBmb3Igc3BlZWRcbnJxdWlja0V4cHI9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8saW5pdD1qUXVlcnkuZm4uaW5pdD1mdW5jdGlvbihzZWxlY3Rvcixjb250ZXh0LHJvb3Qpe3ZhciBtYXRjaCxlbGVtOy8vIEhBTkRMRTogJChcIlwiKSwgJChudWxsKSwgJCh1bmRlZmluZWQpLCAkKGZhbHNlKVxuaWYoIXNlbGVjdG9yKXtyZXR1cm4gdGhpczt9Ly8gTWV0aG9kIGluaXQoKSBhY2NlcHRzIGFuIGFsdGVybmF0ZSByb290alF1ZXJ5XG4vLyBzbyBtaWdyYXRlIGNhbiBzdXBwb3J0IGpRdWVyeS5zdWIgKGdoLTIxMDEpXG5yb290PXJvb3R8fHJvb3RqUXVlcnk7Ly8gSGFuZGxlIEhUTUwgc3RyaW5nc1xuaWYodHlwZW9mIHNlbGVjdG9yPT09XCJzdHJpbmdcIil7aWYoc2VsZWN0b3JbMF09PT1cIjxcIiYmc2VsZWN0b3Jbc2VsZWN0b3IubGVuZ3RoLTFdPT09XCI+XCImJnNlbGVjdG9yLmxlbmd0aD49Myl7Ly8gQXNzdW1lIHRoYXQgc3RyaW5ncyB0aGF0IHN0YXJ0IGFuZCBlbmQgd2l0aCA8PiBhcmUgSFRNTCBhbmQgc2tpcCB0aGUgcmVnZXggY2hlY2tcbm1hdGNoPVtudWxsLHNlbGVjdG9yLG51bGxdO31lbHNle21hdGNoPXJxdWlja0V4cHIuZXhlYyhzZWxlY3Rvcik7fS8vIE1hdGNoIGh0bWwgb3IgbWFrZSBzdXJlIG5vIGNvbnRleHQgaXMgc3BlY2lmaWVkIGZvciAjaWRcbmlmKG1hdGNoJiYobWF0Y2hbMV18fCFjb250ZXh0KSl7Ly8gSEFORExFOiAkKGh0bWwpIC0+ICQoYXJyYXkpXG5pZihtYXRjaFsxXSl7Y29udGV4dD1jb250ZXh0IGluc3RhbmNlb2YgalF1ZXJ5P2NvbnRleHRbMF06Y29udGV4dDsvLyBPcHRpb24gdG8gcnVuIHNjcmlwdHMgaXMgdHJ1ZSBmb3IgYmFjay1jb21wYXRcbi8vIEludGVudGlvbmFsbHkgbGV0IHRoZSBlcnJvciBiZSB0aHJvd24gaWYgcGFyc2VIVE1MIGlzIG5vdCBwcmVzZW50XG5qUXVlcnkubWVyZ2UodGhpcyxqUXVlcnkucGFyc2VIVE1MKG1hdGNoWzFdLGNvbnRleHQmJmNvbnRleHQubm9kZVR5cGU/Y29udGV4dC5vd25lckRvY3VtZW50fHxjb250ZXh0OmRvY3VtZW50LHRydWUpKTsvLyBIQU5ETEU6ICQoaHRtbCwgcHJvcHMpXG5pZihyc2luZ2xlVGFnLnRlc3QobWF0Y2hbMV0pJiZqUXVlcnkuaXNQbGFpbk9iamVjdChjb250ZXh0KSl7Zm9yKG1hdGNoIGluIGNvbnRleHQpey8vIFByb3BlcnRpZXMgb2YgY29udGV4dCBhcmUgY2FsbGVkIGFzIG1ldGhvZHMgaWYgcG9zc2libGVcbmlmKGpRdWVyeS5pc0Z1bmN0aW9uKHRoaXNbbWF0Y2hdKSl7dGhpc1ttYXRjaF0oY29udGV4dFttYXRjaF0pOy8vIC4uLmFuZCBvdGhlcndpc2Ugc2V0IGFzIGF0dHJpYnV0ZXNcbn1lbHNle3RoaXMuYXR0cihtYXRjaCxjb250ZXh0W21hdGNoXSk7fX19cmV0dXJuIHRoaXM7Ly8gSEFORExFOiAkKCNpZClcbn1lbHNle2VsZW09ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobWF0Y2hbMl0pO2lmKGVsZW0pey8vIEluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XG50aGlzWzBdPWVsZW07dGhpcy5sZW5ndGg9MTt9cmV0dXJuIHRoaXM7fS8vIEhBTkRMRTogJChleHByLCAkKC4uLikpXG59ZWxzZSBpZighY29udGV4dHx8Y29udGV4dC5qcXVlcnkpe3JldHVybihjb250ZXh0fHxyb290KS5maW5kKHNlbGVjdG9yKTsvLyBIQU5ETEU6ICQoZXhwciwgY29udGV4dClcbi8vICh3aGljaCBpcyBqdXN0IGVxdWl2YWxlbnQgdG86ICQoY29udGV4dCkuZmluZChleHByKVxufWVsc2V7cmV0dXJuIHRoaXMuY29uc3RydWN0b3IoY29udGV4dCkuZmluZChzZWxlY3Rvcik7fS8vIEhBTkRMRTogJChET01FbGVtZW50KVxufWVsc2UgaWYoc2VsZWN0b3Iubm9kZVR5cGUpe3RoaXNbMF09c2VsZWN0b3I7dGhpcy5sZW5ndGg9MTtyZXR1cm4gdGhpczsvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXG4vLyBTaG9ydGN1dCBmb3IgZG9jdW1lbnQgcmVhZHlcbn1lbHNlIGlmKGpRdWVyeS5pc0Z1bmN0aW9uKHNlbGVjdG9yKSl7cmV0dXJuIHJvb3QucmVhZHkhPT11bmRlZmluZWQ/cm9vdC5yZWFkeShzZWxlY3Rvcik6Ly8gRXhlY3V0ZSBpbW1lZGlhdGVseSBpZiByZWFkeSBpcyBub3QgcHJlc2VudFxuc2VsZWN0b3IoalF1ZXJ5KTt9cmV0dXJuIGpRdWVyeS5tYWtlQXJyYXkoc2VsZWN0b3IsdGhpcyk7fTsvLyBHaXZlIHRoZSBpbml0IGZ1bmN0aW9uIHRoZSBqUXVlcnkgcHJvdG90eXBlIGZvciBsYXRlciBpbnN0YW50aWF0aW9uXG5pbml0LnByb3RvdHlwZT1qUXVlcnkuZm47Ly8gSW5pdGlhbGl6ZSBjZW50cmFsIHJlZmVyZW5jZVxucm9vdGpRdWVyeT1qUXVlcnkoZG9jdW1lbnQpO3ZhciBycGFyZW50c3ByZXY9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sLy8gTWV0aG9kcyBndWFyYW50ZWVkIHRvIHByb2R1Y2UgYSB1bmlxdWUgc2V0IHdoZW4gc3RhcnRpbmcgZnJvbSBhIHVuaXF1ZSBzZXRcbmd1YXJhbnRlZWRVbmlxdWU9e2NoaWxkcmVuOnRydWUsY29udGVudHM6dHJ1ZSxuZXh0OnRydWUscHJldjp0cnVlfTtqUXVlcnkuZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24gaGFzKHRhcmdldCl7dmFyIHRhcmdldHM9alF1ZXJ5KHRhcmdldCx0aGlzKSxsPXRhcmdldHMubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe3ZhciBpPTA7Zm9yKDtpPGw7aSsrKXtpZihqUXVlcnkuY29udGFpbnModGhpcyx0YXJnZXRzW2ldKSl7cmV0dXJuIHRydWU7fX19KTt9LGNsb3Nlc3Q6ZnVuY3Rpb24gY2xvc2VzdChzZWxlY3RvcnMsY29udGV4dCl7dmFyIGN1cixpPTAsbD10aGlzLmxlbmd0aCxtYXRjaGVkPVtdLHRhcmdldHM9dHlwZW9mIHNlbGVjdG9ycyE9PVwic3RyaW5nXCImJmpRdWVyeShzZWxlY3RvcnMpOy8vIFBvc2l0aW9uYWwgc2VsZWN0b3JzIG5ldmVyIG1hdGNoLCBzaW5jZSB0aGVyZSdzIG5vIF9zZWxlY3Rpb25fIGNvbnRleHRcbmlmKCFybmVlZHNDb250ZXh0LnRlc3Qoc2VsZWN0b3JzKSl7Zm9yKDtpPGw7aSsrKXtmb3IoY3VyPXRoaXNbaV07Y3VyJiZjdXIhPT1jb250ZXh0O2N1cj1jdXIucGFyZW50Tm9kZSl7Ly8gQWx3YXlzIHNraXAgZG9jdW1lbnQgZnJhZ21lbnRzXG5pZihjdXIubm9kZVR5cGU8MTEmJih0YXJnZXRzP3RhcmdldHMuaW5kZXgoY3VyKT4tMTovLyBEb24ndCBwYXNzIG5vbi1lbGVtZW50cyB0byBTaXp6bGVcbmN1ci5ub2RlVHlwZT09PTEmJmpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvcihjdXIsc2VsZWN0b3JzKSkpe21hdGNoZWQucHVzaChjdXIpO2JyZWFrO319fX1yZXR1cm4gdGhpcy5wdXNoU3RhY2sobWF0Y2hlZC5sZW5ndGg+MT9qUXVlcnkudW5pcXVlU29ydChtYXRjaGVkKTptYXRjaGVkKTt9LC8vIERldGVybWluZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHNldFxuaW5kZXg6ZnVuY3Rpb24gaW5kZXgoZWxlbSl7Ly8gTm8gYXJndW1lbnQsIHJldHVybiBpbmRleCBpbiBwYXJlbnRcbmlmKCFlbGVtKXtyZXR1cm4gdGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xO30vLyBJbmRleCBpbiBzZWxlY3RvclxuaWYodHlwZW9mIGVsZW09PT1cInN0cmluZ1wiKXtyZXR1cm4gaW5kZXhPZi5jYWxsKGpRdWVyeShlbGVtKSx0aGlzWzBdKTt9Ly8gTG9jYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVzaXJlZCBlbGVtZW50XG5yZXR1cm4gaW5kZXhPZi5jYWxsKHRoaXMsLy8gSWYgaXQgcmVjZWl2ZXMgYSBqUXVlcnkgb2JqZWN0LCB0aGUgZmlyc3QgZWxlbWVudCBpcyB1c2VkXG5lbGVtLmpxdWVyeT9lbGVtWzBdOmVsZW0pO30sYWRkOmZ1bmN0aW9uIGFkZChzZWxlY3Rvcixjb250ZXh0KXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soalF1ZXJ5LnVuaXF1ZVNvcnQoalF1ZXJ5Lm1lcmdlKHRoaXMuZ2V0KCksalF1ZXJ5KHNlbGVjdG9yLGNvbnRleHQpKSkpO30sYWRkQmFjazpmdW5jdGlvbiBhZGRCYWNrKHNlbGVjdG9yKXtyZXR1cm4gdGhpcy5hZGQoc2VsZWN0b3I9PW51bGw/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoc2VsZWN0b3IpKTt9fSk7ZnVuY3Rpb24gc2libGluZyhjdXIsZGlyKXt3aGlsZSgoY3VyPWN1cltkaXJdKSYmY3VyLm5vZGVUeXBlIT09MSl7fXJldHVybiBjdXI7fWpRdWVyeS5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24gcGFyZW50KGVsZW0pe3ZhciBwYXJlbnQ9ZWxlbS5wYXJlbnROb2RlO3JldHVybiBwYXJlbnQmJnBhcmVudC5ub2RlVHlwZSE9PTExP3BhcmVudDpudWxsO30scGFyZW50czpmdW5jdGlvbiBwYXJlbnRzKGVsZW0pe3JldHVybiBkaXIoZWxlbSxcInBhcmVudE5vZGVcIik7fSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24gcGFyZW50c1VudGlsKGVsZW0saSx1bnRpbCl7cmV0dXJuIGRpcihlbGVtLFwicGFyZW50Tm9kZVwiLHVudGlsKTt9LG5leHQ6ZnVuY3Rpb24gbmV4dChlbGVtKXtyZXR1cm4gc2libGluZyhlbGVtLFwibmV4dFNpYmxpbmdcIik7fSxwcmV2OmZ1bmN0aW9uIHByZXYoZWxlbSl7cmV0dXJuIHNpYmxpbmcoZWxlbSxcInByZXZpb3VzU2libGluZ1wiKTt9LG5leHRBbGw6ZnVuY3Rpb24gbmV4dEFsbChlbGVtKXtyZXR1cm4gZGlyKGVsZW0sXCJuZXh0U2libGluZ1wiKTt9LHByZXZBbGw6ZnVuY3Rpb24gcHJldkFsbChlbGVtKXtyZXR1cm4gZGlyKGVsZW0sXCJwcmV2aW91c1NpYmxpbmdcIik7fSxuZXh0VW50aWw6ZnVuY3Rpb24gbmV4dFVudGlsKGVsZW0saSx1bnRpbCl7cmV0dXJuIGRpcihlbGVtLFwibmV4dFNpYmxpbmdcIix1bnRpbCk7fSxwcmV2VW50aWw6ZnVuY3Rpb24gcHJldlVudGlsKGVsZW0saSx1bnRpbCl7cmV0dXJuIGRpcihlbGVtLFwicHJldmlvdXNTaWJsaW5nXCIsdW50aWwpO30sc2libGluZ3M6ZnVuY3Rpb24gc2libGluZ3MoZWxlbSl7cmV0dXJuIF9zaWJsaW5ncygoZWxlbS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxlbGVtKTt9LGNoaWxkcmVuOmZ1bmN0aW9uIGNoaWxkcmVuKGVsZW0pe3JldHVybiBfc2libGluZ3MoZWxlbS5maXJzdENoaWxkKTt9LGNvbnRlbnRzOmZ1bmN0aW9uIGNvbnRlbnRzKGVsZW0pe3JldHVybiBlbGVtLmNvbnRlbnREb2N1bWVudHx8alF1ZXJ5Lm1lcmdlKFtdLGVsZW0uY2hpbGROb2Rlcyk7fX0sZnVuY3Rpb24obmFtZSxmbil7alF1ZXJ5LmZuW25hbWVdPWZ1bmN0aW9uKHVudGlsLHNlbGVjdG9yKXt2YXIgbWF0Y2hlZD1qUXVlcnkubWFwKHRoaXMsZm4sdW50aWwpO2lmKG5hbWUuc2xpY2UoLTUpIT09XCJVbnRpbFwiKXtzZWxlY3Rvcj11bnRpbDt9aWYoc2VsZWN0b3ImJnR5cGVvZiBzZWxlY3Rvcj09PVwic3RyaW5nXCIpe21hdGNoZWQ9alF1ZXJ5LmZpbHRlcihzZWxlY3RvcixtYXRjaGVkKTt9aWYodGhpcy5sZW5ndGg+MSl7Ly8gUmVtb3ZlIGR1cGxpY2F0ZXNcbmlmKCFndWFyYW50ZWVkVW5pcXVlW25hbWVdKXtqUXVlcnkudW5pcXVlU29ydChtYXRjaGVkKTt9Ly8gUmV2ZXJzZSBvcmRlciBmb3IgcGFyZW50cyogYW5kIHByZXYtZGVyaXZhdGl2ZXNcbmlmKHJwYXJlbnRzcHJldi50ZXN0KG5hbWUpKXttYXRjaGVkLnJldmVyc2UoKTt9fXJldHVybiB0aGlzLnB1c2hTdGFjayhtYXRjaGVkKTt9O30pO3ZhciBybm90aHRtbHdoaXRlPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZzsvLyBDb252ZXJ0IFN0cmluZy1mb3JtYXR0ZWQgb3B0aW9ucyBpbnRvIE9iamVjdC1mb3JtYXR0ZWQgb25lc1xuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyhvcHRpb25zKXt2YXIgb2JqZWN0PXt9O2pRdWVyeS5lYWNoKG9wdGlvbnMubWF0Y2gocm5vdGh0bWx3aGl0ZSl8fFtdLGZ1bmN0aW9uKF8sZmxhZyl7b2JqZWN0W2ZsYWddPXRydWU7fSk7cmV0dXJuIG9iamVjdDt9LypcbiAqIENyZWF0ZSBhIGNhbGxiYWNrIGxpc3QgdXNpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICpcbiAqXHRvcHRpb25zOiBhbiBvcHRpb25hbCBsaXN0IG9mIHNwYWNlLXNlcGFyYXRlZCBvcHRpb25zIHRoYXQgd2lsbCBjaGFuZ2UgaG93XG4gKlx0XHRcdHRoZSBjYWxsYmFjayBsaXN0IGJlaGF2ZXMgb3IgYSBtb3JlIHRyYWRpdGlvbmFsIG9wdGlvbiBvYmplY3RcbiAqXG4gKiBCeSBkZWZhdWx0IGEgY2FsbGJhY2sgbGlzdCB3aWxsIGFjdCBsaWtlIGFuIGV2ZW50IGNhbGxiYWNrIGxpc3QgYW5kIGNhbiBiZVxuICogXCJmaXJlZFwiIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFBvc3NpYmxlIG9wdGlvbnM6XG4gKlxuICpcdG9uY2U6XHRcdFx0d2lsbCBlbnN1cmUgdGhlIGNhbGxiYWNrIGxpc3QgY2FuIG9ubHkgYmUgZmlyZWQgb25jZSAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHRtZW1vcnk6XHRcdFx0d2lsbCBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHZhbHVlcyBhbmQgd2lsbCBjYWxsIGFueSBjYWxsYmFjayBhZGRlZFxuICpcdFx0XHRcdFx0YWZ0ZXIgdGhlIGxpc3QgaGFzIGJlZW4gZmlyZWQgcmlnaHQgYXdheSB3aXRoIHRoZSBsYXRlc3QgXCJtZW1vcml6ZWRcIlxuICpcdFx0XHRcdFx0dmFsdWVzIChsaWtlIGEgRGVmZXJyZWQpXG4gKlxuICpcdHVuaXF1ZTpcdFx0XHR3aWxsIGVuc3VyZSBhIGNhbGxiYWNrIGNhbiBvbmx5IGJlIGFkZGVkIG9uY2UgKG5vIGR1cGxpY2F0ZSBpbiB0aGUgbGlzdClcbiAqXG4gKlx0c3RvcE9uRmFsc2U6XHRpbnRlcnJ1cHQgY2FsbGluZ3Mgd2hlbiBhIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAqXG4gKi9qUXVlcnkuQ2FsbGJhY2tzPWZ1bmN0aW9uKG9wdGlvbnMpey8vIENvbnZlcnQgb3B0aW9ucyBmcm9tIFN0cmluZy1mb3JtYXR0ZWQgdG8gT2JqZWN0LWZvcm1hdHRlZCBpZiBuZWVkZWRcbi8vICh3ZSBjaGVjayBpbiBjYWNoZSBmaXJzdClcbm9wdGlvbnM9dHlwZW9mIG9wdGlvbnM9PT1cInN0cmluZ1wiP2NyZWF0ZU9wdGlvbnMob3B0aW9ucyk6alF1ZXJ5LmV4dGVuZCh7fSxvcHRpb25zKTt2YXIvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCBpcyBjdXJyZW50bHkgZmlyaW5nXG5maXJpbmcsLy8gTGFzdCBmaXJlIHZhbHVlIGZvciBub24tZm9yZ2V0dGFibGUgbGlzdHNcbm1lbW9yeSwvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCB3YXMgYWxyZWFkeSBmaXJlZFxuX2ZpcmVkLC8vIEZsYWcgdG8gcHJldmVudCBmaXJpbmdcbl9sb2NrZWQsLy8gQWN0dWFsIGNhbGxiYWNrIGxpc3Rcbmxpc3Q9W10sLy8gUXVldWUgb2YgZXhlY3V0aW9uIGRhdGEgZm9yIHJlcGVhdGFibGUgbGlzdHNcbnF1ZXVlPVtdLC8vIEluZGV4IG9mIGN1cnJlbnRseSBmaXJpbmcgY2FsbGJhY2sgKG1vZGlmaWVkIGJ5IGFkZC9yZW1vdmUgYXMgbmVlZGVkKVxuZmlyaW5nSW5kZXg9LTEsLy8gRmlyZSBjYWxsYmFja3NcbmZpcmU9ZnVuY3Rpb24gZmlyZSgpey8vIEVuZm9yY2Ugc2luZ2xlLWZpcmluZ1xuX2xvY2tlZD1vcHRpb25zLm9uY2U7Ly8gRXhlY3V0ZSBjYWxsYmFja3MgZm9yIGFsbCBwZW5kaW5nIGV4ZWN1dGlvbnMsXG4vLyByZXNwZWN0aW5nIGZpcmluZ0luZGV4IG92ZXJyaWRlcyBhbmQgcnVudGltZSBjaGFuZ2VzXG5fZmlyZWQ9ZmlyaW5nPXRydWU7Zm9yKDtxdWV1ZS5sZW5ndGg7ZmlyaW5nSW5kZXg9LTEpe21lbW9yeT1xdWV1ZS5zaGlmdCgpO3doaWxlKCsrZmlyaW5nSW5kZXg8bGlzdC5sZW5ndGgpey8vIFJ1biBjYWxsYmFjayBhbmQgY2hlY2sgZm9yIGVhcmx5IHRlcm1pbmF0aW9uXG5pZihsaXN0W2ZpcmluZ0luZGV4XS5hcHBseShtZW1vcnlbMF0sbWVtb3J5WzFdKT09PWZhbHNlJiZvcHRpb25zLnN0b3BPbkZhbHNlKXsvLyBKdW1wIHRvIGVuZCBhbmQgZm9yZ2V0IHRoZSBkYXRhIHNvIC5hZGQgZG9lc24ndCByZS1maXJlXG5maXJpbmdJbmRleD1saXN0Lmxlbmd0aDttZW1vcnk9ZmFsc2U7fX19Ly8gRm9yZ2V0IHRoZSBkYXRhIGlmIHdlJ3JlIGRvbmUgd2l0aCBpdFxuaWYoIW9wdGlvbnMubWVtb3J5KXttZW1vcnk9ZmFsc2U7fWZpcmluZz1mYWxzZTsvLyBDbGVhbiB1cCBpZiB3ZSdyZSBkb25lIGZpcmluZyBmb3IgZ29vZFxuaWYoX2xvY2tlZCl7Ly8gS2VlcCBhbiBlbXB0eSBsaXN0IGlmIHdlIGhhdmUgZGF0YSBmb3IgZnV0dXJlIGFkZCBjYWxsc1xuaWYobWVtb3J5KXtsaXN0PVtdOy8vIE90aGVyd2lzZSwgdGhpcyBvYmplY3QgaXMgc3BlbnRcbn1lbHNle2xpc3Q9XCJcIjt9fX0sLy8gQWN0dWFsIENhbGxiYWNrcyBvYmplY3RcbnNlbGY9ey8vIEFkZCBhIGNhbGxiYWNrIG9yIGEgY29sbGVjdGlvbiBvZiBjYWxsYmFja3MgdG8gdGhlIGxpc3RcbmFkZDpmdW5jdGlvbiBhZGQoKXtpZihsaXN0KXsvLyBJZiB3ZSBoYXZlIG1lbW9yeSBmcm9tIGEgcGFzdCBydW4sIHdlIHNob3VsZCBmaXJlIGFmdGVyIGFkZGluZ1xuaWYobWVtb3J5JiYhZmlyaW5nKXtmaXJpbmdJbmRleD1saXN0Lmxlbmd0aC0xO3F1ZXVlLnB1c2gobWVtb3J5KTt9KGZ1bmN0aW9uIGFkZChhcmdzKXtqUXVlcnkuZWFjaChhcmdzLGZ1bmN0aW9uKF8sYXJnKXtpZihqUXVlcnkuaXNGdW5jdGlvbihhcmcpKXtpZighb3B0aW9ucy51bmlxdWV8fCFzZWxmLmhhcyhhcmcpKXtsaXN0LnB1c2goYXJnKTt9fWVsc2UgaWYoYXJnJiZhcmcubGVuZ3RoJiZqUXVlcnkudHlwZShhcmcpIT09XCJzdHJpbmdcIil7Ly8gSW5zcGVjdCByZWN1cnNpdmVseVxuYWRkKGFyZyk7fX0pO30pKGFyZ3VtZW50cyk7aWYobWVtb3J5JiYhZmlyaW5nKXtmaXJlKCk7fX1yZXR1cm4gdGhpczt9LC8vIFJlbW92ZSBhIGNhbGxiYWNrIGZyb20gdGhlIGxpc3RcbnJlbW92ZTpmdW5jdGlvbiByZW1vdmUoKXtqUXVlcnkuZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oXyxhcmcpe3ZhciBpbmRleDt3aGlsZSgoaW5kZXg9alF1ZXJ5LmluQXJyYXkoYXJnLGxpc3QsaW5kZXgpKT4tMSl7bGlzdC5zcGxpY2UoaW5kZXgsMSk7Ly8gSGFuZGxlIGZpcmluZyBpbmRleGVzXG5pZihpbmRleDw9ZmlyaW5nSW5kZXgpe2ZpcmluZ0luZGV4LS07fX19KTtyZXR1cm4gdGhpczt9LC8vIENoZWNrIGlmIGEgZ2l2ZW4gY2FsbGJhY2sgaXMgaW4gdGhlIGxpc3QuXG4vLyBJZiBubyBhcmd1bWVudCBpcyBnaXZlbiwgcmV0dXJuIHdoZXRoZXIgb3Igbm90IGxpc3QgaGFzIGNhbGxiYWNrcyBhdHRhY2hlZC5cbmhhczpmdW5jdGlvbiBoYXMoZm4pe3JldHVybiBmbj9qUXVlcnkuaW5BcnJheShmbixsaXN0KT4tMTpsaXN0Lmxlbmd0aD4wO30sLy8gUmVtb3ZlIGFsbCBjYWxsYmFja3MgZnJvbSB0aGUgbGlzdFxuZW1wdHk6ZnVuY3Rpb24gZW1wdHkoKXtpZihsaXN0KXtsaXN0PVtdO31yZXR1cm4gdGhpczt9LC8vIERpc2FibGUgLmZpcmUgYW5kIC5hZGRcbi8vIEFib3J0IGFueSBjdXJyZW50L3BlbmRpbmcgZXhlY3V0aW9uc1xuLy8gQ2xlYXIgYWxsIGNhbGxiYWNrcyBhbmQgdmFsdWVzXG5kaXNhYmxlOmZ1bmN0aW9uIGRpc2FibGUoKXtfbG9ja2VkPXF1ZXVlPVtdO2xpc3Q9bWVtb3J5PVwiXCI7cmV0dXJuIHRoaXM7fSxkaXNhYmxlZDpmdW5jdGlvbiBkaXNhYmxlZCgpe3JldHVybiFsaXN0O30sLy8gRGlzYWJsZSAuZmlyZVxuLy8gQWxzbyBkaXNhYmxlIC5hZGQgdW5sZXNzIHdlIGhhdmUgbWVtb3J5IChzaW5jZSBpdCB3b3VsZCBoYXZlIG5vIGVmZmVjdClcbi8vIEFib3J0IGFueSBwZW5kaW5nIGV4ZWN1dGlvbnNcbmxvY2s6ZnVuY3Rpb24gbG9jaygpe19sb2NrZWQ9cXVldWU9W107aWYoIW1lbW9yeSYmIWZpcmluZyl7bGlzdD1tZW1vcnk9XCJcIjt9cmV0dXJuIHRoaXM7fSxsb2NrZWQ6ZnVuY3Rpb24gbG9ja2VkKCl7cmV0dXJuISFfbG9ja2VkO30sLy8gQ2FsbCBhbGwgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGNvbnRleHQgYW5kIGFyZ3VtZW50c1xuZmlyZVdpdGg6ZnVuY3Rpb24gZmlyZVdpdGgoY29udGV4dCxhcmdzKXtpZighX2xvY2tlZCl7YXJncz1hcmdzfHxbXTthcmdzPVtjb250ZXh0LGFyZ3Muc2xpY2U/YXJncy5zbGljZSgpOmFyZ3NdO3F1ZXVlLnB1c2goYXJncyk7aWYoIWZpcmluZyl7ZmlyZSgpO319cmV0dXJuIHRoaXM7fSwvLyBDYWxsIGFsbCB0aGUgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGFyZ3VtZW50c1xuZmlyZTpmdW5jdGlvbiBmaXJlKCl7c2VsZi5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHRoaXM7fSwvLyBUbyBrbm93IGlmIHRoZSBjYWxsYmFja3MgaGF2ZSBhbHJlYWR5IGJlZW4gY2FsbGVkIGF0IGxlYXN0IG9uY2VcbmZpcmVkOmZ1bmN0aW9uIGZpcmVkKCl7cmV0dXJuISFfZmlyZWQ7fX07cmV0dXJuIHNlbGY7fTtmdW5jdGlvbiBJZGVudGl0eSh2KXtyZXR1cm4gdjt9ZnVuY3Rpb24gVGhyb3dlcihleCl7dGhyb3cgZXg7fWZ1bmN0aW9uIGFkb3B0VmFsdWUodmFsdWUscmVzb2x2ZSxyZWplY3Qpe3ZhciBtZXRob2Q7dHJ5ey8vIENoZWNrIGZvciBwcm9taXNlIGFzcGVjdCBmaXJzdCB0byBwcml2aWxlZ2Ugc3luY2hyb25vdXMgYmVoYXZpb3JcbmlmKHZhbHVlJiZqUXVlcnkuaXNGdW5jdGlvbihtZXRob2Q9dmFsdWUucHJvbWlzZSkpe21ldGhvZC5jYWxsKHZhbHVlKS5kb25lKHJlc29sdmUpLmZhaWwocmVqZWN0KTsvLyBPdGhlciB0aGVuYWJsZXNcbn1lbHNlIGlmKHZhbHVlJiZqUXVlcnkuaXNGdW5jdGlvbihtZXRob2Q9dmFsdWUudGhlbikpe21ldGhvZC5jYWxsKHZhbHVlLHJlc29sdmUscmVqZWN0KTsvLyBPdGhlciBub24tdGhlbmFibGVzXG59ZWxzZXsvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCBvbmx5XG4vLyBTdHJpY3QgbW9kZSBmdW5jdGlvbnMgaW52b2tlZCB3aXRob3V0IC5jYWxsLy5hcHBseSBnZXQgZ2xvYmFsLW9iamVjdCBjb250ZXh0XG5yZXNvbHZlLmNhbGwodW5kZWZpbmVkLHZhbHVlKTt9Ly8gRm9yIFByb21pc2VzL0ErLCBjb252ZXJ0IGV4Y2VwdGlvbnMgaW50byByZWplY3Rpb25zXG4vLyBTaW5jZSBqUXVlcnkud2hlbiBkb2Vzbid0IHVud3JhcCB0aGVuYWJsZXMsIHdlIGNhbiBza2lwIHRoZSBleHRyYSBjaGVja3MgYXBwZWFyaW5nIGluXG4vLyBEZWZlcnJlZCN0aGVuIHRvIGNvbmRpdGlvbmFsbHkgc3VwcHJlc3MgcmVqZWN0aW9uLlxufWNhdGNoKHZhbHVlKXsvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCBvbmx5XG4vLyBTdHJpY3QgbW9kZSBmdW5jdGlvbnMgaW52b2tlZCB3aXRob3V0IC5jYWxsLy5hcHBseSBnZXQgZ2xvYmFsLW9iamVjdCBjb250ZXh0XG5yZWplY3QuY2FsbCh1bmRlZmluZWQsdmFsdWUpO319alF1ZXJ5LmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24gRGVmZXJyZWQoZnVuYyl7dmFyIHR1cGxlcz1bLy8gYWN0aW9uLCBhZGQgbGlzdGVuZXIsIGNhbGxiYWNrcyxcbi8vIC4uLiAudGhlbiBoYW5kbGVycywgYXJndW1lbnQgaW5kZXgsIFtmaW5hbCBzdGF0ZV1cbltcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixqUXVlcnkuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLGpRdWVyeS5DYWxsYmFja3MoXCJtZW1vcnlcIiksMl0sW1wicmVzb2x2ZVwiLFwiZG9uZVwiLGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMCxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxfc3RhdGU9XCJwZW5kaW5nXCIsX3Byb21pc2U9e3N0YXRlOmZ1bmN0aW9uIHN0YXRlKCl7cmV0dXJuIF9zdGF0ZTt9LGFsd2F5czpmdW5jdGlvbiBhbHdheXMoKXtkZWZlcnJlZC5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpO3JldHVybiB0aGlzO30sXCJjYXRjaFwiOmZ1bmN0aW9uIF9jYXRjaChmbil7cmV0dXJuIF9wcm9taXNlLnRoZW4obnVsbCxmbik7fSwvLyBLZWVwIHBpcGUgZm9yIGJhY2stY29tcGF0XG5waXBlOmZ1bmN0aW9uIHBpcGUoKS8qIGZuRG9uZSwgZm5GYWlsLCBmblByb2dyZXNzICove3ZhciBmbnM9YXJndW1lbnRzO3JldHVybiBqUXVlcnkuRGVmZXJyZWQoZnVuY3Rpb24obmV3RGVmZXIpe2pRdWVyeS5lYWNoKHR1cGxlcyxmdW5jdGlvbihpLHR1cGxlKXsvLyBNYXAgdHVwbGVzIChwcm9ncmVzcywgZG9uZSwgZmFpbCkgdG8gYXJndW1lbnRzIChkb25lLCBmYWlsLCBwcm9ncmVzcylcbnZhciBmbj1qUXVlcnkuaXNGdW5jdGlvbihmbnNbdHVwbGVbNF1dKSYmZm5zW3R1cGxlWzRdXTsvLyBkZWZlcnJlZC5wcm9ncmVzcyhmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5ub3RpZnkgfSlcbi8vIGRlZmVycmVkLmRvbmUoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVzb2x2ZSB9KVxuLy8gZGVmZXJyZWQuZmFpbChmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZWplY3QgfSlcbmRlZmVycmVkW3R1cGxlWzFdXShmdW5jdGlvbigpe3ZhciByZXR1cm5lZD1mbiYmZm4uYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKHJldHVybmVkJiZqUXVlcnkuaXNGdW5jdGlvbihyZXR1cm5lZC5wcm9taXNlKSl7cmV0dXJuZWQucHJvbWlzZSgpLnByb2dyZXNzKG5ld0RlZmVyLm5vdGlmeSkuZG9uZShuZXdEZWZlci5yZXNvbHZlKS5mYWlsKG5ld0RlZmVyLnJlamVjdCk7fWVsc2V7bmV3RGVmZXJbdHVwbGVbMF0rXCJXaXRoXCJdKHRoaXMsZm4/W3JldHVybmVkXTphcmd1bWVudHMpO319KTt9KTtmbnM9bnVsbDt9KS5wcm9taXNlKCk7fSx0aGVuOmZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsb25SZWplY3RlZCxvblByb2dyZXNzKXt2YXIgbWF4RGVwdGg9MDtmdW5jdGlvbiByZXNvbHZlKGRlcHRoLGRlZmVycmVkLGhhbmRsZXIsc3BlY2lhbCl7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcyxhcmdzPWFyZ3VtZW50cyxtaWdodFRocm93PWZ1bmN0aW9uIG1pZ2h0VGhyb3coKXt2YXIgcmV0dXJuZWQsdGhlbjsvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuM1xuLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTlcbi8vIElnbm9yZSBkb3VibGUtcmVzb2x1dGlvbiBhdHRlbXB0c1xuaWYoZGVwdGg8bWF4RGVwdGgpe3JldHVybjt9cmV0dXJuZWQ9aGFuZGxlci5hcHBseSh0aGF0LGFyZ3MpOy8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjFcbi8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTQ4XG5pZihyZXR1cm5lZD09PWRlZmVycmVkLnByb21pc2UoKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTt9Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbnMgMi4zLjMuMSwgMy41XG4vLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01NFxuLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNzVcbi8vIFJldHJpZXZlIGB0aGVuYCBvbmx5IG9uY2VcbnRoZW49cmV0dXJuZWQmJigvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy40XG4vLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC02NFxuLy8gT25seSBjaGVjayBvYmplY3RzIGFuZCBmdW5jdGlvbnMgZm9yIHRoZW5hYmlsaXR5XG4odHlwZW9mIHJldHVybmVkPT09XCJ1bmRlZmluZWRcIj9cInVuZGVmaW5lZFwiOl90eXBlb2YocmV0dXJuZWQpKT09PVwib2JqZWN0XCJ8fHR5cGVvZiByZXR1cm5lZD09PVwiZnVuY3Rpb25cIikmJnJldHVybmVkLnRoZW47Ly8gSGFuZGxlIGEgcmV0dXJuZWQgdGhlbmFibGVcbmlmKGpRdWVyeS5pc0Z1bmN0aW9uKHRoZW4pKXsvLyBTcGVjaWFsIHByb2Nlc3NvcnMgKG5vdGlmeSkganVzdCB3YWl0IGZvciByZXNvbHV0aW9uXG5pZihzcGVjaWFsKXt0aGVuLmNhbGwocmV0dXJuZWQscmVzb2x2ZShtYXhEZXB0aCxkZWZlcnJlZCxJZGVudGl0eSxzcGVjaWFsKSxyZXNvbHZlKG1heERlcHRoLGRlZmVycmVkLFRocm93ZXIsc3BlY2lhbCkpOy8vIE5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBhbHNvIGhvb2sgaW50byBwcm9ncmVzc1xufWVsc2V7Ly8gLi4uYW5kIGRpc3JlZ2FyZCBvbGRlciByZXNvbHV0aW9uIHZhbHVlc1xubWF4RGVwdGgrKzt0aGVuLmNhbGwocmV0dXJuZWQscmVzb2x2ZShtYXhEZXB0aCxkZWZlcnJlZCxJZGVudGl0eSxzcGVjaWFsKSxyZXNvbHZlKG1heERlcHRoLGRlZmVycmVkLFRocm93ZXIsc3BlY2lhbCkscmVzb2x2ZShtYXhEZXB0aCxkZWZlcnJlZCxJZGVudGl0eSxkZWZlcnJlZC5ub3RpZnlXaXRoKSk7fS8vIEhhbmRsZSBhbGwgb3RoZXIgcmV0dXJuZWQgdmFsdWVzXG59ZWxzZXsvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG4vLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcbmlmKGhhbmRsZXIhPT1JZGVudGl0eSl7dGhhdD11bmRlZmluZWQ7YXJncz1bcmV0dXJuZWRdO30vLyBQcm9jZXNzIHRoZSB2YWx1ZShzKVxuLy8gRGVmYXVsdCBwcm9jZXNzIGlzIHJlc29sdmVcbihzcGVjaWFsfHxkZWZlcnJlZC5yZXNvbHZlV2l0aCkodGhhdCxhcmdzKTt9fSwvLyBPbmx5IG5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBjYXRjaCBhbmQgcmVqZWN0IGV4Y2VwdGlvbnNcbnByb2Nlc3M9c3BlY2lhbD9taWdodFRocm93OmZ1bmN0aW9uKCl7dHJ5e21pZ2h0VGhyb3coKTt9Y2F0Y2goZSl7aWYoalF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2spe2pRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGUscHJvY2Vzcy5zdGFja1RyYWNlKTt9Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjQuMVxuLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjFcbi8vIElnbm9yZSBwb3N0LXJlc29sdXRpb24gZXhjZXB0aW9uc1xuaWYoZGVwdGgrMT49bWF4RGVwdGgpey8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcbi8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuaWYoaGFuZGxlciE9PVRocm93ZXIpe3RoYXQ9dW5kZWZpbmVkO2FyZ3M9W2VdO31kZWZlcnJlZC5yZWplY3RXaXRoKHRoYXQsYXJncyk7fX19Oy8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4xXG4vLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01N1xuLy8gUmUtcmVzb2x2ZSBwcm9taXNlcyBpbW1lZGlhdGVseSB0byBkb2RnZSBmYWxzZSByZWplY3Rpb24gZnJvbVxuLy8gc3Vic2VxdWVudCBlcnJvcnNcbmlmKGRlcHRoKXtwcm9jZXNzKCk7fWVsc2V7Ly8gQ2FsbCBhbiBvcHRpb25hbCBob29rIHRvIHJlY29yZCB0aGUgc3RhY2ssIGluIGNhc2Ugb2YgZXhjZXB0aW9uXG4vLyBzaW5jZSBpdCdzIG90aGVyd2lzZSBsb3N0IHdoZW4gZXhlY3V0aW9uIGdvZXMgYXN5bmNcbmlmKGpRdWVyeS5EZWZlcnJlZC5nZXRTdGFja0hvb2spe3Byb2Nlc3Muc3RhY2tUcmFjZT1qUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKCk7fXdpbmRvdy5zZXRUaW1lb3V0KHByb2Nlc3MpO319O31yZXR1cm4galF1ZXJ5LkRlZmVycmVkKGZ1bmN0aW9uKG5ld0RlZmVyKXsvLyBwcm9ncmVzc19oYW5kbGVycy5hZGQoIC4uLiApXG50dXBsZXNbMF1bM10uYWRkKHJlc29sdmUoMCxuZXdEZWZlcixqUXVlcnkuaXNGdW5jdGlvbihvblByb2dyZXNzKT9vblByb2dyZXNzOklkZW50aXR5LG5ld0RlZmVyLm5vdGlmeVdpdGgpKTsvLyBmdWxmaWxsZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxudHVwbGVzWzFdWzNdLmFkZChyZXNvbHZlKDAsbmV3RGVmZXIsalF1ZXJ5LmlzRnVuY3Rpb24ob25GdWxmaWxsZWQpP29uRnVsZmlsbGVkOklkZW50aXR5KSk7Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxudHVwbGVzWzJdWzNdLmFkZChyZXNvbHZlKDAsbmV3RGVmZXIsalF1ZXJ5LmlzRnVuY3Rpb24ob25SZWplY3RlZCk/b25SZWplY3RlZDpUaHJvd2VyKSk7fSkucHJvbWlzZSgpO30sLy8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuLy8gSWYgb2JqIGlzIHByb3ZpZGVkLCB0aGUgcHJvbWlzZSBhc3BlY3QgaXMgYWRkZWQgdG8gdGhlIG9iamVjdFxucHJvbWlzZTpmdW5jdGlvbiBwcm9taXNlKG9iail7cmV0dXJuIG9iaiE9bnVsbD9qUXVlcnkuZXh0ZW5kKG9iaixfcHJvbWlzZSk6X3Byb21pc2U7fX0sZGVmZXJyZWQ9e307Ly8gQWRkIGxpc3Qtc3BlY2lmaWMgbWV0aG9kc1xualF1ZXJ5LmVhY2godHVwbGVzLGZ1bmN0aW9uKGksdHVwbGUpe3ZhciBsaXN0PXR1cGxlWzJdLHN0YXRlU3RyaW5nPXR1cGxlWzVdOy8vIHByb21pc2UucHJvZ3Jlc3MgPSBsaXN0LmFkZFxuLy8gcHJvbWlzZS5kb25lID0gbGlzdC5hZGRcbi8vIHByb21pc2UuZmFpbCA9IGxpc3QuYWRkXG5fcHJvbWlzZVt0dXBsZVsxXV09bGlzdC5hZGQ7Ly8gSGFuZGxlIHN0YXRlXG5pZihzdGF0ZVN0cmluZyl7bGlzdC5hZGQoZnVuY3Rpb24oKXsvLyBzdGF0ZSA9IFwicmVzb2x2ZWRcIiAoaS5lLiwgZnVsZmlsbGVkKVxuLy8gc3RhdGUgPSBcInJlamVjdGVkXCJcbl9zdGF0ZT1zdGF0ZVN0cmluZzt9LC8vIHJlamVjdGVkX2NhbGxiYWNrcy5kaXNhYmxlXG4vLyBmdWxmaWxsZWRfY2FsbGJhY2tzLmRpc2FibGVcbnR1cGxlc1szLWldWzJdLmRpc2FibGUsLy8gcHJvZ3Jlc3NfY2FsbGJhY2tzLmxvY2tcbnR1cGxlc1swXVsyXS5sb2NrKTt9Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMuZmlyZVxuLy8gZnVsZmlsbGVkX2hhbmRsZXJzLmZpcmVcbi8vIHJlamVjdGVkX2hhbmRsZXJzLmZpcmVcbmxpc3QuYWRkKHR1cGxlWzNdLmZpcmUpOy8vIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5ub3RpZnlXaXRoKC4uLikgfVxuLy8gZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZXNvbHZlV2l0aCguLi4pIH1cbi8vIGRlZmVycmVkLnJlamVjdCA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZWplY3RXaXRoKC4uLikgfVxuZGVmZXJyZWRbdHVwbGVbMF1dPWZ1bmN0aW9uKCl7ZGVmZXJyZWRbdHVwbGVbMF0rXCJXaXRoXCJdKHRoaXM9PT1kZWZlcnJlZD91bmRlZmluZWQ6dGhpcyxhcmd1bWVudHMpO3JldHVybiB0aGlzO307Ly8gZGVmZXJyZWQubm90aWZ5V2l0aCA9IGxpc3QuZmlyZVdpdGhcbi8vIGRlZmVycmVkLnJlc29sdmVXaXRoID0gbGlzdC5maXJlV2l0aFxuLy8gZGVmZXJyZWQucmVqZWN0V2l0aCA9IGxpc3QuZmlyZVdpdGhcbmRlZmVycmVkW3R1cGxlWzBdK1wiV2l0aFwiXT1saXN0LmZpcmVXaXRoO30pOy8vIE1ha2UgdGhlIGRlZmVycmVkIGEgcHJvbWlzZVxuX3Byb21pc2UucHJvbWlzZShkZWZlcnJlZCk7Ly8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxuaWYoZnVuYyl7ZnVuYy5jYWxsKGRlZmVycmVkLGRlZmVycmVkKTt9Ly8gQWxsIGRvbmUhXG5yZXR1cm4gZGVmZXJyZWQ7fSwvLyBEZWZlcnJlZCBoZWxwZXJcbndoZW46ZnVuY3Rpb24gd2hlbihzaW5nbGVWYWx1ZSl7dmFyLy8gY291bnQgb2YgdW5jb21wbGV0ZWQgc3Vib3JkaW5hdGVzXG5yZW1haW5pbmc9YXJndW1lbnRzLmxlbmd0aCwvLyBjb3VudCBvZiB1bnByb2Nlc3NlZCBhcmd1bWVudHNcbmk9cmVtYWluaW5nLC8vIHN1Ym9yZGluYXRlIGZ1bGZpbGxtZW50IGRhdGFcbnJlc29sdmVDb250ZXh0cz1BcnJheShpKSxyZXNvbHZlVmFsdWVzPV9zbGljZS5jYWxsKGFyZ3VtZW50cyksLy8gdGhlIG1hc3RlciBEZWZlcnJlZFxubWFzdGVyPWpRdWVyeS5EZWZlcnJlZCgpLC8vIHN1Ym9yZGluYXRlIGNhbGxiYWNrIGZhY3RvcnlcbnVwZGF0ZUZ1bmM9ZnVuY3Rpb24gdXBkYXRlRnVuYyhpKXtyZXR1cm4gZnVuY3Rpb24odmFsdWUpe3Jlc29sdmVDb250ZXh0c1tpXT10aGlzO3Jlc29sdmVWYWx1ZXNbaV09YXJndW1lbnRzLmxlbmd0aD4xP19zbGljZS5jYWxsKGFyZ3VtZW50cyk6dmFsdWU7aWYoISAtLXJlbWFpbmluZyl7bWFzdGVyLnJlc29sdmVXaXRoKHJlc29sdmVDb250ZXh0cyxyZXNvbHZlVmFsdWVzKTt9fTt9Oy8vIFNpbmdsZS0gYW5kIGVtcHR5IGFyZ3VtZW50cyBhcmUgYWRvcHRlZCBsaWtlIFByb21pc2UucmVzb2x2ZVxuaWYocmVtYWluaW5nPD0xKXthZG9wdFZhbHVlKHNpbmdsZVZhbHVlLG1hc3Rlci5kb25lKHVwZGF0ZUZ1bmMoaSkpLnJlc29sdmUsbWFzdGVyLnJlamVjdCk7Ly8gVXNlIC50aGVuKCkgdG8gdW53cmFwIHNlY29uZGFyeSB0aGVuYWJsZXMgKGNmLiBnaC0zMDAwKVxuaWYobWFzdGVyLnN0YXRlKCk9PT1cInBlbmRpbmdcInx8alF1ZXJ5LmlzRnVuY3Rpb24ocmVzb2x2ZVZhbHVlc1tpXSYmcmVzb2x2ZVZhbHVlc1tpXS50aGVuKSl7cmV0dXJuIG1hc3Rlci50aGVuKCk7fX0vLyBNdWx0aXBsZSBhcmd1bWVudHMgYXJlIGFnZ3JlZ2F0ZWQgbGlrZSBQcm9taXNlLmFsbCBhcnJheSBlbGVtZW50c1xud2hpbGUoaS0tKXthZG9wdFZhbHVlKHJlc29sdmVWYWx1ZXNbaV0sdXBkYXRlRnVuYyhpKSxtYXN0ZXIucmVqZWN0KTt9cmV0dXJuIG1hc3Rlci5wcm9taXNlKCk7fX0pOy8vIFRoZXNlIHVzdWFsbHkgaW5kaWNhdGUgYSBwcm9ncmFtbWVyIG1pc3Rha2UgZHVyaW5nIGRldmVsb3BtZW50LFxuLy8gd2FybiBhYm91dCB0aGVtIEFTQVAgcmF0aGVyIHRoYW4gc3dhbGxvd2luZyB0aGVtIGJ5IGRlZmF1bHQuXG52YXIgcmVycm9yTmFtZXM9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87alF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2s9ZnVuY3Rpb24oZXJyb3Isc3RhY2spey8vIFN1cHBvcnQ6IElFIDggLSA5IG9ubHlcbi8vIENvbnNvbGUgZXhpc3RzIHdoZW4gZGV2IHRvb2xzIGFyZSBvcGVuLCB3aGljaCBjYW4gaGFwcGVuIGF0IGFueSB0aW1lXG5pZih3aW5kb3cuY29uc29sZSYmd2luZG93LmNvbnNvbGUud2FybiYmZXJyb3ImJnJlcnJvck5hbWVzLnRlc3QoZXJyb3IubmFtZSkpe3dpbmRvdy5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIitlcnJvci5tZXNzYWdlLGVycm9yLnN0YWNrLHN0YWNrKTt9fTtqUXVlcnkucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oZXJyb3Ipe3dpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZXJyb3I7fSk7fTsvLyBUaGUgZGVmZXJyZWQgdXNlZCBvbiBET00gcmVhZHlcbnZhciByZWFkeUxpc3Q9alF1ZXJ5LkRlZmVycmVkKCk7alF1ZXJ5LmZuLnJlYWR5PWZ1bmN0aW9uKGZuKXtyZWFkeUxpc3QudGhlbihmbikvLyBXcmFwIGpRdWVyeS5yZWFkeUV4Y2VwdGlvbiBpbiBhIGZ1bmN0aW9uIHNvIHRoYXQgdGhlIGxvb2t1cFxuLy8gaGFwcGVucyBhdCB0aGUgdGltZSBvZiBlcnJvciBoYW5kbGluZyBpbnN0ZWFkIG9mIGNhbGxiYWNrXG4vLyByZWdpc3RyYXRpb24uXG4uY2F0Y2goZnVuY3Rpb24oZXJyb3Ipe2pRdWVyeS5yZWFkeUV4Y2VwdGlvbihlcnJvcik7fSk7cmV0dXJuIHRoaXM7fTtqUXVlcnkuZXh0ZW5kKHsvLyBJcyB0aGUgRE9NIHJlYWR5IHRvIGJlIHVzZWQ/IFNldCB0byB0cnVlIG9uY2UgaXQgb2NjdXJzLlxuaXNSZWFkeTpmYWxzZSwvLyBBIGNvdW50ZXIgdG8gdHJhY2sgaG93IG1hbnkgaXRlbXMgdG8gd2FpdCBmb3IgYmVmb3JlXG4vLyB0aGUgcmVhZHkgZXZlbnQgZmlyZXMuIFNlZSAjNjc4MVxucmVhZHlXYWl0OjEsLy8gSG9sZCAob3IgcmVsZWFzZSkgdGhlIHJlYWR5IGV2ZW50XG5ob2xkUmVhZHk6ZnVuY3Rpb24gaG9sZFJlYWR5KGhvbGQpe2lmKGhvbGQpe2pRdWVyeS5yZWFkeVdhaXQrKzt9ZWxzZXtqUXVlcnkucmVhZHkodHJ1ZSk7fX0sLy8gSGFuZGxlIHdoZW4gdGhlIERPTSBpcyByZWFkeVxucmVhZHk6ZnVuY3Rpb24gcmVhZHkod2FpdCl7Ly8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuaWYod2FpdD09PXRydWU/LS1qUXVlcnkucmVhZHlXYWl0OmpRdWVyeS5pc1JlYWR5KXtyZXR1cm47fS8vIFJlbWVtYmVyIHRoYXQgdGhlIERPTSBpcyByZWFkeVxualF1ZXJ5LmlzUmVhZHk9dHJ1ZTsvLyBJZiBhIG5vcm1hbCBET00gUmVhZHkgZXZlbnQgZmlyZWQsIGRlY3JlbWVudCwgYW5kIHdhaXQgaWYgbmVlZCBiZVxuaWYod2FpdCE9PXRydWUmJi0talF1ZXJ5LnJlYWR5V2FpdD4wKXtyZXR1cm47fS8vIElmIHRoZXJlIGFyZSBmdW5jdGlvbnMgYm91bmQsIHRvIGV4ZWN1dGVcbnJlYWR5TGlzdC5yZXNvbHZlV2l0aChkb2N1bWVudCxbalF1ZXJ5XSk7fX0pO2pRdWVyeS5yZWFkeS50aGVuPXJlYWR5TGlzdC50aGVuOy8vIFRoZSByZWFkeSBldmVudCBoYW5kbGVyIGFuZCBzZWxmIGNsZWFudXAgbWV0aG9kXG5mdW5jdGlvbiBjb21wbGV0ZWQoKXtkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGNvbXBsZXRlZCk7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsY29tcGxldGVkKTtqUXVlcnkucmVhZHkoKTt9Ly8gQ2F0Y2ggY2FzZXMgd2hlcmUgJChkb2N1bWVudCkucmVhZHkoKSBpcyBjYWxsZWRcbi8vIGFmdGVyIHRoZSBicm93c2VyIGV2ZW50IGhhcyBhbHJlYWR5IG9jY3VycmVkLlxuLy8gU3VwcG9ydDogSUUgPD05IC0gMTAgb25seVxuLy8gT2xkZXIgSUUgc29tZXRpbWVzIHNpZ25hbHMgXCJpbnRlcmFjdGl2ZVwiIHRvbyBzb29uXG5pZihkb2N1bWVudC5yZWFkeVN0YXRlPT09XCJjb21wbGV0ZVwifHxkb2N1bWVudC5yZWFkeVN0YXRlIT09XCJsb2FkaW5nXCImJiFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwpey8vIEhhbmRsZSBpdCBhc3luY2hyb25vdXNseSB0byBhbGxvdyBzY3JpcHRzIHRoZSBvcHBvcnR1bml0eSB0byBkZWxheSByZWFkeVxud2luZG93LnNldFRpbWVvdXQoalF1ZXJ5LnJlYWR5KTt9ZWxzZXsvLyBVc2UgdGhlIGhhbmR5IGV2ZW50IGNhbGxiYWNrXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGNvbXBsZXRlZCk7Ly8gQSBmYWxsYmFjayB0byB3aW5kb3cub25sb2FkLCB0aGF0IHdpbGwgYWx3YXlzIHdvcmtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGNvbXBsZXRlZCk7fS8vIE11bHRpZnVuY3Rpb25hbCBtZXRob2QgdG8gZ2V0IGFuZCBzZXQgdmFsdWVzIG9mIGEgY29sbGVjdGlvblxuLy8gVGhlIHZhbHVlL3MgY2FuIG9wdGlvbmFsbHkgYmUgZXhlY3V0ZWQgaWYgaXQncyBhIGZ1bmN0aW9uXG52YXIgYWNjZXNzPWZ1bmN0aW9uIGFjY2VzcyhlbGVtcyxmbixrZXksdmFsdWUsY2hhaW5hYmxlLGVtcHR5R2V0LHJhdyl7dmFyIGk9MCxsZW49ZWxlbXMubGVuZ3RoLGJ1bGs9a2V5PT1udWxsOy8vIFNldHMgbWFueSB2YWx1ZXNcbmlmKGpRdWVyeS50eXBlKGtleSk9PT1cIm9iamVjdFwiKXtjaGFpbmFibGU9dHJ1ZTtmb3IoaSBpbiBrZXkpe2FjY2VzcyhlbGVtcyxmbixpLGtleVtpXSx0cnVlLGVtcHR5R2V0LHJhdyk7fS8vIFNldHMgb25lIHZhbHVlXG59ZWxzZSBpZih2YWx1ZSE9PXVuZGVmaW5lZCl7Y2hhaW5hYmxlPXRydWU7aWYoIWpRdWVyeS5pc0Z1bmN0aW9uKHZhbHVlKSl7cmF3PXRydWU7fWlmKGJ1bGspey8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxuaWYocmF3KXtmbi5jYWxsKGVsZW1zLHZhbHVlKTtmbj1udWxsOy8vIC4uLmV4Y2VwdCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvbiB2YWx1ZXNcbn1lbHNle2J1bGs9Zm47Zm49ZnVuY3Rpb24gZm4oZWxlbSxrZXksdmFsdWUpe3JldHVybiBidWxrLmNhbGwoalF1ZXJ5KGVsZW0pLHZhbHVlKTt9O319aWYoZm4pe2Zvcig7aTxsZW47aSsrKXtmbihlbGVtc1tpXSxrZXkscmF3P3ZhbHVlOnZhbHVlLmNhbGwoZWxlbXNbaV0saSxmbihlbGVtc1tpXSxrZXkpKSk7fX19aWYoY2hhaW5hYmxlKXtyZXR1cm4gZWxlbXM7fS8vIEdldHNcbmlmKGJ1bGspe3JldHVybiBmbi5jYWxsKGVsZW1zKTt9cmV0dXJuIGxlbj9mbihlbGVtc1swXSxrZXkpOmVtcHR5R2V0O307dmFyIGFjY2VwdERhdGE9ZnVuY3Rpb24gYWNjZXB0RGF0YShvd25lcil7Ly8gQWNjZXB0cyBvbmx5OlxuLy8gIC0gTm9kZVxuLy8gICAgLSBOb2RlLkVMRU1FTlRfTk9ERVxuLy8gICAgLSBOb2RlLkRPQ1VNRU5UX05PREVcbi8vICAtIE9iamVjdFxuLy8gICAgLSBBbnlcbnJldHVybiBvd25lci5ub2RlVHlwZT09PTF8fG93bmVyLm5vZGVUeXBlPT09OXx8IStvd25lci5ub2RlVHlwZTt9O2Z1bmN0aW9uIERhdGEoKXt0aGlzLmV4cGFuZG89alF1ZXJ5LmV4cGFuZG8rRGF0YS51aWQrKzt9RGF0YS51aWQ9MTtEYXRhLnByb3RvdHlwZT17Y2FjaGU6ZnVuY3Rpb24gY2FjaGUob3duZXIpey8vIENoZWNrIGlmIHRoZSBvd25lciBvYmplY3QgYWxyZWFkeSBoYXMgYSBjYWNoZVxudmFyIHZhbHVlPW93bmVyW3RoaXMuZXhwYW5kb107Ly8gSWYgbm90LCBjcmVhdGUgb25lXG5pZighdmFsdWUpe3ZhbHVlPXt9Oy8vIFdlIGNhbiBhY2NlcHQgZGF0YSBmb3Igbm9uLWVsZW1lbnQgbm9kZXMgaW4gbW9kZXJuIGJyb3dzZXJzLFxuLy8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSAjODMzNS5cbi8vIEFsd2F5cyByZXR1cm4gYW4gZW1wdHkgb2JqZWN0LlxuaWYoYWNjZXB0RGF0YShvd25lcikpey8vIElmIGl0IGlzIGEgbm9kZSB1bmxpa2VseSB0byBiZSBzdHJpbmdpZnktZWQgb3IgbG9vcGVkIG92ZXJcbi8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG5pZihvd25lci5ub2RlVHlwZSl7b3duZXJbdGhpcy5leHBhbmRvXT12YWx1ZTsvLyBPdGhlcndpc2Ugc2VjdXJlIGl0IGluIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHlcbi8vIGNvbmZpZ3VyYWJsZSBtdXN0IGJlIHRydWUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXG4vLyBkZWxldGVkIHdoZW4gZGF0YSBpcyByZW1vdmVkXG59ZWxzZXtPYmplY3QuZGVmaW5lUHJvcGVydHkob3duZXIsdGhpcy5leHBhbmRvLHt2YWx1ZTp2YWx1ZSxjb25maWd1cmFibGU6dHJ1ZX0pO319fXJldHVybiB2YWx1ZTt9LHNldDpmdW5jdGlvbiBzZXQob3duZXIsZGF0YSx2YWx1ZSl7dmFyIHByb3AsY2FjaGU9dGhpcy5jYWNoZShvd25lcik7Ly8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuLy8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuaWYodHlwZW9mIGRhdGE9PT1cInN0cmluZ1wiKXtjYWNoZVtqUXVlcnkuY2FtZWxDYXNlKGRhdGEpXT12YWx1ZTsvLyBIYW5kbGU6IFsgb3duZXIsIHsgcHJvcGVydGllcyB9IF0gYXJnc1xufWVsc2V7Ly8gQ29weSB0aGUgcHJvcGVydGllcyBvbmUtYnktb25lIHRvIHRoZSBjYWNoZSBvYmplY3RcbmZvcihwcm9wIGluIGRhdGEpe2NhY2hlW2pRdWVyeS5jYW1lbENhc2UocHJvcCldPWRhdGFbcHJvcF07fX1yZXR1cm4gY2FjaGU7fSxnZXQ6ZnVuY3Rpb24gZ2V0KG93bmVyLGtleSl7cmV0dXJuIGtleT09PXVuZGVmaW5lZD90aGlzLmNhY2hlKG93bmVyKTovLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG5vd25lclt0aGlzLmV4cGFuZG9dJiZvd25lclt0aGlzLmV4cGFuZG9dW2pRdWVyeS5jYW1lbENhc2Uoa2V5KV07fSxhY2Nlc3M6ZnVuY3Rpb24gYWNjZXNzKG93bmVyLGtleSx2YWx1ZSl7Ly8gSW4gY2FzZXMgd2hlcmUgZWl0aGVyOlxuLy9cbi8vICAgMS4gTm8ga2V5IHdhcyBzcGVjaWZpZWRcbi8vICAgMi4gQSBzdHJpbmcga2V5IHdhcyBzcGVjaWZpZWQsIGJ1dCBubyB2YWx1ZSBwcm92aWRlZFxuLy9cbi8vIFRha2UgdGhlIFwicmVhZFwiIHBhdGggYW5kIGFsbG93IHRoZSBnZXQgbWV0aG9kIHRvIGRldGVybWluZVxuLy8gd2hpY2ggdmFsdWUgdG8gcmV0dXJuLCByZXNwZWN0aXZlbHkgZWl0aGVyOlxuLy9cbi8vICAgMS4gVGhlIGVudGlyZSBjYWNoZSBvYmplY3Rcbi8vICAgMi4gVGhlIGRhdGEgc3RvcmVkIGF0IHRoZSBrZXlcbi8vXG5pZihrZXk9PT11bmRlZmluZWR8fGtleSYmdHlwZW9mIGtleT09PVwic3RyaW5nXCImJnZhbHVlPT09dW5kZWZpbmVkKXtyZXR1cm4gdGhpcy5nZXQob3duZXIsa2V5KTt9Ly8gV2hlbiB0aGUga2V5IGlzIG5vdCBhIHN0cmluZywgb3IgYm90aCBhIGtleSBhbmQgdmFsdWVcbi8vIGFyZSBzcGVjaWZpZWQsIHNldCBvciBleHRlbmQgKGV4aXN0aW5nIG9iamVjdHMpIHdpdGggZWl0aGVyOlxuLy9cbi8vICAgMS4gQW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcbi8vICAgMi4gQSBrZXkgYW5kIHZhbHVlXG4vL1xudGhpcy5zZXQob3duZXIsa2V5LHZhbHVlKTsvLyBTaW5jZSB0aGUgXCJzZXRcIiBwYXRoIGNhbiBoYXZlIHR3byBwb3NzaWJsZSBlbnRyeSBwb2ludHNcbi8vIHJldHVybiB0aGUgZXhwZWN0ZWQgZGF0YSBiYXNlZCBvbiB3aGljaCBwYXRoIHdhcyB0YWtlblsqXVxucmV0dXJuIHZhbHVlIT09dW5kZWZpbmVkP3ZhbHVlOmtleTt9LHJlbW92ZTpmdW5jdGlvbiByZW1vdmUob3duZXIsa2V5KXt2YXIgaSxjYWNoZT1vd25lclt0aGlzLmV4cGFuZG9dO2lmKGNhY2hlPT09dW5kZWZpbmVkKXtyZXR1cm47fWlmKGtleSE9PXVuZGVmaW5lZCl7Ly8gU3VwcG9ydCBhcnJheSBvciBzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nIG9mIGtleXNcbmlmKGpRdWVyeS5pc0FycmF5KGtleSkpey8vIElmIGtleSBpcyBhbiBhcnJheSBvZiBrZXlzLi4uXG4vLyBXZSBhbHdheXMgc2V0IGNhbWVsQ2FzZSBrZXlzLCBzbyByZW1vdmUgdGhhdC5cbmtleT1rZXkubWFwKGpRdWVyeS5jYW1lbENhc2UpO31lbHNle2tleT1qUXVlcnkuY2FtZWxDYXNlKGtleSk7Ly8gSWYgYSBrZXkgd2l0aCB0aGUgc3BhY2VzIGV4aXN0cywgdXNlIGl0LlxuLy8gT3RoZXJ3aXNlLCBjcmVhdGUgYW4gYXJyYXkgYnkgbWF0Y2hpbmcgbm9uLXdoaXRlc3BhY2VcbmtleT1rZXkgaW4gY2FjaGU/W2tleV06a2V5Lm1hdGNoKHJub3RodG1sd2hpdGUpfHxbXTt9aT1rZXkubGVuZ3RoO3doaWxlKGktLSl7ZGVsZXRlIGNhY2hlW2tleVtpXV07fX0vLyBSZW1vdmUgdGhlIGV4cGFuZG8gaWYgdGhlcmUncyBubyBtb3JlIGRhdGFcbmlmKGtleT09PXVuZGVmaW5lZHx8alF1ZXJ5LmlzRW1wdHlPYmplY3QoY2FjaGUpKXsvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1XG4vLyBXZWJraXQgJiBCbGluayBwZXJmb3JtYW5jZSBzdWZmZXJzIHdoZW4gZGVsZXRpbmcgcHJvcGVydGllc1xuLy8gZnJvbSBET00gbm9kZXMsIHNvIHNldCB0byB1bmRlZmluZWQgaW5zdGVhZFxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzc4NjA3IChidWcgcmVzdHJpY3RlZClcbmlmKG93bmVyLm5vZGVUeXBlKXtvd25lclt0aGlzLmV4cGFuZG9dPXVuZGVmaW5lZDt9ZWxzZXtkZWxldGUgb3duZXJbdGhpcy5leHBhbmRvXTt9fX0saGFzRGF0YTpmdW5jdGlvbiBoYXNEYXRhKG93bmVyKXt2YXIgY2FjaGU9b3duZXJbdGhpcy5leHBhbmRvXTtyZXR1cm4gY2FjaGUhPT11bmRlZmluZWQmJiFqUXVlcnkuaXNFbXB0eU9iamVjdChjYWNoZSk7fX07dmFyIGRhdGFQcml2PW5ldyBEYXRhKCk7dmFyIGRhdGFVc2VyPW5ldyBEYXRhKCk7Ly9cdEltcGxlbWVudGF0aW9uIFN1bW1hcnlcbi8vXG4vL1x0MS4gRW5mb3JjZSBBUEkgc3VyZmFjZSBhbmQgc2VtYW50aWMgY29tcGF0aWJpbGl0eSB3aXRoIDEuOS54IGJyYW5jaFxuLy9cdDIuIEltcHJvdmUgdGhlIG1vZHVsZSdzIG1haW50YWluYWJpbGl0eSBieSByZWR1Y2luZyB0aGUgc3RvcmFnZVxuLy9cdFx0cGF0aHMgdG8gYSBzaW5nbGUgbWVjaGFuaXNtLlxuLy9cdDMuIFVzZSB0aGUgc2FtZSBzaW5nbGUgbWVjaGFuaXNtIHRvIHN1cHBvcnQgXCJwcml2YXRlXCIgYW5kIFwidXNlclwiIGRhdGEuXG4vL1x0NC4gX05ldmVyXyBleHBvc2UgXCJwcml2YXRlXCIgZGF0YSB0byB1c2VyIGNvZGUgKFRPRE86IERyb3AgX2RhdGEsIF9yZW1vdmVEYXRhKVxuLy9cdDUuIEF2b2lkIGV4cG9zaW5nIGltcGxlbWVudGF0aW9uIGRldGFpbHMgb24gdXNlciBvYmplY3RzIChlZy4gZXhwYW5kbyBwcm9wZXJ0aWVzKVxuLy9cdDYuIFByb3ZpZGUgYSBjbGVhciBwYXRoIGZvciBpbXBsZW1lbnRhdGlvbiB1cGdyYWRlIHRvIFdlYWtNYXAgaW4gMjAxNFxudmFyIHJicmFjZT0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8scm11bHRpRGFzaD0vW0EtWl0vZztmdW5jdGlvbiBnZXREYXRhKGRhdGEpe2lmKGRhdGE9PT1cInRydWVcIil7cmV0dXJuIHRydWU7fWlmKGRhdGE9PT1cImZhbHNlXCIpe3JldHVybiBmYWxzZTt9aWYoZGF0YT09PVwibnVsbFwiKXtyZXR1cm4gbnVsbDt9Ly8gT25seSBjb252ZXJ0IHRvIGEgbnVtYmVyIGlmIGl0IGRvZXNuJ3QgY2hhbmdlIHRoZSBzdHJpbmdcbmlmKGRhdGE9PT0rZGF0YStcIlwiKXtyZXR1cm4rZGF0YTt9aWYocmJyYWNlLnRlc3QoZGF0YSkpe3JldHVybiBKU09OLnBhcnNlKGRhdGEpO31yZXR1cm4gZGF0YTt9ZnVuY3Rpb24gZGF0YUF0dHIoZWxlbSxrZXksZGF0YSl7dmFyIG5hbWU7Ly8gSWYgbm90aGluZyB3YXMgZm91bmQgaW50ZXJuYWxseSwgdHJ5IHRvIGZldGNoIGFueVxuLy8gZGF0YSBmcm9tIHRoZSBIVE1MNSBkYXRhLSogYXR0cmlidXRlXG5pZihkYXRhPT09dW5kZWZpbmVkJiZlbGVtLm5vZGVUeXBlPT09MSl7bmFtZT1cImRhdGEtXCIra2V5LnJlcGxhY2Uocm11bHRpRGFzaCxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpO2RhdGE9ZWxlbS5nZXRBdHRyaWJ1dGUobmFtZSk7aWYodHlwZW9mIGRhdGE9PT1cInN0cmluZ1wiKXt0cnl7ZGF0YT1nZXREYXRhKGRhdGEpO31jYXRjaChlKXt9Ly8gTWFrZSBzdXJlIHdlIHNldCB0aGUgZGF0YSBzbyBpdCBpc24ndCBjaGFuZ2VkIGxhdGVyXG5kYXRhVXNlci5zZXQoZWxlbSxrZXksZGF0YSk7fWVsc2V7ZGF0YT11bmRlZmluZWQ7fX1yZXR1cm4gZGF0YTt9alF1ZXJ5LmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbiBoYXNEYXRhKGVsZW0pe3JldHVybiBkYXRhVXNlci5oYXNEYXRhKGVsZW0pfHxkYXRhUHJpdi5oYXNEYXRhKGVsZW0pO30sZGF0YTpmdW5jdGlvbiBkYXRhKGVsZW0sbmFtZSxfZGF0YSl7cmV0dXJuIGRhdGFVc2VyLmFjY2VzcyhlbGVtLG5hbWUsX2RhdGEpO30scmVtb3ZlRGF0YTpmdW5jdGlvbiByZW1vdmVEYXRhKGVsZW0sbmFtZSl7ZGF0YVVzZXIucmVtb3ZlKGVsZW0sbmFtZSk7fSwvLyBUT0RPOiBOb3cgdGhhdCBhbGwgY2FsbHMgdG8gX2RhdGEgYW5kIF9yZW1vdmVEYXRhIGhhdmUgYmVlbiByZXBsYWNlZFxuLy8gd2l0aCBkaXJlY3QgY2FsbHMgdG8gZGF0YVByaXYgbWV0aG9kcywgdGhlc2UgY2FuIGJlIGRlcHJlY2F0ZWQuXG5fZGF0YTpmdW5jdGlvbiBfZGF0YShlbGVtLG5hbWUsZGF0YSl7cmV0dXJuIGRhdGFQcml2LmFjY2VzcyhlbGVtLG5hbWUsZGF0YSk7fSxfcmVtb3ZlRGF0YTpmdW5jdGlvbiBfcmVtb3ZlRGF0YShlbGVtLG5hbWUpe2RhdGFQcml2LnJlbW92ZShlbGVtLG5hbWUpO319KTtqUXVlcnkuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uIGRhdGEoa2V5LHZhbHVlKXt2YXIgaSxuYW1lLGRhdGEsZWxlbT10aGlzWzBdLGF0dHJzPWVsZW0mJmVsZW0uYXR0cmlidXRlczsvLyBHZXRzIGFsbCB2YWx1ZXNcbmlmKGtleT09PXVuZGVmaW5lZCl7aWYodGhpcy5sZW5ndGgpe2RhdGE9ZGF0YVVzZXIuZ2V0KGVsZW0pO2lmKGVsZW0ubm9kZVR5cGU9PT0xJiYhZGF0YVByaXYuZ2V0KGVsZW0sXCJoYXNEYXRhQXR0cnNcIikpe2k9YXR0cnMubGVuZ3RoO3doaWxlKGktLSl7Ly8gU3VwcG9ydDogSUUgMTEgb25seVxuLy8gVGhlIGF0dHJzIGVsZW1lbnRzIGNhbiBiZSBudWxsICgjMTQ4OTQpXG5pZihhdHRyc1tpXSl7bmFtZT1hdHRyc1tpXS5uYW1lO2lmKG5hbWUuaW5kZXhPZihcImRhdGEtXCIpPT09MCl7bmFtZT1qUXVlcnkuY2FtZWxDYXNlKG5hbWUuc2xpY2UoNSkpO2RhdGFBdHRyKGVsZW0sbmFtZSxkYXRhW25hbWVdKTt9fX1kYXRhUHJpdi5zZXQoZWxlbSxcImhhc0RhdGFBdHRyc1wiLHRydWUpO319cmV0dXJuIGRhdGE7fS8vIFNldHMgbXVsdGlwbGUgdmFsdWVzXG5pZigodHlwZW9mIGtleT09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKGtleSkpPT09XCJvYmplY3RcIil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RhdGFVc2VyLnNldCh0aGlzLGtleSk7fSk7fXJldHVybiBhY2Nlc3ModGhpcyxmdW5jdGlvbih2YWx1ZSl7dmFyIGRhdGE7Ly8gVGhlIGNhbGxpbmcgalF1ZXJ5IG9iamVjdCAoZWxlbWVudCBtYXRjaGVzKSBpcyBub3QgZW1wdHlcbi8vIChhbmQgdGhlcmVmb3JlIGhhcyBhbiBlbGVtZW50IGFwcGVhcnMgYXQgdGhpc1sgMCBdKSBhbmQgdGhlXG4vLyBgdmFsdWVgIHBhcmFtZXRlciB3YXMgbm90IHVuZGVmaW5lZC4gQW4gZW1wdHkgalF1ZXJ5IG9iamVjdFxuLy8gd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgZm9yIGVsZW0gPSB0aGlzWyAwIF0gd2hpY2ggd2lsbFxuLy8gdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFuIGF0dGVtcHQgdG8gcmVhZCBhIGRhdGEgY2FjaGUgaXMgbWFkZS5cbmlmKGVsZW0mJnZhbHVlPT09dW5kZWZpbmVkKXsvLyBBdHRlbXB0IHRvIGdldCBkYXRhIGZyb20gdGhlIGNhY2hlXG4vLyBUaGUga2V5IHdpbGwgYWx3YXlzIGJlIGNhbWVsQ2FzZWQgaW4gRGF0YVxuZGF0YT1kYXRhVXNlci5nZXQoZWxlbSxrZXkpO2lmKGRhdGEhPT11bmRlZmluZWQpe3JldHVybiBkYXRhO30vLyBBdHRlbXB0IHRvIFwiZGlzY292ZXJcIiB0aGUgZGF0YSBpblxuLy8gSFRNTDUgY3VzdG9tIGRhdGEtKiBhdHRyc1xuZGF0YT1kYXRhQXR0cihlbGVtLGtleSk7aWYoZGF0YSE9PXVuZGVmaW5lZCl7cmV0dXJuIGRhdGE7fS8vIFdlIHRyaWVkIHJlYWxseSBoYXJkLCBidXQgdGhlIGRhdGEgZG9lc24ndCBleGlzdC5cbnJldHVybjt9Ly8gU2V0IHRoZSBkYXRhLi4uXG50aGlzLmVhY2goZnVuY3Rpb24oKXsvLyBXZSBhbHdheXMgc3RvcmUgdGhlIGNhbWVsQ2FzZWQga2V5XG5kYXRhVXNlci5zZXQodGhpcyxrZXksdmFsdWUpO30pO30sbnVsbCx2YWx1ZSxhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCx0cnVlKTt9LHJlbW92ZURhdGE6ZnVuY3Rpb24gcmVtb3ZlRGF0YShrZXkpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkYXRhVXNlci5yZW1vdmUodGhpcyxrZXkpO30pO319KTtqUXVlcnkuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbiBxdWV1ZShlbGVtLHR5cGUsZGF0YSl7dmFyIHF1ZXVlO2lmKGVsZW0pe3R5cGU9KHR5cGV8fFwiZnhcIikrXCJxdWV1ZVwiO3F1ZXVlPWRhdGFQcml2LmdldChlbGVtLHR5cGUpOy8vIFNwZWVkIHVwIGRlcXVldWUgYnkgZ2V0dGluZyBvdXQgcXVpY2tseSBpZiB0aGlzIGlzIGp1c3QgYSBsb29rdXBcbmlmKGRhdGEpe2lmKCFxdWV1ZXx8alF1ZXJ5LmlzQXJyYXkoZGF0YSkpe3F1ZXVlPWRhdGFQcml2LmFjY2VzcyhlbGVtLHR5cGUsalF1ZXJ5Lm1ha2VBcnJheShkYXRhKSk7fWVsc2V7cXVldWUucHVzaChkYXRhKTt9fXJldHVybiBxdWV1ZXx8W107fX0sZGVxdWV1ZTpmdW5jdGlvbiBkZXF1ZXVlKGVsZW0sdHlwZSl7dHlwZT10eXBlfHxcImZ4XCI7dmFyIHF1ZXVlPWpRdWVyeS5xdWV1ZShlbGVtLHR5cGUpLHN0YXJ0TGVuZ3RoPXF1ZXVlLmxlbmd0aCxmbj1xdWV1ZS5zaGlmdCgpLGhvb2tzPWpRdWVyeS5fcXVldWVIb29rcyhlbGVtLHR5cGUpLG5leHQ9ZnVuY3Rpb24gbmV4dCgpe2pRdWVyeS5kZXF1ZXVlKGVsZW0sdHlwZSk7fTsvLyBJZiB0aGUgZnggcXVldWUgaXMgZGVxdWV1ZWQsIGFsd2F5cyByZW1vdmUgdGhlIHByb2dyZXNzIHNlbnRpbmVsXG5pZihmbj09PVwiaW5wcm9ncmVzc1wiKXtmbj1xdWV1ZS5zaGlmdCgpO3N0YXJ0TGVuZ3RoLS07fWlmKGZuKXsvLyBBZGQgYSBwcm9ncmVzcyBzZW50aW5lbCB0byBwcmV2ZW50IHRoZSBmeCBxdWV1ZSBmcm9tIGJlaW5nXG4vLyBhdXRvbWF0aWNhbGx5IGRlcXVldWVkXG5pZih0eXBlPT09XCJmeFwiKXtxdWV1ZS51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKTt9Ly8gQ2xlYXIgdXAgdGhlIGxhc3QgcXVldWUgc3RvcCBmdW5jdGlvblxuZGVsZXRlIGhvb2tzLnN0b3A7Zm4uY2FsbChlbGVtLG5leHQsaG9va3MpO31pZighc3RhcnRMZW5ndGgmJmhvb2tzKXtob29rcy5lbXB0eS5maXJlKCk7fX0sLy8gTm90IHB1YmxpYyAtIGdlbmVyYXRlIGEgcXVldWVIb29rcyBvYmplY3QsIG9yIHJldHVybiB0aGUgY3VycmVudCBvbmVcbl9xdWV1ZUhvb2tzOmZ1bmN0aW9uIF9xdWV1ZUhvb2tzKGVsZW0sdHlwZSl7dmFyIGtleT10eXBlK1wicXVldWVIb29rc1wiO3JldHVybiBkYXRhUHJpdi5nZXQoZWxlbSxrZXkpfHxkYXRhUHJpdi5hY2Nlc3MoZWxlbSxrZXkse2VtcHR5OmpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtkYXRhUHJpdi5yZW1vdmUoZWxlbSxbdHlwZStcInF1ZXVlXCIsa2V5XSk7fSl9KTt9fSk7alF1ZXJ5LmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24gcXVldWUodHlwZSxkYXRhKXt2YXIgc2V0dGVyPTI7aWYodHlwZW9mIHR5cGUhPT1cInN0cmluZ1wiKXtkYXRhPXR5cGU7dHlwZT1cImZ4XCI7c2V0dGVyLS07fWlmKGFyZ3VtZW50cy5sZW5ndGg8c2V0dGVyKXtyZXR1cm4galF1ZXJ5LnF1ZXVlKHRoaXNbMF0sdHlwZSk7fXJldHVybiBkYXRhPT09dW5kZWZpbmVkP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHF1ZXVlPWpRdWVyeS5xdWV1ZSh0aGlzLHR5cGUsZGF0YSk7Ly8gRW5zdXJlIGEgaG9va3MgZm9yIHRoaXMgcXVldWVcbmpRdWVyeS5fcXVldWVIb29rcyh0aGlzLHR5cGUpO2lmKHR5cGU9PT1cImZ4XCImJnF1ZXVlWzBdIT09XCJpbnByb2dyZXNzXCIpe2pRdWVyeS5kZXF1ZXVlKHRoaXMsdHlwZSk7fX0pO30sZGVxdWV1ZTpmdW5jdGlvbiBkZXF1ZXVlKHR5cGUpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtqUXVlcnkuZGVxdWV1ZSh0aGlzLHR5cGUpO30pO30sY2xlYXJRdWV1ZTpmdW5jdGlvbiBjbGVhclF1ZXVlKHR5cGUpe3JldHVybiB0aGlzLnF1ZXVlKHR5cGV8fFwiZnhcIixbXSk7fSwvLyBHZXQgYSBwcm9taXNlIHJlc29sdmVkIHdoZW4gcXVldWVzIG9mIGEgY2VydGFpbiB0eXBlXG4vLyBhcmUgZW1wdGllZCAoZnggaXMgdGhlIHR5cGUgYnkgZGVmYXVsdClcbnByb21pc2U6ZnVuY3Rpb24gcHJvbWlzZSh0eXBlLG9iail7dmFyIHRtcCxjb3VudD0xLGRlZmVyPWpRdWVyeS5EZWZlcnJlZCgpLGVsZW1lbnRzPXRoaXMsaT10aGlzLmxlbmd0aCxyZXNvbHZlPWZ1bmN0aW9uIHJlc29sdmUoKXtpZighIC0tY291bnQpe2RlZmVyLnJlc29sdmVXaXRoKGVsZW1lbnRzLFtlbGVtZW50c10pO319O2lmKHR5cGVvZiB0eXBlIT09XCJzdHJpbmdcIil7b2JqPXR5cGU7dHlwZT11bmRlZmluZWQ7fXR5cGU9dHlwZXx8XCJmeFwiO3doaWxlKGktLSl7dG1wPWRhdGFQcml2LmdldChlbGVtZW50c1tpXSx0eXBlK1wicXVldWVIb29rc1wiKTtpZih0bXAmJnRtcC5lbXB0eSl7Y291bnQrKzt0bXAuZW1wdHkuYWRkKHJlc29sdmUpO319cmVzb2x2ZSgpO3JldHVybiBkZWZlci5wcm9taXNlKG9iaik7fX0pO3ZhciBwbnVtPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZTt2YXIgcmNzc051bT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitwbnVtK1wiKShbYS16JV0qKSRcIixcImlcIik7dmFyIGNzc0V4cGFuZD1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl07dmFyIGlzSGlkZGVuV2l0aGluVHJlZT1mdW5jdGlvbiBpc0hpZGRlbldpdGhpblRyZWUoZWxlbSxlbCl7Ly8gaXNIaWRkZW5XaXRoaW5UcmVlIG1pZ2h0IGJlIGNhbGxlZCBmcm9tIGpRdWVyeSNmaWx0ZXIgZnVuY3Rpb247XG4vLyBpbiB0aGF0IGNhc2UsIGVsZW1lbnQgd2lsbCBiZSBzZWNvbmQgYXJndW1lbnRcbmVsZW09ZWx8fGVsZW07Ly8gSW5saW5lIHN0eWxlIHRydW1wcyBhbGxcbnJldHVybiBlbGVtLnN0eWxlLmRpc3BsYXk9PT1cIm5vbmVcInx8ZWxlbS5zdHlsZS5kaXNwbGF5PT09XCJcIiYmLy8gT3RoZXJ3aXNlLCBjaGVjayBjb21wdXRlZCBzdHlsZVxuLy8gU3VwcG9ydDogRmlyZWZveCA8PTQzIC0gNDVcbi8vIERpc2Nvbm5lY3RlZCBlbGVtZW50cyBjYW4gaGF2ZSBjb21wdXRlZCBkaXNwbGF5OiBub25lLCBzbyBmaXJzdCBjb25maXJtIHRoYXQgZWxlbSBpc1xuLy8gaW4gdGhlIGRvY3VtZW50LlxualF1ZXJ5LmNvbnRhaW5zKGVsZW0ub3duZXJEb2N1bWVudCxlbGVtKSYmalF1ZXJ5LmNzcyhlbGVtLFwiZGlzcGxheVwiKT09PVwibm9uZVwiO307dmFyIHN3YXA9ZnVuY3Rpb24gc3dhcChlbGVtLG9wdGlvbnMsY2FsbGJhY2ssYXJncyl7dmFyIHJldCxuYW1lLG9sZD17fTsvLyBSZW1lbWJlciB0aGUgb2xkIHZhbHVlcywgYW5kIGluc2VydCB0aGUgbmV3IG9uZXNcbmZvcihuYW1lIGluIG9wdGlvbnMpe29sZFtuYW1lXT1lbGVtLnN0eWxlW25hbWVdO2VsZW0uc3R5bGVbbmFtZV09b3B0aW9uc1tuYW1lXTt9cmV0PWNhbGxiYWNrLmFwcGx5KGVsZW0sYXJnc3x8W10pOy8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuZm9yKG5hbWUgaW4gb3B0aW9ucyl7ZWxlbS5zdHlsZVtuYW1lXT1vbGRbbmFtZV07fXJldHVybiByZXQ7fTtmdW5jdGlvbiBhZGp1c3RDU1MoZWxlbSxwcm9wLHZhbHVlUGFydHMsdHdlZW4pe3ZhciBhZGp1c3RlZCxzY2FsZT0xLG1heEl0ZXJhdGlvbnM9MjAsY3VycmVudFZhbHVlPXR3ZWVuP2Z1bmN0aW9uKCl7cmV0dXJuIHR3ZWVuLmN1cigpO306ZnVuY3Rpb24oKXtyZXR1cm4galF1ZXJ5LmNzcyhlbGVtLHByb3AsXCJcIik7fSxpbml0aWFsPWN1cnJlbnRWYWx1ZSgpLHVuaXQ9dmFsdWVQYXJ0cyYmdmFsdWVQYXJ0c1szXXx8KGpRdWVyeS5jc3NOdW1iZXJbcHJvcF0/XCJcIjpcInB4XCIpLC8vIFN0YXJ0aW5nIHZhbHVlIGNvbXB1dGF0aW9uIGlzIHJlcXVpcmVkIGZvciBwb3RlbnRpYWwgdW5pdCBtaXNtYXRjaGVzXG5pbml0aWFsSW5Vbml0PShqUXVlcnkuY3NzTnVtYmVyW3Byb3BdfHx1bml0IT09XCJweFwiJiYraW5pdGlhbCkmJnJjc3NOdW0uZXhlYyhqUXVlcnkuY3NzKGVsZW0scHJvcCkpO2lmKGluaXRpYWxJblVuaXQmJmluaXRpYWxJblVuaXRbM10hPT11bml0KXsvLyBUcnVzdCB1bml0cyByZXBvcnRlZCBieSBqUXVlcnkuY3NzXG51bml0PXVuaXR8fGluaXRpYWxJblVuaXRbM107Ly8gTWFrZSBzdXJlIHdlIHVwZGF0ZSB0aGUgdHdlZW4gcHJvcGVydGllcyBsYXRlciBvblxudmFsdWVQYXJ0cz12YWx1ZVBhcnRzfHxbXTsvLyBJdGVyYXRpdmVseSBhcHByb3hpbWF0ZSBmcm9tIGEgbm9uemVybyBzdGFydGluZyBwb2ludFxuaW5pdGlhbEluVW5pdD0raW5pdGlhbHx8MTtkb3svLyBJZiBwcmV2aW91cyBpdGVyYXRpb24gemVyb2VkIG91dCwgZG91YmxlIHVudGlsIHdlIGdldCAqc29tZXRoaW5nKi5cbi8vIFVzZSBzdHJpbmcgZm9yIGRvdWJsaW5nIHNvIHdlIGRvbid0IGFjY2lkZW50YWxseSBzZWUgc2NhbGUgYXMgdW5jaGFuZ2VkIGJlbG93XG5zY2FsZT1zY2FsZXx8XCIuNVwiOy8vIEFkanVzdCBhbmQgYXBwbHlcbmluaXRpYWxJblVuaXQ9aW5pdGlhbEluVW5pdC9zY2FsZTtqUXVlcnkuc3R5bGUoZWxlbSxwcm9wLGluaXRpYWxJblVuaXQrdW5pdCk7Ly8gVXBkYXRlIHNjYWxlLCB0b2xlcmF0aW5nIHplcm8gb3IgTmFOIGZyb20gdHdlZW4uY3VyKClcbi8vIEJyZWFrIHRoZSBsb29wIGlmIHNjYWxlIGlzIHVuY2hhbmdlZCBvciBwZXJmZWN0LCBvciBpZiB3ZSd2ZSBqdXN0IGhhZCBlbm91Z2guXG59d2hpbGUoc2NhbGUhPT0oc2NhbGU9Y3VycmVudFZhbHVlKCkvaW5pdGlhbCkmJnNjYWxlIT09MSYmLS1tYXhJdGVyYXRpb25zKTt9aWYodmFsdWVQYXJ0cyl7aW5pdGlhbEluVW5pdD0raW5pdGlhbEluVW5pdHx8K2luaXRpYWx8fDA7Ly8gQXBwbHkgcmVsYXRpdmUgb2Zmc2V0ICgrPS8tPSkgaWYgc3BlY2lmaWVkXG5hZGp1c3RlZD12YWx1ZVBhcnRzWzFdP2luaXRpYWxJblVuaXQrKHZhbHVlUGFydHNbMV0rMSkqdmFsdWVQYXJ0c1syXTordmFsdWVQYXJ0c1syXTtpZih0d2Vlbil7dHdlZW4udW5pdD11bml0O3R3ZWVuLnN0YXJ0PWluaXRpYWxJblVuaXQ7dHdlZW4uZW5kPWFkanVzdGVkO319cmV0dXJuIGFkanVzdGVkO312YXIgZGVmYXVsdERpc3BsYXlNYXA9e307ZnVuY3Rpb24gZ2V0RGVmYXVsdERpc3BsYXkoZWxlbSl7dmFyIHRlbXAsZG9jPWVsZW0ub3duZXJEb2N1bWVudCxub2RlTmFtZT1lbGVtLm5vZGVOYW1lLGRpc3BsYXk9ZGVmYXVsdERpc3BsYXlNYXBbbm9kZU5hbWVdO2lmKGRpc3BsYXkpe3JldHVybiBkaXNwbGF5O310ZW1wPWRvYy5ib2R5LmFwcGVuZENoaWxkKGRvYy5jcmVhdGVFbGVtZW50KG5vZGVOYW1lKSk7ZGlzcGxheT1qUXVlcnkuY3NzKHRlbXAsXCJkaXNwbGF5XCIpO3RlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wKTtpZihkaXNwbGF5PT09XCJub25lXCIpe2Rpc3BsYXk9XCJibG9ja1wiO31kZWZhdWx0RGlzcGxheU1hcFtub2RlTmFtZV09ZGlzcGxheTtyZXR1cm4gZGlzcGxheTt9ZnVuY3Rpb24gc2hvd0hpZGUoZWxlbWVudHMsc2hvdyl7dmFyIGRpc3BsYXksZWxlbSx2YWx1ZXM9W10saW5kZXg9MCxsZW5ndGg9ZWxlbWVudHMubGVuZ3RoOy8vIERldGVybWluZSBuZXcgZGlzcGxheSB2YWx1ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIGNoYW5nZVxuZm9yKDtpbmRleDxsZW5ndGg7aW5kZXgrKyl7ZWxlbT1lbGVtZW50c1tpbmRleF07aWYoIWVsZW0uc3R5bGUpe2NvbnRpbnVlO31kaXNwbGF5PWVsZW0uc3R5bGUuZGlzcGxheTtpZihzaG93KXsvLyBTaW5jZSB3ZSBmb3JjZSB2aXNpYmlsaXR5IHVwb24gY2FzY2FkZS1oaWRkZW4gZWxlbWVudHMsIGFuIGltbWVkaWF0ZSAoYW5kIHNsb3cpXG4vLyBjaGVjayBpcyByZXF1aXJlZCBpbiB0aGlzIGZpcnN0IGxvb3AgdW5sZXNzIHdlIGhhdmUgYSBub25lbXB0eSBkaXNwbGF5IHZhbHVlIChlaXRoZXJcbi8vIGlubGluZSBvciBhYm91dC10by1iZS1yZXN0b3JlZClcbmlmKGRpc3BsYXk9PT1cIm5vbmVcIil7dmFsdWVzW2luZGV4XT1kYXRhUHJpdi5nZXQoZWxlbSxcImRpc3BsYXlcIil8fG51bGw7aWYoIXZhbHVlc1tpbmRleF0pe2VsZW0uc3R5bGUuZGlzcGxheT1cIlwiO319aWYoZWxlbS5zdHlsZS5kaXNwbGF5PT09XCJcIiYmaXNIaWRkZW5XaXRoaW5UcmVlKGVsZW0pKXt2YWx1ZXNbaW5kZXhdPWdldERlZmF1bHREaXNwbGF5KGVsZW0pO319ZWxzZXtpZihkaXNwbGF5IT09XCJub25lXCIpe3ZhbHVlc1tpbmRleF09XCJub25lXCI7Ly8gUmVtZW1iZXIgd2hhdCB3ZSdyZSBvdmVyd3JpdGluZ1xuZGF0YVByaXYuc2V0KGVsZW0sXCJkaXNwbGF5XCIsZGlzcGxheSk7fX19Ly8gU2V0IHRoZSBkaXNwbGF5IG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlY29uZCBsb29wIHRvIGF2b2lkIGNvbnN0YW50IHJlZmxvd1xuZm9yKGluZGV4PTA7aW5kZXg8bGVuZ3RoO2luZGV4Kyspe2lmKHZhbHVlc1tpbmRleF0hPW51bGwpe2VsZW1lbnRzW2luZGV4XS5zdHlsZS5kaXNwbGF5PXZhbHVlc1tpbmRleF07fX1yZXR1cm4gZWxlbWVudHM7fWpRdWVyeS5mbi5leHRlbmQoe3Nob3c6ZnVuY3Rpb24gc2hvdygpe3JldHVybiBzaG93SGlkZSh0aGlzLHRydWUpO30saGlkZTpmdW5jdGlvbiBoaWRlKCl7cmV0dXJuIHNob3dIaWRlKHRoaXMpO30sdG9nZ2xlOmZ1bmN0aW9uIHRvZ2dsZShzdGF0ZSl7aWYodHlwZW9mIHN0YXRlPT09XCJib29sZWFuXCIpe3JldHVybiBzdGF0ZT90aGlzLnNob3coKTp0aGlzLmhpZGUoKTt9cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2lmKGlzSGlkZGVuV2l0aGluVHJlZSh0aGlzKSl7alF1ZXJ5KHRoaXMpLnNob3coKTt9ZWxzZXtqUXVlcnkodGhpcykuaGlkZSgpO319KTt9fSk7dmFyIHJjaGVja2FibGVUeXBlPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pO3ZhciBydGFnTmFtZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSspL2k7dmFyIHJzY3JpcHRUeXBlPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2k7Ly8gV2UgaGF2ZSB0byBjbG9zZSB0aGVzZSB0YWdzIHRvIHN1cHBvcnQgWEhUTUwgKCMxMzIwMClcbnZhciB3cmFwTWFwPXsvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxub3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLC8vIFhIVE1MIHBhcnNlcnMgZG8gbm90IG1hZ2ljYWxseSBpbnNlcnQgZWxlbWVudHMgaW4gdGhlXG4vLyBzYW1lIHdheSB0aGF0IHRhZyBzb3VwIHBhcnNlcnMgZG8uIFNvIHdlIGNhbm5vdCBzaG9ydGVuXG4vLyB0aGlzIGJ5IG9taXR0aW5nIDx0Ym9keT4gb3Igb3RoZXIgcmVxdWlyZWQgZWxlbWVudHMuXG50aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTsvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxud3JhcE1hcC5vcHRncm91cD13cmFwTWFwLm9wdGlvbjt3cmFwTWFwLnRib2R5PXdyYXBNYXAudGZvb3Q9d3JhcE1hcC5jb2xncm91cD13cmFwTWFwLmNhcHRpb249d3JhcE1hcC50aGVhZDt3cmFwTWFwLnRoPXdyYXBNYXAudGQ7ZnVuY3Rpb24gZ2V0QWxsKGNvbnRleHQsdGFnKXsvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG4vLyBVc2UgdHlwZW9mIHRvIGF2b2lkIHplcm8tYXJndW1lbnQgbWV0aG9kIGludm9jYXRpb24gb24gaG9zdCBvYmplY3RzICgjMTUxNTEpXG52YXIgcmV0O2lmKHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lIT09XCJ1bmRlZmluZWRcIil7cmV0PWNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnfHxcIipcIik7fWVsc2UgaWYodHlwZW9mIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCE9PVwidW5kZWZpbmVkXCIpe3JldD1jb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwodGFnfHxcIipcIik7fWVsc2V7cmV0PVtdO31pZih0YWc9PT11bmRlZmluZWR8fHRhZyYmalF1ZXJ5Lm5vZGVOYW1lKGNvbnRleHQsdGFnKSl7cmV0dXJuIGpRdWVyeS5tZXJnZShbY29udGV4dF0scmV0KTt9cmV0dXJuIHJldDt9Ly8gTWFyayBzY3JpcHRzIGFzIGhhdmluZyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkXG5mdW5jdGlvbiBzZXRHbG9iYWxFdmFsKGVsZW1zLHJlZkVsZW1lbnRzKXt2YXIgaT0wLGw9ZWxlbXMubGVuZ3RoO2Zvcig7aTxsO2krKyl7ZGF0YVByaXYuc2V0KGVsZW1zW2ldLFwiZ2xvYmFsRXZhbFwiLCFyZWZFbGVtZW50c3x8ZGF0YVByaXYuZ2V0KHJlZkVsZW1lbnRzW2ldLFwiZ2xvYmFsRXZhbFwiKSk7fX12YXIgcmh0bWw9Lzx8JiM/XFx3KzsvO2Z1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoZWxlbXMsY29udGV4dCxzY3JpcHRzLHNlbGVjdGlvbixpZ25vcmVkKXt2YXIgZWxlbSx0bXAsdGFnLHdyYXAsY29udGFpbnMsaixmcmFnbWVudD1jb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxub2Rlcz1bXSxpPTAsbD1lbGVtcy5sZW5ndGg7Zm9yKDtpPGw7aSsrKXtlbGVtPWVsZW1zW2ldO2lmKGVsZW18fGVsZW09PT0wKXsvLyBBZGQgbm9kZXMgZGlyZWN0bHlcbmlmKGpRdWVyeS50eXBlKGVsZW0pPT09XCJvYmplY3RcIil7Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG4vLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5qUXVlcnkubWVyZ2Uobm9kZXMsZWxlbS5ub2RlVHlwZT9bZWxlbV06ZWxlbSk7Ly8gQ29udmVydCBub24taHRtbCBpbnRvIGEgdGV4dCBub2RlXG59ZWxzZSBpZighcmh0bWwudGVzdChlbGVtKSl7bm9kZXMucHVzaChjb250ZXh0LmNyZWF0ZVRleHROb2RlKGVsZW0pKTsvLyBDb252ZXJ0IGh0bWwgaW50byBET00gbm9kZXNcbn1lbHNle3RtcD10bXB8fGZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRleHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7Ly8gRGVzZXJpYWxpemUgYSBzdGFuZGFyZCByZXByZXNlbnRhdGlvblxudGFnPShydGFnTmFtZS5leGVjKGVsZW0pfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKTt3cmFwPXdyYXBNYXBbdGFnXXx8d3JhcE1hcC5fZGVmYXVsdDt0bXAuaW5uZXJIVE1MPXdyYXBbMV0ralF1ZXJ5Lmh0bWxQcmVmaWx0ZXIoZWxlbSkrd3JhcFsyXTsvLyBEZXNjZW5kIHRocm91Z2ggd3JhcHBlcnMgdG8gdGhlIHJpZ2h0IGNvbnRlbnRcbmo9d3JhcFswXTt3aGlsZShqLS0pe3RtcD10bXAubGFzdENoaWxkO30vLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcbi8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcbmpRdWVyeS5tZXJnZShub2Rlcyx0bXAuY2hpbGROb2Rlcyk7Ly8gUmVtZW1iZXIgdGhlIHRvcC1sZXZlbCBjb250YWluZXJcbnRtcD1mcmFnbWVudC5maXJzdENoaWxkOy8vIEVuc3VyZSB0aGUgY3JlYXRlZCBub2RlcyBhcmUgb3JwaGFuZWQgKCMxMjM5MilcbnRtcC50ZXh0Q29udGVudD1cIlwiO319fS8vIFJlbW92ZSB3cmFwcGVyIGZyb20gZnJhZ21lbnRcbmZyYWdtZW50LnRleHRDb250ZW50PVwiXCI7aT0wO3doaWxlKGVsZW09bm9kZXNbaSsrXSl7Ly8gU2tpcCBlbGVtZW50cyBhbHJlYWR5IGluIHRoZSBjb250ZXh0IGNvbGxlY3Rpb24gKHRyYWMtNDA4NylcbmlmKHNlbGVjdGlvbiYmalF1ZXJ5LmluQXJyYXkoZWxlbSxzZWxlY3Rpb24pPi0xKXtpZihpZ25vcmVkKXtpZ25vcmVkLnB1c2goZWxlbSk7fWNvbnRpbnVlO31jb250YWlucz1qUXVlcnkuY29udGFpbnMoZWxlbS5vd25lckRvY3VtZW50LGVsZW0pOy8vIEFwcGVuZCB0byBmcmFnbWVudFxudG1wPWdldEFsbChmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtKSxcInNjcmlwdFwiKTsvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5pZihjb250YWlucyl7c2V0R2xvYmFsRXZhbCh0bXApO30vLyBDYXB0dXJlIGV4ZWN1dGFibGVzXG5pZihzY3JpcHRzKXtqPTA7d2hpbGUoZWxlbT10bXBbaisrXSl7aWYocnNjcmlwdFR5cGUudGVzdChlbGVtLnR5cGV8fFwiXCIpKXtzY3JpcHRzLnB1c2goZWxlbSk7fX19fXJldHVybiBmcmFnbWVudDt9KGZ1bmN0aW9uKCl7dmFyIGZyYWdtZW50PWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxkaXY9ZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpOy8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcbi8vIENoZWNrIHN0YXRlIGxvc3QgaWYgdGhlIG5hbWUgaXMgc2V0ICgjMTEyMTcpXG4vLyBTdXBwb3J0OiBXaW5kb3dzIFdlYiBBcHBzIChXV0EpXG4vLyBgbmFtZWAgYW5kIGB0eXBlYCBtdXN0IHVzZSAuc2V0QXR0cmlidXRlIGZvciBXV0EgKCMxNDkwMSlcbmlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpO2lucHV0LnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIik7aW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKTtkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpOy8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgb25seVxuLy8gT2xkZXIgV2ViS2l0IGRvZXNuJ3QgY2xvbmUgY2hlY2tlZCBzdGF0ZSBjb3JyZWN0bHkgaW4gZnJhZ21lbnRzXG5zdXBwb3J0LmNoZWNrQ2xvbmU9ZGl2LmNsb25lTm9kZSh0cnVlKS5jbG9uZU5vZGUodHJ1ZSkubGFzdENoaWxkLmNoZWNrZWQ7Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4vLyBNYWtlIHN1cmUgdGV4dGFyZWEgKGFuZCBjaGVja2JveCkgZGVmYXVsdFZhbHVlIGlzIHByb3Blcmx5IGNsb25lZFxuZGl2LmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIjtzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkPSEhZGl2LmNsb25lTm9kZSh0cnVlKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO30pKCk7dmFyIGRvY3VtZW50RWxlbWVudD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dmFyIHJrZXlFdmVudD0vXmtleS8scm1vdXNlRXZlbnQ9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51fGRyYWd8ZHJvcCl8Y2xpY2svLHJ0eXBlbmFtZXNwYWNlPS9eKFteLl0qKSg/OlxcLiguKyl8KS87ZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpe3JldHVybiB0cnVlO31mdW5jdGlvbiByZXR1cm5GYWxzZSgpe3JldHVybiBmYWxzZTt9Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcbi8vIFNlZSAjMTMzOTMgZm9yIG1vcmUgaW5mb1xuZnVuY3Rpb24gc2FmZUFjdGl2ZUVsZW1lbnQoKXt0cnl7cmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7fWNhdGNoKGVycil7fX1mdW5jdGlvbiBfb24oZWxlbSx0eXBlcyxzZWxlY3RvcixkYXRhLGZuLG9uZSl7dmFyIG9yaWdGbix0eXBlOy8vIFR5cGVzIGNhbiBiZSBhIG1hcCBvZiB0eXBlcy9oYW5kbGVyc1xuaWYoKHR5cGVvZiB0eXBlcz09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKHR5cGVzKSk9PT1cIm9iamVjdFwiKXsvLyAoIHR5cGVzLU9iamVjdCwgc2VsZWN0b3IsIGRhdGEgKVxuaWYodHlwZW9mIHNlbGVjdG9yIT09XCJzdHJpbmdcIil7Ly8gKCB0eXBlcy1PYmplY3QsIGRhdGEgKVxuZGF0YT1kYXRhfHxzZWxlY3RvcjtzZWxlY3Rvcj11bmRlZmluZWQ7fWZvcih0eXBlIGluIHR5cGVzKXtfb24oZWxlbSx0eXBlLHNlbGVjdG9yLGRhdGEsdHlwZXNbdHlwZV0sb25lKTt9cmV0dXJuIGVsZW07fWlmKGRhdGE9PW51bGwmJmZuPT1udWxsKXsvLyAoIHR5cGVzLCBmbiApXG5mbj1zZWxlY3RvcjtkYXRhPXNlbGVjdG9yPXVuZGVmaW5lZDt9ZWxzZSBpZihmbj09bnVsbCl7aWYodHlwZW9mIHNlbGVjdG9yPT09XCJzdHJpbmdcIil7Ly8gKCB0eXBlcywgc2VsZWN0b3IsIGZuIClcbmZuPWRhdGE7ZGF0YT11bmRlZmluZWQ7fWVsc2V7Ly8gKCB0eXBlcywgZGF0YSwgZm4gKVxuZm49ZGF0YTtkYXRhPXNlbGVjdG9yO3NlbGVjdG9yPXVuZGVmaW5lZDt9fWlmKGZuPT09ZmFsc2Upe2ZuPXJldHVybkZhbHNlO31lbHNlIGlmKCFmbil7cmV0dXJuIGVsZW07fWlmKG9uZT09PTEpe29yaWdGbj1mbjtmbj1mdW5jdGlvbiBmbihldmVudCl7Ly8gQ2FuIHVzZSBhbiBlbXB0eSBzZXQsIHNpbmNlIGV2ZW50IGNvbnRhaW5zIHRoZSBpbmZvXG5qUXVlcnkoKS5vZmYoZXZlbnQpO3JldHVybiBvcmlnRm4uYXBwbHkodGhpcyxhcmd1bWVudHMpO307Ly8gVXNlIHNhbWUgZ3VpZCBzbyBjYWxsZXIgY2FuIHJlbW92ZSB1c2luZyBvcmlnRm5cbmZuLmd1aWQ9b3JpZ0ZuLmd1aWR8fChvcmlnRm4uZ3VpZD1qUXVlcnkuZ3VpZCsrKTt9cmV0dXJuIGVsZW0uZWFjaChmdW5jdGlvbigpe2pRdWVyeS5ldmVudC5hZGQodGhpcyx0eXBlcyxmbixkYXRhLHNlbGVjdG9yKTt9KTt9LypcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIGV2ZW50cyAtLSBub3QgcGFydCBvZiB0aGUgcHVibGljIGludGVyZmFjZS5cbiAqIFByb3BzIHRvIERlYW4gRWR3YXJkcycgYWRkRXZlbnQgbGlicmFyeSBmb3IgbWFueSBvZiB0aGUgaWRlYXMuXG4gKi9qUXVlcnkuZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24gYWRkKGVsZW0sdHlwZXMsaGFuZGxlcixkYXRhLHNlbGVjdG9yKXt2YXIgaGFuZGxlT2JqSW4sZXZlbnRIYW5kbGUsdG1wLGV2ZW50cyx0LGhhbmRsZU9iaixzcGVjaWFsLGhhbmRsZXJzLHR5cGUsbmFtZXNwYWNlcyxvcmlnVHlwZSxlbGVtRGF0YT1kYXRhUHJpdi5nZXQoZWxlbSk7Ly8gRG9uJ3QgYXR0YWNoIGV2ZW50cyB0byBub0RhdGEgb3IgdGV4dC9jb21tZW50IG5vZGVzIChidXQgYWxsb3cgcGxhaW4gb2JqZWN0cylcbmlmKCFlbGVtRGF0YSl7cmV0dXJuO30vLyBDYWxsZXIgY2FuIHBhc3MgaW4gYW4gb2JqZWN0IG9mIGN1c3RvbSBkYXRhIGluIGxpZXUgb2YgdGhlIGhhbmRsZXJcbmlmKGhhbmRsZXIuaGFuZGxlcil7aGFuZGxlT2JqSW49aGFuZGxlcjtoYW5kbGVyPWhhbmRsZU9iakluLmhhbmRsZXI7c2VsZWN0b3I9aGFuZGxlT2JqSW4uc2VsZWN0b3I7fS8vIEVuc3VyZSB0aGF0IGludmFsaWQgc2VsZWN0b3JzIHRocm93IGV4Y2VwdGlvbnMgYXQgYXR0YWNoIHRpbWVcbi8vIEV2YWx1YXRlIGFnYWluc3QgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgZWxlbSBpcyBhIG5vbi1lbGVtZW50IG5vZGUgKGUuZy4sIGRvY3VtZW50KVxuaWYoc2VsZWN0b3Ipe2pRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3Rvcihkb2N1bWVudEVsZW1lbnQsc2VsZWN0b3IpO30vLyBNYWtlIHN1cmUgdGhhdCB0aGUgaGFuZGxlciBoYXMgYSB1bmlxdWUgSUQsIHVzZWQgdG8gZmluZC9yZW1vdmUgaXQgbGF0ZXJcbmlmKCFoYW5kbGVyLmd1aWQpe2hhbmRsZXIuZ3VpZD1qUXVlcnkuZ3VpZCsrO30vLyBJbml0IHRoZSBlbGVtZW50J3MgZXZlbnQgc3RydWN0dXJlIGFuZCBtYWluIGhhbmRsZXIsIGlmIHRoaXMgaXMgdGhlIGZpcnN0XG5pZighKGV2ZW50cz1lbGVtRGF0YS5ldmVudHMpKXtldmVudHM9ZWxlbURhdGEuZXZlbnRzPXt9O31pZighKGV2ZW50SGFuZGxlPWVsZW1EYXRhLmhhbmRsZSkpe2V2ZW50SGFuZGxlPWVsZW1EYXRhLmhhbmRsZT1mdW5jdGlvbihlKXsvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuLy8gd2hlbiBhbiBldmVudCBpcyBjYWxsZWQgYWZ0ZXIgYSBwYWdlIGhhcyB1bmxvYWRlZFxucmV0dXJuIHR5cGVvZiBqUXVlcnkhPT1cInVuZGVmaW5lZFwiJiZqUXVlcnkuZXZlbnQudHJpZ2dlcmVkIT09ZS50eXBlP2pRdWVyeS5ldmVudC5kaXNwYXRjaC5hcHBseShlbGVtLGFyZ3VtZW50cyk6dW5kZWZpbmVkO307fS8vIEhhbmRsZSBtdWx0aXBsZSBldmVudHMgc2VwYXJhdGVkIGJ5IGEgc3BhY2VcbnR5cGVzPSh0eXBlc3x8XCJcIikubWF0Y2gocm5vdGh0bWx3aGl0ZSl8fFtcIlwiXTt0PXR5cGVzLmxlbmd0aDt3aGlsZSh0LS0pe3RtcD1ydHlwZW5hbWVzcGFjZS5leGVjKHR5cGVzW3RdKXx8W107dHlwZT1vcmlnVHlwZT10bXBbMV07bmFtZXNwYWNlcz0odG1wWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpOy8vIFRoZXJlICptdXN0KiBiZSBhIHR5cGUsIG5vIGF0dGFjaGluZyBuYW1lc3BhY2Utb25seSBoYW5kbGVyc1xuaWYoIXR5cGUpe2NvbnRpbnVlO30vLyBJZiBldmVudCBjaGFuZ2VzIGl0cyB0eXBlLCB1c2UgdGhlIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBjaGFuZ2VkIHR5cGVcbnNwZWNpYWw9alF1ZXJ5LmV2ZW50LnNwZWNpYWxbdHlwZV18fHt9Oy8vIElmIHNlbGVjdG9yIGRlZmluZWQsIGRldGVybWluZSBzcGVjaWFsIGV2ZW50IGFwaSB0eXBlLCBvdGhlcndpc2UgZ2l2ZW4gdHlwZVxudHlwZT0oc2VsZWN0b3I/c3BlY2lhbC5kZWxlZ2F0ZVR5cGU6c3BlY2lhbC5iaW5kVHlwZSl8fHR5cGU7Ly8gVXBkYXRlIHNwZWNpYWwgYmFzZWQgb24gbmV3bHkgcmVzZXQgdHlwZVxuc3BlY2lhbD1qUXVlcnkuZXZlbnQuc3BlY2lhbFt0eXBlXXx8e307Ly8gaGFuZGxlT2JqIGlzIHBhc3NlZCB0byBhbGwgZXZlbnQgaGFuZGxlcnNcbmhhbmRsZU9iaj1qUXVlcnkuZXh0ZW5kKHt0eXBlOnR5cGUsb3JpZ1R5cGU6b3JpZ1R5cGUsZGF0YTpkYXRhLGhhbmRsZXI6aGFuZGxlcixndWlkOmhhbmRsZXIuZ3VpZCxzZWxlY3RvcjpzZWxlY3RvcixuZWVkc0NvbnRleHQ6c2VsZWN0b3ImJmpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KHNlbGVjdG9yKSxuYW1lc3BhY2U6bmFtZXNwYWNlcy5qb2luKFwiLlwiKX0saGFuZGxlT2JqSW4pOy8vIEluaXQgdGhlIGV2ZW50IGhhbmRsZXIgcXVldWUgaWYgd2UncmUgdGhlIGZpcnN0XG5pZighKGhhbmRsZXJzPWV2ZW50c1t0eXBlXSkpe2hhbmRsZXJzPWV2ZW50c1t0eXBlXT1bXTtoYW5kbGVycy5kZWxlZ2F0ZUNvdW50PTA7Ly8gT25seSB1c2UgYWRkRXZlbnRMaXN0ZW5lciBpZiB0aGUgc3BlY2lhbCBldmVudHMgaGFuZGxlciByZXR1cm5zIGZhbHNlXG5pZighc3BlY2lhbC5zZXR1cHx8c3BlY2lhbC5zZXR1cC5jYWxsKGVsZW0sZGF0YSxuYW1lc3BhY2VzLGV2ZW50SGFuZGxlKT09PWZhbHNlKXtpZihlbGVtLmFkZEV2ZW50TGlzdGVuZXIpe2VsZW0uYWRkRXZlbnRMaXN0ZW5lcih0eXBlLGV2ZW50SGFuZGxlKTt9fX1pZihzcGVjaWFsLmFkZCl7c3BlY2lhbC5hZGQuY2FsbChlbGVtLGhhbmRsZU9iaik7aWYoIWhhbmRsZU9iai5oYW5kbGVyLmd1aWQpe2hhbmRsZU9iai5oYW5kbGVyLmd1aWQ9aGFuZGxlci5ndWlkO319Ly8gQWRkIHRvIHRoZSBlbGVtZW50J3MgaGFuZGxlciBsaXN0LCBkZWxlZ2F0ZXMgaW4gZnJvbnRcbmlmKHNlbGVjdG9yKXtoYW5kbGVycy5zcGxpY2UoaGFuZGxlcnMuZGVsZWdhdGVDb3VudCsrLDAsaGFuZGxlT2JqKTt9ZWxzZXtoYW5kbGVycy5wdXNoKGhhbmRsZU9iaik7fS8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnRzIGhhdmUgZXZlciBiZWVuIHVzZWQsIGZvciBldmVudCBvcHRpbWl6YXRpb25cbmpRdWVyeS5ldmVudC5nbG9iYWxbdHlwZV09dHJ1ZTt9fSwvLyBEZXRhY2ggYW4gZXZlbnQgb3Igc2V0IG9mIGV2ZW50cyBmcm9tIGFuIGVsZW1lbnRcbnJlbW92ZTpmdW5jdGlvbiByZW1vdmUoZWxlbSx0eXBlcyxoYW5kbGVyLHNlbGVjdG9yLG1hcHBlZFR5cGVzKXt2YXIgaixvcmlnQ291bnQsdG1wLGV2ZW50cyx0LGhhbmRsZU9iaixzcGVjaWFsLGhhbmRsZXJzLHR5cGUsbmFtZXNwYWNlcyxvcmlnVHlwZSxlbGVtRGF0YT1kYXRhUHJpdi5oYXNEYXRhKGVsZW0pJiZkYXRhUHJpdi5nZXQoZWxlbSk7aWYoIWVsZW1EYXRhfHwhKGV2ZW50cz1lbGVtRGF0YS5ldmVudHMpKXtyZXR1cm47fS8vIE9uY2UgZm9yIGVhY2ggdHlwZS5uYW1lc3BhY2UgaW4gdHlwZXM7IHR5cGUgbWF5IGJlIG9taXR0ZWRcbnR5cGVzPSh0eXBlc3x8XCJcIikubWF0Y2gocm5vdGh0bWx3aGl0ZSl8fFtcIlwiXTt0PXR5cGVzLmxlbmd0aDt3aGlsZSh0LS0pe3RtcD1ydHlwZW5hbWVzcGFjZS5leGVjKHR5cGVzW3RdKXx8W107dHlwZT1vcmlnVHlwZT10bXBbMV07bmFtZXNwYWNlcz0odG1wWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpOy8vIFVuYmluZCBhbGwgZXZlbnRzIChvbiB0aGlzIG5hbWVzcGFjZSwgaWYgcHJvdmlkZWQpIGZvciB0aGUgZWxlbWVudFxuaWYoIXR5cGUpe2Zvcih0eXBlIGluIGV2ZW50cyl7alF1ZXJ5LmV2ZW50LnJlbW92ZShlbGVtLHR5cGUrdHlwZXNbdF0saGFuZGxlcixzZWxlY3Rvcix0cnVlKTt9Y29udGludWU7fXNwZWNpYWw9alF1ZXJ5LmV2ZW50LnNwZWNpYWxbdHlwZV18fHt9O3R5cGU9KHNlbGVjdG9yP3NwZWNpYWwuZGVsZWdhdGVUeXBlOnNwZWNpYWwuYmluZFR5cGUpfHx0eXBlO2hhbmRsZXJzPWV2ZW50c1t0eXBlXXx8W107dG1wPXRtcFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK25hbWVzcGFjZXMuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOy8vIFJlbW92ZSBtYXRjaGluZyBldmVudHNcbm9yaWdDb3VudD1qPWhhbmRsZXJzLmxlbmd0aDt3aGlsZShqLS0pe2hhbmRsZU9iaj1oYW5kbGVyc1tqXTtpZigobWFwcGVkVHlwZXN8fG9yaWdUeXBlPT09aGFuZGxlT2JqLm9yaWdUeXBlKSYmKCFoYW5kbGVyfHxoYW5kbGVyLmd1aWQ9PT1oYW5kbGVPYmouZ3VpZCkmJighdG1wfHx0bXAudGVzdChoYW5kbGVPYmoubmFtZXNwYWNlKSkmJighc2VsZWN0b3J8fHNlbGVjdG9yPT09aGFuZGxlT2JqLnNlbGVjdG9yfHxzZWxlY3Rvcj09PVwiKipcIiYmaGFuZGxlT2JqLnNlbGVjdG9yKSl7aGFuZGxlcnMuc3BsaWNlKGosMSk7aWYoaGFuZGxlT2JqLnNlbGVjdG9yKXtoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LS07fWlmKHNwZWNpYWwucmVtb3ZlKXtzcGVjaWFsLnJlbW92ZS5jYWxsKGVsZW0saGFuZGxlT2JqKTt9fX0vLyBSZW1vdmUgZ2VuZXJpYyBldmVudCBoYW5kbGVyIGlmIHdlIHJlbW92ZWQgc29tZXRoaW5nIGFuZCBubyBtb3JlIGhhbmRsZXJzIGV4aXN0XG4vLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcbmlmKG9yaWdDb3VudCYmIWhhbmRsZXJzLmxlbmd0aCl7aWYoIXNwZWNpYWwudGVhcmRvd258fHNwZWNpYWwudGVhcmRvd24uY2FsbChlbGVtLG5hbWVzcGFjZXMsZWxlbURhdGEuaGFuZGxlKT09PWZhbHNlKXtqUXVlcnkucmVtb3ZlRXZlbnQoZWxlbSx0eXBlLGVsZW1EYXRhLmhhbmRsZSk7fWRlbGV0ZSBldmVudHNbdHlwZV07fX0vLyBSZW1vdmUgZGF0YSBhbmQgdGhlIGV4cGFuZG8gaWYgaXQncyBubyBsb25nZXIgdXNlZFxuaWYoalF1ZXJ5LmlzRW1wdHlPYmplY3QoZXZlbnRzKSl7ZGF0YVByaXYucmVtb3ZlKGVsZW0sXCJoYW5kbGUgZXZlbnRzXCIpO319LGRpc3BhdGNoOmZ1bmN0aW9uIGRpc3BhdGNoKG5hdGl2ZUV2ZW50KXsvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3RcbnZhciBldmVudD1qUXVlcnkuZXZlbnQuZml4KG5hdGl2ZUV2ZW50KTt2YXIgaSxqLHJldCxtYXRjaGVkLGhhbmRsZU9iaixoYW5kbGVyUXVldWUsYXJncz1uZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksaGFuZGxlcnM9KGRhdGFQcml2LmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbZXZlbnQudHlwZV18fFtdLHNwZWNpYWw9alF1ZXJ5LmV2ZW50LnNwZWNpYWxbZXZlbnQudHlwZV18fHt9Oy8vIFVzZSB0aGUgZml4LWVkIGpRdWVyeS5FdmVudCByYXRoZXIgdGhhbiB0aGUgKHJlYWQtb25seSkgbmF0aXZlIGV2ZW50XG5hcmdzWzBdPWV2ZW50O2ZvcihpPTE7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7YXJnc1tpXT1hcmd1bWVudHNbaV07fWV2ZW50LmRlbGVnYXRlVGFyZ2V0PXRoaXM7Ly8gQ2FsbCB0aGUgcHJlRGlzcGF0Y2ggaG9vayBmb3IgdGhlIG1hcHBlZCB0eXBlLCBhbmQgbGV0IGl0IGJhaWwgaWYgZGVzaXJlZFxuaWYoc3BlY2lhbC5wcmVEaXNwYXRjaCYmc3BlY2lhbC5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsZXZlbnQpPT09ZmFsc2Upe3JldHVybjt9Ly8gRGV0ZXJtaW5lIGhhbmRsZXJzXG5oYW5kbGVyUXVldWU9alF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxldmVudCxoYW5kbGVycyk7Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcbmk9MDt3aGlsZSgobWF0Y2hlZD1oYW5kbGVyUXVldWVbaSsrXSkmJiFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXtldmVudC5jdXJyZW50VGFyZ2V0PW1hdGNoZWQuZWxlbTtqPTA7d2hpbGUoKGhhbmRsZU9iaj1tYXRjaGVkLmhhbmRsZXJzW2orK10pJiYhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSl7Ly8gVHJpZ2dlcmVkIGV2ZW50IG11c3QgZWl0aGVyIDEpIGhhdmUgbm8gbmFtZXNwYWNlLCBvciAyKSBoYXZlIG5hbWVzcGFjZShzKVxuLy8gYSBzdWJzZXQgb3IgZXF1YWwgdG8gdGhvc2UgaW4gdGhlIGJvdW5kIGV2ZW50IChib3RoIGNhbiBoYXZlIG5vIG5hbWVzcGFjZSkuXG5pZighZXZlbnQucm5hbWVzcGFjZXx8ZXZlbnQucm5hbWVzcGFjZS50ZXN0KGhhbmRsZU9iai5uYW1lc3BhY2UpKXtldmVudC5oYW5kbGVPYmo9aGFuZGxlT2JqO2V2ZW50LmRhdGE9aGFuZGxlT2JqLmRhdGE7cmV0PSgoalF1ZXJ5LmV2ZW50LnNwZWNpYWxbaGFuZGxlT2JqLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8aGFuZGxlT2JqLmhhbmRsZXIpLmFwcGx5KG1hdGNoZWQuZWxlbSxhcmdzKTtpZihyZXQhPT11bmRlZmluZWQpe2lmKChldmVudC5yZXN1bHQ9cmV0KT09PWZhbHNlKXtldmVudC5wcmV2ZW50RGVmYXVsdCgpO2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpO319fX19Ly8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxuaWYoc3BlY2lhbC5wb3N0RGlzcGF0Y2gpe3NwZWNpYWwucG9zdERpc3BhdGNoLmNhbGwodGhpcyxldmVudCk7fXJldHVybiBldmVudC5yZXN1bHQ7fSxoYW5kbGVyczpmdW5jdGlvbiBoYW5kbGVycyhldmVudCxfaGFuZGxlcnMpe3ZhciBpLGhhbmRsZU9iaixzZWwsbWF0Y2hlZEhhbmRsZXJzLG1hdGNoZWRTZWxlY3RvcnMsaGFuZGxlclF1ZXVlPVtdLGRlbGVnYXRlQ291bnQ9X2hhbmRsZXJzLmRlbGVnYXRlQ291bnQsY3VyPWV2ZW50LnRhcmdldDsvLyBGaW5kIGRlbGVnYXRlIGhhbmRsZXJzXG5pZihkZWxlZ2F0ZUNvdW50JiYvLyBTdXBwb3J0OiBJRSA8PTlcbi8vIEJsYWNrLWhvbGUgU1ZHIDx1c2U+IGluc3RhbmNlIHRyZWVzICh0cmFjLTEzMTgwKVxuY3VyLm5vZGVUeXBlJiYvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDJcbi8vIFN1cHByZXNzIHNwZWMtdmlvbGF0aW5nIGNsaWNrcyBpbmRpY2F0aW5nIGEgbm9uLXByaW1hcnkgcG9pbnRlciBidXR0b24gKHRyYWMtMzg2MSlcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50LXR5cGUtY2xpY2tcbi8vIFN1cHBvcnQ6IElFIDExIG9ubHlcbi8vIC4uLmJ1dCBub3QgYXJyb3cga2V5IFwiY2xpY2tzXCIgb2YgcmFkaW8gaW5wdXRzLCB3aGljaCBjYW4gaGF2ZSBgYnV0dG9uYCAtMSAoZ2gtMjM0MylcbiEoZXZlbnQudHlwZT09PVwiY2xpY2tcIiYmZXZlbnQuYnV0dG9uPj0xKSl7Zm9yKDtjdXIhPT10aGlzO2N1cj1jdXIucGFyZW50Tm9kZXx8dGhpcyl7Ly8gRG9uJ3QgY2hlY2sgbm9uLWVsZW1lbnRzICgjMTMyMDgpXG4vLyBEb24ndCBwcm9jZXNzIGNsaWNrcyBvbiBkaXNhYmxlZCBlbGVtZW50cyAoIzY5MTEsICM4MTY1LCAjMTEzODIsICMxMTc2NClcbmlmKGN1ci5ub2RlVHlwZT09PTEmJiEoZXZlbnQudHlwZT09PVwiY2xpY2tcIiYmY3VyLmRpc2FibGVkPT09dHJ1ZSkpe21hdGNoZWRIYW5kbGVycz1bXTttYXRjaGVkU2VsZWN0b3JzPXt9O2ZvcihpPTA7aTxkZWxlZ2F0ZUNvdW50O2krKyl7aGFuZGxlT2JqPV9oYW5kbGVyc1tpXTsvLyBEb24ndCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoIzEzMjAzKVxuc2VsPWhhbmRsZU9iai5zZWxlY3RvcitcIiBcIjtpZihtYXRjaGVkU2VsZWN0b3JzW3NlbF09PT11bmRlZmluZWQpe21hdGNoZWRTZWxlY3RvcnNbc2VsXT1oYW5kbGVPYmoubmVlZHNDb250ZXh0P2pRdWVyeShzZWwsdGhpcykuaW5kZXgoY3VyKT4tMTpqUXVlcnkuZmluZChzZWwsdGhpcyxudWxsLFtjdXJdKS5sZW5ndGg7fWlmKG1hdGNoZWRTZWxlY3RvcnNbc2VsXSl7bWF0Y2hlZEhhbmRsZXJzLnB1c2goaGFuZGxlT2JqKTt9fWlmKG1hdGNoZWRIYW5kbGVycy5sZW5ndGgpe2hhbmRsZXJRdWV1ZS5wdXNoKHtlbGVtOmN1cixoYW5kbGVyczptYXRjaGVkSGFuZGxlcnN9KTt9fX19Ly8gQWRkIHRoZSByZW1haW5pbmcgKGRpcmVjdGx5LWJvdW5kKSBoYW5kbGVyc1xuY3VyPXRoaXM7aWYoZGVsZWdhdGVDb3VudDxfaGFuZGxlcnMubGVuZ3RoKXtoYW5kbGVyUXVldWUucHVzaCh7ZWxlbTpjdXIsaGFuZGxlcnM6X2hhbmRsZXJzLnNsaWNlKGRlbGVnYXRlQ291bnQpfSk7fXJldHVybiBoYW5kbGVyUXVldWU7fSxhZGRQcm9wOmZ1bmN0aW9uIGFkZFByb3AobmFtZSxob29rKXtPYmplY3QuZGVmaW5lUHJvcGVydHkoalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSxuYW1lLHtlbnVtZXJhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWUsZ2V0OmpRdWVyeS5pc0Z1bmN0aW9uKGhvb2spP2Z1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXtyZXR1cm4gaG9vayh0aGlzLm9yaWdpbmFsRXZlbnQpO319OmZ1bmN0aW9uKCl7aWYodGhpcy5vcmlnaW5hbEV2ZW50KXtyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W25hbWVdO319LHNldDpmdW5jdGlvbiBzZXQodmFsdWUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLG5hbWUse2VudW1lcmFibGU6dHJ1ZSxjb25maWd1cmFibGU6dHJ1ZSx3cml0YWJsZTp0cnVlLHZhbHVlOnZhbHVlfSk7fX0pO30sZml4OmZ1bmN0aW9uIGZpeChvcmlnaW5hbEV2ZW50KXtyZXR1cm4gb3JpZ2luYWxFdmVudFtqUXVlcnkuZXhwYW5kb10/b3JpZ2luYWxFdmVudDpuZXcgalF1ZXJ5LkV2ZW50KG9yaWdpbmFsRXZlbnQpO30sc3BlY2lhbDp7bG9hZDp7Ly8gUHJldmVudCB0cmlnZ2VyZWQgaW1hZ2UubG9hZCBldmVudHMgZnJvbSBidWJibGluZyB0byB3aW5kb3cubG9hZFxubm9CdWJibGU6dHJ1ZX0sZm9jdXM6ey8vIEZpcmUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxudHJpZ2dlcjpmdW5jdGlvbiB0cmlnZ2VyKCl7aWYodGhpcyE9PXNhZmVBY3RpdmVFbGVtZW50KCkmJnRoaXMuZm9jdXMpe3RoaXMuZm9jdXMoKTtyZXR1cm4gZmFsc2U7fX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uIHRyaWdnZXIoKXtpZih0aGlzPT09c2FmZUFjdGl2ZUVsZW1lbnQoKSYmdGhpcy5ibHVyKXt0aGlzLmJsdXIoKTtyZXR1cm4gZmFsc2U7fX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6ey8vIEZvciBjaGVja2JveCwgZmlyZSBuYXRpdmUgZXZlbnQgc28gY2hlY2tlZCBzdGF0ZSB3aWxsIGJlIHJpZ2h0XG50cmlnZ2VyOmZ1bmN0aW9uIHRyaWdnZXIoKXtpZih0aGlzLnR5cGU9PT1cImNoZWNrYm94XCImJnRoaXMuY2xpY2smJmpRdWVyeS5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIikpe3RoaXMuY2xpY2soKTtyZXR1cm4gZmFsc2U7fX0sLy8gRm9yIGNyb3NzLWJyb3dzZXIgY29uc2lzdGVuY3ksIGRvbid0IGZpcmUgbmF0aXZlIC5jbGljaygpIG9uIGxpbmtzXG5fZGVmYXVsdDpmdW5jdGlvbiBfZGVmYXVsdChldmVudCl7cmV0dXJuIGpRdWVyeS5ub2RlTmFtZShldmVudC50YXJnZXQsXCJhXCIpO319LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uIHBvc3REaXNwYXRjaChldmVudCl7Ly8gU3VwcG9ydDogRmlyZWZveCAyMCtcbi8vIEZpcmVmb3ggZG9lc24ndCBhbGVydCBpZiB0aGUgcmV0dXJuVmFsdWUgZmllbGQgaXMgbm90IHNldC5cbmlmKGV2ZW50LnJlc3VsdCE9PXVuZGVmaW5lZCYmZXZlbnQub3JpZ2luYWxFdmVudCl7ZXZlbnQub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1ldmVudC5yZXN1bHQ7fX19fX07alF1ZXJ5LnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGVsZW0sdHlwZSxoYW5kbGUpey8vIFRoaXMgXCJpZlwiIGlzIG5lZWRlZCBmb3IgcGxhaW4gb2JqZWN0c1xuaWYoZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKXtlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSxoYW5kbGUpO319O2pRdWVyeS5FdmVudD1mdW5jdGlvbihzcmMscHJvcHMpey8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCB0aGUgJ25ldycga2V5d29yZFxuaWYoISh0aGlzIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50KSl7cmV0dXJuIG5ldyBqUXVlcnkuRXZlbnQoc3JjLHByb3BzKTt9Ly8gRXZlbnQgb2JqZWN0XG5pZihzcmMmJnNyYy50eXBlKXt0aGlzLm9yaWdpbmFsRXZlbnQ9c3JjO3RoaXMudHlwZT1zcmMudHlwZTsvLyBFdmVudHMgYnViYmxpbmcgdXAgdGhlIGRvY3VtZW50IG1heSBoYXZlIGJlZW4gbWFya2VkIGFzIHByZXZlbnRlZFxuLy8gYnkgYSBoYW5kbGVyIGxvd2VyIGRvd24gdGhlIHRyZWU7IHJlZmxlY3QgdGhlIGNvcnJlY3QgdmFsdWUuXG50aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1zcmMuZGVmYXVsdFByZXZlbnRlZHx8c3JjLmRlZmF1bHRQcmV2ZW50ZWQ9PT11bmRlZmluZWQmJi8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seVxuc3JjLnJldHVyblZhbHVlPT09ZmFsc2U/cmV0dXJuVHJ1ZTpyZXR1cm5GYWxzZTsvLyBDcmVhdGUgdGFyZ2V0IHByb3BlcnRpZXNcbi8vIFN1cHBvcnQ6IFNhZmFyaSA8PTYgLSA3IG9ubHlcbi8vIFRhcmdldCBzaG91bGQgbm90IGJlIGEgdGV4dCBub2RlICgjNTA0LCAjMTMxNDMpXG50aGlzLnRhcmdldD1zcmMudGFyZ2V0JiZzcmMudGFyZ2V0Lm5vZGVUeXBlPT09Mz9zcmMudGFyZ2V0LnBhcmVudE5vZGU6c3JjLnRhcmdldDt0aGlzLmN1cnJlbnRUYXJnZXQ9c3JjLmN1cnJlbnRUYXJnZXQ7dGhpcy5yZWxhdGVkVGFyZ2V0PXNyYy5yZWxhdGVkVGFyZ2V0Oy8vIEV2ZW50IHR5cGVcbn1lbHNle3RoaXMudHlwZT1zcmM7fS8vIFB1dCBleHBsaWNpdGx5IHByb3ZpZGVkIHByb3BlcnRpZXMgb250byB0aGUgZXZlbnQgb2JqZWN0XG5pZihwcm9wcyl7alF1ZXJ5LmV4dGVuZCh0aGlzLHByb3BzKTt9Ly8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcbnRoaXMudGltZVN0YW1wPXNyYyYmc3JjLnRpbWVTdGFtcHx8alF1ZXJ5Lm5vdygpOy8vIE1hcmsgaXQgYXMgZml4ZWRcbnRoaXNbalF1ZXJ5LmV4cGFuZG9dPXRydWU7fTsvLyBqUXVlcnkuRXZlbnQgaXMgYmFzZWQgb24gRE9NMyBFdmVudHMgYXMgc3BlY2lmaWVkIGJ5IHRoZSBFQ01BU2NyaXB0IExhbmd1YWdlIEJpbmRpbmdcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAzL1dELURPTS1MZXZlbC0zLUV2ZW50cy0yMDAzMDMzMS9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcbmpRdWVyeS5FdmVudC5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmpRdWVyeS5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6cmV0dXJuRmFsc2UsaXNQcm9wYWdhdGlvblN0b3BwZWQ6cmV0dXJuRmFsc2UsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6cmV0dXJuRmFsc2UsaXNTaW11bGF0ZWQ6ZmFsc2UscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9cmV0dXJuVHJ1ZTtpZihlJiYhdGhpcy5pc1NpbXVsYXRlZCl7ZS5wcmV2ZW50RGVmYXVsdCgpO319LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1yZXR1cm5UcnVlO2lmKGUmJiF0aGlzLmlzU2ltdWxhdGVkKXtlLnN0b3BQcm9wYWdhdGlvbigpO319LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbiBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1yZXR1cm5UcnVlO2lmKGUmJiF0aGlzLmlzU2ltdWxhdGVkKXtlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO310aGlzLnN0b3BQcm9wYWdhdGlvbigpO319Oy8vIEluY2x1ZGVzIGFsbCBjb21tb24gZXZlbnQgcHJvcHMgaW5jbHVkaW5nIEtleUV2ZW50IGFuZCBNb3VzZUV2ZW50IHNwZWNpZmljIHByb3BzXG5qUXVlcnkuZWFjaCh7YWx0S2V5OnRydWUsYnViYmxlczp0cnVlLGNhbmNlbGFibGU6dHJ1ZSxjaGFuZ2VkVG91Y2hlczp0cnVlLGN0cmxLZXk6dHJ1ZSxkZXRhaWw6dHJ1ZSxldmVudFBoYXNlOnRydWUsbWV0YUtleTp0cnVlLHBhZ2VYOnRydWUscGFnZVk6dHJ1ZSxzaGlmdEtleTp0cnVlLHZpZXc6dHJ1ZSxcImNoYXJcIjp0cnVlLGNoYXJDb2RlOnRydWUsa2V5OnRydWUsa2V5Q29kZTp0cnVlLGJ1dHRvbjp0cnVlLGJ1dHRvbnM6dHJ1ZSxjbGllbnRYOnRydWUsY2xpZW50WTp0cnVlLG9mZnNldFg6dHJ1ZSxvZmZzZXRZOnRydWUscG9pbnRlcklkOnRydWUscG9pbnRlclR5cGU6dHJ1ZSxzY3JlZW5YOnRydWUsc2NyZWVuWTp0cnVlLHRhcmdldFRvdWNoZXM6dHJ1ZSx0b0VsZW1lbnQ6dHJ1ZSx0b3VjaGVzOnRydWUsd2hpY2g6ZnVuY3Rpb24gd2hpY2goZXZlbnQpe3ZhciBidXR0b249ZXZlbnQuYnV0dG9uOy8vIEFkZCB3aGljaCBmb3Iga2V5IGV2ZW50c1xuaWYoZXZlbnQud2hpY2g9PW51bGwmJnJrZXlFdmVudC50ZXN0KGV2ZW50LnR5cGUpKXtyZXR1cm4gZXZlbnQuY2hhckNvZGUhPW51bGw/ZXZlbnQuY2hhckNvZGU6ZXZlbnQua2V5Q29kZTt9Ly8gQWRkIHdoaWNoIGZvciBjbGljazogMSA9PT0gbGVmdDsgMiA9PT0gbWlkZGxlOyAzID09PSByaWdodFxuaWYoIWV2ZW50LndoaWNoJiZidXR0b24hPT11bmRlZmluZWQmJnJtb3VzZUV2ZW50LnRlc3QoZXZlbnQudHlwZSkpe2lmKGJ1dHRvbiYxKXtyZXR1cm4gMTt9aWYoYnV0dG9uJjIpe3JldHVybiAzO31pZihidXR0b24mNCl7cmV0dXJuIDI7fXJldHVybiAwO31yZXR1cm4gZXZlbnQud2hpY2g7fX0salF1ZXJ5LmV2ZW50LmFkZFByb3ApOy8vIENyZWF0ZSBtb3VzZWVudGVyL2xlYXZlIGV2ZW50cyB1c2luZyBtb3VzZW92ZXIvb3V0IGFuZCBldmVudC10aW1lIGNoZWNrc1xuLy8gc28gdGhhdCBldmVudCBkZWxlZ2F0aW9uIHdvcmtzIGluIGpRdWVyeS5cbi8vIERvIHRoZSBzYW1lIGZvciBwb2ludGVyZW50ZXIvcG9pbnRlcmxlYXZlIGFuZCBwb2ludGVyb3Zlci9wb2ludGVyb3V0XG4vL1xuLy8gU3VwcG9ydDogU2FmYXJpIDcgb25seVxuLy8gU2FmYXJpIHNlbmRzIG1vdXNlZW50ZXIgdG9vIG9mdGVuOyBzZWU6XG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NzAyNThcbi8vIGZvciB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGJ1ZyAoaXQgZXhpc3RlZCBpbiBvbGRlciBDaHJvbWUgdmVyc2lvbnMgYXMgd2VsbCkuXG5qUXVlcnkuZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihvcmlnLGZpeCl7alF1ZXJ5LmV2ZW50LnNwZWNpYWxbb3JpZ109e2RlbGVnYXRlVHlwZTpmaXgsYmluZFR5cGU6Zml4LGhhbmRsZTpmdW5jdGlvbiBoYW5kbGUoZXZlbnQpe3ZhciByZXQsdGFyZ2V0PXRoaXMscmVsYXRlZD1ldmVudC5yZWxhdGVkVGFyZ2V0LGhhbmRsZU9iaj1ldmVudC5oYW5kbGVPYmo7Ly8gRm9yIG1vdXNlZW50ZXIvbGVhdmUgY2FsbCB0aGUgaGFuZGxlciBpZiByZWxhdGVkIGlzIG91dHNpZGUgdGhlIHRhcmdldC5cbi8vIE5COiBObyByZWxhdGVkVGFyZ2V0IGlmIHRoZSBtb3VzZSBsZWZ0L2VudGVyZWQgdGhlIGJyb3dzZXIgd2luZG93XG5pZighcmVsYXRlZHx8cmVsYXRlZCE9PXRhcmdldCYmIWpRdWVyeS5jb250YWlucyh0YXJnZXQscmVsYXRlZCkpe2V2ZW50LnR5cGU9aGFuZGxlT2JqLm9yaWdUeXBlO3JldD1oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZXZlbnQudHlwZT1maXg7fXJldHVybiByZXQ7fX07fSk7alF1ZXJ5LmZuLmV4dGVuZCh7b246ZnVuY3Rpb24gb24odHlwZXMsc2VsZWN0b3IsZGF0YSxmbil7cmV0dXJuIF9vbih0aGlzLHR5cGVzLHNlbGVjdG9yLGRhdGEsZm4pO30sb25lOmZ1bmN0aW9uIG9uZSh0eXBlcyxzZWxlY3RvcixkYXRhLGZuKXtyZXR1cm4gX29uKHRoaXMsdHlwZXMsc2VsZWN0b3IsZGF0YSxmbiwxKTt9LG9mZjpmdW5jdGlvbiBvZmYodHlwZXMsc2VsZWN0b3IsZm4pe3ZhciBoYW5kbGVPYmosdHlwZTtpZih0eXBlcyYmdHlwZXMucHJldmVudERlZmF1bHQmJnR5cGVzLmhhbmRsZU9iail7Ly8gKCBldmVudCApICBkaXNwYXRjaGVkIGpRdWVyeS5FdmVudFxuaGFuZGxlT2JqPXR5cGVzLmhhbmRsZU9iajtqUXVlcnkodHlwZXMuZGVsZWdhdGVUYXJnZXQpLm9mZihoYW5kbGVPYmoubmFtZXNwYWNlP2hhbmRsZU9iai5vcmlnVHlwZStcIi5cIitoYW5kbGVPYmoubmFtZXNwYWNlOmhhbmRsZU9iai5vcmlnVHlwZSxoYW5kbGVPYmouc2VsZWN0b3IsaGFuZGxlT2JqLmhhbmRsZXIpO3JldHVybiB0aGlzO31pZigodHlwZW9mIHR5cGVzPT09XCJ1bmRlZmluZWRcIj9cInVuZGVmaW5lZFwiOl90eXBlb2YodHlwZXMpKT09PVwib2JqZWN0XCIpey8vICggdHlwZXMtb2JqZWN0IFssIHNlbGVjdG9yXSApXG5mb3IodHlwZSBpbiB0eXBlcyl7dGhpcy5vZmYodHlwZSxzZWxlY3Rvcix0eXBlc1t0eXBlXSk7fXJldHVybiB0aGlzO31pZihzZWxlY3Rvcj09PWZhbHNlfHx0eXBlb2Ygc2VsZWN0b3I9PT1cImZ1bmN0aW9uXCIpey8vICggdHlwZXMgWywgZm5dIClcbmZuPXNlbGVjdG9yO3NlbGVjdG9yPXVuZGVmaW5lZDt9aWYoZm49PT1mYWxzZSl7Zm49cmV0dXJuRmFsc2U7fXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtqUXVlcnkuZXZlbnQucmVtb3ZlKHRoaXMsdHlwZXMsZm4sc2VsZWN0b3IpO30pO319KTt2YXIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy8zMjI5XG5yeGh0bWxUYWc9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksLyogZXNsaW50LWVuYWJsZSAqLy8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSwgRWRnZSAxMiAtIDEzXG4vLyBJbiBJRS9FZGdlIHVzaW5nIHJlZ2V4IGdyb3VwcyBoZXJlIGNhdXNlcyBzZXZlcmUgc2xvd2Rvd25zLlxuLy8gU2VlIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvMTczNjUxMi9cbnJub0lubmVyaHRtbD0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSwvLyBjaGVja2VkPVwiY2hlY2tlZFwiIG9yIGNoZWNrZWRcbnJjaGVja2VkPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2kscnNjcmlwdFR5cGVNYXNrZWQ9L150cnVlXFwvKC4qKS8scmNsZWFuU2NyaXB0PS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztmdW5jdGlvbiBtYW5pcHVsYXRpb25UYXJnZXQoZWxlbSxjb250ZW50KXtpZihqUXVlcnkubm9kZU5hbWUoZWxlbSxcInRhYmxlXCIpJiZqUXVlcnkubm9kZU5hbWUoY29udGVudC5ub2RlVHlwZSE9PTExP2NvbnRlbnQ6Y29udGVudC5maXJzdENoaWxkLFwidHJcIikpe3JldHVybiBlbGVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGVsZW07fXJldHVybiBlbGVtO30vLyBSZXBsYWNlL3Jlc3RvcmUgdGhlIHR5cGUgYXR0cmlidXRlIG9mIHNjcmlwdCBlbGVtZW50cyBmb3Igc2FmZSBET00gbWFuaXB1bGF0aW9uXG5mdW5jdGlvbiBkaXNhYmxlU2NyaXB0KGVsZW0pe2VsZW0udHlwZT0oZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpIT09bnVsbCkrXCIvXCIrZWxlbS50eXBlO3JldHVybiBlbGVtO31mdW5jdGlvbiByZXN0b3JlU2NyaXB0KGVsZW0pe3ZhciBtYXRjaD1yc2NyaXB0VHlwZU1hc2tlZC5leGVjKGVsZW0udHlwZSk7aWYobWF0Y2gpe2VsZW0udHlwZT1tYXRjaFsxXTt9ZWxzZXtlbGVtLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIik7fXJldHVybiBlbGVtO31mdW5jdGlvbiBjbG9uZUNvcHlFdmVudChzcmMsZGVzdCl7dmFyIGksbCx0eXBlLHBkYXRhT2xkLHBkYXRhQ3VyLHVkYXRhT2xkLHVkYXRhQ3VyLGV2ZW50cztpZihkZXN0Lm5vZGVUeXBlIT09MSl7cmV0dXJuO30vLyAxLiBDb3B5IHByaXZhdGUgZGF0YTogZXZlbnRzLCBoYW5kbGVycywgZXRjLlxuaWYoZGF0YVByaXYuaGFzRGF0YShzcmMpKXtwZGF0YU9sZD1kYXRhUHJpdi5hY2Nlc3Moc3JjKTtwZGF0YUN1cj1kYXRhUHJpdi5zZXQoZGVzdCxwZGF0YU9sZCk7ZXZlbnRzPXBkYXRhT2xkLmV2ZW50cztpZihldmVudHMpe2RlbGV0ZSBwZGF0YUN1ci5oYW5kbGU7cGRhdGFDdXIuZXZlbnRzPXt9O2Zvcih0eXBlIGluIGV2ZW50cyl7Zm9yKGk9MCxsPWV2ZW50c1t0eXBlXS5sZW5ndGg7aTxsO2krKyl7alF1ZXJ5LmV2ZW50LmFkZChkZXN0LHR5cGUsZXZlbnRzW3R5cGVdW2ldKTt9fX19Ly8gMi4gQ29weSB1c2VyIGRhdGFcbmlmKGRhdGFVc2VyLmhhc0RhdGEoc3JjKSl7dWRhdGFPbGQ9ZGF0YVVzZXIuYWNjZXNzKHNyYyk7dWRhdGFDdXI9alF1ZXJ5LmV4dGVuZCh7fSx1ZGF0YU9sZCk7ZGF0YVVzZXIuc2V0KGRlc3QsdWRhdGFDdXIpO319Ly8gRml4IElFIGJ1Z3MsIHNlZSBzdXBwb3J0IHRlc3RzXG5mdW5jdGlvbiBmaXhJbnB1dChzcmMsZGVzdCl7dmFyIG5vZGVOYW1lPWRlc3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKTsvLyBGYWlscyB0byBwZXJzaXN0IHRoZSBjaGVja2VkIHN0YXRlIG9mIGEgY2xvbmVkIGNoZWNrYm94IG9yIHJhZGlvIGJ1dHRvbi5cbmlmKG5vZGVOYW1lPT09XCJpbnB1dFwiJiZyY2hlY2thYmxlVHlwZS50ZXN0KHNyYy50eXBlKSl7ZGVzdC5jaGVja2VkPXNyYy5jaGVja2VkOy8vIEZhaWxzIHRvIHJldHVybiB0aGUgc2VsZWN0ZWQgb3B0aW9uIHRvIHRoZSBkZWZhdWx0IHNlbGVjdGVkIHN0YXRlIHdoZW4gY2xvbmluZyBvcHRpb25zXG59ZWxzZSBpZihub2RlTmFtZT09PVwiaW5wdXRcInx8bm9kZU5hbWU9PT1cInRleHRhcmVhXCIpe2Rlc3QuZGVmYXVsdFZhbHVlPXNyYy5kZWZhdWx0VmFsdWU7fX1mdW5jdGlvbiBkb21NYW5pcChjb2xsZWN0aW9uLGFyZ3MsY2FsbGJhY2ssaWdub3JlZCl7Ly8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuYXJncz1jb25jYXQuYXBwbHkoW10sYXJncyk7dmFyIGZyYWdtZW50LGZpcnN0LHNjcmlwdHMsaGFzU2NyaXB0cyxub2RlLGRvYyxpPTAsbD1jb2xsZWN0aW9uLmxlbmd0aCxpTm9DbG9uZT1sLTEsdmFsdWU9YXJnc1swXSxpc0Z1bmN0aW9uPWpRdWVyeS5pc0Z1bmN0aW9uKHZhbHVlKTsvLyBXZSBjYW4ndCBjbG9uZU5vZGUgZnJhZ21lbnRzIHRoYXQgY29udGFpbiBjaGVja2VkLCBpbiBXZWJLaXRcbmlmKGlzRnVuY3Rpb258fGw+MSYmdHlwZW9mIHZhbHVlPT09XCJzdHJpbmdcIiYmIXN1cHBvcnQuY2hlY2tDbG9uZSYmcmNoZWNrZWQudGVzdCh2YWx1ZSkpe3JldHVybiBjb2xsZWN0aW9uLmVhY2goZnVuY3Rpb24oaW5kZXgpe3ZhciBzZWxmPWNvbGxlY3Rpb24uZXEoaW5kZXgpO2lmKGlzRnVuY3Rpb24pe2FyZ3NbMF09dmFsdWUuY2FsbCh0aGlzLGluZGV4LHNlbGYuaHRtbCgpKTt9ZG9tTWFuaXAoc2VsZixhcmdzLGNhbGxiYWNrLGlnbm9yZWQpO30pO31pZihsKXtmcmFnbWVudD1idWlsZEZyYWdtZW50KGFyZ3MsY29sbGVjdGlvblswXS5vd25lckRvY3VtZW50LGZhbHNlLGNvbGxlY3Rpb24saWdub3JlZCk7Zmlyc3Q9ZnJhZ21lbnQuZmlyc3RDaGlsZDtpZihmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aD09PTEpe2ZyYWdtZW50PWZpcnN0O30vLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcbmlmKGZpcnN0fHxpZ25vcmVkKXtzY3JpcHRzPWpRdWVyeS5tYXAoZ2V0QWxsKGZyYWdtZW50LFwic2NyaXB0XCIpLGRpc2FibGVTY3JpcHQpO2hhc1NjcmlwdHM9c2NyaXB0cy5sZW5ndGg7Ly8gVXNlIHRoZSBvcmlnaW5hbCBmcmFnbWVudCBmb3IgdGhlIGxhc3QgaXRlbVxuLy8gaW5zdGVhZCBvZiB0aGUgZmlyc3QgYmVjYXVzZSBpdCBjYW4gZW5kIHVwXG4vLyBiZWluZyBlbXB0aWVkIGluY29ycmVjdGx5IGluIGNlcnRhaW4gc2l0dWF0aW9ucyAoIzgwNzApLlxuZm9yKDtpPGw7aSsrKXtub2RlPWZyYWdtZW50O2lmKGkhPT1pTm9DbG9uZSl7bm9kZT1qUXVlcnkuY2xvbmUobm9kZSx0cnVlLHRydWUpOy8vIEtlZXAgcmVmZXJlbmNlcyB0byBjbG9uZWQgc2NyaXB0cyBmb3IgbGF0ZXIgcmVzdG9yYXRpb25cbmlmKGhhc1NjcmlwdHMpey8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuLy8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxualF1ZXJ5Lm1lcmdlKHNjcmlwdHMsZ2V0QWxsKG5vZGUsXCJzY3JpcHRcIikpO319Y2FsbGJhY2suY2FsbChjb2xsZWN0aW9uW2ldLG5vZGUsaSk7fWlmKGhhc1NjcmlwdHMpe2RvYz1zY3JpcHRzW3NjcmlwdHMubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQ7Ly8gUmVlbmFibGUgc2NyaXB0c1xualF1ZXJ5Lm1hcChzY3JpcHRzLHJlc3RvcmVTY3JpcHQpOy8vIEV2YWx1YXRlIGV4ZWN1dGFibGUgc2NyaXB0cyBvbiBmaXJzdCBkb2N1bWVudCBpbnNlcnRpb25cbmZvcihpPTA7aTxoYXNTY3JpcHRzO2krKyl7bm9kZT1zY3JpcHRzW2ldO2lmKHJzY3JpcHRUeXBlLnRlc3Qobm9kZS50eXBlfHxcIlwiKSYmIWRhdGFQcml2LmFjY2Vzcyhub2RlLFwiZ2xvYmFsRXZhbFwiKSYmalF1ZXJ5LmNvbnRhaW5zKGRvYyxub2RlKSl7aWYobm9kZS5zcmMpey8vIE9wdGlvbmFsIEFKQVggZGVwZW5kZW5jeSwgYnV0IHdvbid0IHJ1biBzY3JpcHRzIGlmIG5vdCBwcmVzZW50XG5pZihqUXVlcnkuX2V2YWxVcmwpe2pRdWVyeS5fZXZhbFVybChub2RlLnNyYyk7fX1lbHNle0RPTUV2YWwobm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKHJjbGVhblNjcmlwdCxcIlwiKSxkb2MpO319fX19fXJldHVybiBjb2xsZWN0aW9uO31mdW5jdGlvbiBfcmVtb3ZlKGVsZW0sc2VsZWN0b3Isa2VlcERhdGEpe3ZhciBub2RlLG5vZGVzPXNlbGVjdG9yP2pRdWVyeS5maWx0ZXIoc2VsZWN0b3IsZWxlbSk6ZWxlbSxpPTA7Zm9yKDsobm9kZT1ub2Rlc1tpXSkhPW51bGw7aSsrKXtpZigha2VlcERhdGEmJm5vZGUubm9kZVR5cGU9PT0xKXtqUXVlcnkuY2xlYW5EYXRhKGdldEFsbChub2RlKSk7fWlmKG5vZGUucGFyZW50Tm9kZSl7aWYoa2VlcERhdGEmJmpRdWVyeS5jb250YWlucyhub2RlLm93bmVyRG9jdW1lbnQsbm9kZSkpe3NldEdsb2JhbEV2YWwoZ2V0QWxsKG5vZGUsXCJzY3JpcHRcIikpO31ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7fX1yZXR1cm4gZWxlbTt9alF1ZXJ5LmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbiBodG1sUHJlZmlsdGVyKGh0bWwpe3JldHVybiBodG1sLnJlcGxhY2UocnhodG1sVGFnLFwiPCQxPjwvJDI+XCIpO30sY2xvbmU6ZnVuY3Rpb24gY2xvbmUoZWxlbSxkYXRhQW5kRXZlbnRzLGRlZXBEYXRhQW5kRXZlbnRzKXt2YXIgaSxsLHNyY0VsZW1lbnRzLGRlc3RFbGVtZW50cyxjbG9uZT1lbGVtLmNsb25lTm9kZSh0cnVlKSxpblBhZ2U9alF1ZXJ5LmNvbnRhaW5zKGVsZW0ub3duZXJEb2N1bWVudCxlbGVtKTsvLyBGaXggSUUgY2xvbmluZyBpc3N1ZXNcbmlmKCFzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkJiYoZWxlbS5ub2RlVHlwZT09PTF8fGVsZW0ubm9kZVR5cGU9PT0xMSkmJiFqUXVlcnkuaXNYTUxEb2MoZWxlbSkpey8vIFdlIGVzY2hldyBTaXp6bGUgaGVyZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uczogaHR0cHM6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuZGVzdEVsZW1lbnRzPWdldEFsbChjbG9uZSk7c3JjRWxlbWVudHM9Z2V0QWxsKGVsZW0pO2ZvcihpPTAsbD1zcmNFbGVtZW50cy5sZW5ndGg7aTxsO2krKyl7Zml4SW5wdXQoc3JjRWxlbWVudHNbaV0sZGVzdEVsZW1lbnRzW2ldKTt9fS8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcbmlmKGRhdGFBbmRFdmVudHMpe2lmKGRlZXBEYXRhQW5kRXZlbnRzKXtzcmNFbGVtZW50cz1zcmNFbGVtZW50c3x8Z2V0QWxsKGVsZW0pO2Rlc3RFbGVtZW50cz1kZXN0RWxlbWVudHN8fGdldEFsbChjbG9uZSk7Zm9yKGk9MCxsPXNyY0VsZW1lbnRzLmxlbmd0aDtpPGw7aSsrKXtjbG9uZUNvcHlFdmVudChzcmNFbGVtZW50c1tpXSxkZXN0RWxlbWVudHNbaV0pO319ZWxzZXtjbG9uZUNvcHlFdmVudChlbGVtLGNsb25lKTt9fS8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3RvcnlcbmRlc3RFbGVtZW50cz1nZXRBbGwoY2xvbmUsXCJzY3JpcHRcIik7aWYoZGVzdEVsZW1lbnRzLmxlbmd0aD4wKXtzZXRHbG9iYWxFdmFsKGRlc3RFbGVtZW50cywhaW5QYWdlJiZnZXRBbGwoZWxlbSxcInNjcmlwdFwiKSk7fS8vIFJldHVybiB0aGUgY2xvbmVkIHNldFxucmV0dXJuIGNsb25lO30sY2xlYW5EYXRhOmZ1bmN0aW9uIGNsZWFuRGF0YShlbGVtcyl7dmFyIGRhdGEsZWxlbSx0eXBlLHNwZWNpYWw9alF1ZXJ5LmV2ZW50LnNwZWNpYWwsaT0wO2Zvcig7KGVsZW09ZWxlbXNbaV0pIT09dW5kZWZpbmVkO2krKyl7aWYoYWNjZXB0RGF0YShlbGVtKSl7aWYoZGF0YT1lbGVtW2RhdGFQcml2LmV4cGFuZG9dKXtpZihkYXRhLmV2ZW50cyl7Zm9yKHR5cGUgaW4gZGF0YS5ldmVudHMpe2lmKHNwZWNpYWxbdHlwZV0pe2pRdWVyeS5ldmVudC5yZW1vdmUoZWxlbSx0eXBlKTsvLyBUaGlzIGlzIGEgc2hvcnRjdXQgdG8gYXZvaWQgalF1ZXJ5LmV2ZW50LnJlbW92ZSdzIG92ZXJoZWFkXG59ZWxzZXtqUXVlcnkucmVtb3ZlRXZlbnQoZWxlbSx0eXBlLGRhdGEuaGFuZGxlKTt9fX0vLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1K1xuLy8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5lbGVtW2RhdGFQcml2LmV4cGFuZG9dPXVuZGVmaW5lZDt9aWYoZWxlbVtkYXRhVXNlci5leHBhbmRvXSl7Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcbi8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuZWxlbVtkYXRhVXNlci5leHBhbmRvXT11bmRlZmluZWQ7fX19fX0pO2pRdWVyeS5mbi5leHRlbmQoe2RldGFjaDpmdW5jdGlvbiBkZXRhY2goc2VsZWN0b3Ipe3JldHVybiBfcmVtb3ZlKHRoaXMsc2VsZWN0b3IsdHJ1ZSk7fSxyZW1vdmU6ZnVuY3Rpb24gcmVtb3ZlKHNlbGVjdG9yKXtyZXR1cm4gX3JlbW92ZSh0aGlzLHNlbGVjdG9yKTt9LHRleHQ6ZnVuY3Rpb24gdGV4dCh2YWx1ZSl7cmV0dXJuIGFjY2Vzcyh0aGlzLGZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdmFsdWU9PT11bmRlZmluZWQ/alF1ZXJ5LnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXtpZih0aGlzLm5vZGVUeXBlPT09MXx8dGhpcy5ub2RlVHlwZT09PTExfHx0aGlzLm5vZGVUeXBlPT09OSl7dGhpcy50ZXh0Q29udGVudD12YWx1ZTt9fSk7fSxudWxsLHZhbHVlLGFyZ3VtZW50cy5sZW5ndGgpO30sYXBwZW5kOmZ1bmN0aW9uIGFwcGVuZCgpe3JldHVybiBkb21NYW5pcCh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlbGVtKXtpZih0aGlzLm5vZGVUeXBlPT09MXx8dGhpcy5ub2RlVHlwZT09PTExfHx0aGlzLm5vZGVUeXBlPT09OSl7dmFyIHRhcmdldD1tYW5pcHVsYXRpb25UYXJnZXQodGhpcyxlbGVtKTt0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbSk7fX0pO30scHJlcGVuZDpmdW5jdGlvbiBwcmVwZW5kKCl7cmV0dXJuIGRvbU1hbmlwKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGVsZW0pe2lmKHRoaXMubm9kZVR5cGU9PT0xfHx0aGlzLm5vZGVUeXBlPT09MTF8fHRoaXMubm9kZVR5cGU9PT05KXt2YXIgdGFyZ2V0PW1hbmlwdWxhdGlvblRhcmdldCh0aGlzLGVsZW0pO3RhcmdldC5pbnNlcnRCZWZvcmUoZWxlbSx0YXJnZXQuZmlyc3RDaGlsZCk7fX0pO30sYmVmb3JlOmZ1bmN0aW9uIGJlZm9yZSgpe3JldHVybiBkb21NYW5pcCh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlbGVtKXtpZih0aGlzLnBhcmVudE5vZGUpe3RoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbSx0aGlzKTt9fSk7fSxhZnRlcjpmdW5jdGlvbiBhZnRlcigpe3JldHVybiBkb21NYW5pcCh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlbGVtKXtpZih0aGlzLnBhcmVudE5vZGUpe3RoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbSx0aGlzLm5leHRTaWJsaW5nKTt9fSk7fSxlbXB0eTpmdW5jdGlvbiBlbXB0eSgpe3ZhciBlbGVtLGk9MDtmb3IoOyhlbGVtPXRoaXNbaV0pIT1udWxsO2krKyl7aWYoZWxlbS5ub2RlVHlwZT09PTEpey8vIFByZXZlbnQgbWVtb3J5IGxlYWtzXG5qUXVlcnkuY2xlYW5EYXRhKGdldEFsbChlbGVtLGZhbHNlKSk7Ly8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcbmVsZW0udGV4dENvbnRlbnQ9XCJcIjt9fXJldHVybiB0aGlzO30sY2xvbmU6ZnVuY3Rpb24gY2xvbmUoZGF0YUFuZEV2ZW50cyxkZWVwRGF0YUFuZEV2ZW50cyl7ZGF0YUFuZEV2ZW50cz1kYXRhQW5kRXZlbnRzPT1udWxsP2ZhbHNlOmRhdGFBbmRFdmVudHM7ZGVlcERhdGFBbmRFdmVudHM9ZGVlcERhdGFBbmRFdmVudHM9PW51bGw/ZGF0YUFuZEV2ZW50czpkZWVwRGF0YUFuZEV2ZW50cztyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4galF1ZXJ5LmNsb25lKHRoaXMsZGF0YUFuZEV2ZW50cyxkZWVwRGF0YUFuZEV2ZW50cyk7fSk7fSxodG1sOmZ1bmN0aW9uIGh0bWwodmFsdWUpe3JldHVybiBhY2Nlc3ModGhpcyxmdW5jdGlvbih2YWx1ZSl7dmFyIGVsZW09dGhpc1swXXx8e30saT0wLGw9dGhpcy5sZW5ndGg7aWYodmFsdWU9PT11bmRlZmluZWQmJmVsZW0ubm9kZVR5cGU9PT0xKXtyZXR1cm4gZWxlbS5pbm5lckhUTUw7fS8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcbmlmKHR5cGVvZiB2YWx1ZT09PVwic3RyaW5nXCImJiFybm9Jbm5lcmh0bWwudGVzdCh2YWx1ZSkmJiF3cmFwTWFwWyhydGFnTmFtZS5leGVjKHZhbHVlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXt2YWx1ZT1qUXVlcnkuaHRtbFByZWZpbHRlcih2YWx1ZSk7dHJ5e2Zvcig7aTxsO2krKyl7ZWxlbT10aGlzW2ldfHx7fTsvLyBSZW1vdmUgZWxlbWVudCBub2RlcyBhbmQgcHJldmVudCBtZW1vcnkgbGVha3NcbmlmKGVsZW0ubm9kZVR5cGU9PT0xKXtqUXVlcnkuY2xlYW5EYXRhKGdldEFsbChlbGVtLGZhbHNlKSk7ZWxlbS5pbm5lckhUTUw9dmFsdWU7fX1lbGVtPTA7Ly8gSWYgdXNpbmcgaW5uZXJIVE1MIHRocm93cyBhbiBleGNlcHRpb24sIHVzZSB0aGUgZmFsbGJhY2sgbWV0aG9kXG59Y2F0Y2goZSl7fX1pZihlbGVtKXt0aGlzLmVtcHR5KCkuYXBwZW5kKHZhbHVlKTt9fSxudWxsLHZhbHVlLGFyZ3VtZW50cy5sZW5ndGgpO30scmVwbGFjZVdpdGg6ZnVuY3Rpb24gcmVwbGFjZVdpdGgoKXt2YXIgaWdub3JlZD1bXTsvLyBNYWtlIHRoZSBjaGFuZ2VzLCByZXBsYWNpbmcgZWFjaCBub24taWdub3JlZCBjb250ZXh0IGVsZW1lbnQgd2l0aCB0aGUgbmV3IGNvbnRlbnRcbnJldHVybiBkb21NYW5pcCh0aGlzLGFyZ3VtZW50cyxmdW5jdGlvbihlbGVtKXt2YXIgcGFyZW50PXRoaXMucGFyZW50Tm9kZTtpZihqUXVlcnkuaW5BcnJheSh0aGlzLGlnbm9yZWQpPDApe2pRdWVyeS5jbGVhbkRhdGEoZ2V0QWxsKHRoaXMpKTtpZihwYXJlbnQpe3BhcmVudC5yZXBsYWNlQ2hpbGQoZWxlbSx0aGlzKTt9fS8vIEZvcmNlIGNhbGxiYWNrIGludm9jYXRpb25cbn0saWdub3JlZCk7fX0pO2pRdWVyeS5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKG5hbWUsb3JpZ2luYWwpe2pRdWVyeS5mbltuYW1lXT1mdW5jdGlvbihzZWxlY3Rvcil7dmFyIGVsZW1zLHJldD1bXSxpbnNlcnQ9alF1ZXJ5KHNlbGVjdG9yKSxsYXN0PWluc2VydC5sZW5ndGgtMSxpPTA7Zm9yKDtpPD1sYXN0O2krKyl7ZWxlbXM9aT09PWxhc3Q/dGhpczp0aGlzLmNsb25lKHRydWUpO2pRdWVyeShpbnNlcnRbaV0pW29yaWdpbmFsXShlbGVtcyk7Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG4vLyAuZ2V0KCkgYmVjYXVzZSBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5wdXNoLmFwcGx5KHJldCxlbGVtcy5nZXQoKSk7fXJldHVybiB0aGlzLnB1c2hTdGFjayhyZXQpO307fSk7dmFyIHJtYXJnaW49L15tYXJnaW4vO3ZhciBybnVtbm9ucHg9bmV3IFJlZ0V4cChcIl4oXCIrcG51bStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKTt2YXIgZ2V0U3R5bGVzPWZ1bmN0aW9uIGdldFN0eWxlcyhlbGVtKXsvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHksIEZpcmVmb3ggPD0zMCAoIzE1MDk4LCAjMTQxNTApXG4vLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcbi8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxudmFyIHZpZXc9ZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O2lmKCF2aWV3fHwhdmlldy5vcGVuZXIpe3ZpZXc9d2luZG93O31yZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO307KGZ1bmN0aW9uKCl7Ly8gRXhlY3V0aW5nIGJvdGggcGl4ZWxQb3NpdGlvbiAmIGJveFNpemluZ1JlbGlhYmxlIHRlc3RzIHJlcXVpcmUgb25seSBvbmUgbGF5b3V0XG4vLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuZnVuY3Rpb24gY29tcHV0ZVN0eWxlVGVzdHMoKXsvLyBUaGlzIGlzIGEgc2luZ2xldG9uLCB3ZSBuZWVkIHRvIGV4ZWN1dGUgaXQgb25seSBvbmNlXG5pZighZGl2KXtyZXR1cm47fWRpdi5zdHlsZS5jc3NUZXh0PVwiYm94LXNpemluZzpib3JkZXItYm94O1wiK1wicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztcIitcIm1hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7XCIrXCJ0b3A6MSU7d2lkdGg6NTAlXCI7ZGl2LmlubmVySFRNTD1cIlwiO2RvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO3ZhciBkaXZTdHlsZT13aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkaXYpO3BpeGVsUG9zaXRpb25WYWw9ZGl2U3R5bGUudG9wIT09XCIxJVwiOy8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHksIEZpcmVmb3ggPD0zIC0gNDRcbnJlbGlhYmxlTWFyZ2luTGVmdFZhbD1kaXZTdHlsZS5tYXJnaW5MZWZ0PT09XCIycHhcIjtib3hTaXppbmdSZWxpYWJsZVZhbD1kaXZTdHlsZS53aWR0aD09PVwiNHB4XCI7Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seVxuLy8gU29tZSBzdHlsZXMgY29tZSBiYWNrIHdpdGggcGVyY2VudGFnZSB2YWx1ZXMsIGV2ZW4gdGhvdWdoIHRoZXkgc2hvdWxkbid0XG5kaXYuc3R5bGUubWFyZ2luUmlnaHQ9XCI1MCVcIjtwaXhlbE1hcmdpblJpZ2h0VmFsPWRpdlN0eWxlLm1hcmdpblJpZ2h0PT09XCI0cHhcIjtkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTsvLyBOdWxsaWZ5IHRoZSBkaXYgc28gaXQgd291bGRuJ3QgYmUgc3RvcmVkIGluIHRoZSBtZW1vcnkgYW5kXG4vLyBpdCB3aWxsIGFsc28gYmUgYSBzaWduIHRoYXQgY2hlY2tzIGFscmVhZHkgcGVyZm9ybWVkXG5kaXY9bnVsbDt9dmFyIHBpeGVsUG9zaXRpb25WYWwsYm94U2l6aW5nUmVsaWFibGVWYWwscGl4ZWxNYXJnaW5SaWdodFZhbCxyZWxpYWJsZU1hcmdpbkxlZnRWYWwsY29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZGl2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Ly8gRmluaXNoIGVhcmx5IGluIGxpbWl0ZWQgKG5vbi1icm93c2VyKSBlbnZpcm9ubWVudHNcbmlmKCFkaXYuc3R5bGUpe3JldHVybjt9Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuLy8gU3R5bGUgb2YgY2xvbmVkIGVsZW1lbnQgYWZmZWN0cyBzb3VyY2UgZWxlbWVudCBjbG9uZWQgKCM4OTA4KVxuZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIjtkaXYuY2xvbmVOb2RlKHRydWUpLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCI7c3VwcG9ydC5jbGVhckNsb25lU3R5bGU9ZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwPT09XCJjb250ZW50LWJveFwiO2NvbnRhaW5lci5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtcIitcInBhZGRpbmc6MDttYXJnaW4tdG9wOjFweDtwb3NpdGlvbjphYnNvbHV0ZVwiO2NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO2pRdWVyeS5leHRlbmQoc3VwcG9ydCx7cGl4ZWxQb3NpdGlvbjpmdW5jdGlvbiBwaXhlbFBvc2l0aW9uKCl7Y29tcHV0ZVN0eWxlVGVzdHMoKTtyZXR1cm4gcGl4ZWxQb3NpdGlvblZhbDt9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uIGJveFNpemluZ1JlbGlhYmxlKCl7Y29tcHV0ZVN0eWxlVGVzdHMoKTtyZXR1cm4gYm94U2l6aW5nUmVsaWFibGVWYWw7fSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uIHBpeGVsTWFyZ2luUmlnaHQoKXtjb21wdXRlU3R5bGVUZXN0cygpO3JldHVybiBwaXhlbE1hcmdpblJpZ2h0VmFsO30scmVsaWFibGVNYXJnaW5MZWZ0OmZ1bmN0aW9uIHJlbGlhYmxlTWFyZ2luTGVmdCgpe2NvbXB1dGVTdHlsZVRlc3RzKCk7cmV0dXJuIHJlbGlhYmxlTWFyZ2luTGVmdFZhbDt9fSk7fSkoKTtmdW5jdGlvbiBjdXJDU1MoZWxlbSxuYW1lLGNvbXB1dGVkKXt2YXIgd2lkdGgsbWluV2lkdGgsbWF4V2lkdGgscmV0LHN0eWxlPWVsZW0uc3R5bGU7Y29tcHV0ZWQ9Y29tcHV0ZWR8fGdldFN0eWxlcyhlbGVtKTsvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuLy8gZ2V0UHJvcGVydHlWYWx1ZSBpcyBvbmx5IG5lZWRlZCBmb3IgLmNzcygnZmlsdGVyJykgKCMxMjUzNylcbmlmKGNvbXB1dGVkKXtyZXQ9Y29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKXx8Y29tcHV0ZWRbbmFtZV07aWYocmV0PT09XCJcIiYmIWpRdWVyeS5jb250YWlucyhlbGVtLm93bmVyRG9jdW1lbnQsZWxlbSkpe3JldD1qUXVlcnkuc3R5bGUoZWxlbSxuYW1lKTt9Ly8gQSB0cmlidXRlIHRvIHRoZSBcImF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcIlxuLy8gQW5kcm9pZCBCcm93c2VyIHJldHVybnMgcGVyY2VudGFnZSBmb3Igc29tZSB2YWx1ZXMsXG4vLyBidXQgd2lkdGggc2VlbXMgdG8gYmUgcmVsaWFibHkgcGl4ZWxzLlxuLy8gVGhpcyBpcyBhZ2FpbnN0IHRoZSBDU1NPTSBkcmFmdCBzcGVjOlxuLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNyZXNvbHZlZC12YWx1ZXNcbmlmKCFzdXBwb3J0LnBpeGVsTWFyZ2luUmlnaHQoKSYmcm51bW5vbnB4LnRlc3QocmV0KSYmcm1hcmdpbi50ZXN0KG5hbWUpKXsvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG53aWR0aD1zdHlsZS53aWR0aDttaW5XaWR0aD1zdHlsZS5taW5XaWR0aDttYXhXaWR0aD1zdHlsZS5tYXhXaWR0aDsvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG5zdHlsZS5taW5XaWR0aD1zdHlsZS5tYXhXaWR0aD1zdHlsZS53aWR0aD1yZXQ7cmV0PWNvbXB1dGVkLndpZHRoOy8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcbnN0eWxlLndpZHRoPXdpZHRoO3N0eWxlLm1pbldpZHRoPW1pbldpZHRoO3N0eWxlLm1heFdpZHRoPW1heFdpZHRoO319cmV0dXJuIHJldCE9PXVuZGVmaW5lZD8vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG4vLyBJRSByZXR1cm5zIHpJbmRleCB2YWx1ZSBhcyBhbiBpbnRlZ2VyLlxucmV0K1wiXCI6cmV0O31mdW5jdGlvbiBhZGRHZXRIb29rSWYoY29uZGl0aW9uRm4saG9va0ZuKXsvLyBEZWZpbmUgdGhlIGhvb2ssIHdlJ2xsIGNoZWNrIG9uIHRoZSBmaXJzdCBydW4gaWYgaXQncyByZWFsbHkgbmVlZGVkLlxucmV0dXJue2dldDpmdW5jdGlvbiBnZXQoKXtpZihjb25kaXRpb25GbigpKXsvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcbi8vIHRvIG1pc3NpbmcgZGVwZW5kZW5jeSksIHJlbW92ZSBpdC5cbmRlbGV0ZSB0aGlzLmdldDtyZXR1cm47fS8vIEhvb2sgbmVlZGVkOyByZWRlZmluZSBpdCBzbyB0aGF0IHRoZSBzdXBwb3J0IHRlc3QgaXMgbm90IGV4ZWN1dGVkIGFnYWluLlxucmV0dXJuKHRoaXMuZ2V0PWhvb2tGbikuYXBwbHkodGhpcyxhcmd1bWVudHMpO319O312YXIvLyBTd2FwcGFibGUgaWYgZGlzcGxheSBpcyBub25lIG9yIHN0YXJ0cyB3aXRoIHRhYmxlXG4vLyBleGNlcHQgXCJ0YWJsZVwiLCBcInRhYmxlLWNlbGxcIiwgb3IgXCJ0YWJsZS1jYXB0aW9uXCJcbi8vIFNlZSBoZXJlIGZvciBkaXNwbGF5IHZhbHVlczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9DU1MvZGlzcGxheVxucmRpc3BsYXlzd2FwPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxjc3NTaG93PXtwb3NpdGlvbjpcImFic29sdXRlXCIsdmlzaWJpbGl0eTpcImhpZGRlblwiLGRpc3BsYXk6XCJibG9ja1wifSxjc3NOb3JtYWxUcmFuc2Zvcm09e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxjc3NQcmVmaXhlcz1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0sZW1wdHlTdHlsZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlOy8vIFJldHVybiBhIGNzcyBwcm9wZXJ0eSBtYXBwZWQgdG8gYSBwb3RlbnRpYWxseSB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcbmZ1bmN0aW9uIHZlbmRvclByb3BOYW1lKG5hbWUpey8vIFNob3J0Y3V0IGZvciBuYW1lcyB0aGF0IGFyZSBub3QgdmVuZG9yIHByZWZpeGVkXG5pZihuYW1lIGluIGVtcHR5U3R5bGUpe3JldHVybiBuYW1lO30vLyBDaGVjayBmb3IgdmVuZG9yIHByZWZpeGVkIG5hbWVzXG52YXIgY2FwTmFtZT1uYW1lWzBdLnRvVXBwZXJDYXNlKCkrbmFtZS5zbGljZSgxKSxpPWNzc1ByZWZpeGVzLmxlbmd0aDt3aGlsZShpLS0pe25hbWU9Y3NzUHJlZml4ZXNbaV0rY2FwTmFtZTtpZihuYW1lIGluIGVtcHR5U3R5bGUpe3JldHVybiBuYW1lO319fWZ1bmN0aW9uIHNldFBvc2l0aXZlTnVtYmVyKGVsZW0sdmFsdWUsc3VidHJhY3Qpey8vIEFueSByZWxhdGl2ZSAoKy8tKSB2YWx1ZXMgaGF2ZSBhbHJlYWR5IGJlZW5cbi8vIG5vcm1hbGl6ZWQgYXQgdGhpcyBwb2ludFxudmFyIG1hdGNoZXM9cmNzc051bS5leGVjKHZhbHVlKTtyZXR1cm4gbWF0Y2hlcz8vLyBHdWFyZCBhZ2FpbnN0IHVuZGVmaW5lZCBcInN1YnRyYWN0XCIsIGUuZy4sIHdoZW4gdXNlZCBhcyBpbiBjc3NIb29rc1xuTWF0aC5tYXgoMCxtYXRjaGVzWzJdLShzdWJ0cmFjdHx8MCkpKyhtYXRjaGVzWzNdfHxcInB4XCIpOnZhbHVlO31mdW5jdGlvbiBhdWdtZW50V2lkdGhPckhlaWdodChlbGVtLG5hbWUsZXh0cmEsaXNCb3JkZXJCb3gsc3R5bGVzKXt2YXIgaSx2YWw9MDsvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIHJpZ2h0IG1lYXN1cmVtZW50LCBhdm9pZCBhdWdtZW50YXRpb25cbmlmKGV4dHJhPT09KGlzQm9yZGVyQm94P1wiYm9yZGVyXCI6XCJjb250ZW50XCIpKXtpPTQ7Ly8gT3RoZXJ3aXNlIGluaXRpYWxpemUgZm9yIGhvcml6b250YWwgb3IgdmVydGljYWwgcHJvcGVydGllc1xufWVsc2V7aT1uYW1lPT09XCJ3aWR0aFwiPzE6MDt9Zm9yKDtpPDQ7aSs9Mil7Ly8gQm90aCBib3ggbW9kZWxzIGV4Y2x1ZGUgbWFyZ2luLCBzbyBhZGQgaXQgaWYgd2Ugd2FudCBpdFxuaWYoZXh0cmE9PT1cIm1hcmdpblwiKXt2YWwrPWpRdWVyeS5jc3MoZWxlbSxleHRyYStjc3NFeHBhbmRbaV0sdHJ1ZSxzdHlsZXMpO31pZihpc0JvcmRlckJveCl7Ly8gYm9yZGVyLWJveCBpbmNsdWRlcyBwYWRkaW5nLCBzbyByZW1vdmUgaXQgaWYgd2Ugd2FudCBjb250ZW50XG5pZihleHRyYT09PVwiY29udGVudFwiKXt2YWwtPWpRdWVyeS5jc3MoZWxlbSxcInBhZGRpbmdcIitjc3NFeHBhbmRbaV0sdHJ1ZSxzdHlsZXMpO30vLyBBdCB0aGlzIHBvaW50LCBleHRyYSBpc24ndCBib3JkZXIgbm9yIG1hcmdpbiwgc28gcmVtb3ZlIGJvcmRlclxuaWYoZXh0cmEhPT1cIm1hcmdpblwiKXt2YWwtPWpRdWVyeS5jc3MoZWxlbSxcImJvcmRlclwiK2Nzc0V4cGFuZFtpXStcIldpZHRoXCIsdHJ1ZSxzdHlsZXMpO319ZWxzZXsvLyBBdCB0aGlzIHBvaW50LCBleHRyYSBpc24ndCBjb250ZW50LCBzbyBhZGQgcGFkZGluZ1xudmFsKz1qUXVlcnkuY3NzKGVsZW0sXCJwYWRkaW5nXCIrY3NzRXhwYW5kW2ldLHRydWUsc3R5bGVzKTsvLyBBdCB0aGlzIHBvaW50LCBleHRyYSBpc24ndCBjb250ZW50IG5vciBwYWRkaW5nLCBzbyBhZGQgYm9yZGVyXG5pZihleHRyYSE9PVwicGFkZGluZ1wiKXt2YWwrPWpRdWVyeS5jc3MoZWxlbSxcImJvcmRlclwiK2Nzc0V4cGFuZFtpXStcIldpZHRoXCIsdHJ1ZSxzdHlsZXMpO319fXJldHVybiB2YWw7fWZ1bmN0aW9uIGdldFdpZHRoT3JIZWlnaHQoZWxlbSxuYW1lLGV4dHJhKXsvLyBTdGFydCB3aXRoIG9mZnNldCBwcm9wZXJ0eSwgd2hpY2ggaXMgZXF1aXZhbGVudCB0byB0aGUgYm9yZGVyLWJveCB2YWx1ZVxudmFyIHZhbCx2YWx1ZUlzQm9yZGVyQm94PXRydWUsc3R5bGVzPWdldFN0eWxlcyhlbGVtKSxpc0JvcmRlckJveD1qUXVlcnkuY3NzKGVsZW0sXCJib3hTaXppbmdcIixmYWxzZSxzdHlsZXMpPT09XCJib3JkZXItYm94XCI7Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4vLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlXG4vLyBpbiBJRSB0aHJvd3MgYW4gZXJyb3IuXG5pZihlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKXt2YWw9ZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtuYW1lXTt9Ly8gU29tZSBub24taHRtbCBlbGVtZW50cyByZXR1cm4gdW5kZWZpbmVkIGZvciBvZmZzZXRXaWR0aCwgc28gY2hlY2sgZm9yIG51bGwvdW5kZWZpbmVkXG4vLyBzdmcgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02NDkyODVcbi8vIE1hdGhNTCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ5MTY2OFxuaWYodmFsPD0wfHx2YWw9PW51bGwpey8vIEZhbGwgYmFjayB0byBjb21wdXRlZCB0aGVuIHVuY29tcHV0ZWQgY3NzIGlmIG5lY2Vzc2FyeVxudmFsPWN1ckNTUyhlbGVtLG5hbWUsc3R5bGVzKTtpZih2YWw8MHx8dmFsPT1udWxsKXt2YWw9ZWxlbS5zdHlsZVtuYW1lXTt9Ly8gQ29tcHV0ZWQgdW5pdCBpcyBub3QgcGl4ZWxzLiBTdG9wIGhlcmUgYW5kIHJldHVybi5cbmlmKHJudW1ub25weC50ZXN0KHZhbCkpe3JldHVybiB2YWw7fS8vIENoZWNrIGZvciBzdHlsZSBpbiBjYXNlIGEgYnJvd3NlciB3aGljaCByZXR1cm5zIHVucmVsaWFibGUgdmFsdWVzXG4vLyBmb3IgZ2V0Q29tcHV0ZWRTdHlsZSBzaWxlbnRseSBmYWxscyBiYWNrIHRvIHRoZSByZWxpYWJsZSBlbGVtLnN0eWxlXG52YWx1ZUlzQm9yZGVyQm94PWlzQm9yZGVyQm94JiYoc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpfHx2YWw9PT1lbGVtLnN0eWxlW25hbWVdKTsvLyBOb3JtYWxpemUgXCJcIiwgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXG52YWw9cGFyc2VGbG9hdCh2YWwpfHwwO30vLyBVc2UgdGhlIGFjdGl2ZSBib3gtc2l6aW5nIG1vZGVsIHRvIGFkZC9zdWJ0cmFjdCBpcnJlbGV2YW50IHN0eWxlc1xucmV0dXJuIHZhbCthdWdtZW50V2lkdGhPckhlaWdodChlbGVtLG5hbWUsZXh0cmF8fChpc0JvcmRlckJveD9cImJvcmRlclwiOlwiY29udGVudFwiKSx2YWx1ZUlzQm9yZGVyQm94LHN0eWxlcykrXCJweFwiO31qUXVlcnkuZXh0ZW5kKHsvLyBBZGQgaW4gc3R5bGUgcHJvcGVydHkgaG9va3MgZm9yIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHRcbi8vIGJlaGF2aW9yIG9mIGdldHRpbmcgYW5kIHNldHRpbmcgYSBzdHlsZSBwcm9wZXJ0eVxuY3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbiBnZXQoZWxlbSxjb21wdXRlZCl7aWYoY29tcHV0ZWQpey8vIFdlIHNob3VsZCBhbHdheXMgZ2V0IGEgbnVtYmVyIGJhY2sgZnJvbSBvcGFjaXR5XG52YXIgcmV0PWN1ckNTUyhlbGVtLFwib3BhY2l0eVwiKTtyZXR1cm4gcmV0PT09XCJcIj9cIjFcIjpyZXQ7fX19fSwvLyBEb24ndCBhdXRvbWF0aWNhbGx5IGFkZCBcInB4XCIgdG8gdGhlc2UgcG9zc2libHktdW5pdGxlc3MgcHJvcGVydGllc1xuY3NzTnVtYmVyOntcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6dHJ1ZSxcImNvbHVtbkNvdW50XCI6dHJ1ZSxcImZpbGxPcGFjaXR5XCI6dHJ1ZSxcImZsZXhHcm93XCI6dHJ1ZSxcImZsZXhTaHJpbmtcIjp0cnVlLFwiZm9udFdlaWdodFwiOnRydWUsXCJsaW5lSGVpZ2h0XCI6dHJ1ZSxcIm9wYWNpdHlcIjp0cnVlLFwib3JkZXJcIjp0cnVlLFwib3JwaGFuc1wiOnRydWUsXCJ3aWRvd3NcIjp0cnVlLFwiekluZGV4XCI6dHJ1ZSxcInpvb21cIjp0cnVlfSwvLyBBZGQgaW4gcHJvcGVydGllcyB3aG9zZSBuYW1lcyB5b3Ugd2lzaCB0byBmaXggYmVmb3JlXG4vLyBzZXR0aW5nIG9yIGdldHRpbmcgdGhlIHZhbHVlXG5jc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sLy8gR2V0IGFuZCBzZXQgdGhlIHN0eWxlIHByb3BlcnR5IG9uIGEgRE9NIE5vZGVcbnN0eWxlOmZ1bmN0aW9uIHN0eWxlKGVsZW0sbmFtZSx2YWx1ZSxleHRyYSl7Ly8gRG9uJ3Qgc2V0IHN0eWxlcyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5pZighZWxlbXx8ZWxlbS5ub2RlVHlwZT09PTN8fGVsZW0ubm9kZVR5cGU9PT04fHwhZWxlbS5zdHlsZSl7cmV0dXJuO30vLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcbnZhciByZXQsdHlwZSxob29rcyxvcmlnTmFtZT1qUXVlcnkuY2FtZWxDYXNlKG5hbWUpLHN0eWxlPWVsZW0uc3R5bGU7bmFtZT1qUXVlcnkuY3NzUHJvcHNbb3JpZ05hbWVdfHwoalF1ZXJ5LmNzc1Byb3BzW29yaWdOYW1lXT12ZW5kb3JQcm9wTmFtZShvcmlnTmFtZSl8fG9yaWdOYW1lKTsvLyBHZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLCB0aGVuIHVucHJlZml4ZWQgdmVyc2lvblxuaG9va3M9alF1ZXJ5LmNzc0hvb2tzW25hbWVdfHxqUXVlcnkuY3NzSG9va3Nbb3JpZ05hbWVdOy8vIENoZWNrIGlmIHdlJ3JlIHNldHRpbmcgYSB2YWx1ZVxuaWYodmFsdWUhPT11bmRlZmluZWQpe3R5cGU9dHlwZW9mIHZhbHVlPT09XCJ1bmRlZmluZWRcIj9cInVuZGVmaW5lZFwiOl90eXBlb2YodmFsdWUpOy8vIENvbnZlcnQgXCIrPVwiIG9yIFwiLT1cIiB0byByZWxhdGl2ZSBudW1iZXJzICgjNzM0NSlcbmlmKHR5cGU9PT1cInN0cmluZ1wiJiYocmV0PXJjc3NOdW0uZXhlYyh2YWx1ZSkpJiZyZXRbMV0pe3ZhbHVlPWFkanVzdENTUyhlbGVtLG5hbWUscmV0KTsvLyBGaXhlcyBidWcgIzkyMzdcbnR5cGU9XCJudW1iZXJcIjt9Ly8gTWFrZSBzdXJlIHRoYXQgbnVsbCBhbmQgTmFOIHZhbHVlcyBhcmVuJ3Qgc2V0ICgjNzExNilcbmlmKHZhbHVlPT1udWxsfHx2YWx1ZSE9PXZhbHVlKXtyZXR1cm47fS8vIElmIGEgbnVtYmVyIHdhcyBwYXNzZWQgaW4sIGFkZCB0aGUgdW5pdCAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxuaWYodHlwZT09PVwibnVtYmVyXCIpe3ZhbHVlKz1yZXQmJnJldFszXXx8KGpRdWVyeS5jc3NOdW1iZXJbb3JpZ05hbWVdP1wiXCI6XCJweFwiKTt9Ly8gYmFja2dyb3VuZC0qIHByb3BzIGFmZmVjdCBvcmlnaW5hbCBjbG9uZSdzIHZhbHVlc1xuaWYoIXN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlJiZ2YWx1ZT09PVwiXCImJm5hbWUuaW5kZXhPZihcImJhY2tncm91bmRcIik9PT0wKXtzdHlsZVtuYW1lXT1cImluaGVyaXRcIjt9Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCwgdXNlIHRoYXQgdmFsdWUsIG90aGVyd2lzZSBqdXN0IHNldCB0aGUgc3BlY2lmaWVkIHZhbHVlXG5pZighaG9va3N8fCEoXCJzZXRcImluIGhvb2tzKXx8KHZhbHVlPWhvb2tzLnNldChlbGVtLHZhbHVlLGV4dHJhKSkhPT11bmRlZmluZWQpe3N0eWxlW25hbWVdPXZhbHVlO319ZWxzZXsvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgbm9uLWNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcbmlmKGhvb2tzJiZcImdldFwiaW4gaG9va3MmJihyZXQ9aG9va3MuZ2V0KGVsZW0sZmFsc2UsZXh0cmEpKSE9PXVuZGVmaW5lZCl7cmV0dXJuIHJldDt9Ly8gT3RoZXJ3aXNlIGp1c3QgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBvYmplY3RcbnJldHVybiBzdHlsZVtuYW1lXTt9fSxjc3M6ZnVuY3Rpb24gY3NzKGVsZW0sbmFtZSxleHRyYSxzdHlsZXMpe3ZhciB2YWwsbnVtLGhvb2tzLG9yaWdOYW1lPWpRdWVyeS5jYW1lbENhc2UobmFtZSk7Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lXG5uYW1lPWpRdWVyeS5jc3NQcm9wc1tvcmlnTmFtZV18fChqUXVlcnkuY3NzUHJvcHNbb3JpZ05hbWVdPXZlbmRvclByb3BOYW1lKG9yaWdOYW1lKXx8b3JpZ05hbWUpOy8vIFRyeSBwcmVmaXhlZCBuYW1lIGZvbGxvd2VkIGJ5IHRoZSB1bnByZWZpeGVkIG5hbWVcbmhvb2tzPWpRdWVyeS5jc3NIb29rc1tuYW1lXXx8alF1ZXJ5LmNzc0hvb2tzW29yaWdOYW1lXTsvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuaWYoaG9va3MmJlwiZ2V0XCJpbiBob29rcyl7dmFsPWhvb2tzLmdldChlbGVtLHRydWUsZXh0cmEpO30vLyBPdGhlcndpc2UsIGlmIGEgd2F5IHRvIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZXhpc3RzLCB1c2UgdGhhdFxuaWYodmFsPT09dW5kZWZpbmVkKXt2YWw9Y3VyQ1NTKGVsZW0sbmFtZSxzdHlsZXMpO30vLyBDb252ZXJ0IFwibm9ybWFsXCIgdG8gY29tcHV0ZWQgdmFsdWVcbmlmKHZhbD09PVwibm9ybWFsXCImJm5hbWUgaW4gY3NzTm9ybWFsVHJhbnNmb3JtKXt2YWw9Y3NzTm9ybWFsVHJhbnNmb3JtW25hbWVdO30vLyBNYWtlIG51bWVyaWMgaWYgZm9yY2VkIG9yIGEgcXVhbGlmaWVyIHdhcyBwcm92aWRlZCBhbmQgdmFsIGxvb2tzIG51bWVyaWNcbmlmKGV4dHJhPT09XCJcInx8ZXh0cmEpe251bT1wYXJzZUZsb2F0KHZhbCk7cmV0dXJuIGV4dHJhPT09dHJ1ZXx8aXNGaW5pdGUobnVtKT9udW18fDA6dmFsO31yZXR1cm4gdmFsO319KTtqUXVlcnkuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLGZ1bmN0aW9uKGksbmFtZSl7alF1ZXJ5LmNzc0hvb2tzW25hbWVdPXtnZXQ6ZnVuY3Rpb24gZ2V0KGVsZW0sY29tcHV0ZWQsZXh0cmEpe2lmKGNvbXB1dGVkKXsvLyBDZXJ0YWluIGVsZW1lbnRzIGNhbiBoYXZlIGRpbWVuc2lvbiBpbmZvIGlmIHdlIGludmlzaWJseSBzaG93IHRoZW1cbi8vIGJ1dCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0XG5yZXR1cm4gcmRpc3BsYXlzd2FwLnRlc3QoalF1ZXJ5LmNzcyhlbGVtLFwiZGlzcGxheVwiKSkmJigvLyBTdXBwb3J0OiBTYWZhcmkgOCtcbi8vIFRhYmxlIGNvbHVtbnMgaW4gU2FmYXJpIGhhdmUgbm9uLXplcm8gb2Zmc2V0V2lkdGggJiB6ZXJvXG4vLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB1bmxlc3MgZGlzcGxheSBpcyBjaGFuZ2VkLlxuLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4vLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlXG4vLyBpbiBJRSB0aHJvd3MgYW4gZXJyb3IuXG4hZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aHx8IWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpP3N3YXAoZWxlbSxjc3NTaG93LGZ1bmN0aW9uKCl7cmV0dXJuIGdldFdpZHRoT3JIZWlnaHQoZWxlbSxuYW1lLGV4dHJhKTt9KTpnZXRXaWR0aE9ySGVpZ2h0KGVsZW0sbmFtZSxleHRyYSk7fX0sc2V0OmZ1bmN0aW9uIHNldChlbGVtLHZhbHVlLGV4dHJhKXt2YXIgbWF0Y2hlcyxzdHlsZXM9ZXh0cmEmJmdldFN0eWxlcyhlbGVtKSxzdWJ0cmFjdD1leHRyYSYmYXVnbWVudFdpZHRoT3JIZWlnaHQoZWxlbSxuYW1lLGV4dHJhLGpRdWVyeS5jc3MoZWxlbSxcImJveFNpemluZ1wiLGZhbHNlLHN0eWxlcyk9PT1cImJvcmRlci1ib3hcIixzdHlsZXMpOy8vIENvbnZlcnQgdG8gcGl4ZWxzIGlmIHZhbHVlIGFkanVzdG1lbnQgaXMgbmVlZGVkXG5pZihzdWJ0cmFjdCYmKG1hdGNoZXM9cmNzc051bS5leGVjKHZhbHVlKSkmJihtYXRjaGVzWzNdfHxcInB4XCIpIT09XCJweFwiKXtlbGVtLnN0eWxlW25hbWVdPXZhbHVlO3ZhbHVlPWpRdWVyeS5jc3MoZWxlbSxuYW1lKTt9cmV0dXJuIHNldFBvc2l0aXZlTnVtYmVyKGVsZW0sdmFsdWUsc3VidHJhY3QpO319O30pO2pRdWVyeS5jc3NIb29rcy5tYXJnaW5MZWZ0PWFkZEdldEhvb2tJZihzdXBwb3J0LnJlbGlhYmxlTWFyZ2luTGVmdCxmdW5jdGlvbihlbGVtLGNvbXB1dGVkKXtpZihjb21wdXRlZCl7cmV0dXJuKHBhcnNlRmxvYXQoY3VyQ1NTKGVsZW0sXCJtYXJnaW5MZWZ0XCIpKXx8ZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LXN3YXAoZWxlbSx7bWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7fSkpK1wicHhcIjt9fSk7Ly8gVGhlc2UgaG9va3MgYXJlIHVzZWQgYnkgYW5pbWF0ZSB0byBleHBhbmQgcHJvcGVydGllc1xualF1ZXJ5LmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihwcmVmaXgsc3VmZml4KXtqUXVlcnkuY3NzSG9va3NbcHJlZml4K3N1ZmZpeF09e2V4cGFuZDpmdW5jdGlvbiBleHBhbmQodmFsdWUpe3ZhciBpPTAsZXhwYW5kZWQ9e30sLy8gQXNzdW1lcyBhIHNpbmdsZSBudW1iZXIgaWYgbm90IGEgc3RyaW5nXG5wYXJ0cz10eXBlb2YgdmFsdWU9PT1cInN0cmluZ1wiP3ZhbHVlLnNwbGl0KFwiIFwiKTpbdmFsdWVdO2Zvcig7aTw0O2krKyl7ZXhwYW5kZWRbcHJlZml4K2Nzc0V4cGFuZFtpXStzdWZmaXhdPXBhcnRzW2ldfHxwYXJ0c1tpLTJdfHxwYXJ0c1swXTt9cmV0dXJuIGV4cGFuZGVkO319O2lmKCFybWFyZ2luLnRlc3QocHJlZml4KSl7alF1ZXJ5LmNzc0hvb2tzW3ByZWZpeCtzdWZmaXhdLnNldD1zZXRQb3NpdGl2ZU51bWJlcjt9fSk7alF1ZXJ5LmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uIGNzcyhuYW1lLHZhbHVlKXtyZXR1cm4gYWNjZXNzKHRoaXMsZnVuY3Rpb24oZWxlbSxuYW1lLHZhbHVlKXt2YXIgc3R5bGVzLGxlbixtYXA9e30saT0wO2lmKGpRdWVyeS5pc0FycmF5KG5hbWUpKXtzdHlsZXM9Z2V0U3R5bGVzKGVsZW0pO2xlbj1uYW1lLmxlbmd0aDtmb3IoO2k8bGVuO2krKyl7bWFwW25hbWVbaV1dPWpRdWVyeS5jc3MoZWxlbSxuYW1lW2ldLGZhbHNlLHN0eWxlcyk7fXJldHVybiBtYXA7fXJldHVybiB2YWx1ZSE9PXVuZGVmaW5lZD9qUXVlcnkuc3R5bGUoZWxlbSxuYW1lLHZhbHVlKTpqUXVlcnkuY3NzKGVsZW0sbmFtZSk7fSxuYW1lLHZhbHVlLGFyZ3VtZW50cy5sZW5ndGg+MSk7fX0pO2Z1bmN0aW9uIFR3ZWVuKGVsZW0sb3B0aW9ucyxwcm9wLGVuZCxlYXNpbmcpe3JldHVybiBuZXcgVHdlZW4ucHJvdG90eXBlLmluaXQoZWxlbSxvcHRpb25zLHByb3AsZW5kLGVhc2luZyk7fWpRdWVyeS5Ud2Vlbj1Ud2VlbjtUd2Vlbi5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOlR3ZWVuLGluaXQ6ZnVuY3Rpb24gaW5pdChlbGVtLG9wdGlvbnMscHJvcCxlbmQsZWFzaW5nLHVuaXQpe3RoaXMuZWxlbT1lbGVtO3RoaXMucHJvcD1wcm9wO3RoaXMuZWFzaW5nPWVhc2luZ3x8alF1ZXJ5LmVhc2luZy5fZGVmYXVsdDt0aGlzLm9wdGlvbnM9b3B0aW9uczt0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCk7dGhpcy5lbmQ9ZW5kO3RoaXMudW5pdD11bml0fHwoalF1ZXJ5LmNzc051bWJlcltwcm9wXT9cIlwiOlwicHhcIik7fSxjdXI6ZnVuY3Rpb24gY3VyKCl7dmFyIGhvb2tzPVR3ZWVuLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBob29rcyYmaG9va3MuZ2V0P2hvb2tzLmdldCh0aGlzKTpUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpO30scnVuOmZ1bmN0aW9uIHJ1bihwZXJjZW50KXt2YXIgZWFzZWQsaG9va3M9VHdlZW4ucHJvcEhvb2tzW3RoaXMucHJvcF07aWYodGhpcy5vcHRpb25zLmR1cmF0aW9uKXt0aGlzLnBvcz1lYXNlZD1qUXVlcnkuZWFzaW5nW3RoaXMuZWFzaW5nXShwZXJjZW50LHRoaXMub3B0aW9ucy5kdXJhdGlvbipwZXJjZW50LDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pO31lbHNle3RoaXMucG9zPWVhc2VkPXBlcmNlbnQ7fXRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSplYXNlZCt0aGlzLnN0YXJ0O2lmKHRoaXMub3B0aW9ucy5zdGVwKXt0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKTt9aWYoaG9va3MmJmhvb2tzLnNldCl7aG9va3Muc2V0KHRoaXMpO31lbHNle1R3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyk7fXJldHVybiB0aGlzO319O1R3ZWVuLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1Ud2Vlbi5wcm90b3R5cGU7VHdlZW4ucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uIGdldCh0d2Vlbil7dmFyIHJlc3VsdDsvLyBVc2UgYSBwcm9wZXJ0eSBvbiB0aGUgZWxlbWVudCBkaXJlY3RseSB3aGVuIGl0IGlzIG5vdCBhIERPTSBlbGVtZW50LFxuLy8gb3Igd2hlbiB0aGVyZSBpcyBubyBtYXRjaGluZyBzdHlsZSBwcm9wZXJ0eSB0aGF0IGV4aXN0cy5cbmlmKHR3ZWVuLmVsZW0ubm9kZVR5cGUhPT0xfHx0d2Vlbi5lbGVtW3R3ZWVuLnByb3BdIT1udWxsJiZ0d2Vlbi5lbGVtLnN0eWxlW3R3ZWVuLnByb3BdPT1udWxsKXtyZXR1cm4gdHdlZW4uZWxlbVt0d2Vlbi5wcm9wXTt9Ly8gUGFzc2luZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSAzcmQgcGFyYW1ldGVyIHRvIC5jc3Mgd2lsbCBhdXRvbWF0aWNhbGx5XG4vLyBhdHRlbXB0IGEgcGFyc2VGbG9hdCBhbmQgZmFsbGJhY2sgdG8gYSBzdHJpbmcgaWYgdGhlIHBhcnNlIGZhaWxzLlxuLy8gU2ltcGxlIHZhbHVlcyBzdWNoIGFzIFwiMTBweFwiIGFyZSBwYXJzZWQgdG8gRmxvYXQ7XG4vLyBjb21wbGV4IHZhbHVlcyBzdWNoIGFzIFwicm90YXRlKDFyYWQpXCIgYXJlIHJldHVybmVkIGFzLWlzLlxucmVzdWx0PWpRdWVyeS5jc3ModHdlZW4uZWxlbSx0d2Vlbi5wcm9wLFwiXCIpOy8vIEVtcHR5IHN0cmluZ3MsIG51bGwsIHVuZGVmaW5lZCBhbmQgXCJhdXRvXCIgYXJlIGNvbnZlcnRlZCB0byAwLlxucmV0dXJuIXJlc3VsdHx8cmVzdWx0PT09XCJhdXRvXCI/MDpyZXN1bHQ7fSxzZXQ6ZnVuY3Rpb24gc2V0KHR3ZWVuKXsvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cbi8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cbi8vIFVzZSAuc3R5bGUgaWYgYXZhaWxhYmxlIGFuZCB1c2UgcGxhaW4gcHJvcGVydGllcyB3aGVyZSBhdmFpbGFibGUuXG5pZihqUXVlcnkuZnguc3RlcFt0d2Vlbi5wcm9wXSl7alF1ZXJ5LmZ4LnN0ZXBbdHdlZW4ucHJvcF0odHdlZW4pO31lbHNlIGlmKHR3ZWVuLmVsZW0ubm9kZVR5cGU9PT0xJiYodHdlZW4uZWxlbS5zdHlsZVtqUXVlcnkuY3NzUHJvcHNbdHdlZW4ucHJvcF1dIT1udWxsfHxqUXVlcnkuY3NzSG9va3NbdHdlZW4ucHJvcF0pKXtqUXVlcnkuc3R5bGUodHdlZW4uZWxlbSx0d2Vlbi5wcm9wLHR3ZWVuLm5vdyt0d2Vlbi51bml0KTt9ZWxzZXt0d2Vlbi5lbGVtW3R3ZWVuLnByb3BdPXR3ZWVuLm5vdzt9fX19Oy8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBQYW5pYyBiYXNlZCBhcHByb2FjaCB0byBzZXR0aW5nIHRoaW5ncyBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcblR3ZWVuLnByb3BIb29rcy5zY3JvbGxUb3A9VHdlZW4ucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbiBzZXQodHdlZW4pe2lmKHR3ZWVuLmVsZW0ubm9kZVR5cGUmJnR3ZWVuLmVsZW0ucGFyZW50Tm9kZSl7dHdlZW4uZWxlbVt0d2Vlbi5wcm9wXT10d2Vlbi5ub3c7fX19O2pRdWVyeS5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbiBsaW5lYXIocCl7cmV0dXJuIHA7fSxzd2luZzpmdW5jdGlvbiBzd2luZyhwKXtyZXR1cm4gMC41LU1hdGguY29zKHAqTWF0aC5QSSkvMjt9LF9kZWZhdWx0Olwic3dpbmdcIn07alF1ZXJ5LmZ4PVR3ZWVuLnByb3RvdHlwZS5pbml0Oy8vIEJhY2sgY29tcGF0IDwxLjggZXh0ZW5zaW9uIHBvaW50XG5qUXVlcnkuZnguc3RlcD17fTt2YXIgZnhOb3csdGltZXJJZCxyZnh0eXBlcz0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8scnJ1bj0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIHJhZigpe2lmKHRpbWVySWQpe3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKTtqUXVlcnkuZngudGljaygpO319Ly8gQW5pbWF0aW9ucyBjcmVhdGVkIHN5bmNocm9ub3VzbHkgd2lsbCBydW4gc3luY2hyb25vdXNseVxuZnVuY3Rpb24gY3JlYXRlRnhOb3coKXt3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe2Z4Tm93PXVuZGVmaW5lZDt9KTtyZXR1cm4gZnhOb3c9alF1ZXJ5Lm5vdygpO30vLyBHZW5lcmF0ZSBwYXJhbWV0ZXJzIHRvIGNyZWF0ZSBhIHN0YW5kYXJkIGFuaW1hdGlvblxuZnVuY3Rpb24gZ2VuRngodHlwZSxpbmNsdWRlV2lkdGgpe3ZhciB3aGljaCxpPTAsYXR0cnM9e2hlaWdodDp0eXBlfTsvLyBJZiB3ZSBpbmNsdWRlIHdpZHRoLCBzdGVwIHZhbHVlIGlzIDEgdG8gZG8gYWxsIGNzc0V4cGFuZCB2YWx1ZXMsXG4vLyBvdGhlcndpc2Ugc3RlcCB2YWx1ZSBpcyAyIHRvIHNraXAgb3ZlciBMZWZ0IGFuZCBSaWdodFxuaW5jbHVkZVdpZHRoPWluY2x1ZGVXaWR0aD8xOjA7Zm9yKDtpPDQ7aSs9Mi1pbmNsdWRlV2lkdGgpe3doaWNoPWNzc0V4cGFuZFtpXTthdHRyc1tcIm1hcmdpblwiK3doaWNoXT1hdHRyc1tcInBhZGRpbmdcIit3aGljaF09dHlwZTt9aWYoaW5jbHVkZVdpZHRoKXthdHRycy5vcGFjaXR5PWF0dHJzLndpZHRoPXR5cGU7fXJldHVybiBhdHRyczt9ZnVuY3Rpb24gY3JlYXRlVHdlZW4odmFsdWUscHJvcCxhbmltYXRpb24pe3ZhciB0d2Vlbixjb2xsZWN0aW9uPShBbmltYXRpb24udHdlZW5lcnNbcHJvcF18fFtdKS5jb25jYXQoQW5pbWF0aW9uLnR3ZWVuZXJzW1wiKlwiXSksaW5kZXg9MCxsZW5ndGg9Y29sbGVjdGlvbi5sZW5ndGg7Zm9yKDtpbmRleDxsZW5ndGg7aW5kZXgrKyl7aWYodHdlZW49Y29sbGVjdGlvbltpbmRleF0uY2FsbChhbmltYXRpb24scHJvcCx2YWx1ZSkpey8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHByb3BlcnR5XG5yZXR1cm4gdHdlZW47fX19ZnVuY3Rpb24gZGVmYXVsdFByZWZpbHRlcihlbGVtLHByb3BzLG9wdHMpe3ZhciBwcm9wLHZhbHVlLHRvZ2dsZSxob29rcyxvbGRmaXJlLHByb3BUd2VlbixyZXN0b3JlRGlzcGxheSxkaXNwbGF5LGlzQm94PVwid2lkdGhcImluIHByb3BzfHxcImhlaWdodFwiaW4gcHJvcHMsYW5pbT10aGlzLG9yaWc9e30sc3R5bGU9ZWxlbS5zdHlsZSxoaWRkZW49ZWxlbS5ub2RlVHlwZSYmaXNIaWRkZW5XaXRoaW5UcmVlKGVsZW0pLGRhdGFTaG93PWRhdGFQcml2LmdldChlbGVtLFwiZnhzaG93XCIpOy8vIFF1ZXVlLXNraXBwaW5nIGFuaW1hdGlvbnMgaGlqYWNrIHRoZSBmeCBob29rc1xuaWYoIW9wdHMucXVldWUpe2hvb2tzPWpRdWVyeS5fcXVldWVIb29rcyhlbGVtLFwiZnhcIik7aWYoaG9va3MudW5xdWV1ZWQ9PW51bGwpe2hvb2tzLnVucXVldWVkPTA7b2xkZmlyZT1ob29rcy5lbXB0eS5maXJlO2hvb2tzLmVtcHR5LmZpcmU9ZnVuY3Rpb24oKXtpZighaG9va3MudW5xdWV1ZWQpe29sZGZpcmUoKTt9fTt9aG9va3MudW5xdWV1ZWQrKzthbmltLmFsd2F5cyhmdW5jdGlvbigpey8vIEVuc3VyZSB0aGUgY29tcGxldGUgaGFuZGxlciBpcyBjYWxsZWQgYmVmb3JlIHRoaXMgY29tcGxldGVzXG5hbmltLmFsd2F5cyhmdW5jdGlvbigpe2hvb2tzLnVucXVldWVkLS07aWYoIWpRdWVyeS5xdWV1ZShlbGVtLFwiZnhcIikubGVuZ3RoKXtob29rcy5lbXB0eS5maXJlKCk7fX0pO30pO30vLyBEZXRlY3Qgc2hvdy9oaWRlIGFuaW1hdGlvbnNcbmZvcihwcm9wIGluIHByb3BzKXt2YWx1ZT1wcm9wc1twcm9wXTtpZihyZnh0eXBlcy50ZXN0KHZhbHVlKSl7ZGVsZXRlIHByb3BzW3Byb3BdO3RvZ2dsZT10b2dnbGV8fHZhbHVlPT09XCJ0b2dnbGVcIjtpZih2YWx1ZT09PShoaWRkZW4/XCJoaWRlXCI6XCJzaG93XCIpKXsvLyBQcmV0ZW5kIHRvIGJlIGhpZGRlbiBpZiB0aGlzIGlzIGEgXCJzaG93XCIgYW5kXG4vLyB0aGVyZSBpcyBzdGlsbCBkYXRhIGZyb20gYSBzdG9wcGVkIHNob3cvaGlkZVxuaWYodmFsdWU9PT1cInNob3dcIiYmZGF0YVNob3cmJmRhdGFTaG93W3Byb3BdIT09dW5kZWZpbmVkKXtoaWRkZW49dHJ1ZTsvLyBJZ25vcmUgYWxsIG90aGVyIG5vLW9wIHNob3cvaGlkZSBkYXRhXG59ZWxzZXtjb250aW51ZTt9fW9yaWdbcHJvcF09ZGF0YVNob3cmJmRhdGFTaG93W3Byb3BdfHxqUXVlcnkuc3R5bGUoZWxlbSxwcm9wKTt9fS8vIEJhaWwgb3V0IGlmIHRoaXMgaXMgYSBuby1vcCBsaWtlIC5oaWRlKCkuaGlkZSgpXG5wcm9wVHdlZW49IWpRdWVyeS5pc0VtcHR5T2JqZWN0KHByb3BzKTtpZighcHJvcFR3ZWVuJiZqUXVlcnkuaXNFbXB0eU9iamVjdChvcmlnKSl7cmV0dXJuO30vLyBSZXN0cmljdCBcIm92ZXJmbG93XCIgYW5kIFwiZGlzcGxheVwiIHN0eWxlcyBkdXJpbmcgYm94IGFuaW1hdGlvbnNcbmlmKGlzQm94JiZlbGVtLm5vZGVUeXBlPT09MSl7Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEsIEVkZ2UgMTIgLSAxM1xuLy8gUmVjb3JkIGFsbCAzIG92ZXJmbG93IGF0dHJpYnV0ZXMgYmVjYXVzZSBJRSBkb2VzIG5vdCBpbmZlciB0aGUgc2hvcnRoYW5kXG4vLyBmcm9tIGlkZW50aWNhbGx5LXZhbHVlZCBvdmVyZmxvd1ggYW5kIG92ZXJmbG93WVxub3B0cy5vdmVyZmxvdz1bc3R5bGUub3ZlcmZsb3csc3R5bGUub3ZlcmZsb3dYLHN0eWxlLm92ZXJmbG93WV07Ly8gSWRlbnRpZnkgYSBkaXNwbGF5IHR5cGUsIHByZWZlcnJpbmcgb2xkIHNob3cvaGlkZSBkYXRhIG92ZXIgdGhlIENTUyBjYXNjYWRlXG5yZXN0b3JlRGlzcGxheT1kYXRhU2hvdyYmZGF0YVNob3cuZGlzcGxheTtpZihyZXN0b3JlRGlzcGxheT09bnVsbCl7cmVzdG9yZURpc3BsYXk9ZGF0YVByaXYuZ2V0KGVsZW0sXCJkaXNwbGF5XCIpO31kaXNwbGF5PWpRdWVyeS5jc3MoZWxlbSxcImRpc3BsYXlcIik7aWYoZGlzcGxheT09PVwibm9uZVwiKXtpZihyZXN0b3JlRGlzcGxheSl7ZGlzcGxheT1yZXN0b3JlRGlzcGxheTt9ZWxzZXsvLyBHZXQgbm9uZW1wdHkgdmFsdWUocykgYnkgdGVtcG9yYXJpbHkgZm9yY2luZyB2aXNpYmlsaXR5XG5zaG93SGlkZShbZWxlbV0sdHJ1ZSk7cmVzdG9yZURpc3BsYXk9ZWxlbS5zdHlsZS5kaXNwbGF5fHxyZXN0b3JlRGlzcGxheTtkaXNwbGF5PWpRdWVyeS5jc3MoZWxlbSxcImRpc3BsYXlcIik7c2hvd0hpZGUoW2VsZW1dKTt9fS8vIEFuaW1hdGUgaW5saW5lIGVsZW1lbnRzIGFzIGlubGluZS1ibG9ja1xuaWYoZGlzcGxheT09PVwiaW5saW5lXCJ8fGRpc3BsYXk9PT1cImlubGluZS1ibG9ja1wiJiZyZXN0b3JlRGlzcGxheSE9bnVsbCl7aWYoalF1ZXJ5LmNzcyhlbGVtLFwiZmxvYXRcIik9PT1cIm5vbmVcIil7Ly8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgZGlzcGxheSB2YWx1ZSBhdCB0aGUgZW5kIG9mIHB1cmUgc2hvdy9oaWRlIGFuaW1hdGlvbnNcbmlmKCFwcm9wVHdlZW4pe2FuaW0uZG9uZShmdW5jdGlvbigpe3N0eWxlLmRpc3BsYXk9cmVzdG9yZURpc3BsYXk7fSk7aWYocmVzdG9yZURpc3BsYXk9PW51bGwpe2Rpc3BsYXk9c3R5bGUuZGlzcGxheTtyZXN0b3JlRGlzcGxheT1kaXNwbGF5PT09XCJub25lXCI/XCJcIjpkaXNwbGF5O319c3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiO319fWlmKG9wdHMub3ZlcmZsb3cpe3N0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7YW5pbS5hbHdheXMoZnVuY3Rpb24oKXtzdHlsZS5vdmVyZmxvdz1vcHRzLm92ZXJmbG93WzBdO3N0eWxlLm92ZXJmbG93WD1vcHRzLm92ZXJmbG93WzFdO3N0eWxlLm92ZXJmbG93WT1vcHRzLm92ZXJmbG93WzJdO30pO30vLyBJbXBsZW1lbnQgc2hvdy9oaWRlIGFuaW1hdGlvbnNcbnByb3BUd2Vlbj1mYWxzZTtmb3IocHJvcCBpbiBvcmlnKXsvLyBHZW5lcmFsIHNob3cvaGlkZSBzZXR1cCBmb3IgdGhpcyBlbGVtZW50IGFuaW1hdGlvblxuaWYoIXByb3BUd2Vlbil7aWYoZGF0YVNob3cpe2lmKFwiaGlkZGVuXCJpbiBkYXRhU2hvdyl7aGlkZGVuPWRhdGFTaG93LmhpZGRlbjt9fWVsc2V7ZGF0YVNob3c9ZGF0YVByaXYuYWNjZXNzKGVsZW0sXCJmeHNob3dcIix7ZGlzcGxheTpyZXN0b3JlRGlzcGxheX0pO30vLyBTdG9yZSBoaWRkZW4vdmlzaWJsZSBmb3IgdG9nZ2xlIHNvIGAuc3RvcCgpLnRvZ2dsZSgpYCBcInJldmVyc2VzXCJcbmlmKHRvZ2dsZSl7ZGF0YVNob3cuaGlkZGVuPSFoaWRkZW47fS8vIFNob3cgZWxlbWVudHMgYmVmb3JlIGFuaW1hdGluZyB0aGVtXG5pZihoaWRkZW4pe3Nob3dIaWRlKFtlbGVtXSx0cnVlKTt9LyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovYW5pbS5kb25lKGZ1bmN0aW9uKCl7LyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi8vLyBUaGUgZmluYWwgc3RlcCBvZiBhIFwiaGlkZVwiIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBoaWRpbmcgdGhlIGVsZW1lbnRcbmlmKCFoaWRkZW4pe3Nob3dIaWRlKFtlbGVtXSk7fWRhdGFQcml2LnJlbW92ZShlbGVtLFwiZnhzaG93XCIpO2Zvcihwcm9wIGluIG9yaWcpe2pRdWVyeS5zdHlsZShlbGVtLHByb3Asb3JpZ1twcm9wXSk7fX0pO30vLyBQZXItcHJvcGVydHkgc2V0dXBcbnByb3BUd2Vlbj1jcmVhdGVUd2VlbihoaWRkZW4/ZGF0YVNob3dbcHJvcF06MCxwcm9wLGFuaW0pO2lmKCEocHJvcCBpbiBkYXRhU2hvdykpe2RhdGFTaG93W3Byb3BdPXByb3BUd2Vlbi5zdGFydDtpZihoaWRkZW4pe3Byb3BUd2Vlbi5lbmQ9cHJvcFR3ZWVuLnN0YXJ0O3Byb3BUd2Vlbi5zdGFydD0wO319fX1mdW5jdGlvbiBwcm9wRmlsdGVyKHByb3BzLHNwZWNpYWxFYXNpbmcpe3ZhciBpbmRleCxuYW1lLGVhc2luZyx2YWx1ZSxob29rczsvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3NcbmZvcihpbmRleCBpbiBwcm9wcyl7bmFtZT1qUXVlcnkuY2FtZWxDYXNlKGluZGV4KTtlYXNpbmc9c3BlY2lhbEVhc2luZ1tuYW1lXTt2YWx1ZT1wcm9wc1tpbmRleF07aWYoalF1ZXJ5LmlzQXJyYXkodmFsdWUpKXtlYXNpbmc9dmFsdWVbMV07dmFsdWU9cHJvcHNbaW5kZXhdPXZhbHVlWzBdO31pZihpbmRleCE9PW5hbWUpe3Byb3BzW25hbWVdPXZhbHVlO2RlbGV0ZSBwcm9wc1tpbmRleF07fWhvb2tzPWpRdWVyeS5jc3NIb29rc1tuYW1lXTtpZihob29rcyYmXCJleHBhbmRcImluIGhvb2tzKXt2YWx1ZT1ob29rcy5leHBhbmQodmFsdWUpO2RlbGV0ZSBwcm9wc1tuYW1lXTsvLyBOb3QgcXVpdGUgJC5leHRlbmQsIHRoaXMgd29uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGtleXMuXG4vLyBSZXVzaW5nICdpbmRleCcgYmVjYXVzZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IFwibmFtZVwiXG5mb3IoaW5kZXggaW4gdmFsdWUpe2lmKCEoaW5kZXggaW4gcHJvcHMpKXtwcm9wc1tpbmRleF09dmFsdWVbaW5kZXhdO3NwZWNpYWxFYXNpbmdbaW5kZXhdPWVhc2luZzt9fX1lbHNle3NwZWNpYWxFYXNpbmdbbmFtZV09ZWFzaW5nO319fWZ1bmN0aW9uIEFuaW1hdGlvbihlbGVtLHByb3BlcnRpZXMsb3B0aW9ucyl7dmFyIHJlc3VsdCxzdG9wcGVkLGluZGV4PTAsbGVuZ3RoPUFuaW1hdGlvbi5wcmVmaWx0ZXJzLmxlbmd0aCxkZWZlcnJlZD1qUXVlcnkuRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXsvLyBEb24ndCBtYXRjaCBlbGVtIGluIHRoZSA6YW5pbWF0ZWQgc2VsZWN0b3JcbmRlbGV0ZSB0aWNrLmVsZW07fSksdGljaz1mdW5jdGlvbiB0aWNrKCl7aWYoc3RvcHBlZCl7cmV0dXJuIGZhbHNlO312YXIgY3VycmVudFRpbWU9ZnhOb3d8fGNyZWF0ZUZ4Tm93KCkscmVtYWluaW5nPU1hdGgubWF4KDAsYW5pbWF0aW9uLnN0YXJ0VGltZSthbmltYXRpb24uZHVyYXRpb24tY3VycmVudFRpbWUpLC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zIG9ubHlcbi8vIEFyY2hhaWMgY3Jhc2ggYnVnIHdvbid0IGFsbG93IHVzIHRvIHVzZSBgMSAtICggMC41IHx8IDAgKWAgKCMxMjQ5NylcbnRlbXA9cmVtYWluaW5nL2FuaW1hdGlvbi5kdXJhdGlvbnx8MCxwZXJjZW50PTEtdGVtcCxpbmRleD0wLGxlbmd0aD1hbmltYXRpb24udHdlZW5zLmxlbmd0aDtmb3IoO2luZGV4PGxlbmd0aDtpbmRleCsrKXthbmltYXRpb24udHdlZW5zW2luZGV4XS5ydW4ocGVyY2VudCk7fWRlZmVycmVkLm5vdGlmeVdpdGgoZWxlbSxbYW5pbWF0aW9uLHBlcmNlbnQscmVtYWluaW5nXSk7aWYocGVyY2VudDwxJiZsZW5ndGgpe3JldHVybiByZW1haW5pbmc7fWVsc2V7ZGVmZXJyZWQucmVzb2x2ZVdpdGgoZWxlbSxbYW5pbWF0aW9uXSk7cmV0dXJuIGZhbHNlO319LGFuaW1hdGlvbj1kZWZlcnJlZC5wcm9taXNlKHtlbGVtOmVsZW0scHJvcHM6alF1ZXJ5LmV4dGVuZCh7fSxwcm9wZXJ0aWVzKSxvcHRzOmpRdWVyeS5leHRlbmQodHJ1ZSx7c3BlY2lhbEVhc2luZzp7fSxlYXNpbmc6alF1ZXJ5LmVhc2luZy5fZGVmYXVsdH0sb3B0aW9ucyksb3JpZ2luYWxQcm9wZXJ0aWVzOnByb3BlcnRpZXMsb3JpZ2luYWxPcHRpb25zOm9wdGlvbnMsc3RhcnRUaW1lOmZ4Tm93fHxjcmVhdGVGeE5vdygpLGR1cmF0aW9uOm9wdGlvbnMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uIGNyZWF0ZVR3ZWVuKHByb3AsZW5kKXt2YXIgdHdlZW49alF1ZXJ5LlR3ZWVuKGVsZW0sYW5pbWF0aW9uLm9wdHMscHJvcCxlbmQsYW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZ1twcm9wXXx8YW5pbWF0aW9uLm9wdHMuZWFzaW5nKTthbmltYXRpb24udHdlZW5zLnB1c2godHdlZW4pO3JldHVybiB0d2Vlbjt9LHN0b3A6ZnVuY3Rpb24gc3RvcChnb3RvRW5kKXt2YXIgaW5kZXg9MCwvLyBJZiB3ZSBhcmUgZ29pbmcgdG8gdGhlIGVuZCwgd2Ugd2FudCB0byBydW4gYWxsIHRoZSB0d2VlbnNcbi8vIG90aGVyd2lzZSB3ZSBza2lwIHRoaXMgcGFydFxubGVuZ3RoPWdvdG9FbmQ/YW5pbWF0aW9uLnR3ZWVucy5sZW5ndGg6MDtpZihzdG9wcGVkKXtyZXR1cm4gdGhpczt9c3RvcHBlZD10cnVlO2Zvcig7aW5kZXg8bGVuZ3RoO2luZGV4Kyspe2FuaW1hdGlvbi50d2VlbnNbaW5kZXhdLnJ1bigxKTt9Ly8gUmVzb2x2ZSB3aGVuIHdlIHBsYXllZCB0aGUgbGFzdCBmcmFtZTsgb3RoZXJ3aXNlLCByZWplY3RcbmlmKGdvdG9FbmQpe2RlZmVycmVkLm5vdGlmeVdpdGgoZWxlbSxbYW5pbWF0aW9uLDEsMF0pO2RlZmVycmVkLnJlc29sdmVXaXRoKGVsZW0sW2FuaW1hdGlvbixnb3RvRW5kXSk7fWVsc2V7ZGVmZXJyZWQucmVqZWN0V2l0aChlbGVtLFthbmltYXRpb24sZ290b0VuZF0pO31yZXR1cm4gdGhpczt9fSkscHJvcHM9YW5pbWF0aW9uLnByb3BzO3Byb3BGaWx0ZXIocHJvcHMsYW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZyk7Zm9yKDtpbmRleDxsZW5ndGg7aW5kZXgrKyl7cmVzdWx0PUFuaW1hdGlvbi5wcmVmaWx0ZXJzW2luZGV4XS5jYWxsKGFuaW1hdGlvbixlbGVtLHByb3BzLGFuaW1hdGlvbi5vcHRzKTtpZihyZXN1bHQpe2lmKGpRdWVyeS5pc0Z1bmN0aW9uKHJlc3VsdC5zdG9wKSl7alF1ZXJ5Ll9xdWV1ZUhvb2tzKGFuaW1hdGlvbi5lbGVtLGFuaW1hdGlvbi5vcHRzLnF1ZXVlKS5zdG9wPWpRdWVyeS5wcm94eShyZXN1bHQuc3RvcCxyZXN1bHQpO31yZXR1cm4gcmVzdWx0O319alF1ZXJ5Lm1hcChwcm9wcyxjcmVhdGVUd2VlbixhbmltYXRpb24pO2lmKGpRdWVyeS5pc0Z1bmN0aW9uKGFuaW1hdGlvbi5vcHRzLnN0YXJ0KSl7YW5pbWF0aW9uLm9wdHMuc3RhcnQuY2FsbChlbGVtLGFuaW1hdGlvbik7fWpRdWVyeS5meC50aW1lcihqUXVlcnkuZXh0ZW5kKHRpY2sse2VsZW06ZWxlbSxhbmltOmFuaW1hdGlvbixxdWV1ZTphbmltYXRpb24ub3B0cy5xdWV1ZX0pKTsvLyBhdHRhY2ggY2FsbGJhY2tzIGZyb20gb3B0aW9uc1xucmV0dXJuIGFuaW1hdGlvbi5wcm9ncmVzcyhhbmltYXRpb24ub3B0cy5wcm9ncmVzcykuZG9uZShhbmltYXRpb24ub3B0cy5kb25lLGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlKS5mYWlsKGFuaW1hdGlvbi5vcHRzLmZhaWwpLmFsd2F5cyhhbmltYXRpb24ub3B0cy5hbHdheXMpO31qUXVlcnkuQW5pbWF0aW9uPWpRdWVyeS5leHRlbmQoQW5pbWF0aW9uLHt0d2VlbmVyczp7XCIqXCI6W2Z1bmN0aW9uKHByb3AsdmFsdWUpe3ZhciB0d2Vlbj10aGlzLmNyZWF0ZVR3ZWVuKHByb3AsdmFsdWUpO2FkanVzdENTUyh0d2Vlbi5lbGVtLHByb3AscmNzc051bS5leGVjKHZhbHVlKSx0d2Vlbik7cmV0dXJuIHR3ZWVuO31dfSx0d2VlbmVyOmZ1bmN0aW9uIHR3ZWVuZXIocHJvcHMsY2FsbGJhY2spe2lmKGpRdWVyeS5pc0Z1bmN0aW9uKHByb3BzKSl7Y2FsbGJhY2s9cHJvcHM7cHJvcHM9W1wiKlwiXTt9ZWxzZXtwcm9wcz1wcm9wcy5tYXRjaChybm90aHRtbHdoaXRlKTt9dmFyIHByb3AsaW5kZXg9MCxsZW5ndGg9cHJvcHMubGVuZ3RoO2Zvcig7aW5kZXg8bGVuZ3RoO2luZGV4Kyspe3Byb3A9cHJvcHNbaW5kZXhdO0FuaW1hdGlvbi50d2VlbmVyc1twcm9wXT1BbmltYXRpb24udHdlZW5lcnNbcHJvcF18fFtdO0FuaW1hdGlvbi50d2VlbmVyc1twcm9wXS51bnNoaWZ0KGNhbGxiYWNrKTt9fSxwcmVmaWx0ZXJzOltkZWZhdWx0UHJlZmlsdGVyXSxwcmVmaWx0ZXI6ZnVuY3Rpb24gcHJlZmlsdGVyKGNhbGxiYWNrLHByZXBlbmQpe2lmKHByZXBlbmQpe0FuaW1hdGlvbi5wcmVmaWx0ZXJzLnVuc2hpZnQoY2FsbGJhY2spO31lbHNle0FuaW1hdGlvbi5wcmVmaWx0ZXJzLnB1c2goY2FsbGJhY2spO319fSk7alF1ZXJ5LnNwZWVkPWZ1bmN0aW9uKHNwZWVkLGVhc2luZyxmbil7dmFyIG9wdD1zcGVlZCYmKHR5cGVvZiBzcGVlZD09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKHNwZWVkKSk9PT1cIm9iamVjdFwiP2pRdWVyeS5leHRlbmQoe30sc3BlZWQpOntjb21wbGV0ZTpmbnx8IWZuJiZlYXNpbmd8fGpRdWVyeS5pc0Z1bmN0aW9uKHNwZWVkKSYmc3BlZWQsZHVyYXRpb246c3BlZWQsZWFzaW5nOmZuJiZlYXNpbmd8fGVhc2luZyYmIWpRdWVyeS5pc0Z1bmN0aW9uKGVhc2luZykmJmVhc2luZ307Ly8gR28gdG8gdGhlIGVuZCBzdGF0ZSBpZiBmeCBhcmUgb2ZmIG9yIGlmIGRvY3VtZW50IGlzIGhpZGRlblxuaWYoalF1ZXJ5LmZ4Lm9mZnx8ZG9jdW1lbnQuaGlkZGVuKXtvcHQuZHVyYXRpb249MDt9ZWxzZXtpZih0eXBlb2Ygb3B0LmR1cmF0aW9uIT09XCJudW1iZXJcIil7aWYob3B0LmR1cmF0aW9uIGluIGpRdWVyeS5meC5zcGVlZHMpe29wdC5kdXJhdGlvbj1qUXVlcnkuZnguc3BlZWRzW29wdC5kdXJhdGlvbl07fWVsc2V7b3B0LmR1cmF0aW9uPWpRdWVyeS5meC5zcGVlZHMuX2RlZmF1bHQ7fX19Ly8gTm9ybWFsaXplIG9wdC5xdWV1ZSAtIHRydWUvdW5kZWZpbmVkL251bGwgLT4gXCJmeFwiXG5pZihvcHQucXVldWU9PW51bGx8fG9wdC5xdWV1ZT09PXRydWUpe29wdC5xdWV1ZT1cImZ4XCI7fS8vIFF1ZXVlaW5nXG5vcHQub2xkPW9wdC5jb21wbGV0ZTtvcHQuY29tcGxldGU9ZnVuY3Rpb24oKXtpZihqUXVlcnkuaXNGdW5jdGlvbihvcHQub2xkKSl7b3B0Lm9sZC5jYWxsKHRoaXMpO31pZihvcHQucXVldWUpe2pRdWVyeS5kZXF1ZXVlKHRoaXMsb3B0LnF1ZXVlKTt9fTtyZXR1cm4gb3B0O307alF1ZXJ5LmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uIGZhZGVUbyhzcGVlZCx0byxlYXNpbmcsY2FsbGJhY2spey8vIFNob3cgYW55IGhpZGRlbiBlbGVtZW50cyBhZnRlciBzZXR0aW5nIG9wYWNpdHkgdG8gMFxucmV0dXJuIHRoaXMuZmlsdGVyKGlzSGlkZGVuV2l0aGluVHJlZSkuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS8vIEFuaW1hdGUgdG8gdGhlIHZhbHVlIHNwZWNpZmllZFxuLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6dG99LHNwZWVkLGVhc2luZyxjYWxsYmFjayk7fSxhbmltYXRlOmZ1bmN0aW9uIGFuaW1hdGUocHJvcCxzcGVlZCxlYXNpbmcsY2FsbGJhY2spe3ZhciBlbXB0eT1qUXVlcnkuaXNFbXB0eU9iamVjdChwcm9wKSxvcHRhbGw9alF1ZXJ5LnNwZWVkKHNwZWVkLGVhc2luZyxjYWxsYmFjayksZG9BbmltYXRpb249ZnVuY3Rpb24gZG9BbmltYXRpb24oKXsvLyBPcGVyYXRlIG9uIGEgY29weSBvZiBwcm9wIHNvIHBlci1wcm9wZXJ0eSBlYXNpbmcgd29uJ3QgYmUgbG9zdFxudmFyIGFuaW09QW5pbWF0aW9uKHRoaXMsalF1ZXJ5LmV4dGVuZCh7fSxwcm9wKSxvcHRhbGwpOy8vIEVtcHR5IGFuaW1hdGlvbnMsIG9yIGZpbmlzaGluZyByZXNvbHZlcyBpbW1lZGlhdGVseVxuaWYoZW1wdHl8fGRhdGFQcml2LmdldCh0aGlzLFwiZmluaXNoXCIpKXthbmltLnN0b3AodHJ1ZSk7fX07ZG9BbmltYXRpb24uZmluaXNoPWRvQW5pbWF0aW9uO3JldHVybiBlbXB0eXx8b3B0YWxsLnF1ZXVlPT09ZmFsc2U/dGhpcy5lYWNoKGRvQW5pbWF0aW9uKTp0aGlzLnF1ZXVlKG9wdGFsbC5xdWV1ZSxkb0FuaW1hdGlvbik7fSxzdG9wOmZ1bmN0aW9uIHN0b3AodHlwZSxjbGVhclF1ZXVlLGdvdG9FbmQpe3ZhciBzdG9wUXVldWU9ZnVuY3Rpb24gc3RvcFF1ZXVlKGhvb2tzKXt2YXIgc3RvcD1ob29rcy5zdG9wO2RlbGV0ZSBob29rcy5zdG9wO3N0b3AoZ290b0VuZCk7fTtpZih0eXBlb2YgdHlwZSE9PVwic3RyaW5nXCIpe2dvdG9FbmQ9Y2xlYXJRdWV1ZTtjbGVhclF1ZXVlPXR5cGU7dHlwZT11bmRlZmluZWQ7fWlmKGNsZWFyUXVldWUmJnR5cGUhPT1mYWxzZSl7dGhpcy5xdWV1ZSh0eXBlfHxcImZ4XCIsW10pO31yZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGRlcXVldWU9dHJ1ZSxpbmRleD10eXBlIT1udWxsJiZ0eXBlK1wicXVldWVIb29rc1wiLHRpbWVycz1qUXVlcnkudGltZXJzLGRhdGE9ZGF0YVByaXYuZ2V0KHRoaXMpO2lmKGluZGV4KXtpZihkYXRhW2luZGV4XSYmZGF0YVtpbmRleF0uc3RvcCl7c3RvcFF1ZXVlKGRhdGFbaW5kZXhdKTt9fWVsc2V7Zm9yKGluZGV4IGluIGRhdGEpe2lmKGRhdGFbaW5kZXhdJiZkYXRhW2luZGV4XS5zdG9wJiZycnVuLnRlc3QoaW5kZXgpKXtzdG9wUXVldWUoZGF0YVtpbmRleF0pO319fWZvcihpbmRleD10aW1lcnMubGVuZ3RoO2luZGV4LS07KXtpZih0aW1lcnNbaW5kZXhdLmVsZW09PT10aGlzJiYodHlwZT09bnVsbHx8dGltZXJzW2luZGV4XS5xdWV1ZT09PXR5cGUpKXt0aW1lcnNbaW5kZXhdLmFuaW0uc3RvcChnb3RvRW5kKTtkZXF1ZXVlPWZhbHNlO3RpbWVycy5zcGxpY2UoaW5kZXgsMSk7fX0vLyBTdGFydCB0aGUgbmV4dCBpbiB0aGUgcXVldWUgaWYgdGhlIGxhc3Qgc3RlcCB3YXNuJ3QgZm9yY2VkLlxuLy8gVGltZXJzIGN1cnJlbnRseSB3aWxsIGNhbGwgdGhlaXIgY29tcGxldGUgY2FsbGJhY2tzLCB3aGljaFxuLy8gd2lsbCBkZXF1ZXVlIGJ1dCBvbmx5IGlmIHRoZXkgd2VyZSBnb3RvRW5kLlxuaWYoZGVxdWV1ZXx8IWdvdG9FbmQpe2pRdWVyeS5kZXF1ZXVlKHRoaXMsdHlwZSk7fX0pO30sZmluaXNoOmZ1bmN0aW9uIGZpbmlzaCh0eXBlKXtpZih0eXBlIT09ZmFsc2Upe3R5cGU9dHlwZXx8XCJmeFwiO31yZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGluZGV4LGRhdGE9ZGF0YVByaXYuZ2V0KHRoaXMpLHF1ZXVlPWRhdGFbdHlwZStcInF1ZXVlXCJdLGhvb2tzPWRhdGFbdHlwZStcInF1ZXVlSG9va3NcIl0sdGltZXJzPWpRdWVyeS50aW1lcnMsbGVuZ3RoPXF1ZXVlP3F1ZXVlLmxlbmd0aDowOy8vIEVuYWJsZSBmaW5pc2hpbmcgZmxhZyBvbiBwcml2YXRlIGRhdGFcbmRhdGEuZmluaXNoPXRydWU7Ly8gRW1wdHkgdGhlIHF1ZXVlIGZpcnN0XG5qUXVlcnkucXVldWUodGhpcyx0eXBlLFtdKTtpZihob29rcyYmaG9va3Muc3RvcCl7aG9va3Muc3RvcC5jYWxsKHRoaXMsdHJ1ZSk7fS8vIExvb2sgZm9yIGFueSBhY3RpdmUgYW5pbWF0aW9ucywgYW5kIGZpbmlzaCB0aGVtXG5mb3IoaW5kZXg9dGltZXJzLmxlbmd0aDtpbmRleC0tOyl7aWYodGltZXJzW2luZGV4XS5lbGVtPT09dGhpcyYmdGltZXJzW2luZGV4XS5xdWV1ZT09PXR5cGUpe3RpbWVyc1tpbmRleF0uYW5pbS5zdG9wKHRydWUpO3RpbWVycy5zcGxpY2UoaW5kZXgsMSk7fX0vLyBMb29rIGZvciBhbnkgYW5pbWF0aW9ucyBpbiB0aGUgb2xkIHF1ZXVlIGFuZCBmaW5pc2ggdGhlbVxuZm9yKGluZGV4PTA7aW5kZXg8bGVuZ3RoO2luZGV4Kyspe2lmKHF1ZXVlW2luZGV4XSYmcXVldWVbaW5kZXhdLmZpbmlzaCl7cXVldWVbaW5kZXhdLmZpbmlzaC5jYWxsKHRoaXMpO319Ly8gVHVybiBvZmYgZmluaXNoaW5nIGZsYWdcbmRlbGV0ZSBkYXRhLmZpbmlzaDt9KTt9fSk7alF1ZXJ5LmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGksbmFtZSl7dmFyIGNzc0ZuPWpRdWVyeS5mbltuYW1lXTtqUXVlcnkuZm5bbmFtZV09ZnVuY3Rpb24oc3BlZWQsZWFzaW5nLGNhbGxiYWNrKXtyZXR1cm4gc3BlZWQ9PW51bGx8fHR5cGVvZiBzcGVlZD09PVwiYm9vbGVhblwiP2Nzc0ZuLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoZ2VuRngobmFtZSx0cnVlKSxzcGVlZCxlYXNpbmcsY2FsbGJhY2spO307fSk7Ly8gR2VuZXJhdGUgc2hvcnRjdXRzIGZvciBjdXN0b20gYW5pbWF0aW9uc1xualF1ZXJ5LmVhY2goe3NsaWRlRG93bjpnZW5GeChcInNob3dcIiksc2xpZGVVcDpnZW5GeChcImhpZGVcIiksc2xpZGVUb2dnbGU6Z2VuRngoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihuYW1lLHByb3BzKXtqUXVlcnkuZm5bbmFtZV09ZnVuY3Rpb24oc3BlZWQsZWFzaW5nLGNhbGxiYWNrKXtyZXR1cm4gdGhpcy5hbmltYXRlKHByb3BzLHNwZWVkLGVhc2luZyxjYWxsYmFjayk7fTt9KTtqUXVlcnkudGltZXJzPVtdO2pRdWVyeS5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIHRpbWVyLGk9MCx0aW1lcnM9alF1ZXJ5LnRpbWVycztmeE5vdz1qUXVlcnkubm93KCk7Zm9yKDtpPHRpbWVycy5sZW5ndGg7aSsrKXt0aW1lcj10aW1lcnNbaV07Ly8gQ2hlY2tzIHRoZSB0aW1lciBoYXMgbm90IGFscmVhZHkgYmVlbiByZW1vdmVkXG5pZighdGltZXIoKSYmdGltZXJzW2ldPT09dGltZXIpe3RpbWVycy5zcGxpY2UoaS0tLDEpO319aWYoIXRpbWVycy5sZW5ndGgpe2pRdWVyeS5meC5zdG9wKCk7fWZ4Tm93PXVuZGVmaW5lZDt9O2pRdWVyeS5meC50aW1lcj1mdW5jdGlvbih0aW1lcil7alF1ZXJ5LnRpbWVycy5wdXNoKHRpbWVyKTtpZih0aW1lcigpKXtqUXVlcnkuZnguc3RhcnQoKTt9ZWxzZXtqUXVlcnkudGltZXJzLnBvcCgpO319O2pRdWVyeS5meC5pbnRlcnZhbD0xMztqUXVlcnkuZnguc3RhcnQ9ZnVuY3Rpb24oKXtpZighdGltZXJJZCl7dGltZXJJZD13aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lP3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmKTp3aW5kb3cuc2V0SW50ZXJ2YWwoalF1ZXJ5LmZ4LnRpY2ssalF1ZXJ5LmZ4LmludGVydmFsKTt9fTtqUXVlcnkuZnguc3RvcD1mdW5jdGlvbigpe2lmKHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSl7d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRpbWVySWQpO31lbHNle3dpbmRvdy5jbGVhckludGVydmFsKHRpbWVySWQpO310aW1lcklkPW51bGw7fTtqUXVlcnkuZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCwvLyBEZWZhdWx0IHNwZWVkXG5fZGVmYXVsdDo0MDB9Oy8vIEJhc2VkIG9mZiBvZiB0aGUgcGx1Z2luIGJ5IENsaW50IEhlbGZlcnMsIHdpdGggcGVybWlzc2lvbi5cbi8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDEwMDMyNDAxNDc0Ny9odHRwOi8vYmxpbmRzaWduYWxzLmNvbS9pbmRleC5waHAvMjAwOS8wNy9qcXVlcnktZGVsYXkvXG5qUXVlcnkuZm4uZGVsYXk9ZnVuY3Rpb24odGltZSx0eXBlKXt0aW1lPWpRdWVyeS5meD9qUXVlcnkuZnguc3BlZWRzW3RpbWVdfHx0aW1lOnRpbWU7dHlwZT10eXBlfHxcImZ4XCI7cmV0dXJuIHRoaXMucXVldWUodHlwZSxmdW5jdGlvbihuZXh0LGhvb2tzKXt2YXIgdGltZW91dD13aW5kb3cuc2V0VGltZW91dChuZXh0LHRpbWUpO2hvb2tzLnN0b3A9ZnVuY3Rpb24oKXt3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO307fSk7fTsoZnVuY3Rpb24oKXt2YXIgaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLHNlbGVjdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLG9wdD1zZWxlY3QuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7aW5wdXQudHlwZT1cImNoZWNrYm94XCI7Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMyBvbmx5XG4vLyBEZWZhdWx0IHZhbHVlIGZvciBhIGNoZWNrYm94IHNob3VsZCBiZSBcIm9uXCJcbnN1cHBvcnQuY2hlY2tPbj1pbnB1dC52YWx1ZSE9PVwiXCI7Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4vLyBNdXN0IGFjY2VzcyBzZWxlY3RlZEluZGV4IHRvIG1ha2UgZGVmYXVsdCBvcHRpb25zIHNlbGVjdFxuc3VwcG9ydC5vcHRTZWxlY3RlZD1vcHQuc2VsZWN0ZWQ7Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4vLyBBbiBpbnB1dCBsb3NlcyBpdHMgdmFsdWUgYWZ0ZXIgYmVjb21pbmcgYSByYWRpb1xuaW5wdXQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2lucHV0LnZhbHVlPVwidFwiO2lucHV0LnR5cGU9XCJyYWRpb1wiO3N1cHBvcnQucmFkaW9WYWx1ZT1pbnB1dC52YWx1ZT09PVwidFwiO30pKCk7dmFyIGJvb2xIb29rLGF0dHJIYW5kbGU9alF1ZXJ5LmV4cHIuYXR0ckhhbmRsZTtqUXVlcnkuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uIGF0dHIobmFtZSx2YWx1ZSl7cmV0dXJuIGFjY2Vzcyh0aGlzLGpRdWVyeS5hdHRyLG5hbWUsdmFsdWUsYXJndW1lbnRzLmxlbmd0aD4xKTt9LHJlbW92ZUF0dHI6ZnVuY3Rpb24gcmVtb3ZlQXR0cihuYW1lKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7alF1ZXJ5LnJlbW92ZUF0dHIodGhpcyxuYW1lKTt9KTt9fSk7alF1ZXJ5LmV4dGVuZCh7YXR0cjpmdW5jdGlvbiBhdHRyKGVsZW0sbmFtZSx2YWx1ZSl7dmFyIHJldCxob29rcyxuVHlwZT1lbGVtLm5vZGVUeXBlOy8vIERvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcbmlmKG5UeXBlPT09M3x8blR5cGU9PT04fHxuVHlwZT09PTIpe3JldHVybjt9Ly8gRmFsbGJhY2sgdG8gcHJvcCB3aGVuIGF0dHJpYnV0ZXMgYXJlIG5vdCBzdXBwb3J0ZWRcbmlmKHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZT09PVwidW5kZWZpbmVkXCIpe3JldHVybiBqUXVlcnkucHJvcChlbGVtLG5hbWUsdmFsdWUpO30vLyBBdHRyaWJ1dGUgaG9va3MgYXJlIGRldGVybWluZWQgYnkgdGhlIGxvd2VyY2FzZSB2ZXJzaW9uXG4vLyBHcmFiIG5lY2Vzc2FyeSBob29rIGlmIG9uZSBpcyBkZWZpbmVkXG5pZihuVHlwZSE9PTF8fCFqUXVlcnkuaXNYTUxEb2MoZWxlbSkpe2hvb2tzPWpRdWVyeS5hdHRySG9va3NbbmFtZS50b0xvd2VyQ2FzZSgpXXx8KGpRdWVyeS5leHByLm1hdGNoLmJvb2wudGVzdChuYW1lKT9ib29sSG9vazp1bmRlZmluZWQpO31pZih2YWx1ZSE9PXVuZGVmaW5lZCl7aWYodmFsdWU9PT1udWxsKXtqUXVlcnkucmVtb3ZlQXR0cihlbGVtLG5hbWUpO3JldHVybjt9aWYoaG9va3MmJlwic2V0XCJpbiBob29rcyYmKHJldD1ob29rcy5zZXQoZWxlbSx2YWx1ZSxuYW1lKSkhPT11bmRlZmluZWQpe3JldHVybiByZXQ7fWVsZW0uc2V0QXR0cmlidXRlKG5hbWUsdmFsdWUrXCJcIik7cmV0dXJuIHZhbHVlO31pZihob29rcyYmXCJnZXRcImluIGhvb2tzJiYocmV0PWhvb2tzLmdldChlbGVtLG5hbWUpKSE9PW51bGwpe3JldHVybiByZXQ7fXJldD1qUXVlcnkuZmluZC5hdHRyKGVsZW0sbmFtZSk7Ly8gTm9uLWV4aXN0ZW50IGF0dHJpYnV0ZXMgcmV0dXJuIG51bGwsIHdlIG5vcm1hbGl6ZSB0byB1bmRlZmluZWRcbnJldHVybiByZXQ9PW51bGw/dW5kZWZpbmVkOnJldDt9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uIHNldChlbGVtLHZhbHVlKXtpZighc3VwcG9ydC5yYWRpb1ZhbHVlJiZ2YWx1ZT09PVwicmFkaW9cIiYmalF1ZXJ5Lm5vZGVOYW1lKGVsZW0sXCJpbnB1dFwiKSl7dmFyIHZhbD1lbGVtLnZhbHVlO2VsZW0uc2V0QXR0cmlidXRlKFwidHlwZVwiLHZhbHVlKTtpZih2YWwpe2VsZW0udmFsdWU9dmFsO31yZXR1cm4gdmFsdWU7fX19fSxyZW1vdmVBdHRyOmZ1bmN0aW9uIHJlbW92ZUF0dHIoZWxlbSx2YWx1ZSl7dmFyIG5hbWUsaT0wLC8vIEF0dHJpYnV0ZSBuYW1lcyBjYW4gY29udGFpbiBub24tSFRNTCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcbi8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuYXR0ck5hbWVzPXZhbHVlJiZ2YWx1ZS5tYXRjaChybm90aHRtbHdoaXRlKTtpZihhdHRyTmFtZXMmJmVsZW0ubm9kZVR5cGU9PT0xKXt3aGlsZShuYW1lPWF0dHJOYW1lc1tpKytdKXtlbGVtLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTt9fX19KTsvLyBIb29rcyBmb3IgYm9vbGVhbiBhdHRyaWJ1dGVzXG5ib29sSG9vaz17c2V0OmZ1bmN0aW9uIHNldChlbGVtLHZhbHVlLG5hbWUpe2lmKHZhbHVlPT09ZmFsc2Upey8vIFJlbW92ZSBib29sZWFuIGF0dHJpYnV0ZXMgd2hlbiBzZXQgdG8gZmFsc2VcbmpRdWVyeS5yZW1vdmVBdHRyKGVsZW0sbmFtZSk7fWVsc2V7ZWxlbS5zZXRBdHRyaWJ1dGUobmFtZSxuYW1lKTt9cmV0dXJuIG5hbWU7fX07alF1ZXJ5LmVhY2goalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oaSxuYW1lKXt2YXIgZ2V0dGVyPWF0dHJIYW5kbGVbbmFtZV18fGpRdWVyeS5maW5kLmF0dHI7YXR0ckhhbmRsZVtuYW1lXT1mdW5jdGlvbihlbGVtLG5hbWUsaXNYTUwpe3ZhciByZXQsaGFuZGxlLGxvd2VyY2FzZU5hbWU9bmFtZS50b0xvd2VyQ2FzZSgpO2lmKCFpc1hNTCl7Ly8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcCBieSB0ZW1wb3JhcmlseSByZW1vdmluZyB0aGlzIGZ1bmN0aW9uIGZyb20gdGhlIGdldHRlclxuaGFuZGxlPWF0dHJIYW5kbGVbbG93ZXJjYXNlTmFtZV07YXR0ckhhbmRsZVtsb3dlcmNhc2VOYW1lXT1yZXQ7cmV0PWdldHRlcihlbGVtLG5hbWUsaXNYTUwpIT1udWxsP2xvd2VyY2FzZU5hbWU6bnVsbDthdHRySGFuZGxlW2xvd2VyY2FzZU5hbWVdPWhhbmRsZTt9cmV0dXJuIHJldDt9O30pO3ZhciByZm9jdXNhYmxlPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2kscmNsaWNrYWJsZT0vXig/OmF8YXJlYSkkL2k7alF1ZXJ5LmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbiBwcm9wKG5hbWUsdmFsdWUpe3JldHVybiBhY2Nlc3ModGhpcyxqUXVlcnkucHJvcCxuYW1lLHZhbHVlLGFyZ3VtZW50cy5sZW5ndGg+MSk7fSxyZW1vdmVQcm9wOmZ1bmN0aW9uIHJlbW92ZVByb3AobmFtZSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW2pRdWVyeS5wcm9wRml4W25hbWVdfHxuYW1lXTt9KTt9fSk7alF1ZXJ5LmV4dGVuZCh7cHJvcDpmdW5jdGlvbiBwcm9wKGVsZW0sbmFtZSx2YWx1ZSl7dmFyIHJldCxob29rcyxuVHlwZT1lbGVtLm5vZGVUeXBlOy8vIERvbid0IGdldC9zZXQgcHJvcGVydGllcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcbmlmKG5UeXBlPT09M3x8blR5cGU9PT04fHxuVHlwZT09PTIpe3JldHVybjt9aWYoblR5cGUhPT0xfHwhalF1ZXJ5LmlzWE1MRG9jKGVsZW0pKXsvLyBGaXggbmFtZSBhbmQgYXR0YWNoIGhvb2tzXG5uYW1lPWpRdWVyeS5wcm9wRml4W25hbWVdfHxuYW1lO2hvb2tzPWpRdWVyeS5wcm9wSG9va3NbbmFtZV07fWlmKHZhbHVlIT09dW5kZWZpbmVkKXtpZihob29rcyYmXCJzZXRcImluIGhvb2tzJiYocmV0PWhvb2tzLnNldChlbGVtLHZhbHVlLG5hbWUpKSE9PXVuZGVmaW5lZCl7cmV0dXJuIHJldDt9cmV0dXJuIGVsZW1bbmFtZV09dmFsdWU7fWlmKGhvb2tzJiZcImdldFwiaW4gaG9va3MmJihyZXQ9aG9va3MuZ2V0KGVsZW0sbmFtZSkpIT09bnVsbCl7cmV0dXJuIHJldDt9cmV0dXJuIGVsZW1bbmFtZV07fSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24gZ2V0KGVsZW0pey8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcbi8vIGVsZW0udGFiSW5kZXggZG9lc24ndCBhbHdheXMgcmV0dXJuIHRoZVxuLy8gY29ycmVjdCB2YWx1ZSB3aGVuIGl0IGhhc24ndCBiZWVuIGV4cGxpY2l0bHkgc2V0XG4vLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNDExMTYyMzMzNDcvaHR0cDovL2ZsdWlkcHJvamVjdC5vcmcvYmxvZy8yMDA4LzAxLzA5L2dldHRpbmctc2V0dGluZy1hbmQtcmVtb3ZpbmctdGFiaW5kZXgtdmFsdWVzLXdpdGgtamF2YXNjcmlwdC9cbi8vIFVzZSBwcm9wZXIgYXR0cmlidXRlIHJldHJpZXZhbCgjMTIwNzIpXG52YXIgdGFiaW5kZXg9alF1ZXJ5LmZpbmQuYXR0cihlbGVtLFwidGFiaW5kZXhcIik7aWYodGFiaW5kZXgpe3JldHVybiBwYXJzZUludCh0YWJpbmRleCwxMCk7fWlmKHJmb2N1c2FibGUudGVzdChlbGVtLm5vZGVOYW1lKXx8cmNsaWNrYWJsZS50ZXN0KGVsZW0ubm9kZU5hbWUpJiZlbGVtLmhyZWYpe3JldHVybiAwO31yZXR1cm4tMTt9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KTsvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbi8vIEFjY2Vzc2luZyB0aGUgc2VsZWN0ZWRJbmRleCBwcm9wZXJ0eVxuLy8gZm9yY2VzIHRoZSBicm93c2VyIHRvIHJlc3BlY3Qgc2V0dGluZyBzZWxlY3RlZFxuLy8gb24gdGhlIG9wdGlvblxuLy8gVGhlIGdldHRlciBlbnN1cmVzIGEgZGVmYXVsdCBvcHRpb24gaXMgc2VsZWN0ZWRcbi8vIHdoZW4gaW4gYW4gb3B0Z3JvdXBcbi8vIGVzbGludCBydWxlIFwibm8tdW51c2VkLWV4cHJlc3Npb25zXCIgaXMgZGlzYWJsZWQgZm9yIHRoaXMgY29kZVxuLy8gc2luY2UgaXQgY29uc2lkZXJzIHN1Y2ggYWNjZXNzaW9ucyBub29wXG5pZighc3VwcG9ydC5vcHRTZWxlY3RlZCl7alF1ZXJ5LnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uIGdldChlbGVtKXsvKiBlc2xpbnQgbm8tdW51c2VkLWV4cHJlc3Npb25zOiBcIm9mZlwiICovdmFyIHBhcmVudD1lbGVtLnBhcmVudE5vZGU7aWYocGFyZW50JiZwYXJlbnQucGFyZW50Tm9kZSl7cGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDt9cmV0dXJuIG51bGw7fSxzZXQ6ZnVuY3Rpb24gc2V0KGVsZW0pey8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi92YXIgcGFyZW50PWVsZW0ucGFyZW50Tm9kZTtpZihwYXJlbnQpe3BhcmVudC5zZWxlY3RlZEluZGV4O2lmKHBhcmVudC5wYXJlbnROb2RlKXtwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O319fX07fWpRdWVyeS5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe2pRdWVyeS5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpczt9KTsvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gSFRNTCBzcGVjXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9pbmZyYXN0cnVjdHVyZS5odG1sI3N0cmlwLWFuZC1jb2xsYXBzZS13aGl0ZXNwYWNlXG5mdW5jdGlvbiBzdHJpcEFuZENvbGxhcHNlKHZhbHVlKXt2YXIgdG9rZW5zPXZhbHVlLm1hdGNoKHJub3RodG1sd2hpdGUpfHxbXTtyZXR1cm4gdG9rZW5zLmpvaW4oXCIgXCIpO31mdW5jdGlvbiBnZXRDbGFzcyhlbGVtKXtyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUmJmVsZW0uZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCI7fWpRdWVyeS5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uIGFkZENsYXNzKHZhbHVlKXt2YXIgY2xhc3NlcyxlbGVtLGN1cixjdXJWYWx1ZSxjbGF6eixqLGZpbmFsVmFsdWUsaT0wO2lmKGpRdWVyeS5pc0Z1bmN0aW9uKHZhbHVlKSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihqKXtqUXVlcnkodGhpcykuYWRkQ2xhc3ModmFsdWUuY2FsbCh0aGlzLGosZ2V0Q2xhc3ModGhpcykpKTt9KTt9aWYodHlwZW9mIHZhbHVlPT09XCJzdHJpbmdcIiYmdmFsdWUpe2NsYXNzZXM9dmFsdWUubWF0Y2gocm5vdGh0bWx3aGl0ZSl8fFtdO3doaWxlKGVsZW09dGhpc1tpKytdKXtjdXJWYWx1ZT1nZXRDbGFzcyhlbGVtKTtjdXI9ZWxlbS5ub2RlVHlwZT09PTEmJlwiIFwiK3N0cmlwQW5kQ29sbGFwc2UoY3VyVmFsdWUpK1wiIFwiO2lmKGN1cil7aj0wO3doaWxlKGNsYXp6PWNsYXNzZXNbaisrXSl7aWYoY3VyLmluZGV4T2YoXCIgXCIrY2xhenorXCIgXCIpPDApe2N1cis9Y2xhenorXCIgXCI7fX0vLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuZmluYWxWYWx1ZT1zdHJpcEFuZENvbGxhcHNlKGN1cik7aWYoY3VyVmFsdWUhPT1maW5hbFZhbHVlKXtlbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZmluYWxWYWx1ZSk7fX19fXJldHVybiB0aGlzO30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModmFsdWUpe3ZhciBjbGFzc2VzLGVsZW0sY3VyLGN1clZhbHVlLGNsYXp6LGosZmluYWxWYWx1ZSxpPTA7aWYoalF1ZXJ5LmlzRnVuY3Rpb24odmFsdWUpKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGope2pRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcyh2YWx1ZS5jYWxsKHRoaXMsaixnZXRDbGFzcyh0aGlzKSkpO30pO31pZighYXJndW1lbnRzLmxlbmd0aCl7cmV0dXJuIHRoaXMuYXR0cihcImNsYXNzXCIsXCJcIik7fWlmKHR5cGVvZiB2YWx1ZT09PVwic3RyaW5nXCImJnZhbHVlKXtjbGFzc2VzPXZhbHVlLm1hdGNoKHJub3RodG1sd2hpdGUpfHxbXTt3aGlsZShlbGVtPXRoaXNbaSsrXSl7Y3VyVmFsdWU9Z2V0Q2xhc3MoZWxlbSk7Ly8gVGhpcyBleHByZXNzaW9uIGlzIGhlcmUgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSBhZGRDbGFzcylcbmN1cj1lbGVtLm5vZGVUeXBlPT09MSYmXCIgXCIrc3RyaXBBbmRDb2xsYXBzZShjdXJWYWx1ZSkrXCIgXCI7aWYoY3VyKXtqPTA7d2hpbGUoY2xheno9Y2xhc3Nlc1tqKytdKXsvLyBSZW1vdmUgKmFsbCogaW5zdGFuY2VzXG53aGlsZShjdXIuaW5kZXhPZihcIiBcIitjbGF6eitcIiBcIik+LTEpe2N1cj1jdXIucmVwbGFjZShcIiBcIitjbGF6eitcIiBcIixcIiBcIik7fX0vLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuZmluYWxWYWx1ZT1zdHJpcEFuZENvbGxhcHNlKGN1cik7aWYoY3VyVmFsdWUhPT1maW5hbFZhbHVlKXtlbGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZmluYWxWYWx1ZSk7fX19fXJldHVybiB0aGlzO30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24gdG9nZ2xlQ2xhc3ModmFsdWUsc3RhdGVWYWwpe3ZhciB0eXBlPXR5cGVvZiB2YWx1ZT09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKHZhbHVlKTtpZih0eXBlb2Ygc3RhdGVWYWw9PT1cImJvb2xlYW5cIiYmdHlwZT09PVwic3RyaW5nXCIpe3JldHVybiBzdGF0ZVZhbD90aGlzLmFkZENsYXNzKHZhbHVlKTp0aGlzLnJlbW92ZUNsYXNzKHZhbHVlKTt9aWYoalF1ZXJ5LmlzRnVuY3Rpb24odmFsdWUpKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpe2pRdWVyeSh0aGlzKS50b2dnbGVDbGFzcyh2YWx1ZS5jYWxsKHRoaXMsaSxnZXRDbGFzcyh0aGlzKSxzdGF0ZVZhbCksc3RhdGVWYWwpO30pO31yZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGNsYXNzTmFtZSxpLHNlbGYsY2xhc3NOYW1lcztpZih0eXBlPT09XCJzdHJpbmdcIil7Ly8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcbmk9MDtzZWxmPWpRdWVyeSh0aGlzKTtjbGFzc05hbWVzPXZhbHVlLm1hdGNoKHJub3RodG1sd2hpdGUpfHxbXTt3aGlsZShjbGFzc05hbWU9Y2xhc3NOYW1lc1tpKytdKXsvLyBDaGVjayBlYWNoIGNsYXNzTmFtZSBnaXZlbiwgc3BhY2Ugc2VwYXJhdGVkIGxpc3RcbmlmKHNlbGYuaGFzQ2xhc3MoY2xhc3NOYW1lKSl7c2VsZi5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO31lbHNle3NlbGYuYWRkQ2xhc3MoY2xhc3NOYW1lKTt9fS8vIFRvZ2dsZSB3aG9sZSBjbGFzcyBuYW1lXG59ZWxzZSBpZih2YWx1ZT09PXVuZGVmaW5lZHx8dHlwZT09PVwiYm9vbGVhblwiKXtjbGFzc05hbWU9Z2V0Q2xhc3ModGhpcyk7aWYoY2xhc3NOYW1lKXsvLyBTdG9yZSBjbGFzc05hbWUgaWYgc2V0XG5kYXRhUHJpdi5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixjbGFzc05hbWUpO30vLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBjbGFzcyBuYW1lIG9yIGlmIHdlJ3JlIHBhc3NlZCBgZmFsc2VgLFxuLy8gdGhlbiByZW1vdmUgdGhlIHdob2xlIGNsYXNzbmFtZSAoaWYgdGhlcmUgd2FzIG9uZSwgdGhlIGFib3ZlIHNhdmVkIGl0KS5cbi8vIE90aGVyd2lzZSBicmluZyBiYWNrIHdoYXRldmVyIHdhcyBwcmV2aW91c2x5IHNhdmVkIChpZiBhbnl0aGluZyksXG4vLyBmYWxsaW5nIGJhY2sgdG8gdGhlIGVtcHR5IHN0cmluZyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXG5pZih0aGlzLnNldEF0dHJpYnV0ZSl7dGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGNsYXNzTmFtZXx8dmFsdWU9PT1mYWxzZT9cIlwiOmRhdGFQcml2LmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIik7fX19KTt9LGhhc0NsYXNzOmZ1bmN0aW9uIGhhc0NsYXNzKHNlbGVjdG9yKXt2YXIgY2xhc3NOYW1lLGVsZW0saT0wO2NsYXNzTmFtZT1cIiBcIitzZWxlY3RvcitcIiBcIjt3aGlsZShlbGVtPXRoaXNbaSsrXSl7aWYoZWxlbS5ub2RlVHlwZT09PTEmJihcIiBcIitzdHJpcEFuZENvbGxhcHNlKGdldENsYXNzKGVsZW0pKStcIiBcIikuaW5kZXhPZihjbGFzc05hbWUpPi0xKXtyZXR1cm4gdHJ1ZTt9fXJldHVybiBmYWxzZTt9fSk7dmFyIHJyZXR1cm49L1xcci9nO2pRdWVyeS5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbiB2YWwodmFsdWUpe3ZhciBob29rcyxyZXQsaXNGdW5jdGlvbixlbGVtPXRoaXNbMF07aWYoIWFyZ3VtZW50cy5sZW5ndGgpe2lmKGVsZW0pe2hvb2tzPWpRdWVyeS52YWxIb29rc1tlbGVtLnR5cGVdfHxqUXVlcnkudmFsSG9va3NbZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXTtpZihob29rcyYmXCJnZXRcImluIGhvb2tzJiYocmV0PWhvb2tzLmdldChlbGVtLFwidmFsdWVcIikpIT09dW5kZWZpbmVkKXtyZXR1cm4gcmV0O31yZXQ9ZWxlbS52YWx1ZTsvLyBIYW5kbGUgbW9zdCBjb21tb24gc3RyaW5nIGNhc2VzXG5pZih0eXBlb2YgcmV0PT09XCJzdHJpbmdcIil7cmV0dXJuIHJldC5yZXBsYWNlKHJyZXR1cm4sXCJcIik7fS8vIEhhbmRsZSBjYXNlcyB3aGVyZSB2YWx1ZSBpcyBudWxsL3VuZGVmIG9yIG51bWJlclxucmV0dXJuIHJldD09bnVsbD9cIlwiOnJldDt9cmV0dXJuO31pc0Z1bmN0aW9uPWpRdWVyeS5pc0Z1bmN0aW9uKHZhbHVlKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpe3ZhciB2YWw7aWYodGhpcy5ub2RlVHlwZSE9PTEpe3JldHVybjt9aWYoaXNGdW5jdGlvbil7dmFsPXZhbHVlLmNhbGwodGhpcyxpLGpRdWVyeSh0aGlzKS52YWwoKSk7fWVsc2V7dmFsPXZhbHVlO30vLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXG5pZih2YWw9PW51bGwpe3ZhbD1cIlwiO31lbHNlIGlmKHR5cGVvZiB2YWw9PT1cIm51bWJlclwiKXt2YWwrPVwiXCI7fWVsc2UgaWYoalF1ZXJ5LmlzQXJyYXkodmFsKSl7dmFsPWpRdWVyeS5tYXAodmFsLGZ1bmN0aW9uKHZhbHVlKXtyZXR1cm4gdmFsdWU9PW51bGw/XCJcIjp2YWx1ZStcIlwiO30pO31ob29rcz1qUXVlcnkudmFsSG9va3NbdGhpcy50eXBlXXx8alF1ZXJ5LnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV07Ly8gSWYgc2V0IHJldHVybnMgdW5kZWZpbmVkLCBmYWxsIGJhY2sgdG8gbm9ybWFsIHNldHRpbmdcbmlmKCFob29rc3x8IShcInNldFwiaW4gaG9va3MpfHxob29rcy5zZXQodGhpcyx2YWwsXCJ2YWx1ZVwiKT09PXVuZGVmaW5lZCl7dGhpcy52YWx1ZT12YWw7fX0pO319KTtqUXVlcnkuZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24gZ2V0KGVsZW0pe3ZhciB2YWw9alF1ZXJ5LmZpbmQuYXR0cihlbGVtLFwidmFsdWVcIik7cmV0dXJuIHZhbCE9bnVsbD92YWw6Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExIG9ubHlcbi8vIG9wdGlvbi50ZXh0IHRocm93cyBleGNlcHRpb25zICgjMTQ2ODYsICMxNDg1OClcbi8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlXG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2Utd2hpdGVzcGFjZVxuc3RyaXBBbmRDb2xsYXBzZShqUXVlcnkudGV4dChlbGVtKSk7fX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24gZ2V0KGVsZW0pe3ZhciB2YWx1ZSxvcHRpb24saSxvcHRpb25zPWVsZW0ub3B0aW9ucyxpbmRleD1lbGVtLnNlbGVjdGVkSW5kZXgsb25lPWVsZW0udHlwZT09PVwic2VsZWN0LW9uZVwiLHZhbHVlcz1vbmU/bnVsbDpbXSxtYXg9b25lP2luZGV4KzE6b3B0aW9ucy5sZW5ndGg7aWYoaW5kZXg8MCl7aT1tYXg7fWVsc2V7aT1vbmU/aW5kZXg6MDt9Ly8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgc2VsZWN0ZWQgb3B0aW9uc1xuZm9yKDtpPG1heDtpKyspe29wdGlvbj1vcHRpb25zW2ldOy8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBJRTgtOSBkb2Vzbid0IHVwZGF0ZSBzZWxlY3RlZCBhZnRlciBmb3JtIHJlc2V0ICgjMjU1MSlcbmlmKChvcHRpb24uc2VsZWN0ZWR8fGk9PT1pbmRleCkmJi8vIERvbid0IHJldHVybiBvcHRpb25zIHRoYXQgYXJlIGRpc2FibGVkIG9yIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcbiFvcHRpb24uZGlzYWJsZWQmJighb3B0aW9uLnBhcmVudE5vZGUuZGlzYWJsZWR8fCFqUXVlcnkubm9kZU5hbWUob3B0aW9uLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpey8vIEdldCB0aGUgc3BlY2lmaWMgdmFsdWUgZm9yIHRoZSBvcHRpb25cbnZhbHVlPWpRdWVyeShvcHRpb24pLnZhbCgpOy8vIFdlIGRvbid0IG5lZWQgYW4gYXJyYXkgZm9yIG9uZSBzZWxlY3RzXG5pZihvbmUpe3JldHVybiB2YWx1ZTt9Ly8gTXVsdGktU2VsZWN0cyByZXR1cm4gYW4gYXJyYXlcbnZhbHVlcy5wdXNoKHZhbHVlKTt9fXJldHVybiB2YWx1ZXM7fSxzZXQ6ZnVuY3Rpb24gc2V0KGVsZW0sdmFsdWUpe3ZhciBvcHRpb25TZXQsb3B0aW9uLG9wdGlvbnM9ZWxlbS5vcHRpb25zLHZhbHVlcz1qUXVlcnkubWFrZUFycmF5KHZhbHVlKSxpPW9wdGlvbnMubGVuZ3RoO3doaWxlKGktLSl7b3B0aW9uPW9wdGlvbnNbaV07LyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9pZihvcHRpb24uc2VsZWN0ZWQ9alF1ZXJ5LmluQXJyYXkoalF1ZXJ5LnZhbEhvb2tzLm9wdGlvbi5nZXQob3B0aW9uKSx2YWx1ZXMpPi0xKXtvcHRpb25TZXQ9dHJ1ZTt9LyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL30vLyBGb3JjZSBicm93c2VycyB0byBiZWhhdmUgY29uc2lzdGVudGx5IHdoZW4gbm9uLW1hdGNoaW5nIHZhbHVlIGlzIHNldFxuaWYoIW9wdGlvblNldCl7ZWxlbS5zZWxlY3RlZEluZGV4PS0xO31yZXR1cm4gdmFsdWVzO319fX0pOy8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG5qUXVlcnkuZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtqUXVlcnkudmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbiBzZXQoZWxlbSx2YWx1ZSl7aWYoalF1ZXJ5LmlzQXJyYXkodmFsdWUpKXtyZXR1cm4gZWxlbS5jaGVja2VkPWpRdWVyeS5pbkFycmF5KGpRdWVyeShlbGVtKS52YWwoKSx2YWx1ZSk+LTE7fX19O2lmKCFzdXBwb3J0LmNoZWNrT24pe2pRdWVyeS52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oZWxlbSl7cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKFwidmFsdWVcIik9PT1udWxsP1wib25cIjplbGVtLnZhbHVlO307fX0pOy8vIFJldHVybiBqUXVlcnkgZm9yIGF0dHJpYnV0ZXMtb25seSBpbmNsdXNpb25cbnZhciByZm9jdXNNb3JwaD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC87alF1ZXJ5LmV4dGVuZChqUXVlcnkuZXZlbnQse3RyaWdnZXI6ZnVuY3Rpb24gdHJpZ2dlcihldmVudCxkYXRhLGVsZW0sb25seUhhbmRsZXJzKXt2YXIgaSxjdXIsdG1wLGJ1YmJsZVR5cGUsb250eXBlLGhhbmRsZSxzcGVjaWFsLGV2ZW50UGF0aD1bZWxlbXx8ZG9jdW1lbnRdLHR5cGU9aGFzT3duLmNhbGwoZXZlbnQsXCJ0eXBlXCIpP2V2ZW50LnR5cGU6ZXZlbnQsbmFtZXNwYWNlcz1oYXNPd24uY2FsbChldmVudCxcIm5hbWVzcGFjZVwiKT9ldmVudC5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2N1cj10bXA9ZWxlbT1lbGVtfHxkb2N1bWVudDsvLyBEb24ndCBkbyBldmVudHMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuaWYoZWxlbS5ub2RlVHlwZT09PTN8fGVsZW0ubm9kZVR5cGU9PT04KXtyZXR1cm47fS8vIGZvY3VzL2JsdXIgbW9ycGhzIHRvIGZvY3VzaW4vb3V0OyBlbnN1cmUgd2UncmUgbm90IGZpcmluZyB0aGVtIHJpZ2h0IG5vd1xuaWYocmZvY3VzTW9ycGgudGVzdCh0eXBlK2pRdWVyeS5ldmVudC50cmlnZ2VyZWQpKXtyZXR1cm47fWlmKHR5cGUuaW5kZXhPZihcIi5cIik+LTEpey8vIE5hbWVzcGFjZWQgdHJpZ2dlcjsgY3JlYXRlIGEgcmVnZXhwIHRvIG1hdGNoIGV2ZW50IHR5cGUgaW4gaGFuZGxlKClcbm5hbWVzcGFjZXM9dHlwZS5zcGxpdChcIi5cIik7dHlwZT1uYW1lc3BhY2VzLnNoaWZ0KCk7bmFtZXNwYWNlcy5zb3J0KCk7fW9udHlwZT10eXBlLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIit0eXBlOy8vIENhbGxlciBjYW4gcGFzcyBpbiBhIGpRdWVyeS5FdmVudCBvYmplY3QsIE9iamVjdCwgb3IganVzdCBhbiBldmVudCB0eXBlIHN0cmluZ1xuZXZlbnQ9ZXZlbnRbalF1ZXJ5LmV4cGFuZG9dP2V2ZW50Om5ldyBqUXVlcnkuRXZlbnQodHlwZSwodHlwZW9mIGV2ZW50PT09XCJ1bmRlZmluZWRcIj9cInVuZGVmaW5lZFwiOl90eXBlb2YoZXZlbnQpKT09PVwib2JqZWN0XCImJmV2ZW50KTsvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXG5ldmVudC5pc1RyaWdnZXI9b25seUhhbmRsZXJzPzI6MztldmVudC5uYW1lc3BhY2U9bmFtZXNwYWNlcy5qb2luKFwiLlwiKTtldmVudC5ybmFtZXNwYWNlPWV2ZW50Lm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrbmFtZXNwYWNlcy5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbDsvLyBDbGVhbiB1cCB0aGUgZXZlbnQgaW4gY2FzZSBpdCBpcyBiZWluZyByZXVzZWRcbmV2ZW50LnJlc3VsdD11bmRlZmluZWQ7aWYoIWV2ZW50LnRhcmdldCl7ZXZlbnQudGFyZ2V0PWVsZW07fS8vIENsb25lIGFueSBpbmNvbWluZyBkYXRhIGFuZCBwcmVwZW5kIHRoZSBldmVudCwgY3JlYXRpbmcgdGhlIGhhbmRsZXIgYXJnIGxpc3RcbmRhdGE9ZGF0YT09bnVsbD9bZXZlbnRdOmpRdWVyeS5tYWtlQXJyYXkoZGF0YSxbZXZlbnRdKTsvLyBBbGxvdyBzcGVjaWFsIGV2ZW50cyB0byBkcmF3IG91dHNpZGUgdGhlIGxpbmVzXG5zcGVjaWFsPWpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdfHx7fTtpZighb25seUhhbmRsZXJzJiZzcGVjaWFsLnRyaWdnZXImJnNwZWNpYWwudHJpZ2dlci5hcHBseShlbGVtLGRhdGEpPT09ZmFsc2Upe3JldHVybjt9Ly8gRGV0ZXJtaW5lIGV2ZW50IHByb3BhZ2F0aW9uIHBhdGggaW4gYWR2YW5jZSwgcGVyIFczQyBldmVudHMgc3BlYyAoIzk5NTEpXG4vLyBCdWJibGUgdXAgdG8gZG9jdW1lbnQsIHRoZW4gdG8gd2luZG93OyB3YXRjaCBmb3IgYSBnbG9iYWwgb3duZXJEb2N1bWVudCB2YXIgKCM5NzI0KVxuaWYoIW9ubHlIYW5kbGVycyYmIXNwZWNpYWwubm9CdWJibGUmJiFqUXVlcnkuaXNXaW5kb3coZWxlbSkpe2J1YmJsZVR5cGU9c3BlY2lhbC5kZWxlZ2F0ZVR5cGV8fHR5cGU7aWYoIXJmb2N1c01vcnBoLnRlc3QoYnViYmxlVHlwZSt0eXBlKSl7Y3VyPWN1ci5wYXJlbnROb2RlO31mb3IoO2N1cjtjdXI9Y3VyLnBhcmVudE5vZGUpe2V2ZW50UGF0aC5wdXNoKGN1cik7dG1wPWN1cjt9Ly8gT25seSBhZGQgd2luZG93IGlmIHdlIGdvdCB0byBkb2N1bWVudCAoZS5nLiwgbm90IHBsYWluIG9iaiBvciBkZXRhY2hlZCBET00pXG5pZih0bXA9PT0oZWxlbS5vd25lckRvY3VtZW50fHxkb2N1bWVudCkpe2V2ZW50UGF0aC5wdXNoKHRtcC5kZWZhdWx0Vmlld3x8dG1wLnBhcmVudFdpbmRvd3x8d2luZG93KTt9fS8vIEZpcmUgaGFuZGxlcnMgb24gdGhlIGV2ZW50IHBhdGhcbmk9MDt3aGlsZSgoY3VyPWV2ZW50UGF0aFtpKytdKSYmIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2V2ZW50LnR5cGU9aT4xP2J1YmJsZVR5cGU6c3BlY2lhbC5iaW5kVHlwZXx8dHlwZTsvLyBqUXVlcnkgaGFuZGxlclxuaGFuZGxlPShkYXRhUHJpdi5nZXQoY3VyLFwiZXZlbnRzXCIpfHx7fSlbZXZlbnQudHlwZV0mJmRhdGFQcml2LmdldChjdXIsXCJoYW5kbGVcIik7aWYoaGFuZGxlKXtoYW5kbGUuYXBwbHkoY3VyLGRhdGEpO30vLyBOYXRpdmUgaGFuZGxlclxuaGFuZGxlPW9udHlwZSYmY3VyW29udHlwZV07aWYoaGFuZGxlJiZoYW5kbGUuYXBwbHkmJmFjY2VwdERhdGEoY3VyKSl7ZXZlbnQucmVzdWx0PWhhbmRsZS5hcHBseShjdXIsZGF0YSk7aWYoZXZlbnQucmVzdWx0PT09ZmFsc2Upe2V2ZW50LnByZXZlbnREZWZhdWx0KCk7fX19ZXZlbnQudHlwZT10eXBlOy8vIElmIG5vYm9keSBwcmV2ZW50ZWQgdGhlIGRlZmF1bHQgYWN0aW9uLCBkbyBpdCBub3dcbmlmKCFvbmx5SGFuZGxlcnMmJiFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSl7aWYoKCFzcGVjaWFsLl9kZWZhdWx0fHxzcGVjaWFsLl9kZWZhdWx0LmFwcGx5KGV2ZW50UGF0aC5wb3AoKSxkYXRhKT09PWZhbHNlKSYmYWNjZXB0RGF0YShlbGVtKSl7Ly8gQ2FsbCBhIG5hdGl2ZSBET00gbWV0aG9kIG9uIHRoZSB0YXJnZXQgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBldmVudC5cbi8vIERvbid0IGRvIGRlZmF1bHQgYWN0aW9ucyBvbiB3aW5kb3csIHRoYXQncyB3aGVyZSBnbG9iYWwgdmFyaWFibGVzIGJlICgjNjE3MClcbmlmKG9udHlwZSYmalF1ZXJ5LmlzRnVuY3Rpb24oZWxlbVt0eXBlXSkmJiFqUXVlcnkuaXNXaW5kb3coZWxlbSkpey8vIERvbid0IHJlLXRyaWdnZXIgYW4gb25GT08gZXZlbnQgd2hlbiB3ZSBjYWxsIGl0cyBGT08oKSBtZXRob2RcbnRtcD1lbGVtW29udHlwZV07aWYodG1wKXtlbGVtW29udHlwZV09bnVsbDt9Ly8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcbmpRdWVyeS5ldmVudC50cmlnZ2VyZWQ9dHlwZTtlbGVtW3R5cGVdKCk7alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZD11bmRlZmluZWQ7aWYodG1wKXtlbGVtW29udHlwZV09dG1wO319fX1yZXR1cm4gZXZlbnQucmVzdWx0O30sLy8gUGlnZ3liYWNrIG9uIGEgZG9ub3IgZXZlbnQgdG8gc2ltdWxhdGUgYSBkaWZmZXJlbnQgb25lXG4vLyBVc2VkIG9ubHkgZm9yIGBmb2N1cyhpbiB8IG91dClgIGV2ZW50c1xuc2ltdWxhdGU6ZnVuY3Rpb24gc2ltdWxhdGUodHlwZSxlbGVtLGV2ZW50KXt2YXIgZT1qUXVlcnkuZXh0ZW5kKG5ldyBqUXVlcnkuRXZlbnQoKSxldmVudCx7dHlwZTp0eXBlLGlzU2ltdWxhdGVkOnRydWV9KTtqUXVlcnkuZXZlbnQudHJpZ2dlcihlLG51bGwsZWxlbSk7fX0pO2pRdWVyeS5mbi5leHRlbmQoe3RyaWdnZXI6ZnVuY3Rpb24gdHJpZ2dlcih0eXBlLGRhdGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtqUXVlcnkuZXZlbnQudHJpZ2dlcih0eXBlLGRhdGEsdGhpcyk7fSk7fSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbiB0cmlnZ2VySGFuZGxlcih0eXBlLGRhdGEpe3ZhciBlbGVtPXRoaXNbMF07aWYoZWxlbSl7cmV0dXJuIGpRdWVyeS5ldmVudC50cmlnZ2VyKHR5cGUsZGF0YSxlbGVtLHRydWUpO319fSk7alF1ZXJ5LmVhY2goKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IHJlc2l6ZSBzY3JvbGwgY2xpY2sgZGJsY2xpY2sgXCIrXCJtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBcIitcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIikuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGksbmFtZSl7Ly8gSGFuZGxlIGV2ZW50IGJpbmRpbmdcbmpRdWVyeS5mbltuYW1lXT1mdW5jdGlvbihkYXRhLGZuKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24obmFtZSxudWxsLGRhdGEsZm4pOnRoaXMudHJpZ2dlcihuYW1lKTt9O30pO2pRdWVyeS5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uIGhvdmVyKGZuT3Zlcixmbk91dCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihmbk92ZXIpLm1vdXNlbGVhdmUoZm5PdXR8fGZuT3Zlcik7fX0pO3N1cHBvcnQuZm9jdXNpbj1cIm9uZm9jdXNpblwiaW4gd2luZG93Oy8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00NFxuLy8gRmlyZWZveCBkb2Vzbid0IGhhdmUgZm9jdXMoaW4gfCBvdXQpIGV2ZW50c1xuLy8gUmVsYXRlZCB0aWNrZXQgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02ODc3ODdcbi8vXG4vLyBTdXBwb3J0OiBDaHJvbWUgPD00OCAtIDQ5LCBTYWZhcmkgPD05LjAgLSA5LjFcbi8vIGZvY3VzKGluIHwgb3V0KSBldmVudHMgZmlyZSBhZnRlciBmb2N1cyAmIGJsdXIgZXZlbnRzLFxuLy8gd2hpY2ggaXMgc3BlYyB2aW9sYXRpb24gLSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50cy1mb2N1c2V2ZW50LWV2ZW50LW9yZGVyXG4vLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0OTg1N1xuaWYoIXN1cHBvcnQuZm9jdXNpbil7alF1ZXJ5LmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihvcmlnLGZpeCl7Ly8gQXR0YWNoIGEgc2luZ2xlIGNhcHR1cmluZyBoYW5kbGVyIG9uIHRoZSBkb2N1bWVudCB3aGlsZSBzb21lb25lIHdhbnRzIGZvY3VzaW4vZm9jdXNvdXRcbnZhciBoYW5kbGVyPWZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpe2pRdWVyeS5ldmVudC5zaW11bGF0ZShmaXgsZXZlbnQudGFyZ2V0LGpRdWVyeS5ldmVudC5maXgoZXZlbnQpKTt9O2pRdWVyeS5ldmVudC5zcGVjaWFsW2ZpeF09e3NldHVwOmZ1bmN0aW9uIHNldHVwKCl7dmFyIGRvYz10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsYXR0YWNoZXM9ZGF0YVByaXYuYWNjZXNzKGRvYyxmaXgpO2lmKCFhdHRhY2hlcyl7ZG9jLmFkZEV2ZW50TGlzdGVuZXIob3JpZyxoYW5kbGVyLHRydWUpO31kYXRhUHJpdi5hY2Nlc3MoZG9jLGZpeCwoYXR0YWNoZXN8fDApKzEpO30sdGVhcmRvd246ZnVuY3Rpb24gdGVhcmRvd24oKXt2YXIgZG9jPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxhdHRhY2hlcz1kYXRhUHJpdi5hY2Nlc3MoZG9jLGZpeCktMTtpZighYXR0YWNoZXMpe2RvYy5yZW1vdmVFdmVudExpc3RlbmVyKG9yaWcsaGFuZGxlcix0cnVlKTtkYXRhUHJpdi5yZW1vdmUoZG9jLGZpeCk7fWVsc2V7ZGF0YVByaXYuYWNjZXNzKGRvYyxmaXgsYXR0YWNoZXMpO319fTt9KTt9dmFyIGxvY2F0aW9uPXdpbmRvdy5sb2NhdGlvbjt2YXIgbm9uY2U9alF1ZXJ5Lm5vdygpO3ZhciBycXVlcnk9L1xcPy87Ly8gQ3Jvc3MtYnJvd3NlciB4bWwgcGFyc2luZ1xualF1ZXJ5LnBhcnNlWE1MPWZ1bmN0aW9uKGRhdGEpe3ZhciB4bWw7aWYoIWRhdGF8fHR5cGVvZiBkYXRhIT09XCJzdHJpbmdcIil7cmV0dXJuIG51bGw7fS8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5XG4vLyBJRSB0aHJvd3Mgb24gcGFyc2VGcm9tU3RyaW5nIHdpdGggaW52YWxpZCBpbnB1dC5cbnRyeXt4bWw9bmV3IHdpbmRvdy5ET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZGF0YSxcInRleHQveG1sXCIpO31jYXRjaChlKXt4bWw9dW5kZWZpbmVkO31pZigheG1sfHx4bWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGgpe2pRdWVyeS5lcnJvcihcIkludmFsaWQgWE1MOiBcIitkYXRhKTt9cmV0dXJuIHhtbDt9O3ZhciByYnJhY2tldD0vXFxbXFxdJC8sckNSTEY9L1xccj9cXG4vZyxyc3VibWl0dGVyVHlwZXM9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLHJzdWJtaXR0YWJsZT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gYnVpbGRQYXJhbXMocHJlZml4LG9iaix0cmFkaXRpb25hbCxhZGQpe3ZhciBuYW1lO2lmKGpRdWVyeS5pc0FycmF5KG9iaikpey8vIFNlcmlhbGl6ZSBhcnJheSBpdGVtLlxualF1ZXJ5LmVhY2gob2JqLGZ1bmN0aW9uKGksdil7aWYodHJhZGl0aW9uYWx8fHJicmFja2V0LnRlc3QocHJlZml4KSl7Ly8gVHJlYXQgZWFjaCBhcnJheSBpdGVtIGFzIGEgc2NhbGFyLlxuYWRkKHByZWZpeCx2KTt9ZWxzZXsvLyBJdGVtIGlzIG5vbi1zY2FsYXIgKGFycmF5IG9yIG9iamVjdCksIGVuY29kZSBpdHMgbnVtZXJpYyBpbmRleC5cbmJ1aWxkUGFyYW1zKHByZWZpeCtcIltcIisoKHR5cGVvZiB2PT09XCJ1bmRlZmluZWRcIj9cInVuZGVmaW5lZFwiOl90eXBlb2YodikpPT09XCJvYmplY3RcIiYmdiE9bnVsbD9pOlwiXCIpK1wiXVwiLHYsdHJhZGl0aW9uYWwsYWRkKTt9fSk7fWVsc2UgaWYoIXRyYWRpdGlvbmFsJiZqUXVlcnkudHlwZShvYmopPT09XCJvYmplY3RcIil7Ly8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuZm9yKG5hbWUgaW4gb2JqKXtidWlsZFBhcmFtcyhwcmVmaXgrXCJbXCIrbmFtZStcIl1cIixvYmpbbmFtZV0sdHJhZGl0aW9uYWwsYWRkKTt9fWVsc2V7Ly8gU2VyaWFsaXplIHNjYWxhciBpdGVtLlxuYWRkKHByZWZpeCxvYmopO319Ly8gU2VyaWFsaXplIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMgb3IgYSBzZXQgb2Zcbi8vIGtleS92YWx1ZXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xualF1ZXJ5LnBhcmFtPWZ1bmN0aW9uKGEsdHJhZGl0aW9uYWwpe3ZhciBwcmVmaXgscz1bXSxhZGQ9ZnVuY3Rpb24gYWRkKGtleSx2YWx1ZU9yRnVuY3Rpb24pey8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGludm9rZSBpdCBhbmQgdXNlIGl0cyByZXR1cm4gdmFsdWVcbnZhciB2YWx1ZT1qUXVlcnkuaXNGdW5jdGlvbih2YWx1ZU9yRnVuY3Rpb24pP3ZhbHVlT3JGdW5jdGlvbigpOnZhbHVlT3JGdW5jdGlvbjtzW3MubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoa2V5KStcIj1cIitlbmNvZGVVUklDb21wb25lbnQodmFsdWU9PW51bGw/XCJcIjp2YWx1ZSk7fTsvLyBJZiBhbiBhcnJheSB3YXMgcGFzc2VkIGluLCBhc3N1bWUgdGhhdCBpdCBpcyBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzLlxuaWYoalF1ZXJ5LmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhalF1ZXJ5LmlzUGxhaW5PYmplY3QoYSkpey8vIFNlcmlhbGl6ZSB0aGUgZm9ybSBlbGVtZW50c1xualF1ZXJ5LmVhY2goYSxmdW5jdGlvbigpe2FkZCh0aGlzLm5hbWUsdGhpcy52YWx1ZSk7fSk7fWVsc2V7Ly8gSWYgdHJhZGl0aW9uYWwsIGVuY29kZSB0aGUgXCJvbGRcIiB3YXkgKHRoZSB3YXkgMS4zLjIgb3Igb2xkZXJcbi8vIGRpZCBpdCksIG90aGVyd2lzZSBlbmNvZGUgcGFyYW1zIHJlY3Vyc2l2ZWx5LlxuZm9yKHByZWZpeCBpbiBhKXtidWlsZFBhcmFtcyhwcmVmaXgsYVtwcmVmaXhdLHRyYWRpdGlvbmFsLGFkZCk7fX0vLyBSZXR1cm4gdGhlIHJlc3VsdGluZyBzZXJpYWxpemF0aW9uXG5yZXR1cm4gcy5qb2luKFwiJlwiKTt9O2pRdWVyeS5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbiBzZXJpYWxpemUoKXtyZXR1cm4galF1ZXJ5LnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSk7fSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbiBzZXJpYWxpemVBcnJheSgpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpey8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcbnZhciBlbGVtZW50cz1qUXVlcnkucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGVsZW1lbnRzP2pRdWVyeS5tYWtlQXJyYXkoZWxlbWVudHMpOnRoaXM7fSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIHR5cGU9dGhpcy50eXBlOy8vIFVzZSAuaXMoIFwiOmRpc2FibGVkXCIgKSBzbyB0aGF0IGZpZWxkc2V0W2Rpc2FibGVkXSB3b3Jrc1xucmV0dXJuIHRoaXMubmFtZSYmIWpRdWVyeSh0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmcnN1Ym1pdHRhYmxlLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFyc3VibWl0dGVyVHlwZXMudGVzdCh0eXBlKSYmKHRoaXMuY2hlY2tlZHx8IXJjaGVja2FibGVUeXBlLnRlc3QodHlwZSkpO30pLm1hcChmdW5jdGlvbihpLGVsZW0pe3ZhciB2YWw9alF1ZXJ5KHRoaXMpLnZhbCgpO2lmKHZhbD09bnVsbCl7cmV0dXJuIG51bGw7fWlmKGpRdWVyeS5pc0FycmF5KHZhbCkpe3JldHVybiBqUXVlcnkubWFwKHZhbCxmdW5jdGlvbih2YWwpe3JldHVybntuYW1lOmVsZW0ubmFtZSx2YWx1ZTp2YWwucmVwbGFjZShyQ1JMRixcIlxcclxcblwiKX07fSk7fXJldHVybntuYW1lOmVsZW0ubmFtZSx2YWx1ZTp2YWwucmVwbGFjZShyQ1JMRixcIlxcclxcblwiKX07fSkuZ2V0KCk7fX0pO3ZhciByMjA9LyUyMC9nLHJoYXNoPS8jLiokLyxyYW50aUNhY2hlPS8oWz8mXSlfPVteJl0qLyxyaGVhZGVycz0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL21nLC8vICM3NjUzLCAjODEyNSwgIzgxNTI6IGxvY2FsIHByb3RvY29sIGRldGVjdGlvblxucmxvY2FsUHJvdG9jb2w9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8scm5vQ29udGVudD0vXig/OkdFVHxIRUFEKSQvLHJwcm90b2NvbD0vXlxcL1xcLy8sLyogUHJlZmlsdGVyc1xuXHQgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuXHQgKiAyKSBUaGVzZSBhcmUgY2FsbGVkOlxuXHQgKiAgICAtIEJFRk9SRSBhc2tpbmcgZm9yIGEgdHJhbnNwb3J0XG5cdCAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcblx0ICogMykga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiA0KSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL3ByZWZpbHRlcnM9e30sLyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuXHQgKiAxKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDIpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL3RyYW5zcG9ydHM9e30sLy8gQXZvaWQgY29tbWVudC1wcm9sb2cgY2hhciBzZXF1ZW5jZSAoIzEwMDk4KTsgbXVzdCBhcHBlYXNlIGxpbnQgYW5kIGV2YWRlIGNvbXByZXNzaW9uXG5hbGxUeXBlcz1cIiovXCIuY29uY2F0KFwiKlwiKSwvLyBBbmNob3IgdGFnIGZvciBwYXJzaW5nIHRoZSBkb2N1bWVudCBvcmlnaW5cbm9yaWdpbkFuY2hvcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtvcmlnaW5BbmNob3IuaHJlZj1sb2NhdGlvbi5ocmVmOy8vIEJhc2UgXCJjb25zdHJ1Y3RvclwiIGZvciBqUXVlcnkuYWpheFByZWZpbHRlciBhbmQgalF1ZXJ5LmFqYXhUcmFuc3BvcnRcbmZ1bmN0aW9uIGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyhzdHJ1Y3R1cmUpey8vIGRhdGFUeXBlRXhwcmVzc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIqXCJcbnJldHVybiBmdW5jdGlvbihkYXRhVHlwZUV4cHJlc3Npb24sZnVuYyl7aWYodHlwZW9mIGRhdGFUeXBlRXhwcmVzc2lvbiE9PVwic3RyaW5nXCIpe2Z1bmM9ZGF0YVR5cGVFeHByZXNzaW9uO2RhdGFUeXBlRXhwcmVzc2lvbj1cIipcIjt9dmFyIGRhdGFUeXBlLGk9MCxkYXRhVHlwZXM9ZGF0YVR5cGVFeHByZXNzaW9uLnRvTG93ZXJDYXNlKCkubWF0Y2gocm5vdGh0bWx3aGl0ZSl8fFtdO2lmKGpRdWVyeS5pc0Z1bmN0aW9uKGZ1bmMpKXsvLyBGb3IgZWFjaCBkYXRhVHlwZSBpbiB0aGUgZGF0YVR5cGVFeHByZXNzaW9uXG53aGlsZShkYXRhVHlwZT1kYXRhVHlwZXNbaSsrXSl7Ly8gUHJlcGVuZCBpZiByZXF1ZXN0ZWRcbmlmKGRhdGFUeXBlWzBdPT09XCIrXCIpe2RhdGFUeXBlPWRhdGFUeXBlLnNsaWNlKDEpfHxcIipcIjsoc3RydWN0dXJlW2RhdGFUeXBlXT1zdHJ1Y3R1cmVbZGF0YVR5cGVdfHxbXSkudW5zaGlmdChmdW5jKTsvLyBPdGhlcndpc2UgYXBwZW5kXG59ZWxzZXsoc3RydWN0dXJlW2RhdGFUeXBlXT1zdHJ1Y3R1cmVbZGF0YVR5cGVdfHxbXSkucHVzaChmdW5jKTt9fX19O30vLyBCYXNlIGluc3BlY3Rpb24gZnVuY3Rpb24gZm9yIHByZWZpbHRlcnMgYW5kIHRyYW5zcG9ydHNcbmZ1bmN0aW9uIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHN0cnVjdHVyZSxvcHRpb25zLG9yaWdpbmFsT3B0aW9ucyxqcVhIUil7dmFyIGluc3BlY3RlZD17fSxzZWVraW5nVHJhbnNwb3J0PXN0cnVjdHVyZT09PXRyYW5zcG9ydHM7ZnVuY3Rpb24gaW5zcGVjdChkYXRhVHlwZSl7dmFyIHNlbGVjdGVkO2luc3BlY3RlZFtkYXRhVHlwZV09dHJ1ZTtqUXVlcnkuZWFjaChzdHJ1Y3R1cmVbZGF0YVR5cGVdfHxbXSxmdW5jdGlvbihfLHByZWZpbHRlck9yRmFjdG9yeSl7dmFyIGRhdGFUeXBlT3JUcmFuc3BvcnQ9cHJlZmlsdGVyT3JGYWN0b3J5KG9wdGlvbnMsb3JpZ2luYWxPcHRpb25zLGpxWEhSKTtpZih0eXBlb2YgZGF0YVR5cGVPclRyYW5zcG9ydD09PVwic3RyaW5nXCImJiFzZWVraW5nVHJhbnNwb3J0JiYhaW5zcGVjdGVkW2RhdGFUeXBlT3JUcmFuc3BvcnRdKXtvcHRpb25zLmRhdGFUeXBlcy51bnNoaWZ0KGRhdGFUeXBlT3JUcmFuc3BvcnQpO2luc3BlY3QoZGF0YVR5cGVPclRyYW5zcG9ydCk7cmV0dXJuIGZhbHNlO31lbHNlIGlmKHNlZWtpbmdUcmFuc3BvcnQpe3JldHVybiEoc2VsZWN0ZWQ9ZGF0YVR5cGVPclRyYW5zcG9ydCk7fX0pO3JldHVybiBzZWxlY3RlZDt9cmV0dXJuIGluc3BlY3Qob3B0aW9ucy5kYXRhVHlwZXNbMF0pfHwhaW5zcGVjdGVkW1wiKlwiXSYmaW5zcGVjdChcIipcIik7fS8vIEEgc3BlY2lhbCBleHRlbmQgZm9yIGFqYXggb3B0aW9uc1xuLy8gdGhhdCB0YWtlcyBcImZsYXRcIiBvcHRpb25zIChub3QgdG8gYmUgZGVlcCBleHRlbmRlZClcbi8vIEZpeGVzICM5ODg3XG5mdW5jdGlvbiBhamF4RXh0ZW5kKHRhcmdldCxzcmMpe3ZhciBrZXksZGVlcCxmbGF0T3B0aW9ucz1qUXVlcnkuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3Ioa2V5IGluIHNyYyl7aWYoc3JjW2tleV0hPT11bmRlZmluZWQpeyhmbGF0T3B0aW9uc1trZXldP3RhcmdldDpkZWVwfHwoZGVlcD17fSkpW2tleV09c3JjW2tleV07fX1pZihkZWVwKXtqUXVlcnkuZXh0ZW5kKHRydWUsdGFyZ2V0LGRlZXApO31yZXR1cm4gdGFyZ2V0O30vKiBIYW5kbGVzIHJlc3BvbnNlcyB0byBhbiBhamF4IHJlcXVlc3Q6XG4gKiAtIGZpbmRzIHRoZSByaWdodCBkYXRhVHlwZSAobWVkaWF0ZXMgYmV0d2VlbiBjb250ZW50LXR5cGUgYW5kIGV4cGVjdGVkIGRhdGFUeXBlKVxuICogLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG4gKi9mdW5jdGlvbiBhamF4SGFuZGxlUmVzcG9uc2VzKHMsanFYSFIscmVzcG9uc2VzKXt2YXIgY3QsdHlwZSxmaW5hbERhdGFUeXBlLGZpcnN0RGF0YVR5cGUsY29udGVudHM9cy5jb250ZW50cyxkYXRhVHlwZXM9cy5kYXRhVHlwZXM7Ly8gUmVtb3ZlIGF1dG8gZGF0YVR5cGUgYW5kIGdldCBjb250ZW50LXR5cGUgaW4gdGhlIHByb2Nlc3NcbndoaWxlKGRhdGFUeXBlc1swXT09PVwiKlwiKXtkYXRhVHlwZXMuc2hpZnQoKTtpZihjdD09PXVuZGVmaW5lZCl7Y3Q9cy5taW1lVHlwZXx8anFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7fX0vLyBDaGVjayBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggYSBrbm93biBjb250ZW50LXR5cGVcbmlmKGN0KXtmb3IodHlwZSBpbiBjb250ZW50cyl7aWYoY29udGVudHNbdHlwZV0mJmNvbnRlbnRzW3R5cGVdLnRlc3QoY3QpKXtkYXRhVHlwZXMudW5zaGlmdCh0eXBlKTticmVhazt9fX0vLyBDaGVjayB0byBzZWUgaWYgd2UgaGF2ZSBhIHJlc3BvbnNlIGZvciB0aGUgZXhwZWN0ZWQgZGF0YVR5cGVcbmlmKGRhdGFUeXBlc1swXWluIHJlc3BvbnNlcyl7ZmluYWxEYXRhVHlwZT1kYXRhVHlwZXNbMF07fWVsc2V7Ly8gVHJ5IGNvbnZlcnRpYmxlIGRhdGFUeXBlc1xuZm9yKHR5cGUgaW4gcmVzcG9uc2VzKXtpZighZGF0YVR5cGVzWzBdfHxzLmNvbnZlcnRlcnNbdHlwZStcIiBcIitkYXRhVHlwZXNbMF1dKXtmaW5hbERhdGFUeXBlPXR5cGU7YnJlYWs7fWlmKCFmaXJzdERhdGFUeXBlKXtmaXJzdERhdGFUeXBlPXR5cGU7fX0vLyBPciBqdXN0IHVzZSBmaXJzdCBvbmVcbmZpbmFsRGF0YVR5cGU9ZmluYWxEYXRhVHlwZXx8Zmlyc3REYXRhVHlwZTt9Ly8gSWYgd2UgZm91bmQgYSBkYXRhVHlwZVxuLy8gV2UgYWRkIHRoZSBkYXRhVHlwZSB0byB0aGUgbGlzdCBpZiBuZWVkZWRcbi8vIGFuZCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbmlmKGZpbmFsRGF0YVR5cGUpe2lmKGZpbmFsRGF0YVR5cGUhPT1kYXRhVHlwZXNbMF0pe2RhdGFUeXBlcy51bnNoaWZ0KGZpbmFsRGF0YVR5cGUpO31yZXR1cm4gcmVzcG9uc2VzW2ZpbmFsRGF0YVR5cGVdO319LyogQ2hhaW4gY29udmVyc2lvbnMgZ2l2ZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBvcmlnaW5hbCByZXNwb25zZVxuICogQWxzbyBzZXRzIHRoZSByZXNwb25zZVhYWCBmaWVsZHMgb24gdGhlIGpxWEhSIGluc3RhbmNlXG4gKi9mdW5jdGlvbiBhamF4Q29udmVydChzLHJlc3BvbnNlLGpxWEhSLGlzU3VjY2Vzcyl7dmFyIGNvbnYyLGN1cnJlbnQsY29udix0bXAscHJldixjb252ZXJ0ZXJzPXt9LC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cbmRhdGFUeXBlcz1zLmRhdGFUeXBlcy5zbGljZSgpOy8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuaWYoZGF0YVR5cGVzWzFdKXtmb3IoY29udiBpbiBzLmNvbnZlcnRlcnMpe2NvbnZlcnRlcnNbY29udi50b0xvd2VyQ2FzZSgpXT1zLmNvbnZlcnRlcnNbY29udl07fX1jdXJyZW50PWRhdGFUeXBlcy5zaGlmdCgpOy8vIENvbnZlcnQgdG8gZWFjaCBzZXF1ZW50aWFsIGRhdGFUeXBlXG53aGlsZShjdXJyZW50KXtpZihzLnJlc3BvbnNlRmllbGRzW2N1cnJlbnRdKXtqcVhIUltzLnJlc3BvbnNlRmllbGRzW2N1cnJlbnRdXT1yZXNwb25zZTt9Ly8gQXBwbHkgdGhlIGRhdGFGaWx0ZXIgaWYgcHJvdmlkZWRcbmlmKCFwcmV2JiZpc1N1Y2Nlc3MmJnMuZGF0YUZpbHRlcil7cmVzcG9uc2U9cy5kYXRhRmlsdGVyKHJlc3BvbnNlLHMuZGF0YVR5cGUpO31wcmV2PWN1cnJlbnQ7Y3VycmVudD1kYXRhVHlwZXMuc2hpZnQoKTtpZihjdXJyZW50KXsvLyBUaGVyZSdzIG9ubHkgd29yayB0byBkbyBpZiBjdXJyZW50IGRhdGFUeXBlIGlzIG5vbi1hdXRvXG5pZihjdXJyZW50PT09XCIqXCIpe2N1cnJlbnQ9cHJldjsvLyBDb252ZXJ0IHJlc3BvbnNlIGlmIHByZXYgZGF0YVR5cGUgaXMgbm9uLWF1dG8gYW5kIGRpZmZlcnMgZnJvbSBjdXJyZW50XG59ZWxzZSBpZihwcmV2IT09XCIqXCImJnByZXYhPT1jdXJyZW50KXsvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxuY29udj1jb252ZXJ0ZXJzW3ByZXYrXCIgXCIrY3VycmVudF18fGNvbnZlcnRlcnNbXCIqIFwiK2N1cnJlbnRdOy8vIElmIG5vbmUgZm91bmQsIHNlZWsgYSBwYWlyXG5pZighY29udil7Zm9yKGNvbnYyIGluIGNvbnZlcnRlcnMpey8vIElmIGNvbnYyIG91dHB1dHMgY3VycmVudFxudG1wPWNvbnYyLnNwbGl0KFwiIFwiKTtpZih0bXBbMV09PT1jdXJyZW50KXsvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcbmNvbnY9Y29udmVydGVyc1twcmV2K1wiIFwiK3RtcFswXV18fGNvbnZlcnRlcnNbXCIqIFwiK3RtcFswXV07aWYoY29udil7Ly8gQ29uZGVuc2UgZXF1aXZhbGVuY2UgY29udmVydGVyc1xuaWYoY29udj09PXRydWUpe2NvbnY9Y29udmVydGVyc1tjb252Ml07Ly8gT3RoZXJ3aXNlLCBpbnNlcnQgdGhlIGludGVybWVkaWF0ZSBkYXRhVHlwZVxufWVsc2UgaWYoY29udmVydGVyc1tjb252Ml0hPT10cnVlKXtjdXJyZW50PXRtcFswXTtkYXRhVHlwZXMudW5zaGlmdCh0bXBbMV0pO31icmVhazt9fX19Ly8gQXBwbHkgY29udmVydGVyIChpZiBub3QgYW4gZXF1aXZhbGVuY2UpXG5pZihjb252IT09dHJ1ZSl7Ly8gVW5sZXNzIGVycm9ycyBhcmUgYWxsb3dlZCB0byBidWJibGUsIGNhdGNoIGFuZCByZXR1cm4gdGhlbVxuaWYoY29udiYmcy50aHJvd3Mpe3Jlc3BvbnNlPWNvbnYocmVzcG9uc2UpO31lbHNle3RyeXtyZXNwb25zZT1jb252KHJlc3BvbnNlKTt9Y2F0Y2goZSl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpjb252P2U6XCJObyBjb252ZXJzaW9uIGZyb20gXCIrcHJlditcIiB0byBcIitjdXJyZW50fTt9fX19fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpyZXNwb25zZX07fWpRdWVyeS5leHRlbmQoey8vIENvdW50ZXIgZm9yIGhvbGRpbmcgdGhlIG51bWJlciBvZiBhY3RpdmUgcXVlcmllc1xuYWN0aXZlOjAsLy8gTGFzdC1Nb2RpZmllZCBoZWFkZXIgY2FjaGUgZm9yIG5leHQgcmVxdWVzdFxubGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6bG9jYXRpb24uaHJlZix0eXBlOlwiR0VUXCIsaXNMb2NhbDpybG9jYWxQcm90b2NvbC50ZXN0KGxvY2F0aW9uLnByb3RvY29sKSxnbG9iYWw6dHJ1ZSxwcm9jZXNzRGF0YTp0cnVlLGFzeW5jOnRydWUsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIiwvKlxuXHRcdHRpbWVvdXQ6IDAsXG5cdFx0ZGF0YTogbnVsbCxcblx0XHRkYXRhVHlwZTogbnVsbCxcblx0XHR1c2VybmFtZTogbnVsbCxcblx0XHRwYXNzd29yZDogbnVsbCxcblx0XHRjYWNoZTogbnVsbCxcblx0XHR0aHJvd3M6IGZhbHNlLFxuXHRcdHRyYWRpdGlvbmFsOiBmYWxzZSxcblx0XHRoZWFkZXJzOiB7fSxcblx0XHQqL2FjY2VwdHM6e1wiKlwiOmFsbFR5cGVzLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LC8vIERhdGEgY29udmVydGVyc1xuLy8gS2V5cyBzZXBhcmF0ZSBzb3VyY2UgKG9yIGNhdGNoYWxsIFwiKlwiKSBhbmQgZGVzdGluYXRpb24gdHlwZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuY29udmVydGVyczp7Ly8gQ29udmVydCBhbnl0aGluZyB0byB0ZXh0XG5cIiogdGV4dFwiOlN0cmluZywvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcblwidGV4dCBodG1sXCI6dHJ1ZSwvLyBFdmFsdWF0ZSB0ZXh0IGFzIGEganNvbiBleHByZXNzaW9uXG5cInRleHQganNvblwiOkpTT04ucGFyc2UsLy8gUGFyc2UgdGV4dCBhcyB4bWxcblwidGV4dCB4bWxcIjpqUXVlcnkucGFyc2VYTUx9LC8vIEZvciBvcHRpb25zIHRoYXQgc2hvdWxkbid0IGJlIGRlZXAgZXh0ZW5kZWQ6XG4vLyB5b3UgY2FuIGFkZCB5b3VyIG93biBjdXN0b20gb3B0aW9ucyBoZXJlIGlmXG4vLyBhbmQgd2hlbiB5b3UgY3JlYXRlIG9uZSB0aGF0IHNob3VsZG4ndCBiZVxuLy8gZGVlcCBleHRlbmRlZCAoc2VlIGFqYXhFeHRlbmQpXG5mbGF0T3B0aW9uczp7dXJsOnRydWUsY29udGV4dDp0cnVlfX0sLy8gQ3JlYXRlcyBhIGZ1bGwgZmxlZGdlZCBzZXR0aW5ncyBvYmplY3QgaW50byB0YXJnZXRcbi8vIHdpdGggYm90aCBhamF4U2V0dGluZ3MgYW5kIHNldHRpbmdzIGZpZWxkcy5cbi8vIElmIHRhcmdldCBpcyBvbWl0dGVkLCB3cml0ZXMgaW50byBhamF4U2V0dGluZ3MuXG5hamF4U2V0dXA6ZnVuY3Rpb24gYWpheFNldHVwKHRhcmdldCxzZXR0aW5ncyl7cmV0dXJuIHNldHRpbmdzPy8vIEJ1aWxkaW5nIGEgc2V0dGluZ3Mgb2JqZWN0XG5hamF4RXh0ZW5kKGFqYXhFeHRlbmQodGFyZ2V0LGpRdWVyeS5hamF4U2V0dGluZ3MpLHNldHRpbmdzKTovLyBFeHRlbmRpbmcgYWpheFNldHRpbmdzXG5hamF4RXh0ZW5kKGpRdWVyeS5hamF4U2V0dGluZ3MsdGFyZ2V0KTt9LGFqYXhQcmVmaWx0ZXI6YWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHByZWZpbHRlcnMpLGFqYXhUcmFuc3BvcnQ6YWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHRyYW5zcG9ydHMpLC8vIE1haW4gbWV0aG9kXG5hamF4OmZ1bmN0aW9uIGFqYXgodXJsLG9wdGlvbnMpey8vIElmIHVybCBpcyBhbiBvYmplY3QsIHNpbXVsYXRlIHByZS0xLjUgc2lnbmF0dXJlXG5pZigodHlwZW9mIHVybD09PVwidW5kZWZpbmVkXCI/XCJ1bmRlZmluZWRcIjpfdHlwZW9mKHVybCkpPT09XCJvYmplY3RcIil7b3B0aW9ucz11cmw7dXJsPXVuZGVmaW5lZDt9Ly8gRm9yY2Ugb3B0aW9ucyB0byBiZSBhbiBvYmplY3Rcbm9wdGlvbnM9b3B0aW9uc3x8e307dmFyIHRyYW5zcG9ydCwvLyBVUkwgd2l0aG91dCBhbnRpLWNhY2hlIHBhcmFtXG5jYWNoZVVSTCwvLyBSZXNwb25zZSBoZWFkZXJzXG5yZXNwb25zZUhlYWRlcnNTdHJpbmcscmVzcG9uc2VIZWFkZXJzLC8vIHRpbWVvdXQgaGFuZGxlXG50aW1lb3V0VGltZXIsLy8gVXJsIGNsZWFudXAgdmFyXG51cmxBbmNob3IsLy8gUmVxdWVzdCBzdGF0ZSAoYmVjb21lcyBmYWxzZSB1cG9uIHNlbmQgYW5kIHRydWUgdXBvbiBjb21wbGV0aW9uKVxuY29tcGxldGVkLC8vIFRvIGtub3cgaWYgZ2xvYmFsIGV2ZW50cyBhcmUgdG8gYmUgZGlzcGF0Y2hlZFxuZmlyZUdsb2JhbHMsLy8gTG9vcCB2YXJpYWJsZVxuaSwvLyB1bmNhY2hlZCBwYXJ0IG9mIHRoZSB1cmxcbnVuY2FjaGVkLC8vIENyZWF0ZSB0aGUgZmluYWwgb3B0aW9ucyBvYmplY3RcbnM9alF1ZXJ5LmFqYXhTZXR1cCh7fSxvcHRpb25zKSwvLyBDYWxsYmFja3MgY29udGV4dFxuY2FsbGJhY2tDb250ZXh0PXMuY29udGV4dHx8cywvLyBDb250ZXh0IGZvciBnbG9iYWwgZXZlbnRzIGlzIGNhbGxiYWNrQ29udGV4dCBpZiBpdCBpcyBhIERPTSBub2RlIG9yIGpRdWVyeSBjb2xsZWN0aW9uXG5nbG9iYWxFdmVudENvbnRleHQ9cy5jb250ZXh0JiYoY2FsbGJhY2tDb250ZXh0Lm5vZGVUeXBlfHxjYWxsYmFja0NvbnRleHQuanF1ZXJ5KT9qUXVlcnkoY2FsbGJhY2tDb250ZXh0KTpqUXVlcnkuZXZlbnQsLy8gRGVmZXJyZWRzXG5kZWZlcnJlZD1qUXVlcnkuRGVmZXJyZWQoKSxjb21wbGV0ZURlZmVycmVkPWpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuX3N0YXR1c0NvZGU9cy5zdGF0dXNDb2RlfHx7fSwvLyBIZWFkZXJzICh0aGV5IGFyZSBzZW50IGFsbCBhdCBvbmNlKVxucmVxdWVzdEhlYWRlcnM9e30scmVxdWVzdEhlYWRlcnNOYW1lcz17fSwvLyBEZWZhdWx0IGFib3J0IG1lc3NhZ2VcbnN0ckFib3J0PVwiY2FuY2VsZWRcIiwvLyBGYWtlIHhoclxuanFYSFI9e3JlYWR5U3RhdGU6MCwvLyBCdWlsZHMgaGVhZGVycyBoYXNodGFibGUgaWYgbmVlZGVkXG5nZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbiBnZXRSZXNwb25zZUhlYWRlcihrZXkpe3ZhciBtYXRjaDtpZihjb21wbGV0ZWQpe2lmKCFyZXNwb25zZUhlYWRlcnMpe3Jlc3BvbnNlSGVhZGVycz17fTt3aGlsZShtYXRjaD1yaGVhZGVycy5leGVjKHJlc3BvbnNlSGVhZGVyc1N0cmluZykpe3Jlc3BvbnNlSGVhZGVyc1ttYXRjaFsxXS50b0xvd2VyQ2FzZSgpXT1tYXRjaFsyXTt9fW1hdGNoPXJlc3BvbnNlSGVhZGVyc1trZXkudG9Mb3dlckNhc2UoKV07fXJldHVybiBtYXRjaD09bnVsbD9udWxsOm1hdGNoO30sLy8gUmF3IHN0cmluZ1xuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uIGdldEFsbFJlc3BvbnNlSGVhZGVycygpe3JldHVybiBjb21wbGV0ZWQ/cmVzcG9uc2VIZWFkZXJzU3RyaW5nOm51bGw7fSwvLyBDYWNoZXMgdGhlIGhlYWRlclxuc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKG5hbWUsdmFsdWUpe2lmKGNvbXBsZXRlZD09bnVsbCl7bmFtZT1yZXF1ZXN0SGVhZGVyc05hbWVzW25hbWUudG9Mb3dlckNhc2UoKV09cmVxdWVzdEhlYWRlcnNOYW1lc1tuYW1lLnRvTG93ZXJDYXNlKCldfHxuYW1lO3JlcXVlc3RIZWFkZXJzW25hbWVdPXZhbHVlO31yZXR1cm4gdGhpczt9LC8vIE92ZXJyaWRlcyByZXNwb25zZSBjb250ZW50LXR5cGUgaGVhZGVyXG5vdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uIG92ZXJyaWRlTWltZVR5cGUodHlwZSl7aWYoY29tcGxldGVkPT1udWxsKXtzLm1pbWVUeXBlPXR5cGU7fXJldHVybiB0aGlzO30sLy8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3NcbnN0YXR1c0NvZGU6ZnVuY3Rpb24gc3RhdHVzQ29kZShtYXApe3ZhciBjb2RlO2lmKG1hcCl7aWYoY29tcGxldGVkKXsvLyBFeGVjdXRlIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja3NcbmpxWEhSLmFsd2F5cyhtYXBbanFYSFIuc3RhdHVzXSk7fWVsc2V7Ly8gTGF6eS1hZGQgdGhlIG5ldyBjYWxsYmFja3MgaW4gYSB3YXkgdGhhdCBwcmVzZXJ2ZXMgb2xkIG9uZXNcbmZvcihjb2RlIGluIG1hcCl7X3N0YXR1c0NvZGVbY29kZV09W19zdGF0dXNDb2RlW2NvZGVdLG1hcFtjb2RlXV07fX19cmV0dXJuIHRoaXM7fSwvLyBDYW5jZWwgdGhlIHJlcXVlc3RcbmFib3J0OmZ1bmN0aW9uIGFib3J0KHN0YXR1c1RleHQpe3ZhciBmaW5hbFRleHQ9c3RhdHVzVGV4dHx8c3RyQWJvcnQ7aWYodHJhbnNwb3J0KXt0cmFuc3BvcnQuYWJvcnQoZmluYWxUZXh0KTt9ZG9uZSgwLGZpbmFsVGV4dCk7cmV0dXJuIHRoaXM7fX07Ly8gQXR0YWNoIGRlZmVycmVkc1xuZGVmZXJyZWQucHJvbWlzZShqcVhIUik7Ly8gQWRkIHByb3RvY29sIGlmIG5vdCBwcm92aWRlZCAocHJlZmlsdGVycyBtaWdodCBleHBlY3QgaXQpXG4vLyBIYW5kbGUgZmFsc3kgdXJsIGluIHRoZSBzZXR0aW5ncyBvYmplY3QgKCMxMDA5MzogY29uc2lzdGVuY3kgd2l0aCBvbGQgc2lnbmF0dXJlKVxuLy8gV2UgYWxzbyB1c2UgdGhlIHVybCBwYXJhbWV0ZXIgaWYgYXZhaWxhYmxlXG5zLnVybD0oKHVybHx8cy51cmx8fGxvY2F0aW9uLmhyZWYpK1wiXCIpLnJlcGxhY2UocnByb3RvY29sLGxvY2F0aW9uLnByb3RvY29sK1wiLy9cIik7Ly8gQWxpYXMgbWV0aG9kIG9wdGlvbiB0byB0eXBlIGFzIHBlciB0aWNrZXQgIzEyMDA0XG5zLnR5cGU9b3B0aW9ucy5tZXRob2R8fG9wdGlvbnMudHlwZXx8cy5tZXRob2R8fHMudHlwZTsvLyBFeHRyYWN0IGRhdGFUeXBlcyBsaXN0XG5zLmRhdGFUeXBlcz0ocy5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2gocm5vdGh0bWx3aGl0ZSl8fFtcIlwiXTsvLyBBIGNyb3NzLWRvbWFpbiByZXF1ZXN0IGlzIGluIG9yZGVyIHdoZW4gdGhlIG9yaWdpbiBkb2Vzbid0IG1hdGNoIHRoZSBjdXJyZW50IG9yaWdpbi5cbmlmKHMuY3Jvc3NEb21haW49PW51bGwpe3VybEFuY2hvcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTsvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSwgRWRnZSAxMiAtIDEzXG4vLyBJRSB0aHJvd3MgZXhjZXB0aW9uIG9uIGFjY2Vzc2luZyB0aGUgaHJlZiBwcm9wZXJ0eSBpZiB1cmwgaXMgbWFsZm9ybWVkLFxuLy8gZS5nLiBodHRwOi8vZXhhbXBsZS5jb206ODB4L1xudHJ5e3VybEFuY2hvci5ocmVmPXMudXJsOy8vIFN1cHBvcnQ6IElFIDw9OCAtIDExIG9ubHlcbi8vIEFuY2hvcidzIGhvc3QgcHJvcGVydHkgaXNuJ3QgY29ycmVjdGx5IHNldCB3aGVuIHMudXJsIGlzIHJlbGF0aXZlXG51cmxBbmNob3IuaHJlZj11cmxBbmNob3IuaHJlZjtzLmNyb3NzRG9tYWluPW9yaWdpbkFuY2hvci5wcm90b2NvbCtcIi8vXCIrb3JpZ2luQW5jaG9yLmhvc3QhPT11cmxBbmNob3IucHJvdG9jb2wrXCIvL1wiK3VybEFuY2hvci5ob3N0O31jYXRjaChlKXsvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciBwYXJzaW5nIHRoZSBVUkwsIGFzc3VtZSBpdCBpcyBjcm9zc0RvbWFpbixcbi8vIGl0IGNhbiBiZSByZWplY3RlZCBieSB0aGUgdHJhbnNwb3J0IGlmIGl0IGlzIGludmFsaWRcbnMuY3Jvc3NEb21haW49dHJ1ZTt9fS8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuaWYocy5kYXRhJiZzLnByb2Nlc3NEYXRhJiZ0eXBlb2Ygcy5kYXRhIT09XCJzdHJpbmdcIil7cy5kYXRhPWpRdWVyeS5wYXJhbShzLmRhdGEscy50cmFkaXRpb25hbCk7fS8vIEFwcGx5IHByZWZpbHRlcnNcbmluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHByZWZpbHRlcnMscyxvcHRpb25zLGpxWEhSKTsvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhIHByZWZpbHRlciwgc3RvcCB0aGVyZVxuaWYoY29tcGxldGVkKXtyZXR1cm4ganFYSFI7fS8vIFdlIGNhbiBmaXJlIGdsb2JhbCBldmVudHMgYXMgb2Ygbm93IGlmIGFza2VkIHRvXG4vLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAoIzE1MTE4KVxuZmlyZUdsb2JhbHM9alF1ZXJ5LmV2ZW50JiZzLmdsb2JhbDsvLyBXYXRjaCBmb3IgYSBuZXcgc2V0IG9mIHJlcXVlc3RzXG5pZihmaXJlR2xvYmFscyYmalF1ZXJ5LmFjdGl2ZSsrPT09MCl7alF1ZXJ5LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIik7fS8vIFVwcGVyY2FzZSB0aGUgdHlwZVxucy50eXBlPXMudHlwZS50b1VwcGVyQ2FzZSgpOy8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG5zLmhhc0NvbnRlbnQ9IXJub0NvbnRlbnQudGVzdChzLnR5cGUpOy8vIFNhdmUgdGhlIFVSTCBpbiBjYXNlIHdlJ3JlIHRveWluZyB3aXRoIHRoZSBJZi1Nb2RpZmllZC1TaW5jZVxuLy8gYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyIGxhdGVyIG9uXG4vLyBSZW1vdmUgaGFzaCB0byBzaW1wbGlmeSB1cmwgbWFuaXB1bGF0aW9uXG5jYWNoZVVSTD1zLnVybC5yZXBsYWNlKHJoYXNoLFwiXCIpOy8vIE1vcmUgb3B0aW9ucyBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBubyBjb250ZW50XG5pZighcy5oYXNDb250ZW50KXsvLyBSZW1lbWJlciB0aGUgaGFzaCBzbyB3ZSBjYW4gcHV0IGl0IGJhY2tcbnVuY2FjaGVkPXMudXJsLnNsaWNlKGNhY2hlVVJMLmxlbmd0aCk7Ly8gSWYgZGF0YSBpcyBhdmFpbGFibGUsIGFwcGVuZCBkYXRhIHRvIHVybFxuaWYocy5kYXRhKXtjYWNoZVVSTCs9KHJxdWVyeS50ZXN0KGNhY2hlVVJMKT9cIiZcIjpcIj9cIikrcy5kYXRhOy8vICM5NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcbmRlbGV0ZSBzLmRhdGE7fS8vIEFkZCBvciB1cGRhdGUgYW50aS1jYWNoZSBwYXJhbSBpZiBuZWVkZWRcbmlmKHMuY2FjaGU9PT1mYWxzZSl7Y2FjaGVVUkw9Y2FjaGVVUkwucmVwbGFjZShyYW50aUNhY2hlLFwiJDFcIik7dW5jYWNoZWQ9KHJxdWVyeS50ZXN0KGNhY2hlVVJMKT9cIiZcIjpcIj9cIikrXCJfPVwiK25vbmNlKysgK3VuY2FjaGVkO30vLyBQdXQgaGFzaCBhbmQgYW50aS1jYWNoZSBvbiB0aGUgVVJMIHRoYXQgd2lsbCBiZSByZXF1ZXN0ZWQgKGdoLTE3MzIpXG5zLnVybD1jYWNoZVVSTCt1bmNhY2hlZDsvLyBDaGFuZ2UgJyUyMCcgdG8gJysnIGlmIHRoaXMgaXMgZW5jb2RlZCBmb3JtIGJvZHkgY29udGVudCAoZ2gtMjY1OClcbn1lbHNlIGlmKHMuZGF0YSYmcy5wcm9jZXNzRGF0YSYmKHMuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik9PT0wKXtzLmRhdGE9cy5kYXRhLnJlcGxhY2UocjIwLFwiK1wiKTt9Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cbmlmKHMuaWZNb2RpZmllZCl7aWYoalF1ZXJ5Lmxhc3RNb2RpZmllZFtjYWNoZVVSTF0pe2pxWEhSLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLGpRdWVyeS5sYXN0TW9kaWZpZWRbY2FjaGVVUkxdKTt9aWYoalF1ZXJ5LmV0YWdbY2FjaGVVUkxdKXtqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLGpRdWVyeS5ldGFnW2NhY2hlVVJMXSk7fX0vLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcbmlmKHMuZGF0YSYmcy5oYXNDb250ZW50JiZzLmNvbnRlbnRUeXBlIT09ZmFsc2V8fG9wdGlvbnMuY29udGVudFR5cGUpe2pxWEhSLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixzLmNvbnRlbnRUeXBlKTt9Ly8gU2V0IHRoZSBBY2NlcHRzIGhlYWRlciBmb3IgdGhlIHNlcnZlciwgZGVwZW5kaW5nIG9uIHRoZSBkYXRhVHlwZVxuanFYSFIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHMuZGF0YVR5cGVzWzBdJiZzLmFjY2VwdHNbcy5kYXRhVHlwZXNbMF1dP3MuYWNjZXB0c1tzLmRhdGFUeXBlc1swXV0rKHMuZGF0YVR5cGVzWzBdIT09XCIqXCI/XCIsIFwiK2FsbFR5cGVzK1wiOyBxPTAuMDFcIjpcIlwiKTpzLmFjY2VwdHNbXCIqXCJdKTsvLyBDaGVjayBmb3IgaGVhZGVycyBvcHRpb25cbmZvcihpIGluIHMuaGVhZGVycyl7anFYSFIuc2V0UmVxdWVzdEhlYWRlcihpLHMuaGVhZGVyc1tpXSk7fS8vIEFsbG93IGN1c3RvbSBoZWFkZXJzL21pbWV0eXBlcyBhbmQgZWFybHkgYWJvcnRcbmlmKHMuYmVmb3JlU2VuZCYmKHMuYmVmb3JlU2VuZC5jYWxsKGNhbGxiYWNrQ29udGV4dCxqcVhIUixzKT09PWZhbHNlfHxjb21wbGV0ZWQpKXsvLyBBYm9ydCBpZiBub3QgZG9uZSBhbHJlYWR5IGFuZCByZXR1cm5cbnJldHVybiBqcVhIUi5hYm9ydCgpO30vLyBBYm9ydGluZyBpcyBubyBsb25nZXIgYSBjYW5jZWxsYXRpb25cbnN0ckFib3J0PVwiYWJvcnRcIjsvLyBJbnN0YWxsIGNhbGxiYWNrcyBvbiBkZWZlcnJlZHNcbmNvbXBsZXRlRGVmZXJyZWQuYWRkKHMuY29tcGxldGUpO2pxWEhSLmRvbmUocy5zdWNjZXNzKTtqcVhIUi5mYWlsKHMuZXJyb3IpOy8vIEdldCB0cmFuc3BvcnRcbnRyYW5zcG9ydD1pbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyh0cmFuc3BvcnRzLHMsb3B0aW9ucyxqcVhIUik7Ly8gSWYgbm8gdHJhbnNwb3J0LCB3ZSBhdXRvLWFib3J0XG5pZighdHJhbnNwb3J0KXtkb25lKC0xLFwiTm8gVHJhbnNwb3J0XCIpO31lbHNle2pxWEhSLnJlYWR5U3RhdGU9MTsvLyBTZW5kIGdsb2JhbCBldmVudFxuaWYoZmlyZUdsb2JhbHMpe2dsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKFwiYWpheFNlbmRcIixbanFYSFIsc10pO30vLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhamF4U2VuZCwgc3RvcCB0aGVyZVxuaWYoY29tcGxldGVkKXtyZXR1cm4ganFYSFI7fS8vIFRpbWVvdXRcbmlmKHMuYXN5bmMmJnMudGltZW91dD4wKXt0aW1lb3V0VGltZXI9d2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtqcVhIUi5hYm9ydChcInRpbWVvdXRcIik7fSxzLnRpbWVvdXQpO310cnl7Y29tcGxldGVkPWZhbHNlO3RyYW5zcG9ydC5zZW5kKHJlcXVlc3RIZWFkZXJzLGRvbmUpO31jYXRjaChlKXsvLyBSZXRocm93IHBvc3QtY29tcGxldGlvbiBleGNlcHRpb25zXG5pZihjb21wbGV0ZWQpe3Rocm93IGU7fS8vIFByb3BhZ2F0ZSBvdGhlcnMgYXMgcmVzdWx0c1xuZG9uZSgtMSxlKTt9fS8vIENhbGxiYWNrIGZvciB3aGVuIGV2ZXJ5dGhpbmcgaXMgZG9uZVxuZnVuY3Rpb24gZG9uZShzdGF0dXMsbmF0aXZlU3RhdHVzVGV4dCxyZXNwb25zZXMsaGVhZGVycyl7dmFyIGlzU3VjY2VzcyxzdWNjZXNzLGVycm9yLHJlc3BvbnNlLG1vZGlmaWVkLHN0YXR1c1RleHQ9bmF0aXZlU3RhdHVzVGV4dDsvLyBJZ25vcmUgcmVwZWF0IGludm9jYXRpb25zXG5pZihjb21wbGV0ZWQpe3JldHVybjt9Y29tcGxldGVkPXRydWU7Ly8gQ2xlYXIgdGltZW91dCBpZiBpdCBleGlzdHNcbmlmKHRpbWVvdXRUaW1lcil7d2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0VGltZXIpO30vLyBEZXJlZmVyZW5jZSB0cmFuc3BvcnQgZm9yIGVhcmx5IGdhcmJhZ2UgY29sbGVjdGlvblxuLy8gKG5vIG1hdHRlciBob3cgbG9uZyB0aGUganFYSFIgb2JqZWN0IHdpbGwgYmUgdXNlZClcbnRyYW5zcG9ydD11bmRlZmluZWQ7Ly8gQ2FjaGUgcmVzcG9uc2UgaGVhZGVyc1xucmVzcG9uc2VIZWFkZXJzU3RyaW5nPWhlYWRlcnN8fFwiXCI7Ly8gU2V0IHJlYWR5U3RhdGVcbmpxWEhSLnJlYWR5U3RhdGU9c3RhdHVzPjA/NDowOy8vIERldGVybWluZSBpZiBzdWNjZXNzZnVsXG5pc1N1Y2Nlc3M9c3RhdHVzPj0yMDAmJnN0YXR1czwzMDB8fHN0YXR1cz09PTMwNDsvLyBHZXQgcmVzcG9uc2UgZGF0YVxuaWYocmVzcG9uc2VzKXtyZXNwb25zZT1hamF4SGFuZGxlUmVzcG9uc2VzKHMsanFYSFIscmVzcG9uc2VzKTt9Ly8gQ29udmVydCBubyBtYXR0ZXIgd2hhdCAodGhhdCB3YXkgcmVzcG9uc2VYWFggZmllbGRzIGFyZSBhbHdheXMgc2V0KVxucmVzcG9uc2U9YWpheENvbnZlcnQocyxyZXNwb25zZSxqcVhIUixpc1N1Y2Nlc3MpOy8vIElmIHN1Y2Nlc3NmdWwsIGhhbmRsZSB0eXBlIGNoYWluaW5nXG5pZihpc1N1Y2Nlc3Mpey8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5pZihzLmlmTW9kaWZpZWQpe21vZGlmaWVkPWpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKTtpZihtb2RpZmllZCl7alF1ZXJ5Lmxhc3RNb2RpZmllZFtjYWNoZVVSTF09bW9kaWZpZWQ7fW1vZGlmaWVkPWpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKTtpZihtb2RpZmllZCl7alF1ZXJ5LmV0YWdbY2FjaGVVUkxdPW1vZGlmaWVkO319Ly8gaWYgbm8gY29udGVudFxuaWYoc3RhdHVzPT09MjA0fHxzLnR5cGU9PT1cIkhFQURcIil7c3RhdHVzVGV4dD1cIm5vY29udGVudFwiOy8vIGlmIG5vdCBtb2RpZmllZFxufWVsc2UgaWYoc3RhdHVzPT09MzA0KXtzdGF0dXNUZXh0PVwibm90bW9kaWZpZWRcIjsvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcbn1lbHNle3N0YXR1c1RleHQ9cmVzcG9uc2Uuc3RhdGU7c3VjY2Vzcz1yZXNwb25zZS5kYXRhO2Vycm9yPXJlc3BvbnNlLmVycm9yO2lzU3VjY2Vzcz0hZXJyb3I7fX1lbHNley8vIEV4dHJhY3QgZXJyb3IgZnJvbSBzdGF0dXNUZXh0IGFuZCBub3JtYWxpemUgZm9yIG5vbi1hYm9ydHNcbmVycm9yPXN0YXR1c1RleHQ7aWYoc3RhdHVzfHwhc3RhdHVzVGV4dCl7c3RhdHVzVGV4dD1cImVycm9yXCI7aWYoc3RhdHVzPDApe3N0YXR1cz0wO319fS8vIFNldCBkYXRhIGZvciB0aGUgZmFrZSB4aHIgb2JqZWN0XG5qcVhIUi5zdGF0dXM9c3RhdHVzO2pxWEhSLnN0YXR1c1RleHQ9KG5hdGl2ZVN0YXR1c1RleHR8fHN0YXR1c1RleHQpK1wiXCI7Ly8gU3VjY2Vzcy9FcnJvclxuaWYoaXNTdWNjZXNzKXtkZWZlcnJlZC5yZXNvbHZlV2l0aChjYWxsYmFja0NvbnRleHQsW3N1Y2Nlc3Msc3RhdHVzVGV4dCxqcVhIUl0pO31lbHNle2RlZmVycmVkLnJlamVjdFdpdGgoY2FsbGJhY2tDb250ZXh0LFtqcVhIUixzdGF0dXNUZXh0LGVycm9yXSk7fS8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5qcVhIUi5zdGF0dXNDb2RlKF9zdGF0dXNDb2RlKTtfc3RhdHVzQ29kZT11bmRlZmluZWQ7aWYoZmlyZUdsb2JhbHMpe2dsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKGlzU3VjY2Vzcz9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbanFYSFIscyxpc1N1Y2Nlc3M/c3VjY2VzczplcnJvcl0pO30vLyBDb21wbGV0ZVxuY29tcGxldGVEZWZlcnJlZC5maXJlV2l0aChjYWxsYmFja0NvbnRleHQsW2pxWEhSLHN0YXR1c1RleHRdKTtpZihmaXJlR2xvYmFscyl7Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbanFYSFIsc10pOy8vIEhhbmRsZSB0aGUgZ2xvYmFsIEFKQVggY291bnRlclxuaWYoISAtLWpRdWVyeS5hY3RpdmUpe2pRdWVyeS5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIik7fX19cmV0dXJuIGpxWEhSO30sZ2V0SlNPTjpmdW5jdGlvbiBnZXRKU09OKHVybCxkYXRhLGNhbGxiYWNrKXtyZXR1cm4galF1ZXJ5LmdldCh1cmwsZGF0YSxjYWxsYmFjayxcImpzb25cIik7fSxnZXRTY3JpcHQ6ZnVuY3Rpb24gZ2V0U2NyaXB0KHVybCxjYWxsYmFjayl7cmV0dXJuIGpRdWVyeS5nZXQodXJsLHVuZGVmaW5lZCxjYWxsYmFjayxcInNjcmlwdFwiKTt9fSk7alF1ZXJ5LmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGksbWV0aG9kKXtqUXVlcnlbbWV0aG9kXT1mdW5jdGlvbih1cmwsZGF0YSxjYWxsYmFjayx0eXBlKXsvLyBTaGlmdCBhcmd1bWVudHMgaWYgZGF0YSBhcmd1bWVudCB3YXMgb21pdHRlZFxuaWYoalF1ZXJ5LmlzRnVuY3Rpb24oZGF0YSkpe3R5cGU9dHlwZXx8Y2FsbGJhY2s7Y2FsbGJhY2s9ZGF0YTtkYXRhPXVuZGVmaW5lZDt9Ly8gVGhlIHVybCBjYW4gYmUgYW4gb3B0aW9ucyBvYmplY3QgKHdoaWNoIHRoZW4gbXVzdCBoYXZlIC51cmwpXG5yZXR1cm4galF1ZXJ5LmFqYXgoalF1ZXJ5LmV4dGVuZCh7dXJsOnVybCx0eXBlOm1ldGhvZCxkYXRhVHlwZTp0eXBlLGRhdGE6ZGF0YSxzdWNjZXNzOmNhbGxiYWNrfSxqUXVlcnkuaXNQbGFpbk9iamVjdCh1cmwpJiZ1cmwpKTt9O30pO2pRdWVyeS5fZXZhbFVybD1mdW5jdGlvbih1cmwpe3JldHVybiBqUXVlcnkuYWpheCh7dXJsOnVybCwvLyBNYWtlIHRoaXMgZXhwbGljaXQsIHNpbmNlIHVzZXIgY2FuIG92ZXJyaWRlIHRoaXMgdGhyb3VnaCBhamF4U2V0dXAgKCMxMTI2NClcbnR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOnRydWUsYXN5bmM6ZmFsc2UsZ2xvYmFsOmZhbHNlLFwidGhyb3dzXCI6dHJ1ZX0pO307alF1ZXJ5LmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbiB3cmFwQWxsKGh0bWwpe3ZhciB3cmFwO2lmKHRoaXNbMF0pe2lmKGpRdWVyeS5pc0Z1bmN0aW9uKGh0bWwpKXtodG1sPWh0bWwuY2FsbCh0aGlzWzBdKTt9Ly8gVGhlIGVsZW1lbnRzIHRvIHdyYXAgdGhlIHRhcmdldCBhcm91bmRcbndyYXA9alF1ZXJ5KGh0bWwsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSh0cnVlKTtpZih0aGlzWzBdLnBhcmVudE5vZGUpe3dyYXAuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pO313cmFwLm1hcChmdW5jdGlvbigpe3ZhciBlbGVtPXRoaXM7d2hpbGUoZWxlbS5maXJzdEVsZW1lbnRDaGlsZCl7ZWxlbT1lbGVtLmZpcnN0RWxlbWVudENoaWxkO31yZXR1cm4gZWxlbTt9KS5hcHBlbmQodGhpcyk7fXJldHVybiB0aGlzO30sd3JhcElubmVyOmZ1bmN0aW9uIHdyYXBJbm5lcihodG1sKXtpZihqUXVlcnkuaXNGdW5jdGlvbihodG1sKSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihpKXtqUXVlcnkodGhpcykud3JhcElubmVyKGh0bWwuY2FsbCh0aGlzLGkpKTt9KTt9cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBzZWxmPWpRdWVyeSh0aGlzKSxjb250ZW50cz1zZWxmLmNvbnRlbnRzKCk7aWYoY29udGVudHMubGVuZ3RoKXtjb250ZW50cy53cmFwQWxsKGh0bWwpO31lbHNle3NlbGYuYXBwZW5kKGh0bWwpO319KTt9LHdyYXA6ZnVuY3Rpb24gd3JhcChodG1sKXt2YXIgaXNGdW5jdGlvbj1qUXVlcnkuaXNGdW5jdGlvbihodG1sKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGkpe2pRdWVyeSh0aGlzKS53cmFwQWxsKGlzRnVuY3Rpb24/aHRtbC5jYWxsKHRoaXMsaSk6aHRtbCk7fSk7fSx1bndyYXA6ZnVuY3Rpb24gdW53cmFwKHNlbGVjdG9yKXt0aGlzLnBhcmVudChzZWxlY3Rvcikubm90KFwiYm9keVwiKS5lYWNoKGZ1bmN0aW9uKCl7alF1ZXJ5KHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyk7fSk7cmV0dXJuIHRoaXM7fX0pO2pRdWVyeS5leHByLnBzZXVkb3MuaGlkZGVuPWZ1bmN0aW9uKGVsZW0pe3JldHVybiFqUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUoZWxlbSk7fTtqUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZWxlbSl7cmV0dXJuISEoZWxlbS5vZmZzZXRXaWR0aHx8ZWxlbS5vZmZzZXRIZWlnaHR8fGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO307alF1ZXJ5LmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyB3aW5kb3cuWE1MSHR0cFJlcXVlc3QoKTt9Y2F0Y2goZSl7fX07dmFyIHhoclN1Y2Nlc3NTdGF0dXM9ey8vIEZpbGUgcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgY29kZSAwLCBhc3N1bWUgMjAwXG4wOjIwMCwvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuLy8gIzE0NTA6IHNvbWV0aW1lcyBJRSByZXR1cm5zIDEyMjMgd2hlbiBpdCBzaG91bGQgYmUgMjA0XG4xMjIzOjIwNH0seGhyU3VwcG9ydGVkPWpRdWVyeS5hamF4U2V0dGluZ3MueGhyKCk7c3VwcG9ydC5jb3JzPSEheGhyU3VwcG9ydGVkJiZcIndpdGhDcmVkZW50aWFsc1wiaW4geGhyU3VwcG9ydGVkO3N1cHBvcnQuYWpheD14aHJTdXBwb3J0ZWQ9ISF4aHJTdXBwb3J0ZWQ7alF1ZXJ5LmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24ob3B0aW9ucyl7dmFyIF9jYWxsYmFjayxlcnJvckNhbGxiYWNrOy8vIENyb3NzIGRvbWFpbiBvbmx5IGFsbG93ZWQgaWYgc3VwcG9ydGVkIHRocm91Z2ggWE1MSHR0cFJlcXVlc3RcbmlmKHN1cHBvcnQuY29yc3x8eGhyU3VwcG9ydGVkJiYhb3B0aW9ucy5jcm9zc0RvbWFpbil7cmV0dXJue3NlbmQ6ZnVuY3Rpb24gc2VuZChoZWFkZXJzLGNvbXBsZXRlKXt2YXIgaSx4aHI9b3B0aW9ucy54aHIoKTt4aHIub3BlbihvcHRpb25zLnR5cGUsb3B0aW9ucy51cmwsb3B0aW9ucy5hc3luYyxvcHRpb25zLnVzZXJuYW1lLG9wdGlvbnMucGFzc3dvcmQpOy8vIEFwcGx5IGN1c3RvbSBmaWVsZHMgaWYgcHJvdmlkZWRcbmlmKG9wdGlvbnMueGhyRmllbGRzKXtmb3IoaSBpbiBvcHRpb25zLnhockZpZWxkcyl7eGhyW2ldPW9wdGlvbnMueGhyRmllbGRzW2ldO319Ly8gT3ZlcnJpZGUgbWltZSB0eXBlIGlmIG5lZWRlZFxuaWYob3B0aW9ucy5taW1lVHlwZSYmeGhyLm92ZXJyaWRlTWltZVR5cGUpe3hoci5vdmVycmlkZU1pbWVUeXBlKG9wdGlvbnMubWltZVR5cGUpO30vLyBYLVJlcXVlc3RlZC1XaXRoIGhlYWRlclxuLy8gRm9yIGNyb3NzLWRvbWFpbiByZXF1ZXN0cywgc2VlaW5nIGFzIGNvbmRpdGlvbnMgZm9yIGEgcHJlZmxpZ2h0IGFyZVxuLy8gYWtpbiB0byBhIGppZ3NhdyBwdXp6bGUsIHdlIHNpbXBseSBuZXZlciBzZXQgaXQgdG8gYmUgc3VyZS5cbi8vIChpdCBjYW4gYWx3YXlzIGJlIHNldCBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIG9yIGV2ZW4gdXNpbmcgYWpheFNldHVwKVxuLy8gRm9yIHNhbWUtZG9tYWluIHJlcXVlc3RzLCB3b24ndCBjaGFuZ2UgaGVhZGVyIGlmIGFscmVhZHkgcHJvdmlkZWQuXG5pZighb3B0aW9ucy5jcm9zc0RvbWFpbiYmIWhlYWRlcnNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdKXtoZWFkZXJzW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCI7fS8vIFNldCBoZWFkZXJzXG5mb3IoaSBpbiBoZWFkZXJzKXt4aHIuc2V0UmVxdWVzdEhlYWRlcihpLGhlYWRlcnNbaV0pO30vLyBDYWxsYmFja1xuX2NhbGxiYWNrPWZ1bmN0aW9uIGNhbGxiYWNrKHR5cGUpe3JldHVybiBmdW5jdGlvbigpe2lmKF9jYWxsYmFjayl7X2NhbGxiYWNrPWVycm9yQ2FsbGJhY2s9eGhyLm9ubG9hZD14aHIub25lcnJvcj14aHIub25hYm9ydD14aHIub25yZWFkeXN0YXRlY2hhbmdlPW51bGw7aWYodHlwZT09PVwiYWJvcnRcIil7eGhyLmFib3J0KCk7fWVsc2UgaWYodHlwZT09PVwiZXJyb3JcIil7Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcbi8vIE9uIGEgbWFudWFsIG5hdGl2ZSBhYm9ydCwgSUU5IHRocm93c1xuLy8gZXJyb3JzIG9uIGFueSBwcm9wZXJ0eSBhY2Nlc3MgdGhhdCBpcyBub3QgcmVhZHlTdGF0ZVxuaWYodHlwZW9mIHhoci5zdGF0dXMhPT1cIm51bWJlclwiKXtjb21wbGV0ZSgwLFwiZXJyb3JcIik7fWVsc2V7Y29tcGxldGUoLy8gRmlsZTogcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgMDsgc2VlICM4NjA1LCAjMTQyMDdcbnhoci5zdGF0dXMseGhyLnN0YXR1c1RleHQpO319ZWxzZXtjb21wbGV0ZSh4aHJTdWNjZXNzU3RhdHVzW3hoci5zdGF0dXNdfHx4aHIuc3RhdHVzLHhoci5zdGF0dXNUZXh0LC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBJRTkgaGFzIG5vIFhIUjIgYnV0IHRocm93cyBvbiBiaW5hcnkgKHRyYWMtMTE0MjYpXG4vLyBGb3IgWEhSMiBub24tdGV4dCwgbGV0IHRoZSBjYWxsZXIgaGFuZGxlIGl0IChnaC0yNDk4KVxuKHhoci5yZXNwb25zZVR5cGV8fFwidGV4dFwiKSE9PVwidGV4dFwifHx0eXBlb2YgeGhyLnJlc3BvbnNlVGV4dCE9PVwic3RyaW5nXCI/e2JpbmFyeTp4aHIucmVzcG9uc2V9Ont0ZXh0Onhoci5yZXNwb25zZVRleHR9LHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSk7fX19O307Ly8gTGlzdGVuIHRvIGV2ZW50c1xueGhyLm9ubG9hZD1fY2FsbGJhY2soKTtlcnJvckNhbGxiYWNrPXhoci5vbmVycm9yPV9jYWxsYmFjayhcImVycm9yXCIpOy8vIFN1cHBvcnQ6IElFIDkgb25seVxuLy8gVXNlIG9ucmVhZHlzdGF0ZWNoYW5nZSB0byByZXBsYWNlIG9uYWJvcnRcbi8vIHRvIGhhbmRsZSB1bmNhdWdodCBhYm9ydHNcbmlmKHhoci5vbmFib3J0IT09dW5kZWZpbmVkKXt4aHIub25hYm9ydD1lcnJvckNhbGxiYWNrO31lbHNle3hoci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXsvLyBDaGVjayByZWFkeVN0YXRlIGJlZm9yZSB0aW1lb3V0IGFzIGl0IGNoYW5nZXNcbmlmKHhoci5yZWFkeVN0YXRlPT09NCl7Ly8gQWxsb3cgb25lcnJvciB0byBiZSBjYWxsZWQgZmlyc3QsXG4vLyBidXQgdGhhdCB3aWxsIG5vdCBoYW5kbGUgYSBuYXRpdmUgYWJvcnRcbi8vIEFsc28sIHNhdmUgZXJyb3JDYWxsYmFjayB0byBhIHZhcmlhYmxlXG4vLyBhcyB4aHIub25lcnJvciBjYW5ub3QgYmUgYWNjZXNzZWRcbndpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aWYoX2NhbGxiYWNrKXtlcnJvckNhbGxiYWNrKCk7fX0pO319O30vLyBDcmVhdGUgdGhlIGFib3J0IGNhbGxiYWNrXG5fY2FsbGJhY2s9X2NhbGxiYWNrKFwiYWJvcnRcIik7dHJ5ey8vIERvIHNlbmQgdGhlIHJlcXVlc3QgKHRoaXMgbWF5IHJhaXNlIGFuIGV4Y2VwdGlvbilcbnhoci5zZW5kKG9wdGlvbnMuaGFzQ29udGVudCYmb3B0aW9ucy5kYXRhfHxudWxsKTt9Y2F0Y2goZSl7Ly8gIzE0NjgzOiBPbmx5IHJldGhyb3cgaWYgdGhpcyBoYXNuJ3QgYmVlbiBub3RpZmllZCBhcyBhbiBlcnJvciB5ZXRcbmlmKF9jYWxsYmFjayl7dGhyb3cgZTt9fX0sYWJvcnQ6ZnVuY3Rpb24gYWJvcnQoKXtpZihfY2FsbGJhY2spe19jYWxsYmFjaygpO319fTt9fSk7Ly8gUHJldmVudCBhdXRvLWV4ZWN1dGlvbiBvZiBzY3JpcHRzIHdoZW4gbm8gZXhwbGljaXQgZGF0YVR5cGUgd2FzIHByb3ZpZGVkIChTZWUgZ2gtMjQzMilcbmpRdWVyeS5hamF4UHJlZmlsdGVyKGZ1bmN0aW9uKHMpe2lmKHMuY3Jvc3NEb21haW4pe3MuY29udGVudHMuc2NyaXB0PWZhbHNlO319KTsvLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxualF1ZXJ5LmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBcIitcImFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uIHRleHRTY3JpcHQodGV4dCl7alF1ZXJ5Lmdsb2JhbEV2YWwodGV4dCk7cmV0dXJuIHRleHQ7fX19KTsvLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5qUXVlcnkuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKHMpe2lmKHMuY2FjaGU9PT11bmRlZmluZWQpe3MuY2FjaGU9ZmFsc2U7fWlmKHMuY3Jvc3NEb21haW4pe3MudHlwZT1cIkdFVFwiO319KTsvLyBCaW5kIHNjcmlwdCB0YWcgaGFjayB0cmFuc3BvcnRcbmpRdWVyeS5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24ocyl7Ly8gVGhpcyB0cmFuc3BvcnQgb25seSBkZWFscyB3aXRoIGNyb3NzIGRvbWFpbiByZXF1ZXN0c1xuaWYocy5jcm9zc0RvbWFpbil7dmFyIHNjcmlwdCxfY2FsbGJhY2syO3JldHVybntzZW5kOmZ1bmN0aW9uIHNlbmQoXyxjb21wbGV0ZSl7c2NyaXB0PWpRdWVyeShcIjxzY3JpcHQ+XCIpLnByb3Aoe2NoYXJzZXQ6cy5zY3JpcHRDaGFyc2V0LHNyYzpzLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLF9jYWxsYmFjazI9ZnVuY3Rpb24gY2FsbGJhY2soZXZ0KXtzY3JpcHQucmVtb3ZlKCk7X2NhbGxiYWNrMj1udWxsO2lmKGV2dCl7Y29tcGxldGUoZXZ0LnR5cGU9PT1cImVycm9yXCI/NDA0OjIwMCxldnQudHlwZSk7fX0pOy8vIFVzZSBuYXRpdmUgRE9NIG1hbmlwdWxhdGlvbiB0byBhdm9pZCBvdXIgZG9tTWFuaXAgQUpBWCB0cmlja2VyeVxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRbMF0pO30sYWJvcnQ6ZnVuY3Rpb24gYWJvcnQoKXtpZihfY2FsbGJhY2syKXtfY2FsbGJhY2syKCk7fX19O319KTt2YXIgb2xkQ2FsbGJhY2tzPVtdLHJqc29ucD0vKD0pXFw/KD89JnwkKXxcXD9cXD8vOy8vIERlZmF1bHQganNvbnAgc2V0dGluZ3NcbmpRdWVyeS5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uIGpzb25wQ2FsbGJhY2soKXt2YXIgY2FsbGJhY2s9b2xkQ2FsbGJhY2tzLnBvcCgpfHxqUXVlcnkuZXhwYW5kbytcIl9cIitub25jZSsrO3RoaXNbY2FsbGJhY2tdPXRydWU7cmV0dXJuIGNhbGxiYWNrO319KTsvLyBEZXRlY3QsIG5vcm1hbGl6ZSBvcHRpb25zIGFuZCBpbnN0YWxsIGNhbGxiYWNrcyBmb3IganNvbnAgcmVxdWVzdHNcbmpRdWVyeS5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKHMsb3JpZ2luYWxTZXR0aW5ncyxqcVhIUil7dmFyIGNhbGxiYWNrTmFtZSxvdmVyd3JpdHRlbixyZXNwb25zZUNvbnRhaW5lcixqc29uUHJvcD1zLmpzb25wIT09ZmFsc2UmJihyanNvbnAudGVzdChzLnVybCk/XCJ1cmxcIjp0eXBlb2Ygcy5kYXRhPT09XCJzdHJpbmdcIiYmKHMuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik9PT0wJiZyanNvbnAudGVzdChzLmRhdGEpJiZcImRhdGFcIik7Ly8gSGFuZGxlIGlmZiB0aGUgZXhwZWN0ZWQgZGF0YSB0eXBlIGlzIFwianNvbnBcIiBvciB3ZSBoYXZlIGEgcGFyYW1ldGVyIHRvIHNldFxuaWYoanNvblByb3B8fHMuZGF0YVR5cGVzWzBdPT09XCJqc29ucFwiKXsvLyBHZXQgY2FsbGJhY2sgbmFtZSwgcmVtZW1iZXJpbmcgcHJlZXhpc3RpbmcgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGl0XG5jYWxsYmFja05hbWU9cy5qc29ucENhbGxiYWNrPWpRdWVyeS5pc0Z1bmN0aW9uKHMuanNvbnBDYWxsYmFjayk/cy5qc29ucENhbGxiYWNrKCk6cy5qc29ucENhbGxiYWNrOy8vIEluc2VydCBjYWxsYmFjayBpbnRvIHVybCBvciBmb3JtIGRhdGFcbmlmKGpzb25Qcm9wKXtzW2pzb25Qcm9wXT1zW2pzb25Qcm9wXS5yZXBsYWNlKHJqc29ucCxcIiQxXCIrY2FsbGJhY2tOYW1lKTt9ZWxzZSBpZihzLmpzb25wIT09ZmFsc2Upe3MudXJsKz0ocnF1ZXJ5LnRlc3Qocy51cmwpP1wiJlwiOlwiP1wiKStzLmpzb25wK1wiPVwiK2NhbGxiYWNrTmFtZTt9Ly8gVXNlIGRhdGEgY29udmVydGVyIHRvIHJldHJpZXZlIGpzb24gYWZ0ZXIgc2NyaXB0IGV4ZWN1dGlvblxucy5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtpZighcmVzcG9uc2VDb250YWluZXIpe2pRdWVyeS5lcnJvcihjYWxsYmFja05hbWUrXCIgd2FzIG5vdCBjYWxsZWRcIik7fXJldHVybiByZXNwb25zZUNvbnRhaW5lclswXTt9Oy8vIEZvcmNlIGpzb24gZGF0YVR5cGVcbnMuZGF0YVR5cGVzWzBdPVwianNvblwiOy8vIEluc3RhbGwgY2FsbGJhY2tcbm92ZXJ3cml0dGVuPXdpbmRvd1tjYWxsYmFja05hbWVdO3dpbmRvd1tjYWxsYmFja05hbWVdPWZ1bmN0aW9uKCl7cmVzcG9uc2VDb250YWluZXI9YXJndW1lbnRzO307Ly8gQ2xlYW4tdXAgZnVuY3Rpb24gKGZpcmVzIGFmdGVyIGNvbnZlcnRlcnMpXG5qcVhIUi5hbHdheXMoZnVuY3Rpb24oKXsvLyBJZiBwcmV2aW91cyB2YWx1ZSBkaWRuJ3QgZXhpc3QgLSByZW1vdmUgaXRcbmlmKG92ZXJ3cml0dGVuPT09dW5kZWZpbmVkKXtqUXVlcnkod2luZG93KS5yZW1vdmVQcm9wKGNhbGxiYWNrTmFtZSk7Ly8gT3RoZXJ3aXNlIHJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcbn1lbHNle3dpbmRvd1tjYWxsYmFja05hbWVdPW92ZXJ3cml0dGVuO30vLyBTYXZlIGJhY2sgYXMgZnJlZVxuaWYoc1tjYWxsYmFja05hbWVdKXsvLyBNYWtlIHN1cmUgdGhhdCByZS11c2luZyB0aGUgb3B0aW9ucyBkb2Vzbid0IHNjcmV3IHRoaW5ncyBhcm91bmRcbnMuanNvbnBDYWxsYmFjaz1vcmlnaW5hbFNldHRpbmdzLmpzb25wQ2FsbGJhY2s7Ly8gU2F2ZSB0aGUgY2FsbGJhY2sgbmFtZSBmb3IgZnV0dXJlIHVzZVxub2xkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2tOYW1lKTt9Ly8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG5pZihyZXNwb25zZUNvbnRhaW5lciYmalF1ZXJ5LmlzRnVuY3Rpb24ob3ZlcndyaXR0ZW4pKXtvdmVyd3JpdHRlbihyZXNwb25zZUNvbnRhaW5lclswXSk7fXJlc3BvbnNlQ29udGFpbmVyPW92ZXJ3cml0dGVuPXVuZGVmaW5lZDt9KTsvLyBEZWxlZ2F0ZSB0byBzY3JpcHRcbnJldHVyblwic2NyaXB0XCI7fX0pOy8vIFN1cHBvcnQ6IFNhZmFyaSA4IG9ubHlcbi8vIEluIFNhZmFyaSA4IGRvY3VtZW50cyBjcmVhdGVkIHZpYSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnRcbi8vIGNvbGxhcHNlIHNpYmxpbmcgZm9ybXM6IHRoZSBzZWNvbmQgb25lIGJlY29tZXMgYSBjaGlsZCBvZiB0aGUgZmlyc3Qgb25lLlxuLy8gQmVjYXVzZSBvZiB0aGF0LCB0aGlzIHNlY3VyaXR5IG1lYXN1cmUgaGFzIHRvIGJlIGRpc2FibGVkIGluIFNhZmFyaSA4LlxuLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzMzN1xuc3VwcG9ydC5jcmVhdGVIVE1MRG9jdW1lbnQ9ZnVuY3Rpb24oKXt2YXIgYm9keT1kb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keTtib2R5LmlubmVySFRNTD1cIjxmb3JtPjwvZm9ybT48Zm9ybT48L2Zvcm0+XCI7cmV0dXJuIGJvZHkuY2hpbGROb2Rlcy5sZW5ndGg9PT0yO30oKTsvLyBBcmd1bWVudCBcImRhdGFcIiBzaG91bGQgYmUgc3RyaW5nIG9mIGh0bWxcbi8vIGNvbnRleHQgKG9wdGlvbmFsKTogSWYgc3BlY2lmaWVkLCB0aGUgZnJhZ21lbnQgd2lsbCBiZSBjcmVhdGVkIGluIHRoaXMgY29udGV4dCxcbi8vIGRlZmF1bHRzIHRvIGRvY3VtZW50XG4vLyBrZWVwU2NyaXB0cyAob3B0aW9uYWwpOiBJZiB0cnVlLCB3aWxsIGluY2x1ZGUgc2NyaXB0cyBwYXNzZWQgaW4gdGhlIGh0bWwgc3RyaW5nXG5qUXVlcnkucGFyc2VIVE1MPWZ1bmN0aW9uKGRhdGEsY29udGV4dCxrZWVwU2NyaXB0cyl7aWYodHlwZW9mIGRhdGEhPT1cInN0cmluZ1wiKXtyZXR1cm5bXTt9aWYodHlwZW9mIGNvbnRleHQ9PT1cImJvb2xlYW5cIil7a2VlcFNjcmlwdHM9Y29udGV4dDtjb250ZXh0PWZhbHNlO312YXIgYmFzZSxwYXJzZWQsc2NyaXB0cztpZighY29udGV4dCl7Ly8gU3RvcCBzY3JpcHRzIG9yIGlubGluZSBldmVudCBoYW5kbGVycyBmcm9tIGJlaW5nIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG4vLyBieSB1c2luZyBkb2N1bWVudC5pbXBsZW1lbnRhdGlvblxuaWYoc3VwcG9ydC5jcmVhdGVIVE1MRG9jdW1lbnQpe2NvbnRleHQ9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpOy8vIFNldCB0aGUgYmFzZSBocmVmIGZvciB0aGUgY3JlYXRlZCBkb2N1bWVudFxuLy8gc28gYW55IHBhcnNlZCBlbGVtZW50cyB3aXRoIFVSTHNcbi8vIGFyZSBiYXNlZCBvbiB0aGUgZG9jdW1lbnQncyBVUkwgKGdoLTI5NjUpXG5iYXNlPWNvbnRleHQuY3JlYXRlRWxlbWVudChcImJhc2VcIik7YmFzZS5ocmVmPWRvY3VtZW50LmxvY2F0aW9uLmhyZWY7Y29udGV4dC5oZWFkLmFwcGVuZENoaWxkKGJhc2UpO31lbHNle2NvbnRleHQ9ZG9jdW1lbnQ7fX1wYXJzZWQ9cnNpbmdsZVRhZy5leGVjKGRhdGEpO3NjcmlwdHM9IWtlZXBTY3JpcHRzJiZbXTsvLyBTaW5nbGUgdGFnXG5pZihwYXJzZWQpe3JldHVybltjb250ZXh0LmNyZWF0ZUVsZW1lbnQocGFyc2VkWzFdKV07fXBhcnNlZD1idWlsZEZyYWdtZW50KFtkYXRhXSxjb250ZXh0LHNjcmlwdHMpO2lmKHNjcmlwdHMmJnNjcmlwdHMubGVuZ3RoKXtqUXVlcnkoc2NyaXB0cykucmVtb3ZlKCk7fXJldHVybiBqUXVlcnkubWVyZ2UoW10scGFyc2VkLmNoaWxkTm9kZXMpO307LyoqXG4gKiBMb2FkIGEgdXJsIGludG8gYSBwYWdlXG4gKi9qUXVlcnkuZm4ubG9hZD1mdW5jdGlvbih1cmwscGFyYW1zLGNhbGxiYWNrKXt2YXIgc2VsZWN0b3IsdHlwZSxyZXNwb25zZSxzZWxmPXRoaXMsb2ZmPXVybC5pbmRleE9mKFwiIFwiKTtpZihvZmY+LTEpe3NlbGVjdG9yPXN0cmlwQW5kQ29sbGFwc2UodXJsLnNsaWNlKG9mZikpO3VybD11cmwuc2xpY2UoMCxvZmYpO30vLyBJZiBpdCdzIGEgZnVuY3Rpb25cbmlmKGpRdWVyeS5pc0Z1bmN0aW9uKHBhcmFtcykpey8vIFdlIGFzc3VtZSB0aGF0IGl0J3MgdGhlIGNhbGxiYWNrXG5jYWxsYmFjaz1wYXJhbXM7cGFyYW1zPXVuZGVmaW5lZDsvLyBPdGhlcndpc2UsIGJ1aWxkIGEgcGFyYW0gc3RyaW5nXG59ZWxzZSBpZihwYXJhbXMmJih0eXBlb2YgcGFyYW1zPT09XCJ1bmRlZmluZWRcIj9cInVuZGVmaW5lZFwiOl90eXBlb2YocGFyYW1zKSk9PT1cIm9iamVjdFwiKXt0eXBlPVwiUE9TVFwiO30vLyBJZiB3ZSBoYXZlIGVsZW1lbnRzIHRvIG1vZGlmeSwgbWFrZSB0aGUgcmVxdWVzdFxuaWYoc2VsZi5sZW5ndGg+MCl7alF1ZXJ5LmFqYXgoe3VybDp1cmwsLy8gSWYgXCJ0eXBlXCIgdmFyaWFibGUgaXMgdW5kZWZpbmVkLCB0aGVuIFwiR0VUXCIgbWV0aG9kIHdpbGwgYmUgdXNlZC5cbi8vIE1ha2UgdmFsdWUgb2YgdGhpcyBmaWVsZCBleHBsaWNpdCBzaW5jZVxuLy8gdXNlciBjYW4gb3ZlcnJpZGUgaXQgdGhyb3VnaCBhamF4U2V0dXAgbWV0aG9kXG50eXBlOnR5cGV8fFwiR0VUXCIsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpwYXJhbXN9KS5kb25lKGZ1bmN0aW9uKHJlc3BvbnNlVGV4dCl7Ly8gU2F2ZSByZXNwb25zZSBmb3IgdXNlIGluIGNvbXBsZXRlIGNhbGxiYWNrXG5yZXNwb25zZT1hcmd1bWVudHM7c2VsZi5odG1sKHNlbGVjdG9yPy8vIElmIGEgc2VsZWN0b3Igd2FzIHNwZWNpZmllZCwgbG9jYXRlIHRoZSByaWdodCBlbGVtZW50cyBpbiBhIGR1bW15IGRpdlxuLy8gRXhjbHVkZSBzY3JpcHRzIHRvIGF2b2lkIElFICdQZXJtaXNzaW9uIERlbmllZCcgZXJyb3JzXG5qUXVlcnkoXCI8ZGl2PlwiKS5hcHBlbmQoalF1ZXJ5LnBhcnNlSFRNTChyZXNwb25zZVRleHQpKS5maW5kKHNlbGVjdG9yKTovLyBPdGhlcndpc2UgdXNlIHRoZSBmdWxsIHJlc3VsdFxucmVzcG9uc2VUZXh0KTsvLyBJZiB0aGUgcmVxdWVzdCBzdWNjZWVkcywgdGhpcyBmdW5jdGlvbiBnZXRzIFwiZGF0YVwiLCBcInN0YXR1c1wiLCBcImpxWEhSXCJcbi8vIGJ1dCB0aGV5IGFyZSBpZ25vcmVkIGJlY2F1c2UgcmVzcG9uc2Ugd2FzIHNldCBhYm92ZS5cbi8vIElmIGl0IGZhaWxzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJqcVhIUlwiLCBcInN0YXR1c1wiLCBcImVycm9yXCJcbn0pLmFsd2F5cyhjYWxsYmFjayYmZnVuY3Rpb24oanFYSFIsc3RhdHVzKXtzZWxmLmVhY2goZnVuY3Rpb24oKXtjYWxsYmFjay5hcHBseSh0aGlzLHJlc3BvbnNlfHxbanFYSFIucmVzcG9uc2VUZXh0LHN0YXR1cyxqcVhIUl0pO30pO30pO31yZXR1cm4gdGhpczt9Oy8vIEF0dGFjaCBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgY29tbW9uIEFKQVggZXZlbnRzXG5qUXVlcnkuZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGksdHlwZSl7alF1ZXJ5LmZuW3R5cGVdPWZ1bmN0aW9uKGZuKXtyZXR1cm4gdGhpcy5vbih0eXBlLGZuKTt9O30pO2pRdWVyeS5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24oZWxlbSl7cmV0dXJuIGpRdWVyeS5ncmVwKGpRdWVyeS50aW1lcnMsZnVuY3Rpb24oZm4pe3JldHVybiBlbGVtPT09Zm4uZWxlbTt9KS5sZW5ndGg7fTsvKipcbiAqIEdldHMgYSB3aW5kb3cgZnJvbSBhbiBlbGVtZW50XG4gKi9mdW5jdGlvbiBnZXRXaW5kb3coZWxlbSl7cmV0dXJuIGpRdWVyeS5pc1dpbmRvdyhlbGVtKT9lbGVtOmVsZW0ubm9kZVR5cGU9PT05JiZlbGVtLmRlZmF1bHRWaWV3O31qUXVlcnkub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24gc2V0T2Zmc2V0KGVsZW0sb3B0aW9ucyxpKXt2YXIgY3VyUG9zaXRpb24sY3VyTGVmdCxjdXJDU1NUb3AsY3VyVG9wLGN1ck9mZnNldCxjdXJDU1NMZWZ0LGNhbGN1bGF0ZVBvc2l0aW9uLHBvc2l0aW9uPWpRdWVyeS5jc3MoZWxlbSxcInBvc2l0aW9uXCIpLGN1ckVsZW09alF1ZXJ5KGVsZW0pLHByb3BzPXt9Oy8vIFNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cbmlmKHBvc2l0aW9uPT09XCJzdGF0aWNcIil7ZWxlbS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCI7fWN1ck9mZnNldD1jdXJFbGVtLm9mZnNldCgpO2N1ckNTU1RvcD1qUXVlcnkuY3NzKGVsZW0sXCJ0b3BcIik7Y3VyQ1NTTGVmdD1qUXVlcnkuY3NzKGVsZW0sXCJsZWZ0XCIpO2NhbGN1bGF0ZVBvc2l0aW9uPShwb3NpdGlvbj09PVwiYWJzb2x1dGVcInx8cG9zaXRpb249PT1cImZpeGVkXCIpJiYoY3VyQ1NTVG9wK2N1ckNTU0xlZnQpLmluZGV4T2YoXCJhdXRvXCIpPi0xOy8vIE5lZWQgdG8gYmUgYWJsZSB0byBjYWxjdWxhdGUgcG9zaXRpb24gaWYgZWl0aGVyXG4vLyB0b3Agb3IgbGVmdCBpcyBhdXRvIGFuZCBwb3NpdGlvbiBpcyBlaXRoZXIgYWJzb2x1dGUgb3IgZml4ZWRcbmlmKGNhbGN1bGF0ZVBvc2l0aW9uKXtjdXJQb3NpdGlvbj1jdXJFbGVtLnBvc2l0aW9uKCk7Y3VyVG9wPWN1clBvc2l0aW9uLnRvcDtjdXJMZWZ0PWN1clBvc2l0aW9uLmxlZnQ7fWVsc2V7Y3VyVG9wPXBhcnNlRmxvYXQoY3VyQ1NTVG9wKXx8MDtjdXJMZWZ0PXBhcnNlRmxvYXQoY3VyQ1NTTGVmdCl8fDA7fWlmKGpRdWVyeS5pc0Z1bmN0aW9uKG9wdGlvbnMpKXsvLyBVc2UgalF1ZXJ5LmV4dGVuZCBoZXJlIHRvIGFsbG93IG1vZGlmaWNhdGlvbiBvZiBjb29yZGluYXRlcyBhcmd1bWVudCAoZ2gtMTg0OClcbm9wdGlvbnM9b3B0aW9ucy5jYWxsKGVsZW0saSxqUXVlcnkuZXh0ZW5kKHt9LGN1ck9mZnNldCkpO31pZihvcHRpb25zLnRvcCE9bnVsbCl7cHJvcHMudG9wPW9wdGlvbnMudG9wLWN1ck9mZnNldC50b3ArY3VyVG9wO31pZihvcHRpb25zLmxlZnQhPW51bGwpe3Byb3BzLmxlZnQ9b3B0aW9ucy5sZWZ0LWN1ck9mZnNldC5sZWZ0K2N1ckxlZnQ7fWlmKFwidXNpbmdcImluIG9wdGlvbnMpe29wdGlvbnMudXNpbmcuY2FsbChlbGVtLHByb3BzKTt9ZWxzZXtjdXJFbGVtLmNzcyhwcm9wcyk7fX19O2pRdWVyeS5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbiBvZmZzZXQob3B0aW9ucyl7Ly8gUHJlc2VydmUgY2hhaW5pbmcgZm9yIHNldHRlclxuaWYoYXJndW1lbnRzLmxlbmd0aCl7cmV0dXJuIG9wdGlvbnM9PT11bmRlZmluZWQ/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oaSl7alF1ZXJ5Lm9mZnNldC5zZXRPZmZzZXQodGhpcyxvcHRpb25zLGkpO30pO312YXIgZG9jRWxlbSx3aW4scmVjdCxkb2MsZWxlbT10aGlzWzBdO2lmKCFlbGVtKXtyZXR1cm47fS8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuLy8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxuLy8gZGlzY29ubmVjdGVkIG5vZGUgaW4gSUUgdGhyb3dzIGFuIGVycm9yXG5pZighZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCl7cmV0dXJue3RvcDowLGxlZnQ6MH07fXJlY3Q9ZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsvLyBNYWtlIHN1cmUgZWxlbWVudCBpcyBub3QgaGlkZGVuIChkaXNwbGF5OiBub25lKVxuaWYocmVjdC53aWR0aHx8cmVjdC5oZWlnaHQpe2RvYz1lbGVtLm93bmVyRG9jdW1lbnQ7d2luPWdldFdpbmRvdyhkb2MpO2RvY0VsZW09ZG9jLmRvY3VtZW50RWxlbWVudDtyZXR1cm57dG9wOnJlY3QudG9wK3dpbi5wYWdlWU9mZnNldC1kb2NFbGVtLmNsaWVudFRvcCxsZWZ0OnJlY3QubGVmdCt3aW4ucGFnZVhPZmZzZXQtZG9jRWxlbS5jbGllbnRMZWZ0fTt9Ly8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiBlbGVtZW50cyAoZ2gtMjMxMClcbnJldHVybiByZWN0O30scG9zaXRpb246ZnVuY3Rpb24gcG9zaXRpb24oKXtpZighdGhpc1swXSl7cmV0dXJuO312YXIgb2Zmc2V0UGFyZW50LG9mZnNldCxlbGVtPXRoaXNbMF0scGFyZW50T2Zmc2V0PXt0b3A6MCxsZWZ0OjB9Oy8vIEZpeGVkIGVsZW1lbnRzIGFyZSBvZmZzZXQgZnJvbSB3aW5kb3cgKHBhcmVudE9mZnNldCA9IHt0b3A6MCwgbGVmdDogMH0sXG4vLyBiZWNhdXNlIGl0IGlzIGl0cyBvbmx5IG9mZnNldCBwYXJlbnRcbmlmKGpRdWVyeS5jc3MoZWxlbSxcInBvc2l0aW9uXCIpPT09XCJmaXhlZFwiKXsvLyBBc3N1bWUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIHRoZXJlIHdoZW4gY29tcHV0ZWQgcG9zaXRpb24gaXMgZml4ZWRcbm9mZnNldD1lbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO31lbHNley8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG5vZmZzZXRQYXJlbnQ9dGhpcy5vZmZzZXRQYXJlbnQoKTsvLyBHZXQgY29ycmVjdCBvZmZzZXRzXG5vZmZzZXQ9dGhpcy5vZmZzZXQoKTtpZighalF1ZXJ5Lm5vZGVOYW1lKG9mZnNldFBhcmVudFswXSxcImh0bWxcIikpe3BhcmVudE9mZnNldD1vZmZzZXRQYXJlbnQub2Zmc2V0KCk7fS8vIEFkZCBvZmZzZXRQYXJlbnQgYm9yZGVyc1xucGFyZW50T2Zmc2V0PXt0b3A6cGFyZW50T2Zmc2V0LnRvcCtqUXVlcnkuY3NzKG9mZnNldFBhcmVudFswXSxcImJvcmRlclRvcFdpZHRoXCIsdHJ1ZSksbGVmdDpwYXJlbnRPZmZzZXQubGVmdCtqUXVlcnkuY3NzKG9mZnNldFBhcmVudFswXSxcImJvcmRlckxlZnRXaWR0aFwiLHRydWUpfTt9Ly8gU3VidHJhY3QgcGFyZW50IG9mZnNldHMgYW5kIGVsZW1lbnQgbWFyZ2luc1xucmV0dXJue3RvcDpvZmZzZXQudG9wLXBhcmVudE9mZnNldC50b3AtalF1ZXJ5LmNzcyhlbGVtLFwibWFyZ2luVG9wXCIsdHJ1ZSksbGVmdDpvZmZzZXQubGVmdC1wYXJlbnRPZmZzZXQubGVmdC1qUXVlcnkuY3NzKGVsZW0sXCJtYXJnaW5MZWZ0XCIsdHJ1ZSl9O30sLy8gVGhpcyBtZXRob2Qgd2lsbCByZXR1cm4gZG9jdW1lbnRFbGVtZW50IGluIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4vLyAxKSBGb3IgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWUgd2l0aG91dCBvZmZzZXRQYXJlbnQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuXG4vLyAgICBkb2N1bWVudEVsZW1lbnQgb2YgdGhlIHBhcmVudCB3aW5kb3dcbi8vIDIpIEZvciB0aGUgaGlkZGVuIG9yIGRldGFjaGVkIGVsZW1lbnRcbi8vIDMpIEZvciBib2R5IG9yIGh0bWwgZWxlbWVudCwgaS5lLiBpbiBjYXNlIG9mIHRoZSBodG1sIG5vZGUgLSBpdCB3aWxsIHJldHVybiBpdHNlbGZcbi8vXG4vLyBidXQgdGhvc2UgZXhjZXB0aW9ucyB3ZXJlIG5ldmVyIHByZXNlbnRlZCBhcyBhIHJlYWwgbGlmZSB1c2UtY2FzZXNcbi8vIGFuZCBtaWdodCBiZSBjb25zaWRlcmVkIGFzIG1vcmUgcHJlZmVyYWJsZSByZXN1bHRzLlxuLy9cbi8vIFRoaXMgbG9naWMsIGhvd2V2ZXIsIGlzIG5vdCBndWFyYW50ZWVkIGFuZCBjYW4gY2hhbmdlIGF0IGFueSBwb2ludCBpbiB0aGUgZnV0dXJlXG5vZmZzZXRQYXJlbnQ6ZnVuY3Rpb24gb2Zmc2V0UGFyZW50KCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIG9mZnNldFBhcmVudD10aGlzLm9mZnNldFBhcmVudDt3aGlsZShvZmZzZXRQYXJlbnQmJmpRdWVyeS5jc3Mob2Zmc2V0UGFyZW50LFwicG9zaXRpb25cIik9PT1cInN0YXRpY1wiKXtvZmZzZXRQYXJlbnQ9b2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudDt9cmV0dXJuIG9mZnNldFBhcmVudHx8ZG9jdW1lbnRFbGVtZW50O30pO319KTsvLyBDcmVhdGUgc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wIG1ldGhvZHNcbmpRdWVyeS5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihtZXRob2QscHJvcCl7dmFyIHRvcD1cInBhZ2VZT2Zmc2V0XCI9PT1wcm9wO2pRdWVyeS5mblttZXRob2RdPWZ1bmN0aW9uKHZhbCl7cmV0dXJuIGFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGVsZW0sbWV0aG9kLHZhbCl7dmFyIHdpbj1nZXRXaW5kb3coZWxlbSk7aWYodmFsPT09dW5kZWZpbmVkKXtyZXR1cm4gd2luP3dpbltwcm9wXTplbGVtW21ldGhvZF07fWlmKHdpbil7d2luLnNjcm9sbFRvKCF0b3A/dmFsOndpbi5wYWdlWE9mZnNldCx0b3A/dmFsOndpbi5wYWdlWU9mZnNldCk7fWVsc2V7ZWxlbVttZXRob2RdPXZhbDt9fSxtZXRob2QsdmFsLGFyZ3VtZW50cy5sZW5ndGgpO307fSk7Ly8gU3VwcG9ydDogU2FmYXJpIDw9NyAtIDkuMSwgQ2hyb21lIDw9MzcgLSA0OVxuLy8gQWRkIHRoZSB0b3AvbGVmdCBjc3NIb29rcyB1c2luZyBqUXVlcnkuZm4ucG9zaXRpb25cbi8vIFdlYmtpdCBidWc6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTA4NFxuLy8gQmxpbmsgYnVnOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD01ODkzNDdcbi8vIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBwZXJjZW50IHdoZW4gc3BlY2lmaWVkIGZvciB0b3AvbGVmdC9ib3R0b20vcmlnaHQ7XG4vLyByYXRoZXIgdGhhbiBtYWtlIHRoZSBjc3MgbW9kdWxlIGRlcGVuZCBvbiB0aGUgb2Zmc2V0IG1vZHVsZSwganVzdCBjaGVjayBmb3IgaXQgaGVyZVxualF1ZXJ5LmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGkscHJvcCl7alF1ZXJ5LmNzc0hvb2tzW3Byb3BdPWFkZEdldEhvb2tJZihzdXBwb3J0LnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oZWxlbSxjb21wdXRlZCl7aWYoY29tcHV0ZWQpe2NvbXB1dGVkPWN1ckNTUyhlbGVtLHByb3ApOy8vIElmIGN1ckNTUyByZXR1cm5zIHBlcmNlbnRhZ2UsIGZhbGxiYWNrIHRvIG9mZnNldFxucmV0dXJuIHJudW1ub25weC50ZXN0KGNvbXB1dGVkKT9qUXVlcnkoZWxlbSkucG9zaXRpb24oKVtwcm9wXStcInB4XCI6Y29tcHV0ZWQ7fX0pO30pOy8vIENyZWF0ZSBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCwgaGVpZ2h0LCB3aWR0aCwgb3V0ZXJIZWlnaHQgYW5kIG91dGVyV2lkdGggbWV0aG9kc1xualF1ZXJ5LmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24obmFtZSx0eXBlKXtqUXVlcnkuZWFjaCh7cGFkZGluZzpcImlubmVyXCIrbmFtZSxjb250ZW50OnR5cGUsXCJcIjpcIm91dGVyXCIrbmFtZX0sZnVuY3Rpb24oZGVmYXVsdEV4dHJhLGZ1bmNOYW1lKXsvLyBNYXJnaW4gaXMgb25seSBmb3Igb3V0ZXJIZWlnaHQsIG91dGVyV2lkdGhcbmpRdWVyeS5mbltmdW5jTmFtZV09ZnVuY3Rpb24obWFyZ2luLHZhbHVlKXt2YXIgY2hhaW5hYmxlPWFyZ3VtZW50cy5sZW5ndGgmJihkZWZhdWx0RXh0cmF8fHR5cGVvZiBtYXJnaW4hPT1cImJvb2xlYW5cIiksZXh0cmE9ZGVmYXVsdEV4dHJhfHwobWFyZ2luPT09dHJ1ZXx8dmFsdWU9PT10cnVlP1wibWFyZ2luXCI6XCJib3JkZXJcIik7cmV0dXJuIGFjY2Vzcyh0aGlzLGZ1bmN0aW9uKGVsZW0sdHlwZSx2YWx1ZSl7dmFyIGRvYztpZihqUXVlcnkuaXNXaW5kb3coZWxlbSkpey8vICQoIHdpbmRvdyApLm91dGVyV2lkdGgvSGVpZ2h0IHJldHVybiB3L2ggaW5jbHVkaW5nIHNjcm9sbGJhcnMgKGdoLTE3MjkpXG5yZXR1cm4gZnVuY05hbWUuaW5kZXhPZihcIm91dGVyXCIpPT09MD9lbGVtW1wiaW5uZXJcIituYW1lXTplbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK25hbWVdO30vLyBHZXQgZG9jdW1lbnQgd2lkdGggb3IgaGVpZ2h0XG5pZihlbGVtLm5vZGVUeXBlPT09OSl7ZG9jPWVsZW0uZG9jdW1lbnRFbGVtZW50Oy8vIEVpdGhlciBzY3JvbGxbV2lkdGgvSGVpZ2h0XSBvciBvZmZzZXRbV2lkdGgvSGVpZ2h0XSBvciBjbGllbnRbV2lkdGgvSGVpZ2h0XSxcbi8vIHdoaWNoZXZlciBpcyBncmVhdGVzdFxucmV0dXJuIE1hdGgubWF4KGVsZW0uYm9keVtcInNjcm9sbFwiK25hbWVdLGRvY1tcInNjcm9sbFwiK25hbWVdLGVsZW0uYm9keVtcIm9mZnNldFwiK25hbWVdLGRvY1tcIm9mZnNldFwiK25hbWVdLGRvY1tcImNsaWVudFwiK25hbWVdKTt9cmV0dXJuIHZhbHVlPT09dW5kZWZpbmVkPy8vIEdldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnQsIHJlcXVlc3RpbmcgYnV0IG5vdCBmb3JjaW5nIHBhcnNlRmxvYXRcbmpRdWVyeS5jc3MoZWxlbSx0eXBlLGV4dHJhKTovLyBTZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50XG5qUXVlcnkuc3R5bGUoZWxlbSx0eXBlLHZhbHVlLGV4dHJhKTt9LHR5cGUsY2hhaW5hYmxlP21hcmdpbjp1bmRlZmluZWQsY2hhaW5hYmxlKTt9O30pO30pO2pRdWVyeS5mbi5leHRlbmQoe2JpbmQ6ZnVuY3Rpb24gYmluZCh0eXBlcyxkYXRhLGZuKXtyZXR1cm4gdGhpcy5vbih0eXBlcyxudWxsLGRhdGEsZm4pO30sdW5iaW5kOmZ1bmN0aW9uIHVuYmluZCh0eXBlcyxmbil7cmV0dXJuIHRoaXMub2ZmKHR5cGVzLG51bGwsZm4pO30sZGVsZWdhdGU6ZnVuY3Rpb24gZGVsZWdhdGUoc2VsZWN0b3IsdHlwZXMsZGF0YSxmbil7cmV0dXJuIHRoaXMub24odHlwZXMsc2VsZWN0b3IsZGF0YSxmbik7fSx1bmRlbGVnYXRlOmZ1bmN0aW9uIHVuZGVsZWdhdGUoc2VsZWN0b3IsdHlwZXMsZm4pey8vICggbmFtZXNwYWNlICkgb3IgKCBzZWxlY3RvciwgdHlwZXMgWywgZm5dIClcbnJldHVybiBhcmd1bWVudHMubGVuZ3RoPT09MT90aGlzLm9mZihzZWxlY3RvcixcIioqXCIpOnRoaXMub2ZmKHR5cGVzLHNlbGVjdG9yfHxcIioqXCIsZm4pO319KTtqUXVlcnkucGFyc2VKU09OPUpTT04ucGFyc2U7Ly8gUmVnaXN0ZXIgYXMgYSBuYW1lZCBBTUQgbW9kdWxlLCBzaW5jZSBqUXVlcnkgY2FuIGJlIGNvbmNhdGVuYXRlZCB3aXRoIG90aGVyXG4vLyBmaWxlcyB0aGF0IG1heSB1c2UgZGVmaW5lLCBidXQgbm90IHZpYSBhIHByb3BlciBjb25jYXRlbmF0aW9uIHNjcmlwdCB0aGF0XG4vLyB1bmRlcnN0YW5kcyBhbm9ueW1vdXMgQU1EIG1vZHVsZXMuIEEgbmFtZWQgQU1EIGlzIHNhZmVzdCBhbmQgbW9zdCByb2J1c3Rcbi8vIHdheSB0byByZWdpc3Rlci4gTG93ZXJjYXNlIGpxdWVyeSBpcyB1c2VkIGJlY2F1c2UgQU1EIG1vZHVsZSBuYW1lcyBhcmVcbi8vIGRlcml2ZWQgZnJvbSBmaWxlIG5hbWVzLCBhbmQgalF1ZXJ5IGlzIG5vcm1hbGx5IGRlbGl2ZXJlZCBpbiBhIGxvd2VyY2FzZVxuLy8gZmlsZSBuYW1lLiBEbyB0aGlzIGFmdGVyIGNyZWF0aW5nIHRoZSBnbG9iYWwgc28gdGhhdCBpZiBhbiBBTUQgbW9kdWxlIHdhbnRzXG4vLyB0byBjYWxsIG5vQ29uZmxpY3QgdG8gaGlkZSB0aGlzIHZlcnNpb24gb2YgalF1ZXJ5LCBpdCB3aWxsIHdvcmsuXG4vLyBOb3RlIHRoYXQgZm9yIG1heGltdW0gcG9ydGFiaWxpdHksIGxpYnJhcmllcyB0aGF0IGFyZSBub3QgalF1ZXJ5IHNob3VsZFxuLy8gZGVjbGFyZSB0aGVtc2VsdmVzIGFzIGFub255bW91cyBtb2R1bGVzLCBhbmQgYXZvaWQgc2V0dGluZyBhIGdsb2JhbCBpZiBhblxuLy8gQU1EIGxvYWRlciBpcyBwcmVzZW50LiBqUXVlcnkgaXMgYSBzcGVjaWFsIGNhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcmJ1cmtlL3JlcXVpcmVqcy93aWtpL1VwZGF0aW5nLWV4aXN0aW5nLWxpYnJhcmllcyN3aWtpLWFub25cbmlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGpRdWVyeTt9KTt9dmFyLy8gTWFwIG92ZXIgalF1ZXJ5IGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5falF1ZXJ5PXdpbmRvdy5qUXVlcnksLy8gTWFwIG92ZXIgdGhlICQgaW4gY2FzZSBvZiBvdmVyd3JpdGVcbl8kPXdpbmRvdy4kO2pRdWVyeS5ub0NvbmZsaWN0PWZ1bmN0aW9uKGRlZXApe2lmKHdpbmRvdy4kPT09alF1ZXJ5KXt3aW5kb3cuJD1fJDt9aWYoZGVlcCYmd2luZG93LmpRdWVyeT09PWpRdWVyeSl7d2luZG93LmpRdWVyeT1falF1ZXJ5O31yZXR1cm4galF1ZXJ5O307Ly8gRXhwb3NlIGpRdWVyeSBhbmQgJCBpZGVudGlmaWVycywgZXZlbiBpbiBBTURcbi8vICgjNzEwMiNjb21tZW50OjEwLCBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9wdWxsLzU1Nylcbi8vIGFuZCBDb21tb25KUyBmb3IgYnJvd3NlciBlbXVsYXRvcnMgKCMxMzU2NilcbmlmKCFub0dsb2JhbCl7d2luZG93LmpRdWVyeT13aW5kb3cuJD1qUXVlcnk7fXJldHVybiBqUXVlcnk7fSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBDaGVjayBmb3IgalF1ZXJ5LlxuaWYgKHR5cGVvZiBqUXVlcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBqUXVlcnk7XG4gIC8vIENoZWNrIGlmIHJlcXVpcmUgaXMgYSBkZWZpbmVkIGZ1bmN0aW9uLlxuICBpZiAodHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBqUXVlcnkgPSAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4gICAgLy8gRWxzZSB1c2UgdGhlIGRvbGxhciBzaWduIGFsaWFzLlxuICB9IGVsc2Uge1xuICAgIGpRdWVyeSA9ICQ7XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbi8vIFJlcXVpcmVkIGZvciBNZXRlb3IgcGFja2FnZSwgdGhlIHVzZSBvZiB3aW5kb3cgcHJldmVudHMgZXhwb3J0IGJ5IE1ldGVvclxuKGZ1bmN0aW9uICh3aW5kb3cpIHtcbiAgaWYgKHdpbmRvdy5QYWNrYWdlKSB7XG4gICAgTWF0ZXJpYWxpemUgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICB3aW5kb3cuTWF0ZXJpYWxpemUgPSB7fTtcbiAgfVxufSkod2luZG93KTtcblxuLypcbiAqIHJhZi5qc1xuICogaHR0cHM6Ly9naXRodWIuY29tL25ncnltYW4vcmFmLmpzXG4gKlxuICogb3JpZ2luYWwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlclxuICogaW5zcGlyZWQgZnJvbSBwYXVsX2lyaXNoIGdpc3QgYW5kIHBvc3RcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMgbmdyeW1hblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24gKHdpbmRvdykge1xuICB2YXIgbGFzdFRpbWUgPSAwLFxuICAgICAgdmVuZG9ycyA9IFsnd2Via2l0JywgJ21veiddLFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSxcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lLFxuICAgICAgaSA9IHZlbmRvcnMubGVuZ3RoO1xuXG4gIC8vIHRyeSB0byB1bi1wcmVmaXggZXhpc3RpbmcgcmFmXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAhcmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZlbmRvcnNbaV0gKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdmVuZG9yc1tpXSArICdDYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgfVxuXG4gIC8vIHBvbHlmaWxsIHdpdGggc2V0VGltZW91dCBmYWxsYmFja1xuICAvLyBoZWF2aWx5IGluc3BpcmVkIGZyb20gQGRhcml1cyBnaXN0IG1vZDogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzE1Nzk2NzEjY29tbWVudC04Mzc5NDVcbiAgaWYgKCFyZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIWNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgbm93ID0gK0RhdGUubm93KCksXG4gICAgICAgICAgbmV4dFRpbWUgPSBNYXRoLm1heChsYXN0VGltZSArIDE2LCBub3cpO1xuICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhsYXN0VGltZSA9IG5leHRUaW1lKTtcbiAgICAgIH0sIG5leHRUaW1lIC0gbm93KTtcbiAgICB9O1xuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XG4gIH1cblxuICAvLyBleHBvcnQgdG8gd2luZG93XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lO1xufSkod2luZG93KTtcblxuLy8gVW5pcXVlIElEXG5NYXRlcmlhbGl6ZS5ndWlkID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBzNCgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygxKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzNCgpICsgczQoKSArICctJyArIHM0KCkgKyAnLScgKyBzNCgpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKTtcbiAgfTtcbn0oKTtcblxuLyoqXG4gKiBFc2NhcGVzIGhhc2ggZnJvbSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoICBTdHJpbmcgcmV0dXJuZWQgZnJvbSB0aGlzLmhhc2hcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbk1hdGVyaWFsaXplLmVzY2FwZUhhc2ggPSBmdW5jdGlvbiAoaGFzaCkge1xuICByZXR1cm4gaGFzaC5yZXBsYWNlKC8oOnxcXC58XFxbfFxcXXwsfD0pL2csIFwiXFxcXCQxXCIpO1xufTtcblxuTWF0ZXJpYWxpemUuZWxlbWVudE9yUGFyZW50SXNGaXhlZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gIHZhciAkY2hlY2tFbGVtZW50cyA9ICRlbGVtZW50LmFkZCgkZWxlbWVudC5wYXJlbnRzKCkpO1xuICB2YXIgaXNGaXhlZCA9IGZhbHNlO1xuICAkY2hlY2tFbGVtZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJCh0aGlzKS5jc3MoXCJwb3NpdGlvblwiKSA9PT0gXCJmaXhlZFwiKSB7XG4gICAgICBpc0ZpeGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gaXNGaXhlZDtcbn07XG5cbi8vIFZlbG9jaXR5IGhhcyBjb25mbGljdHMgd2hlbiBsb2FkZWQgd2l0aCBqUXVlcnksIHRoaXMgd2lsbCBjaGVjayBmb3IgaXRcbi8vIEZpcnN0LCBjaGVjayBpZiBpbiBub0NvbmZsaWN0IG1vZGVcbnZhciBWZWw7XG5pZiAoalF1ZXJ5KSB7XG4gIFZlbCA9IGpRdWVyeS5WZWxvY2l0eTtcbn0gZWxzZSBpZiAoJCkge1xuICBWZWwgPSAkLlZlbG9jaXR5O1xufSBlbHNlIHtcbiAgVmVsID0gVmVsb2NpdHk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIEN1c3RvbSBFYXNpbmdcbmpRdWVyeS5leHRlbmQoalF1ZXJ5LmVhc2luZywge1xuICBlYXNlSW5PdXRNYXRlcmlhbDogZnVuY3Rpb24gZWFzZUluT3V0TWF0ZXJpYWwoeCwgdCwgYiwgYywgZCkge1xuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSByZXR1cm4gYyAvIDIgKiB0ICogdCArIGI7XG4gICAgcmV0dXJuIGMgLyA0ICogKCh0IC09IDIpICogdCAqIHQgKyAyKSArIGI7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgLy8gSW1hZ2UgdHJhbnNpdGlvbiBmdW5jdGlvblxuICBNYXRlcmlhbGl6ZS5mYWRlSW5JbWFnZSA9IGZ1bmN0aW9uIChzZWxlY3Rvck9yRWwpIHtcbiAgICB2YXIgZWxlbWVudDtcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yT3JFbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVsZW1lbnQgPSAkKHNlbGVjdG9yT3JFbCk7XG4gICAgfSBlbHNlIGlmICgodHlwZW9mIHNlbGVjdG9yT3JFbCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yoc2VsZWN0b3JPckVsKSkgPT09ICdvYmplY3QnKSB7XG4gICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsZW1lbnQuY3NzKHsgb3BhY2l0eTogMCB9KTtcbiAgICAkKGVsZW1lbnQpLnZlbG9jaXR5KHsgb3BhY2l0eTogMSB9LCB7XG4gICAgICBkdXJhdGlvbjogNjUwLFxuICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgZWFzaW5nOiAnZWFzZU91dFNpbmUnXG4gICAgfSk7XG4gICAgJChlbGVtZW50KS52ZWxvY2l0eSh7IG9wYWNpdHk6IDEgfSwge1xuICAgICAgZHVyYXRpb246IDEzMDAsXG4gICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICBlYXNpbmc6ICdzd2luZycsXG4gICAgICBzdGVwOiBmdW5jdGlvbiBzdGVwKG5vdywgZngpIHtcbiAgICAgICAgZnguc3RhcnQgPSAxMDA7XG4gICAgICAgIHZhciBncmF5c2NhbGVfc2V0dGluZyA9IG5vdyAvIDEwMDtcbiAgICAgICAgdmFyIGJyaWdodG5lc3Nfc2V0dGluZyA9IDE1MCAtICgxMDAgLSBub3cpIC8gMS43NTtcblxuICAgICAgICBpZiAoYnJpZ2h0bmVzc19zZXR0aW5nIDwgMTAwKSB7XG4gICAgICAgICAgYnJpZ2h0bmVzc19zZXR0aW5nID0gMTAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub3cgPj0gMCkge1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgIFwiLXdlYmtpdC1maWx0ZXJcIjogXCJncmF5c2NhbGUoXCIgKyBncmF5c2NhbGVfc2V0dGluZyArIFwiKVwiICsgXCJicmlnaHRuZXNzKFwiICsgYnJpZ2h0bmVzc19zZXR0aW5nICsgXCIlKVwiLFxuICAgICAgICAgICAgXCJmaWx0ZXJcIjogXCJncmF5c2NhbGUoXCIgKyBncmF5c2NhbGVfc2V0dGluZyArIFwiKVwiICsgXCJicmlnaHRuZXNzKFwiICsgYnJpZ2h0bmVzc19zZXR0aW5nICsgXCIlKVwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvLyBIb3Jpem9udGFsIHN0YWdnZXJlZCBsaXN0XG4gIE1hdGVyaWFsaXplLnNob3dTdGFnZ2VyZWRMaXN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yT3JFbCkge1xuICAgIHZhciBlbGVtZW50O1xuICAgIGlmICh0eXBlb2Ygc2VsZWN0b3JPckVsID09PSAnc3RyaW5nJykge1xuICAgICAgZWxlbWVudCA9ICQoc2VsZWN0b3JPckVsKTtcbiAgICB9IGVsc2UgaWYgKCh0eXBlb2Ygc2VsZWN0b3JPckVsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihzZWxlY3Rvck9yRWwpKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWUgPSAwO1xuICAgIGVsZW1lbnQuZmluZCgnbGknKS52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IFwiLTEwMHB4XCIgfSwgeyBkdXJhdGlvbjogMCB9KTtcblxuICAgIGVsZW1lbnQuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICQodGhpcykudmVsb2NpdHkoeyBvcGFjaXR5OiBcIjFcIiwgdHJhbnNsYXRlWDogXCIwXCIgfSwgeyBkdXJhdGlvbjogODAwLCBkZWxheTogdGltZSwgZWFzaW5nOiBbNjAsIDEwXSB9KTtcbiAgICAgIHRpbWUgKz0gMTIwO1xuICAgIH0pO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBIYXJkY29kZWQgLnN0YWdnZXJlZC1saXN0IHNjcm9sbEZpcmVcbiAgICAvLyB2YXIgc3RhZ2dlcmVkTGlzdE9wdGlvbnMgPSBbXTtcbiAgICAvLyAkKCd1bC5zdGFnZ2VyZWQtbGlzdCcpLmVhY2goZnVuY3Rpb24gKGkpIHtcblxuICAgIC8vICAgdmFyIGxhYmVsID0gJ3Njcm9sbEZpcmUtJyArIGk7XG4gICAgLy8gICAkKHRoaXMpLmFkZENsYXNzKGxhYmVsKTtcbiAgICAvLyAgIHN0YWdnZXJlZExpc3RPcHRpb25zLnB1c2goXG4gICAgLy8gICAgIHtzZWxlY3RvcjogJ3VsLnN0YWdnZXJlZC1saXN0LicgKyBsYWJlbCxcbiAgICAvLyAgICAgIG9mZnNldDogMjAwLFxuICAgIC8vICAgICAgY2FsbGJhY2s6ICdzaG93U3RhZ2dlcmVkTGlzdChcInVsLnN0YWdnZXJlZC1saXN0LicgKyBsYWJlbCArICdcIiknfSk7XG4gICAgLy8gfSk7XG4gICAgLy8gc2Nyb2xsRmlyZShzdGFnZ2VyZWRMaXN0T3B0aW9ucyk7XG5cbiAgICAvLyBIYW1tZXJKUywgU3dpcGUgbmF2aWdhdGlvblxuXG4gICAgLy8gVG91Y2ggRXZlbnRcbiAgICB2YXIgc3dpcGVMZWZ0ID0gZmFsc2U7XG4gICAgdmFyIHN3aXBlUmlnaHQgPSBmYWxzZTtcblxuICAgIC8vIERpc21pc3NpYmxlIENvbGxlY3Rpb25zXG4gICAgJCgnLmRpc21pc3NhYmxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAkKHRoaXMpLmhhbW1lcih7XG4gICAgICAgIHByZXZlbnRfZGVmYXVsdDogZmFsc2VcbiAgICAgIH0pLmJpbmQoJ3BhbicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIikge1xuICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUuZ2VzdHVyZS5kaXJlY3Rpb247XG4gICAgICAgICAgdmFyIHggPSBlLmdlc3R1cmUuZGVsdGFYO1xuICAgICAgICAgIHZhciB2ZWxvY2l0eVggPSBlLmdlc3R1cmUudmVsb2NpdHlYO1xuXG4gICAgICAgICAgJHRoaXMudmVsb2NpdHkoeyB0cmFuc2xhdGVYOiB4XG4gICAgICAgICAgfSwgeyBkdXJhdGlvbjogNTAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0pO1xuXG4gICAgICAgICAgLy8gU3dpcGUgTGVmdFxuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDQgJiYgKHggPiAkdGhpcy5pbm5lcldpZHRoKCkgLyAyIHx8IHZlbG9jaXR5WCA8IC0wLjc1KSkge1xuICAgICAgICAgICAgc3dpcGVMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTd2lwZSBSaWdodFxuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IDIgJiYgKHggPCAtMSAqICR0aGlzLmlubmVyV2lkdGgoKSAvIDIgfHwgdmVsb2NpdHlYID4gMC43NSkpIHtcbiAgICAgICAgICAgIHN3aXBlUmlnaHQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkuYmluZCgncGFuZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gUmVzZXQgaWYgY29sbGVjdGlvbiBpcyBtb3ZlZCBiYWNrIGludG8gb3JpZ2luYWwgcG9zaXRpb25cbiAgICAgICAgaWYgKE1hdGguYWJzKGUuZ2VzdHVyZS5kZWx0YVgpIDwgJCh0aGlzKS5pbm5lcldpZHRoKCkgLyAyKSB7XG4gICAgICAgICAgc3dpcGVSaWdodCA9IGZhbHNlO1xuICAgICAgICAgIHN3aXBlTGVmdCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuZ2VzdHVyZS5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiKSB7XG4gICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICBpZiAoc3dpcGVMZWZ0IHx8IHN3aXBlUmlnaHQpIHtcbiAgICAgICAgICAgIHZhciBmdWxsV2lkdGg7XG4gICAgICAgICAgICBpZiAoc3dpcGVMZWZ0KSB7XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aCA9ICR0aGlzLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZ1bGxXaWR0aCA9IC0xICogJHRoaXMuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IGZ1bGxXaWR0aFxuICAgICAgICAgICAgfSwgeyBkdXJhdGlvbjogMTAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJywgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgICR0aGlzLmNzcygnYm9yZGVyJywgJ25vbmUnKTtcbiAgICAgICAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IGhlaWdodDogMCwgcGFkZGluZzogMFxuICAgICAgICAgICAgICAgIH0sIHsgZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkdGhpcy52ZWxvY2l0eSh7IHRyYW5zbGF0ZVg6IDBcbiAgICAgICAgICAgIH0sIHsgZHVyYXRpb246IDEwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN3aXBlTGVmdCA9IGZhbHNlO1xuICAgICAgICAgIHN3aXBlUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyB0aW1lID0gMFxuICAgIC8vIC8vIFZlcnRpY2FsIFN0YWdnZXJlZCBsaXN0XG4gICAgLy8gJCgndWwuc3RhZ2dlcmVkLWxpc3QudmVydGljYWwgbGknKS52ZWxvY2l0eShcbiAgICAvLyAgICAgeyB0cmFuc2xhdGVZOiBcIjEwMHB4XCJ9LFxuICAgIC8vICAgICB7IGR1cmF0aW9uOiAwIH0pO1xuXG4gICAgLy8gJCgndWwuc3RhZ2dlcmVkLWxpc3QudmVydGljYWwgbGknKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIC8vICAgJCh0aGlzKS52ZWxvY2l0eShcbiAgICAvLyAgICAgeyBvcGFjaXR5OiBcIjFcIiwgdHJhbnNsYXRlWTogXCIwXCJ9LFxuICAgIC8vICAgICB7IGR1cmF0aW9uOiA4MDAsIGRlbGF5OiB0aW1lLCBlYXNpbmc6IFs2MCwgMjVdIH0pO1xuICAgIC8vICAgdGltZSArPSAxMjA7XG4gICAgLy8gfSk7XG5cbiAgICAvLyAvLyBGYWRlIGluIGFuZCBTY2FsZVxuICAgIC8vICQoJy5mYWRlLWluLnNjYWxlJykudmVsb2NpdHkoXG4gICAgLy8gICAgIHsgc2NhbGVYOiAuNCwgc2NhbGVZOiAuNCwgdHJhbnNsYXRlWDogLTYwMH0sXG4gICAgLy8gICAgIHsgZHVyYXRpb246IDB9KTtcbiAgICAvLyAkKCcuZmFkZS1pbicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgLy8gICAkKHRoaXMpLnZlbG9jaXR5KFxuICAgIC8vICAgICB7IG9wYWNpdHk6IFwiMVwiLCBzY2FsZVg6IDEsIHNjYWxlWTogMSwgdHJhbnNsYXRlWDogMH0sXG4gICAgLy8gICAgIHsgZHVyYXRpb246IDgwMCwgZWFzaW5nOiBbNjAsIDEwXSB9KTtcbiAgICAvLyB9KTtcbiAgfSk7XG59KShqUXVlcnkpOyIsIlwidXNlIHN0cmljdFwiO1xuXG4oZnVuY3Rpb24gKCQpIHtcblxuICAkLmZuLnBhcmFsbGF4ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB3aW5kb3dfd2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAvLyBQYXJhbGxheCBTY3JpcHRzXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLmFkZENsYXNzKCdwYXJhbGxheCcpO1xuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVQYXJhbGxheChpbml0aWFsKSB7XG4gICAgICAgIHZhciBjb250YWluZXJfaGVpZ2h0O1xuICAgICAgICBpZiAod2luZG93X3dpZHRoIDwgNjAxKSB7XG4gICAgICAgICAgY29udGFpbmVyX2hlaWdodCA9ICR0aGlzLmhlaWdodCgpID4gMCA/ICR0aGlzLmhlaWdodCgpIDogJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikuaGVpZ2h0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyX2hlaWdodCA9ICR0aGlzLmhlaWdodCgpID4gMCA/ICR0aGlzLmhlaWdodCgpIDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciAkaW1nID0gJHRoaXMuY2hpbGRyZW4oXCJpbWdcIikuZmlyc3QoKTtcbiAgICAgICAgdmFyIGltZ19oZWlnaHQgPSAkaW1nLmhlaWdodCgpO1xuICAgICAgICB2YXIgcGFyYWxsYXhfZGlzdCA9IGltZ19oZWlnaHQgLSBjb250YWluZXJfaGVpZ2h0O1xuICAgICAgICB2YXIgYm90dG9tID0gJHRoaXMub2Zmc2V0KCkudG9wICsgY29udGFpbmVyX2hlaWdodDtcbiAgICAgICAgdmFyIHRvcCA9ICR0aGlzLm9mZnNldCgpLnRvcDtcbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdmFyIHdpbmRvd0JvdHRvbSA9IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodDtcbiAgICAgICAgdmFyIHBlcmNlbnRTY3JvbGxlZCA9ICh3aW5kb3dCb3R0b20gLSB0b3ApIC8gKGNvbnRhaW5lcl9oZWlnaHQgKyB3aW5kb3dIZWlnaHQpO1xuICAgICAgICB2YXIgcGFyYWxsYXggPSBNYXRoLnJvdW5kKHBhcmFsbGF4X2Rpc3QgKiBwZXJjZW50U2Nyb2xsZWQpO1xuXG4gICAgICAgIGlmIChpbml0aWFsKSB7XG4gICAgICAgICAgJGltZy5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm90dG9tID4gc2Nyb2xsVG9wICYmIHRvcCA8IHNjcm9sbFRvcCArIHdpbmRvd0hlaWdodCkge1xuICAgICAgICAgICRpbWcuY3NzKCd0cmFuc2Zvcm0nLCBcInRyYW5zbGF0ZTNEKC01MCUsXCIgKyBwYXJhbGxheCArIFwicHgsIDApXCIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFdhaXQgZm9yIGltYWdlIGxvYWRcbiAgICAgICR0aGlzLmNoaWxkcmVuKFwiaW1nXCIpLm9uZShcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICB1cGRhdGVQYXJhbGxheCh0cnVlKTtcbiAgICAgIH0pLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jb21wbGV0ZSkgJCh0aGlzKS50cmlnZ2VyKFwibG9hZFwiKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93X3dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSkoalF1ZXJ5KTsiLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoJCkge1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgbGFiZWxzIG9mIHRleHQgZmllbGRzXG4gICAgTWF0ZXJpYWxpemUudXBkYXRlVGV4dEZpZWxkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpbnB1dF9zZWxlY3RvciA9ICdpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgdGV4dGFyZWEnO1xuICAgICAgJChpbnB1dF9zZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCQoZWxlbWVudCkudmFsKCkubGVuZ3RoID4gMCB8fCBlbGVtZW50LmF1dG9mb2N1cyB8fCAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09IHVuZGVmaW5lZCB8fCAkKGVsZW1lbnQpWzBdLnZhbGlkaXR5LmJhZElucHV0ID09PSB0cnVlKSB7XG4gICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBUZXh0IGJhc2VkIGlucHV0c1xuICAgIHZhciBpbnB1dF9zZWxlY3RvciA9ICdpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSwgaW5wdXRbdHlwZT1lbWFpbF0sIGlucHV0W3R5cGU9dXJsXSwgaW5wdXRbdHlwZT10ZWxdLCBpbnB1dFt0eXBlPW51bWJlcl0sIGlucHV0W3R5cGU9c2VhcmNoXSwgdGV4dGFyZWEnO1xuXG4gICAgLy8gQWRkIGFjdGl2ZSBpZiBmb3JtIGF1dG8gY29tcGxldGVcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgaW5wdXRfc2VsZWN0b3IsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCAhPT0gMCB8fCAkKHRoaXMpLmF0dHIoJ3BsYWNlaG9sZGVyJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIHZhbGlkYXRlX2ZpZWxkKCQodGhpcykpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkIGFjdGl2ZSBpZiBpbnB1dCBlbGVtZW50IGhhcyBiZWVuIHByZS1wb3B1bGF0ZWQgb24gZG9jdW1lbnQgcmVhZHlcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICBNYXRlcmlhbGl6ZS51cGRhdGVUZXh0RmllbGRzKCk7XG4gICAgfSk7XG5cbiAgICAvLyBIVE1MIERPTSBGT1JNIFJFU0VUIGhhbmRsaW5nXG4gICAgJChkb2N1bWVudCkub24oJ3Jlc2V0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBmb3JtUmVzZXQgPSAkKGUudGFyZ2V0KTtcbiAgICAgIGlmIChmb3JtUmVzZXQuaXMoJ2Zvcm0nKSkge1xuICAgICAgICBmb3JtUmVzZXQuZmluZChpbnB1dF9zZWxlY3RvcikucmVtb3ZlQ2xhc3MoJ3ZhbGlkJykucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgZm9ybVJlc2V0LmZpbmQoaW5wdXRfc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ3ZhbHVlJykgPT09ICcnKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlc2V0IHNlbGVjdFxuICAgICAgICBmb3JtUmVzZXQuZmluZCgnc2VsZWN0LmluaXRpYWxpemVkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHJlc2V0X3RleHQgPSBmb3JtUmVzZXQuZmluZCgnb3B0aW9uW3NlbGVjdGVkXScpLnRleHQoKTtcbiAgICAgICAgICBmb3JtUmVzZXQuc2libGluZ3MoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpLnZhbChyZXNldF90ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYWN0aXZlIHdoZW4gZWxlbWVudCBoYXMgZm9jdXNcbiAgICAkKGRvY3VtZW50KS5vbignZm9jdXMnLCBpbnB1dF9zZWxlY3RvciwgZnVuY3Rpb24gKCkge1xuICAgICAgJCh0aGlzKS5zaWJsaW5ncygnbGFiZWwsIC5wcmVmaXgnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignYmx1cicsIGlucHV0X3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJGlucHV0RWxlbWVudCA9ICQodGhpcyk7XG4gICAgICB2YXIgc2VsZWN0b3IgPSBcIi5wcmVmaXhcIjtcblxuICAgICAgaWYgKCRpbnB1dEVsZW1lbnQudmFsKCkubGVuZ3RoID09PSAwICYmICRpbnB1dEVsZW1lbnRbMF0udmFsaWRpdHkuYmFkSW5wdXQgIT09IHRydWUgJiYgJGlucHV0RWxlbWVudC5hdHRyKCdwbGFjZWhvbGRlcicpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2VsZWN0b3IgKz0gXCIsIGxhYmVsXCI7XG4gICAgICB9XG5cbiAgICAgICRpbnB1dEVsZW1lbnQuc2libGluZ3Moc2VsZWN0b3IpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgdmFsaWRhdGVfZmllbGQoJGlucHV0RWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cudmFsaWRhdGVfZmllbGQgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICB2YXIgaGFzTGVuZ3RoID0gb2JqZWN0LmF0dHIoJ2xlbmd0aCcpICE9PSB1bmRlZmluZWQ7XG4gICAgICB2YXIgbGVuQXR0ciA9IHBhcnNlSW50KG9iamVjdC5hdHRyKCdsZW5ndGgnKSk7XG4gICAgICB2YXIgbGVuID0gb2JqZWN0LnZhbCgpLmxlbmd0aDtcblxuICAgICAgaWYgKG9iamVjdC52YWwoKS5sZW5ndGggPT09IDAgJiYgb2JqZWN0WzBdLnZhbGlkaXR5LmJhZElucHV0ID09PSBmYWxzZSkge1xuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCd2YWxpZGF0ZScpKSB7XG4gICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgIG9iamVjdC5yZW1vdmVDbGFzcygnaW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob2JqZWN0Lmhhc0NsYXNzKCd2YWxpZGF0ZScpKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIGNoYXJhY3RlciBjb3VudGVyIGF0dHJpYnV0ZXNcbiAgICAgICAgICBpZiAob2JqZWN0LmlzKCc6dmFsaWQnKSAmJiBoYXNMZW5ndGggJiYgbGVuIDw9IGxlbkF0dHIgfHwgb2JqZWN0LmlzKCc6dmFsaWQnKSAmJiAhaGFzTGVuZ3RoKSB7XG4gICAgICAgICAgICBvYmplY3QucmVtb3ZlQ2xhc3MoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIG9iamVjdC5hZGRDbGFzcygndmFsaWQnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqZWN0LnJlbW92ZUNsYXNzKCd2YWxpZCcpO1xuICAgICAgICAgICAgb2JqZWN0LmFkZENsYXNzKCdpbnZhbGlkJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIFJhZGlvIGFuZCBDaGVja2JveCBmb2N1cyBjbGFzc1xuICAgIHZhciByYWRpb19jaGVja2JveCA9ICdpbnB1dFt0eXBlPXJhZGlvXSwgaW5wdXRbdHlwZT1jaGVja2JveF0nO1xuICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cC5yYWRpbycsIHJhZGlvX2NoZWNrYm94LCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gVEFCLCBjaGVjayBpZiB0YWJiaW5nIHRvIHJhZGlvIG9yIGNoZWNrYm94LlxuICAgICAgaWYgKGUud2hpY2ggPT09IDkpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndGFiYmVkJyk7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLm9uZSgnYmx1cicsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0YWJiZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFRleHRhcmVhIEF1dG8gUmVzaXplXG4gICAgdmFyIGhpZGRlbkRpdiA9ICQoJy5oaWRkZW5kaXYnKS5maXJzdCgpO1xuICAgIGlmICghaGlkZGVuRGl2Lmxlbmd0aCkge1xuICAgICAgaGlkZGVuRGl2ID0gJCgnPGRpdiBjbGFzcz1cImhpZGRlbmRpdiBjb21tb25cIj48L2Rpdj4nKTtcbiAgICAgICQoJ2JvZHknKS5hcHBlbmQoaGlkZGVuRGl2KTtcbiAgICB9XG4gICAgdmFyIHRleHRfYXJlYV9zZWxlY3RvciA9ICcubWF0ZXJpYWxpemUtdGV4dGFyZWEnO1xuXG4gICAgZnVuY3Rpb24gdGV4dGFyZWFBdXRvUmVzaXplKCR0ZXh0YXJlYSkge1xuICAgICAgLy8gU2V0IGZvbnQgcHJvcGVydGllcyBvZiBoaWRkZW5EaXZcblxuICAgICAgdmFyIGZvbnRGYW1pbHkgPSAkdGV4dGFyZWEuY3NzKCdmb250LWZhbWlseScpO1xuICAgICAgdmFyIGZvbnRTaXplID0gJHRleHRhcmVhLmNzcygnZm9udC1zaXplJyk7XG4gICAgICB2YXIgbGluZUhlaWdodCA9ICR0ZXh0YXJlYS5jc3MoJ2xpbmUtaGVpZ2h0Jyk7XG5cbiAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICBoaWRkZW5EaXYuY3NzKCdmb250LXNpemUnLCBmb250U2l6ZSk7XG4gICAgICB9XG4gICAgICBpZiAoZm9udEZhbWlseSkge1xuICAgICAgICBoaWRkZW5EaXYuY3NzKCdmb250LWZhbWlseScsIGZvbnRGYW1pbHkpO1xuICAgICAgfVxuICAgICAgaWYgKGxpbmVIZWlnaHQpIHtcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnbGluZS1oZWlnaHQnLCBsaW5lSGVpZ2h0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCR0ZXh0YXJlYS5hdHRyKCd3cmFwJykgPT09IFwib2ZmXCIpIHtcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnb3ZlcmZsb3ctd3JhcCcsIFwibm9ybWFsXCIpLmNzcygnd2hpdGUtc3BhY2UnLCBcInByZVwiKTtcbiAgICAgIH1cblxuICAgICAgaGlkZGVuRGl2LnRleHQoJHRleHRhcmVhLnZhbCgpICsgJ1xcbicpO1xuICAgICAgdmFyIGNvbnRlbnQgPSBoaWRkZW5EaXYuaHRtbCgpLnJlcGxhY2UoL1xcbi9nLCAnPGJyPicpO1xuICAgICAgaGlkZGVuRGl2Lmh0bWwoY29udGVudCk7XG5cbiAgICAgIC8vIFdoZW4gdGV4dGFyZWEgaXMgaGlkZGVuLCB3aWR0aCBnb2VzIGNyYXp5LlxuICAgICAgLy8gQXBwcm94aW1hdGUgd2l0aCBoYWxmIG9mIHdpbmRvdyBzaXplXG5cbiAgICAgIGlmICgkdGV4dGFyZWEuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgaGlkZGVuRGl2LmNzcygnd2lkdGgnLCAkdGV4dGFyZWEud2lkdGgoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoaWRkZW5EaXYuY3NzKCd3aWR0aCcsICQod2luZG93KS53aWR0aCgpIC8gMik7XG4gICAgICB9XG5cbiAgICAgICR0ZXh0YXJlYS5jc3MoJ2hlaWdodCcsIGhpZGRlbkRpdi5oZWlnaHQoKSk7XG4gICAgfVxuXG4gICAgJCh0ZXh0X2FyZWFfc2VsZWN0b3IpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0ZXh0YXJlYSA9ICQodGhpcyk7XG4gICAgICBpZiAoJHRleHRhcmVhLnZhbCgpLmxlbmd0aCkge1xuICAgICAgICB0ZXh0YXJlYUF1dG9SZXNpemUoJHRleHRhcmVhKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbigna2V5dXAga2V5ZG93biBhdXRvcmVzaXplJywgdGV4dF9hcmVhX3NlbGVjdG9yLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0ZXh0YXJlYUF1dG9SZXNpemUoJCh0aGlzKSk7XG4gICAgfSk7XG5cbiAgICAvLyBGaWxlIElucHV0IFBhdGhcbiAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlJywgJy5maWxlLWZpZWxkIGlucHV0W3R5cGU9XCJmaWxlXCJdJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGZpbGVfZmllbGQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5maWxlLWZpZWxkJyk7XG4gICAgICB2YXIgcGF0aF9pbnB1dCA9IGZpbGVfZmllbGQuZmluZCgnaW5wdXQuZmlsZS1wYXRoJyk7XG4gICAgICB2YXIgZmlsZXMgPSAkKHRoaXMpWzBdLmZpbGVzO1xuICAgICAgdmFyIGZpbGVfbmFtZXMgPSBbXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsZV9uYW1lcy5wdXNoKGZpbGVzW2ldLm5hbWUpO1xuICAgICAgfVxuICAgICAgcGF0aF9pbnB1dC52YWwoZmlsZV9uYW1lcy5qb2luKFwiLCBcIikpO1xuICAgICAgcGF0aF9pbnB1dC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcblxuICAgIC8qKioqKioqKioqKioqKioqXG4gICAgKiAgUmFuZ2UgSW5wdXQgICpcbiAgICAqKioqKioqKioqKioqKioqL1xuXG4gICAgdmFyIHJhbmdlX3R5cGUgPSAnaW5wdXRbdHlwZT1yYW5nZV0nO1xuICAgIHZhciByYW5nZV9tb3VzZWRvd24gPSBmYWxzZTtcbiAgICB2YXIgbGVmdDtcblxuICAgICQocmFuZ2VfdHlwZSkuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGh1bWIgPSAkKCc8c3BhbiBjbGFzcz1cInRodW1iXCI+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgICAkKHRoaXMpLmFmdGVyKHRodW1iKTtcbiAgICB9KTtcblxuICAgIHZhciByYW5nZV93cmFwcGVyID0gJy5yYW5nZS1maWVsZCc7XG4gICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsIHJhbmdlX3R5cGUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdGh1bWIgPSAkKHRoaXMpLnNpYmxpbmdzKCcudGh1bWInKTtcbiAgICAgIHRodW1iLmZpbmQoJy52YWx1ZScpLmh0bWwoJCh0aGlzKS52YWwoKSk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignaW5wdXQgbW91c2Vkb3duIHRvdWNoc3RhcnQnLCByYW5nZV90eXBlLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHRodW1iID0gJCh0aGlzKS5zaWJsaW5ncygnLnRodW1iJyk7XG4gICAgICB2YXIgd2lkdGggPSAkKHRoaXMpLm91dGVyV2lkdGgoKTtcblxuICAgICAgLy8gSWYgdGh1bWIgaW5kaWNhdG9yIGRvZXMgbm90IGV4aXN0IHlldCwgY3JlYXRlIGl0XG4gICAgICBpZiAodGh1bWIubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdGh1bWIgPSAkKCc8c3BhbiBjbGFzcz1cInRodW1iXCI+PHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPjwvc3Bhbj48L3NwYW4+Jyk7XG4gICAgICAgICQodGhpcykuYWZ0ZXIodGh1bWIpO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgaW5kaWNhdG9yIHZhbHVlXG4gICAgICB0aHVtYi5maW5kKCcudmFsdWUnKS5odG1sKCQodGhpcykudmFsKCkpO1xuXG4gICAgICByYW5nZV9tb3VzZWRvd24gPSB0cnVlO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgIGlmICghdGh1bWIuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHRodW1iLnZlbG9jaXR5KHsgaGVpZ2h0OiBcIjMwcHhcIiwgd2lkdGg6IFwiMzBweFwiLCB0b3A6IFwiLTIwcHhcIiwgbWFyZ2luTGVmdDogXCItMTVweFwiIH0sIHsgZHVyYXRpb246IDMwMCwgZWFzaW5nOiAnZWFzZU91dEV4cG8nIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50eXBlICE9PSAnaW5wdXQnKSB7XG4gICAgICAgIGlmIChlLnBhZ2VYID09PSB1bmRlZmluZWQgfHwgZS5wYWdlWCA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vbW9iaWxlXG4gICAgICAgICAgbGVmdCA9IGUub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGRlc2t0b3BcbiAgICAgICAgICBsZWZ0ID0gZS5wYWdlWCAtICQodGhpcykub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgICAgICBsZWZ0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChsZWZ0ID4gd2lkdGgpIHtcbiAgICAgICAgICBsZWZ0ID0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgdGh1bWIuYWRkQ2xhc3MoJ2FjdGl2ZScpLmNzcygnbGVmdCcsIGxlZnQpO1xuICAgICAgfVxuXG4gICAgICB0aHVtYi5maW5kKCcudmFsdWUnKS5odG1sKCQodGhpcykudmFsKCkpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNldXAgdG91Y2hlbmQnLCByYW5nZV93cmFwcGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICByYW5nZV9tb3VzZWRvd24gPSBmYWxzZTtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlbW92ZSB0b3VjaG1vdmUnLCByYW5nZV93cmFwcGVyLCBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHRodW1iID0gJCh0aGlzKS5jaGlsZHJlbignLnRodW1iJyk7XG4gICAgICB2YXIgbGVmdDtcbiAgICAgIGlmIChyYW5nZV9tb3VzZWRvd24pIHtcbiAgICAgICAgaWYgKCF0aHVtYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICB0aHVtYi52ZWxvY2l0eSh7IGhlaWdodDogJzMwcHgnLCB3aWR0aDogJzMwcHgnLCB0b3A6ICctMjBweCcsIG1hcmdpbkxlZnQ6ICctMTVweCcgfSwgeyBkdXJhdGlvbjogMzAwLCBlYXNpbmc6ICdlYXNlT3V0RXhwbycgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUucGFnZVggPT09IHVuZGVmaW5lZCB8fCBlLnBhZ2VYID09PSBudWxsKSB7XG4gICAgICAgICAgLy9tb2JpbGVcbiAgICAgICAgICBsZWZ0ID0gZS5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gZGVza3RvcFxuICAgICAgICAgIGxlZnQgPSBlLnBhZ2VYIC0gJCh0aGlzKS5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aWR0aCA9ICQodGhpcykub3V0ZXJXaWR0aCgpO1xuXG4gICAgICAgIGlmIChsZWZ0IDwgMCkge1xuICAgICAgICAgIGxlZnQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYgKGxlZnQgPiB3aWR0aCkge1xuICAgICAgICAgIGxlZnQgPSB3aWR0aDtcbiAgICAgICAgfVxuICAgICAgICB0aHVtYi5hZGRDbGFzcygnYWN0aXZlJykuY3NzKCdsZWZ0JywgbGVmdCk7XG4gICAgICAgIHRodW1iLmZpbmQoJy52YWx1ZScpLmh0bWwodGh1bWIuc2libGluZ3MocmFuZ2VfdHlwZSkudmFsKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ21vdXNlb3V0IHRvdWNobGVhdmUnLCByYW5nZV93cmFwcGVyLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXJhbmdlX21vdXNlZG93bikge1xuXG4gICAgICAgIHZhciB0aHVtYiA9ICQodGhpcykuY2hpbGRyZW4oJy50aHVtYicpO1xuXG4gICAgICAgIGlmICh0aHVtYi5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICB0aHVtYi52ZWxvY2l0eSh7IGhlaWdodDogJzAnLCB3aWR0aDogJzAnLCB0b3A6ICcxMHB4JywgbWFyZ2luTGVmdDogJy02cHgnIH0sIHsgZHVyYXRpb246IDEwMCB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHVtYi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBBdXRvIGNvbXBsZXRlIHBsdWdpbiAgKlxuICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICQuZm4uYXV0b2NvbXBsZXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIC8vIERlZmF1bHRzXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGRhdGE6IHt9XG4gICAgICB9O1xuXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRpbnB1dCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBkYXRhID0gb3B0aW9ucy5kYXRhLFxuICAgICAgICAgICAgJGlucHV0RGl2ID0gJGlucHV0LmNsb3Nlc3QoJy5pbnB1dC1maWVsZCcpOyAvLyBEaXYgdG8gYXBwZW5kIG9uXG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgZGF0YSBpc24ndCBlbXB0eVxuICAgICAgICBpZiAoISQuaXNFbXB0eU9iamVjdChkYXRhKSkge1xuICAgICAgICAgIC8vIENyZWF0ZSBhdXRvY29tcGxldGUgZWxlbWVudFxuICAgICAgICAgIHZhciAkYXV0b2NvbXBsZXRlID0gJCgnPHVsIGNsYXNzPVwiYXV0b2NvbXBsZXRlLWNvbnRlbnQgZHJvcGRvd24tY29udGVudFwiPjwvdWw+Jyk7XG5cbiAgICAgICAgICAvLyBBcHBlbmQgYXV0b2NvbXBsZXRlIGVsZW1lbnRcbiAgICAgICAgICBpZiAoJGlucHV0RGl2Lmxlbmd0aCkge1xuICAgICAgICAgICAgJGlucHV0RGl2LmFwcGVuZCgkYXV0b2NvbXBsZXRlKTsgLy8gU2V0IHVsIGluIGJvZHlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGlucHV0LmFmdGVyKCRhdXRvY29tcGxldGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBoaWdobGlnaHQgPSBmdW5jdGlvbiBoaWdobGlnaHQoc3RyaW5nLCAkZWwpIHtcbiAgICAgICAgICAgIHZhciBpbWcgPSAkZWwuZmluZCgnaW1nJyk7XG4gICAgICAgICAgICB2YXIgbWF0Y2hTdGFydCA9ICRlbC50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiXCIgKyBzdHJpbmcudG9Mb3dlckNhc2UoKSArIFwiXCIpLFxuICAgICAgICAgICAgICAgIG1hdGNoRW5kID0gbWF0Y2hTdGFydCArIHN0cmluZy5sZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIGJlZm9yZU1hdGNoID0gJGVsLnRleHQoKS5zbGljZSgwLCBtYXRjaFN0YXJ0KSxcbiAgICAgICAgICAgICAgICBtYXRjaFRleHQgPSAkZWwudGV4dCgpLnNsaWNlKG1hdGNoU3RhcnQsIG1hdGNoRW5kICsgMSksXG4gICAgICAgICAgICAgICAgYWZ0ZXJNYXRjaCA9ICRlbC50ZXh0KCkuc2xpY2UobWF0Y2hFbmQgKyAxKTtcbiAgICAgICAgICAgICRlbC5odG1sKFwiPHNwYW4+XCIgKyBiZWZvcmVNYXRjaCArIFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+XCIgKyBtYXRjaFRleHQgKyBcIjwvc3Bhbj5cIiArIGFmdGVyTWF0Y2ggKyBcIjwvc3Bhbj5cIik7XG4gICAgICAgICAgICBpZiAoaW1nLmxlbmd0aCkge1xuICAgICAgICAgICAgICAkZWwucHJlcGVuZChpbWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBQZXJmb3JtIHNlYXJjaFxuICAgICAgICAgICRpbnB1dC5vbigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgLy8gQ2FwdHVyZSBFbnRlclxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICAgICRhdXRvY29tcGxldGUuZmluZCgnbGknKS5maXJzdCgpLmNsaWNrKCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHZhbCA9ICRpbnB1dC52YWwoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5lbXB0eSgpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgaW5wdXQgaXNuJ3QgZW1wdHlcbiAgICAgICAgICAgIGlmICh2YWwgIT09ICcnKSB7XG4gICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgIT09IC0xICYmIGtleS50b0xvd2VyQ2FzZSgpICE9PSB2YWwpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBhdXRvY29tcGxldGVPcHRpb24gPSAkKCc8bGk+PC9saT4nKTtcbiAgICAgICAgICAgICAgICAgIGlmICghIWRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGVPcHRpb24uYXBwZW5kKCc8aW1nIHNyYz1cIicgKyBkYXRhW2tleV0gKyAnXCIgY2xhc3M9XCJyaWdodCBjaXJjbGVcIj48c3Bhbj4nICsga2V5ICsgJzwvc3Bhbj4nKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZU9wdGlvbi5hcHBlbmQoJzxzcGFuPicgKyBrZXkgKyAnPC9zcGFuPicpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5hcHBlbmQoYXV0b2NvbXBsZXRlT3B0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0KHZhbCwgYXV0b2NvbXBsZXRlT3B0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFNldCBpbnB1dCB2YWx1ZVxuICAgICAgICAgICRhdXRvY29tcGxldGUub24oJ2NsaWNrJywgJ2xpJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJGlucHV0LnZhbCgkKHRoaXMpLnRleHQoKS50cmltKCkpO1xuICAgICAgICAgICAgJGlucHV0LnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgJGF1dG9jb21wbGV0ZS5lbXB0eSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTsgLy8gRW5kIG9mICQoZG9jdW1lbnQpLnJlYWR5XG5cbiAgLyoqKioqKioqKioqKioqKioqKipcbiAgICogIFNlbGVjdCBQbHVnaW4gICpcbiAgICoqKioqKioqKioqKioqKioqKi9cbiAgJC5mbi5tYXRlcmlhbF9zZWxlY3QgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAkKHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRzZWxlY3QgPSAkKHRoaXMpO1xuXG4gICAgICBpZiAoJHNlbGVjdC5oYXNDbGFzcygnYnJvd3Nlci1kZWZhdWx0JykpIHtcbiAgICAgICAgcmV0dXJuOyAvLyBDb250aW51ZSB0byBuZXh0IChyZXR1cm4gZmFsc2UgYnJlYWtzIG91dCBvZiBlbnRpcmUgbG9vcClcbiAgICAgIH1cblxuICAgICAgdmFyIG11bHRpcGxlID0gJHNlbGVjdC5hdHRyKCdtdWx0aXBsZScpID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICAgIGxhc3RJRCA9ICRzZWxlY3QuZGF0YSgnc2VsZWN0LWlkJyk7IC8vIFRlYXIgZG93biBzdHJ1Y3R1cmUgaWYgU2VsZWN0IG5lZWRzIHRvIGJlIHJlYnVpbHRcblxuICAgICAgaWYgKGxhc3RJRCkge1xuICAgICAgICAkc2VsZWN0LnBhcmVudCgpLmZpbmQoJ3NwYW4uY2FyZXQnKS5yZW1vdmUoKTtcbiAgICAgICAgJHNlbGVjdC5wYXJlbnQoKS5maW5kKCdpbnB1dCcpLnJlbW92ZSgpO1xuXG4gICAgICAgICRzZWxlY3QudW53cmFwKCk7XG4gICAgICAgICQoJ3VsI3NlbGVjdC1vcHRpb25zLScgKyBsYXN0SUQpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBkZXN0cm95aW5nIHRoZSBzZWxlY3QsIHJlbW92ZSB0aGUgc2VsZWxjdC1pZCBhbmQgcmVzZXQgaXQgdG8gaXQncyB1bmluaXRpYWxpemVkIHN0YXRlLlxuICAgICAgaWYgKGNhbGxiYWNrID09PSAnZGVzdHJveScpIHtcbiAgICAgICAgJHNlbGVjdC5kYXRhKCdzZWxlY3QtaWQnLCBudWxsKS5yZW1vdmVDbGFzcygnaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgdW5pcXVlSUQgPSBNYXRlcmlhbGl6ZS5ndWlkKCk7XG4gICAgICAkc2VsZWN0LmRhdGEoJ3NlbGVjdC1pZCcsIHVuaXF1ZUlEKTtcbiAgICAgIHZhciB3cmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cInNlbGVjdC13cmFwcGVyXCI+PC9kaXY+Jyk7XG4gICAgICB3cmFwcGVyLmFkZENsYXNzKCRzZWxlY3QuYXR0cignY2xhc3MnKSk7XG4gICAgICB2YXIgb3B0aW9ucyA9ICQoJzx1bCBpZD1cInNlbGVjdC1vcHRpb25zLScgKyB1bmlxdWVJRCArICdcIiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnQgc2VsZWN0LWRyb3Bkb3duICcgKyAobXVsdGlwbGUgPyAnbXVsdGlwbGUtc2VsZWN0LWRyb3Bkb3duJyA6ICcnKSArICdcIj48L3VsPicpLFxuICAgICAgICAgIHNlbGVjdENoaWxkcmVuID0gJHNlbGVjdC5jaGlsZHJlbignb3B0aW9uLCBvcHRncm91cCcpLFxuICAgICAgICAgIHZhbHVlc1NlbGVjdGVkID0gW10sXG4gICAgICAgICAgb3B0aW9uc0hvdmVyID0gZmFsc2U7XG5cbiAgICAgIHZhciBsYWJlbCA9ICRzZWxlY3QuZmluZCgnb3B0aW9uOnNlbGVjdGVkJykuaHRtbCgpIHx8ICRzZWxlY3QuZmluZCgnb3B0aW9uOmZpcnN0JykuaHRtbCgpIHx8IFwiXCI7XG5cbiAgICAgIC8vIEZ1bmN0aW9uIHRoYXQgcmVuZGVycyBhbmQgYXBwZW5kcyB0aGUgb3B0aW9uIHRha2luZyBpbnRvXG4gICAgICAvLyBhY2NvdW50IHR5cGUgYW5kIHBvc3NpYmxlIGltYWdlIGljb24uXG4gICAgICB2YXIgYXBwZW5kT3B0aW9uV2l0aEljb24gPSBmdW5jdGlvbiBhcHBlbmRPcHRpb25XaXRoSWNvbihzZWxlY3QsIG9wdGlvbiwgdHlwZSkge1xuICAgICAgICAvLyBBZGQgZGlzYWJsZWQgYXR0ciBpZiBkaXNhYmxlZFxuICAgICAgICB2YXIgZGlzYWJsZWRDbGFzcyA9IG9wdGlvbi5pcygnOmRpc2FibGVkJykgPyAnZGlzYWJsZWQgJyA6ICcnO1xuICAgICAgICB2YXIgb3B0Z3JvdXBDbGFzcyA9IHR5cGUgPT09ICdvcHRncm91cC1vcHRpb24nID8gJ29wdGdyb3VwLW9wdGlvbiAnIDogJyc7XG5cbiAgICAgICAgLy8gYWRkIGljb25zXG4gICAgICAgIHZhciBpY29uX3VybCA9IG9wdGlvbi5kYXRhKCdpY29uJyk7XG4gICAgICAgIHZhciBjbGFzc2VzID0gb3B0aW9uLmF0dHIoJ2NsYXNzJyk7XG4gICAgICAgIGlmICghIWljb25fdXJsKSB7XG4gICAgICAgICAgdmFyIGNsYXNzU3RyaW5nID0gJyc7XG4gICAgICAgICAgaWYgKCEhY2xhc3NlcykgY2xhc3NTdHJpbmcgPSAnIGNsYXNzPVwiJyArIGNsYXNzZXMgKyAnXCInO1xuXG4gICAgICAgICAgLy8gQ2hlY2sgZm9yIG11bHRpcGxlIHR5cGUuXG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuYXBwZW5kKCQoJzxsaSBjbGFzcz1cIicgKyBkaXNhYmxlZENsYXNzICsgJ1wiPjxpbWcgYWx0PVwiXCIgc3JjPVwiJyArIGljb25fdXJsICsgJ1wiJyArIGNsYXNzU3RyaW5nICsgJz48c3Bhbj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCInICsgZGlzYWJsZWRDbGFzcyArICcvPjxsYWJlbD48L2xhYmVsPicgKyBvcHRpb24uaHRtbCgpICsgJzwvc3Bhbj48L2xpPicpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9ucy5hcHBlbmQoJCgnPGxpIGNsYXNzPVwiJyArIGRpc2FibGVkQ2xhc3MgKyBvcHRncm91cENsYXNzICsgJ1wiPjxpbWcgYWx0PVwiXCIgc3JjPVwiJyArIGljb25fdXJsICsgJ1wiJyArIGNsYXNzU3RyaW5nICsgJz48c3Bhbj4nICsgb3B0aW9uLmh0bWwoKSArICc8L3NwYW4+PC9saT4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIG11bHRpcGxlIHR5cGUuXG4gICAgICAgIGlmICh0eXBlID09PSAnbXVsdGlwbGUnKSB7XG4gICAgICAgICAgb3B0aW9ucy5hcHBlbmQoJCgnPGxpIGNsYXNzPVwiJyArIGRpc2FibGVkQ2xhc3MgKyAnXCI+PHNwYW4+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiJyArIGRpc2FibGVkQ2xhc3MgKyAnLz48bGFiZWw+PC9sYWJlbD4nICsgb3B0aW9uLmh0bWwoKSArICc8L3NwYW4+PC9saT4nKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9ucy5hcHBlbmQoJCgnPGxpIGNsYXNzPVwiJyArIGRpc2FibGVkQ2xhc3MgKyBvcHRncm91cENsYXNzICsgJ1wiPjxzcGFuPicgKyBvcHRpb24uaHRtbCgpICsgJzwvc3Bhbj48L2xpPicpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLyogQ3JlYXRlIGRyb3Bkb3duIHN0cnVjdHVyZS4gKi9cbiAgICAgIGlmIChzZWxlY3RDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgc2VsZWN0Q2hpbGRyZW4uZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCQodGhpcykuaXMoJ29wdGlvbicpKSB7XG4gICAgICAgICAgICAvLyBEaXJlY3QgZGVzY2VuZGFudCBvcHRpb24uXG4gICAgICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgYXBwZW5kT3B0aW9uV2l0aEljb24oJHNlbGVjdCwgJCh0aGlzKSwgJ211bHRpcGxlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhcHBlbmRPcHRpb25XaXRoSWNvbigkc2VsZWN0LCAkKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCQodGhpcykuaXMoJ29wdGdyb3VwJykpIHtcbiAgICAgICAgICAgIC8vIE9wdGdyb3VwLlxuICAgICAgICAgICAgdmFyIHNlbGVjdE9wdGlvbnMgPSAkKHRoaXMpLmNoaWxkcmVuKCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbnMuYXBwZW5kKCQoJzxsaSBjbGFzcz1cIm9wdGdyb3VwXCI+PHNwYW4+JyArICQodGhpcykuYXR0cignbGFiZWwnKSArICc8L3NwYW4+PC9saT4nKSk7XG5cbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIGFwcGVuZE9wdGlvbldpdGhJY29uKCRzZWxlY3QsICQodGhpcyksICdvcHRncm91cC1vcHRpb24nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuZmluZCgnbGk6bm90KC5vcHRncm91cCknKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBvcHRpb24gZWxlbWVudCBpcyBkaXNhYmxlZFxuICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZWQnKSAmJiAhJCh0aGlzKS5oYXNDbGFzcygnb3B0Z3JvdXAnKSkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsIHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmdW5jdGlvbiAoaSwgdikge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHNlbGVjdGVkID0gdG9nZ2xlRW50cnlGcm9tQXJyYXkodmFsdWVzU2VsZWN0ZWQsICQodGhpcykuaW5kZXgoKSwgJHNlbGVjdCk7XG4gICAgICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9wdGlvbnMuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAkbmV3U2VsZWN0LnZhbCgkKHRoaXMpLnRleHQoKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbnMsICQodGhpcykpO1xuICAgICAgICAgICAgJHNlbGVjdC5maW5kKCdvcHRpb24nKS5lcShpKS5wcm9wKCdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcbiAgICAgICAgICAgIC8vIFRyaWdnZXIgb25jaGFuZ2UoKSBldmVudFxuICAgICAgICAgICAgJHNlbGVjdC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICd1bmRlZmluZWQnKSBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFdyYXAgRWxlbWVudHNcbiAgICAgICRzZWxlY3Qud3JhcCh3cmFwcGVyKTtcbiAgICAgIC8vIEFkZCBTZWxlY3QgRGlzcGxheSBFbGVtZW50XG4gICAgICB2YXIgZHJvcGRvd25JY29uID0gJCgnPHNwYW4gY2xhc3M9XCJjYXJldFwiPiYjOTY2MDs8L3NwYW4+Jyk7XG4gICAgICBpZiAoJHNlbGVjdC5pcygnOmRpc2FibGVkJykpIGRyb3Bkb3duSWNvbi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblxuICAgICAgLy8gZXNjYXBlIGRvdWJsZSBxdW90ZXNcbiAgICAgIHZhciBzYW5pdGl6ZWRMYWJlbEh0bWwgPSBsYWJlbC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbiAgICAgIHZhciAkbmV3U2VsZWN0ID0gJCgnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJzZWxlY3QtZHJvcGRvd25cIiByZWFkb25seT1cInRydWVcIiAnICsgKCRzZWxlY3QuaXMoJzpkaXNhYmxlZCcpID8gJ2Rpc2FibGVkJyA6ICcnKSArICcgZGF0YS1hY3RpdmF0ZXM9XCJzZWxlY3Qtb3B0aW9ucy0nICsgdW5pcXVlSUQgKyAnXCIgdmFsdWU9XCInICsgc2FuaXRpemVkTGFiZWxIdG1sICsgJ1wiLz4nKTtcbiAgICAgICRzZWxlY3QuYmVmb3JlKCRuZXdTZWxlY3QpO1xuICAgICAgJG5ld1NlbGVjdC5iZWZvcmUoZHJvcGRvd25JY29uKTtcblxuICAgICAgJG5ld1NlbGVjdC5hZnRlcihvcHRpb25zKTtcbiAgICAgIC8vIENoZWNrIGlmIHNlY3Rpb24gZWxlbWVudCBpcyBkaXNhYmxlZFxuICAgICAgaWYgKCEkc2VsZWN0LmlzKCc6ZGlzYWJsZWQnKSkge1xuICAgICAgICAkbmV3U2VsZWN0LmRyb3Bkb3duKHsgJ2hvdmVyJzogZmFsc2UsICdjbG9zZU9uQ2xpY2snOiBmYWxzZSB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gQ29weSB0YWJpbmRleFxuICAgICAgaWYgKCRzZWxlY3QuYXR0cigndGFiaW5kZXgnKSkge1xuICAgICAgICAkKCRuZXdTZWxlY3RbMF0pLmF0dHIoJ3RhYmluZGV4JywgJHNlbGVjdC5hdHRyKCd0YWJpbmRleCcpKTtcbiAgICAgIH1cblxuICAgICAgJHNlbGVjdC5hZGRDbGFzcygnaW5pdGlhbGl6ZWQnKTtcblxuICAgICAgJG5ld1NlbGVjdC5vbih7XG4gICAgICAgICdmb2N1cyc6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgICAgIGlmICgkKCd1bC5zZWxlY3QtZHJvcGRvd24nKS5ub3Qob3B0aW9uc1swXSkuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICQoJ2lucHV0LnNlbGVjdC1kcm9wZG93bicpLnRyaWdnZXIoJ2Nsb3NlJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghb3B0aW9ucy5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICAgJCh0aGlzKS50cmlnZ2VyKCdvcGVuJywgWydmb2N1cyddKTtcbiAgICAgICAgICAgIHZhciBsYWJlbCA9ICQodGhpcykudmFsKCk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpJykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICQodGhpcykudGV4dCgpLnRvTG93ZXJDYXNlKCkgPT09IGxhYmVsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB9KVswXTtcbiAgICAgICAgICAgIGFjdGl2YXRlT3B0aW9uKG9wdGlvbnMsIHNlbGVjdGVkT3B0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdjbGljayc6IGZ1bmN0aW9uIGNsaWNrKGUpIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJG5ld1NlbGVjdC5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICB9KTtcblxuICAgICAgb3B0aW9ucy5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9wdGlvbnNIb3ZlciA9IHRydWU7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9wdGlvbnNIb3ZlciA9IGZhbHNlO1xuICAgICAgfSk7XG5cbiAgICAgICQod2luZG93KS5vbih7XG4gICAgICAgICdjbGljayc6IGZ1bmN0aW9uIGNsaWNrKCkge1xuICAgICAgICAgIG11bHRpcGxlICYmIChvcHRpb25zSG92ZXIgfHwgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBpbml0aWFsIG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgJHNlbGVjdC5maW5kKFwib3B0aW9uOnNlbGVjdGVkOm5vdCg6ZGlzYWJsZWQpXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuaW5kZXgoKTtcblxuICAgICAgICAgIHRvZ2dsZUVudHJ5RnJvbUFycmF5KHZhbHVlc1NlbGVjdGVkLCBpbmRleCwgJHNlbGVjdCk7XG4gICAgICAgICAgb3B0aW9ucy5maW5kKFwibGlcIikuZXEoaW5kZXgpLmZpbmQoXCI6Y2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBNYWtlIG9wdGlvbiBhcyBzZWxlY3RlZCBhbmQgc2Nyb2xsIHRvIHNlbGVjdGVkIHBvc2l0aW9uXG4gICAgICB2YXIgYWN0aXZhdGVPcHRpb24gPSBmdW5jdGlvbiBhY3RpdmF0ZU9wdGlvbihjb2xsZWN0aW9uLCBuZXdPcHRpb24pIHtcbiAgICAgICAgaWYgKG5ld09wdGlvbikge1xuICAgICAgICAgIGNvbGxlY3Rpb24uZmluZCgnbGkuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICB2YXIgb3B0aW9uID0gJChuZXdPcHRpb24pO1xuICAgICAgICAgIG9wdGlvbi5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgICBvcHRpb25zLnNjcm9sbFRvKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIC8vIEFsbG93IHVzZXIgdG8gc2VhcmNoIGJ5IHR5cGluZ1xuICAgICAgLy8gdGhpcyBhcnJheSBpcyBjbGVhcmVkIGFmdGVyIDEgc2Vjb25kXG4gICAgICB2YXIgZmlsdGVyUXVlcnkgPSBbXSxcbiAgICAgICAgICBvbktleURvd24gPSBmdW5jdGlvbiBvbktleURvd24oZSkge1xuICAgICAgICAvLyBUQUIgLSBzd2l0Y2ggdG8gYW5vdGhlciBpbnB1dFxuICAgICAgICBpZiAoZS53aGljaCA9PSA5KSB7XG4gICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFSUk9XIERPV04gV0hFTiBTRUxFQ1QgSVMgQ0xPU0VEIC0gb3BlbiBzZWxlY3Qgb3B0aW9uc1xuICAgICAgICBpZiAoZS53aGljaCA9PSA0MCAmJiAhb3B0aW9ucy5pcygnOnZpc2libGUnKSkge1xuICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignb3BlbicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVOVEVSIFdIRU4gU0VMRUNUIElTIENMT1NFRCAtIHN1Ym1pdCBmb3JtXG4gICAgICAgIGlmIChlLndoaWNoID09IDEzICYmICFvcHRpb25zLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIENBU0UgV0hFTiBVU0VSIFRZUEUgTEVUVEVSU1xuICAgICAgICB2YXIgbGV0dGVyID0gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgbm9uTGV0dGVycyA9IFs5LCAxMywgMjcsIDM4LCA0MF07XG4gICAgICAgIGlmIChsZXR0ZXIgJiYgbm9uTGV0dGVycy5pbmRleE9mKGUud2hpY2gpID09PSAtMSkge1xuICAgICAgICAgIGZpbHRlclF1ZXJ5LnB1c2gobGV0dGVyKTtcblxuICAgICAgICAgIHZhciBzdHJpbmcgPSBmaWx0ZXJRdWVyeS5qb2luKCcnKSxcbiAgICAgICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaScpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJCh0aGlzKS50ZXh0KCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHN0cmluZykgPT09IDA7XG4gICAgICAgICAgfSlbMF07XG5cbiAgICAgICAgICBpZiAobmV3T3B0aW9uKSB7XG4gICAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCBuZXdPcHRpb24pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVOVEVSIC0gc2VsZWN0IG9wdGlvbiBhbmQgY2xvc2Ugd2hlbiBzZWxlY3Qgb3B0aW9ucyBhcmUgb3BlbmVkXG4gICAgICAgIGlmIChlLndoaWNoID09IDEzKSB7XG4gICAgICAgICAgdmFyIGFjdGl2ZU9wdGlvbiA9IG9wdGlvbnMuZmluZCgnbGkuc2VsZWN0ZWQ6bm90KC5kaXNhYmxlZCknKVswXTtcbiAgICAgICAgICBpZiAoYWN0aXZlT3B0aW9uKSB7XG4gICAgICAgICAgICAkKGFjdGl2ZU9wdGlvbikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgJG5ld1NlbGVjdC50cmlnZ2VyKCdjbG9zZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFSUk9XIERPV04gLSBtb3ZlIHRvIG5leHQgbm90IGRpc2FibGVkIG9wdGlvblxuICAgICAgICBpZiAoZS53aGljaCA9PSA0MCkge1xuICAgICAgICAgIGlmIChvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykubGVuZ3RoKSB7XG4gICAgICAgICAgICBuZXdPcHRpb24gPSBvcHRpb25zLmZpbmQoJ2xpLnNlbGVjdGVkJykubmV4dCgnbGk6bm90KC5kaXNhYmxlZCknKVswXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaTpub3QoLmRpc2FibGVkKScpWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhY3RpdmF0ZU9wdGlvbihvcHRpb25zLCBuZXdPcHRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRVNDIC0gY2xvc2Ugb3B0aW9uc1xuICAgICAgICBpZiAoZS53aGljaCA9PSAyNykge1xuICAgICAgICAgICRuZXdTZWxlY3QudHJpZ2dlcignY2xvc2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFSUk9XIFVQIC0gbW92ZSB0byBwcmV2aW91cyBub3QgZGlzYWJsZWQgb3B0aW9uXG4gICAgICAgIGlmIChlLndoaWNoID09IDM4KSB7XG4gICAgICAgICAgbmV3T3B0aW9uID0gb3B0aW9ucy5maW5kKCdsaS5zZWxlY3RlZCcpLnByZXYoJ2xpOm5vdCguZGlzYWJsZWQpJylbMF07XG4gICAgICAgICAgaWYgKG5ld09wdGlvbikgYWN0aXZhdGVPcHRpb24ob3B0aW9ucywgbmV3T3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF1dG9tYXRpY2FseSBjbGVhbiBmaWx0ZXIgcXVlcnkgc28gdXNlciBjYW4gc2VhcmNoIGFnYWluIGJ5IHN0YXJ0aW5nIGxldHRlcnNcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZmlsdGVyUXVlcnkgPSBbXTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9O1xuXG4gICAgICAkbmV3U2VsZWN0Lm9uKCdrZXlkb3duJywgb25LZXlEb3duKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUVudHJ5RnJvbUFycmF5KGVudHJpZXNBcnJheSwgZW50cnlJbmRleCwgc2VsZWN0KSB7XG4gICAgICB2YXIgaW5kZXggPSBlbnRyaWVzQXJyYXkuaW5kZXhPZihlbnRyeUluZGV4KSxcbiAgICAgICAgICBub3RBZGRlZCA9IGluZGV4ID09PSAtMTtcblxuICAgICAgaWYgKG5vdEFkZGVkKSB7XG4gICAgICAgIGVudHJpZXNBcnJheS5wdXNoKGVudHJ5SW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZW50cmllc0FycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdC5zaWJsaW5ncygndWwuZHJvcGRvd24tY29udGVudCcpLmZpbmQoJ2xpJykuZXEoZW50cnlJbmRleCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAvLyB1c2Ugbm90QWRkZWQgaW5zdGVhZCBvZiB0cnVlICh0byBkZXRlY3QgaWYgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZCBvciBub3QpXG4gICAgICBzZWxlY3QuZmluZCgnb3B0aW9uJykuZXEoZW50cnlJbmRleCkucHJvcCgnc2VsZWN0ZWQnLCBub3RBZGRlZCk7XG4gICAgICBzZXRWYWx1ZVRvSW5wdXQoZW50cmllc0FycmF5LCBzZWxlY3QpO1xuXG4gICAgICByZXR1cm4gbm90QWRkZWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmFsdWVUb0lucHV0KGVudHJpZXNBcnJheSwgc2VsZWN0KSB7XG4gICAgICB2YXIgdmFsdWUgPSAnJztcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGNvdW50ID0gZW50cmllc0FycmF5Lmxlbmd0aDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgdmFyIHRleHQgPSBzZWxlY3QuZmluZCgnb3B0aW9uJykuZXEoZW50cmllc0FycmF5W2ldKS50ZXh0KCk7XG5cbiAgICAgICAgaSA9PT0gMCA/IHZhbHVlICs9IHRleHQgOiB2YWx1ZSArPSAnLCAnICsgdGV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICB2YWx1ZSA9IHNlbGVjdC5maW5kKCdvcHRpb246ZGlzYWJsZWQnKS5lcSgwKS50ZXh0KCk7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdC5zaWJsaW5ncygnaW5wdXQuc2VsZWN0LWRyb3Bkb3duJykudmFsKHZhbHVlKTtcbiAgICB9XG4gIH07XG59KShqUXVlcnkpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgdmFyIF9zdGFjayA9IDAsXG4gICAgICBfbGFzdElEID0gMCxcbiAgICAgIF9nZW5lcmF0ZUlEID0gZnVuY3Rpb24gX2dlbmVyYXRlSUQoKSB7XG4gICAgX2xhc3RJRCsrO1xuICAgIHJldHVybiAnbWF0ZXJpYWxpemUtbW9kYWwtb3ZlcmxheS0nICsgX2xhc3RJRDtcbiAgfTtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICBpbl9kdXJhdGlvbjogMzUwLFxuICAgICAgICBvdXRfZHVyYXRpb246IDI1MCxcbiAgICAgICAgcmVhZHk6IHVuZGVmaW5lZCxcbiAgICAgICAgY29tcGxldGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZGlzbWlzc2libGU6IHRydWUsXG4gICAgICAgIHN0YXJ0aW5nX3RvcDogJzQlJyxcbiAgICAgICAgZW5kaW5nX3RvcDogJzEwJSdcbiAgICAgIH07XG5cbiAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHRzXG4gICAgICBvcHRpb25zID0gJC5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRtb2RhbCA9ICQodGhpcyk7XG4gICAgICAgIHZhciBtb2RhbF9pZCA9ICQodGhpcykuYXR0cihcImlkXCIpIHx8ICcjJyArICQodGhpcykuZGF0YSgndGFyZ2V0Jyk7XG5cbiAgICAgICAgdmFyIGNsb3NlTW9kYWwgPSBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgICAgICAgIHZhciBvdmVybGF5SUQgPSAkbW9kYWwuZGF0YSgnb3ZlcmxheS1pZCcpO1xuICAgICAgICAgIHZhciAkb3ZlcmxheSA9ICQoJyMnICsgb3ZlcmxheUlEKTtcbiAgICAgICAgICAkbW9kYWwucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgIC8vIEVuYWJsZSBzY3JvbGxpbmdcbiAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnJyxcbiAgICAgICAgICAgIHdpZHRoOiAnJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgJG1vZGFsLmZpbmQoJy5tb2RhbC1jbG9zZScpLm9mZignY2xpY2suY2xvc2UnKTtcbiAgICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleXVwLm1vZGFsJyArIG92ZXJsYXlJRCk7XG5cbiAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7IG9wYWNpdHk6IDAgfSwgeyBkdXJhdGlvbjogb3B0aW9ucy5vdXRfZHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzZTogXCJlYXNlT3V0UXVhcnRcIiB9KTtcblxuICAgICAgICAgIC8vIERlZmluZSBCb3R0b20gU2hlZXQgYW5pbWF0aW9uXG4gICAgICAgICAgdmFyIGV4aXRWZWxvY2l0eU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5vdXRfZHVyYXRpb24sXG4gICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VPdXRDdWJpY1wiLFxuICAgICAgICAgICAgLy8gSGFuZGxlIG1vZGFsIHJlYWR5IGNhbGxiYWNrXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICQodGhpcykuY3NzKHsgZGlzcGxheTogXCJub25lXCIgfSk7XG5cbiAgICAgICAgICAgICAgLy8gQ2FsbCBjb21wbGV0ZSBjYWxsYmFja1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMuY29tcGxldGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuY29tcGxldGUuY2FsbCh0aGlzLCAkbW9kYWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICRvdmVybGF5LnJlbW92ZSgpO1xuICAgICAgICAgICAgICBfc3RhY2stLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoJ2JvdHRvbS1zaGVldCcpKSB7XG4gICAgICAgICAgICAkbW9kYWwudmVsb2NpdHkoeyBib3R0b206IFwiLTEwMCVcIiwgb3BhY2l0eTogMCB9LCBleGl0VmVsb2NpdHlPcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1vZGFsLnZlbG9jaXR5KHsgdG9wOiBvcHRpb25zLnN0YXJ0aW5nX3RvcCwgb3BhY2l0eTogMCwgc2NhbGVYOiAwLjcgfSwgZXhpdFZlbG9jaXR5T3B0aW9ucyk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBvcGVuTW9kYWwgPSBmdW5jdGlvbiBvcGVuTW9kYWwoJHRyaWdnZXIpIHtcbiAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgdmFyIG9sZFdpZHRoID0gJGJvZHkuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgICRib2R5LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgJGJvZHkud2lkdGgob2xkV2lkdGgpO1xuXG4gICAgICAgICAgaWYgKCRtb2RhbC5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIG92ZXJsYXlJRCA9IF9nZW5lcmF0ZUlEKCk7XG4gICAgICAgICAgdmFyICRvdmVybGF5ID0gJCgnPGRpdiBjbGFzcz1cIm1vZGFsLW92ZXJsYXlcIj48L2Rpdj4nKTtcbiAgICAgICAgICB2YXIgbFN0YWNrID0gKytfc3RhY2s7XG5cbiAgICAgICAgICAvLyBTdG9yZSBhIHJlZmVyZW5jZSBvZiB0aGUgb3ZlcmxheVxuICAgICAgICAgICRvdmVybGF5LmF0dHIoJ2lkJywgb3ZlcmxheUlEKS5jc3MoJ3otaW5kZXgnLCAxMDAwICsgbFN0YWNrICogMik7XG4gICAgICAgICAgJG1vZGFsLmRhdGEoJ292ZXJsYXktaWQnLCBvdmVybGF5SUQpLmNzcygnei1pbmRleCcsIDEwMDAgKyBsU3RhY2sgKiAyICsgMSk7XG4gICAgICAgICAgJG1vZGFsLmFkZENsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAkKFwiYm9keVwiKS5hcHBlbmQoJG92ZXJsYXkpO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMuZGlzbWlzc2libGUpIHtcbiAgICAgICAgICAgICRvdmVybGF5LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBSZXR1cm4gb24gRVNDXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAubW9kYWwnICsgb3ZlcmxheUlELCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICAgIC8vIEVTQyBrZXlcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRtb2RhbC5maW5kKFwiLm1vZGFsLWNsb3NlXCIpLm9uKCdjbGljay5jbG9zZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkb3ZlcmxheS5jc3MoeyBkaXNwbGF5OiBcImJsb2NrXCIsIG9wYWNpdHk6IDAgfSk7XG5cbiAgICAgICAgICAkbW9kYWwuY3NzKHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHsgb3BhY2l0eTogb3B0aW9ucy5vcGFjaXR5IH0sIHsgZHVyYXRpb246IG9wdGlvbnMuaW5fZHVyYXRpb24sIHF1ZXVlOiBmYWxzZSwgZWFzZTogXCJlYXNlT3V0Q3ViaWNcIiB9KTtcbiAgICAgICAgICAkbW9kYWwuZGF0YSgnYXNzb2NpYXRlZC1vdmVybGF5JywgJG92ZXJsYXlbMF0pO1xuXG4gICAgICAgICAgLy8gRGVmaW5lIEJvdHRvbSBTaGVldCBhbmltYXRpb25cbiAgICAgICAgICB2YXIgZW50ZXJWZWxvY2l0eU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkdXJhdGlvbjogb3B0aW9ucy5pbl9kdXJhdGlvbixcbiAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgIGVhc2U6IFwiZWFzZU91dEN1YmljXCIsXG4gICAgICAgICAgICAvLyBIYW5kbGUgbW9kYWwgcmVhZHkgY2FsbGJhY2tcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnJlYWR5ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnJlYWR5LmNhbGwodGhpcywgJG1vZGFsLCAkdHJpZ2dlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoJ2JvdHRvbS1zaGVldCcpKSB7XG4gICAgICAgICAgICAkbW9kYWwudmVsb2NpdHkoeyBib3R0b206IFwiMFwiLCBvcGFjaXR5OiAxIH0sIGVudGVyVmVsb2NpdHlPcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJC5WZWxvY2l0eS5ob29rKCRtb2RhbCwgXCJzY2FsZVhcIiwgMC43KTtcbiAgICAgICAgICAgICRtb2RhbC5jc3MoeyB0b3A6IG9wdGlvbnMuc3RhcnRpbmdfdG9wIH0pO1xuICAgICAgICAgICAgJG1vZGFsLnZlbG9jaXR5KHsgdG9wOiBvcHRpb25zLmVuZGluZ190b3AsIG9wYWNpdHk6IDEsIHNjYWxlWDogJzEnIH0sIGVudGVyVmVsb2NpdHlPcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUmVzZXQgaGFuZGxlcnNcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljay5tb2RhbFRyaWdnZXInLCAnYVtocmVmPVwiIycgKyBtb2RhbF9pZCArICdcIl0sIFtkYXRhLXRhcmdldD1cIicgKyBtb2RhbF9pZCArICdcIl0nKTtcbiAgICAgICAgJCh0aGlzKS5vZmYoJ29wZW5Nb2RhbCcpO1xuICAgICAgICAkKHRoaXMpLm9mZignY2xvc2VNb2RhbCcpO1xuXG4gICAgICAgIC8vIENsb3NlIEhhbmRsZXJzXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljay5tb2RhbFRyaWdnZXInLCAnYVtocmVmPVwiIycgKyBtb2RhbF9pZCArICdcIl0sIFtkYXRhLXRhcmdldD1cIicgKyBtb2RhbF9pZCArICdcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG9wdGlvbnMuc3RhcnRpbmdfdG9wID0gKCQodGhpcykub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpKSAvIDEuMTU7XG4gICAgICAgICAgb3Blbk1vZGFsKCQodGhpcykpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7IC8vIGRvbmUgc2V0IG9uIGNsaWNrXG5cbiAgICAgICAgJCh0aGlzKS5vbignb3Blbk1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBtb2RhbF9pZCA9ICQodGhpcykuYXR0cihcImhyZWZcIikgfHwgJyMnICsgJCh0aGlzKS5kYXRhKCd0YXJnZXQnKTtcbiAgICAgICAgICBvcGVuTW9kYWwoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCh0aGlzKS5vbignY2xvc2VNb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7IC8vIGRvbmUgcmV0dXJuXG4gICAgfSxcbiAgICBvcGVuOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgJCh0aGlzKS50cmlnZ2VyKCdvcGVuTW9kYWwnKTtcbiAgICB9LFxuICAgIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICQodGhpcykudHJpZ2dlcignY2xvc2VNb2RhbCcpO1xuICAgIH1cbiAgfTtcblxuICAkLmZuLm1vZGFsID0gZnVuY3Rpb24gKG1ldGhvZE9yT3B0aW9ucykge1xuICAgIGlmIChtZXRob2RzW21ldGhvZE9yT3B0aW9uc10pIHtcbiAgICAgIHJldHVybiBtZXRob2RzW21ldGhvZE9yT3B0aW9uc10uYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XG4gICAgfSBlbHNlIGlmICgodHlwZW9mIG1ldGhvZE9yT3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YobWV0aG9kT3JPcHRpb25zKSkgPT09ICdvYmplY3QnIHx8ICFtZXRob2RPck9wdGlvbnMpIHtcbiAgICAgIC8vIERlZmF1bHQgdG8gXCJpbml0XCJcbiAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJC5lcnJvcignTWV0aG9kICcgKyBtZXRob2RPck9wdGlvbnMgKyAnIGRvZXMgbm90IGV4aXN0IG9uIGpRdWVyeS5tb2RhbCcpO1xuICAgIH1cbiAgfTtcbn0pKGpRdWVyeSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCQpIHtcbiAgJC5mbi50b29sdGlwID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgdGltZW91dCA9IG51bGwsXG4gICAgICAgIG1hcmdpbiA9IDU7XG5cbiAgICAvLyBEZWZhdWx0c1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIGRlbGF5OiAzNTAsXG4gICAgICB0b29sdGlwOiAnJyxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIGh0bWw6IGZhbHNlXG4gICAgfTtcblxuICAgIC8vIFJlbW92ZSB0b29sdGlwIGZyb20gdGhlIGFjdGl2YXRvclxuICAgIGlmIChvcHRpb25zID09PSBcInJlbW92ZVwiKSB7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjJyArICQodGhpcykuYXR0cignZGF0YS10b29sdGlwLWlkJykpLnJlbW92ZSgpO1xuICAgICAgICAkKHRoaXMpLm9mZignbW91c2VlbnRlci50b29sdGlwIG1vdXNlbGVhdmUudG9vbHRpcCcpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRvb2x0aXBJZCA9IE1hdGVyaWFsaXplLmd1aWQoKTtcbiAgICAgIHZhciBvcmlnaW4gPSAkKHRoaXMpO1xuXG4gICAgICAvLyBEZXN0cm95IG9sZCB0b29sdGlwXG4gICAgICBpZiAob3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcC1pZCcpKSB7XG4gICAgICAgICQoJyMnICsgb3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcC1pZCcpKS5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luLmF0dHIoJ2RhdGEtdG9vbHRpcC1pZCcsIHRvb2x0aXBJZCk7XG5cbiAgICAgIC8vIEdldCBhdHRyaWJ1dGVzLlxuICAgICAgdmFyIGFsbG93SHRtbCwgdG9vbHRpcERlbGF5LCB0b29sdGlwUG9zaXRpb24sIHRvb2x0aXBUZXh0LCB0b29sdGlwRWwsIGJhY2tkcm9wO1xuICAgICAgdmFyIHNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKCkge1xuICAgICAgICBhbGxvd0h0bWwgPSBvcmlnaW4uYXR0cignZGF0YS1odG1sJykgPyBvcmlnaW4uYXR0cignZGF0YS1odG1sJykgPT09ICd0cnVlJyA6IG9wdGlvbnMuaHRtbDtcbiAgICAgICAgdG9vbHRpcERlbGF5ID0gb3JpZ2luLmF0dHIoJ2RhdGEtZGVsYXknKTtcbiAgICAgICAgdG9vbHRpcERlbGF5ID0gdG9vbHRpcERlbGF5ID09PSB1bmRlZmluZWQgfHwgdG9vbHRpcERlbGF5ID09PSAnJyA/IG9wdGlvbnMuZGVsYXkgOiB0b29sdGlwRGVsYXk7XG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbiA9IG9yaWdpbi5hdHRyKCdkYXRhLXBvc2l0aW9uJyk7XG4gICAgICAgIHRvb2x0aXBQb3NpdGlvbiA9IHRvb2x0aXBQb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHRvb2x0aXBQb3NpdGlvbiA9PT0gJycgPyBvcHRpb25zLnBvc2l0aW9uIDogdG9vbHRpcFBvc2l0aW9uO1xuICAgICAgICB0b29sdGlwVGV4dCA9IG9yaWdpbi5hdHRyKCdkYXRhLXRvb2x0aXAnKTtcbiAgICAgICAgdG9vbHRpcFRleHQgPSB0b29sdGlwVGV4dCA9PT0gdW5kZWZpbmVkIHx8IHRvb2x0aXBUZXh0ID09PSAnJyA/IG9wdGlvbnMudG9vbHRpcCA6IHRvb2x0aXBUZXh0O1xuICAgICAgfTtcbiAgICAgIHNldEF0dHJpYnV0ZXMoKTtcblxuICAgICAgdmFyIHJlbmRlclRvb2x0aXBFbCA9IGZ1bmN0aW9uIHJlbmRlclRvb2x0aXBFbCgpIHtcbiAgICAgICAgdmFyIHRvb2x0aXAgPSAkKCc8ZGl2IGNsYXNzPVwibWF0ZXJpYWwtdG9vbHRpcFwiPjwvZGl2PicpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBUZXh0IHNwYW5cbiAgICAgICAgaWYgKGFsbG93SHRtbCkge1xuICAgICAgICAgIHRvb2x0aXBUZXh0ID0gJCgnPHNwYW4+PC9zcGFuPicpLmh0bWwodG9vbHRpcFRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvb2x0aXBUZXh0ID0gJCgnPHNwYW4+PC9zcGFuPicpLnRleHQodG9vbHRpcFRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRvb2x0aXBcbiAgICAgICAgdG9vbHRpcC5hcHBlbmQodG9vbHRpcFRleHQpLmFwcGVuZFRvKCQoJ2JvZHknKSkuYXR0cignaWQnLCB0b29sdGlwSWQpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBiYWNrZHJvcFxuICAgICAgICBiYWNrZHJvcCA9ICQoJzxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiPjwvZGl2PicpO1xuICAgICAgICBiYWNrZHJvcC5hcHBlbmRUbyh0b29sdGlwKTtcbiAgICAgICAgcmV0dXJuIHRvb2x0aXA7XG4gICAgICB9O1xuICAgICAgdG9vbHRpcEVsID0gcmVuZGVyVG9vbHRpcEVsKCk7XG5cbiAgICAgIC8vIERlc3Ryb3kgcHJldmlvdXNseSBiaW5kZWQgZXZlbnRzXG4gICAgICBvcmlnaW4ub2ZmKCdtb3VzZWVudGVyLnRvb2x0aXAgbW91c2VsZWF2ZS50b29sdGlwJyk7XG4gICAgICAvLyBNb3VzZSBJblxuICAgICAgdmFyIHN0YXJ0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB0aW1lb3V0UmVmO1xuICAgICAgb3JpZ2luLm9uKHsgJ21vdXNlZW50ZXIudG9vbHRpcCc6IGZ1bmN0aW9uIG1vdXNlZW50ZXJUb29sdGlwKGUpIHtcbiAgICAgICAgICB2YXIgc2hvd1Rvb2x0aXAgPSBmdW5jdGlvbiBzaG93VG9vbHRpcCgpIHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdG9vbHRpcEVsLnZlbG9jaXR5KCdzdG9wJyk7XG4gICAgICAgICAgICBiYWNrZHJvcC52ZWxvY2l0eSgnc3RvcCcpO1xuICAgICAgICAgICAgdG9vbHRpcEVsLmNzcyh7IGRpc3BsYXk6ICdibG9jaycsIGxlZnQ6ICcwcHgnLCB0b3A6ICcwcHgnIH0pO1xuXG4gICAgICAgICAgICAvLyBUb29sdGlwIHBvc2l0aW9uaW5nXG4gICAgICAgICAgICB2YXIgb3JpZ2luV2lkdGggPSBvcmlnaW4ub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIG9yaWdpbkhlaWdodCA9IG9yaWdpbi5vdXRlckhlaWdodCgpO1xuXG4gICAgICAgICAgICB2YXIgdG9vbHRpcEhlaWdodCA9IHRvb2x0aXBFbC5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHRvb2x0aXBXaWR0aCA9IHRvb2x0aXBFbC5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICB2YXIgdG9vbHRpcFZlcnRpY2FsTW92ZW1lbnQgPSAnMHB4JztcbiAgICAgICAgICAgIHZhciB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50ID0gJzBweCc7XG4gICAgICAgICAgICB2YXIgc2NhbGVYRmFjdG9yID0gODtcbiAgICAgICAgICAgIHZhciBzY2FsZVlGYWN0b3IgPSA4O1xuICAgICAgICAgICAgdmFyIHRhcmdldFRvcCwgdGFyZ2V0TGVmdCwgbmV3Q29vcmRpbmF0ZXM7XG5cbiAgICAgICAgICAgIGlmICh0b29sdGlwUG9zaXRpb24gPT09IFwidG9wXCIpIHtcbiAgICAgICAgICAgICAgLy8gVG9wIFBvc2l0aW9uXG4gICAgICAgICAgICAgIHRhcmdldFRvcCA9IG9yaWdpbi5vZmZzZXQoKS50b3AgLSB0b29sdGlwSGVpZ2h0IC0gbWFyZ2luO1xuICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQgKyBvcmlnaW5XaWR0aCAvIDIgLSB0b29sdGlwV2lkdGggLyAyO1xuICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xuXG4gICAgICAgICAgICAgIHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50ID0gJy0xMHB4JztcbiAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNHB4IDE0cHggMCAwJyxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJScsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0LFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRvb2x0aXBXaWR0aCAvIDIgLSBiYWNrZHJvcC53aWR0aCgpIC8gMlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExlZnQgUG9zaXRpb25cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvb2x0aXBQb3NpdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wICsgb3JpZ2luSGVpZ2h0IC8gMiAtIHRvb2x0aXBIZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBvcmlnaW4ub2Zmc2V0KCkubGVmdCAtIHRvb2x0aXBXaWR0aCAtIG1hcmdpbjtcbiAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgdG9vbHRpcEhvcml6b250YWxNb3ZlbWVudCA9ICctMTBweCc7XG4gICAgICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHtcbiAgICAgICAgICAgICAgICAgIHRvcDogJy03cHgnLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogJzE0cHgnLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTRweCcsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxNHB4IDAgMCAxNHB4JyxcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzk1JSA1MCUnLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiB0b29sdGlwSGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRvb2x0aXBXaWR0aFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIFJpZ2h0IFBvc2l0aW9uXG4gICAgICAgICAgICAgIGVsc2UgaWYgKHRvb2x0aXBQb3NpdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wICsgb3JpZ2luSGVpZ2h0IC8gMiAtIHRvb2x0aXBIZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IG9yaWdpbi5vZmZzZXQoKS5sZWZ0ICsgb3JpZ2luV2lkdGggKyBtYXJnaW47XG4gICAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlcyA9IHJlcG9zaXRpb25XaXRoaW5TY3JlZW4odGFyZ2V0TGVmdCwgdGFyZ2V0VG9wLCB0b29sdGlwV2lkdGgsIHRvb2x0aXBIZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgICB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50ID0gJysxMHB4JztcbiAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogJy03cHgnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzE0cHgnLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxNHB4JyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMCAxNHB4IDE0cHggMCcsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzUlIDUwJScsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogdG9vbHRpcEhlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcwcHgnXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgLy8gQm90dG9tIFBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICB0YXJnZXRUb3AgPSBvcmlnaW4ub2Zmc2V0KCkudG9wICsgb3JpZ2luLm91dGVySGVpZ2h0KCkgKyBtYXJnaW47XG4gICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gb3JpZ2luLm9mZnNldCgpLmxlZnQgKyBvcmlnaW5XaWR0aCAvIDIgLSB0b29sdGlwV2lkdGggLyAyO1xuICAgICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZXMgPSByZXBvc2l0aW9uV2l0aGluU2NyZWVuKHRhcmdldExlZnQsIHRhcmdldFRvcCwgdG9vbHRpcFdpZHRoLCB0b29sdGlwSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgIHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50ID0gJysxMHB4JztcbiAgICAgICAgICAgICAgICAgIGJhY2tkcm9wLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdG9vbHRpcFdpZHRoIC8gMiAtIGJhY2tkcm9wLndpZHRoKCkgLyAyXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCB0b29wdGlwIGNzcyBwbGFjZW1lbnRcbiAgICAgICAgICAgIHRvb2x0aXBFbC5jc3Moe1xuICAgICAgICAgICAgICB0b3A6IG5ld0Nvb3JkaW5hdGVzLnksXG4gICAgICAgICAgICAgIGxlZnQ6IG5ld0Nvb3JkaW5hdGVzLnhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDYWxjdWxhdGUgU2NhbGUgdG8gZmlsbFxuICAgICAgICAgICAgc2NhbGVYRmFjdG9yID0gTWF0aC5TUVJUMiAqIHRvb2x0aXBXaWR0aCAvIHBhcnNlSW50KGJhY2tkcm9wLmNzcygnd2lkdGgnKSk7XG4gICAgICAgICAgICBzY2FsZVlGYWN0b3IgPSBNYXRoLlNRUlQyICogdG9vbHRpcEhlaWdodCAvIHBhcnNlSW50KGJhY2tkcm9wLmNzcygnaGVpZ2h0JykpO1xuXG4gICAgICAgICAgICB0b29sdGlwRWwudmVsb2NpdHkoeyBtYXJnaW5Ub3A6IHRvb2x0aXBWZXJ0aWNhbE1vdmVtZW50LCBtYXJnaW5MZWZ0OiB0b29sdGlwSG9yaXpvbnRhbE1vdmVtZW50IH0sIHsgZHVyYXRpb246IDM1MCwgcXVldWU6IGZhbHNlIH0pLnZlbG9jaXR5KHsgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiAzMDAsIGRlbGF5OiA1MCwgcXVldWU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgYmFja2Ryb3AuY3NzKHsgZGlzcGxheTogJ2Jsb2NrJyB9KS52ZWxvY2l0eSh7IG9wYWNpdHk6IDEgfSwgeyBkdXJhdGlvbjogNTUsIGRlbGF5OiAwLCBxdWV1ZTogZmFsc2UgfSkudmVsb2NpdHkoeyBzY2FsZVg6IHNjYWxlWEZhY3Rvciwgc2NhbGVZOiBzY2FsZVlGYWN0b3IgfSwgeyBkdXJhdGlvbjogMzAwLCBkZWxheTogMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlSW5PdXRRdWFkJyB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdGltZW91dFJlZiA9IHNldFRpbWVvdXQoc2hvd1Rvb2x0aXAsIHRvb2x0aXBEZWxheSk7IC8vIEVuZCBJbnRlcnZhbFxuXG4gICAgICAgICAgLy8gTW91c2UgT3V0XG4gICAgICAgIH0sXG4gICAgICAgICdtb3VzZWxlYXZlLnRvb2x0aXAnOiBmdW5jdGlvbiBtb3VzZWxlYXZlVG9vbHRpcCgpIHtcbiAgICAgICAgICAvLyBSZXNldCBTdGF0ZVxuICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dFJlZik7XG5cbiAgICAgICAgICAvLyBBbmltYXRlIGJhY2tcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzdGFydGVkICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHRvb2x0aXBFbC52ZWxvY2l0eSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCwgbWFyZ2luVG9wOiAwLCBtYXJnaW5MZWZ0OiAwIH0sIHsgZHVyYXRpb246IDIyNSwgcXVldWU6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICBiYWNrZHJvcC52ZWxvY2l0eSh7IG9wYWNpdHk6IDAsIHNjYWxlWDogMSwgc2NhbGVZOiAxIH0sIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjI1LFxuICAgICAgICAgICAgICAgIHF1ZXVlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgICBiYWNrZHJvcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgICAgdG9vbHRpcEVsLmNzcygnZGlzcGxheScsICdub25lJyk7XG4gICAgICAgICAgICAgICAgICBzdGFydGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAyMjUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgcmVwb3NpdGlvbldpdGhpblNjcmVlbiA9IGZ1bmN0aW9uIHJlcG9zaXRpb25XaXRoaW5TY3JlZW4oeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHZhciBuZXdYID0geDtcbiAgICB2YXIgbmV3WSA9IHk7XG5cbiAgICBpZiAobmV3WCA8IDApIHtcbiAgICAgIG5ld1ggPSA0O1xuICAgIH0gZWxzZSBpZiAobmV3WCArIHdpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgIG5ld1ggLT0gbmV3WCArIHdpZHRoIC0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKG5ld1kgPCAwKSB7XG4gICAgICBuZXdZID0gNDtcbiAgICB9IGVsc2UgaWYgKG5ld1kgKyBoZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQgKyAkKHdpbmRvdykuc2Nyb2xsVG9wKSB7XG4gICAgICBuZXdZIC09IG5ld1kgKyBoZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgeDogbmV3WCwgeTogbmV3WSB9O1xuICB9O1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAkKCcudG9vbHRpcHBlZCcpLnRvb2x0aXAoKTtcbiAgfSk7XG59KShqUXVlcnkpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4oZnVuY3Rpb24gKCQpIHtcblxuICB2YXIgbWV0aG9kcyA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KG9wdGlvbnMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgbWVudVdpZHRoOiAzMDAsXG4gICAgICAgIGVkZ2U6ICdsZWZ0JyxcbiAgICAgICAgY2xvc2VPbkNsaWNrOiBmYWxzZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXG4gICAgICB9O1xuICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIG1lbnVfaWQgPSAkKFwiI1wiICsgJHRoaXMuYXR0cignZGF0YS1hY3RpdmF0ZXMnKSk7XG5cbiAgICAgICAgLy8gU2V0IHRvIHdpZHRoXG4gICAgICAgIGlmIChvcHRpb25zLm1lbnVXaWR0aCAhPSAzMDApIHtcbiAgICAgICAgICBtZW51X2lkLmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgVG91Y2ggQXJlYVxuICAgICAgICB2YXIgJGRyYWdUYXJnZXQ7XG4gICAgICAgIGlmIChvcHRpb25zLmRyYWdnYWJsZSkge1xuICAgICAgICAgICRkcmFnVGFyZ2V0ID0gJCgnPGRpdiBjbGFzcz1cImRyYWctdGFyZ2V0XCI+PC9kaXY+JykuYXR0cignZGF0YS1zaWRlbmF2JywgJHRoaXMuYXR0cignZGF0YS1hY3RpdmF0ZXMnKSk7XG4gICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgkZHJhZ1RhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJGRyYWdUYXJnZXQgPSAkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09ICdsZWZ0Jykge1xuICAgICAgICAgIG1lbnVfaWQuY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgtMTAwJSknKTtcbiAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyAnbGVmdCc6IDAgfSk7IC8vIEFkZCBUb3VjaCBBcmVhXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbWVudV9pZC5hZGRDbGFzcygncmlnaHQtYWxpZ25lZCcpIC8vIENoYW5nZSB0ZXh0LWFsaWdubWVudCB0byByaWdodFxuICAgICAgICAgIC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDEwMCUpJyk7XG4gICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsgJ3JpZ2h0JzogMCB9KTsgLy8gQWRkIFRvdWNoIEFyZWFcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGZpeGVkIHNpZGVuYXYsIGJyaW5nIG1lbnUgb3V0XG4gICAgICAgIGlmIChtZW51X2lkLmhhc0NsYXNzKCdmaXhlZCcpKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkyKSB7XG4gICAgICAgICAgICBtZW51X2lkLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCknKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaW5kb3cgcmVzaXplIHRvIHJlc2V0IG9uIGxhcmdlIHNjcmVlbnMgZml4ZWRcbiAgICAgICAgaWYgKG1lbnVfaWQuaGFzQ2xhc3MoJ2ZpeGVkJykpIHtcbiAgICAgICAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5Mikge1xuICAgICAgICAgICAgICAvLyBDbG9zZSBtZW51IGlmIHdpbmRvdyBpcyByZXNpemVkIGJpZ2dlciB0aGFuIDk5MiBhbmQgdXNlciBoYXMgZml4ZWQgc2lkZW5hdlxuICAgICAgICAgICAgICBpZiAoJCgnI3NpZGVuYXYtb3ZlcmxheScpLmxlbmd0aCAhPT0gMCAmJiBtZW51T3V0KSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVudSh0cnVlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBtZW51X2lkLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgbWVudV9pZC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgICAgIC8vIG1lbnVfaWQuY3NzKCd3aWR0aCcsIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZW51T3V0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICBtZW51X2lkLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoLTEwMCUpJyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudV9pZC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDEwMCUpJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGNsb3NlT25DbGljaywgdGhlbiBhZGQgY2xvc2UgZXZlbnQgZm9yIGFsbCBhIHRhZ3MgaW4gc2lkZSBzaWRlTmF2XG4gICAgICAgIGlmIChvcHRpb25zLmNsb3NlT25DbGljayA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG1lbnVfaWQub24oXCJjbGljay5pdGVtY2xpY2tcIiwgXCJhOm5vdCguY29sbGFwc2libGUtaGVhZGVyKVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVtb3ZlTWVudSA9IGZ1bmN0aW9uIHJlbW92ZU1lbnUocmVzdG9yZU5hdikge1xuICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgLy8gUmVlbmFibGUgc2Nyb2xsaW5nXG4gICAgICAgICAgJCgnYm9keScpLmNzcyh7XG4gICAgICAgICAgICBvdmVyZmxvdzogJycsXG4gICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgICQoJyNzaWRlbmF2LW92ZXJsYXknKS52ZWxvY2l0eSh7IG9wYWNpdHk6IDAgfSwgeyBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9IH0pO1xuICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgLy8gUmVzZXQgcGhhbnRvbSBkaXZcbiAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7IHdpZHRoOiAnJywgcmlnaHQ6ICcnLCBsZWZ0OiAnMCcgfSk7XG4gICAgICAgICAgICBtZW51X2lkLnZlbG9jaXR5KHsgJ3RyYW5zbGF0ZVgnOiAnLTEwMCUnIH0sIHsgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgcXVldWU6IGZhbHNlLFxuICAgICAgICAgICAgICBlYXNpbmc6ICdlYXNlT3V0Q3ViaWMnLFxuICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3RvcmVOYXYgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgRml4ZWQgc2lkZW5hdlxuICAgICAgICAgICAgICAgICAgbWVudV9pZC5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgbWVudV9pZC5jc3MoJ3dpZHRoJywgb3B0aW9ucy5tZW51V2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVzZXQgcGhhbnRvbSBkaXZcbiAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7IHdpZHRoOiAnJywgcmlnaHQ6ICcwJywgbGVmdDogJycgfSk7XG4gICAgICAgICAgICBtZW51X2lkLnZlbG9jaXR5KHsgJ3RyYW5zbGF0ZVgnOiAnMTAwJScgfSwgeyBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICBxdWV1ZTogZmFsc2UsXG4gICAgICAgICAgICAgIGVhc2luZzogJ2Vhc2VPdXRDdWJpYycsXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdG9yZU5hdiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBGaXhlZCBzaWRlbmF2XG4gICAgICAgICAgICAgICAgICBtZW51X2lkLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICBtZW51X2lkLmNzcygnd2lkdGgnLCBvcHRpb25zLm1lbnVXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVG91Y2ggRXZlbnRcbiAgICAgICAgdmFyIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIG1lbnVPdXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAob3B0aW9ucy5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAkZHJhZ1RhcmdldC5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobWVudU91dCkge1xuICAgICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAkZHJhZ1RhcmdldC5oYW1tZXIoe1xuICAgICAgICAgICAgcHJldmVudF9kZWZhdWx0OiBmYWxzZVxuICAgICAgICAgIH0pLmJpbmQoJ3BhbicsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT0gXCJ0b3VjaFwiKSB7XG5cbiAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGUuZ2VzdHVyZS5kaXJlY3Rpb247XG4gICAgICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmNlbnRlci54O1xuICAgICAgICAgICAgICB2YXIgeSA9IGUuZ2VzdHVyZS5jZW50ZXIueTtcbiAgICAgICAgICAgICAgdmFyIHZlbG9jaXR5WCA9IGUuZ2VzdHVyZS52ZWxvY2l0eVg7XG5cbiAgICAgICAgICAgICAgLy8gRGlzYWJsZSBTY3JvbGxpbmdcbiAgICAgICAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XG4gICAgICAgICAgICAgIHZhciBvbGRXaWR0aCA9ICRib2R5LmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgICAgJGJvZHkuY3NzKCdvdmVyZmxvdycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgJGJvZHkud2lkdGgob2xkV2lkdGgpO1xuXG4gICAgICAgICAgICAgIC8vIElmIG92ZXJsYXkgZG9lcyBub3QgZXhpc3QsIGNyZWF0ZSBvbmUgYW5kIGlmIGl0IGlzIGNsaWNrZWQsIGNsb3NlIG1lbnVcbiAgICAgICAgICAgICAgaWYgKCRvdmVybGF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICRvdmVybGF5ID0gJCgnPGRpdiBpZD1cInNpZGVuYXYtb3ZlcmxheVwiPjwvZGl2PicpO1xuICAgICAgICAgICAgICAgICRvdmVybGF5LmNzcygnb3BhY2l0eScsIDApLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCRvdmVybGF5KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIEtlZXAgd2l0aGluIGJvdW5kYXJpZXNcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHggPiBvcHRpb25zLm1lbnVXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgeCA9IG9wdGlvbnMubWVudVdpZHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoeCA8IDApIHtcbiAgICAgICAgICAgICAgICAgIHggPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLmVkZ2UgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIC8vIExlZnQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHggPCBvcHRpb25zLm1lbnVXaWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gUmlnaHQgRGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeCA+PSBvcHRpb25zLm1lbnVXaWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWVudV9pZC5jc3MoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKCcgKyAoeCAtIG9wdGlvbnMubWVudVdpZHRoKSArICdweCknKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0IERpcmVjdGlvblxuICAgICAgICAgICAgICAgIGlmICh4IDwgd2luZG93LmlubmVyV2lkdGggLSBvcHRpb25zLm1lbnVXaWR0aCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSaWdodCBEaXJlY3Rpb25cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh4ID49IHdpbmRvdy5pbm5lcldpZHRoIC0gb3B0aW9ucy5tZW51V2lkdGggLyAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmlnaHRQb3MgPSB4IC0gb3B0aW9ucy5tZW51V2lkdGggLyAyO1xuICAgICAgICAgICAgICAgIGlmIChyaWdodFBvcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgIHJpZ2h0UG9zID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZW51X2lkLmNzcygndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoJyArIHJpZ2h0UG9zICsgJ3B4KScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gUGVyY2VudGFnZSBvdmVybGF5XG4gICAgICAgICAgICAgIHZhciBvdmVybGF5UGVyYztcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheVBlcmMgPSB4IC8gb3B0aW9ucy5tZW51V2lkdGg7XG4gICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiBvdmVybGF5UGVyYyB9LCB7IGR1cmF0aW9uOiAxMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3ZlcmxheVBlcmMgPSBNYXRoLmFicygoeCAtIHdpbmRvdy5pbm5lcldpZHRoKSAvIG9wdGlvbnMubWVudVdpZHRoKTtcbiAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7IG9wYWNpdHk6IG92ZXJsYXlQZXJjIH0sIHsgZHVyYXRpb246IDEwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLmJpbmQoJ3BhbmVuZCcsIGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgIGlmIChlLmdlc3R1cmUucG9pbnRlclR5cGUgPT0gXCJ0b3VjaFwiKSB7XG4gICAgICAgICAgICAgIHZhciAkb3ZlcmxheSA9ICQoJzxkaXYgaWQ9XCJzaWRlbmF2LW92ZXJsYXlcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgdmFyIHZlbG9jaXR5WCA9IGUuZ2VzdHVyZS52ZWxvY2l0eVg7XG4gICAgICAgICAgICAgIHZhciB4ID0gZS5nZXN0dXJlLmNlbnRlci54O1xuICAgICAgICAgICAgICB2YXIgbGVmdFBvcyA9IHggLSBvcHRpb25zLm1lbnVXaWR0aDtcbiAgICAgICAgICAgICAgdmFyIHJpZ2h0UG9zID0geCAtIG9wdGlvbnMubWVudVdpZHRoIC8gMjtcbiAgICAgICAgICAgICAgaWYgKGxlZnRQb3MgPiAwKSB7XG4gICAgICAgICAgICAgICAgbGVmdFBvcyA9IDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHJpZ2h0UG9zIDwgMCkge1xuICAgICAgICAgICAgICAgIHJpZ2h0UG9zID0gMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZWRnZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdmVsb2NpdHlYIDw9IDAuMyB0aGVuIHRoZSB1c2VyIGlzIGZsaW5naW5nIHRoZSBtZW51IGNsb3NlZCBzbyBpZ25vcmUgbWVudU91dFxuICAgICAgICAgICAgICAgIGlmIChtZW51T3V0ICYmIHZlbG9jaXR5WCA8PSAwLjMgfHwgdmVsb2NpdHlYIDwgLTAuNSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG1lbnUgdG8gb3BlblxuICAgICAgICAgICAgICAgICAgaWYgKGxlZnRQb3MgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudV9pZC52ZWxvY2l0eSh7ICd0cmFuc2xhdGVYJzogWzAsIGxlZnRQb3NdIH0sIHsgZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICRvdmVybGF5LnZlbG9jaXR5KHsgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiA1MCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyB3aWR0aDogJzUwJScsIHJpZ2h0OiAwLCBsZWZ0OiAnJyB9KTtcbiAgICAgICAgICAgICAgICAgIG1lbnVPdXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIW1lbnVPdXQgfHwgdmVsb2NpdHlYID4gMC4zKSB7XG4gICAgICAgICAgICAgICAgICAvLyBFbmFibGUgU2Nyb2xsaW5nXG4gICAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgLy8gU2xpZGUgbWVudSBjbG9zZWRcbiAgICAgICAgICAgICAgICAgIG1lbnVfaWQudmVsb2NpdHkoeyAndHJhbnNsYXRlWCc6IFstMSAqIG9wdGlvbnMubWVudVdpZHRoIC0gMTAsIGxlZnRQb3NdIH0sIHsgZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcgfSk7XG4gICAgICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7IG9wYWNpdHk6IDAgfSwgeyBkdXJhdGlvbjogMjAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICAgICAgICAkZHJhZ1RhcmdldC5jc3MoeyB3aWR0aDogJzEwcHgnLCByaWdodDogJycsIGxlZnQ6IDAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChtZW51T3V0ICYmIHZlbG9jaXR5WCA+PSAtMC4zIHx8IHZlbG9jaXR5WCA+IDAuNSkge1xuICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG1lbnUgdG8gb3BlblxuICAgICAgICAgICAgICAgICAgaWYgKHJpZ2h0UG9zICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVfaWQudmVsb2NpdHkoeyAndHJhbnNsYXRlWCc6IFswLCByaWdodFBvc10gfSwgeyBkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDUwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgICAgICAgICRkcmFnVGFyZ2V0LmNzcyh7IHdpZHRoOiAnNTAlJywgcmlnaHQ6ICcnLCBsZWZ0OiAwIH0pO1xuICAgICAgICAgICAgICAgICAgbWVudU91dCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbWVudU91dCB8fCB2ZWxvY2l0eVggPCAtMC4zKSB7XG4gICAgICAgICAgICAgICAgICAvLyBFbmFibGUgU2Nyb2xsaW5nXG4gICAgICAgICAgICAgICAgICAkKCdib2R5JykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICcnLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJydcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAvLyBTbGlkZSBtZW51IGNsb3NlZFxuICAgICAgICAgICAgICAgICAgbWVudV9pZC52ZWxvY2l0eSh7ICd0cmFuc2xhdGVYJzogW29wdGlvbnMubWVudVdpZHRoICsgMTAsIHJpZ2h0UG9zXSB9LCB7IGR1cmF0aW9uOiAyMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0pO1xuICAgICAgICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDIwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pO1xuICAgICAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsgd2lkdGg6ICcxMHB4JywgcmlnaHQ6IDAsIGxlZnQ6ICcnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHRoaXMuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChtZW51T3V0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZW1vdmVNZW51KCk7XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gRGlzYWJsZSBTY3JvbGxpbmdcbiAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIHZhciAkb3ZlcmxheSA9ICQoJzxkaXYgaWQ9XCJzaWRlbmF2LW92ZXJsYXlcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgIHZhciBvbGRXaWR0aCA9ICRib2R5LmlubmVyV2lkdGgoKTtcbiAgICAgICAgICAgICRib2R5LmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAkYm9keS53aWR0aChvbGRXaWR0aCk7XG5cbiAgICAgICAgICAgIC8vIFB1c2ggY3VycmVudCBkcmFnIHRhcmdldCBvbiB0b3Agb2YgRE9NIHRyZWVcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJGRyYWdUYXJnZXQpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5lZGdlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsgd2lkdGg6ICc1MCUnLCByaWdodDogMCwgbGVmdDogJycgfSk7XG4gICAgICAgICAgICAgIG1lbnVfaWQudmVsb2NpdHkoeyAndHJhbnNsYXRlWCc6IFswLCAtMSAqIG9wdGlvbnMubWVudVdpZHRoXSB9LCB7IGR1cmF0aW9uOiAzMDAsIHF1ZXVlOiBmYWxzZSwgZWFzaW5nOiAnZWFzZU91dFF1YWQnIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgJGRyYWdUYXJnZXQuY3NzKHsgd2lkdGg6ICc1MCUnLCByaWdodDogJycsIGxlZnQ6IDAgfSk7XG4gICAgICAgICAgICAgIG1lbnVfaWQudmVsb2NpdHkoeyAndHJhbnNsYXRlWCc6IFswLCBvcHRpb25zLm1lbnVXaWR0aF0gfSwgeyBkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJG92ZXJsYXkuY3NzKCdvcGFjaXR5JywgMCkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBtZW51T3V0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIHBhbm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgICAgICAgICAgICAkb3ZlcmxheS52ZWxvY2l0eSh7IG9wYWNpdHk6IDAgfSwgeyBkdXJhdGlvbjogMzAwLCBxdWV1ZTogZmFsc2UsIGVhc2luZzogJ2Vhc2VPdXRRdWFkJyxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJG92ZXJsYXkpO1xuICAgICAgICAgICAgJG92ZXJsYXkudmVsb2NpdHkoeyBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDMwMCwgcXVldWU6IGZhbHNlLCBlYXNpbmc6ICdlYXNlT3V0UXVhZCcsXG4gICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBtZW51T3V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBwYW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB2YXIgJG92ZXJsYXkgPSAkKCcjc2lkZW5hdi1vdmVybGF5Jyk7XG4gICAgICB2YXIgJGRyYWdUYXJnZXQgPSAkKCcuZHJhZy10YXJnZXRbZGF0YS1zaWRlbmF2PVwiJyArICQodGhpcykuYXR0cignZGF0YS1hY3RpdmF0ZXMnKSArICdcIl0nKTtcbiAgICAgICRvdmVybGF5LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAkZHJhZ1RhcmdldC5yZW1vdmUoKTtcbiAgICAgICQodGhpcykub2ZmKCdjbGljaycpO1xuICAgICAgJG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfSxcbiAgICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xuICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycpO1xuICAgIH0sXG4gICAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICQoJyNzaWRlbmF2LW92ZXJsYXknKS50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cbiAgfTtcblxuICAkLmZuLnNpZGVOYXYgPSBmdW5jdGlvbiAobWV0aG9kT3JPcHRpb25zKSB7XG4gICAgaWYgKG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXSkge1xuICAgICAgcmV0dXJuIG1ldGhvZHNbbWV0aG9kT3JPcHRpb25zXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICB9IGVsc2UgaWYgKCh0eXBlb2YgbWV0aG9kT3JPcHRpb25zID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtZXRob2RPck9wdGlvbnMpKSA9PT0gJ29iamVjdCcgfHwgIW1ldGhvZE9yT3B0aW9ucykge1xuICAgICAgLy8gRGVmYXVsdCB0byBcImluaXRcIlxuICAgICAgcmV0dXJuIG1ldGhvZHMuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkLmVycm9yKCdNZXRob2QgJyArIG1ldGhvZE9yT3B0aW9ucyArICcgZG9lcyBub3QgZXhpc3Qgb24galF1ZXJ5LnNpZGVOYXYnKTtcbiAgICB9XG4gIH07IC8vIFBsdWdpbiBlbmRcbn0pKGpRdWVyeSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuIWZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICBmdW5jdGlvbiBrKGEsIGIsIGMpIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChxKGEsIGMpLCBiKTtcbiAgfWZ1bmN0aW9uIGwoYSwgYiwgYykge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpID8gKG0oYSwgY1tiXSwgYyksICEwKSA6ICExO1xuICB9ZnVuY3Rpb24gbShhLCBiLCBjKSB7XG4gICAgdmFyIGU7aWYgKGEpIGlmIChhLmZvckVhY2gpIGEuZm9yRWFjaChiLCBjKTtlbHNlIGlmIChhLmxlbmd0aCAhPT0gZCkgZm9yIChlID0gMDsgZSA8IGEubGVuZ3RoOykge1xuICAgICAgYi5jYWxsKGMsIGFbZV0sIGUsIGEpLCBlKys7XG4gICAgfSBlbHNlIGZvciAoZSBpbiBhKSB7XG4gICAgICBhLmhhc093blByb3BlcnR5KGUpICYmIGIuY2FsbChjLCBhW2VdLCBlLCBhKTtcbiAgICB9XG4gIH1mdW5jdGlvbiBuKGEsIGIsIGMpIHtcbiAgICBmb3IgKHZhciBlID0gT2JqZWN0LmtleXMoYiksIGYgPSAwOyBmIDwgZS5sZW5ndGg7KSB7XG4gICAgICAoIWMgfHwgYyAmJiBhW2VbZl1dID09PSBkKSAmJiAoYVtlW2ZdXSA9IGJbZVtmXV0pLCBmKys7XG4gICAgfXJldHVybiBhO1xuICB9ZnVuY3Rpb24gbyhhLCBiKSB7XG4gICAgcmV0dXJuIG4oYSwgYiwgITApO1xuICB9ZnVuY3Rpb24gcChhLCBiLCBjKSB7XG4gICAgdmFyIGUsXG4gICAgICAgIGQgPSBiLnByb3RvdHlwZTtlID0gYS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGQpLCBlLmNvbnN0cnVjdG9yID0gYSwgZS5fc3VwZXIgPSBkLCBjICYmIG4oZSwgYyk7XG4gIH1mdW5jdGlvbiBxKGEsIGIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGEuYXBwbHkoYiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9ZnVuY3Rpb24gcihhLCBiKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgYSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGEpKSA9PSBnID8gYS5hcHBseShiID8gYlswXSB8fCBkIDogZCwgYikgOiBhO1xuICB9ZnVuY3Rpb24gcyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGQgPyBiIDogYTtcbiAgfWZ1bmN0aW9uIHQoYSwgYiwgYykge1xuICAgIG0oeChiKSwgZnVuY3Rpb24gKGIpIHtcbiAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcihiLCBjLCAhMSk7XG4gICAgfSk7XG4gIH1mdW5jdGlvbiB1KGEsIGIsIGMpIHtcbiAgICBtKHgoYiksIGZ1bmN0aW9uIChiKSB7XG4gICAgICBhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYiwgYywgITEpO1xuICAgIH0pO1xuICB9ZnVuY3Rpb24gdihhLCBiKSB7XG4gICAgZm9yICg7IGE7KSB7XG4gICAgICBpZiAoYSA9PSBiKSByZXR1cm4gITA7YSA9IGEucGFyZW50Tm9kZTtcbiAgICB9cmV0dXJuICExO1xuICB9ZnVuY3Rpb24gdyhhLCBiKSB7XG4gICAgcmV0dXJuIGEuaW5kZXhPZihiKSA+IC0xO1xuICB9ZnVuY3Rpb24geChhKSB7XG4gICAgcmV0dXJuIGEudHJpbSgpLnNwbGl0KC9cXHMrL2cpO1xuICB9ZnVuY3Rpb24geShhLCBiLCBjKSB7XG4gICAgaWYgKGEuaW5kZXhPZiAmJiAhYykgcmV0dXJuIGEuaW5kZXhPZihiKTtmb3IgKHZhciBkID0gMDsgZCA8IGEubGVuZ3RoOykge1xuICAgICAgaWYgKGMgJiYgYVtkXVtjXSA9PSBiIHx8ICFjICYmIGFbZF0gPT09IGIpIHJldHVybiBkO2QrKztcbiAgICB9cmV0dXJuIC0xO1xuICB9ZnVuY3Rpb24geihhKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsIDApO1xuICB9ZnVuY3Rpb24gQShhLCBiLCBjKSB7XG4gICAgZm9yICh2YXIgZCA9IFtdLCBlID0gW10sIGYgPSAwOyBmIDwgYS5sZW5ndGg7KSB7XG4gICAgICB2YXIgZyA9IGIgPyBhW2ZdW2JdIDogYVtmXTt5KGUsIGcpIDwgMCAmJiBkLnB1c2goYVtmXSksIGVbZl0gPSBnLCBmKys7XG4gICAgfXJldHVybiBjICYmIChkID0gYiA/IGQuc29ydChmdW5jdGlvbiAoYSwgYykge1xuICAgICAgcmV0dXJuIGFbYl0gPiBjW2JdO1xuICAgIH0pIDogZC5zb3J0KCkpLCBkO1xuICB9ZnVuY3Rpb24gQihhLCBiKSB7XG4gICAgZm9yICh2YXIgYywgZiwgZyA9IGJbMF0udG9VcHBlckNhc2UoKSArIGIuc2xpY2UoMSksIGggPSAwOyBoIDwgZS5sZW5ndGg7KSB7XG4gICAgICBpZiAoYyA9IGVbaF0sIGYgPSBjID8gYyArIGcgOiBiLCBmIGluIGEpIHJldHVybiBmO2grKztcbiAgICB9cmV0dXJuIGQ7XG4gIH1mdW5jdGlvbiBEKCkge1xuICAgIHJldHVybiBDKys7XG4gIH1mdW5jdGlvbiBFKGEpIHtcbiAgICB2YXIgYiA9IGEub3duZXJEb2N1bWVudDtyZXR1cm4gYi5kZWZhdWx0VmlldyB8fCBiLnBhcmVudFdpbmRvdztcbiAgfWZ1bmN0aW9uIGFiKGEsIGIpIHtcbiAgICB2YXIgYyA9IHRoaXM7dGhpcy5tYW5hZ2VyID0gYSwgdGhpcy5jYWxsYmFjayA9IGIsIHRoaXMuZWxlbWVudCA9IGEuZWxlbWVudCwgdGhpcy50YXJnZXQgPSBhLm9wdGlvbnMuaW5wdXRUYXJnZXQsIHRoaXMuZG9tSGFuZGxlciA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICByKGEub3B0aW9ucy5lbmFibGUsIFthXSkgJiYgYy5oYW5kbGVyKGIpO1xuICAgIH0sIHRoaXMuaW5pdCgpO1xuICB9ZnVuY3Rpb24gYmIoYSkge1xuICAgIHZhciBiLFxuICAgICAgICBjID0gYS5vcHRpb25zLmlucHV0Q2xhc3M7cmV0dXJuIGIgPSBjID8gYyA6IEggPyB3YiA6IEkgPyBFYiA6IEcgPyBHYiA6IHJiLCBuZXcgYihhLCBjYik7XG4gIH1mdW5jdGlvbiBjYihhLCBiLCBjKSB7XG4gICAgdmFyIGQgPSBjLnBvaW50ZXJzLmxlbmd0aCxcbiAgICAgICAgZSA9IGMuY2hhbmdlZFBvaW50ZXJzLmxlbmd0aCxcbiAgICAgICAgZiA9IGIgJiBPICYmIDAgPT09IGQgLSBlLFxuICAgICAgICBnID0gYiAmIChRIHwgUikgJiYgMCA9PT0gZCAtIGU7Yy5pc0ZpcnN0ID0gISFmLCBjLmlzRmluYWwgPSAhIWcsIGYgJiYgKGEuc2Vzc2lvbiA9IHt9KSwgYy5ldmVudFR5cGUgPSBiLCBkYihhLCBjKSwgYS5lbWl0KFwiaGFtbWVyLmlucHV0XCIsIGMpLCBhLnJlY29nbml6ZShjKSwgYS5zZXNzaW9uLnByZXZJbnB1dCA9IGM7XG4gIH1mdW5jdGlvbiBkYihhLCBiKSB7XG4gICAgdmFyIGMgPSBhLnNlc3Npb24sXG4gICAgICAgIGQgPSBiLnBvaW50ZXJzLFxuICAgICAgICBlID0gZC5sZW5ndGg7Yy5maXJzdElucHV0IHx8IChjLmZpcnN0SW5wdXQgPSBnYihiKSksIGUgPiAxICYmICFjLmZpcnN0TXVsdGlwbGUgPyBjLmZpcnN0TXVsdGlwbGUgPSBnYihiKSA6IDEgPT09IGUgJiYgKGMuZmlyc3RNdWx0aXBsZSA9ICExKTt2YXIgZiA9IGMuZmlyc3RJbnB1dCxcbiAgICAgICAgZyA9IGMuZmlyc3RNdWx0aXBsZSxcbiAgICAgICAgaCA9IGcgPyBnLmNlbnRlciA6IGYuY2VudGVyLFxuICAgICAgICBpID0gYi5jZW50ZXIgPSBoYihkKTtiLnRpbWVTdGFtcCA9IGooKSwgYi5kZWx0YVRpbWUgPSBiLnRpbWVTdGFtcCAtIGYudGltZVN0YW1wLCBiLmFuZ2xlID0gbGIoaCwgaSksIGIuZGlzdGFuY2UgPSBrYihoLCBpKSwgZWIoYywgYiksIGIub2Zmc2V0RGlyZWN0aW9uID0gamIoYi5kZWx0YVgsIGIuZGVsdGFZKSwgYi5zY2FsZSA9IGcgPyBuYihnLnBvaW50ZXJzLCBkKSA6IDEsIGIucm90YXRpb24gPSBnID8gbWIoZy5wb2ludGVycywgZCkgOiAwLCBmYihjLCBiKTt2YXIgayA9IGEuZWxlbWVudDt2KGIuc3JjRXZlbnQudGFyZ2V0LCBrKSAmJiAoayA9IGIuc3JjRXZlbnQudGFyZ2V0KSwgYi50YXJnZXQgPSBrO1xuICB9ZnVuY3Rpb24gZWIoYSwgYikge1xuICAgIHZhciBjID0gYi5jZW50ZXIsXG4gICAgICAgIGQgPSBhLm9mZnNldERlbHRhIHx8IHt9LFxuICAgICAgICBlID0gYS5wcmV2RGVsdGEgfHwge30sXG4gICAgICAgIGYgPSBhLnByZXZJbnB1dCB8fCB7fTsoYi5ldmVudFR5cGUgPT09IE8gfHwgZi5ldmVudFR5cGUgPT09IFEpICYmIChlID0gYS5wcmV2RGVsdGEgPSB7IHg6IGYuZGVsdGFYIHx8IDAsIHk6IGYuZGVsdGFZIHx8IDAgfSwgZCA9IGEub2Zmc2V0RGVsdGEgPSB7IHg6IGMueCwgeTogYy55IH0pLCBiLmRlbHRhWCA9IGUueCArIChjLnggLSBkLngpLCBiLmRlbHRhWSA9IGUueSArIChjLnkgLSBkLnkpO1xuICB9ZnVuY3Rpb24gZmIoYSwgYikge1xuICAgIHZhciBmLFxuICAgICAgICBnLFxuICAgICAgICBoLFxuICAgICAgICBqLFxuICAgICAgICBjID0gYS5sYXN0SW50ZXJ2YWwgfHwgYixcbiAgICAgICAgZSA9IGIudGltZVN0YW1wIC0gYy50aW1lU3RhbXA7aWYgKGIuZXZlbnRUeXBlICE9IFIgJiYgKGUgPiBOIHx8IGMudmVsb2NpdHkgPT09IGQpKSB7XG4gICAgICB2YXIgayA9IGMuZGVsdGFYIC0gYi5kZWx0YVgsXG4gICAgICAgICAgbCA9IGMuZGVsdGFZIC0gYi5kZWx0YVksXG4gICAgICAgICAgbSA9IGliKGUsIGssIGwpO2cgPSBtLngsIGggPSBtLnksIGYgPSBpKG0ueCkgPiBpKG0ueSkgPyBtLnggOiBtLnksIGogPSBqYihrLCBsKSwgYS5sYXN0SW50ZXJ2YWwgPSBiO1xuICAgIH0gZWxzZSBmID0gYy52ZWxvY2l0eSwgZyA9IGMudmVsb2NpdHlYLCBoID0gYy52ZWxvY2l0eVksIGogPSBjLmRpcmVjdGlvbjtiLnZlbG9jaXR5ID0gZiwgYi52ZWxvY2l0eVggPSBnLCBiLnZlbG9jaXR5WSA9IGgsIGIuZGlyZWN0aW9uID0gajtcbiAgfWZ1bmN0aW9uIGdiKGEpIHtcbiAgICBmb3IgKHZhciBiID0gW10sIGMgPSAwOyBjIDwgYS5wb2ludGVycy5sZW5ndGg7KSB7XG4gICAgICBiW2NdID0geyBjbGllbnRYOiBoKGEucG9pbnRlcnNbY10uY2xpZW50WCksIGNsaWVudFk6IGgoYS5wb2ludGVyc1tjXS5jbGllbnRZKSB9LCBjKys7XG4gICAgfXJldHVybiB7IHRpbWVTdGFtcDogaigpLCBwb2ludGVyczogYiwgY2VudGVyOiBoYihiKSwgZGVsdGFYOiBhLmRlbHRhWCwgZGVsdGFZOiBhLmRlbHRhWSB9O1xuICB9ZnVuY3Rpb24gaGIoYSkge1xuICAgIHZhciBiID0gYS5sZW5ndGg7aWYgKDEgPT09IGIpIHJldHVybiB7IHg6IGgoYVswXS5jbGllbnRYKSwgeTogaChhWzBdLmNsaWVudFkpIH07Zm9yICh2YXIgYyA9IDAsIGQgPSAwLCBlID0gMDsgYiA+IGU7KSB7XG4gICAgICBjICs9IGFbZV0uY2xpZW50WCwgZCArPSBhW2VdLmNsaWVudFksIGUrKztcbiAgICB9cmV0dXJuIHsgeDogaChjIC8gYiksIHk6IGgoZCAvIGIpIH07XG4gIH1mdW5jdGlvbiBpYihhLCBiLCBjKSB7XG4gICAgcmV0dXJuIHsgeDogYiAvIGEgfHwgMCwgeTogYyAvIGEgfHwgMCB9O1xuICB9ZnVuY3Rpb24gamIoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiID8gUyA6IGkoYSkgPj0gaShiKSA/IGEgPiAwID8gVCA6IFUgOiBiID4gMCA/IFYgOiBXO1xuICB9ZnVuY3Rpb24ga2IoYSwgYiwgYykge1xuICAgIGMgfHwgKGMgPSAkKTt2YXIgZCA9IGJbY1swXV0gLSBhW2NbMF1dLFxuICAgICAgICBlID0gYltjWzFdXSAtIGFbY1sxXV07cmV0dXJuIE1hdGguc3FydChkICogZCArIGUgKiBlKTtcbiAgfWZ1bmN0aW9uIGxiKGEsIGIsIGMpIHtcbiAgICBjIHx8IChjID0gJCk7dmFyIGQgPSBiW2NbMF1dIC0gYVtjWzBdXSxcbiAgICAgICAgZSA9IGJbY1sxXV0gLSBhW2NbMV1dO3JldHVybiAxODAgKiBNYXRoLmF0YW4yKGUsIGQpIC8gTWF0aC5QSTtcbiAgfWZ1bmN0aW9uIG1iKGEsIGIpIHtcbiAgICByZXR1cm4gbGIoYlsxXSwgYlswXSwgXykgLSBsYihhWzFdLCBhWzBdLCBfKTtcbiAgfWZ1bmN0aW9uIG5iKGEsIGIpIHtcbiAgICByZXR1cm4ga2IoYlswXSwgYlsxXSwgXykgLyBrYihhWzBdLCBhWzFdLCBfKTtcbiAgfWZ1bmN0aW9uIHJiKCkge1xuICAgIHRoaXMuZXZFbCA9IHBiLCB0aGlzLmV2V2luID0gcWIsIHRoaXMuYWxsb3cgPSAhMCwgdGhpcy5wcmVzc2VkID0gITEsIGFiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1mdW5jdGlvbiB3YigpIHtcbiAgICB0aGlzLmV2RWwgPSB1YiwgdGhpcy5ldldpbiA9IHZiLCBhYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0aGlzLnN0b3JlID0gdGhpcy5tYW5hZ2VyLnNlc3Npb24ucG9pbnRlckV2ZW50cyA9IFtdO1xuICB9ZnVuY3Rpb24gQWIoKSB7XG4gICAgdGhpcy5ldlRhcmdldCA9IHliLCB0aGlzLmV2V2luID0gemIsIHRoaXMuc3RhcnRlZCA9ICExLCBhYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ZnVuY3Rpb24gQmIoYSwgYikge1xuICAgIHZhciBjID0geihhLnRvdWNoZXMpLFxuICAgICAgICBkID0geihhLmNoYW5nZWRUb3VjaGVzKTtyZXR1cm4gYiAmIChRIHwgUikgJiYgKGMgPSBBKGMuY29uY2F0KGQpLCBcImlkZW50aWZpZXJcIiwgITApKSwgW2MsIGRdO1xuICB9ZnVuY3Rpb24gRWIoKSB7XG4gICAgdGhpcy5ldlRhcmdldCA9IERiLCB0aGlzLnRhcmdldElkcyA9IHt9LCBhYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ZnVuY3Rpb24gRmIoYSwgYikge1xuICAgIHZhciBjID0geihhLnRvdWNoZXMpLFxuICAgICAgICBkID0gdGhpcy50YXJnZXRJZHM7aWYgKGIgJiAoTyB8IFApICYmIDEgPT09IGMubGVuZ3RoKSByZXR1cm4gZFtjWzBdLmlkZW50aWZpZXJdID0gITAsIFtjLCBjXTt2YXIgZSxcbiAgICAgICAgZixcbiAgICAgICAgZyA9IHooYS5jaGFuZ2VkVG91Y2hlcyksXG4gICAgICAgIGggPSBbXSxcbiAgICAgICAgaSA9IHRoaXMudGFyZ2V0O2lmIChmID0gYy5maWx0ZXIoZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiB2KGEudGFyZ2V0LCBpKTtcbiAgICB9KSwgYiA9PT0gTykgZm9yIChlID0gMDsgZSA8IGYubGVuZ3RoOykge1xuICAgICAgZFtmW2VdLmlkZW50aWZpZXJdID0gITAsIGUrKztcbiAgICB9Zm9yIChlID0gMDsgZSA8IGcubGVuZ3RoOykge1xuICAgICAgZFtnW2VdLmlkZW50aWZpZXJdICYmIGgucHVzaChnW2VdKSwgYiAmIChRIHwgUikgJiYgZGVsZXRlIGRbZ1tlXS5pZGVudGlmaWVyXSwgZSsrO1xuICAgIH1yZXR1cm4gaC5sZW5ndGggPyBbQShmLmNvbmNhdChoKSwgXCJpZGVudGlmaWVyXCIsICEwKSwgaF0gOiB2b2lkIDA7XG4gIH1mdW5jdGlvbiBHYigpIHtcbiAgICBhYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO3ZhciBhID0gcSh0aGlzLmhhbmRsZXIsIHRoaXMpO3RoaXMudG91Y2ggPSBuZXcgRWIodGhpcy5tYW5hZ2VyLCBhKSwgdGhpcy5tb3VzZSA9IG5ldyByYih0aGlzLm1hbmFnZXIsIGEpO1xuICB9ZnVuY3Rpb24gUGIoYSwgYikge1xuICAgIHRoaXMubWFuYWdlciA9IGEsIHRoaXMuc2V0KGIpO1xuICB9ZnVuY3Rpb24gUWIoYSkge1xuICAgIGlmICh3KGEsIE1iKSkgcmV0dXJuIE1iO3ZhciBiID0gdyhhLCBOYiksXG4gICAgICAgIGMgPSB3KGEsIE9iKTtyZXR1cm4gYiAmJiBjID8gTmIgKyBcIiBcIiArIE9iIDogYiB8fCBjID8gYiA/IE5iIDogT2IgOiB3KGEsIExiKSA/IExiIDogS2I7XG4gIH1mdW5jdGlvbiBZYihhKSB7XG4gICAgdGhpcy5pZCA9IEQoKSwgdGhpcy5tYW5hZ2VyID0gbnVsbCwgdGhpcy5vcHRpb25zID0gbyhhIHx8IHt9LCB0aGlzLmRlZmF1bHRzKSwgdGhpcy5vcHRpb25zLmVuYWJsZSA9IHModGhpcy5vcHRpb25zLmVuYWJsZSwgITApLCB0aGlzLnN0YXRlID0gUmIsIHRoaXMuc2ltdWx0YW5lb3VzID0ge30sIHRoaXMucmVxdWlyZUZhaWwgPSBbXTtcbiAgfWZ1bmN0aW9uIFpiKGEpIHtcbiAgICByZXR1cm4gYSAmIFdiID8gXCJjYW5jZWxcIiA6IGEgJiBVYiA/IFwiZW5kXCIgOiBhICYgVGIgPyBcIm1vdmVcIiA6IGEgJiBTYiA/IFwic3RhcnRcIiA6IFwiXCI7XG4gIH1mdW5jdGlvbiAkYihhKSB7XG4gICAgcmV0dXJuIGEgPT0gVyA/IFwiZG93blwiIDogYSA9PSBWID8gXCJ1cFwiIDogYSA9PSBUID8gXCJsZWZ0XCIgOiBhID09IFUgPyBcInJpZ2h0XCIgOiBcIlwiO1xuICB9ZnVuY3Rpb24gX2IoYSwgYikge1xuICAgIHZhciBjID0gYi5tYW5hZ2VyO3JldHVybiBjID8gYy5nZXQoYSkgOiBhO1xuICB9ZnVuY3Rpb24gYWMoKSB7XG4gICAgWWIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfWZ1bmN0aW9uIGJjKCkge1xuICAgIGFjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIHRoaXMucFggPSBudWxsLCB0aGlzLnBZID0gbnVsbDtcbiAgfWZ1bmN0aW9uIGNjKCkge1xuICAgIGFjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1mdW5jdGlvbiBkYygpIHtcbiAgICBZYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCB0aGlzLl90aW1lciA9IG51bGwsIHRoaXMuX2lucHV0ID0gbnVsbDtcbiAgfWZ1bmN0aW9uIGVjKCkge1xuICAgIGFjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1mdW5jdGlvbiBmYygpIHtcbiAgICBhYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9ZnVuY3Rpb24gZ2MoKSB7XG4gICAgWWIuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgdGhpcy5wVGltZSA9ICExLCB0aGlzLnBDZW50ZXIgPSAhMSwgdGhpcy5fdGltZXIgPSBudWxsLCB0aGlzLl9pbnB1dCA9IG51bGwsIHRoaXMuY291bnQgPSAwO1xuICB9ZnVuY3Rpb24gaGMoYSwgYikge1xuICAgIHJldHVybiBiID0gYiB8fCB7fSwgYi5yZWNvZ25pemVycyA9IHMoYi5yZWNvZ25pemVycywgaGMuZGVmYXVsdHMucHJlc2V0KSwgbmV3IGtjKGEsIGIpO1xuICB9ZnVuY3Rpb24ga2MoYSwgYikge1xuICAgIGIgPSBiIHx8IHt9LCB0aGlzLm9wdGlvbnMgPSBvKGIsIGhjLmRlZmF1bHRzKSwgdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0ID0gdGhpcy5vcHRpb25zLmlucHV0VGFyZ2V0IHx8IGEsIHRoaXMuaGFuZGxlcnMgPSB7fSwgdGhpcy5zZXNzaW9uID0ge30sIHRoaXMucmVjb2duaXplcnMgPSBbXSwgdGhpcy5lbGVtZW50ID0gYSwgdGhpcy5pbnB1dCA9IGJiKHRoaXMpLCB0aGlzLnRvdWNoQWN0aW9uID0gbmV3IFBiKHRoaXMsIHRoaXMub3B0aW9ucy50b3VjaEFjdGlvbiksIGxjKHRoaXMsICEwKSwgbShiLnJlY29nbml6ZXJzLCBmdW5jdGlvbiAoYSkge1xuICAgICAgdmFyIGIgPSB0aGlzLmFkZChuZXcgYVswXShhWzFdKSk7YVsyXSAmJiBiLnJlY29nbml6ZVdpdGgoYVsyXSksIGFbM10gJiYgYi5yZXF1aXJlRmFpbHVyZShhWzNdKTtcbiAgICB9LCB0aGlzKTtcbiAgfWZ1bmN0aW9uIGxjKGEsIGIpIHtcbiAgICB2YXIgYyA9IGEuZWxlbWVudDttKGEub3B0aW9ucy5jc3NQcm9wcywgZnVuY3Rpb24gKGEsIGQpIHtcbiAgICAgIGMuc3R5bGVbQihjLnN0eWxlLCBkKV0gPSBiID8gYSA6IFwiXCI7XG4gICAgfSk7XG4gIH1mdW5jdGlvbiBtYyhhLCBjKSB7XG4gICAgdmFyIGQgPSBiLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7ZC5pbml0RXZlbnQoYSwgITAsICEwKSwgZC5nZXN0dXJlID0gYywgYy50YXJnZXQuZGlzcGF0Y2hFdmVudChkKTtcbiAgfXZhciBlID0gW1wiXCIsIFwid2Via2l0XCIsIFwibW96XCIsIFwiTVNcIiwgXCJtc1wiLCBcIm9cIl0sXG4gICAgICBmID0gYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgZyA9IFwiZnVuY3Rpb25cIixcbiAgICAgIGggPSBNYXRoLnJvdW5kLFxuICAgICAgaSA9IE1hdGguYWJzLFxuICAgICAgaiA9IERhdGUubm93LFxuICAgICAgQyA9IDEsXG4gICAgICBGID0gL21vYmlsZXx0YWJsZXR8aXAoYWR8aG9uZXxvZCl8YW5kcm9pZC9pLFxuICAgICAgRyA9IFwib250b3VjaHN0YXJ0XCIgaW4gYSxcbiAgICAgIEggPSBCKGEsIFwiUG9pbnRlckV2ZW50XCIpICE9PSBkLFxuICAgICAgSSA9IEcgJiYgRi50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLFxuICAgICAgSiA9IFwidG91Y2hcIixcbiAgICAgIEsgPSBcInBlblwiLFxuICAgICAgTCA9IFwibW91c2VcIixcbiAgICAgIE0gPSBcImtpbmVjdFwiLFxuICAgICAgTiA9IDI1LFxuICAgICAgTyA9IDEsXG4gICAgICBQID0gMixcbiAgICAgIFEgPSA0LFxuICAgICAgUiA9IDgsXG4gICAgICBTID0gMSxcbiAgICAgIFQgPSAyLFxuICAgICAgVSA9IDQsXG4gICAgICBWID0gOCxcbiAgICAgIFcgPSAxNixcbiAgICAgIFggPSBUIHwgVSxcbiAgICAgIFkgPSBWIHwgVyxcbiAgICAgIFogPSBYIHwgWSxcbiAgICAgICQgPSBbXCJ4XCIsIFwieVwiXSxcbiAgICAgIF8gPSBbXCJjbGllbnRYXCIsIFwiY2xpZW50WVwiXTthYi5wcm90b3R5cGUgPSB7IGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoKSB7fSwgaW5pdDogZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgIHRoaXMuZXZFbCAmJiB0KHRoaXMuZWxlbWVudCwgdGhpcy5ldkVsLCB0aGlzLmRvbUhhbmRsZXIpLCB0aGlzLmV2VGFyZ2V0ICYmIHQodGhpcy50YXJnZXQsIHRoaXMuZXZUYXJnZXQsIHRoaXMuZG9tSGFuZGxlciksIHRoaXMuZXZXaW4gJiYgdChFKHRoaXMuZWxlbWVudCksIHRoaXMuZXZXaW4sIHRoaXMuZG9tSGFuZGxlcik7XG4gICAgfSwgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuZXZFbCAmJiB1KHRoaXMuZWxlbWVudCwgdGhpcy5ldkVsLCB0aGlzLmRvbUhhbmRsZXIpLCB0aGlzLmV2VGFyZ2V0ICYmIHUodGhpcy50YXJnZXQsIHRoaXMuZXZUYXJnZXQsIHRoaXMuZG9tSGFuZGxlciksIHRoaXMuZXZXaW4gJiYgdShFKHRoaXMuZWxlbWVudCksIHRoaXMuZXZXaW4sIHRoaXMuZG9tSGFuZGxlcik7XG4gICAgfSB9O3ZhciBvYiA9IHsgbW91c2Vkb3duOiBPLCBtb3VzZW1vdmU6IFAsIG1vdXNldXA6IFEgfSxcbiAgICAgIHBiID0gXCJtb3VzZWRvd25cIixcbiAgICAgIHFiID0gXCJtb3VzZW1vdmUgbW91c2V1cFwiO3AocmIsIGFiLCB7IGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoYSkge1xuICAgICAgdmFyIGIgPSBvYlthLnR5cGVdO2IgJiBPICYmIDAgPT09IGEuYnV0dG9uICYmICh0aGlzLnByZXNzZWQgPSAhMCksIGIgJiBQICYmIDEgIT09IGEud2hpY2ggJiYgKGIgPSBRKSwgdGhpcy5wcmVzc2VkICYmIHRoaXMuYWxsb3cgJiYgKGIgJiBRICYmICh0aGlzLnByZXNzZWQgPSAhMSksIHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLCBiLCB7IHBvaW50ZXJzOiBbYV0sIGNoYW5nZWRQb2ludGVyczogW2FdLCBwb2ludGVyVHlwZTogTCwgc3JjRXZlbnQ6IGEgfSkpO1xuICAgIH0gfSk7dmFyIHNiID0geyBwb2ludGVyZG93bjogTywgcG9pbnRlcm1vdmU6IFAsIHBvaW50ZXJ1cDogUSwgcG9pbnRlcmNhbmNlbDogUiwgcG9pbnRlcm91dDogUiB9LFxuICAgICAgdGIgPSB7IDI6IEosIDM6IEssIDQ6IEwsIDU6IE0gfSxcbiAgICAgIHViID0gXCJwb2ludGVyZG93blwiLFxuICAgICAgdmIgPSBcInBvaW50ZXJtb3ZlIHBvaW50ZXJ1cCBwb2ludGVyY2FuY2VsXCI7YS5NU1BvaW50ZXJFdmVudCAmJiAodWIgPSBcIk1TUG9pbnRlckRvd25cIiwgdmIgPSBcIk1TUG9pbnRlck1vdmUgTVNQb2ludGVyVXAgTVNQb2ludGVyQ2FuY2VsXCIpLCBwKHdiLCBhYiwgeyBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKGEpIHtcbiAgICAgIHZhciBiID0gdGhpcy5zdG9yZSxcbiAgICAgICAgICBjID0gITEsXG4gICAgICAgICAgZCA9IGEudHlwZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoXCJtc1wiLCBcIlwiKSxcbiAgICAgICAgICBlID0gc2JbZF0sXG4gICAgICAgICAgZiA9IHRiW2EucG9pbnRlclR5cGVdIHx8IGEucG9pbnRlclR5cGUsXG4gICAgICAgICAgZyA9IGYgPT0gSixcbiAgICAgICAgICBoID0geShiLCBhLnBvaW50ZXJJZCwgXCJwb2ludGVySWRcIik7ZSAmIE8gJiYgKDAgPT09IGEuYnV0dG9uIHx8IGcpID8gMCA+IGggJiYgKGIucHVzaChhKSwgaCA9IGIubGVuZ3RoIC0gMSkgOiBlICYgKFEgfCBSKSAmJiAoYyA9ICEwKSwgMCA+IGggfHwgKGJbaF0gPSBhLCB0aGlzLmNhbGxiYWNrKHRoaXMubWFuYWdlciwgZSwgeyBwb2ludGVyczogYiwgY2hhbmdlZFBvaW50ZXJzOiBbYV0sIHBvaW50ZXJUeXBlOiBmLCBzcmNFdmVudDogYSB9KSwgYyAmJiBiLnNwbGljZShoLCAxKSk7XG4gICAgfSB9KTt2YXIgeGIgPSB7IHRvdWNoc3RhcnQ6IE8sIHRvdWNobW92ZTogUCwgdG91Y2hlbmQ6IFEsIHRvdWNoY2FuY2VsOiBSIH0sXG4gICAgICB5YiA9IFwidG91Y2hzdGFydFwiLFxuICAgICAgemIgPSBcInRvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsXCI7cChBYiwgYWIsIHsgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihhKSB7XG4gICAgICB2YXIgYiA9IHhiW2EudHlwZV07aWYgKGIgPT09IE8gJiYgKHRoaXMuc3RhcnRlZCA9ICEwKSwgdGhpcy5zdGFydGVkKSB7XG4gICAgICAgIHZhciBjID0gQmIuY2FsbCh0aGlzLCBhLCBiKTtiICYgKFEgfCBSKSAmJiAwID09PSBjWzBdLmxlbmd0aCAtIGNbMV0ubGVuZ3RoICYmICh0aGlzLnN0YXJ0ZWQgPSAhMSksIHRoaXMuY2FsbGJhY2sodGhpcy5tYW5hZ2VyLCBiLCB7IHBvaW50ZXJzOiBjWzBdLCBjaGFuZ2VkUG9pbnRlcnM6IGNbMV0sIHBvaW50ZXJUeXBlOiBKLCBzcmNFdmVudDogYSB9KTtcbiAgICAgIH1cbiAgICB9IH0pO3ZhciBDYiA9IHsgdG91Y2hzdGFydDogTywgdG91Y2htb3ZlOiBQLCB0b3VjaGVuZDogUSwgdG91Y2hjYW5jZWw6IFIgfSxcbiAgICAgIERiID0gXCJ0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbFwiO3AoRWIsIGFiLCB7IGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoYSkge1xuICAgICAgdmFyIGIgPSBDYlthLnR5cGVdLFxuICAgICAgICAgIGMgPSBGYi5jYWxsKHRoaXMsIGEsIGIpO2MgJiYgdGhpcy5jYWxsYmFjayh0aGlzLm1hbmFnZXIsIGIsIHsgcG9pbnRlcnM6IGNbMF0sIGNoYW5nZWRQb2ludGVyczogY1sxXSwgcG9pbnRlclR5cGU6IEosIHNyY0V2ZW50OiBhIH0pO1xuICAgIH0gfSksIHAoR2IsIGFiLCB7IGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoYSwgYiwgYykge1xuICAgICAgdmFyIGQgPSBjLnBvaW50ZXJUeXBlID09IEosXG4gICAgICAgICAgZSA9IGMucG9pbnRlclR5cGUgPT0gTDtpZiAoZCkgdGhpcy5tb3VzZS5hbGxvdyA9ICExO2Vsc2UgaWYgKGUgJiYgIXRoaXMubW91c2UuYWxsb3cpIHJldHVybjtiICYgKFEgfCBSKSAmJiAodGhpcy5tb3VzZS5hbGxvdyA9ICEwKSwgdGhpcy5jYWxsYmFjayhhLCBiLCBjKTtcbiAgICB9LCBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgdGhpcy50b3VjaC5kZXN0cm95KCksIHRoaXMubW91c2UuZGVzdHJveSgpO1xuICAgIH0gfSk7dmFyIEhiID0gQihmLnN0eWxlLCBcInRvdWNoQWN0aW9uXCIpLFxuICAgICAgSWIgPSBIYiAhPT0gZCxcbiAgICAgIEpiID0gXCJjb21wdXRlXCIsXG4gICAgICBLYiA9IFwiYXV0b1wiLFxuICAgICAgTGIgPSBcIm1hbmlwdWxhdGlvblwiLFxuICAgICAgTWIgPSBcIm5vbmVcIixcbiAgICAgIE5iID0gXCJwYW4teFwiLFxuICAgICAgT2IgPSBcInBhbi15XCI7UGIucHJvdG90eXBlID0geyBzZXQ6IGZ1bmN0aW9uIHNldChhKSB7XG4gICAgICBhID09IEpiICYmIChhID0gdGhpcy5jb21wdXRlKCkpLCBJYiAmJiAodGhpcy5tYW5hZ2VyLmVsZW1lbnQuc3R5bGVbSGJdID0gYSksIHRoaXMuYWN0aW9ucyA9IGEudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgfSwgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgICB0aGlzLnNldCh0aGlzLm1hbmFnZXIub3B0aW9ucy50b3VjaEFjdGlvbik7XG4gICAgfSwgY29tcHV0ZTogZnVuY3Rpb24gY29tcHV0ZSgpIHtcbiAgICAgIHZhciBhID0gW107cmV0dXJuIG0odGhpcy5tYW5hZ2VyLnJlY29nbml6ZXJzLCBmdW5jdGlvbiAoYikge1xuICAgICAgICByKGIub3B0aW9ucy5lbmFibGUsIFtiXSkgJiYgKGEgPSBhLmNvbmNhdChiLmdldFRvdWNoQWN0aW9uKCkpKTtcbiAgICAgIH0pLCBRYihhLmpvaW4oXCIgXCIpKTtcbiAgICB9LCBwcmV2ZW50RGVmYXVsdHM6IGZ1bmN0aW9uIHByZXZlbnREZWZhdWx0cyhhKSB7XG4gICAgICBpZiAoIUliKSB7XG4gICAgICAgIHZhciBiID0gYS5zcmNFdmVudCxcbiAgICAgICAgICAgIGMgPSBhLm9mZnNldERpcmVjdGlvbjtpZiAodGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkKSByZXR1cm4gYi5wcmV2ZW50RGVmYXVsdCgpLCB2b2lkIDA7dmFyIGQgPSB0aGlzLmFjdGlvbnMsXG4gICAgICAgICAgICBlID0gdyhkLCBNYiksXG4gICAgICAgICAgICBmID0gdyhkLCBPYiksXG4gICAgICAgICAgICBnID0gdyhkLCBOYik7cmV0dXJuIGUgfHwgZiAmJiBjICYgWCB8fCBnICYmIGMgJiBZID8gdGhpcy5wcmV2ZW50U3JjKGIpIDogdm9pZCAwO1xuICAgICAgfVxuICAgIH0sIHByZXZlbnRTcmM6IGZ1bmN0aW9uIHByZXZlbnRTcmMoYSkge1xuICAgICAgdGhpcy5tYW5hZ2VyLnNlc3Npb24ucHJldmVudGVkID0gITAsIGEucHJldmVudERlZmF1bHQoKTtcbiAgICB9IH07dmFyIFJiID0gMSxcbiAgICAgIFNiID0gMixcbiAgICAgIFRiID0gNCxcbiAgICAgIFViID0gOCxcbiAgICAgIFZiID0gVWIsXG4gICAgICBXYiA9IDE2LFxuICAgICAgWGIgPSAzMjtZYi5wcm90b3R5cGUgPSB7IGRlZmF1bHRzOiB7fSwgc2V0OiBmdW5jdGlvbiBzZXQoYSkge1xuICAgICAgcmV0dXJuIG4odGhpcy5vcHRpb25zLCBhKSwgdGhpcy5tYW5hZ2VyICYmIHRoaXMubWFuYWdlci50b3VjaEFjdGlvbi51cGRhdGUoKSwgdGhpcztcbiAgICB9LCByZWNvZ25pemVXaXRoOiBmdW5jdGlvbiByZWNvZ25pemVXaXRoKGEpIHtcbiAgICAgIGlmIChsKGEsIFwicmVjb2duaXplV2l0aFwiLCB0aGlzKSkgcmV0dXJuIHRoaXM7dmFyIGIgPSB0aGlzLnNpbXVsdGFuZW91cztyZXR1cm4gYSA9IF9iKGEsIHRoaXMpLCBiW2EuaWRdIHx8IChiW2EuaWRdID0gYSwgYS5yZWNvZ25pemVXaXRoKHRoaXMpKSwgdGhpcztcbiAgICB9LCBkcm9wUmVjb2duaXplV2l0aDogZnVuY3Rpb24gZHJvcFJlY29nbml6ZVdpdGgoYSkge1xuICAgICAgcmV0dXJuIGwoYSwgXCJkcm9wUmVjb2duaXplV2l0aFwiLCB0aGlzKSA/IHRoaXMgOiAoYSA9IF9iKGEsIHRoaXMpLCBkZWxldGUgdGhpcy5zaW11bHRhbmVvdXNbYS5pZF0sIHRoaXMpO1xuICAgIH0sIHJlcXVpcmVGYWlsdXJlOiBmdW5jdGlvbiByZXF1aXJlRmFpbHVyZShhKSB7XG4gICAgICBpZiAobChhLCBcInJlcXVpcmVGYWlsdXJlXCIsIHRoaXMpKSByZXR1cm4gdGhpczt2YXIgYiA9IHRoaXMucmVxdWlyZUZhaWw7cmV0dXJuIGEgPSBfYihhLCB0aGlzKSwgLTEgPT09IHkoYiwgYSkgJiYgKGIucHVzaChhKSwgYS5yZXF1aXJlRmFpbHVyZSh0aGlzKSksIHRoaXM7XG4gICAgfSwgZHJvcFJlcXVpcmVGYWlsdXJlOiBmdW5jdGlvbiBkcm9wUmVxdWlyZUZhaWx1cmUoYSkge1xuICAgICAgaWYgKGwoYSwgXCJkcm9wUmVxdWlyZUZhaWx1cmVcIiwgdGhpcykpIHJldHVybiB0aGlzO2EgPSBfYihhLCB0aGlzKTt2YXIgYiA9IHkodGhpcy5yZXF1aXJlRmFpbCwgYSk7cmV0dXJuIGIgPiAtMSAmJiB0aGlzLnJlcXVpcmVGYWlsLnNwbGljZShiLCAxKSwgdGhpcztcbiAgICB9LCBoYXNSZXF1aXJlRmFpbHVyZXM6IGZ1bmN0aW9uIGhhc1JlcXVpcmVGYWlsdXJlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVpcmVGYWlsLmxlbmd0aCA+IDA7XG4gICAgfSwgY2FuUmVjb2duaXplV2l0aDogZnVuY3Rpb24gY2FuUmVjb2duaXplV2l0aChhKSB7XG4gICAgICByZXR1cm4gISF0aGlzLnNpbXVsdGFuZW91c1thLmlkXTtcbiAgICB9LCBlbWl0OiBmdW5jdGlvbiBlbWl0KGEpIHtcbiAgICAgIGZ1bmN0aW9uIGQoZCkge1xuICAgICAgICBiLm1hbmFnZXIuZW1pdChiLm9wdGlvbnMuZXZlbnQgKyAoZCA/IFpiKGMpIDogXCJcIiksIGEpO1xuICAgICAgfXZhciBiID0gdGhpcyxcbiAgICAgICAgICBjID0gdGhpcy5zdGF0ZTtVYiA+IGMgJiYgZCghMCksIGQoKSwgYyA+PSBVYiAmJiBkKCEwKTtcbiAgICB9LCB0cnlFbWl0OiBmdW5jdGlvbiB0cnlFbWl0KGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbkVtaXQoKSA/IHRoaXMuZW1pdChhKSA6ICh0aGlzLnN0YXRlID0gWGIsIHZvaWQgMCk7XG4gICAgfSwgY2FuRW1pdDogZnVuY3Rpb24gY2FuRW1pdCgpIHtcbiAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5yZXF1aXJlRmFpbC5sZW5ndGg7KSB7XG4gICAgICAgIGlmICghKHRoaXMucmVxdWlyZUZhaWxbYV0uc3RhdGUgJiAoWGIgfCBSYikpKSByZXR1cm4gITE7YSsrO1xuICAgICAgfXJldHVybiAhMDtcbiAgICB9LCByZWNvZ25pemU6IGZ1bmN0aW9uIHJlY29nbml6ZShhKSB7XG4gICAgICB2YXIgYiA9IG4oe30sIGEpO3JldHVybiByKHRoaXMub3B0aW9ucy5lbmFibGUsIFt0aGlzLCBiXSkgPyAodGhpcy5zdGF0ZSAmIChWYiB8IFdiIHwgWGIpICYmICh0aGlzLnN0YXRlID0gUmIpLCB0aGlzLnN0YXRlID0gdGhpcy5wcm9jZXNzKGIpLCB0aGlzLnN0YXRlICYgKFNiIHwgVGIgfCBVYiB8IFdiKSAmJiB0aGlzLnRyeUVtaXQoYiksIHZvaWQgMCkgOiAodGhpcy5yZXNldCgpLCB0aGlzLnN0YXRlID0gWGIsIHZvaWQgMCk7XG4gICAgfSwgcHJvY2VzczogZnVuY3Rpb24gcHJvY2VzcygpIHt9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gZ2V0VG91Y2hBY3Rpb24oKSB7fSwgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KCkge30gfSwgcChhYywgWWIsIHsgZGVmYXVsdHM6IHsgcG9pbnRlcnM6IDEgfSwgYXR0clRlc3Q6IGZ1bmN0aW9uIGF0dHJUZXN0KGEpIHtcbiAgICAgIHZhciBiID0gdGhpcy5vcHRpb25zLnBvaW50ZXJzO3JldHVybiAwID09PSBiIHx8IGEucG9pbnRlcnMubGVuZ3RoID09PSBiO1xuICAgIH0sIHByb2Nlc3M6IGZ1bmN0aW9uIHByb2Nlc3MoYSkge1xuICAgICAgdmFyIGIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGMgPSBhLmV2ZW50VHlwZSxcbiAgICAgICAgICBkID0gYiAmIChTYiB8IFRiKSxcbiAgICAgICAgICBlID0gdGhpcy5hdHRyVGVzdChhKTtyZXR1cm4gZCAmJiAoYyAmIFIgfHwgIWUpID8gYiB8IFdiIDogZCB8fCBlID8gYyAmIFEgPyBiIHwgVWIgOiBiICYgU2IgPyBiIHwgVGIgOiBTYiA6IFhiO1xuICAgIH0gfSksIHAoYmMsIGFjLCB7IGRlZmF1bHRzOiB7IGV2ZW50OiBcInBhblwiLCB0aHJlc2hvbGQ6IDEwLCBwb2ludGVyczogMSwgZGlyZWN0aW9uOiBaIH0sIGdldFRvdWNoQWN0aW9uOiBmdW5jdGlvbiBnZXRUb3VjaEFjdGlvbigpIHtcbiAgICAgIHZhciBhID0gdGhpcy5vcHRpb25zLmRpcmVjdGlvbixcbiAgICAgICAgICBiID0gW107cmV0dXJuIGEgJiBYICYmIGIucHVzaChPYiksIGEgJiBZICYmIGIucHVzaChOYiksIGI7XG4gICAgfSwgZGlyZWN0aW9uVGVzdDogZnVuY3Rpb24gZGlyZWN0aW9uVGVzdChhKSB7XG4gICAgICB2YXIgYiA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgICBjID0gITAsXG4gICAgICAgICAgZCA9IGEuZGlzdGFuY2UsXG4gICAgICAgICAgZSA9IGEuZGlyZWN0aW9uLFxuICAgICAgICAgIGYgPSBhLmRlbHRhWCxcbiAgICAgICAgICBnID0gYS5kZWx0YVk7cmV0dXJuIGUgJiBiLmRpcmVjdGlvbiB8fCAoYi5kaXJlY3Rpb24gJiBYID8gKGUgPSAwID09PSBmID8gUyA6IDAgPiBmID8gVCA6IFUsIGMgPSBmICE9IHRoaXMucFgsIGQgPSBNYXRoLmFicyhhLmRlbHRhWCkpIDogKGUgPSAwID09PSBnID8gUyA6IDAgPiBnID8gViA6IFcsIGMgPSBnICE9IHRoaXMucFksIGQgPSBNYXRoLmFicyhhLmRlbHRhWSkpKSwgYS5kaXJlY3Rpb24gPSBlLCBjICYmIGQgPiBiLnRocmVzaG9sZCAmJiBlICYgYi5kaXJlY3Rpb247XG4gICAgfSwgYXR0clRlc3Q6IGZ1bmN0aW9uIGF0dHJUZXN0KGEpIHtcbiAgICAgIHJldHVybiBhYy5wcm90b3R5cGUuYXR0clRlc3QuY2FsbCh0aGlzLCBhKSAmJiAodGhpcy5zdGF0ZSAmIFNiIHx8ICEodGhpcy5zdGF0ZSAmIFNiKSAmJiB0aGlzLmRpcmVjdGlvblRlc3QoYSkpO1xuICAgIH0sIGVtaXQ6IGZ1bmN0aW9uIGVtaXQoYSkge1xuICAgICAgdGhpcy5wWCA9IGEuZGVsdGFYLCB0aGlzLnBZID0gYS5kZWx0YVk7dmFyIGIgPSAkYihhLmRpcmVjdGlvbik7YiAmJiB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQgKyBiLCBhKSwgdGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsIGEpO1xuICAgIH0gfSksIHAoY2MsIGFjLCB7IGRlZmF1bHRzOiB7IGV2ZW50OiBcInBpbmNoXCIsIHRocmVzaG9sZDogMCwgcG9pbnRlcnM6IDIgfSwgZ2V0VG91Y2hBY3Rpb246IGZ1bmN0aW9uIGdldFRvdWNoQWN0aW9uKCkge1xuICAgICAgcmV0dXJuIFtNYl07XG4gICAgfSwgYXR0clRlc3Q6IGZ1bmN0aW9uIGF0dHJUZXN0KGEpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsIGEpICYmIChNYXRoLmFicyhhLnNjYWxlIC0gMSkgPiB0aGlzLm9wdGlvbnMudGhyZXNob2xkIHx8IHRoaXMuc3RhdGUgJiBTYik7XG4gICAgfSwgZW1pdDogZnVuY3Rpb24gZW1pdChhKSB7XG4gICAgICBpZiAodGhpcy5fc3VwZXIuZW1pdC5jYWxsKHRoaXMsIGEpLCAxICE9PSBhLnNjYWxlKSB7XG4gICAgICAgIHZhciBiID0gYS5zY2FsZSA8IDEgPyBcImluXCIgOiBcIm91dFwiO3RoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCArIGIsIGEpO1xuICAgICAgfVxuICAgIH0gfSksIHAoZGMsIFliLCB7IGRlZmF1bHRzOiB7IGV2ZW50OiBcInByZXNzXCIsIHBvaW50ZXJzOiAxLCB0aW1lOiA1MDAsIHRocmVzaG9sZDogNSB9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gZ2V0VG91Y2hBY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW0tiXTtcbiAgICB9LCBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKGEpIHtcbiAgICAgIHZhciBiID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGMgPSBhLnBvaW50ZXJzLmxlbmd0aCA9PT0gYi5wb2ludGVycyxcbiAgICAgICAgICBkID0gYS5kaXN0YW5jZSA8IGIudGhyZXNob2xkLFxuICAgICAgICAgIGUgPSBhLmRlbHRhVGltZSA+IGIudGltZTtpZiAodGhpcy5faW5wdXQgPSBhLCAhZCB8fCAhYyB8fCBhLmV2ZW50VHlwZSAmIChRIHwgUikgJiYgIWUpIHRoaXMucmVzZXQoKTtlbHNlIGlmIChhLmV2ZW50VHlwZSAmIE8pIHRoaXMucmVzZXQoKSwgdGhpcy5fdGltZXIgPSBrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZiLCB0aGlzLnRyeUVtaXQoKTtcbiAgICAgIH0sIGIudGltZSwgdGhpcyk7ZWxzZSBpZiAoYS5ldmVudFR5cGUgJiBRKSByZXR1cm4gVmI7cmV0dXJuIFhiO1xuICAgIH0sIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lcik7XG4gICAgfSwgZW1pdDogZnVuY3Rpb24gZW1pdChhKSB7XG4gICAgICB0aGlzLnN0YXRlID09PSBWYiAmJiAoYSAmJiBhLmV2ZW50VHlwZSAmIFEgPyB0aGlzLm1hbmFnZXIuZW1pdCh0aGlzLm9wdGlvbnMuZXZlbnQgKyBcInVwXCIsIGEpIDogKHRoaXMuX2lucHV0LnRpbWVTdGFtcCA9IGooKSwgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50LCB0aGlzLl9pbnB1dCkpKTtcbiAgICB9IH0pLCBwKGVjLCBhYywgeyBkZWZhdWx0czogeyBldmVudDogXCJyb3RhdGVcIiwgdGhyZXNob2xkOiAwLCBwb2ludGVyczogMiB9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gZ2V0VG91Y2hBY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW01iXTtcbiAgICB9LCBhdHRyVGVzdDogZnVuY3Rpb24gYXR0clRlc3QoYSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N1cGVyLmF0dHJUZXN0LmNhbGwodGhpcywgYSkgJiYgKE1hdGguYWJzKGEucm90YXRpb24pID4gdGhpcy5vcHRpb25zLnRocmVzaG9sZCB8fCB0aGlzLnN0YXRlICYgU2IpO1xuICAgIH0gfSksIHAoZmMsIGFjLCB7IGRlZmF1bHRzOiB7IGV2ZW50OiBcInN3aXBlXCIsIHRocmVzaG9sZDogMTAsIHZlbG9jaXR5OiAuNjUsIGRpcmVjdGlvbjogWCB8IFksIHBvaW50ZXJzOiAxIH0sIGdldFRvdWNoQWN0aW9uOiBmdW5jdGlvbiBnZXRUb3VjaEFjdGlvbigpIHtcbiAgICAgIHJldHVybiBiYy5wcm90b3R5cGUuZ2V0VG91Y2hBY3Rpb24uY2FsbCh0aGlzKTtcbiAgICB9LCBhdHRyVGVzdDogZnVuY3Rpb24gYXR0clRlc3QoYSkge1xuICAgICAgdmFyIGMsXG4gICAgICAgICAgYiA9IHRoaXMub3B0aW9ucy5kaXJlY3Rpb247cmV0dXJuIGIgJiAoWCB8IFkpID8gYyA9IGEudmVsb2NpdHkgOiBiICYgWCA/IGMgPSBhLnZlbG9jaXR5WCA6IGIgJiBZICYmIChjID0gYS52ZWxvY2l0eVkpLCB0aGlzLl9zdXBlci5hdHRyVGVzdC5jYWxsKHRoaXMsIGEpICYmIGIgJiBhLmRpcmVjdGlvbiAmJiBhLmRpc3RhbmNlID4gdGhpcy5vcHRpb25zLnRocmVzaG9sZCAmJiBpKGMpID4gdGhpcy5vcHRpb25zLnZlbG9jaXR5ICYmIGEuZXZlbnRUeXBlICYgUTtcbiAgICB9LCBlbWl0OiBmdW5jdGlvbiBlbWl0KGEpIHtcbiAgICAgIHZhciBiID0gJGIoYS5kaXJlY3Rpb24pO2IgJiYgdGhpcy5tYW5hZ2VyLmVtaXQodGhpcy5vcHRpb25zLmV2ZW50ICsgYiwgYSksIHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCwgYSk7XG4gICAgfSB9KSwgcChnYywgWWIsIHsgZGVmYXVsdHM6IHsgZXZlbnQ6IFwidGFwXCIsIHBvaW50ZXJzOiAxLCB0YXBzOiAxLCBpbnRlcnZhbDogMzAwLCB0aW1lOiAyNTAsIHRocmVzaG9sZDogMiwgcG9zVGhyZXNob2xkOiAxMCB9LCBnZXRUb3VjaEFjdGlvbjogZnVuY3Rpb24gZ2V0VG91Y2hBY3Rpb24oKSB7XG4gICAgICByZXR1cm4gW0xiXTtcbiAgICB9LCBwcm9jZXNzOiBmdW5jdGlvbiBwcm9jZXNzKGEpIHtcbiAgICAgIHZhciBiID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgIGMgPSBhLnBvaW50ZXJzLmxlbmd0aCA9PT0gYi5wb2ludGVycyxcbiAgICAgICAgICBkID0gYS5kaXN0YW5jZSA8IGIudGhyZXNob2xkLFxuICAgICAgICAgIGUgPSBhLmRlbHRhVGltZSA8IGIudGltZTtpZiAodGhpcy5yZXNldCgpLCBhLmV2ZW50VHlwZSAmIE8gJiYgMCA9PT0gdGhpcy5jb3VudCkgcmV0dXJuIHRoaXMuZmFpbFRpbWVvdXQoKTtpZiAoZCAmJiBlICYmIGMpIHtcbiAgICAgICAgaWYgKGEuZXZlbnRUeXBlICE9IFEpIHJldHVybiB0aGlzLmZhaWxUaW1lb3V0KCk7dmFyIGYgPSB0aGlzLnBUaW1lID8gYS50aW1lU3RhbXAgLSB0aGlzLnBUaW1lIDwgYi5pbnRlcnZhbCA6ICEwLFxuICAgICAgICAgICAgZyA9ICF0aGlzLnBDZW50ZXIgfHwga2IodGhpcy5wQ2VudGVyLCBhLmNlbnRlcikgPCBiLnBvc1RocmVzaG9sZDt0aGlzLnBUaW1lID0gYS50aW1lU3RhbXAsIHRoaXMucENlbnRlciA9IGEuY2VudGVyLCBnICYmIGYgPyB0aGlzLmNvdW50ICs9IDEgOiB0aGlzLmNvdW50ID0gMSwgdGhpcy5faW5wdXQgPSBhO3ZhciBoID0gdGhpcy5jb3VudCAlIGIudGFwcztpZiAoMCA9PT0gaCkgcmV0dXJuIHRoaXMuaGFzUmVxdWlyZUZhaWx1cmVzKCkgPyAodGhpcy5fdGltZXIgPSBrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnN0YXRlID0gVmIsIHRoaXMudHJ5RW1pdCgpO1xuICAgICAgICB9LCBiLmludGVydmFsLCB0aGlzKSwgU2IpIDogVmI7XG4gICAgICB9cmV0dXJuIFhiO1xuICAgIH0sIGZhaWxUaW1lb3V0OiBmdW5jdGlvbiBmYWlsVGltZW91dCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aW1lciA9IGsoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YXRlID0gWGI7XG4gICAgICB9LCB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwsIHRoaXMpLCBYYjtcbiAgICB9LCByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICAgIH0sIGVtaXQ6IGZ1bmN0aW9uIGVtaXQoKSB7XG4gICAgICB0aGlzLnN0YXRlID09IFZiICYmICh0aGlzLl9pbnB1dC50YXBDb3VudCA9IHRoaXMuY291bnQsIHRoaXMubWFuYWdlci5lbWl0KHRoaXMub3B0aW9ucy5ldmVudCwgdGhpcy5faW5wdXQpKTtcbiAgICB9IH0pLCBoYy5WRVJTSU9OID0gXCIyLjAuNFwiLCBoYy5kZWZhdWx0cyA9IHsgZG9tRXZlbnRzOiAhMSwgdG91Y2hBY3Rpb246IEpiLCBlbmFibGU6ICEwLCBpbnB1dFRhcmdldDogbnVsbCwgaW5wdXRDbGFzczogbnVsbCwgcHJlc2V0OiBbW2VjLCB7IGVuYWJsZTogITEgfV0sIFtjYywgeyBlbmFibGU6ICExIH0sIFtcInJvdGF0ZVwiXV0sIFtmYywgeyBkaXJlY3Rpb246IFggfV0sIFtiYywgeyBkaXJlY3Rpb246IFggfSwgW1wic3dpcGVcIl1dLCBbZ2NdLCBbZ2MsIHsgZXZlbnQ6IFwiZG91YmxldGFwXCIsIHRhcHM6IDIgfSwgW1widGFwXCJdXSwgW2RjXV0sIGNzc1Byb3BzOiB7IHVzZXJTZWxlY3Q6IFwiZGVmYXVsdFwiLCB0b3VjaFNlbGVjdDogXCJub25lXCIsIHRvdWNoQ2FsbG91dDogXCJub25lXCIsIGNvbnRlbnRab29taW5nOiBcIm5vbmVcIiwgdXNlckRyYWc6IFwibm9uZVwiLCB0YXBIaWdobGlnaHRDb2xvcjogXCJyZ2JhKDAsMCwwLDApXCIgfSB9O3ZhciBpYyA9IDEsXG4gICAgICBqYyA9IDI7a2MucHJvdG90eXBlID0geyBzZXQ6IGZ1bmN0aW9uIHNldChhKSB7XG4gICAgICByZXR1cm4gbih0aGlzLm9wdGlvbnMsIGEpLCBhLnRvdWNoQWN0aW9uICYmIHRoaXMudG91Y2hBY3Rpb24udXBkYXRlKCksIGEuaW5wdXRUYXJnZXQgJiYgKHRoaXMuaW5wdXQuZGVzdHJveSgpLCB0aGlzLmlucHV0LnRhcmdldCA9IGEuaW5wdXRUYXJnZXQsIHRoaXMuaW5wdXQuaW5pdCgpKSwgdGhpcztcbiAgICB9LCBzdG9wOiBmdW5jdGlvbiBzdG9wKGEpIHtcbiAgICAgIHRoaXMuc2Vzc2lvbi5zdG9wcGVkID0gYSA/IGpjIDogaWM7XG4gICAgfSwgcmVjb2duaXplOiBmdW5jdGlvbiByZWNvZ25pemUoYSkge1xuICAgICAgdmFyIGIgPSB0aGlzLnNlc3Npb247aWYgKCFiLnN0b3BwZWQpIHtcbiAgICAgICAgdGhpcy50b3VjaEFjdGlvbi5wcmV2ZW50RGVmYXVsdHMoYSk7dmFyIGMsXG4gICAgICAgICAgICBkID0gdGhpcy5yZWNvZ25pemVycyxcbiAgICAgICAgICAgIGUgPSBiLmN1clJlY29nbml6ZXI7KCFlIHx8IGUgJiYgZS5zdGF0ZSAmIFZiKSAmJiAoZSA9IGIuY3VyUmVjb2duaXplciA9IG51bGwpO2ZvciAodmFyIGYgPSAwOyBmIDwgZC5sZW5ndGg7KSB7XG4gICAgICAgICAgYyA9IGRbZl0sIGIuc3RvcHBlZCA9PT0gamMgfHwgZSAmJiBjICE9IGUgJiYgIWMuY2FuUmVjb2duaXplV2l0aChlKSA/IGMucmVzZXQoKSA6IGMucmVjb2duaXplKGEpLCAhZSAmJiBjLnN0YXRlICYgKFNiIHwgVGIgfCBVYikgJiYgKGUgPSBiLmN1clJlY29nbml6ZXIgPSBjKSwgZisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgZ2V0OiBmdW5jdGlvbiBnZXQoYSkge1xuICAgICAgaWYgKGEgaW5zdGFuY2VvZiBZYikgcmV0dXJuIGE7Zm9yICh2YXIgYiA9IHRoaXMucmVjb2duaXplcnMsIGMgPSAwOyBjIDwgYi5sZW5ndGg7IGMrKykge1xuICAgICAgICBpZiAoYltjXS5vcHRpb25zLmV2ZW50ID09IGEpIHJldHVybiBiW2NdO1xuICAgICAgfXJldHVybiBudWxsO1xuICAgIH0sIGFkZDogZnVuY3Rpb24gYWRkKGEpIHtcbiAgICAgIGlmIChsKGEsIFwiYWRkXCIsIHRoaXMpKSByZXR1cm4gdGhpczt2YXIgYiA9IHRoaXMuZ2V0KGEub3B0aW9ucy5ldmVudCk7cmV0dXJuIGIgJiYgdGhpcy5yZW1vdmUoYiksIHRoaXMucmVjb2duaXplcnMucHVzaChhKSwgYS5tYW5hZ2VyID0gdGhpcywgdGhpcy50b3VjaEFjdGlvbi51cGRhdGUoKSwgYTtcbiAgICB9LCByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShhKSB7XG4gICAgICBpZiAobChhLCBcInJlbW92ZVwiLCB0aGlzKSkgcmV0dXJuIHRoaXM7dmFyIGIgPSB0aGlzLnJlY29nbml6ZXJzO3JldHVybiBhID0gdGhpcy5nZXQoYSksIGIuc3BsaWNlKHkoYiwgYSksIDEpLCB0aGlzLnRvdWNoQWN0aW9uLnVwZGF0ZSgpLCB0aGlzO1xuICAgIH0sIG9uOiBmdW5jdGlvbiBvbihhLCBiKSB7XG4gICAgICB2YXIgYyA9IHRoaXMuaGFuZGxlcnM7cmV0dXJuIG0oeChhKSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgY1thXSA9IGNbYV0gfHwgW10sIGNbYV0ucHVzaChiKTtcbiAgICAgIH0pLCB0aGlzO1xuICAgIH0sIG9mZjogZnVuY3Rpb24gb2ZmKGEsIGIpIHtcbiAgICAgIHZhciBjID0gdGhpcy5oYW5kbGVycztyZXR1cm4gbSh4KGEpLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICBiID8gY1thXS5zcGxpY2UoeShjW2FdLCBiKSwgMSkgOiBkZWxldGUgY1thXTtcbiAgICAgIH0pLCB0aGlzO1xuICAgIH0sIGVtaXQ6IGZ1bmN0aW9uIGVtaXQoYSwgYikge1xuICAgICAgdGhpcy5vcHRpb25zLmRvbUV2ZW50cyAmJiBtYyhhLCBiKTt2YXIgYyA9IHRoaXMuaGFuZGxlcnNbYV0gJiYgdGhpcy5oYW5kbGVyc1thXS5zbGljZSgpO2lmIChjICYmIGMubGVuZ3RoKSB7XG4gICAgICAgIGIudHlwZSA9IGEsIGIucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYi5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O2ZvciAodmFyIGQgPSAwOyBkIDwgYy5sZW5ndGg7KSB7XG4gICAgICAgICAgY1tkXShiKSwgZCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuZWxlbWVudCAmJiBsYyh0aGlzLCAhMSksIHRoaXMuaGFuZGxlcnMgPSB7fSwgdGhpcy5zZXNzaW9uID0ge30sIHRoaXMuaW5wdXQuZGVzdHJveSgpLCB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIH0gfSwgbihoYywgeyBJTlBVVF9TVEFSVDogTywgSU5QVVRfTU9WRTogUCwgSU5QVVRfRU5EOiBRLCBJTlBVVF9DQU5DRUw6IFIsIFNUQVRFX1BPU1NJQkxFOiBSYiwgU1RBVEVfQkVHQU46IFNiLCBTVEFURV9DSEFOR0VEOiBUYiwgU1RBVEVfRU5ERUQ6IFViLCBTVEFURV9SRUNPR05JWkVEOiBWYiwgU1RBVEVfQ0FOQ0VMTEVEOiBXYiwgU1RBVEVfRkFJTEVEOiBYYiwgRElSRUNUSU9OX05PTkU6IFMsIERJUkVDVElPTl9MRUZUOiBULCBESVJFQ1RJT05fUklHSFQ6IFUsIERJUkVDVElPTl9VUDogViwgRElSRUNUSU9OX0RPV046IFcsIERJUkVDVElPTl9IT1JJWk9OVEFMOiBYLCBESVJFQ1RJT05fVkVSVElDQUw6IFksIERJUkVDVElPTl9BTEw6IFosIE1hbmFnZXI6IGtjLCBJbnB1dDogYWIsIFRvdWNoQWN0aW9uOiBQYiwgVG91Y2hJbnB1dDogRWIsIE1vdXNlSW5wdXQ6IHJiLCBQb2ludGVyRXZlbnRJbnB1dDogd2IsIFRvdWNoTW91c2VJbnB1dDogR2IsIFNpbmdsZVRvdWNoSW5wdXQ6IEFiLCBSZWNvZ25pemVyOiBZYiwgQXR0clJlY29nbml6ZXI6IGFjLCBUYXA6IGdjLCBQYW46IGJjLCBTd2lwZTogZmMsIFBpbmNoOiBjYywgUm90YXRlOiBlYywgUHJlc3M6IGRjLCBvbjogdCwgb2ZmOiB1LCBlYWNoOiBtLCBtZXJnZTogbywgZXh0ZW5kOiBuLCBpbmhlcml0OiBwLCBiaW5kRm46IHEsIHByZWZpeGVkOiBCIH0pLCAodHlwZW9mIGRlZmluZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGRlZmluZSkpID09IGcgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGhjO1xuICB9KSA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IG1vZHVsZS5leHBvcnRzID0gaGMgOiBhW2NdID0gaGM7XG59KHdpbmRvdywgZG9jdW1lbnQsIFwiSGFtbWVyXCIpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeScsICdoYW1tZXJqcyddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKCh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZXhwb3J0cykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpLCByZXF1aXJlKCdoYW1tZXJqcycpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSwgSGFtbWVyKTtcbiAgICB9XG59KShmdW5jdGlvbiAoJCwgSGFtbWVyKSB7XG4gICAgZnVuY3Rpb24gaGFtbWVyaWZ5KGVsLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciAkZWwgPSAkKGVsKTtcbiAgICAgICAgaWYgKCEkZWwuZGF0YShcImhhbW1lclwiKSkge1xuICAgICAgICAgICAgJGVsLmRhdGEoXCJoYW1tZXJcIiwgbmV3IEhhbW1lcigkZWxbMF0sIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQuZm4uaGFtbWVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBoYW1tZXJpZnkodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBleHRlbmQgdGhlIGVtaXQgbWV0aG9kIHRvIGFsc28gdHJpZ2dlciBqUXVlcnkgZXZlbnRzXG4gICAgSGFtbWVyLk1hbmFnZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAob3JpZ2luYWxFbWl0KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodHlwZSwgZGF0YSkge1xuICAgICAgICAgICAgb3JpZ2luYWxFbWl0LmNhbGwodGhpcywgdHlwZSwgZGF0YSk7XG4gICAgICAgICAgICAkKHRoaXMuZWxlbWVudCkudHJpZ2dlcih7XG4gICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBnZXN0dXJlOiBkYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KEhhbW1lci5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbi8qISBWZWxvY2l0eUpTLm9yZyAoMS4yLjMpLiAoQykgMjAxNCBKdWxpYW4gU2hhcGlyby4gTUlUIEBsaWNlbnNlOiBlbi53aWtpcGVkaWEub3JnL3dpa2kvTUlUX0xpY2Vuc2UgKi9cbi8qISBWZWxvY2l0eUpTLm9yZyBqUXVlcnkgU2hpbSAoMS4wLjEpLiAoQykgMjAxNCBUaGUgalF1ZXJ5IEZvdW5kYXRpb24uIE1JVCBAbGljZW5zZTogZW4ud2lraXBlZGlhLm9yZy93aWtpL01JVF9MaWNlbnNlLiAqL1xuLyohIE5vdGUgdGhhdCB0aGlzIGhhcyBiZWVuIG1vZGlmaWVkIGJ5IE1hdGVyaWFsaXplIHRvIGNvbmZpcm0gdGhhdCBWZWxvY2l0eSBpcyBub3QgYWxyZWFkeSBiZWluZyBpbXBvcnRlZC4gKi9cbmpRdWVyeS5WZWxvY2l0eSA/IGNvbnNvbGUubG9nKFwiVmVsb2NpdHkgaXMgYWxyZWFkeSBsb2FkZWQuIFlvdSBtYXkgYmUgbmVlZGxlc3NseSBpbXBvcnRpbmcgVmVsb2NpdHkgYWdhaW47IG5vdGUgdGhhdCBNYXRlcmlhbGl6ZSBpbmNsdWRlcyBWZWxvY2l0eS5cIikgOiAoIWZ1bmN0aW9uIChlKSB7XG4gIGZ1bmN0aW9uIHQoZSkge1xuICAgIHZhciB0ID0gZS5sZW5ndGgsXG4gICAgICAgIGEgPSByLnR5cGUoZSk7cmV0dXJuIFwiZnVuY3Rpb25cIiA9PT0gYSB8fCByLmlzV2luZG93KGUpID8gITEgOiAxID09PSBlLm5vZGVUeXBlICYmIHQgPyAhMCA6IFwiYXJyYXlcIiA9PT0gYSB8fCAwID09PSB0IHx8IFwibnVtYmVyXCIgPT0gdHlwZW9mIHQgJiYgdCA+IDAgJiYgdCAtIDEgaW4gZTtcbiAgfWlmICghZS5qUXVlcnkpIHtcbiAgICB2YXIgciA9IGZ1bmN0aW9uIHIoZSwgdCkge1xuICAgICAgcmV0dXJuIG5ldyByLmZuLmluaXQoZSwgdCk7XG4gICAgfTtyLmlzV2luZG93ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBudWxsICE9IGUgJiYgZSA9PSBlLndpbmRvdztcbiAgICB9LCByLnR5cGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIG51bGwgPT0gZSA/IGUgKyBcIlwiIDogXCJvYmplY3RcIiA9PSAodHlwZW9mIGUgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihlKSkgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlID8gbltpLmNhbGwoZSldIHx8IFwib2JqZWN0XCIgOiB0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGUpO1xuICAgIH0sIHIuaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBcImFycmF5XCIgPT09IHIudHlwZShlKTtcbiAgICB9LCByLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQ7aWYgKCFlIHx8IFwib2JqZWN0XCIgIT09IHIudHlwZShlKSB8fCBlLm5vZGVUeXBlIHx8IHIuaXNXaW5kb3coZSkpIHJldHVybiAhMTt0cnkge1xuICAgICAgICBpZiAoZS5jb25zdHJ1Y3RvciAmJiAhby5jYWxsKGUsIFwiY29uc3RydWN0b3JcIikgJiYgIW8uY2FsbChlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgXCJpc1Byb3RvdHlwZU9mXCIpKSByZXR1cm4gITE7XG4gICAgICB9IGNhdGNoIChhKSB7XG4gICAgICAgIHJldHVybiAhMTtcbiAgICAgIH1mb3IgKHQgaW4gZSkge31yZXR1cm4gdm9pZCAwID09PSB0IHx8IG8uY2FsbChlLCB0KTtcbiAgICB9LCByLmVhY2ggPSBmdW5jdGlvbiAoZSwgciwgYSkge1xuICAgICAgdmFyIG4sXG4gICAgICAgICAgbyA9IDAsXG4gICAgICAgICAgaSA9IGUubGVuZ3RoLFxuICAgICAgICAgIHMgPSB0KGUpO2lmIChhKSB7XG4gICAgICAgIGlmIChzKSBmb3IgKDsgaSA+IG8gJiYgKG4gPSByLmFwcGx5KGVbb10sIGEpLCBuICE9PSAhMSk7IG8rKykge30gZWxzZSBmb3IgKG8gaW4gZSkge1xuICAgICAgICAgIGlmIChuID0gci5hcHBseShlW29dLCBhKSwgbiA9PT0gITEpIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHMpIGZvciAoOyBpID4gbyAmJiAobiA9IHIuY2FsbChlW29dLCBvLCBlW29dKSwgbiAhPT0gITEpOyBvKyspIHt9IGVsc2UgZm9yIChvIGluIGUpIHtcbiAgICAgICAgaWYgKG4gPSByLmNhbGwoZVtvXSwgbywgZVtvXSksIG4gPT09ICExKSBicmVhaztcbiAgICAgIH1yZXR1cm4gZTtcbiAgICB9LCByLmRhdGEgPSBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgaWYgKHZvaWQgMCA9PT0gbikge1xuICAgICAgICB2YXIgbyA9IGVbci5leHBhbmRvXSxcbiAgICAgICAgICAgIGkgPSBvICYmIGFbb107aWYgKHZvaWQgMCA9PT0gdCkgcmV0dXJuIGk7aWYgKGkgJiYgdCBpbiBpKSByZXR1cm4gaVt0XTtcbiAgICAgIH0gZWxzZSBpZiAodm9pZCAwICE9PSB0KSB7XG4gICAgICAgIHZhciBvID0gZVtyLmV4cGFuZG9dIHx8IChlW3IuZXhwYW5kb10gPSArK3IudXVpZCk7cmV0dXJuIGFbb10gPSBhW29dIHx8IHt9LCBhW29dW3RdID0gbiwgbjtcbiAgICAgIH1cbiAgICB9LCByLnJlbW92ZURhdGEgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgdmFyIG4gPSBlW3IuZXhwYW5kb10sXG4gICAgICAgICAgbyA9IG4gJiYgYVtuXTtvICYmIHIuZWFjaCh0LCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICBkZWxldGUgb1t0XTtcbiAgICAgIH0pO1xuICAgIH0sIHIuZXh0ZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUsXG4gICAgICAgICAgdCxcbiAgICAgICAgICBhLFxuICAgICAgICAgIG4sXG4gICAgICAgICAgbyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIHMgPSBhcmd1bWVudHNbMF0gfHwge30sXG4gICAgICAgICAgbCA9IDEsXG4gICAgICAgICAgdSA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgYyA9ICExO2ZvciAoXCJib29sZWFuXCIgPT0gdHlwZW9mIHMgJiYgKGMgPSBzLCBzID0gYXJndW1lbnRzW2xdIHx8IHt9LCBsKyspLCBcIm9iamVjdFwiICE9ICh0eXBlb2YgcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHMpKSAmJiBcImZ1bmN0aW9uXCIgIT09IHIudHlwZShzKSAmJiAocyA9IHt9KSwgbCA9PT0gdSAmJiAocyA9IHRoaXMsIGwtLSk7IHUgPiBsOyBsKyspIHtcbiAgICAgICAgaWYgKG51bGwgIT0gKG8gPSBhcmd1bWVudHNbbF0pKSBmb3IgKG4gaW4gbykge1xuICAgICAgICAgIGUgPSBzW25dLCBhID0gb1tuXSwgcyAhPT0gYSAmJiAoYyAmJiBhICYmIChyLmlzUGxhaW5PYmplY3QoYSkgfHwgKHQgPSByLmlzQXJyYXkoYSkpKSA/ICh0ID8gKHQgPSAhMSwgaSA9IGUgJiYgci5pc0FycmF5KGUpID8gZSA6IFtdKSA6IGkgPSBlICYmIHIuaXNQbGFpbk9iamVjdChlKSA/IGUgOiB7fSwgc1tuXSA9IHIuZXh0ZW5kKGMsIGksIGEpKSA6IHZvaWQgMCAhPT0gYSAmJiAoc1tuXSA9IGEpKTtcbiAgICAgICAgfVxuICAgICAgfXJldHVybiBzO1xuICAgIH0sIHIucXVldWUgPSBmdW5jdGlvbiAoZSwgYSwgbikge1xuICAgICAgZnVuY3Rpb24gbyhlLCByKSB7XG4gICAgICAgIHZhciBhID0gciB8fCBbXTtyZXR1cm4gbnVsbCAhPSBlICYmICh0KE9iamVjdChlKSkgPyAhZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICBmb3IgKHZhciByID0gK3QubGVuZ3RoLCBhID0gMCwgbiA9IGUubGVuZ3RoOyByID4gYTspIHtcbiAgICAgICAgICAgIGVbbisrXSA9IHRbYSsrXTtcbiAgICAgICAgICB9aWYgKHIgIT09IHIpIGZvciAoOyB2b2lkIDAgIT09IHRbYV07KSB7XG4gICAgICAgICAgICBlW24rK10gPSB0W2ErK107XG4gICAgICAgICAgfXJldHVybiBlLmxlbmd0aCA9IG4sIGU7XG4gICAgICAgIH0oYSwgXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSA/IFtlXSA6IGUpIDogW10ucHVzaC5jYWxsKGEsIGUpKSwgYTtcbiAgICAgIH1pZiAoZSkge1xuICAgICAgICBhID0gKGEgfHwgXCJmeFwiKSArIFwicXVldWVcIjt2YXIgaSA9IHIuZGF0YShlLCBhKTtyZXR1cm4gbiA/ICghaSB8fCByLmlzQXJyYXkobikgPyBpID0gci5kYXRhKGUsIGEsIG8obikpIDogaS5wdXNoKG4pLCBpKSA6IGkgfHwgW107XG4gICAgICB9XG4gICAgfSwgci5kZXF1ZXVlID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHIuZWFjaChlLm5vZGVUeXBlID8gW2VdIDogZSwgZnVuY3Rpb24gKGUsIGEpIHtcbiAgICAgICAgdCA9IHQgfHwgXCJmeFwiO3ZhciBuID0gci5xdWV1ZShhLCB0KSxcbiAgICAgICAgICAgIG8gPSBuLnNoaWZ0KCk7XCJpbnByb2dyZXNzXCIgPT09IG8gJiYgKG8gPSBuLnNoaWZ0KCkpLCBvICYmIChcImZ4XCIgPT09IHQgJiYgbi51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSwgby5jYWxsKGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByLmRlcXVldWUoYSwgdCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH0sIHIuZm4gPSByLnByb3RvdHlwZSA9IHsgaW5pdDogZnVuY3Rpb24gaW5pdChlKSB7XG4gICAgICAgIGlmIChlLm5vZGVUeXBlKSByZXR1cm4gdGhpc1swXSA9IGUsIHRoaXM7dGhyb3cgbmV3IEVycm9yKFwiTm90IGEgRE9NIG5vZGUuXCIpO1xuICAgICAgfSwgb2Zmc2V0OiBmdW5jdGlvbiBvZmZzZXQoKSB7XG4gICAgICAgIHZhciB0ID0gdGhpc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPyB0aGlzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogeyB0b3A6IDAsIGxlZnQ6IDAgfTtyZXR1cm4geyB0b3A6IHQudG9wICsgKGUucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsVG9wIHx8IDApIC0gKGRvY3VtZW50LmNsaWVudFRvcCB8fCAwKSwgbGVmdDogdC5sZWZ0ICsgKGUucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuc2Nyb2xsTGVmdCB8fCAwKSAtIChkb2N1bWVudC5jbGllbnRMZWZ0IHx8IDApIH07XG4gICAgICB9LCBwb3NpdGlvbjogZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMub2Zmc2V0UGFyZW50IHx8IGRvY3VtZW50OyBlICYmIFwiaHRtbFwiID09PSAhZS5ub2RlVHlwZS50b0xvd2VyQ2FzZSAmJiBcInN0YXRpY1wiID09PSBlLnN0eWxlLnBvc2l0aW9uOykge1xuICAgICAgICAgICAgZSA9IGUub2Zmc2V0UGFyZW50O1xuICAgICAgICAgIH1yZXR1cm4gZSB8fCBkb2N1bWVudDtcbiAgICAgICAgfXZhciB0ID0gdGhpc1swXSxcbiAgICAgICAgICAgIGUgPSBlLmFwcGx5KHQpLFxuICAgICAgICAgICAgYSA9IHRoaXMub2Zmc2V0KCksXG4gICAgICAgICAgICBuID0gL14oPzpib2R5fGh0bWwpJC9pLnRlc3QoZS5ub2RlTmFtZSkgPyB7IHRvcDogMCwgbGVmdDogMCB9IDogcihlKS5vZmZzZXQoKTtyZXR1cm4gYS50b3AgLT0gcGFyc2VGbG9hdCh0LnN0eWxlLm1hcmdpblRvcCkgfHwgMCwgYS5sZWZ0IC09IHBhcnNlRmxvYXQodC5zdHlsZS5tYXJnaW5MZWZ0KSB8fCAwLCBlLnN0eWxlICYmIChuLnRvcCArPSBwYXJzZUZsb2F0KGUuc3R5bGUuYm9yZGVyVG9wV2lkdGgpIHx8IDAsIG4ubGVmdCArPSBwYXJzZUZsb2F0KGUuc3R5bGUuYm9yZGVyTGVmdFdpZHRoKSB8fCAwKSwgeyB0b3A6IGEudG9wIC0gbi50b3AsIGxlZnQ6IGEubGVmdCAtIG4ubGVmdCB9O1xuICAgICAgfSB9O3ZhciBhID0ge307ci5leHBhbmRvID0gXCJ2ZWxvY2l0eVwiICsgbmV3IERhdGUoKS5nZXRUaW1lKCksIHIudXVpZCA9IDA7Zm9yICh2YXIgbiA9IHt9LCBvID0gbi5oYXNPd25Qcm9wZXJ0eSwgaSA9IG4udG9TdHJpbmcsIHMgPSBcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksIGwgPSAwOyBsIDwgcy5sZW5ndGg7IGwrKykge1xuICAgICAgbltcIltvYmplY3QgXCIgKyBzW2xdICsgXCJdXCJdID0gc1tsXS50b0xvd2VyQ2FzZSgpO1xuICAgIH1yLmZuLmluaXQucHJvdG90eXBlID0gci5mbiwgZS5WZWxvY2l0eSA9IHsgVXRpbGl0aWVzOiByIH07XG4gIH1cbn0od2luZG93KSwgZnVuY3Rpb24gKGUpIHtcbiAgXCJvYmplY3RcIiA9PSAodHlwZW9mIG1vZHVsZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG1vZHVsZSkpICYmIFwib2JqZWN0XCIgPT0gX3R5cGVvZihtb2R1bGUuZXhwb3J0cykgPyBtb2R1bGUuZXhwb3J0cyA9IGUoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZSkgOiBlKCk7XG59KGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlLCB0LCByLCBhKSB7XG4gICAgZnVuY3Rpb24gbihlKSB7XG4gICAgICBmb3IgKHZhciB0ID0gLTEsIHIgPSBlID8gZS5sZW5ndGggOiAwLCBhID0gW107ICsrdCA8IHI7KSB7XG4gICAgICAgIHZhciBuID0gZVt0XTtuICYmIGEucHVzaChuKTtcbiAgICAgIH1yZXR1cm4gYTtcbiAgICB9ZnVuY3Rpb24gbyhlKSB7XG4gICAgICByZXR1cm4gbS5pc1dyYXBwZWQoZSkgPyBlID0gW10uc2xpY2UuY2FsbChlKSA6IG0uaXNOb2RlKGUpICYmIChlID0gW2VdKSwgZTtcbiAgICB9ZnVuY3Rpb24gaShlKSB7XG4gICAgICB2YXIgdCA9IGYuZGF0YShlLCBcInZlbG9jaXR5XCIpO3JldHVybiBudWxsID09PSB0ID8gYSA6IHQ7XG4gICAgfWZ1bmN0aW9uIHMoZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHQgKiBlKSAqICgxIC8gZSk7XG4gICAgICB9O1xuICAgIH1mdW5jdGlvbiBsKGUsIHIsIGEsIG4pIHtcbiAgICAgIGZ1bmN0aW9uIG8oZSwgdCkge1xuICAgICAgICByZXR1cm4gMSAtIDMgKiB0ICsgMyAqIGU7XG4gICAgICB9ZnVuY3Rpb24gaShlLCB0KSB7XG4gICAgICAgIHJldHVybiAzICogdCAtIDYgKiBlO1xuICAgICAgfWZ1bmN0aW9uIHMoZSkge1xuICAgICAgICByZXR1cm4gMyAqIGU7XG4gICAgICB9ZnVuY3Rpb24gbChlLCB0LCByKSB7XG4gICAgICAgIHJldHVybiAoKG8odCwgcikgKiBlICsgaSh0LCByKSkgKiBlICsgcyh0KSkgKiBlO1xuICAgICAgfWZ1bmN0aW9uIHUoZSwgdCwgcikge1xuICAgICAgICByZXR1cm4gMyAqIG8odCwgcikgKiBlICogZSArIDIgKiBpKHQsIHIpICogZSArIHModCk7XG4gICAgICB9ZnVuY3Rpb24gYyh0LCByKSB7XG4gICAgICAgIGZvciAodmFyIG4gPSAwOyBtID4gbjsgKytuKSB7XG4gICAgICAgICAgdmFyIG8gPSB1KHIsIGUsIGEpO2lmICgwID09PSBvKSByZXR1cm4gcjt2YXIgaSA9IGwociwgZSwgYSkgLSB0O3IgLT0gaSAvIG87XG4gICAgICAgIH1yZXR1cm4gcjtcbiAgICAgIH1mdW5jdGlvbiBwKCkge1xuICAgICAgICBmb3IgKHZhciB0ID0gMDsgYiA+IHQ7ICsrdCkge1xuICAgICAgICAgIHdbdF0gPSBsKHQgKiB4LCBlLCBhKTtcbiAgICAgICAgfVxuICAgICAgfWZ1bmN0aW9uIGYodCwgciwgbikge1xuICAgICAgICB2YXIgbyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzID0gMDtkbyB7XG4gICAgICAgICAgaSA9IHIgKyAobiAtIHIpIC8gMiwgbyA9IGwoaSwgZSwgYSkgLSB0LCBvID4gMCA/IG4gPSBpIDogciA9IGk7XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKG8pID4gaCAmJiArK3MgPCB2KTtyZXR1cm4gaTtcbiAgICAgIH1mdW5jdGlvbiBkKHQpIHtcbiAgICAgICAgZm9yICh2YXIgciA9IDAsIG4gPSAxLCBvID0gYiAtIDE7IG4gIT0gbyAmJiB3W25dIDw9IHQ7ICsrbikge1xuICAgICAgICAgIHIgKz0geDtcbiAgICAgICAgfS0tbjt2YXIgaSA9ICh0IC0gd1tuXSkgLyAod1tuICsgMV0gLSB3W25dKSxcbiAgICAgICAgICAgIHMgPSByICsgaSAqIHgsXG4gICAgICAgICAgICBsID0gdShzLCBlLCBhKTtyZXR1cm4gbCA+PSB5ID8gYyh0LCBzKSA6IDAgPT0gbCA/IHMgOiBmKHQsIHIsIHIgKyB4KTtcbiAgICAgIH1mdW5jdGlvbiBnKCkge1xuICAgICAgICBWID0gITAsIChlICE9IHIgfHwgYSAhPSBuKSAmJiBwKCk7XG4gICAgICB9dmFyIG0gPSA0LFxuICAgICAgICAgIHkgPSAuMDAxLFxuICAgICAgICAgIGggPSAxZS03LFxuICAgICAgICAgIHYgPSAxMCxcbiAgICAgICAgICBiID0gMTEsXG4gICAgICAgICAgeCA9IDEgLyAoYiAtIDEpLFxuICAgICAgICAgIFMgPSBcIkZsb2F0MzJBcnJheVwiIGluIHQ7aWYgKDQgIT09IGFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiAhMTtmb3IgKHZhciBQID0gMDsgNCA+IFA7ICsrUCkge1xuICAgICAgICBpZiAoXCJudW1iZXJcIiAhPSB0eXBlb2YgYXJndW1lbnRzW1BdIHx8IGlzTmFOKGFyZ3VtZW50c1tQXSkgfHwgIWlzRmluaXRlKGFyZ3VtZW50c1tQXSkpIHJldHVybiAhMTtcbiAgICAgIH1lID0gTWF0aC5taW4oZSwgMSksIGEgPSBNYXRoLm1pbihhLCAxKSwgZSA9IE1hdGgubWF4KGUsIDApLCBhID0gTWF0aC5tYXgoYSwgMCk7dmFyIHcgPSBTID8gbmV3IEZsb2F0MzJBcnJheShiKSA6IG5ldyBBcnJheShiKSxcbiAgICAgICAgICBWID0gITEsXG4gICAgICAgICAgQyA9IGZ1bmN0aW9uIEModCkge1xuICAgICAgICByZXR1cm4gViB8fCBnKCksIGUgPT09IHIgJiYgYSA9PT0gbiA/IHQgOiAwID09PSB0ID8gMCA6IDEgPT09IHQgPyAxIDogbChkKHQpLCByLCBuKTtcbiAgICAgIH07Qy5nZXRDb250cm9sUG9pbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gW3sgeDogZSwgeTogciB9LCB7IHg6IGEsIHk6IG4gfV07XG4gICAgICB9O3ZhciBUID0gXCJnZW5lcmF0ZUJlemllcihcIiArIFtlLCByLCBhLCBuXSArIFwiKVwiO3JldHVybiBDLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gVDtcbiAgICAgIH0sIEM7XG4gICAgfWZ1bmN0aW9uIHUoZSwgdCkge1xuICAgICAgdmFyIHIgPSBlO3JldHVybiBtLmlzU3RyaW5nKGUpID8gYi5FYXNpbmdzW2VdIHx8IChyID0gITEpIDogciA9IG0uaXNBcnJheShlKSAmJiAxID09PSBlLmxlbmd0aCA/IHMuYXBwbHkobnVsbCwgZSkgOiBtLmlzQXJyYXkoZSkgJiYgMiA9PT0gZS5sZW5ndGggPyB4LmFwcGx5KG51bGwsIGUuY29uY2F0KFt0XSkpIDogbS5pc0FycmF5KGUpICYmIDQgPT09IGUubGVuZ3RoID8gbC5hcHBseShudWxsLCBlKSA6ICExLCByID09PSAhMSAmJiAociA9IGIuRWFzaW5nc1tiLmRlZmF1bHRzLmVhc2luZ10gPyBiLmRlZmF1bHRzLmVhc2luZyA6IHYpLCByO1xuICAgIH1mdW5jdGlvbiBjKGUpIHtcbiAgICAgIGlmIChlKSB7XG4gICAgICAgIHZhciB0ID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICByID0gYi5TdGF0ZS5jYWxscy5sZW5ndGg7ciA+IDFlNCAmJiAoYi5TdGF0ZS5jYWxscyA9IG4oYi5TdGF0ZS5jYWxscykpO2ZvciAodmFyIG8gPSAwOyByID4gbzsgbysrKSB7XG4gICAgICAgICAgaWYgKGIuU3RhdGUuY2FsbHNbb10pIHtcbiAgICAgICAgICAgIHZhciBzID0gYi5TdGF0ZS5jYWxsc1tvXSxcbiAgICAgICAgICAgICAgICBsID0gc1swXSxcbiAgICAgICAgICAgICAgICB1ID0gc1syXSxcbiAgICAgICAgICAgICAgICBkID0gc1szXSxcbiAgICAgICAgICAgICAgICBnID0gISFkLFxuICAgICAgICAgICAgICAgIHkgPSBudWxsO2QgfHwgKGQgPSBiLlN0YXRlLmNhbGxzW29dWzNdID0gdCAtIDE2KTtmb3IgKHZhciBoID0gTWF0aC5taW4oKHQgLSBkKSAvIHUuZHVyYXRpb24sIDEpLCB2ID0gMCwgeCA9IGwubGVuZ3RoOyB4ID4gdjsgdisrKSB7XG4gICAgICAgICAgICAgIHZhciBQID0gbFt2XSxcbiAgICAgICAgICAgICAgICAgIFYgPSBQLmVsZW1lbnQ7aWYgKGkoVikpIHtcbiAgICAgICAgICAgICAgICB2YXIgQyA9ICExO2lmICh1LmRpc3BsYXkgIT09IGEgJiYgbnVsbCAhPT0gdS5kaXNwbGF5ICYmIFwibm9uZVwiICE9PSB1LmRpc3BsYXkpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcImZsZXhcIiA9PT0gdS5kaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBUID0gW1wiLXdlYmtpdC1ib3hcIiwgXCItbW96LWJveFwiLCBcIi1tcy1mbGV4Ym94XCIsIFwiLXdlYmtpdC1mbGV4XCJdO2YuZWFjaChULCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgICAgICAgIFMuc2V0UHJvcGVydHlWYWx1ZShWLCBcImRpc3BsYXlcIiwgdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVMuc2V0UHJvcGVydHlWYWx1ZShWLCBcImRpc3BsYXlcIiwgdS5kaXNwbGF5KTtcbiAgICAgICAgICAgICAgICB9dS52aXNpYmlsaXR5ICE9PSBhICYmIFwiaGlkZGVuXCIgIT09IHUudmlzaWJpbGl0eSAmJiBTLnNldFByb3BlcnR5VmFsdWUoViwgXCJ2aXNpYmlsaXR5XCIsIHUudmlzaWJpbGl0eSk7Zm9yICh2YXIgayBpbiBQKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXCJlbGVtZW50XCIgIT09IGspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEEsXG4gICAgICAgICAgICAgICAgICAgICAgICBGID0gUFtrXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGogPSBtLmlzU3RyaW5nKEYuZWFzaW5nKSA/IGIuRWFzaW5nc1tGLmVhc2luZ10gOiBGLmVhc2luZztpZiAoMSA9PT0gaCkgQSA9IEYuZW5kVmFsdWU7ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIEUgPSBGLmVuZFZhbHVlIC0gRi5zdGFydFZhbHVlO2lmIChBID0gRi5zdGFydFZhbHVlICsgRSAqIGooaCwgdSwgRSksICFnICYmIEEgPT09IEYuY3VycmVudFZhbHVlKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfWlmIChGLmN1cnJlbnRWYWx1ZSA9IEEsIFwidHdlZW5cIiA9PT0gaykgeSA9IEE7ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFMuSG9va3MucmVnaXN0ZXJlZFtrXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEggPSBTLkhvb2tzLmdldFJvb3QoayksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTiA9IGkoVikucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtIXTtOICYmIChGLnJvb3RQcm9wZXJ0eVZhbHVlID0gTik7XG4gICAgICAgICAgICAgICAgICAgICAgfXZhciBMID0gUy5zZXRQcm9wZXJ0eVZhbHVlKFYsIGssIEYuY3VycmVudFZhbHVlICsgKDAgPT09IHBhcnNlRmxvYXQoQSkgPyBcIlwiIDogRi51bml0VHlwZSksIEYucm9vdFByb3BlcnR5VmFsdWUsIEYuc2Nyb2xsRGF0YSk7Uy5Ib29rcy5yZWdpc3RlcmVkW2tdICYmIChpKFYpLnJvb3RQcm9wZXJ0eVZhbHVlQ2FjaGVbSF0gPSBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSF0gPyBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbSF0oXCJleHRyYWN0XCIsIG51bGwsIExbMV0pIDogTFsxXSksIFwidHJhbnNmb3JtXCIgPT09IExbMF0gJiYgKEMgPSAhMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9dS5tb2JpbGVIQSAmJiBpKFYpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkID09PSBhICYmIChpKFYpLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkID0gXCIoMHB4LCAwcHgsIDBweClcIiwgQyA9ICEwKSwgQyAmJiBTLmZsdXNoVHJhbnNmb3JtQ2FjaGUoVik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH11LmRpc3BsYXkgIT09IGEgJiYgXCJub25lXCIgIT09IHUuZGlzcGxheSAmJiAoYi5TdGF0ZS5jYWxsc1tvXVsyXS5kaXNwbGF5ID0gITEpLCB1LnZpc2liaWxpdHkgIT09IGEgJiYgXCJoaWRkZW5cIiAhPT0gdS52aXNpYmlsaXR5ICYmIChiLlN0YXRlLmNhbGxzW29dWzJdLnZpc2liaWxpdHkgPSAhMSksIHUucHJvZ3Jlc3MgJiYgdS5wcm9ncmVzcy5jYWxsKHNbMV0sIHNbMV0sIGgsIE1hdGgubWF4KDAsIGQgKyB1LmR1cmF0aW9uIC0gdCksIGQsIHkpLCAxID09PSBoICYmIHAobyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9Yi5TdGF0ZS5pc1RpY2tpbmcgJiYgdyhjKTtcbiAgICB9ZnVuY3Rpb24gcChlLCB0KSB7XG4gICAgICBpZiAoIWIuU3RhdGUuY2FsbHNbZV0pIHJldHVybiAhMTtmb3IgKHZhciByID0gYi5TdGF0ZS5jYWxsc1tlXVswXSwgbiA9IGIuU3RhdGUuY2FsbHNbZV1bMV0sIG8gPSBiLlN0YXRlLmNhbGxzW2VdWzJdLCBzID0gYi5TdGF0ZS5jYWxsc1tlXVs0XSwgbCA9ICExLCB1ID0gMCwgYyA9IHIubGVuZ3RoOyBjID4gdTsgdSsrKSB7XG4gICAgICAgIHZhciBwID0gclt1XS5lbGVtZW50O2lmICh0IHx8IG8ubG9vcCB8fCAoXCJub25lXCIgPT09IG8uZGlzcGxheSAmJiBTLnNldFByb3BlcnR5VmFsdWUocCwgXCJkaXNwbGF5XCIsIG8uZGlzcGxheSksIFwiaGlkZGVuXCIgPT09IG8udmlzaWJpbGl0eSAmJiBTLnNldFByb3BlcnR5VmFsdWUocCwgXCJ2aXNpYmlsaXR5XCIsIG8udmlzaWJpbGl0eSkpLCBvLmxvb3AgIT09ICEwICYmIChmLnF1ZXVlKHApWzFdID09PSBhIHx8ICEvXFwudmVsb2NpdHlRdWV1ZUVudHJ5RmxhZy9pLnRlc3QoZi5xdWV1ZShwKVsxXSkpICYmIGkocCkpIHtcbiAgICAgICAgICBpKHApLmlzQW5pbWF0aW5nID0gITEsIGkocCkucm9vdFByb3BlcnR5VmFsdWVDYWNoZSA9IHt9O3ZhciBkID0gITE7Zi5lYWNoKFMuTGlzdHMudHJhbnNmb3JtczNELCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgdmFyIHIgPSAvXnNjYWxlLy50ZXN0KHQpID8gMSA6IDAsXG4gICAgICAgICAgICAgICAgbiA9IGkocCkudHJhbnNmb3JtQ2FjaGVbdF07aShwKS50cmFuc2Zvcm1DYWNoZVt0XSAhPT0gYSAmJiBuZXcgUmVnRXhwKFwiXlxcXFwoXCIgKyByICsgXCJbXi5dXCIpLnRlc3QobikgJiYgKGQgPSAhMCwgZGVsZXRlIGkocCkudHJhbnNmb3JtQ2FjaGVbdF0pO1xuICAgICAgICAgIH0pLCBvLm1vYmlsZUhBICYmIChkID0gITAsIGRlbGV0ZSBpKHApLnRyYW5zZm9ybUNhY2hlLnRyYW5zbGF0ZTNkKSwgZCAmJiBTLmZsdXNoVHJhbnNmb3JtQ2FjaGUocCksIFMuVmFsdWVzLnJlbW92ZUNsYXNzKHAsIFwidmVsb2NpdHktYW5pbWF0aW5nXCIpO1xuICAgICAgICB9aWYgKCF0ICYmIG8uY29tcGxldGUgJiYgIW8ubG9vcCAmJiB1ID09PSBjIC0gMSkgdHJ5IHtcbiAgICAgICAgICBvLmNvbXBsZXRlLmNhbGwobiwgbik7XG4gICAgICAgIH0gY2F0Y2ggKGcpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRocm93IGc7XG4gICAgICAgICAgfSwgMSk7XG4gICAgICAgIH1zICYmIG8ubG9vcCAhPT0gITAgJiYgcyhuKSwgaShwKSAmJiBvLmxvb3AgPT09ICEwICYmICF0ICYmIChmLmVhY2goaShwKS50d2VlbnNDb250YWluZXIsIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgL15yb3RhdGUvLnRlc3QoZSkgJiYgMzYwID09PSBwYXJzZUZsb2F0KHQuZW5kVmFsdWUpICYmICh0LmVuZFZhbHVlID0gMCwgdC5zdGFydFZhbHVlID0gMzYwKSwgL15iYWNrZ3JvdW5kUG9zaXRpb24vLnRlc3QoZSkgJiYgMTAwID09PSBwYXJzZUZsb2F0KHQuZW5kVmFsdWUpICYmIFwiJVwiID09PSB0LnVuaXRUeXBlICYmICh0LmVuZFZhbHVlID0gMCwgdC5zdGFydFZhbHVlID0gMTAwKTtcbiAgICAgICAgfSksIGIocCwgXCJyZXZlcnNlXCIsIHsgbG9vcDogITAsIGRlbGF5OiBvLmRlbGF5IH0pKSwgby5xdWV1ZSAhPT0gITEgJiYgZi5kZXF1ZXVlKHAsIG8ucXVldWUpO1xuICAgICAgfWIuU3RhdGUuY2FsbHNbZV0gPSAhMTtmb3IgKHZhciBtID0gMCwgeSA9IGIuU3RhdGUuY2FsbHMubGVuZ3RoOyB5ID4gbTsgbSsrKSB7XG4gICAgICAgIGlmIChiLlN0YXRlLmNhbGxzW21dICE9PSAhMSkge1xuICAgICAgICAgIGwgPSAhMDticmVhaztcbiAgICAgICAgfVxuICAgICAgfWwgPT09ICExICYmIChiLlN0YXRlLmlzVGlja2luZyA9ICExLCBkZWxldGUgYi5TdGF0ZS5jYWxscywgYi5TdGF0ZS5jYWxscyA9IFtdKTtcbiAgICB9dmFyIGYsXG4gICAgICAgIGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoci5kb2N1bWVudE1vZGUpIHJldHVybiByLmRvY3VtZW50TW9kZTtmb3IgKHZhciBlID0gNzsgZSA+IDQ7IGUtLSkge1xuICAgICAgICB2YXIgdCA9IHIuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZiAodC5pbm5lckhUTUwgPSBcIjwhLS1baWYgSUUgXCIgKyBlICsgXCJdPjxzcGFuPjwvc3Bhbj48IVtlbmRpZl0tLT5cIiwgdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIikubGVuZ3RoKSByZXR1cm4gdCA9IG51bGwsIGU7XG4gICAgICB9cmV0dXJuIGE7XG4gICAgfSgpLFxuICAgICAgICBnID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGUgPSAwO3JldHVybiB0LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB0Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbiAodCkge1xuICAgICAgICB2YXIgcixcbiAgICAgICAgICAgIGEgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtyZXR1cm4gciA9IE1hdGgubWF4KDAsIDE2IC0gKGEgLSBlKSksIGUgPSBhICsgciwgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdChhICsgcik7XG4gICAgICAgIH0sIHIpO1xuICAgICAgfTtcbiAgICB9KCksXG4gICAgICAgIG0gPSB7IGlzU3RyaW5nOiBmdW5jdGlvbiBpc1N0cmluZyhlKSB7XG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlO1xuICAgICAgfSwgaXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gXCJbb2JqZWN0IEFycmF5XVwiID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk7XG4gICAgICB9LCBpc0Z1bmN0aW9uOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIFwiW29iamVjdCBGdW5jdGlvbl1cIiA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpO1xuICAgICAgfSwgaXNOb2RlOiBmdW5jdGlvbiBpc05vZGUoZSkge1xuICAgICAgICByZXR1cm4gZSAmJiBlLm5vZGVUeXBlO1xuICAgICAgfSwgaXNOb2RlTGlzdDogZnVuY3Rpb24gaXNOb2RlTGlzdChlKSB7XG4gICAgICAgIHJldHVybiBcIm9iamVjdFwiID09ICh0eXBlb2YgZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGUpKSAmJiAvXlxcW29iamVjdCAoSFRNTENvbGxlY3Rpb258Tm9kZUxpc3R8T2JqZWN0KVxcXSQvLnRlc3QoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpKSAmJiBlLmxlbmd0aCAhPT0gYSAmJiAoMCA9PT0gZS5sZW5ndGggfHwgXCJvYmplY3RcIiA9PSBfdHlwZW9mKGVbMF0pICYmIGVbMF0ubm9kZVR5cGUgPiAwKTtcbiAgICAgIH0sIGlzV3JhcHBlZDogZnVuY3Rpb24gaXNXcmFwcGVkKGUpIHtcbiAgICAgICAgcmV0dXJuIGUgJiYgKGUuanF1ZXJ5IHx8IHQuWmVwdG8gJiYgdC5aZXB0by56ZXB0by5pc1ooZSkpO1xuICAgICAgfSwgaXNTVkc6IGZ1bmN0aW9uIGlzU1ZHKGUpIHtcbiAgICAgICAgcmV0dXJuIHQuU1ZHRWxlbWVudCAmJiBlIGluc3RhbmNlb2YgdC5TVkdFbGVtZW50O1xuICAgICAgfSwgaXNFbXB0eU9iamVjdDogZnVuY3Rpb24gaXNFbXB0eU9iamVjdChlKSB7XG4gICAgICAgIGZvciAodmFyIHQgaW4gZSkge1xuICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfXJldHVybiAhMDtcbiAgICAgIH0gfSxcbiAgICAgICAgeSA9ICExO2lmIChlLmZuICYmIGUuZm4uanF1ZXJ5ID8gKGYgPSBlLCB5ID0gITApIDogZiA9IHQuVmVsb2NpdHkuVXRpbGl0aWVzLCA4ID49IGQgJiYgIXkpIHRocm93IG5ldyBFcnJvcihcIlZlbG9jaXR5OiBJRTggYW5kIGJlbG93IHJlcXVpcmUgalF1ZXJ5IHRvIGJlIGxvYWRlZCBiZWZvcmUgVmVsb2NpdHkuXCIpO2lmICg3ID49IGQpIHJldHVybiB2b2lkIChqUXVlcnkuZm4udmVsb2NpdHkgPSBqUXVlcnkuZm4uYW5pbWF0ZSk7dmFyIGggPSA0MDAsXG4gICAgICAgIHYgPSBcInN3aW5nXCIsXG4gICAgICAgIGIgPSB7IFN0YXRlOiB7IGlzTW9iaWxlOiAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksIGlzQW5kcm9pZDogL0FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLCBpc0dpbmdlcmJyZWFkOiAvQW5kcm9pZCAyXFwuM1xcLlszLTddL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSwgaXNDaHJvbWU6IHQuY2hyb21lLCBpc0ZpcmVmb3g6IC9GaXJlZm94L2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSwgcHJlZml4RWxlbWVudDogci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCBwcmVmaXhNYXRjaGVzOiB7fSwgc2Nyb2xsQW5jaG9yOiBudWxsLCBzY3JvbGxQcm9wZXJ0eUxlZnQ6IG51bGwsIHNjcm9sbFByb3BlcnR5VG9wOiBudWxsLCBpc1RpY2tpbmc6ICExLCBjYWxsczogW10gfSwgQ1NTOiB7fSwgVXRpbGl0aWVzOiBmLCBSZWRpcmVjdHM6IHt9LCBFYXNpbmdzOiB7fSwgUHJvbWlzZTogdC5Qcm9taXNlLCBkZWZhdWx0czogeyBxdWV1ZTogXCJcIiwgZHVyYXRpb246IGgsIGVhc2luZzogdiwgYmVnaW46IGEsIGNvbXBsZXRlOiBhLCBwcm9ncmVzczogYSwgZGlzcGxheTogYSwgdmlzaWJpbGl0eTogYSwgbG9vcDogITEsIGRlbGF5OiAhMSwgbW9iaWxlSEE6ICEwLCBfY2FjaGVWYWx1ZXM6ICEwIH0sIGluaXQ6IGZ1bmN0aW9uIGluaXQoZSkge1xuICAgICAgICBmLmRhdGEoZSwgXCJ2ZWxvY2l0eVwiLCB7IGlzU1ZHOiBtLmlzU1ZHKGUpLCBpc0FuaW1hdGluZzogITEsIGNvbXB1dGVkU3R5bGU6IG51bGwsIHR3ZWVuc0NvbnRhaW5lcjogbnVsbCwgcm9vdFByb3BlcnR5VmFsdWVDYWNoZToge30sIHRyYW5zZm9ybUNhY2hlOiB7fSB9KTtcbiAgICAgIH0sIGhvb2s6IG51bGwsIG1vY2s6ICExLCB2ZXJzaW9uOiB7IG1ham9yOiAxLCBtaW5vcjogMiwgcGF0Y2g6IDIgfSwgZGVidWc6ICExIH07dC5wYWdlWU9mZnNldCAhPT0gYSA/IChiLlN0YXRlLnNjcm9sbEFuY2hvciA9IHQsIGIuU3RhdGUuc2Nyb2xsUHJvcGVydHlMZWZ0ID0gXCJwYWdlWE9mZnNldFwiLCBiLlN0YXRlLnNjcm9sbFByb3BlcnR5VG9wID0gXCJwYWdlWU9mZnNldFwiKSA6IChiLlN0YXRlLnNjcm9sbEFuY2hvciA9IHIuZG9jdW1lbnRFbGVtZW50IHx8IHIuYm9keS5wYXJlbnROb2RlIHx8IHIuYm9keSwgYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eUxlZnQgPSBcInNjcm9sbExlZnRcIiwgYi5TdGF0ZS5zY3JvbGxQcm9wZXJ0eVRvcCA9IFwic2Nyb2xsVG9wXCIpO3ZhciB4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gZShlKSB7XG4gICAgICAgIHJldHVybiAtZS50ZW5zaW9uICogZS54IC0gZS5mcmljdGlvbiAqIGUudjtcbiAgICAgIH1mdW5jdGlvbiB0KHQsIHIsIGEpIHtcbiAgICAgICAgdmFyIG4gPSB7IHg6IHQueCArIGEuZHggKiByLCB2OiB0LnYgKyBhLmR2ICogciwgdGVuc2lvbjogdC50ZW5zaW9uLCBmcmljdGlvbjogdC5mcmljdGlvbiB9O3JldHVybiB7IGR4OiBuLnYsIGR2OiBlKG4pIH07XG4gICAgICB9ZnVuY3Rpb24gcihyLCBhKSB7XG4gICAgICAgIHZhciBuID0geyBkeDogci52LCBkdjogZShyKSB9LFxuICAgICAgICAgICAgbyA9IHQociwgLjUgKiBhLCBuKSxcbiAgICAgICAgICAgIGkgPSB0KHIsIC41ICogYSwgbyksXG4gICAgICAgICAgICBzID0gdChyLCBhLCBpKSxcbiAgICAgICAgICAgIGwgPSAxIC8gNiAqIChuLmR4ICsgMiAqIChvLmR4ICsgaS5keCkgKyBzLmR4KSxcbiAgICAgICAgICAgIHUgPSAxIC8gNiAqIChuLmR2ICsgMiAqIChvLmR2ICsgaS5kdikgKyBzLmR2KTtyZXR1cm4gci54ID0gci54ICsgbCAqIGEsIHIudiA9IHIudiArIHUgKiBhLCByO1xuICAgICAgfXJldHVybiBmdW5jdGlvbiBhKGUsIHQsIG4pIHtcbiAgICAgICAgdmFyIG8sXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcyxcbiAgICAgICAgICAgIGwgPSB7IHg6IC0xLCB2OiAwLCB0ZW5zaW9uOiBudWxsLCBmcmljdGlvbjogbnVsbCB9LFxuICAgICAgICAgICAgdSA9IFswXSxcbiAgICAgICAgICAgIGMgPSAwLFxuICAgICAgICAgICAgcCA9IDFlLTQsXG4gICAgICAgICAgICBmID0gLjAxNjtmb3IgKGUgPSBwYXJzZUZsb2F0KGUpIHx8IDUwMCwgdCA9IHBhcnNlRmxvYXQodCkgfHwgMjAsIG4gPSBuIHx8IG51bGwsIGwudGVuc2lvbiA9IGUsIGwuZnJpY3Rpb24gPSB0LCBvID0gbnVsbCAhPT0gbiwgbyA/IChjID0gYShlLCB0KSwgaSA9IGMgLyBuICogZikgOiBpID0gZjsgcyA9IHIocyB8fCBsLCBpKSwgdS5wdXNoKDEgKyBzLngpLCBjICs9IDE2LCBNYXRoLmFicyhzLngpID4gcCAmJiBNYXRoLmFicyhzLnYpID4gcDspIHt9cmV0dXJuIG8gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiB1W2UgKiAodS5sZW5ndGggLSAxKSB8IDBdO1xuICAgICAgICB9IDogYztcbiAgICAgIH07XG4gICAgfSgpO2IuRWFzaW5ncyA9IHsgbGluZWFyOiBmdW5jdGlvbiBsaW5lYXIoZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH0sIHN3aW5nOiBmdW5jdGlvbiBzd2luZyhlKSB7XG4gICAgICAgIHJldHVybiAuNSAtIE1hdGguY29zKGUgKiBNYXRoLlBJKSAvIDI7XG4gICAgICB9LCBzcHJpbmc6IGZ1bmN0aW9uIHNwcmluZyhlKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5jb3MoNC41ICogZSAqIE1hdGguUEkpICogTWF0aC5leHAoNiAqIC1lKTtcbiAgICAgIH0gfSwgZi5lYWNoKFtbXCJlYXNlXCIsIFsuMjUsIC4xLCAuMjUsIDFdXSwgW1wiZWFzZS1pblwiLCBbLjQyLCAwLCAxLCAxXV0sIFtcImVhc2Utb3V0XCIsIFswLCAwLCAuNTgsIDFdXSwgW1wiZWFzZS1pbi1vdXRcIiwgWy40MiwgMCwgLjU4LCAxXV0sIFtcImVhc2VJblNpbmVcIiwgWy40NywgMCwgLjc0NSwgLjcxNV1dLCBbXCJlYXNlT3V0U2luZVwiLCBbLjM5LCAuNTc1LCAuNTY1LCAxXV0sIFtcImVhc2VJbk91dFNpbmVcIiwgWy40NDUsIC4wNSwgLjU1LCAuOTVdXSwgW1wiZWFzZUluUXVhZFwiLCBbLjU1LCAuMDg1LCAuNjgsIC41M11dLCBbXCJlYXNlT3V0UXVhZFwiLCBbLjI1LCAuNDYsIC40NSwgLjk0XV0sIFtcImVhc2VJbk91dFF1YWRcIiwgWy40NTUsIC4wMywgLjUxNSwgLjk1NV1dLCBbXCJlYXNlSW5DdWJpY1wiLCBbLjU1LCAuMDU1LCAuNjc1LCAuMTldXSwgW1wiZWFzZU91dEN1YmljXCIsIFsuMjE1LCAuNjEsIC4zNTUsIDFdXSwgW1wiZWFzZUluT3V0Q3ViaWNcIiwgWy42NDUsIC4wNDUsIC4zNTUsIDFdXSwgW1wiZWFzZUluUXVhcnRcIiwgWy44OTUsIC4wMywgLjY4NSwgLjIyXV0sIFtcImVhc2VPdXRRdWFydFwiLCBbLjE2NSwgLjg0LCAuNDQsIDFdXSwgW1wiZWFzZUluT3V0UXVhcnRcIiwgWy43NywgMCwgLjE3NSwgMV1dLCBbXCJlYXNlSW5RdWludFwiLCBbLjc1NSwgLjA1LCAuODU1LCAuMDZdXSwgW1wiZWFzZU91dFF1aW50XCIsIFsuMjMsIDEsIC4zMiwgMV1dLCBbXCJlYXNlSW5PdXRRdWludFwiLCBbLjg2LCAwLCAuMDcsIDFdXSwgW1wiZWFzZUluRXhwb1wiLCBbLjk1LCAuMDUsIC43OTUsIC4wMzVdXSwgW1wiZWFzZU91dEV4cG9cIiwgWy4xOSwgMSwgLjIyLCAxXV0sIFtcImVhc2VJbk91dEV4cG9cIiwgWzEsIDAsIDAsIDFdXSwgW1wiZWFzZUluQ2lyY1wiLCBbLjYsIC4wNCwgLjk4LCAuMzM1XV0sIFtcImVhc2VPdXRDaXJjXCIsIFsuMDc1LCAuODIsIC4xNjUsIDFdXSwgW1wiZWFzZUluT3V0Q2lyY1wiLCBbLjc4NSwgLjEzNSwgLjE1LCAuODZdXV0sIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBiLkVhc2luZ3NbdFswXV0gPSBsLmFwcGx5KG51bGwsIHRbMV0pO1xuICAgIH0pO3ZhciBTID0gYi5DU1MgPSB7IFJlZ0V4OiB7IGlzSGV4OiAvXiMoW0EtZlxcZF17M30pezEsMn0kL2ksIHZhbHVlVW53cmFwOiAvXltBLXpdK1xcKCguKilcXCkkL2ksIHdyYXBwZWRWYWx1ZUFscmVhZHlFeHRyYWN0ZWQ6IC9bMC05Ll0rIFswLTkuXSsgWzAtOS5dKyggWzAtOS5dKyk/LywgdmFsdWVTcGxpdDogLyhbQS16XStcXCguK1xcKSl8KChbQS16MC05Iy0uXSs/KSg/PVxcc3wkKSkvZ2kgfSwgTGlzdHM6IHsgY29sb3JzOiBbXCJmaWxsXCIsIFwic3Ryb2tlXCIsIFwic3RvcENvbG9yXCIsIFwiY29sb3JcIiwgXCJiYWNrZ3JvdW5kQ29sb3JcIiwgXCJib3JkZXJDb2xvclwiLCBcImJvcmRlclRvcENvbG9yXCIsIFwiYm9yZGVyUmlnaHRDb2xvclwiLCBcImJvcmRlckJvdHRvbUNvbG9yXCIsIFwiYm9yZGVyTGVmdENvbG9yXCIsIFwib3V0bGluZUNvbG9yXCJdLCB0cmFuc2Zvcm1zQmFzZTogW1widHJhbnNsYXRlWFwiLCBcInRyYW5zbGF0ZVlcIiwgXCJzY2FsZVwiLCBcInNjYWxlWFwiLCBcInNjYWxlWVwiLCBcInNrZXdYXCIsIFwic2tld1lcIiwgXCJyb3RhdGVaXCJdLCB0cmFuc2Zvcm1zM0Q6IFtcInRyYW5zZm9ybVBlcnNwZWN0aXZlXCIsIFwidHJhbnNsYXRlWlwiLCBcInNjYWxlWlwiLCBcInJvdGF0ZVhcIiwgXCJyb3RhdGVZXCJdIH0sIEhvb2tzOiB7IHRlbXBsYXRlczogeyB0ZXh0U2hhZG93OiBbXCJDb2xvciBYIFkgQmx1clwiLCBcImJsYWNrIDBweCAwcHggMHB4XCJdLCBib3hTaGFkb3c6IFtcIkNvbG9yIFggWSBCbHVyIFNwcmVhZFwiLCBcImJsYWNrIDBweCAwcHggMHB4IDBweFwiXSwgY2xpcDogW1wiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCIsIFwiMHB4IDBweCAwcHggMHB4XCJdLCBiYWNrZ3JvdW5kUG9zaXRpb246IFtcIlggWVwiLCBcIjAlIDAlXCJdLCB0cmFuc2Zvcm1PcmlnaW46IFtcIlggWSBaXCIsIFwiNTAlIDUwJSAwcHhcIl0sIHBlcnNwZWN0aXZlT3JpZ2luOiBbXCJYIFlcIiwgXCI1MCUgNTAlXCJdIH0sIHJlZ2lzdGVyZWQ6IHt9LCByZWdpc3RlcjogZnVuY3Rpb24gcmVnaXN0ZXIoKSB7XG4gICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCBTLkxpc3RzLmNvbG9ycy5sZW5ndGg7IGUrKykge1xuICAgICAgICAgICAgdmFyIHQgPSBcImNvbG9yXCIgPT09IFMuTGlzdHMuY29sb3JzW2VdID8gXCIwIDAgMCAxXCIgOiBcIjI1NSAyNTUgMjU1IDFcIjtTLkhvb2tzLnRlbXBsYXRlc1tTLkxpc3RzLmNvbG9yc1tlXV0gPSBbXCJSZWQgR3JlZW4gQmx1ZSBBbHBoYVwiLCB0XTtcbiAgICAgICAgICB9dmFyIHIsIGEsIG47aWYgKGQpIGZvciAociBpbiBTLkhvb2tzLnRlbXBsYXRlcykge1xuICAgICAgICAgICAgYSA9IFMuSG9va3MudGVtcGxhdGVzW3JdLCBuID0gYVswXS5zcGxpdChcIiBcIik7dmFyIG8gPSBhWzFdLm1hdGNoKFMuUmVnRXgudmFsdWVTcGxpdCk7XCJDb2xvclwiID09PSBuWzBdICYmIChuLnB1c2gobi5zaGlmdCgpKSwgby5wdXNoKG8uc2hpZnQoKSksIFMuSG9va3MudGVtcGxhdGVzW3JdID0gW24uam9pbihcIiBcIiksIG8uam9pbihcIiBcIildKTtcbiAgICAgICAgICB9Zm9yIChyIGluIFMuSG9va3MudGVtcGxhdGVzKSB7XG4gICAgICAgICAgICBhID0gUy5Ib29rcy50ZW1wbGF0ZXNbcl0sIG4gPSBhWzBdLnNwbGl0KFwiIFwiKTtmb3IgKHZhciBlIGluIG4pIHtcbiAgICAgICAgICAgICAgdmFyIGkgPSByICsgbltlXSxcbiAgICAgICAgICAgICAgICAgIHMgPSBlO1MuSG9va3MucmVnaXN0ZXJlZFtpXSA9IFtyLCBzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIGdldFJvb3Q6IGZ1bmN0aW9uIGdldFJvb3QoZSkge1xuICAgICAgICAgIHZhciB0ID0gUy5Ib29rcy5yZWdpc3RlcmVkW2VdO3JldHVybiB0ID8gdFswXSA6IGU7XG4gICAgICAgIH0sIGNsZWFuUm9vdFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uIGNsZWFuUm9vdFByb3BlcnR5VmFsdWUoZSwgdCkge1xuICAgICAgICAgIHJldHVybiBTLlJlZ0V4LnZhbHVlVW53cmFwLnRlc3QodCkgJiYgKHQgPSB0Lm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApWzFdKSwgUy5WYWx1ZXMuaXNDU1NOdWxsVmFsdWUodCkgJiYgKHQgPSBTLkhvb2tzLnRlbXBsYXRlc1tlXVsxXSksIHQ7XG4gICAgICAgIH0sIGV4dHJhY3RWYWx1ZTogZnVuY3Rpb24gZXh0cmFjdFZhbHVlKGUsIHQpIHtcbiAgICAgICAgICB2YXIgciA9IFMuSG9va3MucmVnaXN0ZXJlZFtlXTtpZiAocikge1xuICAgICAgICAgICAgdmFyIGEgPSByWzBdLFxuICAgICAgICAgICAgICAgIG4gPSByWzFdO3JldHVybiB0ID0gUy5Ib29rcy5jbGVhblJvb3RQcm9wZXJ0eVZhbHVlKGEsIHQpLCB0LnRvU3RyaW5nKCkubWF0Y2goUy5SZWdFeC52YWx1ZVNwbGl0KVtuXTtcbiAgICAgICAgICB9cmV0dXJuIHQ7XG4gICAgICAgIH0sIGluamVjdFZhbHVlOiBmdW5jdGlvbiBpbmplY3RWYWx1ZShlLCB0LCByKSB7XG4gICAgICAgICAgdmFyIGEgPSBTLkhvb2tzLnJlZ2lzdGVyZWRbZV07aWYgKGEpIHtcbiAgICAgICAgICAgIHZhciBuLFxuICAgICAgICAgICAgICAgIG8sXG4gICAgICAgICAgICAgICAgaSA9IGFbMF0sXG4gICAgICAgICAgICAgICAgcyA9IGFbMV07cmV0dXJuIHIgPSBTLkhvb2tzLmNsZWFuUm9vdFByb3BlcnR5VmFsdWUoaSwgciksIG4gPSByLnRvU3RyaW5nKCkubWF0Y2goUy5SZWdFeC52YWx1ZVNwbGl0KSwgbltzXSA9IHQsIG8gPSBuLmpvaW4oXCIgXCIpO1xuICAgICAgICAgIH1yZXR1cm4gcjtcbiAgICAgICAgfSB9LCBOb3JtYWxpemF0aW9uczogeyByZWdpc3RlcmVkOiB7IGNsaXA6IGZ1bmN0aW9uIGNsaXAoZSwgdCwgcikge1xuICAgICAgICAgICAgc3dpdGNoIChlKSB7Y2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjbGlwXCI7Y2FzZSBcImV4dHJhY3RcIjpcbiAgICAgICAgICAgICAgICB2YXIgYTtyZXR1cm4gUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QocikgPyBhID0gciA6IChhID0gci50b1N0cmluZygpLm1hdGNoKFMuUmVnRXgudmFsdWVVbndyYXApLCBhID0gYSA/IGFbMV0ucmVwbGFjZSgvLChcXHMrKT8vZywgXCIgXCIpIDogciksIGE7Y2FzZSBcImluamVjdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBcInJlY3QoXCIgKyByICsgXCIpXCI7fVxuICAgICAgICAgIH0sIGJsdXI6IGZ1bmN0aW9uIGJsdXIoZSwgdCwgcikge1xuICAgICAgICAgICAgc3dpdGNoIChlKSB7Y2FzZSBcIm5hbWVcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gYi5TdGF0ZS5pc0ZpcmVmb3ggPyBcImZpbHRlclwiIDogXCItd2Via2l0LWZpbHRlclwiO2Nhc2UgXCJleHRyYWN0XCI6XG4gICAgICAgICAgICAgICAgdmFyIGEgPSBwYXJzZUZsb2F0KHIpO2lmICghYSAmJiAwICE9PSBhKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbiA9IHIudG9TdHJpbmcoKS5tYXRjaCgvYmx1clxcKChbMC05XStbQS16XSspXFwpL2kpO2EgPSBuID8gblsxXSA6IDA7XG4gICAgICAgICAgICAgICAgfXJldHVybiBhO2Nhc2UgXCJpbmplY3RcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChyKSA/IFwiYmx1cihcIiArIHIgKyBcIilcIiA6IFwibm9uZVwiO31cbiAgICAgICAgICB9LCBvcGFjaXR5OiBmdW5jdGlvbiBvcGFjaXR5KGUsIHQsIHIpIHtcbiAgICAgICAgICAgIGlmICg4ID49IGQpIHN3aXRjaCAoZSkge2Nhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiZmlsdGVyXCI7Y2FzZSBcImV4dHJhY3RcIjpcbiAgICAgICAgICAgICAgICB2YXIgYSA9IHIudG9TdHJpbmcoKS5tYXRjaCgvYWxwaGFcXChvcGFjaXR5PSguKilcXCkvaSk7cmV0dXJuIHIgPSBhID8gYVsxXSAvIDEwMCA6IDE7Y2FzZSBcImluamVjdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0LnN0eWxlLnpvb20gPSAxLCBwYXJzZUZsb2F0KHIpID49IDEgPyBcIlwiIDogXCJhbHBoYShvcGFjaXR5PVwiICsgcGFyc2VJbnQoMTAwICogcGFyc2VGbG9hdChyKSwgMTApICsgXCIpXCI7fSBlbHNlIHN3aXRjaCAoZSkge2Nhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwib3BhY2l0eVwiO2Nhc2UgXCJleHRyYWN0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHI7Y2FzZSBcImluamVjdFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiByO31cbiAgICAgICAgICB9IH0sIHJlZ2lzdGVyOiBmdW5jdGlvbiByZWdpc3RlcigpIHtcbiAgICAgICAgICA5ID49IGQgfHwgYi5TdGF0ZS5pc0dpbmdlcmJyZWFkIHx8IChTLkxpc3RzLnRyYW5zZm9ybXNCYXNlID0gUy5MaXN0cy50cmFuc2Zvcm1zQmFzZS5jb25jYXQoUy5MaXN0cy50cmFuc2Zvcm1zM0QpKTtmb3IgKHZhciBlID0gMDsgZSA8IFMuTGlzdHMudHJhbnNmb3Jtc0Jhc2UubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICFmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gUy5MaXN0cy50cmFuc2Zvcm1zQmFzZVtlXTtTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbdF0gPSBmdW5jdGlvbiAoZSwgciwgbikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZSkge2Nhc2UgXCJuYW1lXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zZm9ybVwiO2Nhc2UgXCJleHRyYWN0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpKHIpID09PSBhIHx8IGkocikudHJhbnNmb3JtQ2FjaGVbdF0gPT09IGEgPyAvXnNjYWxlL2kudGVzdCh0KSA/IDEgOiAwIDogaShyKS50cmFuc2Zvcm1DYWNoZVt0XS5yZXBsYWNlKC9bKCldL2csIFwiXCIpO2Nhc2UgXCJpbmplY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSAhMTtzd2l0Y2ggKHQuc3Vic3RyKDAsIHQubGVuZ3RoIC0gMSkpIHtjYXNlIFwidHJhbnNsYXRlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gIS8oJXxweHxlbXxyZW18dnd8dmh8XFxkKSQvaS50ZXN0KG4pO2JyZWFrO2Nhc2UgXCJzY2FsXCI6Y2FzZSBcInNjYWxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICBiLlN0YXRlLmlzQW5kcm9pZCAmJiBpKHIpLnRyYW5zZm9ybUNhY2hlW3RdID09PSBhICYmIDEgPiBuICYmIChuID0gMSksIG8gPSAhLyhcXGQpJC9pLnRlc3Qobik7YnJlYWs7Y2FzZSBcInNrZXdcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSAhLyhkZWd8XFxkKSQvaS50ZXN0KG4pO2JyZWFrO2Nhc2UgXCJyb3RhdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSAhLyhkZWd8XFxkKSQvaS50ZXN0KG4pO31yZXR1cm4gbyB8fCAoaShyKS50cmFuc2Zvcm1DYWNoZVt0XSA9IFwiKFwiICsgbiArIFwiKVwiKSwgaShyKS50cmFuc2Zvcm1DYWNoZVt0XTt9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KCk7XG4gICAgICAgICAgfWZvciAodmFyIGUgPSAwOyBlIDwgUy5MaXN0cy5jb2xvcnMubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgICAgICFmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0ID0gUy5MaXN0cy5jb2xvcnNbZV07Uy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3RdID0gZnVuY3Rpb24gKGUsIHIsIG4pIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUpIHtjYXNlIFwibmFtZVwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdDtjYXNlIFwiZXh0cmFjdFwiOlxuICAgICAgICAgICAgICAgICAgICB2YXIgbztpZiAoUy5SZWdFeC53cmFwcGVkVmFsdWVBbHJlYWR5RXh0cmFjdGVkLnRlc3QobikpIG8gPSBuO2Vsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzID0geyBibGFjazogXCJyZ2IoMCwgMCwgMClcIiwgYmx1ZTogXCJyZ2IoMCwgMCwgMjU1KVwiLCBncmF5OiBcInJnYigxMjgsIDEyOCwgMTI4KVwiLCBncmVlbjogXCJyZ2IoMCwgMTI4LCAwKVwiLCByZWQ6IFwicmdiKDI1NSwgMCwgMClcIiwgd2hpdGU6IFwicmdiKDI1NSwgMjU1LCAyNTUpXCIgfTsvXltBLXpdKyQvaS50ZXN0KG4pID8gaSA9IHNbbl0gIT09IGEgPyBzW25dIDogcy5ibGFjayA6IFMuUmVnRXguaXNIZXgudGVzdChuKSA/IGkgPSBcInJnYihcIiArIFMuVmFsdWVzLmhleFRvUmdiKG4pLmpvaW4oXCIgXCIpICsgXCIpXCIgOiAvXnJnYmE/XFwoL2kudGVzdChuKSB8fCAoaSA9IHMuYmxhY2spLCBvID0gKGkgfHwgbikudG9TdHJpbmcoKS5tYXRjaChTLlJlZ0V4LnZhbHVlVW53cmFwKVsxXS5yZXBsYWNlKC8sKFxccyspPy9nLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgIH1yZXR1cm4gOCA+PSBkIHx8IDMgIT09IG8uc3BsaXQoXCIgXCIpLmxlbmd0aCB8fCAobyArPSBcIiAxXCIpLCBvO2Nhc2UgXCJpbmplY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDggPj0gZCA/IDQgPT09IG4uc3BsaXQoXCIgXCIpLmxlbmd0aCAmJiAobiA9IG4uc3BsaXQoL1xccysvKS5zbGljZSgwLCAzKS5qb2luKFwiIFwiKSkgOiAzID09PSBuLnNwbGl0KFwiIFwiKS5sZW5ndGggJiYgKG4gKz0gXCIgMVwiKSwgKDggPj0gZCA/IFwicmdiXCIgOiBcInJnYmFcIikgKyBcIihcIiArIG4ucmVwbGFjZSgvXFxzKy9nLCBcIixcIikucmVwbGFjZSgvXFwuKFxcZCkrKD89LCkvZywgXCJcIikgKyBcIilcIjt9XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IH0sIE5hbWVzOiB7IGNhbWVsQ2FzZTogZnVuY3Rpb24gY2FtZWxDYXNlKGUpIHtcbiAgICAgICAgICByZXR1cm4gZS5yZXBsYWNlKC8tKFxcdykvZywgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIFNWR0F0dHJpYnV0ZTogZnVuY3Rpb24gU1ZHQXR0cmlidXRlKGUpIHtcbiAgICAgICAgICB2YXIgdCA9IFwid2lkdGh8aGVpZ2h0fHh8eXxjeHxjeXxyfHJ4fHJ5fHgxfHgyfHkxfHkyXCI7cmV0dXJuIChkIHx8IGIuU3RhdGUuaXNBbmRyb2lkICYmICFiLlN0YXRlLmlzQ2hyb21lKSAmJiAodCArPSBcInx0cmFuc2Zvcm1cIiksIG5ldyBSZWdFeHAoXCJeKFwiICsgdCArIFwiKSRcIiwgXCJpXCIpLnRlc3QoZSk7XG4gICAgICAgIH0sIHByZWZpeENoZWNrOiBmdW5jdGlvbiBwcmVmaXhDaGVjayhlKSB7XG4gICAgICAgICAgaWYgKGIuU3RhdGUucHJlZml4TWF0Y2hlc1tlXSkgcmV0dXJuIFtiLlN0YXRlLnByZWZpeE1hdGNoZXNbZV0sICEwXTtmb3IgKHZhciB0ID0gW1wiXCIsIFwiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIiwgXCJPXCJdLCByID0gMCwgYSA9IHQubGVuZ3RoOyBhID4gcjsgcisrKSB7XG4gICAgICAgICAgICB2YXIgbjtpZiAobiA9IDAgPT09IHIgPyBlIDogdFtyXSArIGUucmVwbGFjZSgvXlxcdy8sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9KSwgbS5pc1N0cmluZyhiLlN0YXRlLnByZWZpeEVsZW1lbnQuc3R5bGVbbl0pKSByZXR1cm4gYi5TdGF0ZS5wcmVmaXhNYXRjaGVzW2VdID0gbiwgW24sICEwXTtcbiAgICAgICAgICB9cmV0dXJuIFtlLCAhMV07XG4gICAgICAgIH0gfSwgVmFsdWVzOiB7IGhleFRvUmdiOiBmdW5jdGlvbiBoZXhUb1JnYihlKSB7XG4gICAgICAgICAgdmFyIHQsXG4gICAgICAgICAgICAgIHIgPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLFxuICAgICAgICAgICAgICBhID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaTtyZXR1cm4gZSA9IGUucmVwbGFjZShyLCBmdW5jdGlvbiAoZSwgdCwgciwgYSkge1xuICAgICAgICAgICAgcmV0dXJuIHQgKyB0ICsgciArIHIgKyBhICsgYTtcbiAgICAgICAgICB9KSwgdCA9IGEuZXhlYyhlKSwgdCA/IFtwYXJzZUludCh0WzFdLCAxNiksIHBhcnNlSW50KHRbMl0sIDE2KSwgcGFyc2VJbnQodFszXSwgMTYpXSA6IFswLCAwLCAwXTtcbiAgICAgICAgfSwgaXNDU1NOdWxsVmFsdWU6IGZ1bmN0aW9uIGlzQ1NTTnVsbFZhbHVlKGUpIHtcbiAgICAgICAgICByZXR1cm4gMCA9PSBlIHx8IC9eKG5vbmV8YXV0b3x0cmFuc3BhcmVudHwocmdiYVxcKDAsID8wLCA/MCwgPzBcXCkpKSQvaS50ZXN0KGUpO1xuICAgICAgICB9LCBnZXRVbml0VHlwZTogZnVuY3Rpb24gZ2V0VW5pdFR5cGUoZSkge1xuICAgICAgICAgIHJldHVybiAoL14ocm90YXRlfHNrZXcpL2kudGVzdChlKSA/IFwiZGVnXCIgOiAvKF4oc2NhbGV8c2NhbGVYfHNjYWxlWXxzY2FsZVp8YWxwaGF8ZmxleEdyb3d8ZmxleEhlaWdodHx6SW5kZXh8Zm9udFdlaWdodCkkKXwoKG9wYWNpdHl8cmVkfGdyZWVufGJsdWV8YWxwaGEpJCkvaS50ZXN0KGUpID8gXCJcIiA6IFwicHhcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0sIGdldERpc3BsYXlUeXBlOiBmdW5jdGlvbiBnZXREaXNwbGF5VHlwZShlKSB7XG4gICAgICAgICAgdmFyIHQgPSBlICYmIGUudGFnTmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7cmV0dXJuICgvXihifGJpZ3xpfHNtYWxsfHR0fGFiYnJ8YWNyb255bXxjaXRlfGNvZGV8ZGZufGVtfGtiZHxzdHJvbmd8c2FtcHx2YXJ8YXxiZG98YnJ8aW1nfG1hcHxvYmplY3R8cXxzY3JpcHR8c3BhbnxzdWJ8c3VwfGJ1dHRvbnxpbnB1dHxsYWJlbHxzZWxlY3R8dGV4dGFyZWEpJC9pLnRlc3QodCkgPyBcImlubGluZVwiIDogL14obGkpJC9pLnRlc3QodCkgPyBcImxpc3QtaXRlbVwiIDogL14odHIpJC9pLnRlc3QodCkgPyBcInRhYmxlLXJvd1wiIDogL14odGFibGUpJC9pLnRlc3QodCkgPyBcInRhYmxlXCIgOiAvXih0Ym9keSkkL2kudGVzdCh0KSA/IFwidGFibGUtcm93LWdyb3VwXCIgOiBcImJsb2NrXCJcbiAgICAgICAgICApO1xuICAgICAgICB9LCBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoZSwgdCkge1xuICAgICAgICAgIGUuY2xhc3NMaXN0ID8gZS5jbGFzc0xpc3QuYWRkKHQpIDogZS5jbGFzc05hbWUgKz0gKGUuY2xhc3NOYW1lLmxlbmd0aCA/IFwiIFwiIDogXCJcIikgKyB0O1xuICAgICAgICB9LCByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZSwgdCkge1xuICAgICAgICAgIGUuY2xhc3NMaXN0ID8gZS5jbGFzc0xpc3QucmVtb3ZlKHQpIDogZS5jbGFzc05hbWUgPSBlLmNsYXNzTmFtZS50b1N0cmluZygpLnJlcGxhY2UobmV3IFJlZ0V4cChcIihefFxcXFxzKVwiICsgdC5zcGxpdChcIiBcIikuam9pbihcInxcIikgKyBcIihcXFxcc3wkKVwiLCBcImdpXCIpLCBcIiBcIik7XG4gICAgICAgIH0gfSwgZ2V0UHJvcGVydHlWYWx1ZTogZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZShlLCByLCBuLCBvKSB7XG4gICAgICAgIGZ1bmN0aW9uIHMoZSwgcikge1xuICAgICAgICAgIGZ1bmN0aW9uIG4oKSB7XG4gICAgICAgICAgICB1ICYmIFMuc2V0UHJvcGVydHlWYWx1ZShlLCBcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgIH12YXIgbCA9IDA7aWYgKDggPj0gZCkgbCA9IGYuY3NzKGUsIHIpO2Vsc2Uge1xuICAgICAgICAgICAgdmFyIHUgPSAhMTtpZiAoL14od2lkdGh8aGVpZ2h0KSQvLnRlc3QocikgJiYgMCA9PT0gUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFwiZGlzcGxheVwiKSAmJiAodSA9ICEwLCBTLnNldFByb3BlcnR5VmFsdWUoZSwgXCJkaXNwbGF5XCIsIFMuVmFsdWVzLmdldERpc3BsYXlUeXBlKGUpKSksICFvKSB7XG4gICAgICAgICAgICAgIGlmIChcImhlaWdodFwiID09PSByICYmIFwiYm9yZGVyLWJveFwiICE9PSBTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJib3hTaXppbmdcIikudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBlLm9mZnNldEhlaWdodCAtIChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcImJvcmRlclRvcFdpZHRoXCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcImJvcmRlckJvdHRvbVdpZHRoXCIpKSB8fCAwKSAtIChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcInBhZGRpbmdUb3BcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFwicGFkZGluZ0JvdHRvbVwiKSkgfHwgMCk7cmV0dXJuIG4oKSwgYztcbiAgICAgICAgICAgICAgfWlmIChcIndpZHRoXCIgPT09IHIgJiYgXCJib3JkZXItYm94XCIgIT09IFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBcImJveFNpemluZ1wiKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9IGUub2Zmc2V0V2lkdGggLSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJib3JkZXJMZWZ0V2lkdGhcIikpIHx8IDApIC0gKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIFwiYm9yZGVyUmlnaHRXaWR0aFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJwYWRkaW5nTGVmdFwiKSkgfHwgMCkgLSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUoZSwgXCJwYWRkaW5nUmlnaHRcIikpIHx8IDApO3JldHVybiBuKCksIHA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH12YXIgZztnID0gaShlKSA9PT0gYSA/IHQuZ2V0Q29tcHV0ZWRTdHlsZShlLCBudWxsKSA6IGkoZSkuY29tcHV0ZWRTdHlsZSA/IGkoZSkuY29tcHV0ZWRTdHlsZSA6IGkoZSkuY29tcHV0ZWRTdHlsZSA9IHQuZ2V0Q29tcHV0ZWRTdHlsZShlLCBudWxsKSwgXCJib3JkZXJDb2xvclwiID09PSByICYmIChyID0gXCJib3JkZXJUb3BDb2xvclwiKSwgbCA9IDkgPT09IGQgJiYgXCJmaWx0ZXJcIiA9PT0gciA/IGcuZ2V0UHJvcGVydHlWYWx1ZShyKSA6IGdbcl0sIChcIlwiID09PSBsIHx8IG51bGwgPT09IGwpICYmIChsID0gZS5zdHlsZVtyXSksIG4oKTtcbiAgICAgICAgICB9aWYgKFwiYXV0b1wiID09PSBsICYmIC9eKHRvcHxyaWdodHxib3R0b218bGVmdCkkL2kudGVzdChyKSkge1xuICAgICAgICAgICAgdmFyIG0gPSBzKGUsIFwicG9zaXRpb25cIik7KFwiZml4ZWRcIiA9PT0gbSB8fCBcImFic29sdXRlXCIgPT09IG0gJiYgL3RvcHxsZWZ0L2kudGVzdChyKSkgJiYgKGwgPSBmKGUpLnBvc2l0aW9uKClbcl0gKyBcInB4XCIpO1xuICAgICAgICAgIH1yZXR1cm4gbDtcbiAgICAgICAgfXZhciBsO2lmIChTLkhvb2tzLnJlZ2lzdGVyZWRbcl0pIHtcbiAgICAgICAgICB2YXIgdSA9IHIsXG4gICAgICAgICAgICAgIGMgPSBTLkhvb2tzLmdldFJvb3QodSk7biA9PT0gYSAmJiAobiA9IFMuZ2V0UHJvcGVydHlWYWx1ZShlLCBTLk5hbWVzLnByZWZpeENoZWNrKGMpWzBdKSksIFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXSAmJiAobiA9IFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtjXShcImV4dHJhY3RcIiwgZSwgbikpLCBsID0gUy5Ib29rcy5leHRyYWN0VmFsdWUodSwgbik7XG4gICAgICAgIH0gZWxzZSBpZiAoUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKSB7XG4gICAgICAgICAgdmFyIHAsIGc7cCA9IFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcIm5hbWVcIiwgZSksIFwidHJhbnNmb3JtXCIgIT09IHAgJiYgKGcgPSBzKGUsIFMuTmFtZXMucHJlZml4Q2hlY2socClbMF0pLCBTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShnKSAmJiBTLkhvb2tzLnRlbXBsYXRlc1tyXSAmJiAoZyA9IFMuSG9va3MudGVtcGxhdGVzW3JdWzFdKSksIGwgPSBTLk5vcm1hbGl6YXRpb25zLnJlZ2lzdGVyZWRbcl0oXCJleHRyYWN0XCIsIGUsIGcpO1xuICAgICAgICB9aWYgKCEvXltcXGQtXS8udGVzdChsKSkgaWYgKGkoZSkgJiYgaShlKS5pc1NWRyAmJiBTLk5hbWVzLlNWR0F0dHJpYnV0ZShyKSkge1xuICAgICAgICAgIGlmICgvXihoZWlnaHR8d2lkdGgpJC9pLnRlc3QocikpIHRyeSB7XG4gICAgICAgICAgICBsID0gZS5nZXRCQm94KClbcl07XG4gICAgICAgICAgfSBjYXRjaCAobSkge1xuICAgICAgICAgICAgbCA9IDA7XG4gICAgICAgICAgfSBlbHNlIGwgPSBlLmdldEF0dHJpYnV0ZShyKTtcbiAgICAgICAgfSBlbHNlIGwgPSBzKGUsIFMuTmFtZXMucHJlZml4Q2hlY2socilbMF0pO3JldHVybiBTLlZhbHVlcy5pc0NTU051bGxWYWx1ZShsKSAmJiAobCA9IDApLCBiLmRlYnVnID49IDIgJiYgY29uc29sZS5sb2coXCJHZXQgXCIgKyByICsgXCI6IFwiICsgbCksIGw7XG4gICAgICB9LCBzZXRQcm9wZXJ0eVZhbHVlOiBmdW5jdGlvbiBzZXRQcm9wZXJ0eVZhbHVlKGUsIHIsIGEsIG4sIG8pIHtcbiAgICAgICAgdmFyIHMgPSByO2lmIChcInNjcm9sbFwiID09PSByKSBvLmNvbnRhaW5lciA/IG8uY29udGFpbmVyW1wic2Nyb2xsXCIgKyBvLmRpcmVjdGlvbl0gPSBhIDogXCJMZWZ0XCIgPT09IG8uZGlyZWN0aW9uID8gdC5zY3JvbGxUbyhhLCBvLmFsdGVybmF0ZVZhbHVlKSA6IHQuc2Nyb2xsVG8oby5hbHRlcm5hdGVWYWx1ZSwgYSk7ZWxzZSBpZiAoUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdICYmIFwidHJhbnNmb3JtXCIgPT09IFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcIm5hbWVcIiwgZSkpIFMuTm9ybWFsaXphdGlvbnMucmVnaXN0ZXJlZFtyXShcImluamVjdFwiLCBlLCBhKSwgcyA9IFwidHJhbnNmb3JtXCIsIGEgPSBpKGUpLnRyYW5zZm9ybUNhY2hlW3JdO2Vsc2Uge1xuICAgICAgICAgIGlmIChTLkhvb2tzLnJlZ2lzdGVyZWRbcl0pIHtcbiAgICAgICAgICAgIHZhciBsID0gcixcbiAgICAgICAgICAgICAgICB1ID0gUy5Ib29rcy5nZXRSb290KHIpO24gPSBuIHx8IFMuZ2V0UHJvcGVydHlWYWx1ZShlLCB1KSwgYSA9IFMuSG9va3MuaW5qZWN0VmFsdWUobCwgYSwgbiksIHIgPSB1O1xuICAgICAgICAgIH1pZiAoUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdICYmIChhID0gUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwiaW5qZWN0XCIsIGUsIGEpLCByID0gUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW3JdKFwibmFtZVwiLCBlKSksIHMgPSBTLk5hbWVzLnByZWZpeENoZWNrKHIpWzBdLCA4ID49IGQpIHRyeSB7XG4gICAgICAgICAgICBlLnN0eWxlW3NdID0gYTtcbiAgICAgICAgICB9IGNhdGNoIChjKSB7XG4gICAgICAgICAgICBiLmRlYnVnICYmIGNvbnNvbGUubG9nKFwiQnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IFtcIiArIGEgKyBcIl0gZm9yIFtcIiArIHMgKyBcIl1cIik7XG4gICAgICAgICAgfSBlbHNlIGkoZSkgJiYgaShlKS5pc1NWRyAmJiBTLk5hbWVzLlNWR0F0dHJpYnV0ZShyKSA/IGUuc2V0QXR0cmlidXRlKHIsIGEpIDogZS5zdHlsZVtzXSA9IGE7Yi5kZWJ1ZyA+PSAyICYmIGNvbnNvbGUubG9nKFwiU2V0IFwiICsgciArIFwiIChcIiArIHMgKyBcIik6IFwiICsgYSk7XG4gICAgICAgIH1yZXR1cm4gW3MsIGFdO1xuICAgICAgfSwgZmx1c2hUcmFuc2Zvcm1DYWNoZTogZnVuY3Rpb24gZmx1c2hUcmFuc2Zvcm1DYWNoZShlKSB7XG4gICAgICAgIGZ1bmN0aW9uIHQodCkge1xuICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShlLCB0KSk7XG4gICAgICAgIH12YXIgciA9IFwiXCI7aWYgKChkIHx8IGIuU3RhdGUuaXNBbmRyb2lkICYmICFiLlN0YXRlLmlzQ2hyb21lKSAmJiBpKGUpLmlzU1ZHKSB7XG4gICAgICAgICAgdmFyIGEgPSB7IHRyYW5zbGF0ZTogW3QoXCJ0cmFuc2xhdGVYXCIpLCB0KFwidHJhbnNsYXRlWVwiKV0sIHNrZXdYOiBbdChcInNrZXdYXCIpXSwgc2tld1k6IFt0KFwic2tld1lcIildLCBzY2FsZTogMSAhPT0gdChcInNjYWxlXCIpID8gW3QoXCJzY2FsZVwiKSwgdChcInNjYWxlXCIpXSA6IFt0KFwic2NhbGVYXCIpLCB0KFwic2NhbGVZXCIpXSwgcm90YXRlOiBbdChcInJvdGF0ZVpcIiksIDAsIDBdIH07Zi5lYWNoKGkoZSkudHJhbnNmb3JtQ2FjaGUsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvXnRyYW5zbGF0ZS9pLnRlc3QoZSkgPyBlID0gXCJ0cmFuc2xhdGVcIiA6IC9ec2NhbGUvaS50ZXN0KGUpID8gZSA9IFwic2NhbGVcIiA6IC9ecm90YXRlL2kudGVzdChlKSAmJiAoZSA9IFwicm90YXRlXCIpLCBhW2VdICYmIChyICs9IGUgKyBcIihcIiArIGFbZV0uam9pbihcIiBcIikgKyBcIikgXCIsIGRlbGV0ZSBhW2VdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgbiwgbztmLmVhY2goaShlKS50cmFuc2Zvcm1DYWNoZSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiBuID0gaShlKS50cmFuc2Zvcm1DYWNoZVt0XSwgXCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZVwiID09PSB0ID8gKG8gPSBuLCAhMCkgOiAoOSA9PT0gZCAmJiBcInJvdGF0ZVpcIiA9PT0gdCAmJiAodCA9IFwicm90YXRlXCIpLCB2b2lkIChyICs9IHQgKyBuICsgXCIgXCIpKTtcbiAgICAgICAgICB9KSwgbyAmJiAociA9IFwicGVyc3BlY3RpdmVcIiArIG8gKyBcIiBcIiArIHIpO1xuICAgICAgICB9Uy5zZXRQcm9wZXJ0eVZhbHVlKGUsIFwidHJhbnNmb3JtXCIsIHIpO1xuICAgICAgfSB9O1MuSG9va3MucmVnaXN0ZXIoKSwgUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcigpLCBiLmhvb2sgPSBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgICAgdmFyIG4gPSBhO3JldHVybiBlID0gbyhlKSwgZi5lYWNoKGUsIGZ1bmN0aW9uIChlLCBvKSB7XG4gICAgICAgIGlmIChpKG8pID09PSBhICYmIGIuaW5pdChvKSwgciA9PT0gYSkgbiA9PT0gYSAmJiAobiA9IGIuQ1NTLmdldFByb3BlcnR5VmFsdWUobywgdCkpO2Vsc2Uge1xuICAgICAgICAgIHZhciBzID0gYi5DU1Muc2V0UHJvcGVydHlWYWx1ZShvLCB0LCByKTtcInRyYW5zZm9ybVwiID09PSBzWzBdICYmIGIuQ1NTLmZsdXNoVHJhbnNmb3JtQ2FjaGUobyksIG4gPSBzO1xuICAgICAgICB9XG4gICAgICB9KSwgbjtcbiAgICB9O3ZhciBQID0gZnVuY3Rpb24gUCgpIHtcbiAgICAgIGZ1bmN0aW9uIGUoKSB7XG4gICAgICAgIHJldHVybiBzID8gay5wcm9taXNlIHx8IG51bGwgOiBsO1xuICAgICAgfWZ1bmN0aW9uIG4oKSB7XG4gICAgICAgIGZ1bmN0aW9uIGUoZSkge1xuICAgICAgICAgIGZ1bmN0aW9uIHAoZSwgdCkge1xuICAgICAgICAgICAgdmFyIHIgPSBhLFxuICAgICAgICAgICAgICAgIG4gPSBhLFxuICAgICAgICAgICAgICAgIGkgPSBhO3JldHVybiBtLmlzQXJyYXkoZSkgPyAociA9IGVbMF0sICFtLmlzQXJyYXkoZVsxXSkgJiYgL15bXFxkLV0vLnRlc3QoZVsxXSkgfHwgbS5pc0Z1bmN0aW9uKGVbMV0pIHx8IFMuUmVnRXguaXNIZXgudGVzdChlWzFdKSA/IGkgPSBlWzFdIDogKG0uaXNTdHJpbmcoZVsxXSkgJiYgIVMuUmVnRXguaXNIZXgudGVzdChlWzFdKSB8fCBtLmlzQXJyYXkoZVsxXSkpICYmIChuID0gdCA/IGVbMV0gOiB1KGVbMV0sIHMuZHVyYXRpb24pLCBlWzJdICE9PSBhICYmIChpID0gZVsyXSkpKSA6IHIgPSBlLCB0IHx8IChuID0gbiB8fCBzLmVhc2luZyksIG0uaXNGdW5jdGlvbihyKSAmJiAociA9IHIuY2FsbChvLCBWLCB3KSksIG0uaXNGdW5jdGlvbihpKSAmJiAoaSA9IGkuY2FsbChvLCBWLCB3KSksIFtyIHx8IDAsIG4sIGldO1xuICAgICAgICAgIH1mdW5jdGlvbiBkKGUsIHQpIHtcbiAgICAgICAgICAgIHZhciByLCBhO3JldHVybiBhID0gKHQgfHwgXCIwXCIpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bJUEtel0rJC8sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHJldHVybiByID0gZSwgXCJcIjtcbiAgICAgICAgICAgIH0pLCByIHx8IChyID0gUy5WYWx1ZXMuZ2V0VW5pdFR5cGUoZSkpLCBbYSwgcl07XG4gICAgICAgICAgfWZ1bmN0aW9uIGgoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHsgbXlQYXJlbnQ6IG8ucGFyZW50Tm9kZSB8fCByLmJvZHksIHBvc2l0aW9uOiBTLmdldFByb3BlcnR5VmFsdWUobywgXCJwb3NpdGlvblwiKSwgZm9udFNpemU6IFMuZ2V0UHJvcGVydHlWYWx1ZShvLCBcImZvbnRTaXplXCIpIH0sXG4gICAgICAgICAgICAgICAgYSA9IGUucG9zaXRpb24gPT09IEwubGFzdFBvc2l0aW9uICYmIGUubXlQYXJlbnQgPT09IEwubGFzdFBhcmVudCxcbiAgICAgICAgICAgICAgICBuID0gZS5mb250U2l6ZSA9PT0gTC5sYXN0Rm9udFNpemU7TC5sYXN0UGFyZW50ID0gZS5teVBhcmVudCwgTC5sYXN0UG9zaXRpb24gPSBlLnBvc2l0aW9uLCBMLmxhc3RGb250U2l6ZSA9IGUuZm9udFNpemU7dmFyIHMgPSAxMDAsXG4gICAgICAgICAgICAgICAgbCA9IHt9O2lmIChuICYmIGEpIGwuZW1Ub1B4ID0gTC5sYXN0RW1Ub1B4LCBsLnBlcmNlbnRUb1B4V2lkdGggPSBMLmxhc3RQZXJjZW50VG9QeFdpZHRoLCBsLnBlcmNlbnRUb1B4SGVpZ2h0ID0gTC5sYXN0UGVyY2VudFRvUHhIZWlnaHQ7ZWxzZSB7XG4gICAgICAgICAgICAgIHZhciB1ID0gaShvKS5pc1NWRyA/IHIuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJyZWN0XCIpIDogci5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2IuaW5pdCh1KSwgZS5teVBhcmVudC5hcHBlbmRDaGlsZCh1KSwgZi5lYWNoKFtcIm92ZXJmbG93XCIsIFwib3ZlcmZsb3dYXCIsIFwib3ZlcmZsb3dZXCJdLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgIGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSwgdCwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgIH0pLCBiLkNTUy5zZXRQcm9wZXJ0eVZhbHVlKHUsIFwicG9zaXRpb25cIiwgZS5wb3NpdGlvbiksIGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSwgXCJmb250U2l6ZVwiLCBlLmZvbnRTaXplKSwgYi5DU1Muc2V0UHJvcGVydHlWYWx1ZSh1LCBcImJveFNpemluZ1wiLCBcImNvbnRlbnQtYm94XCIpLCBmLmVhY2goW1wibWluV2lkdGhcIiwgXCJtYXhXaWR0aFwiLCBcIndpZHRoXCIsIFwibWluSGVpZ2h0XCIsIFwibWF4SGVpZ2h0XCIsIFwiaGVpZ2h0XCJdLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICAgIGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSwgdCwgcyArIFwiJVwiKTtcbiAgICAgICAgICAgICAgfSksIGIuQ1NTLnNldFByb3BlcnR5VmFsdWUodSwgXCJwYWRkaW5nTGVmdFwiLCBzICsgXCJlbVwiKSwgbC5wZXJjZW50VG9QeFdpZHRoID0gTC5sYXN0UGVyY2VudFRvUHhXaWR0aCA9IChwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZSh1LCBcIndpZHRoXCIsIG51bGwsICEwKSkgfHwgMSkgLyBzLCBsLnBlcmNlbnRUb1B4SGVpZ2h0ID0gTC5sYXN0UGVyY2VudFRvUHhIZWlnaHQgPSAocGFyc2VGbG9hdChTLmdldFByb3BlcnR5VmFsdWUodSwgXCJoZWlnaHRcIiwgbnVsbCwgITApKSB8fCAxKSAvIHMsIGwuZW1Ub1B4ID0gTC5sYXN0RW1Ub1B4ID0gKHBhcnNlRmxvYXQoUy5nZXRQcm9wZXJ0eVZhbHVlKHUsIFwicGFkZGluZ0xlZnRcIikpIHx8IDEpIC8gcywgZS5teVBhcmVudC5yZW1vdmVDaGlsZCh1KTtcbiAgICAgICAgICAgIH1yZXR1cm4gbnVsbCA9PT0gTC5yZW1Ub1B4ICYmIChMLnJlbVRvUHggPSBwYXJzZUZsb2F0KFMuZ2V0UHJvcGVydHlWYWx1ZShyLmJvZHksIFwiZm9udFNpemVcIikpIHx8IDE2KSwgbnVsbCA9PT0gTC52d1RvUHggJiYgKEwudndUb1B4ID0gcGFyc2VGbG9hdCh0LmlubmVyV2lkdGgpIC8gMTAwLCBMLnZoVG9QeCA9IHBhcnNlRmxvYXQodC5pbm5lckhlaWdodCkgLyAxMDApLCBsLnJlbVRvUHggPSBMLnJlbVRvUHgsIGwudndUb1B4ID0gTC52d1RvUHgsIGwudmhUb1B4ID0gTC52aFRvUHgsIGIuZGVidWcgPj0gMSAmJiBjb25zb2xlLmxvZyhcIlVuaXQgcmF0aW9zOiBcIiArIEpTT04uc3RyaW5naWZ5KGwpLCBvKSwgbDtcbiAgICAgICAgICB9aWYgKHMuYmVnaW4gJiYgMCA9PT0gVikgdHJ5IHtcbiAgICAgICAgICAgIHMuYmVnaW4uY2FsbChnLCBnKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdGhyb3cgeDtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgIH1pZiAoXCJzY3JvbGxcIiA9PT0gQSkge1xuICAgICAgICAgICAgdmFyIFAsXG4gICAgICAgICAgICAgICAgQyxcbiAgICAgICAgICAgICAgICBULFxuICAgICAgICAgICAgICAgIEYgPSAvXngkL2kudGVzdChzLmF4aXMpID8gXCJMZWZ0XCIgOiBcIlRvcFwiLFxuICAgICAgICAgICAgICAgIGogPSBwYXJzZUZsb2F0KHMub2Zmc2V0KSB8fCAwO3MuY29udGFpbmVyID8gbS5pc1dyYXBwZWQocy5jb250YWluZXIpIHx8IG0uaXNOb2RlKHMuY29udGFpbmVyKSA/IChzLmNvbnRhaW5lciA9IHMuY29udGFpbmVyWzBdIHx8IHMuY29udGFpbmVyLCBQID0gcy5jb250YWluZXJbXCJzY3JvbGxcIiArIEZdLCBUID0gUCArIGYobykucG9zaXRpb24oKVtGLnRvTG93ZXJDYXNlKCldICsgaikgOiBzLmNvbnRhaW5lciA9IG51bGwgOiAoUCA9IGIuU3RhdGUuc2Nyb2xsQW5jaG9yW2IuU3RhdGVbXCJzY3JvbGxQcm9wZXJ0eVwiICsgRl1dLCBDID0gYi5TdGF0ZS5zY3JvbGxBbmNob3JbYi5TdGF0ZVtcInNjcm9sbFByb3BlcnR5XCIgKyAoXCJMZWZ0XCIgPT09IEYgPyBcIlRvcFwiIDogXCJMZWZ0XCIpXV0sIFQgPSBmKG8pLm9mZnNldCgpW0YudG9Mb3dlckNhc2UoKV0gKyBqKSwgbCA9IHsgc2Nyb2xsOiB7IHJvb3RQcm9wZXJ0eVZhbHVlOiAhMSwgc3RhcnRWYWx1ZTogUCwgY3VycmVudFZhbHVlOiBQLCBlbmRWYWx1ZTogVCwgdW5pdFR5cGU6IFwiXCIsIGVhc2luZzogcy5lYXNpbmcsIHNjcm9sbERhdGE6IHsgY29udGFpbmVyOiBzLmNvbnRhaW5lciwgZGlyZWN0aW9uOiBGLCBhbHRlcm5hdGVWYWx1ZTogQyB9IH0sIGVsZW1lbnQ6IG8gfSwgYi5kZWJ1ZyAmJiBjb25zb2xlLmxvZyhcInR3ZWVuc0NvbnRhaW5lciAoc2Nyb2xsKTogXCIsIGwuc2Nyb2xsLCBvKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFwicmV2ZXJzZVwiID09PSBBKSB7XG4gICAgICAgICAgICBpZiAoIWkobykudHdlZW5zQ29udGFpbmVyKSByZXR1cm4gdm9pZCBmLmRlcXVldWUobywgcy5xdWV1ZSk7XCJub25lXCIgPT09IGkobykub3B0cy5kaXNwbGF5ICYmIChpKG8pLm9wdHMuZGlzcGxheSA9IFwiYXV0b1wiKSwgXCJoaWRkZW5cIiA9PT0gaShvKS5vcHRzLnZpc2liaWxpdHkgJiYgKGkobykub3B0cy52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIpLCBpKG8pLm9wdHMubG9vcCA9ICExLCBpKG8pLm9wdHMuYmVnaW4gPSBudWxsLCBpKG8pLm9wdHMuY29tcGxldGUgPSBudWxsLCB2LmVhc2luZyB8fCBkZWxldGUgcy5lYXNpbmcsIHYuZHVyYXRpb24gfHwgZGVsZXRlIHMuZHVyYXRpb24sIHMgPSBmLmV4dGVuZCh7fSwgaShvKS5vcHRzLCBzKTt2YXIgRSA9IGYuZXh0ZW5kKCEwLCB7fSwgaShvKS50d2VlbnNDb250YWluZXIpO2ZvciAodmFyIEggaW4gRSkge1xuICAgICAgICAgICAgICBpZiAoXCJlbGVtZW50XCIgIT09IEgpIHtcbiAgICAgICAgICAgICAgICB2YXIgTiA9IEVbSF0uc3RhcnRWYWx1ZTtFW0hdLnN0YXJ0VmFsdWUgPSBFW0hdLmN1cnJlbnRWYWx1ZSA9IEVbSF0uZW5kVmFsdWUsIEVbSF0uZW5kVmFsdWUgPSBOLCBtLmlzRW1wdHlPYmplY3QodikgfHwgKEVbSF0uZWFzaW5nID0gcy5lYXNpbmcpLCBiLmRlYnVnICYmIGNvbnNvbGUubG9nKFwicmV2ZXJzZSB0d2VlbnNDb250YWluZXIgKFwiICsgSCArIFwiKTogXCIgKyBKU09OLnN0cmluZ2lmeShFW0hdKSwgbyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1sID0gRTtcbiAgICAgICAgICB9IGVsc2UgaWYgKFwic3RhcnRcIiA9PT0gQSkge1xuICAgICAgICAgICAgdmFyIEU7aShvKS50d2VlbnNDb250YWluZXIgJiYgaShvKS5pc0FuaW1hdGluZyA9PT0gITAgJiYgKEUgPSBpKG8pLnR3ZWVuc0NvbnRhaW5lciksIGYuZWFjaCh5LCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICBpZiAoUmVnRXhwKFwiXlwiICsgUy5MaXN0cy5jb2xvcnMuam9pbihcIiR8XlwiKSArIFwiJFwiKS50ZXN0KGUpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHIgPSBwKHQsICEwKSxcbiAgICAgICAgICAgICAgICAgICAgbiA9IHJbMF0sXG4gICAgICAgICAgICAgICAgICAgIG8gPSByWzFdLFxuICAgICAgICAgICAgICAgICAgICBpID0gclsyXTtpZiAoUy5SZWdFeC5pc0hleC50ZXN0KG4pKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gW1wiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCJdLCBsID0gUy5WYWx1ZXMuaGV4VG9SZ2IobiksIHUgPSBpID8gUy5WYWx1ZXMuaGV4VG9SZ2IoaSkgOiBhLCBjID0gMDsgYyA8IHMubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSBbbFtjXV07byAmJiBmLnB1c2gobyksIHUgIT09IGEgJiYgZi5wdXNoKHVbY10pLCB5W2UgKyBzW2NdXSA9IGY7XG4gICAgICAgICAgICAgICAgICB9ZGVsZXRlIHlbZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtmb3IgKHZhciB6IGluIHkpIHtcbiAgICAgICAgICAgICAgdmFyIE8gPSBwKHlbel0pLFxuICAgICAgICAgICAgICAgICAgcSA9IE9bMF0sXG4gICAgICAgICAgICAgICAgICAkID0gT1sxXSxcbiAgICAgICAgICAgICAgICAgIE0gPSBPWzJdO3ogPSBTLk5hbWVzLmNhbWVsQ2FzZSh6KTt2YXIgSSA9IFMuSG9va3MuZ2V0Um9vdCh6KSxcbiAgICAgICAgICAgICAgICAgIEIgPSAhMTtpZiAoaShvKS5pc1NWRyB8fCBcInR3ZWVuXCIgPT09IEkgfHwgUy5OYW1lcy5wcmVmaXhDaGVjayhJKVsxXSAhPT0gITEgfHwgUy5Ob3JtYWxpemF0aW9ucy5yZWdpc3RlcmVkW0ldICE9PSBhKSB7XG4gICAgICAgICAgICAgICAgKHMuZGlzcGxheSAhPT0gYSAmJiBudWxsICE9PSBzLmRpc3BsYXkgJiYgXCJub25lXCIgIT09IHMuZGlzcGxheSB8fCBzLnZpc2liaWxpdHkgIT09IGEgJiYgXCJoaWRkZW5cIiAhPT0gcy52aXNpYmlsaXR5KSAmJiAvb3BhY2l0eXxmaWx0ZXIvLnRlc3QoeikgJiYgIU0gJiYgMCAhPT0gcSAmJiAoTSA9IDApLCBzLl9jYWNoZVZhbHVlcyAmJiBFICYmIEVbel0gPyAoTSA9PT0gYSAmJiAoTSA9IEVbel0uZW5kVmFsdWUgKyBFW3pdLnVuaXRUeXBlKSwgQiA9IGkobykucm9vdFByb3BlcnR5VmFsdWVDYWNoZVtJXSkgOiBTLkhvb2tzLnJlZ2lzdGVyZWRbel0gPyBNID09PSBhID8gKEIgPSBTLmdldFByb3BlcnR5VmFsdWUobywgSSksIE0gPSBTLmdldFByb3BlcnR5VmFsdWUobywgeiwgQikpIDogQiA9IFMuSG9va3MudGVtcGxhdGVzW0ldWzFdIDogTSA9PT0gYSAmJiAoTSA9IFMuZ2V0UHJvcGVydHlWYWx1ZShvLCB6KSk7dmFyIFcsXG4gICAgICAgICAgICAgICAgICAgIEcsXG4gICAgICAgICAgICAgICAgICAgIFksXG4gICAgICAgICAgICAgICAgICAgIEQgPSAhMTtpZiAoVyA9IGQoeiwgTSksIE0gPSBXWzBdLCBZID0gV1sxXSwgVyA9IGQoeiwgcSksIHEgPSBXWzBdLnJlcGxhY2UoL14oWystXFwvKl0pPS8sIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gRCA9IHQsIFwiXCI7XG4gICAgICAgICAgICAgICAgfSksIEcgPSBXWzFdLCBNID0gcGFyc2VGbG9hdChNKSB8fCAwLCBxID0gcGFyc2VGbG9hdChxKSB8fCAwLCBcIiVcIiA9PT0gRyAmJiAoL14oZm9udFNpemV8bGluZUhlaWdodCkkLy50ZXN0KHopID8gKHEgLz0gMTAwLCBHID0gXCJlbVwiKSA6IC9ec2NhbGUvLnRlc3QoeikgPyAocSAvPSAxMDAsIEcgPSBcIlwiKSA6IC8oUmVkfEdyZWVufEJsdWUpJC9pLnRlc3QoeikgJiYgKHEgPSBxIC8gMTAwICogMjU1LCBHID0gXCJcIikpLCAvW1xcLypdLy50ZXN0KEQpKSBHID0gWTtlbHNlIGlmIChZICE9PSBHICYmIDAgIT09IE0pIGlmICgwID09PSBxKSBHID0gWTtlbHNlIHtcbiAgICAgICAgICAgICAgICAgIG4gPSBuIHx8IGgoKTt2YXIgUSA9IC9tYXJnaW58cGFkZGluZ3xsZWZ0fHJpZ2h0fHdpZHRofHRleHR8d29yZHxsZXR0ZXIvaS50ZXN0KHopIHx8IC9YJC8udGVzdCh6KSB8fCBcInhcIiA9PT0geiA/IFwieFwiIDogXCJ5XCI7c3dpdGNoIChZKSB7Y2FzZSBcIiVcIjpcbiAgICAgICAgICAgICAgICAgICAgICBNICo9IFwieFwiID09PSBRID8gbi5wZXJjZW50VG9QeFdpZHRoIDogbi5wZXJjZW50VG9QeEhlaWdodDticmVhaztjYXNlIFwicHhcIjpcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgIE0gKj0gbltZICsgXCJUb1B4XCJdO31zd2l0Y2ggKEcpIHtjYXNlIFwiJVwiOlxuICAgICAgICAgICAgICAgICAgICAgIE0gKj0gMSAvIChcInhcIiA9PT0gUSA/IG4ucGVyY2VudFRvUHhXaWR0aCA6IG4ucGVyY2VudFRvUHhIZWlnaHQpO2JyZWFrO2Nhc2UgXCJweFwiOlxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO2RlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgTSAqPSAxIC8gbltHICsgXCJUb1B4XCJdO31cbiAgICAgICAgICAgICAgICB9c3dpdGNoIChEKSB7Y2FzZSBcIitcIjpcbiAgICAgICAgICAgICAgICAgICAgcSA9IE0gKyBxO2JyZWFrO2Nhc2UgXCItXCI6XG4gICAgICAgICAgICAgICAgICAgIHEgPSBNIC0gcTticmVhaztjYXNlIFwiKlwiOlxuICAgICAgICAgICAgICAgICAgICBxID0gTSAqIHE7YnJlYWs7Y2FzZSBcIi9cIjpcbiAgICAgICAgICAgICAgICAgICAgcSA9IE0gLyBxO31sW3pdID0geyByb290UHJvcGVydHlWYWx1ZTogQiwgc3RhcnRWYWx1ZTogTSwgY3VycmVudFZhbHVlOiBNLCBlbmRWYWx1ZTogcSwgdW5pdFR5cGU6IEcsIGVhc2luZzogJCB9LCBiLmRlYnVnICYmIGNvbnNvbGUubG9nKFwidHdlZW5zQ29udGFpbmVyIChcIiArIHogKyBcIik6IFwiICsgSlNPTi5zdHJpbmdpZnkobFt6XSksIG8pO1xuICAgICAgICAgICAgICB9IGVsc2UgYi5kZWJ1ZyAmJiBjb25zb2xlLmxvZyhcIlNraXBwaW5nIFtcIiArIEkgKyBcIl0gZHVlIHRvIGEgbGFjayBvZiBicm93c2VyIHN1cHBvcnQuXCIpO1xuICAgICAgICAgICAgfWwuZWxlbWVudCA9IG87XG4gICAgICAgICAgfWwuZWxlbWVudCAmJiAoUy5WYWx1ZXMuYWRkQ2xhc3MobywgXCJ2ZWxvY2l0eS1hbmltYXRpbmdcIiksIFIucHVzaChsKSwgXCJcIiA9PT0gcy5xdWV1ZSAmJiAoaShvKS50d2VlbnNDb250YWluZXIgPSBsLCBpKG8pLm9wdHMgPSBzKSwgaShvKS5pc0FuaW1hdGluZyA9ICEwLCBWID09PSB3IC0gMSA/IChiLlN0YXRlLmNhbGxzLnB1c2goW1IsIGcsIHMsIG51bGwsIGsucmVzb2x2ZXJdKSwgYi5TdGF0ZS5pc1RpY2tpbmcgPT09ICExICYmIChiLlN0YXRlLmlzVGlja2luZyA9ICEwLCBjKCkpKSA6IFYrKyk7XG4gICAgICAgIH12YXIgbixcbiAgICAgICAgICAgIG8gPSB0aGlzLFxuICAgICAgICAgICAgcyA9IGYuZXh0ZW5kKHt9LCBiLmRlZmF1bHRzLCB2KSxcbiAgICAgICAgICAgIGwgPSB7fTtzd2l0Y2ggKGkobykgPT09IGEgJiYgYi5pbml0KG8pLCBwYXJzZUZsb2F0KHMuZGVsYXkpICYmIHMucXVldWUgIT09ICExICYmIGYucXVldWUobywgcy5xdWV1ZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBiLnZlbG9jaXR5UXVldWVFbnRyeUZsYWcgPSAhMCwgaShvKS5kZWxheVRpbWVyID0geyBzZXRUaW1lb3V0OiBzZXRUaW1lb3V0KGUsIHBhcnNlRmxvYXQocy5kZWxheSkpLCBuZXh0OiBlIH07XG4gICAgICAgIH0pLCBzLmR1cmF0aW9uLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkge2Nhc2UgXCJmYXN0XCI6XG4gICAgICAgICAgICBzLmR1cmF0aW9uID0gMjAwO2JyZWFrO2Nhc2UgXCJub3JtYWxcIjpcbiAgICAgICAgICAgIHMuZHVyYXRpb24gPSBoO2JyZWFrO2Nhc2UgXCJzbG93XCI6XG4gICAgICAgICAgICBzLmR1cmF0aW9uID0gNjAwO2JyZWFrO2RlZmF1bHQ6XG4gICAgICAgICAgICBzLmR1cmF0aW9uID0gcGFyc2VGbG9hdChzLmR1cmF0aW9uKSB8fCAxO31iLm1vY2sgIT09ICExICYmIChiLm1vY2sgPT09ICEwID8gcy5kdXJhdGlvbiA9IHMuZGVsYXkgPSAxIDogKHMuZHVyYXRpb24gKj0gcGFyc2VGbG9hdChiLm1vY2spIHx8IDEsIHMuZGVsYXkgKj0gcGFyc2VGbG9hdChiLm1vY2spIHx8IDEpKSwgcy5lYXNpbmcgPSB1KHMuZWFzaW5nLCBzLmR1cmF0aW9uKSwgcy5iZWdpbiAmJiAhbS5pc0Z1bmN0aW9uKHMuYmVnaW4pICYmIChzLmJlZ2luID0gbnVsbCksIHMucHJvZ3Jlc3MgJiYgIW0uaXNGdW5jdGlvbihzLnByb2dyZXNzKSAmJiAocy5wcm9ncmVzcyA9IG51bGwpLCBzLmNvbXBsZXRlICYmICFtLmlzRnVuY3Rpb24ocy5jb21wbGV0ZSkgJiYgKHMuY29tcGxldGUgPSBudWxsKSwgcy5kaXNwbGF5ICE9PSBhICYmIG51bGwgIT09IHMuZGlzcGxheSAmJiAocy5kaXNwbGF5ID0gcy5kaXNwbGF5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSwgXCJhdXRvXCIgPT09IHMuZGlzcGxheSAmJiAocy5kaXNwbGF5ID0gYi5DU1MuVmFsdWVzLmdldERpc3BsYXlUeXBlKG8pKSksIHMudmlzaWJpbGl0eSAhPT0gYSAmJiBudWxsICE9PSBzLnZpc2liaWxpdHkgJiYgKHMudmlzaWJpbGl0eSA9IHMudmlzaWJpbGl0eS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpLCBzLm1vYmlsZUhBID0gcy5tb2JpbGVIQSAmJiBiLlN0YXRlLmlzTW9iaWxlICYmICFiLlN0YXRlLmlzR2luZ2VyYnJlYWQsIHMucXVldWUgPT09ICExID8gcy5kZWxheSA/IHNldFRpbWVvdXQoZSwgcy5kZWxheSkgOiBlKCkgOiBmLnF1ZXVlKG8sIHMucXVldWUsIGZ1bmN0aW9uICh0LCByKSB7XG4gICAgICAgICAgcmV0dXJuIHIgPT09ICEwID8gKGsucHJvbWlzZSAmJiBrLnJlc29sdmVyKGcpLCAhMCkgOiAoYi52ZWxvY2l0eVF1ZXVlRW50cnlGbGFnID0gITAsIHZvaWQgZSh0KSk7XG4gICAgICAgIH0pLCBcIlwiICE9PSBzLnF1ZXVlICYmIFwiZnhcIiAhPT0gcy5xdWV1ZSB8fCBcImlucHJvZ3Jlc3NcIiA9PT0gZi5xdWV1ZShvKVswXSB8fCBmLmRlcXVldWUobyk7XG4gICAgICB9dmFyIHMsXG4gICAgICAgICAgbCxcbiAgICAgICAgICBkLFxuICAgICAgICAgIGcsXG4gICAgICAgICAgeSxcbiAgICAgICAgICB2LFxuICAgICAgICAgIHggPSBhcmd1bWVudHNbMF0gJiYgKGFyZ3VtZW50c1swXS5wIHx8IGYuaXNQbGFpbk9iamVjdChhcmd1bWVudHNbMF0ucHJvcGVydGllcykgJiYgIWFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzLm5hbWVzIHx8IG0uaXNTdHJpbmcoYXJndW1lbnRzWzBdLnByb3BlcnRpZXMpKTtpZiAobS5pc1dyYXBwZWQodGhpcykgPyAocyA9ICExLCBkID0gMCwgZyA9IHRoaXMsIGwgPSB0aGlzKSA6IChzID0gITAsIGQgPSAxLCBnID0geCA/IGFyZ3VtZW50c1swXS5lbGVtZW50cyB8fCBhcmd1bWVudHNbMF0uZSA6IGFyZ3VtZW50c1swXSksIGcgPSBvKGcpKSB7XG4gICAgICAgIHggPyAoeSA9IGFyZ3VtZW50c1swXS5wcm9wZXJ0aWVzIHx8IGFyZ3VtZW50c1swXS5wLCB2ID0gYXJndW1lbnRzWzBdLm9wdGlvbnMgfHwgYXJndW1lbnRzWzBdLm8pIDogKHkgPSBhcmd1bWVudHNbZF0sIHYgPSBhcmd1bWVudHNbZCArIDFdKTt2YXIgdyA9IGcubGVuZ3RoLFxuICAgICAgICAgICAgViA9IDA7aWYgKCEvXihzdG9wfGZpbmlzaCkkL2kudGVzdCh5KSAmJiAhZi5pc1BsYWluT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdmFyIEMgPSBkICsgMTt2ID0ge307Zm9yICh2YXIgVCA9IEM7IFQgPCBhcmd1bWVudHMubGVuZ3RoOyBUKyspIHtcbiAgICAgICAgICAgIG0uaXNBcnJheShhcmd1bWVudHNbVF0pIHx8ICEvXihmYXN0fG5vcm1hbHxzbG93KSQvaS50ZXN0KGFyZ3VtZW50c1tUXSkgJiYgIS9eXFxkLy50ZXN0KGFyZ3VtZW50c1tUXSkgPyBtLmlzU3RyaW5nKGFyZ3VtZW50c1tUXSkgfHwgbS5pc0FycmF5KGFyZ3VtZW50c1tUXSkgPyB2LmVhc2luZyA9IGFyZ3VtZW50c1tUXSA6IG0uaXNGdW5jdGlvbihhcmd1bWVudHNbVF0pICYmICh2LmNvbXBsZXRlID0gYXJndW1lbnRzW1RdKSA6IHYuZHVyYXRpb24gPSBhcmd1bWVudHNbVF07XG4gICAgICAgICAgfVxuICAgICAgICB9dmFyIGsgPSB7IHByb21pc2U6IG51bGwsIHJlc29sdmVyOiBudWxsLCByZWplY3RlcjogbnVsbCB9O3MgJiYgYi5Qcm9taXNlICYmIChrLnByb21pc2UgPSBuZXcgYi5Qcm9taXNlKGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICAgICAgay5yZXNvbHZlciA9IGUsIGsucmVqZWN0ZXIgPSB0O1xuICAgICAgICB9KSk7dmFyIEE7c3dpdGNoICh5KSB7Y2FzZSBcInNjcm9sbFwiOlxuICAgICAgICAgICAgQSA9IFwic2Nyb2xsXCI7YnJlYWs7Y2FzZSBcInJldmVyc2VcIjpcbiAgICAgICAgICAgIEEgPSBcInJldmVyc2VcIjticmVhaztjYXNlIFwiZmluaXNoXCI6Y2FzZSBcInN0b3BcIjpcbiAgICAgICAgICAgIGYuZWFjaChnLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgICAgICBpKHQpICYmIGkodCkuZGVsYXlUaW1lciAmJiAoY2xlYXJUaW1lb3V0KGkodCkuZGVsYXlUaW1lci5zZXRUaW1lb3V0KSwgaSh0KS5kZWxheVRpbWVyLm5leHQgJiYgaSh0KS5kZWxheVRpbWVyLm5leHQoKSwgZGVsZXRlIGkodCkuZGVsYXlUaW1lcik7XG4gICAgICAgICAgICB9KTt2YXIgRiA9IFtdO3JldHVybiBmLmVhY2goYi5TdGF0ZS5jYWxscywgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgdCAmJiBmLmVhY2godFsxXSwgZnVuY3Rpb24gKHIsIG4pIHtcbiAgICAgICAgICAgICAgICB2YXIgbyA9IHYgPT09IGEgPyBcIlwiIDogdjtyZXR1cm4gbyA9PT0gITAgfHwgdFsyXS5xdWV1ZSA9PT0gbyB8fCB2ID09PSBhICYmIHRbMl0ucXVldWUgPT09ICExID8gdm9pZCBmLmVhY2goZywgZnVuY3Rpb24gKHIsIGEpIHtcbiAgICAgICAgICAgICAgICAgIGEgPT09IG4gJiYgKCh2ID09PSAhMCB8fCBtLmlzU3RyaW5nKHYpKSAmJiAoZi5lYWNoKGYucXVldWUoYSwgbS5pc1N0cmluZyh2KSA/IHYgOiBcIlwiKSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbS5pc0Z1bmN0aW9uKHQpICYmIHQobnVsbCwgITApO1xuICAgICAgICAgICAgICAgICAgfSksIGYucXVldWUoYSwgbS5pc1N0cmluZyh2KSA/IHYgOiBcIlwiLCBbXSkpLCBcInN0b3BcIiA9PT0geSA/IChpKGEpICYmIGkoYSkudHdlZW5zQ29udGFpbmVyICYmIG8gIT09ICExICYmIGYuZWFjaChpKGEpLnR3ZWVuc0NvbnRhaW5lciwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdC5lbmRWYWx1ZSA9IHQuY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgICAgfSksIEYucHVzaChlKSkgOiBcImZpbmlzaFwiID09PSB5ICYmICh0WzJdLmR1cmF0aW9uID0gMSkpO1xuICAgICAgICAgICAgICAgIH0pIDogITA7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSksIFwic3RvcFwiID09PSB5ICYmIChmLmVhY2goRiwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgcCh0LCAhMCk7XG4gICAgICAgICAgICB9KSwgay5wcm9taXNlICYmIGsucmVzb2x2ZXIoZykpLCBlKCk7ZGVmYXVsdDpcbiAgICAgICAgICAgIGlmICghZi5pc1BsYWluT2JqZWN0KHkpIHx8IG0uaXNFbXB0eU9iamVjdCh5KSkge1xuICAgICAgICAgICAgICBpZiAobS5pc1N0cmluZyh5KSAmJiBiLlJlZGlyZWN0c1t5XSkge1xuICAgICAgICAgICAgICAgIHZhciBqID0gZi5leHRlbmQoe30sIHYpLFxuICAgICAgICAgICAgICAgICAgICBFID0gai5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgSCA9IGouZGVsYXkgfHwgMDtyZXR1cm4gai5iYWNrd2FyZHMgPT09ICEwICYmIChnID0gZi5leHRlbmQoITAsIFtdLCBnKS5yZXZlcnNlKCkpLCBmLmVhY2goZywgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoai5zdGFnZ2VyKSA/IGouZGVsYXkgPSBIICsgcGFyc2VGbG9hdChqLnN0YWdnZXIpICogZSA6IG0uaXNGdW5jdGlvbihqLnN0YWdnZXIpICYmIChqLmRlbGF5ID0gSCArIGouc3RhZ2dlci5jYWxsKHQsIGUsIHcpKSwgai5kcmFnICYmIChqLmR1cmF0aW9uID0gcGFyc2VGbG9hdChFKSB8fCAoL14oY2FsbG91dHx0cmFuc2l0aW9uKS8udGVzdCh5KSA/IDFlMyA6IGgpLCBqLmR1cmF0aW9uID0gTWF0aC5tYXgoai5kdXJhdGlvbiAqIChqLmJhY2t3YXJkcyA/IDEgLSBlIC8gdyA6IChlICsgMSkgLyB3KSwgLjc1ICogai5kdXJhdGlvbiwgMjAwKSksIGIuUmVkaXJlY3RzW3ldLmNhbGwodCwgdCwgaiB8fCB7fSwgZSwgdywgZywgay5wcm9taXNlID8gayA6IGEpO1xuICAgICAgICAgICAgICAgIH0pLCBlKCk7XG4gICAgICAgICAgICAgIH12YXIgTiA9IFwiVmVsb2NpdHk6IEZpcnN0IGFyZ3VtZW50IChcIiArIHkgKyBcIikgd2FzIG5vdCBhIHByb3BlcnR5IG1hcCwgYSBrbm93biBhY3Rpb24sIG9yIGEgcmVnaXN0ZXJlZCByZWRpcmVjdC4gQWJvcnRpbmcuXCI7cmV0dXJuIGsucHJvbWlzZSA/IGsucmVqZWN0ZXIobmV3IEVycm9yKE4pKSA6IGNvbnNvbGUubG9nKE4pLCBlKCk7XG4gICAgICAgICAgICB9QSA9IFwic3RhcnRcIjt9dmFyIEwgPSB7IGxhc3RQYXJlbnQ6IG51bGwsIGxhc3RQb3NpdGlvbjogbnVsbCwgbGFzdEZvbnRTaXplOiBudWxsLCBsYXN0UGVyY2VudFRvUHhXaWR0aDogbnVsbCwgbGFzdFBlcmNlbnRUb1B4SGVpZ2h0OiBudWxsLCBsYXN0RW1Ub1B4OiBudWxsLCByZW1Ub1B4OiBudWxsLCB2d1RvUHg6IG51bGwsIHZoVG9QeDogbnVsbCB9LFxuICAgICAgICAgICAgUiA9IFtdO2YuZWFjaChnLCBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgICAgIG0uaXNOb2RlKHQpICYmIG4uY2FsbCh0KTtcbiAgICAgICAgfSk7dmFyIHosXG4gICAgICAgICAgICBqID0gZi5leHRlbmQoe30sIGIuZGVmYXVsdHMsIHYpO2lmIChqLmxvb3AgPSBwYXJzZUludChqLmxvb3ApLCB6ID0gMiAqIGoubG9vcCAtIDEsIGoubG9vcCkgZm9yICh2YXIgTyA9IDA7IHogPiBPOyBPKyspIHtcbiAgICAgICAgICB2YXIgcSA9IHsgZGVsYXk6IGouZGVsYXksIHByb2dyZXNzOiBqLnByb2dyZXNzIH07TyA9PT0geiAtIDEgJiYgKHEuZGlzcGxheSA9IGouZGlzcGxheSwgcS52aXNpYmlsaXR5ID0gai52aXNpYmlsaXR5LCBxLmNvbXBsZXRlID0gai5jb21wbGV0ZSksIFAoZywgXCJyZXZlcnNlXCIsIHEpO1xuICAgICAgICB9cmV0dXJuIGUoKTtcbiAgICAgIH1cbiAgICB9O2IgPSBmLmV4dGVuZChQLCBiKSwgYi5hbmltYXRlID0gUDt2YXIgdyA9IHQucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGc7cmV0dXJuIGIuU3RhdGUuaXNNb2JpbGUgfHwgci5oaWRkZW4gPT09IGEgfHwgci5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByLmhpZGRlbiA/ICh3ID0gZnVuY3Rpb24gdyhlKSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlKCEwKTtcbiAgICAgICAgfSwgMTYpO1xuICAgICAgfSwgYygpKSA6IHcgPSB0LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBnO1xuICAgIH0pLCBlLlZlbG9jaXR5ID0gYiwgZSAhPT0gdCAmJiAoZS5mbi52ZWxvY2l0eSA9IFAsIGUuZm4udmVsb2NpdHkuZGVmYXVsdHMgPSBiLmRlZmF1bHRzKSwgZi5lYWNoKFtcIkRvd25cIiwgXCJVcFwiXSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGIuUmVkaXJlY3RzW1wic2xpZGVcIiArIHRdID0gZnVuY3Rpb24gKGUsIHIsIG4sIG8sIGksIHMpIHtcbiAgICAgICAgdmFyIGwgPSBmLmV4dGVuZCh7fSwgciksXG4gICAgICAgICAgICB1ID0gbC5iZWdpbixcbiAgICAgICAgICAgIGMgPSBsLmNvbXBsZXRlLFxuICAgICAgICAgICAgcCA9IHsgaGVpZ2h0OiBcIlwiLCBtYXJnaW5Ub3A6IFwiXCIsIG1hcmdpbkJvdHRvbTogXCJcIiwgcGFkZGluZ1RvcDogXCJcIiwgcGFkZGluZ0JvdHRvbTogXCJcIiB9LFxuICAgICAgICAgICAgZCA9IHt9O2wuZGlzcGxheSA9PT0gYSAmJiAobC5kaXNwbGF5ID0gXCJEb3duXCIgPT09IHQgPyBcImlubGluZVwiID09PSBiLkNTUy5WYWx1ZXMuZ2V0RGlzcGxheVR5cGUoZSkgPyBcImlubGluZS1ibG9ja1wiIDogXCJibG9ja1wiIDogXCJub25lXCIpLCBsLmJlZ2luID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHUgJiYgdS5jYWxsKGksIGkpO2ZvciAodmFyIHIgaW4gcCkge1xuICAgICAgICAgICAgZFtyXSA9IGUuc3R5bGVbcl07dmFyIGEgPSBiLkNTUy5nZXRQcm9wZXJ0eVZhbHVlKGUsIHIpO3Bbcl0gPSBcIkRvd25cIiA9PT0gdCA/IFthLCAwXSA6IFswLCBhXTtcbiAgICAgICAgICB9ZC5vdmVyZmxvdyA9IGUuc3R5bGUub3ZlcmZsb3csIGUuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuICAgICAgICB9LCBsLmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZvciAodmFyIHQgaW4gZCkge1xuICAgICAgICAgICAgZS5zdHlsZVt0XSA9IGRbdF07XG4gICAgICAgICAgfWMgJiYgYy5jYWxsKGksIGkpLCBzICYmIHMucmVzb2x2ZXIoaSk7XG4gICAgICAgIH0sIGIoZSwgcCwgbCk7XG4gICAgICB9O1xuICAgIH0pLCBmLmVhY2goW1wiSW5cIiwgXCJPdXRcIl0sIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBiLlJlZGlyZWN0c1tcImZhZGVcIiArIHRdID0gZnVuY3Rpb24gKGUsIHIsIG4sIG8sIGksIHMpIHtcbiAgICAgICAgdmFyIGwgPSBmLmV4dGVuZCh7fSwgciksXG4gICAgICAgICAgICB1ID0geyBvcGFjaXR5OiBcIkluXCIgPT09IHQgPyAxIDogMCB9LFxuICAgICAgICAgICAgYyA9IGwuY29tcGxldGU7bC5jb21wbGV0ZSA9IG4gIT09IG8gLSAxID8gbC5iZWdpbiA9IG51bGwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYyAmJiBjLmNhbGwoaSwgaSksIHMgJiYgcy5yZXNvbHZlcihpKTtcbiAgICAgICAgfSwgbC5kaXNwbGF5ID09PSBhICYmIChsLmRpc3BsYXkgPSBcIkluXCIgPT09IHQgPyBcImF1dG9cIiA6IFwibm9uZVwiKSwgYih0aGlzLCB1LCBsKTtcbiAgICAgIH07XG4gICAgfSksIGI7XG4gIH0od2luZG93LmpRdWVyeSB8fCB3aW5kb3cuWmVwdG8gfHwgd2luZG93LCB3aW5kb3csIGRvY3VtZW50KTtcbn0pKTsiLCIvKipcbiAqXG4gKiBAYXV0aG9yXHRcdFNlYW4gRGVsYW5leVxuICogQGNvbXBhbnlcdFx0RGVsYW5leU1ldGhvZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxubGV0IERlbGFuZXlNZXRob2Q7XG5cbmNvbnN0ICQgPSB0aGlzLmpRdWVyeS5ub0NvbmZsaWN0KCk7XG5cbmlmIChEZWxhbmV5TWV0aG9kID09PSB1bmRlZmluZWQpIHtcblx0RGVsYW5leU1ldGhvZCA9IHt9O1xufVxuXG5EZWxhbmV5TWV0aG9kID0ge1xuXHRQYWdlOiB7XG5cdFx0c2VnbWVudHM6IFtdLFxuXHRcdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdE1hdGVyaWFsaXplLmZhZGVJbkltYWdlKCcjaW50cm8nKTtcblxuXHRcdFx0JCgnLm1vZGFsJykubW9kYWwoe1xuXHRcdFx0XHRkaXNtaXNzaWJsZTogZmFsc2Vcblx0XHRcdH0pO1xuXG5cdFx0XHQkKCcucGFyYWxsYXgnKS5wYXJhbGxheCgpO1xuXG5cdFx0XHQkKCcuYnV0dG9uLWNvbGxhcHNlJykuc2lkZU5hdih7XG5cdFx0XHRcdG1lbnVXaWR0aDogMjEwLFxuXHRcdFx0XHRlZGdlOiAncmlnaHQnLFxuXHRcdFx0XHRjbG9zZU9uQ2xpY2s6IHRydWUsXG5cdFx0XHRcdGRyYWdnYWJsZTogdHJ1ZVxuXHRcdFx0fSk7XG5cblx0XHRcdCQoJ2EsIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0aWYgKCQodGhpcykuZGF0YSgnc2Nyb2xsLXRvJykpIHtcblx0XHRcdFx0XHRjb25zdCBpZCA9ICcjJyArICQodGhpcykuZGF0YSgnc2Nyb2xsLXRvJyk7XG5cdFx0XHRcdFx0JCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuXHRcdFx0XHRcdFx0c2Nyb2xsVG9wOiAoJChpZCkuZmlyc3QoKS5vZmZzZXQoKS50b3AgLSA2MClcblx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn07XG5cbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcblx0RGVsYW5leU1ldGhvZC5QYWdlLmluaXQoKTtcbn0pO1xuXG4kKHdpbmRvdykuYmluZCgnb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdCQoJy5idXR0b24tY29sbGFwc2UnKS5zaWRlTmF2KCdoaWRlJyk7XG59KTtcbiJdfQ==
