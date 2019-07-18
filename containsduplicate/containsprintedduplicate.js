function containsDuplicates(a) {
    
for (var i = 0; i < a.length; i++) {
    for (var h = i + 1; h < a.length; h++){
        if ( a[i] == a[h]){
            return a[h];
        }
    }
}
    return false;
}
