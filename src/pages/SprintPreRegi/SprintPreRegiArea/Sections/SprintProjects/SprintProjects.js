import Project from "./Project";

//스프린트 프로젝트명은 여기서만 관리
export const sprintProjectDatas = [
    {name:'모던 자바스크립트 튜토리얼', value:1},
    {name:'OpenStack', value:2},
    // {name:'모던 자바스크립트 튜토리얼3', value:3},
]
const project_1 = {
    name: sprintProjectDatas[0].name,
    introDiv:
        <div><p>모던 자바스크립트 튜토리얼(<a className="underline__blue">https://ko.javascript.info/</a>) 프로젝트에 기여해 보며 remote 저장소, origin, upstream이 무엇인지 제대로 이해해 보는 시간을 가질 예정입니다.</p> <p>master,  origin/master, upstream/master 이 세 가지가 무슨 차이가 있는지 구분을 못 하는 사람이라면 스프린트에 참여해 보세요. `git push -u origin branch` 명령어에서 `-u`가 어떤 역할을 하는지 궁금했던 분들도 환영합니다.</p>
        </div>,
    mentorDiv:<div>이보라 / 서강대학교 게임교육원 교수</div>,
    recruitType:'',
    recruitNum:'10명 내외'
}
const project_2 = {
    name: sprintProjectDatas[1].name,
    introDiv:
        <div>
            <p>OpenStack은 가상머신, 베어메탈 그리고 컨테이너를 위한 클라우드 인프라를 구축하는 오프소스 클라우드 소프트웨어입니다.
            6개의 핵심 컴포넌트와 약 20여개의 보조 컴포넌트를 유기적으로 연동하여 클라우드 인프라를 구축합니다.</p>
            <p>NHN, 카카오, 블리자드, 레드헷 등 다양한 기업에서 프라이빗 / 퍼블릭 클라우드를 구축하기 위해 오픈스택을 적극적으로 사용하고 있습니다.</p>
            <p>OpenStack은 Python으로 개발되어있으며, Python 개발이 가능하다면 누구나 참여할 수 있습니다. </p>
        </div>,
    mentorDiv:<div>백승주 , 신시온, 김우석, 배석주</div>,
    recruitType:'클라우드 인프라 서비스에 관심있는 누구나',
    recruitNum:'15명'
}

const SprintProjects = () => {
    return (
        <section id="SprintProjects">
            <h2 className="title">스프린트 프로젝트별 소개</h2>
            <Project projId="1" data={project_1}/>
            <Project projId="2" data={project_2}/>


        </section>
    );
};

export default SprintProjects;