const menuItems = [
    {
        label: '행사안내',
        to: '/portfolio',
        subItems: [
            { label: '행사 개요', to: '/portfolio' },
            { label: '오시는 길', to: '/portfolioDetails' },
            // { label: '지난 행사', to: '/servicesDetails' },
        ]
    },
    {
        label: '프로그램',
        to: '/services',
        subItems: [
            { label: '프로그램', to: '/services' },
            // { label: '발표자', to: '/team' }
        ]
    },
    {
        label: '게시판',
        to: '/about',
        subItems: [
            { label: '공지사항', to: '/about' },
            { label: 'FAQ', to: '/teamDetails' },
            { label: 'Q&A', to: '/servicesDetails' },
        ]
    },
    {
        label: '사전등록',
        to: '/contact',
        subItems: [
            { label: '사전등록', to: '/contact' },
            { label: '이벤트', to: '/blogDetails' }
        ]
    },
];

export default menuItems;