'use strict'


/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

const Role = use('Adonis/Acl/Role')
const Permission = use('Adonis/Acl/Permission')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Hugo Hoffmann',
      email: 'hugohoffmann04@gmail.com',
      password: '123456'
    })

    const createIvite = await Permission.create({
      slug: 'invites_create',
      name: 'Convidar membros'
    })

    const createProject = await Permission.create({
      slug: 'projects_create',
      name: 'Criar projetos'
    })

    const admin = await Role.create({
      slug: 'administrator',
      name: 'administrador'
    })

    const moderator = await Role.create({
      slug: 'moderator',
      name: 'Moderador'
    })

    await Role.create({
      slug: 'visitor',
      name: 'Visitante'
    })

    await admin.permission.attatch([createIvite.id, createProject.id])
    await moderator.permission.attatch([createProject.id])

    const team = await user.teams().create({
      name: 'Htech',
      user_id: user.id,
    })

    const teamJoin = await user.teamJoins().where('team_id', team_id).first()

    await teamJoin.roles().attatch([admin.id])
  }
}

module.exports = DatabaseSeeder
