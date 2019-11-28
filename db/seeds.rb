# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Charity.destroy_all
Category.destroy_all

category_list = [
  { "categoryId": "C", "categoryDesc": "Environmental Quality, Protection and Beautification" }, 
  { "categoryId": "D", "categoryDesc": "Animal-Related" }, 
  { "categoryId": "F", "categoryDesc": "Mental Health, Crisis Intervention" }, 
  { "categoryId": "H", "categoryDesc": "Medical Research" }, 
  { "categoryId": "K", "categoryDesc": "Food, Agriculture and Nutrition" }, 
  { "categoryId": "L", "categoryDesc": "Housing, Shelter" }, 
  { "categoryId": "O", "categoryDesc": "Youth Development" }, 
  { "categoryId": "Q", "categoryDesc": "International, Foreign Affairs and National Security" },
  { "categoryId": "U", "categoryDesc": "Science and Technology Research Institutes, Services" },
  { "categoryId": "X", "categoryDesc": "Religion-Related, Spiritual Development" }, 
]
category_list.each do |cat_hash|
  Category.create(category_id: cat_hash[:categoryId], description: cat_hash[:categoryDesc])
end

environment_charity_list = 
[
  { 
    "ein":"680259824",
    "charityName":"PACIFIC COAST FISH WILDLIFE AND WETLANDS ASSOC",
    "url":"http:\/\/www.orghunter.com\/organization\/680259824",
    "city":"ARCATA",
    "state":"California",
  },
  { 
    "ein":"260253627",
    "charityName":"MENDOCINO COUNTY COOPERATIVE AERIALFIRE PATROL",
    "url":"http:\/\/www.orghunter.com\/organization\/260253627",
    "city":"WILLITS",
    "state":"California",
  },
]

animal_charity_list = 
[
  { 
      "ein":"453557773",
      "charityName":"CLOSE TO HOME RESCUE & SANCTUARY",
      "url":"http:\/\/www.orghunter.com\/organization\/453557773",
      "city":"POMPTON LAKES",
      "state":"New Jersey",
  },
  { 
      "ein":"274510671",
      "charityName":"HOPE ANIMAL RESCUE A NJ NON PROFIT ORGANIZATION",
      "url":"http:\/\/www.orghunter.com\/organization\/274510671",
      "city":"MILLTOWN",
      "state":"New Jersey",
  },
  { 
      "ein":"810513220",
      "charityName":"WILDLIFE RETURN INC",
      "url":"http:\/\/www.orghunter.com\/organization\/810513220",
      "city":"TRENTON",
      "state":"New Jersey",
    },
]

environment_category = Category.find_by category_id: "C"
environment_charity_list.each do |charity_hash|
  Charity.create(
    employer_id: charity_hash[:ein],
    name: charity_hash[:charityName],
    url: charity_hash[:url],
    city: charity_hash[:city],
    state: charity_hash[:state],
    category: environment_category,
  )
end


animal_category = Category.find_by category_id: "D"
animal_charity_list.each do |charity_hash|
  Charity.create(
    employer_id: charity_hash[:ein],
    name: charity_hash[:charityName],
    url: charity_hash[:url],
    city: charity_hash[:city],
    state: charity_hash[:state],
    category: animal_category,
  )
end


