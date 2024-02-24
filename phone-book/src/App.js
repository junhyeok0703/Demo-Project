/*
1. 왼쪽에는 form으로 연락처를 등록 , 오른쪽 서치창이랑 연락 리스트가있다
2. 등록하면 리스트에 추가됨
3. 리스트의 아이템 몇개인지 보인다.
4. 사용자가 유저를 이름검색으로 찾을수있다.
*/

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <Container>
      <h1 className="text-center m-3">Phone Book</h1>
      <Row>
        <Col className="border-column">
          <ContactForm />
        </Col>
        <Col>
          <ContactList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
