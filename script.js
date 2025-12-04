document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item:not(.logout)');
    const contentPages = document.querySelectorAll('.page-content');

    // Function to handle page switching
    function switchPage(pageId) {
        contentPages.forEach(page => {
            page.classList.add('hidden');
            page.classList.remove('active');
        });
        
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            targetPage.classList.add('active');
        }
    }

    // Default to Inbounds page setup
    switchPage('inbounds-page'); 

    // Add click listeners to navigation items
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active class in sidebar
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Get the target page ID from the href/text content
            const pageName = item.textContent.trim().toLowerCase().replace(/\s/g, '-');
            let pageId;
            if (pageName.includes('overview')) pageId = 'overview-page';
            else if (pageName.includes('inbounds')) pageId = 'inbounds-page';
            else if (pageName.includes('panel-settings')) pageId = 'settings-page';
            else if (pageName.includes('xray-configs')) pageId = 'xray-configs-page';

            if (pageId) {
                switchPage(pageId);
            }
        });
    });
    
    // Console log for the admin credentials requested by the user
    console.log(`Simulated Login Attempt:
Username: admin
Password: admin2013
Status: Success - Displaying Admin Panel Mock-up.`);
});
