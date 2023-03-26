class GamesController < ApplicationController
  # def index
  #   @games = Game.all
  # end

  def show
    # @game = Game.find(params[:id])

    # if @game.hangman?
    #   render 'hangman'
    # elsif @post.flash?
    #   render 'flash'
    # end

    # @game = Game.find(params[:id])
    # @name = @game.name
    @name = params[:name]
  end

  def game_params
    params.require(:game).permit(:name, :description, :counter, :rating)
  end
end
