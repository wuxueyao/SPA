### 数据存储

- 状态保持 数据持久化
- 应用程序包括的数据：
    - 主体数据和状态数据
    - 要存储的数据也是包括主体数据和状态数据
- 存储的分类：
    - 位置：服务端存储，浏览器存储

- 客户端存储：
    - 敏感数据应该放在服务器存储
    - 键值对存储：
        cookie：历史最久，会把数据添加到http的请求头里边
        local storage：永久存储
        session storage：浏览器窗口关闭，数据丢失
    - indexDB：类似于数据库


1. cookie：
    - 浏览器控制台输出：
        document.cookie
        document.cookie.split(';') （得到的是数组）
        document.cookie = 'name=111'(给cookie中添加数据)

2. localStorage：
    - window.localStorage
    - 存储图片：
        - 用base64存储也行：