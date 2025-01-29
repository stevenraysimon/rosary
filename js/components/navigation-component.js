class NavigationComponent extends HTMLElement {
  constructor() {
      super();
      this.imagePath = '';
      this.isMenuOpen = false;
  }

  connectedCallback() {
      this.render();
      this.setupEventListeners();
  }

  setupEventListeners() {
      const menuToggle = this.querySelector('.menu-toggle');
      const overlay = this.querySelector('.menu-overlay');
      
      if (menuToggle) {
          menuToggle.addEventListener('click', () => this.toggleMenu());
      }
      
      if (overlay) {
          overlay.addEventListener('click', () => this.toggleMenu());
      }

      // Add this new code:
      const toggleSections = this.querySelectorAll('.toggle-section');
      
      toggleSections.forEach(section => {
          section.addEventListener('click', (e) => {
              const submenu = section.nextElementSibling;
              const arrow = section.querySelector('.arrow');
              
              submenu.classList.toggle('open');
              arrow.classList.toggle('open');
              
              e.stopPropagation();
          });
      });
  }

  toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      const slideMenu = this.querySelector('.slide-menu');
      const overlay = this.querySelector('.menu-overlay');
      
      if (this.isMenuOpen) {
          slideMenu.classList.add('open');
          overlay.classList.add('active');
          document.body.style.overflow = 'hidden';
      } else {
          slideMenu.classList.remove('open');
          overlay.classList.remove('active');
          document.body.style.overflow = '';
      }
  }

  render() {
      const imagePath = this.getAttribute('image-path') || '../images/rosary/rosary-creed.jpg';
      this.imagePath = imagePath;
      
      let tempPath = '';
      if (imagePath.includes('../')) {
          tempPath = '../';
      }

      // Add styles directly in the component
      const styles = `
          <style> 
              .main-nav-ul{
                display: flex;
                justify-content: right;
              }   

              .menu-toggle {
                  display: flex;
                  align-items: center;
                  cursor: pointer;
                  gap: 0.5rem;
                  padding: 8px 18px;
                  color: white;
              }

              .menu-toggle:hover {
                  background-color: var(--light-blue, #0088cc);
                  transition: 0.3s;
              }

              .menu-toggle:active {
                  background-color: var(--active-blue, #006699);
                  transition: 0s;
              }
              
              .menu-text {
                  font-size: 1.1em;
                  font-weight: 300;
                  text-transform: uppercase;
              }

              .map-link {
                  padding: 8px 18px;
                  text-transform: uppercase;
                  text-decoration: none;
                  color: white;
                  font-size: 1.1em;
                  font-weight: 300;
              }

              .map-link:hover {
                  background-color: var(--light-blue, #0088cc);
                  color: white;
                  transition: 0.3s;
              }

              .map-link:active {
                  background-color: var(--active-blue, #006699);
                  transition: 0s;
              }
              
              .menu-overlay {
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: rgba(0, 0, 0, 0.5);
                  opacity: 0;
                  visibility: hidden;
                  transition: opacity 0.3s ease;
                  z-index: 998;
              }
              
              .menu-overlay.active {
                  opacity: 1;
                  visibility: visible;
              }
              
              .slide-menu {
                  position: fixed;
                  top: 0;
                  left: -300px;
                  width: 300px;
                  height: 100%;
                  background-color: var(--dark-grey, #333);
                  transition: left 0.3s ease;
                  z-index: 999;
                  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
                  overflow-x: scroll;
              }
              
              .slide-menu.open {
                  left: 0;
              }
              
              .slide-menu ul {
                  font-size: 1.1em;
                  font-weight: 300;
                  padding: 6px 18px;
                  margin: 0;
              }
              
              .slide-menu li {
                  display: block;
                  position: relative;
                  background-color: transparent;
                  list-style-type: none;
                  margin: 0.5rem 0;
              }
              
              .slide-menu a {
                  display: block;
                  padding: 8px 18px;
                  text-transform: uppercase;
                  text-decoration: none;
                  color: white;
              }

              .slide-menu a:hover {
                  background-color: var(--light-blue, #0088cc);
                  color: white;
                  transition: 0.3s;
              }

              .slide-menu a:active {
                  background-color: var(--active-blue, #006699);
                  transition: 0s;
              }

              .toggle-section {
                  cursor: pointer;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 8px 18px;
                  text-transform: uppercase;
                  color: white;
              }

              .toggle-section:hover {
                  background-color: var(--light-blue, #0088cc);
                  transition: 0.3s;
              }

              .toggle-section:active {
                  background-color: var(--active-blue, #006699);
                  transition: 0s;
              }

              .arrow {
                  transition: transform 0.3s ease;
              }

              .arrow.open {
                  transform: rotate(180deg);
              }

              .submenu {
                  max-height: 0;
                  overflow: hidden;
                  transition: max-height 0.3s ease;
              }

              .submenu.open {
                  max-height: 500px;
              }

              .submenu a {
                  padding-left: 36px;
              }
          </style>
      `;

      this.innerHTML = `
          ${styles}
          <!-- Main Navigation -->
          <nav class="main-nav-ul">
              <div class="menu-toggle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                  <span class="menu-text">Menu</span>
              </div>
              <a href="#map" class="map-link fancybox" title="Map">Map</a>
          </nav>

          <!-- Slide-out Menu -->
          <div class="menu-overlay"></div>
          <div class="slide-menu">
              <ul>
                  <li><a class="fancybox" href="/rosary/mysteries.html" title="Promises">Mysteries</a></li>
                  <li><a class="fancybox" href="#promises" title="Promises">Promises</a></li>
                  <li><a class="fancybox" href="#history" title="History">History</a></li>
                  <li>
                      <div class="toggle-section">
                          Joyful Mysteries
                          <svg class="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                      </div>
                      <div class="submenu">
                          <a href="/rosary/joyful/joyful-quote1.html">The Annunciation</a>
                          <a href="/rosary/joyful/joyful-quote2.html">The Visitation</a>
                          <a href="/rosary/joyful/joyful-quote3.html">The Nativity</a>
                          <a href="/rosary/joyful/joyful-quote4.html">The Presentation</a>
                          <a href="/rosary/joyful/joyful-quote5.html">The Finding Child Jesus</a>
                      </div>
                  </li>
                  <li>
                      <div class="toggle-section">
                          Luminous Mysteries
                          <svg class="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                      </div>
                      <div class="submenu">
                          <a href="/rosary/luminous/luminous-quote1.html">The Baptism</a>
                          <a href="/rosary/luminous/luminous-quote2.html">The Wedding at Cana</a>
                          <a href="/rosary/luminous/luminous-quote3.html">Proclaiming the Kingdom</a>
                          <a href="/rosary/luminous/luminous-quote4.html">The Transfiguration</a>
                          <a href="/rosary/luminous/luminous-quote5.html">The Institution of the Eucharist</a>
                      </div>
                  </li>
                  <li>
                      <div class="toggle-section">
                          Sorrowful Mysteries
                          <svg class="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                      </div>
                      <div class="submenu">
                          <a href="/rosary/sorrowful/sorrowful-quote1.html">The Agony in the Garden</a>
                          <a href="/rosary/sorrowful/sorrowful-quote2.html">The Scouraging</a>
                          <a href="/rosary/sorrowful/sorrowful-quote3.html">The Crowning with Thorns</a>
                          <a href="/rosary/sorrowful/sorrowful-quote4.html">The Carrying of the Cross</a>
                          <a href="/rosary/sorrowful/sorrowful-quote5.html">The Crucifixion</a>
                      </div>
                  </li>
                  <li>
                      <div class="toggle-section">
                          Glorious Mysteries
                          <svg class="arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                      </div>
                      <div class="submenu">
                          <a href="/rosary/glorious/glorious-quote1.html">The Resurrection</a>
                          <a href="/rosary/glorious/glorious-quote2.html">The Ascension</a>
                          <a href="/rosary/glorious/glorious-quote3.html">The Descent of Holy Spirit</a>
                          <a href="/rosary/glorious/glorious-quote4.html">The Assumption</a>
                          <a href="/rosary/glorious/glorious-quote5.html">The Coronation</a>
                      </div>
                  </li>

<!-- Repeat the same structure for Luminous, Sorrowful, and Glorious mysteries -->
              </ul>
          </div>

          <!-- Promises Content -->
          <div id="promises" style="display:none;">
              <div class="row">
                  <div class="two columns centerInDiv">
                      <img src="${tempPath}images/circle1.png" style="width: 100%; max-width: 100px;"/>
                  </div>
                  <div class="ten columns">
                      <h5>The Promises of saying the Rosary</h5>
                  </div>
              </div>
              <ol class="fancyText">
                  <li>Whoever shall faithfully serve me by the recitation of the Rosary, shall receive signal graces.</li>
                  <li>I promise my special protection and the greatest graces to all those who shall recite the Rosary.</li>
                  <li>The Rosary shall be a powerful armor against hell, it will destroy vice, decrease sin, and defeat heresies.</li>
                  <li>The Rosary will cause virtue and good works to flourish; it will obtain for souls the abundant mercy of God; it will withdraw the hearts of men from the love of the world and its vanities, and will lift them to the desire for eternal things. Oh, that souls would sanctify themselves by this means.</li>
                  <li>The soul which recommends itself to me by the recitation of the Rosary, shall not perish.</li>
                  <li>Whoever shall recite the Rosary devoutly, applying himself to the consideration of its sacred mysteries shall never be conquered by misfortune...</li>
                  <li>Whoever shall have a true devotion for the Rosary shall not die without the sacraments of the Church.</li>
                  <li>Those who are faithful to recite the Rosary shall have during their life and at their death the light of God and the plenititude of His graces...</li>
                  <li>I shall deliver from Purgatory those who have been devoted to the Rosary.</li>
                  <li>The faithful children of the Rosary shall merit a high degree of glory in Heaven.</li>
                  <li>You shall obtain all you ask of me by the recitation of the Rosary.</li>
                  <li>All those who propagate the Holy Rosary shall be aided by me in their necessities.</li>
                  <li>I have obtained from my Divine Son that all the advocates of the Rosary shall have for intercessors the entire celestial court during their life and at the hour of death.</li>
                  <li>All who recite the Rosary are my sons and daughters, and brothers and sisters of my only Son Jesus Christ.</li>
                  <li>Devotion of my Rosary is a great sign of predestination.</li>
              </ol>
          </div>

          <!-- History Content -->
          <div id="history" style="display:none;">
              <div class="row">
                  <div class="two columns centerInDiv">
                      <img src="${tempPath}images/circle2.png" style="width: 100%; max-width: 100px;"/>
                  </div>
                  <div class="ten columns">
                      <h5>History of the Rosary</h5>
                  </div>
              </div>
              <p class="fancyText">The traditional story of the rosary was that Mary herself appeared to Saint Dominic in the twelfth century. At that time, tradition says she gave him the rosary and promised Dominic that if he spread devotion to the rosary, his religious order would flourish. It is quite true that Dominic was quite devoted to the Blessed Mother, but no one knows for sure if Our Lady herself gave Dominic the rosary. If she did, she did not give him a rosary that looks like the one we have today.</p>
              <p class="fancyText">Originally the rosary had 150 beads, the same number of psalms in the Bible. In the twelfth century, religious orders recited together the 150 Psalms as a way to mark the hours of the day and the days of the week. Those people who didn't know how to read wanted to share in this practice, so praying on a string of 150 beads or knots began as a parallel to praying the psalms. It was a way that the illiterate could remember the Lord and his mother throughout the day. The "Divine Office"; the official prayer of the church; is the recitation of the psalms over a four week period, and is still prayed today.</p>
              <p class="fancyText">This first rosary was prayed as we do today, a person would pass their fingers over each bead and say a prayer, usually the "Our Father." The "Hail Mary" (as we know it) wasn't even around at that time. The Hail Mary owes its origin to the rosary. When people said the rosary in the twelfth century, Gabrielle's greeting "Hail Mary, full or grace, the Lord is with thee" was often said along with the Our Father. Later, Elizabeth's greeting "blessed are you among women" was added. It was not until the sixteenth century that the words "Holy Mary, Mother of God, pray for us sinners now and at the hour of our death" were added.</p>
              <p class="fancyText">Various people have added other things to the rosary over the centuries. In the fifteenth century, a Carthusian monk divided the rosary into fifteen brackets (or decades) and a Dominican assigned mysteries to each of the decades. These mysteries were events in the life of  Jesus as written in the gospels. By meditating on these events even the illiterate could  know the stories in the Bible. These decades were the same as ours except for the last two Glorious mysteries. In those two, the Coronation and the Assumption together made up the fourteenth decade and the fifteenth decade was the Last Judgment.</p>
              <p class="fancyText">On October 16, 2002, Pope John Paul II declared that the following year would be the "Year of the Rosary." For the first time in centuries a change was made in the rosary. The Pope added and defined 5 new mysteries that concerned events in the public life of Jesus. These new mysteries were called the "Luminous Mysteries" or "Mysteries of Light." Today's complete rosary is now made up of twenty decades of the Hail Mary, separated by an Our Father, and a Glory Be followed by the Fatima prayer. The rosary is indeed a living prayer that grows with the church. We usually break the rosary into four sets. The four sets are The Joyful Mysteries, The Sorrowful Mysteries, The Glorious Mysteries, and the Luminous Mysteries. Each set of mysteries is prayed on a designated day of the week with a rosary that has five decades. There are variations, however, and in some countries the rosary may even have different mysteries.</p>
              <p class="fancyText">Despite all the additions and changes, the purpose of the rosary has always remained the same. It is a way for God's people to make holy the day, and to remember the life of Jesus and his mother. May these humble origins always be with us each time we pray the rosary.</p>
          </div>

          <!-- Map Content -->
          <div id="map" style="display:none;">
              <h5>Rosary Map</h5>
              <img class="mapImage" src="${this.imagePath}" title="Rosary Map" alt="Rosary Image" style="width:100%;"/>
          </div>
      `;
  }

  // Method to update the image source
  updateImage(newImagePath) {
      this.imagePath = newImagePath;
      const mapImage = this.querySelector('.mapImage');
      if (mapImage) {
          mapImage.src = newImagePath;
      }
  }
}

// Register the custom element with the browser
customElements.define('navigation-component', NavigationComponent);