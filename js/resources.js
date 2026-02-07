// 资源页面功能
let filteredResources = [...resourcesData];

function renderResources() {
    const grid = document.getElementById('resources-grid');
    const noResults = document.getElementById('no-results');
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (filteredResources.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    const currentLang = window.getCurrentLanguage() || 'zh';
    
    filteredResources.forEach(resource => {
        const card = document.createElement('div');
        card.className = 'resource-card';
        card.onclick = () => {
            window.location.href = `detail.html?id=${resource.id}`;
        };
        
        // 生成封面图（使用图片或emoji）
        let imageContent = '';
        if (resource.image) {
            // 如果有图片路径，使用img标签
            imageContent = `<img src="${resource.image}" alt="${resource.name}" class="card-image-img">`;
        } else {
            // 否则使用emoji
            const firstLetter = resource.name.charAt(0).toUpperCase();
            const emojiMap = {
                'J': '📚', 'T': '🎙️', 'H': '🧠', 'A': '💼',
                'C': '📺', 'E': '🎧', 'M': '📖', 'B': '🌍', '美': '🎓'
            };
            const emoji = emojiMap[firstLetter] || '📚';
            imageContent = emoji;
        }

        card.innerHTML = `
            <div class="card-image">${imageContent}</div>
            <div class="card-content">
                <div class="card-title">${resource.name}</div>
                <div class="card-level">${currentLang === 'zh' ? resource.levelZh : resource.level}</div>
                <div class="card-tags">
                    ${(currentLang === 'zh' ? resource.tagsZh : resource.tags).map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="card-description">${currentLang === 'zh' ? resource.shortDescriptionZh : resource.shortDescription}</div>
                <div class="card-category">${currentLang === 'zh' ? resource.categoryZh : resource.category}</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function filterResources() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const typeFilter = document.getElementById('type-filter').value;
    const levelFilter = document.getElementById('level-filter').value;
    
    filteredResources = resourcesData.filter(resource => {
        // 搜索过滤
        const matchesSearch = !searchTerm || 
            resource.name.toLowerCase().includes(searchTerm) ||
            resource.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            resource.description.toLowerCase().includes(searchTerm) ||
            resource.descriptionZh.toLowerCase().includes(searchTerm);
        
        // 类型过滤
        const matchesType = !typeFilter || resource.type === typeFilter;
        
        // 难度过滤
        const matchesLevel = !levelFilter || resource.level === levelFilter;
        
        return matchesSearch && matchesType && matchesLevel;
    });
    
    renderResources();
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const typeFilter = document.getElementById('type-filter');
    const levelFilter = document.getElementById('level-filter');
    
    if (searchInput) {
        searchInput.addEventListener('input', filterResources);
    }
    
    if (typeFilter) {
        typeFilter.addEventListener('change', filterResources);
    }
    
    if (levelFilter) {
        levelFilter.addEventListener('change', filterResources);
    }
    
    // 初始渲染
    renderResources();
});

// 导出函数供i18n.js使用
window.renderResources = renderResources;

