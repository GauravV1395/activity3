function reverse(str){
    str = str.split('');
    str = str.reverse().join('');
    return str;
}
console.log(reverse('str'));
