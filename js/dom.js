const billionaire = () => {
    fetch('https://forbes400.onrender.com/api/forbes400?limit=10')
        .then(res => res.json())
        .then(data => display(data))
}
const display = naires => {
    console.log(naires);
    const url = document.getElementById('load');
    url.textContent = '';
    naires.forEach(naire => {
        const create = document.createElement('div');
        create.classList.add('col');
        create.innerHTML = `
            <div class="card h-100">
                <img src="${naire.person.squareImage}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${naire.person.name}</h5>
                    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Show Details
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Details</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Citizenship : ${naire.countryOfCitizenship}<br>
        State : ${naire.state}<br>
        City : ${naire.city}<br>
        Share Price : ${naire.financialAssets[0].sharePrice}<br>
        name : ${naire.person.name}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        `
        url.appendChild(create);
    });
    
}
//const g
billionaire();