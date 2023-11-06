function validateForm() {
    let x = document.forms["index.html"]["email"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }