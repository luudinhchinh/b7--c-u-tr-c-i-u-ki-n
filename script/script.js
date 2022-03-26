
        let ngay = document.getElementById("inputDay").value;
        let gio = document.getElementById("inputTime").value;
        let dem = document.getElementById("dayNight").value;
        let result = document.getElementById("result");
        let phuCap = 300000;
        let xem = document.getElementById("check");
        xem.addEventListener("click", function(){
            let tong = (parseFloat(ngay)*27403) + (parseFloat(gio)*41105) + (parseFloat(dem)*60000)  + phuCap;
            result.innerText = "số lương sau " + ngay + "và " + gio + "và " + dem + "là: " + tong;
        })