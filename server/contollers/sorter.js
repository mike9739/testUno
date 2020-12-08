import express from 'express';

const router = express.Router();


const  sortNumbers = (req,res) => {
    let numbers = req.body;
    numbers = numbers.split(',');

    let data = bubbleSort(numbers);

    return res.status(200).send(data);
}

const bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};


module.exports = numberRoutes;