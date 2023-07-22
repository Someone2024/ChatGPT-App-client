export async function handleLogin(username, password) {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("jwtToken", data.token);
      console.log("token saved");
      window.location.reload();
    } else {
      alert(
        "Login failed: " +
          response.statusText +
          " creating a new user... try again"
      );
    }
  } catch (e) {
    console.log(e);
  }
}