// _javascript/prayertime.js

class PrayerTimes {
    constructor() {
        this.container = null;
        this.init();
    }

    async init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    async setup() {
        // Create container
        this.container = document.createElement('div');
        this.container.id = 'prayer-times';
        this.container.className = 'prayer-times-container';
        
        // Insert after the post content
        const content = document.querySelector('.post');
        if (content) {
            content.parentNode.insertBefore(this.container, content.nextSibling);
        }

        await this.loadPrayerTimes();
    }

    async getUserLocation() {
        try {
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            return {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
        } catch (error) {
            console.error('Error getting location:', error);
            return null;
        }
    }

    async fetchPrayerTimes(latitude, longitude) {
        try {
            const response = await fetch(`https://mpt.i906.my/api/prayer/${latitude},${longitude}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching prayer times:', error);
            return null;
        }
    }

    formatTime(timestamp) {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }

    updateUI(data) {
        if (!data || !data.data || !data.data.times || !data.data.times[0]) {
            this.container.innerHTML = '<p>Unable to load prayer times.</p>';
            return;
        }

        const prayers = ['Subuh', 'Syuruk', 'Zohor', 'Asar', 'Maghrib', 'Isyak'];
        const today = data.data.times[0];

        this.container.innerHTML = `
            <h3>Prayer Times for ${data.data.place}</h3>
            <div class="prayer-times-grid">
                ${prayers.map((prayer, index) => `
                    <div class="prayer-time">
                        <span class="prayer-name">${prayer}</span>
                        <span class="prayer-time-value">${this.formatTime(today[index])}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    async loadPrayerTimes() {
        const location = await this.getUserLocation();
        if (location) {
            const prayerData = await this.fetchPrayerTimes(location.latitude, location.longitude);
            this.updateUI(prayerData);
        } else {
            this.container.innerHTML = '<p>Please enable location access to view prayer times.</p>';
        }
    }
}

// Initialize when the module loads
new PrayerTimes();
