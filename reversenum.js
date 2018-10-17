function reverse(num){
    let str = num.toString();
    str.split().reverse().join('');
    num = parseInt(str);
    return num;
}
console.log(reverse(num));