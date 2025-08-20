const repeatString = function(string,num) {
    let content = '';
    if(num < 0){
        return 'ERROR';
    }
    else {
        for(let i = 0; i<num; i++){
        content = content.concat(string);
        }
    }
    
    return content;
};
repeatString('hey', 2);
// Do not edit below this line
module.exports = repeatString;
