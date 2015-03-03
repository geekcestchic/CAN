# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

100.times do |n|
  firstname = Faker::Name.first_name
  lastname = Faker::Name.last_name
  avatar = Faker::Avatar.image
  location = Faker::Address.city
  bio = Faker::Lorem.paragraph(2)
  email = "example-#{n+1}@can.com"
  password = "password"
  User.create!(firstname: firstname,
              lastname: lastname,
              avatar: avatar,
              location: location,
              bio: bio,         
              email: email,
              password: password,
              password_confirmation: password)
end