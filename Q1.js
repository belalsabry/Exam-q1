function solution(min1, min2_10, min11, s) {
    let sum = 0;
    if ( s >= min1){
        sum++;
        s -=min1;
        for (let i = 1; i<=10; i++ ){
            if (s >= min2_10){
                sum = sum++;
                s -= min2_10;
            }else
            break;
        }
       sum += s / min11
    }
    return sum;
 }