//Header
const broncos = document.getElementById('den');
const chiefs = document.getElementById('kc');
const chargers = document.getElementById('lac');
const raiders = document.getElementById('lv');
const resources = document.getElementById('resourcesBtn');


broncos.addEventListener('click', () => {
  const schedule = 7;
  fetchSchedule(schedule);
 const scheduleDiv = document.getElementById('schedule');
  scheduleDiv.innerHTML = ''
});

chiefs.addEventListener('click', () => {
  const schedule = 12;
  fetchSchedule(schedule);
 const scheduleDiv = document.getElementById('schedule');
  scheduleDiv.innerHTML = ''
});

chargers.addEventListener('click', () => {
  const schedule = 24;
  fetchSchedule(schedule);
  const scheduleDiv = document.getElementById('schedule');
  scheduleDiv.innerHTML = ''
});

raiders.addEventListener('click', () => {
  const schedule = 13;
  fetchSchedule(schedule);
  const scheduleDiv = document.getElementById('schedule');
  scheduleDiv.innerHTML = ''
});



function fetchSchedule(teamId){
  const url = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamId}/schedule?season=2024`;
  fetch(url)
  .then(response => response.json())
  .then(scheduleData => {
    displaySchedule(scheduleData);
  })
}


function displaySchedule(scheduleData) {
  const scheduleDiv = document.getElementById('schedule');
  const events = scheduleData.events

  function findMissingWeek(weeks) {
    const n = weeks.length + 1;
    const sumOfFirstN = (n * (n + 1)) / 2;
    let sumOfArray = 0;
      for (let i = 0; i < weeks.length; i++) {
      sumOfArray += weeks[i];
   }

    let byeWeek = sumOfFirstN - sumOfArray;
    return byeWeek;
  }
  const weeks = events.map(event => event.week.number);
  const byeWeek = findMissingWeek(weeks);
  


  events.forEach(event => {
    const matchDiv = document.createElement('div');
    const weekText = event.week.text;
    const competitors = event.competitions[0].competitors;
    const teams = competitors.map(c => {
      const logo = c.team.logos[0].href;
      const teamName = c.team.displayName;
        return `<img src="${logo}" alt="${teamName}" style="width: 30px; height: 30px; vertical-align: middle; margin-right: 8px;">${teamName}`;
    }).join('<span class="vs"> vs </span>');


  const scores = competitors.map(c => c.score?.displayValue || '0').join(' - ');

  matchDiv.innerHTML = `
    <h3 style="padding-bottom: 10px; border-bottom: solid #f2f2f2 1px;">${weekText}</h3>
    <div style="display: flex; justify-content: space-between;">
      <h3 style="font-size: 24px; margin: 0;">${teams}</h3>
      <p style="font-size: 26px; font-weight: bold; margin: 0;">${scores}</p>
      </div>
    <p>${new Date(event.date).toLocaleDateString('sv-SE').replace(/\//g, '-')}</p>
    <p>${new Date(event.date).toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' })}</p>
    `;
    scheduleDiv.appendChild(matchDiv);

  });

  const seasonDiv = document.getElementById('season')
  const season = scheduleData.season.name;
  seasonDiv.innerHTML = `
    <div style="border-bottom: 1px solid #ccc; display: flex; justify-content: space-between; max-width: 1200px;">
    <h2 style="font-size: 26px; font-weight: bold; color: #151515; padding-top: 20px; border-bottom: 2px solid #151515; padding-bottom: 3px;">${season}</h2>
    <h2 style="font-size: 26px; font-weight: bold; color: #151515; padding-top: 20px;">Week ${byeWeek} Bye</h2>
    </div>
  `

  const teamDiv = document.getElementById('team');
  const teamName = scheduleData.team.displayName;
  const logo = scheduleData.team.logo;
  const record = scheduleData.team.recordSummary;
  const standing = scheduleData.team.standingSummary;
  teamDiv.innerHTML = `
  <h2>${teamName}</h2>
    `;


  const teamStats = document.getElementById('teamStats')
  teamStats.innerHTML = `
  <div style="display: flex; align-items: center;">
    <img src="${logo}" alt="${teamName}" style="width: 100px; height: 100px; margin-right: 16px;">
    <div>
      <h2>${teamName}</h2>
      <p style="margin: 4px 0; font-size: 1rem;">${standing}</p>
      <p style="margin: 4px 0; font-size: 1rem;">Record: ${record}</p>
    </div>
  </div>
    `;

}



