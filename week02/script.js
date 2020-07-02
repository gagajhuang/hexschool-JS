var obj ={
  data:{
    uuid: '7853b5f4-23ce-41e9-9c57-576442aeaaed',
    products:[]//需要一個空陣列回存 get data 的資料
  },
  //function 縮寫，取得所有商品列表
  getData(){
    var vm = this;
    //console.log(vm,this); vm,this 都是 obj
    var apiUrl = `https://course-ec-api.hexschool.io/api/${vm.data.uuid}/ec/products`;
    axios.get(apiUrl)
      .then(function(res){
        //console.log(res.data.data);
        vm.data.products = res.data.data;//存入陣列
        vm.rander();
      })
  },
  //渲染
  rander(){
    var app = document.querySelector('#app');
    var products = this.data.products;
    //console.log(products);
    var str = '';
    products.forEach(function(item){
      //console.log(item.imageUrl[0]);圖片是陣列
      //console.log(item.title,item.content,item.price);
      str +=`
        <div class="productlist">
          <img src="${item.imageUrl[0]}" alt="">
          <div class="producttext">
            <h2>${item.title}</h2>
            <p class="contentblock">${item.content}</p>
            <p class="priceblock">$ ${item.price}</p>
          </div>
        </div>`;
    });
    app.innerHTML = str;
  }
}
obj.getData();