function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

//In case x is optional
function printCoordOptional(pt: { x?: number; y: number }) {
  console.log("The coordinate's x value is " + (pt.x ?? 'N/A'));
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });
printCoordOptional({ y: 7 });
printCoordOptional({ x: 3, y: 7 });