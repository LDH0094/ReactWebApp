# RollingPaperWebApp



## Spring boot와 Axios를 사용한  비동기형 api 호출 

# 프로젝트 요약
이 프로젝트는 인공지능 프로젝트 전문가 양성 과정의 backend와 frontend의 미니 프로젝트의 일환으로서, 기본적인 CRUD와 http 통신을 활용하는 방식으로 제작되었습니다. 
Frontend는 React로 Backend는 Spring boot로 따로 나누어서 개발을 하였고, React의 3000번대 포트는 proxy를 통해 Spring boot의 8080번대와도 통신이 가능하도록 만들었습니다. 


- 제작 기간은 약 8일 정도 소요됐으며, 구성원은 다음과 같습니다.  

  이 효진 (리더, 기획 및 프론트 & 백엔드 제작)
  
  이 덕현 (팀원, 프로그램 구조및 설계)


## 프로젝트 설명

본 프로젝트는 롤링페이퍼의 취지에 맞게, ‘공유’ 란 키워드를 중점적으로 개발을 하였습니다. 유저는 회원가입과 로그인을 한뒤, 로그인 정보를 db에서 확인 및 return 값으로 해당 롤링 페이퍼를 전달 받을 친구의 이름을 불러옵니다. 


![login](/frontend/src/images/readme/login.png){ width=50% } , ![create](/frontend/src/images/readme/create_account.png){ width=50% }


롤링 페이퍼화면은 localhost:3000/rolling/{발송 받을 친구 이름}에 위치 되어 있고 해당 unique url은 url parameter로서 롤링 페이퍼 화면에 출력되게 됩니다.



## 프론트 엔드
Paper.js에서 unique url parameter에서 {발송 받을 친구의 이름} 을 가져온뒤 그 이름(rolldingId)를 api 전송, db에서 해당되는 이름과 연결된 포스트 전부를 가져옵니다.

하지만 초기에 롤링 페이퍼 화면은 아무런 포스트도 출력되지 못한, 즉 db에서 아무런 정보를 가져오지 못한 상태입니다.


```Jsx
  const { rollingId } = useParams();
  const [notes, setNotes] = useState([])
  useEffect(() => {

    let idBody = {
      name: rollingId
    }
    axios
    .post("/api/post", idBody)
    .then((res) => setNotes(res.data))
    
  })
```
저희 팀은 리액트의 강점인 WebApp의 특성을 살려, 포스트를 생성 할때마다 프로그램에서 이를 인식한뒤 포스트가 출력되는 부분에 해당하여 재 랜더링을 해 브라우저 전체가 refresh되는 것을 방지하였습니다. 
```Jsx
    
  const addNote = (color) => {
    let tempNotes = {
      id: parseInt(Date.now() + "" + Math.floor(Math.random() * 78)),
      text: "",
      time: Date.now(),
      color,
      name:rollingId
    };
    console.log(tempNotes)
    axios
    .post("/api/post/doPost", tempNotes)
    .then((res) => console.log(res))
  };
```
요약하자면, 
노트가 추가 될때 마다, 최상단의 useEffect()에서 db에서 지속적으로 post를 불러와, 유저가 포스트 생성을 클릭시 -> db에 해당 포스트의 랜덤으로 만들어진 id, 빈 text, 시간, color, name: rollingId가 실시간으로 저장되고 -> 이를 리액트가 인식해, 랜더링을 refresh없이 빠르게 화면에 뿌려줍니다.




## 백엔드

백엔드 설계를 할때 저희 팀은 최대한 기능들을 MVC 패턴에 맞추어 개발하려고 노력했습니다. 모든 api를 담당하는 폴더는 controller에, db와 관련된 .java는 domain에, SaveRequestDto는 dto에, 마지막으로 비지니스 로직을 담당하는 .java는 service파일에 나누어서 개발하였습니다. 


<img src="/frontend/src/images/readme/backend_path.png" width="30%">

아래는 api를 @RequestBody를 통해 받는 모습을 확인할 수 있습니다.
```Java
  @RequiredArgsConstructor
  @RestController
  public class PostApiController {

      private final PostRepository postRepository;
      private final PostService postService;

      @PostMapping("/api/post")
      public List<Post> getPost(@RequestBody PostSaveRequestDto requestDto){
          List<Post> postInfo = postRepository.showPosts(requestDto.getName());
          return postInfo;
      }

      @PostMapping("/api/post/doPost")
      public Long save(@RequestBody PostSaveRequestDto requestDto) {
          return postService.save(requestDto);
      }

      @PostMapping("/api/post/update")
      public Long update(@RequestBody PostSaveRequestDto requestDto) {
          return postService.update(requestDto.getId(), requestDto.getText());
      }


      @PostMapping("/api/post/delete")
      public void delete(@RequestBody PostSaveRequestDto requestDto) {
          postService.delete(requestDto.getId());
      }
  };
```
  
    
