export const actions = {//异步操作都在actions中commit到muations
  aUpdata(context,sex){//这里的context相当于store
      //context.commit('addGender',sex);
      //下面你结合异步promise操作一波
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('addGender',sex);
          console.log('已经提交(更新)teacher信息');
          resolve('我是回调信息');
        }, 2000);
      })
  }
}