const menuItems = [
    {
        label: '행사안내',
        to: '/overview',
        subItems: [
            { label: '행사 개요', to: '/overview' },
            { label: '오시는 길', to: '/directions' },
            // { label: '지난 행사', to: '/servicesDetails' },
        ]
    },
    {
        label: '프로그램',
        to: '/program',
        subItems: [
            { label: '프로그램', to: '/program' },
            { label: '연사 소개', to: '/speakers' }
        ]
    },
    {
        label: '게시판',
        to: '/notice',
        subItems: [
            { label: '공지사항', to: '/notice' },
            // { label: 'FAQ', to: '/faq' },
            // { label: 'Q&A', to: '/servicesDetails' },
        ]
    },
    {
        label: '사전등록',
        to: '/preRegistration',
        subItems: [
            { label: '사전등록', to: '/preRegistration' },
            { label: '이벤트', to: '/event' }
        ]
    },
];

export default menuItems;