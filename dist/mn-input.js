"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),MnInput=function(_HTMLElement){function MnInput(self){var _this,_ret;return _classCallCheck(this,MnInput),self=_this=_possibleConstructorReturn(this,(MnInput.__proto__||Object.getPrototypeOf(MnInput)).call(this,self)),_this.setPlaceholder(),_this.setInput(),_ret=self,_possibleConstructorReturn(_this,_ret)}return _inherits(MnInput,_HTMLElement),_createClass(MnInput,[{key:"setPlaceholder",value:function(){var placeholder=this.getAttribute("placeholder");if(placeholder){var label=document.createElement("label");label.textContent=this.getAttribute("disabled")?placeholder+" disabled":placeholder,this.insertBefore(label,this.firstChild)}}},{key:"setInput",value:function(){function getNameAndValue(attr){var name=attr.name,value=attr.value;return{name:name,value:value}}function defaults(attribute){return attribute.hasOwnProperty("default")}function notImplemented(defaultAttr){return!attributes.some(function(attribute){return attribute.name===defaultAttr.name})}function setAttribute(attribute){var attributeSpec=attributeSpecs.filter(function(spec){return spec.name===attribute.name})[0],isDefaultAttribute=attributeSpec&&attributeSpec.hasOwnProperty("default"),attributeValue=attribute.value;if(isDefaultAttribute){var isValidValue=attributeSpec.hasOwnProperty("values")&&attributeSpec.values.indexOf(attributeValue)>=0,value=isValidValue?attributeValue:attributeSpec.default;input.setAttribute(attribute.name,value)}else attributeValue&&input.setAttribute(attribute.name,attributeValue)}var attributeSpecs=[{name:"type",default:"text",values:["text","password","email"]},{name:"placeholder",default:"undefined"},{name:"value"},{name:"name"},{name:"autocomplete",default:"off"},{name:"autofocus"},{name:"maxlength"},{name:"pattern"},{name:"readonly"},{name:"required"},{name:"disabled"}],input=document.createElement("input"),attributes=Array.from(this.attributes).map(getNameAndValue),defaultAttibutes=attributeSpecs.filter(defaults).filter(notImplemented);attributes=attributes.concat(defaultAttibutes),attributes.forEach(setAttribute),this.insertBefore(input,this.firstChild)}}]),MnInput}(HTMLElement);customElements.define("mn-input",MnInput);
//# sourceMappingURL=mn-input.js.map
