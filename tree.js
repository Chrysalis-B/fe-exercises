// We have two identical DOM trees, A and B. For DOM tree A, we have
// the location of an element. Create a function to find that same element
// in tree B.

const findElement = (element, root) => {
  const path = [];
  let pointer = element;
  while (pointer.parent) {
    const index = pointer.parent.children.indexOf(pointer);
    path.push(index);
    pointer = pointer.parent;
  }
  pointer = root;
  while (path.length) {
    pointer = children[path.pop()];
  }
  return pointer;
}


