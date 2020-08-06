//Objective is to do a preorder traversal over an N-ary tree

class Node {
    constructor(val) {
        this.val = val
        this.children = []
    }
}

class nTree {
    constructor(root) {
        this.root = root 
    }
}

let root = new Node(1)
root.children = [new Node(2), new Node(3), new Node(4), new Node(5)]
root.children[1].children = [new Node(6), new Node(7)]
root.children[1].children[1].children = [new Node(11)]
root.children[1].children[1].children[0].children = [new Node(14)]
root.children[2].children = [new Node(8)]
root.children[2].children[0].children = [new Node(12)]
root.children[3].children = [new Node(9), new Node(10)]
root.children[3].children[0].children = [new Node(13)]


//O(n) solution that uses DFS

let arr = []
function dfs(node) {
    if (!node) {
        return
    }
    
    for (let child of node.children) {
        dfs(child)
    }
    
    arr.push(node.val)
}
dfs(root)

return arr


//O(n) solution that uses BFS and a stack

let stack = [root]
let result = []

if (!root) {
    return []
}

while (stack.length > 0) {
    let curr = stack.pop()
    result.unshift(curr.val)
    for (let node of curr.children) {
        if (node) {
            stack.push(node)
        }
    }
}

return result