//: Import node fs package
const fs = require('fs');

//: Creation d'une function pour la suppression
function deleteFile(imageUrl) {
  if (!imageUrl) return;
  const filename = imageUrl.split('/public/')[1];
  fs.unlink(`public/${filename}`, () => {});
}

module.exports = {
  deleteFile,
};