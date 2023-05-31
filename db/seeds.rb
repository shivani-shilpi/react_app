# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
9.times do |i|
    Recipe.create(
      name: "Recipe #{i + 1}",
      ingredients: '227g tub clotted cream, 25g butter, 1 tsp cornflour,100g parmesan, grated nutmeg, 250g fresh fettuccine or tagliatelle, snipped chives or chopped parsley to serve (optional)',
      instruction: 'In a medium saucepan, stir the clotted cream, butter, and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm.',
      image: 'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp'
    )
end

books = Book.create([
    {
        name: "the power of positive thinking",
        price: "12.9",
        author: "Norman Vincent Peal",
        category: "self help"
    },
    {
        name: "Atomic Habit",
        price: "12.9",
        author: "James Clear",
        category: "self help"
    },
    {
        name: "The power of Habits",
        price: "12.9",
        author: "Charles Duhigg",
        category: "self help"
    },
    {
        name: "Attitude Is Everything",
        price: "12.9",
        author: "Jeff Keller",
        category: "self help"
    }
])