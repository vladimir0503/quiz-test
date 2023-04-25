import { success } from "./stepsData";
const url = 'https://jsonplaceholder.typicode.com/posts';

const submitData = async stepsData => {
    await fetch(url, {
        method: 'POST',
        data: JSON.stringify(stepsData)
    });
    console.log(stepsData);

    document.querySelector('.quiz__step-wrapper').innerHTML = success;
};

export default submitData;