document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('loadDataBtn');
    const container = document.getElementById('dataContainer');

    button.addEventListener('click', async () => {
        try {
            const response = await fetch('/api/items');
            const data = await response.json();
            container.innerHTML = data.map(item => `
                <div class="item">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <strong>Price: $${item.price.toFixed(2)}</strong>
                </div>
            `).join('');
        } catch (error) {
            container.innerHTML = "<p>Error loading data.</p>";
            console.error(error);
        }
    });
});
