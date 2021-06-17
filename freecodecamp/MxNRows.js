function valNode(val = -1, next){
 this.val = val;
 this.next = next || null;
}

// rows
function addressNode(address, next) {
 this.address = address || null;
 this.next = next || null;
}

const object = {};

function createGrid(m, n) {
 let grid = new addressNode();
 let ptr = grid;
 for (let i = 0; i < m; i++) {
   thisRow = new valNode();
   ptr.next = new addressNode(thisRow);

   for (let j = 0; j < n; j++) {
     const newValNode = new valNode();
     if (object[i]) {
       object[i].push(newValNode);
     } else {
       object[i] = [newValNode];
     }
     thisRow.next = newValNode;
   }

   ptr = ptr.next;
 }

 return grid.next;
}



console.log(JSON.stringify(createGrid(3, 2), null, 2), object);
