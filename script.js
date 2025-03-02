document.getElementById("copyButton").addEventListener("click", function() {
            const email = "mr.360po@gmail.com";
            navigator.clipboard.writeText(email).then(function() {
                alert("Email copied to clipboard: " + email);
            }).catch(function(error) {
                alert("Failed to copy email: " + error);
            });
        });