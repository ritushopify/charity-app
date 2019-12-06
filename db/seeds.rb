# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'rest-client';
require 'json';

Charity.destroy_all
Category.destroy_all

categories = [
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
category_list = categories.map do |category_hash|
  Category.create(category_id: category_hash[:categoryId], description: category_hash[:categoryDesc])
end

category = category_list[0]

user_key = Rails.application.config.user_key

# user_key="767217d273a5d0194a2a611a378fc990"

charities_response = RestClient.post 'http://data.orghunter.com/v1/charitysearch',
    {"user_key" => user_key, "category" => 'C'}

charities_hash = JSON.parse(charities_response.body)
charities_array = charities_hash["data"]

charities = charities_array.map do |attributeHash|
Charity.create(
  category_id: attributeHash["categoryId"],
  employer_id: attributeHash["ein"],
  name: attributeHash["charityName"],
  url: attributeHash["url"],
  city: attributeHash["city"],
  state: attributeHash["state"]
) 
end

category.charities << charities
