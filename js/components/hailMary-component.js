class HailMaryComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        // Listen for toggle changes
        window.addEventListener('flameOfLoveChanged', () => this.render());
    }

    render() {
        // Check localStorage for the flame of love setting
        const flameOfLoveEnabled = localStorage.getItem('flameOfLove') === 'true';
        
        if (flameOfLoveEnabled) {
            this.innerHTML = `
                <h2>Hail Mary</h2>
                <p class="behindPhotoParagraph">
                    Hail Mary, full of grace. The Lord is with you.<br>
                    Blessed are you among women and blessed is the fruit of your womb, Jesus.<br>
                    <strong>Holy Mary, mother of God, pray for us sinners,<br>
                    Spread the effect of grace of your Flame of Love over all of humanity<br>
                    Now and at the hour of our death.</strong>
                </p>
            `;
        } else {
            this.innerHTML = `
                <h2>Hail Mary</h2>
                <p class="behindPhotoParagraph">
                    Hail Mary, full of grace, the Lord is with thee.<br>
                    Blessed art thou among women, and blessed is the fruit of thy womb, Jesus.<br>
                    <strong>Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</strong>
                </p>
            `;
        }
    }
}

customElements.define('hail-mary-component', HailMaryComponent);