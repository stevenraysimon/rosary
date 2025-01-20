class HailMaryComponent extends HTMLElement {
    constructor() {
        super();
        // You can initialize any properties or attributes here
    }

    connectedCallback() {
        this.render();
    }

    render() {
        // Set the inner HTML of the custom element
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

// Register the custom element
customElements.define('hail-mary-component', HailMaryComponent);
