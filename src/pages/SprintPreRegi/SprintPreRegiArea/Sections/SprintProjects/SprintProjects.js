import Project from "./Project";

//스프린트 프로젝트명은 여기서만 관리
export const sprintProjectDatas = [
    {name:'모던 자바스크립트 튜토리얼', value:1, isClosed:false},
    {name:'OpenStack', value:2, isClosed:false},
    {name:'python-mysql-replication', value:3, isClosed:false},
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
const project_3 = {
    name: sprintProjectDatas[2].name,
    introDiv:
        <div>
            <p>(1) MySQL, MariaDB가 생성하는 로그 파일의 내용을 Python 객체로 변환해주는 라이브러리로, </p>
            <p>(2) 변환된 객체를 여러 데이터베이스에 복제하거나, 분석, 감사의 용도 등으로 활용케 합니다.</p>
            <p>백엔드 엔지니어, 데이터 엔지니어가 상용 툴로는 대응할 수 없는 현장의 수요에 맞게 복제, 분석, 감사 등을 가능하게 하는 오픈소스 툴로써 활약 중에 있습니다.</p>
            <p>이러한 장점들 덕분에 카카오, 원티드, AWS 등 세계적인 기업들에서 데이터를 실시간으로 흐르게 하는 심장 역할을 하고 있습니다.</p>
        </div>,
    mentorDiv:<div>
        <div className="profileDesc"><div className="regu_m">장동욱</div>
            <p>- ’23 오픈소스 컨트리뷰션 아카데미 python-mysql-replication 리드멘토</p>
            <p>- ’23 Hacktoberfest Seoul python-mysql-replication 멘토</p>
            <p>- python-mysql-replication 메인테이너</p>
            <p>- 카카오에서 python-mysql-replication을 활용한 CDC 솔루션 <a href="https://elseif.kakao.com/2020/session/99" className="underline__blue">LOMIO</a> 개발</p>
        </div>
        <div className="profileDesc"><div className="regu_m">김수인</div>
            <p>- ’23 오픈소스 컨트리뷰션 아카데미 python-mysql-replication 멘티</p>
            <p>- python-mysql-replication 컨트리뷰터</p>
        </div>
        <div className="profileDesc"><div className="regu_m">박재현</div>
            <p>- ’23 오픈소스 컨트리뷰션 아카데미 python-mysql-replication 멘티</p>
            <p>- ’23 Hacktoberfest Seoul python-mysql-replication 멘토</p>
            <p>- python-mysql-replication 컨트리뷰터</p>
        </div>
        <div className="profileDesc"><div className="regu_m">이소울</div>
            <p>- ’23 오픈소스 컨트리뷰션 아카데미 python-mysql-replication 리드멘티</p>
            <p>- ’23 Hacktoberfest Seoul python-mysql-replication 멘토</p>
            <p>- python-mysql-replication 컨트리뷰터</p>
            <p>- 42 서울 재학</p>
        </div>
    </div>,
    recruitType:
        <div>
            <p>예비 컨트리뷰터 분들의 코드가 유용하게 사용될 수 있도록 지원할 예정입니다. 커버리지 증대, 無중단 無유실 데이터 취득을 위한 예제 코드 작성 등을 목표로 하고 있습니다.</p>
            <div className="profileDesc"><div className="regu_m">Python에 관심 있으신 분</div>
                <p>- 본 패키지는 pure Python으로, MySQL과 통신하는 과정에서 pymysql을 활용하는 것을 제외하면 주로 내장 패키지를 채택하고 있습니다. Python에 관심이 많으신
                    파이써니스타 분들 과 함께 하고 싶습니다.</p>
            </div>
            <div className="profileDesc"><div className="regu_m">MySQL에 관심 있으신 분</div>
                <p>- 본 패키지는 Master-Slave를 활용하여 MySQL에 부하를 주지 않고 실시간 데이터를 받아옵니다. MySQL에 대해서 더 알아가고 싶으신 분들과 함께 성장하는 시간 갖고 싶습니다.</p>
            </div>
        </div>
    ,
    recruitNum:'10명'
}

const SprintProjects = () => {
    return (
        <section id="SprintProjects">
            <h2 className="title">스프린트 프로젝트별 소개</h2>
            <Project projId="1" data={project_1}/>
            <Project projId="2" data={project_2}/>
            <Project projId="3" data={project_3}/>
        </section>
    );
};

export default SprintProjects;