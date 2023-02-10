/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char);
        } else if (char == ')' || char == '}' || char == ']') {
            if (stack.length === 0) {
                return false;
            }
            else {
                let rem = stack.pop();
                if ((char == ')' && rem !== '(') || (char == '}' && rem !== '{') || (char == ']' && rem !== '[')) {
                    return false;
                }
            }

        }

    }
    return stack.length === 0;
};