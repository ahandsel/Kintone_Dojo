'use strict';
var fileManage = {
  f001: {
    folderName: '情報システム部',
    viewAuth: '情報システム部',
    editAuth: '情報システム部',
    deleteAuth: '情報システム部'
  },
  f002: {
    folderName: '経営管理部',
    viewAuth: '経営管理部',
    editAuth: '経営管理部',
    deleteAuth: '経営管理部'
  },
  f003: {
    folderName: '営業部',
    viewAuth: 'Everyone',
    editAuth: '営業部',
    deleteAuth: '営業部'
  },
  f004: {
    folderName: '開発本部',
    viewAuth: '開発本部',
    editAuth: '開発本部',
    deleteAuth: '開発本部'
  },
  f005: {
    folderName: '総務部',
    viewAuth: 'Everyone',
    editAuth: 'Everyone',
    deleteAuth: '総務部'
  },
  f006: {
    folderName: '経理部',
    viewAuth: '経理部',
    editAuth: '経理部',
    deleteAuth: '経理部'
  },
  f007: {
    folderName: '企画部',
    viewAuth: 'Everyone',
    editAuth: '企画部',
    deleteAuth: '企画部'
  }
};
for (var i = 1; i < 8; i++) {
  var nowFile = fileManage['f00' + i]
  document.getElementById('folderName' + i).textContent = nowFile.folderName;
  document.getElementById('viewAuth' + i).textContent = nowFile.viewAuth;
  document.getElementById('editAuth' + i).textContent = nowFile.editAuth;
  document.getElementById('deleteAuth' + i).textContent = nowFile.deleteAuth;
  if (nowFile.viewAuth === 'Everyone') {
    console.log(nowFile.folderName);
    var li = document.createElement('li');
    li.textContent = nowFile.folderName;
    document.getElementById('list').appendChild(li);
  }
}