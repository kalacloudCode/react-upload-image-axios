import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./components/UploadFiles.js"

function App() {
  return (
    <div className="container">
      <h4>卡拉云-低代码开发工具 1秒搭建图片上传组件 Demo</h4>
      <p>使用卡拉云无需懂任何前端技术，仅需要拖拽即可搭建属于您的后台管理系统</p>
      <div className="content">
        <UploadImages />
      </div>
    </div>
  );
}

export default App;
