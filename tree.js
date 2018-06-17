module.exports = (function () {
    nodes = [];
    add = function (node) {
        pushDown(node, nodes);
    }

    pushDown = function (node, nodes) {
        if (nodes.length === 0) {
            nodes.push(node);
            return;
        }

        if (node.value < lastNode(nodes).value)
            return;

        if (node.value === lastNode(nodes).value) {
            nodes.push(node);
            return;
        }

        this.pushDown(node, lastNode(nodes).children);
    }

    traverse = function (node, indent) {
        if (node.children.length === 0) {
            console.log(" ".repeat(indent) + node.value);
            return;
        }

        console.log(" ".repeat(indent) + node.value);
        node.children.forEach(n => traverse(n, indent + 1));
    }

    lastNode = function (container) {
        return container[container.length - 1];
    };

    return {
        traverse : traverse,
        nodes: nodes,
        add : add
    }
})();

