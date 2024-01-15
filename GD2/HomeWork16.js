const fs = require('fs');

// Hàm để tạo chuỗi ngẫu nhiên
function randomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Hàm để chuyển đổi định dạng JSON thành đối tượng
function parseJSONToObject(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return null;
  }
}

// Tạo danh sách 10 file
for (let i = 1; i <= 10; i++) {
  const fileName = `file${i}.json`;
  let fileContent;

  // 50% file có định dạng JSON, 50% còn lại là chuỗi ngẫu nhiên
  if (i % 2 === 0) {
    const jsonContent = {
      data: 'This is JSON content',
      number: i
    };
    fileContent = JSON.stringify(jsonContent);
  } else {
    const string = randomString(10);
    fileContent = string;
  }

  // Ghi nội dung file
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log(`Đã xảy ra lỗi khi tạo file ${fileName}: ${err}`);
    } else {
      console.log(`Đã tạo file ${fileName} thành công!`);

      // Đọc nội dung file sau khi tạo thành công
      fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
          console.log(`Đã xảy ra lỗi khi đọc file ${fileName}: ${err}`);
          return;
        }

        let result;
        try {
          const jsonObject = parseJSONToObject(data);
          if (jsonObject) {
            result = 'OK';
            console.log(`Đã đọc file ${fileName} thành công:`, jsonObject);
          } else {
            result = 'NOK & Cover';
            console.log(`Đã đọc file ${fileName} không thành công. Định dạng JSON không hợp lệ.`);
          }
        } catch (error) {
          result = 'NOK & Cover';
          console.log(`Đã xảy ra lỗi khi đọc file ${fileName}:`, error);
        }

        // Ghi kết quả vào file "result.txt"
        fs.appendFile('result.txt', `${fileName}: ${result}\n`, (err) => {
          if (err) {
            console.log(`Đã xảy ra lỗi khi ghi kết quả vào file result.txt: ${err}`);
          } else {
            console.log(`Đã ghi kết quả vào file result.txt.`);
          }
        });
      });
    }
  });
}