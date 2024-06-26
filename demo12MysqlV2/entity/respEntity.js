class BaseModel {
  constructor(data, message) {
    if(typeof data === 'string') {
      this.message = data;
      data = null;
      message = null;
    }
    this.data = data? data: ''
    this.message = message? message: ''
  }
}

// 成功的模型
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.error = 0
  }
}

// 失败的模型
class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.error = -1
  }
}

module.exports = {
  SuccessModel, ErrorModel
}
