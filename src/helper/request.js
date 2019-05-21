export default async function(path,opt){
  const url = 'https://www.easy-mock.com/mock/5cc165aa320ddb427c904316/movie' + path;
  const options = Object.assign({
    method: 'GET',
  }, opt);

  try{
    const response = await fetch(url, options);
    const{ data, status } = await response.json();
    if(status === 0){
      return data;
    }else{
      console.log("错误");
    }
  }catch (e) {
    //错误处理
  }
}
