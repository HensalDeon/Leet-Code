var calPoints = function (operations) {
    let i = 0;
    let arr = [];
    let temp = 0;
    let sum = 0;
    while (i < operations.length) {
        if (operations[i] % 1 === 0) {
            arr.push(Number(operations[i]));
        }
        if (operations[i] == "C") {
            temp = arr.pop();
        }
        if (operations[i] == "D") {
            arr.push(arr[arr.length - 1]*2);
        }
        if (operations[i] == "+") {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
        i++;
    }
    arr.map(val=>{
        sum = sum+val;
    })
    return sum;
};

const operations = ["5","-2","4","C","D","9","+","+"];
console.log(calPoints(operations));
