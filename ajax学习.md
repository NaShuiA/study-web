## 1.ajax介绍

- 什么是ajax？

  * AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术
  * AJAX = 异步 JavaScript 和 XML。
    AJAX 是一种用于创建快速动态网页的技术。
    通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
    传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。
    有很多使用 AJAX 的应用程序案例：新浪微博、Google 地图、开心网等等

- ##### AJAX 工作原理

  ![](https://upload-images.jianshu.io/upload_images/2323089-40f414ef9fc88472.gif?imageMogr2/auto-orient/strip)

  

  ## 2 为什么我们需要Ajax？

  在我们之前的开发，每当用户向服务器发送请求，**哪怕只是需要更新一点点的局部内容，服务器都会将整个页面进行刷新。**

  - **性能会有所降低(一点内容，刷新整个页面！)**
  - **用户的操作页面会中断(整个页面被刷新了)**

  **Ajax就是能够做到局部刷新**！

  ## XMLHttpRequest

  **XMLHttpRequest对象是Ajax中最重要的一个对象**。**使用Ajax更多的是编写客户端代码**，而不是服务端的代码。

  

  ## 创建XMLHttprequest

  ```javascript
  var xml = new XMLHttpRequest();
  ```

  

  ### **方法**

  - `open()(String method,String url,boolean asynch,String username,String password)`**该方法创建http请求**
    - **第一个参数是指定提交方式(post、get)**
    - **第二个参数是指定要提交的地址是哪**
    - **第三个参数是指定是异步还是同步(true表示异步，false表示同步)**
    - 第四和第五参数在http认证的时候会用到。是可选的
  - `send(content)`
    - **如果是get方式，并不需要填写参数，或填写null**
    - **如果是post方式，把要提交的参数写上去**
  - `setRequestHeader(String header,String value)`设置消息头（使用post方式才会使用到，get方法并不需要调用该方法）
    - `xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");`
  - getAllResponseHeaders()
  - getResponseHeader(String header)
  - abort()

  ### **属性**

  - **onreadystatechange：请求状态改变的事件触发器（readyState变化时会调用此方法），一般用于指定回调函数**
  - readyState：请求状态readyState一改变，回调函数被调用，它有5个状态
    - 0：未初始化
    - 1：open方法成功调用以后
    - 2：服务器已经应答客户端的请求
    - 3：交互中。Http头信息已经接收，响应数据尚未接收。
    - **4：完成。数据接收完成**
    - **responseText：服务器返回的文本内容**
    - **responseXML：服务器返回的兼容DOM的XML内容**
    - **status：服务器返回的状态码**
    - statusText：服务器返回状态码的文本信息

  # 编写第一个Ajax程序

  

  

