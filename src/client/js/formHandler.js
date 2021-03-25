import {validateUrl} from './urlValidation';
import "@babel/polyfill";

const PostApiPath = 'http://localhost:8082/add-url';

// this function handles the post api call

export const sendUrl = async (url , body ) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    try {

        const fetchedData = await response.json();
        console.log(fetchedData)
        return fetchedData;


    } catch (error) {
        console.log('There is an error in', error);
    }
};



export function onPressHandler() {

    // get the input from the form in html index.html
    const form = document.getElementById('form')
    form.addEventListener('submit', event => {
        // even.prevent stops the default behaviour of the browser refreshing
    event.preventDefault()
    const input = document.getElementById('article-url')
    // passing the value of input to urlValue
    const urlValue = input.value
    
    if(validateUrl(urlValue)){
        
            console.log('send the link')

            sendUrl(PostApiPath , {urlValue})

            .then(function(response) {
            document.getElementById("text").innerHTML = `text: ${response.text}`;
            document.getElementById("confidence").innerHTML = ` confidence: ${response.confidence}`;
            document.getElementById("score_tag").innerHTML = ` score_tag: ${response.score_tag}`;
            document.getElementById("agreement").innerHTML = `agreement:  ${response.agreement}`;
            document.getElementById("subjectivity").innerHTML = `subjectivity:  ${response.subjectivity}`;
            document.getElementById("irony").innerHTML = `irony: ${response.irony}`;
            })

    } else {
        alert("Enter a valid url please !")
    }
    

   
    })

    }


    