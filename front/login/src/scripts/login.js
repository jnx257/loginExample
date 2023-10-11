

async function login(email, password) {
  const body = { "email":email, "password":password };
  console.log("Email:", email); 
  console.log("Password:", password);
  try {
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (response.status === 200) {
      const responseData = await response.json(); 

      if (responseData.status === 200) {
        console.log("Working");
      } else {
        console.log("Not working");
      }
    }
  } catch (err) {
    console.error(err);
    console.log(body)
  }
}

export { login };
