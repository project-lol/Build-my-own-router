# Build My Own Router

> 나만의 SPA 라우터를 만들며 학습하는 프로젝트입니다.

참고자료 : [Build a custom SPA Router using VanillaJS](https://blog.skay.dev/custom-spa-router-vanillajs)

<br>

## What I Learned

### History Object

- window.history는 브라우저의 세션 히스토리를 조작할 수 있는 객체이다. 브라우저의 뒤로가기, 앞으로가기, 새로고침 등의 기능을 구현할 때 사용된다.

<br>

### Location Object

- window.location은 현재 페이지의 URL 정보를 담고 있는 객체이다. URL의 정보를 가져오거나 변경할 때 사용된다.

<br>

### History - pushState()

- pushState()는 브라우저의 세션 히스토리에 새로운 상태를 추가한다.
- 이 메서드를 페이지를 네이게이션 할 때 사용할 것이다.

```js
Syntax: history.pushState(state, title, [, url])
```

- state : 새로운 상태를 나타내는 객체
- title : 새로운 상태를 나타내는 문서의 제목
- url : 새로운 상태를 나타내는 문서의 URL

<br>

### History - pop event

- pop event는 브라우저의 뒤로가기, 앞으로가기 버튼을 눌렀을 때 발생하는 이벤트이다.
- 이 이벤트를 사용하여 뒤로가기, 앞으로가기 버튼을 눌렀을 때 페이지를 네이게이션 할 것이다.
