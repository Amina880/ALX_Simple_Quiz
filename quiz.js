function checkAnswer() {
    let correctAnswer = '4'
    let checkedradiobutton = document.querySelector('input[name="quiz"]:checked')
    let userAnswer1 = checkedradiobutton.value;
    const userAnswer = userAnswer1.value;
    if(userAnswer === correctAnswer){
        feedbackElement.textContent = "Correct! Well done."
    }else{
        feedbackElement.textContent = "That's incorrect. Try again!"
    }
    // Function body
}
let submit = document.getElementById('submit-answer')
submit.addEventListener('click', checkAnswer);


/*Compare the User’s Answer with the Correct Answer:

Implement an if statement to compare userAnswer with correctAnswer.
If the values match, indicating the user’s answer is correct, change the textContent of the element with the ID feedback to "Correct! Well done.".
If the values do not match, indicating the user’s answer is incorrect, update the textContent of the feedback element to "That's incorrect. Try again!".*/