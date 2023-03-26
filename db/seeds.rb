# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

Game.destroy_all

Game.create!(name: "Hangman")
Game.create(name: "Flash")
Game.create(name: "O AND X")
Game.create(name: "Minesweeper")
Game.create(name: "Anagram")
Game.create(name: "Pig")
