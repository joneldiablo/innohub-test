'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}/**
 * File generated with objection-model-generator OMG!!!!
 */var _require=require('objection'),Model=_require.Model,AddressModel=void 0,ProjectownershiptypeModel=void 0,ProjecttypeModel=void 0,ProjectModel=void 0,RelationProjectTagModel=void 0,RelationProjectUserOwnershiptypeModel=void 0,RelationTaskModel=void 0,RelationUserCountryModel=void 0,SessiontypeModel=void 0,SessionModel=void 0,TagModel=void 0,TaskscoreModel=void 0,TaskModel=void 0,UserModel=void 0;/**
 * address model
 * @extends Model
 *//**
 * projectOwnershipTypes model
 * @extends Model
 *//**
 * projectTypes model
 * @extends Model
 *//**
 * projects model
 * @extends Model
 *//**
 * relation-projects-tags model
 * @extends Model
 *//**
 * relation-projects-users-ownershipType model
 * @extends Model
 *//**
 * relation-tasks model
 * @extends Model
 *//**
 * relation-users-countries model
 * @extends Model
 *//**
 * sessionTypes model
 * @extends Model
 *//**
 * sessions model
 * @extends Model
 *//**
 * tags model
 * @extends Model
 *//**
 * taskScores model
 * @extends Model
 *//**
 * tasks model
 * @extends Model
 *//**
 * users model
 * @extends Model
 */AddressModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'address'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['lineAddress','city','state','country'],search:['lineAddress'],properties:{id:{type:'integer'},lineAddress:{type:'string'},city:{type:'integer'},state:{type:'integer'},country:{type:'integer'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{}}}]),b}(Model),ProjectownershiptypeModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'projectOwnershipTypes'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['name'],search:['name','description'],properties:{id:{type:'integer'},name:{type:'string'},description:{type:'string'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{}}}]),b}(Model),ProjecttypeModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'projectTypes'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['name'],search:['name','description'],properties:{id:{type:'integer'},name:{type:'string'},description:{type:'string'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{}}}]),b}(Model),ProjectModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'projects'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['name','type'],search:['name'],properties:{id:{type:'integer'},name:{type:'string'},type:{type:'integer'},creationDate:{type:'date-time'},updateDate:{type:'date-time'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{projecttype:{relation:Model.BelongsToOneRelation,modelClass:ProjecttypeModel,join:{from:'projects.type',to:'projectTypes.id'}}}}}]),b}(Model),RelationProjectTagModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'relation-projects-tags'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['tagId','projectId'],search:[],properties:{tagId:{type:'integer'},projectId:{type:'integer'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{tag:{relation:Model.BelongsToOneRelation,modelClass:TagModel,join:{from:'relation-projects-tags.tagId',to:'tags.id'}},project:{relation:Model.BelongsToOneRelation,modelClass:ProjectModel,join:{from:'relation-projects-tags.projectId',to:'projects.id'}}}}}]),b}(Model),RelationProjectUserOwnershiptypeModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'relation-projects-users-ownershipType'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['userId','projectId','ownershipTypeId'],search:[],properties:{userId:{type:'integer'},projectId:{type:'integer'},ownershipTypeId:{type:'integer'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{user:{relation:Model.BelongsToOneRelation,modelClass:UserModel,join:{from:'relation-projects-users-ownershipType.userId',to:'users.id'}},project:{relation:Model.BelongsToOneRelation,modelClass:ProjectModel,join:{from:'relation-projects-users-ownershipType.projectId',to:'projects.id'}},projectownershiptype:{relation:Model.BelongsToOneRelation,modelClass:ProjectownershiptypeModel,join:{from:'relation-projects-users-ownershipType.ownershipTypeId',to:'projectOwnershipTypes.id'}}}}}]),b}(Model),RelationTaskModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'relation-tasks'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['tagId','tagIdRel'],search:[],properties:{tagId:{type:'integer'},tagIdRel:{type:'integer'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return _defineProperty({task:{relation:Model.BelongsToOneRelation,modelClass:TaskModel,join:{from:'relation-tasks.tagId',to:'tasks.id'}}},'task',{relation:Model.BelongsToOneRelation,modelClass:TaskModel,join:{from:'relation-tasks.tagIdRel',to:'tasks.id'}})}}]),b}(Model),RelationUserCountryModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'relation-users-countries'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['userId','countryId'],search:[],properties:{userId:{type:'integer'},countryId:{type:'integer'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{user:{relation:Model.BelongsToOneRelation,modelClass:UserModel,join:{from:'relation-users-countries.userId',to:'users.id'}}}}}]),b}(Model),SessiontypeModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'sessionTypes'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['name'],search:['name','description'],properties:{id:{type:'integer'},name:{type:'string'},description:{type:'string'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{}}}]),b}(Model),SessionModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'sessions'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['userId','type','expiration'],search:[],properties:{id:{type:'integer'},userId:{type:'integer'},type:{type:'integer'},expiration:{type:'date-time'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{sessiontype:{relation:Model.BelongsToOneRelation,modelClass:SessiontypeModel,join:{from:'sessions.type',to:'sessionTypes.id'}}}}}]),b}(Model),TagModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'tags'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['name'],search:['name','description'],properties:{id:{type:'integer'},name:{type:'string'},description:{type:'string'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{}}}]),b}(Model),TaskscoreModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'taskScores'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:[],search:['description'],properties:{id:{type:'integer'},taskid:{type:'integer'},description:{type:'string'},score:{type:'number'},releaseDate:{type:'date-time'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{task:{relation:Model.BelongsToOneRelation,modelClass:TaskModel,join:{from:'taskScores.taskid',to:'tasks.id'}}}}}]),b}(Model),TaskModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'tasks'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['name','owner'],search:['name','description'],properties:{id:{type:'integer'},name:{type:'string'},description:{type:'string'},owner:{type:'integer'},creationDate:{type:'date-time'},updateDate:{type:'date-time'},deadline:{type:'date-time'},cancelDate:{type:'date-time'},order:{type:'integer'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{user:{relation:Model.BelongsToOneRelation,modelClass:UserModel,join:{from:'tasks.owner',to:'users.id'}}}}}]),b}(Model),UserModel=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,null,[{key:'tableName',/**
   * @override
   */get:function a(){return'users'}/**
   * @override
   */},{key:'jsonSchema',get:function a(){return{type:'object',required:['name','curp','rfc','username','email'],search:['name','lastname','curp','rfc','username','email'],properties:{id:{type:'integer'},name:{type:'string'},lastname:{type:'string'},curp:{type:'string'},rfc:{type:'string'},address:{type:'integer'},genre:{type:'integer'},username:{type:'string'},password:{type:'string'},email:{type:'string'}}}}/**
   * @override
   */},{key:'relationMappings',get:function a(){return{address:{relation:Model.BelongsToOneRelation,modelClass:AddressModel,join:{from:'users.address',to:'address.id'}}}}}]),b}(Model),module.exports={AddressModel:AddressModel,ProjectownershiptypeModel:ProjectownershiptypeModel,ProjecttypeModel:ProjecttypeModel,ProjectModel:ProjectModel,RelationProjectTagModel:RelationProjectTagModel,RelationProjectUserOwnershiptypeModel:RelationProjectUserOwnershiptypeModel,RelationTaskModel:RelationTaskModel,RelationUserCountryModel:RelationUserCountryModel,SessiontypeModel:SessiontypeModel,SessionModel:SessionModel,TagModel:TagModel,TaskscoreModel:TaskscoreModel,TaskModel:TaskModel,UserModel:UserModel};
//# sourceMappingURL=innohub-test.js.map