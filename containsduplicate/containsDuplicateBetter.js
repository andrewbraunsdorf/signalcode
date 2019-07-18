function containsDuplicates(a) {
    const seen = {};
    
for (let num = 0; num < a.length; num++) {
        if ( seen[a[num]]){
            return true;
    }
    seen[a[num]] = true;
}
    return false;
}