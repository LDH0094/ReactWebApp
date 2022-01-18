# RollingPaperWebApp



## Spring boot와 Axios를 사용한  비동기형 api 호출 

# 프로젝트 요약
이 프로젝트는 인공지능 프로젝트 전문가 양성 과정의 backend와 frontend의 미니 프로젝트의 일환으로서, 기본적인 CRUD와 http 통신을 활용하는 방식으로 제작되었습니다.

- 구성원

  이 효진 (리더, 기획 및 프론트 & 백엔드 제작)
  
  이 덕현 (팀원, 프로그램 구조및 설계)


## 프로젝트 설명

본 프로젝트는 롤링페이퍼의 취지에 맞게, ‘공유’ 란 키워드를 중점적으로 개발을 하였습니다. 유저는 회원가입과 로그인을 한뒤, 로그인 정보를 db에서 확인 및 return 값으로 해당 롤링 페이퍼를 전달 받을 친구의 이름을 불러옵니다. 


![login](/frontend/src/images/login.png), 회원가입 스샷1


롤링 페이퍼화면은 localhost:3000/rolling/{발송 받을 친구 이름}에 위치 되어 있고 해당 unique url은 url parameter로서 롤링 페이퍼 화면에 출력되게 됩니다.

초기에 롤링 페이퍼 화면은 아무런 포스트도 출력되지 못한, 즉 db에서 아무런 정보를 가져오지 못한 상태입니다.

저희 팀은 리액트의 강점인 WebApp의 특성을 살려, 포스트를 생성 할때마다 프로그램에서 이를 인식한뒤 포스트가 출력되는 부분에 해당하여 재 랜더링을 해 브라우저 전체가 refresh되는 것을 방지하였습니다. 

```React
  const { rollingId } = useParams();
  // const [notes, setNotes] = useState(
  //   JSON.parse(localStorage.getItem("notes-app")) || []
  // );
  const [notes, setNotes] = useState([])
  useEffect(() => {

    let idBody = {
      name: rollingId
    }
    axios
    .post("/api/post", idBody)
    .then((res) => setNotes(res.data))
    
  })
  




```Java

  
    
