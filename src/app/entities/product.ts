export class Product {

  static GLOBAL_TIME = 'global';
  static USER_TIME = 'user';


  static EXAM_CONTENT_TYPE = 'exam';
  static PROJECT_CONTENT_TYPE = 'project';
  static CONTENT_TYPES = [
      Product.EXAM_CONTENT_TYPE,
      Product.PROJECT_CONTENT_TYPE,
  ];

  id = 0;
  title = '';
  intro = '';
  logo = '';
  contentType = '';

  gradeFrom = null;
  gradeTo = null;
  league = null;
  
  sandbox = null;
  sandboxId = null;
  brand = null;
  brandId = null;
  
  price = null;
  currency = null;

  visibleLevel = null;
  visibleCountryIds = [];
  visibleSchoolIds = [];
  visibleCountries = [];
  visibleSchools = [];

  subjects = [];

  regStart = '';
  regFinish = '';
  
  appealStart = '';
  appealFinish = '';

  startAt = '';
  finishAt = '';
  
  resultAt = '';

  curTime = '';
  timeRelativity = '';

  quizIds = [];
  isDeleted = false;
  isMarketPlace = false;
  isPractice = false;

  status = '';
  isRegistered = '';

}
