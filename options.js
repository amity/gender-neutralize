function save_options() {
  var pronouns = document.getElementById("pronouns").checked;
  var dude = document.getElementById("dude").value;
  chrome.storage.sync.set(
    {
      pronounsBool: pronouns,
      dudeReplacement: dude
    },
    function() {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function() {
        status.textContent = "";
      }, 750);
    }
  );
  localStorage.setItem("pronounsKey", pronouns);
  localStorage.setItem("dudeKey", dude);

  chrome.storage.local.set(
    {
      pronounsBool: pronouns,
      dudeReplacement: dude
    },
    function() {
      return;
    }
  );
  // Save it using the Chrome extension storage API.

  // Read it using the storage API
  chrome.storage.sync.get(["pronounsBool", "dudeReplacement"], function(items) {
    message("Settings retrieved", items);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get(
    {
      pronounsBool: true,
      dudeReplacement: ""
    },
    function(items) {
      document.getElementById("pronouns").checked = items.pronounsBool;
      document.getElementById("dude").value = items.dudeReplacement;

      localStorage.setItem("pronounsBool", items.pronounsBool);
      localStorage.setItem("dudeReplacement", items.dudeReplacement);
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
