// 공통 네비게이션 함수
function showPage(pageId) {
    const pageMap = {
        'clustering': '01_ai_log_clustering_interface.html',
        'pr': '02_PR_interface.html',
        'timeline': '03_mapreduce_timeline.html',
        'incident': '04_incident_precursor_analytics.html',
        'report': '05_ai_report_summary.html',
        'storage': '06_log_storage_optimization.html'
    };
    
    if (pageMap[pageId]) {
        window.location.href = pageMap[pageId];
    }
}

// 네비게이션 HTML 생성 함수
function createNavigation(activePageId) {
    return `
    <!-- 네비게이션 메뉴 -->
    <nav class="bg-gray-300 border-b border-gray-400 px-2 py-1 flex-shrink-0">
        <div class="flex items-center space-x-1">
            <button onclick="showPage('clustering')" class="nav-btn ${activePageId === 'clustering' ? 'nav-active' : ''} px-2 py-1 text-[11px] font-medium rounded transition-all">
                <i class="fas fa-sitemap mr-1"></i>로그 클러스터링
            </button>
            <button onclick="showPage('pr')" class="nav-btn ${activePageId === 'pr' ? 'nav-active' : ''} px-2 py-1 text-[11px] font-medium rounded transition-all">
                <i class="fas fa-code-branch mr-1"></i>PR 인터페이스
            </button>
            <button onclick="showPage('timeline')" class="nav-btn ${activePageId === 'timeline' ? 'nav-active' : ''} px-2 py-1 text-[11px] font-medium rounded transition-all">
                <i class="fas fa-clock mr-1"></i>MapReduce 타임라인
            </button>
            <button onclick="showPage('incident')" class="nav-btn ${activePageId === 'incident' ? 'nav-active' : ''} px-2 py-1 text-[11px] font-medium rounded transition-all">
                <i class="fas fa-exclamation-triangle mr-1"></i>사건 전조 분석
            </button>
            <button onclick="showPage('report')" class="nav-btn ${activePageId === 'report' ? 'nav-active' : ''} px-2 py-1 text-[11px] font-medium rounded transition-all">
                <i class="fas fa-file-alt mr-1"></i>AI 리포트 요약
            </button>
            <button onclick="showPage('storage')" class="nav-btn ${activePageId === 'storage' ? 'nav-active' : ''} px-2 py-1 text-[11px] font-medium rounded transition-all">
                <i class="fas fa-database mr-1"></i>로그 저장 최적화
            </button>
        </div>
    </nav>
    `;
}

// 네비게이션 CSS 스타일
const navigationCSS = `
/* Navigation styles */
.nav-btn {
    background: #D0D0D0;
    color: #666666;
    border: 1px solid #BBBBBB;
}
.nav-btn:hover {
    background: #C0C0C0;
    color: #333333;
}
.nav-active {
    background: #5DADE2;
    color: white;
    border-color: #4A9BD1;
}
.nav-active:hover {
    background: #4A9BD1;
}
`; 