document.addEventListener("DOMContentLoaded", function () {

    function updateTime() {
        const now = new Date();

        const options = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        };

        const formattedTime = now.toLocaleString("zh-TW", options);
        document.getElementById("time").textContent = formattedTime;
    }

    updateTime(); // 先執行一次
    setInterval(updateTime, 1000); // 每秒更新

});
