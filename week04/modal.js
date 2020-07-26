export default {
  template:`
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
        <div class="modal-header bg-dark text-white">
            <h5 class="modal-title" id="exampleModalLabel">新增產品</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" class="text-white">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div>
                <form role="form" class="row">
                    <div class="col-sm-8">
                        <div class="form-group">
                            <label for="title">標題</label>
                            <input id="title" class="form-control" type="text" placeholder="輸入標題" v-model="editProduct.title" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="category">分類</label>
                                <input id="category" class="form-control" type="text" placeholder="輸入分類" v-model="editProduct.category" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="unit">單位</label>
                                <input id="unit" class="form-control" type="unit" placeholder="輸入單位" v-model="editProduct.unit" />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="origin_price">原價</label>
                                <input id="origin_price" class="form-control" type="number" placeholder="輸入原價" v-model="editProduct.origin_price" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="price">售價</label>
                                <input id="price" class="form-control" type="number" placeholder="輸入售價" v-model="editProduct.price" />
                            </div>
                        </div>
                        <hr />
                        <div class="form-group">
                            <label for="description">產品描述</label>
                            <textarea id="description" class="form-control" type="text" placeholder="輸入產品描述" v-model="editProduct.description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="content">說明內容</label>
                            <textarea id="content" class="form-control" type="text" placeholder="輸入說明內容" v-model="editProduct.content"></textarea>
                        </div>

                        <div class="form-group">
                            <div class="form-check">
                                <input
                                    id="is_launched"
                                    class="form-check-input"
                                    type="checkbox"
                                    v-model="editProduct.launched"
                                />
                                <label class="form-check-label" for="is_launched">是否上架</label>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="imageUrl">圖片連結</label>
                            <input id="imageUrl" class="form-control" type="text" placeholder="輸入圖片連結" v-model="editProduct.imageUrl[0]" />
                        </div>
                        <img class="img-fluid" :src="editProduct.imageUrl" />
                    </div>
                </form>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateProduct()">確認</button>
        </div>
    </div>
</div>
`,
// 定義內層的資料結構
  data(){
    return{
      // editProduct:{}
    }
  }, 
  props: ['status','editProduct','api'],
  methods:{
    updateProduct(){
        let apiUrl = `${this.api.path}${this.api.uuid}/admin/ec/product`;
        let useMethod = 'post';

        if (!this.status) {
            apiUrl = `${this.api.path}${this.api.uuid}/admin/ec/product/${this.editProduct.id}`;
            useMethod = 'patch';
            // console.log(this.editProduct.id);
        }
        // console.log(this.status);
        // console.log(useMethod);
        axios[useMethod](apiUrl, this.editProduct).then(response =>{
            $('#productModal').modal('hide');
            // 觸發並呼叫外層事件
            this.$emit('update');
        });  
    }
  },
}
// const apiUrl =`${this.api.path}${this.api.uuid}/admin/ec/product/${this.editProduct.id}`;
//         // console.log(this.editProduct.id);
//         axios.patch(apiUrl, this.editProduct).then(response =>{
//             // console.log(response)
            
//             // 觸發並呼叫外層事件
//             this.$emit('update');
//         });