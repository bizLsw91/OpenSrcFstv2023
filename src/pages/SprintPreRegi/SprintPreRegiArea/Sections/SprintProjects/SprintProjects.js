import Project from "./Project";

export const sprintProjectDatas = [
    {name:'모던 자바스크립트 튜토리얼', value:1},
    // {name:'모던 자바스크립트 튜토리얼2', value:2},
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

const SprintProjects = () => {
    return (
        <section id="SprintProjects">
            <h2 className="title">스프린트 프로젝트별 소개</h2>
            <Project projId="1" data={project_1}/>


        </section>
    );
};

export default SprintProjects;