var cart = new Vue({
  el:"#cart",
  data:{
    books:[
      {
        num:1,
        name:"《算法导论》",
        date:"2006-9",
        price:85,
        count:1
      },
      {
        num:2,
        name:"《UNIX编程艺术》",
        date:"2006-2",
        price:59,
        count:1
      },
      {
        num:3,
        name:"《编程珠玑》",
        date:"2008-10",
        price:39,
        count:1
      },
      {
        num:4,
        name:"《代码大全》",
        date:"2006-3",
        price:128,
        count:1
      },
    ] 
  },
  //filters过滤器， 例：{{value | showPrice}}
  // 如上例，showPrice不用写小括号(),会把value作为参数传入函数
  filters:{
    //showPrice过滤器可以把数字转化为￥1.00这种价格形式显示
    showPrice(price){
      return "￥"+price.toFixed(2);
      //.toFixed()方法可以设置保留小数多少位
    }
  },
  methods:{
    decrease(index){
      this.books[index].count--;
    },
    increase(index){
      this.books[index].count++;
    },
    //判断数量是否为1，若是则禁用-按钮
    isOne(index){
      if(this.books[index].count <= 1)
      return true;
      else return false;
    },
    //删除某类商品
    removeItem(index){
      //splice用法（起始位置索引，删除的项数，...增加的项）
      this.books.splice(index,1);
    }
  },
  computed:{
    total(){
      let totalPrice = 0;
      for(let value of this.books){
        totalPrice += value.price*value.count;
        console.log(value)
      }
      return totalPrice;
    }
  }
});
/********************
 * 一个注意点
 *  - v-if 和v-else 需要在挂载有vue组件的元素内部才能生效
 */