function scrollIntoView(element, options = {}) {
    // 사용자 정의 옵션 또는 기본 옵션 설정
    const { behavior = 'auto', offsetY = 0 } = options;

    // 현재 스크롤 위치를 가져옴
    const currentScrollY = window.scrollY;

    // 대상 요소의 위치를 가져옴
    const elementRect = element.getBoundingClientRect();

    // 대상 요소의 상단 위치에서 offsetY를 더한 위치로 스크롤
    window.scroll({
        top: elementRect.top + currentScrollY + offsetY,
        behavior: behavior,
    });
}

export {scrollIntoView}