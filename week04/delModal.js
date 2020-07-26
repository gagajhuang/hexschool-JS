export default {
    template:`
    <div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header bg-danger text-white">
			    <h5 class="modal-title" id="exampleModalLabel">刪除產品</h5>
			    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true" class="text-white">&times;</span>
			    </button>
			</div>
			<div class="modal-body">
			    <div>
			        <p>是否刪除 <strong>{{ editProduct.title }}</strong> 產品?</p>
			        <strong class="text-danger">(刪除後將無法恢復)</strong>
			    </div>
			</div>
			<div class="modal-footer">
			    <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
			    <button type="button" class="btn btn-danger"  @click="deleteProduct()">確認刪除</button>
			</div>
		</div>
	</div>
  `,
  // 定義內層的資料結構
    data(){
      return{
      }
    }, 
    props: ['editProduct','api'],
    methods:{
        deleteProduct(){
            const apiUrl =`${this.api.path}${this.api.uuid}/admin/ec/product/${this.editProduct.id}`;
            axios.delete(apiUrl, this.editProduct).then(response =>{
                $('#delproductModal').modal('hide');
                // 觸發並呼叫外層事件
                this.$emit('update');
            });  
      }
    },
  }
  