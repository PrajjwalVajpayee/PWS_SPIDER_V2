 
        window.onload = function() {
            startCountdown();
        };
        
        function startCountdown() {
            var popup = document.getElementById('telegramPopup');
            var round = document.querySelector('.round');
            var timer = 20; // seconds
        
            var countdown = setInterval(function() {
                if (timer <= 0) {
                    clearInterval(countdown);
                    popup.style.display = 'none';
                } else {
                    round.textContent = timer;
                    timer--;
                }
            }, 1000); // 1 second interval
        }
        
   
        function BigOrSmall() {
            let periodInput = document.querySelector('.period');
            let periodNumber = parseInt(periodInput.value);

            // Check if periodNumber is an integer
            if (!Number.isInteger(periodNumber)) {
                document.getElementById("id").innerHTML = "Please enter a valid integer Period Number";
                return;
            }
            // isConnected();

            let arr = ["Big", "Small"];
            document.getElementById("id").innerHTML = (arr[(Math.floor(Math.random() * arr.length))]);

            // Hide the button for 30 seconds
            document.getElementById("startButton").classList.add("hidden");

            // Show countdown for 30 seconds
            let countdownDiv = document.getElementById("countdown");
            countdownDiv.classList.remove("hidden");

            let seconds = 15;
            let countdownInterval = setInterval(function () {
                countdownDiv.textContent = `Button will appear in ${seconds} seconds`;
                seconds--;
                if (seconds < 0) {
                    clearInterval(countdownInterval);
                    countdownDiv.classList.add("hidden");
                    document.getElementById("startButton").classList.remove("hidden");
                }
            }, 1000);
        }


        function RedOrGreen() {
            let periodInput = document.querySelector('.period');
            let periodNumber = parseInt(periodInput.value);

            // Check if periodNumber is an integer
            if (!Number.isInteger(periodNumber)) {
                document.getElementById("id").innerHTML = "Please enter a valid integer Period Number";
                return;
            }
            // isConnected();
            let arr = ["Red", "Green"];
            document.getElementById("id").innerHTML = (arr[(Math.floor(Math.random() * arr.length))]);

            // Hide the button for 30 seconds
            document.getElementById("startButton").classList.add("hidden");

            // Show countdown for 30 seconds
            let countdownDiv = document.getElementById("countdown");
            countdownDiv.classList.remove("hidden");

            let seconds = 15;
            let countdownInterval = setInterval(function () {
                countdownDiv.textContent = `Button will appear in ${seconds} seconds`;
                seconds--;
                if (seconds < 0) {
                    clearInterval(countdownInterval);
                    countdownDiv.classList.add("hidden");
                    document.getElementById("startButton").classList.remove("hidden");
                }
            }, 1000);
        }


        function generateRandomNumber(list) {
            return list[Math.floor(Math.random() * list.length)];
        }

        function announceWinner() {
            // List of mobile numbers
            const mobileNumbers = ["788*****90", "812*****06", "873*****72", "955*****85", "972*****91", "676*****84", "792*****64", "812*****39", "693*****74", "836*****28"];

            // List of dummy money amounts
            const dummyMoneyAmounts = ["5K", "79k", "121K", "67K", "93K", "78K", "312K", "243K", "231K", "163K"];

            // Generate a random mobile number
            const randomMobileNumber = generateRandomNumber(mobileNumbers);

            // Generate a random amount won
            const randomAmountWon = generateRandomNumber(dummyMoneyAmounts);

            // Display the result
            document.getElementById("result").textContent = `${randomMobileNumber} has won ${randomAmountWon}.`;
        }

        // Call announceWinner function every second
        setInterval(announceWinner, 1000);



        // change color of BUtton
       
       

        let firstButtonColor = '';
        let secondButtonColor = '';
        let a;
        
        function myFuncColor(buttonNumber) {
            let infoDiv = document.getElementById('id');
            let info = '';
            a = buttonNumber;
            if (buttonNumber === 1) {
                info = "You have choosen Red/Green...";
                firstButtonColor = '#b60af5b5';

                secondButtonColor = '';
            } else {
                info = "You have choosen Big/Small...";
                firstButtonColor = '';
                secondButtonColor = '#b60af5b5';

            }
            
            updateButtonColors();
            infoDiv.textContent = info;
        }

        function updateButtonColors() {
            let buttons = document.querySelectorAll('.Button-sep');
            buttons[0].style.backgroundColor = firstButtonColor;
            buttons[1].style.backgroundColor = secondButtonColor;
        }

        function call(){
                if (a === 1) {
                    RedOrGreen();
                } 
                else{
                    BigOrSmall();
                }
        }