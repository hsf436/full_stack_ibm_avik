const petsData = [
    {
        name: 'ALFA',
        gender: 'Male',
        ageGroup: 'Adulthood',
        city: 'Bengaluru',
        state: 'Karnataka',
        owner: 'Shiv',
        contact: 'Contact Now',
        image: 'https://tse4.mm.bing.net/th?id=OIP.guY_RHVXOBIU2v_IMA3ABAHaEK&pid=Api&P=0&h=180'
      },
      {
        name: 'Leo',
        gender: 'Male',
        ageGroup: 'Adolescence',
        city: 'Faridabad',
        state: 'Haryana',
        owner: 'Mahendra',
        contact: 'Contact Now',
        image: 'https://tse3.mm.bing.net/th?id=OIP.vs0jJ2uBkPLjG-aJuMa-xAHaE5&pid=Api&P=0&h=180'
      },
      {
        name: 'Misti',
        gender: 'Female',
        ageGroup: 'Adolescence',
        city: 'Vasai-Virar',
        state: 'Maharashtra',
        owner: 'Sanatan Patra',
        contact: 'Contact Now',
        image: 'https://tse4.mm.bing.net/th?id=OIP.1Qf9ob5aJ5E5WkvD8C-zqAHaLG&pid=Api&P=0&h=180'
      },
      {
        name: 'Hex',
        gender: 'Male',
        ageGroup: 'Adolescence',
        city: 'Amaravati',
        state: 'Andhra Pradesh',
        owner: 'mukti sen',
        contact: 'Contact Now',
        image: 'https://tse2.mm.bing.net/th?id=OIP.AkDXRpGKLCpvEQTkOX3RjQHaE8&pid=Api&P=0&h=180'
      },
      {
        name: 'Sen',
        gender: 'Male',
        ageGroup: 'Adolescence',
        city: 'Guwahati',
        state: 'Arunachal Pradesh',
        owner: 'Rony roy',
        contact: 'Contact Now',
        image: 'https://tse4.mm.bing.net/th?id=OIP.F2n8lG77WJwtWolnzDzkEwHaJ4&pid=Api&P=0&h=180'
      },
      {
        name: 'Demmy',
        gender: 'Female',
        ageGroup: 'Adolescence',
        city: 'Patna',
        state: 'Bihar',
        owner: 'Diya Roy',
        contact: 'Contact Now',
        image: 'https://tse2.mm.bing.net/th?id=OIP.GQ5thXeQkyIPgEwE8K9l-QHaEo&pid=Api&P=0&h=180'
      },
      {
        name: 'Hail',
        gender: 'Female',
        ageGroup: 'Adolescence',
        city: 'Bhubaneswar',
        state: 'Odisha',
        owner: 'Sanjana Dey',
        contact: 'Contact Now',
        image: 'https://tse4.mm.bing.net/th?id=OIP.G0rU36klsBWGlt6CeacaWAHaLH&pid=Api&P=0&h=180'
      },
      {
        name: 'Rain',
        gender: 'Male',
        ageGroup: 'Adolescence',
        city: 'Agartala',
        state: 'Tripura',
        owner: 'Subho Santra',
        contact: 'Contact Now',
        image: 'https://tse2.mm.bing.net/th?id=OIP.oWMkL8YnI6XsiKdo-CN9KQHaE8&pid=Api&P=0&h=180'
      }
  ];
  
  const petsSection = document.getElementById('pets-section');
  const stateFilter = document.getElementById('state-filter');
  const cityFilter = document.getElementById('city-filter');
  const clearFilters = document.getElementById('clear-filters');
  const applyFilter = document.getElementById('apply-filter');
  
  function renderPets(pets) {
    petsSection.innerHTML = "";
    pets.forEach((pet) => {
      const petCard = document.createElement('div');
      petCard.classList.add('pet-card');
      petCard.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}" />
        <h3>${pet.name}</h3>
        <p>${pet.gender}, ${pet.age}</p>
        <p>${pet.city}, ${pet.state}</p>
        <p>Owner: ${pet.owner}</p>
        <p class="contact-link">Contact Now</p>
      `;
      petsSection.appendChild(petCard);
    });
  }
  
  function applyFilters() {
    const selectedState = stateFilter.value;
    const selectedCity = cityFilter.value;
  
    const filteredPets = petsData.filter((pet) => {
      return (
        (selectedState === "" || pet.state === selectedState) &&
        (selectedCity === "" || pet.city === selectedCity)
      );
    });
  
    renderPets(filteredPets);
  }
  
  applyFilter.addEventListener('click', applyFilters);
  clearFilters.addEventListener('click', () => {
    stateFilter.value = "";
    cityFilter.value = "";
    renderPets(petsData);
  });
  
  // Initial render
  renderPets(petsData);
  