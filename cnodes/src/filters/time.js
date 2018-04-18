let isDate = time=> {
  let local = new Date().getTime();
  let before = new Date(time).getTime();
  let news =  local - before;
  let nian=parseInt(news/1000/60/60/24/30/12);
  let mon= parseInt(news/1000/60/60/24/30);
  let tian = parseInt(news/1000/60/60/24);
  let shi = parseInt(news/1000/60/60);
  let fen = parseInt(news/1000/60);
  let miao = parseInt(news/1000);
  if(miao<60){
    return miao+'秒前'
  }else if(fen<60){
    return fen+'分前'
  }else if(shi<24){
    return shi+'时前'
  }else if(tian<30){
    return tian+'天前'
  }else if(mon<12){
    return mon+'月前'
  }else if(nian>0){
    return nian+'年前'
  }
}
export {isDate}
