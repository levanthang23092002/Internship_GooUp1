const fileNames = [
  'Gooup1_User_Tracking_121220230405.txt',
  'Gooup1_User_Tracking_121220230459.txt',
  'Gooup1_User_Tracking_290220230405.txt',
  'Gooup1_User_Tracking_29022023040506.txt',
  'Gooup1_User_Tracking_290220230450.txt',
  'Gooup1_User_Tracking_290220234050.txt',
  'Gooup1_User_Tracking_290220234050.txt',
  'Gooup1_User_Tracking_290020232323.txt',
  'Gooup1_UserTracking_290020232323.txt',
  'Gooup1_User_Tracking_291220232323.txts',

]
const checkdate = require('./HomeWork6');
const fs = require('fs');
function createFile(fileNames){
  fileNames.forEach(element => {
    const fileName = `./mydata/${element}`;
    const content = `This is a filename ${element}.`;

    fs.writeFileSync(fileName, content)
  });
}
// createFile(fileNames);

// filter filename in forder if it not true format

function checkDateTime(string) {
  if (string.length !== 12) {
    return false;
  } else {
    let cut = string.match(/^(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})$/);
    let number = cut.slice(1, 6)
    date =`${number[0]}-${number[1]}-${number[2]}`
    if(checkdate.dateValidation(date) == false || parseInt(number[3]) > 24 || parseInt(number[4]) > 59){
      return false;
    }
    return true;
  }
}


function filterFilename(src){
  let listfiles =[];
  let listfiletrues =[];
  var fileNames = fs.readdirSync(src);
  fileNames.forEach(element =>{
    let filename = element.split(/[_\.]/);
    if(filename.length != 5){
      listfiles.push(element);
      return;
    }else
      if(filename[0] != "Gooup1"){
         filename.push(element);
        return;
      }else
        if(filename[1] != "User"){
          listfiles.push(element);
          return;
        }else
          if(filename[2] != "Tracking"){
            listfiles.push(element);
            return;
          }else
            if(checkDateTime(filename[3]) != true){

              listfiles.push(element);
              return;
            }else
              if(filename[4] != "txt"){
                listfiles.push(element);
                return;
              }
      listfiletrues.push(element);
  })
  return [listfiles, listfiletrues]
}
let list = filterFilename("./mydata")
// console.log(list[1]);

function writeFileTrue(arr){
  arr.forEach(element=>{
    fs.appendFile(`./mydata/${element}`,"ok",(err)=>{
      if (err) {
        console.error('Lỗi khi ghi nội dung vào cuối tệp tin:', err);
        return;
      }
    
      console.log('Đã ghi nội dung vào cuối tệp tin thành công.');
    })
  })
}
writeFileTrue(list[1]);


