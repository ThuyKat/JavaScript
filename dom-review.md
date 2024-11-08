- Host environment : browser
- Browser: root (window object - obj + functions available everywhere - window.innerHeight/innerWidth-> browser window)
# Navigating through the DOM
- DOM : all page/html ojects (document object)
        * html tag, body, head, childNodes vs children, firstElementChild vs firstChild, lastElementChild vs lastChild, next/previousSibling, next/previousElementSiblings
        * table.thead/tfoot/caption/rows/Bodies
        * tr.cells/rowIndex/sectionRowIndex
        * td.cellIndex
        * document.getElementById(id) - static elements-> updated when doc is updated; can only use with document as entry point
        * document.querySelectorAll(css) - static elements, with option to use index; entry point can be table, form
        * document.querySelector(css) - return the first element that matches
        * elemA.contains(elemB) - check parent-child relationship, return true/false
        * elem.matches(css)
        * elem.closet(css) - ancestors that match
- DOM node classes: EventTarget -> Node -> Document : inherited by HTMLDocument; Element : inherited by HTMLElement which is inherited by HTMLInput/Anchor/BodyElement; CharacterData which is inherited by Text and Comment
- Element-properties: 
        * tagName
        * innerHTML/outerHTML
        * textContent
        * value : for input, textarea, select
        * href 
        * id
- Node-property:
        * nodeName
        * data/nodeValue
- Others: hidden property

# Navigating to property of DOM elements
- Each element is an object -> we can create a new property inside it, let it takes any type of data: function, objects, primitive, etc
- Standard attributes of HTML tag will become property of DOM element object
- Non-standard can be set using setAttribute(name, value), get using getAttribute(name), checked if it's exist using hasAttribute(name), or removed using removeAttribute(name)
- All attributes can be access via the collection returned by elem.attributes() - array-like iterable object with length property
- Features: non-sensitive about case, values are string





