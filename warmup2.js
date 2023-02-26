function viralAdvertising(n){
    let shared = 5, likes= 0, cumulative = 0, i = 0;

    while (++i <= n) {
        likes = Math.floor(shared / 2);
        shared = (likes * 3);
        cumulative += likes;
    }

    return cumulative;
}
