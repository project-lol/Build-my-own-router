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

<br>

### 라우터 등록하기

- 각 페이지별로 렌더링 할 컴포넌트를 매핑한다.

```js
const main = async () => {
  await loadAllPages()
  rootDiv.innerHTML = home
  routes = {
    "/": home,
    "/contact": contact,
    "/about": about,
  }
}

// Invoke the Main function
main()
```

### navigate

- 네비게이션을 클릭하면, 해당 페이지로 이동한다.

```js
/**
 *
 * @param {String} pathname - Pass the 'pathname' passed from onClick function of the link (index.html)
 * The function is invoked when any link is clicked in the HTML.
 * The onClick event on the HTML invokes the onNavClick & passes the pathname as param
 */
const onNavClick = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname)
  rootDiv.innerHTML = routes[pathname]
}
```

- pushState()를 사용하여 브라우저의 세션 히스토리에 새로운 상태를 추가한다.
- 해당 상태에 맞는 페이지를 렌더링한다.

<br>

### onpopstate

- 뒤로가기, 앞으로가기 버튼을 눌렀을 때 발생하는 이벤트이다.

```js
/**
 * The Function is invoked when the window.history changes
 */
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}
```
