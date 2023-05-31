/**
 * @param {string[]} words
 * @return {number}
 */
let words = ["aba", "aabb", "abcd", "bac", "aabc"];
function similarPairs(words) {
    let count = 0;
    const n = words.length;
    function isSimilar(word1, word2) {
        const set1 = new Set(word1);
        const set2 = new Set(word2);
        if (set1.size !== set2.size) {
            return false;
        }

        return [...set1].every((i) => set2.has(i));
    }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (isSimilar(words[i], words[j]) && i !== j) {
                count++;
            }
        }
    }

    return count;
}

console.log(similarPairs(words));
