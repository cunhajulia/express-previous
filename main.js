// document.querySelector('#clickMe').addEventListener('click', checkWord)

// function checkWord(){
    
//   const user = document.querySelector('#userWord').value

//   fetch(`/palindrome/${user}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//       document.querySelector("#messageResult").textContent = data.status ? "it's a palindrome" : "it's not a palindrome"
// })
//   }