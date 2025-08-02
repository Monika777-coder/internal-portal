document.addEventListener("DOMContentLoaded", () => {
  // Dashboard data
  fetch("/api/intern")
    .then(res => res.json())
    .then(data => {
      document.getElementById("intern-name").textContent = data.name;
      document.getElementById("referral-code").textContent = data.referralCode;
      document.getElementById("total-donations").textContent = data.donations;
    });

  // Leaderboard data
  fetch("/api/leaderboard")
    .then(res => res.json())
    .then(data => {
      const tbody = document.querySelector("#leaderboard tbody");
      data.forEach((item, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${index + 1}</td><td>${item.name}</td><td>₹${item.donations}</td>`;
        tbody.appendChild(tr);
      });
    });
});
