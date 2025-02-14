const p = document.createElement('p');
const comment = document.createComment('Bla bla');
const boxElement: HTMLDivElement = document.querySelector('.box')!;

console.dir(p.nodeType === Node.ELEMENT_NODE);
console.dir(comment.nodeType === Node.COMMENT_NODE);

console.log(boxElement.nodeType === Node.ELEMENT_NODE);
console.log(boxElement.children); // Only element node list

const firstNode = boxElement.childNodes[0];
console.log(firstNode.nodeType === Node.COMMENT_NODE);

const className = document.createAttribute('class');
console.log(className.nodeType === Node.ATTRIBUTE_NODE);

className.value = 'box boxes';

boxElement.removeAttribute('class');
boxElement.setAttributeNode(className);
console.log(document.nodeType === Node.DOCUMENT_NODE);

const fragment = document.createDocumentFragment();
console.log(fragment.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
