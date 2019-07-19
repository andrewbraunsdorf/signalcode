function firstDuplicate(a) {

    const seen = {};
    
for (let num = 0; num < a.length; num++) {
        if ( seen[a[num]]){
            return a[num];
    }
    seen[a[num]] = true;
}
    return -1;
}