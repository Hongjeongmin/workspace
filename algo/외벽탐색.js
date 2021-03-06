var combi = [];
var check = [];
function solution(n, weak, dist) {
    var weakLen = weak.length;
    var answer = weakLen + 1;
    for (let i = 0; i < weakLen; i++) {
        weak.push(weak[i] + n);
    }
    check = new Array(weakLen);
    check.fill(false);

    Comb(dist, 0, []);

    // next_permutation
    for (let i = 0; i < weakLen; i++) {
        // i~ i+weakLen 까지
        let subWeak = weak.slice(i, i + weakLen);
        for (let j = 0; j < combi.length; j++) {

            let target = combi[j];


            if (isPossible(subWeak, target)) {
                // console.log(target);
                answer = Math.min(answer, target.length);
            }
        }

    }

    answser = weakLen + 1 == answer ? -1 : answer;
    return answer;
}

function isPossible(subWeak, target) {
    let i = 0;
    let j = 0;
    while (j < target.length) {
        let cur = subWeak[i];
        while (i < subWeak.length && cur + target[j] >= subWeak[[i]]) {
            i++;
        }
        if (i == subWeak.length) {

            return true;
        }
        j++;
    }

    return false;
}

function Comb(dist, s, arr) {
    combi.push(arr.slice());

    if (s == dist.length) {
        return;
    }

    for (let i = 0; i < dist.length; i++) {
        if (check[i])
            continue;
        check[i] = true;
        let copy = arr.slice();
        copy.push(dist[i]);
        Comb(dist, s + 1, copy);
        check[i] = false;
    }
}

var ans = solution(12, [1, 5, 6, 10], [1, 2, 3, 4]);
console.log(ans);