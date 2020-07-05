var app = new Vue({
	el:'#app',
	data:{
		products:[
			{
				id:1001,
				title:'韓版上衣',
				category:'上衣',
				unit:'件',
				origin_price:590,
				price:290,
				content:'簡約舒適姐姐風',
				description:'上衣、時尚、韓流',
				launched: true,
				imageUrl:'https://ct.yimg.com/xd/api/res/1.2/MlxZuirehIKx2Dpcy6BTmA--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD02MDA7cT04NTtyb3RhdGU9YXV0bzt3PTYwMA--/https://s.yimg.com/ob/image/f4b4089b-a99e-4953-93e8-bf93ee759f35.jpg',
			},
			{
				id:2001,
				title:'韓版牛仔褲',
				category:'褲子',
				unit:'件',
				origin_price: 590,
				price: 290,
				content: '-5kg 牛仔褲穿上擁有韓星的長腿',
				description: '5kg、顯瘦、纖長',
				launched: false,
				imageUrl: 'https://www.chuu.co.kr/web/product/medium/201612/18318_shop1_330891.jpg',
			},
		],
		editProduct: {},
		// newProduct: true,
	},

	methods:{
		//開啟新增/修改跳窗畫面
		openModal(status, item, index){
			switch(status){
				//新增產品
				case 'newProduct':
					this.status = true;
					this.editProduct = {};//重新宣告新物件將資料都清空，以免編輯的資料留存
					// console.log(status);
					$('#productModal').modal('show');
					break;

				//刪除產品
				case 'deleteProduct':
					$('#delproductModal').modal('show');//先 show 出來
					this.editProduct = Object.assign({},item);//將點擊的產品複製一份出來加入物件
					//console.log(this.editProduct.id);
					break;
				
				//修改產品
				case 'editProduct':
					this.status = false;
					this.editProduct = Object.assign({}, item);////將點擊的產品複製一份出來加入物件
					$('#productModal').modal('show');
					break;
				default:
					break;
			}
		},

		//上傳新產品、更新產品資訊
		updateProduct(){
			if(this.status){
				// 新增進陣列裡 true
				// console.log(this.status);
				this.editProduct.id = Math.floor(Date.now());
				this.products.push(this.editProduct);
				console.log(this.products);
			}else{
				// 更新資訊 false
				const id = this.editProduct.id;
				this.products.forEach((item, i) => {
		          if (item.id === id) {
		            // this.products[i] = this.editProduct; //沒有雙向綁定，故需要使用 $set
		            // this.$set(目標,屬性,值); 在指定目標下，加入指定的屬性跟值
		            this.$set(this.products, i, this.editProduct);//在 this.products 底下取代第 i 個物件裡面的所有值
		            // console.log(this.products[i]); 
		            // console.log(this.products[i].price); 
		            // console.log(this.editProduct.price);
		          }
		        });
			}
			$('#productModal').modal('hide');
		},

		//刪除產品
		deleteProduct(){
			const id = this.editProduct.id;
			if(id){
				// console.log(this.editProduct);
				this.products.forEach((item, i) =>{
					if(item.id === id){
						this.products.splice(i,1);
						// console.log(this.editProduct);
						this.editProduct = {};// 必須將它清除，否則還會存留在陣列
					}
				})
			}
			$('#delproductModal').modal('hide');
		},
	}
})