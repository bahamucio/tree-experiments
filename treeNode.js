module.exports = function treeNode(value) {
    this.parent = null;
    this.value = value;
    this.children = [];
};