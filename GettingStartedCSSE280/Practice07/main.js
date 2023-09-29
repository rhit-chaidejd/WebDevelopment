function main() {

    console.log("Q1: ");
    for(let k=2; k <=10; k++) {
        console.log(k);
    }

    console.log("Q2: ");
    for(let k=5; k >=1; k--) {
        console.log(k);
    }

    console.log("Q3: ");
    let total = 0;
    const numbers = [1,2,3,4,5];
    for(const num of numbers) {
        total += num;
    }
    console.log(`Sum: ${total}`);

    console.log("Q4: ");
    const student = {name:'John', age: 20, grade: 'A'};
    for(const key in student) {
        console.log(`${key}: ${student[key]}`);
    }

    console.log("Q5: ");
    const book = {title: 'Harry Potter', author: 'J.K. Rowling', year: 1997};
    for(const key in book) {
        console.log(`${key}: ${book[key]}`);
    }

    console.log("Q6: ");
    const colors = ['red', 'green', 'blue', 'yellow'];
    for (const color of colors) {
        console.log(color);
    }

    console.log("Q7: ");
    const digits = [1,2,3,4,5];
    let all = 0;
    for(const digit of digits) {
        all += digit;
    }
    console.log(`Sum: ${all}`);

    console.log("Q8: ");
    const temperatures = [32,68,75,82,56];
    temperatures.forEach(function(temp) {
        let celsiusResult = (temp - 32) * (5/9);
        console.log(`${celsiusResult}`)
    });

    console.log("Q9: ");
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
    const populations = {'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268};
    cities.forEach(function(city) {
        console.log(`${populations[city]}`);
    });

}

main();