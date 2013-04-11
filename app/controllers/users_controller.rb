class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      flash[:success] = "Welcome, #{@user.name}!"
      redirect_to user_path(@user)
    else
      flash.now[:errors] = @user.errors.full_messages.join(', ')
      render 'new'
    end
  end

  def show
    
  end
end
