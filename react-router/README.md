# react-router연습

- react-router-bom - 라우터의 기능들을 제공 (spa인 리액트를 mpa처럼 만들어줌)
- useNavigate - 이것도 똑같은데 훅써서 변수에 훅을 넣고 그변수는 함수가되고 이동할수있도록하는 네비게이션이됨. 버튼에 넣을수있음 버튼에 함수넣어서 함수를 실행해야 가능
- Link - url을 이동함 (a태그와 같은데 새로고침안댐)
- route - url로 지정하여 spa로 만들어줌
- routes - route들 스위치하는 역할
- Restful url - url의 디자인 패턴
- useParams - 디테일페이지를 만들때 url에서 읽어와서 어떤 아이템을 보여줄지 url에서 값들을 꺼내올수있음 (useNavigate랑 선언할때 똑같음) 객체를 반환해주고 id가 자동으로 키값이 들어감
  ex) localhost3000/product/11/33
  -> path="/product/:id/:num이런식으로 써준결과 id:11, num:33이거를 객체로 뺴줌
- BrowserRoute - 컴포넌트를 감싸면 넌 Route를 쓸수있어 이런식으로 정의해주는것같음.
- useSearchParams - 파라미터값말고 쿼리값을 가져올때 ?q=adsda이런거&page=1 추가적인 조건,정보를 가져올때
  (페이지의 경로에 영향을 미치지않는다.)
  let [query, setQuery] = useSearchParams();
  console.log("pants", query.get("q"));
  이런식으로 쿼리문을 가져온다.
- Redirect (리다이렉션 - 페이지를 보호하는방법. 만약 로그인하지않는자가 마이페이지에 들어온경우!)
- Navigate - 가면안되는페이지설정(ex: const [isUser, setIsUser] = useState(false);
  const PrivateRoute = () => {
  return isUser === true ? <User /> : <Navigate to="/login" />;
  };)
  <Route path="/user" element={<PrivateRoute />} />
