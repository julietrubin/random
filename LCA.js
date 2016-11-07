/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 

var lowestCommonAncestor = function(root, p, q) {
    var ancestorsP = findAncestors(root, p, []);
    var ancestorsQ = findAncestors(root, q, []);
    if (ancestorsP.length === 0 || ancestorsQ.length === 0){
        // node does not exist in tree
        return null;
    }
    var i = 0;
    var lca = ancestorsP[0];
    while(i < ancestorsP.length && i < ancestorsQ.length && ancestorsP[i] === ancestorsQ[i]){
        lca = ancestorsP[i];
				i++;
    }
    return lca; 
};

var findAncestors = function(root, p){
    if (root === p){
        return [root];
    }
    if (root.left){
        var leftSearch = findAncestors(root.left, p);
        if (leftSearch.length > 0){
						leftSearch.unshift(root);
            return leftSearch;
        }
    }
    if (root.right){
        var rightSearch = findAncestors(root.right, p);
				if (rightSearch.length > 0){
					rightSearch.unshift(root);
					return rightSearch
				}
    }
    return [];
}


/*function TreeNode(val) {
	this.val = val;
  this.left = this.right = null;
}

var root = new TreeNode(1);
var p = new TreeNode(2);
var q = new TreeNode(3);
root.left = p;
root.right = q;
console.log(lowestCommonAncestor(root, p, q));*/
