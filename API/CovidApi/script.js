
fetch("https://api.rootnet.in/covid19-in/stats/latest")
  .then((response) => response.json())
  .then((value) => {
    const tbody = document.getElementById("tbody");

    value.data.regional.forEach((region,index) => {
      const tr = document.createElement("tr");
      
      const id = document.createElement("td");
      id.textContent =  index+=1;

      const name = document.createElement("td");
      name.textContent=region.loc;

      const indianCases = document.createElement("td");
      indianCases.textContent=region.confirmedCasesIndian;

      const foreignCases = document.createElement("td");
      foreignCases.textContent=region.confirmedCasesForeign;

      const discharged = document.createElement("td");
      discharged.textContent=region.discharged;

      const deaths = document.createElement("td");
      deaths.textContent=region.deaths;

      const totalCases=document.createElement("td");
      totalCases.textContent=region.totalConfirmed;

      tr.appendChild(id);
      tr.appendChild(name);
      tr.appendChild(indianCases);
      tr.appendChild(foreignCases);
      tr.appendChild(discharged);
      tr.appendChild(deaths);
      tr.appendChild(totalCases);

      tbody.appendChild(tr);
    });
  });
