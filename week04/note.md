### 製作需求

- 製作登入
- 顯示產品列表
- 分頁功能 (meta -> pagination) 
    - 取得分頁
    - 了解分業結構
分頁使用方式：
1. 變成元件，使用 export 跟 import
2. main.js 取得 data.meta.pagination 資料
3. pagination.js 接收遠端資料使用 props:['pages']
4. product.html 加入 :page="pagination" (使用 Vue 擴充元件即可看到)
5. pagination.js 將寫死的 List 使用 v-for 取得遠端總分頁數 pages.total_pages
6. 點擊觸發連結頁面：
    - main.js -> url 新增 ?page=${num}
    - pagination.js -> a 連結加入 @click (如果是 a，記得再多加 @click.prevent，避免其他事件觸發)
7. product.html 加入監聽事件 @update="getProducts"

- 新增/編輯產品
    - 產生元件
    - 取得遠端資料
    - 更新資料 (emit)
使用方式：
1. :edit-product ( - 可變成大寫)
- 刪除

### 製作順序
1. 先製作跟「資料結構」有關
2.  