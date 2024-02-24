# 쇼핑물프젝다시만들어보기

## - json-server

json-server이라는 db.json을 서버처럼 사용할수있다.
fetch를 이용해서 받아왔다. 그후에 productlist에다가 넣어줬다.
restful api 규칙을 지켜서 가져와서 보여줄때 용이하다.

## - form , submit

로그인같은 form같은거를 써서 버튼을 누르면
주의해야될상황은 새로고침이 된다.
form은 로그인정보를 받고 서버한테 줘야되서 onSubmit이벤트를
줘야함
preventDefault를 써줘야지 새로고침을 막아준다.

## - 리다이렉션할때

privatepage를 설정하자 - 디테일페이지가 프라이빗페이지라고 가정하에
privatepage라는 것을 만들어서
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ logged }) => {
return logged === true ? <ProductDetail /> : <Navigate to="/login" />;
};
이런식으로 Navigate로 리다이렉션해준다음에
디테일페이지 Route할때
<Route path="/product/:id" element={<PrivateRoute logged={logged} />} />
이런식으로 privatepage으로 설정한다
이 데이터에서는id값이 각자있기떄문에 url를 설정할수있다.
const ProductItem = ({ item }) => {
const navigate = useNavigate();
const GoDeatilpage = () => {
navigate(`/product/${item.id}`);
};
return (

  <div onClick={GoDeatilpage} className="card-border">
  <img src={item.img} width={200} height={200} />
  <h5>{item.title}</h5>
  <h6>{item.price}</h6>
  <p>{item.new && "신제품"}</p>
  </div>
  );
  };
  이런식으로 디테일페이지item을 클릭했을때 
  useNavigate로 어디로갈지 설정해준다. 
  만약 item을 누르게 되면 product/1로 간다고 생각하게 되면 
  그때 privatepage가 나타나서 logged상태면 product/1이대로 반환
  하고 아니면 loginpage를 반환하게 된다.

## 디테일페이지 만들어야되는데 어떻게 데이터를 주지?

그럼 json-server에 요청하면 되는것이다.
