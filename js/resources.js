// 资源页面功能
let filteredResources = [...resourcesData];

// 排序函数：按难度从高到低，同一难度内先听力再阅读，然后按首字母顺序
function sortResources(resources) {
    // 难度优先级映射
    const levelPriority = {
        'Advanced': 1,
        'Upper-Intermediate': 2,
        'Intermediate': 3,
        'Lower-Intermediate': 4,
        'Elementary': 5
    };
    
    // 类型优先级映射（listening优先于reading）
    const typePriority = {
        'listening': 1,
        'reading': 2
    };
    
    return resources.sort((a, b) => {
        // 首先按难度排序（从高到低）
        const levelDiff = (levelPriority[a.level] || 999) - (levelPriority[b.level] || 999);
        if (levelDiff !== 0) {
            return levelDiff;
        }
        
        // 同一难度内，按类型排序（listening优先）
        const typeDiff = (typePriority[a.type] || 999) - (typePriority[b.type] || 999);
        if (typeDiff !== 0) {
            return typeDiff;
        }
        
        // 相同难度和类型内，按首字母顺序排序
        return a.name.localeCompare(b.name);
    });
}

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
            // 否则使用data.js中定义的emoji
            imageContent = resource.emoji;
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
    const currentLang = window.getCurrentLanguage ? window.getCurrentLanguage() : 'zh';
    
    filteredResources = resourcesData.filter(resource => {
        // 搜索过滤（根据当前语言使用对应字段）
        const tagsArray = currentLang === 'zh' ? resource.tagsZh : resource.tags;
        const shortDesc = currentLang === 'zh' ? resource.shortDescriptionZh : resource.shortDescription;
        const detailedDesc = currentLang === 'zh' ? resource.detailedDescriptionZh : resource.detailedDescription;

        const matchesSearch = !searchTerm || 
            resource.name.toLowerCase().includes(searchTerm) ||
            (tagsArray && tagsArray.some(tag => tag.toLowerCase().includes(searchTerm))) ||
            (shortDesc && shortDesc.toLowerCase().includes(searchTerm)) ||
            (detailedDesc && detailedDesc.toLowerCase().includes(searchTerm));
        
        // 类型过滤
        const matchesType = !typeFilter || resource.type === typeFilter;
        
        // 难度过滤
        const matchesLevel = !levelFilter || resource.level === levelFilter;
        
        return matchesSearch && matchesType && matchesLevel;
    });
    
    // 对过滤后的资源进行排序
    filteredResources = sortResources(filteredResources);
    
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
    
    // 初始排序和渲染
    filteredResources = sortResources(filteredResources);
    renderResources();
});

// 导出函数供i18n.js使用
window.renderResources = renderResources;

