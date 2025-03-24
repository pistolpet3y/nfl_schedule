document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = "";

 fetch("http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2024/athletes/4426338?lang=en&region=us")
    .then(response => response.json())
    .then(data => {
      const playerFirstName = data.firstName;
      const playerlastName = data.lastName;
      const profileImage = data.headshot?.href;
      const heightWeight = data.displayHeight + ", " + data.displayWeight;
      const birthdate = data.dateOfBirth ? new Date(data.dateOfBirth).toLocaleDateString() : "Unknown";
      const draftInfo = data.draft?.displayText;
      const jerseyNumber = data.jersey;
      const position = data.position?.name;


      const playerCard = `
        <div style="max-width: 1080px; margin: auto;">
        <div style="display: flex; align-items: center; gap: 20px;">
        <img src="${profileImage}" alt="Bo Nix" style="width: 150px; border-radius: 10px;">
        <div>
          <h3 style="font-weight:300; margin: 0; font-size: 26px";>${playerFirstName}</h3>
          <h3 style="font-size: 26px">${playerlastName}</h3>
           <div style="display: flex; align-items: center; gap: 10px;">
           <img src="../images/den.png" style="max-width: 26px;" alt="Denver Broncos" />
          <p style="margin: 0; font-size: 1.2em; padding: 0;">Denver Broncos &bull; #${jerseyNumber} &bull; ${position}</p>
        </div>

           <div style="margin-top: 20px; border-top: 1px solid #ddd; padding-top: 20px;">
            <table style="width: 100%; font-size: 1.1em;">
              <tr>
                <td>HT/WT:</td>
                <td style="font-weight: bold;">${heightWeight}</td>
              </tr>
              <tr>
                <td>BIRTHDATE:</td>
                <td style="font-weight: bold;">${birthdate}</td>
              </tr>
              <tr>
                <td>COLLEGE:</td>
                <td style="font-weight: bold;">Oregon</td>
              </tr>
              <tr>
                <td style="padding-right: 10px;">DRAFT INFO:</td>
                <td style="font-weight: bold;">${draftInfo}</td>
              </tr>
            </table>
          </div>
        </div>
      `;
      contentDiv.innerHTML = playerCard;
    })
});


  fetch("https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/7/schedule?season=2024")
  .then(response => response.json())
  .then(teamData => {
    displayTeam(teamData);
  })


function displayTeam(teamData) {
  const teamDiv = document.getElementById('team');
  const teamName = teamData.team.displayName;
    teamDiv.innerHTML = `
  <h2>${teamName}</h2>
    `;
}
