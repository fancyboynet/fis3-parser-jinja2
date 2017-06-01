"use strict"
module.exports = function (content, file, opt) {
  if(!opt.namespace){
    return content
  }
  // 只对 html 类文件进行处理
  if (!file.isHtmlLike){
    return content;
  }
  // Buffer转换
  if(content instanceof Buffer){
    content = content.toString('utf-8');
  }
  let reg = /(\{%\s*(fis_load|fis_uri|fis_framework|extends|include)\s*['"])(.+)(['"]\s*%})/ig;
  return content.replace(reg, function(all, pre, cmd, resId, after) {
    let connector = ':'
    if(cmd === 'extends' || cmd === 'include'){
      connector = '/'
    }
    return pre + opt.namespace + connector + resId + after;
  });
};
