"use strict";function MNInput(){var validTypes=["text","password","email"],dom=this.createShadowRoot(),input=document.createElement("input");input.setAttribute("placeholder",this.getAttribute("placeholder")||"undefined");var attributeType=this.getAttribute("type"),isValidType=validTypes.indexOf(attributeType)>=0;attributeType=isValidType?attributeType:validTypes[0],input.setAttribute("type",attributeType);var value=this.getAttribute("value")||"";input.setAttribute("value",value);var name=this.getAttribute("name")||"";input.setAttribute("name",name),input.setAttribute("autocomplete","off"),this.getAttribute("autofocus")&&input.setAttribute("autofocus","autofocus"),this.getAttribute("maxlength")&&input.setAttribute("maxlength",this.getAttribute("maxlength")),this.getAttribute("pattern")&&input.setAttribute("pattern",this.getAttribute("pattern")),this.getAttribute("readonly")&&input.setAttribute("readonly","readonly");var disabled=this.getAttribute("disabled");disabled&&input.setAttribute("disabled",disabled),dom.appendChild(input);var placeholder=this.getAttribute("placeholder");if(placeholder){var label=document.createElement("label");label.textContent=disabled?placeholder+" disabled":placeholder,dom.appendChild(label)}}var prototype=Object.create(HTMLElement.prototype);prototype.createdCallback=MNInput,document.registerElement("mn-input",{prototype:prototype});
//# sourceMappingURL=app.js.map
