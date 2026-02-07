// 详情页功能
function renderDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const resourceId = parseInt(urlParams.get('id'));
    
    if (!resourceId) {
        window.location.href = 'resources.html';
        return;
    }
    
    const resource = resourcesData.find(r => r.id === resourceId);
    
    if (!resource) {
        window.location.href = 'resources.html';
        return;
    }
    
    const detailContent = document.getElementById('detail-content');
    if (!detailContent) return;
    
    const currentLang = window.getCurrentLanguage() || 'zh';
    const description = currentLang === 'zh' ? resource.detailedDescriptionZh : resource.detailedDescription;
    const descriptionLabel = window.getTranslation('description');
    const visitLinkText = window.getTranslation('visit-link');
    
    // 生成封面图
    detailContent.innerHTML = `
        <div class="detail-header">
            <div class="detail-emoji">${resource.emoji}</div>
            <h1 class="detail-title">${resource.name}</h1>
            <div class="detail-level">${currentLang === 'zh' ? resource.levelZh : resource.level}</div>
            <div class="detail-tags">
                ${(currentLang === 'zh' ? resource.tagsZh : resource.tags).map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="detail-category">${currentLang === 'zh' ? resource.categoryZh : resource.category}</div>
        </div>
        <div class="detail-description">
            <strong>${descriptionLabel}</strong><br>
            ${description}
        </div>
        <div style="text-align: center;">
            <a href="${resource.link}" target="_blank" class="detail-link">${visitLinkText}</a>
        </div>
    `;
    
    // 更新页面标题
    document.title = `${resource.name} - 听读小站`;
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderDetail();
});

// 导出函数供i18n.js使用
window.renderDetail = renderDetail;

