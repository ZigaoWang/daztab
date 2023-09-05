document.addEventListener("DOMContentLoaded", function () {
  const notesTextarea = document.getElementById("notes");

  // Load saved notes from local storage if available
  if (localStorage.getItem("notes")) {
      notesTextarea.value = localStorage.getItem("notes");
  }

  // Automatically save notes to local storage when the user types or makes changes
  notesTextarea.addEventListener("input", function () {
      const notes = notesTextarea.value;
      localStorage.setItem("notes", notes);
  });
});