class CallbacksController < Devise::OmniauthCallbacksController
    

  def facebook
    @user = User.from_omniauth(request.env["omniauth.auth"])

    if @user.persisted?
      sign_in_and_redirect @user 
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

  def twitter
    @user = User.find_for_twitter(request.env['omniauth.auth'].except("extra"), current_user)

    if @user.persisted?
      flash[:notice] = "Welcome to the contacts App! You have successfully logged in with Twitter!"
      sign_in_and_redirect @user, :event => :authentication
    else
      session["devise.twitter_data"] = request.env['omniauth.auth'].except("extra")
      redirect_to new_user_registration_path
    end
  end
end