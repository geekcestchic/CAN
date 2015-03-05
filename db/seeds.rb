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
  bio = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
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

50.times do |n|
  title = Faker::Company.name
  image = Faker::Company.logo
  video = "https://www.youtube.com/watch?v=B_tYh9zsIO0"
  user_id = rand(10..100)
  content = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  Project.create!(title: title,
                  content: content,
                  image: image,
                  video: video,
                  user_id: user_id)
end

c1 = Category.create(name: 'Business')
c2 = Category.create(name: 'Computers')
c3 = Category.create(name: 'Design')
c4 = Category.create(name: 'Education')
c5 = Category.create(name: 'Family')
c6 = Category.create(name: 'Fashion')
c7 = Category.create(name: 'Finance')
c8 = Category.create(name: 'Food')
c9 = Category.create(name: 'Games')
c10 = Category.create(name: 'Health')
c11 = Category.create(name: 'Music')
c12 = Category.create(name: 'Property')
c13 = Category.create(name: 'Shopping')
c14 = Category.create(name: 'Social Networking')
c15 = Category.create(name: 'Sports ')
c16 = Category.create(name: 'Travel')

b1 = Brand.create(name: 'Airbnb')
b2 = Brand.create(name: 'AngelList')
b3 = Brand.create(name: 'Apple')
b4 = Brand.create(name: 'Codecademy')
b5 = Brand.create(name: 'Duolingo')
b6 = Brand.create(name: 'Fiverr')
b7 = Brand.create(name: 'Kickstarter')
b8 = Brand.create(name: 'MoshiMonsters')
b9 = Brand.create(name: 'Nest')
b10 = Brand.create(name: 'Quora')
b11 = Brand.create(name: 'Slack')
b12 = Brand.create(name: 'Snapchat')
b13 = Brand.create(name: 'Soundcloud')
b14 = Brand.create(name: 'Tinder')
b15 = Brand.create(name: 'Twitch')
b16 = Brand.create(name: 'Uber')