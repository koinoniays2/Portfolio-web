const techStackImage = [
    {
        "src" : "./image/html5.svg",
        "alt" : "html5"
    },{
        "src" : "./image/css3.svg",
        "alt" : "css3"
    },{
        "src" : "./image/js.svg",
        "alt" : "javascript"
    },{
        "src" : "./image/jquery.svg",
        "alt" : "jquery"
    },{
        "src" : "./image/react.svg",
        "alt" : "react"
    },{
        "src" : "./image/tailwind.svg",
        "alt" : "tailwindcss"
    },{
        "src" : "./image/figma.svg",
        "alt" : "figma"
    },{
        "src" : "./image/nodejs.svg",
        "alt" : "nodejs"
    },{
        "src" : "./image/mongodb.svg",
        "alt" : "mongodb"
    },{
        "src" : "./image/php.svg",
        "alt" : "php"
    },{
        "src" : "./image/mysql.svg",
        "alt" : "mysql"
    }

];
const otherImage = [
    {
        "src" : "./image/vercel.svg",
        "alt" : "vercel"
    },{
        "src" : "./image/netlify.svg",
        "alt" : "netlify"
    },{
        "src" : "./image/notion.svg",
        "alt" : "notion"
    }
]

const techBox = document.querySelectorAll(".tech-img");
techStackImage.forEach((item) => {
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;
    techBox[0].appendChild(image);
});
otherImage.forEach((item) => {
    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;
    techBox[1].appendChild(image);
});

