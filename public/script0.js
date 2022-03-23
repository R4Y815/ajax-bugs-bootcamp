// Create a button using JavaScript
/* const createBugButton = document.createElement('button');
createBugButton.innerHTML = 'Create a bug';
createBugButton.onclick = displayForm;
document.body.appendChild(createBugButton);
 */

/* Link up Create a Bug button to function */
/* const createBugBtn = document.getElementById("btn1");
 */

/* Function to submit Form Data */
const submitFormData = () => {
  /* can refactor to use destructuring */

  const requestBody = {};
  requestBody.problem = document.getElementById('problem').value;
  requestBody.errorText = document.getElementById('errorText').value;
  requestBody.commit = document.getElementById('commit').value;
  console.log('(script0.js)requestBody.problem =', requestBody.problem);

  axios
    .post('/create', requestBody)
    .then((response) => {
      console.log('Done adding bug to database!');
      document.getElementById('msg').innerText = `Success!  \n Added bug with problem: ${requestBody.problem}, errorText: ${requestBody.errorText}, commit ${requestBody.commit}`;
    
      document.getElementById("probLabel").hidden = true;
      document.getElementById("problem").hidden = true;
      document.getElementById("errorTxtLabel").hidden = true;
      document.getElementById("errorText").hidden = true;
      document.getElementById("commitLabel").hidden = true;
      document.getElementById("commit").hidden = true;
      document.getElementById("submit").hidden = true;
      document.getElementById('problem').value = '';
      document.getElementById('errorText').value = '';
      document.getElementById('commit').value = '';
    })
    .catch((error) => {
      /* handle error */
      console.log(error);
    });
};

/* Function to display form when button is clicked */
const displayForm = () => {
  document.getElementById('msg').innerText = '';
  document.getElementById("probLabel").hidden = false;
  document.getElementById("problem").hidden = false;
  document.getElementById("errorTxtLabel").hidden = false;
  document.getElementById("errorText").hidden = false;
  document.getElementById("commitLabel").hidden = false;
  document.getElementById("commit").hidden = false;
  document.getElementById("submit").hidden = false;
};
