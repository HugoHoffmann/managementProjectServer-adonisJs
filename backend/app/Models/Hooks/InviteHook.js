'use strict'

const InviteHook = exports = module.exports = {}
const User = use('App/Models/User')

InviteHook.sendInvitationEmail = async (invite) => {
    const { email } = invite 
    const invited = await User.findBy('email', email)

    if(invited){
        await invited.teams().attach(invate.team_id)
    }else{
        console.log('criar conta')
        // send email
    }

}
