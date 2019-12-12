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

# user_key is needed for the calls to the external API we will be making
user_key = Rails.application.config.user_key

# Create categories and the charities for each category
categories.each do |category_hash|
  category = Category.create(
    api_id: category_hash[:categoryId], 
    description: category_hash[:categoryDesc]
  )
  # Get all the charities for this category from the orghunter.com REST API
  charities_response = RestClient.post 'http://data.orghunter.com/v1/charitysearch',
    {"user_key" => user_key, "category" => category.api_id}

  "Process the charities response from the REST query"
  charities_hash = JSON.parse(charities_response.body)
  charities_array = charities_hash["data"]
  charities = charities_array.map do |attributeHash|
    category.charities.create(
      category_api_id: category.api_id,
      employer_id: attributeHash["ein"],
      name: attributeHash["charityName"],
      url: attributeHash["url"],
      city: attributeHash["city".titlecase],
      state: attributeHash["state".titlecase],
      category_name: attributeHash["category"]
    ) 
  end
end


Donation.destroy_all
Card.destroy_all
Person.destroy_all

person = Person.create(
  name: "Ritu Sikka",
  email: "ritu.sikka@shopify.com"
)

puts "after Person"

card=Card.create(
  occasion: :Birthday, 
  blurb: "Happy Birthday", 
  message: "On this happy occasion, I have donated to one of your favorite charities",
  person: person
)

puts "after Card"

charity = Charity.first

puts "after charity"

donation = Donation.create(
  amount: 150, 
  person: person,
  card: card,
  charity: charity
)

puts "after donation"