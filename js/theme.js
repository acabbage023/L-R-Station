// 主题切换功能
(function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // 从localStorage读取主题设置，默认为light
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // 更新图标
    function updateThemeIcon(theme) {
        if (themeIcon) {
            // 用 SVG 图标替代 emoji，视觉更干净
            themeIcon.innerHTML = theme === 'dark'
                ? `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                `
                : `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <g transform="translate(-0.4, 0.4)">
                        <path d="M21 14.1A7.9 7.9 0 1 1 9.9 3a6.5 6.5 0 1 0 11.1 11.1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
                `;
        }
    }
    
    updateThemeIcon(currentTheme);
    
    // 切换主题
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
})();

