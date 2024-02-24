리덕스 연습하는 프로젝트 - 연락처 앱

리덕스를 어떤걸 구현했느냐?
이름과 핸드폰 번호를 입력해서 form에서 바꿀때 dispatch로 상태를 바꾸도록(연락처추가하기) reducer에 지시를 내렸다
그리고 나서 보여줘야하는 인적사항리스트에서 use셀렉터로 가져와서 list를 사용했다.
search를 할때도 dispatch로 ketword를 넘겨줬다 인정사항리스트에서 셀렉터로 가져와서 useEffect로 지켜보고 있다가 만약keyword가 있다면 filter로 name을 걸러줘서
반환한 배열로 인정사항을 뿌리게 했다.
