document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("jokeButton");
    const jokeDisplay = document.getElementById("jokeDisplay");
    const shareButton = document.getElementById("shareButton");
    const themeToggle = document.getElementById("themeToggle");
  
 
    async function fetchJoke() {
        jokeDisplay.textContent = "Loading joke... 😆";
      
        try {
          const response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', {
            method: 'GET',
            headers: { 'X-Api-Key': 'j732ISrDCePzYuF1vdEb8Q==KTr8YalOguwJonsh' }
          });
      
          if (!response.ok) {
            throw new Error('Failed to fetch joke');
          }
      
          const data = await response.json();
          jokeDisplay.textContent = data[0]?.joke || "Oops! Couldn't fetch a joke.";
        } catch (error) {
          jokeDisplay.textContent = "Error fetching joke! 😢";
          console.error("Error:", error);
        }
      }
      

    jokeButton.addEventListener("click", fetchJoke);
  
    // // Share the joke (simple alert for demo)
    // shareButton.addEventListener("click", function() {
    //   if (jokeDisplay.textContent !== "Click the button to get a joke!") {
    //     alert(`Share this joke: ${jokeDisplay.textContent}`);
    //   } else {
    //     alert("No joke to share yet! Click 'Tell Me A Joke' first.");
    //   }
    // });
  
    // Toggle dark mode
    themeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
      document.querySelector('.container').classList.toggle('lightMode')
        
      document.querySelectorAll('.btn').forEach(btn => {
        btn.classList.toggle('dark-mode-btn');
      });
       
    });
  });
 