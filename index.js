const Tree = require('./tree');
const TreeNode = require('./treeNode');


const data = [1, 2, 2, 3, 3, 1, 2, 3, 2, 3];

for(let i = 0; i < data.length; i++) {
    Tree.add(new TreeNode(data[i]));
}

Tree.nodes.forEach(n => Tree.traverse(n, 0));
