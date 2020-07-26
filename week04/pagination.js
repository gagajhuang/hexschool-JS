export default{
    template:`
    <!-- 分頁 -->
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <!-- 上一頁 -->
            <li class="page-item" :class="{'disabled': pages.current_page === 1}">
                <a class="page-link" href="#" @click.prevent="updatePage(pages.current_page - 1)">Previous
                </a>
            </li>
            <!-- 頁數 -->
            <li class="page-item" v-for="(item, index) in pages.total_pages" :key="index" :class="{ active: pages.current_page === item }">
                <a class="page-link" href="#"
                @click.prevent="updatePage(item)">{{ item }}
                </a>
            </li>
            <!-- 下一頁 -->
            <li class="page-item" :class="{'disabled': pages.current_page === pages.total_pages}">
                <a class="page-link" href="#" @click.prevent="updatePage(pages.current_page + 1)">Next
                </a>
            </li>
        </ul>
    </nav>`,
    props:['pages'],// 顯示在 html ，前內(pages)後外(props)
    methods:{
        updatePage(num){
            console.log(num);
            // 觸發並呼叫外層事件
            this.$emit('update', num)
        }
    },
}