// 回到顶部功能
document.addEventListener('DOMContentLoaded', function() {
    // 创建回到顶部按钮
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);
    
    // 监听滚动事件
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // 点击回到顶部
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// 导航栏高亮当前页面
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('font-bold', 'text-blue-800');
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index1.html') ||
            (currentPage === 'index.html' && linkPage === 'index1.html')) {
            link.classList.add('font-bold', 'text-blue-800');
        }
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', highlightCurrentPage);