const project = [
    {
        "projectOrder" : "- 개인 프로젝트 1 -",
        "projectTitle" : "MapleStory : 고래 Guild",
        "projectTime" : "2024.01 ~ 2024.02",
        "projectCarouselImage" : [
            { "src" : "image/고래길드-main-1.png", "desc" : "◾ [메인 페이지]<br /> 1/10"},
            { "src" : "image/고래길드-main-2.svg", "desc" : "◾ [길드원 검색 & 닉네임 클릭 시 화면]<br /> 2/10"},
            { "src" : "image/고래길드-mail.png", "desc" : "◾ [메일 버튼 클릭 시 구현 화면]<br /> 3/10"},
            { "src" : "image/고래길드-detail.svg", "desc" : "◾ [상세보기 클릭 시 캐릭터 스펙 디테일 전체화면]<br /> 4/10"},
            { "src" : "image/고래길드-detail-stat.svg", "desc" : "◾ [상세보기 클릭 시 캐릭터 스펙 디테일 화면]<br />스탯 부분<br /> 5/10"},
            { "src" : "image/고래길드-detail-ability,hyper.svg", "desc" : "◾ [상세보기 클릭 시 캐릭터 스펙 디테일 화면]<br />어빌리티, 하이퍼스탯 부분<br /> 6/10"},
            { "src" : "image/고래길드-detail-title,equipment.png", "desc" : "◾ [상세보기 클릭 시 캐릭터 스펙 디테일 화면]<br />칭호, 장비 호버 화면<br /> 7/10"},
            { "src" : "image/고래길드-detail-pet,simbol.svg", "desc" : "◾ [상세보기 클릭 시 캐릭터 스펙 디테일 화면]<br />펫 호버, 심볼 부분<br /> 8/10"},
            { "src" : "image/고래길드-detail-skill.svg", "desc" : "◾ [상세보기 클릭 시 캐릭터 스펙 디테일 화면]<br />스킬 호버 화면<br /> 9/10"},
            { "src" : "image/고래길드-detail-union.svg", "desc" : " ◾ [상세보기 클릭 시 캐릭터 스펙 디테일 화면]<br />canvas로 구현 한 유니온 화면<br /> 10/10"},
        ],
        "carouselAlt" : "고래길드",
        "projectUrl" : "https://guild-one.vercel.app/",
        "projectSummary" : `<b>넥슨 공식 메이플스토리 API를 활용한 길드원 정보 검색 사이트</b>입니다.<br />
                            <b>React</b> 라이브러리와 <b>TailwindCSS</b>를 사용하여 아이디어를 실현할 수 있었던 의미있는 1인 프로젝트였습니다.`,
        "projectTechImage" : [
            {
                "src" : "./image/react.svg",
                "alt" : "react"
            },{
                "src" : "./image/reacthookform.svg",
                "alt" : "react-hook-form"
            },{
                "src" : "./image/reactquery.svg",
                "alt" : "react-query"
            },{
                "src" : "./image/reactrouter.svg",
                "alt" : "react-router"
            },{
                "src" : "./image/tailwind.svg",
                "alt" : "tailwindcss"
            }
        ],
        "projectTech" : `
                    ◾ 길드원 검색하여 상세정보 확인<br />
                    ◾ 길드원 목록에서 닉네임 클릭으로 상세정보 확인<br />
                    ◾ 장비, 하이퍼스탯, 어빌리티 프리셋 확인<br />
                    ◾ 메일로 의견 보내기`,
        "projectBackground" : `메이플스토리라는 게임에서 중요한 컨텐츠 중 하나는 "<b>길드</b>" 컨텐츠입니다.
                        "<b>길드</b>"는 여러 플레이어가 함께 모여 협력하고 소통하는 단체를 말합니다.
                        게임 내에서 유리한 위치에 있는, 소위 말해 <b>스펙(캐릭터의 능력치)이 높은 플레이어</b>가 길드 내에 많을수록 길드는 빠른 성장을 하게 되고
                        높은 레벨의 "<b>노블레스 길드스킬</b>"을 사용할 수 있습니다. 이 스킬은 메이플스토리에서 몬스터를 잡을 때 중요한 부분을 차지합니다.
                        그렇기 때문에 플레이어들은 <i><u><a href="https://maple.gg/" target="_blank">메이플GG</a></u></i>라는 전적검색 사이트를
                        통해 길드를 검색하여 길드 구성원들의 스펙을 확인하고 길드 가입 여부를 결정합니다.<br /><br />
                        길드를 가입하는 경로는 게임 내의 홍보를 보고 가입하는 경우도 있지만, 메이플인벤이라는 사이트에서 <b>길드 홍보글</b>을 보고 가입하는 경우가 많습니다.
                        그래서 제가 소속된 고래 길드만의 사이트를 만들어 유저가 메이플GG 사이트에 들어가서 길드를 검색해야 하는 번거로움을 줄이고
                        고래 길드에 대한 정보와 길드원들의 정보를 바로 볼 수 있도록 하여 보다 효율적인 <b>길드 홍보</b>를 위해 제작하였습니다.`,
        "projectMeaning" : `React로 처음 프로젝트를 진행해 본 경험은 정말 의미 있는 시간이었습니다.
                        그중 인상 깊었던 것은 React의 기능들 중 <b>React Hooks</b>를 이용해 효율적으로 상태관리를 하는 것이었습니다.
                        메일 보내기 기능을 구현할 때 <img src="./image/reacthookform.svg" alt="react-hook-form" /> 
                        라이브러리의 <b>useForm</b> 훅을 사용하여 Form 데이터의 유효성 검사를 간편하게 처리할 수 있었던 점과
                        API와 상호작용하기 위해 썼던 <img src="./image/reactquery.svg" alt="react-query" /> 
                        라이브러리의 <b>useQuery</b> 훅으로 데이터를 가져와 사용할 수 있었던 것이 가장 인상 깊었습니다.
                        <br /><br />
                        넥슨 메이플스토리 API는 캐릭터의 정보를 가져오기 위해 해당 캐릭터의 고유 id를 API에서 가져온 후, 그 고유 id를 다른 API에 전달하여 쓰도록 되어있는데
                        이 부분에서 어려움을 겪었으나 라우팅을 관리하기 위한 라이브러리인 <img src="./image/reactrouter.svg" alt="react-router" />
                        에서 제공하는 <b>Link</b> 컴포넌트를 사용해 URL에 고유 id를 전달하고,
                        <b>useParams</b> 훅을 이용해 URL에 전달된 데이터를 추출하여 <b>useQurey</b> 훅의 기능인 쿼리 키에 값을 동적으로 설정하여 API 요청을 보내는
                        것으로 해결하였습니다. 덕분에 이번 프로젝트는 React의 개념을 다시 한번 잡을 수 있었던 계기가 되었습니다.
                        <br /><br />
                        다음으로 <img src="./image/tailwind.svg" alt="tailwindcss">
                        와 React를 함께 사용한 경험은 매우 편리하였고 생산성을 높여주었습니다.
                        CSS 파일을 작성하지 않고 클래스를 사용하여 원하는 디자인 요소를 적용할 수 있었던 점과,
                        반응형 웹을 구현할 때 sm, md, lg, xl 등의 키워드를 통해 간편하게 적용할 수 있었던 점이 저에게는 굉장히 매력적으로 느껴졌습니다.
                        <br /><br />
                        이러한 경험을 통해 React에 대한 자신감이 높아졌으며, 앞으로의 보다 더 효율적으로 프로젝트를 구현할 수 있을 것이라고 기대하고 있습니다.
                        React는 지속적으로 발전하고 있는 기술이기 때문에 끊임없는 학습과 개선이 필요하지만, 그만큼 새로운 도전과 발견이 기다리고 있음을 알게 되었습니다.`
    },{
        "projectOrder" : "- 개인 프로젝트 2 -",
        "projectTitle" : "동서한약",
        "projectTime" : "2024.01.17 ~ 2024.01.31",
        "projectCarouselImage" : [
            { "src" : "image/동서한약-loding.png", "desc" : "◾ [로딩 페이지]<br /> 1/9"},
            { "src" : "image/동서한약-main-1.png", "desc" : "◾ [메인 페이지 1] 비디오 재생 화면<br /> 2/9"},
            { "src" : "image/동서한약-main-2.png", "desc" : "◾ [메인 페이지 2]<br /> 3/9"},
            { "src" : "image/동서한약-main-3.png", "desc" : "◾ [메인 페이지 3]<br /> 4/9"},
            { "src" : "image/동서한약-main-3(2).png", "desc" : "◾ [메인 페이지 3] 책 펼쳐짐 효과<br /> 5/9"},
            { "src" : "image/동서한약-main-4.png", "desc" : "◾ [메인 페이지 4]<br /> 6/9"},
            { "src" : "image/동서한약-sub-1.png", "desc" : "◾ [서브 페이지 1] 협력업체 메뉴 클릭 시 화면<br /> 7/9"},
            { "src" : "image/동서한약-sub-2.png", "desc" : "◾ [서브 페이지 2] 오시는길 메뉴 클릭 시 화면<br /> 8/9"},
            { "src" : "image/동서한약-logo.svg", "desc" : "◾ [figma를 이용한 로고 제작]<br /> 약재를 생각했을 때, 대표적으로 떠오르는<br /> 약재 주전자, 육계, 감초를 표현<br /> 9/9"},
        ],
        "carouselAlt" : "동서한약",
        "projectUrl" : "https://dong-seo-web.vercel.app/",
        "projectSummary" : `한의원(한의사)을 대상으로 약재 판매 및 수입/제조 <b>회사의 홍보, 소개를 위한</b> 사이트입니다.<br />
                            <b>GSAP</b> 라이브러리와 <b>jquery</b>를 사용하여 아이디어를 실현할 수 있었던 의미있는 1인 프로젝트였습니다.`,
        "projectTechImage" : [
            {
                "src" : "./image/html5.svg",
                "alt" : "html"
            },{
                "src" : "./image/css3.svg",
                "alt" : "css3"
            },{
                "src" : "./image/js.svg",
                "alt" : "javascript"
            },{
                "src" : "./image/jquery.svg",
                "alt" : "jquery"
            },{
                "src" : "./image/figma.svg",
                "alt" : "figma"
            }
        ],
        "projectTech" : `
                    ◾ 반응형 웹 구현<br />`,
        "projectBackground" : `동서한약은 한의원 및 한의사를 대상으로 약재를 판매하고 수입 및 제조하는 업체입니다. 
                            현재 많은 약재 사이트들이 모바일 환경을 충분히 지원하지 못하고 있으며, 구식 디자인에 머물러 있습니다. 
                            최근 젊은 한의사들의 활발한 개원이 이루어지고 있는데
                            이에 따라 신규 거래처를 영입하고자 현대적 디자인과 회사의 홍보 및 소개를 갖춘 <b>반응형 웹사이트</b>를 제작하게 되었습니다.`,
        "projectMeaning" : `이 프로젝트는 반응형 웹을 처음 배우고 진행한 것으로 모바일(360px), 태블릿(768px), PC(1024px) 등과 같은 <b>중단점</b>을 설정하고
                            Gutter, Columns 등 그리드를 설계하는 과정에서 많은 고민을 하고 <b>그리드 시스템</b>에 대해 배울 수 있었던 프로젝트입니다.<br /><br />

                            또한, <b>로딩 페이지</b>를 설정하여 <b>사용자 경험(UX)</b>을 고려하게 되었으며,
                            요즘 유행하는 웹사이트들처럼 애니메이션을 적용하여 더 흥미로운 사용자 경험을 만들고자 했습니다. 이를 위해 <b>GSAP</b>라는 애니메이션 라이브러리를 활용해보았습니다.
                            자바스크립트만으로는 어려운 스크롤 위치에 따른 복잡한 애니메이션 구현을 GSAP의 플러그인인 <b>ScrollTrigger</b>로 빠르고 쉽게 할 수 있었고,
                            GSAP의 <b>timeline()</b> 메서드를 이용해 연속적인 애니메이션 구현을 할 수 있었습니다.<br /><br />
                        
                            그리고 헤더와 푸터를 별도의 HTML 파일로 만들고, <img src="./image/jquery.svg" alt="jquery" />
                            를 사용하여 서브페이지에 동적으로 삽입하는 <b>모듈화 기능</b>을 처음 경험한 프로젝트입니다. 이를 통해 웹사이트의 구성 요소를 더욱 효율적으로 관리하고, 유지보수를 용이하게 할 수 있었습니다.<br /><br />
                            
                            이번 프로젝트를 통해 반응형 웹의 개념과 그리드 설계의 중요성을 깨달았고 새로운 라이브러리를 배워 적용하는 과정에서 성취감을 느낄 수 있었습니다.
                            `
    },{
        "projectOrder" : "- 팀 프로젝트 1 -",
        "projectTitle" : "바따구따",
        "projectTime" : "2024.04.26 ~ 2024.06.03",
        "projectCarouselImage" : [
            { "src" : "image/바따구따-main.png", "desc" : "◾ [메인 페이지]<br /> 1/9"},
            { "src" : "image/바따구따-login.png", "desc" : "◾ [로그인 페이지] 소셜 로그인 기능<br /> 2/9"},
            { "src" : "image/바따구따-join.png", "desc" : "◾ [로컬 회원가입 페이지]<br /> 3/9"},
            { "src" : "image/바따구따-profile-local.png", "desc" : "◾ [로컬 로그인 시 프로필 페이지] 회원정보 수정 기능 4/9"},
            { "src" : "image/바따구따-profile.png", "desc" : "◾ [카카오 로그인 시 프로필 페이지]<br />소셜 로그인 시 회원 정보 수정 불가<br /> 5/9"},
            { "src" : "image/바따구따-profile-change.png", "desc" : "◾ [프로필 페이지] 프로필 변경 기능<br /> 6/9"},
            { "src" : "image/바따구따-login-map.png", "desc" : "◾ [지도 페이지] 로그인 시 방문 한 장소 표시<br /> 7/9"},
            { "src" : "image/바따구따-stamp.png", "desc" : "◾ [스탬프 페이지] 방문 한 장소 스탬프 표시<br /> 8/9"},
            { "src" : "image/바따구따-qr.png", "desc" : "◾ [qr 페이지] 9/9"},
        ],
        "carouselAlt" : "바따구따",
        "projectUrl" : "https://port-0-project3-17xco2nlsjopaja.sel5.cloudtype.app/myPage",
        "projectSummary" : `우리술인 <b>전통주</b>를 홍보하기 위해 만들어진 <b>GPS 인증 하이브리드 웹앱</b> 팀 프로젝트 입니다.<br />
                            <b>ejs</b>를 처음 사용해본 것이 큰 의미가 있었고, <b>Node.js</b>를 이용해 서버를 구축해보며 서버와 클라이언트 간의 상호작용을 이해할 수 있었습니다.`,
        "projectTechImage" : [
            {
                "src" : "./image/html5.svg",
                "alt" : "html"
            },{
                "src" : "./image/css3.svg",
                "alt" : "css3"
            },{
                "src" : "./image/js.svg",
                "alt" : "javascript"
            },{
                "src" : "./image/nodejs.svg",
                "alt" : "node.js"
            },{
                "src" : "./image/mysql.svg",
                "alt" : "mysql"
            },{
                "src" : "./image/androidstudio.svg",
                "alt" : "android studio"
            },{
                "src" : "./image/firebase.svg",
                "alt" : "firebase"
            }
        ],
        "projectTech" : `
                    ◾ 로컬 회원가입 및 로그인 & 소셜 회원가입 및 로그인<br />
                    ◾ 프로필 사진 변경<br />
                    ◾ qr 코드 인증 및 GPS 인증<br />
                    `,
        "projectBackground" : `<b>양조장 스탬프 투어</b>를 통해 우리 술인 전통주의 가치를 홍보하며 
                            투어를 통해 경상도의 다양한 지역을 방문하는 관광객들로 인한 지역 경제 활성화를 기대하며
                            만들어진 팀 프로젝트입니다.<br /><br />
                            UI & UX 와 전반적인 기능을 개선하고 경상도에만 그치지 않고 전국적으로 서비스 지역을 확장한다면, 실제로 앱을 출시할 수 있을 것으로 생각합니다.`,
        "projectMeaning" : `팀으로 진행 한 프로젝트 중 세 번째 프로젝트입니다. 이번 프로젝트에서는 팀원들과의 원활한 소통으로 주제 선정이 신속하게 이루어지고, 
                            각자가 맡은 역할을 확실히 수행하여 프로젝트가 전반적으로 원활하게 진행되었습니다.<br /><br />

                            저는 <b>백엔드 개발</b>을 맡게 되었는데, 그 과정에서 <b>DB설계 및 구축</b>을 한 경험이 인상깊었습니다. 
                            무료로 DB서버를 제공하는 곳을 찾아 보다가 구글 클라우드 DB를 알게되고, 실제로 인스턴스를 생성하여 사용해보았습니다.
                            생성된 인스턴스의 IP주소를 이용해 직접 만든 DB서버에 <img src="./image/mysql.svg" alt="mysql" /> WorkBench
                            를 통해 연결했을 때의 쾌감은 잊지 못할 경험입니다.
                            그리고 <img src="./image/firebase.svg" alt="firebase" /> 스토리지를 
                            이용하여 이미지를 업로드하고 가져와 프로필 사진을 변경하는 기능도 만들어볼 수 있었던 기회였으며
                            <img src="./image/androidstudio.svg" alt="android studio" />
                            를 사용하여 실제 어플리케이션을 휴대폰에 설치하고 직접적인 결과물을 볼 수 있었던 것이 흥미로웠고 의미 있는 시간이었습니다.<br /><br />
                            두번째 팀 프로젝트에 이어 또 한번 백엔드 개발을 맡았는데, 여전히 어렵고 학습해야 할 지식이 많다는 부담감을 느꼈지만 그럼에도 불구하고 얻는 성취감과 뿌듯함은
                            이 분야가 충분히 매력적이고 개발에 대한 동기부여를 높여준다는 것을 다시 한번 느끼게 되었습니다.
                            `
    },{
        "projectOrder" : "- 팀 프로젝트 2 -",
        "projectTitle" : "Street Market",
        "projectTime" : "2024.03.27 ~ 2024.04.25",
        "projectCarouselImage" : [
            { "src" : "image/스트릿마켓-main-1.png", "desc" : "◾ [메인 페이지 1] 알림톡 신청 폼<br /> 1/9"},
            { "src" : "image/스트릿마켓-알림톡.png", "desc" : "◾ [신청 성공 시 카카오톡 알림톡]<br /> 2/9"},
            { "src" : "image/스트릿마켓-중복확인.png", "desc" : "◾ [신청 번호 중복 시 화면]<br /> 3/9"},
            { "src" : "image/스트릿마켓-main-2.png", "desc" : "◾ [메인 페이지 2] 회사 소개<br /> 4/9"},
            { "src" : "image/스트릿마켓-main-3.png", "desc" : "◾ [메인 페이지 3] 서비스 안내<br /> 5/9"},
            { "src" : "image/스트릿마켓-main-4.png", "desc" : "◾ [메인 페이지 4] 서비스 안내<br /> 6/9"},
            { "src" : "image/스트릿마켓-main-5.png", "desc" : "◾ [메인 페이지 5] 참가 신청 안내<br /> 7/9"},
            { "src" : "image/스트릿마켓-main-6.png", "desc" : "◾ [메인 페이지 6] 알림톡 안내<br /> 8/9"},
            { "src" : "image/스트릿마켓-main-7.png", "desc" : "◾ [메인 페이지 7] 주의사항 안내 및 푸터<br /> 9/9"},
        ],
        "carouselAlt" : "Street Market",
        "projectUrl" : "https://market-roan-rho.vercel.app/",
        "projectSummary" : `이번 프로젝트는 <b>SNS 마케팅을 위한 랜딩 페이지</b>로, React 프레임워크인 <b>Next.js</b>를 처음 배워가며 진행한 팀 프로젝트입니다.
                            <b>플리마켓</b> 셀러들이 더 편리하게 참가신청을 할 수 있고, 다양한 서비스를 받을 수 있도록 하여 플리마켓 문화의 발전을 위해 만들어졌으며
                            오픈 일정이 불확실하고 확인하기 어려운 플리마켓의 단점을 보완하고자 만들어진 페이지이기도 합니다.
                            `,
        "projectTechImage" : [
            {
                "src" : "./image/react.svg",
                "alt" : "react"
            },
            {
                "src" : "./image/nextjs.svg",
                "alt" : "next.js"
            },{
                "src" : "./image/mysql.svg",
                "alt" : "mysql"
            }
        ],
        "projectTech" : `
                    ◾ 카카오톡 알림톡 신청<br />
                    ◾ SNS 마케팅을 위한 랜딩 페이지
                    `,
        "projectBackground" : `플리마켓은 벼룩시장이라는 뜻도 있지만 최근의 플리마켓은 free와 혼용되어 임시장터 느낌으로 열리고 있습니다. 
                            하지만 플리마켓이 언제 진행되는지, 어디서 진행되는지에 대한 정보의 부족함과 더불어 여러 셀러들이 나오고 길거리에서 진행되는 경우가 많기 때문에 CS 서비스에 불편함을 겪는 고객이 많습니다.
                            이러한 점들을 해소하고, 고객뿐만 아니라 플리마켓에 참여를 원하는 셀러들을 위해 빠른 참가신청 및 일정 안내를 도와주기 위한 Street Market이라는 가상의 회사가 있다고 가정하고 만든 랜딩페이지입니다.<br /><br />`,
        "projectMeaning" : `<img src="./image/react.svg" alt="react" />
                            의 프레임워크인 <img src="./image/nextjs.svg" alt="next.js" />
                            를 처음 사용해 본 프로젝트입니다. 여기서 저는 백엔드 개발을 맡았는데, 랜딩페이지이기 때문에 백엔드의 기능이 많이 들어가진 않았지만 새로운 도전이었기에 이해를 하는 것부터 고비가 많았습니다.
                            먼저, 프레임워크이기 때문에 디렉토리의 구조에 맞게 작성을 해야 된다는 것이 편하지만 어쩌면 진입장벽이 있기도 했습니다. 
                            next.js는 폴더가 경로가 된다는 점에서 편리함이 있지만, api를 제작하는 데에 있어 어려움을 겪었습니다.
                            이번 프로젝트에서 <img src="./image/nextjs.svg" alt="next.js" /> 13 버전 부터
                            출시 된 <b>app router</b> 방식을 사용하였는데 이전의 page router 방식에 비해 비교적 최신 방식이라 정보가 부족하고 찾기가 힘들어 많이 헤매기도 했습니다.
                            하지만 강의를 들으며 기초를 하나씩 쌓아갔고 <b>Client Side Rendering</b>과 <b>Sever Side Rendering</b> 그리고 <b>Hydration</b>이라는 새로운 개념들을 알게 되었으며
                            결국 POST 요청에 성공하여 사용자 정보를 DB에 저장하고 알림톡을 전송하는 데 성공했을 때는 그 어느 때보다 큰 기쁨을 느꼈습니다.<br /><br />

                            그리고 사용자 정보를 DB에 저장할 때, 휴대폰 번호 <b>암호화</b>를 고려해 보았습니다.
                            처음에는 bcrypto 모듈을 이용했는데 저장이 될 때 암호화는 성공적으로 되었지만 같은 번호를 넣어도 다르게 암호화되는 바람에 중복 검사가 되지 않았습니다.
                            그래서 또 다른 모듈인 <b>crypto</b>를 써보았고, 중복 검사를 하는 데에 성공하였으며 추후 프로젝트를 개선할 때 등록된 사용자들에게 마케팅 메시지 전송을 위해 <b>복호화 함수</b>도 구현해두었습니다.<br /><br />

                            이 프로젝트는 정말이지 도전의 연속이었습니다. 굉장히 어려웠지만 새로운 기술과 개념을 익히는 과정에서 보람을 느꼈으며 그만큼 저 자신을 성장시킬 수 있는 기회였다고 생각되는 프로젝트였습니다.
                            `
    },{
        "projectOrder" : "- 팀 프로젝트 3 -",
        "projectTitle" : "Dogether",
        "projectTime" : "2024.02.26 ~ 2024.03.25",
        "projectCarouselImage" : [
            { "src" : "image/도게더-main-1.png", "desc" : "◾ [메인 페이지 1] 1/13"},
            { "src" : "image/도게더-main-2.png", "desc" : "◾ [메인 페이지 2] 카테고리 클릭 시 해당 페이지로 이동<br /> 2/13"},
            { "src" : "image/도게더-main-2-detail.png", "desc" : "◾ [디테일 페이지] 지역 메뉴 선택<br /> 3/13"},
            { "src" : "image/도게더-main-3.png", "desc" : "◾ [메인 페이지 3] 펫티켓 안내 화면<br /> 4/13"},
            { "src" : "image/도게더-main-4.png", "desc" : "◾ [메인 페이지 4] 이용 가이드 안내 및 푸터<br /> 5/13"},
            { "src" : "image/도게더-login.png", "desc" : "◾ [로그인 페이지]<br /> 6/13"},
            { "src" : "image/도게더-join-1.png", "desc" : "◾ [회원가입 시 약관 동의 페이지]<br /> 7/13"},
            { "src" : "image/도게더-board-1.png", "desc" : "◾ [커뮤니티 글쓰기]<br /> 8/13"},
            { "src" : "image/도게더-board-2.png", "desc" : "◾ [글 목록]<br /> 9/13"},
            { "src" : "image/도게더-board-3.png", "desc" : "◾ [글 클릭 시 디테일 페이지]<br /> 10/13"},
            { "src" : "image/도게더-admin-1.png", "desc" : "◾ [관리자 페이지] 회원 등급 수정 관리<br /> 11/13"},
            { "src" : "image/도게더-admin-2.png", "desc" : "◾ [관리자 페이지] 게시글 삭제 관리<br /> 12/13"},
            { "src" : "image/도게더-info.png", "desc" : "◾ [회원정보 수정 페이지]<br /> 13/13"},
        ],
        "carouselAlt" : "Dogether",
        "projectUrl" : "http://dogether.dothome.co.kr/dogether_php_ver/",
        "projectSummary" : `반려견 동반이 가능한 시설을 알려주는 목적으로 만들어진 웹 사이트입니다.
                            첫번째 팀 프로젝트인 만큼 <b>php</b>, <b>SNS 연동</b>, <b>Git 협업</b> 등 처음 해 본 것들이 많았던 프로젝트입니다.
                            `,
        "projectTechImage" : [
            {
                "src" : "./image/php.svg",
                "alt" : "php"
            },
            {
                "src" : "./image/html5.svg",
                "alt" : "html"
            },{
                "src" : "./image/css3.svg",
                "alt" : "css"
            },{
                "src" : "./image/js.svg",
                "alt" : "javascript"
            },{
                "src" : "./image/mysql.svg",
                "alt" : "mysql"
            }
        ],
        "projectTech" : `
                    ◾ 카테고리에 따른 애견동반 시설 위치를 지역별로 확인<br />
                    ◾ 로그인 및 회원가입, 회원정보 수정<br />
                    ◾ 게시판 CRUD<br />
                    ◾ 관리자 모드
                    `,
        "projectBackground" : `
                            반려견을 키우는 가구가 많아짐에 따라, 반려견 동반 가능 여부가 시설 방문에 중요한 요소가 되고 있습니다. 
                            반려견을 키우지 않는 사람은 이 점이 꼭 필요한가 하는 생각이 들 수 있지만, 반려견을 키우는 사람의 입장에서는 <b>동반</b>이 가능한 것 자체가 큰 메리트입니다. 
                            의외로 동반 가능 시설에 대한 정보를 쉽게 찾기 어려워 저도 반려견을 키우는 사람으로서 큰 고충을 느꼈습니다. 이에 팀원들과 상의한 후, 이 주제를 선택하게 되었습니다.
                        `,
        "projectMeaning" : `첫 프로젝트였지만 팀원들과 화기애애한 분위기 속에서 재밌게 진행했던 프로젝트였습니다. 
                            저는 <b>프론트엔드와 백엔드 개발</b>을 맡게 되었는데 이번 프로젝트에서는 하나의 API가 아닌 여러 개의 API를 사용했습니다. 
                            그 중 카페, 미술관, 동물병원, 미용실 등 다양한 시설이 포함된 API가 있었습니다. 이를 나누고 렌더링과 API 호출 시 중복 코드를 방지하기 위해 함수를 만드는 데 집중했습니다.
                            덕분에 코드 재사용에 대한 중요성과 효율성을 느꼈으며 함수를 사용하는 것에 한걸음 더 가까워진 기분이 들었습니다.<br /><br />
                            <img src="./image/php.svg" alt="php" />를 처음 사용해보면서
                            <img src="./image/js.svg" alt="javascript" />와 문법을 비교해보았으며
                            <img src="./image/php.svg" alt="php" />코드가
                            <img src="./image/html5.svg" alt="html">파일 내에 
                            삽입되어 동적인 웹 페이지를 생성할 수 있는 점이 매력적으로 다가왔습니다.
                            이전에는 <img src="./image/js.svg" alt="javascript" />에서
                            함수를 주로 사용하였지만 <img src="./image/php.svg" alt="php" />로
                            <b>SNS 연동</b>을 구현 하면서 <b>class</b>를 사용하게 되었습니다. 이 과정에서 생소함과 어려움을 느끼게 되었지만, 더 깊이 공부하고 싶은 열정이 생겼습니다.
                            그리고 하나의 프로젝트 내에서 클라이언트 요청을 처리하는 서버 파일을 직접 코딩한 경험은 백엔드 개발에 대한 흥미를 더욱 높일 수 있었습니다.<br /><br />
                            또한, <b>dothome</b>에서 제공하는 서버와 DB를 사용하여 호스팅하는 동안, 로컬 환경에서 서버로 파일을 이동할 때 요청 주소를 변경해야 하는 번거로움이 있었습니다.
                            그러나 서버와 DB를 한 곳에서 관리할 수 있어 편리했습니다. 나중에는 로컬 코드와 호스팅 코드를 분리하여 관리하고 싶다는 생각이 들었습니다.<br /><br />
                            마지막으로, 저희 팀은 <b>Git</b>을 사용하여 협업할 때 <b>main branch</b>를 중심으로 하여 필요에 따라 다른 branch를 만들어 작업을 수행한 후 병합하고 삭제하는 방식을 채택했습니다. 
                            이 과정을 통해 여러 branch 전략이 존재한다는 것을 처음 알게 되었습니다.
                            Git으로 협업해 본 것이 처음이라 충돌이 날 때마다 여러 번 헤맸지만 팀원들과의 소통을 통해 문제를 해결해 나갈 수 있었습니다.
                            `
    },
];


