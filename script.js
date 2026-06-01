const companyHistory = [
    {
        year: "1982",
        title: "Los orígenes",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
        year: "1990",
        title: "El primer local propio",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
    },
    {
        year: "2001",
        title: "Reconocimiento regional",
        text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante."
    },
    {
        year: "2010",
        title: "Nuevas recetas, misma tradición",
        text: "Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra."
    },
    {
        year: "2018",
        title: "Expansión y renovación",
        text: "Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui."
    },
    {
        year: "Hoy",
        title: "Mirando al futuro",
        text: "Nullam varius, turpis molestie dictum ultricies, eros velit faucibus metus, sed tempus est dolor quis ligula. Fusce congue, risus at posuere scelerisque, felis lorem euismod felis."
    }
];

const ITEMS_PER_PAGE = 3;
let currentIndex = 0;

function renderEntries() {
    const timeline = document.getElementById('historyTimeline');
    const slice = companyHistory.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

    slice.forEach((item, i) => {
        const entry = document.createElement('div');
        entry.className = 'history-entry';
        entry.innerHTML = `
            <div class="history-year">${item.year}</div>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        `;
        timeline.appendChild(entry);

        // Pequeño retraso escalonado para la animación de entrada
        setTimeout(() => entry.classList.add('visible'), i * 120);
    });

    currentIndex += slice.length;

    if (currentIndex >= companyHistory.length) {
        document.getElementById('loadMoreBtn').disabled = true;
        document.getElementById('loadMoreBtn').textContent = 'Historia completa';
    }
}

document.getElementById('loadMoreBtn').addEventListener('click', renderEntries);

// Carga inicial
renderEntries();
