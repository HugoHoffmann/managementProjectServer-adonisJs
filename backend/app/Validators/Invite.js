'use strict'

class Invite {
  get validateAll(){
    return true
  }

  get rules () {
    return {
      invates: 'required|array',
      'invates.*': 'required|email'
    }
  }
}

module.exports = Invite
