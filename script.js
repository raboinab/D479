document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (mobileNavToggle && mobileNav) {
        mobileNavToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = mobileNavToggle.querySelectorAll('span');
            if (mobileNav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Grid/Carousel view toggle for activities
    const gridViewBtn = document.getElementById('grid-view-btn');
    const carouselViewBtn = document.getElementById('carousel-view-btn');
    const activitiesContainer = document.getElementById('activities-container');
    
    if (gridViewBtn && carouselViewBtn && activitiesContainer) {
        gridViewBtn.addEventListener('click', function() {
            activitiesContainer.classList.remove('carousel-view');
            activitiesContainer.classList.add('grid-view');
            gridViewBtn.classList.add('active');
            carouselViewBtn.classList.remove('active');
        });
        
        carouselViewBtn.addEventListener('click', function() {
            activitiesContainer.classList.remove('grid-view');
            activitiesContainer.classList.add('carousel-view');
            carouselViewBtn.classList.add('active');
            gridViewBtn.classList.remove('active');
        });
    }
    
    // Create placeholder pages for navigation
    createPlaceholderPages();
});

// Function to create placeholder pages for the prototype
function createPlaceholderPages() {
    // Pages to create
    const pages = [
        { name: 'attractions', title: 'Attractions', sections: ['beaches', 'rainforest', 'volcano', 'cultural'] },
        { name: 'activities', title: 'Activities', sections: ['snorkeling', 'ziplining', 'fishing'] },
        { name: 'lodging', title: 'Lodging', sections: [] },
        { name: 'transportation', title: 'Transportation', sections: ['airport', 'buses', 'taxis', 'rentals'] },
        { name: 'about', title: 'About Taniti', sections: ['island', 'culture', 'government', 'tourism-board'] },
        { name: 'visitor-essentials', title: 'Visitor Essentials', sections: ['safety', 'currency', 'emergency', 'faq', 'weather', 'holidays'] },
        { name: 'booking', title: 'Book Your Stay', sections: [] }
    ];
    
    // Check if we're on a placeholder page
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop().replace('.html', '');
    
    if (currentPage !== 'index' && currentPage !== '') {
        // Find the current page in our pages array
        const pageInfo = pages.find(page => page.name === currentPage);
        
        if (pageInfo) {
            // Create the page content
            document.body.innerHTML = createPageHTML(pageInfo);
            
            // Add event listeners for the new page
            const mobileNavToggle = document.getElementById('mobile-nav-toggle');
            const mobileNav = document.getElementById('mobile-nav');
            
            if (mobileNavToggle && mobileNav) {
                mobileNavToggle.addEventListener('click', function() {
                    mobileNav.classList.toggle('active');
                    
                    // Animate hamburger to X
                    const spans = mobileNavToggle.querySelectorAll('span');
                    if (mobileNav.classList.contains('active')) {
                        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                        spans[1].style.opacity = '0';
                        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                    } else {
                        spans[0].style.transform = 'none';
                        spans[1].style.opacity = '1';
                        spans[2].style.transform = 'none';
                    }
                });
            }
            
            // Special handling for specific pages
            if (currentPage === 'activities') {
                setupActivitiesPage();
            } else if (currentPage === 'lodging') {
                setupLodgingPage();
            } else if (currentPage === 'booking') {
                setupBookingPage();
            }
        }
    }
}

