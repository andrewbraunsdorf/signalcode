const a = [2, 4, 2, 3];
function containsDuplicates(a) {
    
for (var i = 0; i < a.length; i++) {
    
    // var temp = a;
    // if (temp[i] == [i]) {
    //     return true;
    
    for (var h = i + 1; h < a.length; h++){
        if ( a[i] == a[h]){
            return true + a[h];
        }
    }
}
    return false;
}

containsDuplicates(a);