function elementCreate({ tag, content, className, src, alt, id, href, target, textContent, parentElement }) {
    const element = document.createElement(tag);
    if (content) element.innerHTML = content;
    if (className) element.className = className;
    if (src) element.src = src;
    if (alt) element.alt = alt;
    if (id) element.id = id;
    if (href) element.href = href;
    if (target) element.target = target;
    if (textContent) element.textContent = textContent;
    if (parentElement) parentElement.appendChild(element);

    return element;
}

// 프로젝트 전체 컨테이너
const projectContainer = document.querySelector(".project-container");
project.forEach((item, index) => {
    // 프로젝트 단락
    const article = elementCreate({ tag : "article", className : `project-content project-${index + 1}`})
    
    // 타이틀 div
    const titleDiv = elementCreate({ tag: "div", className : "project-title", parentElement : article });
    // 타이틀 순서, 타이틀, 기간
    elementCreate({ tag: "p", content : item.projectOrder, parentElement : titleDiv });
    elementCreate({ tag: "p", content : item.projectTitle, parentElement : titleDiv });
    elementCreate({ tag: "p", content : item.projectTime, parentElement : titleDiv});

    // slickslider
    const slick = elementCreate({ tag: "div", className : `post-slider post-slider-${index + 1}`, parentElement : article });
    elementCreate({ tag: "div", content : "<i class='button fa-solid fa-angle-left'></i>", className : `prev-button prev-button-${index + 1}`, parentElement : slick });
    elementCreate({ tag: "div", content : "<i class='button fa-solid fa-angle-right'></i>", className : `next-button next-button-${index + 1}`, parentElement : slick });
    elementCreate({ tag: "p", content : "<i class='fa-regular fa-images'></i> 페이지 구성", parentElement : slick });

    // slider 이미지박스
    const slickPost = elementCreate({ tag: "div", className : "post-wrapper", parentElement : slick });
    // 이미지 추가
    item.projectCarouselImage.forEach((image) => {
        // 이미지 박스
        const post = elementCreate({ tag: "div", className : "post", parentElement : slickPost });
        // 이미지, 이미지 설명
        elementCreate({ tag: "img", src : image.src, alt : item.carouselAlt, id : "contain-img", parentElement : post });
        elementCreate({ tag: "p", content : image.desc, parentElement : post });
    });

    // url 박스
    const url = elementCreate({ tag: "p", className : "url", parentElement : article });
    elementCreate({ tag: "a", content : `<i class="fa-solid fa-anchor"></i> ${item.projectUrl}`,
        href : item.projectUrl, target : "_blank", parentElement : url });

    // 프로젝트 설명 시작
    const projectDesc = elementCreate({ tag: "div", className : "project-desc", parentElement : article });

    // 프로젝트 설명 <summary>
    elementCreate({ tag: "p", content : "Summary <i class='fa-solid fa-thumbtack'></i>", className : "desc-title", parentElement : projectDesc });
    elementCreate({ tag: "p", content : item.projectSummary, parentElement : projectDesc });
    // <summary> tech stack
    elementCreate({ tag: "p", content : "<br /><i class='fa-solid fa-check'></i> Technology Stack", parentElement : projectDesc });
    // tech stack 이미지
    const figure = elementCreate({ tag: "figure", parentElement : projectDesc });
    item.projectTechImage.forEach((techImage) => {
        elementCreate({ tag: "img", src : techImage.src, alt : techImage.alt, parentElement : figure });
    });
    // <summary> 주요 기능
    elementCreate({ tag: "p", content : "<i class='fa-solid fa-check'></i> 주요 기능<br />", parentElement : projectDesc });
    elementCreate({ tag: "p", content : item.projectTech, parentElement : projectDesc });

    // -------------------- 구분선 --------------------
    elementCreate({ tag: "div", parentElement : projectDesc });

    // 프로젝트 설명 <background>
    elementCreate({ tag: "p", content : "Background <i class='fa-solid fa-thumbtack'></i>", className : "desc-title", parentElement : projectDesc });
    elementCreate({ tag: "p", content : item.projectBackground, parentElement : projectDesc });

    // -------------------- 구분선 --------------------
    elementCreate({ tag: "div", parentElement : projectDesc });

    // 프로젝트 설명 <meaning>
    elementCreate({ tag: "p", content : "Meaning <i class='fa-solid fa-thumbtack'></i>", className : "desc-title", parentElement : projectDesc });
    elementCreate({ tag: "p", content : item.projectMeaning, parentElement : projectDesc });

    // 최종 추가
    projectContainer.appendChild(article);
});