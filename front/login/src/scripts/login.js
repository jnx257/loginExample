async function login(email, password) {
  const body = { email: email, password: password };

  try {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.status === 200) {
      console.log("Working");
      const loginPopup = document.getElementById('loginSuccess')
      loginPopup.style = "display:block"             
      setTimeout(()=>{
        loginPopup.style = "display:none;"
      }, 2500)
    } else {
      console.log("Not working");
    }
  } catch (err) {
    console.error(err);
  }
}

export { login };
