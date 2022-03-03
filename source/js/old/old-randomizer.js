class Randomizer {

    constructor(randomNumbersKeepAmount = 100) {
        this.randomNumberSets = [];
        this.randomNumberKeepAmount = randomNumbersKeepAmount;
    }

    /**
     * 
     * @param {number} from 
     * @param {number} to 
     */
    GetRandomNumber (from = 0, to = 1) {
        let found = false;
        let randomNumberSet = {};
        let randomNumber;

        this.randomNumberSets.forEach(function (tempRandomNumberSet) {
            if (tempRandomNumberSet.from == from && tempRandomNumberSet.to == to) {
                found = true;
                randomNumber = tempRandomNumberSet.numbers.pop();
            }
        });

        if (found) {
            this.RefillRandomNumbers(from, to);
            return randomNumber;
        }
        else return false; 
    }

    /**
     * 
     * @param {*} from 
     * @param {*} to 
     */
    RefillRandomNumbers (from = 0, to = 0) {

        let randomNumberSet;
        let found = false;

        this.randomNumberSets.forEach(function (tempRandomNumberSet) {
            if (tempRandomNumberSet.from == from && tempRandomNumberSet.to == to) {
                randomNumberSet = tempRandomNumberSet;
                found = true;
            }
        });

        if (!found) {
            randomNumberSet = {
                from: from,
                to: to,
                numbers: []
            };
        };

        //---------------------------------------

        let amount = (this.randomNumberKeepAmount - randomNumberSet.numbers.length);

        const xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
    
                // Success
                if (xhr.status == 200) {
                    let xhrResponseArray = xhr.responseText.toString().split("\n");
                    xhrResponseArray.pop();

                    randomNumberSet.numbers = randomNumberSet.numbers.concat(xhrResponseArray);

                    if (!found)
                        this.randomNumberSets.push(randomNumberSet);
                } 
            }
        }
    
        xhr.open("get", "https://www.random.org/integers/?num=" + amount +"&min=" + from + "&max=" + to + "&col=1&base=10&format=plain&rnd=new", true);
        xhr.send();
    }


    
}