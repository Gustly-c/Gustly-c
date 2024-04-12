
        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("applicationForm");
            const userDataElement = document.getElementById("userData");

            form.addEventListener("submit", function(event) {
                event.preventDefault();
                
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const message = document.getElementById("message").value;

                userDataElement.innerHTML = `
                    <p><strong>Имя:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Сообщение:</strong> ${message}</p>
                `;
                userDataElement.style.display = "block";
            });
        });
