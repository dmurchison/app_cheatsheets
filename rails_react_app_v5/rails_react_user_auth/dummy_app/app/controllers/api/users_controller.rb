
# This file will be nested in an /api/ folder if using a react frontend

class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

end