// Function to create HTML for placeholder pages
function createPageHTML(pageInfo) {
    let sectionsHTML = '';
    
    if (pageInfo.sections.length > 0) {
        pageInfo.sections.forEach(section => {
            sectionsHTML += `
                <section id="${section}" class="page-section">
                    <h2>${formatSectionTitle(section)}</h2>
                    <div class="section-content">
                        <p>This is placeholder content for the ${formatSectionTitle(section)} section of the ${pageInfo.title} page.</p>
                        <p>In a real website, this would contain detailed information about ${formatSectionTitle(section)}.</p>
                    </div>
                </section>
            `;
        });
    } else {
        sectionsHTML = `
            <section class="page-section">
                <h2>${pageInfo.title}</h2>
                <div class="section-content">
                    <p>This is placeholder content for the ${pageInfo.title} page.</p>
                    <p>In a real website, this would contain detailed information about ${pageInfo.title.toLowerCase()}.</p>
                </div>
            </section>
        `;
    }
    
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Taniti Tourism - ${pageInfo.title}</title>
            <link rel="stylesheet" href="styles.css">
            <style>
                .page-header {
                    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
                    background-size: cover;
                    background-position: center;
                    height: 40vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    text-align: center;
                }
                
                .page-title {
                    font-size: 3rem;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                
                .page-section {
                    padding: 60px 5%;
                    border-bottom: 1px solid #eee;
                }
                
                .page-section:last-child {
                    border-bottom: none;
                }
                
                .section-content {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .back-to-home {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #0077b6;
                    color: white;
                    border-radius: 5px;
                    text-decoration: none;
                }
            </style>
            <script src="script.js" defer></script>
        </head>
        <body>
            <!-- Header -->
            <header>
                <div class="logo">Taniti<span>Tourism</span></div>
                <nav id="desktop-nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="attractions.html" ${pageInfo.name === 'attractions' ? 'class="active"' : ''}>Attractions</a></li>
                        <li><a href="activities.html" ${pageInfo.name === 'activities' ? 'class="active"' : ''}>Activities</a></li>
                        <li><a href="lodging.html" ${pageInfo.name === 'lodging' ? 'class="active"' : ''}>Lodging</a></li>
                        <li><a href="transportation.html" ${pageInfo.name === 'transportation' ? 'class="active"' : ''}>Transportation</a></li>
                        <li><a href="about.html" ${pageInfo.name === 'about' ? 'class="active"' : ''}>About</a></li>
                    </ul>
                </nav>
                <div class="mobile-nav-toggle" id="mobile-nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav id="mobile-nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="attractions.html" ${pageInfo.name === 'attractions' ? 'class="active"' : ''}>Attractions</a></li>
                        <li><a href="activities.html" ${pageInfo.name === 'activities' ? 'class="active"' : ''}>Activities</a></li>
                        <li><a href="lodging.html" ${pageInfo.name === 'lodging' ? 'class="active"' : ''}>Lodging</a></li>
                        <li><a href="transportation.html" ${pageInfo.name === 'transportation' ? 'class="active"' : ''}>Transportation</a></li>
                        <li><a href="about.html" ${pageInfo.name === 'about' ? 'class="active"' : ''}>About</a></li>
                        <li><a href="visitor-essentials.html" ${pageInfo.name === 'visitor-essentials' ? 'class="active"' : ''}>Visitor Essentials</a></li>
                    </ul>
                </nav>
                <div class="header-right">
                    <input type="text" class="search-bar" placeholder="Search...">
                    <a href="booking.html" class="book-now-btn">Book Now</a>
                </div>
            </header>
            
            <!-- Page Header -->
            <div class="page-header">
                <h1 class="page-title">${pageInfo.title}</h1>
            </div>
            
            <!-- Page Content -->
            <main>
                ${sectionsHTML}
                
                <div style="text-align: center; padding: 40px;">
                    <a href="index.html" class="back-to-home">Back to Home</a>
                </div>
            </main>
            
            <!-- Footer -->
            <footer>
                <div class="footer-container">
                    <div class="footer-col">
                        <h3>About Taniti</h3>
                        <ul>
                            <li><a href="about.html#island">Our Island</a></li>
                            <li><a href="about.html#culture">Culture & History</a></li>
                            <li><a href="about.html#government">Government</a></li>
                            <li><a href="about.html#tourism-board">Tourism Board</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h3>Plan Your Trip</h3>
                        <ul>
                            <li><a href="attractions.html">Attractions</a></li>
                            <li><a href="activities.html">Activities</a></li>
                            <li><a href="lodging.html">Lodging</a></li>
                            <li><a href="transportation.html">Transportation</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h3>Visitor Info</h3>
                        <ul>
                            <li><a href="visitor-essentials.html#emergency">Emergency Contacts</a></li>
                            <li><a href="visitor-essentials.html#faq">FAQs</a></li>
                            <li><a href="visitor-essentials.html#weather">Weather</a></li>
                            <li><a href="visitor-essentials.html#holidays">Local Holidays</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h3>Contact Us</h3>
                        <p>Email: info@tanititoruism.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                        <div class="social-icons">
                            <a href="#">FB</a>
                            <a href="#">IG</a>
                            <a href="#">TW</a>
                            <a href="#">YT</a>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p>&copy; 2025 Taniti Tourism Board. All rights reserved.</p>
                </div>
            </footer>
        </body>
        </html>
    `;
}

// Helper function to format section titles
function formatSectionTitle(section) {
    return section
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Setup for Activities page
function setupActivitiesPage() {
    // Add specific content for the snorkeling section
    const snorkelingSection = document.getElementById('snorkeling');
    if (snorkelingSection) {
        const sectionContent = snorkelingSection.querySelector('.section-content');
        sectionContent.innerHTML = `
            <div class="activity-detail">
                <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Snorkeling" style="width: 100%; max-width: 600px; border-radius: 10px; margin-bottom: 20px;">
                <h3>Explore Taniti's Underwater Paradise</h3>
                <p>Discover vibrant coral reefs and swim alongside tropical fish in our crystal-clear waters. Our guided snorkeling tours provide equipment and expert instruction for all skill levels.</p>
                <div class="activity-info" style="margin: 20px 0;">
                    <p><strong>Duration:</strong> 2-3 hours</p>
                    <p><strong>Price:</strong> $45 per person</p>
                    <p><strong>Includes:</strong> Equipment rental, guide, and refreshments</p>
                    <p><strong>Departure:</strong> Daily at 9:00 AM and 1:00 PM from Yellow Leaf Bay</p>
                </div>
                <a href="booking.html" class="book-now-btn" style="display: inline-block; margin-top: 20px;">Book This Tour</a>
            </div>
        `;
    }
}

// Setup for Lodging page
function setupLodgingPage() {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.innerHTML = `
            <section class="page-section">
                <h2>Find Your Perfect Stay</h2>
                <div class="section-content">
                    <div class="lodging-filters" style="margin-bottom: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
                        <h3>Filter Options</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 15px;">
                            <div>
                                <label for="price-range">Price Range:</label>
                                <select id="price-range" style="padding: 8px; border-radius: 5px; border: 1px solid #ddd;">
                                    <option value="all">All Prices</option>
                                    <option value="budget">Budget (Under $100)</option>
                                    <option value="mid-range">Mid-Range ($100-$200)</option>
                                    <option value="luxury">Luxury ($200+)</option>
                                </select>
                            </div>
                            <div>
                                <label for="location">Location:</label>
                                <select id="location" style="padding: 8px; border-radius: 5px; border: 1px solid #ddd;">
                                    <option value="all">All Locations</option>
                                    <option value="taniti-city">Taniti City</option>
                                    <option value="yellow-leaf-bay">Yellow Leaf Bay</option>
                                    <option value="merriton-landing">Merriton Landing</option>
                                    <option value="beachfront">Beachfront</option>
                                </select>
                            </div>
                            <div>
                                <label for="type">Type:</label>
                                <select id="type" style="padding: 8px; border-radius: 5px; border: 1px solid #ddd;">
                                    <option value="all">All Types</option>
                                    <option value="resort">Resort</option>
                                    <option value="hotel">Hotel</option>
                                    <option value="bb">Bed & Breakfast</option>
                                    <option value="hostel">Hostel</option>
                                </select>
                            </div>
                            <button id="apply-filters" style="padding: 8px 15px; background-color: #0077b6; color: white; border: none; border-radius: 5px; cursor: pointer;">Apply Filters</button>
                        </div>
                    </div>
                    
                    <div class="lodging-results">
                        <div class="lodging-card" style="display: flex; margin-bottom: 30px; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Taniti Beachfront Resort" style="width: 300px; height: 200px; object-fit: cover;">
                            <div style="padding: 20px; flex-grow: 1;">
                                <h3>Taniti Beachfront Resort</h3>
                                <p>Luxury resort with stunning ocean views, multiple pools, and full-service spa.</p>
                                <p><strong>Location:</strong> Yellow Leaf Bay</p>
                                <p><strong>Price:</strong> $250-$500 per night</p>
                                <p><strong>Type:</strong> Resort</p>
                                <a href="booking.html" class="book-now-btn" style="display: inline-block; margin-top: 15px;">Book Now</a>
                            </div>
                        </div>
                        
                        <div class="lodging-card mid-range bb" style="display: flex; margin-bottom: 30px; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Island Breeze B&B" style="width: 300px; height: 200px; object-fit: cover;">
                            <div style="padding: 20px; flex-grow: 1;">
                                <h3>Island Breeze B&B</h3>
                                <p>Charming bed & breakfast with homemade local cuisine and personalized service.</p>
                                <p><strong>Location:</strong> Merriton Landing</p>
                                <p><strong>Price:</strong> $120-$180 per night</p>
                                <p><strong>Type:</strong> Bed & Breakfast</p>
                                <a href="booking.html" class="book-now-btn" style="display: inline-block; margin-top: 15px;">Book Now</a>
                            </div>
                        </div>
                        
                        <div class="lodging-card" style="display: flex; margin-bottom: 30px; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Taniti Backpackers Hostel" style="width: 300px; height: 200px; object-fit: cover;">
                            <div style="padding: 20px; flex-grow: 1;">
                                <h3>Taniti Backpackers Hostel</h3>
                                <p>Budget-friendly hostel with dormitory and private rooms, communal kitchen, and social areas.</p>
                                <p><strong>Location:</strong> Taniti City</p>
                                <p><strong>Price:</strong> $30-$80 per night</p>
                                <p><strong>Type:</strong> Hostel</p>
                                <a href="booking.html" class="book-now-btn" style="display: inline-block; margin-top: 15px;">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div style="text-align: center; padding: 40px;">
                <a href="index.html" class="back-to-home">Back to Home</a>
            </div>
        `;
        
        // Add event listener for the filter button
        const applyFiltersBtn = document.getElementById('apply-filters');
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', function() {
                const priceRange = document.getElementById('price-range').value;
                const location = document.getElementById('location').value;
                const type = document.getElementById('type').value;
                
                // Show a message when mid-range B&B is selected
                if (priceRange === 'mid-range' && type === 'bb') {
                    alert('Filter applied: Mid-range Bed & Breakfast options are now displayed.');
                } else {
                    alert('Filters applied. In a real website, this would filter the lodging options based on your selections.');
                }
            });
        }
    }
}

// Setup for Booking page
function setupBookingPage() {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.innerHTML = `
            <section class="page-section">
                <h2>Book Your Taniti Adventure</h2>
                <div class="section-content">
                    <div style="max-width: 800px; margin: 0 auto;">
                        <div class="booking-tabs" style="display: flex; margin-bottom: 20px; border-bottom: 1px solid #ddd;">
                            <button class="tab-btn active" data-tab="lodging" style="padding: 10px 20px; background: none; border: none; cursor: pointer; font-weight: bold; color: #0077b6; border-bottom: 2px solid #0077b6;">Lodging</button>
                            <button class="tab-btn" data-tab="activities" style="padding: 10px 20px; background: none; border: none; cursor: pointer;">Activities</button>
                            <button class="tab-btn" data-tab="packages" style="padding: 10px 20px; background: none; border: none; cursor: pointer;">Packages</button>
                        </div>
                        
                        <div class="tab-content" id="lodging-tab" style="display: block;">
                            <form class="booking-form">
                                <div style="margin-bottom: 20px;">
                                    <label for="check-in" style="display: block; margin-bottom: 5px; font-weight: bold;">Check-in Date:</label>
                                    <input type="date" id="check-in" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                </div>
                                
                                <div style="margin-bottom: 20px;">
                                    <label for="check-out" style="display: block; margin-bottom: 5px; font-weight: bold;">Check-out Date:</label>
                                    <input type="date" id="check-out" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                </div>
                                
                                <div style="margin-bottom: 20px;">
                                    <label for="guests" style="display: block; margin-bottom: 5px; font-weight: bold;">Number of Guests:</label>
                                    <input type="number" id="guests" min="1" value="2" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                </div>
                                
                                <div style="margin-bottom: 20px;">
                                    <label for="lodging-type" style="display: block; margin-bottom: 5px; font-weight: bold;">Accommodation Type:</label>
                                    <select id="lodging-type" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                        <option value="">Select an option</option>
                                        <option value="resort">Resort</option>
                                        <option value="hotel">Hotel</option>
                                        <option value="bb">Bed & Breakfast</option>
                                        <option value="hostel">Hostel</option>
                                    </select>
                                </div>
                                
                                <button type="button" id="search-lodging" class="book-now-btn" style="width: 100%; padding: 12px; margin-top: 10px;">Search Availability</button>
                            </form>
                        </div>
                        
                        <div class="tab-content" id="activities-tab" style="display: none;">
                            <form class="booking-form">
                                <div style="margin-bottom: 20px;">
                                    <label for="activity-date" style="display: block; margin-bottom: 5px; font-weight: bold;">Date:</label>
                                    <input type="date" id="activity-date" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                </div>
                                
                                <div style="margin-bottom: 20px;">
                                    <label for="activity-type" style="display: block; margin-bottom: 5px; font-weight: bold;">Activity Type:</label>
                                    <select id="activity-type" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                        <option value="">Select an activity</option>
                                        <option value="snorkeling">Snorkeling Tour</option>
                                        <option value="ziplining">Zip-lining Adventure</option>
                                        <option value="fishing">Fishing Charter</option>
                                        <option value="volcano">Volcano Tour</option>
                                        <option value="rainforest">Rainforest Hike</option>
                                    </select>
                                </div>
                                
                                <div style="margin-bottom: 20px;">
                                    <label for="activity-participants" style="display: block; margin-bottom: 5px; font-weight: bold;">Number of Participants:</label>
                                    <input type="number" id="activity-participants" min="1" value="2" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                </div>
                                
                                <button type="button" id="search-activities" class="book-now-btn" style="width: 100%; padding: 12px; margin-top: 10px;">Check Availability</button>
                            </form>
                        </div>
                        
                        <div class="tab-content" id="packages-tab" style="display: none;">
                            <form class="booking-form">
                                <div style="margin-bottom: 20px;">
                                    <label for="package-checkin" style="display: block; margin-bottom: 5px; font-weight: bold;">Check-in Date:</label>
                                    <input type="date" id="package-checkin" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                </div>
                                
                                <div style="margin-bottom: 20px;">
                                    <label for="package-checkout" style="display: block; margin-bottom: 5px; font-weight: bold;">Check-out Date:</label>
                                    <input type="date" id="package-checkout" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                </div>
                                
                                <div style="margin-bottom: 20px;">
                                    <label for="package-type" style="display: block; margin-bottom: 5px; font-weight: bold;">Package Type:</label>
                                    <select id="package-type" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                        <option value="">Select a package</option>
                                        <option value="adventure">Adventure Package</option>
                                        <option value="relaxation">Relaxation Package</option>
                                        <option value="family">Family Package</option>
                                        <option value="honeymoon">Honeymoon Package</option>
                                    </select>
                                </div>
                                
                                <div style="margin-bottom: 20px;">
                                    <label for="package-guests" style="display: block; margin-bottom: 5px; font-weight: bold;">Number of Guests:</label>
                                    <input type="number" id="package-guests" min="1" value="2" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
                                </div>
                                
                                <button type="button" id="search-packages" class="book-now-btn" style="width: 100%; padding: 12px; margin-top: 10px;">View Packages</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            <div style="text-align: center; padding: 40px;">
                <a href="index.html" class="back-to-home">Back to Home</a>
            </div>
        `;
        
        // Add event listeners for booking page tabs
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        if (tabBtns.length > 0 && tabContents.length > 0) {
            tabBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabBtns.forEach(b => b.style.color = '');
                    tabBtns.forEach(b => b.style.borderBottom = '');
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    this.style.color = '#0077b6';
                    this.style.borderBottom = '2px solid #0077b6';
                    
                    // Hide all tab contents
                    tabContents.forEach(content => {
                        content.style.display = 'none';
                    });
                    
                    // Show the selected tab content
                    const tabId = this.getAttribute('data-tab') + '-tab';
                    document.getElementById(tabId).style.display = 'block';
                });
            });
        }
        
        // Add event listeners for form submissions
        const searchLodgingBtn = document.getElementById('search-lodging');
        const searchActivitiesBtn = document.getElementById('search-activities');
        const searchPackagesBtn = document.getElementById('search-packages');
        
        if (searchLodgingBtn) {
            searchLodgingBtn.addEventListener('click', function() {
                alert('Thank you for your search! In a real website, this would show available lodging options for your selected dates.');
            });
        }
        
        if (searchActivitiesBtn) {
            searchActivitiesBtn.addEventListener('click', function() {
                const activityType = document.getElementById('activity-type').value;
                if (activityType === 'snorkeling') {
                    alert('Snorkeling tours are available on your selected date! In a real website, this would show available time slots and booking options.');
                } else {
                    alert('Thank you for your search! In a real website, this would show available activities for your selected date.');
                }
            });
        }
        
        if (searchPackagesBtn) {
            searchPackagesBtn.addEventListener('click', function() {
                alert('Thank you for your interest! In a real website, this would show available package options for your selected dates.');
            });
        }
    }
}
