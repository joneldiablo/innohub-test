/**
 * File generated with objection-model-generator OMG!!!!
 */

const {
  Model
} = require('objection');

let AddressModel;
let ProjectownershiptypeModel;
let ProjecttypeModel;
let ProjectModel;
let RelationProjectTagModel;
let RelationProjectUserOwnershiptypeModel;
let RelationTaskModel;
let RelationUserCountryModel;
let SessiontypeModel;
let SessionModel;
let TagModel;
let TaskscoreModel;
let TaskModel;
let UserModel;

/**
 * address model
 * @extends Model
 */
AddressModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'address';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['lineAddress','city','state','country',],
      search: ['lineAddress',],
      properties: {
        id: {
          type: 'integer'
        },
        lineAddress: {
          type: 'string'
        },
        city: {
          type: 'integer'
        },
        state: {
          type: 'integer'
        },
        country: {
          type: 'integer'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
    };
  }

}

/**
 * projectOwnershipTypes model
 * @extends Model
 */
ProjectownershiptypeModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'projectOwnershipTypes';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name',],
      search: ['name','description',],
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
    };
  }

}

/**
 * projectTypes model
 * @extends Model
 */
ProjecttypeModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'projectTypes';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name',],
      search: ['name','description',],
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
    };
  }

}

/**
 * projects model
 * @extends Model
 */
ProjectModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'projects';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name','type',],
      search: ['name',],
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        type: {
          type: 'integer'
        },
        creationDate: {
          type: 'date-time'
        },
        updateDate: {
          type: 'date-time'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
      projecttype: {
        relation: Model.BelongsToOneRelation,
        modelClass: ProjecttypeModel,
        join: {
          from: 'projects.type',
          to: 'projectTypes.id'
        }
      },
    };
  }

}

/**
 * relation-projects-tags model
 * @extends Model
 */
RelationProjectTagModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'relation-projects-tags';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['tagId','projectId',],
      search: [],
      properties: {
        tagId: {
          type: 'integer'
        },
        projectId: {
          type: 'integer'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
      tag: {
        relation: Model.BelongsToOneRelation,
        modelClass: TagModel,
        join: {
          from: 'relation-projects-tags.tagId',
          to: 'tags.id'
        }
      },
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: ProjectModel,
        join: {
          from: 'relation-projects-tags.projectId',
          to: 'projects.id'
        }
      },
    };
  }

}

/**
 * relation-projects-users-ownershipType model
 * @extends Model
 */
RelationProjectUserOwnershiptypeModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'relation-projects-users-ownershipType';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId','projectId','ownershipTypeId',],
      search: [],
      properties: {
        userId: {
          type: 'integer'
        },
        projectId: {
          type: 'integer'
        },
        ownershipTypeId: {
          type: 'integer'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'relation-projects-users-ownershipType.userId',
          to: 'users.id'
        }
      },
      project: {
        relation: Model.BelongsToOneRelation,
        modelClass: ProjectModel,
        join: {
          from: 'relation-projects-users-ownershipType.projectId',
          to: 'projects.id'
        }
      },
      projectownershiptype: {
        relation: Model.BelongsToOneRelation,
        modelClass: ProjectownershiptypeModel,
        join: {
          from: 'relation-projects-users-ownershipType.ownershipTypeId',
          to: 'projectOwnershipTypes.id'
        }
      },
    };
  }

}

/**
 * relation-tasks model
 * @extends Model
 */
RelationTaskModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'relation-tasks';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['tagId','tagIdRel',],
      search: [],
      properties: {
        tagId: {
          type: 'integer'
        },
        tagIdRel: {
          type: 'integer'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
      task: {
        relation: Model.BelongsToOneRelation,
        modelClass: TaskModel,
        join: {
          from: 'relation-tasks.tagId',
          to: 'tasks.id'
        }
      },
      task: {
        relation: Model.BelongsToOneRelation,
        modelClass: TaskModel,
        join: {
          from: 'relation-tasks.tagIdRel',
          to: 'tasks.id'
        }
      },
    };
  }

}

/**
 * relation-users-countries model
 * @extends Model
 */
RelationUserCountryModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'relation-users-countries';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId','countryId',],
      search: [],
      properties: {
        userId: {
          type: 'integer'
        },
        countryId: {
          type: 'integer'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'relation-users-countries.userId',
          to: 'users.id'
        }
      },
    };
  }

}

/**
 * sessionTypes model
 * @extends Model
 */
SessiontypeModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'sessionTypes';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name',],
      search: ['name','description',],
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
    };
  }

}

/**
 * sessions model
 * @extends Model
 */
SessionModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'sessions';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId','type','expiration',],
      search: [],
      properties: {
        id: {
          type: 'integer'
        },
        userId: {
          type: 'integer'
        },
        type: {
          type: 'integer'
        },
        expiration: {
          type: 'date-time'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
      sessiontype: {
        relation: Model.BelongsToOneRelation,
        modelClass: SessiontypeModel,
        join: {
          from: 'sessions.type',
          to: 'sessionTypes.id'
        }
      },
    };
  }

}

/**
 * tags model
 * @extends Model
 */
TagModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'tags';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name',],
      search: ['name','description',],
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
    };
  }

}

/**
 * taskScores model
 * @extends Model
 */
TaskscoreModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'taskScores';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      search: ['description',],
      properties: {
        id: {
          type: 'integer'
        },
        taskid: {
          type: 'integer'
        },
        description: {
          type: 'string'
        },
        score: {
          type: 'number'
        },
        releaseDate: {
          type: 'date-time'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
      task: {
        relation: Model.BelongsToOneRelation,
        modelClass: TaskModel,
        join: {
          from: 'taskScores.taskid',
          to: 'tasks.id'
        }
      },
    };
  }

}

/**
 * tasks model
 * @extends Model
 */
TaskModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'tasks';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name','owner',],
      search: ['name','description',],
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        owner: {
          type: 'integer'
        },
        creationDate: {
          type: 'date-time'
        },
        updateDate: {
          type: 'date-time'
        },
        deadline: {
          type: 'date-time'
        },
        cancelDate: {
          type: 'date-time'
        },
        order: {
          type: 'integer'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'tasks.owner',
          to: 'users.id'
        }
      },
    };
  }

}

/**
 * users model
 * @extends Model
 */
UserModel = class extends Model {

  /**
   * @override
   */
  static get tableName() {
    return 'users';
  }

  /**
   * @override
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name','curp','rfc','username','email',],
      search: ['name','lastname','curp','rfc','username','email',],
      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        lastname: {
          type: 'string'
        },
        curp: {
          type: 'string'
        },
        rfc: {
          type: 'string'
        },
        address: {
          type: 'integer'
        },
        genre: {
          type: 'integer'
        },
        username: {
          type: 'string'
        },
        password: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
      }
    }
  }

  /**
   * @override
   */
  static get relationMappings() {
    return {
      address: {
        relation: Model.BelongsToOneRelation,
        modelClass: AddressModel,
        join: {
          from: 'users.address',
          to: 'address.id'
        }
      },
    };
  }

}


module.exports = {
  AddressModel,
  ProjectownershiptypeModel,
  ProjecttypeModel,
  ProjectModel,
  RelationProjectTagModel,
  RelationProjectUserOwnershiptypeModel,
  RelationTaskModel,
  RelationUserCountryModel,
  SessiontypeModel,
  SessionModel,
  TagModel,
  TaskscoreModel,
  TaskModel,
  UserModel,
}